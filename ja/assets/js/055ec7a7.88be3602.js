"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[1402],{22293:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var i=s(74848),r=s(28453);const l={},d="\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306e\u6982\u8981",c={id:"guides/index",title:"\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306e\u6982\u8981",description:"\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306f\u5e45\u5e83\u3044\u30c8\u30d4\u30c3\u30af\u3067\u3042\u308a\u3001\u6210\u719f\u3057\u305f\u30c4\u30fc\u30eb\u306e\u74b0\u5883\u304c\u3042\u308a\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u3059\u3079\u3066\u306e\u30c4\u30fc\u30eb\u304c\u3059\u3079\u3066\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306b\u9069\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306e\u8981\u4ef6\u3001\u69cb\u6210\u3001\u6700\u7d42\u7684\u306a\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u3092\u901a\u3058\u3066\u30ca\u30d3\u30b2\u30fc\u30c8\u3059\u308b\u306e\u3092\u652f\u63f4\u3059\u308b\u305f\u3081\u306b\u3001\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u6226\u7565\u306b\u95a2\u3059\u308b\u610f\u601d\u6c7a\u5b9a\u30d7\u30ed\u30bb\u30b9\u306b\u5f79\u7acb\u3064 5 \u3064\u306e\u4e3b\u8981\u306a\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3092\u307e\u3068\u3081\u307e\u3057\u305f\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/index.md",sourceDirName:"guides",slug:"/guides/",permalink:"/observability-best-practices/ja/guides/",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/guides/index.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",next:{title:"\u30c8\u30ec\u30fc\u30b7\u30f3\u30b0\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u9078\u629e",permalink:"/observability-best-practices/ja/guides/choosing-a-tracing-agent"}},t={},a=[{value:"\u91cd\u8981\u306a\u3082\u306e\u3092\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3059\u308b",id:"\u91cd\u8981\u306a\u3082\u306e\u3092\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3059\u308b",level:2},{value:"\u76ee\u6a19\u3092\u628a\u63e1\u3057\u3001\u6e2c\u5b9a\u3057\u307e\u3057\u3087\u3046\uff01",id:"\u76ee\u6a19\u3092\u628a\u63e1\u3057\u6e2c\u5b9a\u3057\u307e\u3057\u3087\u3046",level:4},{value:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u4f1d\u64ad\u3068\u30c4\u30fc\u30eb\u9078\u629e",id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u4f1d\u64ad\u3068\u30c4\u30fc\u30eb\u9078\u629e",level:2},{value:"\u3059\u3079\u3066\u306e\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306f\u7570\u306a\u308a\u307e\u3059\u304c\u3001\u5171\u901a\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u8fc5\u901f\u306a\u7d50\u679c\u304c\u5f97\u3089\u308c\u307e\u3059",id:"\u3059\u3079\u3066\u306e\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306f\u7570\u306a\u308a\u307e\u3059\u304c\u5171\u901a\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u8fc5\u901f\u306a\u7d50\u679c\u304c\u5f97\u3089\u308c\u307e\u3059",level:4},{value:"\u65e2\u5b58\u306e\u30c4\u30fc\u30eb\u3068\u30d7\u30ed\u30bb\u30b9\u3068\u306e\u7d71\u5408",id:"\u65e2\u5b58\u306e\u30c4\u30fc\u30eb\u3068\u30d7\u30ed\u30bb\u30b9\u3068\u306e\u7d71\u5408",level:4},{value:"\u81ea\u52d5\u5316\u3068\u6a5f\u68b0\u5b66\u7fd2\u306e\u6d3b\u7528",id:"\u81ea\u52d5\u5316\u3068\u6a5f\u68b0\u5b66\u7fd2\u306e\u6d3b\u7528",level:4},{value:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e\u3059\u3079\u3066\u306e\u5c64\u304b\u3089\u30c6\u30ec\u30e1\u30c8\u30ea\u3092\u53ce\u96c6\u3059\u308b",id:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e\u3059\u3079\u3066\u306e\u5c64\u304b\u3089\u30c6\u30ec\u30e1\u30c8\u30ea\u3092\u53ce\u96c6\u3059\u308b",level:2},{value:"\u7d71\u5408\u306b\u7126\u70b9\u3092\u5f53\u3066\u308b",id:"\u7d71\u5408\u306b\u7126\u70b9\u3092\u5f53\u3066\u308b",level:4},{value:"\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u5fd8\u308c\u305a\u306b",id:"\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u5fd8\u308c\u305a\u306b",level:4},{value:"\u30c7\u30fc\u30bf\u306f\u529b\u306a\u308a\u3067\u3059\u304c\u3001\u7d30\u304b\u3044\u3053\u3068\u306b\u3053\u3060\u308f\u308a\u3059\u304e\u306a\u3044\u3067\u304f\u3060\u3055\u3044",id:"\u30c7\u30fc\u30bf\u306f\u529b\u306a\u308a\u3067\u3059\u304c\u7d30\u304b\u3044\u3053\u3068\u306b\u3053\u3060\u308f\u308a\u3059\u304e\u306a\u3044\u3067\u304f\u3060\u3055\u3044",level:2},{value:"Day One \u304b\u3089\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u3092\u7d44\u307f\u8fbc\u3080",id:"day-one-\u304b\u3089\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u3092\u7d44\u307f\u8fbc\u3080",level:2}];function h(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306e\u6982\u8981",children:"\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306e\u6982\u8981"}),"\n",(0,i.jsx)(n.p,{children:"\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306f\u5e45\u5e83\u3044\u30c8\u30d4\u30c3\u30af\u3067\u3042\u308a\u3001\u6210\u719f\u3057\u305f\u30c4\u30fc\u30eb\u306e\u74b0\u5883\u304c\u3042\u308a\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u3059\u3079\u3066\u306e\u30c4\u30fc\u30eb\u304c\u3059\u3079\u3066\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306b\u9069\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306e\u8981\u4ef6\u3001\u69cb\u6210\u3001\u6700\u7d42\u7684\u306a\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u3092\u901a\u3058\u3066\u30ca\u30d3\u30b2\u30fc\u30c8\u3059\u308b\u306e\u3092\u652f\u63f4\u3059\u308b\u305f\u3081\u306b\u3001\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u6226\u7565\u306b\u95a2\u3059\u308b\u610f\u601d\u6c7a\u5b9a\u30d7\u30ed\u30bb\u30b9\u306b\u5f79\u7acb\u3064 5 \u3064\u306e\u4e3b\u8981\u306a\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3092\u307e\u3068\u3081\u307e\u3057\u305f\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u91cd\u8981\u306a\u3082\u306e\u3092\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3059\u308b",children:"\u91cd\u8981\u306a\u3082\u306e\u3092\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u3067\u6700\u3082\u91cd\u8981\u306a\u8003\u616e\u4e8b\u9805\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u307e\u305f\u306f\u9867\u5ba2\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u305d\u308c\u306f\u3001",(0,i.jsx)(n.em,{children:"\u3042\u306a\u305f"}),"\u3001\u3042\u306a\u305f\u306e\u30d3\u30b8\u30cd\u30b9\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3001\u307e\u305f\u306f\u30e6\u30fc\u30b6\u30fc\u306b\u3068\u3063\u3066\u91cd\u8981\u306a\u3082\u306e\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u307e\u305a\u3001\u6210\u529f\u57fa\u6e96\u304b\u3089\u59cb\u3081\u307e\u3057\u3087\u3046\u3002\u4f8b\u3048\u3070\u3001e \u30b3\u30de\u30fc\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u904b\u55b6\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u6210\u529f\u306e\u6307\u6a19\u306f\u904e\u53bb 1 \u6642\u9593\u306e\u8cfc\u5165\u6570\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u975e\u55b6\u5229\u56e3\u4f53\u306e\u5834\u5408\u3001\u6708\u9593\u76ee\u6a19\u306b\u5bfe\u3059\u308b\u5bc4\u4ed8\u91d1\u984d\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u6c7a\u6e08\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u306f\u53d6\u5f15\u51e6\u7406\u6642\u9593\u3092\u76e3\u8996\u3057\u3001\u5927\u5b66\u306f\u5b66\u751f\u306e\u51fa\u5e2d\u7387\u3092\u6e2c\u5b9a\u3057\u305f\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u6210\u529f\u6307\u6a19\u306f\u8ab0\u306b\u3068\u3063\u3066\u3082\u7570\u306a\u308a\u307e\u3059\uff01\u3053\u3053\u3067\u306f e \u30b3\u30de\u30fc\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f8b\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u3042\u306a\u305f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u5168\u304f\u7570\u306a\u308b\u6e2c\u5b9a\u57fa\u6e96\u3092\u6301\u3064\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u3067\u3082\u3001\u30a2\u30c9\u30d0\u30a4\u30b9\u306f\u540c\u3058\u3067\u3059\uff1a",(0,i.jsx)(n.em,{children:"\u826f\u3044"})," \u72b6\u614b\u304c\u3069\u306e\u3088\u3046\u306a\u3082\u306e\u304b\u3092\u77e5\u308a\u3001\u305d\u308c\u3092\u6e2c\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,i.jsxs)(n.p,{children:["\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u95a2\u4fc2\u306a\u304f\u3001\u307e\u305a\u306f\u4e3b\u8981\u306a\u6307\u6a19\u3092\u7279\u5b9a\u3059\u308b\u3053\u3068\u304b\u3089\u59cb\u3081\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u305d\u3057\u3066\u3001\u305d\u3053\u304b\u3089 ",(0,i.jsxs)(n.em,{children:["\u30ef\u30fc\u30ad\u30f3\u30b0\u30d0\u30c3\u30af\u30ef\u30fc\u30ba",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]})," \u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u306e\u89b3\u70b9\u304b\u3089\u3069\u306e\u3088\u3046\u306a\u5f71\u97ff\u304c\u3042\u308b\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001Web \u30b5\u30fc\u30d0\u30fc\u306e\u9ad8\u3044 CPU \u4f7f\u7528\u7387\u304c\u9867\u5ba2\u6e80\u8db3\u5ea6\u3092\u5371\u967a\u306b\u3055\u3089\u3057\u3001\u7d50\u679c\u7684\u306b\u58f2\u4e0a\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u306e\u3067\u3042\u308c\u3070\u3001CPU \u4f7f\u7528\u7387\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306f\u91cd\u8981\u3067\u3059\uff01"]}),"\n",(0,i.jsx)(n.h4,{id:"\u76ee\u6a19\u3092\u628a\u63e1\u3057\u6e2c\u5b9a\u3057\u307e\u3057\u3087\u3046",children:"\u76ee\u6a19\u3092\u628a\u63e1\u3057\u3001\u6e2c\u5b9a\u3057\u307e\u3057\u3087\u3046\uff01"}),"\n",(0,i.jsx)(n.p,{children:"\u91cd\u8981\u306a\u30c8\u30c3\u30d7\u30ec\u30d9\u30eb\u306e KPI \u3092\u7279\u5b9a\u3057\u305f\u3089\u3001\u6b21\u306f\u305d\u308c\u3089\u3092\u81ea\u52d5\u7684\u306b\u8ffd\u8de1\u30fb\u6e2c\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u78ba\u7acb\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u6210\u529f\u306e\u91cd\u8981\u306a\u8981\u56e0\u306f\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e\u904b\u7528\u3092\u76e3\u8996\u3059\u308b\u306e\u3068\u540c\u3058\u30b7\u30b9\u30c6\u30e0\u3067\u3053\u308c\u3092\u884c\u3046\u3053\u3068\u3067\u3059\u3002e\u30b3\u30de\u30fc\u30b9\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e\u4f8b\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3053\u3068\u304c\u8003\u3048\u3089\u308c\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u58f2\u4e0a\u30c7\u30fc\u30bf\u3092",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Time_series",children:(0,i.jsx)(n.em,{children:"\u6642\u7cfb\u5217"})}),"\u3068\u3057\u3066\u516c\u958b\u3059\u308b"]}),"\n",(0,i.jsx)(n.li,{children:"\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u540c\u3058\u30b7\u30b9\u30c6\u30e0\u3067\u8ffd\u8de1\u3059\u308b"}),"\n",(0,i.jsx)(n.li,{children:"\u9867\u5ba2\u304c\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u306b\u6ede\u5728\u3059\u308b\u6642\u9593\u3092\u6e2c\u5b9a\u3057\u3001\uff08\u518d\u5ea6\uff09\u3053\u306e\u30c7\u30fc\u30bf\u3092\u6642\u7cfb\u5217\u306b\u30d7\u30c3\u30b7\u30e5\u3059\u308b"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u307b\u3068\u3093\u3069\u306e\u9867\u5ba2\u306f\u65e2\u306b\u3053\u306e\u30c7\u30fc\u30bf\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306e\u89b3\u70b9\u304b\u3089\u898b\u308b\u3068\u5fc5\u305a\u3057\u3082\u9069\u5207\u306a\u5834\u6240\u306b\u3042\u308b\u3068\u306f\u9650\u308a\u307e\u305b\u3093\u3002\u58f2\u4e0a\u30c7\u30fc\u30bf\u3084\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u30c7\u30fc\u30bf\u306f\u3001\u901a\u5e38\u3001\u30ea\u30ec\u30fc\u30b7\u30e7\u30ca\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3084\u30d3\u30b8\u30cd\u30b9\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u5831\u544a\u30b7\u30b9\u30c6\u30e0\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u8a2a\u554f\u6642\u9593\u306e\u30c7\u30fc\u30bf\u306f\u30ed\u30b0\u304b\u3089\u62bd\u51fa\u3059\u308b\u304b\u3001",(0,i.jsx)(n.a,{href:"../tools/rum",children:"\u30ea\u30a2\u30eb\u30e6\u30fc\u30b6\u30fc\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0"}),"\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30e1\u30c8\u30ea\u30af\u30b9\u30c7\u30fc\u30bf\u306e\u5143\u306e\u5834\u6240\u3084\u5f62\u5f0f\u306b\u95a2\u308f\u3089\u305a\u3001\u305d\u308c\u306f",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Time_series",children:(0,i.jsx)(n.em,{children:"\u6642\u7cfb\u5217"})}),"\u3068\u3057\u3066\u7dad\u6301\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30d3\u30b8\u30cd\u30b9\u3001\u500b\u4eba\u3001\u5b66\u8853\u3001\u305d\u306e\u4ed6\u3069\u306e\u3088\u3046\u306a\u76ee\u7684\u3067\u3042\u308c\u3001\u3042\u306a\u305f\u306b\u3068\u3063\u3066\u6700\u3082\u91cd\u8981\u306a\u4e3b\u8981\u30e1\u30c8\u30ea\u30af\u30b9\u306f\u3059\u3079\u3066\u3001\u4ed6\u306e\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30c7\u30fc\u30bf\uff08\u6642\u306b",(0,i.jsx)(n.em,{children:"\u30b7\u30b0\u30ca\u30eb"}),"\u3084",(0,i.jsx)(n.em,{children:"\u30c6\u30ec\u30e1\u30c8\u30ea"}),"\u3068\u547c\u3070\u308c\u308b\uff09\u3068\u76f8\u95a2\u4ed8\u3051\u308b\u305f\u3081\u306b\u3001\u6642\u7cfb\u5217\u5f62\u5f0f\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"\u6642\u7cfb\u5217\u306e\u4f8b",src:s(61435).A+"",width:"2885",height:"1308"}),"\n",(0,i.jsx)(n.em,{children:"\u56f3 1\uff1a\u6642\u7cfb\u5217\u306e\u4f8b"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u4f1d\u64ad\u3068\u30c4\u30fc\u30eb\u9078\u629e",children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u4f1d\u64ad\u3068\u30c4\u30fc\u30eb\u9078\u629e"}),"\n",(0,i.jsxs)(n.p,{children:["\u30c4\u30fc\u30eb\u306e\u9078\u629e\u306f\u91cd\u8981\u3067\u3001\u554f\u984c\u306e\u904b\u7528\u3068\u4fee\u6b63\u65b9\u6cd5\u306b\u5927\u304d\u306a\u9055\u3044\u3092\u3082\u305f\u3089\u3057\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u6700\u9069\u3067\u306a\u3044\u30c4\u30fc\u30eb\u3092\u9078\u3076\u3088\u308a\u3082\u60aa\u3044\u306e\u306f\u3001\u3059\u3079\u3066\u306e\u57fa\u672c\u7684\u306a\u30b7\u30b0\u30ca\u30eb\u30bf\u30a4\u30d7\u306b\u5bfe\u3057\u3066\u30c4\u30fc\u30eb\u3092\u9078\u3076\u3053\u3068\u3067\u3059\u3002\u4f8b\u3048\u3070\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304b\u3089\u57fa\u672c\u7684\u306a",(0,i.jsx)(n.a,{href:"../signals/logs",children:"\u30ed\u30b0"}),"\u3092\u53ce\u96c6\u3057\u3066\u3082\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30c8\u30ec\u30fc\u30b9\u304c\u6b20\u3051\u3066\u3044\u308b\u3068\u3001\u30ae\u30e3\u30c3\u30d7\u304c\u751f\u3058\u307e\u3059\u3002\u305d\u306e\u7d50\u679c\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u4f53\u9a13\u5168\u4f53\u306e\u4e00\u8cab\u6027\u306e\u306a\u3044\u898b\u65b9\u306b\u306a\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306e\u73fe\u4ee3\u7684\u306a\u30a2\u30d7\u30ed\u30fc\u30c1\u306f\u3059\u3079\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30c8\u30ec\u30fc\u30b9\u3067\u300c\u70b9\u3068\u70b9\u3092\u7d50\u3076\u300d\u3053\u3068\u306b\u4f9d\u5b58\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5065\u5168\u6027\u3068\u904b\u7528\u306e\u5b8c\u5168\u306a\u5168\u4f53\u50cf\u3092\u5f97\u308b\u306b\u306f\u3001",(0,i.jsx)(n.a,{href:"../signals/logs",children:"\u30ed\u30b0"}),"\u3001",(0,i.jsx)(n.a,{href:"../signals/metrics",children:"\u30e1\u30c8\u30ea\u30af\u30b9"}),"\u3001",(0,i.jsx)(n.a,{href:"../signals/traces",children:"\u30c8\u30ec\u30fc\u30b9"}),"\u3092\u53ce\u96c6\u3057\u3001\u76f8\u95a2\u95a2\u4fc2\u3001\u5206\u6790\u3001",(0,i.jsx)(n.a,{href:"../signals/anomalies",children:"\u7570\u5e38\u691c\u51fa"}),"\u3001",(0,i.jsx)(n.a,{href:"../tools/dashboards",children:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"}),"\u3001",(0,i.jsx)(n.a,{href:"../tools/alarms",children:"\u30a2\u30e9\u30fc\u30e0"}),"\u306a\u3069\u3092\u5b9f\u884c\u3059\u308b\u30c4\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u4e00\u90e8\u306e\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306b\u306f\u4e0a\u8a18\u306e\u3059\u3079\u3066\u304c\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u65e2\u5b58\u306e\u30b7\u30b9\u30c6\u30e0\u3092\u88dc\u5f37\u3001\u62e1\u5f35\u3001\u307e\u305f\u306f\u4ed8\u52a0\u4fa1\u5024\u3092\u4e0e\u3048\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u3044\u305a\u308c\u306e\u5834\u5408\u3082\u3001\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u59cb\u3059\u308b\u969b\u306b\u306f\u3001\u30c4\u30fc\u30eb\u306e\u76f8\u4e92\u904b\u7528\u6027\u3068\u62e1\u5f35\u6027\u304c\u91cd\u8981\u306a\u8003\u616e\u4e8b\u9805\u3068\u306a\u308a\u307e\u3059\u3002"})}),"\n",(0,i.jsx)(n.h4,{id:"\u3059\u3079\u3066\u306e\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306f\u7570\u306a\u308a\u307e\u3059\u304c\u5171\u901a\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u8fc5\u901f\u306a\u7d50\u679c\u304c\u5f97\u3089\u308c\u307e\u3059",children:"\u3059\u3079\u3066\u306e\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306f\u7570\u306a\u308a\u307e\u3059\u304c\u3001\u5171\u901a\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u8fc5\u901f\u306a\u7d50\u679c\u304c\u5f97\u3089\u308c\u307e\u3059"}),"\n",(0,i.jsx)(n.p,{children:"\u3059\u3079\u3066\u306e\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3067\u5171\u901a\u306e\u30c4\u30fc\u30eb\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306b\u306f\u3001\u904b\u7528\u4e0a\u306e\u6469\u64e6\u3084\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u6e1b\u3089\u3059\u306a\u3069\u306e\u8ffd\u52a0\u7684\u306a\u5229\u70b9\u304c\u3042\u308a\u3001\u4e00\u822c\u7684\u306b\u306f\u30c4\u30fc\u30eb\u3084\u30d9\u30f3\u30c0\u30fc\u306e\u6570\u3092\u6e1b\u3089\u3059\u3088\u3046\u52aa\u3081\u308b\u3079\u304d\u3067\u3059\u3002\n\u305d\u3046\u3059\u308b\u3053\u3068\u3067\u3001\u65e2\u5b58\u306e\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u65b0\u3057\u3044\u74b0\u5883\u3084\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306b\u8fc5\u901f\u306b\u5c55\u958b\u3067\u304d\u3001\u554f\u984c\u304c\u767a\u751f\u3057\u305f\u969b\u306b\u3082\u7d20\u65e9\u304f\u89e3\u6c7a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30c4\u30fc\u30eb\u306f\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e\u3042\u3089\u3086\u308b\u5c64\uff08\u57fa\u672c\u7684\u306a\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3001\u304a\u3088\u3073\u305d\u306e\u9593\u306e\u3059\u3079\u3066\uff09\u3092\u89b3\u5bdf\u3067\u304d\u308b\u307b\u3069\u5e45\u5e83\u3044\u3082\u306e\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u5358\u4e00\u306e\u30c4\u30fc\u30eb\u3067\u306f\u5bfe\u5fdc\u3067\u304d\u306a\u3044\u5834\u5408\u3001\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306f\u3001\u30aa\u30fc\u30d7\u30f3\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9\u3067\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002\n\u3053\u308c\u306b\u3088\u308a\u3001\u6700\u3082\u5e83\u7bc4\u306a\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u7d71\u5408\u306e\u53ef\u80fd\u6027\u304c\u5f97\u3089\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u65e2\u5b58\u306e\u30c4\u30fc\u30eb\u3068\u30d7\u30ed\u30bb\u30b9\u3068\u306e\u7d71\u5408",children:"\u65e2\u5b58\u306e\u30c4\u30fc\u30eb\u3068\u30d7\u30ed\u30bb\u30b9\u3068\u306e\u7d71\u5408"}),"\n",(0,i.jsx)(n.p,{children:"\u8eca\u8f2a\u306e\u518d\u767a\u660e\u306f\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\uff01\u300c\u5186\u5f62\u300d\u306f\u65e2\u306b\u7d20\u6674\u3089\u3057\u3044\u5f62\u72b6\u3067\u3042\u308a\u3001\u79c1\u305f\u3061\u306f\u5e38\u306b\u5354\u8abf\u7684\u3067\u30aa\u30fc\u30d7\u30f3\u306a\u30b7\u30b9\u30c6\u30e0\u3092\u69cb\u7bc9\u3059\u3079\u304d\u3067\u3042\u308a\u3001\u30c7\u30fc\u30bf\u30b5\u30a4\u30ed\u3092\u4f5c\u308b\u3079\u304d\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u65e2\u5b58\u306e ID \u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\uff08\u4f8b\uff1aActive Directory\u3001SAML \u30d9\u30fc\u30b9\u306e IdP\uff09\u3068\u7d71\u5408\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u65e2\u5b58\u306e IT \u30c8\u30e9\u30d6\u30eb\u8ffd\u8de1\u30b7\u30b9\u30c6\u30e0\uff08\u4f8b\uff1aJIRA\u3001ServiceNow\uff09\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u305d\u308c\u3068\u7d71\u5408\u3057\u3066\u554f\u984c\u304c\u767a\u751f\u3057\u305f\u3068\u304d\u306b\u8fc5\u901f\u306b\u7ba1\u7406\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u65e2\u5b58\u306e\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u7ba1\u7406\u3068\u30a8\u30b9\u30ab\u30ec\u30fc\u30b7\u30e7\u30f3\u30c4\u30fc\u30eb\uff08\u4f8b\uff1aPagerDuty\u3001OpsGenie\uff09\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u305d\u308c\u3089\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\uff01"}),"\n",(0,i.jsxs)(n.li,{children:["Ansible\u3001SaltStack\u3001CloudFormation\u3001TerraForm\u3001CDK \u306a\u3069\u306e Infrastructure as Code \u30c4\u30fc\u30eb\u306f\u3059\u3079\u3066\u512a\u308c\u305f\u30c4\u30fc\u30eb\u3067\u3059\u3002\u3053\u308c\u3089\u3092\u4f7f\u7528\u3057\u3066\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u3092\u4ed6\u306e\u3059\u3079\u3066\u3068\u540c\u69d8\u306b\u7ba1\u7406\u3057\u3001\u73fe\u5728\u4f7f\u7528\u3057\u3066\u3044\u308b\u540c\u3058 Infrastructure as Code \u30c4\u30fc\u30eb\u3067\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3057\u3066\u304f\u3060\u3055\u3044\uff08",(0,i.jsx)(n.a,{href:"#include-observability-from-day-one",children:"Day One \u304b\u3089\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u3092\u542b\u3081\u308b"})," \u3092\u53c2\u7167\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u81ea\u52d5\u5316\u3068\u6a5f\u68b0\u5b66\u7fd2\u306e\u6d3b\u7528",children:"\u81ea\u52d5\u5316\u3068\u6a5f\u68b0\u5b66\u7fd2\u306e\u6d3b\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u306f\u30d1\u30bf\u30fc\u30f3\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u5f97\u610f\u3067\u3001\u30c7\u30fc\u30bf\u304c\u30d1\u30bf\u30fc\u30f3\u306b\u5f93\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u3082\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff01 \u6570\u767e\u3001\u6570\u5343\u3001\u3042\u308b\u3044\u306f\u6570\u767e\u4e07\u306e\u30c7\u30fc\u30bf\u30dd\u30a4\u30f3\u30c8\u3092\u76e3\u8996\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3001\u305d\u308c\u305e\u308c\u306e\u6b63\u5e38\u306a\u95be\u5024\u3092\u7406\u89e3\u3059\u308b\u3053\u3068\u306f\u4e0d\u53ef\u80fd\u3067\u3059\u3002\u3057\u304b\u3057\u3001\u591a\u304f\u306e\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306b\u306f\u3001\u30c7\u30fc\u30bf\u306e\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u9762\u5012\u306a\u4f5c\u696d\u3092\u7ba1\u7406\u3059\u308b\u7570\u5e38\u691c\u51fa\u3084\u6a5f\u68b0\u5b66\u7fd2\u306e\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u308c\u3092\u300c\u6b63\u5e38\u306a\u72b6\u614b\u3092\u77e5\u308b\u300d\u3068\u547c\u3093\u3067\u3044\u307e\u3059\u3002\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u5fb9\u5e95\u7684\u306b\u8ca0\u8377\u30c6\u30b9\u30c8\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u308c\u3089\u306e\u5065\u5168\u306a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u3059\u3067\u306b\u628a\u63e1\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u8907\u96d1\u306a\u5206\u6563\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u3059\u3079\u3066\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u3092\u4f5c\u6210\u3059\u308b\u306e\u306f\u6271\u3044\u306b\u304f\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3053\u3067\u3001\u7570\u5e38\u691c\u51fa\u3001\u81ea\u52d5\u5316\u3001\u6a5f\u68b0\u5b66\u7fd2\u304c\u975e\u5e38\u306b\u4fa1\u5024\u3092\u767a\u63ee\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5065\u5168\u6027\u306e\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u8a2d\u5b9a\u3068\u30a2\u30e9\u30fc\u30c8\u901a\u77e5\u3092\u4ee3\u884c\u3059\u308b\u30c4\u30fc\u30eb\u3092\u6d3b\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u76ee\u6a19\u306b\u96c6\u4e2d\u3057\u3001",(0,i.jsx)(n.a,{href:"#monitor-what-matters",children:"\u91cd\u8981\u306a\u3082\u306e\u3092\u76e3\u8996\u3059\u308b"}),"\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e\u3059\u3079\u3066\u306e\u5c64\u304b\u3089\u30c6\u30ec\u30e1\u30c8\u30ea\u3092\u53ce\u96c6\u3059\u308b",children:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e\u3059\u3079\u3066\u306e\u5c64\u304b\u3089\u30c6\u30ec\u30e1\u30c8\u30ea\u3092\u53ce\u96c6\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u5358\u72ec\u3067\u5b58\u5728\u3059\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u3001\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u30b5\u30fc\u30d3\u30b9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3001SaaS \u30d1\u30fc\u30c8\u30ca\u30fc\u3001\u305d\u3057\u3066\u3042\u306a\u305f\u306e\u7ba1\u7406\u4e0b\u306b\u3042\u308b\u3082\u306e\u3082\u305d\u3046\u3067\u306a\u3044\u3082\u306e\u3082\u542b\u3081\u3001\u4ed6\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u306e\u76f8\u4e92\u4f5c\u7528\u304c\u3059\u3079\u3066\u7d50\u679c\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u5168\u4f53\u3092\u5305\u62ec\u7684\u306b\u628a\u63e1\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u7d71\u5408\u306b\u7126\u70b9\u3092\u5f53\u3066\u308b",children:"\u7d71\u5408\u306b\u7126\u70b9\u3092\u5f53\u3066\u308b"}),"\n",(0,i.jsx)(n.p,{children:"\u8a08\u88c5\u3059\u308b\u9818\u57df\u3092 1 \u3064\u9078\u3076\u3068\u3059\u308c\u3070\u3001\u9593\u9055\u3044\u306a\u304f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u9593\u306e\u7d71\u5408\u306b\u306a\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306e\u529b\u304c\u6700\u3082\u9855\u8457\u306b\u73fe\u308c\u308b\u90e8\u5206\u3067\u3059\u3002\u539f\u5247\u3068\u3057\u3066\u3001\u3042\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084\u30b5\u30fc\u30d3\u30b9\u304c\u5225\u306e\u3082\u306e\u3092\u547c\u3073\u51fa\u3059\u305f\u3073\u306b\u3001\u305d\u306e\u547c\u3073\u51fa\u3057\u306b\u306f\u5c11\u306a\u304f\u3068\u3082\u4ee5\u4e0b\u306e\u30c7\u30fc\u30bf\u30dd\u30a4\u30f3\u30c8\u304c\u6e2c\u5b9a\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u6240\u8981\u6642\u9593"}),"\n",(0,i.jsx)(n.li,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u30b9\u30c6\u30fc\u30bf\u30b9"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u305d\u3057\u3066\u3001\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u304c\u5fc5\u8981\u3068\u3059\u308b\u4e00\u8cab\u6027\u306e\u3042\u308b\u5168\u4f53\u7684\u306a\u30d3\u30e5\u30fc\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30c1\u30a7\u30fc\u30f3\u5168\u4f53\u306e",(0,i.jsx)(n.a,{href:"../signals/traces",children:"\u5358\u4e00\u306e\u4e00\u610f\u306a\u8b58\u5225\u5b50"}),"\u3092\u53ce\u96c6\u3055\u308c\u305f\u30b7\u30b0\u30ca\u30eb\u306b\u542b\u3081\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u5fd8\u308c\u305a\u306b",children:"\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u5fd8\u308c\u305a\u306b"}),"\n",(0,i.jsx)(n.p,{children:"\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e\u5b8c\u5168\u306a\u628a\u63e1\u306b\u306f\u3001\u3059\u3079\u3066\u306e\u5c64\u3092\u7406\u89e3\u3059\u308b\u3053\u3068\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306e\u4f53\u9a13\u3082\u542b\u307e\u308c\u307e\u3059\u3002\n\u76ee\u6a19\u304c\u4e0d\u5341\u5206\u306a\u30e6\u30fc\u30b6\u30fc\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u306b\u3088\u3063\u3066\u30ea\u30b9\u30af\u306b\u3055\u3089\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u6e2c\u5b9a\u3001\u5b9a\u91cf\u5316\u3001\u7406\u89e3\u3059\u308b\u3053\u3068\u306f\u3001\u30c7\u30a3\u30b9\u30af\u7a7a\u304d\u5bb9\u91cf\u3084 CPU \u4f7f\u7528\u7387\u306e\u76e3\u8996\u3068\u540c\u69d8\u306b\u91cd\u8981\u3067\u3059\u3002\u3080\u3057\u308d\u3001\u3088\u308a\u91cd\u8981\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304c\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u3068\u76f4\u63a5\u3084\u308a\u53d6\u308a\u3059\u308b\u3082\u306e\uff08\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3084\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3068\u3057\u3066\u63d0\u4f9b\u3055\u308c\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306a\u3069\uff09\u3067\u3042\u308b\u5834\u5408\u3001",(0,i.jsx)(n.a,{href:"../tools/rum",children:"\u30ea\u30a2\u30eb\u30e6\u30fc\u30b6\u30fc\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0"})," \u306f\u3001\u30e6\u30fc\u30b6\u30fc\u3078\u306e\u300c\u30e9\u30b9\u30c8\u30de\u30a4\u30eb\u300d\u914d\u4fe1\u3060\u3051\u3067\u306a\u304f\u3001\u5b9f\u969b\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3069\u306e\u3088\u3046\u306b\u4f53\u9a13\u3057\u3066\u3044\u308b\u304b\u3092\u76e3\u8996\u3057\u307e\u3059\u3002\n\u7d50\u5c40\u306e\u3068\u3053\u308d\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30b5\u30fc\u30d3\u30b9\u3092\u5b9f\u969b\u306b\u5229\u7528\u3067\u304d\u306a\u3051\u308c\u3070\u3001\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306e\u53d6\u308a\u7d44\u307f\u306f\u610f\u5473\u304c\u3042\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30c7\u30fc\u30bf\u306f\u529b\u306a\u308a\u3067\u3059\u304c\u7d30\u304b\u3044\u3053\u3068\u306b\u3053\u3060\u308f\u308a\u3059\u304e\u306a\u3044\u3067\u304f\u3060\u3055\u3044",children:"\u30c7\u30fc\u30bf\u306f\u529b\u306a\u308a\u3067\u3059\u304c\u3001\u7d30\u304b\u3044\u3053\u3068\u306b\u3053\u3060\u308f\u308a\u3059\u304e\u306a\u3044\u3067\u304f\u3060\u3055\u3044"}),"\n",(0,i.jsxs)(n.p,{children:["\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u898f\u6a21\u306b\u3088\u3063\u3066\u306f\u3001\u30b7\u30b0\u30ca\u30eb\u3092\u53ce\u96c6\u3059\u3079\u304d\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u6570\u304c\u975e\u5e38\u306b\u591a\u304f\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u308c\u306f\u91cd\u8981\u3067\u6709\u76ca\u306a\u3053\u3068\u3067\u3059\u304c\u3001\u52aa\u529b\u306b\u5bfe\u3059\u308b\u898b\u8fd4\u308a\u304c\u6e1b\u5c11\u3059\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306f",(0,i.jsx)(n.a,{href:"#monitor-what-matters",children:"\u91cd\u8981\u306a\u3082\u306e\u3092\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3059\u308b"}),"\u3053\u3068\u304b\u3089\u59cb\u3081\u3001\u3053\u308c\u3092\u91cd\u8981\u306a\u7d71\u5408\u3068\u91cd\u8981\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u65b9\u6cd5\u3068\u3057\u3066\u4f7f\u7528\u3057\u3001\u9069\u5207\u306a\u8a73\u7d30\u306b\u7126\u70b9\u3092\u5f53\u3066\u308b\u3053\u3068\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"day-one-\u304b\u3089\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u3092\u7d44\u307f\u8fbc\u3080",children:"Day One \u304b\u3089\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u3092\u7d44\u307f\u8fbc\u3080"}),"\n",(0,i.jsx)(n.p,{children:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3068\u540c\u69d8\u306b\u3001\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306f\u958b\u767a\u3084\u904b\u7528\u306e\u5f8c\u4ed8\u3051\u3067\u3042\u3063\u3066\u306f\u3044\u3051\u307e\u305b\u3093\u3002\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306f\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3068\u540c\u3058\u3088\u3046\u306b\u3001\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u3092\u8a08\u753b\u306e\u65e9\u3044\u6bb5\u968e\u3067\u53d6\u308a\u5165\u308c\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u4eba\u3005\u304c\u4f5c\u696d\u3059\u308b\u305f\u3081\u306e\u30e2\u30c7\u30eb\u304c\u4f5c\u6210\u3055\u308c\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4e0d\u900f\u660e\u306a\u90e8\u5206\u304c\u6e1b\u5c11\u3057\u307e\u3059\u3002\u4e3b\u8981\u306a\u958b\u767a\u4f5c\u696d\u304c\u5b8c\u4e86\u3057\u305f\u5f8c\u306b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30c8\u30ec\u30fc\u30b7\u30f3\u30b0\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u81ea\u52d5\u8a08\u88c5\u3092\u4f7f\u7528\u3057\u3066\u3082\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002\u305d\u306e\u52aa\u529b\u306f\u5927\u304d\u306a\u898b\u8fd4\u308a\u3092\u3082\u305f\u3089\u3057\u307e\u3059\uff01\u3057\u304b\u3057\u3001\u958b\u767a\u30b5\u30a4\u30af\u30eb\u306e\u5f8c\u534a\u3067\u3053\u308c\u3092\u884c\u3046\u3068\u3001\u4e00\u90e8\u306e\u4f5c\u696d\u3092\u3084\u308a\u76f4\u3059\u5fc5\u8981\u304c\u751f\u3058\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f8c\u304b\u3089\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306b\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u3092\u8ffd\u52a0\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u305d\u308c\u3092\u4f7f\u7528\u3057\u3066\u4f5c\u696d\u3092",(0,i.jsx)(n.em,{children:"\u52a0\u901f"}),"\u3055\u305b\u307e\u3057\u3087\u3046\u3002\u9069\u5207\u306a",(0,i.jsx)(n.a,{href:"../signals/logs",children:"\u30ed\u30b0"}),"\u3001",(0,i.jsx)(n.a,{href:"../signals/metrics",children:"\u30e1\u30c8\u30ea\u30af\u30b9"}),"\u3001",(0,i.jsx)(n.a,{href:"../signals/traces",children:"\u30c8\u30ec\u30fc\u30b9"}),"\u306e\u53ce\u96c6\u306b\u3088\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u304c\u8fc5\u901f\u5316\u3055\u308c\u3001\u512a\u308c\u305f\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u304c\u4fc3\u9032\u3055\u308c\u3001\u5c06\u6765\u7684\u306a\u8fc5\u901f\u306a\u554f\u984c\u89e3\u6c7a\u306e\u57fa\u76e4\u304c\u7bc9\u304b\u308c\u307e\u3059\u3002"]}),"\n","\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(n.p,{children:["Amazon \u3067\u306f\u3001\u9867\u5ba2\u3068\u305d\u306e\u6210\u679c\u306b\u5bfe\u3059\u308b\u57f7\u7740\u306e\u65b9\u6cd5\u3068\u3057\u3066 ",(0,i.jsx)(n.em,{children:"Working Backwards"})," \u30d7\u30ed\u30bb\u30b9\u3092\u5e83\u7bc4\u56f2\u306b\u4f7f\u7528\u3057\u3066\u304a\u308a\u3001\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306b\u53d6\u308a\u7d44\u3080\u4eba\u3005\u304c\u540c\u3058\u65b9\u6cd5\u3067\u81ea\u8eab\u306e\u76ee\u6a19\u304b\u3089\u9006\u7b97\u3057\u3066\u4f5c\u696d\u3059\u308b\u3053\u3068\u3092\u5f37\u304f\u304a\u52e7\u3081\u3057\u307e\u3059\u3002",(0,i.jsx)(n.em,{children:"Working Backwards"})," \u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001",(0,i.jsx)(n.a,{href:"https://www.allthingsdistributed.com/2006/11/working_backwards.html",children:"Werner Vogels \u306e\u30d6\u30ed\u30b0"}),"\u3067\u3054\u89a7\u3044\u305f\u3060\u3051\u307e\u3059\u3002 ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},61435:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/time_series-d1fd8b834c12869f97b606c2259a010d.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var i=s(96540);const r={},l=i.createContext(r);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);