# シンセティックテスト

Amazon CloudWatch Synthetics を使用すると、実際のユーザーがいなくても、お客様の視点からアプリケーションを監視できます。
API とウェブサイトのエクスペリエンスを継続的にテストすることで、ユーザートラフィックがない場合でも発生する間欠的な問題の可視化が可能になります。

Canary は設定可能なスクリプトで、API とウェブサイトのエクスペリエンスを 24時間365日テストするためにスケジュールで実行できます。
Canary は実際のユーザーと同じコードパスとネットワークルートに従い、レイテンシ、ページロードエラー、壊れたリンクやデッドリンク、壊れたユーザーワークフローなど、予期しない動作を通知します。

![CloudWatch Synthetics architecture](../images/synthetics0.png)

!!! important
    Synthetics Canary を使用して、所有権またはアクセス許可があるエンドポイントと API のみを監視するようにしてください。
    Canary の頻度設定によって、これらのエンドポイントはトラフィックが増加する可能性があります。

## はじめに

### 完全なカバレッジ

!!! tip
    テスト戦略を立てる際は、Amazon VPC 内のパブリックエンドポイントと[プライベート内部エンドポイント](https://aws.amazon.com/blogs/mt/monitor-your-private-endpoints-using-cloudwatch-synthetics/)の両方を考慮してください。

### 新しい Canary の記録

[CloudWatch Synthetics Recorder](https://chrome.google.com/webstore/detail/cloudwatch-synthetics-rec/bhdnlmmgiplmbcdmkkdfplenecpegfno) Chrome ブラウザプラグインを使用すると、複雑なワークフローからスクラッチで新しい Canary テストスクリプトをすばやく構築できます。記録中に取られたタイプとクリックアクションは、Canary を作成するために使用できる Node.js スクリプトに変換されます。CloudWatch Synthetics Recorder の既知の制限事項は、[このページ](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Recorder.html#CloudWatch_Synthetics_Canaries_Recorder-limitations)で注記されています。

### 集計メトリクスの表示

Canary スクリプトのフリートから収集された集計メトリクスに関する既製のレポート機能を利用しましょう。CloudWatch 自動ダッシュボード

![The CloudWatch Dashboard for Synthetics](../images/synthetics1.png)

## Canary の構築

### ブループリント

[Canary ブループリント](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints.html)を使用して、複数の Canary タイプのセットアッププロセスを簡素化します。

![Multiple ways to create a synthetics canary](../images/synthetics2.png)

!!! info
    ブループリントは、Canary の記述を開始するための便利な方法であり、コードなしでシンプルなユースケースをカバーできます。

### 保守性

独自の Canaries を作成すると、それらは *ランタイムバージョン*に結び付けられます。これは、Selenium を使用した Python または Puppeteer を使用した JavaScript の特定のバージョンになります。現在サポートされているランタイムバージョンと廃止予定のバージョンのリストについては、[このページ]を参照してください。

!!! success
    Canary の実行中にアクセスできるデータを共有するために[環境変数を使用](https://aws.amazon.com/blogs/mt/using-environment-variables-with-amazon-cloudwatch-synthetics/)することで、スクリプトの保守性を向上させます。
    
!!! success
    利用可能な場合は、Canaries を最新のランタイムバージョンにアップグレードします。

### 文字列シークレット

Canary をコーディングして、Canary やその環境変数の外部のセキュアなシステムからシークレット (ログイン資格情報など) をプルできます。AWS Lambda からアクセスできるシステムであれば、実行時に Canary にシークレットを提供できる可能性があります。 

!!! success
    テストを実行し、データベースの接続詳細、API キー、アプリケーション資格情報などのシークレットを AWS Secrets Manager を使用して保存することで、[ユーザーワークフロー体験のセキュアな監視](https://aws.amazon.com/blogs/mt/secure-monitoring-of-user-workflow-experience-using-amazon-cloudwatch-synthetics-and-aws-secrets-manager/)を実現できます。

## 大規模な Canaries の管理

### 壊れたリンクの確認

!!! success
    ウェブサイトに多数の動的コンテンツとリンクが含まれている場合は、CloudWatch Synthetics を使用してウェブサイトをクロールし、[壊れたリンクを検出](https://aws.amazon.com/blogs/mt/cloudwatch-synthetics-to-find-broken-links-on-your-website/)し、障害の理由を特定できます。その後、障害のしきい値を使用して、しきい値が超過したときにオプションで [CloudWatch アラーム](../../toosl/alarms/) を作成します。

### 複数のハートビート URL

!!! success
    テストを簡略化し、コストを最適化するには、単一のハートビート監視 Canary テストで[複数の URL をバッチ処理](https://aws.amazon.com/blogs/mt/simplify-your-canary-by-batching-multiple-urls-in-amazon-cloudwatch-synthetics/)します。そうすると、Canary 実行レポートのステップサマリで、各 URL のステータス、期間、関連するスクリーンショット、失敗理由を確認できます。

### グループで整理する

!!! success
    [グループ](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Groups.html)でキャナリーを整理し、トラッキングすることで、集計メトリクスを表示したり、障害をより簡単に分離およびドリルダウンしたりできます。

![Organize and track canaries in groups](../images/synthetics3.png)  

!!! warning
    クロスリージョンのグループを作成する場合、グループにはキャナリーの*正確な*名前が必要になることに注意してください。

## ランタイムオプション

### バージョンとサポート

CloudWatch Synthetics は現在、スクリプトに Node.js を使用し、フレームワークに [Puppeteer](https://github.com/puppeteer/puppeteer) を使用したランタイムと、スクリプトに Python を使用し、フレームワークに [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) を使用したランタイムをサポートしています。

!!! success
    Canary で最新のランタイム バージョンを常に使用することで、Synthetics ライブラリの最新の機能と更新を利用できます。

[廃止予定のランタイム](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html#CloudWatch_Synthetics_Canaries_runtime_support) を使用している Canary がある場合、CloudWatch Synthetics は 60 日前にメールで通知します。

### コードサンプル

[Node.js と Puppeteer](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Samples.html#CloudWatch_Synthetics_Canaries_Samples_nodejspup) と [Python と Selenium](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Samples.html#CloudWatch_Synthetics_Canaries_Samples_pythonsel) のコードサンプルから始めましょう。

### Selenium 用のインポート

[Python と Selenium](https://aws.amazon.com/blogs/mt/create-canaries-in-python-and-selenium-using-amazon-cloudwatch-synthetics/) を使用してゼロから Canary を作成するか、最小限の変更で既存のスクリプトをインポートして作成できます。
