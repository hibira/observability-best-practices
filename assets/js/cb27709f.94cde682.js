"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[7609],{60223:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=o(74848),r=o(28453);const s={},t="Amazon Managed Service for Prometheus",i={id:"recipes/amp",title:"Amazon Managed Service for Prometheus",description:"Amazon Managed Service for Prometheus (AMP) is a Prometheus-compatible",source:"@site/docs/recipes/amp.md",sourceDirName:"recipes",slug:"/recipes/amp",permalink:"/observability-best-practices/recipes/amp",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/amp.md",tags:[],version:"current",frontMatter:{},sidebar:"recipes",previous:{title:"Amazon CloudWatch",permalink:"/observability-best-practices/recipes/cw"},next:{title:"Amazon Managed Grafana",permalink:"/observability-best-practices/recipes/amg"}},c={},m=[];function p(e){const a={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"amazon-managed-service-for-prometheus",children:"Amazon Managed Service for Prometheus"}),"\n",(0,n.jsx)(a.p,{children:"[Amazon Managed Service for Prometheus][amp-main] (AMP) is a Prometheus-compatible\nmonitoring service that makes it easy to monitor containerized applications at scale.\nWith AMP, you can use the Prometheus query language (PromQL) to monitor the\nperformance of containerized workloads without having to manage the underlying\ninfrastructure required to manage the ingestion, storage, and querying of operational\nmetrics."}),"\n",(0,n.jsx)(a.p,{children:"Check out the following recipes:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"[Getting Started with AMP][amp-gettingstarted]"}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/observability-best-practices/recipes/recipes/ec2-eks-metrics-go-adot-ampamg",children:"Using ADOT in EKS on EC2 to ingest to AMP and visualize in AMG"})}),"\n",(0,n.jsx)(a.li,{children:"[Setting up cross-account ingestion into AMP][amp-xaccount]"}),"\n",(0,n.jsx)(a.li,{children:"[Metrics collection from ECS using AMP][amp-ecs-metrics]"}),"\n",(0,n.jsx)(a.li,{children:"[Configuring Grafana Cloud Agent for AMP][amp-gcwa]"}),"\n",(0,n.jsx)(a.li,{children:"[Set up cross-region metrics collection for AMP workspaces][amp-xregion-metrics]"}),"\n",(0,n.jsx)(a.li,{children:"[Best practices for migrating self-hosted Prometheus on EKS to AMP][amp-migration]"}),"\n",(0,n.jsx)(a.li,{children:"[Workshop for Getting Started with AMP][amp-oow]"}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/observability-best-practices/recipes/recipes/lambda-cw-metrics-go-amp",children:"Exporting Cloudwatch Metric Streams via Firehose and AWS Lambda to Amazon Managed Service for Prometheus"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/observability-best-practices/recipes/recipes/amp-alertmanager-terraform",children:"Terraform as Infrastructure as a Code to deploy Amazon Managed Service for Prometheus and configure Alert manager"})}),"\n",(0,n.jsx)(a.li,{children:"[Monitor Istio on EKS using Amazon Managed Prometheus and Amazon Managed Grafana][amp-istio-monitoring]"}),"\n",(0,n.jsx)(a.li,{children:"[Monitoring Amazon EKS Anywhere using Amazon Managed Service for Prometheus and Amazon Managed Grafana][amp-anywhere-monitoring]"}),"\n",(0,n.jsx)(a.li,{children:"[Introducing Amazon EKS Observability Accelerator][eks-accelerator]"}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"/observability-best-practices/recipes/recipes/amp-mixin-dashboards",children:"Installing the Prometheus mixin dashboards with AMP and Amazon Managed Grafana"}),"\n[amp-main]: ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/prometheus/",children:"https://aws.amazon.com/prometheus/"}),"\n[amp-gettingstarted]: ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/getting-started-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/mt/getting-started-amazon-managed-service-for-prometheus/"}),"\n[amp-xaccount]: ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/setting-up-cross-account-ingestion-into-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/opensource/setting-up-cross-account-ingestion-into-amazon-managed-service-for-prometheus/"}),"\n[amp-ecs-metrics]: ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/metrics-collection-from-amazon-ecs-using-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/opensource/metrics-collection-from-amazon-ecs-using-amazon-managed-service-for-prometheus/"}),"\n[amp-gcwa]: ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/configuring-grafana-cloud-agent-for-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/opensource/configuring-grafana-cloud-agent-for-amazon-managed-service-for-prometheus/"}),"\n[amp-xregion-metrics]: ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/set-up-cross-region-metrics-collection-for-amazon-managed-service-for-prometheus-workspaces/",children:"https://aws.amazon.com/blogs/opensource/set-up-cross-region-metrics-collection-for-amazon-managed-service-for-prometheus-workspaces/"}),"\n[amp-migration]: ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/best-practices-for-migrating-self-hosted-prometheus-on-amazon-eks-to-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/opensource/best-practices-for-migrating-self-hosted-prometheus-on-amazon-eks-to-amazon-managed-service-for-prometheus/"}),"\n[amp-oow]: ",(0,n.jsx)(a.a,{href:"https://observability.workshop.aws/en/amp.html",children:"https://observability.workshop.aws/en/amp.html"}),"\n[amp-istio-monitoring]: ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/monitor-istio-on-eks-using-amazon-managed-prometheus-and-amazon-managed-grafana/",children:"https://aws.amazon.com/blogs/mt/monitor-istio-on-eks-using-amazon-managed-prometheus-and-amazon-managed-grafana/"}),"\n[amp-anywhere-monitoring]: ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/blogs/containers/monitoring-amazon-eks-anywhere-using-amazon-managed-service-for-prometheus-and-amazon-managed-grafana/",children:"https://aws.amazon.com/blogs/containers/monitoring-amazon-eks-anywhere-using-amazon-managed-service-for-prometheus-and-amazon-managed-grafana/"}),"\n[eks-accelerator]: recipes/eks-observability-accelerator.md"]}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/observability-best-practices/recipes/recipes/as-ec2-using-amp-and-alertmanager",children:"Auto-scaling Amazon EC2 using Amazon Managed Service for Prometheus and alert manager"})}),"\n"]})]})}function l(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,a,o)=>{o.d(a,{R:()=>t,x:()=>i});var n=o(96540);const r={},s=n.createContext(r);function t(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);