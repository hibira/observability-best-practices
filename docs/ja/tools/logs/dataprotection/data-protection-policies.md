# SLG/EDU 向けの CloudWatch Logs データ保護ポリシー

ログデータは一般的に有益ですが、HIPAA (医療保険の相互運用性と責任に関する法律)、GDPR (一般データ保護規則)、PCI-DSS (支払いカード業界データセキュリティ標準)、FedRAMP (連邦リスク及び許可管理プログラム) などの厳しい規制がある組織にとっては、マスキングが有用です。

CloudWatch Logs の[データ保護ポリシー](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/cloudwatch-logs-data-protection-policies.html)を使用すると、トランジット中のログデータをスキャンし、検出された機密データをマスクするデータ保護ポリシーを定義して適用できます。

これらのポリシーは、パターンマッチングと機械学習モデルを利用して機密データを検出し、アカウントの CloudWatch ロググループに取り込まれたイベントに表れる機密データを監査およびマスクするのに役立ちます。

機密データを選択する際の手法と基準は、[マッチングデータ識別子](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/cloudwatch-logs-data-protection-policies.html)と呼ばれます。これらの管理対象データ識別子を使用すると、CloudWatch Logs は以下を検出できます。

- 秘密鍵や AWS シークレットアクセスキーなどの資格情報
- IP アドレスや MAC アドレスなどのデバイス識別子
- 銀行口座番号、クレジットカード番号、クレジットカード検証コードなどの金融情報
- 健康保険証番号 (EHIC) や個人健康番号などの保護された健康情報 (PHI)
- 運転免許証番号、社会保障番号、納税者番号などの個人を特定できる情報 (PII)

!!! important
    機密データは、ロググループに取り込まれる際に検出およびマスクされます。データ保護ポリシーを設定した時点で、それ以前にロググループに取り込まれたログイベントはマスクされません。

上記で説明したデータタイプのいくつかについて、さらに詳しく見ていきましょう。

## データ型

### 認証情報

認証情報は、あなたが誰であるかを確認し、リクエストしているリソースへのアクセス許可があるかどうかを検証するために使用される機密データ型です。AWS では、リクエストを認証および承認するためにプライベートキーやシークレットアクセスキーなどの認証情報を使用しています。

CloudWatch Logs Data Protection ポリシーを使用すると、選択したデータ識別子に一致する機密データがマスクされます。(このセクションの最後にマスクされた例を示します)。

![The CloudWatch Logs Data Protection for Credentials1](../../../images/cwl-dp-credentials.png)

![The CloudWatch Logs Data Protection for Credentials2](../../../images/cwl-dp-cred-sensitive.png)

!!! Tip
    データ分類のベストプラクティスは、組織、法的、コンプライアンス基準を満たす明確に定義されたデータ分類階層と要件から始まります。

    ベストプラクティスとして、組織のデータガバナンスポリシーに従ってコンプライアンスを実装するため、データ分類フレームワークに基づいて AWS リソースにタグを付けます。

!!! Tip
    ログイベントに機密データが含まれないようにするには、最初からコードで機密データを除外し、必要な情報のみをログに記録するのがベストプラクティスです。

### 金融情報

支払いカード業界データセキュリティ標準 (PCI DSS) で定義されているように、銀行口座番号、ルーティング番号、デビットカード番号、クレジットカード番号、クレジットカードの磁気ストライプデータは、機密な金融情報と見なされます。

CloudWatch Logs では、データ保護ポリシーを設定すると、ロググループの地理的位置に関係なく、指定したデータ識別子に対してスキャンを行い、機密データを検出します。

![CloudWatch Logs の金融情報データ保護](../../../images/cwl-dp-fin-info.png)

!!! info
    [金融データの種類とデータ識別子の完全なリスト](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/protect-sensitive-log-data-types-financial.html) を確認してください。

### 保護された健康情報 (PHI)

PHI には、保険や請求情報、診断データ、医療記録やデータセット、画像やテスト結果などの臨床ケアデータなど、非常に幅広い個人識別可能な健康関連データが含まれます。

CloudWatch Logs は、選択したロググループから健康情報をスキャンおよび検出し、そのデータをマスクします。

![CloudWatch Logs の PHI に対するデータ保護](../../../images/cwl-dp-phi.png)

!!! info
    [PHI データタイプとデータ識別子の完全なリスト](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/protect-sensitive-log-data-types-health.html) を確認してください。

### 個人を特定できる情報 (PII)

PII は、個人を特定できる個人データを指す文字列です。PII の例としては、住所、銀行口座番号、電話番号などがあります。

![CloudWatch Logs の PHI に対するデータ保護](../../../images/cwl-dp-pii.png)

!!! info
    [PII データタイプとデータ識別子](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/protect-sensitive-log-data-types-pii.html) の完全なリストを確認してください。

## マスクされたログ

データ保護ポリシーを設定したロググループに移動すると、データ保護が `On` になっており、コンソールに機密データの件数も表示されます。

![PHI に対する CloudWatch Logs データ保護](../../../images/cwl-dp-loggroup.png)

`Log Insights で表示` をクリックすると、Log Insights コンソールに移動します。以下のクエリを実行してログストリームのログイベントを確認すると、すべてのログの一覧が表示されます。

```
fields @timestamp, @message
| sort @timestamp desc
| limit 20
```

クエリを展開すると、以下のようにマスクされた結果が表示されます。

![PHI に対する CloudWatch Logs データ保護](../../../images/cwl-dp-masked.png)

!!! important
    データ保護ポリシーを作成すると、デフォルトで選択したデータ識別子に一致する機密データがマスクされます。`logs:Unmask` IAM 権限を持つユーザーのみがマスクされていないデータを表示できます。


!!! Tip
    [AWS IAM とアクセス管理(IAM)](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html) を使用して、CloudWatch の機密データへのアクセスを管理および制限できます。


!!! Tip
    クラウド環境の定期的な監視と監査も、機密データを保護する上で同様に重要です。アプリケーションが大量のデータを生成する場合、これは重要な側面となります。そのため、過剰なデータをログに記録しないことをお勧めします。[ロギングのベストプラクティス](https://docs.aws.amazon.com/ja_jp/prescriptive-guidance/latest/logging-monitoring-for-application-owners/logging-best-practices.html) に関する AWS の推奨ガイダンスをご覧ください。


!!! Tip
    CloudWatch Logs のロググループデータは常に暗号化されています。代替手段として、[AWS Key Management Service](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html) を使用してログデータを暗号化することもできます。


!!! Tip
    レジリエンスと拡張性を確保するために、CloudWatch アラームを設定し、AWS Amazon EventBridge と AWS Systems Manager を使用して自動化された修復を行うことをお勧めします。



[^1]: 開始するには、AWS ブログ [Amazon CloudWatch Logs を使用して機密データを保護する](https://aws.amazon.com/jp/blogs/news/protect-sensitive-data-with-amazon-cloudwatch-logs/) をご覧ください。
