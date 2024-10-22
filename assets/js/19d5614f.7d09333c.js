"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[9893],{18016:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=a(74848),r=a(28453);const s={},i="Using AWS Distro for OpenTelemetry in EKS on Fargate with AWS X-Ray",o={id:"recipes/recipes/fargate-eks-xray-go-adot-amg",title:"Using AWS Distro for OpenTelemetry in EKS on Fargate with AWS X-Ray",description:"In this recipe we show you how to instrument a sample Go application",source:"@site/docs/recipes/recipes/fargate-eks-xray-go-adot-amg.md",sourceDirName:"recipes/recipes",slug:"/recipes/recipes/fargate-eks-xray-go-adot-amg",permalink:"/observability-best-practices/recipes/recipes/fargate-eks-xray-go-adot-amg",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/recipes/fargate-eks-xray-go-adot-amg.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Infrastructure",id:"infrastructure",level:2},{value:"Architecture",id:"architecture",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create EKS on Fargate cluster",id:"create-eks-on-fargate-cluster",level:3},{value:"Create ECR repository",id:"create-ecr-repository",level:3},{value:"Set up ADOT Collector",id:"set-up-adot-collector",level:3},{value:"Set up Managed Grafana",id:"set-up-managed-grafana",level:3},{value:"Signal generator",id:"signal-generator",level:2},{value:"Build container image",id:"build-container-image",level:3},{value:"Push container image",id:"push-container-image",level:3},{value:"Deploy signal generator",id:"deploy-signal-generator",level:3},{value:"End-to-end",id:"end-to-end",level:2},{value:"Verify pipeline",id:"verify-pipeline",level:3},{value:"Grafana dashboard",id:"grafana-dashboard",level:3},{value:"Cleanup",id:"cleanup",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"using-aws-distro-for-opentelemetry-in-eks-on-fargate-with-aws-x-ray",children:"Using AWS Distro for OpenTelemetry in EKS on Fargate with AWS X-Ray"}),"\n",(0,t.jsxs)(n.p,{children:["In this recipe we show you how to instrument a sample Go application\nand use ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/otel",children:"AWS Distro for OpenTelemetry (ADOT)"})," to\ningest traces into ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/xray/",children:"AWS X-Ray"})," and visualize\nthe traces in ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/grafana/",children:"Amazon Managed Grafana"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We will be setting up an ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/eks/",children:"Amazon Elastic Kubernetes Service (EKS)"}),"\non ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/fargate/",children:"AWS Fargate"})," cluster and use an\n",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/ecr/",children:"Amazon Elastic Container Registry (ECR)"})," repository\nto demonstrate a complete scenario."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This guide will take approximately 1 hour to complete."})}),"\n",(0,t.jsx)(n.h2,{id:"infrastructure",children:"Infrastructure"}),"\n",(0,t.jsx)(n.p,{children:"In the following section we will be setting up the infrastructure for this recipe."}),"\n",(0,t.jsx)(n.h3,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsxs)(n.p,{children:["The ADOT pipeline enables us to use the\n",(0,t.jsx)(n.a,{href:"https://github.com/aws-observability/aws-otel-collector",children:"ADOT Collector"})," to\ncollect traces from an instrumented app and ingest them into X-Ray:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ADOT default pipeline",src:a(91765).A+"",width:"1000",height:"379"})}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The AWS CLI is ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html",children:"installed"})," and ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html",children:"configured"})," in your environment."]}),"\n",(0,t.jsxs)(n.li,{children:["You need to install the ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html",children:"eksctl"})," command in your environment."]}),"\n",(0,t.jsxs)(n.li,{children:["You need to install ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html",children:"kubectl"})," in your environment."]}),"\n",(0,t.jsxs)(n.li,{children:["You have ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," installed into your environment."]}),"\n",(0,t.jsxs)(n.li,{children:["You have the ",(0,t.jsx)(n.a,{href:"https://github.com/aws-observability/aws-o11y-recipes/",children:"aws-observability/aws-o11y-recipes"}),"\nrepo cloned into your local environment."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-eks-on-fargate-cluster",children:"Create EKS on Fargate cluster"}),"\n",(0,t.jsxs)(n.p,{children:["Our demo application is a Kubernetes app that we will run in an EKS on Fargate\ncluster. So, first create an EKS cluster using the\nprovided ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(83429).A+"",children:"cluster_config.yaml"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Create your cluster using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"eksctl create cluster -f cluster-config.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"create-ecr-repository",children:"Create ECR repository"}),"\n",(0,t.jsx)(n.p,{children:"In order to deploy our application to EKS we need a container repository. We\nwill use the private ECR registry, but you can also use ECR Public, if you\nwant to share the container image."}),"\n",(0,t.jsx)(n.p,{children:"First, set the environment variables, such as shown here (substitute for your\nregion):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'export REGION="eu-west-1"\nexport ACCOUNTID=`aws sts get-caller-identity --query Account --output text`\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can use the following command to create a new ECR repository in your account:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"aws ecr create-repository \\\n    --repository-name ho11y \\\n    --image-scanning-configuration scanOnPush=true \\\n    --region $REGION\n"})}),"\n",(0,t.jsx)(n.h3,{id:"set-up-adot-collector",children:"Set up ADOT Collector"}),"\n",(0,t.jsxs)(n.p,{children:["Download ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(92849).A+"",children:"adot-collector-fargate.yaml"}),"\nand edit this YAML doc with the parameters described in the next steps."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl apply -f adot-collector-fargate.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"set-up-managed-grafana",children:"Set up Managed Grafana"}),"\n",(0,t.jsxs)(n.p,{children:["Set up a new workspace using the\n",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/blogs/mt/amazon-managed-grafana-getting-started/",children:"Amazon Managed Grafana \u2013 Getting Started"})," guide\nand add ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/grafana/latest/userguide/x-ray-data-source.html",children:"X-Ray as a data source"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"signal-generator",children:"Signal generator"}),"\n",(0,t.jsxs)(n.p,{children:["We will be using ",(0,t.jsx)(n.code,{children:"ho11y"}),", a synthetic signal generator available\nvia the ",(0,t.jsx)(n.a,{href:"https://github.com/aws-observability/observability-best-practices/tree/main/sandbox/ho11y",children:"sandbox"}),"\nof the recipes repository. So, if you haven't cloned the repo into your local\nenvironment, do now:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/aws-observability/aws-o11y-recipes.git\n"})}),"\n",(0,t.jsx)(n.h3,{id:"build-container-image",children:"Build container image"}),"\n",(0,t.jsxs)(n.p,{children:["Make sure that your ",(0,t.jsx)(n.code,{children:"ACCOUNTID"})," and ",(0,t.jsx)(n.code,{children:"REGION"})," environment variables are set,\nfor example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'export REGION="eu-west-1"\nexport ACCOUNTID=`aws sts get-caller-identity --query Account --output text`\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To build the ",(0,t.jsx)(n.code,{children:"ho11y"})," container image, first change into the ",(0,t.jsx)(n.code,{children:"./sandbox/ho11y/"}),"\ndirectory and build the container image :"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The following build step assumes that the Docker daemon or an equivalent OCI image\nbuild tool is running."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'docker build . -t "$ACCOUNTID.dkr.ecr.$REGION.amazonaws.com/ho11y:latest"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"push-container-image",children:"Push container image"}),"\n",(0,t.jsx)(n.p,{children:"Next, you can push the container image to the ECR repo you created earlier on.\nFor that, first log in to the default ECR registry:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'aws ecr get-login-password --region $REGION | \\\n    docker login --username AWS --password-stdin \\\n    "$ACCOUNTID.dkr.ecr.$REGION.amazonaws.com"\n'})}),"\n",(0,t.jsx)(n.p,{children:"And finally, push the container image to the ECR repository you created, above:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'docker push "$ACCOUNTID.dkr.ecr.$REGION.amazonaws.com/ho11y:latest"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"deploy-signal-generator",children:"Deploy signal generator"}),"\n",(0,t.jsxs)(n.p,{children:["Edit ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(39982).A+"",children:"x-ray-sample-app.yaml"}),"\nto contain your ECR image path. That is, replace ",(0,t.jsx)(n.code,{children:"ACCOUNTID"})," and ",(0,t.jsx)(n.code,{children:"REGION"})," in the\nfile with your own values (overall, in three locations):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'    # change the following to your container image:\n    image: "ACCOUNTID.dkr.ecr.REGION.amazonaws.com/ho11y:latest"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Now you can deploy the sample app to your cluster using:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl -n example-app apply -f x-ray-sample-app.yaml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"end-to-end",children:"End-to-end"}),"\n",(0,t.jsxs)(n.p,{children:["Now that you have the infrastructure and the application in place, we will\ntest out the setup, sending traces from ",(0,t.jsx)(n.code,{children:"ho11y"})," running in EKS to X-Ray and\nvisualize it in AMG."]}),"\n",(0,t.jsx)(n.h3,{id:"verify-pipeline",children:"Verify pipeline"}),"\n",(0,t.jsxs)(n.p,{children:["To verify if the ADOT collector is ingesting traces from ",(0,t.jsx)(n.code,{children:"ho11y"}),", we make\none of the services available locally and invoke it."]}),"\n",(0,t.jsx)(n.p,{children:"First, let's forward traffic as so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl -n example-app port-forward svc/frontend 8765:80\n"})}),"\n",(0,t.jsxs)(n.p,{children:["With above command, the ",(0,t.jsx)(n.code,{children:"frontend"})," microservice (a ",(0,t.jsx)(n.code,{children:"ho11y"})," instance configured\nto talk to two other ",(0,t.jsx)(n.code,{children:"ho11y"})," instances) is available in your local environment\nand you can invoke it as follows (triggering the creation of traces):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$ curl localhost:8765/\n{"traceId":"1-6193a9be-53693f29a0119ee4d661ba0d"}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you want to automate the invocation, you can wrap the ",(0,t.jsx)(n.code,{children:"curl"})," call into\na ",(0,t.jsx)(n.code,{children:"while true"})," loop."]})}),"\n",(0,t.jsxs)(n.p,{children:["To verify our setup, visit the ",(0,t.jsx)(n.a,{href:"https://console.aws.amazon.com/cloudwatch/home#xray:service-map/",children:"X-Ray view in CloudWatch"}),"\nwhere you should see something like shown below:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Screen shot of the X-Ray console in CW",src:a(20773).A+"",width:"1000",height:"595"})}),"\n",(0,t.jsx)(n.p,{children:"Now that we have the signal generator set up and active and the OpenTelemetry\npipeline set up, let's see how to consume the traces in Grafana."}),"\n",(0,t.jsx)(n.h3,{id:"grafana-dashboard",children:"Grafana dashboard"}),"\n",(0,t.jsxs)(n.p,{children:["You can import an example dashboard, available via\n",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(89318).A+"",children:"x-ray-sample-dashboard.json"}),"\nthat looks as follows:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Screen shot of the X-Ray dashboard in AMG",src:a(21871).A+"",width:"1000",height:"483"})}),"\n",(0,t.jsxs)(n.p,{children:["Further, when you click on any of the traces in the lower ",(0,t.jsx)(n.code,{children:"downstreams"}),' panel,\nyou can dive into it and view it in the "Explore" tab like so:']}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Screen shot of the X-Ray dashboard in AMG",src:a(70598).A+"",width:"4716",height:"1924"})}),"\n",(0,t.jsx)(n.p,{children:"From here, you can use the following guides to create your own dashboard in\nAmazon Managed Grafana:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/grafana/latest/userguide/dashboard-overview.html",children:"User Guide: Dashboards"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://grafana.com/docs/grafana/latest/best-practices/best-practices-for-creating-dashboards/",children:"Best practices for creating dashboards"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"That's it, congratulations you've learned how to use ADOT in EKS on Fargate to\ningest traces."}),"\n",(0,t.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,t.jsx)(n.p,{children:"First remove the Kubernetes resources and destroy the EKS cluster:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl delete all --all && \\\neksctl delete cluster --name xray-eks-fargate\n"})}),"\n",(0,t.jsx)(n.p,{children:"Finally, remove the Amazon Managed Grafana workspace by removing it via the AWS console."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},92849:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/adot-collector-fargate-f341911426e4ef23dd65c57ac9b670f3.yaml"},83429:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/cluster-config-5ef0e2087a2a5646ae9b5502c5df0359.yaml"},39982:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/x-ray-sample-app-bf1f799ee0bec9ed5145d83cadba022a.yaml"},89318:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/x-ray-sample-dashboard-17616c72dda1c36a967335d42fe0f35c.json"},91765:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/adot-default-pipeline-ff22be138946fdcf926d0a69a834816c.png"},21871:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/x-ray-amg-ho11y-dashboard-563eda40c7805e1adfa7031b5f25e598.png"},70598:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/x-ray-amg-ho11y-explore-d3c9b386cec38e1336a0601610be0824.png"},20773:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/x-ray-cw-ho11y-331b86fc9b4dbc3076f9d8d6a784f495.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);