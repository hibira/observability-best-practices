# Amazon Managed Service for Prometheus

[Prometheus](https://prometheus.io/) は、コンピュートノードやアプリケーション関連のパフォーマンスデータなどのリソースに関する幅広いメトリクス機能とインサイトを提供する人気のオープンソースモニタリングツールです。

Prometheus はデータを収集するために *プル* モデルを使用しますが、CloudWatch は *プッシュ* モデルを使用します。Prometheus と CloudWatch は一部のユースケースで重複していますが、その運用モデルは非常に異なっており、価格設定も異なっています。

[Amazon Managed Service for Prometheus](https://aws.amazon.com/prometheus/) は、Kubernetes でホストされるコンテナ化アプリケーションや [Amazon ECS](https://aws.amazon.com/ecs/) で広く使用されています。

[CloudWatch エージェント](../../tools/cloudwatch_agent/) や [AWS Distro for OpenTelemetry](https://aws-otel.github.io/) を使用して、EC2 インスタンスや ECS/EKS クラスタに Prometheus メトリクス機能を追加できます。Prometheus サポート付きの CloudWatch エージェントは、Prometheus メトリクスを発見および収集して、アプリケーションのパフォーマンス低下と障害をより早く監視、トラブルシューティング、アラーム設定できるようにします。これにより、オブザーバビリティを改善するために必要なモニタリングツールの数も削減されます。

Prometheus のための CloudWatch Container Insights のモニタリングは、コンテナ化システムおよびワークロードからの Prometheus メトリクスの自動検出を行います https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ ContainerInsights-Prometheus.html
