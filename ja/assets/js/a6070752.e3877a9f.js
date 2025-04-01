"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[5635],{28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>i});var t=n(96540);const s={},o=t.createContext(s);function r(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:a},e.children)}},89388:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/prometheus-cost-ac8ec270353978dba9ad4d41a30286f7.png"},89828:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/files/AmazonPrometheus-61602cb0332ade0b5e768b0f00ee2d7d.json"},94222:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"guides/cost/cost-visualization/amazon-prometheus","title":"Amazon Managed Service for Prometheus","description":"Amazon Managed Service for Prometheus \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u306e\u30d3\u30b8\u30e5\u30a2\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u500b\u3005\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3001AWS \u30ea\u30fc\u30b8\u30e7\u30f3\u3001\u7279\u5b9a\u306e Prometheus \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3001\u3055\u3089\u306b RemoteWrite\u3001Query\u3001HourlyStorageMetering \u306a\u3069\u306e\u64cd\u4f5c\u306e\u30b3\u30b9\u30c8\u306b\u3064\u3044\u3066\u306e\u6d1e\u5bdf\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/cost/cost-visualization/amazon-prometheus.md","sourceDirName":"guides/cost/cost-visualization","slug":"/guides/cost/cost-visualization/amazon-prometheus","permalink":"/observability-best-practices/ja/guides/cost/cost-visualization/amazon-prometheus","draft":false,"unlisted":false,"editUrl":"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/guides/cost/cost-visualization/amazon-prometheus.md","tags":[],"version":"current","frontMatter":{},"sidebar":"guides","previous":{"title":"Amazon Managed Grafana","permalink":"/observability-best-practices/ja/guides/cost/cost-visualization/amazon-grafana"},"next":{"title":"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b3\u30b9\u30c8\u76e3\u8996","permalink":"/observability-best-practices/ja/guides/cost/cost-visualization/AmazonManagedServiceforPrometheus"}}');var s=n(74848),o=n(28453);const r={},i="Amazon Managed Service for Prometheus",c={},m=[{value:"Amazon Managed Grafana \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210",id:"amazon-managed-grafana-\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210",level:2}];function u(e){const a={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"amazon-managed-service-for-prometheus",children:"Amazon Managed Service for Prometheus"})}),"\n",(0,s.jsx)(a.p,{children:"Amazon Managed Service for Prometheus \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u306e\u30d3\u30b8\u30e5\u30a2\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u500b\u3005\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3001AWS \u30ea\u30fc\u30b8\u30e7\u30f3\u3001\u7279\u5b9a\u306e Prometheus \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3001\u3055\u3089\u306b RemoteWrite\u3001Query\u3001HourlyStorageMetering \u306a\u3069\u306e\u64cd\u4f5c\u306e\u30b3\u30b9\u30c8\u306b\u3064\u3044\u3066\u306e\u6d1e\u5bdf\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01"}),"\n",(0,s.jsx)(a.p,{children:"\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u30c7\u30fc\u30bf\u3092\u53ef\u8996\u5316\u3057\u5206\u6790\u3059\u308b\u306b\u306f\u3001\u30ab\u30b9\u30bf\u30e0 Athena \u30d3\u30e5\u30fc\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["\u7d9a\u884c\u3059\u308b\u524d\u306b\u3001",(0,s.jsx)(a.a,{href:"/observability-best-practices/ja/guides/cost/cost-visualization/cost#implementation",children:"\u5b9f\u88c5\u306e\u6982\u8981"})," \u3067\u8a00\u53ca\u3055\u308c\u3066\u3044\u308b CUR (\u30b9\u30c6\u30c3\u30d7 #1) \u3092\u4f5c\u6210\u3057\u3001AWS CloudFormation Template (\u30b9\u30c6\u30c3\u30d7 #2) \u3092\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["\u6b21\u306b\u3001\u4ee5\u4e0b\u306e\u30af\u30a8\u30ea\u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u3044 Amazon Athena ",(0,s.jsx)(a.a,{href:"https://athena-in-action.workshop.aws/30-basics/303-create-view.html",children:"\u30d3\u30e5\u30fc"})," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u30af\u30a8\u30ea\u306f\u3001\u7d44\u7e54\u5185\u306e\u3059\u3079\u3066\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u308f\u305f\u308b Amazon Managed Service for Prometheus \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(a.p,{children:'CREATE OR REPLACE VIEW "prometheus_cost" AS\nSELECT\nline_item_usage_type\n, line_item_resource_id\n, line_item_operation\n, line_item_usage_account_id\n, month\n, year\n, "sum"(line_item_usage_amount) "Usage"\n, "sum"(line_item_unblended_cost) cost\nFROM\ndatabase.tablename #database.tablename \u3092\u3042\u306a\u305f\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u30c6\u30fc\u30d6\u30eb\u540d\u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\nWHERE ("line_item_product_code" = \'AmazonPrometheus\')\nGROUP BY 1, 2, 3, 4, 5, 6'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"amazon-managed-grafana-\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210",children:"Amazon Managed Grafana \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210"}),"\n",(0,s.jsxs)(a.p,{children:["Amazon Managed Grafana \u3067\u306f\u3001Grafana \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30b3\u30f3\u30bd\u30fc\u30eb\u306e AWS \u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001Athena \u3092\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u3057\u3066\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u6a5f\u80fd\u306b\u3088\u308a\u3001\u65e2\u5b58\u306e Athena \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u691c\u51fa\u3057\u3001Athena \u3078\u306e\u30a2\u30af\u30bb\u30b9\u306b\u5fc5\u8981\u306a\u8a8d\u8a3c\u60c5\u5831\u306e\u8a2d\u5b9a\u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u3067\u3001Athena \u3092\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u3057\u3066\u8ffd\u52a0\u3059\u308b\u4f5c\u696d\u304c\u7c21\u7d20\u5316\u3055\u308c\u307e\u3059\u3002Athena \u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306e\u4f7f\u7528\u306b\u95a2\u3059\u308b\u524d\u63d0\u6761\u4ef6\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/Athena-prereq.html",children:"\u524d\u63d0\u6761\u4ef6"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["\u4ee5\u4e0b\u306e ",(0,s.jsx)(a.strong,{children:"Grafana \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"})," \u306f\u3001AWS Organizations \u5185\u306e\u3059\u3079\u3066\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u304a\u3051\u308b Amazon Managed Service for Prometheus \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u500b\u3005\u306e Prometheus \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30b3\u30b9\u30c8\u3084\u3001RemoteWrite\u3001Query\u3001HourlyStorageMetering \u306a\u3069\u306e\u64cd\u4f5c\u306e\u30b3\u30b9\u30c8\u3082\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u3059\uff01"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"prometheus-cost",src:n(89388).A+"",width:"3005",height:"1390"})}),"\n",(0,s.jsxs)(a.p,{children:["Grafana \u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306f JSON \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u8868\u73fe\u3055\u308c\u3001\u305d\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u306b\u306f\u3001\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3001\u30d1\u30cd\u30eb\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5909\u6570\u3001\u30d1\u30cd\u30eb\u30af\u30a8\u30ea\u306a\u3069\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u4e0a\u8a18\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e JSON \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f",(0,s.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(89828).A+"",children:"\u3053\u3061\u3089"}),"\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(a.p,{children:["\u524d\u8ff0\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u7d44\u7e54\u5168\u4f53\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u304a\u3051\u308b Amazon Managed Service for Prometheus \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u3092\u7279\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u4ed6\u306e Grafana ",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/ja_jp/grafana/latest/userguide/Grafana-panels.html",children:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u30d1\u30cd\u30eb"})," \u3092\u4f7f\u7528\u3057\u3066\u3001\u8981\u4ef6\u306b\u5408\u308f\u305b\u305f\u30d3\u30b8\u30e5\u30a2\u30eb\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})]})}function d(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);