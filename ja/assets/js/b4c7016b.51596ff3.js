"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[774],{51095:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=r(74848),t=r(28453);const i={},o="kubernetes-mixin \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092 Managed Grafana \u306b\u8ffd\u52a0\u3059\u308b",a={id:"recipes/recipes/amp-mixin-dashboards",title:"[**kubernetes-mixin**](https://github.com/kubernetes-monitoring/kubernetes-mixin) \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092 Managed Grafana \u306b\u8ffd\u52a0\u3059\u308b",description:"\u30de\u30cd\u30fc\u30b8\u30c9\u30b5\u30fc\u30d3\u30b9\u3067\u3042\u3063\u3066\u3082\u3001EKS \u306f Kubernetes \u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u304b\u3089\u591a\u304f\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/recipes/recipes/amp-mixin-dashboards.md",sourceDirName:"recipes/recipes",slug:"/recipes/recipes/amp-mixin-dashboards",permalink:"/observability-best-practices/ja/recipes/recipes/amp-mixin-dashboards",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/recipes/amp-mixin-dashboards.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"mixin \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"mixin-\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"kubernetes-mixin-\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092-managed-grafana-\u306b\u8ffd\u52a0\u3059\u308b",children:[(0,s.jsx)(n.a,{href:"https://github.com/kubernetes-monitoring/kubernetes-mixin",children:(0,s.jsx)(n.strong,{children:"kubernetes-mixin"})})," \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092 Managed Grafana \u306b\u8ffd\u52a0\u3059\u308b"]}),"\n",(0,s.jsx)(n.p,{children:"\u30de\u30cd\u30fc\u30b8\u30c9\u30b5\u30fc\u30d3\u30b9\u3067\u3042\u3063\u3066\u3082\u3001EKS \u306f Kubernetes \u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u304b\u3089\u591a\u304f\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002\nPrometheus \u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306f\u3001\u3053\u308c\u3089\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u78ba\u8a8d\u304a\u3088\u3073\u8abf\u67fb\u3059\u308b\u305f\u3081\u306e\u4e00\u9023\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002\n\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u3001Amazon Managed Service for Prometheus \u304c\u30db\u30b9\u30c8\u3059\u308b\u74b0\u5883\u306b\u305d\u308c\u3089\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Prometheus mixin \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001Prometheus Operator \u3092\u4ecb\u3057\u3066 Prometheus \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u304c\u3001Terraform \u30d6\u30eb\u30fc\u30d7\u30ea\u30f3\u30c8\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e Helm \u30c1\u30e3\u30fc\u30c8\u3092\u4ecb\u3057\u3066 Prometheus \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\n\u30b9\u30af\u30ec\u30a4\u30d4\u30f3\u30b0\u30b8\u30e7\u30d6\u3068\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4e00\u81f4\u3055\u305b\u308b\u305f\u3081\u306b\u3001Prometheus \u30eb\u30fc\u30eb\u3068 mixin \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u8a2d\u5b9a\u3092\u66f4\u65b0\u3057\u3001\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092 Grafana \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["EKS \u30af\u30e9\u30b9\u30bf\u30fc - \u4ee5\u4e0b\u304b\u3089\u958b\u59cb: ",(0,s.jsx)(n.a,{href:"https://github.com/aws-ia/terraform-aws-eks-blueprints/tree/main/",children:"https://github.com/aws-ia/terraform-aws-eks-blueprints/tree/main/examples/complete-kubernetes-addons"})]}),"\n",(0,s.jsx)(n.li,{children:"Cloud9 \u74b0\u5883"}),"\n",(0,s.jsx)(n.li,{children:"EKS \u30af\u30e9\u30b9\u30bf\u30fc\u3092\u7ba1\u7406\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u305f Cloud9 \u306e kubectl"}),"\n",(0,s.jsx)(n.li,{children:"EKS \u7528\u306e IAM \u8a8d\u8a3c\u60c5\u5831"}),"\n",(0,s.jsx)(n.li,{children:"Amazon Managed Service for Prometheus \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9"}),"\n",(0,s.jsx)(n.li,{children:"Amazon Managed Grafana \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"mixin-\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"mixin \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,s.jsx)(n.p,{children:"\u65b0\u3057\u3044 Cloud9 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089\u59cb\u3081\u3001\u524d\u63d0\u6761\u4ef6\u306b\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u308b AWS \u306e terraform \u5b8c\u5168\u30a2\u30c9\u30aa\u30f3\u4f8b\u306e\u30d6\u30eb\u30fc\u30d7\u30ea\u30f3\u30c8\u3092\u5bfe\u8c61\u306e EKS \u30af\u30e9\u30b9\u30bf\u30fc\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Cloud9 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u5c11\u306a\u304f\u3068\u3082 20 GB \u306b\u62e1\u5f35\u3057\u307e\u3059\u3002EC2 \u30b3\u30f3\u30bd\u30fc\u30eb\u3067 EBS \u30dc\u30ea\u30e5\u30fc\u30e0\u3092 20 GB \u306b\u62e1\u5f35\u3057\u3001Cloud9 \u30b7\u30a7\u30eb\u304b\u3089\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo growpart /dev/nvme0n1 1\nsudo xfs_growfs -d /\n"})}),"\n",(0,s.jsx)(n.p,{children:"awscli \u3092\u30d0\u30fc\u30b8\u30e7\u30f3 2 \u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'sudo yum remove -y awscli\ncurl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\nln -s /usr/local/bin/aws /usr/bin/aws\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u524d\u63d0\u6761\u4ef6\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'sudo yum install -y jsonnet\ngo install -a github.com/jsonnet-bundler/jsonnet-bundler/cmd/jb@latest\nexport PATH="$PATH:~/go/bin"\n'})}),"\n",(0,s.jsx)(n.p,{children:"kubernetes-mixin \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e jsonnet \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone https://github.com/kubernetes-monitoring/kubernetes-mixincd kubernetes-mixin/\njb install\n"})}),"\n",(0,s.jsx)(n.p,{children:"config.libsonnet \u3092\u7de8\u96c6\u3057\u3001\u300cselectors\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u7f6e\u304d\u63db\u3048\u3066\u3001prometheus \u30b8\u30e7\u30d6\u540d\u3068\u4e00\u81f4\u3055\u305b\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:" // Selectors are inserted between {} in Prometheus queries.\n cadvisorSelector: 'job=\"kubernetes-nodes-cadvisor\"',\n kubeletSelector: 'job=\"kubernetes-nodes\"',\n kubeStateMetricsSelector: 'job=\"kubernetes-service-endpoints\"',\n nodeExporterSelector: 'job=\"kubernetes-service-endpoints\"',\n kubeSchedulerSelector: 'job=\"kube-scheduler\"',\n kubeControllerManagerSelector: 'job=\"kube-controller-manager\"',\n kubeApiserverSelector: 'job=\"kubernetes-apiservers\"',\n kubeProxySelector: 'job=\"kubernetes-nodes\"',\n podLabel: 'pod',\n hostNetworkInterfaceSelector: 'device!~\"veth.+\"',\n hostMountpointSelector: 'mountpoint=\"/\"',\n windowsExporterSelector: 'job=\"kubernetes-windows-exporter\"',\n containerfsSelector: 'container!=\"\"',\n"})}),"\n",(0,s.jsx)(n.p,{children:"prometheus \u30eb\u30fc\u30eb\u3001\u30a2\u30e9\u30fc\u30c8\u3001grafana \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u30d3\u30eb\u30c9\u3057\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"make prometheus_alerts.yaml\nmake prometheus_rules.yaml\nmake dashboards_out\n"})}),"\n",(0,s.jsx)(n.p,{children:"prometheus \u30eb\u30fc\u30eb\u3092\u30de\u30cd\u30fc\u30b8\u30c9 prometheus \u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u300cWORKSPACE-ID\u300d\u3092\u30de\u30cd\u30fc\u30b8\u30c9 prometheus \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e ID \u306b\u3001\u300cREGION\u300d\u3092\u9069\u5207\u306a\u5024\u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"base64 prometheus_rules.yaml > prometheus_rules.b64\naws amp create-rule-groups-namespace --data file://prometheus_rules.b64 --name kubernetes-mixin  --workspace-id <<WORKSPACE-ID> --region <<REGION>>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Cloud9 \u74b0\u5883\u304b\u3089\u300cdashboard_out\u300d\u30d5\u30a9\u30eb\u30c0\u306e\u5185\u5bb9\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001Grafana Web UI \u3092\u4f7f\u7528\u3057\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);