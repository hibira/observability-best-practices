# Terraform を Infrastructure as Code として使用し、Amazon Managed Service for Prometheus をデプロイしてアラートマネージャーを設定する

このレシピでは、[Terraform](https://www.terraform.io/) を使用して [Amazon Managed Service for Prometheus](https://aws.amazon.com/prometheus/) をプロビジョニングし、ルール管理とアラートマネージャーを設定して、特定の条件が満たされた場合に [SNS](https://docs.aws.amazon.com/sns/) トピックに通知を送信する方法を示します。


!!! note
    このガイドの完了には約 30 分かかります。

## 前提条件

セットアップを完了するには、次のものが必要です。

* [Amazon EKS クラスター](https://docs.aws.amazon.com/ja_jp/eks/latest/userguide/create-cluster.html)
* [AWS CLI バージョン 2](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/install-cliv2.html)
* [Terraform CLI](https://www.terraform.io/downloads)
* [AWS Distro for OpenTelemetry(ADOT)](https://aws-otel.github.io/)
* [eksctl](https://eksctl.io/)
* [kubectl](https://docs.aws.amazon.com/ja_jp/eks/latest/userguide/install-kubectl.html)
* [jq](https://stedolan.github.io/jq/download/)
* [helm](https://helm.sh/)
* [SNS トピック](https://docs.aws.amazon.com/ja_jp/sns/latest/dg/sns-create-topic.html)
* [awscurl](https://github.com/okigan/awscurl)

このレシピでは、サンプルアプリケーションを使用して、ADOT を使用したメトリック スクレイピングと Amazon Managed Service for Prometheus ワークスペースへのリモートライトをデモンストレーションします。 サンプルアプリを [aws-otel-community](https://github.com/aws-observability/aws-otel-community) リポジトリからフォークしてクローンしてください。

この Prometheus サンプルアプリは、すべての 4 つの Prometheus メトリックタイプ(カウンター、ゲージ、ヒストグラム、サマリー)を生成し、/metrics エンドポイントで公開します。

ヘルスチェックエンドポイントも / に存在します。

以下は、構成のためのオプションのコマンドラインフラグのリストです。

listen_address: (デフォルト = 0.0.0.0:8080) サンプルアプリが公開されるアドレスとポートを定義します。これは主にテストフレームワークの要件に準拠するためです。

metric_count: (デフォルト=1) 生成する各タイプのメトリックの量。メトリックタイプごとに常に同じ量のメトリックが生成されます。

label_count: (デフォルト=1) メトリックごとに生成するラベルの量。


datapoint_count: (デフォルト=1) メトリックごとに生成するデータポイントの数。

### AWS Distro for OpenTelemetry を使用したメトリクス収集の有効化
1. aws-otel-community のリポジトリからサンプルアプリをフォークしてクローンします。
その後、次のコマンドを実行します。

```
cd ./sample-apps/prometheus
docker build . -t prometheus-sample-app:latest
```
2. このイメージを Amazon ECR などのレジストリにプッシュします。次のコマンドを使用して、アカウントに新しい ECR リポジトリを作成できます。<your_region> も設定してください。

```
aws ecr create-repository \
    --repository-name prometheus-sample-app \
    --image-scanning-configuration scanOnPush=true \
    --region <YOUR_REGION>
```
3. この Kubernetes の構成をコピーして適用することで、クラスター内にサンプルアプリをデプロイします。 prometheus-sample-app.yaml ファイルの `PUBLIC_SAMPLE_APP_IMAGE` を置き換えて、プッシュしたイメージをイメージに変更します。

```
curl https://raw.githubusercontent.com/aws-observability/aws-otel-collector/main/examples/eks/aws-prometheus/prometheus-sample-app.yaml -o prometheus-sample-app.yaml
kubectl apply -f prometheus-sample-app.yaml
```
4. ADOT Collector のデフォルトインスタンスを起動します。次のコマンドを入力して、ADOT Collector の Kubernetes 構成をプルします。

```
curl https://raw.githubusercontent.com/aws-observability/aws-otel-collector/main/examples/eks/aws-prometheus/prometheus-daemonset.yaml -o prometheus-daemonset.yaml
```
次に、テンプレートファイルを編集し、Amazon Managed Service for Prometheus ワークスペースの remote_write エンドポイントを `YOUR_ENDPOINT` に、リージョンを `YOUR_REGION` に置き換えます。
Amazon Managed Service for Prometheus コンソールでワークスペースの詳細を表示したときに表示される remote_write エンドポイントを使用します。
Kubernetes 構成のサービスアカウントセクションの `YOUR_ACCOUNT_ID` も AWS アカウント ID に変更する必要があります。

このレシピでは、ADOT Collector 構成はアノテーション `(scrape = true)` を使用して、どのターゲットエンドポイントをスクレイプするかを指示します。これにより、ADOT Collector はクラスター内の kube-system エンドポイントとサンプルアプリエンドポイントを区別できます。 別のサンプルアプリをスクレイプしたい場合は、これを再ラベル構成から削除できます。
5. 次のコマンドを入力して、ADOT コレクターをデプロイします。
```
kubectl apply -f eks-prometheus-daemonset.yaml
```

</your_region></your_region>

### Terraform でワークスペースを設定する

ここで、Amazon Managed Service for Prometheus ワークスペースをプロビジョニングし、Alert Manager が特定の条件(```expr```で定義)が特定の期間(```for```)満たされた場合に通知を送信するようにアラートルールを定義します。Terraform 言語のコードは、.tf 拡張子のプレーンテキストファイルに保存されます。.tf.json ファイル拡張子を持つ JSON ベースのバリアントもあります。

ここで、[main.tf](./amp-alertmanager-terraform/main.tf) を使用して、Terraform を使用してリソースをデプロイします。Terraform コマンドを実行する前に、`region` と `sns_topic` 変数をエクスポートします。

```
export TF_VAR_region=<your region>
export TF_VAR_sns_topic=<ARN of the SNS topic used by the SNS receiver>
```

次に、以下のコマンドを実行してワークスペースをプロビジョニングします:

```
terraform init
terraform plan
terraform apply
```

上記の手順が完了したら、awscurl を使用してエンドツーエンドの設定を検証し、エンドポイントをクエリします。適切な Amazon Managed Service for Prometheus ワークスペース ID に `WORKSPACE_ID` 変数が置き換えられていることを確認してください。

次のコマンドを実行すると、メトリック「metric:recording_rule」が表示されます。このメトリックが正常に見つかった場合、記録ルールの作成に成功したことになります: 

```
awscurl https://aps-workspaces.us-east-1.amazonaws.com/workspaces/$WORKSPACE_ID/api/v1/rules  --service="aps"
```

出力サンプル:
```
"status":"success","data":{"groups":[{"name":"alert-test","file":"rules","rules":[{"state":"firing","name":"metric:alerting_rule","query":"rate(adot_test_counter0[5m]) \u003e 5","duration":0,"labels":{},"annotations":{},"alerts":[{"labels":{"alertname":"metric:alerting_rule"},"annotations":{},"state":"firing","activeAt":"2021-09-16T13:20:35.9664022Z","value":"6.96890019778219e+01"}],"health":"ok","lastError":"","type":"alerting","lastEvaluation":"2021-09-16T18:41:35.967122005Z","evaluationTime":0.018121408}],"interval":60,"lastEvaluation":"2021-09-16T18:41:35.967104769Z","evaluationTime":0.018142997},{"name":"test","file":"rules","rules":[{"name":"metric:recording_rule","query":"rate(adot_test_counter0[5m])","labels":{},"health":"ok","lastError":"","type":"recording","lastEvaluation":"2021-09-16T18:40:44.650001548Z","evaluationTime":0.018381387}],"interval":60,"lastEvaluation":"2021-09-16T18:40:44.649986468Z","evaluationTime":0.018400463}]},"errorType":"","error":""}
```

さらに、アラートがトリガーされ、SNS Receiver 経由で SNS に送信されたことを確認するために、alertmanager エンドポイントをクエリできます。
```
awscurl https://aps-workspaces.us-east-1.amazonaws.com/workspaces/$WORKSPACE_ID/alertmanager/api/v2/alerts --service="aps" -H "Content-Type: application/json"
```

出力サンプル:
```
[{"annotations":{},"endsAt":"2021-09-16T18:48:35.966Z","fingerprint":"114212a24ca97549","receivers":[{"name":"default"}],"startsAt":"2021-09-16T13:20:35.966Z","status":{"inhibitedBy":[],"silencedBy":[],"state":"active"},"updatedAt":"2021-09-16T18:44:35.984Z","generatorURL":"/graph?g0.expr=sum%28rate%28envoy_http_downstream_rq_time_bucket%5B1m%5D%29%29+%3E+5\u0026g0.tab=1","labels":{"alertname":"metric:alerting_rule"}}]
```
これにより、アラートがトリガーされ、SNS Receiver を介して SNS に送信されたことが確認されます。

</sns></your>

## クリーンアップ

以下のコマンドを実行して、Amazon Managed Service for Prometheus ワークスペースを終了してください。
作成された EKS クラスターも削除するようにしてください。


```
terraform destroy
```
