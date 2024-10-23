"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[8594],{69863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=t(74848),a=t(28453);const o={},r="Amazon DynamoDB",i={id:"recipes/dynamodb",title:"Amazon DynamoDB",description:"Amazon DynamoDB \u306f\u3001\u3042\u3089\u3086\u308b\u898f\u6a21\u3067\u4e00\u6841\u30df\u30ea\u79d2\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u63d0\u4f9b\u3059\u308b\u30ad\u30fc\u30d0\u30ea\u30e5\u30fc\u304a\u3088\u3073\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/recipes/dynamodb.md",sourceDirName:"recipes",slug:"/recipes/dynamodb",permalink:"/observability-best-practices/ja/recipes/dynamodb",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/dynamodb.md",tags:[],version:"current",frontMatter:{},sidebar:"recipes",previous:{title:"Amazon Relational Database Service",permalink:"/observability-best-practices/ja/recipes/rds"},next:{title:"Amazon Managed Streaming for Apache Kafka",permalink:"/observability-best-practices/ja/recipes/msk"}},c={},l=[];function d(e){const n={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"amazon-dynamodb",children:"Amazon DynamoDB"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://aws.amazon.com/jp/dynamodb/",children:"Amazon DynamoDB"})," \u306f\u3001\u3042\u3089\u3086\u308b\u898f\u6a21\u3067\u4e00\u6841\u30df\u30ea\u79d2\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u63d0\u4f9b\u3059\u308b\u30ad\u30fc\u30d0\u30ea\u30e5\u30fc\u304a\u3088\u3073\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u3059\u3002\n\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u898f\u6a21\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5411\u3051\u306b\u3001\u5b8c\u5168\u30de\u30cd\u30fc\u30b8\u30c9\u578b\u3001\u30de\u30eb\u30c1\u30ea\u30fc\u30b8\u30e7\u30f3\u3001\u30de\u30eb\u30c1\u30a2\u30af\u30c6\u30a3\u30d6\u3067\u8010\u4e45\u6027\u306e\u3042\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u3042\u308a\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3001\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3068\u30ea\u30b9\u30c8\u30a2\u3001\u30a4\u30f3\u30e1\u30e2\u30ea\u30ad\u30e3\u30c3\u30b7\u30f3\u30b0\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u30ec\u30b7\u30d4\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://aws.amazon.com/jp/blogs/news/monitoring-amazon-dynamodb-for-operational-awareness/",children:"\u904b\u7528\u8a8d\u8b58\u306e\u305f\u3081\u306e Amazon DynamoDB \u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://search-ddb.aesworkshops.com/",children:"Amazon Elasticsearch Service \u3092\u4f7f\u7528\u3057\u305f DynamoDB \u30c7\u30fc\u30bf\u306e\u691c\u7d22"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://observability.workshop.aws/en/contributorinsights/explore",children:"DynamoDB Contributor Insights"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);