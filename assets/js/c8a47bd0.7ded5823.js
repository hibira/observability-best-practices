"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[2466],{57635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(74848),s=t(28453);const o={},i="Using AWS Distro for OpenTelemetry in EKS on EC2 with Amazon Managed Service for Prometheus",a={id:"recipes/recipes/ec2-eks-metrics-go-adot-ampamg",title:"Using AWS Distro for OpenTelemetry in EKS on EC2 with Amazon Managed Service for Prometheus",description:"In this recipe we show you how to instrument a sample Go application and",source:"@site/docs/recipes/recipes/ec2-eks-metrics-go-adot-ampamg.md",sourceDirName:"recipes/recipes",slug:"/recipes/recipes/ec2-eks-metrics-go-adot-ampamg",permalink:"/observability-best-practices/recipes/recipes/ec2-eks-metrics-go-adot-ampamg",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/recipes/ec2-eks-metrics-go-adot-ampamg.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Infrastructure",id:"infrastructure",level:2},{value:"Architecture",id:"architecture",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create EKS on EC2 cluster",id:"create-eks-on-ec2-cluster",level:3},{value:"Set up an ECR repository",id:"set-up-an-ecr-repository",level:3},{value:"Set up AMP",id:"set-up-amp",level:3},{value:"Set up ADOT Collector",id:"set-up-adot-collector",level:3},{value:"Set up AMG",id:"set-up-amg",level:3},{value:"Application",id:"application",level:2},{value:"Build container image",id:"build-container-image",level:3},{value:"Deploy sample app",id:"deploy-sample-app",level:3},{value:"End-to-end",id:"end-to-end",level:2},{value:"Verify your pipeline is working",id:"verify-your-pipeline-is-working",level:3},{value:"Create a Grafana dashboard",id:"create-a-grafana-dashboard",level:3},{value:"Cleanup",id:"cleanup",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"using-aws-distro-for-opentelemetry-in-eks-on-ec2-with-amazon-managed-service-for-prometheus",children:"Using AWS Distro for OpenTelemetry in EKS on EC2 with Amazon Managed Service for Prometheus"}),"\n",(0,r.jsxs)(n.p,{children:["In this recipe we show you how to instrument a ",(0,r.jsx)(n.a,{href:"https://github.com/aws-observability/aws-otel-community/tree/master/sample-apps/prometheus-sample-app",children:"sample Go application"})," and\nuse ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/otel",children:"AWS Distro for OpenTelemetry (ADOT)"})," to ingest metrics into\n",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/prometheus/",children:"Amazon Managed Service for Prometheus (AMP)"})," .\nThen we're using ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/grafana/",children:"Amazon Managed Grafana (AMG)"})," to visualize the metrics."]}),"\n",(0,r.jsxs)(n.p,{children:["We will be setting up an ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/eks/",children:"Amazon Elastic Kubernetes Service (EKS)"}),"\non EC2 cluster and ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/ecr/",children:"Amazon Elastic Container Registry (ECR)"}),"\nrepository to demonstrate a complete scenario."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"This guide will take approximately 1 hour to complete."})}),"\n",(0,r.jsx)(n.h2,{id:"infrastructure",children:"Infrastructure"}),"\n",(0,r.jsx)(n.p,{children:"In the following section we will be setting up the infrastructure for this recipe."}),"\n",(0,r.jsx)(n.h3,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsxs)(n.p,{children:["The ADOT pipeline enables us to use the\n",(0,r.jsx)(n.a,{href:"https://github.com/aws-observability/aws-otel-collector",children:"ADOT Collector"})," to\nscrape a Prometheus-instrumented application, and ingest the scraped metrics to\nAmazon Managed Service for Prometheus."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Architecture",src:t(53085).A+"",width:"1020",height:"322"})}),"\n",(0,r.jsx)(n.p,{children:"The ADOT Collector includes two components specific to Prometheus:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"the Prometheus Receiver, and"}),"\n",(0,r.jsx)(n.li,{children:"the AWS Prometheus Remote Write Exporter."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["For more information on Prometheus Remote Write Exporter check out:\n",(0,r.jsx)(n.a,{href:"https://aws-otel.github.io/docs/getting-started/prometheus-remote-write-exporter",children:"Getting Started with Prometheus Remote Write Exporter for AMP"})]})}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The AWS CLI is ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html",children:"installed"})," and ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html",children:"configured"})," in your environment."]}),"\n",(0,r.jsxs)(n.li,{children:["You need to install the ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html",children:"eksctl"})," command in your environment."]}),"\n",(0,r.jsxs)(n.li,{children:["You need to install ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html",children:"kubectl"})," in your environment."]}),"\n",(0,r.jsxs)(n.li,{children:["You have ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"docker"})," installed into your environment."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"create-eks-on-ec2-cluster",children:"Create EKS on EC2 cluster"}),"\n",(0,r.jsxs)(n.p,{children:["Our demo application in this recipe will be running on top of EKS.\nYou can either use an existing EKS cluster or create one using ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(32064).A+"",children:"cluster-config.yaml"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["This template will create a new cluster with two EC2 ",(0,r.jsx)(n.code,{children:"t2.large"})," nodes."]}),"\n",(0,r.jsxs)(n.p,{children:["Edit the template file and set ",(0,r.jsx)(n.code,{children:"<YOUR_REGION>"})," to one of the\n",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html#AMP-supported-Regions",children:"supported regions for AMP"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Make sure to overwrite ",(0,r.jsx)(n.code,{children:"<YOUR_REGION>"})," in your session, for example in bash:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export AWS_DEFAULT_REGION=<YOUR_REGION>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create your cluster using the following command."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"eksctl create cluster -f cluster-config.yaml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"set-up-an-ecr-repository",children:"Set up an ECR repository"}),"\n",(0,r.jsxs)(n.p,{children:["In order to deploy our application to EKS we need a container registry.\nYou can use the following command to create a new ECR registry in your account.\nMake sure to set ",(0,r.jsx)(n.code,{children:"<YOUR_REGION>"})," as well."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"aws ecr create-repository \\\n    --repository-name prometheus-sample-app \\\n    --image-scanning-configuration scanOnPush=true \\\n    --region <YOUR_REGION>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"set-up-amp",children:"Set up AMP"}),"\n",(0,r.jsx)(n.p,{children:"create a workspace using the AWS CLI"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"aws amp create-workspace --alias prometheus-sample-app\n"})}),"\n",(0,r.jsx)(n.p,{children:"Verify the workspace is created using:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"aws amp list-workspaces\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["For more details check out the ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-getting-started.html",children:"AMP Getting started"})," guide."]})}),"\n",(0,r.jsx)(n.h3,{id:"set-up-adot-collector",children:"Set up ADOT Collector"}),"\n",(0,r.jsxs)(n.p,{children:["Download ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(3148).A+"",children:"adot-collector-ec2.yaml"}),"\nand edit this YAML doc with the parameters described in the next steps."]}),"\n",(0,r.jsxs)(n.p,{children:["In this example, the ADOT Collector configuration uses an annotation ",(0,r.jsx)(n.code,{children:"(scrape=true)"}),"\nto tell which target endpoints to scrape. This allows the ADOT Collector to distinguish\nthe sample app endpoint from ",(0,r.jsx)(n.code,{children:"kube-system"})," endpoints in your cluster.\nYou can remove this from the re-label configurations if you want to scrape a different sample app."]}),"\n",(0,r.jsx)(n.p,{children:"Use the following steps to edit the downloaded file for your environment:"}),"\n",(0,r.jsxs)(n.p,{children:["1. Replace ",(0,r.jsx)(n.code,{children:"<YOUR_REGION>"})," with your current region."]}),"\n",(0,r.jsxs)(n.p,{children:["2. Replace ",(0,r.jsx)(n.code,{children:"<YOUR_ENDPOINT>"})," with the remote write URL of your workspace."]}),"\n",(0,r.jsx)(n.p,{children:"Get your AMP remote write URL endpoint by executing the following queries."}),"\n",(0,r.jsx)(n.p,{children:"First, get the workspace ID like so:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"YOUR_WORKSPACE_ID=$(aws amp list-workspaces \\\n                    --alias prometheus-sample-app \\\n                    --query 'workspaces[0].workspaceId' --output text)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now get the remote write URL endpoint URL for your workspace using:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"YOUR_ENDPOINT=$(aws amp describe-workspace \\\n                --workspace-id $YOUR_WORKSPACE_ID  \\\n                --query 'workspace.prometheusEndpoint' --output text)api/v1/remote_write\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Make sure that ",(0,r.jsx)(n.code,{children:"YOUR_ENDPOINT"})," is in fact the remote write URL, that is,\nthe URL should end in ",(0,r.jsx)(n.code,{children:"/api/v1/remote_write"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"After creating deployment file we can now apply this to our cluster by using the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl apply -f adot-collector-ec2.yaml\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["For more information check out the ",(0,r.jsx)(n.a,{href:"https://aws-otel.github.io/docs/getting-started/prometheus-remote-write-exporter/eks#aws-distro-for-opentelemetry-adot-collector-setup",children:"AWS Distro for OpenTelemetry (ADOT)\nCollector Setup"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"set-up-amg",children:"Set up AMG"}),"\n",(0,r.jsxs)(n.p,{children:["Setup a new AMG workspace using the ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/blogs/mt/amazon-managed-grafana-getting-started/",children:"Amazon Managed Grafana \u2013 Getting Started"})," guide."]}),"\n",(0,r.jsx)(n.p,{children:'Make sure to add "Amazon Managed Service for Prometheus" as a datasource during creation.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://d2908q01vomqb2.cloudfront.net/972a67c48192728a34979d9a35164c1295401b71/2020/12/09/image008-1024x870.jpg",alt:"Service managed permission settings"})}),"\n",(0,r.jsx)(n.h2,{id:"application",children:"Application"}),"\n",(0,r.jsxs)(n.p,{children:["In this recipe we will be using a\n",(0,r.jsx)(n.a,{href:"https://github.com/aws-observability/aws-otel-community/tree/master/sample-apps/prometheus",children:"sample application"}),"\nfrom the AWS Observability repository."]}),"\n",(0,r.jsxs)(n.p,{children:["This Prometheus sample app generates all four Prometheus metric types\n(counter, gauge, histogram, summary) and exposes them at the ",(0,r.jsx)(n.code,{children:"/metrics"})," endpoint."]}),"\n",(0,r.jsx)(n.h3,{id:"build-container-image",children:"Build container image"}),"\n",(0,r.jsx)(n.p,{children:"To build the container image, first clone the Git repository and change\ninto the directory as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"git clone https://github.com/aws-observability/aws-otel-community.git && \\\ncd ./aws-otel-community/sample-apps/prometheus\n"})}),"\n",(0,r.jsxs)(n.p,{children:["First, set the region (if not already done above) and account ID to what is applicable in your case.\nReplace ",(0,r.jsx)(n.code,{children:"<YOUR_REGION>"})," with your current region. For\nexample, in the Bash shell this would look as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"export AWS_DEFAULT_REGION=<YOUR_REGION>\nexport ACCOUNTID=`aws sts get-caller-identity --query Account --output text`\n"})}),"\n",(0,r.jsx)(n.p,{children:"Next, build the container image:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'docker build . -t "$ACCOUNTID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/prometheus-sample-app:latest"\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"go mod"})," fails in your environment due to a proxy.golang.or i/o timeout,\nyou are able to bypass the go mod proxy by editing the Dockerfile."]}),(0,r.jsx)(n.p,{children:"Change the following line in the Docker file:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"RUN GO111MODULE=on go mod download\n"})}),(0,r.jsx)(n.p,{children:"to:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"RUN GOPROXY=direct GO111MODULE=on go mod download\n"})})]}),"\n",(0,r.jsx)(n.p,{children:"Now you can push the container image to the ECR repo you created earlier on."}),"\n",(0,r.jsx)(n.p,{children:"For that, first log in to the default ECR registry:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'aws ecr get-login-password --region $AWS_DEFAULT_REGION | \\\n    docker login --username AWS --password-stdin \\\n    "$ACCOUNTID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com"\n'})}),"\n",(0,r.jsx)(n.p,{children:"And finally, push the container image to the ECR repository you created, above:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'docker push "$ACCOUNTID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/prometheus-sample-app:latest"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"deploy-sample-app",children:"Deploy sample app"}),"\n",(0,r.jsxs)(n.p,{children:["Edit ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(9228).A+"",children:"prometheus-sample-app.yaml"}),"\nto contain your ECR image path. That is, replace ",(0,r.jsx)(n.code,{children:"ACCOUNTID"})," and ",(0,r.jsx)(n.code,{children:"AWS_DEFAULT_REGION"})," in the\nfile with your own values:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'    # change the following to your container image:\n    image: "ACCOUNTID.dkr.ecr.AWS_DEFAULT_REGION.amazonaws.com/prometheus-sample-app:latest"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now you can deploy the sample app to your cluster using:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl apply -f prometheus-sample-app.yaml\n"})}),"\n",(0,r.jsx)(n.h2,{id:"end-to-end",children:"End-to-end"}),"\n",(0,r.jsx)(n.p,{children:"Now that you have the infrastructure and the application in place, we will\ntest out the setup, sending metrics from the Go app running in EKS to AMP and\nvisualize it in AMG."}),"\n",(0,r.jsx)(n.h3,{id:"verify-your-pipeline-is-working",children:"Verify your pipeline is working"}),"\n",(0,r.jsx)(n.p,{children:"To verify if the ADOT collector is scraping the pod of the sample app and\ningests the metrics into AMP, we look at the collector logs."}),"\n",(0,r.jsx)(n.p,{children:"Enter the following command to follow the ADOT collector logs:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl -n adot-col logs adot-collector -f\n"})}),"\n",(0,r.jsx)(n.p,{children:"One example output in the logs of the scraped metrics from the sample app\nshould look like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"...\nResource labels:\n     -> service.name: STRING(kubernetes-service-endpoints)\n     -> host.name: STRING(192.168.16.238)\n     -> port: STRING(8080)\n     -> scheme: STRING(http)\nInstrumentationLibraryMetrics #0\nMetric #0\nDescriptor:\n     -> Name: test_gauge0\n     -> Description: This is my gauge\n     -> Unit:\n     -> DataType: DoubleGauge\nDoubleDataPoints #0\nStartTime: 0\nTimestamp: 1606511460471000000\nValue: 0.000000\n...\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["To verify if AMP received the metrics, you can use ",(0,r.jsx)(n.a,{href:"https://github.com/okigan/awscurl",children:"awscurl"}),".\nThis tool enables you to send HTTP requests from the command line with AWS Sigv4 authentication,\nso you must have AWS credentials set up locally with the correct permissions to query from AMP.\nIn the following command replace ",(0,r.jsx)(n.code,{children:"$AMP_ENDPOINT"})," with the endpoint for your AMP workspace:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$ awscurl --service="aps" \\\n        --region="$AWS_DEFAULT_REGION" "https://$AMP_ENDPOINT/api/v1/query?query=adot_test_gauge0"\n{"status":"success","data":{"resultType":"vector","result":[{"metric":{"__name__":"adot_test_gauge0"},"value":[1606512592.493,"16.87214000011479"]}]}}\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"create-a-grafana-dashboard",children:"Create a Grafana dashboard"}),"\n",(0,r.jsxs)(n.p,{children:["You can import an example dashboard, available via\n",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(81406).A+"",children:"prometheus-sample-app-dashboard.json"}),",\nfor the sample app that looks as follows:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Screen shot of the Prometheus sample app dashboard in AMG",src:t(57194).A+"",width:"1000",height:"766"})}),"\n",(0,r.jsx)(n.p,{children:"Further, use the following guides to create your own dashboard in Amazon Managed Grafana:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/grafana/latest/userguide/dashboard-overview.html",children:"User Guide: Dashboards"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://grafana.com/docs/grafana/latest/best-practices/best-practices-for-creating-dashboards/",children:"Best practices for creating dashboards"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"That's it, congratulations you've learned how to use ADOT in EKS on EC2 to\ningest metrics."}),"\n",(0,r.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Remove the resources and cluster"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl delete all --all\neksctl delete cluster --name amp-eks-ec2\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Remove the AMP workspace"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"aws amp delete-workspace --workspace-id `aws amp list-workspaces --alias prometheus-sample-app --query 'workspaces[0].workspaceId' --output text`\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Remove the amp-iamproxy-ingest-role IAM role"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"aws delete-role --role-name amp-iamproxy-ingest-role\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Remove the AMG workspace by removing it from the console."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3148:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/adot-collector-ec2-d0b7012e102e6d72c630d55ed303274e.yaml"},32064:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/cluster-config-87ec9c5286dd5277c7626950a47b82c8.yaml"},81406:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/prometheus-sample-app-dashboard-a6a9aaa9da6bca2bf2532ee0e324a8eb.json"},9228:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/prometheus-sample-app-86a325cf076a1dab0f760adedc8a6492.yaml"},53085:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/adot-metrics-pipeline-60be81f1e6633017f92dce2bbe7cbd51.png"},57194:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/amg-prom-sample-app-dashboard-1d97707e9ef8d9ea445eca10766285a2.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);