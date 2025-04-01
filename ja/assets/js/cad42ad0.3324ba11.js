"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[8588],{7711:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/metrics-explorer-ec2-by-tag-name-dashboard-02984bd33726df1f5056f0ef073eb24f.png"},12849:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/metrics-explorer-ec2-by-tag-team-dashboard-843ffd42d66f355a477a94cc7b4f47c2.png"},13429:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"recipes/recipes/metrics-explorer-filter-by-tags","title":"\u30ea\u30bd\u30fc\u30b9\u30bf\u30b0\u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u96c6\u7d04\u30fb\u53ef\u8996\u5316\u3059\u308b\u305f\u3081\u306e Amazon CloudWatch Metrics explorer \u306e\u4f7f\u7528","description":"\u3053\u306e\u30ec\u30b7\u30d4\u3067\u306f\u3001Metrics explorer \u3092\u4f7f\u7528\u3057\u3066\u30ea\u30bd\u30fc\u30b9\u30bf\u30b0\u3068\u30ea\u30bd\u30fc\u30b9\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3088\u308b\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3001\u96c6\u7d04\u3001\u53ef\u8996\u5316\u306e\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059 - \u30bf\u30b0\u3068\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3088\u308b\u30ea\u30bd\u30fc\u30b9\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306b Metrics explorer \u3092\u4f7f\u7528\u3059\u308b\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/recipes/recipes/metrics-explorer-filter-by-tags.md","sourceDirName":"recipes/recipes","slug":"/recipes/recipes/metrics-explorer-filter-by-tags","permalink":"/observability-best-practices/ja/recipes/recipes/metrics-explorer-filter-by-tags","draft":false,"unlisted":false,"editUrl":"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/recipes/metrics-explorer-filter-by-tags.md","tags":[],"version":"current","frontMatter":{}}');var n=s(74848),t=s(28453);const c={},l="\u30ea\u30bd\u30fc\u30b9\u30bf\u30b0\u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u96c6\u7d04\u30fb\u53ef\u8996\u5316\u3059\u308b\u305f\u3081\u306e Amazon CloudWatch Metrics explorer \u306e\u4f7f\u7528",a={},d=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u30bf\u30b0\u30d9\u30fc\u30b9\u306e\u30af\u30a8\u30ea\u3068\u53ef\u8996\u5316\u3092\u4f7f\u7528\u3057\u305f Metrics Explorer",id:"\u30bf\u30b0\u30d9\u30fc\u30b9\u306e\u30af\u30a8\u30ea\u3068\u53ef\u8996\u5316\u3092\u4f7f\u7528\u3057\u305f-metrics-explorer",level:2},{value:"\u52d5\u7684\u306a\u53ef\u8996\u5316",id:"\u52d5\u7684\u306a\u53ef\u8996\u5316",level:2},{value:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",id:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",level:2}];function o(e){const r={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"\u30ea\u30bd\u30fc\u30b9\u30bf\u30b0\u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u96c6\u7d04\u53ef\u8996\u5316\u3059\u308b\u305f\u3081\u306e-amazon-cloudwatch-metrics-explorer-\u306e\u4f7f\u7528",children:"\u30ea\u30bd\u30fc\u30b9\u30bf\u30b0\u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u96c6\u7d04\u30fb\u53ef\u8996\u5316\u3059\u308b\u305f\u3081\u306e Amazon CloudWatch Metrics explorer \u306e\u4f7f\u7528"})}),"\n",(0,n.jsxs)(r.p,{children:["\u3053\u306e\u30ec\u30b7\u30d4\u3067\u306f\u3001Metrics explorer \u3092\u4f7f\u7528\u3057\u3066\u30ea\u30bd\u30fc\u30b9\u30bf\u30b0\u3068\u30ea\u30bd\u30fc\u30b9\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3088\u308b\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3001\u96c6\u7d04\u3001\u53ef\u8996\u5316\u306e\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059 - ",(0,n.jsx)(r.a,{href:"https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Metrics-Explorer.html",children:"\u30bf\u30b0\u3068\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3088\u308b\u30ea\u30bd\u30fc\u30b9\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306b Metrics explorer \u3092\u4f7f\u7528\u3059\u308b"}),"\u3002"]}),"\n",(0,n.jsx)(r.p,{children:"Metrics explorer \u3092\u4f7f\u7528\u3057\u3066\u53ef\u8996\u5316\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306f\u3044\u304f\u3064\u304b\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u306e\u30a6\u30a9\u30fc\u30af\u30b9\u30eb\u30fc\u3067\u306f AWS \u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u6d3b\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"\u3053\u306e\u30ac\u30a4\u30c9\u306f\u7d04 5 \u5206\u3067\u5b8c\u4e86\u3057\u307e\u3059\u3002"})}),"\n",(0,n.jsx)(r.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9"}),"\n",(0,n.jsx)(r.li,{children:"AWS \u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4ecb\u3057\u305f Amazon CloudWatch Metrics explorer \u3078\u306e\u30a2\u30af\u30bb\u30b9"}),"\n",(0,n.jsx)(r.li,{children:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u30bf\u30b0"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"\u30bf\u30b0\u30d9\u30fc\u30b9\u306e\u30af\u30a8\u30ea\u3068\u53ef\u8996\u5316\u3092\u4f7f\u7528\u3057\u305f-metrics-explorer",children:"\u30bf\u30b0\u30d9\u30fc\u30b9\u306e\u30af\u30a8\u30ea\u3068\u53ef\u8996\u5316\u3092\u4f7f\u7528\u3057\u305f Metrics Explorer"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"CloudWatch \u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u958b\u304d\u307e\u3059"}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)("b",{children:"\u30e1\u30c8\u30ea\u30af\u30b9"})," \u306e\u4e0b\u306b\u3042\u308b ",(0,n.jsx)("b",{children:"Explorer"})," \u30e1\u30cb\u30e5\u30fc\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"\u30bf\u30b0\u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",src:s(62355).A+"",width:"271",height:"382"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)("b",{children:"\u6c4e\u7528\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"})," \u307e\u305f\u306f ",(0,n.jsx)("b",{children:"\u30b5\u30fc\u30d3\u30b9\u30d9\u30fc\u30b9\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"})," \u30ea\u30b9\u30c8\u304b\u3089\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u4f8b\u3067\u306f\u3001",(0,n.jsx)("b",{children:"\u30bf\u30a4\u30d7\u5225 EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9"})," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"\u30bf\u30b0\u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",src:s(78326).A+"",width:"250",height:"601"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u63a2\u7d22\u3057\u305f\u3044\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u4e0d\u8981\u306a\u3082\u306e\u3092\u524a\u9664\u3057\u3001\u8868\u793a\u3057\u305f\u3044\u4ed6\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u8ffd\u52a0\u3057\u307e\u3059"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"EC2 \u30e1\u30c8\u30ea\u30af\u30b9\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",src:s(44567).A+"",width:"424",height:"393"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)("b",{children:"From"})," \u306e\u4e0b\u3067\u3001\u63a2\u3057\u3066\u3044\u308b\u30ea\u30bd\u30fc\u30b9\u30bf\u30b0\u307e\u305f\u306f\u30ea\u30bd\u30fc\u30b9\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001",(0,n.jsx)("b",{children:"Name: TeamX"})," \u30bf\u30b0\u3092\u6301\u3064\u7570\u306a\u308b EC2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e CPU \u3068\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u95a2\u9023\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u6570\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"Name \u30bf\u30b0\u306e\u4f8b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",src:s(60173).A+"",width:"1008",height:"608"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)("b",{children:"Aggregated by"})," \u306e\u4e0b\u3067\u96c6\u8a08\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u6642\u7cfb\u5217\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001",(0,n.jsx)("b",{children:"TeamX"})," \u306e\u30e1\u30c8\u30ea\u30af\u30b9\u304c ",(0,n.jsx)("b",{children:"\u30a2\u30d9\u30a4\u30e9\u30d3\u30ea\u30c6\u30a3\u30fc\u30be\u30fc\u30f3"})," \u3067\u96c6\u8a08\u3055\u308c\u3066\u3044\u307e\u3059"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"\u30bf\u30b0 Name \u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u305f EC2 \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",src:s(7711).A+"",width:"1828",height:"770"})}),"\n",(0,n.jsxs)(r.p,{children:["\u3042\u308b\u3044\u306f\u3001",(0,n.jsx)("b",{children:"TeamX"})," \u3068 ",(0,n.jsx)("b",{children:"TeamY"})," \u3092 ",(0,n.jsx)("b",{children:"Team"})," \u30bf\u30b0\u3067\u96c6\u8a08\u3057\u305f\u308a\u3001\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u4ed6\u306e\u8a2d\u5b9a\u3092\u9078\u629e\u3057\u305f\u308a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"\u30bf\u30b0 Team \u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u305f EC2 \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",src:s(12849).A+"",width:"1622",height:"1015"})}),"\n",(0,n.jsx)(r.h2,{id:"\u52d5\u7684\u306a\u53ef\u8996\u5316",children:"\u52d5\u7684\u306a\u53ef\u8996\u5316"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)("b",{children:"From"}),"\u3001",(0,n.jsx)("b",{children:"Aggregated by"}),"\u3001",(0,n.jsx)("b",{children:"Split by"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001\u7d50\u679c\u306e\u53ef\u8996\u5316\u3092\u7c21\u5358\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u3002\u30e1\u30c8\u30ea\u30af\u30b9\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc\u306e\u53ef\u8996\u5316\u306f\u52d5\u7684\u3067\u3042\u308b\u305f\u3081\u3001\u65b0\u3057\u304f\u30bf\u30b0\u4ed8\u3051\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u306f\u81ea\u52d5\u7684\u306b\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",children:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"}),"\n",(0,n.jsxs)(r.p,{children:["Metrics explorer \u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u8a18\u4e8b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\uff1a\n",(0,n.jsx)(r.a,{href:"https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Metrics-Explorer.html",children:"https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch-Metrics-Explorer.html"})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>l});var i=s(96540);const n={},t=i.createContext(n);function c(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(t.Provider,{value:r},e.children)}},44567:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/metrics-explorer-ec2-metrics-af3561724d15bf9044374f2f4adf9ec0.png"},60173:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/metrics-explorer-teamx-name-tag-69dcabf8968d52afcfa37d7e54a84eed.png"},62355:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/metrics-explorer-cw-menu-0832223055f58217e0c49b8102d8e14e.png"},78326:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/metrics-explorer-templates-ec2-by-type-7bb3d0b511eda08c21e7902f08a5056b.png"}}]);