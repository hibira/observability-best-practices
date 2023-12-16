# Amazon CloudWatch に関するベストプラクティス FAQ

**なぜ Amazon CloudWatch を選択する必要がありますか?**
Amazon CloudWatch は、AWS のクラウドネイティブサービスで、単一のプラットフォーム上で AWS クラウドリソースと AWS 上で実行するアプリケーションの統合された可観測性を提供します。Amazon CloudWatch は、[ログ](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html)の形式で監視および運用データを収集したり、[メトリクス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/working_with_metrics.html)を追跡したり、[イベント](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/events/WhatIsCloudWatchEvents.html)を設定したり、[アラーム](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html)を設定するために使用できます。また、AWS 上および[オンプレミスのサーバー](https://aws.amazon.com/jp/blogs/news/how-to-monitor-hybrid-environment-with-aws-services/)で実行されている AWS リソース、アプリケーション、サービスの[統合ビュー](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html)を提供します。Amazon CloudWatch は、リソースの利用状況、アプリケーションのパフォーマンス、ワークロードの運用状態のシステム全体の可視性を高めるのに役立ちます。Amazon CloudWatch は、AWS、ハイブリッド、オンプレミスのアプリケーションとインフラストラクチャリソースの[実行可能なインサイト](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Insights-Sections.html)を提供します。[クロスアカウントの可観測性](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html)は、CloudWatch の統合された可観測性機能の追加です。

**どの AWS サービスが Amazon CloudWatch および Amazon CloudWatch Logs とネイティブに統合されていますか?**
Amazon CloudWatch は 70 を超える AWS サービスとネイティブに統合されており、アクションなしでインフラストラクチャメトリクスを収集して、監視とスケーラビリティを簡素化できます。サポートされている [CloudWatch メトリクスを公開する AWS サービスの完全なリスト](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)はドキュメントをご確認ください。現在、30 を超える AWS サービスが CloudWatch Logs にログを公開しています。サポートされている [CloudWatch Logs にログを公開する AWS サービスの完全なリスト](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/aws-services-sending-logs.html)はドキュメントをご確認ください。

**すべての AWS サービスから Amazon CloudWatch に公開される公開メトリクスのリストはどこで入手できますか?**
[メトリクスを公開するすべての AWS サービスのリスト](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)は、AWS のドキュメントにあります。

**Amazon CloudWatch へのメトリクスの収集と監視を開始するにはどうすればよいですか?**
[Amazon CloudWatch は、さまざまな AWS サービスからメトリクスを収集](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/working_with_metrics.html)します。これらは、[AWS Management Console、AWS CLI、API](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/viewing_metrics_with_cloudwatch.html)を通じて表示できます。Amazon CloudWatch は、Amazon EC2 インスタンスの[利用可能なメトリクス](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html)を収集します。カスタムメトリクスの場合、統合 CloudWatch エージェントを利用して収集と監視ができます。

関連する AWS Observability ワークショップ: [メトリクス](https://catalog.workshops.aws/observability/ja-JP/aws-native/metrics)

**Amazon EC2 インスタンスは非常に細かいレベルの監視が必要です。どうすればよいですか?**
デフォルトでは、Amazon EC2 はインスタンスの基本監視として 5 分ごとにメトリクスデータを CloudWatch に送信します。インスタンスのメトリクスデータを CloudWatch に 1 分ごとに送信するには、[詳細モニタリング](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/using-cloudwatch-new.html)をインスタンスで有効にできます。

**アプリケーションの独自メトリクスを公開するオプションはありますか?**
お客様は、API または CLI を介して 1 分の標準解像度または 1 秒間隔の高解像度の粒度で、独自の[カスタムメトリクス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/publishingMetrics.html)を CloudWatch に公開できます。

統合 CloudWatch エージェントは、Elastic Network Adapter (ENA) を使用する Linux で実行されている Amazon EC2 インスタンスの[ネットワークパフォーマンスメトリクス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-network-performance.html)や Linux サーバーの [NVIDIA GPU メトリクス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-NVIDIA-GPU.html)、Linux と Windows サーバーの個々のプロセスの procstat プラグインを使用したプロセスメトリクスなど、特殊なシナリオでのカスタムメトリクスの収集をサポートしています。

関連する AWS Observability ワークショップ: [カスタムメトリクスの公開](https://catalog.workshops.aws/observability/ja-JP/aws-native/metrics/publishmetrics)

**Amazon CloudWatch エージェントを介したカスタムメトリクス収集で、さらにどのようなサポートが利用できますか?**
アプリケーションやサービスからのカスタムメトリクスは、[StatsD](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-custom-metrics-statsd.html) または [collectd](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-custom-metrics-collectd.html) プロトコルをサポートする統合 CloudWatch エージェントを使用して取得できます。StatsD は、幅広いアプリケーションからメトリクスを収集できる一般的なオープンソースソリューションです。StatsD は、Linux と Windows の両方のサーバーベースのサーバーをサポートしており、独自のメトリクスを計装するのに特に便利です。collectd プロトコルは、Linux サーバーでのみサポートされている一般的なオープンソースソリューションで、幅広いアプリケーションのシステム統計を収集するプラグインがあります。

**環境にはさまざまな規模のインストールが必要です。CloudWatch エージェントは通常どのようにインストールおよび自動化できますか。**
Linux と Windows サーバーを含むすべてのサポートされているオペレーティングシステムで、[コマンドライン](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/installing-cloudwatch-agent-commandline.html)を使用して CloudWatch エージェントを[ダウンロードおよびインストール](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance.html)したり、AWS [Systems Manager](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/installing-cloudwatch-agent-ssm.html) を使用したり、AWS [CloudFormation テンプレート](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent-New-Instances-CloudFormation.html)を使用したりできます。また、監視のために[オンプレミスサーバーに CloudWatch エージェントをインストール](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-premise.html)することもできます。

**組織には複数の AWS アカウントとリージョンがあります。Amazon CloudWatch はこれらのシナリオで機能しますか。** 
Amazon CloudWatch は、[クロスアカウントの可観測性](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html)を提供し、リージョン内の複数のアカウントにまたがるリソースとアプリケーションの正常性を監視およびトラブルシューティングするのに役立ちます。Amazon CloudWatch は、[クロスアカウントおよびクロスリージョンダッシュボード](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html)も提供します。この機能により、マルチアカウントおよびマルチリージョンのリソースとワークロードの可視性と洞察を取得できます。

**Amazon CloudWatch で利用できる自動化のサポートは何ですか?**
お客様は、AWS Management Console を介して Amazon CloudWatch にアクセスできるほか、API、[AWS コマンドラインインターフェイス(CLI)](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/getting-started-install.html)、[AWS SDK](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/sdk-general-information-section.html)を介してサービスにアクセスすることもできます。メトリクスとダッシュボードの [CloudWatch API](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/APIReference/Welcome.html) は、[AWS CLI](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/cli/Welcome.html) を介して自動化したり、ソフトウェア/製品と統合したりすることで、リソースとアプリケーションの管理や管理に費やす時間を減らすのに役立ちます。ログ用の [CloudWatch API](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatchLogs/latest/APIReference/Welcome.html) と [AWS CLI](https://docs.aws.amazon.com/ja_jp/cli/latest/reference/logs/index.html) も個別に利用できます。 追加のリファレンスのために、お客様向けの [CloudWatch で AWS SDK を使用したコードの例](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/service_code_examples.html) が用意されています。

**リソースの監視をすぐに開始したいのですが、推奨されるアプローチは何ですか?**
CloudWatch の自動ダッシュボードは、AWS のすべてのパブリックリージョンで利用でき、AWS のすべてのリソースの正常性とパフォーマンスの集約ビューを提供します。これにより、お客様は監視をすぐに開始し、リソースベースのメトリクスとアラームのビューを取得し、パフォーマンスの問題の根本原因を簡単に特定できます。[自動ダッシュボード](https://docs.aws.amazon.com/ja_jp/prescriptive-guidance/latest/implementing-logging-monitoring-cloudwatch/cloudwatch-dashboards-visualizations.html)は、AWS サービスの推奨ベストプラクティスに基づいて構築されており、リソースを認識したままで、重要なパフォーマンスメトリクスの最新の状態を動的に更新して反映します。

関連する AWS Observability ワークショップ: [自動ダッシュボード](https://catalog.workshops.aws/observability/ja-JP/aws-native/dashboards/autogen-dashboard)

**CloudWatch で監視したいものをカスタマイズしたいのですが、推奨されるアプローチは何ですか?**
[カスタムダッシュボード](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/create_dashboard.html)を使用すると、さまざまなウィジェットを使用して必要な数の追加のダッシュボードを作成し、カスタマイズできます。カスタムダッシュボードの作成時には、選択とカスタマイズのために使用できるさまざまなウィジェットタイプがあります。

関連する AWS Observability ワークショップ: [ダッシュボーディング](https://catalog.workshops.aws/observability/ja-JP/aws-native/ec2-monitoring/dashboarding) 

**カスタムダッシュボードをいくつか構築しました。共有する方法はありますか?**
はい、[CloudWatch ダッシュボードの共有](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/cloudwatch-dashboard-sharing.html)が可能です。共有には 3 つの方法があります。リンクへのアクセス権を持つユーザーがダッシュボードを表示できるように、単一のダッシュボードをパブリックに共有します。ダッシュボードを表示できる人のメールアドレスを指定して、単一のダッシュボードをプライベートに共有します。サードパーティのシングルサインオン (SSO) プロバイダーを指定して、アカウント内のすべての CloudWatch ダッシュボードを共有します。

関連する AWS Observability ワークショップ: [CloudWatch ダッシュボードの共有](https://catalog.workshops.aws/observability/ja-JP/aws-native/dashboards/sharingdashboard)

**アプリケーションの可観測性を向上させるにはどうすればよいですか? これには、アプリケーションの下にある AWS リソースも含まれます。**
[Amazon CloudWatch Application Insights](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/cloudwatch-application-insights.html) は、SQL Server データベース、.Net ベースの Web (IIS) スタック、アプリケーションサーバー、OS、ロードバランサー、キューなど、アプリケーションとその下にある AWS リソースの可観測性を容易にします。アプリケーションリソースとテクノロジスタック全体で主要なメトリクスとログを特定および設定するのに役立ちます。これにより、平均修復時間 (MTTR) が短縮され、アプリケーションの問題をより迅速にトラブルシューティングできます。

追加の詳細は FAQ をご覧ください: [AWS リソースとカスタムメトリクスの監視](https://aws.amazon.com/jp/cloudwatch/faqs/#AWS_resource_.26_custom_metrics_monitoring)

**組織はオープンソース中心であるため、Amazon CloudWatch はオープンソーステクノロジを通じた監視と可観測性をサポートしていますか。**
メトリクスとトレースの収集のために、[AWS Distro for OpenTelemetry (ADOT) Collector](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-open-telemetry.html) と CloudWatch エージェントを Amazon EC2 インスタンスに並列にインストールし、OpenTelemetry SDK を使用して Amazon EC2 インスタンス上で実行されているワークロードからアプリケーショントレースとメトリクスを収集できます。

Amazon CloudWatch で OpenTelemetry メトリクスをサポートするために、[AWS EMF Exporter for OpenTelemetry Collector](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/awsemfexporter) は、OpenTelemetry 形式のメトリクスを CloudWatch Embedded Metric Format(EMF)に変換します。これにより、OpenTelemetry メトリクスと統合されたアプリケーションが高基数の[アプリケーションメトリクスを CloudWatch に送信](https://aws-otel.github.io/docs/getting-started/adot-eks-add-on/config-cloudwatch)できるようになります。

ログの場合、Fluent Bit は、ログの保持と分析のために Amazon CloudWatch を含む AWS サービスに[Amazon EC2 からのログをストリーミング](https://docs.fluentbit.io/manual/pipeline/outputs/cloudwatch)するための簡単な拡張ポイントを作成します。 新しくリリースされた [Fluent Bit プラグイン](https://github.com/aws/amazon-cloudwatch-logs-for-fluent-bit#new-higher-performance-core-fluent-bit-plugin) は、ログを Amazon CloudWatch にルーティングできます。

ダッシュボードの場合、Amazon Managed Grafana には、Grafana ワークスペースコンソールの AWS データソース構成オプションを使用して、[データソースとしての Amazon CloudWatch を追加](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/using-amazon-cloudwatch-in-AMG.html)できます。この機能により、既存の CloudWatch アカウントの検出と、CloudWatch へのアクセスに必要な認証情報の構成の管理が簡素化されます。

**環境には Prometheus からメトリクスを収集するように構築されたワークロードが既にあります。同じ方法論を使用し続けることができますか。**
お客様は、可観測性のニーズのために、オープンソースのセットアップを選択できます。このために、AWS Distro for OpenTelemetry (ADOT) Collector を、Prometheus で計装されたアプリケーションからスクレイプし、メトリクスを Prometheus Server または Amazon Managed Prometheus に送信するように構成できます。

CloudWatch エージェントは、EC2 インスタンス上で Prometheus を使用して[メトリクスをスクレイプ](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-PrometheusEC2.html)するようにインストールおよび構成できます。これは、EC2 上のコンテナワークロードを選好し、Open Source Prometheus 監視と互換性のあるカスタムメトリクスが必要なお客様にとって役立ちます。

CloudWatch の [Prometheus 用コンテナインサイトの監視](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/ContainerInsights-Prometheus.html) は、コンテナ化されたシステムとワークロードから Prometheus メトリクスの自動検出を自動化します。Prometheus メトリクスの検出は、Amazon Elastic Container Service (Amazon ECS)、Amazon Elastic Kubernetes Service (Amazon EKS)、および Amazon EC2 インスタンス上で実行されている Kubernetes クラスターでサポートされています。

**ワークロードにはマイクロサービスコンピューティング、特に EKS/Kubernetes 関連のコンテナが含まれています。環境への洞察を得るために Amazon CloudWatch をどのように使用できますか?**
お客様は、[CloudWatch Container Insights](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/ContainerInsights.html) を使用して、[Amazon Elastic Kubernetes Service(Amazon EKS)](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/deploy-container-insights-EKS.html) または Amazon EC2 上の Kubernetes プラットフォームで実行されているコンテナ化アプリケーションとマイクロサービスからメトリクスとログを収集、集約、要約できます。[Container Insights](https://aws.amazon.com/jp/cloudwatch/faqs/#Container_Monitoring) は、Amazon EKS 用 Fargate でデプロイされたクラスターからのメトリクスの収集もサポートしています。CloudWatch は CPU、メモリ、ディスク、ネットワークなど、多くのリソースのメトリクスを自動的に[収集](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Container-Insights-metrics.html)します。また、コンテナの再起動失敗などの診断情報を提供し、Lambda 関数の問題を隔離および迅速に解決するのに役立ちます。

関連する AWS Observability ワークショップ: [EKS 上のコンテナインサイト](https://catalog.workshops.aws/observability/ja-JP/aws-native/insights/containerinsights/eks)

**ワークロードにはマイクロサービスコンピューティング、特に ECS 関連のコンテナが含まれています。環境への洞察を得るために Amazon CloudWatch をどのように使用できますか?**
お客様は、[CloudWatch Container Insights](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/ContainerInsights.html) を使用して、[Amazon Elastic Container Service(Amazon ECS)](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/deploy-container-insights-ECS.html) または Amazon EC2 上のコンテナプラットフォームで実行されているコンテナ化アプリケーションとマイクロサービスからメトリクスとログを収集、集約、要約できます。[Container Insights](https://aws.amazon.com/jp/cloudwatch/faqs/#Container_Monitoring) は、Amazon ECS 用 Fargate でデプロイされたクラスターからのメトリクスの収集もサポートしています。CloudWatch は CPU、メモリ、ディスク、ネットワークなど、多くのリソースのメトリクスを自動的に[収集](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Container-Insights-metrics.html)します。また、コンテナの再起動失敗などの診断情報を提供し、Lambda 関数の問題を隔離および迅速に解決するのに役立ちます。

関連する AWS Observability ワークショップ: [ECS 上のコンテナインサイト](https://catalog.workshops.aws/observability/ja-JP/aws-native/insights/containerinsights/ecs)

**ワークロードにはサーバーレスコンピューティング、特に AWS Lambda が含まれています。環境への洞察を得るために Amazon CloudWatch をどのように使用できますか?**
お客様は、AWS Lambda で実行されているサーバーレスアプリケーションの監視とトラブルシューティングに [CloudWatch Lambda Insights](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Lambda-Insights.html) を使用できます。[CloudWatch Lambda Insights](https://aws.amazon.com/jp/cloudwatch/faqs/#Lambda_Monitoring) は、CPU 時間、メモリ、ディスク、ネットワークなどのシステムレベルのメトリクスを収集、集約、要約します。また、コールドスタートや Lambda ワーカーのシャットダウンなどの診断情報を収集、集約、要約して、Lambda 関数の問題を隔離および迅速に解決するのに役立ちます。

関連する AWS Observability ワークショップ: [Lambda Insights](https://catalog.workshops.aws/observability/ja-JP/aws-native/insights/lambdainsights)

**Amazon CloudWatch Logs に大量のログを集約しています。これらのデータからどのように可観測性を得ることができますか?**
[CloudWatch Logs Insights](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/AnalyzingLogData.html) を使用すると、システムとアプリケーションのログファイルをリアルタイムで監視およびトラブルシューティングできます。 問題が発生した場合、お客様は [CloudWatch Logs Insights](https://aws.amazon.com/jp/cloudwatch/faqs/#Log_analytics) を使用して、潜在的な原因を特定し、デプロイされた修正を検証できます。

**Amazon CloudWatch Logs でログをクエリするにはどうすればよいですか?**
CloudWatch Logs Insights では、[クエリ言語](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html)を使用してロググループをクエリできます。

**Amazon CloudWatch Logs に保存されているログをコスト最適化、コンプライアンス保持、追加処理のために管理するにはどうすればよいですか
