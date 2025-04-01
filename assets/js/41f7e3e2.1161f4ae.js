"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[8918],{19231:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tools/logs/logs-insights-examples","title":"CloudWatch Logs Insights Example Queries","description":"CloudWatch Logs Insights provides a powerful platform for analyzing and querying CloudWatch log data. It allows you interactively search through your log data using a SQL like query language with a few simple but powerful commands.","source":"@site/docs/tools/logs/logs-insights-examples.md","sourceDirName":"tools/logs","slug":"/tools/logs/logs-insights-examples","permalink":"/observability-best-practices/tools/logs/logs-insights-examples","draft":false,"unlisted":false,"editUrl":"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/tools/logs/logs-insights-examples.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tools","previous":{"title":"Logging","permalink":"/observability-best-practices/tools/logs/"},"next":{"title":"CloudWatch Contributor Insights","permalink":"/observability-best-practices/tools/logs/contributor_insights/"}}');var n=t(74848),r=t(28453);const o={},a="CloudWatch Logs Insights Example Queries",l={},d=[{value:"API Gateway",id:"api-gateway",level:2},{value:"Last 20 Messages containing an HTTP Method Type",id:"last-20-messages-containing-an-http-method-type",level:3},{value:"Top 20 Talkers Sorted by IP",id:"top-20-talkers-sorted-by-ip",level:3},{value:"CloudTrail Logs",id:"cloudtrail-logs",level:2},{value:"API throttling errors grouped by error category",id:"api-throttling-errors-grouped-by-error-category",level:3},{value:"Root account activity in line graph",id:"root-account-activity-in-line-graph",level:3},{value:"VPC Flow Logs",id:"vpc-flow-logs",level:2},{value:"Filtering flow logs for selected source IP address with action as REJECT.",id:"filtering-flow-logs-for-selected-source-ip-address-with-action-as-reject",level:3},{value:"Grouping network traffic by Availability Zones",id:"grouping-network-traffic-by-availability-zones",level:3},{value:"Grouping network traffic by flow direction",id:"grouping-network-traffic-by-flow-direction",level:3},{value:"Top 10 data transfers by source and destination IP addresses",id:"top-10-data-transfers-by-source-and-destination-ip-addresses",level:3},{value:"Amazon SNS Logs",id:"amazon-sns-logs",level:2},{value:"Count of SMS message failures by reasons",id:"count-of-sms-message-failures-by-reasons",level:3},{value:"SMS message failures due to Invalid Phone Number",id:"sms-message-failures-due-to-invalid-phone-number",level:3},{value:"Message failure statistics by SMS Type",id:"message-failure-statistics-by-sms-type",level:3},{value:"SNS failure notifications statistics",id:"sns-failure-notifications-statistics",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"cloudwatch-logs-insights-example-queries",children:"CloudWatch Logs Insights Example Queries"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",children:"CloudWatch Logs Insights"})," provides a powerful platform for analyzing and querying CloudWatch log data. It allows you interactively search through your log data using a SQL like query language with a few simple but powerful commands."]}),"\n",(0,n.jsx)(s.p,{children:"CloudWatch Logs insights provides out of the box example queries for the following categories:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Lambda"}),"\n",(0,n.jsx)(s.li,{children:"VPC Flow Logs"}),"\n",(0,n.jsx)(s.li,{children:"CloudTrail"}),"\n",(0,n.jsx)(s.li,{children:"Common Queries"}),"\n",(0,n.jsx)(s.li,{children:"Route 53"}),"\n",(0,n.jsx)(s.li,{children:"AWS AppSync"}),"\n",(0,n.jsx)(s.li,{children:"NAT Gateway"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["In this section of the best practices guide we provide some example queries for other types of logs that are not currently included in the out of the box examples. This list will evolve and change over time and you can submit your own examples for review by leaving an ",(0,n.jsx)(s.a,{href:"https://github.com/aws-observability/observability-best-practices/issues",children:"issue"})," on the git hub."]}),"\n",(0,n.jsx)(s.h2,{id:"api-gateway",children:"API Gateway"}),"\n",(0,n.jsx)(s.h3,{id:"last-20-messages-containing-an-http-method-type",children:"Last 20 Messages containing an HTTP Method Type"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"filter @message like /$METHOD/ \n| fields @timestamp, @message\n| sort @timestamp desc\n| limit 20\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This query will return the last 20 log messages containing a specific HTTP method sorted in descending timestamp order. Substitute ",(0,n.jsx)(s.strong,{children:"METHOD"})," for the method you are querying for. Here is an example of how to use this query:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"filter @message like /POST/ \n| fields @timestamp, @message\n| sort @timestamp desc\n| limit 20\n"})}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"You can change the $limit value in order to return a different amount of messages."})}),"\n",(0,n.jsx)(s.h3,{id:"top-20-talkers-sorted-by-ip",children:"Top 20 Talkers Sorted by IP"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"fields @timestamp, @message\n| stats count() by ip\n| sort ip asc\n| limit 20\n"})}),"\n",(0,n.jsx)(s.p,{children:"This query will return the top 20 talkers sorted by IP. This can be useful for detecting malicious activity against your API."}),"\n",(0,n.jsx)(s.p,{children:'As a next step you could then add an additional filter for method type. For example, this query would show the top talkers by IP but only the "PUT" method call:'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"fields @timestamp, @message\n| filter @message like /PUT/\n| stats count() by ip\n| sort ip asc\n| limit 20\n"})}),"\n",(0,n.jsx)(s.h2,{id:"cloudtrail-logs",children:"CloudTrail Logs"}),"\n",(0,n.jsx)(s.h3,{id:"api-throttling-errors-grouped-by-error-category",children:"API throttling errors grouped by error category"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"stats count(errorCode) as eventCount by eventSource, eventName, awsRegion, userAgent, errorCode\n| filter errorCode = 'ThrottlingException' \n| sort eventCount desc\n"})}),"\n",(0,n.jsx)(s.p,{children:"This query allows you to see API throttling errors grouped by category and displayed in descending order."}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["In order to use this query you would first need to ensure you are ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/send-cloudtrail-events-to-cloudwatch-logs.html",children:"sending CloudTrail logs to CloudWatch."})]})}),"\n",(0,n.jsx)(s.h3,{id:"root-account-activity-in-line-graph",children:"Root account activity in line graph"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"fields @timestamp, @message, userIdentity.type \n| filter userIdentity.type='Root' \n| stats count() as RootActivity by bin(5m)\n"})}),"\n",(0,n.jsx)(s.p,{children:"With this query you can visualize root account activity in a line graph. This query aggregates the root activity over time, counting the occurrences of root activity within each 5-minute interval."}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_Insights-Visualizing-Log-Data.html",children:"Visualize log data in graphs"})})}),"\n",(0,n.jsx)(s.h2,{id:"vpc-flow-logs",children:"VPC Flow Logs"}),"\n",(0,n.jsx)(s.h3,{id:"filtering-flow-logs-for-selected-source-ip-address-with-action-as-reject",children:"Filtering flow logs for selected source IP address with action as REJECT."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"fields @timestamp, @message, @logStream, @log  | filter srcAddr like '$SOURCEIP' and action = 'REJECT'\n| sort @timestamp desc\n| limit 20\n"})}),"\n",(0,n.jsx)(s.p,{children:"This query will return the last 20 log messages containing a 'REJECT' from the $SOURCEIP. This can be used to detect if traffic is explicitly rejected, or if the issue is some type of client side network configuration problem."}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"Ensure that you substitute the value of the IP address you are interested in for '$SOURCEIP'"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"fields @timestamp, @message, @logStream, @log  | filter srcAddr like '10.0.0.5' and action = 'REJECT'\n| sort @timestamp desc\n| limit 20\n"})}),"\n",(0,n.jsx)(s.h3,{id:"grouping-network-traffic-by-availability-zones",children:"Grouping network traffic by Availability Zones"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"stats sum(bytes / 1048576) as Traffic_MB by azId as AZ_ID \n| sort Traffic_MB desc\n"})}),"\n",(0,n.jsx)(s.p,{children:"This query retrieves network traffic data grouped by Availability Zone (AZ). It calculates the total traffic in megabytes (MB) by summing the bytes and converting them to MB. The results are then sorted in descending order based on the traffic volume in each AZ."}),"\n",(0,n.jsx)(s.h3,{id:"grouping-network-traffic-by-flow-direction",children:"Grouping network traffic by flow direction"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"stats sum(bytes / 1048576) as Traffic_MB by flowDirection as Flow_Direction \n| sort by Bytes_MB desc\n"})}),"\n",(0,n.jsx)(s.p,{children:"This query is designed to analyze network traffic grouped by flow direction. (Ingress or Egress)"}),"\n",(0,n.jsx)(s.h3,{id:"top-10-data-transfers-by-source-and-destination-ip-addresses",children:"Top 10 data transfers by source and destination IP addresses"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"stats sum(bytes / 1048576) as Data_Transferred_MB by srcAddr as Source_IP, dstAddr as Destination_IP \n| sort Data_Transferred_MB desc \n| limit 10\n"})}),"\n",(0,n.jsx)(s.p,{children:"This query retrieves the top 10 data transfers by source and destination IP addresses. This query allows for identifying the most significant data transfers between specific source and destination IP addresses."}),"\n",(0,n.jsx)(s.h2,{id:"amazon-sns-logs",children:"Amazon SNS Logs"}),"\n",(0,n.jsx)(s.h3,{id:"count-of-sms-message-failures-by-reasons",children:"Count of SMS message failures by reasons"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'filter status = "FAILURE"\n| stats count(*) by delivery.providerResponse as FailureReason\n| sort delivery.providerResponse desc\n'})}),"\n",(0,n.jsx)(s.p,{children:"The query above lists the count of Delivery failures sorted by reason in descending order. This query can be used to find the reasons for delivery failure."}),"\n",(0,n.jsx)(s.h3,{id:"sms-message-failures-due-to-invalid-phone-number",children:"SMS message failures due to Invalid Phone Number"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'fields notification.messageId as MessageId, delivery.destination as PhoneNumber\n| filter status = "FAILURE" and delivery.providerResponse = "Invalid phone number"\n| limit 100\n'})}),"\n",(0,n.jsx)(s.p,{children:"This query returns the message that fails to deliver due to Invalid Phone Number. This can be used to identify phone numbers that need to be corrected."}),"\n",(0,n.jsx)(s.h3,{id:"message-failure-statistics-by-sms-type",children:"Message failure statistics by SMS Type"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'fields delivery.smsType\n| filter status = "FAILURE"\n| stats count(notification.messageId), avg(delivery.dwellTimeMs), sum(delivery.priceInUSD) by delivery.smsType\n'})}),"\n",(0,n.jsx)(s.p,{children:"This query returns the count, average dwell time and spend for each SMS type (Transactional or Promotional). This query can be used to establish thresholds to trigger corrective actions. The query can be modified to filter only certain SMS Type, if only that SMS Type warrants corrective action."}),"\n",(0,n.jsx)(s.h3,{id:"sns-failure-notifications-statistics",children:"SNS failure notifications statistics"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'fields @MessageID \n| filter status = "FAILURE"\n| stats count(delivery.deliveryId) as FailedDeliveryCount, avg(delivery.dwellTimeMs) as AvgDwellTime, max(delivery.dwellTimeMs) as MaxDwellTime by notification.messageId as MessageID\n| limit 100\n'})}),"\n",(0,n.jsx)(s.p,{children:"This query returns the count, average dwell time and spend for each failed Message. This query can be used to establish thresholds to trigger corrective actions."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>a});var i=t(96540);const n={},r=i.createContext(n);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);