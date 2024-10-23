"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[1848],{90793:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>t,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(74848),r=n(28453);const s={},t="Amazon Managed Service for Prometheus",i={id:"recipes/amp",title:"Amazon Managed Service for Prometheus",description:"Amazon Managed Service for Prometheus (AMP) \u306f\u3001Prometheus \u4e92\u63db\u306e\u76e3\u8996\u30b5\u30fc\u30d3\u30b9\u3067\u3001\u30b3\u30f3\u30c6\u30ca\u5316\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5927\u898f\u6a21\u306b\u76e3\u8996\u3059\u308b\u3053\u3068\u3092\u5bb9\u6613\u306b\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/recipes/amp.md",sourceDirName:"recipes",slug:"/recipes/amp",permalink:"/observability-best-practices/ja/recipes/amp",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/amp.md",tags:[],version:"current",frontMatter:{},sidebar:"recipes",previous:{title:"Amazon CloudWatch",permalink:"/observability-best-practices/ja/recipes/cw"},next:{title:"Amazon Managed Grafana",permalink:"/observability-best-practices/ja/recipes/amg"}},m={},c=[];function p(e){const a={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"amazon-managed-service-for-prometheus",children:"Amazon Managed Service for Prometheus"}),"\n",(0,o.jsx)(a.p,{children:"[Amazon Managed Service for Prometheus][amp-main] (AMP) \u306f\u3001Prometheus \u4e92\u63db\u306e\u76e3\u8996\u30b5\u30fc\u30d3\u30b9\u3067\u3001\u30b3\u30f3\u30c6\u30ca\u5316\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5927\u898f\u6a21\u306b\u76e3\u8996\u3059\u308b\u3053\u3068\u3092\u5bb9\u6613\u306b\u3057\u307e\u3059\u3002\nAMP \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001Prometheus \u30af\u30a8\u30ea\u8a00\u8a9e (PromQL) \u3092\u4f7f\u7528\u3057\u3066\u3001\u30b3\u30f3\u30c6\u30ca\u5316\u3055\u308c\u305f\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u76e3\u8996\u3067\u304d\u307e\u3059\u3002\u305d\u306e\u969b\u3001\u904b\u7528\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u53d6\u308a\u8fbc\u307f\u3001\u4fdd\u5b58\u3001\u30af\u30a8\u30ea\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u57fa\u76e4\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u3092\u7ba1\u7406\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,o.jsx)(a.p,{children:"\u4ee5\u4e0b\u306e\u30ec\u30b7\u30d4\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"[AMP \u306e\u4f7f\u7528\u958b\u59cb][amp-gettingstarted]"}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.a,{href:"/observability-best-practices/ja/recipes/recipes/ec2-eks-metrics-go-adot-ampamg",children:"EC2 \u4e0a\u306e EKS \u3067 ADOT \u3092\u4f7f\u7528\u3057\u3066 AMP \u306b\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u307f\u3001AMG \u3067\u53ef\u8996\u5316\u3059\u308b"})}),"\n",(0,o.jsx)(a.li,{children:"[AMP \u3078\u306e\u30af\u30ed\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u53d6\u308a\u8fbc\u307f\u306e\u8a2d\u5b9a][amp-xaccount]"}),"\n",(0,o.jsx)(a.li,{children:"[AMP \u3092\u4f7f\u7528\u3057\u305f ECS \u304b\u3089\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u53ce\u96c6][amp-ecs-metrics]"}),"\n",(0,o.jsx)(a.li,{children:"[AMP \u7528\u306e Grafana Cloud Agent \u306e\u8a2d\u5b9a][amp-gcwa]"}),"\n",(0,o.jsx)(a.li,{children:"[AMP \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u7528\u306e\u30af\u30ed\u30b9\u30ea\u30fc\u30b8\u30e7\u30f3\u30e1\u30c8\u30ea\u30af\u30b9\u53ce\u96c6\u306e\u8a2d\u5b9a][amp-xregion-metrics]"}),"\n",(0,o.jsx)(a.li,{children:"[EKS \u4e0a\u306e\u81ea\u5df1\u30db\u30b9\u30c8\u578b Prometheus \u304b\u3089 AMP \u3078\u306e\u79fb\u884c\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9][amp-migration]"}),"\n",(0,o.jsx)(a.li,{children:"[AMP \u4f7f\u7528\u958b\u59cb\u306e\u305f\u3081\u306e\u30ef\u30fc\u30af\u30b7\u30e7\u30c3\u30d7][amp-oow]"}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.a,{href:"/observability-best-practices/ja/recipes/recipes/lambda-cw-metrics-go-amp",children:"Firehose \u3068 AWS Lambda \u3092\u4ecb\u3057\u305f CloudWatch \u30e1\u30c8\u30ea\u30af\u30b9\u30b9\u30c8\u30ea\u30fc\u30e0\u306e Amazon Managed Service for Prometheus \u3078\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"})}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.a,{href:"/observability-best-practices/ja/recipes/recipes/amp-alertmanager-terraform",children:"Amazon Managed Service for Prometheus \u306e\u30c7\u30d7\u30ed\u30a4\u3068 Alert Manager \u306e\u8a2d\u5b9a\u306e\u305f\u3081\u306e Infrastructure as Code \u3068\u3057\u3066\u306e Terraform"})}),"\n",(0,o.jsx)(a.li,{children:"[Amazon Managed Prometheus \u3068 Amazon Managed Grafana \u3092\u4f7f\u7528\u3057\u305f EKS \u4e0a\u306e Istio \u306e\u76e3\u8996][amp-istio-monitoring]"}),"\n",(0,o.jsx)(a.li,{children:"[Amazon Managed Service for Prometheus \u3068 Amazon Managed Grafana \u3092\u4f7f\u7528\u3057\u305f Amazon EKS Anywhere \u306e\u76e3\u8996][amp-anywhere-monitoring]"}),"\n",(0,o.jsx)(a.li,{children:"[Amazon EKS Observability Accelerator \u306e\u7d39\u4ecb][eks-accelerator]"}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.a,{href:"/observability-best-practices/ja/recipes/recipes/amp-mixin-dashboards",children:"AMP \u3068 Amazon Managed Grafana \u3092\u4f7f\u7528\u3057\u305f Prometheus mixin \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n[amp-main]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/jp/prometheus/",children:"https://aws.amazon.com/jp/prometheus/"}),"\n[amp-gettingstarted]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/getting-started-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/mt/getting-started-amazon-managed-service-for-prometheus/"}),"\n[amp-xaccount]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/setting-up-cross-account-ingestion-into-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/opensource/setting-up-cross-account-ingestion-into-amazon-managed-service-for-prometheus/"}),"\n[amp-ecs-metrics]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/metrics-collection-from-amazon-ecs-using-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/opensource/metrics-collection-from-amazon-ecs-using-amazon-managed-service-for-prometheus/"}),"\n[amp-gcwa]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/configuring-grafana-cloud-agent-for-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/opensource/configuring-grafana-cloud-agent-for-amazon-managed-service-for-prometheus/"}),"\n[amp-xregion-metrics]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/set-up-cross-region-metrics-collection-for-amazon-managed-service-for-prometheus-workspaces/",children:"https://aws.amazon.com/blogs/opensource/set-up-cross-region-metrics-collection-for-amazon-managed-service-for-prometheus-workspaces/"}),"\n[amp-migration]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/best-practices-for-migrating-self-hosted-prometheus-on-amazon-eks-to-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/opensource/best-practices-for-migrating-self-hosted-prometheus-on-amazon-eks-to-amazon-managed-service-for-prometheus/"}),"\n[amp-oow]: ",(0,o.jsx)(a.a,{href:"https://observability.workshop.aws/en/amp.html",children:"https://observability.workshop.aws/en/amp.html"}),"\n[amp-istio-monitoring]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/monitor-istio-on-eks-using-amazon-managed-prometheus-and-amazon-managed-grafana/",children:"https://aws.amazon.com/blogs/mt/monitor-istio-on-eks-using-amazon-managed-prometheus-and-amazon-managed-grafana/"}),"\n[amp-anywhere-monitoring]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/containers/monitoring-amazon-eks-anywhere-using-amazon-managed-service-for-prometheus-and-amazon-managed-grafana/",children:"https://aws.amazon.com/blogs/containers/monitoring-amazon-eks-anywhere-using-amazon-managed-service-for-prometheus-and-amazon-managed-grafana/"}),"\n[eks-accelerator]: recipes/eks-observability-accelerator.md"]}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.a,{href:"/observability-best-practices/ja/recipes/recipes/as-ec2-using-amp-and-alertmanager",children:"Amazon Managed Service for Prometheus \u3068 Alert Manager \u3092\u4f7f\u7528\u3057\u305f Amazon EC2 \u306e\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0"})}),"\n"]})]})}function l(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>i});var o=n(96540);const r={},s=o.createContext(r);function t(e){const a=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);