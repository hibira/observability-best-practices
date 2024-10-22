"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[8751],{7265:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var i=o(74848),a=o(28453);const t={},r="EKS Monitoring with AWS Open source service",s={id:"patterns/eksampamg",title:"EKS Monitoring with AWS Open source service",description:"\x3c!-- Workloads with Node Exporter, Amazon Managed Prometheus, and Grafana Visualization",source:"@site/docs/patterns/eksampamg.md",sourceDirName:"patterns",slug:"/patterns/eksampamg",permalink:"/observability-best-practices/ja/patterns/eksampamg",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/patterns/eksampamg.md",tags:[],version:"current",frontMatter:{},sidebar:"patterns",previous:{title:"Monitoring ECS Workloads",permalink:"/observability-best-practices/ja/patterns/ecsampamg"},next:{title:"Lambda Logging",permalink:"/observability-best-practices/ja/patterns/lambdalogging"}},l={},c=[];function d(e){const n={em:"em",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"eks-monitoring-with-aws-open-source-service",children:"EKS Monitoring with AWS Open source service"}),"\n",(0,i.jsx)(n.p,{children:"In the world of containerized applications and Kubernetes, monitoring and observability are crucial for ensuring the reliability, performance, and efficiency of your workloads. Amazon Elastic Kubernetes Service (EKS) provides a powerful and scalable platform for deploying and managing containerized applications, and when combined with tools like Node Exporter, Amazon Managed Prometheus, and Grafana, you can unlock a comprehensive monitoring solution for your EKS workloads."}),"\n",(0,i.jsx)(n.p,{children:"Node Exporter is a Prometheus exporter that exposes a wide range of hardware and kernel-related metrics from a host machine. By deploying Node Exporter as a DaemonSet in your EKS cluster, you can collect valuable metrics from each worker node, including CPU, memory, disk, and network usage, as well as various system-level metrics."}),"\n",(0,i.jsx)(n.p,{children:"Amazon Managed Prometheus is a fully-managed service provided by AWS that simplifies the deployment, management, and scaling of Prometheus monitoring infrastructure. By integrating Node Exporter with Amazon Managed Prometheus, you can collect and store node-level metrics in a highly available and scalable manner, without the overhead of managing and scaling Prometheus instances yourself."}),"\n",(0,i.jsx)(n.p,{children:"Grafana is a powerful open-source data visualization and monitoring tool that seamlessly integrates with Prometheus. By configuring Grafana to connect to your Amazon Managed Prometheus instance, you can create rich and customizable dashboards that provide real-time insights into the health and performance of your EKS workloads and underlying infrastructure."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"EKS AMP AMG",src:o(80707).A+"",width:"936",height:"758"}),"\n",(0,i.jsx)(n.em,{children:"Figure 1: EKS node metrics sent to AMP and visualize with AMG"})]}),"\n",(0,i.jsx)(n.p,{children:"Deploying this monitoring stack in your EKS cluster offers several benefits:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Comprehensive Visibility: By collecting metrics from Node Exporter and visualizing them in Grafana, you gain end-to-end visibility into your EKS workloads, from the application level down to the underlying infrastructure, enabling you to proactively identify and address issues."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Scalability and Reliability: Amazon Managed Prometheus and Grafana are designed to be highly scalable and reliable, ensuring that your monitoring solution can grow seamlessly as your EKS workloads scale, without compromising performance or availability."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Centralized Monitoring: With Amazon Managed Prometheus acting as a centralized monitoring platform, you can consolidate metrics from multiple EKS clusters, enabling you to monitor and compare workloads across different environments or regions."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Custom Dashboards and Alerts: Grafana's powerful dashboard and alerting capabilities allow you to create custom visualizations tailored to your specific monitoring needs, enabling you to surface relevant metrics and set up alerts for critical events or thresholds."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Integration with AWS Services: Amazon Managed Prometheus seamlessly integrates with other AWS services, such as Amazon CloudWatch and AWS X-Ray, enabling you to correlate and visualize metrics from various sources within a unified monitoring solution."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To implement this monitoring stack in your EKS cluster, you'll need to follow these general steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Deploy Node Exporter as a DaemonSet on your EKS worker nodes to collect node-level metrics."}),"\n",(0,i.jsx)(n.li,{children:"Set up an Amazon Managed Prometheus workspace and configure it to scrape metrics from Node Exporter."}),"\n",(0,i.jsx)(n.li,{children:"Install and configure Grafana, either within your EKS cluster or as a separate service, and connect it to your Amazon Managed Prometheus workspace."}),"\n",(0,i.jsx)(n.li,{children:"Create custom Grafana dashboards and configure alerts based on your monitoring requirements."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"While this monitoring solution provides powerful capabilities, it's important to consider the potential overhead and resource consumption introduced by Node Exporter, Prometheus, and Grafana. Careful planning and resource allocation are necessary to ensure that your monitoring components do not compete with your application workloads for resources."}),"\n",(0,i.jsx)(n.p,{children:"Additionally, you should ensure that your monitoring solution adheres to best practices for data security, access control, and retention policies. Implementing secure communication channels, authentication mechanisms, and data encryption is crucial to maintain the confidentiality and integrity of your monitoring data."}),"\n",(0,i.jsx)(n.p,{children:"In conclusion, deploying Node Exporter, Amazon Managed Prometheus, and Grafana in your EKS cluster provides a comprehensive monitoring solution for your containerized workloads. By leveraging these tools, you can gain deep insights into the performance and health of your applications, enabling proactive issue detection, efficient resource utilization, and informed decision-making. However, it's essential to carefully plan and implement this monitoring stack, considering resource consumption, security, and compliance requirements to ensure an effective and robust monitoring solution for your EKS workloads."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},80707:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/eksnodeexporterampamg-4279ba8fb1df6b04b01d3b9fcd4f2a6f.png"},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>s});var i=o(96540);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);