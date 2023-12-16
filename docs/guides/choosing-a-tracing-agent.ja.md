# トレーシングエージェントの選択

## 正しいエージェントの選択

AWS は直接、[トレース](../../signals/traces/) の収集のために 2 つのツールセットをサポートしています(さらに、[監視パートナー](https://aws.amazon.com/products/management-and-governance/partners/) の豊富なラインナップがあります)。

* [AWS Distro for OpenTelemetry](https://aws-otel.github.io/)、一般的に ADOT と呼ばれる
* X-Ray の [SDK](https://docs.aws.amazon.com/xray/latest/devguide/xray-instrumenting-your-app.html) と [デーモン](https://docs.aws.amazon.com/xray/latest/devguide/xray-daemon.html)

使用するツールまたはツールの選択は、監視ソリューションの進化に伴って行う主要な決定事項です。これらのツールは相互に排他的ではなく、必要に応じて一緒に混在させることができます。そして、この選択を行うためのベストプラクティスがあります。しかし、まず [OpenTelemetry (OTEL)](https://opentelemetry.io/) の現状を理解する必要があります。

OTEL は、現在の業界標準の監視シグナリングの仕様であり、3 つのコアシグナルタイプ([メトリクス](../../signals/metrics/)、[トレース](../../signals/traces/)、[ログ](../../signals/logs/))のそれぞれの定義が含まれています。しかし、OTEL は常に存在していたわけではなく、[OpenMetrics](https://openmetrics.io) や [OpenTracing](https://opentracing.io) などの以前の仕様から進化してきました。監視ベンダーは最近年に OpenTelemetry Line Protocol (OTLP) のサポートを公開し始めました。

X-Ray や CloudWatch は OTEL 仕様よりも前に存在しており、他の主要な監視ソリューションも同様です。しかし、X-Ray サービスは、ADOT を使用して OTEL トレースを簡単に受け入れます。ADOT には統合がすでに組み込まれており、X-Ray や他の ISV ソリューションに直接テレメトリを送信できます。

トランザクショントレースソリューションには、シグナルを収集するためにエージェントと基盤アプリケーションへの統合が必要です。これにより、テスト、メンテナンス、アップグレードが必要なライブラリの形での[技術的負債](../../faq/#what-is-technical-debt)が発生します。また、将来ソリューションを変更する場合は、再構築が必要になる可能性があります。

X-Ray に含まれる SDK は、AWS が提供する緊密に統合されたインスツルメンテーションソリューションの一部です。ADOT は、X-Ray が多数のトレースソリューションのひとつにすぎない、より広範な業界ソリューションの一部です。X-Ray を使用してエンドツーエンドのトレースを実装できますが、最も有用なアプローチを決定するためには、これらの違いを理解することが重要です。

!!! success
	次の場合は、アプリケーションに AWS Distro for OpenTelemetry をインスツルメンテーションすることをおすすめします。

    * コードを再インスツルメンテーションすることなく、複数の異なるトレースバックエンドにトレースを送信できる必要がある場合。 たとえば、X-Ray コンソールの使用から [Zipkin](https://zipkin.io) への移行を希望する場合、コレクターの構成のみが変更され、アプリケーションコードは変更されません。

    * OpenTelemetry コミュニティによってメンテナンスされている、各言語の多数のライブラリインスツルメンテーションのサポートが必要な場合。

!!! success
	次の場合は、アプリケーションへのインスツルメンテーションに X-Ray SDK を選択することをおすすめします。

    * 緊密に統合されたシングルベンダーソリューションが必要な場合。

    * Node.js、Python、Ruby、.NET を使用している場合、X-Ray コンソールからのサンプリングルールの構成と、複数のホストでの自動使用を含む、X-Ray の集中サンプリングルールとの統合が必要な場合。
