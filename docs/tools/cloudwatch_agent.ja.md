# CloudWatch エージェント

## CloudWatch エージェントのデプロイ

CloudWatch エージェントは、単一インストール、分散構成ファイルの使用、複数の構成ファイルのレイヤリング、完全な自動化を使用してデプロイできます。適切なアプローチはニーズによって異なります。[^1] 

!!! success
	Windows と Linux のホストへのデプロイの両方が、構成を [Systems Manager Parameter Store](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance-fleet.html) に保存および取得する機能を備えています。この自動メカニズムを通じた CloudWatch エージェント構成のデプロイはベストプラクティスです。

!!! tip
	あるいは、CloudWatch エージェントの構成ファイルは、選択した自動化ツール ([Ansible](https://www.ansible.com)、[Puppet](https://puppet.com) など) を使用してデプロイできます。Systems Manager Parameter Store の使用は必須ではありませんが、管理を簡素化します。

## AWS 外でのデプロイ

CloudWatch エージェントの使用は AWS 内に*限定されておらず*、オンプレミスと他のクラウド環境の両方でサポートされています。ただし、AWS 外で CloudWatch エージェントを使用する場合には、以下の 2 つの追加の考慮事項に留意する必要があります。

1. エージェントが必要な API 呼び出しを行うことを許可する IAM 資格情報[^2] の設定。EC2 であっても CloudWatch API [^5]への認証なしアクセスはありません。
2. インターネットを経由して、[AWS Direct Connect](https://aws.amazon.com/directconnect/) を使用して、または [プライベートエンドポイント](https://docs.aws.amazon.com/vpc/latest/privatelink/concepts.html)(通常、*VPC エンドポイント*と呼ばれる)を使用して、CloudWatch、CloudWatch Logs やその他の AWS エンドポイント[^3]への接続を確保し、要件を満たすルートを使用してください。

!!! info
	お客様の環境と CloudWatch 間のトランスポートは、ガバナンスとセキュリティの要件に合致する必要があります。概して、AWS 外のワークロードにプライベートエンドポイントを使用することは、最も厳格な規制業界のお客様のニーズにも対応できます。しかし、ほとんどのお客様はパブリックエンドポイントを介して十分にサービスを利用できます。

## プライベートエンドポイントの使用

メトリクスとログをプッシュするために、CloudWatch エージェントは *CloudWatch* および *CloudWatch Logs* エンドポイントへの接続が必要です。
エージェントのインストール場所に基づいて、これを実現する方法はいくつかあります。

### VPC から

a. EC2 で実行されているエージェントと CloudWatch の間の完全にプライベートかつセキュアな接続を確立するために、*VPC エンドポイント*(CloudWatch と CloudWatch Logs 用)を利用できます。このアプローチでは、エージェントトラフィックがインターネットを経由することはありません。

b. もう1つの選択肢は、プライベートサブネットがインターネットに接続できるが、インターネットからの未承諾の受信接続を受け取ることができないパブリック [NAT ゲートウェイ](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html) を持つことです。

!!! note
	このアプローチでは、エージェントトラフィックが論理的にインターネット経由でルーティングされることに注意してください。
	
c. 既存の TLS と [Sigv4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) メカニズムを超えたプライベートまたはセキュアな接続性の要件がない場合、当社のエンドポイントへの接続性を提供するための最も簡単なオプションは、[インターネットゲートウェイ](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html) を持つことです。

### オンプレミスまたはその他のクラウド環境から

a. AWS 外で実行されているエージェントは、インターネット(独自のネットワーク設定を介して)または Direct Connect [Public VIF](https://docs.aws.amazon.com/ja_jp/directconnect/latest/UserGuide/WorkingWithVirtualInterfaces.html) を介して CloudWatch のパブリックエンドポイントに接続できます。

b. エージェントトラフィックをインターネット経由でルーティングしたくない場合は、[VPC インターフェイスエンドポイント](https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/vpce-interface.html)を利用して、Direct Connect Private VIF または VPN を使用してオンプレミスネットワークまでのプライベート接続を拡張できます。トラフィックがインターネットに公開されることがなく、脅威ベクトルが排除されます。

!!! success
	[AWS Systems Manager エージェント](https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/ssm-agent.html) から取得した資格情報を使用して、CloudWatch エージェントが使用する[一時的な AWS アクセストークン](https://aws.amazon.com/jp/premiumsupport/knowledge-center/cloudwatch-on-premises-temp-credentials/)を追加できます。


[^1]: CloudWatch エージェントの使用とデプロイに関するガイダンスが記載されたブログについては、[Getting started with open source Amazon CloudWatch Agent](https://aws.amazon.com/blogs/opensource/getting-started-with-open-source-amazon-cloudwatch-agent/) を参照してください。


[^2]: [オンプレミスおよびその他のクラウド環境で実行されているエージェントの資格情報の設定に関するガイダンス](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-commandline-fleet.html#install-CloudWatch-Agent-iam_user-first)

[^3]: [CloudWatch エンドポイントへの接続を確認する方法](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-commandline-fleet.html#install-CloudWatch-Agent-internet-access-first-cmd)

[^4]: [オンプレミスのプライベート接続に関するブログ](https://aws.amazon.com/jp/blogs/networking-and-content-delivery/hybrid-networking-using-vpc-endpoints-aws-privatelink-and-amazon-cloudwatch-for-financial-services/)

[^5]: オブザーバビリティに関連するすべての AWS API の使用は、通常、[インスタンスプロファイル](https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html)によって実現されます。これは、AWS で実行されているインスタンスとコンテナに一時的なアクセス資格情報を付与するメカニズムです。
