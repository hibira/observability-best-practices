# Amazon Managed Service for Prometheus

[Amazon Managed Service for Prometheus][amp-main] (AMP) は、コンテナ化されたアプリケーションを大規模に監視するのに便利な、Prometheus 互換の監視サービスです。
AMP を使えば、運用メトリクスの取り込み、ストレージ、クエリに必要なインフラストラクチャを管理することなく、Prometheus クエリ言語 (PromQL) を使ってコンテナ化されたワークロードのパフォーマンスを監視できます。

以下のレシピをご覧ください。

- [AMP の概要][amp-gettingstarted]
- [EC2 上の EKS で ADOT を使って AMP に取り込み、AMG で可視化する](recipes/ec2-eks-metrics-go-adot-ampamg.md)
- [AMP への クロスアカウント取り込みを設定する][amp-xaccount]
- [AMP を使って ECS からメトリクスを収集する][amp-ecs-metrics]
- [AMP 用に Grafana Cloud Agent を設定する][amp-gcwa]
- [AMP ワークスペースのクロスリージョンメトリクス収集を設定する][amp-xregion-metrics]
- [EKS 上の自己ホスト型 Prometheus から AMP への移行のベストプラクティス][amp-migration]
- [AMP の概要ワークショップ][amp-oow]
- [Firehose と AWS Lambda を使って CloudWatch メトリクスストリームを Amazon Managed Service for Prometheus にエクスポートする](recipes/lambda-cw-metrics-go-amp.md)
- [Terraform を使って Amazon Managed Service for Prometheus をデプロイし、Alert Manager を設定する](recipes/amp-alertmanager-terraform.md)
- [Amazon Managed Prometheus と Amazon Managed Grafana を使って EKS 上の Istio を監視する][amp-istio-monitoring]
- [Amazon Managed Service for Prometheus と Amazon Managed Grafana を使って Amazon EKS Anywhere を監視する][amp-anywhere-monitoring]
- [Amazon EKS Observability Accelerator の紹介][eks-accelerator]
- [AMP と Amazon Managed Grafana で Prometheus mixin ダッシュボードをインストールする](recipes/amp-mixin-dashboards.md)
- [Amazon Managed Service for Prometheus と Alert Manager を使って Amazon EC2 を自動スケーリングする](recipes/as-ec2-using-amp-and-alertmanager.md)
