# CloudWatch Logs Insights Example Queries

[CloudWatch Logs Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html) provides a powerful platform for analyzing and querying CloudWatch log data. It allows you interactively search through your log data using a SQL like query language with a few simple but powerful commands. 

CloudWatch Logs insights provides out of the box example queries for the following categories:

- Lambda
- VPC Flow Logs
- CloudTrail
- Common Queries
- Route 53
- AWS AppSync
- NAT Gateway

In this section of the best practices guide we provide some example queries for other types of logs that are not currently included in the out of the box examples. This list will evolve and change over time and you can submit your own examples for review by leaving an [issue](https://github.com/aws-observability/observability-best-practices/issues) on the git hub.

## API Gateway

### Last 20 Messages containing an HTTP Method Type

```
filter @message like /$METHOD/ 
| fields @timestamp, @message
| sort @timestamp desc
| limit 20
```

This query will return the last 20 log messages containing a specific HTTP method sorted in descending timestamp order. Substitute **METHOD** for the method you are querying for. Here is an example of how to use this query:

```
filter @message like /POST/ 
| fields @timestamp, @message
| sort @timestamp desc
| limit 20
```

!!! tip

    You can change the $limit value in order to return a different amount of messages.


### Top 20 Talkers Sorted by IP

```
fields @timestamp, @message
| stats count() by ip
| sort ip asc
| limit 20
```

This query will return the top 20 talkers sorted by IP. This can be useful for detecting malicious activity against your API.

As a next step you could then add an additional filter for method type. For example, this query would show the top talkers by IP but only the "PUT" method call:

```
fields @timestamp, @message
| filter @message like /PUT/
| stats count() by ip
| sort ip asc
| limit 20
```

## CloudTrail Logs

### API throttling errors grouped by error category

```
stats count(errorCode) as eventCount by eventSource, eventName, awsRegion, userAgent, errorCode
| filter errorCode = 'ThrottlingException' 
| sort eventCount desc
```

This query allows you to see API throttling errors grouped by category and displayed in descending order.

!!! tip
    
    In order to use this query you would first need to ensure you are [sending CloudTrail logs to CloudWatch.](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/send-cloudtrail-events-to-cloudwatch-logs.html)

## VPC Flow Logs

### Filtering flow logs for selected source IP address with action as REJECT.

```
fields @timestamp, @message, @logStream, @log  | filter srcAddr like '$SOURCEIP' and action = 'REJECT'
| sort @timestamp desc
| limit 20
```

This query will return the last 20 log messages containing a 'REJECT' from the $SOURCEIP. This can be used to detect if traffic is explicitly rejected, or if the issue is some type of client side network configuration problem.

!!! tip
    Ensure that you substitute the value of the IP address you are interested in for '$SOURCEIP'

```
fields @timestamp, @message, @logStream, @log  | filter srcAddr like '10.0.0.5' and action = 'REJECT'
| sort @timestamp desc
| limit 20
```

