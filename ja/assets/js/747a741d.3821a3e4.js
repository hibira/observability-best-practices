"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[6312],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var a=n(96540);const s={},o=a.createContext(s);function c(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(o.Provider,{value:t},e.children)}},56292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"tools/cloudwatch_agent","title":"CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8","description":"CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30c7\u30d7\u30ed\u30a4","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tools/cloudwatch_agent.md","sourceDirName":"tools","slug":"/tools/cloudwatch_agent","permalink":"/observability-best-practices/ja/tools/cloudwatch_agent","draft":false,"unlisted":false,"editUrl":"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/tools/cloudwatch_agent.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tools","previous":{"title":"AWS Observability Accelerator","permalink":"/observability-best-practices/ja/tools/observability_accelerator"},"next":{"title":"\u30a2\u30e9\u30fc\u30e0","permalink":"/observability-best-practices/ja/tools/alarms"}}');var s=n(74848),o=n(28453);const c={},r="CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",l={},i=[{value:"CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",id:"cloudwatch-\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",level:2},{value:"AWS \u5916\u3067\u306e\u30c7\u30d7\u30ed\u30a4",id:"aws-\u5916\u3067\u306e\u30c7\u30d7\u30ed\u30a4",level:2},{value:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u4f7f\u7528",id:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u4f7f\u7528",level:2},{value:"VPC \u304b\u3089",id:"vpc-\u304b\u3089",level:3},{value:"\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u307e\u305f\u306f\u4ed6\u306e\u30af\u30e9\u30a6\u30c9\u74b0\u5883\u304b\u3089",id:"\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u307e\u305f\u306f\u4ed6\u306e\u30af\u30e9\u30a6\u30c9\u74b0\u5883\u304b\u3089",level:3}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"cloudwatch-\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",children:"CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"})}),"\n",(0,s.jsx)(t.h2,{id:"cloudwatch-\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",children:"CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30c7\u30d7\u30ed\u30a4"}),"\n",(0,s.jsxs)(t.p,{children:["CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u3001\u5358\u4e00\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3001\u5206\u6563\u69cb\u6210\u30d5\u30a1\u30a4\u30eb\u306e\u4f7f\u7528\u3001\u8907\u6570\u306e\u69cb\u6210\u30d5\u30a1\u30a4\u30eb\u306e\u968e\u5c64\u5316\u3001\u305d\u3057\u3066\u5b8c\u5168\u306a\u81ea\u52d5\u5316\u3092\u901a\u3058\u3066\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u307e\u3059\u3002\u3069\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u304c\u9069\u5207\u304b\u306f\u3001\u3042\u306a\u305f\u306e\u30cb\u30fc\u30ba\u306b\u3088\u3063\u3066\u7570\u306a\u308a\u307e\u3059\u3002",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Windows \u3068 Linux \u30db\u30b9\u30c8\u3078\u306e\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u306f\u3001\u4e21\u65b9\u3068\u3082 ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance-fleet.html",children:"Systems Manager \u30d1\u30e9\u30e1\u30fc\u30bf\u30b9\u30c8\u30a2"})," \u306b\u69cb\u6210\u3092\u4fdd\u5b58\u304a\u3088\u3073\u53d6\u5f97\u3059\u308b\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u81ea\u52d5\u5316\u3055\u308c\u305f\u30e1\u30ab\u30cb\u30ba\u30e0\u3092\u901a\u3058\u3066 CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u69cb\u6210\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3053\u3068\u306f\u3001\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3067\u3059\u3002"]})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["\u3042\u308b\u3044\u306f\u3001CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u69cb\u6210\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u9078\u629e\u3057\u305f\u81ea\u52d5\u5316\u30c4\u30fc\u30eb\uff08",(0,s.jsx)(t.a,{href:"https://www.ansible.com",children:"Ansible"}),"\u3001",(0,s.jsx)(t.a,{href:"https://puppet.com",children:"Puppet"})," \u306a\u3069\uff09\u3092\u901a\u3058\u3066\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002Systems Manager \u30d1\u30e9\u30e1\u30fc\u30bf\u30b9\u30c8\u30a2\u306e\u4f7f\u7528\u306f\u5fc5\u9808\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u7ba1\u7406\u3092\u7c21\u7d20\u5316\u3057\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(t.h2,{id:"aws-\u5916\u3067\u306e\u30c7\u30d7\u30ed\u30a4",children:"AWS \u5916\u3067\u306e\u30c7\u30d7\u30ed\u30a4"}),"\n",(0,s.jsxs)(t.p,{children:["CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u4f7f\u7528\u306f AWS \u5185\u306b",(0,s.jsx)(t.em,{children:"\u9650\u5b9a\u3055\u308c\u305a"}),"\u3001\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u3084\u4ed6\u306e\u30af\u30e9\u30a6\u30c9\u74b0\u5883\u3067\u3082\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u305f\u3060\u3057\u3001AWS \u5916\u3067 CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e 2 \u3064\u306e\u8ffd\u52a0\u306e\u8003\u616e\u4e8b\u9805\u306b\u6ce8\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u5fc5\u8981\u306a API \u30b3\u30fc\u30eb\u3092\u884c\u3048\u308b\u3088\u3046\u306b IAM \u8a8d\u8a3c\u60c5\u5831",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3002EC2 \u3067\u3055\u3048\u3001CloudWatch API \u3078\u306e\u8a8d\u8a3c\u3055\u308c\u3066\u3044\u306a\u3044\u30a2\u30af\u30bb\u30b9\u306f\u3042\u308a\u307e\u305b\u3093",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),"\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u8981\u4ef6\u3092\u6e80\u305f\u3059\u30eb\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001CloudWatch\u3001CloudWatch Logs\u3001\u304a\u3088\u3073\u4ed6\u306e AWS \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})}),"\u3078\u306e\u63a5\u7d9a\u6027\u3092\u78ba\u4fdd\u3059\u308b\u3053\u3068\u3002\u3053\u308c\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u7d4c\u7531\u3001",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/jp/directconnect/",children:"AWS Direct Connect"})," \u306e\u4f7f\u7528\u3001\u307e\u305f\u306f ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/ja_jp/vpc/latest/privatelink/concepts.html",children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"}),"\uff08\u901a\u5e38 ",(0,s.jsx)(t.em,{children:"VPC \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"})," \u3068\u547c\u3070\u308c\u308b\uff09\u3092\u901a\u3058\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"\u304a\u5ba2\u69d8\u306e\u74b0\u5883\u3068 CloudWatch \u9593\u306e\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u306f\u3001\u30ac\u30d0\u30ca\u30f3\u30b9\u3068\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u8981\u4ef6\u306b\u5408\u81f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u4e00\u822c\u7684\u306b\u3001AWS \u5916\u306e\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u6700\u3082\u53b3\u3057\u304f\u898f\u5236\u3055\u308c\u305f\u696d\u754c\u306e\u304a\u5ba2\u69d8\u306e\u30cb\u30fc\u30ba\u3082\u6e80\u305f\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u5927\u591a\u6570\u306e\u304a\u5ba2\u69d8\u306b\u3068\u3063\u3066\u306f\u3001\u30d1\u30d6\u30ea\u30c3\u30af\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3067\u5341\u5206\u306a\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3067\u304d\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(t.h2,{id:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u4f7f\u7528",children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u4f7f\u7528"}),"\n",(0,s.jsxs)(t.p,{children:["\u30e1\u30c8\u30ea\u30af\u30b9\u3068\u30ed\u30b0\u3092\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u305f\u3081\u306b\u3001CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f ",(0,s.jsx)(t.em,{children:"CloudWatch"})," \u304a\u3088\u3073 ",(0,s.jsx)(t.em,{children:"CloudWatch Logs"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3078\u306e\u63a5\u7d9a\u6027\u3092\u6301\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u6240\u306b\u5fdc\u3058\u3066\u3001\u3053\u308c\u3092\u5b9f\u73fe\u3059\u308b\u306b\u306f\u3044\u304f\u3064\u304b\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"vpc-\u304b\u3089",children:"VPC \u304b\u3089"}),"\n",(0,s.jsxs)(t.p,{children:["a. ",(0,s.jsx)(t.em,{children:"VPC \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"})," (CloudWatch \u3068 CloudWatch Logs \u7528) \u3092\u4f7f\u7528\u3057\u3066\u3001VPC \u3068 CloudWatch \u306e\u9593\u306b\u5b8c\u5168\u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u3067\u5b89\u5168\u306a\u63a5\u7d9a\u3092\u78ba\u7acb\u3057\u3001EC2 \u4e0a\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u306f\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u304c\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u3092\u7d4c\u7531\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["b. \u3082\u3046 1 \u3064\u306e\u9078\u629e\u80a2\u306f\u3001\u30d1\u30d6\u30ea\u30c3\u30af\u306a ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/vpc-nat-gateway.html",children:"NAT \u30b2\u30fc\u30c8\u30a6\u30a7\u30a4"})," \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30b5\u30d6\u30cd\u30c3\u30c8\u304b\u3089\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u304c\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u304b\u3089\u4e88\u671f\u3057\u306a\u3044\u7740\u4fe1\u63a5\u7d9a\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"\u3053\u306e\u30a2\u30d7\u30ed\u30fc\u30c1\u3067\u306f\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306f\u8ad6\u7406\u7684\u306b\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u7d4c\u7531\u3067\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3055\u308c\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,s.jsxs)(t.p,{children:["c. \u65e2\u5b58\u306e TLS \u3084 ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/ja_jp/general/latest/gr/signature-version-4.html",children:"Sigv4"})," \u30e1\u30ab\u30cb\u30ba\u30e0\u4ee5\u4e0a\u306e\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u307e\u305f\u306f\u5b89\u5168\u306a\u63a5\u7d9a\u3092\u78ba\u7acb\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u5834\u5408\u3001\u6700\u3082\u7c21\u5358\u306a\u9078\u629e\u80a2\u306f ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/VPC_Internet_Gateway.html",children:"\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4"})," \u3092\u4f7f\u7528\u3057\u3066\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3078\u306e\u63a5\u7d9a\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u307e\u305f\u306f\u4ed6\u306e\u30af\u30e9\u30a6\u30c9\u74b0\u5883\u304b\u3089",children:"\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u307e\u305f\u306f\u4ed6\u306e\u30af\u30e9\u30a6\u30c9\u74b0\u5883\u304b\u3089"}),"\n",(0,s.jsxs)(t.p,{children:["a. AWS \u5916\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u7d4c\u7531\uff08\u72ec\u81ea\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8a2d\u5b9a\u3092\u4ecb\u3057\u3066\uff09\u307e\u305f\u306f Direct Connect ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/ja_jp/directconnect/latest/UserGuide/WorkingWithVirtualInterfaces.html",children:"\u30d1\u30d6\u30ea\u30c3\u30af VIF"})," \u3092\u901a\u3058\u3066 CloudWatch \u306e\u30d1\u30d6\u30ea\u30c3\u30af\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["b. \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u3092\u7d4c\u7531\u3055\u305b\u305f\u304f\u306a\u3044\u5834\u5408\u306f\u3001AWS PrivateLink \u3092\u5229\u7528\u3057\u305f ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/ja_jp/vpc/latest/userguide/vpce-interface.html",children:"VPC \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"})," \u3092\u6d3b\u7528\u3057\u3066\u3001Direct Connect \u30d7\u30e9\u30a4\u30d9\u30fc\u30c8 VIF \u307e\u305f\u306f VPN \u3092\u4f7f\u7528\u3057\u3066\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u307e\u3067\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u63a5\u7d9a\u3092\u62e1\u5f35\u3067\u304d\u307e\u3059\u3002\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306f\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u9732\u51fa\u3055\u308c\u306a\u3044\u305f\u3081\u3001\u8105\u5a01\u306e\u30d9\u30af\u30c8\u30eb\u3092\u6392\u9664\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(t.admonition,{type:"success",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/ja_jp/systems-manager/latest/userguide/ssm-agent.html",children:"AWS Systems Manager \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"})," \u304b\u3089\u53d6\u5f97\u3057\u305f\u8a8d\u8a3c\u60c5\u5831\u3092\u4f7f\u7528\u3057\u3066\u3001CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u4f7f\u7528\u3059\u308b ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/cloudwatch-on-premises-temp-credentials/",children:"\u4e00\u6642\u7684\u306a AWS \u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3"})," \u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"]})}),"\n","\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(t.p,{children:["CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u4f7f\u7528\u3068\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c0\u30f3\u30b9\u3092\u63d0\u4f9b\u3059\u308b\u30d6\u30ed\u30b0\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/blogs/opensource/getting-started-with-open-source-amazon-cloudwatch-agent/",children:"\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e Amazon CloudWatch \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u4f7f\u7528\u958b\u59cb"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002 ",(0,s.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-2",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-commandline-fleet.html#install-CloudWatch-Agent-iam_user-first",children:" \u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u304a\u3088\u3073\u4ed6\u306e\u30af\u30e9\u30a6\u30c9\u74b0\u5883\u3067\u5b9f\u884c\u3055\u308c\u308b\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u8a8d\u8a3c\u60c5\u5831\u8a2d\u5b9a\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c0\u30f3\u30b9 "})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-5",children:["\n",(0,s.jsxs)(t.p,{children:["\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306b\u95a2\u9023\u3059\u308b\u3059\u3079\u3066\u306e AWS API \u306e\u4f7f\u7528\u306f\u3001\u901a\u5e38 ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/ja_jp/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html",children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb"})," \u306b\u3088\u3063\u3066\u5b9f\u73fe\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001AWS \u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3068\u30b3\u30f3\u30c6\u30ca\u306b\u4e00\u6642\u7684\u306a\u30a2\u30af\u30bb\u30b9\u8a8d\u8a3c\u60c5\u5831\u3092\u4ed8\u4e0e\u3059\u308b\u30e1\u30ab\u30cb\u30ba\u30e0\u3067\u3059\u3002 ",(0,s.jsx)(t.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-3",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-commandline-fleet.html",children:" CloudWatch \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3078\u306e\u63a5\u7d9a\u6027\u3092\u78ba\u8a8d\u3059\u308b\u65b9\u6cd5 "})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);