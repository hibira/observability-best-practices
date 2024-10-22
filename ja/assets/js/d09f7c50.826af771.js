"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[5691],{98656:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(74848),s=n(28453);const i={},t="Amazon Managed Grafana",o={id:"recipes/amg",title:"Amazon Managed Grafana",description:"Amazon Managed Grafana \u306f\u3001\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e Grafana \u3092\u30d9\u30fc\u30b9\u306b\u3057\u305f\u3001\u30d5\u30eb\u30de\u30cd\u30fc\u30b8\u30c9\u306a\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30b5\u30fc\u30d0\u30fc\u306e\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u69cb\u6210\u3068\u66f4\u65b0\u3001Grafana \u3092\u904b\u7528\u74b0\u5883\u3067\u30bb\u30ad\u30e5\u30a2\u306b\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u91cd\u52b4\u50cd\u3092\u884c\u3046\u3053\u3068\u306a\u304f\u3001\u30e1\u30c8\u30ea\u30af\u30b9\u3001\u30ed\u30b0\u3001\u30c8\u30ec\u30fc\u30b9\u3092\u5206\u6790\u3067\u304d\u307e\u3059\u3002\u30c1\u30fc\u30e0\u3068\u53ef\u8996\u5316\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f5c\u6210\u3001\u63a2\u7d22\u3001\u5171\u6709\u3067\u304d\u3001\u8907\u6570\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/recipes/amg.md",sourceDirName:"recipes",slug:"/recipes/amg",permalink:"/observability-best-practices/ja/recipes/amg",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/amg.md",tags:[],version:"current",frontMatter:{},sidebar:"recipes",previous:{title:"Amazon Managed Service for Prometheus",permalink:"/observability-best-practices/ja/recipes/amp"},next:{title:"Amazon OpenSearch Service",permalink:"/observability-best-practices/ja/recipes/aes"}},c={},l=[{value:"\u57fa\u672c",id:"\u57fa\u672c",level:2},{value:"\u8a8d\u8a3c\u3068\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",id:"\u8a8d\u8a3c\u3068\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",level:2},{value:"\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u30d3\u30b8\u30e5\u30a2\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3",id:"\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u30d3\u30b8\u30e5\u30a2\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3",level:2},{value:"\u305d\u306e\u4ed6\u306e\u8cc7\u6599",id:"\u305d\u306e\u4ed6\u306e\u8cc7\u6599",level:2}];function d(a){const e={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"amazon-managed-grafana",children:"Amazon Managed Grafana"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://aws.amazon.com/grafana/",children:"Amazon Managed Grafana"})," \u306f\u3001\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e Grafana \u3092\u30d9\u30fc\u30b9\u306b\u3057\u305f\u3001\u30d5\u30eb\u30de\u30cd\u30fc\u30b8\u30c9\u306a\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30b5\u30fc\u30d0\u30fc\u306e\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u69cb\u6210\u3068\u66f4\u65b0\u3001Grafana \u3092\u904b\u7528\u74b0\u5883\u3067\u30bb\u30ad\u30e5\u30a2\u306b\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u91cd\u52b4\u50cd\u3092\u884c\u3046\u3053\u3068\u306a\u304f\u3001\u30e1\u30c8\u30ea\u30af\u30b9\u3001\u30ed\u30b0\u3001\u30c8\u30ec\u30fc\u30b9\u3092\u5206\u6790\u3067\u304d\u307e\u3059\u3002\u30c1\u30fc\u30e0\u3068\u53ef\u8996\u5316\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f5c\u6210\u3001\u63a2\u7d22\u3001\u5171\u6709\u3067\u304d\u3001\u8907\u6570\u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0b\u306e\u30ec\u30b7\u30d4\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u57fa\u672c",children:"\u57fa\u672c"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://aws.amazon.com/blogs/mt/amazon-managed-grafana-getting-started/",children:"\u306f\u3058\u3081\u306b"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/observability-best-practices/ja/recipes/recipes/amg-automation-tf",children:"Terraform \u3092\u4f7f\u7528\u3057\u305f\u81ea\u52d5\u5316"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8a8d\u8a3c\u3068\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb",children:"\u8a8d\u8a3c\u3068\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://aws.amazon.com/blogs/mt/amazon-managed-grafana-supports-direct-saml-integration-with-identity-providers/",children:"\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30d7\u30ed\u30d0\u30a4\u30c0\u3068\u306e\u76f4\u63a5\u7684\u306a SAML \u7d71\u5408"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://aws.amazon.com/blogs/opensource/integrating-identity-providers-such-as-onelogin-ping-identity-okta-and-azure-ad-to-sso-into-aws-managed-service-for-grafana/",children:"\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u306e\u305f\u3081\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30d7\u30ed\u30d0\u30a4\u30c0(OneLogin\u3001Ping Identity\u3001Okta\u3001Azure AD)\u306e\u7d71\u5408"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/observability-best-practices/ja/recipes/recipes/amg-google-auth-saml",children:"SAMLv2 \u3092\u4ecb\u3057\u305f Google \u8a8d\u8a3c\u306e\u7d71\u5408"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://aws.amazon.com/blogs/opensource/setting-up-amazon-managed-grafana-cross-account-data-source-using-customer-managed-iam-roles/",children:"\u30ab\u30b9\u30bf\u30de\u30fc\u30de\u30cd\u30fc\u30b8\u30c9 IAM \u30ed\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u305f\u30af\u30ed\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8 Amazon Managed Grafana \u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306e\u8a2d\u5b9a"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://aws.amazon.com/blogs/mt/fine-grained-access-control-in-amazon-managed-grafana-using-grafana-teams/",children:"Grafana Teams \u3092\u4f7f\u7528\u3057\u305f Amazon Managed Grafana \u3067\u306e\u304d\u3081\u7d30\u304b\u3044\u30a2\u30af\u30bb\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u30d3\u30b8\u30e5\u30a2\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3",children:"\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u30d3\u30b8\u30e5\u30a2\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/observability-best-practices/ja/recipes/recipes/amg-athena-plugin",children:"Amazon Managed Grafana \u3067\u306e Athena \u306e\u4f7f\u7528"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/observability-best-practices/ja/recipes/recipes/amg-redshift-plugin",children:"Amazon Managed Grafana \u3067\u306e Redshift \u306e\u4f7f\u7528"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://aws.amazon.com/blogs/mt/viewing-custom-metrics-from-statsd-with-amazon-managed-service-for-prometheus-and-amazon-managed-grafana/",children:"Amazon Managed Service for Prometheus \u3068 Amazon Managed Grafana \u3092\u4f7f\u7528\u3057\u305f statsd \u304b\u3089\u306e\u30ab\u30b9\u30bf\u30e0\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u8868\u793a"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://aws.amazon.com/blogs/opensource/setting-up-amazon-managed-grafana-cross-account-data-source-using-customer-managed-iam-roles/",children:"\u9867\u5ba2\u7ba1\u7406 IAM \u30ed\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u305f\u30af\u30ed\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8 \u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306e\u8a2d\u5b9a"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u305d\u306e\u4ed6\u306e\u8cc7\u6599",children:"\u305d\u306e\u4ed6\u306e\u8cc7\u6599"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://aws.amazon.com/blogs/mt/monitoring-hybrid-environments-using-amazon-managed-service-for-grafana/",children:"\u30cf\u30a4\u30d6\u30ea\u30c3\u30c9\u74b0\u5883\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://aws.amazon.com/blogs/opensource/how-to-manage-grafana-and-loki-in-a-regulated-multitenant-environment/",children:"\u898f\u5236\u5bfe\u8c61\u306e\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8\u74b0\u5883\u3067\u306e Grafana \u3068 Loki \u306e\u7ba1\u7406"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://aws.amazon.com/blogs/containers/monitoring-amazon-eks-anywhere-using-amazon-managed-service-for-prometheus-and-amazon-managed-grafana/",children:"Amazon Managed Service for Prometheus \u3068 Amazon Managed Grafana \u3092\u4f7f\u7528\u3057\u305f Amazon EKS Anywhere \u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://observability.workshop.aws/en/amg.html",children:"Getting Started \u30ef\u30fc\u30af\u30b7\u30e7\u30c3\u30d7"})}),"\n"]})]})}function m(a={}){const{wrapper:e}={...(0,s.R)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(d,{...a})}):d(a)}},28453:(a,e,n)=>{n.d(e,{R:()=>t,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function t(a){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function o(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:t(a.components),r.createElement(i.Provider,{value:e},a.children)}}}]);