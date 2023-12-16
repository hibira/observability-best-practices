# Amazon Managed Grafana

Amazon Managed Grafana cost and usage visuals will allow you to gain insights into cost of individual AWS Accounts, AWS Regions, specific Grafana Workspace instances and licensing cost of Admin, Editor, and Viewer users!  

To visualize and analyze the cost and usage data, you need to create a custom Athena view.

1.	Before proceeding, make sure that you’ve created the CUR (step #1) and deployed the AWS Conformation Template (step #2) mentioned in the [Implementation overview][cid-implement].

2.	Now, Create a new Amazon Athena [view][view] by using the following query. This query fetches cost and usage of Amazon Managed Grafana across all the AWS Accounts in your Organization.

        CREATE OR REPLACE VIEW "grafana_cost" AS 
        SELECT
        line_item_usage_type
        , line_item_resource_id
        , line_item_operation
        , line_item_usage_account_id
        , month
        , year
        , "sum"(line_item_usage_amount) "Usage"
        , "sum"(line_item_unblended_cost) cost
        FROM
        database.tablename #replace database.tablename with your database and table name
        WHERE ("line_item_product_code" = 'AmazonGrafana')
        GROUP BY 1, 2, 3, 4, 5, 6

Using Athena as a data source, you can build dashboards in either Amazon Managed Grafana or Amazon QuickSight to suit your business requirements. As well, you could directly run [SQL queries][sql-query] against the Athena view that you created.


[view]: https://athena-in-action.workshop.aws/30-basics/303-create-view.html
[sql-query]: https://docs.aws.amazon.com/athena/latest/ug/querying-athena-tables.html
[cid-implement]: ../../../guides/cost/cost-visualization/cost.md#implementation