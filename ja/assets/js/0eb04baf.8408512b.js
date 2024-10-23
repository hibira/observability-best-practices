"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[2115],{302:(t,e,c)=>{c.r(e),c.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=c(74848),n=c(28453);const i={},o="CloudWatch \u306e\u30b3\u30b9\u30c8\u3092\u524a\u6e1b\u3059\u308b",a={id:"guides/cost/cost-visualization/reducing-cw-cost",title:"CloudWatch \u306e\u30b3\u30b9\u30c8\u3092\u524a\u6e1b\u3059\u308b",description:"GetMetricData",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/cost/cost-visualization/reducing-cw-cost.md",sourceDirName:"guides/cost/cost-visualization",slug:"/guides/cost/cost-visualization/reducing-cw-cost",permalink:"/observability-best-practices/ja/guides/cost/cost-visualization/reducing-cw-cost",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/guides/cost/cost-visualization/reducing-cw-cost.md",tags:[],version:"current",frontMatter:{}},r={},l=[{value:"GetMetricData",id:"getmetricdata",level:2},{value:"CloudWatch Logs",id:"cloudwatch-logs",level:2}];function d(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"cloudwatch-\u306e\u30b3\u30b9\u30c8\u3092\u524a\u6e1b\u3059\u308b",children:"CloudWatch \u306e\u30b3\u30b9\u30c8\u3092\u524a\u6e1b\u3059\u308b"}),"\n",(0,s.jsx)(e.h2,{id:"getmetricdata",children:"GetMetricData"}),"\n",(0,s.jsxs)(e.p,{children:["\u901a\u5e38\u3001",(0,s.jsx)(e.code,{children:"GetMetricData"})," \u306f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30c4\u30fc\u30eb\u3084\u30af\u30e9\u30a6\u30c9\u8ca1\u52d9\u30c4\u30fc\u30eb\u304c\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u5185\u3067 CloudWatch Metrics \u3092\u4f7f\u7528\u3059\u308b\u969b\u306e\u547c\u3073\u51fa\u3057\u306b\u3088\u3063\u3066\u767a\u751f\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30c4\u30fc\u30eb\u304c\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3046\u983b\u5ea6\u3092\u6e1b\u3089\u3059\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4f8b\u3048\u3070\u3001\u983b\u5ea6\u3092 1 \u5206\u304b\u3089 5 \u5206\u306b\u6e1b\u3089\u3059\u3068\u3001\u30b3\u30b9\u30c8\u304c 1/5 (20%) \u306b\u306a\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30c8\u30ec\u30f3\u30c9\u3092\u7279\u5b9a\u3059\u308b\u305f\u3081\u306b\u3001\u77ed\u671f\u9593\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30c4\u30fc\u30eb\u304b\u3089\u306e\u30c7\u30fc\u30bf\u53ce\u96c6\u3092\u30aa\u30d5\u306b\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"cloudwatch-logs",children:"CloudWatch Logs"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u3053\u306e",(0,s.jsx)(e.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/cloudwatch-logs-bill-increase/",children:"\u30ca\u30ec\u30c3\u30b8\u30bb\u30f3\u30bf\u30fc\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001\u4e3b\u8981\u306a\u8ca2\u732e\u8005\u3092\u898b\u3064\u3051\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u5fc5\u8981\u3067\u306a\u3044\u9650\u308a\u3001\u4e3b\u8981\u306a\u8ca2\u732e\u8005\u306e\u30ed\u30b0\u30ec\u30d9\u30eb\u3092\u4e0b\u3052\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"CloudWatch \u306b\u52a0\u3048\u3066\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30ed\u30b0\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u3059\u3079\u3066\u306e VPC \u3067 VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u3092\u6709\u52b9\u306b\u3057\u3001\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u304c\u591a\u3044\u5834\u5408\u3001\u30b3\u30b9\u30c8\u304c\u6025\u901f\u306b\u5897\u52a0\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u3067\u3082\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001Amazon S3 \u306b\u914d\u4fe1\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsxs)(e.li,{children:['\u3059\u3079\u3066\u306e AWS Lambda \u95a2\u6570\u3067\u30ed\u30b0\u304c\u5fc5\u8981\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u5fc5\u8981\u3067\u306a\u3044\u5834\u5408\u306f\u3001Lambda \u30ed\u30fc\u30eb\u3067 "logs',":PutLogEvents",'" \u6a29\u9650\u3092\u62d2\u5426\u3057\u307e\u3059\u3002']}),"\n",(0,s.jsx)(e.li,{children:"CloudTrail \u30ed\u30b0\u306f\u591a\u304f\u306e\u5834\u5408\u3001\u4e3b\u8981\u306a\u8ca2\u732e\u8005\u3067\u3059\u3002\u3053\u308c\u3089\u3092 Amazon S3 \u306b\u9001\u4fe1\u3057\u3001Amazon Athena \u3092\u4f7f\u7528\u3057\u3066\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3057\u3001Amazon EventBridge \u3092\u4f7f\u7528\u3057\u3066\u30a2\u30e9\u30fc\u30e0/\u901a\u77e5\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u304c\u5b89\u4fa1\u3067\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u3053\u306e",(0,s.jsx)(e.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/cloudwatch-understand-and-reduce-charges/",children:"\u30ca\u30ec\u30c3\u30b8\u30bb\u30f3\u30bf\u30fc\u306e\u8a18\u4e8b"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function u(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},28453:(t,e,c)=>{c.d(e,{R:()=>o,x:()=>a});var s=c(96540);const n={},i=s.createContext(n);function o(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:o(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);