# レシピ

ここでは、オブザーバビリティ (o11y) を様々なユースケースに適用するための、厳選されたガイダンス、ハウツー、その他のリソースへのリンクを紹介します。これには、[Amazon Managed Service for Prometheus][amp]、[Amazon Managed Grafana][amg] などの管理サービス、[OpenTelemetry][otel]、[Fluent Bit][fluentbit] などのエージェントが含まれます。ただし、ここでのコンテンツは AWS ツールだけに限定されるものではなく、多くのオープンソースプロジェクトも参照されています。

開発者とインフラストラクチャ担当者の両方のニーズに対応したいと考えているため、多くのレシピは「幅広く網をかけています」。目的に最適なソリューションを探索し、見つけることをお勧めします。

!!! info
    ここでのコンテンツは、ソリューションアーキテクト、プロフェッショナルサービス、他の顧客からのフィードバックに基づく、実際の顧客との関わりから得られたものです。ここで紹介するものは、実際の顧客が自身の環境で実装したものです。

私たちがオブザーバビリティの領域を考える方法は次のとおりです。6つの次元に分解し、それらを組み合わせて特定のソリューションを導き出します。

| 次元 | 例 |
|---------------|--------------|
| 宛先  | [Prometheus][amp] · [Grafana][amg] · [OpenSearch][aes] · [CloudWatch][cw] · [Jaeger][jaeger] |
| エージェント        | [ADOT][adot] · [Fluent Bit][fluentbit] · CW エージェント · X-Ray エージェント |
| 言語     | [Java][java] · Python · .NET · [JavaScript][nodejs] · Go · Rust |
| インフラ & データベース  |  [RDS][rds] · [DynamoDB][dynamodb] · [MSK][msk] |
| 計算ユニット | [Batch][batch] · [ECS][ecs] · [EKS][eks] · [AEB][beans] · [Lambda][lambda] · [AppRunner][apprunner] |
| 計算エンジン | [Fargate][fargate] · [EC2][ec2] · [Lightsail][lightsail] |

!!! question "ソリューション要件の例"
    EKS 上の Fargate で実行している Python アプリのログソリューションが必要で、ログを S3 バケットに保存し、さらに消費したい。

この要件に合うスタックの例は次のとおりです。

1. *宛先*: データを消費するための S3 バケット
2. *エージェント*: EKS からログデータを出力する FluentBit
3. *言語*: Python
4. *インフラ & DB*: 該当なし
5. *計算ユニット*: Kubernetes (EKS)
6. *計算エンジン*: EC2

すべての次元を指定する必要はなく、どこから始めるかを決めるのが難しい場合もあります。様々な道を試し、特定のレシピのメリット・デメリットを比較してみてください。

ナビゲーションを簡単にするため、6つの次元を以下のカテゴリにグループ化しています。

- **By Compute**: 計算エンジンとユニットをカバー
- **By Infra & Data**: インフラストラクチャとデータベースをカバー
- **By Language**: 言語をカバー
- **By Destination**: テレメトリと分析をカバー
- **Tasks**: 異常検知、アラート、トラブルシューティングなどをカバー

[次元の詳細を学ぶ...](/observability-best-practices/ja/recipes/dimensions/)

## 使い方

トップナビゲーションメニューを使って、ラフな選択から特定のインデックスページに移動できます。たとえば、`By Compute` -> `EKS` -> `Fargate` -> `Logs` のようにします。

あるいは、`/` キーまたは `s` キーを押して、サイト内を検索することもできます。

![o11y space](images/search.png)

!!! info "ライセンス"
    このサイトで公開されているすべてのレシピは、[MIT-0][mit0] ライセンスの下で利用可能です。これは通常の MIT ライセンスを変更し、帰属の要件を削除したものです。

## 貢献方法

予定している内容について[ディスカッション][discussion]を開始すれば、そこから進めていきます。

## 詳細を学ぶ

このサイトのレシピは、ベストプラクティスの集まりです。さらに、私たちが使用しているオープンソースプロジェクトの状況や、レシピで紹介した管理サービスについて学ぶことができる場所がいくつかあります。

- [observability @ aws][o11yataws] は、AWS の人々がプロジェクトやサービスについて話しているプレイリストです。
- [AWS observability workshops](/observability-best-practices/ja/recipes/workshops/) では、提供されているものを構造化された方法で試すことができます。
- [AWS monitoring and observability][o11yhome] のホームページには、ケーススタディやパートナーへのリンクがあります。

[aes]: aes.md "Amazon Elasticsearch Service"
[adot]: https://aws-otel.github.io/ "AWS Distro for OpenTelemetry"
[amg]: amg.md "Amazon Managed Grafana"
[amp]: amp.md "Amazon Managed Service for Prometheus"
[batch]: https://aws.amazon.com/jp/batch/ "AWS Batch"
[beans]: https://aws.amazon.com/jp/elasticbeanstalk/ "AWS Elastic Beanstalk"
[cw]: cw.md "Amazon CloudWatch"
[dimensions]: dimensions.md
[dynamodb]: dynamodb.md "Amazon DynamoDB"
[ec2]: https://aws.amazon.com/jp/ec2/ "Amazon EC2"
[ecs]: ecs.md "Amazon Elastic Container Service"
[eks]: eks.md "Amazon Elastic Kubernetes Service"
[fargate]: https://aws.amazon.com/jp/fargate/ "AWS Fargate"
[fluentbit]: https://fluentbit.io/ "Fluent Bit"
[jaeger]: https://www.jaegertracing.io/ "Jaeger"
[kafka]: https://kafka.apache.org/ "Apache Kafka"
[apprunner]: apprunner.md "AWS App Runner"
[lambda]: lambda.md "AWS Lambda"
[lightsail]: https://aws.amazon.com/jp/lightsail/ "Amazon Lightsail"
[otel]: https://opentelemetry.io/ "OpenTelemetry"
[java]: java.md
[nodejs]: nodejs.md
[rds]: rds.md "Amazon Relational Database Service"
[msk]: msk.md "Amazon Managed Streaming for Apache Kafka"
[mit0]: https://github.com/aws/mit-0 "MIT-0"
[discussion]: https://github.com/aws-observability/observability-best-practices/discussions "Discussions"
[o11yataws]: https://www.youtube.com/playlist?list=PLaiiCkpc1U7Wy7XwkpfgyOhIf_06IK3U_ "Observability @ AWS YouTube playlist"
[o11yhome]: https://aws.amazon.com/jp/products/management-and-governance/use-cases/monitoring-and-observability/ "AWS Observability home"
