"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[6119],{28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>i});var o=n(96540);const s={},c=o.createContext(s);function r(t){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(c.Provider,{value:e},t.children)}},81814:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"tools/emf","title":"\u57cb\u3081\u8fbc\u307f\u30e1\u30c8\u30ea\u30af\u30b9\u30d5\u30a9\u30fc\u30de\u30c3\u30c8","description":"CloudWatch \u57cb\u3081\u8fbc\u307f\u30e1\u30c8\u30ea\u30af\u30b9\u30d5\u30a9\u30fc\u30de\u30c3\u30c8 (EMF) \u306f\u3001\u69cb\u9020\u5316\u3055\u308c\u305f\u30ed\u30b0\u30a4\u30d9\u30f3\u30c8\u306b\u57cb\u3081\u8fbc\u307e\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u5024\u3092\u81ea\u52d5\u7684\u306b\u62bd\u51fa\u3059\u308b\u3088\u3046 CloudWatch Logs \u306b\u6307\u793a\u3059\u308b\u305f\u3081\u306e JSON \u4ed5\u69d8\u3067\u3059\u3002CloudWatch \u3092\u4f7f\u7528\u3057\u3066\u3001\u62bd\u51fa\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u5024\u306e\u30b0\u30e9\u30d5\u5316\u3084\u30a2\u30e9\u30fc\u30e0\u306e\u4f5c\u6210\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002EMF \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001CloudWatch \u30ed\u30b0\u306e\u5f62\u5f0f\u3067\u30e1\u30c8\u30ea\u30af\u30b9\u95a2\u9023\u30c7\u30fc\u30bf\u3092\u30d7\u30c3\u30b7\u30e5\u3057\u3001CloudWatch \u3067\u30e1\u30c8\u30ea\u30af\u30b9\u3068\u3057\u3066\u691c\u51fa\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tools/emf.md","sourceDirName":"tools","slug":"/tools/emf","permalink":"/observability-best-practices/ja/tools/emf","draft":false,"unlisted":false,"editUrl":"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/tools/emf.md","tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453);const r={},i="\u57cb\u3081\u8fbc\u307f\u30e1\u30c8\u30ea\u30af\u30b9\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",a={},l=[];function d(t){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,c.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u57cb\u3081\u8fbc\u307f\u30e1\u30c8\u30ea\u30af\u30b9\u30d5\u30a9\u30fc\u30de\u30c3\u30c8",children:"\u57cb\u3081\u8fbc\u307f\u30e1\u30c8\u30ea\u30af\u30b9\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"})}),"\n",(0,s.jsx)(e.p,{children:"CloudWatch \u57cb\u3081\u8fbc\u307f\u30e1\u30c8\u30ea\u30af\u30b9\u30d5\u30a9\u30fc\u30de\u30c3\u30c8 (EMF) \u306f\u3001\u69cb\u9020\u5316\u3055\u308c\u305f\u30ed\u30b0\u30a4\u30d9\u30f3\u30c8\u306b\u57cb\u3081\u8fbc\u307e\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u5024\u3092\u81ea\u52d5\u7684\u306b\u62bd\u51fa\u3059\u308b\u3088\u3046 CloudWatch Logs \u306b\u6307\u793a\u3059\u308b\u305f\u3081\u306e JSON \u4ed5\u69d8\u3067\u3059\u3002CloudWatch \u3092\u4f7f\u7528\u3057\u3066\u3001\u62bd\u51fa\u3055\u308c\u305f\u30e1\u30c8\u30ea\u30af\u30b9\u5024\u306e\u30b0\u30e9\u30d5\u5316\u3084\u30a2\u30e9\u30fc\u30e0\u306e\u4f5c\u6210\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002EMF \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001CloudWatch \u30ed\u30b0\u306e\u5f62\u5f0f\u3067\u30e1\u30c8\u30ea\u30af\u30b9\u95a2\u9023\u30c7\u30fc\u30bf\u3092\u30d7\u30c3\u30b7\u30e5\u3057\u3001CloudWatch \u3067\u30e1\u30c8\u30ea\u30af\u30b9\u3068\u3057\u3066\u691c\u51fa\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u306f EMF \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u30b5\u30f3\u30d7\u30eb\u3068 JSON \u30b9\u30ad\u30fc\u30de\u3067\u3059\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'\t{\n\t  "_aws": {\n\t    "Timestamp": 1574109732004,\n\t    "CloudWatchMetrics": [\n\t      {\n\t        "Namespace": "lambda-function-metrics",\n\t        "Dimensions": [\n\t          [\n\t            "functionVersion"\n\t          ]\n\t        ],\n\t        "Metrics": [\n\t          {\n\t            "Name": "time",\n\t            "Unit": "Milliseconds"\n\t          }\n\t        ]\n\t      }\n\t    ]\n\t  },\n\t  "functionVersion": "$LATEST",\n\t  "time": 100,\n\t  "requestId": "989ffbf8-9ace-4817-a57c-e4dd734019ee"\n\t}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306e\u3088\u3046\u306b\u3001EMF \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u624b\u52d5\u3067 PutMetricData API \u3092\u547c\u3073\u51fa\u3059\u5fc5\u8981\u306a\u304f\u3001\u9ad8\u30ab\u30fc\u30c7\u30a3\u30ca\u30ea\u30c6\u30a3\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u9001\u4fe1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]})}function u(t={}){const{wrapper:e}={...(0,c.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}}}]);