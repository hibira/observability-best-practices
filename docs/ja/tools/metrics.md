# メトリクス

メトリクスは、システムのパフォーマンスに関するデータです。システムやリソースに関連するすべてのメトリクスを集中管理できれば、メトリクスを比較し、パフォーマンスを分析し、リソースのスケールアップやスケールダウンなどの戦略的な意思決定を行うことができます。メトリクスは、リソースの健全性を把握し、予防措置を講じるためにも重要です。

メトリクスデータは基盤となるものであり、[アラーム](../../signals/alarms/)、異常検知、[イベント](../../signals/events/)、[ダッシュボード](../../tools/dashboards)などを駆動するために使用されます。

## ベンダーメトリクス

[CloudWatch メトリクス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/working_with_metrics.html)は、システムのパフォーマンスに関するデータを収集します。デフォルトでは、ほとんどの AWS サービスがリソースの無料メトリクスを提供しています。これには [Amazon EC2](https://aws.amazon.com/jp/ec2/) インスタンス、[Amazon RDS](https://aws.amazon.com/jp/rds/)、[Amazon S3](https://aws.amazon.com/jp/s3/) バケットなどが含まれます。

これらのメトリクスを *ベンダーメトリクス* と呼びます。AWS アカウントでベンダーメトリクスを収集するための料金はかかりません。

!!! info
	CloudWatch にメトリクスを送信する AWS サービスの完全なリストは、[このページ](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)を参照してください。

## メトリクスのクエリ

CloudWatch の [Metric Math](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/using-metric-math.html) 機能を利用して、複数のメトリクスをクエリし、数学式を使ってメトリクスを詳細に分析できます。例えば、次のようなメトリック数式を書いて、Lambda のエラー率を求めることができます。

    Errors/Requests

以下は、CloudWatch コンソールでこれがどのように表示されるかの例です。

![Metric math の例](../images/metrics1.png)

!!! success
    Metric Math を使用して、データから最大限の価値を引き出し、個別のデータソースのパフォーマンスから値を導出することができます。

CloudWatch は条件式もサポートしています。例えば、レイテンシが特定のしきい値を超えるタイムシリーズに対して `1` を、それ以外のデータポイントに対して `0` を返すクエリは次のようになります。

    IF(latency>threshold, 1, 0)

CloudWatch コンソールでは、この論理を使ってブール値を作成でき、その結果 [CloudWatch アラーム](../../tools/alarms) やその他のアクションをトリガーできます。これにより、導出されたデータポイントから自動的にアクションを実行できるようになります。CloudWatch コンソールの例を以下に示します。

![導出された値からのアラーム作成](../images/metrics2.png)

!!! success
    条件式を使用して、導出された値のパフォーマンスがしきい値を超えたときにアラームや通知をトリガーできます。

また、`SEARCH` 関数を使って、任意のメトリクスの上位 `n` 件を表示することができます。大量のタイムシリーズ (例えば数千台のサーバー) 全体で最も優れているまたは最も劣っているメトリクスを可視化する際、このアプローチを使うと、最も重要なデータのみを表示できます。以下は、過去 5 分間の平均で CPU 使用率が最も高い上位 2 つの EC2 インスタンスを返すクエリの例です。

    SLICE(SORT(SEARCH('{AWS/EC2,InstanceId} MetricName="CPUUtilization"', 'Average', 300), MAX, DESC),0, 2)

そして、CloudWatch コンソールでの表示例は次のようになります。

![CloudWatch メトリクスでの検索クエリ](../images/metrics3.png)

!!! success
    `SEARCH` アプローチを使用すると、環境内の価値のある、または最も劣っているリソースを素早く表示でき、その後 [ダッシュボード](../../tools/dashboards) に表示できます。

## メトリクスの収集

EC2 インスタンスのメモリやディスク使用量などの追加メトリクスが必要な場合は、[CloudWatch エージェント](../../tools/cloudwatch_agent/)を使用して、代わりにこのデータを CloudWatch にプッシュできます。または、グラフィカルな方法で可視化する必要がある独自の処理データがあり、このデータを CloudWatch メトリクスとして表示したい場合は、[`PutMetricData` API](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html) を使用してカスタムメトリクスを CloudWatch に公開できます。

!!! success
	メトリクスデータを CloudWatch にプッシュするには、ベア API ではなく [AWS SDK](https://aws.amazon.com/jp/developer/tools/) の 1 つを使用してください。

`PutMetricData` API 呼び出しは、クエリの数に応じて課金されます。`PutMetricData` API を最適に使用するためのベストプラクティスです。この API の Values と Counts メソッドを使用すると、1 つの `PutMetricData` リクエストで最大 150 個の値をメトリクスに公開でき、このデータの百分位数統計を取得できます。したがって、各データポイントに対して個別の API 呼び出しを行うのではなく、すべてのデータポイントをグループ化してから、単一の `PutMetricData` API 呼び出しで CloudWatch にプッシュする必要があります。このアプローチには、ユーザーに対して 2 つの利点があります。

1. CloudWatch の価格設定
2. `PutMetricData` API のスロットリングを防ぐことができる

!!! success
	`PutMetricData` を使用する場合、可能な限りデータをバッチ化して単一の `PUT` 操作にまとめるのがベストプラクティスです。

!!! success
	大量のメトリクスが CloudWatch に出力される場合は、代替アプローチとして [Embedded Metric Format](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format_Manual.html) の使用を検討してください。Embedded Metric Format では `PutMetricData` は使用されず、課金もされませんが、[CloudWatch Logs](../../tools/logs/) の使用に応じて課金されることに注意してください。

## 異常検知

CloudWatch には、記録されたメトリクスに基づいて *正常* とは何かを学習し、オブザーバビリティ戦略を補完する[異常検知](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html)機能があります。メトリクスシグナル収集システムにおいて、異常検知の利用は[ベストプラクティス](../../signals/metrics/#use-anomaly-detection-algorithms)です。

異常検知は 2 週間の期間でモデルを構築します。

!!! warning
	異常検知は作成時点から先のみモデルを構築します。過去の異常値を見つけるために時間を遡ることはありません。

!!! warning
	異常検知はメトリクスにとって *良い* とは何かを知りません。標準偏差に基づいて *正常* とは何かのみを知っています。

!!! success
	ベストプラクティスは、正常な動作が予想される時間帯のみを分析するように異常検知モデルを訓練することです。訓練から除外する時間帯 (夜間、週末、休日など) を定義できます。

異常検知バンドの例がここに灰色のバンドで示されています。

![Anomaly detection band](../images/metrics4.png)

CloudWatch コンソール、[CloudFormation](https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-configuration.html)、または AWS SDK のいずれかを使用して、異常検知の除外ウィンドウを設定できます。
