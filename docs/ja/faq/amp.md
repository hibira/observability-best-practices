# Amazon Managed Service for Prometheus - FAQ

1. **現在サポートされている AWS リージョンはどこですか。また、他のリージョンからメトリクスを収集することは可能ですか?** 現在サポートしているリージョョンの最新リストは、[ドキュメント](https://docs.aws.amazon.com/ja_jp/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html)をご覧ください。2023年には全ての商用リージョンをサポートする予定です。どのリージョンをサポートすることを優先すべきかご意見をお聞かせください。サポートしているリージョンに、他のリージョンからデータを収集して送信することは可能です。詳細は次のブログをご覧ください。[Cross-region metrics collection for Amazon Managed Service for Prometheus](https://aws.amazon.com/blogs/opensource/set-up-cross-region-metrics-collection-for-amazon-managed-service-for-prometheus-workspaces/)。

2. **Cost Explorer または [CloudWatch での AWS 課金料金](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/gs_monitor_estimated_charges_with_cloudwatch.html)で課金が表示されるまでにどのくらい時間がかかりますか?** 2時間ごとに S3 にアップロードされたメトリクスサンプルのブロックを即座に計測します。Amazon Managed Service for Prometheus の課金が表示されるまでに最大 3 時間かかる場合があります。

3. **Prometheus サービスは、クラスター (EKS/ECS) からのメトリクスのスクレイピングしかできないようですが、これは正しいでしょうか?** 他のコンピューティング環境に関するドキュメントが不足していることをお詫び申し上げます。[EC2 からの Prometheus メトリクス](https://aws.amazon.com/jp/blogs/news/using-amazon-managed-service-for-prometheus-to-monitor-ec2-environments/)や、Prometheus サーバーをインストールできる他のコンピューティング環境からメトリクスをスクレイピングすることができます。リモートライトを設定し、[AWS SigV4 プロキシ](https://github.com/awslabs/aws-sigv4-proxy)を設定する必要があります。[EC2 ブログ](https://aws.amazon.com/jp/blogs/news/using-amazon-managed-service-for-prometheus-to-monitor-ec2-environments/)には、AWS SigV4 の実行方法を示す「Running aws-sigv4-proxy」のセクションがあります。他のコンピューティング環境で AWS SigV4 を実行する方法を簡素化するためのドキュメントを追加する必要があります。

4. **このサービスを Grafana に接続するにはどうすればよいでしょうか。ドキュメントはありますか?** Grafana に標準で用意されている [Prometheus データソース](https://grafana.com/docs/grafana/latest/datasources/prometheus/)を使用して、PromQL で Amazon Managed Service for Prometheus にクエリを実行します。次のドキュメントとブログが開始するのに役立ちます。
    1. [サービスドキュメント](https://docs.aws.amazon.com/ja_jp/prometheus/latest/userguide/AMP-onboard-query.html)
    2. [EC2 上の Grafana のセットアップ](https://aws.amazon.com/jp/blogs/news/setting-up-grafana-on-ec2-to-query-metrics-from-amazon-managed-service-for-prometheus/)

5. **Amazon Managed Service for Prometheus に送信されるサンプル数を減らすためのベストプラクティスは何ですか?** Amazon Managed Service for Prometheus に取り込まれるサンプル数を減らすには、スクレイプ間隔を延長する (30秒から1分に変更するなど) か、スクレイピングするシリーズの数を減らすことができます。スクレイプ間隔を変更するほうが、シリーズの数を減らすよりも取り込まれるサンプル数への影響が大きく、スクレイプ間隔を2倍にするとサンプル数は半分になります。

6. **CloudWatch メトリクスを Amazon Managed Service for Prometheus に送信するにはどうすればよいですか?** [CloudWatch メトリクススト リームを使用して CloudWatch メトリクスを Amazon Managed Service for Prometheus に送信する](/observability-best-practices/ja/recipes/recipes/lambda-cw-metrics-go-amp/)ことをお勧めします。この統合には次のような短所があります。
    1. Amazon Managed Service for Prometheus API を呼び出すための Lambda 関数が必要
    2. CloudWatch メトリクスを Amazon Managed Service for Prometheus に取り込む前に、メタデータ (AWS タグなど) を付与する機能がない
    3. 名前空間でのみメトリクスをフィルタリングできる (十分に細かくない)。代替案として、Prometheus Exporters を使用して CloudWatch メトリクスデータを Amazon Managed Service for Prometheus に送信することができます。(1) CloudWatch Exporter: CW ListMetrics および GetMetricStatistics (GMS) API を使用するJavaベースのスクレイピング。

    [Yet Another CloudWatch Exporter (YACE)](https://github.com/nerdswords/yet-another-cloudwatch-exporter) は、CloudWatch から Amazon Managed Service for Prometheus にメトリクスを取得する別の選択肢です。これは CW ListMetrics、GetMetricData (GMD)、GetMetricStatistics (GMS) API を使用する Go ベースのツールです。このツールを使用する場合の欠点は、エージェントをデプロイしてライフサイクルを自分で管理する必要があり、慎重に行う必要があることです。

7. **どのバージョンの Prometheus と互換性がありますか?** Amazon Managed Service for Prometheus は [Prometheus 2.x](https://github.com/prometheus/prometheus/blob/main/RELEASE.md) と互換性があります。Amazon Managed Service for Prometheus は、データプレーンとしてオープンソースの [CNCF Cortex プロジェクト](https://cortexmetrics.io/)に基づいています。Cortex は Prometheus との 100% の API 互換性を目指しています (/prometheus/* および /api/prom/* 以下)。Amazon Managed Service for Prometheus は、Prometheus 互換の PromQL クエリ、リモートライトメトリクス取り込み、および Gauge、Counter、Summary、Histogram を含む既存のメトリクスタイプの Prometheus データモデルをサポートしています。現在、[すべての Cortex API](https://cortexmetrics.io/docs/api/) を公開していません。サポートしている互換 API のリストは[こちら](https://docs.aws.amazon.com/ja_jp/prometheus/latest/userguide/AMP-APIReference.html)にあります。Amazon Managed Service for Prometheus で必要な機能が不足している場合は、アカウントチームに連絡して新しい製品機能リクエスト (PFR) を開くか、既存の PFR に影響を与えることができます。

8. **Amazon Managed Service for Prometheus にメトリクスを取り込むためのコレクターとして何をお勧めしますか? Prometheus のエージェントモードを利用すべきでしょうか?** Prometheus サーバー (エージェントモードを含む)、OpenTelemetry エージェント、AWS Distro for OpenTelemetry エージェントを使用して、メトリクスデータを Amazon Managed Service for Prometheus に送信することができます。AWS Distro for OpenTelemetry は、AWS がパッケージ化およびセキュリティ強化した OpenTelemetry プロジェクトのダウンストリーム配布版です。いずれも問題ありませんので、個々のチームのニーズと好みに最も合ったものを選んでください。

9. **Amazon Managed Service for Prometheus のパフォーマンスは、ワークスペースのサイズによってどのように拡張しますか?** 現在、Amazon Managed Service for Prometheus は、単一のワークスペースで最大 200M の有効な時系列をサポートしています。新しい上限を発表する際には、サービスの性能と信頼性がデータの取り込みとクエリにわたって維持されることを確認しています。ワークスペースの有効なシリーズの数に関係なく、同じサイズのデータセットに対するクエリのパフォーマンスは低下しません。

10. **製品 FAQ** [https://aws.amazon.com/jp/prometheus/faqs/]()
