"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[9758],{20536:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=a(74848),t=a(28453);const r={},i="Amazon Managed Grafana \u3067 Athena \u3092\u4f7f\u7528\u3059\u308b",c={id:"recipes/recipes/amg-athena-plugin",title:"Amazon Managed Grafana \u3067 Athena \u3092\u4f7f\u7528\u3059\u308b",description:"\u3053\u306e\u30ec\u30b7\u30d4\u3067\u306f\u3001Amazon Athena \u3092 Amazon Managed Grafana \u3067\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002Athena \u306f\u3001Amazon S3 \u306e\u30c7\u30fc\u30bf\u3092\u6a19\u6e96 SQL \u3092\u4f7f\u7528\u3057\u3066\u5206\u6790\u3067\u304d\u308b\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306e\u5bfe\u8a71\u578b\u30af\u30a8\u30ea\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\u3053\u306e\u7d71\u5408\u306f\u3001Grafana \u7528 Athena \u30c7\u30fc\u30bf\u30bd\u30fc\u30b9 \u306b\u3088\u3063\u3066\u5b9f\u73fe\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u3001DIY Grafana \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u4f7f\u7528\u3067\u304d\u308b\u3060\u3051\u3067\u306a\u304f\u3001Amazon Managed Grafana \u306b\u3082\u30d7\u30ea\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/recipes/recipes/amg-athena-plugin.md",sourceDirName:"recipes/recipes",slug:"/recipes/recipes/amg-athena-plugin",permalink:"/observability-best-practices/ja/recipes/recipes/amg-athena-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/recipes/amg-athena-plugin.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3",id:"\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3",level:2},{value:"Amazon Athena \u306e\u8a2d\u5b9a",id:"amazon-athena-\u306e\u8a2d\u5b9a",level:3},{value:"\u5730\u7406\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f",id:"\u5730\u7406\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f",level:4},{value:"VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f",id:"vpc-\u30d5\u30ed\u30fc\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f",level:4},{value:"Grafana\u306e\u8a2d\u5b9a",id:"grafana\u306e\u8a2d\u5b9a",level:3},{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2},{value:"\u5730\u7406\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3059\u308b",id:"\u5730\u7406\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3059\u308b",level:3},{value:"VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u4f7f\u7528",id:"vpc-\u30d5\u30ed\u30fc\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u4f7f\u7528",level:3},{value:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7",id:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7",level:2}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"amazon-managed-grafana-\u3067-athena-\u3092\u4f7f\u7528\u3059\u308b",children:"Amazon Managed Grafana \u3067 Athena \u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,s.jsxs)(e.p,{children:["\u3053\u306e\u30ec\u30b7\u30d4\u3067\u306f\u3001",(0,s.jsx)(e.a,{href:"https://aws.amazon.com/athena/",children:"Amazon Athena"})," \u3092 ",(0,s.jsx)(e.a,{href:"https://aws.amazon.com/grafana/",children:"Amazon Managed Grafana"})," \u3067\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002Athena \u306f\u3001Amazon S3 \u306e\u30c7\u30fc\u30bf\u3092\u6a19\u6e96 SQL \u3092\u4f7f\u7528\u3057\u3066\u5206\u6790\u3067\u304d\u308b\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306e\u5bfe\u8a71\u578b\u30af\u30a8\u30ea\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\u3053\u306e\u7d71\u5408\u306f\u3001",(0,s.jsx)(e.a,{href:"https://grafana.com/grafana/plugins/grafana-athena-datasource/",children:"Grafana \u7528 Athena \u30c7\u30fc\u30bf\u30bd\u30fc\u30b9"})," \u306b\u3088\u3063\u3066\u5b9f\u73fe\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u3001DIY Grafana \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u4f7f\u7528\u3067\u304d\u308b\u3060\u3051\u3067\u306a\u304f\u3001Amazon Managed Grafana \u306b\u3082\u30d7\u30ea\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"\u3053\u306e\u30ac\u30a4\u30c9\u306e\u5b8c\u4e86\u306b\u306f\u7d04 20 \u5206\u304b\u304b\u308a\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(e.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html",children:"AWS CLI"})," \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3001\u74b0\u5883\u306b ",(0,s.jsx)(e.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html",children:"\u8a2d\u5b9a"})," \u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u304b\u3089 Amazon Athena \u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3053\u3068\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3",children:"\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3"}),"\n",(0,s.jsx)(e.p,{children:"\u307e\u305a\u3001\u5fc5\u8981\u306a\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u3092\u8a2d\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"amazon-athena-\u306e\u8a2d\u5b9a",children:"Amazon Athena \u306e\u8a2d\u5b9a"}),"\n",(0,s.jsx)(e.p,{children:"Athena \u3092 2 \u3064\u306e\u7570\u306a\u308b\u30b7\u30ca\u30ea\u30aa\u3067\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u78ba\u8a8d\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u30021 \u3064\u306f Geomap \u30d7\u30e9\u30b0\u30a4\u30f3\u3068\u3068\u3082\u306b\u5730\u7406\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u305f\u30b7\u30ca\u30ea\u30aa\u3067\u3001\u3082\u3046 1 \u3064\u306f VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u3092\u4f7f\u7528\u3057\u305f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u95a2\u9023\u306e\u30b7\u30ca\u30ea\u30aa\u3067\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u307e\u305a\u3001Athena \u304c\u8a2d\u5b9a\u3055\u308c\u3001\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304c\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"\u3053\u308c\u3089\u306e\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001Amazon Athena \u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\nGrafana \u306f\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3078\u306e\u8aad\u307f\u53d6\u308a\u5c02\u7528\u30a2\u30af\u30bb\u30b9\u6a29\u3057\u304b\u306a\u3044\u305f\u3081\u3001\u30c7\u30fc\u30bf\u306e\u4f5c\u6210\u3084\u66f4\u65b0\u306b\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\u3002"})}),"\n",(0,s.jsx)(e.h4,{id:"\u5730\u7406\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f",children:"\u5730\u7406\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f"}),"\n",(0,s.jsxs)(e.p,{children:["\u3053\u306e\u6700\u521d\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3067\u306f\u3001",(0,s.jsx)(e.a,{href:"https://registry.opendata.aws/",children:"Registry of Open Data on AWS"})," \u304b\u3089\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u3088\u308a\u5177\u4f53\u7684\u306b\u306f\u3001\u5730\u7406\u30c7\u30fc\u30bf\u3092\u30e2\u30c1\u30d9\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u305f\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306e\u305f\u3081\u306b Athena \u30d7\u30e9\u30b0\u30a4\u30f3\u306e\u4f7f\u7528\u6cd5\u3092\u793a\u3059\u305f\u3081\u306b\u3001",(0,s.jsx)(e.a,{href:"https://aws.amazon.com/blogs/big-data/querying-openstreetmap-with-amazon-athena/",children:"OpenStreetMap"}),"(OSM)\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u306b\u306f\u3001\u307e\u305a OSM \u30c7\u30fc\u30bf\u3092 Athena \u306b\u53d6\u308a\u8fbc\u3080\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u305d\u3053\u3067\u3001\u307e\u305a Athena \u3067\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,s.jsx)(e.a,{href:"https://console.aws.amazon.com/athena/",children:"Athena \u30b3\u30f3\u30bd\u30fc\u30eb"})," \u306b\u79fb\u52d5\u3057\u3001\u4ee5\u4e0b\u306e 3 \u3064\u306e SQL \u30af\u30a8\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001OSM \u30c7\u30fc\u30bf\u3092\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u30af\u30a8\u30ea 1:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE EXTERNAL TABLE planet (\n  id BIGINT,\n  type STRING,\n  tags MAP<STRING,STRING>,\n  lat DECIMAL(9,7),\n  lon DECIMAL(10,7),\n  nds ARRAY<STRUCT<ref: BIGINT>>,\n  members ARRAY<STRUCT<type: STRING, ref: BIGINT, role: STRING>>,\n  changeset BIGINT,\n  timestamp TIMESTAMP,\n  uid BIGINT,\n  user STRING,\n  version BIGINT\n)\nSTORED AS ORCFILE\nLOCATION 's3://osm-pds/planet/';\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u30af\u30a8\u30ea 2:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE EXTERNAL TABLE planet_history (\n    id BIGINT,\n    type STRING,\n    tags MAP<STRING,STRING>,\n    lat DECIMAL(9,7),\n    lon DECIMAL(10,7),\n    nds ARRAY<STRUCT<ref: BIGINT>>,\n    members ARRAY<STRUCT<type: STRING, ref: BIGINT, role: STRING>>,\n    changeset BIGINT,\n    timestamp TIMESTAMP,\n    uid BIGINT,\n    user STRING,\n    version BIGINT,\n    visible BOOLEAN\n)\nSTORED AS ORCFILE\nLOCATION 's3://osm-pds/planet-history/';\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u30af\u30a8\u30ea 3:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE EXTERNAL TABLE changesets (\n    id BIGINT,\n    tags MAP<STRING,STRING>,\n    created_at TIMESTAMP,\n    open BOOLEAN,\n    closed_at TIMESTAMP,\n    comments_count BIGINT,\n    min_lat DECIMAL(9,7),\n    max_lat DECIMAL(9,7),\n    min_lon DECIMAL(10,7),\n    max_lon DECIMAL(10,7),\n    num_changes BIGINT,\n    uid BIGINT,\n    user STRING\n)\nSTORED AS ORCFILE\nLOCATION 's3://osm-pds/changesets/';\n"})}),"\n",(0,s.jsx)(e.h4,{id:"vpc-\u30d5\u30ed\u30fc\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f",children:"VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f"}),"\n",(0,s.jsxs)(e.p,{children:["2 \u3064\u76ee\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306f\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u76ee\u7684\u3068\u3057\u305f\u3082\u306e\u3067\u3059\u3002",(0,s.jsx)(e.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html",children:"VPC \u30d5\u30ed\u30fc\u30ed\u30b0"})," \u3092\u4f7f\u7528\u3057\u3066\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u5206\u6790\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u307e\u305a\u3001EC2 \u306b VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u3092\u751f\u6210\u3055\u305b\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u3057\u305f\u304c\u3063\u3066\u3001\u307e\u3060\u884c\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u30ec\u30d9\u30eb\u3001\u30b5\u30d6\u30cd\u30c3\u30c8\u30ec\u30d9\u30eb\u3001VPC \u30ec\u30d9\u30eb\u306e\u3044\u305a\u308c\u304b\u3067 ",(0,s.jsx)(e.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-s3-create-flow-log",children:"VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u3092\u4f5c\u6210"})," \u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["\u30af\u30a8\u30ea\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u3001\u30b9\u30c8\u30ec\u30fc\u30b8\u30d5\u30c3\u30c8\u30d7\u30ea\u30f3\u30c8\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u308b\u305f\u3081\u306b\u3001VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u3092\u5217\u6307\u5411\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3042\u308b ",(0,s.jsx)(e.a,{href:"https://github.com/apache/parquet-format",children:"Parquet"})," \u306b\u683c\u7d0d\u3057\u307e\u3059\u3002Parquet \u306f\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u793e\u306e\u8a2d\u5b9a\u3067\u306f\u3001Parquet \u5f62\u5f0f\u3067 S3 \u30d0\u30b1\u30c3\u30c8\u306b\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u9650\u308a\u3001\u30aa\u30d7\u30b7\u30e7\u30f3 (\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3001\u30b5\u30d6\u30cd\u30c3\u30c8\u3001VPC) \u306f\u95a2\u4fc2\u3042\u308a\u307e\u305b\u3093\u3002\n\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"EC2 \u30b3\u30f3\u30bd\u30fc\u30eb\u306e\u300c\u30d5\u30ed\u30fc\u30ed\u30b0\u306e\u4f5c\u6210\u300d\u30d1\u30cd\u30eb\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",src:a(12012).A+"",width:"2166",height:"326"})}),"\n",(0,s.jsxs)(e.p,{children:["\u6b21\u306b\u3001",(0,s.jsx)(e.a,{href:"https://console.aws.amazon.com/athena/",children:"Athena \u30b3\u30f3\u30bd\u30fc\u30eb"})," \u304b\u3089\u3001OSM \u30c7\u30fc\u30bf\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u306e\u3068\u540c\u3058\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u3001VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3059\u308b\u304b\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6b21\u306e SQL \u30af\u30a8\u30ea\u3092\u4f7f\u7528\u3057\u3001",(0,s.jsx)(e.code,{children:"VPC_FLOW_LOGS_LOCATION_IN_S3"})," \u3092\u72ec\u81ea\u306e\u30d0\u30b1\u30c3\u30c8/\u30d5\u30a9\u30eb\u30c0\u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE EXTERNAL TABLE vpclogs (\n  `version` int, \n  `account_id` string, \n  `interface_id` string, \n  `srcaddr` string, \n  `dstaddr` string, \n  `srcport` int, \n  `dstport` int, \n  `protocol` bigint, \n  `packets` bigint, \n  `bytes` bigint, \n  `start` bigint, \n  `end` bigint, \n  `action` string, \n  `log_status` string, \n  `vpc_id` string, \n  `subnet_id` string, \n  `instance_id` string, \n  `tcp_flags` int, \n  `type` string, \n  `pkt_srcaddr` string, \n  `pkt_dstaddr` string, \n  `region` string, \n  `az_id` string, \n  `sublocation_type` string, \n  `sublocation_id` string, \n  `pkt_src_aws_service` string, \n  `pkt_dst_aws_service` string, \n  `flow_direction` string, \n  `traffic_path` int\n)\nSTORED AS PARQUET\nLOCATION 'VPC_FLOW_LOGS_LOCATION_IN_S3'\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u305f\u3068\u3048\u3070\u3001S3 \u30d0\u30b1\u30c3\u30c8 ",(0,s.jsx)(e.code,{children:"allmyflowlogs"})," \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001",(0,s.jsx)(e.code,{children:"VPC_FLOW_LOGS_LOCATION_IN_S3"})," \u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"s3://allmyflowlogs/AWSLogs/12345678901/vpcflowlogs/eu-west-1/2021/\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u308c\u3067 Athena \u3067\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304c\u5229\u7528\u53ef\u80fd\u306b\u306a\u3063\u305f\u306e\u3067\u3001Grafana \u306b\u9032\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"grafana\u306e\u8a2d\u5b9a",children:"Grafana\u306e\u8a2d\u5b9a"}),"\n",(0,s.jsxs)(e.p,{children:["Grafana\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u5fc5\u8981\u306a\u306e\u3067\u3001",(0,s.jsx)(e.a,{href:"https://console.aws.amazon.com/grafana/home#/workspaces",children:"Amazon Managed Grafana\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"}),"\u3092\u65b0\u898f\u4f5c\u6210\u3059\u308b\u304b\u3001\u65e2\u5b58\u306e\u3082\u306e\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 \u65b0\u898f\u4f5c\u6210\u3059\u308b\u5834\u5408\u306f\u3001",(0,s.jsx)(e.a,{href:"https://aws.amazon.com/blogs/mt/amazon-managed-grafana-getting-started/",children:"Getting Started"}),"\u30ac\u30a4\u30c9\u3092\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(e.admonition,{type:"warning",children:[(0,s.jsx)(e.p,{children:"AWS\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306e\u69cb\u6210\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u307e\u305aAmazon Managed Grafana\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u79fb\u52d5\u3057\u3001Athena\u30ea\u30bd\u30fc\u30b9\u3092\u8aad\u307f\u53d6\u308b\u305f\u3081\u306b\u5fc5\u8981\u306aIAM\u30dd\u30ea\u30b7\u30fc\u3092\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u4ed8\u4e0e\u3059\u308b\u3001\u30b5\u30fc\u30d3\u30b9\u30de\u30cd\u30fc\u30b8\u30c9IAM\u30ed\u30fc\u30eb\u3092\u6709\u52b9\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3055\u3089\u306b\u3001\u6b21\u306e\u70b9\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4f7f\u7528\u3059\u308b\u4e88\u5b9a\u306eAthena\u30ef\u30fc\u30af\u30b0\u30eb\u30fc\u30d7\u306f\u3001\u30ad\u30fc",(0,s.jsx)(e.code,{children:"GrafanaDataSource"}),"\u3068\u5024",(0,s.jsx)(e.code,{children:"true"}),"\u3068\u3044\u3046\u30bf\u30b0\u304c\u4ed8\u3044\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30b5\u30fc\u30d3\u30b9\u30de\u30cd\u30fc\u30b8\u30c9\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u3067\u305d\u306e\u30ef\u30fc\u30af\u30b0\u30eb\u30fc\u30d7\u3092\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u30b5\u30fc\u30d3\u30b9\u30de\u30cd\u30fc\u30b8\u30c9IAM\u30dd\u30ea\u30b7\u30fc\u306f\u3001",(0,s.jsx)(e.code,{children:"grafana-athena-query-results-"}),"\u3067\u59cb\u307e\u308b\u30af\u30a8\u30ea\u7d50\u679c\u30d0\u30b1\u30c3\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306e\u307f\u3092\u8a31\u53ef\u3059\u308b\u306e\u3067\u3001\u4ed6\u306e\u30d0\u30b1\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u3092\u624b\u52d5\u3067\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u30af\u30a8\u30ea\u5bfe\u8c61\u306e\u57fa\u790e\u3068\u306a\u308b\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3078\u306e",(0,s.jsx)(e.code,{children:"s3:Get*"}),"\u304a\u3088\u3073",(0,s.jsx)(e.code,{children:"s3:List*"}),"\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u3092\u624b\u52d5\u3067\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]})]}),"\n",(0,s.jsx)(e.p,{children:"Athena\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306e\u8a2d\u5b9a\u3067\u306f\u3001\u5de6\u5074\u306e\u30c4\u30fc\u30eb\u30d0\u30fc\u304b\u3089\u4e0b\u306eAWS\u30a2\u30a4\u30b3\u30f3\u3092\u9078\u629e\u3057\u3001\u300cAthena\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u691c\u51fa\u306b\u4f7f\u7528\u3059\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u30ea\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3057\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u9078\u629e\u3057\u305f\u5f8c\u3001\u300cAdd data source\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u3042\u308b\u3044\u306f\u3001\u6b21\u306e\u624b\u9806\u3067Athena\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3092\u624b\u52d5\u3067\u8ffd\u52a0\u304a\u3088\u3073\u69cb\u6210\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u5de6\u5074\u306e\u30c4\u30fc\u30eb\u30d0\u30fc\u306e\u300cConfigurations\u300d\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u300cAdd data source\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u300cAthena\u300d\u3068\u5165\u529b\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"[\u30aa\u30d7\u30b7\u30e7\u30f3] \u8a8d\u8a3c\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3092\u69cb\u6210\u3057\u307e\u3059(\u63a8\u5968: \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9IAM\u30ed\u30fc\u30eb)\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5bfe\u8c61\u306eAthena\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3001\u30ef\u30fc\u30af\u30b0\u30eb\u30fc\u30d7\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u30ef\u30fc\u30af\u30b0\u30eb\u30fc\u30d7\u306b\u51fa\u529b\u5834\u6240\u304c\u307e\u3060\u69cb\u6210\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u30af\u30a8\u30ea\u7d50\u679c\u306b\u4f7f\u7528\u3059\u308bS3\u30d0\u30b1\u30c3\u30c8\u3068\u30d5\u30a9\u30eb\u30c0\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002 \u30b5\u30fc\u30d3\u30b9\u30de\u30cd\u30fc\u30b8\u30c9\u30dd\u30ea\u30b7\u30fc\u306e\u6069\u6075\u3092\u53d7\u3051\u308b\u306b\u306f\u3001\u30d0\u30b1\u30c3\u30c8\u540d\u304c ",(0,s.jsx)(e.code,{children:"grafana-athena-query-results-"})," \u3067\u59cb\u307e\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u300cSave & test\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6b21\u306e\u3088\u3046\u306a\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Athena\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u69cb\u6210\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",src:a(85281).A+"",width:"1000",height:"1156"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u3044\u65b9",children:"\u4f7f\u3044\u65b9"}),"\n",(0,s.jsx)(e.p,{children:"\u6b21\u306b\u3001Grafana \u304b\u3089 Athena \u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u5730\u7406\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3059\u308b",children:"\u5730\u7406\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,s.jsxs)(e.p,{children:["Athena \u306e ",(0,s.jsx)(e.a,{href:"https://aws.amazon.com/blogs/big-data/querying-openstreetmap-with-amazon-athena/",children:"OpenStreetMap"}),"(OSM) \u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u300c\u3042\u308b\u65bd\u8a2d\u304c\u3069\u3053\u306b\u3042\u308b\u304b\u300d\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u8cea\u554f\u306b\u7b54\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305d\u306e\u5b9f\u969b\u306e\u4f7f\u7528\u4f8b\u3092\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u305f\u3068\u3048\u3070\u3001\u30e9\u30b9\u30d9\u30ac\u30b9\u5730\u57df\u306e\u98f2\u98df\u5e97\u3092\u30ea\u30b9\u30c8\u3059\u308b\u305f\u3081\u306e OSM \u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306b\u5bfe\u3059\u308b SQL \u30af\u30a8\u30ea\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT \ntags['amenity'] AS amenity,\ntags['name'] AS name,\ntags['website'] AS website,\nlat, lon\nFROM planet\nWHERE type = 'node'\n  AND tags['amenity'] IN ('bar', 'pub', 'fast_food', 'restaurant')\n  AND lon BETWEEN -115.5 AND -114.5\n  AND lat BETWEEN 36.1 AND 36.3\nLIMIT 500;\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["\u4e0a\u8a18\u30af\u30a8\u30ea\u306e\u30e9\u30b9\u30d9\u30ac\u30b9\u5730\u57df\u306f\u3001\u7def\u5ea6\u304c ",(0,s.jsx)(e.code,{children:"36.1"})," \u304b\u3089 ",(0,s.jsx)(e.code,{children:"36.3"})," \u306e\u9593\u3001\u7d4c\u5ea6\u304c ",(0,s.jsx)(e.code,{children:"-115.5"})," \u304b\u3089 ",(0,s.jsx)(e.code,{children:"-114.5"})," \u306e\u9593\u3068\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u3092\u5404\u30b3\u30fc\u30ca\u30fc\u306e\u5909\u6570\u30bb\u30c3\u30c8\u306b\u5909\u63db\u3057\u3001Geomap \u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4ed6\u306e\u5730\u57df\u306b\u9069\u5fdc\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0a\u8a18\u306e\u30af\u30a8\u30ea\u3092\u4f7f\u7528\u3057\u3066 OSM \u30c7\u30fc\u30bf\u3092\u53ef\u8996\u5316\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(92160).A+"",children:"osm-sample-dashboard.json"})," \u304b\u3089\u30b5\u30f3\u30d7\u30eb\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002\u305d\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"AMG \u306e OSM \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",src:a(42700).A+"",width:"2000",height:"1028"})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"\u4e0a\u8a18\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3067\u306f\u3001\u30c7\u30fc\u30bf\u30dd\u30a4\u30f3\u30c8\u3092\u30d7\u30ed\u30c3\u30c8\u3059\u308b\u305f\u3081\u306b\u5de6\u30d1\u30cd\u30eb\u306e Geomap \u53ef\u8996\u5316\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(e.h3,{id:"vpc-\u30d5\u30ed\u30fc\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u4f7f\u7528",children:"VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u30c7\u30fc\u30bf\u306e\u4f7f\u7528"}),"\n",(0,s.jsx)(e.p,{children:"VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u30c7\u30fc\u30bf\u3092\u5206\u6790\u3057\u3001SSH \u3068 RDP \u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u691c\u51fa\u3059\u308b\u306b\u306f\u3001\n\u6b21\u306e SQL \u30af\u30a8\u30ea\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"SSH/RDP \u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306e\u8868\u5f62\u5f0f\u306e\u6982\u8981\u3092\u53d6\u5f97:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT\nsrcaddr, dstaddr, account_id, action, protocol, bytes, log_status\nFROM vpclogs\nWHERE\nsrcport in (22, 3389)\nOR\ndstport IN (22, 3389)\nORDER BY start ASC;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53d7\u3051\u5165\u308c\u305f\u30d0\u30a4\u30c8\u6570\u3068\u62d2\u5426\u3057\u305f\u30d0\u30a4\u30c8\u6570\u306e\u6642\u7cfb\u5217\u30d3\u30e5\u30fc\u3092\u53d6\u5f97:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT\nfrom_unixtime(start), sum(bytes), action\nFROM vpclogs\nWHERE\nsrcport in (22,3389)\nOR\ndstport IN (22, 3389)\nGROUP BY start, action\nORDER BY start ASC;\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["Athena \u3067\u30af\u30a8\u30ea\u3059\u308b\u30c7\u30fc\u30bf\u91cf\u3092\u5236\u9650\u3059\u308b\u5834\u5408\u306f\u3001\n",(0,s.jsx)(e.code,{children:"$__timeFilter"})," \u30de\u30af\u30ed\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,s.jsxs)(e.p,{children:["VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u30c7\u30fc\u30bf\u3092\u8996\u899a\u5316\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(e.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(13600).A+"",children:"vpcfl-sample-dashboard.json"}),"\n\u304b\u3089\u30b5\u30f3\u30d7\u30eb\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u307e\u3059\u3002\n\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u8868\u793a\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"AMG \u306e VPC \u30d5\u30ed\u30fc\u30ed\u30b0\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8",src:a(30604).A+"",width:"2000",height:"1258"})}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u3053\u304b\u3089\u3001Amazon Managed Grafana \u3067\u72ec\u81ea\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u3001\n\u6b21\u306e\u30ac\u30a4\u30c9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://docs.aws.amazon.com/grafana/latest/userguide/dashboard-overview.html",children:"\u30e6\u30fc\u30b6\u30fc\u30ac\u30a4\u30c9: \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://grafana.com/docs/grafana/latest/best-practices/best-practices-for-creating-dashboards/",children:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u4f5c\u6210\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0a\u3067\u3001Grafana \u304b\u3089 Athena \u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u7fd2\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3057\u305f\u3002\u304a\u75b2\u308c\u69d8\u3067\u3057\u305f\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7",children:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7"}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u3057\u3066\u3044\u305f Athena \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089 OSM \u30c7\u30fc\u30bf\u3092\u524a\u9664\u3057\u3001\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089 Amazon Managed Grafana \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u524a\u9664\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},92160:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/files/osm-sample-dashboard-a2eb36d4a5549f553d3923f0074f78ba.json"},13600:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/files/vpcfl-sample-dashboard-a1c359737597441a1ec5c7cab462d750.json"},42700:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/amg-osm-dashboard-87c049298f043ec41e8e73d737293738.png"},85281:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/amg-plugin-athena-ds-ce625af5d75f2e31593ade07eb989f5f.png"},30604:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/amg-vpcfl-dashboard-d603da5a7d72423c3236c4041a8b3896.png"},12012:(n,e,a)=>{a.d(e,{A:()=>s});const s=a.p+"assets/images/ec2-vpc-flowlogs-creation-43014f36da0f4fe6396f53ac3ee0d293.png"},28453:(n,e,a)=>{a.d(e,{R:()=>i,x:()=>c});var s=a(96540);const t={},r=s.createContext(t);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);