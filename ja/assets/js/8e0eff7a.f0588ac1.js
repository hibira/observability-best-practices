"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[2823],{44761:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var o=n(74848),r=n(28453);const t={sidebar_position:1},i="\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406",c={id:"tutorial-extras/manage-docs-versions",title:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406",description:"Docusaurus \u306f\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8907\u6570\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/observability-best-practices/ja/tutorial-extras/manage-docs-versions",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/tutorial-extras/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},d={},l=[{value:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b",id:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u306e\u8ffd\u52a0",id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u306e\u8ffd\u52a0",level:2},{value:"\u65e2\u5b58\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u66f4\u65b0\u3059\u308b",id:"\u65e2\u5b58\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u66f4\u65b0\u3059\u308b",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406",children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406"}),"\n",(0,o.jsx)(s.p,{children:"Docusaurus \u306f\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u8907\u6570\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsx)(s.h2,{id:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b",children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,o.jsx)(s.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3 1.0 \u3092\u30ea\u30ea\u30fc\u30b9\u3057\u307e\u3059\uff1a"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0\n"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"docs"})," \u30d5\u30a9\u30eb\u30c0\u304c ",(0,o.jsx)(s.code,{children:"versioned_docs/version-1.0"})," \u306b\u30b3\u30d4\u30fc\u3055\u308c\u3001",(0,o.jsx)(s.code,{children:"versions.json"})," \u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(s.p,{children:"\u3053\u308c\u3067\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u306f 2 \u3064\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"1.0"})," \u306f ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/"})," \u306b\u3042\u308a\u3001\u30d0\u30fc\u30b8\u30e7\u30f3 1.0 \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u3059"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"current"})," \u306f ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/next/"})," \u306b\u3042\u308a\u3001",(0,o.jsx)(s.strong,{children:"\u4eca\u5f8c\u30ea\u30ea\u30fc\u30b9\u4e88\u5b9a\u306e\u672a\u516c\u958b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3067\u3059"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u306e\u8ffd\u52a0",children:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u306e\u8ffd\u52a0"}),"\n",(0,o.jsx)(s.p,{children:"\u30d0\u30fc\u30b8\u30e7\u30f3\u9593\u3092\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u79fb\u52d5\u3059\u308b\u305f\u3081\u306b\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"docusaurus.config.js"})," \u30d5\u30a1\u30a4\u30eb\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u4fee\u6b63\u3057\u307e\u3059\uff1a"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(s.p,{children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u304c\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30d0\u30fc\u306b\u8868\u793a\u3055\u308c\u307e\u3059\uff1a"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Docs Version Dropdown",src:n(98470).A+"",width:"370",height:"302"})}),"\n",(0,o.jsx)(s.h2,{id:"\u65e2\u5b58\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u66f4\u65b0\u3059\u308b",children:"\u65e2\u5b58\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u66f4\u65b0\u3059\u308b"}),"\n",(0,o.jsx)(s.p,{children:"\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3055\u308c\u305f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001\u305d\u308c\u305e\u308c\u306e\u30d5\u30a9\u30eb\u30c0\u5185\u3067\u7de8\u96c6\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"versioned_docs/version-1.0/hello.md"})," \u306f ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/hello"})," \u3092\u66f4\u65b0\u3057\u307e\u3059"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"docs/hello.md"})," \u306f ",(0,o.jsx)(s.code,{children:"http://localhost:3000/docs/next/hello"})," \u3092\u66f4\u65b0\u3057\u307e\u3059"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},98470:(e,s,n)=>{n.d(s,{A:()=>o});const o=n.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var o=n(96540);const r={},t=o.createContext(r);function i(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);