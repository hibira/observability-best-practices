# Amazon Elastic Kubernetes Service

[Amazon Elastic Kubernetes Service][eks-main] (EKS) は、AWS Cloud またはオンプレミスで Kubernetes アプリケーションを開始、実行、スケーリングする柔軟性を提供します。

以下のレシピは、コンピューティングエンジンごとにグループ化されています。

## EC2 上の EKS

### ログ

- [EKS の CloudWatch Container Insights での Fluent Bit 統合][eks-cw-fb]
- [EFK スタックを使用したログ収集][eks-ws-efk]
- [EKS での Fluent Bit と FluentD のサンプルログアーキテクチャ][eks-logging]

### メトリクス

- [Amazon Managed Service for Prometheus の概要][amp-gettingstarted]
- [EC2 上の EKS で ADOT を使用して AMP にメトリクスを取り込み、AMG で可視化する][ec2-eks-metrics-go-adot-ampamg]
- [Amazon Managed Service for Prometheus 用の Grafana Cloud Agent の設定][gcwa-amp]
- [Prometheus と Grafana を使用したクラスターのモニタリング][eks-ws-prom-grafana]
- [Managed Prometheus と Managed Grafana を使用したモニタリング][eks-ws-amp-amg]
- [CloudWatch Container Insights][eks-ws-cw-ci]
- [AMP ワークスペースのクロスリージョンメトリクス収集の設定][amp-xregion]
- [Amazon Managed Service for Prometheus と Amazon Managed Grafana を使用した EKS 上の App Mesh 環境のモニタリング][eks-am-amp-amg]
- [Amazon Managed Prometheus と Amazon Managed Grafana を使用した EKS 上の Istio のモニタリング][eks-istio-monitoring]
- [KEDA と Amazon CloudWatch を使用した Kubernetes ワークロードの積極的な自動スケーリング][eks-keda-cloudwatch-scaling]
- [Amazon Managed Service for Prometheus と Amazon Managed Grafana を使用した Amazon EKS Anywhere のモニタリング][eks-anywhere-monitoring]

### トレース

- [X-Ray トレーシングを AWS Distro for OpenTelemetry に移行する][eks-otel-xray]
- [X-Ray によるトレーシング][eks-ws-xray]

## EKS on Fargate

### ログ

- [AWS Fargate 上の Amazon EKS 向け Fluent Bit がリリースされました][eks-fargate-logging]
- [EKS 上の Fluent Bit と FluentD のサンプルログアーキテクチャ][eks-fb-example]

### メトリクス

- [Fargate 上の EKS で ADOT を使用して AMP にメトリクスを取り込み、AMG で可視化する][fargate-eks-metrics-go-adot-ampamg]
- [CloudWatch Container Insights][eks-ws-cw-ci]
- [AMP ワークスペースのクロスリージョンメトリクス収集を設定する][amp-xregion]

### トレース

- [Fargate 上の EKS で AWS X-Ray を使用した ADOT][fargate-eks-xray-go-adot-amg]
- [X-Ray によるトレーシング][eks-ws-xray]

[eks-main]: https://aws.amazon.com/jp/eks/
[eks-cw-fb]: https://aws.amazon.com/blogs/containers/fluent-bit-integration-in-cloudwatch-container-insights-for-eks/
[eks-ws-efk]: https://www.eksworkshop.com/intermediate/230_logging/
[eks-logging]: https://github.com/aws-samples/amazon-eks-fluent-logging-examples
[amp-gettingstarted]: https://aws.amazon.com/blogs/mt/getting-started-amazon-managed-service-for-prometheus/
[ec2-eks-metrics-go-adot-ampamg]: recipes/ec2-eks-metrics-go-adot-ampamg.md
[gcwa-amp]: https://aws.amazon.com/blogs/opensource/configuring-grafana-cloud-agent-for-amazon-managed-service-for-prometheus/
[eks-ws-prom-grafana]: https://www.eksworkshop.com/intermediate/240_monitoring/
[eks-ws-amp-amg]: https://www.eksworkshop.com/intermediate/246_monitoring_amp_amg/
[eks-ws-cw-ci]: https://www.eksworkshop.com/intermediate/250_cloudwatch_container_insights/
[fargate-eks-metrics-go-adot-ampamg]: recipes/fargate-eks-metrics-go-adot-ampamg.md
[amp-xregion]: https://aws.amazon.com/blogs/opensource/set-up-cross-region-metrics-collection-for-amazon-managed-service-for-prometheus-workspaces/
[eks-otel-xray]: https://aws.amazon.com/blogs/opensource/migrating-x-ray-tracing-to-aws-distro-for-opentelemetry/
[eks-ws-xray]: https://www.eksworkshop.com/intermediate/245_x-ray/x-ray/
[eks-fargate-logging]: https://aws.amazon.com/blogs/containers/fluent-bit-for-amazon-eks-on-aws-fargate-is-here/
[eks-fb-example]: https://github.com/aws-samples/amazon-eks-fluent-logging-examples
[eks-am-amp-amg]: recipes/servicemesh-monitoring-ampamg.md
[fargate-eks-xray-go-adot-amg]: recipes/fargate-eks-xray-go-adot-amg.md
[eks-istio-monitoring]: https://aws.amazon.com/blogs/mt/monitor-istio-on-eks-using-amazon-managed-prometheus-and-amazon-managed-grafana/
[eks-keda-cloudwatch-scaling]: https://aws.amazon.com/blogs/mt/proactive-autoscaling-of-kubernetes-workloads-with-keda-using-metrics-ingested-into-amazon-cloudwatch/
[eks-anywhere-monitoring]: https://aws.amazon.com/blogs/containers/monitoring-amazon-eks-anywhere-using-amazon-managed-service-for-prometheus-and-amazon-managed-grafana/