# Amazon CloudWatch - FAQ

**なぜ Amazon CloudWatch を選ぶべきですか?**

Amazon CloudWatch は、AWS クラウドリソースと AWS 上で実行されているアプリケーションを単一のプラットフォームで統合的に監視できる、AWS クラウドネイティブのサービスです。Amazon CloudWatch は、[ログ](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html)の形式で監視とオペレーショナルデータを収集し、[メトリクス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/working_with_metrics.html)を追跡し、[イベント](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/events/WhatIsCloudWatchEvents.html)を設定し、[アラーム](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html)を設定できます。また、AWS 上で実行されているリソース、アプリケーション、サービスの[統合ビュー](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html)と[オンプレミスサーバー](https://aws.amazon.com/blogs/mt/how-to-monitor-hybrid-environment-with-aws-services/)を提供します。Amazon CloudWatch は、リソース使用率、アプリケーションのパフォーマンス、ワークロードの運用状況に関するシステム全体の可視性を提供します。Amazon CloudWatch は、AWS、ハイブリッド、オンプレミスのアプリケーションとインフラストラクチャリソースに対して[アクションを起こす洞察](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Insights-Sections.html)を提供します。[クロスアカウントの監視可能性](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html)は、CloudWatch の統合監視機能に追加されました。

**どの AWS サービスが Amazon CloudWatch と Amazon CloudWatch Logs に統合されていますか?**

Amazon CloudWatch は 70 以上の AWS サービスと統合されており、お客様は簡素化された監視とスケーラビリティのためにアクションなしでインフラストラクチャメトリクスを収集できます。サポートされている[CloudWatch メトリクスを公開する AWS サービス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)の完全なリストについては、ドキュメントを参照してください。現在、30 以上の AWS サービスが CloudWatch Logs にログを公開しています。サポートされている[CloudWatch Logs にログを公開する AWS サービス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/aws-services-sending-logs.html)の完全なリストについては、ドキュメントを参照してください。

**Amazon CloudWatch にすべての AWS サービスから公開されているメトリクスのリストはどこで入手できますか?**

[Amazon CloudWatch にメトリクスを公開する AWS サービス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)のリストは、AWS ドキュメントにあります。

**Amazon CloudWatch へのメトリクスの収集と監視を開始するにはどうすればよいですか?**

[Amazon CloudWatch は様々な AWS サービスからメトリクスを収集](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/working_with_metrics.html)し、[AWS マネジメントコンソール、AWS CLI、API](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/viewing_metrics_with_cloudwatch.html)で表示できます。Amazon CloudWatch は、Amazon EC2 インスタンスの[利用可能なメトリクス](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html)を収集します。追加のカスタムメトリクスについては、統合 CloudWatch エージェントを使用して収集と監視を行うことができます。

> 関連する AWS Observability ワークショップ: [Metrics](https://catalog.workshops.aws/observability/en-US/aws-native/metrics)

**Amazon EC2 インスタンスでは非常に詳細なレベルの監視が必要です。どうすればよいですか?**

デフォルトでは、Amazon EC2 はインスタンスの基本監視として 5 分間隔でメトリクスデータを CloudWatch に送信します。インスタンスのメトリクスデータを 1 分間隔で CloudWatch に送信するには、[詳細監視](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/using-cloudwatch-new.html)をインスタンスで有効にできます。

**自分のアプリケーションで独自のメトリクスを公開したいのですが、その方法はありますか?**

お客様は、API または CLI を使用して、1 分の標準解像度または 1 秒間隔の高解像度で、[カスタムメトリクス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/publishingMetrics.html)を CloudWatch に公開することもできます。

CloudWatch エージェントは、Linux で Elastic Network Adapter (ENA) を使用する [EC2 インスタンスのネットワークパフォーマンスメトリクス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-network-performance.html)、Linux サーバーからの [NVIDIA GPU メトリクス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-NVIDIA-GPU.html)、procstat プラグインを使用した Linux および Windows サーバー上の[個別プロセス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-procstat-process-metrics.html)からのプロセスメトリクスなど、特殊なシナリオでカスタムメトリクスの収集もサポートしています。

> 関連する AWS Observability ワークショップ: [Public custom metrics](https://catalog.workshops.aws/observability/en-US/aws-native/metrics/publishmetrics)

**Amazon CloudWatch エージェントを使用してカスタムメトリクスを収集するための追加のサポートはありますか?**

アプリケーションやサービスからのカスタムメトリクスは、[StatsD](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-custom-metrics-statsd.html)または[collectd](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-custom-metrics-collectd.html)プロトコルをサポートする統合 CloudWatch エージェントを使用して取得できます。StatsD は、さまざまなアプリケーションからメトリクスを収集できるポピュラーなオープンソースソリューションです。StatsD は、Linux と Windows ベースのサーバーの両方でサポートされており、独自のメトリクスを計装するのに特に役立ちます。collectd プロトコルは、Linux サーバーでのみサポートされているポピュラーなオープンソースソリューションで、さまざまなアプリケーションのシステム統計を収集できるプラグインが用意されています。

**ワークロードには多くの一時的なリソースが含まれ、高い基数のログが生成されます。メトリクスとログの収集と測定にはどのようなアプローチが推奨されますか?**

[CloudWatch 組み込みメトリクスフォーマット](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format.html)により、お客様は複雑な高基数のアプリケーションデータをログの形式で取り込み、Lambda 関数やコンテナなどの一時的なリソースからアクションを起こすメトリクスを生成できます。これにより、お客様は別のコードを計装したり保守したりする必要なく、カスタムメトリクスを詳細なログイベントデータとともに埋め込むことができ、ログデータに対する強力な分析機能を得ることができます。また、CloudWatch は自動的にカスタムメトリクスを抽出して、データの可視化とリアルタイムの問題検出のためのアラーム設定を支援します。

> 関連する AWS Observability ワークショップ: [Embedded Metric Format](https://catalog.workshops.aws/observability/en-US/aws-native/metrics/emf)

**Amazon CloudWatch へのログの収集と監視を開始するにはどうすればよいですか?**

[Amazon CloudWatch Logs](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html)は、既存のシステム、アプリケーション、カスタムログファイルを使用して、システムとアプリケーションをほぼリアルタイムで監視およびトラブルシューティングできるようにします。お客様は[統合 CloudWatch エージェント](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/CWL_GettingStarted.html)をインストールして、[Amazon EC2 インスタンスとオンプレミスサーバーからログを CloudWatch に収集](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html)できます。

> 関連する AWS Observability ワークショップ: [Log Insights](https://catalog.workshops.aws/observability/en-US/aws-native/logs/logsinsights)

**CloudWatch エージェントとは何ですか?なぜ使用する必要がありますか?**

[統合 CloudWatch エージェント](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html)は、x86-64 および ARM64 アーキテクチャをサポートするほとんどのオペレーティングシステムで動作するオープンソースソフトウェア (MIT ライセンス) です。CloudWatch エージェントは、オペレーティングシステムを問わず、Amazon EC2 インスタンスとオンプレミスサーバーからシステムレベルのメトリクスを収集し、アプリケーションやサービスからカスタムメトリクスを取得し、Amazon EC2 インスタンスとオンプレミスサーバーからログを収集します。

**環境にはさまざまなスケールのインストールが必要なので、CloudWatch エージェントを通常どおりインストールするだけでなく、自動化してインストールする方法はありますか?**

サポートされているすべてのオペレーティングシステム (Linux および Windows サーバー) で、お客様は[コマンドライン](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/installing-cloudwatch-agent-commandline.html)、AWS [Systems Manager](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/installing-cloudwatch-agent-ssm.html)、または AWS [CloudFormation テンプレート](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent-New-Instances-CloudFormation.html)を使用して CloudWatch エージェントを[インストール](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance.html)できます。また、[オンプレミスサーバーに CloudWatch エージェントをインストール](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-premise.html)して監視することもできます。

**当社には複数の AWS アカウントと複数のリージョンがあります。Amazon CloudWatch はこのようなシナリオに対応していますか?**

Amazon CloudWatch は[クロスアカウント監視](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html)を提供しており、リージョン内の複数のアカウントにまたがるリソースとアプリケーションの正常性を監視およびトラブルシューティングできます。Amazon CloudWatch は[クロスアカウント、クロスリージョンのダッシュボード](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Cross-Account-Cross-Region.html)も提供しています。この機能により、お客様はマルチアカウント、マルチリージョンのリソースとワークロードの可視性と洞察を得ることができます。

**Amazon CloudWatch には自動化のサポートがありますか?**

AWS マネジメントコンソールから Amazon CloudWatch にアクセスするほかに、お客様は API、[AWS コマンドラインインターフェイス (CLI)](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/getting-started-install.html)、[AWS SDK](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/sdk-general-information-section.html) を使用してサービスにアクセスできます。メトリクスとダッシュボードの [CloudWatch API](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/APIReference/Welcome.html) は、[AWS CLI](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/cli/Welcome.html) を通じて自動化したり、ソフトウェア/製品と統合したりできるため、リソースやアプリケーションの管理や運用にかかる時間を節約できます。ログの [CloudWatch API](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatchLogs/latest/APIReference/Welcome.html) と [AWS CLI](https://docs.aws.amazon.com/ja_jp/cli/latest/reference/logs/index.html) も別途用意されています。お客様の参考のために、[AWS SDK を使用した CloudWatch のコード例](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/service_code_examples.html)も提供されています。

**リソースの監視を素早く開始したいのですが、推奨されるアプローチはありますか?**

CloudWatch の自動ダッシュボードは、すべての AWS パブリックリージョンで利用可能で、すべての AWS リソースの正常性とパフォーマンスの集約ビューを提供します。これにより、お客様は監視を素早く開始し、リソースベースのメトリクスとアラームを確認し、パフォーマンスの問題の根本原因を簡単に掘り下げることができます。[自動ダッシュボード](https://docs.aws.amazon.com/ja_jp/prescriptive-guidance/latest/implementing-logging-monitoring-cloudwatch/cloudwatch-dashboards-visualizations.html)は、AWS サービスの推奨ベストプラクティスに基づいて事前構築されており、リソースを認識し、重要なパフォーマンスメトリクスの最新の状態を動的に反映します。

関連する AWS Observability ワークショップ: [Automatic Dashboards](https://catalog.workshops.aws/observability/en-US/aws-native/dashboards/autogen-dashboard)

**CloudWatch で監視する内容をカスタマイズしたいのですが、推奨されるアプローチはありますか?**

[カスタムダッシュボード](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/create_dashboard.html)を使用すると、お客様は必要な数だけ追加のダッシュボードを作成し、さまざまなウィジェットをカスタマイズできます。カスタムダッシュボードを作成する際には、さまざまなウィジェットタイプから選択してカスタマイズできます。

関連する AWS Observability ワークショップ: [Dashboarding](https://catalog.workshops.aws/observability/en-US/aws-native/ec2-monitoring/dashboarding)

**カスタムダッシュボードを作成しましたが、共有する方法はありますか?**

はい、[CloudWatch ダッシュボードの共有](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/cloudwatch-dashboard-sharing.html)が可能です。共有方法には 3 つあります。リンクにアクセスできる人なら誰でもダッシュボードを公開して閲覧できるようにする方法、ダッシュボードを閲覧できる人のメールアドレスを指定して非公開で共有する方法、シングルサインオン (SSO) プロバイダーを指定してアカウント内のすべての CloudWatch ダッシュボードを共有する方法です。

> 関連する AWS Observability ワークショップ: [Sharing CloudWatch Dashboards](https://catalog.workshops.aws/observability/en-US/aws-native/dashboards/sharingdashboard)

**アプリケーションとその下にある AWS リソースの監視可能性を改善したいのですが、どのように実現できますか?**

[Amazon CloudWatch Application Insights](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/cloudwatch-application-insights.html) は、SQL Server データベース、.Net ベースの Web (IIS) スタック、アプリケーションサーバー、OS、ロードバランサー、キューなどの基盤となる AWS リソースとともに、アプリケーションの監視可能性を促進します。アプリケーションリソースとテクノロジースタック全体にわたってキーメトリクスとログを設定できるため、平均修復時間 (MTTR) を短縮し、アプリケーションの問題をより早く特定できます。

> 追加情報: [AWS リソースとカスタムメトリクスの監視](https://aws.amazon.com/jp/cloudwatch/faqs/)

**当社はオープンソース中心なので、Amazon CloudWatch はオープンソーステクノロジーを使用した監視と監視可能性をサポートしていますか?**

メトリクスとトレースを収集するために、[AWS Distro for OpenTelemetry (ADOT) Collector](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-open-telemetry.html) を CloudWatch エージェントと併せて Amazon EC2 インスタンスにインストールし、OpenTelemetry SDK を使用してアプリケーショントレースとメトリクスを Amazon EC2 インスタンス上で実行されているワークロードから収集できます。

Amazon CloudWatch で OpenTelemetry メトリクスをサポートするために、[AWS EMF Exporter for OpenTelemetry Collector](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter/awsemfexporter) は OpenTelemetry 形式のメトリクスを CloudWatch 組み込みメトリクスフォーマット (EMF) に変換します。これにより、OpenTelemetry メトリクスに統合されたアプリケーションは、高基数の[アプリケーションメトリクスを CloudWatch に送信](https://aws-otel.github.io/docs/getting-started/adot-eks-add-on/config-cloudwatch)できるようになります。

ログについては、Fluent Bit を使用すると、[Amazon EC2 からログを AWS サービス (Amazon CloudWatch Logs を含む) にストリーミング](https://docs.fluentbit.io/manual/pipeline/outputs/cloudwatch)するための簡単な拡張ポイントを作成できます。新しく発表された [Fluent Bit プラグイン](https://github.com/aws/amazon-cloudwatch-logs-for-fluent-bit#new-higher-performance-core-fluent-bit-plugin)を使用すると、ログを Amazon CloudWatch にルーティングできます。

ダッシュボードについては、Amazon Managed Grafana に [Amazon CloudWatch をデータソースとして追加](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/using-amazon-cloudwatch-in-AMG.html)できます。Grafana ワークスペースコンソールの AWS データソース設定オプションを使用すると、CloudWatch へのアクセスに必要な認証情報の設定を管理しながら、既存の CloudWatch アカウントを検出できます。

**既にワークロードが Prometheus を使用してメトリクスを収集するように構築されています。同じ方法を続けることはできますか?**

お客様は、オブザーバビリティニーズに対してオープンソース環境を選択することができます。そのために、AWS Distro for OpenTelemetry (ADOT) Collector を設定して、Prometheus で計装されたアプリケーションからメトリクスをスクレイピングし、Prometheus Server または Amazon Managed Prometheus にメトリクスを送信できます。

EC2 インスタンス上に CloudWatch エージェントをインストールし、[Prometheus からメトリクスをスクレイピングするように設定](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-PrometheusEC2.html)すれば、CloudWatch での監視が可能になります。これは、EC2 上のコンテナワークロードを使用し、オープンソースの Prometheus 監視と互換性のあるカスタムメトリクスが必要なお客様に役立ちます。

CloudWatch の [Prometheus 用 Container Insights 監視](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/ContainerInsights-Prometheus.html)は、コンテナ化されたシステムとワークロードから Prometheus メトリクスの検出を自動化します。Prometheus メトリクスの検出は、Amazon Elastic Container Service (ECS)、Amazon Elastic Kubernetes Service (EKS)、および Amazon EC2 インスタンス上で実行される Kubernetes クラスターでサポートされています。

**ワークロードにはマイクロサービスコンピューティング、特に EKS/Kubernetes 関連のコンテナが含まれています。Amazon CloudWatch を使用してこの環境の洞察を得るにはどうすればよいですか?**

お客様は [CloudWatch Container Insights](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/ContainerInsights.html) を使用して、[Amazon Elastic Kubernetes Service (Amazon EKS)](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/deploy-container-insights-EKS.html) またはAmazon EC2 上の Kubernetes プラットフォームで実行されているコンテナ化されたアプリケーションとマイクロサービスからメトリクスとログを収集、集約、要約できます。[Container Insights](https://aws.amazon.com/jp/cloudwatch/faqs/) は、Amazon EKS の Fargate 上に展開されたクラスターからのメトリクス収集もサポートしています。CloudWatch は、CPU、メモリー、ディスク、ネットワークなどの多くのリソースの[メトリクスを自動的に収集](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Container-Insights-metrics.html)し、コンテナの再起動失敗などの[診断情報](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Container-Insights-reference.html)を提供して、問題を迅速に特定して解決できるようにします。

> 関連する AWS Observability ワークショップ: [Container Insights on EKS](https://catalog.workshops.aws/observability/en-US/aws-native/insights/containerinsights/eks)

**ワークロードにはマイクロサービスコンピューティング、特に ECS 関連のコンテナが含まれています。Amazon CloudWatch を使用してこの環境の洞察を得るにはどうすればよいですか?**

お客様は [CloudWatch Container Insights](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/ContainerInsights.html) を使用して、[Amazon Elastic Container Service (Amazon ECS)](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/deploy-container-insights-ECS.html) またはAmazon EC2 上のコンテナプラットフォームで実行されているコンテナ化されたアプリケーションとマイクロサービスからメトリクスとログを収集、集約、要約できます。[Container Insights](https://aws.amazon.com/jp/cloudwatch/faqs/) は、Amazon ECS の Fargate 上に展開されたクラスターからのメトリクス収集もサポートしています。CloudWatch は、CPU、メモリー、ディスク、ネットワークなどの多くのリソースの[メトリクスを自動的に収集](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Container-Insights-metrics.html)し、コンテナの再起動失敗などの[診断情報](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Container-Insights-reference.html)を提供して、問題を迅速に特定して解決できるようにします。

> 関連する AWS Observability ワークショップ: [Container Insights on ECS](https://catalog.workshops.aws/observability/en-US/aws-native/insights/containerinsights/ecs)

**ワークロードにはサーバーレスコンピューティング、特に AWS Lambda が含まれています。Amazon CloudWatch を使用してこの環境の洞察を得るにはどうすればよいですか?**

お客様は [CloudWatch Lambda Insights](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/Lambda-Insights.html) を使用して、AWS Lambda 上で実行されているサーバーレスアプリケーションを監視およびトラブルシューティングできます。[CloudWatch Lambda Insights](https://aws.amazon.com/jp/cloudwatch/faqs/) は、CPU 時間、メモリー、ディスク、ネットワークなどのシステムレベルのメトリクスを収集、集約、要約するとともに、コールドスタートや Lambda ワーカーのシャットダウンなどの診断情報を収集、集約、要約して、Lambda 関数の問題を迅速に特定して解決できるようにします。

> 関連する AWS Observability ワークショップ: [Lambda Insights](https://catalog.workshops.aws/observability/en-US/aws-native/insights/lambdainsights)

**Amazon CloudWatch Logs に多くのログを集約しているのですが、そのデータの監視可能性をどのように高めればよいですか?**

[CloudWatch Logs Insights](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/AnalyzingLogData.html) を使用すると、ログデータを対話的に検索および分析し、Amazon CloudWatch Logs で運用上の問題に効率的かつ効果的に対応するためのクエリを実行できます。問題が発生した場合、[CloudWatch Logs Insights](https://aws.amazon.com/jp/cloudwatch/faqs/) を使用して、潜在的な原因を特定し、展開された修正を検証できます。

**Amazon CloudWatch Logs でログをクエリするにはどうすればよいですか?**

CloudWatch Logs Insights の Amazon CloudWatch Logs では、[クエリ言語](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html)を使用してロググ
