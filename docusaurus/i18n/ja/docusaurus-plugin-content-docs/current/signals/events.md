# イベント

## イベントとは何を指すのでしょうか?
現在、多くのアーキテクチャがイベント駆動型になっています。イベント駆動型アーキテクチャでは、イベントは様々なシステムからの信号であり、それらを捕捉して他のシステムに渡します。イベントは通常、状態の変化やアップデートを表します。

例えば、EC システムでは、商品がカートに追加されたときにイベントが発生します。このイベントを捕捉し、システムのショッピングカート部分に渡すことで、商品の数やカートの合計金額、商品の詳細を更新できます。

info
一部のお客様にとって、イベントは購入完了などの *マイルストーン* となる場合があります。ワークフローの完了時点をイベントとして扱うことも考えられますが、ここでは、マイルストーン自体をイベントとは見なしません。


## イベントが有用な理由は何ですか?
Observability ソリューションでイベントが有用となる主な理由は 2 つあります。1 つ目は、他のデータの文脈でイベントを可視化することです。2 つ目は、イベントに基づいてアクションを実行できるようになることです。

info
イベントは、ワークロードの変更やアクションに関する貴重な情報を、人間やマシンに提供することを目的としています。


## イベントの可視化
アプリケーションから直接得られるものではないが、アプリケーションのパフォーマンスに影響を与える可能性があるか、根本原因への洞察を提供する多くのイベントシグナルがあります。ダッシュボードはイベントを可視化する最も一般的な方法ですが、一部の分析ツールやビジネスインテリジェンスツールでも同様の機能があります。電子メールやインスタントメッセージングアプリケーションでも可視化を受信できます。

例えば、Web フロントエンドで注文を行うまでの時間などのアプリケーションパフォーマンスの時系列チャートを考えてみましょう。時系列チャートを見ると、数日前にレスポンス時間に段階的な変化があったことがわかります。最近のデプロイ状況を知ることは有用かもしれません。最近のデプロイの時系列チャートを同じチャートに重ねて表示したり、並べて表示したりできると便利でしょう。

![Visualizing events](images/visualizing_events.png)

tip
	より広い文脈を理解するのに役立つイベントを検討してください。重要なイベントとしては、コードのデプロイ、インフラストラクチャの変更、新しいデータの追加 (新商品の公開や大量のユーザー追加など)、機能の変更や追加 (カートへの商品追加方法の変更など) が考えられます。


info
	他の重要なメトリクスデータとともにイベントを可視化し、[イベントとメトリクスを相関させる](../signals/metrics/#correlate-with-operational-metric-data)ことができます。


## イベントに対するアクション
オブザーバビリティの世界では、アラームがトリガーされることが一般的なイベントです。このイベントには、おそらくアラームの識別子、アラームの状態 (例えば `IN ALARM` や `OK`) 、およびこれをトリガーした詳細が含まれます。多くの場合、このアラームイベントが検出され、電子メール通知が送信されます。これはアラームに対するアクションの一例です。

アラーム通知はオブザーバビリティにおいて重要です。これにより、問題があることを適切な人に知らせることができます。しかし、オブザーバビリティソリューションでイベントに対するアクションが成熟すると、人的介入なしで自動的に問題を修正できるようになります。

### しかし、どのような対処が必要か?
問題を検出しても、その問題を緩和するための対処を理解していなければ、自動化することはできません。オブザーバビリティの旅路の始まりでは、対処方法が明らかでないことがよくあります。しかし、問題の修復経験を積むほど、既知の対処方法に合わせてアラームを細かく調整できるようになります。使用しているアラームサービスに組み込まれた対処方法があるかもしれませんし、自分でアラームイベントをキャプチャしてスクリプトで解決する必要があるかもしれません。

info
[水平 Pod 自動スケーリング](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) のような自動スケーリングシステムは、この原理の実装に過ぎません。Kubernetes はこの自動化を抽象化しているだけです。


アラームの頻度と解決状況のデータにアクセスできれば、自動化の可能性を判断するのに役立ちます。問題の症状に基づく広範囲のアラームは問題をキャプチャするのに優れていますが、自動修復にリンクさせるにはより具体的な条件が必要になる場合があります。

この作業を行う際は、インシデント管理/チケット管理/ITSM ツールと統合することを検討してください。多くの組織ではインシデントと関連する解決策、平均修復時間 (MTTR) などのメトリクスを追跡しています。この場合、*自動化された*解決策も同様に記録することを検討してください。これにより、自動的に修復された問題の種類と割合を把握できるだけでなく、根本的な問題のパターンを探ることもできます。

tip
誰かが手動で問題を修正する必要がなかったからといって、根本原因を見過ごしてはいけません。


たとえば、サーバーが応答しなくなるたびに再起動する場合を考えてみましょう。再起動によりシステムは機能し続けますが、応答不能の原因は何でしょうか。この問題がどのくらいの頻度で発生し、パターン (レポート生成、多数のユーザー、システムバックアップなどに一致する) があるかによって、根本原因を理解して修正するための優先度とリソースが決まります。

info
[主要なパフォーマンス指標](../signals/metrics/#know-your-key-performance-indicatorskpis-and-measure-them)に関連するすべてのイベントをメッセージバスに配信し、使用できるようにすることを検討してください。また、一部のオブザーバビリティソリューションでは、明示的な構成を必要とせずに透過的にこれを行うものもあります。


## Observability プラットフォームにイベントを取り込む
重要なイベントを特定したら、それらをどのようにして Observability プラットフォームに取り込むかを検討する必要があります。
プラットフォームにはイベントをキャプチャする特定の方法があるか、ログやメトリクスデータとして取り込む必要があるかもしれません。

note
情報を取り込む簡単な方法の1つは、イベントをログファイルに書き込み、他のログイベントと同じ方法で取り込むことです。


システムでこれらのイベントを可視化する方法を探ってみてください。アプリケーションに関連するイベントを特定できますか? データを1つのチャートにまとめることができますか? 特定の機能がなくても、少なくとも他のデータと並行して時系列チャートを作成し、視覚的に相関関係を確認できるはずです。時間軸は同じにし、簡単に比較できるように垂直に積み重ねることを検討してください。

![スタックされたチャートとしてイベントを可視化する](images/visualizing_events_stacked.png)