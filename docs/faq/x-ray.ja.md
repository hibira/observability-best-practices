# AWS X-Ray - FAQ

1. **AWS Distro for Open Telemetry(ADOT) は、EventBridge や SQS などの AWS サービス間でのトレースのプロパゲーションをサポートしていますか?**
    技術的には、それは ADOT ではなく AWS X-Ray です。プロパゲーションを行ったり、スパンを生成したりする AWS サービスの数と種類を拡大する作業を進めています。これに依存するユースケースがある場合は、ご連絡ください。
1. **ADOT を使用して AWS X-Ray にスパンを取り込むために、W3C トレースヘッダーを使用できますか?**
    はい、2023年後半に可能になります。 W3C トレースコンテキストプロパゲーションのサポートに取り組んでいます。
1. SQS が中間にある場合、Lambda 関数間のリクエストをトレースできますか?
    はい。X-Ray は現在、SQS が中間にある場合の Lambda 関数間のトレースをサポートしています。 上流のメッセージプロデューサーからのトレースは、下流の Lambda コンシューマーノードからのトレースと[自動的にリンクされ](https://docs.aws.amazon.com/xray/latest/devguide/xray-services-sqs.html)、アプリケーションのエンドツーエンドのビューが作成されます。
1. **アプリケーションの計装には X-Ray SDK と OTel SDK のどちらを使用するべきですか?**
    OTel は X-Ray SDK よりも機能が豊富ですが、ユースケースに適したものを選択するには、[ADOT と X-Ray SDK の選択](https://docs.aws.amazon.com/xray/latest/devguide/xray-instrumenting-your-app.html#xray-instrumenting-choosing) を参照してください。 
1. **[スパンイベント](https://opentelemetry.io/docs/instrumentation/ruby/manual/#add-span-events) は AWS X-Ray でサポートされていますか?**
 スパンイベントは X-Ray モデルに適合せず、ドロップされます。
1. **AWS X-Ray からデータを抽出するにはどうすればよいですか?**
 [X-Ray API を使用して](https://docs.aws.amazon.com/xray/latest/devguide/xray-api-gettingdata.html)、サービスグラフ、トレース、ルート原因分析データを取得できます。
1. **サンプリングなしで、すべてのトレースを記録する 100% サンプリングを実現できますか。**
 サンプリングルールを調整して、大幅に増加した量のトレースデータをキャプチャできます。送信されるセグメントの合計が、[ここで述べられているサービスクォータ制限](https://docs.aws.amazon.com/general/latest/gr/xray.html#limits_xray) を超えない限り、X-Ray は構成されたとおりにデータを収集する努力をします。 その結果、100% のトレースデータキャプチャが保証されるわけではありません。
1. **サンプリングルールを動的に増減できますか?** 
はい、必要に応じて動的に調整できるように、[X-Ray サンプリング API](https://docs.aws.amazon.com/xray/latest/devguide/xray-api-sampling.html) を使用できます。 ユースケースベースの説明については、この[ブログ](https://aws.amazon.com/blogs/mt/dynamically-adjusting-x-ray-sampling-rules/) を参照してください。
1. **製品 FAQ** 
 [https://aws.amazon.com/xray/faqs/]()
