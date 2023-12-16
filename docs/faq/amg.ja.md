# Amazon Managed Grafana - よくある質問

1. **Amazon Managed Grafanaを選択する理由は何ですか?**

**[高可用性](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/disaster-recovery-resiliency.html)**: Amazon Managed Grafana のワークスペースは、マルチAZレプリケーションにより高可用性が実現しています。Amazon Managed Grafana はワークスペースの健全性を継続的に監視し、ワークスペースへのアクセスに影響を与えることなく不健全なノードを交換します。Amazon Managed Grafana は、お客様がインフラリソースの管理に時間を費やす必要がないように、コンピュートおよびデータベースノードの可用性を管理します。

**[データセキュリティ](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/security.html)**: Amazon Managed Grafana は、特別な設定、サードパーティツール、追加コストなしでデータを暗号化します。[転送中のデータ](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/infrastructure-security.html)も TLS によって暗号化されます。

1. **どの AWS リージョンがサポートされていますか?**
現在サポートされているリージョンのリストは、[ドキュメントのサポートされているリージョンのセクション](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/what-is-Amazon-Managed-Service-Grafana.html#AMG-supported-Regions)で確認できます。

1. **Organization内に複数のAWSアカウントと複数のリージョンがある場合、Amazon Managed Grafanaはこれらのシナリオに対応していますか?**

Amazon Managed Grafana は [AWS Organizations](https://docs.aws.amazon.com/ja_jp/organizations/latest/userguide/orgs_introduction.html) と統合されており、Organization ユニット(OU)内の AWS アカウントとリソースを検出できます。AWS Organizations を使用することで、複数の AWS アカウントに対して[データソースの構成とアクセス許可の設定を集中管理](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/AMG-and-Organizations.html)できます。

1. **Amazon Managed Grafana でサポートされているデータソースは何ですか?** 

データソースは、Amazon Managed Grafana でダッシュボードを構築するために Grafana でクエリできるストレージバックエンドです。Amazon Managed Grafana は、Amazon CloudWatch、Amazon OpenSearch Service、AWS IoT SiteWise、AWS IoT TwinMaker、Amazon Managed Service for Prometheus、Amazon Timestream、Amazon Athena、Amazon Redshift、AWS X-Rayなどの AWS ネイティブサービスを含む[30を超える組み込みデータソース](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/AMG-data-sources-builtin.html)をサポートしています。 さらに、アップグレードされたワークスペースの Grafana Enterprise では、[約15のその他のデータソース](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/AMG-data-sources-enterprise.html)も使用できます。

1. **ワークロードのデータソースはプライベートVPC内にあります。 これらをAmazon Managed Grafanaに安全に接続するにはどうすればよいですか?**

プライベート[VPC内のデータソース](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/AMG-configure-vpc.html)は、AWS PrivateLink を介して Amazon Managed Grafana に接続でき、トラフィックは安全に保たれます。さらに、[VPCエンドポイント](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/AMG-configure-nac.html)からの Amazon Managed Grafana サービスへのアクセス制御は、[IAMリソースポリシー](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/VPC-endpoints.html#controlling-vpc)を添付することで制限できます。

1. **Amazon Managed Grafanaで利用できるユーザー認証メカニズムは何ですか?**

Amazon Managed Grafana ワークスペースでは、[ユーザーは Grafana コンソールに](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/authentication-in-AMG.html) Security Assertion Markup Language 2.0 (SAML 2.0) または AWS IAM Identity Center (AWS Single Sign-On の後継) をサポートする ID プロバイダを使用したシングルサインオンによって認証されます。

> 関連ブログ: [Grafana Teamsを使用したAmazon Managed Grafanaでのきめ細かいアクセス制御](https://aws.amazon.com/jp/blogs/news/fine-grained-access-control-in-amazon-managed-grafana-using-grafana-teams/)

1. **Amazon Managed Grafana で利用できる自動化のサポートは何ですか?**

Amazon Managed Grafanaは [AWS CloudFormation](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/creating-resources-with-cloudformation.html) と統合されているため、お客様はAWSリソースのモデリングとセットアップを行うことができ、AWSでのリソースとインフラの作成と管理に費やす時間を短縮できます。 [AWS CloudFormation](https://docs.aws.amazon.com/ja_jp/AWSCloudFormation/latest/UserGuide/Welcome.html) を使用することで、お客様はテンプレートを再利用して Amazon Managed Grafana リソースを一貫して反復的にセットアップできます。 Amazon Managed Grafana には [API](https://docs.aws.amazon.com/ja_jp/grafana/latest/APIReference/Welcome.html) も用意されており、[AWS CLI](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-chap-welcome.html) を介して自動化したり、ソフトウェア/製品と統合したりすることができます。 Amazon Managed Grafana ワークスペースには、自動化と統合をサポートする [HTTP API](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/Using-Grafana-APIs.html) があります。

> 関連ブログ: [Amazon Managed Grafana でのプライベート VPC データソース サポートの発表](https://aws.amazon.com/jp/blogs/news/announcing-private-vpc-data-source-support-for-amazon-managed-grafana/)

1. **Organization では Terraform を自動化に利用しています。Amazon Managed Grafana は Terraform をサポートしていますか?**

はい、[Amazon Managed Grafana は](https://aws-observability.github.io/observability-best-practices/recipes/recipes/amg-automation-tf/) Terraform による[自動化](https://registry.terraform.io/modules/terraform-aws-modules/managed-service-grafana/aws/latest)をサポートしています。

> 例: [Terraform サポートのリファレンス実装](https://github.com/aws-observability/terraform-aws-observability-accelerator/tree/main/examples/managed-grafana-workspace)

1. **現在の Grafana セットアップで一般的に使用されているダッシュボードがあります。 Amazon Managed Grafana で再作成するのではなく、それらを使用する方法はありますか?**

Amazon Managed Grafana は、ダッシュボード、ユーザーなどのデプロイと管理を簡単に自動化できる [HTTP API](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/Using-Grafana-APIs.html) をサポートしています。 これらの API を GitOps/CI/CD プロセスで使用して、これらのリソースの管理を自動化できます。

1. **Amazon Managed Grafana はアラートをサポートしていますか?**

[Amazon Managed Grafana のアラート](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/alerts-overview.html) 機能では、システムの問題をリアルタイムで検知し、サービスへの混乱を最小限に抑えることができる信頼できるアラートを提供します。Grafana には、単一の検索可能なビューにアラート情報を集約する、アップデートされたアラートシステムである Grafana アラートへのアクセスが含まれています。

1. **Organizationではすべてのアクションを監査のために記録する必要があります。 Amazon Managed Grafana のイベントを記録できますか?**

Amazon Managed Grafana は、[AWS CloudTrail](https://docs.aws.amazon.com/ja_jp/awscloudtrail/latest/userguide/cloudtrail-user-guide.html) と統合されており、ユーザー、ロール、または AWS サービスによって実行された Amazon Managed Grafana のアクションの記録を提供します。CloudTrail は、[Amazon Managed Grafana のすべての API 呼び出し](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/logging-using-cloudtrail.html)をイベントとしてキャプチャします。キャプチャされる呼び出しには、Amazon Managed Grafana コンソールからの呼び出しと、Amazon Managed Grafana API 操作へのコード呼び出しが含まれます。

1. **その他どのような情報が入手できますか?**

Amazon Managed Grafana の詳細については、AWS の[ドキュメント](https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/what-is-Amazon-Managed-Service-Grafana.html)をお読みいただくか、AWS Observability ワークショップの [Amazon Managed Grafana](https://catalog.workshops.aws/observability/ja-JP/aws-managed-oss/amg) を確認するか、[製品ページ](https://aws.amazon.com/jp/grafana/)をチェックして、[機能](https://aws.amazon.com/jp/grafana/features/?nc=sn&loc=2)、[価格](https://aws.amazon.com/jp/grafana/pricing/?nc=sn&loc=3)の詳細、最新の[ブログ投稿](https://aws.amazon.com/jp/grafana/resources/?nc=sn&loc=4&msg-blogs.sort-by=item.additionalFields.createdDate&msg-blogs.sort-order=desc#Latest_blog_posts)、[ビデオ](https://aws.amazon.com/jp/grafana/resources/?nc=sn&loc=4&msg-blogs.sort-by=item.additionalFields.createdDate&msg-blogs.sort-order=desc#Videos)をご確認ください。

1. **製品FAQ** [https://aws.amazon.com/jp/grafana/faqs/](https://aws.amazon.com/jp/grafana/faqs/)
