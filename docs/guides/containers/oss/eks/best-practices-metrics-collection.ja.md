# EKS のオブザーバビリティ: 必須メトリクス

# 現在の状況

モニタリングとは、インフラストラクチャやアプリケーションの所有者が、収集されたメトリクスやログに基づいて、システムの過去と現在の状態を見て理解できるソリューションのことを指します。

モニタリングは年々進化してきました。当初はデバッグやトラブルシューティングのためにデバッグログやダンプログを利用していましたが、次第に syslogs、top などのコマンドラインツールを使用した基本的なモニタリングへと移行し、ダッシュボード上で視覚化できるようになりました。クラウドの登場とスケールの拡大に伴い、今日ではこれまで以上に多くのものを追跡しています。業界はよりオブザーバビリティに移行しており、これはインフラストラクチャやアプリケーションの所有者がシステムを能動的にトラブルシューティングおよびデバッグできるソリューションを指します。オブザーバビリティは、メトリクスから導出されたパターンをより重視しています。


# メトリクスとはなぜ重要なのか

メトリクスとは、作成された時間とともに順序付けて保持される数値の系列です。これらは、環境内のサーバー数、ディスク使用量、1 秒あたりのリクエスト処理数、リクエスト完了にかかるレイテンシなど、あらゆるものを追跡するために使用されます。メトリクスは、システムのパフォーマンスを示すデータです。小規模であれ大規模であれ、システムの正常性とパフォーマンスに関する洞察を取得することで、改善の余地を特定したり、トラブルシューティングと問題の追跡を行ったり、ワークロードのパフォーマンスと効率を全体として向上させたりすることができます。これらの変更は、クラスターに費やす時間とリソースに影響を与え、直接コストにつながります。


# メトリクスの収集

EKS クラスターからのメトリクス収集は、[3 つのコンポーネント](https://aws-observability.github.io/observability-best-practices/recipes/telemetry/)で構成されます。

1. ソース: このガイドに記載されているものなど、メトリクスの発生源です。 
2. エージェント: EKS 環境で実行されるアプリケーションで、多くの場合エージェントと呼ばれます。これはメトリクスのモニタリングデータを収集し、2 番目のコンポーネントにプッシュします。このコンポーネントの例としては、[AWS Distro for OpenTelemetry(ADOT)](https://aws-otel.github.io/) と [CloudWatch エージェント](https://aws-observability.github.io/observability-best-practices/tools/cloudwatch_agent/) があります。
3. デスティネーション: モニタリングデータの保存と分析ソリューションです。このコンポーネントは通常、[時系列形式のデータ](https://aws-observability.github.io/observability-best-practices/signals/metrics/)に最適化されたデータサービスです。このコンポーネントの例としては、[Amazon Managed Service for Prometheus](https://aws.amazon.com/prometheus/) と [AWS CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/deploy-container-insights-EKS.html) があります。

注:このセクションの構成例は、[AWS Observability Accelerator](https://aws-observability.github.io/terraform-aws-observability-accelerator/) の関連セクションへのリンクです。これは、EKS メトリクス収集の実装に関する最新のガイダンスと例を確実に入手できるようにするためです。

## マネージドオープンソースソリューション

[AWS Distro for OpenTelemetry(ADOT)](https://aws-otel.github.io/) は、[OpenTelemetry](https://opentelemetry.io/) プロジェクトのサポートされたバージョンであり、ユーザーが [Amazon Managed Service for Prometheus](https://aws.amazon.com/prometheus/) や [AWS CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/deploy-container-insights-EKS.html) などの様々なモニタリングデータ収集ソリューションに相関メトリクスとトレースを送信できるようにします。ADOT は [EKS マネージドアドオン](https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html) を介して EKS クラスタにインストールでき、このページにリストされているメトリクス(やワークロードトレース)を収集するように構成できます。AWS は、ADOT アドオンが Amazon EKS と互換性があることを検証しており、最新のバグ修正とセキュリティパッチが定期的に適用されます。 [ADOT のベストプラクティスと詳細情報。](http://guides/operational/adot-at-scale/operating-adot-collector.md)

## ADOT + AMP

AWS Distro for OpenTelemetry(ADOT)、Amazon Managed Service for Prometheus(AMP)、Amazon Managed Grafana(AMG)をすぐに利用し始めるには、AWS Observability Accelerator の [インフラストラクチャ監視の例](https://aws-observability.github.io/terraform-aws-observability-accelerator/eks/) を利用するのが最も迅速な方法です。アクセラレータの例では、あらかじめ設定されたメトリクス収集、アラートルール、Grafana ダッシュボードを使用して、ツールとサービスを環境にデプロイします。

ADOT の EKS マネージドアドオンのインストール、構成、運用の詳細については、AWS ドキュメントを参照してください。

### ソース

EKS のメトリクスは、全体的なソリューションの異なるレイヤーで複数の場所から作成されます。これは、必須のメトリクスのセクションで言及されているメトリクスソースを要約した表です。


|レイヤー |ソース |ツール |インストールと詳細情報 |Helm チャート |
|--- |--- |--- |--- |--- |
|コントロールプレーン |*api サーバーエンドポイント*/メトリクス |N/A - api サーバーはプロメテウス形式で直接メトリクスを公開 |https://docs.aws.amazon.com/ja_jp/eks/latest/userguide/prometheus.html |N/A |
|クラスター状態 |*kube-state-metrics-http-endpoint*:8080/メトリクス |kube-state-metrics |https://github.com/kubernetes/kube-state-metrics#overview |https://github.com/kubernetes/kube-state-metrics#helm-chart |
|Kube プロキシ |*kube-proxy-http*:10249/メトリクス |N/A - kube プロキシはプロメテウス形式で直接メトリクスを公開 |https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/ |N/A |  
|VPC CNI |*vpc-cni-metrics-helper*/メトリクス |cni-metrics-helper |https://github.com/aws/amazon-vpc-cni-k8s/blob/master/cmd/cni-metrics-helper/README.md |https://github.com/aws/amazon-vpc-cni-k8s/tree/master/charts/cni-metrics-helper |
|Core DNS |*core-dns*:9153/メトリクス |N/A - core DNS はプロメテウス形式で直接メトリクスを公開 |https://github.com/coredns/coredns/tree/master/plugin/metrics |N/A |
|ノード |*prom-node-exporter-http*:9100/メトリクス |prom-node-exporter |https://github.com/prometheus/node_exporter
https://prometheus.io/docs/guides/node-exporter/#node-exporter-metrics |https://github.com/prometheus-community/helm-charts/tree/main/charts/prometheus-node-exporter |
|Kubelet/Pod |*kubelet*/メトリクス/cadvisor |kubelet または api サーバーを介してプロキシ |https://kubernetes.io/docs/concepts/cluster-administration/system-metrics/ |N/A |

### エージェント: AWS Distro for OpenTelemetry

AWS は、EKS クラスター上での ADOT のインストール、構成、運用を AWS EKS ADOT マネージドアドオンを通じて推奨しています。 このアドオンは、クラスター上に複数の ADOT コレクターをデプロイ、構成、管理できる ADOT オペレーター/コレクターのカスタムリソースモデルを利用しています。 このアドオンのインストール、高度な構成、運用の詳細については、この[ドキュメント](https://aws-otel.github.io/docs/getting-started/adot-eks-add-on)をご覧ください。

注: AWS EKS ADOT マネージドアドオンのウェブコンソールを使用して、[ADOT アドオンの高度な構成](https://docs.aws.amazon.com/eks/latest/userguide/deploy-collector-advanced-configuration.html)を行うことができます。

ADOT コレクターの構成には 2 つのコンポーネントがあります。

1. コレクターのデプロイメントモード(デプロイメント、デーモンセットなど)を含む[コレクター構成](https://github.com/aws-observability/aws-otel-community/blob/master/sample-configs/operator/collector-config-amp.yaml)
2. メトリクス収集に必要なレシーバー、プロセッサー、エクスポーターを含む [OpenTelemetry パイプライン構成](https://opentelemetry.io/docs/collector/configuration/)。構成スニペットの例:

```
config: |
    extensions:
      sigv4auth:
        region: <YOUR_AWS_REGION>
        service: "aps"

    receivers:
      #
      # Scrape configuration for the Prometheus Receiver
      # This is the same configuration used when Prometheus is installed using the community Helm chart
      #     
      prometheus:
        config:
          global:
            scrape_interval: 60s
            scrape_timeout: 10s

          scrape_configs:
          - job_name: kubernetes-apiservers
            bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
            kubernetes_sd_configs:
            - role: endpoints
            relabel_configs:
            - action: keep
              regex: default;kubernetes;https
              source_labels:
              - __meta_kubernetes_namespace
              - __meta_kubernetes_service_name
              - __meta_kubernetes_endpoint_port_name
            scheme: https
            tls_config:
              ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
              insecure_skip_verify: true
              
              ...
              ...
              
    exporters:
      prometheusremotewrite:
        endpoint: <YOUR AMP WRITE ENDPOINT URL>
        auth:
          authenticator: sigv4auth
      logging:
        loglevel: warn
    extensions:
      sigv4auth:
        region: <YOUR_AWS_REGION>
        service: aps
      health_check:
      pprof:
        endpoint: :1888
      zpages:
        endpoint: :55679
    processors:
      batch/metrics:
        timeout: 30s
        send_batch_size: 500
    service:
      extensions: [pprof, zpages, health_check, sigv4auth]
      pipelines:
        metrics:
          receivers: [prometheus]
          processors: [batch/metrics]
          exporters: [logging, prometheusremotewrite]
```

ベストプラクティスのコレクター構成、ADOT パイプライン構成、Prometheus スクレイプ構成の完全な例は、[Observability Accelerator の Helm チャートとしてこちらにあります](https://github.com/aws-observability/terraform-aws-observability-accelerator/blob/main/modules/eks-monitoring/otel-config/templates/opentelemetrycollector.yaml)。

</your_aws_region></your></your_aws_region>

### 送信先: Amazon Managed Service for Prometheus

ADOT コレクターパイプラインは、Prometheus Remote Write 機能を利用して、メトリクスを AMP インスタンスにエクスポートします。構成スニペットの例を次に示します。AMP WRITE ENDPOINT URL に注意してください。

```
    exporters:
      prometheusremotewrite:
        endpoint: <YOUR AMP WRITE ENDPOINT URL>
        auth:
          authenticator: sigv4auth
      logging:
        loglevel: warn
```

完全なベストプラクティスのコレクター構成、ADOT パイプライン構成、Prometheus スクレイプ構成は、[Observability Accelerator の Helm チャートとしてこちらで見つけることができます](https://github.com/aws-observability/terraform-aws-observability-accelerator/blob/main/modules/eks-monitoring/otel-config/templates/opentelemetrycollector.yaml)。

AMP 構成と使用法のベストプラクティスは[こちら](https://aws-observability.github.io/observability-best-practices/recipes/amp/)にあります。

# 関連するメトリクスとは?

利用可能なメトリクスがほとんどない日々は過ぎ去り、今日では逆に、数百ものメトリクスが利用可能です。 インフラストラクチャとアプリケーションにオブザーバビリティを組み込むにあたり、どのメトリクスに焦点を当てるべきかを判断できることが重要です。

このガイドでは、利用可能なメトリクスの異なるグループを概説し、ベストプラクティスに基づいて監視することをおすすめするメトリクスを説明します。 以下のセクションにリストされているメトリクスは、[AWS Observability Accelerator Grafana ダッシュボード](https://github.com/aws-observability/terraform-aws-observability-accelerator/tree/main/modules/eks-monitoring/dashboards)と[Kube Prometheus Stack ダッシュボード](https://monitoring.mixins.dev/)で強調表示されているメトリクスに追加されるものです。

</your>

## コントロールプレーンメトリクス

Amazon EKS のコントロールプレーンは、AWS によって管理されており、AWS が管理するアカウントで実行されます。etcd や Kubernetes API サーバなどの Kubernetes コンポーネントを実行するコントロールプレーンノードで構成されます。Kubernetes は、Pod の起動と停止、デプロイメント、名前空間など、クラスター内のアクティビティについてユーザーに通知するために、さまざまなイベントを公開しています。Amazon EKS のコントロールプレーンは、コアコンポーネントが適切に機能し、クラスターが必要とする基本的なアクティビティを実行できるようにするために追跡する必要がある重要なコンポーネントです。

コントロールプレーン API サーバは、数千ものメトリクスを公開しています。以下の表は、監視することをおすすめする基本的なコントロールプレーンメトリクスを示しています。

|名前 |メトリクス |説明 |理由 |
|--- |--- |--- |--- |
|API サーバの全リクエスト数 |apiserver_request_total |動詞、ドライラン値、グループ、バージョン、リソース、スコープ、コンポーネント、HTTP レスポンスコードごとに分割された apiserver リクエストのカウンター。 | |
|API サーバのレイテンシ |apiserver_request_duration_seconds |動詞、ドライラン値、グループ、バージョン、リソース、サブリソース、スコープ、コンポーネントごとの秒単位のレスポンスレイテンシ分布。 | |  
|リクエストレイテンシ |rest_client_request_duration_seconds |動詞と URL で分割された秒単位のリクエストレイテンシ。 | |
|リクエスト総数 |rest_client_requests_total |ステータスコード、メソッド、ホストでパーティション化された HTTP リクエストの数。 | |
|API サーバのリクエスト期間 |apiserver_request_duration_seconds_bucket |Kubernetes API サーバにリクエストを処理するのにかかった時間を秒単位で測定 | |
|API サーバのリクエストレイテンシの合計 |apiserver_request_latencies_sum |K8 API サーバがリクエストを処理するのにかかった総時間を追跡する累積カウンタ | |
|API サーバの登録されたウォッチャー |apiserver_registered_watchers |特定のリソースの現在登録されているウォッチャーの数 | |
|API サーバのオブジェクト数 |apiserver_storage_object |最後のチェック時の種類ごとに分割された格納されたオブジェクトの数。 | |  
|アドミッションコントローラのレイテンシ |apiserver_admission_controller_admission_duration_seconds |名前ごとのアドミッションコントローラのレイテンシヒストグラム(秒)。操作、API リソース、タイプ(検証または許可)ごとに分割。 | |
|Etcd のレイテンシ |etcd_request_duration_seconds |操作とオブジェクトタイプごとの秒単位の etcd リクエストレイテンシ。 | |
|Etcd DB サイズ |etcd_db_total_size_in_bytes |Etcd データベースのサイズ。 |これにより、etcd データベースの使用状況を事前に監視し、制限を超えるのを回避できます。 |

## クラスター状態のメトリクス

Kubernetes API サーバーを通じたクラスター状態のメトリクスは、クラスターの状態とクラスター内の Kubernetes オブジェクトの洞察を提供します。 これらのメトリクスは、Kubernetes が効果的なポッドスケジューリングを行うために使用されており、デプロイメント、レプリカセット、ノード、ポッドなど、内部のさまざまなオブジェクトの健全性に焦点が当てられています。 クラスター状態のメトリクスは、ステータス、容量、可用性に関するポッド情報を公開します。 クラスターのスケジューリングタスクのパフォーマンスを追跡し、パフォーマンスを把握し、問題に先立って対処し、クラスターの健全性を監視することが不可欠です。 公開されているクラスター状態のメトリクスは約 X 個あり、以下の表は追跡すべき主要なメトリクスをリストしています。

|名前 |メトリクス |説明 |
|--- |--- |--- |
|ノードステータス |kube_node_status_condition |ノードの現在の健全性ステータス。 ノード条件のセットと、条件ごとに `true`、`false`、`unknown` を返します |
|必要なポッド数 |kube_deployment_spec_replicas または kube_daemonset_status_desired_number_scheduled |デプロイメントまたはデーモンセットに指定されたポッド数 |  
|現在のポッド数 |kube_deployment_status_replicas または kube_daemonset_status_current_number_scheduled |デプロイメントまたはデーモンセットで現在実行されているポッド数 |
|ポッド容量 |kube_node_status_capacity_pods |ノードで許可されている最大ポッド数 |
|利用可能なポッド数 |kube_deployment_status_replicas_available または kube_daemonset_status_number_available |デプロイメントまたはデーモンセットで現在利用可能なポッド数 |
|利用不可のポッド数 |kube_deployment_status_replicas_unavailable または kube_daemonset_status_number_unavailable |デプロイメントまたはデーモンセットで現在利用できないポッド数 |  
|ポッドの準備状態 |kube_pod_status_ready |ポッドがクライアントリクエストに対応できる準備ができているかどうか |
|ポッドのステータス |kube_pod_status_phase |ポッドの現在のステータス。値は pending/running/succeeded/failed/unknown のいずれか |
|ポッドの待機理由 |kube_pod_container_status_waiting_reason |コンテナが待機状態にある理由 |
|ポッドの終了ステータス |kube_pod_container_status_terminated |コンテナが現在終了状態かどうか |
|スケジューリング待ちのポッド数 |pending_pods |ノード割り当てを待っているポッド数 |  
|ポッドスケジューリングの試行回数 |pod_scheduling_attempts |ポッドをスケジュールするための試行回数 |

## クラスター追加機能のメトリクス

クラスター追加機能は、Kubernetes アプリケーションに運用上の機能を提供するソフトウェアです。これには、オブザーバビリティエージェントや、ネットワーク、コンピューティング、ストレージの基盤となる AWS リソースと対話できるようにする Kubernetes ドライバなどのソフトウェアが含まれます。追加機能ソフトウェアは、通常、Kubernetes コミュニティ、AWS のようなクラウドプロバイダー、サードパーティベンダーによって構築およびメンテナンスされています。Amazon EKS は、Amazon VPC CNI プラグイン for Kubernetes、`kube-proxy`、CoreDNS などのセルフマネージドアドオンをすべてのクラスターに自動的にインストールします。

これらのクラスター追加機能は、ネットワーキング、ドメイン名解決など、さまざまな領域で運用上のサポートを提供します。重要なサポートインフラストラクチャとコンポーネントの動作状況の洞察を提供します。追加機能のメトリクスを追跡することは、クラスターの運用状態を理解する上で重要です。

以下は、監視する必要がある主要な追加機能と、その主要なメトリクスを示しています。

## Amazon VPC CNI プラグイン

Amazon EKS は、Amazon VPC コンテナネットワークインターフェイス(VPC CNI)プラグインを介してクラスターネットワーキングを実装しています。CNI プラグインにより、Kubernetes Pod が VPC ネットワーク上と同じ IP アドレスを取得できます。より具体的には、Pod 内のすべてのコンテナはネットワーク名前空間を共有し、ローカルポートを使用して相互に通信できます。VPC CNI アドオンを使用すると、Amazon EKS クラスターのセキュリティと安定性を継続的に確保し、アドオンのインストール、構成、更新に必要な作業量を減らすことができます。

VPC CNI アドオンのメトリクスは、CNI メトリクスヘルパーによって公開されます。IP アドレスの割り当てを監視することは、健全なクラスターを確保し、IP 枯渇の問題を回避する上で基本的です。[こちらは最新のネットワーキングのベストプラクティスと収集および監視する必要がある VPC CNI メトリクスです](https://aws.github.io/aws-eks-best-practices/networking/vpc-cni/#monitor-ip-address-inventory)。

## CoreDNS メトリクス

CoreDNS は柔軟で拡張性のある DNS サーバーで、Kubernetes クラスターの DNS として機能できます。CoreDNS Pod は、クラスター内のすべての Pod の名前解決を提供します。DNS 集中型のワークロードを実行すると、DNS スロットリングのために CoreDNS の障害が断続的に発生することがあり、これがアプリケーションに影響を与える可能性があります。

[こちら](https://aws.github.io/aws-eks-best-practices/reliability/docs/dataplane/#monitor-coredns-metrics) から主要な [CoreDNS パフォーマンス メトリクスを追跡するための最新のベスト プラクティス] と [DNS スロットリングの問題のための CoreDNS トラフィックの監視](https://aws.github.io/aws-eks-best-practices/networking/monitoring/) を確認してください。

## Pod/コンテナーメトリクス

アプリケーションのすべてのレイヤーにわたる使用状況を追跡することが重要です。これには、クラスター内で実行されているノードとポッドのより詳細な調査が含まれます。 ポッド次元で利用できるすべてのメトリクスの中で、このメトリクスのリストは、クラスター上で実行されているワークロードの状態を理解するのに実際に役立ちます。 CPU、メモリ、ネットワークの使用状況を追跡することで、アプリケーション関連の問題の診断とトラブルシューティングが可能になります。 ワークロード メトリクスを追跡することで、EKS 上で実行されているワークロードの適切なサイズ変更のためのリソース利用状況の洞察が得られます。

|メトリクス	|PromQL クエリの例	|ディメンション	|
|---	|---	|---	|
|名前空間ごとの実行中の Pod 数	|count by(namespace) (kube_pod_info)	|クラスターごとの名前空間別	|
|Pod ごとのコンテナーごとの CPU 使用率	|sum(rate(container_cpu_usage_seconds_total{container!=""}[5m])) by (namespace, pod)	|クラスターごとの名前空間別 Pod 別	|
|Pod ごとのメモリ利用率	|sum(container_memory_usage_bytes{container!=""}) by (namespace, pod)	|クラスターごとの名前空間別 Pod 別	| 
|Pod ごとの受信ネットワーク バイト	|sum by(pod) (rate(container_network_receive_bytes_total[5m]))	|クラスターごとの名前空間別 Pod 別	|
|Pod ごとの送信ネットワーク バイト	|sum by(pod) (rate(container_network_transmit_bytes_total[5m]))	|クラスターごとの名前空間別 Pod 別	|
|コンテナーごとのコンテナー再起動数	|increase(kube_pod_container_status_restarts_total[15m]) > 3	|クラスターごとの名前空間別 Pod 別	|

## ノードメトリクス

Kube State Metrics と Prometheus ノードエクスポーターは、クラスター内のノードのメトリック統計を収集します。 ノードのステータス、CPU 使用率、メモリ、ファイルシステム、トラフィックを追跡することは、ノードの利用状況を理解する上で重要です。 ノードリソースがどのように利用されているかを理解することは、クラスターで実行することを期待しているワークロードの種類に効果的に対処するために、インスタンスタイプとストレージを適切に選択する上で重要です。 以下のメトリクスは、追跡する必要がある基本的なメトリクスの一部です。


|メトリクス	|PromQL クエリの例	|ディメンション	|
|---	|---	|---	|
|ノード CPU 使用率	|sum(rate(container_cpu_usage_seconds_total{container!=""}[5m])) by (node)	|クラスターごとのノード	|
|ノードメモリ使用率	|sum(container_memory_usage_bytes{container!=""}) by (node)	|クラスターごとのノード	|
|ノードネットワーク総バイト数	|sum by (instance) (rate(node_network_receive_bytes_total[3m]))+sum by (instance) (rate(node_network_transmit_bytes_total[3m]))	|クラスターごとのノード	|  
|ノード CPU 予約容量	|sum(kube_node_status_capacity{cluster!=""}) by (node)	|クラスターごとのノード	|
|ノードごとの実行中の Pod 数	|sum(kubelet_running_pods) by (instance)	|クラスターごとのノード	|
|ノードファイルシステムの使用状況	|rate(container_fs_reads_bytes_total{job="kubelet", device=~"mmcblk.p.+|.*nvme.+|rbd.+|sd.+|vd.+|xvd.+|dm-.+|dasd.+", container!="", cluster="", namespace!=""}[$__rate_interval]) + rate(container_fs_writes_bytes_total{job="kubelet", device=~"mmcblk.p.+|.*nvme.+|rbd.+|sd.+|vd.+|xvd.+|dm-.+|dasd.+", container!="", cluster="", namespace!=""}	|クラスターごとのノード	|
|クラスター CPU 使用率	|sum(rate(node_cpu_seconds_total{mode!="idle",mode!="iowait",mode!="steal"}[5m]))	|クラスターごと	|
|クラスターメモリ使用率	|1 - sum(:node_memory_MemAvailable_bytes:sum{cluster=""}) / sum(node_memory_MemTotal_bytes{job="node-exporter",cluster=""})	|クラスターごと	|  
|クラスターネットワーク総バイト数	|sum(rate(node_network_receive_bytes_total[3m]))+sum(rate(node_network_transmit_bytes_total[3m]))	|クラスターごと	|
|実行中の Pod 数	|sum(kubelet_running_pod_count{cluster=""})	|クラスターごと	|
|実行中のコンテナー数	|sum(kubelet_running_container_count{cluster=""})	|クラスターごと	|
|クラスター CPU 制限	|sum(kube_node_status_allocatable{resource="cpu"})	|クラスターごと	|  
|クラスターメモリ制限	|sum(kube_node_status_allocatable{resource="memory"})	|クラスターごと	|
|クラスターノード数	|count(kube_node_info) OR sum(kubelet_node_name{cluster=""})	|クラスターごと	|

# 追加リソース

## AWS サービス

[https://aws-otel.github.io/](https://aws-otel.github.io/)

[https://aws.amazon.com/prometheus](https://aws.amazon.com/prometheus)

[https://aws.amazon.com/cloudwatch/features/](https://aws.amazon.com/cloudwatch/features/)

## ブログ

[https://aws.amazon.com/blogs/containers/](https://aws.amazon.com/blogs/containers/)

[https://aws.amazon.com/blogs/containers/metrics-and-traces-collection-using-amazon-eks-add-ons-for-aws-distro-for-opentelemetry/](https://aws.amazon.com/blogs/containers/metrics-and-traces-collection-using-amazon-eks-add-ons-for-aws-distro-for-opentelemetry/)

[https://aws.amazon.com/blogs/containers/](https://aws.amazon.com/blogs/containers/)

[https://aws.amazon.com/blogs/containers/introducing-amazon-cloudwatch-container-insights-for-amazon-eks-fargate-using-aws-distro-for-opentelemetry/](https://aws.amazon.com/blogs/containers/introducing-amazon-cloudwatch-container-insights-for-amazon-eks-fargate-using-aws-distro-for-opentelemetry/)

## インフラストラクチャアズコードリソース

[https://github.com/aws-observability/terraform-aws-observability-accelerator](https://github.com/aws-observability/terraform-aws-observability-accelerator)

[https://github.com/aws-ia/terraform-aws-eks-blueprints](https://github.com/aws-ia/terraform-aws-eks-blueprints)
