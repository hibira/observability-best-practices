"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[2274],{28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}},73912:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/files/main-cb79ee6c638db1e8528f472c722bcf23.tf"},80175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"recipes/recipes/amp-alertmanager-terraform","title":"Terraform as Infrastructure as a Code to deploy Amazon Managed Service for Prometheus and configure Alert manager","description":"In this recipe, we will demonstrate how you can use Terraform to provision Amazon Managed Service for Prometheus and configure rules management and alert manager to send notification to a SNS topic if a certain condition is met.","source":"@site/docs/recipes/recipes/amp-alertmanager-terraform.md","sourceDirName":"recipes/recipes","slug":"/recipes/recipes/amp-alertmanager-terraform","permalink":"/observability-best-practices/recipes/recipes/amp-alertmanager-terraform","draft":false,"unlisted":false,"editUrl":"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/recipes/amp-alertmanager-terraform.md","tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453);const o={},i="Terraform as Infrastructure as a Code to deploy Amazon Managed Service for Prometheus and configure Alert manager",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enabling Metric collection using AWS Distro for Opentelemetry",id:"enabling-metric-collection-using-aws-distro-for-opentelemetry",level:3},{value:"Configure workspace with Terraform",id:"configure-workspace-with-terraform",level:3},{value:"Clean up",id:"clean-up",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"terraform-as-infrastructure-as-a-code-to-deploy-amazon-managed-service-for-prometheus-and-configure-alert-manager",children:"Terraform as Infrastructure as a Code to deploy Amazon Managed Service for Prometheus and configure Alert manager"})}),"\n",(0,a.jsxs)(t.p,{children:["In this recipe, we will demonstrate how you can use ",(0,a.jsx)(t.a,{href:"https://www.terraform.io/",children:"Terraform"})," to provision ",(0,a.jsx)(t.a,{href:"https://aws.amazon.com/prometheus/",children:"Amazon Managed Service for Prometheus"})," and configure rules management and alert manager to send notification to a ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/sns/",children:"SNS"})," topic if a certain condition is met."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"This guide will take approximately 30 minutes to complete."})}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.p,{children:"You will need the following to complete the setup:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html",children:"Amazon EKS cluster"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"AWS CLI version 2"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.terraform.io/downloads",children:"Terraform CLI"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://aws-otel.github.io/",children:"AWS Distro for OpenTelemetry(ADOT)"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://eksctl.io/",children:"eksctl"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html",children:"kubectl"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://stedolan.github.io/jq/download/",children:"jq"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://helm.sh/",children:"helm"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html",children:"SNS topic"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/okigan/awscurl",children:"awscurl"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In the recipe, we will use a sample application in order to demonstrate the metric scraping using ADOT and remote write the metrics to the Amazon Managed Service for Prometheus workspace. Fork and clone the sample app from the repository at ",(0,a.jsx)(t.a,{href:"https://github.com/aws-observability/aws-otel-community",children:"aws-otel-community"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"This Prometheus sample app generates all 4 Prometheus metric types (counter, gauge, histogram, summary) and exposes them at the /metrics endpoint"}),"\n",(0,a.jsx)(t.p,{children:"A health check endpoint also exists at /"}),"\n",(0,a.jsx)(t.p,{children:"The following is a list of optional command line flags for configuration:"}),"\n",(0,a.jsx)(t.p,{children:"listen_address: (default = 0.0.0.0:8080) defines the address and port that the sample app is exposed to. This is primarily to conform with the test framework requirements."}),"\n",(0,a.jsx)(t.p,{children:"metric_count: (default=1) the amount of each type of metric to generate. The same amount of metrics is always generated per metric type."}),"\n",(0,a.jsx)(t.p,{children:"label_count: (default=1) the amount of labels per metric to generate."}),"\n",(0,a.jsx)(t.p,{children:"datapoint_count: (default=1) the number of data-points per metric to generate."}),"\n",(0,a.jsx)(t.h3,{id:"enabling-metric-collection-using-aws-distro-for-opentelemetry",children:"Enabling Metric collection using AWS Distro for Opentelemetry"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Fork and clone the sample app from the repository at aws-otel-community.\nThen run the following commands."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"cd ./sample-apps/prometheus\ndocker build . -t prometheus-sample-app:latest\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:'Push this image to a registry such as Amazon ECR. You can use the following command to create a new ECR repository in your account. Make sure to set "YOUR_REGION" as well.'}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"aws ecr create-repository \\\n    --repository-name prometheus-sample-app \\\n    --image-scanning-configuration scanOnPush=true \\\n    --region <YOUR_REGION>\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsxs)(t.li,{children:["Deploy the sample app in the cluster by copying this Kubernetes configuration and applying it. Change the image to the image that you just pushed by replacing ",(0,a.jsx)(t.code,{children:"PUBLIC_SAMPLE_APP_IMAGE"})," in the prometheus-sample-app.yaml file."]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"curl https://raw.githubusercontent.com/aws-observability/aws-otel-collector/main/examples/eks/aws-prometheus/prometheus-sample-app.yaml -o prometheus-sample-app.yaml\nkubectl apply -f prometheus-sample-app.yaml\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsx)(t.li,{children:"Start a default instance of the ADOT Collector. To do so, first enter the following command to pull the Kubernetes configuration for ADOT Collector."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"curl https://raw.githubusercontent.com/aws-observability/aws-otel-collector/main/examples/eks/aws-prometheus/prometheus-daemonset.yaml -o prometheus-daemonset.yaml\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Then edit the template file, substituting the remote_write endpoint for your Amazon Managed Service for Prometheus workspace for ",(0,a.jsx)(t.code,{children:"YOUR_ENDPOINT"})," and your Region for ",(0,a.jsx)(t.code,{children:"YOUR_REGION"}),".\nUse the remote_write endpoint that is displayed in the Amazon Managed Service for Prometheus console when you look at your workspace details.\nYou'll also need to change ",(0,a.jsx)(t.code,{children:"YOUR_ACCOUNT_ID"})," in the service account section of the Kubernetes configuration to your AWS account ID."]}),"\n",(0,a.jsxs)(t.p,{children:["In this recipe, the ADOT Collector configuration uses an annotation ",(0,a.jsx)(t.code,{children:"(scrape=true)"})," to tell which target endpoints to scrape. This allows the ADOT Collector to distinguish the sample app endpoint from kube-system endpoints in your cluster. You can remove this from the re-label configurations if you want to scrape a different sample app.\n5. Enter the following command to deploy the ADOT collector."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"kubectl apply -f eks-prometheus-daemonset.yaml\n"})}),"\n",(0,a.jsx)(t.h3,{id:"configure-workspace-with-terraform",children:"Configure workspace with Terraform"}),"\n",(0,a.jsxs)(t.p,{children:["Now, we will  provision a Amazon Managed Service for Prometheus workspace and will define an alerting rule that causes the Alert Manager to send a notification if a certain condition (defined in ",(0,a.jsx)(t.code,{children:"expr"}),") holds true for a specified time period (",(0,a.jsx)(t.code,{children:"for"}),"). Code in the Terraform language is stored in plain text files with the .tf file extension. There is also a JSON-based variant of the language that is named with the .tf.json file extension."]}),"\n",(0,a.jsxs)(t.p,{children:["We will now use the ",(0,a.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(73912).A+"",children:"main.tf"})," to deploy the resources using terraform. Before running the terraform command, we will export the ",(0,a.jsx)(t.code,{children:"region"})," and ",(0,a.jsx)(t.code,{children:"sns_topic"})," variable."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"export TF_VAR_region=<your region>\nexport TF_VAR_sns_topic=<ARN of the SNS topic used by the SNS receiver>\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now, we will execute the below commands to provision the workspace:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"terraform init\nterraform plan\nterraform apply\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Once the above steps are complete, verify the setup end-to-end by using awscurl and query the endpoint. Ensure the ",(0,a.jsx)(t.code,{children:"WORKSPACE_ID"})," variable is replaced with the appropriate Amazon Managed Service for Prometheus workspace id."]}),"\n",(0,a.jsxs)(t.p,{children:["On running the below command, look for the metric \u201cmetric",":recording_rule","\u201d, and, if you successfully find the metric, then you\u2019ve successfully created a recording rule:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'awscurl https://aps-workspaces.us-east-1.amazonaws.com/workspaces/$WORKSPACE_ID/api/v1/rules  --service="aps"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Output:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'"status":"success","data":{"groups":[{"name":"alert-test","file":"rules","rules":[{"state":"firing","name":"metric:alerting_rule","query":"rate(adot_test_counter0[5m]) \\u003e 5","duration":0,"labels":{},"annotations":{},"alerts":[{"labels":{"alertname":"metric:alerting_rule"},"annotations":{},"state":"firing","activeAt":"2021-09-16T13:20:35.9664022Z","value":"6.96890019778219e+01"}],"health":"ok","lastError":"","type":"alerting","lastEvaluation":"2021-09-16T18:41:35.967122005Z","evaluationTime":0.018121408}],"interval":60,"lastEvaluation":"2021-09-16T18:41:35.967104769Z","evaluationTime":0.018142997},{"name":"test","file":"rules","rules":[{"name":"metric:recording_rule","query":"rate(adot_test_counter0[5m])","labels":{},"health":"ok","lastError":"","type":"recording","lastEvaluation":"2021-09-16T18:40:44.650001548Z","evaluationTime":0.018381387}],"interval":60,"lastEvaluation":"2021-09-16T18:40:44.649986468Z","evaluationTime":0.018400463}]},"errorType":"","error":""}\n'})}),"\n",(0,a.jsx)(t.p,{children:"We can further query the alertmanager endpoint to confirm the same"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'awscurl https://aps-workspaces.us-east-1.amazonaws.com/workspaces/$WORKSPACE_ID/alertmanager/api/v2/alerts --service="aps" -H "Content-Type: application/json"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Sample Output:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'[{"annotations":{},"endsAt":"2021-09-16T18:48:35.966Z","fingerprint":"114212a24ca97549","receivers":[{"name":"default"}],"startsAt":"2021-09-16T13:20:35.966Z","status":{"inhibitedBy":[],"silencedBy":[],"state":"active"},"updatedAt":"2021-09-16T18:44:35.984Z","generatorURL":"/graph?g0.expr=sum%28rate%28envoy_http_downstream_rq_time_bucket%5B1m%5D%29%29+%3E+5\\u0026g0.tab=1","labels":{"alertname":"metric:alerting_rule"}}]\n'})}),"\n",(0,a.jsx)(t.p,{children:"This confirms the alert was triggered and sent to SNS via the SNS receiver"}),"\n",(0,a.jsx)(t.h2,{id:"clean-up",children:"Clean up"}),"\n",(0,a.jsx)(t.p,{children:"Run the following command to terminate the Amazon Managed Service for Prometheus workspace. Make sure you delete the EKS Cluster that was created as well:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"terraform destroy\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);