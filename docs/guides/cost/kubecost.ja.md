# Kubecost を使用したコストの可視化とリソースの適切なサイズ設定
Kubecost は、Kubernetes 環境での支出とリソース効率の可視化を顧客に提供します。
高レベルでは、Amazon EKS のコストモニタリングは Kubecost とともにデプロイされます。これには、オープンソースのモニタリングシステムである Prometheus と時系列データベースが含まれます。
Kubecost は Prometheus からメトリクスを読み取り、コスト割り当ての計算を実行し、メトリクスを Prometheus に書き戻します。
最後に、Kubecost フロントエンドが Prometheus からメトリクスを読み取り、Kubecost ユーザーインターフェイス (UI) に表示します。
アーキテクチャは次の図によって示されます。

![Architecture](../../images/kubecost-architecture.png)

## Kubecost を使用する理由

お客様がアプリケーションを最新化し、Amazon EKS を使用してワークロードをデプロイするにつれて、アプリケーションを実行するために必要なコンピューティングリソースを統合することで効率性が向上します。ただし、この利用効率の向上は、アプリケーションコストの測定が困難になるというトレードオフが伴います。今日、テナントごとにコストを分散するために、次の方法のいずれかを使用できます。

* ハードマルチテナンシー - 専用の AWS アカウントで個別の EKS クラスターを実行します。
* ソフトマルチテナンシー - 共有 EKS クラスターで複数のノードグループを実行します。 
* 消費ベースの課金 - 共有 EKS クラスターで発生したコストをリソース消費量で計算します。

ハードマルチテナンシーの場合、ワークロードは個別の EKS クラスターにデプロイされ、クラスターとその依存関係にかかるコストを、各テナントの支出を判断するレポートを実行することなく識別できます。
ソフトマルチテナンシーの場合、[Node Selectors](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector) や [Node Affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity) などの Kubernetes 機能を使用して、Kubernetes スケジューラーにテナントのワークロードを専用のノードグループで実行するように指示できます。ノードグループの EC2 インスタンスに識別子(製品名やチーム名など)でタグ付けし、[タグ](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) を使用してコストを分散できます。

上記2つのアプローチの欠点は、未使用の容量が発生する可能性があり、密集したクラスターを実行するときに得られるコスト削減のメリットを十分に活用できないことです。Elastic Load Balancing やネットワーク転送料金などの共有リソースのコストを割り当てる方法がまだ必要です。

マルチテナント Kubernetes クラスターでコストを追跡する最も効率的な方法は、ワークロードによって消費されたリソース量に基づいて発生したコストを分散することです。このパターンにより、異なるワークロードがノードを共有できるため、ノードの pod 密度を高めることができ、EC2 インスタンスの利用率を最大化できます。ただし、ワークロードまたは名前空間ごとにコストを計算することは困難な作業です。ワークロードのコスト責任を理解するには、特定の期間中に消費または予約されたすべてのリソースを集計し、リソースのコストと使用期間に基づいて料金を評価する必要があります。これは、Kubecost が対処することを専門としている正確な課題です。


!!! tip
    Kubecost のハンズオン体験のために、[One Observability ワークショップ](https://catalog.workshops.aws/observability/ja/aws-managed-oss/amp/ingest-kubecost-metrics) をご覧ください。

## おすすめ

### コスト割り当て
Kubecost のコスト割り当てダッシュボードを使用すると、ネイティブの Kubernetes の概念(名前空間、k8s ラベル、サービスなど)全体で割り当てられた支出と最適化の機会をすばやく確認できます。また、チーム、製品/プロジェクト、部門、環境などの組織的概念にコストを割り当てることもできます。日付の範囲やフィルターを変更して、特定のワークロードに関する洞察を得たり、レポートを保存したりできます。Kubernetes のコストを最適化するには、効率とクラスタのアイドルコストに注意を払う必要があります。

![Allocations](../../images/allocations.png)

### 効率性

Pod のリソース効率性は、特定の時間ウィンドウにおけるリソース利用率とリソース要求の比率として定義されます。これはコスト重み付けされており、次のように表すことができます。

```
(((CPU Usage / CPU Requested) * CPU Cost) + ((RAM Usage / RAM Requested) * RAM Cost)) / (RAM Cost + CPU Cost)
```

ここで、CPU 使用量 = 時間ウィンドウにおける rate(container_cpu_usage_seconds_total)
RAM 使用量 = 時間ウィンドウにおける avg(container_memory_working_set_bytes)

AWS では明示的な RAM、CPU、GPU の価格が提供されていないため、Kubecost モデルは入力された基本的な CPU、GPU、RAM 価格の比率にフォールバックします。これらのパラメータのデフォルト値は、クラウドプロバイダの限界リソースレートに基づいていますが、Kubecost 内でカスタマイズできます。これらの基本的なリソース(RAM/CPU/GPU)価格は、プロバイダーの課金レートに基づいてプロビジョニングされたノードの全価格の合計が等しくなるように正規化されます。

最大限の効率性を追求し、ワークロードを微調整して目標を達成することは、各サービスチームの責任です。

### アイドルコスト
クラスタのアイドルコストは、割り当てられたリソースのコストと、それらが実行されているハードウェアのコストの差分として定義されます。割り当ては、使用量とリクエストの最大値として定義されます。次のようにも表すことができます。

```
idle_cost = sum(node_cost) - (cpu_allocation_cost + ram_allocation_cost + gpu_allocation_cost)
```
ここで、割り当て = max(リクエスト、使用量)

したがって、アイドルコストは、既存のワークロードを中断することなく Kubernetes スケジューラがポッドをスケジュールできるスペースのコストとしても考えることができますが、現在はそうなっていません。ワークロードやクラスタ、ノード単位で分散させるように設定できます。

### ネットワークコスト

Kubecost はベストエフォートで、これらのコストを発生させているワークロードにネットワーク転送コストを割り当てます。
ネットワークコストを正確に判断するには、[AWS Cloud Integration](https://docs.kubecost.com/install-and-configure/install/cloud-integration/aws-cloud-integrations) と [Network costs daemonset](https://docs.kubecost.com/install-and-configure/advanced-configuration/network-costs-configuration) の組み合わせを使用します。

効率スコアとアイドルコストを考慮に入れ、クラスターの完全なポテンシャルを利用することを確認するために、ワークロードを微調整する必要があります。これが次のトピック、クラスターの右サイジングにつながります。

### ワークロードの最適化

Kubecost は、Kubernetes ネイティブのメトリクスに基づいて、ワークロードの最適化の推奨を提供します。kubecost UI の savings パネルは、最適化を始めるのに適しています。

![Savings](../../images/savings.png)

![Right-sizing](../../images/right-sizing.png)

Kubecost は以下の最適化の推奨を行います:

* コンテナリクエストの過剰プロビジョニングと不足プロビジョニングの両方を確認し、コンテナリクエストの最適化
* 未使用の容量に対する過剰支出を停止するために、ノードの数とサイズを調整
* 有意なトラフィックの送受信を行っていない Pod のスケールダウン、削除/リサイズ
* スポットノードに適したワークロードの特定
* Pod によって使用されていないボリュームの特定

また、Kubecost には Cluster Controller コンポーネントを有効にするとコンテナリソースリクエストを自動的に最適化できるプレリリース機能もあります。自動リクエスト最適化を使用すると、複雑な YAML のテストや kubectl コマンドの実行なしに、クラスタ全体のリソース割り当てを即座に最適化できます。クラスタのリソースの過剰割り当てを簡単に排除できるため、クラスタの最適化とその他の最適化による大幅なコスト削減の道が開かれます。

### Kubecost と Amazon Managed Service for Prometheus の統合

Kubecost は、時系列データベースとしてオープンソースの Prometheus プロジェクトを利用し、Prometheus のデータを後処理してコスト割り当て計算を実行します。 クラスタのサイズとワークロードのスケールによっては、Prometheus サーバがメトリクスをスクレイプおよび保存することが困難になる場合があります。 このような場合は、メトリクスを信頼できる方法で保存し、Kubernetes のコストをスケールで簡単に監視できるようにする、Prometheus 互換のマネージド監視サービスである Amazon Managed Service for Prometheus を使用できます。

[Kubecost サービスアカウントの IAM ロールを設定](https://docs.aws.amazon.com/ja_jp/eks/latest/userguide/iam-roles-for-service-accounts.html)する必要があります。 クラスタの OIDC プロバイダを使用して、クラスタのサービスアカウントに IAM アクセス許可を付与します。 kubecost-cost-analyzer および kubecost-prometheus-server のサービスアカウントに適切なアクセス許可を付与する必要があります。 これらは、ワークスペースからメトリクスを送受信するために使用されます。 コマンドラインで次のコマンドを実行します:

```
eksctl create iamserviceaccount \ 
--name kubecost-cost-analyzer \ 
--namespace kubecost \ 
--cluster <CLUSTER_NAME> \
--region <REGION> \ 
--attach-policy-arn arn:aws:iam::aws:policy/AmazonPrometheusQueryAccess \ 
--attach-policy-arn arn:aws:iam::aws:policy/AmazonPrometheusRemoteWriteAccess \ 
--override-existing-serviceaccounts \ 
--approve 

eksctl create iamserviceaccount \ 
--name kubecost-prometheus-server \ 
--namespace kubecost \ 
--cluster <CLUSTER_NAME> --region <REGION> \ 
--attach-policy-arn arn:aws:iam::aws:policy/AmazonPrometheusQueryAccess \ 
--attach-policy-arn arn:aws:iam::aws:policy/AmazonPrometheusRemoteWriteAccess \ 
--override-existing-serviceaccounts \ 
--approve

```

`CLUSTER_NAME` は Kubecost をインストールする Amazon EKS クラスタの名前で、<region> は Amazon EKS クラスタのリージョンです。

完了したら、次のように Kubecost helm チャートをアップグレードする必要があります:

```
helm upgrade -i kubecost \
oci://public.ecr.aws/kubecost/cost-analyzer --version <$VERSION> \
--namespace kubecost --create-namespace \
-f https://tinyurl.com/kubecost-amazon-eks \
-f https://tinyurl.com/kubecost-amp \
--set global.amp.prometheusServerEndpoint=${QUERYURL} \
--set global.amp.remoteWriteService=${REMOTEWRITEURL}
```

</region></region></cluster_name></region></cluster_name>

### Kubecost UI へのアクセス

Kubecost は、kubectl port-forward、Ingress、または Load Balancer を介してアクセスできる Web ダッシュボードを提供します。Kubecost のエンタープライズ版では、[SSO/SAML](http://docs.kubecost.com/user-management.html) を使用したダッシュボードへのアクセス制限や、異なるアクセスレベルの提供もサポートしています。たとえば、チームの表示をそのチームが担当する製品に限定する、といったことができます。

AWS 環境では、[AWS Load Balancer Controller](https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html) を使用して Kubecost を公開し、認証、認可、ユーザー管理には [Amazon Cognito](https://aws.amazon.com/cognito/) を使用することを検討してください。こちらの[How to use Application Load Balancer and Amazon Cognito to authenticate users for your Kubernetes web apps](https://aws.amazon.com/blogs/containers/how-to-use-application-load-balancer-and-amazon-cognito-to-authenticate-users-for-your-kubernetes-web-apps/) で詳細を学ぶことができます。

### マルチクラスタービュー

FinOps チームは、ビジネスオーナーとの推奨事項を共有するために EKS クラスターをレビューしたいと考えています。大規模に運用する場合、各クラスタにログインして推奨事項を表示することが困難になります。マルチクラスターを使用すると、グローバルに集計されたすべてのクラスターコストを一括して表示できます。Kubecost がサポートしているマルチクラスター環境には、Kubecost Free、Kubecost Business、Kubecost Enterprise の 3 つのオプションがあります。Free モードと Business モードでは、クラウド課金の照合は各クラスターレベルで実行されます。Enterprise モードでは、Kubecost UI を提供し、メトリクスが保存されている共有バケットを使用するプライマリークラスターでクラウド課金の照合が実行されます。
メトリクスの保持が無制限になるのは、Enterprise モードを使用している場合のみであることに注意してください。

### 参考文献
* [One Observability ワークショップでの Kubecost のハンズオン体験](https://catalog.workshops.aws/observability/ja-JP/aws-managed-oss/amp/ingest-kubecost-metrics)
* [ブログ - Kubecost と Amazon Managed Service for Prometheus の統合](https://aws.amazon.com/blogs/mt/integrating-kubecost-with-amazon-managed-service-for-prometheus/)
