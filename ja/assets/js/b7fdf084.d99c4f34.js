"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[1314],{51482:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var s=n(74848),t=n(28453);const o={},r="Amazon Managed Service for Prometheus \u3068\u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u4f7f\u7528\u3057\u305f Amazon EC2 \u306e\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0",c={id:"recipes/recipes/as-ec2-using-amp-and-alertmanager",title:"Amazon Managed Service for Prometheus \u3068\u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u4f7f\u7528\u3057\u305f Amazon EC2 \u306e\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0",description:"\u304a\u5ba2\u69d8\u306f\u3001\u65e2\u5b58\u306e Prometheus \u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u30af\u30e9\u30a6\u30c9\u306b\u79fb\u884c\u3057\u3001\u30af\u30e9\u30a6\u30c9\u304c\u63d0\u4f9b\u3059\u308b\u3059\u3079\u3066\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002AWS \u306b\u306f Amazon EC2 Auto Scaling \u306e\u3088\u3046\u306a\u30b5\u30fc\u30d3\u30b9\u304c\u3042\u308a\u3001\u3053\u308c\u306b\u3088\u308a CPU \u3084\u30e1\u30e2\u30ea\u5229\u7528\u7387\u306a\u3069\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u306b\u57fa\u3065\u3044\u3066 Amazon Elastic Compute Cloud (Amazon EC2) \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30b9\u30b1\u30fc\u30eb\u30a2\u30a6\u30c8\u3067\u304d\u307e\u3059\u3002Prometheus \u30e1\u30c8\u30ea\u30af\u30b9\u3092\u4f7f\u7528\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30b9\u30bf\u30c3\u30af\u3092\u7f6e\u304d\u63db\u3048\u308b\u5fc5\u8981\u306a\u304f\u3001EC2 Auto Scaling \u3068\u7c21\u5358\u306b\u7d71\u5408\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u6295\u7a3f\u3067\u306f\u3001Amazon Managed Service for Prometheus \u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc \u3068\u9023\u643a\u3059\u308b\u3088\u3046\u306b Amazon EC2 Auto Scaling \u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306b\u3088\u308a\u3001Prometheus \u30d9\u30fc\u30b9\u306e\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u30af\u30e9\u30a6\u30c9\u306b\u79fb\u884c\u3057\u306a\u304c\u3089\u3001\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u306a\u3069\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/recipes/recipes/as-ec2-using-amp-and-alertmanager.md",sourceDirName:"recipes/recipes",slug:"/recipes/recipes/as-ec2-using-amp-and-alertmanager",permalink:"/observability-best-practices/ja/recipes/recipes/as-ec2-using-amp-and-alertmanager",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/recipes/as-ec2-using-amp-and-alertmanager.md",tags:[],version:"current",frontMatter:{}},i={},m=[{value:"\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u6982\u8981",id:"\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u6982\u8981",level:2},{value:"\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u30c6\u30b9\u30c8",id:"\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u30c6\u30b9\u30c8",level:2},{value:"\u30b3\u30b9\u30c8",id:"\u30b3\u30b9\u30c8",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"amazon-managed-service-for-prometheus-\u3068\u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u4f7f\u7528\u3057\u305f-amazon-ec2-\u306e\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0",children:"Amazon Managed Service for Prometheus \u3068\u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u4f7f\u7528\u3057\u305f Amazon EC2 \u306e\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0"}),"\n",(0,s.jsxs)(a.p,{children:["\u304a\u5ba2\u69d8\u306f\u3001\u65e2\u5b58\u306e Prometheus \u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u30af\u30e9\u30a6\u30c9\u306b\u79fb\u884c\u3057\u3001\u30af\u30e9\u30a6\u30c9\u304c\u63d0\u4f9b\u3059\u308b\u3059\u3079\u3066\u306e\u6a5f\u80fd\u3092\u5229\u7528\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002AWS \u306b\u306f Amazon ",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/ec2/autoscaling/",children:"EC2 Auto Scaling"})," \u306e\u3088\u3046\u306a\u30b5\u30fc\u30d3\u30b9\u304c\u3042\u308a\u3001\u3053\u308c\u306b\u3088\u308a CPU \u3084\u30e1\u30e2\u30ea\u5229\u7528\u7387\u306a\u3069\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u306b\u57fa\u3065\u3044\u3066 ",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/pm/ec2/",children:"Amazon Elastic Compute Cloud (Amazon EC2)"})," \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u30b9\u30b1\u30fc\u30eb\u30a2\u30a6\u30c8\u3067\u304d\u307e\u3059\u3002Prometheus \u30e1\u30c8\u30ea\u30af\u30b9\u3092\u4f7f\u7528\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30b9\u30bf\u30c3\u30af\u3092\u7f6e\u304d\u63db\u3048\u308b\u5fc5\u8981\u306a\u304f\u3001EC2 Auto Scaling \u3068\u7c21\u5358\u306b\u7d71\u5408\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u6295\u7a3f\u3067\u306f\u3001",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/prometheus/",children:"Amazon Managed Service for Prometheus \u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"})," \u3068\u9023\u643a\u3059\u308b\u3088\u3046\u306b Amazon EC2 Auto Scaling \u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306b\u3088\u308a\u3001Prometheus \u30d9\u30fc\u30b9\u306e\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u30af\u30e9\u30a6\u30c9\u306b\u79fb\u884c\u3057\u306a\u304c\u3089\u3001\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u306a\u3069\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["Amazon Managed Service for Prometheus \u306f\u3001",(0,s.jsx)(a.a,{href:"https://prometheus.io/docs/prometheus/latest/querying/basics/",children:"PromQL"})," \u3092\u4f7f\u7528\u3059\u308b",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-Ruler.html",children:"\u30a2\u30e9\u30fc\u30c8\u30eb\u30fc\u30eb"}),"\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002",(0,s.jsx)(a.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/",children:"Prometheus \u30a2\u30e9\u30fc\u30c8\u30eb\u30fc\u30eb\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})," \u306b\u306f\u3001\u6709\u52b9\u306a\u30a2\u30e9\u30fc\u30c8\u30eb\u30fc\u30eb\u306e\u69cb\u6587\u3068\u4f8b\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u540c\u69d8\u306b\u3001Prometheus \u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u306f\u3001\u6709\u52b9\u306a\u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u69cb\u6210\u306e ",(0,s.jsx)(a.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/template_reference/",children:"\u69cb\u6587"})," \u3068 ",(0,s.jsx)(a.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/template_examples/",children:"\u4f8b"})," \u304c\u53c2\u7167\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(a.h2,{id:"\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u6982\u8981",children:"\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u6982\u8981"}),"\n",(0,s.jsxs)(a.p,{children:["\u307e\u305a\u3001Amazon EC2 Auto Scaling \u306e ",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/ja_jp/autoscaling/ec2/userguide/auto-scaling-groups.html",children:"Auto Scaling \u30b0\u30eb\u30fc\u30d7"})," \u3068\u3044\u3046\u6982\u5ff5\u3092\u7c21\u5358\u306b\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002\u3053\u308c\u306f Amazon EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u8ad6\u7406\u7684\u306a\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3067\u3059\u3002Auto Scaling \u30b0\u30eb\u30fc\u30d7\u306f\u3001\u4e8b\u524d\u5b9a\u7fa9\u3055\u308c\u305f\u8d77\u52d5\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u57fa\u3065\u3044\u3066 EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8d77\u52d5\u3067\u304d\u307e\u3059\u3002",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/ec2-launch-templates.html",children:"\u8d77\u52d5\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"})," \u306b\u306f\u3001AMI ID\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30bf\u30a4\u30d7\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8a2d\u5b9a\u3001",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/jp/iam/",children:"AWS Identity and Access Management (IAM)"})," \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306a\u3069\u3001Amazon EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u8d77\u52d5\u306b\u4f7f\u7528\u3055\u308c\u308b\u60c5\u5831\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["Amazon EC2 Auto Scaling \u30b0\u30eb\u30fc\u30d7\u306b\u306f\u3001",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/ja_jp/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",children:"\u6700\u5c0f\u30b5\u30a4\u30ba\u3001\u6700\u5927\u30b5\u30a4\u30ba\u3001\u304a\u3088\u3073\u5e0c\u671b\u5bb9\u91cf"})," \u306e\u6982\u5ff5\u304c\u3042\u308a\u307e\u3059\u3002 Amazon EC2 Auto Scaling \u304c Auto Scaling \u30b0\u30eb\u30fc\u30d7\u306e\u73fe\u5728\u306e\u5b9f\u884c\u5bb9\u91cf\u304c\u5e0c\u671b\u5bb9\u91cf\u3088\u308a\u3082\u4e0a\u307e\u305f\u306f\u4e0b\u56de\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u691c\u51fa\u3059\u308b\u3068\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u81ea\u52d5\u7684\u306b\u30b9\u30b1\u30fc\u30eb\u30a2\u30a6\u30c8\u307e\u305f\u306f\u30b9\u30b1\u30fc\u30eb\u30a4\u30f3\u3057\u307e\u3059\u3002 \u3053\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30a2\u30d7\u30ed\u30fc\u30c1\u306b\u3088\u308a\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u5185\u3067\u306e\u30a8\u30e9\u30b9\u30c6\u30a3\u30b7\u30c6\u30a3\u3092\u5229\u7528\u3057\u306a\u304c\u3089\u3001\u5bb9\u91cf\u3068\u30b3\u30b9\u30c8\u306e\u4e21\u65b9\u3092\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["\u3053\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30e2\u30f3\u30b9\u30c8\u30ec\u30fc\u30b7\u30e7\u30f3\u3059\u308b\u305f\u3081\u306b\u30012\u3064\u306eAmazon EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u542b\u3080Amazon EC2 Auto Scaling\u30b0\u30eb\u30fc\u30d7\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002 \u3053\u308c\u3089\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/ja_jp/prometheus/latest/userguide/AMP-onboard-ingest-metrics-remote-write-EC2.html",children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30e1\u30c8\u30ea\u30af\u30b9\u3092Amazon Managed Service for Prometheus\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u30ea\u30e2\u30fc\u30c8\u30e9\u30a4\u30c8"}),"\u3057\u307e\u3059\u3002 Auto Scaling\u30b0\u30eb\u30fc\u30d7\u306e\u6700\u5c0f\u30b5\u30a4\u30ba\u30922\u306b\u8a2d\u5b9a\u3057\u3066\u9ad8\u53ef\u7528\u6027\u3092\u7dad\u6301\u3057\u3001\u30b0\u30eb\u30fc\u30d7\u306e\u6700\u5927\u30b5\u30a4\u30ba\u309210\u306b\u8a2d\u5b9a\u3057\u3066\u30b3\u30b9\u30c8\u3092\u6291\u3048\u3066\u3044\u307e\u3059\u3002 \u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u304c\u3053\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306b\u591a\u304f\u30d2\u30c3\u30c8\u3059\u308b\u306b\u3064\u308c\u3066\u3001\u8ca0\u8377\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u306b\u81ea\u52d5\u7684\u306b\u8ffd\u52a0\u306eAmazon EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001Amazon EC2 Auto Scaling\u30b0\u30eb\u30fc\u30d7\u306e\u6700\u5927\u30b5\u30a4\u30ba\u307e\u3067\u3067\u3059\u3002 \u8ca0\u8377\u304c\u6e1b\u5c11\u3059\u308b\u3068\u3001Amazon EC2 Auto Scaling\u30b0\u30eb\u30fc\u30d7\u304c\u30b0\u30eb\u30fc\u30d7\u306e\u6700\u5c0f\u30b5\u30a4\u30ba\u306b\u9054\u3059\u308b\u307e\u3067\u3001\u305d\u308c\u3089\u306eAmazon EC2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u7d42\u4e86\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306b\u3088\u308a\u3001\u30af\u30e9\u30a6\u30c9\u306e\u30a8\u30e9\u30b9\u30c6\u30a3\u30b7\u30c6\u30a3\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3067\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u9ad8\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(a.p,{children:"\u3088\u308a\u591a\u304f\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0\u3059\u308b\u306b\u3064\u308c\u3066\u3001\u5358\u4e00\u306ePrometheus\u30b5\u30fc\u30d0\u30fc\u306e\u6a5f\u80fd\u3092\u3059\u3050\u306b\u5727\u5012\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3068\u7dda\u5f62\u306bPrometheus\u30b5\u30fc\u30d0\u30fc\u3092\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u3067\u3001\u3053\u306e\u72b6\u6cc1\u3092\u56de\u907f\u3067\u304d\u307e\u3059\u3002 \u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306b\u3088\u308a\u3001\u5fc5\u8981\u306a\u7c92\u5ea6\u3067\u30e1\u30c8\u30ea\u30af\u30b9\u30c7\u30fc\u30bf\u3092\u53ce\u96c6\u3067\u304d\u308b\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.p,{children:"Prometheus\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306eAuto Scaling\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u3001\u6b21\u306e\u30eb\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066Amazon Managed Service for Prometheus\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.code,{children:"YAML"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:'groups:\n- name: example\n  rules:\n  - alert: HostHighCpuLoad\n    expr: 100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[2m])) * 100) > 60\n    for: 5m\n    labels:\n      severity: warning\n      event_type: scale_up\n    annotations:\n      summary: Host high CPU load (instance {{ $labels.instance }})\n      description: "CPU load is > 60%\\n  VALUE = {{ $value }}\\n  LABELS = {{ $labels }}"\n  - alert: HostLowCpuLoad\n    expr: 100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[2m])) * 100) < 30\n    for: 5m\n    labels:\n      severity: warning\n      event_type: scale_down\n    annotations:\n      summary: Host low CPU load (instance {{ $labels.instance }})\n      description: "CPU load is < 30%\\n  VALUE = {{ $value }}\\n  LABELS = {{ $labels }}"\n\n'})}),"\n",(0,s.jsxs)(a.p,{children:["\u3053\u306e\u30eb\u30fc\u30eb\u30bb\u30c3\u30c8\u306f\u3001",(0,s.jsx)(a.code,{children:"HostHighCpuLoad"})," \u3068 ",(0,s.jsx)(a.code,{children:"HostLowCpuLoad"})," \u30eb\u30fc\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306e\u30a2\u30e9\u30fc\u30c8\u306f\u30015\u5206\u9593\u306eCPU\u4f7f\u7528\u7387\u304c60%\u3092\u8d85\u3048\u308b\u304b30%\u672a\u6e80\u306e\u5834\u5408\u306b\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["\u30a2\u30e9\u30fc\u30c8\u304c\u767a\u751f\u3057\u305f\u5f8c\u3001\u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092Amazon SNS\u30c8\u30d4\u30c3\u30af\u306b\u8ee2\u9001\u3057\u3001",(0,s.jsx)(a.code,{children:"alert_type"})," (\u30a2\u30e9\u30fc\u30c8\u540d) \u3068 ",(0,s.jsx)(a.code,{children:"event_type"})," (scale_down\u307e\u305f\u306fscale_up) \u3092\u6e21\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.code,{children:"YAML"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"alertmanager_config: |\n  route: \n    receiver: default_receiver\n    repeat_interval: 5m\n        \n  receivers:\n    - name: default_receiver\n      sns_configs:\n        - topic_arn: <ARN OF SNS TOPIC GOES HERE>\n          send_resolved: false\n          sigv4:\n            region: us-east-1\n          message: |\n            alert_type: {{ .CommonLabels.alertname }}\n            event_type: {{ .CommonLabels.event_type }}\n\n"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://aws.amazon.com/jp/lambda/",children:"Lambda"})," \u95a2\u6570\u304c Amazon SNS \u30c8\u30d4\u30c3\u30af\u306b\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3055\u308c\u3066\u3044\u307e\u3059\u3002 Lambda \u95a2\u6570\u306b\u306f\u3001Amazon SNS \u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u691c\u67fb\u3057\u3066 ",(0,s.jsx)(a.code,{children:"scale_up"})," \u307e\u305f\u306f ",(0,s.jsx)(a.code,{children:"scale_down"})," \u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u304b\u3069\u3046\u304b\u3092\u5224\u65ad\u3059\u308b\u30ed\u30b8\u30c3\u30af\u3092\u8a18\u8ff0\u3057\u307e\u3057\u305f\u3002 \u6b21\u306b\u3001Lambda \u95a2\u6570\u306f Amazon EC2 Auto Scaling \u30b0\u30eb\u30fc\u30d7\u306e\u5e0c\u671b\u5bb9\u91cf\u3092\u5897\u6e1b\u3057\u307e\u3059\u3002 Amazon EC2 Auto Scaling \u30b0\u30eb\u30fc\u30d7\u306f\u5bb9\u91cf\u306e\u5909\u66f4\u8981\u6c42\u3092\u691c\u51fa\u3057\u3001Amazon EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u547c\u3073\u51fa\u3059\u304b\u89e3\u653e\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(a.p,{children:"Auto Scaling \u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306e Lambda \u30b3\u30fc\u30c9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.code,{children:"Python"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"import json\nimport boto3\nimport os\n\ndef lambda_handler(event, context):\n    print(event)\n    msg = event['Records'][0]['Sns']['Message']\n    \n    scale_type = ''\n    if msg.find('scale_up') > -1:\n        scale_type = 'scale_up'\n    else:\n        scale_type = 'scale_down'\n    \n    get_desired_instance_count(scale_type)\n    \ndef get_desired_instance_count(scale_type):\n    \n    client = boto3.client('autoscaling')\n    asg_name = os.environ['ASG_NAME']\n    response = client.describe_auto_scaling_groups(AutoScalingGroupNames=[ asg_name])\n\n    minSize = response['AutoScalingGroups'][0]['MinSize']\n    maxSize = response['AutoScalingGroups'][0]['MaxSize']\n    desiredCapacity = response['AutoScalingGroups'][0]['DesiredCapacity']\n    \n    if scale_type == \"scale_up\":\n        desiredCapacity = min(desiredCapacity+1, maxSize)\n    if scale_type == \"scale_down\":\n        desiredCapacity = max(desiredCapacity - 1, minSize)\n    \n    print('Scale type: {}; new capacity: {}'.format(scale_type, desiredCapacity))\n    response = client.set_desired_capacity(AutoScalingGroupName=asg_name, DesiredCapacity=desiredCapacity, HonorCooldown=False)\n\n"})}),"\n",(0,s.jsx)(a.p,{children:"\u5b8c\u5168\u306a\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306f\u3001\u6b21\u306e\u56f3\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Architecture",src:n(28587).A+"",width:"1411",height:"1081"})}),"\n",(0,s.jsx)(a.h2,{id:"\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u30c6\u30b9\u30c8",children:"\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u30c6\u30b9\u30c8"}),"\n",(0,s.jsx)(a.p,{children:"\u3053\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u81ea\u52d5\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e AWS CloudFormation \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8d77\u52d5\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.p,{children:"\u30b9\u30bf\u30c3\u30af\u306e\u524d\u63d0\u6761\u4ef6:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://aws.amazon.com/vpc/",children:"Amazon Virtual Private Cloud (Amazon VPC)"})}),"\n",(0,s.jsx)(a.li,{children:"\u30a2\u30a6\u30c8\u30d0\u30a6\u30f3\u30c9\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u8a31\u53ef\u3059\u308b AWS \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30b0\u30eb\u30fc\u30d7"}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001\u300cDownload Launch Stack Template\u300d\u30ea\u30f3\u30af\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u8a2d\u5b9a\u30d7\u30ed\u30bb\u30b9\u306e\u4e00\u74b0\u3068\u3057\u3066\u3001Amazon EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u95a2\u9023\u4ed8\u3051\u308b\u30b5\u30d6\u30cd\u30c3\u30c8\u3068\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30b0\u30eb\u30fc\u30d7\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u6b21\u306e\u56f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://prometheus-autoscale.s3.amazonaws.com/prometheus-autoscale.template",children:"## \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3068\u30b9\u30bf\u30c3\u30af\u306e\u8d77\u52d5"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"\u30b9\u30bf\u30c3\u30af\u306e\u8d77\u52d5",src:n(36596).A+"",width:"1415",height:"1315"})}),"\n",(0,s.jsx)(a.p,{children:"\u3053\u308c\u306f CloudFormation \u30b9\u30bf\u30c3\u30af\u306e\u8a73\u7d30\u753b\u9762\u3067\u3001\u30b9\u30bf\u30c3\u30af\u540d\u304c prometheus-autoscale \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30b9\u30bf\u30c3\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u306f\u3001Prometheus \u306e Linux \u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u30fc\u306e URL\u3001Prometheus \u7528 Linux Node Exporter \u306e URL\u3001\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u7528\u3055\u308c\u308b\u30b5\u30d6\u30cd\u30c3\u30c8\u3068\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30b0\u30eb\u30fc\u30d7\u3001\u4f7f\u7528\u3059\u308b AMI \u3068\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30bf\u30a4\u30d7\u3001Amazon EC2 \u30aa\u30fc\u30c8\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7\u306e\u6700\u5927\u5bb9\u91cf\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(a.p,{children:["\u30b9\u30bf\u30c3\u30af\u306e\u30c7\u30d7\u30ed\u30a4\u306b\u306f\u7d04 8 \u5206\u304b\u304b\u308a\u307e\u3059\u3002\u5b8c\u4e86\u3059\u308b\u3068\u3001\u4f5c\u6210\u3055\u308c\u305f Amazon EC2 \u30aa\u30fc\u30c8\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b 2 \u3064\u306e Amazon EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002\u3053\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u304c Amazon Managed Service for Prometheus \u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306b\u3088\u3063\u3066\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u3092\u691c\u8a3c\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/execute-remote-commands.html",children:"AWS Systems Manager Run Command"})," \u3068 ",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/ja_jp/fis/latest/userguide/actions-ssm-agent.html#awsfis-run-cpu-stress",children:"AWSFIS-Run-CPU-Stress automation document"})," \u3092\u4f7f\u7528\u3057\u3066 Amazon EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u8ca0\u8377\u3092\u304b\u3051\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(a.p,{children:"Amazon EC2 \u30aa\u30fc\u30c8\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7\u306e CPU \u306b\u30b9\u30c8\u30ec\u30b9\u304c\u304b\u304b\u308b\u3068\u3001\u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u304c\u3053\u308c\u3089\u306e\u30a2\u30e9\u30fc\u30c8\u3092\u767a\u884c\u3057\u3001Lambda \u95a2\u6570\u304c\u30aa\u30fc\u30c8\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7\u3092\u30b9\u30b1\u30fc\u30eb\u30a2\u30c3\u30d7\u3059\u308b\u3088\u3046\u5fdc\u7b54\u3057\u307e\u3059\u3002 CPU \u6d88\u8cbb\u304c\u6e1b\u5c11\u3059\u308b\u3068\u3001Amazon Managed Service for Prometheus \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u4f4e CPU \u30a2\u30e9\u30fc\u30c8\u304c\u767a\u751f\u3057\u3001\u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u304c\u30a2\u30e9\u30fc\u30c8\u3092 Amazon SNS \u30c8\u30d4\u30c3\u30af\u306b\u767a\u884c\u3057\u3001Lambda \u95a2\u6570\u304c\u30aa\u30fc\u30c8\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7\u3092\u30b9\u30b1\u30fc\u30eb\u30c0\u30a6\u30f3\u3059\u308b\u3088\u3046\u5fdc\u7b54\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u6b21\u306e\u56f3\u306e\u3088\u3046\u306b\u30c7\u30e2\u30f3\u30b9\u30c8\u30ec\u30fc\u30b7\u30e7\u30f3\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",src:n(57725).A+"",width:"1405",height:"702"})}),"\n",(0,s.jsx)(a.p,{children:"Grafana \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306b\u306f\u3001CPU \u304c 100% \u306b\u30b9\u30d1\u30a4\u30af\u3057\u305f\u3053\u3068\u3092\u793a\u3059\u30e9\u30a4\u30f3\u304c\u3042\u308a\u307e\u3059\u3002 CPU \u306f\u9ad8\u3044\u3067\u3059\u304c\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u6570\u304c 2 \u304b\u3089 10 \u306b\u30b9\u30c6\u30c3\u30d7\u30a2\u30c3\u30d7\u3057\u305f\u3053\u3068\u3092\u793a\u3059\u3082\u3046 1 \u3064\u306e\u30e9\u30a4\u30f3\u304c\u3042\u308a\u307e\u3059\u3002 CPU \u304c\u6e1b\u5c11\u3059\u308b\u3068\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u6570\u306f\u3086\u3063\u304f\u308a\u3068 2 \u306b\u623b\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.h2,{id:"\u30b3\u30b9\u30c8",children:"\u30b3\u30b9\u30c8"}),"\n",(0,s.jsxs)(a.p,{children:["Amazon Managed Service for Prometheus \u306f\u3001\u53d6\u308a\u8fbc\u307e\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u3001\u4fdd\u5b58\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u3001\u30af\u30a8\u30ea\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u306b\u57fa\u3065\u3044\u3066\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002 \u6700\u65b0\u306e\u4fa1\u683c\u3068\u4fa1\u683c\u306e\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/prometheus/pricing/",children:"Amazon Managed Service for Prometheus \u306e\u4fa1\u683c\u30da\u30fc\u30b8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["Amazon SNS \u306f\u3001\u6708\u9593\u306e API \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6570\u306b\u57fa\u3065\u3044\u3066\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002 Amazon SNS \u3068 Lambda \u9593\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u914d\u4fe1\u306f\u7121\u6599\u3067\u3059\u304c\u3001Amazon SNS \u3068 Lambda \u9593\u3067\u8ee2\u9001\u3055\u308c\u305f\u30c7\u30fc\u30bf\u91cf\u306b\u3064\u3044\u3066\u306f\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002 \u6700\u65b0\u306e Amazon SNS \u306e\u4fa1\u683c\u306e\u8a73\u7d30\u306f\u3001",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/sns/pricing/",children:"\u3053\u3061\u3089"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["Lambda \u306f\u3001\u95a2\u6570\u306e\u5b9f\u884c\u6642\u9593\u3068\u95a2\u6570\u3078\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u6570\u306b\u57fa\u3065\u3044\u3066\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002 \u6700\u65b0\u306e AWS Lambda \u306e\u4fa1\u683c\u306e\u8a73\u7d30\u306f\u3001",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/lambda/pricing/",children:"\u3053\u3061\u3089"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["Amazon EC2 Auto Scaling \u306e\u4f7f\u7528\u306b\u306f\u3001",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/ec2/autoscaling/pricing/",children:"\u8ffd\u52a0\u6599\u91d1\u306f\u3042\u308a\u307e\u305b\u3093"}),"\u3002"]}),"\n",(0,s.jsx)(a.h2,{id:"\u307e\u3068\u3081",children:"\u307e\u3068\u3081"}),"\n",(0,s.jsx)(a.p,{children:"Amazon Managed Service for Prometheus\u3001\u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3001Amazon SNS\u3001Lambda \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001Amazon EC2 Auto Scaling \u30b0\u30eb\u30fc\u30d7\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3092\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u6295\u7a3f\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306f\u3001Amazon EC2 Auto Scaling \u3092\u5229\u7528\u3057\u306a\u304c\u3089\u3001\u65e2\u5b58\u306e Prometheus \u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092 AWS \u306b\u79fb\u884c\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3078\u306e\u8ca0\u8377\u304c\u5897\u52a0\u3059\u308b\u3068\u3001\u30c7\u30de\u30f3\u30c9\u306b\u5408\u308f\u305b\u3066\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u30b9\u30b1\u30fc\u30eb\u30a2\u30a6\u30c8\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.p,{children:"\u3053\u306e\u4f8b\u3067\u306f\u3001Amazon EC2 Auto Scaling \u30b0\u30eb\u30fc\u30d7\u306f CPU \u306b\u57fa\u3065\u3044\u3066\u30b9\u30b1\u30fc\u30eb\u3057\u307e\u3057\u305f\u304c\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304b\u3089\u306e Prometheus \u30e1\u30c8\u30ea\u30af\u30b9\u306b\u3064\u3044\u3066\u540c\u69d8\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u306b\u3088\u308a\u3001\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u7d30\u304b\u304f\u5236\u5fa1\u3067\u304d\u308b\u305f\u3081\u3001\u6700\u3082\u30d3\u30b8\u30cd\u30b9\u4fa1\u5024\u306e\u9ad8\u3044\u30e1\u30c8\u30ea\u30af\u30b9\u3067\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u30b9\u30b1\u30fc\u30eb\u3067\u304d\u308b\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(a.p,{children:["\u904e\u53bb\u306e\u30d6\u30ed\u30b0\u6295\u7a3f\u3067\u306f\u3001",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/using-amazon-managed-service-for-prometheus-alert-manager-to-receive-alerts-with-pagerduty/",children:"Amazon Managed Service for Prometheus \u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3092\u4f7f\u7528\u3057\u3066 PagerDuty \u3067\u30a2\u30e9\u30fc\u30c8\u3092\u53d7\u4fe1\u3059\u308b\u65b9\u6cd5"}),"\u3084\u3001",(0,s.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/how-to-integrate-amazon-managed-service-for-prometheus-with-slack/",children:"Amazon Managed Service for Prometheus \u3092 Slack \u3068\u7d71\u5408\u3059\u308b\u65b9\u6cd5"}),"\u3082\u793a\u3057\u307e\u3057\u305f\u3002\u3053\u308c\u3089\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u306e\u30a2\u30e9\u30fc\u30c8\u3092\u6700\u3082\u6709\u7528\u306a\u65b9\u6cd5\u3067\u53d7\u4fe1\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u3068\u3057\u3066\u3001Amazon Managed Service for Prometheus \u306e",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-rules-upload.html",children:"\u72ec\u81ea\u306e\u30eb\u30fc\u30eb\u69cb\u6210\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210\u65b9\u6cd5"}),"\u3084\u3001",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alertmanager-receiver.html",children:"\u30a2\u30e9\u30fc\u30c8\u30ec\u30b7\u30fc\u30d0\u30fc\u306e\u8a2d\u5b9a\u65b9\u6cd5"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u307e\u305f\u3001\u30a2\u30e9\u30fc\u30c8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u5185\u3067\u4f7f\u7528\u3067\u304d\u308b\u30a2\u30e9\u30fc\u30c8\u30eb\u30fc\u30eb\u306e\u826f\u3044\u4f8b\u3068\u3057\u3066\u3001",(0,s.jsx)(a.a,{href:"https://awesome-prometheus-alerts.grep.to/alertmanager",children:"Awesome Prometheus alerts"})," \u3092\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function d(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28587:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/as-ec2-amp-alertmanager3-a7f7c99c80d1b4696adcea6abcaaf46e.png"},36596:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/as-ec2-amp-alertmanager4-63dab0d7230022913dfb7193f39cce88.png"},57725:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/as-ec2-amp-alertmanager5-844cc9ab4fa8958fb3db3b86b52d8df5.png"},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>c});var s=n(96540);const t={},o=s.createContext(t);function r(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);