# トレース

トレースは、アプリケーションの異なるコンポーネントを通過する要求の全体的な流れを表します。

ログやメトリクスとは異なり、*トレース* は複数のアプリケーションやサービスからのイベントで構成され、サービス間のレスポンス待ち時間、サービス障害、リクエストパラメータ、メタデータなどのサービス間のつながりに関するコンテキストを含みます。 

!!! tip
    ログとトレースの間には概念的な類似性がありますが、トレースはサービス間のコンテキストで考慮されることを意図しているのに対し、ログは通常、単一のサービスまたはアプリケーションの実行に限定されます。

今日の開発者は、モジュラーで分散したアプリケーションの構築に傾倒しています。 ある人はこれを [サービス指向アーキテクチャ](https://en.wikipedia.org/wiki/Service-oriented_architecture) と呼び、別の人は [マイクロサービス](https://aws.amazon.com/microservices/) と呼ぶでしょう。 名称の違いはさておき、こうしたゆるく結合されたアプリケーションで何か問題が発生した場合、ログやイベントだけを見ても、インシデントの根本原因を追跡するのに十分とは言えません。  要求フローを完全に可視化することが不可欠であり、これがトレースの付加価値です。  エンドツーエンドの要求フローを描写する一連の因果関係のあるイベントを通じて、トレースはその可視性を高めるのに役立ちます。

トレースは、システムへの入出力の要求フローに関する基本情報を提供するため、オブザーバビリティの必須の柱です。 

!!! tip
   トレースの一般的なユースケースには、パフォーマンスプロファイリング、本番環境でのデバッグ、障害の根本原因分析などがあります。

## すべての統合ポイントにインスツルメンテーションを適用する

ワークロードの機能とコードがすべて1か所にある場合、ソースコードを見ることで、リクエストが異なる関数間をどのように渡されるかを確認できます。システムレベルでは、アプリがどのマシンで実行されているかがわかり、問題が発生した場合は、根本原因をすぐに特定できます。 これを、緩く結合された異なるコンポーネントで構成され、分散型環境で実行されているマイクロサービスベースのアーキテクチャで行うことを想像してみてください。 相互接続された各リクエストのログを見るために数多くのシステムにログインすることは、不可能ではないにせよ非実用的です。

これは、オブザーバビリティが役立つ場面です。 インスツルメンテーションは、そのオブザーバビリティを高めるための重要なステップです。 広い意味で、インスツルメンテーションとは、コードを使用してアプリケーションのイベントを測定することです。

典型的なインスツルメンテーションのアプローチは、システムに入ってくる各リクエストに一意のトレースIDを割り当て、そのトレースIDを異なるコンポーネントを通過しながら追加のメタデータとともに伝播させることです。

!!! success
    1つのサービスから別のサービスへの接続は、中央のコレクタにトレースをエミットするようにインスツルメンテーションする必要があります。このアプローチにより、ワークロードのそうでないと不透明な側面を可視化できます。

!!! success
    自動インスツルメンテーションエージェントやライブラリを使用すると、アプリケーションのインスツルメンテーションを大幅に自動化できます。

## トランザクション時間とステータスは重要なので測定しましょう!

適切に計装されたアプリケーションは、エンドツーエンドのトレースを生成できます。これは、次のようなウォーターフォールグラフとして表示できます。

![ウォーターフォールトレース](../images/waterfall-trace.png)

または、サービスマップとして表示できます。

![サービスマップトレース](../images/service-map-trace.png)

すべての対話のトランザクション時間とレスポンスコードを測定することが重要です。これにより、全体的な処理時間を計算し、SLA、SLO、ビジネス KPI へのコンプライアンスを追跡できます。 

!!! success
    相互作用のレスポンス時間とステータスコードを理解・記録することで、全体的なリクエストパターンとワークロードの健全性に影響を与える要因がわかります。

## メタデータ、アノテーション、ラベルが最良のパートナー

トレースは永続化され、一意の ID が割り当てられます。各トレースは、*スパン* または *セグメント*(ツールによって呼び方が異なります)に分割され、リクエストパス内の各ステップが記録されます。スパンは、トレースが対話するエンティティを示し、親トレースと同様に、各スパンには一意の ID とタイムスタンプが割り当てられ、追加のデータやメタデータも含めることができます。この情報は、問題が発生した正確な時間と場所が分かるため、デバッグに役立ちます。

これを実際の例で説明すると分かりやすいでしょう。電子商取引アプリケーションは、認証、認可、配送、在庫、支払い処理、履行、商品検索、推奨など、多くのドメインに分割される場合があります。しかし、これらの相互接続されたすべてのドメインからのトレースを検索する代わりに、顧客 ID でトレースにラベルを付けることで、この 1 人のユーザーに固有の対話のみを検索できます。これにより、運用上の問題を診断するときに検索をすぐに絞り込むことができます。 

!!! success
    ベンダーによって命名規則は異なる可能性がありますが、各トレースにメタデータ、ラベル、アノテーションを追加でき、これらはワークロード全体で検索可能です。これらを追加するにはコードが必要ですが、ワークロードの可観測性が大幅に向上します。

!!! warning
   トレースはログではないので、トレースに含めるメタデータを控えめにしてください。また、トレースデータは、サンプリングレートが高くても、フォレンジックや監査を目的としたものではありません。