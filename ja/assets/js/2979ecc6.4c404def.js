"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[6699],{31035:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var r=s(74848),i=s(28453);const c={},t="AWS \u3067\u306e OpenSearch \u30ed\u30b0\u8a18\u9332",l={id:"patterns/opensearch",title:"AWS \u3067\u306e OpenSearch \u30ed\u30b0\u8a18\u9332",description:"\u306f\u3058\u3081\u306b",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/patterns/opensearch.md",sourceDirName:"patterns",slug:"/patterns/opensearch",permalink:"/observability-best-practices/ja/patterns/opensearch",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/patterns/opensearch.md",tags:[],version:"current",frontMatter:{},sidebar:"patterns",previous:{title:"ADOT \u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3",permalink:"/observability-best-practices/ja/patterns/o11ypipeline"},next:{title:"OpenTelemetry \u306b\u3088\u308b\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3",permalink:"/observability-best-practices/ja/patterns/otel"}},a={},h=[{value:"\u306f\u3058\u3081\u306b",id:"\u306f\u3058\u3081\u306b",level:2},{value:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u6982\u8981",id:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u6982\u8981",level:2},{value:"\u30e1\u30ea\u30c3\u30c8",id:"\u30e1\u30ea\u30c3\u30c8",level:2},{value:"\u30c7\u30e1\u30ea\u30c3\u30c8",id:"\u30c7\u30e1\u30ea\u30c3\u30c8",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}];function o(e){const n={em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"aws-\u3067\u306e-opensearch-\u30ed\u30b0\u8a18\u9332",children:"AWS \u3067\u306e OpenSearch \u30ed\u30b0\u8a18\u9332"}),"\n",(0,r.jsx)(n.h2,{id:"\u306f\u3058\u3081\u306b",children:"\u306f\u3058\u3081\u306b"}),"\n",(0,r.jsx)(n.p,{children:"Opensearch \u306f\u3001\u30ed\u30b0\u306e\u96c6\u7d04\u3001\u5206\u6790\u3001\u53ef\u8996\u5316\u3092\u53ef\u80fd\u306b\u3059\u308b\u4eba\u6c17\u306e\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u691c\u7d22\u30fb\u5206\u6790\u30a8\u30f3\u30b8\u30f3\u3067\u3059\u3002AWS \u306f\u3001ECS\uff08Elastic Container Service\uff09\u3001EKS\uff08Elastic Kubernetes Service\uff09\u3001EC2\uff08Elastic Compute Cloud\uff09\u306a\u3069\u3001\u30ed\u30b0\u3092\u751f\u6210\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c7\u30d7\u30ed\u30a4\u3068\u5b9f\u884c\u306b\u4f7f\u7528\u3067\u304d\u308b\u8907\u6570\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002Opensearch \u3092\u3053\u308c\u3089\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u3068\u7d71\u5408\u3059\u308b\u3053\u3068\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u3092\u52b9\u679c\u7684\u306b\u76e3\u8996\u3059\u308b\u305f\u3081\u306e\u4e00\u5143\u5316\u3055\u308c\u305f\u30ed\u30b0\u7ba1\u7406\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Opensearch pipeline",src:s(91394).A+"",width:"2008",height:"400"}),"\n",(0,r.jsx)(n.em,{children:"\u56f3 1\uff1aOpensearch \u30d1\u30a4\u30d7\u30e9\u30a4\u30f3"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u6982\u8981",children:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u6982\u8981"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u306f\u3001ECS\u3001EKS\u3001EC2 \u3092\u4f7f\u7528\u3057\u305f AWS \u4e0a\u306e OpenSearch \u30ed\u30ae\u30f3\u30b0\u306e\u9ad8\u30ec\u30d9\u30eb\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3067\u3059\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"ECS\u3001EKS\u3001\u307e\u305f\u306f EC2 \u4e0a\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30ed\u30b0\u3092\u751f\u6210\u3057\u307e\u3059"}),"\n",(0,r.jsx)(n.li,{children:"\u30ed\u30b0\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\uff08\u4f8b\uff1aFluentd\u3001Fluent Bit\u3001Logstash \u306a\u3069\uff09\u304c\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u304b\u3089\u30ed\u30b0\u3092\u53ce\u96c6\u3057\u307e\u3059"}),"\n",(0,r.jsx)(n.li,{children:"\u30ed\u30b0\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u3001\u30de\u30cd\u30fc\u30b8\u30c9 OpenSearch \u30af\u30e9\u30b9\u30bf\u30fc\u3067\u3042\u308b Amazon OpenSearch Service \u306b\u30ed\u30b0\u3092\u9001\u4fe1\u3057\u307e\u3059"}),"\n",(0,r.jsx)(n.li,{children:"OpenSearch \u304c\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u4f5c\u6210\u3068\u4fdd\u5b58\u3092\u884c\u3044\u307e\u3059"}),"\n",(0,r.jsx)(n.li,{children:"OpenSearch \u3068\u7d71\u5408\u3055\u308c\u305f Kibana \u3092\u4f7f\u7528\u3057\u3066\u3001\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u691c\u7d22\u3001\u5206\u6790\u3001\u53ef\u8996\u5316\u3092\u884c\u3044\u307e\u3059"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e3b\u8981\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Amazon OpenSearch Service\uff1a\u30ed\u30b0\u306e\u96c6\u7d04\u3068\u5206\u6790\u306e\u305f\u3081\u306e\u30de\u30cd\u30fc\u30b8\u30c9 OpenSearch \u30af\u30e9\u30b9\u30bf\u30fc"}),"\n",(0,r.jsx)(n.li,{children:"\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\uff08ECS\u3001EKS\u3001EC2\uff09\uff1a\u30ed\u30b0\u3092\u751f\u6210\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u308b\u5834\u6240"}),"\n",(0,r.jsx)(n.li,{children:"\u30ed\u30b0\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\uff1a\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u304b\u3089\u30ed\u30b0\u3092\u53ce\u96c6\u3057\u3001OpenSearch \u306b\u9001\u4fe1"}),"\n",(0,r.jsx)(n.li,{children:"OpenSearch \u30a4\u30f3\u30c7\u30c3\u30af\u30b9\uff1a\u30ed\u30b0\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58"}),"\n",(0,r.jsx)(n.li,{children:"Kibana\uff1a\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u53ef\u8996\u5316\u3068\u5206\u6790"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30e1\u30ea\u30c3\u30c8",children:"\u30e1\u30ea\u30c3\u30c8"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u96c6\u4e2d\u30ed\u30b0\u7ba1\u7406"}),": \u3059\u3079\u3066\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u304b\u3089\u306e\u30ed\u30b0\u3092 OpenSearch \u306b\u96c6\u7d04\u3057\u3001\u30ed\u30b0\u5206\u6790\u306e\u305f\u3081\u306e\u5358\u4e00\u306e\u753b\u9762\u3092\u5b9f\u73fe"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3"}),": Amazon OpenSearch Service \u306f\u5927\u91cf\u306e\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u53d6\u308a\u8fbc\u307f\u3068\u5206\u6790\u306b\u5bfe\u5fdc"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u30d5\u30eb\u30de\u30cd\u30fc\u30b8\u30c9"}),": OpenSearch Service \u306b\u3088\u308a OpenSearch \u306e\u904b\u7528\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u3092\u6392\u9664"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0"}),": \u30ed\u30b0\u3092\u307b\u307c\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u3067\u53d6\u308a\u8fbc\u307f\u3001\u8996\u899a\u5316\u3057\u3001\u30d7\u30ed\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u76e3\u8996\u3092\u5b9f\u73fe"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ad8\u5ea6\u306a\u5206\u6790"}),": Kibana \u304c\u30ed\u30b0\u306e\u691c\u7d22\u3001\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3001\u5206\u6790\u3001\u8996\u899a\u5316\u306e\u305f\u3081\u306e\u5f37\u529b\u306a\u30c4\u30fc\u30eb\u3092\u63d0\u4f9b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u62e1\u5f35\u6027"}),": \u3055\u307e\u3056\u307e\u306a\u30ed\u30b0\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3084 AWS \u30b5\u30fc\u30d3\u30b9\u3068\u306e\u67d4\u8edf\u306a\u7d71\u5408\u304c\u53ef\u80fd"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30c7\u30e1\u30ea\u30c3\u30c8",children:"\u30c7\u30e1\u30ea\u30c3\u30c8"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u30b3\u30b9\u30c8"}),": \u5927\u898f\u6a21\u306a OpenSearch \u3078\u306e\u30ed\u30b0\u96c6\u7d04\u306f\u3001\u5927\u304d\u306a\u30c7\u30fc\u30bf\u8ee2\u9001\u304a\u3088\u3073\u4fdd\u5b58\u30b3\u30b9\u30c8\u3092\u767a\u751f\u3055\u305b\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u8907\u96d1\u306a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),": \u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u304b\u3089 OpenSearch \u3078\u306e\u30ed\u30b0\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u306e\u521d\u671f\u8a2d\u5b9a\u306f\u8907\u96d1\u306b\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5b66\u7fd2\u66f2\u7dda"}),": \u52b9\u7387\u7684\u306a\u5229\u7528\u306b\u306f OpenSearch \u3068 Kibana \u306e\u77e5\u8b58\u304c\u5fc5\u8981\u3067\u3059"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5927\u898f\u6a21\u904b\u7528\u306e\u5236\u9650"}),": \u975e\u5e38\u306b\u5927\u91cf\u306e\u30ed\u30b0\u306b\u5bfe\u3057\u3066\u306f\u3001OpenSearch \u306f\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u3068\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8ab2\u984c\u306b\u76f4\u9762\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9"}),": OpenSearch \u3078\u306e\u5b89\u5168\u306a\u30ed\u30b0\u8ee2\u9001\u3068\u30a2\u30af\u30bb\u30b9\u3092\u78ba\u4fdd\u3059\u308b\u306b\u306f\u3001\u614e\u91cd\u306a\u8a2d\u5b9a\u304c\u5fc5\u8981\u3067\u3059"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u307e\u3068\u3081",children:"\u307e\u3068\u3081"}),"\n",(0,r.jsx)(n.p,{children:"OpenSearch \u3092 ECS\u3001EKS\u3001EC2 \u306a\u3069\u306e AWS \u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u3068\u7d71\u5408\u3059\u308b\u3053\u3068\u3067\u3001\u5f37\u529b\u306a\u30ed\u30b0\u96c6\u7d04\u3068\u5206\u6790\u6a5f\u80fd\u304c\u5b9f\u73fe\u3057\u307e\u3059\u3002\n\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u3067\u96c6\u4e2d\u7ba1\u7406\u3055\u308c\u305f\u3001\u307b\u307c\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u30ed\u30b0\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u307e\u3059\u304c\u3001\u30b3\u30b9\u30c8\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3001\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u8003\u616e\u3057\u3066\u614e\u91cd\u306b\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u8a2d\u8a08\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\n\u9069\u5207\u306b\u5b9f\u88c5\u3059\u308b\u3053\u3068\u3067\u3001AWS \u4e0a\u306e OpenSearch \u30ed\u30b0\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u306e\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u3092\u5927\u5e45\u306b\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},91394:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/os-ee8d09a24d3d0657f4e94feb079ed918.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(96540);const i={},c=r.createContext(i);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);