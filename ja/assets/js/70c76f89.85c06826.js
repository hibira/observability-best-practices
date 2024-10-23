"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[7809],{21208:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(74848),n=s(28453);const i={},r="AWS Lambda",c={id:"recipes/lambda",title:"AWS Lambda",description:"AWS Lambda \u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/recipes/lambda.md",sourceDirName:"recipes",slug:"/recipes/lambda",permalink:"/observability-best-practices/ja/recipes/lambda",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/lambda.md",tags:[],version:"current",frontMatter:{},sidebar:"recipes",previous:{title:"Amazon Elastic Container Service",permalink:"/observability-best-practices/ja/recipes/ecs"},next:{title:"\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u3068\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9",permalink:"/observability-best-practices/ja/recipes/infra"}},o={},l=[{value:"\u30ed\u30b0",id:"\u30ed\u30b0",level:2},{value:"\u30e1\u30c8\u30ea\u30af\u30b9",id:"\u30e1\u30c8\u30ea\u30af\u30b9",level:2},{value:"\u30c8\u30ec\u30fc\u30b9",id:"\u30c8\u30ec\u30fc\u30b9",level:2}];function d(e){const a={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"aws-lambda",children:"AWS Lambda"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://aws.amazon.com/jp/lambda/",children:"AWS Lambda"})," \u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\n\u30b5\u30fc\u30d0\u30fc\u306e\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3084\u7ba1\u7406\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u610f\u8b58\u3057\u305f\u30af\u30e9\u30b9\u30bf\u30fc\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u30ed\u30b8\u30c3\u30af\u306e\u4f5c\u6210\u3001\u30a4\u30d9\u30f3\u30c8\u7d71\u5408\u306e\u7dad\u6301\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u306e\u7ba1\u7406\u3092\u884c\u3046\u3053\u3068\u306a\u304f\u3001\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(a.p,{children:"\u4ee5\u4e0b\u306e\u30ec\u30b7\u30d4\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,t.jsx)(a.h2,{id:"\u30ed\u30b0",children:"\u30ed\u30b0"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://bookstore.aesworkshops.com/",children:"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c7\u30d7\u30ed\u30a4\u3068\u76e3\u8996"})}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"\u30e1\u30c8\u30ea\u30af\u30b9",children:"\u30e1\u30c8\u30ea\u30af\u30b9"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/introducing-cloudwatch-lambda-insights/",children:"CloudWatch Lambda Insights \u306e\u7d39\u4ecb"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"/observability-best-practices/ja/recipes/recipes/lambda-cw-metrics-go-amp",children:"Firehose \u3068 AWS Lambda \u3092\u4f7f\u7528\u3057\u3066 CloudWatch \u30e1\u30c8\u30ea\u30af\u30b9\u30b9\u30c8\u30ea\u30fc\u30e0\u3092 Amazon Managed Service for Prometheus \u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b"})}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"\u30c8\u30ec\u30fc\u30b9",children:"\u30c8\u30ec\u30fc\u30b9"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/auto-instrumenting-a-python-application-with-an-aws-distro-for-opentelemetry-lambda-layer/",children:"AWS Distro for OpenTelemetry Lambda \u30ec\u30a4\u30e4\u30fc\u3092\u4f7f\u7528\u3057\u305f Python \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u81ea\u52d5\u8a08\u88c5"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/tracing-aws-lambda-functions-in-aws-x-ray-with-opentelemetry/",children:"OpenTelemetry \u3092\u4f7f\u7528\u3057\u305f AWS X-Ray \u3067\u306e AWS Lambda \u95a2\u6570\u306e\u30c8\u30ec\u30fc\u30b9"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>c});var t=s(96540);const n={},i=t.createContext(n);function r(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);