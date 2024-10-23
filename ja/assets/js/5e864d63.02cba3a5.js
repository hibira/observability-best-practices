"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[4318],{98295:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=s(74848),t=s(28453);const r={},o="\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b3\u30b9\u30c8\u76e3\u8996",i={id:"guides/cost/cost-visualization/AmazonManagedServiceforPrometheus",title:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b3\u30b9\u30c8\u76e3\u8996",description:"Amazon Managed Service for Prometheus \u306f\u3001\u30b3\u30f3\u30c6\u30ca\u30e1\u30c8\u30ea\u30af\u30b9\u7528\u306e\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u3067 Prometheus \u4e92\u63db\u306e\u76e3\u8996\u30b5\u30fc\u30d3\u30b9\u3067\u3001\u5927\u898f\u6a21\u306a\u30b3\u30f3\u30c6\u30ca\u74b0\u5883\u3092\u5b89\u5168\u306b\u76e3\u8996\u3059\u308b\u3053\u3068\u3092\u5bb9\u6613\u306b\u3057\u307e\u3059\u3002Amazon Managed Service for Prometheus \u306e\u4fa1\u683c\u30e2\u30c7\u30eb\u306f\u3001\u53d6\u308a\u8fbc\u307e\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u30b5\u30f3\u30d7\u30eb\u3001\u51e6\u7406\u3055\u308c\u305f\u30af\u30a8\u30ea\u30b5\u30f3\u30d7\u30eb\u3001\u4fdd\u5b58\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002\u6700\u65b0\u306e\u4fa1\u683c\u8a73\u7d30\u306f\u3053\u3061\u3089\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/cost/cost-visualization/AmazonManagedServiceforPrometheus.md",sourceDirName:"guides/cost/cost-visualization",slug:"/guides/cost/cost-visualization/AmazonManagedServiceforPrometheus",permalink:"/observability-best-practices/ja/guides/cost/cost-visualization/AmazonManagedServiceforPrometheus",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/guides/cost/cost-visualization/AmazonManagedServiceforPrometheus.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Amazon Managed Service for Prometheus",permalink:"/observability-best-practices/ja/guides/cost/cost-visualization/amazon-prometheus"},next:{title:"AWS X-Ray",permalink:"/observability-best-practices/ja/guides/cost/cost-visualization/aws-xray"}},c={},d=[{value:"\u89e3\u6c7a\u7b56",id:"\u89e3\u6c7a\u7b56",level:3},{value:"Amazon Managed Grafana \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",id:"amazon-managed-grafana-\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",level:3}];function h(e){const a={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b3\u30b9\u30c8\u76e3\u8996",children:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b3\u30b9\u30c8\u76e3\u8996"}),"\n",(0,n.jsxs)(a.p,{children:["Amazon Managed Service for Prometheus \u306f\u3001\u30b3\u30f3\u30c6\u30ca\u30e1\u30c8\u30ea\u30af\u30b9\u7528\u306e\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u3067 Prometheus \u4e92\u63db\u306e\u76e3\u8996\u30b5\u30fc\u30d3\u30b9\u3067\u3001\u5927\u898f\u6a21\u306a\u30b3\u30f3\u30c6\u30ca\u74b0\u5883\u3092\u5b89\u5168\u306b\u76e3\u8996\u3059\u308b\u3053\u3068\u3092\u5bb9\u6613\u306b\u3057\u307e\u3059\u3002Amazon Managed Service for Prometheus \u306e\u4fa1\u683c\u30e2\u30c7\u30eb\u306f\u3001\u53d6\u308a\u8fbc\u307e\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u30b5\u30f3\u30d7\u30eb\u3001\u51e6\u7406\u3055\u308c\u305f\u30af\u30a8\u30ea\u30b5\u30f3\u30d7\u30eb\u3001\u4fdd\u5b58\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002\u6700\u65b0\u306e\u4fa1\u683c\u8a73\u7d30\u306f",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/jp/prometheus/pricing/",children:"\u3053\u3061\u3089"}),"\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u30de\u30cd\u30fc\u30b8\u30c9\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u3001Amazon Managed Service for Prometheus \u306f\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e\u30b9\u30b1\u30fc\u30eb\u30a2\u30c3\u30d7\u3068\u30c0\u30a6\u30f3\u306b\u5fdc\u3058\u3066\u3001\u904b\u7528\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u53d6\u308a\u8fbc\u307f\u3001\u4fdd\u5b58\u3001\u30af\u30a8\u30ea\u3092\u81ea\u52d5\u7684\u306b\u30b9\u30b1\u30fc\u30eb\u3057\u307e\u3059\u3002\u4e00\u90e8\u306e\u304a\u5ba2\u69d8\u304b\u3089\u3001",(0,n.jsx)(a.code,{children:"\u30e1\u30c8\u30ea\u30af\u30b9\u30b5\u30f3\u30d7\u30eb\u306e\u53d6\u308a\u8fbc\u307f\u30ec\u30fc\u30c8"}),"\u3068\u305d\u306e\u30b3\u30b9\u30c8\u3092\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u8ffd\u8de1\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306e\u30ac\u30a4\u30c0\u30f3\u30b9\u3092\u6c42\u3081\u3089\u308c\u307e\u3057\u305f\u3002\u305d\u308c\u3092\u5b9f\u73fe\u3059\u308b\u65b9\u6cd5\u3092\u63a2\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,n.jsx)(a.h3,{id:"\u89e3\u6c7a\u7b56",children:"\u89e3\u6c7a\u7b56"}),"\n",(0,n.jsxs)(a.p,{children:["Amazon Managed Service for Prometheus \u306f ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/introducing-vended-metrics-for-amazon-managed-service-for-prometheus/",children:"\u30d9\u30f3\u30c0\u30fc\u30e1\u30c8\u30ea\u30af\u30b9"})," \u3092 Amazon CloudWatch \u306b\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001Amazon Managed Service for Prometheus \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u53ef\u8996\u6027\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30d9\u30f3\u30c0\u30fc\u30e1\u30c8\u30ea\u30af\u30b9\u306f CloudWatch \u306e ",(0,n.jsx)(a.code,{children:"AWS/Usage"})," \u304a\u3088\u3073 ",(0,n.jsx)(a.code,{children:"AWS/Prometheus"})," \u540d\u524d\u7a7a\u9593\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u3053\u308c\u3089\u306e ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/ja_jp/prometheus/latest/userguide/AMP-CW-usage-metrics.html",children:"\u30e1\u30c8\u30ea\u30af\u30b9"})," \u306f\u8ffd\u52a0\u6599\u91d1\u306a\u3057\u3067 CloudWatch \u3067\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002CloudWatch \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u3066\u3001\u3053\u308c\u3089\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u3055\u3089\u306b\u63a2\u7d22\u3057\u8996\u899a\u5316\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(a.p,{children:"\u4eca\u65e5\u306f\u3001Amazon CloudWatch \u3092 Amazon Managed Grafana \u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3057\u3001Grafana \u3067\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u69cb\u7bc9\u3057\u3066\u3053\u308c\u3089\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u8996\u899a\u5316\u3057\u307e\u3059\u3002\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u56f3\u306f\u4ee5\u4e0b\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Amazon Managed Service for Prometheus \u304c Amazon CloudWatch \u306b\u30d9\u30f3\u30c0\u30fc\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u516c\u958b\u3059\u308b"}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Amazon CloudWatch \u304c Amazon Managed Grafana \u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u306a\u308b"}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"\u30e6\u30fc\u30b6\u30fc\u304c Amazon Managed Grafana \u3067\u4f5c\u6210\u3055\u308c\u305f\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"prometheus-ingestion-rate",src:s(98025).A+"",width:"726",height:"311"})}),"\n",(0,n.jsx)(a.h3,{id:"amazon-managed-grafana-\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",children:"Amazon Managed Grafana \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"}),"\n",(0,n.jsx)(a.p,{children:"Amazon Managed Grafana \u3067\u4f5c\u6210\u3055\u308c\u305f\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3067\u306f\u3001\u4ee5\u4e0b\u3092\u53ef\u8996\u5316\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3054\u3068\u306e Prometheus \u53d6\u308a\u8fbc\u307f\u30ec\u30fc\u30c8\n",(0,n.jsx)(a.img,{alt:"prometheus-ingestion-rate-dash1",src:s(75298).A+"",width:"1702",height:"468"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3054\u3068\u306e Prometheus \u53d6\u308a\u8fbc\u307f\u30ec\u30fc\u30c8\u3068\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b3\u30b9\u30c8\n\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u30b3\u30b9\u30c8\u8ffd\u8de1\u306b\u306f\u3001\u516c\u5f0f\u306e ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/jp/prometheus/pricing/",children:"AWS \u6599\u91d1\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})," \u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u300c\u6700\u521d\u306e 20 \u5104\u30b5\u30f3\u30d7\u30eb\u300d\u306e\u300c\u53d6\u308a\u8fbc\u307e\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u5c64\u300d\u306e\u4fa1\u683c\u306b\u57fa\u3065\u3044\u305f ",(0,n.jsx)(a.code,{children:"\u6570\u5f0f"})," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u6570\u5f0f\u306e\u64cd\u4f5c\u306f\u3001\u6570\u5024\u3068\u6642\u7cfb\u5217\u3092\u5165\u529b\u3068\u3057\u3066\u53d7\u3051\u53d6\u308a\u3001\u305d\u308c\u3089\u3092\u7570\u306a\u308b\u6570\u5024\u3068\u6642\u7cfb\u5217\u306b\u5909\u63db\u3057\u307e\u3059\u3002\u30d3\u30b8\u30cd\u30b9\u8981\u4ef6\u306b\u5408\u308f\u305b\u3066\u3055\u3089\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u5834\u5408\u306f\u3001\u3053\u306e ",(0,n.jsx)(a.a,{href:"https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/expression-queries/#math",children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n",(0,n.jsx)(a.img,{alt:"prometheus-ingestion-rate-dash2",src:s(41881).A+"",width:"1899",height:"880"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3054\u3068\u306e Prometheus \u30a2\u30af\u30c6\u30a3\u30d6\u30b7\u30ea\u30fc\u30ba\n",(0,n.jsx)(a.img,{alt:"prometheus-ingestion-rate-dash3",src:s(35632).A+"",width:"1798",height:"472"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Grafana \u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306f JSON \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u8868\u73fe\u3055\u308c\u3001\u305d\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u306b\u306f\u3001\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3001\u30d1\u30cd\u30eb\u304b\u3089\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5909\u6570\u3001\u30d1\u30cd\u30eb\u30af\u30a8\u30ea\u306a\u3069\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(a.p,{children:["\u4e0a\u8a18\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e ",(0,n.jsx)(a.strong,{children:"JSON \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"})," \u306b\u306f ",(0,n.jsx)("mark",{children:(0,n.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(46725).A+"",children:"\u3053\u3053"})})," \u304b\u3089\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u524d\u8ff0\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3054\u3068\u306e\u53d6\u308a\u8fbc\u307f\u30ec\u30fc\u30c8\u3092\u7279\u5b9a\u3057\u3001Amazon Managed Service for Prometheus \u306e\u30e1\u30c8\u30ea\u30af\u30b9\u53d6\u308a\u8fbc\u307f\u30ec\u30fc\u30c8\u306b\u57fa\u3065\u3044\u3066\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3054\u3068\u306e\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b3\u30b9\u30c8\u3092\u76e3\u8996\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u4ed6\u306e Grafana ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/Grafana-panels.html",children:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u30d1\u30cd\u30eb"})," \u3092\u4f7f\u7528\u3057\u3066\u3001\u8981\u4ef6\u306b\u5408\u308f\u305b\u305f\u30d3\u30b8\u30e5\u30a2\u30eb\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})]})}function l(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},46725:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/files/AmazonPrometheusMetrics-bc68c1db01e0421fb542832c0fdc9e8c.json"},98025:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/ampmetricsingestionrate-042bdb64a3e8558bfa03ce6659aa6272.png"},75298:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/ampwsingestionrate-1-1f5ab3244b335aec0ad974105fe7322f.png"},41881:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/ampwsingestionrate-2-dd939bdcbb55c5b60570d7db1f632814.png"},35632:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/ampwsingestionrate-3-49c3212aa1b0a564159af9c6fdf82b5c.png"},28453:(e,a,s)=>{s.d(a,{R:()=>o,x:()=>i});var n=s(96540);const t={},r=n.createContext(t);function o(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);