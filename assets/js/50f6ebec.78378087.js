"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[2017],{37594:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var r=n(74848),s=n(28453);const t={},o="Amazon Managed Service for Prometheus Alert Manager",i={id:"guides/operational/alerting/amp-alertmgr",title:"Amazon Managed Service for Prometheus Alert Manager",description:"Introduction",source:"@site/docs/guides/operational/alerting/amp-alertmgr.md",sourceDirName:"guides/operational/alerting",slug:"/guides/operational/alerting/amp-alertmgr",permalink:"/observability-best-practices/guides/operational/alerting/amp-alertmgr",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/guides/operational/alerting/amp-alertmgr.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Creating Custom Metrics with the AWS Rust SDK",permalink:"/observability-best-practices/guides/rust-custom-metrics/"},next:{title:"Using GitOps and Grafana Operator with Amazon Managed Grafana",permalink:"/observability-best-practices/guides/operational/gitops-with-amg/"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Alerting Rules File",id:"alerting-rules-file",level:2},{value:"Alert Manager Configuration File",id:"alert-manager-configuration-file",level:2},{value:"Key aspects of alerting",id:"key-aspects-of-alerting",level:2},{value:"Route alerts through Amazon Simple Notification Service (SNS)",id:"route-alerts-through-amazon-simple-notification-service-sns",level:2},{value:"Routing alerts to other destinations beyond Amazon SNS",id:"routing-alerts-to-other-destinations-beyond-amazon-sns",level:2},{value:"Alert status",id:"alert-status",level:2},{value:"Amazon Managed Service for Prometheus Alert Manager rules in Amazon Managed Grafana",id:"amazon-managed-service-for-prometheus-alert-manager-rules-in-amazon-managed-grafana",level:2},{value:"Recommended alerts for a baseline monitoring",id:"recommended-alerts-for-a-baseline-monitoring",level:2},{value:"ACK Controller for Amazon Managed Service for Prometheus",id:"ack-controller-for-amazon-managed-service-for-prometheus",level:2},{value:"Restricting access to rules using IAM policy",id:"restricting-access-to-rules-using-iam-policy",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"amazon-managed-service-for-prometheus-alert-manager",children:"Amazon Managed Service for Prometheus Alert Manager"}),"\n",(0,r.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://aws.amazon.com/prometheus/",children:"Amazon Managed Service for Prometheus"})," (AMP) supports two types of rules namely '",(0,r.jsx)(a.strong,{children:"Recording rules"}),"' and '",(0,r.jsx)(a.strong,{children:"Alerting rules"}),"', which can be imported from your existing Prometheus server and are evaluated at regular intervals."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/",children:"Alerting rules"})," allow customers to define alert conditions based on ",(0,r.jsx)(a.a,{href:"https://prometheus.io/docs/prometheus/latest/querying/basics/",children:"PromQL"})," and a threshold. When the value of the alerting rule exceeds threshold, a notification is sent to Alert manager in Amazon Managed Service for Prometheus which provides similar functionality to alert manager in standalone Prometheus. An alert is the outcome of an alerting rule in Prometheus when it is active."]}),"\n",(0,r.jsx)(a.h2,{id:"alerting-rules-file",children:"Alerting Rules File"}),"\n",(0,r.jsx)(a.p,{children:"An Alerting rule in Amazon Managed Service for Prometheus is defined by a rules file in YAML format, which follows the same format as a rules file in standalone Prometheus. Customers can have multiple rules files in an Amazon Managed Service for Prometheus workspace. A workspace is a logical space dedicated to the storage and querying of Prometheus metrics."}),"\n",(0,r.jsx)(a.p,{children:"A rules file typically has the following fields:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"groups:\n  - name:\n  rules:\n  - alert:\n  expr:\n  for:\n  labels:\n  annotations:\n"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-console",children:"Groups: A collection of rules that are run sequentially at a regular interval\nName: Name of the group\nRules: The rules in a group\nAlert: Name of the alert\nExpr: The expression for the alert to trigger\nFor: Minimum duration for an alert\u2019s expression to be exceeding threshold before updating to a firing status\nLabels: Any additional labels attached to the alert\nAnnotations: Contextual details such as a description or link\n"})}),"\n",(0,r.jsx)(a.p,{children:"A sample rule file looks like below"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"groups:\n  - name: test\n    rules:\n    - record: metric:recording_rule\n      expr: avg(rate(container_cpu_usage_seconds_total[5m]))\n  - name: alert-test\n    rules:\n    - alert: metric:alerting_rule\n      expr: avg(rate(container_cpu_usage_seconds_total[5m])) > 0\n      for: 2m\n"})}),"\n",(0,r.jsx)(a.h2,{id:"alert-manager-configuration-file",children:"Alert Manager Configuration File"}),"\n",(0,r.jsx)(a.p,{children:"The Amazon Managed Service for Prometheus Alert Manager uses a configuration file in YAML format to set up the alerts (for the receiving service) that is in the same structure as an alert manager config file in standalone Prometheus. The configuration file consists of two key sections for alert manager and templating"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/template_reference/",children:"template_files"}),", contains the templates of annotations and labels in alerts exposed as the ",(0,r.jsx)(a.code,{children:"$value"}),", ",(0,r.jsx)(a.code,{children:"$labels"}),", ",(0,r.jsx)(a.code,{children:"$externalLabels"}),", and ",(0,r.jsx)(a.code,{children:"$externalURL"})," variables for convenience. The ",(0,r.jsx)(a.code,{children:"$labels"})," variable holds the label key/value pairs of an alert instance. The configured external labels can be accessed via the ",(0,r.jsx)(a.code,{children:"$externalLabels"})," variable. The ",(0,r.jsx)(a.code,{children:"$value"})," variable holds the evaluated value of an alert instance. ",(0,r.jsx)(a.code,{children:".Value"}),", ",(0,r.jsx)(a.code,{children:".Labels"}),", ",(0,r.jsx)(a.code,{children:".ExternalLabels"}),", and ",(0,r.jsx)(a.code,{children:".ExternalURL"})," contain the alert value, the alert labels, the globally configured external labels, and the external URL (configured with ",(0,r.jsx)(a.code,{children:"--web.external-url"}),") respectively."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://prometheus.io/docs/alerting/latest/configuration/",children:"alertmanager_config"}),", contains the alert manager configuration that uses the same structure as an alert manager config file in standalone Prometheus."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"A sample alert manager configuration file having both template_files and alertmanager_config looks like below,"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'template_files:\n  default_template: |\n    {{ define "sns.default.subject" }}[{{ .Status | toUpper }}{{ if eq .Status "firing" }}:{{ .Alerts.Firing | len }}{{ end }}]{{ end }}\n    {{ define "__alertmanager" }}AlertManager{{ end }}\n    {{ define "__alertmanagerURL" }}{{ .ExternalURL }}/#/alerts?receiver={{ .Receiver | urlquery }}{{ end }}\nalertmanager_config: |\n  global:\n  templates:\n    - \'default_template\'\n  route:\n    receiver: default\n  receivers:\n    - name: \'default\'\n      sns_configs:\n      - topic_arn: arn:aws:sns:us-east-2:accountid:My-Topic\n        sigv4:\n          region: us-east-2\n        attributes:\n          key: severity\n          value: SEV2\n'})}),"\n",(0,r.jsx)(a.h2,{id:"key-aspects-of-alerting",children:"Key aspects of alerting"}),"\n",(0,r.jsxs)(a.p,{children:["There are three important aspects to be aware of when creating Amazon Managed Service for Prometheus ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alert-manager.html",children:"Alert Manager configuration file"}),"."]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Grouping"}),": This helps collect similar alerts into a single notification, which is useful when the blast radius of failure or outage is large affecting many systems and several alerts fire simultaneously. This can also be used to group into categories (e.g., node alerts, pod alerts). The ",(0,r.jsx)(a.a,{href:"https://prometheus.io/docs/alerting/latest/configuration/#route",children:"route"})," block in the alert manager configuration file can be used to configure this grouping."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Inhibition"}),": This is a way to suppress certain notifications to avoid spamming similar alerts that are already active and fired. ",(0,r.jsx)(a.a,{href:"https://prometheus.io/docs/alerting/latest/configuration/#inhibit_rule",children:"inhibit_rules"})," block can be used to write inhibition rules."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Silencing"}),": Alerts can be muted for a specified duration, such as during a maintenance window or a planned outage. Incoming alerts are verified for matching all equality or regular expression before silencing the alert. ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-PutAlertManagerSilences",children:"PutAlertManagerSilences"})," API can be used to create silencing."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"route-alerts-through-amazon-simple-notification-service-sns",children:"Route alerts through Amazon Simple Notification Service (SNS)"}),"\n",(0,r.jsxs)(a.p,{children:["Currently ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alertmanager-receiver-AMPpermission.html",children:"Amazon Managed Service for Prometheus Alert Manager supports Amazon SNS"})," as the only receiver. The key section in the alertmanager_config block is the receivers, which lets customers configure ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alertmanager-receiver-config.html",children:"Amazon SNS to receive alerts"}),". The following section can be used as a template for the receivers block."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"- name: name_of_receiver\n  sns_configs:\n    - sigv4:\n        region: <AWS_Region>\n    topic_arn: <ARN_of_SNS_topic>\n    subject: somesubject\n    attributes:\n       key: <somekey>\n       value: <somevalue>\n"})}),"\n",(0,r.jsx)(a.p,{children:"The Amazon SNS configuration uses the following template as default unless its explicitly overridden."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'{{ define "sns.default.message" }}{{ .CommonAnnotations.SortedPairs.Values | join " " }}\n  {{ if gt (len .Alerts.Firing) 0 -}}\n  Alerts Firing:\n    {{ template "__text_alert_list" .Alerts.Firing }}\n  {{- end }}\n  {{ if gt (len .Alerts.Resolved) 0 -}}\n  Alerts Resolved:\n    {{ template "__text_alert_list" .Alerts.Resolved }}\n  {{- end }}\n{{- end }}\n'})}),"\n",(0,r.jsxs)(a.p,{children:["Additional Reference: ",(0,r.jsx)(a.a,{href:"https://prometheus.io/docs/alerting/latest/notification_examples/",children:"Notification Template Examples"})]}),"\n",(0,r.jsx)(a.h2,{id:"routing-alerts-to-other-destinations-beyond-amazon-sns",children:"Routing alerts to other destinations beyond Amazon SNS"}),"\n",(0,r.jsxs)(a.p,{children:["Amazon Managed Service for Prometheus Alert Manager can use ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alertmanager-SNS-otherdestinations.html",children:"Amazon SNS to connect to other destinations"})," such as email, webhook (HTTP), Slack, PageDuty, and OpsGenie."]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Email"})," A successful notification will result in an email received from Amazon Managed Service for Prometheus Alert Manager through Amazon SNS topic with the alert details as one of the targets."]}),"\n",(0,r.jsxs)(a.li,{children:["Amazon Managed Service for Prometheus Alert Manager can ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alertmanager-receiver-JSON.html",children:"send alerts in JSON format"}),", so that they can be processed downstream from Amazon SNS in AWS Lambda or in webhook-receiving endpoints."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Webhook"})," An existing Amazon SNS topic can be configured to output messages to a webhook endpoint. Webhooks are messages in serialized form-encoded JSON or XML formats, exchanged over HTTP between applications based on event driven triggers. This can be used to hook any existing ",(0,r.jsx)(a.a,{href:"https://repost.aws/knowledge-center/sns-lambda-webhooks-chime-slack-teams",children:"SIEM or collaboration tools"})," for alerting, ticketing or incident management systems."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Slack"})," Customers can integrate with ",(0,r.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/how-to-integrate-amazon-managed-service-for-prometheus-with-slack/",children:"Slack\u2019s"})," email-to-channel integration where Slack can accept an email and forward it to a Slack channel, or use a Lambda function to rewrite the SNS notification to Slack."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"PagerDuty"})," The template used in ",(0,r.jsx)(a.code,{children:"template_files"})," block in the ",(0,r.jsx)(a.code,{children:"alertmanager_config"})," definition can be customized to send the payload to ",(0,r.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/using-amazon-managed-service-for-prometheus-alert-manager-to-receive-alerts-with-pagerduty/",children:"PagerDuty"})," as a destination of Amazon SNS."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Additional Reference: ",(0,r.jsx)(a.a,{href:"https://prometheus.io/blog/2016/03/03/custom-alertmanager-templates/",children:"Custom Alert manager Templates"})]}),"\n",(0,r.jsx)(a.h2,{id:"alert-status",children:"Alert status"}),"\n",(0,r.jsx)(a.p,{children:"Alerting rules define alert conditions based on expressions to send alerts to any notification service, whenever the set threshold is crossed. An example rule and its expression is shown below."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"rules:\n- alert: metric:alerting_rule\n  expr: avg(rate(container_cpu_usage_seconds_total[5m])) > 0\n  for: 2m\n\n"})}),"\n",(0,r.jsx)(a.p,{children:"Whenever the alert expression results in one or more vector elements at a given point in time, the alert counts as active. The alerts take active (pending | firing) or resolved status."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Pending"}),": The time elapsed since threshold breach is less than the recording interval"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Firing"}),": The time elapsed since threshold breach is more than the recording interval and Alert Manager is routing alerts."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Resolved"}),": The alert is no longer firing because the threshold is no longer breached."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["This can be manually verified by querying the Amazon Managed Service for Prometheus Alert Manager endpoint with ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListAlerts",children:"ListAlerts"})," API using ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-compatible-APIs.html",children:"awscurl"})," command. A sample request is shown below."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'awscurl https://aps-workspaces.us-east-1.amazonaws.com/workspaces/$WORKSPACE_ID/alertmanager/api/v2/alerts --service="aps" -H "Content-Type: application/json"\n'})}),"\n",(0,r.jsx)(a.h2,{id:"amazon-managed-service-for-prometheus-alert-manager-rules-in-amazon-managed-grafana",children:"Amazon Managed Service for Prometheus Alert Manager rules in Amazon Managed Grafana"}),"\n",(0,r.jsx)(a.p,{children:"Amazon Managed Grafana (AMG) alerting feature allows customers to gain visibility into Amazon Managed Service for Prometheus Alert Manager alerts from their Amazon Managed Grafana workspace. Customers using the Amazon Managed Service for Prometheus workspaces to collect Prometheus metrics utilize the fully managed Alert Manager and Ruler features in the service to configure alerting and recording rules. With this feature, they can visualize all their alert and recording rules configured in their Amazon Managed Service for Prometheus workspace. Prometheus alerts view can be in Amazon Managed Grafana (AMG) console by checking the Grafana alerting checkbox in the Workspace configuration options tab. Once enabled, this will also migrate native Grafana alerts that were previously created in Grafana dashboards into a new Alerting page in the Grafana workspace."}),"\n",(0,r.jsxs)(a.p,{children:["Reference: ",(0,r.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/announcing-prometheus-alertmanager-rules-in-amazon-managed-grafana/",children:"Announcing Prometheus Alert manager rules in Amazon Managed Grafana"})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"List of AMP alerts in Grafana",src:n(19103).A+"",width:"1283",height:"1055"})}),"\n",(0,r.jsx)(a.h2,{id:"recommended-alerts-for-a-baseline-monitoring",children:"Recommended alerts for a baseline monitoring"}),"\n",(0,r.jsx)(a.p,{children:"Alerting is a key aspect of robust monitoring and observability best practices. The alerting mechanism should strike a balance between alert fatigue and missing critical alerts. Here are some of the alerts that are recommended to improve the overall reliability of the workloads. Various teams in the organization look at monitoring their infrastructure and workloads from different perspectives and hence this could be expanded or changed based on the requirement and scenario & certainly this is not a comprehensive list."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Container Node is using more than certain (ex. 80%) allocated memory limit."}),"\n",(0,r.jsx)(a.li,{children:"Container Node is using more than certain (ex. 80%) allocated CPU limit."}),"\n",(0,r.jsx)(a.li,{children:"Container Node is using more than certain (ex. 90%) allocated disk space."}),"\n",(0,r.jsx)(a.li,{children:"Container in pod in namespace is using more than certain (ex. 80%) allocated CPU limit."}),"\n",(0,r.jsx)(a.li,{children:"Container in pod in namespace is using more than certain (ex. 80%) of memory limit."}),"\n",(0,r.jsx)(a.li,{children:"Container in pod in namespace had too many restarts."}),"\n",(0,r.jsx)(a.li,{children:"Persistent Volume in a namespace is using more than certain (max 75%) disk space."}),"\n",(0,r.jsx)(a.li,{children:"Deployment is currently having no active pods running"}),"\n",(0,r.jsx)(a.li,{children:"Horizontal Pod Autoscaler (HPA) in namespace is running at max capacity"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"The essential thing in setting up alerts for the above or any similar scenario will require the expression to be changed as needed. For example,"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'expr: |\n        ((sum(irate(container_cpu_usage_seconds_total{image!="",container!="POD", namespace!="kube-sys"}[30s])) by (namespace,container,pod) /\nsum(container_spec_cpu_quota{image!="",container!="POD", namespace!="kube-sys"} /\ncontainer_spec_cpu_period{image!="",container!="POD", namespace!="kube-sys"}) by (namespace,container,pod) ) * 100)  > 80\n      for: 5m\n'})}),"\n",(0,r.jsx)(a.h2,{id:"ack-controller-for-amazon-managed-service-for-prometheus",children:"ACK Controller for Amazon Managed Service for Prometheus"}),"\n",(0,r.jsxs)(a.p,{children:["Amazon Managed Service for Prometheus ",(0,r.jsx)(a.a,{href:"https://github.com/aws-controllers-k8s/community",children:"AWS Controller for Kubernetes"})," (ACK) controller is available for Workspace, Alert Manager and Ruler resources which lets customers take advantage of Prometheus using ",(0,r.jsx)(a.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",children:"custom resource definitions"})," (CRDs) and native objects or services that provide supporting capabilities without having to define any resources outside of Kubernetes cluster. The ",(0,r.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/introducing-the-ack-controller-for-amazon-managed-service-for-prometheus/",children:"ACK controller for Amazon Managed Service for Prometheus"})," can be used to manage all resources directly from the Kubernetes cluster that you\u2019re monitoring, allowing Kubernetes to act as your \u2018source of truth\u2019 for your workload\u2019s desired state. ",(0,r.jsx)(a.a,{href:"https://aws-controllers-k8s.github.io/community/docs/community/overview/",children:"ACK"})," is a collection of Kubernetes CRDs and custom controllers working together to extend the Kubernetes API and manage AWS resources."]}),"\n",(0,r.jsx)(a.p,{children:"A snippet of alerting rules configured using ACK is shown below:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'apiVersion: prometheusservice.services.k8s.aws/v1alpha1\nkind: RuleGroupsNamespace\nmetadata:\n  name: default-rule\nspec:\n  workspaceID: WORKSPACE-ID\n  name: default-rule\n  configuration: |\n    groups:\n    - name: example\n      rules:\n      - alert: HostHighCpuLoad\n        expr: 100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[2m])) * 100) > 60\n        for: 5m\n        labels:\n          severity: warning\n          event_type: scale_up\n        annotations:\n          summary: Host high CPU load (instance {{ $labels.instance }})\n          description: "CPU load is > 60%\\n  VALUE = {{ $value }}\\n  LABELS = {{ $labels }}"\n      - alert: HostLowCpuLoad\n        expr: 100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[2m])) * 100) < 30\n        for: 5m\n        labels:\n          severity: warning\n          event_type: scale_down\n        annotations:\n          summary: Host low CPU load (instance {{ $labels.instance }})\n          description: "CPU load is < 30%\\n  VALUE = {{ $value }}\\n  LABELS = {{ $labels }}"\n'})}),"\n",(0,r.jsx)(a.h2,{id:"restricting-access-to-rules-using-iam-policy",children:"Restricting access to rules using IAM policy"}),"\n",(0,r.jsx)(a.p,{children:"Organizations require various teams to have their own rules to be created & administered for their recording and alerting requirements. Rules management in Amazon Managed Service for Prometheus allows rules to be access controlled using AWS Identity and Access Management (IAM) policy so that each team can control their own set of rules & alerts grouped by rulegroupnamespaces."}),"\n",(0,r.jsx)(a.p,{children:"The below image shows two example rulegroupnamespaces called devops and engg added into Rules management of Amazon Managed Service for Prometheus."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Recording and Alerting rule namespaces in AMP console",src:n(18911).A+"",width:"1091",height:"302"})}),"\n",(0,r.jsxs)(a.p,{children:["The below JSON is a sample IAM policy which restricts access to the devops rulegroupnamespace (shown above) with the Resource ARN specified. The notable actions in the below IAM policy are ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/cli/latest/reference/amp/put-rule-groups-namespace.html",children:"PutRuleGroupsNamespace"})," and ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/cli/latest/reference/amp/delete-rule-groups-namespace.html",children:"DeleteRuleGroupsNamespace"})," which are restricted to the specified Resource ARN of the rulegroupsnamespace of AMP workspace. Once the policy is created, it can be assigned to any required user, group or role for desired access control requirement. The Action in the IAM policy can be modified/restricted as required based on ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html",children:"IAM permissions"})," for required & allowable actions."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "VisualEditor0",\n      "Effect": "Allow",\n      "Action": [\n        "aps:RemoteWrite",\n        "aps:DescribeRuleGroupsNamespace",\n        "aps:PutRuleGroupsNamespace",\n        "aps:DeleteRuleGroupsNamespace"\n      ],\n      "Resource": [\n        "arn:aws:aps:us-west-2:XXXXXXXXXXXX:workspace/ws-8da31ad6-f09d-44ff-93a3-xxxxxxxxxx",\n        "arn:aws:aps:us-west-2:XXXXXXXXXXXX:rulegroupsnamespace/ws-8da31ad6-f09d-44ff-93a3-xxxxxxxxxx/devops"\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(a.p,{children:"The below awscli interaction shows an example of an IAM user having restricted access to a rulegroupsnamespace specified through Resource ARN (i.e. devops rulegroupnamespace) in IAM policy and how the same user is denied access to other resources (i.e. engg rulegroupnamespace) not having access."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'$ aws amp describe-rule-groups-namespace --workspace-id ws-8da31ad6-f09d-44ff-93a3-xxxxxxxxxx --name devops\n{\n    "ruleGroupsNamespace": {\n        "arn": "arn:aws:aps:us-west-2:XXXXXXXXXXXX:rulegroupsnamespace/ws-8da31ad6-f09d-44ff-93a3-xxxxxxxxxx/devops",\n        "createdAt": "2023-04-28T01:50:15.408000+00:00",\n        "data": "Z3JvdXBzOgogIC0gbmFtZTogZGV2b3BzX3VwZGF0ZWQKICAgIHJ1bGVzOgogICAgLSByZWNvcmQ6IG1ldHJpYzpob3N0X2NwdV91dGlsCiAgICAgIGV4cHI6IGF2ZyhyYXRlKGNvbnRhaW5lcl9jcHVfdXNhZ2Vfc2Vjb25kc190b3RhbFsybV0pKQogICAgLSBhbGVydDogaGlnaF9ob3N0X2NwdV91c2FnZQogICAgICBleHByOiBhdmcocmF0ZShjb250YWluZXJfY3B1X3VzYWdlX3NlY29uZHNfdG90YWxbNW1dKSkKICAgICAgZm9yOiA1bQogICAgICBsYWJlbHM6CiAgICAgICAgICAgIHNldmVyaXR5OiBjcml0aWNhbAogIC0gbmFtZTogZGV2b3BzCiAgICBydWxlczoKICAgIC0gcmVjb3JkOiBjb250YWluZXJfbWVtX3V0aWwKICAgICAgZXhwcjogYXZnKHJhdGUoY29udGFpbmVyX21lbV91c2FnZV9ieXRlc190b3RhbFs1bV0pKQogICAgLSBhbGVydDogY29udGFpbmVyX2hvc3RfbWVtX3VzYWdlCiAgICAgIGV4cHI6IGF2ZyhyYXRlKGNvbnRhaW5lcl9tZW1fdXNhZ2VfYnl0ZXNfdG90YWxbNW1dKSkKICAgICAgZm9yOiA1bQogICAgICBsYWJlbHM6CiAgICAgICAgc2V2ZXJpdHk6IGNyaXRpY2FsCg==",\n        "modifiedAt": "2023-05-01T17:47:06.409000+00:00",\n        "name": "devops",\n        "status": {\n            "statusCode": "ACTIVE",\n            "statusReason": ""\n        },\n        "tags": {}\n    }\n}\n\n\n$ cat > devops.yaml <<EOF\n> groups:\n>  - name: devops_new\n>    rules:\n>   - record: metric:host_cpu_util\n>     expr: avg(rate(container_cpu_usage_seconds_total[2m]))\n>   - alert: high_host_cpu_usage\n>     expr: avg(rate(container_cpu_usage_seconds_total[5m]))\n>     for: 5m\n>     labels:\n>            severity: critical\n>  - name: devops\n>    rules:\n>    - record: container_mem_util\n>      expr: avg(rate(container_mem_usage_bytes_total[5m]))\n>    - alert: container_host_mem_usage\n>      expr: avg(rate(container_mem_usage_bytes_total[5m]))\n>      for: 5m\n>      labels:\n>        severity: critical\n> EOF\n\n\n$ base64 devops.yaml > devops_b64.yaml\n\n\n$ aws amp put-rule-groups-namespace --workspace-id ws-8da31ad6-f09d-44ff-93a3-xxxxxxxxxx --name devops --data file://devops_b64.yaml\n{\n    "arn": "arn:aws:aps:us-west-2:XXXXXXXXXXXX:rulegroupsnamespace/ws-8da31ad6-f09d-44ff-93a3-xxxxxxxxxx/devops",\n    "name": "devops",\n    "status": {\n        "statusCode": "UPDATING"\n    },\n    "tags": {}\n}\n'})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.code,{children:"$ aws amp describe-rule-groups-namespace --workspace-id ws-8da31ad6-f09d-44ff-93a3-xxxxxxxxxx --name engg An error occurred (AccessDeniedException) when calling the DescribeRuleGroupsNamespace operation: User: arn:aws:iam::XXXXXXXXXXXX:user/amp_ws_user is not authorized to perform: aps:DescribeRuleGroupsNamespace on resource: arn:aws:aps:us-west-2:XXXXXXXXXXXX:rulegroupsnamespace/ws-8da31ad6-f09d-44ff-93a3-xxxxxxxxxx/engg"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.code,{children:"$ aws amp put-rule-groups-namespace --workspace-id ws-8da31ad6-f09d-44ff-93a3-xxxxxxxxxx --name engg --data file://devops_b64.yaml An error occurred (AccessDeniedException) when calling the PutRuleGroupsNamespace operation: User: arn:aws:iam::XXXXXXXXXXXX:user/amp_ws_user is not authorized to perform: aps:PutRuleGroupsNamespace on resource: arn:aws:aps:us-west-2:XXXXXXXXXXXX:rulegroupsnamespace/ws-8da31ad6-f09d-44ff-93a3-xxxxxxxxxx/engg"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.code,{children:"$ aws amp delete-rule-groups-namespace --workspace-id ws-8da31ad6-f09d-44ff-93a3-xxxxxxxxxx --name engg An error occurred (AccessDeniedException) when calling the DeleteRuleGroupsNamespace operation: User: arn:aws:iam::XXXXXXXXXXXX:user/amp_ws_user is not authorized to perform: aps:DeleteRuleGroupsNamespace on resource: arn:aws:aps:us-west-2:XXXXXXXXXXXX:rulegroupsnamespace/ws-8da31ad6-f09d-44ff-93a3-xxxxxxxxxx/engg"})}),"\n",(0,r.jsxs)(a.p,{children:["The user permissions to use rules can also be restricted using an ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alertmanager-IAM-permissions.html",children:"IAM policy"})," (documentation sample)."]}),"\n",(0,r.jsxs)(a.p,{children:["For more information customers can read the ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alert-manager.html",children:"AWS Documentation"}),", go through the ",(0,r.jsx)(a.a,{href:"https://catalog.workshops.aws/observability/en-US/aws-managed-oss/amp/setup-alert-manager",children:"AWS Observability Workshop"})," on Amazon Managed Service for Prometheus Alert Manager."]}),"\n",(0,r.jsxs)(a.p,{children:["Additional Reference: ",(0,r.jsx)(a.a,{href:"https://aws.amazon.com/blogs/aws/amazon-managed-service-for-prometheus-is-now-generally-available-with-alert-manager-and-ruler/",children:"Amazon Managed Service for Prometheus Is Now Generally Available with Alert Manager and Ruler"})]})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},18911:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/AMP_rules_namespaces-9e8f57ad590fe7ed77ab351035eb3144.png"},19103:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/amp-alerting-57f47bed52478cd997dfa3e5c6566e77.png"},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>i});var r=n(96540);const s={},t=r.createContext(s);function o(e){const a=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:a},e.children)}}}]);