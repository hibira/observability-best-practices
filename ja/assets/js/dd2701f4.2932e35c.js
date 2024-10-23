"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[9905],{84439:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=e(74848),i=e(28453);const r={},c="AWS \u30cd\u30a4\u30c6\u30a3\u30d6\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3057\u305f\u30af\u30ed\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0",l={id:"patterns/multiaccount",title:"AWS \u30cd\u30a4\u30c6\u30a3\u30d6\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3057\u305f\u30af\u30ed\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0",description:"\u73fe\u4ee3\u306e\u30af\u30e9\u30a6\u30c9\u74b0\u5883\u306e\u8907\u96d1\u3055\u304c\u5897\u3059\u4e2d\u3001\u8907\u6570\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u7ba1\u7406\u3068\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306f\u3001\u52b9\u7387\u7684\u306a\u30af\u30e9\u30a6\u30c9\u904b\u7528\u306e\u91cd\u8981\u306a\u5074\u9762\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002AWS \u306e\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306f\u3001\u8907\u6570\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u307e\u305f\u304c\u308b\u30ea\u30bd\u30fc\u30b9\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3068\u7ba1\u7406\u3092\u4e00\u5143\u5316\u3059\u308b\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u63d0\u4f9b\u3057\u3001\u7d44\u7e54\u304c\u3088\u308a\u826f\u3044\u53ef\u8996\u6027\u3092\u7372\u5f97\u3057\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u5f37\u5316\u3057\u3001\u904b\u7528\u3092\u52b9\u7387\u5316\u3059\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/patterns/multiaccount.md",sourceDirName:"patterns",slug:"/patterns/multiaccount",permalink:"/observability-best-practices/ja/patterns/multiaccount",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/patterns/multiaccount.md",tags:[],version:"current",frontMatter:{},sidebar:"patterns",previous:{title:"Lambda \u306e\u30ed\u30b0\u8a18\u9332",permalink:"/observability-best-practices/ja/patterns/lambdalogging"},next:{title:"AWS \u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3057\u305f\u30af\u30ed\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0",permalink:"/observability-best-practices/ja/patterns/multiaccountoss"}},o={},a=[{value:"\u7d71\u8a08\uff1a",id:"\u7d71\u8a08",level:2},{value:"AWS \u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u30e1\u30ea\u30c3\u30c8\uff1a",id:"aws-\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u30e1\u30ea\u30c3\u30c8",level:2},{value:"AWS \u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u30c7\u30e1\u30ea\u30c3\u30c8\uff1a",id:"aws-\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u30c7\u30e1\u30ea\u30c3\u30c8",level:2},{value:"\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u305f\u3081\u306e\u4e3b\u8981\u306a AWS \u30b5\u30fc\u30d3\u30b9\u3068\u30c4\u30fc\u30eb\uff1a",id:"\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u305f\u3081\u306e\u4e3b\u8981\u306a-aws-\u30b5\u30fc\u30d3\u30b9\u3068\u30c4\u30fc\u30eb",level:2},{value:"\u53c2\u8003\u6587\u732e\uff1a",id:"\u53c2\u8003\u6587\u732e",level:2}];function d(s){const n={a:"a",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"aws-\u30cd\u30a4\u30c6\u30a3\u30d6\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3057\u305f\u30af\u30ed\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0",children:"AWS \u30cd\u30a4\u30c6\u30a3\u30d6\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3057\u305f\u30af\u30ed\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0"}),"\n",(0,t.jsx)(n.p,{children:"\u73fe\u4ee3\u306e\u30af\u30e9\u30a6\u30c9\u74b0\u5883\u306e\u8907\u96d1\u3055\u304c\u5897\u3059\u4e2d\u3001\u8907\u6570\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u7ba1\u7406\u3068\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306f\u3001\u52b9\u7387\u7684\u306a\u30af\u30e9\u30a6\u30c9\u904b\u7528\u306e\u91cd\u8981\u306a\u5074\u9762\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002AWS \u306e\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306f\u3001\u8907\u6570\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u307e\u305f\u304c\u308b\u30ea\u30bd\u30fc\u30b9\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3068\u7ba1\u7406\u3092\u4e00\u5143\u5316\u3059\u308b\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u63d0\u4f9b\u3057\u3001\u7d44\u7e54\u304c\u3088\u308a\u826f\u3044\u53ef\u8996\u6027\u3092\u7372\u5f97\u3057\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u5f37\u5316\u3057\u3001\u904b\u7528\u3092\u52b9\u7387\u5316\u3059\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4eca\u65e5\u306e\u6025\u901f\u306b\u9032\u5316\u3059\u308b\u30c7\u30b8\u30bf\u30eb\u74b0\u5883\u306b\u304a\u3044\u3066\u3001\u7d44\u7e54\u306f\u7af6\u4e89\u529b\u3092\u7dad\u6301\u3057\u6210\u9577\u3092\u4fc3\u9032\u3059\u308b\u305f\u3081\u306b\u5e38\u306b\u5727\u529b\u306b\u3055\u3089\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30af\u30e9\u30a6\u30c9\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u306f\u3001\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u3001\u4fca\u654f\u6027\u3001\u30b3\u30b9\u30c8\u52b9\u7387\u6027\u3092\u63d0\u4f9b\u3059\u308b\u30b2\u30fc\u30e0\u30c1\u30a7\u30f3\u30b8\u30e3\u30fc\u3068\u3057\u3066\u767b\u5834\u3057\u307e\u3057\u305f\u3002\u3057\u304b\u3057\u3001\u30af\u30e9\u30a6\u30c9\u306e\u63a1\u7528\u304c\u52a0\u901f\u3057\u7d9a\u3051\u308b\u4e2d\u3001\u3053\u308c\u3089\u306e\u74b0\u5883\u306e\u7ba1\u7406\u3068\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u8907\u96d1\u3055\u3082\u6307\u6570\u95a2\u6570\u7684\u306b\u5897\u52a0\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u3053\u3067 AWS \u306e\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u304c\u91cd\u8981\u306a\u5f79\u5272\u3092\u679c\u305f\u3057\u3001\u8907\u6570\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u307e\u305f\u304c\u308b\u30ea\u30bd\u30fc\u30b9\u3092\u52b9\u7387\u7684\u306b\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u5f37\u529b\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"AWS \u306e\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306f\u3001\u7d44\u7e54\u306e\u30af\u30e9\u30a6\u30c9\u904b\u7528\u3092\u5927\u5e45\u306b\u5f37\u5316\u3067\u304d\u308b\u69d8\u3005\u306a\u5229\u70b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u4e3b\u306a\u5229\u70b9\u306e 1 \u3064\u306f\u3001\u8907\u6570\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u304b\u3089\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30c7\u30fc\u30bf\u3092\u5358\u4e00\u306e\u30d3\u30e5\u30fc\u306b\u7d71\u5408\u3059\u308b\u4e00\u5143\u5316\u3055\u308c\u305f\u53ef\u8996\u6027\u3067\u3059\u3002\u3053\u306e\u30af\u30e9\u30a6\u30c9\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u306e\u5305\u62ec\u7684\u306a\u30d3\u30e5\u30fc\u306b\u3088\u308a\u3001\u7d44\u7e54\u306f\u30ea\u30bd\u30fc\u30b9\u306e\u5168\u4f53\u50cf\u3092\u628a\u63e1\u3067\u304d\u3001\u3088\u308a\u826f\u3044\u610f\u601d\u6c7a\u5b9a\u3068\u30ea\u30bd\u30fc\u30b9\u306e\u6700\u9069\u5316\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002\u3055\u3089\u306b\u3001AWS \u306e\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306f\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3068\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u306e\u5411\u4e0a\u306b\u91cd\u8981\u306a\u5f79\u5272\u3092\u679c\u305f\u3057\u307e\u3059\u3002\u4e00\u8cab\u3057\u305f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u3092\u9069\u7528\u3057\u3001\u3059\u3079\u3066\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u308f\u305f\u308b\u6f5c\u5728\u7684\u306a\u8105\u5a01\u306e\u691c\u51fa\u3092\u53ef\u80fd\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u7d44\u7e54\u306f\u8106\u5f31\u6027\u306b\u7a4d\u6975\u7684\u306b\u5bfe\u51e6\u3057\u3001\u30ea\u30b9\u30af\u3092\u8efd\u6e1b\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u8981\u4ef6\u3092\u52b9\u679c\u7684\u306b\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3057\u9075\u5b88\u3059\u308b\u3053\u3068\u3067\u3001\u7d44\u7e54\u304c\u898f\u5236\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3084\u696d\u754c\u6a19\u6e96\u5185\u3067\u904b\u55b6\u3055\u308c\u308b\u3053\u3068\u3092\u78ba\u4fdd\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7d71\u8a08",children:"\u7d71\u8a08\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"Gartner \u306b\u3088\u308b\u3068\u30012025 \u5e74\u307e\u3067\u306b\u65b0\u3057\u3044\u30c7\u30b8\u30bf\u30eb\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e 95% \u4ee5\u4e0a\u304c\u30af\u30e9\u30a6\u30c9\u30cd\u30a4\u30c6\u30a3\u30d6\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u308b\u3068\u4e88\u6e2c\u3055\u308c\u3066\u304a\u308a\u3001\u5805\u7262\u306a\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u5fc5\u8981\u6027\u304c\u5f37\u8abf\u3055\u308c\u3066\u3044\u307e\u3059\u3002Cloud Conformity \u306e\u8abf\u67fb\u306b\u3088\u308b\u3068\u300125 \u4ee5\u4e0a\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3064\u7d44\u7e54\u306f\u3001\u6708\u5e73\u5747 223 \u4ef6\u306e\u9ad8\u30ea\u30b9\u30af\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30a4\u30f3\u30b7\u30c7\u30f3\u30c8\u3092\u7d4c\u9a13\u3057\u3066\u304a\u308a\u3001\u96c6\u4e2d\u76e3\u8996\u3068\u30ac\u30d0\u30ca\u30f3\u30b9\u306e\u91cd\u8981\u6027\u304c\u6d6e\u304d\u5f6b\u308a\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002Forrester Research \u306f\u3001\u52b9\u679c\u7684\u306a\u30af\u30e9\u30a6\u30c9\u30ac\u30d0\u30ca\u30f3\u30b9\u3068\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u6226\u7565\u3092\u6301\u3064\u7d44\u7e54\u306f\u3001\u904b\u7528\u30b3\u30b9\u30c8\u3092\u6700\u5927 30% \u524a\u6e1b\u3067\u304d\u308b\u3068\u63a8\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Multi account monitoring",src:e(83295).A+"",width:"968",height:"504"}),"\n",(0,t.jsx)(n.em,{children:"\u56f3 1\uff1aAWS CloudWatch \u306b\u3088\u308b\u30af\u30ed\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0"})]}),"\n",(0,t.jsx)(n.h2,{id:"aws-\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u30e1\u30ea\u30c3\u30c8",children:"AWS \u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u30e1\u30ea\u30c3\u30c8\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u4e00\u5143\u5316\u3055\u308c\u305f\u53ef\u8996\u6027"}),"\uff1a\u8907\u6570\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u304b\u3089\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30c7\u30fc\u30bf\u3092\u5358\u4e00\u306e\u753b\u9762\u306b\u7d71\u5408\u3057\u3001\u30af\u30e9\u30a6\u30c9\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u306e\u5305\u62ec\u7684\u306a\u8996\u70b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3068\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u306e\u5411\u4e0a"}),"\uff1a\u4e00\u8cab\u3057\u305f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u3092\u9069\u7528\u3057\u3001\u6f5c\u5728\u7684\u306a\u8105\u5a01\u3092\u691c\u51fa\u3057\u3001\u3059\u3079\u3066\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u3092\u78ba\u4fdd\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u30b3\u30b9\u30c8\u6700\u9069\u5316"}),"\uff1a\u672a\u4f7f\u7528\u307e\u305f\u306f\u5197\u9577\u306a\u30ea\u30bd\u30fc\u30b9\u3092\u7279\u5b9a\u3057\u3066\u6392\u9664\u3057\u3001\u30af\u30e9\u30a6\u30c9\u652f\u51fa\u3092\u6700\u9069\u5316\u3057\u3066\u7121\u99c4\u3092\u524a\u6e1b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u52b9\u7387\u5316\u3055\u308c\u305f\u904b\u7528"}),"\uff1a\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3068\u30a2\u30e9\u30fc\u30c8\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u81ea\u52d5\u5316\u3057\u3001\u624b\u52d5\u306e\u4f5c\u696d\u3092\u6e1b\u3089\u3057\u3066\u904b\u7528\u52b9\u7387\u3092\u5411\u4e0a\u3055\u305b\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3"}),"\uff1a\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u6a5f\u80fd\u3092\u640d\u306a\u3046\u3053\u3068\u306a\u304f\u3001\u65b0\u3057\u3044 AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3084\u30ea\u30bd\u30fc\u30b9\u3092\u5bb9\u6613\u306b\u30aa\u30f3\u30dc\u30fc\u30c7\u30a3\u30f3\u30b0\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"aws-\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u30c7\u30e1\u30ea\u30c3\u30c8",children:"AWS \u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u30c7\u30e1\u30ea\u30c3\u30c8\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5b9f\u88c5\u306e\u8907\u96d1\u3055"}),"\uff1a\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3068\u8a2d\u5b9a\u306f\u3001\u7279\u306b\u5927\u898f\u6a21\u306a\u74b0\u5883\u3067\u306f\u56f0\u96e3\u306a\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u30c7\u30fc\u30bf\u96c6\u7d04\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9"}),"\uff1a\u8907\u6570\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53ce\u96c6\u3057\u96c6\u7d04\u3059\u308b\u3053\u3068\u3067\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u3068\u9045\u5ef6\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u30a2\u30af\u30bb\u30b9\u7ba1\u7406"}),"\uff1a\u8907\u6570\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u307e\u305f\u304c\u308b\u30a2\u30af\u30bb\u30b9\u3068\u6a29\u9650\u306e\u7ba1\u7406\u304c\u8907\u96d1\u306b\u306a\u308a\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u3084\u3059\u304f\u306a\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u30b3\u30b9\u30c8\u3078\u306e\u5f71\u97ff"}),"\uff1a\u9069\u5207\u306b\u884c\u308f\u308c\u306a\u3044\u5834\u5408\u3001\u5305\u62ec\u7684\u306a\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u88c5\u3068\u7dad\u6301\u306b\u306f\u8ffd\u52a0\u306e\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u305f\u3081\u306e\u4e3b\u8981\u306a-aws-\u30b5\u30fc\u30d3\u30b9\u3068\u30c4\u30fc\u30eb",children:"\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u306e\u305f\u3081\u306e\u4e3b\u8981\u306a AWS \u30b5\u30fc\u30d3\u30b9\u3068\u30c4\u30fc\u30eb\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWS Organizations"}),": \u8907\u6570\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4e00\u5143\u7684\u306b\u7ba1\u7406\u30fb\u7d71\u6cbb\u3057\u3001\u7d71\u5408\u8acb\u6c42\u3001\u30dd\u30ea\u30b7\u30fc\u30d9\u30fc\u30b9\u306e\u7ba1\u7406\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4f5c\u6210\u30fb\u7ba1\u7406\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWS Config"}),": \u30ea\u30bd\u30fc\u30b9\u69cb\u6210\u3092\u7d99\u7d9a\u7684\u306b\u76e3\u8996\u30fb\u8a18\u9332\u3057\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u9593\u3067\u306e\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u76e3\u67fb\u3068\u5909\u66f4\u8ffd\u8de1\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWS CloudTrail"}),": \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3068\u904b\u7528\u76ee\u7684\u306e\u305f\u3081\u3001\u8907\u6570\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u308f\u305f\u308b API \u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3068\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u30ed\u30b0\u306b\u8a18\u9332\u3057\u3001\u76e3\u8996\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Amazon CloudWatch"}),": \u4e00\u5143\u7684\u306a\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3068\u30a2\u30e9\u30fc\u30c8\u306e\u305f\u3081\u3001\u8907\u6570\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u308f\u305f\u308b\u69d8\u3005\u306a AWS \u30ea\u30bd\u30fc\u30b9\u304b\u3089\u30e1\u30c8\u30ea\u30af\u30b9\u3001\u30ed\u30b0\u3001\u30a4\u30d9\u30f3\u30c8\u3092\u76e3\u8996\u30fb\u53ce\u96c6\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AWS Security Hub"}),": \u8907\u6570\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u308f\u305f\u308b\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u6240\u898b\u3092\u4e00\u5143\u7684\u306b\u8868\u793a\u30fb\u7ba1\u7406\u3057\u3001\u5305\u62ec\u7684\u306a\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u76e3\u8996\u3068\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u8ffd\u8de1\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u732e",children:"\u53c2\u8003\u6587\u732e\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["AWS \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\uff1a\u300c\u8907\u6570\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u300d(",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/ja_jp/solutions/latest/multi-account-monitoring/welcome.html",children:"https://docs.aws.amazon.com/ja_jp/solutions/latest/multi-account-monitoring/welcome.html"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Gartner \u30ea\u30b5\u30fc\u30c1\uff1a\u300c2023 \u5e74\u306e\u30af\u30e9\u30a6\u30c9\u63a1\u7528\u30c8\u30ec\u30f3\u30c9\u3068\u4e3b\u8981\u306a\u8003\u616e\u4e8b\u9805\u300d(",(0,t.jsx)(n.a,{href:"https://www.gartner.com/en/documents/4009858",children:"https://www.gartner.com/en/documents/4009858"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Cloud Conformity \u30ec\u30dd\u30fc\u30c8\uff1a\u300c\u30af\u30e9\u30a6\u30c9\u306b\u304a\u3051\u308b AWS \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3068\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u306e\u73fe\u72b6\u300d(",(0,t.jsx)(n.a,{href:"https://www.cloudconformity.com/knowledge-base/the-state-of-aws-security-and-compliance-in-the-cloud.html",children:"https://www.cloudconformity.com/knowledge-base/the-state-of-aws-security-and-compliance-in-the-cloud.html"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Forrester \u30ea\u30b5\u30fc\u30c1\uff1a\u300cAWS \u30af\u30e9\u30a6\u30c9\u30ac\u30d0\u30ca\u30f3\u30b9\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u7dcf\u7d4c\u6e08\u7684\u5f71\u97ff\u2122\u300d(",(0,t.jsx)(n.a,{href:"https://d1.awsstatic.com/",children:"https://d1.awsstatic.com/"})]}),"\n",(0,t.jsxs)(n.li,{children:["Audible \u304c Amazon CloudWatch \u30af\u30ed\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u91cd\u5927\u5ea6\u30c1\u30b1\u30c3\u30c8\u3092\u3088\u308a\u8fc5\u901f\u306b\u89e3\u6c7a\u3057\u305f\u65b9\u6cd5 (",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/blogs/mt/how-audible-used-amazon-cloudwatch-cross-account-observability-to-resolve-severity-tickets-faster/",children:"https://aws.amazon.com/blogs/mt/how-audible-used-amazon-cloudwatch-cross-account-observability-to-resolve-severity-tickets-faster/"}),")"]}),"\n"]})]})}function h(s={}){const{wrapper:n}={...(0,i.R)(),...s.components};return n?(0,t.jsx)(n,{...s,children:(0,t.jsx)(d,{...s})}):d(s)}},83295:(s,n,e)=>{e.d(n,{A:()=>t});const t=e.p+"assets/images/crossaccountmonitoring-cd018042792246ef2472c3629e66c0a3.png"},28453:(s,n,e)=>{e.d(n,{R:()=>c,x:()=>l});var t=e(96540);const i={},r=t.createContext(i);function c(s){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function l(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:c(s.components),t.createElement(r.Provider,{value:n},s.children)}}}]);