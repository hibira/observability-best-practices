# CloudWatch Logs Insights の例クエリ

[CloudWatch Logs Insights](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/AnalyzingLogData.html) は、CloudWatch ログデータを分析およびクエリするための強力なプラットフォームを提供します。
SQL に似たクエリ言語を使用して、ログデータを対話的に検索できます。簡単ながら強力なコマンドがいくつか用意されています。

CloudWatch Logs Insights には、以下のカテゴリの事前定義された例クエリが用意されています。

- Lambda
- VPC フローログ
- CloudTrail
- 一般的なクエリ
- Route 53
- AWS AppSync
- NAT Gateway

このベストプラクティスガイドのセクションでは、事前定義の例に含まれていないその他のログタイプの例クエリを紹介します。
このリストは時間とともに進化・変更されます。独自の例を提出して確認を求めるには、GitHub の [issue](https://github.com/aws-observability/observability-best-practices/issues) に投稿してください。

## API Gateway

### 最後の 20 件の HTTP メソッドタイプを含むメッセージ

```
filter @message like /$METHOD/ 
| fields @timestamp, @message
| sort @timestamp desc
| limit 20
```

このクエリは、特定の HTTP メソッドを含む最後の 20 件のログメッセージを、タイムスタンプの降順で返します。**METHOD** を検索するメソッドに置き換えてください。このクエリの使用例は次のとおりです。

```
filter @message like /POST/ 
| fields @timestamp, @message
| sort @timestamp desc
| limit 20
```

!!! tip

    $limit の値を変更すると、返されるメッセージ数が変わります。

### IP でソートされたトップ 20 の Talkers

```
fields @timestamp, @message
| stats count() by ip
| sort ip asc
| limit 20
```

このクエリは、IP でソートされたトップ 20 の Talkers を返します。これは、API に対する悪意のある活動を検出するのに役立ちます。

次のステップとして、メソッドタイプの追加フィルターを追加できます。たとえば、このクエリは IP によるトップの Talkers を表示しますが、"PUT" メソッド呼び出しのみを表示します。

```
fields @timestamp, @message
| filter @message like /PUT/
| stats count() by ip
| sort ip asc
| limit 20
```

## CloudTrail ログ

### エラーカテゴリごとにグループ化された API スロットリングエラー

```
stats count(errorCode) as eventCount by eventSource, eventName, awsRegion, userAgent, errorCode
| filter errorCode = 'ThrottlingException' 
| sort eventCount desc
```

このクエリを使用すると、カテゴリごとにグループ化された API スロットリングエラーが降順で表示されます。

!!! tip

    このクエリを使用するには、まず [CloudTrail ログを CloudWatch に送信する](https://docs.aws.amazon.com/ja_jp/awscloudtrail/latest/userguide/send-cloudtrail-events-to-cloudwatch-logs.html) 必要があります。

### ライングラフでのルートアカウントのアクティビティ

```
fields @timestamp, @message, userIdentity.type 
| filter userIdentity.type='Root' 
| stats count() as RootActivity by bin(5m)
```

このクエリを使用すると、ルートアカウントのアクティビティをライングラフで可視化できます。このクエリは、5 分間隔ごとにルートアクティビティの発生回数をカウントし、時間経過に伴うルートアクティビティを集計します。

!!! tip

     [ログデータをグラフで可視化する](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/CWL_Insights-Visualizing-Log-Data.html)

## VPC フローログ

### 選択した送信元 IP アドレスのフロー ログをアクションが REJECT の場合にフィルタリングする

```
fields @timestamp, @message, @logStream, @log  | filter srcAddr like '$SOURCEIP' and action = 'REJECT'
| sort @timestamp desc
| limit 20
```

このクエリは、$SOURCEIP からの 'REJECT' を含む最新の 20 件のログメッセージを返します。これを使用すると、トラフィックが明示的に拒否されているか、クライアント側のネットワーク構成に問題があるかを検出できます。

!!! tip
    '$SOURCEIP' を関心のある IP アドレスの値に置き換えることを忘れずに

```
fields @timestamp, @message, @logStream, @log  | filter srcAddr like '10.0.0.5' and action = 'REJECT'
| sort @timestamp desc
| limit 20
```

### 可用性ゾーンごとにネットワークトラフィックをグループ化する

```
stats sum(bytes / 1048576) as Traffic_MB by azId as AZ_ID 
| sort Traffic_MB desc
```

このクエリは、可用性ゾーン (AZ) ごとにグループ化されたネットワークトラフィックデータを取得します。
バイトの合計をメガバイト (MB) に変換することで、各 AZ のトラフィック量を計算します。
結果は、各 AZ のトラフィック量に基づいて降順に並べ替えられます。

### ネットワークトラフィックをフロー方向でグループ化

```
stats sum(bytes / 1048576) as Traffic_MB by flowDirection as Flow_Direction 
| sort by Bytes_MB desc
```

このクエリは、フロー方向 (Ingress または Egress) でグループ化されたネットワークトラフィックを分析するように設計されています。

### ソース IP アドレスとデスティネーション IP アドレスごとのデータ転送トップ 10

```
stats sum(bytes / 1048576) as Data_Transferred_MB by srcAddr as Source_IP, dstAddr as Destination_IP 
| sort Data_Transferred_MB desc 
| limit 10
```

このクエリは、ソース IP アドレスとデスティネーション IP アドレスごとのデータ転送トップ 10 を取得します。このクエリを使用すると、特定のソースとデスティネーション IP アドレス間で最も重要なデータ転送を特定できます。
