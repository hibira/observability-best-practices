"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[7491],{27322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(74848),i=n(28453);const s={},o="CloudWatch Container Insights",a={id:"patterns/adoteksfargate",title:"CloudWatch Container Insights",description:"Introduction",source:"@site/docs/patterns/adoteksfargate.md",sourceDirName:"patterns",slug:"/patterns/adoteksfargate",permalink:"/observability-best-practices/ja/patterns/adoteksfargate",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/patterns/adoteksfargate.md",tags:[],version:"current",frontMatter:{},sidebar:"patterns",previous:{title:"Lambda Tracing with AWS X-Ray",permalink:"/observability-best-practices/ja/patterns/Tracing/xraylambda"},next:{title:"Pushing Metrics from EKS to Prometheus",permalink:"/observability-best-practices/ja/patterns/ampagentless"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"ADOT Collector Design for EKS Fargate",id:"adot-collector-design-for-eks-fargate",level:2},{value:"Deployment Process",id:"deployment-process",level:2},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"Pros:",id:"pros",level:3},{value:"Cons:",id:"cons",level:3}];function d(e){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"cloudwatch-container-insights",children:"CloudWatch Container Insights"}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"Amazon CloudWatch Container Insights is a powerful tool for collecting, aggregating, and summarizing metrics and logs from containerized applications and microservices. This document provides an overview of the integration between ADOT and CloudWatch Container Insights for EKS Fargate workloads, including its design, deployment process, and benefits."}),"\n",(0,r.jsx)(t.h2,{id:"adot-collector-design-for-eks-fargate",children:"ADOT Collector Design for EKS Fargate"}),"\n",(0,r.jsx)(t.p,{children:"The ADOT Collector uses a pipeline architecture consisting of three main components:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Receiver: Accepts data in a specified format and translates it into an internal format."}),"\n",(0,r.jsx)(t.li,{children:"Processor: Performs tasks such as batching, filtering, and transformations on the data."}),"\n",(0,r.jsx)(t.li,{children:"Exporter: Determines the destination for sending metrics, logs, or traces."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"For EKS Fargate, the ADOT Collector uses a Prometheus Receiver to scrape metrics from the Kubernetes API server, which acts as a proxy for the kubelet on worker nodes. This approach is necessary due to the networking limitations in EKS Fargate that prevent direct access to the kubelet. The collected metrics go through a series of processors for filtering, renaming, data aggregation, and conversion. Finally, the AWS CloudWatch EMF Exporter converts the metrics to the embedded metric format (EMF) and sends them to CloudWatch Logs."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"CI EKS fargate with ADOT",src:n(28851).A+"",width:"1072",height:"644"}),"\n",(0,r.jsx)(t.em,{children:"Figure 1: Container Insights with ADOT on EKS Fargate"})]}),"\n",(0,r.jsx)(t.h2,{id:"deployment-process",children:"Deployment Process"}),"\n",(0,r.jsx)(t.p,{children:"To deploy the ADOT Collector on an EKS Fargate cluster:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Create an EKS cluster with Kubernetes"}),"\n",(0,r.jsx)(t.li,{children:"Set up a Fargate pod execution role."}),"\n",(0,r.jsx)(t.li,{children:"Define Fargate profiles for the necessary namespaces."}),"\n",(0,r.jsx)(t.li,{children:"Create an IAM role for the ADOT Collector with the required permissions."}),"\n",(0,r.jsx)(t.li,{children:"Deploy the ADOT Collector as a Kubernetes StatefulSet using the provided manifest."}),"\n",(0,r.jsx)(t.li,{children:"Deploy sample workloads to test the metrics collection."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"pros-and-cons",children:"Pros and Cons"}),"\n",(0,r.jsx)(t.h3,{id:"pros",children:"Pros:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Unified Monitoring: Provides a consistent monitoring experience across EKS EC2 and Fargate workloads."}),"\n",(0,r.jsx)(t.li,{children:"Scalability: A single ADOT Collector instance can discover and collect metrics from all worker nodes in an EKS cluster."}),"\n",(0,r.jsx)(t.li,{children:"Rich Metrics: Collects a comprehensive set of system metrics, including CPU, memory, disk, and network usage."}),"\n",(0,r.jsx)(t.li,{children:"Easy Integration: Seamlessly integrates with existing CloudWatch dashboards and alarms."}),"\n",(0,r.jsx)(t.li,{children:"Cost-Effective: Enables monitoring of Fargate workloads without the need for additional monitoring infrastructure."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"cons",children:"Cons:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Configuration Complexity: Setting up the ADOT Collector requires careful configuration of IAM roles, Fargate profiles, and Kubernetes resources."}),"\n",(0,r.jsx)(t.li,{children:"Resource Overhead: The ADOT Collector itself consumes resources on the Fargate cluster, which needs to be accounted for in capacity planning."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The integration of AWS Distro for OpenTelemetry with CloudWatch Container Insights for EKS Fargate workloads provides a powerful solution for monitoring containerized applications. It offers a unified monitoring experience across different EKS deployment options and leverages the scalability and flexibility of the OpenTelemetry framework. By enabling the collection of system metrics from Fargate workloads, this integration allows customers to gain deeper insights into their application performance, make informed scaling decisions, and optimize resource utilization."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28851:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/cieksfargateadot-04ff0a5dd8133fec00159ed14705ee18.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);