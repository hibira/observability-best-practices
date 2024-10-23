"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[12],{94345:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(74848),i=t(28453);const a={},r="Amazon CloudWatch",o={id:"recipes/cw",title:"Amazon CloudWatch",description:"Amazon CloudWatch (CW) \u306f\u3001DevOps \u30a8\u30f3\u30b8\u30cb\u30a2\u3001\u958b\u767a\u8005\u3001\u30b5\u30a4\u30c8\u4fe1\u983c\u6027\u30a8\u30f3\u30b8\u30cb\u30a2 (SRE)\u3001IT \u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u5411\u3051\u306b\u69cb\u7bc9\u3055\u308c\u305f\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u304a\u3088\u3073\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/recipes/cw.md",sourceDirName:"recipes",slug:"/recipes/cw",permalink:"/observability-best-practices/ja/recipes/cw",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/cw.md",tags:[],version:"current",frontMatter:{},sidebar:"recipes",previous:{title:"Node.js",permalink:"/observability-best-practices/ja/recipes/nodejs"},next:{title:"Amazon Managed Service for Prometheus",permalink:"/observability-best-practices/ja/recipes/amp"}},c={},l=[];function h(e){const s={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"amazon-cloudwatch",children:"Amazon CloudWatch"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://aws.amazon.com/jp/cloudwatch/",children:"Amazon CloudWatch"})," (CW) \u306f\u3001DevOps \u30a8\u30f3\u30b8\u30cb\u30a2\u3001\u958b\u767a\u8005\u3001\u30b5\u30a4\u30c8\u4fe1\u983c\u6027\u30a8\u30f3\u30b8\u30cb\u30a2 (SRE)\u3001IT \u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u5411\u3051\u306b\u69cb\u7bc9\u3055\u308c\u305f\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u304a\u3088\u3073\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\nCloudWatch \u306f\u3001\u30ed\u30b0\u3001\u30e1\u30c8\u30ea\u30af\u30b9\u3001\u30a4\u30d9\u30f3\u30c8\u306e\u5f62\u5f0f\u3067\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u304a\u3088\u3073\u904b\u7528\u30c7\u30fc\u30bf\u3092\u53ce\u96c6\u3057\u3001AWS \u30ea\u30bd\u30fc\u30b9\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001AWS \u4e0a\u304a\u3088\u3073 \u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u30b5\u30fc\u30d0\u30fc\u3067\u5b9f\u884c\u3055\u308c\u308b\u30b5\u30fc\u30d3\u30b9\u306e\u7d71\u5408\u30d3\u30e5\u30fc\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"\u4ee5\u4e0b\u306e\u30ec\u30b7\u30d4\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://aws.amazon.com/blogs/database/build-proactive-database-monitoring-for-amazon-rds-with-amazon-cloudwatch-logs-aws-lambda-and-amazon-sns/",children:"CW Logs\u3001Lambda\u3001SNS \u3092\u4f7f\u7528\u3057\u305f RDS \u306e\u30d7\u30ed\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u69cb\u7bc9"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://aws.amazon.com/jp/blogs/news/implementing-cloudwatch-centric-observability-for-kubernetes-native-developers-in-amazon-elastic-kubernetes-service/",children:"EKS \u306b\u304a\u3051\u308b Kubernetes \u30cd\u30a4\u30c6\u30a3\u30d6\u958b\u767a\u8005\u5411\u3051\u306e CloudWatch \u4e2d\u5fc3\u306e\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306e\u5b9f\u88c5"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://observability.workshop.aws/en/synthetics.html",children:"CW Synthetics \u3092\u4f7f\u7528\u3057\u305f Canary \u306e\u4f5c\u6210"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://observability.workshop.aws/en/logsinsights.html",children:"\u30ed\u30b0\u306e\u30af\u30a8\u30ea\u306b\u4f7f\u7528\u3059\u308b Cloudwatch Logs Insights"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://observability.workshop.aws/en/logsinsights.html",children:"Lambda Insights"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://observability.workshop.aws/en/anomalydetection.html",children:"CloudWatch \u3092\u4f7f\u7528\u3057\u305f\u7570\u5e38\u691c\u51fa"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://observability.workshop.aws/en/alarms/_mericalarm.html",children:"CloudWatch \u3092\u4f7f\u7528\u3057\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u30a2\u30e9\u30fc\u30e0"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://aws.amazon.com/blogs/containers/choosing-container-logging-options-to-avoid-backpressure/",children:"\u30d0\u30c3\u30af\u30d7\u30ec\u30c3\u30b7\u30e3\u30fc\u3092\u56de\u907f\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30c6\u30ca\u30ed\u30b0\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u9078\u629e"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://aws.amazon.com/jp/blogs/news/introducing-cloudwatch-container-insights-prometheus-support-with-aws-distro-for-opentelemetry-on-amazon-ecs-and-amazon-eks/",children:"ECS \u304a\u3088\u3073 EKS \u4e0a\u306e AWS Distro for OpenTelemetry \u3092\u4f7f\u7528\u3057\u305f CloudWatch Container Insights Prometheus \u30b5\u30dd\u30fc\u30c8\u306e\u5c0e\u5165"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://observability.workshop.aws/en/containerinsights/ecs.html",children:"CW Container Insights \u3092\u4f7f\u7528\u3057\u305f ECS \u30b3\u30f3\u30c6\u30ca\u5316\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304a\u3088\u3073\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://observability.workshop.aws/en/containerinsights/eks.html",children:"CW Container Insights \u3092\u4f7f\u7528\u3057\u305f EKS \u30b3\u30f3\u30c6\u30ca\u5316\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304a\u3088\u3073\u30de\u30a4\u30af\u30ed\u30b5\u30fc\u30d3\u30b9\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/observability-best-practices/ja/recipes/recipes/lambda-cw-metrics-go-amp",children:"Firehose \u3068 AWS Lambda \u3092\u4f7f\u7528\u3057\u305f Cloudwatch \u30e1\u30c8\u30ea\u30af\u30b9\u30b9\u30c8\u30ea\u30fc\u30e0\u306e Amazon Managed Service for Prometheus \u3078\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://aws.amazon.com/blogs/mt/proactive-autoscaling-of-kubernetes-workloads-with-keda-using-metrics-ingested-into-amazon-cloudwatch/",children:"KEDA \u3068 Amazon CloudWatch \u3092\u4f7f\u7528\u3057\u305f Kubernetes \u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e\u30d7\u30ed\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/observability-best-practices/ja/recipes/recipes/metrics-explorer-filter-by-tags",children:"\u30ea\u30bd\u30fc\u30b9\u30bf\u30b0\u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u96c6\u8a08\u3068\u53ef\u8996\u5316\u306b Amazon CloudWatch Metrics Explorer \u3092\u4f7f\u7528\u3059\u308b"})}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(96540);const i={},a=n.createContext(i);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);