# Amazon Managed Service for Prometheus - FAQ

1. **現在どの AWS リージョンがサポートされていて、他のリージョンからメトリクスを収集することは可能ですか?** サポートしているリージョンの最新リストは、[ドキュメント](https://docs.aws.amazon.com/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html) をご覧ください。2023年にはすべての商用リージョンをサポートする予定です。優先順位をより適切に決定できるよう、サポートしてほしいリージョンをお知らせください。 サポートしている特定のリージョンにデータを送信することで、任意のリージョンからデータを収集できます。 詳細は次のブログをご覧ください: [Amazon Managed Service for Prometheus のリージョン間メトリクス収集の設定](https://aws.amazon.com/blogs/opensource/set-up-cross-region-metrics-collection-for-amazon-managed-service-for-prometheus-workspaces/)。

1. **Cost Explorer や [CloudWatch の AWS 課金情報](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/gs_monitor_estimated_charges_with_cloudwatch.html) で課金やメータリングを確認するまでにどのくらい時間がかかりますか?** 
    アップロードされたメトリックサンプルのブロックは、2時間ごとに S3 にアップロードされるたびに即座に課金されます。Amazon Managed Service for Prometheus のメータリングと料金が報告されるまでに最大3時間かかる場合があります。

1. **Prometheus サービスはクラスター(EKS/ECS)からメトリクスをスクレイプできるだけのようですが、そうでしょうか?**
    他のコンピュート環境のドキュメントが不十分であることをお詫び申し上げます。Prometheus サーバーを使用して、[EC2 から Prometheus メトリクスをスクレイプ](https://aws.amazon.com/blogs/opensource/using-amazon-managed-service-for-prometheus-to-monitor-ec2-environments/)したり、Prometheus サーバーをインストールできるコンピュート環境ならどこからでもメトリクスを収集できます。リモートライトの設定と [AWS SigV4 プロキシ](https://github.com/awslabs/aws-sigv4-proxy) のセットアップが必要です。[EC2 ブログ](https://aws.amazon.com/blogs/opensource/using-amazon-managed-service-for-prometheus-to-monitor-ec2-environments/) の「Running aws-sigv4-proxy」というセクションで、AWS SigV4 の実行方法を確認できます。他のコンピュート環境で AWS SigV4 を実行する方法を簡略化するためのドキュメントを追加する必要があります。

1. **このサービスを Grafana に接続するにはどうすればよいでしょうか?この点に関するドキュメントはありますか?**
    Amazon Managed Service for Prometheus を PromQL を使用してクエリするために、Grafana で利用できるデフォルトの [Prometheus データソース](https://grafana.com/docs/grafana/latest/datasources/prometheus/) を使用します。以下のドキュメントとブログが開始するのに役立ちます。
    1. [サービスドキュメント](https://docs.aws.amazon.com/prometheus/latest/userguide/Amazon Managed Service for Prometheus-onboard-query.html)
    1. [EC2 上での Grafana の設定](https://aws.amazon.com/blogs/opensource/setting-up-grafana-on-ec2-to-query-metrics-from-amazon-managed-service-for-prometheus/)

1. **Amazon Managed Service for Prometheus に送信されるサンプル数を減らすためのベストプラクティスは何ですか?** 
    Amazon Managed Service for Prometheus に取り込まれるサンプル数を減らすために、顧客はスクレイプ間隔を延長 (例: 30秒から1分に変更) したり、スクレイプしているシリーズ数を減らすことができます。 スクレイプ間隔を変更するほうが、シリーズ数を減らすよりもサンプル数に大きな影響を与えます。スクレイプ間隔を2倍にすると、取り込まれるサンプル量が半分になります。

1. **CloudWatch メトリクスを Amazon Managed Service for Prometheus に送信するにはどうすればよいですか?**
    CloudWatch メトリクスを Amazon Managed Service for Prometheus に送信するために、[CloudWatch メトリクスストリームを利用することをおすすめします](https://aws-observability.github.io/observability-best-practices/recipes/recipes/lambda-cw-metrics-go-amp/)。この統合には次のような短所がある可能性があります。
    1. Amazon Managed Service for Prometheus API を呼び出す Lambda 関数が必要
    1. CloudWatch メトリクスにメタデータ(AWS タグなど)を付加してから Amazon Managed Service for Prometheus に取り込む機能がない
    1. メトリクスは名前空間でのみフィルタリングできる (細かい制御ができない)
    
    代替策として、Prometheus Exporter を利用して CloudWatch メトリクスデータを Amazon Managed Service for Prometheus に送信できます。(1) CloudWatch Exporter: CW ListMetrics および GetMetricStatistics (GMS) API を使用した Java ベースのスクレイピング。
    
    [**Yet Another CloudWatch Exporter (YACE)**](https://github.com/nerdswords/yet-another-cloudwatch-exporter) は、CloudWatch から Amazon Managed Service for Prometheus にメトリクスを取得するための別のオプションです。これは、CW ListMetrics、GetMetricData (GMD)、GetMetricStatistics (GMS) API を使用した Go ベースのツールです。エージェントをデプロイしてライフサイクルを管理する必要があるため、これを使用することの短所として考慮しなければならない点があります。

1. **どのバージョンの Prometheus と互換性がありますか?**
    Amazon Managed Service for Prometheus は、[Prometheus 2.x](https://github.com/prometheus/prometheus/blob/main/RELEASE.md) と互換性があります。Amazon Managed Service for Prometheus は、データプレーンとしてオープンソースの [CNCF Cortex プロジェクト](https://cortexmetrics.io/) に基づいています。Cortex は Prometheus (/prometheus/* および /api/prom/* の下) と100% API 互換であることを目指しています。Amazon Managed Service for Prometheus は、Prometheus 互換の PromQL クエリ、リモートライトによるメトリック取り込み、および Gauge、Counters、Summary、Histogram などの既存のメトリックタイプの Prometheus データモデルをサポートしています。 現在、[すべての Cortex API](https://cortexmetrics.io/docs/api/) を公開しているわけではありません。サポートしている互換 API のリストは、[こちらで確認](https://docs.aws.amazon.com/prometheus/latest/userguide/Amazon Managed Service for Prometheus-APIReference.html) できます。Amazon Managed Service for Prometheus で必要な機能がない場合は、アカウントチームと連携して新規または既存の製品機能リクエスト (PFR) を開くことができます。

1. **Amazon Managed Service for Prometheus にメトリクスを取り込むために推奨するコレクターは何ですか?エージェントモードの Prometheus を利用する必要がありますか?**
    Prometheus サーバー(エージェントモードを含む)、OpenTelemetry エージェント、AWS Distro for OpenTelemetry エージェントを、メトリクスデータを Amazon Managed Service for Prometheus に送信するために顧客が使用できるエージェントとしてサポートしています。AWS Distro for OpenTelemetry は、AWS によってパッケージ化および保護された OpenTelemetry プロジェクトのダウンストリームディストリビューションです。3つのうちどれを使用しても構いません。チームのニーズと好みに最も適したものを選択してください。

1. **ワークスペースのサイズに応じて、Amazon Managed Service for Prometheus のパフォーマンスはどのようにスケールしますか?**
    現在、Amazon Managed Service for Prometheus は、単一のワークスペースで最大 2 億のアクティブなタイムシリーズをサポートしています。 新しい上限を発表する際は、サービスのパフォーマンスと信頼性が維持されることを確認しています。 同じデータセットに対するクエリは、ワークスペース内のアクティブなシリーズ数に関係なく、パフォーマンスの低下がないはずです。

1. **製品 FAQ** [https://aws.amazon.com/prometheus/faqs/]()
