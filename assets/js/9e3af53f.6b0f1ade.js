"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[2489],{14665:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tools/amp","title":"Amazon Managed Service for Prometheus","description":"Prometheus is a popular open source monitoring tool that provides wide ranging metrics capabilities and insights about resources such as compute nodes and application related performance data.","source":"@site/docs/tools/amp.md","sourceDirName":"tools","slug":"/tools/amp","permalink":"/observability-best-practices/tools/amp","draft":false,"unlisted":false,"editUrl":"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/tools/amp.md","tags":[],"version":"current","frontMatter":{}}');var r=o(74848),a=o(28453);const n={},i="Amazon Managed Service for Prometheus",c={},d=[];function l(e){const t={a:"a",em:"em",h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"amazon-managed-service-for-prometheus",children:"Amazon Managed Service for Prometheus"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://prometheus.io/",children:"Prometheus"})," is a popular open source monitoring tool that provides wide ranging metrics capabilities and insights about resources such as compute nodes and application related performance data."]}),"\n",(0,r.jsxs)(t.p,{children:["Prometheus uses a ",(0,r.jsx)(t.em,{children:"pull"})," model to collect data, where as CloudWatch uses a ",(0,r.jsx)(t.em,{children:"push"})," model. Prometheus and CloudWatch are used for some overlapping use cases, though their operating models are very different and are priced differently."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://aws.amazon.com/prometheus/",children:"Amazon Managed Service for Prometheus"})," is widely used in containerized applications hosted in Kubernetes and ",(0,r.jsx)(t.a,{href:"https://aws.amazon.com/ecs/",children:"Amazon ECS"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can add Prometheus metric capabilities on your EC2 instance or ECS/EKS cluster using the ",(0,r.jsx)(t.a,{href:"../tools/cloudwatch_agent/",children:"CloudWatch agent"})," or ",(0,r.jsx)(t.a,{href:"https://aws-otel.github.io/",children:"AWS Distro for OpenTelemetry"}),". The CloudWatch agent with Prometheus support discovers and collects Prometheus metrics to monitor, troubleshoot, and alarm on application performance degradation and failures faster. This also reduces the number of monitoring tools required to improve observability."]}),"\n",(0,r.jsxs)(t.p,{children:["CloudWatch Container Insights monitoring for Prometheus automates the discovery of Prometheus metrics from containerized systems and workloads ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/",children:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/"})," ContainerInsights-Prometheus.html"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>i});var s=o(96540);const r={},a=s.createContext(r);function n(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);