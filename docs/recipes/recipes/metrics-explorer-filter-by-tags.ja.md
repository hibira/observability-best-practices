# リソースタグでフィルタリングしたメトリクスを集計および可視化するために Amazon CloudWatch メトリクスエクスプローラーを使用する

このレシピでは、メトリクスエクスプローラーを使用して、リソースタグとリソースプロパティでメトリクスをフィルタリング、集計、および可視化する方法を示します。 - [タグとプロパティでリソースを監視するためにメトリクスエクスプローラーを使用する][metrics-explorer]。

メトリクスエクスプローラーで可視化を作成する方法はいくつかあります。このチュートリアルでは、単純に AWS コンソールを利用します。

!!! note
    このガイドを完了するのに約 5 分かかります。

## 前提条件

* AWS アカウントへのアクセス権
* AWS コンソール経由での Amazon CloudWatch メトリクスエクスプローラへのアクセス権
* 関連リソースに対してリソースタグが設定されていること

## タグベースのクエリとビジュアライゼーションを使用したメトリクスエクスプローラー

* CloudWatch コンソールを開きます

* **Metrics** の下の **Explorer** メニューをクリックします

![タグによってフィルタリングされたメトリクスのスクリーンショット](../images/metrics-explorer-filter-by-tags/metrics-explorer-cw-menu.png)

* **Generic templates** または **Service based templates** リストからテンプレートを選択できます。この例では **EC2 Instances by type** テンプレートを使用します。

![タグによってフィルタリングされたメトリクスのスクリーンショット](../images/metrics-explorer-filter-by-tags/metrics-explorer-templates-ec2-by-type.png)

* 探索したいメトリクスを選択します。不要なものは削除し、表示したい他のメトリクスを追加します。

![EC2 メトリクスのスクリーンショット](../images/metrics-explorer-filter-by-tags/metrics-explorer-ec2-metrics.png)

* **From** の下で、検索したいリソースタグまたはリソースプロパティを選択します。以下の例では、**Name: TeamX** タグが付いた異なる EC2 インスタンスの CPU およびネットワーク関連メトリクスの数を示しています。

![Name タグの例のスクリーンショット](../images/metrics-explorer-filter-by-tags/metrics-explorer-teamx-name-tag.png)

* **Aggregated by** の下に集計関数を組み合わせることができることに注意してください。以下の例では、**TeamX** メトリクスが **Availability Zone** で集計されています。

![Name タグでフィルタリングされた EC2 ダッシュボードのスクリーンショット](../images/metrics-explorer-filter-by-tags/metrics-explorer-ec2-by-tag-name-dashboard.png)

あるいは、**Team** タグで **TeamX** と **TeamY** を集計するなど、ニーズに合った他の構成を選択することもできます。

![Team タグでフィルタリングされた EC2 ダッシュボードのスクリーンショット](../images/metrics-explorer-filter-by-tags/metrics-explorer-ec2-by-tag-team-dashboard.png)

## 動的なビジュアライゼーション
<b>From</b>、<b>Aggregated by</b>、<b>Split by</b> のオプションを使用することで、結果のビジュアライゼーションを簡単にカスタマイズできます。
メトリクスエクスプローラーのビジュアライゼーションは動的なので、新しいタグ付けされたリソースは自動的にエクスプローラーウィジェットに表示されます。

## 参考情報

メトリクスエクスプローラの詳細については、次の記事を参照してください。
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metrics-Explorer.html

[metrics-explorer]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metrics-Explorer.html
