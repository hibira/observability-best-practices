# ベストプラクティスの概要

オブザーバビリティは、成熟したツールランドスケープを持つ広範なトピックです。
しかし、すべてのツールがすべてのソリューションに適しているわけではありません。
オブザーバビリティの要件、構成、最終的なデプロイを円滑に進めるために、
オブザーバビリティ戦略の意思決定プロセスに情報を提供する 5 つのキーベストプラクティスを要約しました。

## 重要なものを監視する

オブザーバビリティで最も重要なのは、サーバー、ネットワーク、アプリケーション、顧客ではありません。重要なのは、*あなた*、ビジネス、プロジェクト、ユーザーにとって重要なものです。

まず、成功基準が何かから始めましょう。たとえば、eコマースアプリケーションを運営している場合、成功の尺度は過去1時間の購入数です。非営利団体の場合は、月間の目標に対する寄付額です。決済処理業者は取引処理時間を監視し、大学は学生の出席率を測定したいと考えるでしょう。

!!! tip
	成功の指標は誰にとっても異なります! ここでは e コマースアプリケーションを例に説明しますが、プロジェクトによっては非常に異なる測定が必要になる場合があります。にもかかわらず、アドバイスは同じです。*良い*状態がどういう状態かを知り、それを測定することです。

アプリケーションの種類に関わらず、重要なメトリクスを特定することから始める必要があります。次に、*逆算[^1]*して、アプリケーションまたはインフラストラクチャの観点からそれに影響を与えるものを確認します。たとえば、Web サーバーの高い CPU 使用率が顧客満足度を損なう場合、ひいては売上に影響する場合、CPU 利用率を監視することが重要です。

#### 目標を知り、それを測定しましょう!

重要なトップレベルの KPI を特定したら、次の仕事はそれらを追跡および測定する自動化された方法を用意することです。重要な成功要因は、ワークロードの運用を監視するのと同じシステムで行うことです。Eコマースのワークロードの例では、次のことを意味します。

* 売上データを[*時系列*](https://en.wikipedia.org/wiki/Time_series)に公開すること  
* この同じシステムでユーザー登録を追跡すること
* 顧客が Web ページにどのくらい滞在するかを測定し(再び)、このデータを時系列にプッシュすること

ほとんどのお客様はこのデータをすでに持っていますが、可視性の観点から必ずしも適切な場所にあるわけではありません。売上データやユーザー登録は、関係データベースやビジネスインテリジェンス報告システムに通常見られます。また、訪問期間のデータは、ログから、または [Real User Monitoring](../tools/rum) から抽出できます。

メトリクスデータの元の場所や形式に関係なく、[*時系列*](https://en.wikipedia.org/wiki/Time_series)として維持されなければなりません。ビジネス、個人、学術、その他の目的のための最も重要な主要指標は、他の可視性データ(時には*シグナル*または*テレメトリ*と呼ばれる)と相関させるために、時系列形式でなければなりません。

![時系列の例](../images/time_series.png)
*図 1: 時系列の例*

## コンテキストの伝播とツールの選択

ツールの選択は重要であり、問題の操作と修復の方法に深い影響を与えます。
しかし、最適ではないツールを選択することよりも、すべての基本的な信号タイプのツール化が悪いです。
たとえば、ワークロードから基本的な[ログ](../signals/logs)を収集するが、トランザクショントレースが欠落している場合、ギャップが残されます。
その結果、アプリケーション体験の全体像が断片的になります。
オブザーバビリティへのすべてのモダンなアプローチは、アプリケーショントレースで「点と点をつなぐ」ことに依存しています。

健全性と運用の完全な画像には、[ログ](../signals/logs)、[メトリクス](../signals/metrics)、[トレース](../signals/traces)を収集するツールが必要であり、次に相関分析、[異常検知](../signals/anomalies)、[ダッシュボード](../tools/dashboards)、[アラーム](../tools/alarms)などを実行する必要があります。

!!! info
	一部のオブザーバビリティソリューションには上記のすべてが含まれているとは限りませんが、既存のシステムを拡張、拡大、付加価値を与えることを目的としています。
すべてのケースで、相互運用性と拡張性は、オブザーバビリティプロジェクトを開始する際の重要な考慮事項です。

#### すべてのワークロードは異なりますが、共通のツールが結果を速めます

すべてのワークロードで共通のツールセットを使用することで、運用の摩擦やトレーニングを減らすなどのメリットがあり、一般にツールやベンダーの数を減らすことを目指すべきです。これにより、既存のオブザーバビリティ ソリューションを新しい環境やワークロードに迅速にデプロイでき、問題が発生したときの解決時間が短縮されます。

ツールは、ワークロードのすべてのティアを観測できるほど幅広いものである必要があります: 基本的なインフラストラクチャ、アプリケーション、Web サイトなど。単一のツールが不可能な場所では、オープンスタンダードでオープンソースであるものを使用するのがベストプラクティスであり、これによりプラットフォーム間の統合の可能性が最大になります。

#### 既存のツールやプロセスとの統合

車輪の再発明は避けましょう。「丸」はすでに最適な形状であり、データサイロではなく、協調的でオープンなシステムを構築する必要があります。

* 既存の ID プロバイダー(Active Directory、SAML ベースの ID プロバイダーなど)と統合します。
* 既存の IT トラブルトラッキングシステム(JIRA、ServiceNow など)がある場合は、発生した問題を迅速に管理できるように統合します。
* 既に導入済みであれば、PagerDuty や OpsGenie などの既存のワークロード管理およびエスカレーションツールを使用します。
* Ansible、SaltStack、CloudFormation、Terraform、CDKなどのインフラストラクチャーアーズコードツールはすべて優れたツールです。これらのツールを使用して、オブザーバビリティだけでなくすべてのものを管理し、現在使用しているのと同じインフラストラクチャーアーズコードツールを使用してオブザーバビリティソリューションを構築します(「[立ち上げ時からのオブザーバビリティの組み込み](#include-observability-from-day-one)」を参照)。

#### 自動化と機械学習を利用する

コンピュータはパターンを見つけるのが得意です。そして、データがパターンに*従わない*場合も見つけることができます! 監視する必要があるデータポイントが数百、数千、さらには数百万個ある場合、それらすべての正常なしきい値を理解することは不可能です。しかし、多くのオブザーバビリティ ソリューションには、データのベースラインを管理する異常検知や機械学習の機能があります。 

これを「正常な状態がどう見えるかを知る」と呼んでいます。ワークロードを徹底的に負荷テストしていれば、これらの正常なパフォーマンス メトリクスをすでに知っている可能性がありますが、複雑な分散アプリケーションの場合、すべてのメトリクスに対してベースラインを作成することは大変です。これが異常検知、自動化、機械学習が非常に価値がある場面です。

アプリケーションのヘルスベースラインとアラートを代わりに管理してくれるツールを活用し、目標に集中し [監視が必要なものを監視](#monitor-what-matters) できるようにしましょう。

## ワークロードのすべてのティアからテレメトリを収集する

アプリケーションは孤立して存在せず、ネットワークインフラ、クラウドプロバイダー、インターネットサービスプロバイダー、SaaSパートナー、および統制内外の他のコンポーネントとの相互作用は、すべて結果に影響を与える可能性があります。 ワークロード全体の包括的なビューを持つことが重要です。

#### インテグレーションに焦点を当てる

計測する領域を 1 つ選ぶ必要がある場合、疑いなくコンポーネント間のインテグレーションが選択肢になります。これはオブザーバビリティの力が最も顕著に表れる部分です。原則として、1 つのコンポーネントまたはサービスが別のコンポーネントやサービスを呼び出すたびに、少なくとも次のデータポイントが測定されている必要があります。

1. リクエストとレスポンスの期間
2. レスポンスのステータス

そして、オブザーバビリティが必要とする統合的で全体的なビューを作成するには、要求チェーン全体を通じて[一意の識別子](../signals/traces)が収集されたシグナルに含まれている必要があります。

#### エンドユーザー体験を忘れないで

ワークロードを完全に把握するには、エンドユーザーの体験を含め、すべてのティアで理解する必要があります。
ユーザーエクスペリエンスが低下した場合に目標がリスクにさらされることを測定、定量化、理解することは、ディスクスペースや CPU 利用率を監視することと同じくらい、もしくはそれ以上に重要です。

ワークロードがエンドユーザーと直接対話するものである場合(Web サイトやモバイルアプリとして提供されるアプリケーションなど)、[リアルユーザーモニタリング](../tools/rum) はユーザーへの「ラストワンマイル」の配信だけでなく、アプリケーションの実際のエクスペリエンスを監視します。
結局のところ、ユーザーがサービスを実際に利用できない場合、オブザーバビリティの取り組みは意味がありません。

## データは力だが、些細なことにこだわるな

アプリケーションの規模によっては、信号を収集するコンポーネントが非常に多数あるかもしれません。そうした信号の収集は重要で力になりますが、努力の見返りが少なくなることもあります。このため、ベストプラクティスは、[重要なものをモニタリングする](#monitor-what-matters)ことから始め、これを重要なインテグレーションと重要なコンポーネントをマッピングする手段として利用し、適切な詳細に焦点を当てることです。

## 日1からのオブザーバビリティの組み込み

セキュリティと同様に、オブザーバビリティはアプリケーションの開発や運用後の後付けであるべきではありません。ベストプラクティスは、セキュリティと同様に、計画の初期段階でオブザーバビリティを組み込むことです。これにより、人々が活用できるモデルが作成され、アプリケーションの不透明な部分が低減されます。[自動計測](../../tools/traces)がある場合でも、主要な開発作業が完了した後でトランザクショントレースを追加するには時間がかかります。この努力には、はるかに大きなリターンが得られます。しかし、開発サイクルの後半でこれを行うと、いくつかの再実装が必要になる可能性があります。

むしろ、後からワークロードにオブザーバビリティを追加するのではなく、それを利用して作業を*加速*させてください。適切な[ログ](../signals/logs)、[メトリクス](../signals/metrics)、[トレース](../signals/traces)の収集により、アプリケーション開発がより迅速になり、適切なプラクティスが育成され、今後の迅速な問題解決の基盤が築かれます。

[^1]: Amazon は、お客様とその成果にこだわる方法として、*ワーキングバックワード*プロセスを広く使用しています。オブザーバビリティソリューションに取り組む人は誰でも、同じ方法で自分自身の目的から逆算することを強くおすすめします。*ワーキングバックワード*の詳細は、[Werner Vogels のブログ](https://www.allthingsdistributed.com/2006/11/working_backwards.html)をご覧ください。