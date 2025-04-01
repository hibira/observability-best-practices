"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[8674],{20725:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cloudwatch-metric-stream-configuration-f32f65524b45355c3638464f222d9ec0.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},51320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"recipes/recipes/lambda-cw-metrics-go-amp","title":"Exporting CloudWatch Metric Streams via Firehose and AWS Lambda to Amazon Managed Service for Prometheus","description":"In this recipe we show you how to instrument a CloudWatch Metric Stream and use Kinesis Data Firehose and AWS Lambda to ingest metrics into Amazon Managed Service for Prometheus (AMP).","source":"@site/docs/recipes/recipes/lambda-cw-metrics-go-amp.md","sourceDirName":"recipes/recipes","slug":"/recipes/recipes/lambda-cw-metrics-go-amp","permalink":"/observability-best-practices/recipes/recipes/lambda-cw-metrics-go-amp","draft":false,"unlisted":false,"editUrl":"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/recipes/recipes/lambda-cw-metrics-go-amp.md","tags":[],"version":"current","frontMatter":{}}');var s=t(74848),r=t(28453);const a={},o="Exporting CloudWatch Metric Streams via Firehose and AWS Lambda to Amazon Managed Service for Prometheus",c={},d=[{value:"Infrastructure",id:"infrastructure",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create an AMP workspace",id:"create-an-amp-workspace",level:3},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Modify config file",id:"modify-config-file",level:3},{value:"Deploy stack",id:"deploy-stack",level:3},{value:"Create CloudWatch stream",id:"create-cloudwatch-stream",level:2},{value:"Cleanup",id:"cleanup",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"exporting-cloudwatch-metric-streams-via-firehose-and-aws-lambda-to-amazon-managed-service-for-prometheus",children:"Exporting CloudWatch Metric Streams via Firehose and AWS Lambda to Amazon Managed Service for Prometheus"})}),"\n",(0,s.jsxs)(n.p,{children:["In this recipe we show you how to instrument a ",(0,s.jsx)(n.a,{href:"https://console.aws.amazon.com/cloudwatch/home#metric-streams:streamsList",children:"CloudWatch Metric Stream"})," and use ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/kinesis/data-firehose/",children:"Kinesis Data Firehose"})," and ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/lambda",children:"AWS Lambda"})," to ingest metrics into ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/prometheus/",children:"Amazon Managed Service for Prometheus (AMP)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["We will be setting up a stack using ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/cdk/",children:"AWS Cloud Development Kit (CDK)"})," to create a Firehose Delivery Stream, Lambda, and a S3 Bucket to demonstrate a complete scenario."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"This guide will take approximately 30 minutes to complete."})}),"\n",(0,s.jsx)(n.h2,{id:"infrastructure",children:"Infrastructure"}),"\n",(0,s.jsx)(n.p,{children:"In the following section we will be setting up the infrastructure for this recipe."}),"\n",(0,s.jsxs)(n.p,{children:["CloudWatch Metric Streams allow forwarding of the streaming metric data to a\nHTTP endpoint or ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/s3",children:"S3 bucket"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The AWS CLI is ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html",children:"installed"})," and ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html",children:"configured"})," in your environment."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cdk/latest/guide/work-with-cdk-typescript.html",children:"AWS CDK Typescript"})," is installed in your environment."]}),"\n",(0,s.jsx)(n.li,{children:"Node.js and Go."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/aws-observability/observability-best-practices/",children:"repo"})," has been cloned to your local machine. The code for this project is under ",(0,s.jsx)(n.code,{children:"/sandbox/CWMetricStreamExporter"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-an-amp-workspace",children:"Create an AMP workspace"}),"\n",(0,s.jsx)(n.p,{children:"Our demo application in this recipe will be running on top of AMP.\nCreate your AMP Workspace via the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"aws amp create-workspace --alias prometheus-demo-recipe\n"})}),"\n",(0,s.jsx)(n.p,{children:"Ensure your workspace has been created with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"aws amp list-workspaces\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["For more details check out the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-getting-started.html",children:"AMP Getting started"})," guide."]})}),"\n",(0,s.jsx)(n.h3,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,s.jsx)(n.p,{children:"From the root of the aws-o11y-recipes repository, change your directory to CWMetricStreamExporter via the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd sandbox/CWMetricStreamExporter\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will now be considered the root of the repo, going forward."}),"\n",(0,s.jsxs)(n.p,{children:["Change directory to ",(0,s.jsx)(n.code,{children:"/cdk"})," via the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd cdk\n"})}),"\n",(0,s.jsx)(n.p,{children:"Install the CDK dependencies via the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm install\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Change directory back to the root of the repo, and then change directory\nto ",(0,s.jsx)(n.code,{children:"/lambda"})," using following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd lambda\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once in the ",(0,s.jsx)(n.code,{children:"/lambda"})," folder, install the Go dependencies using:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"go get\n"})}),"\n",(0,s.jsx)(n.p,{children:"All the dependencies are now installed."}),"\n",(0,s.jsx)(n.h3,{id:"modify-config-file",children:"Modify config file"}),"\n",(0,s.jsxs)(n.p,{children:["In the root of the repo, open ",(0,s.jsx)(n.code,{children:"config.yaml"})," and modify the AMP workspace URL\nby replacing the ",(0,s.jsx)(n.code,{children:"{workspace}"})," with the newly created workspace id, and the\nregion your AMP workspace is in."]}),"\n",(0,s.jsx)(n.p,{children:"For example, modify the following with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'AMP:\n    remote_write_url: "https://aps-workspaces.us-east-2.amazonaws.com/workspaces/{workspaceId}/api/v1/remote_write"\n    region: us-east-2\n'})}),"\n",(0,s.jsx)(n.p,{children:"Change the names of the Firehose Delivery Stream and S3 Bucket to your liking."}),"\n",(0,s.jsx)(n.h3,{id:"deploy-stack",children:"Deploy stack"}),"\n",(0,s.jsxs)(n.p,{children:["Once the ",(0,s.jsx)(n.code,{children:"config.yaml"})," has been modified with the AMP workspace ID, it is time\nto deploy the stack to CloudFormation. To build the CDK and the Lambda code,\nin the root of the repo run the following commend:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm run build\n"})}),"\n",(0,s.jsx)(n.p,{children:"This build step ensures that the Go Lambda binary is built, and deploys the CDK\nto CloudFormation."}),"\n",(0,s.jsx)(n.p,{children:"Accept the following IAM changes to deploy the stack:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screen shot of the IAM Changes when deploying the CDK",src:t(94585).A+"",width:"2782",height:"1108"})}),"\n",(0,s.jsx)(n.p,{children:"Verify that the stack has been created by running the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"aws cloudformation list-stacks\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A stack by the name ",(0,s.jsx)(n.code,{children:"CDK Stack"})," should have been created."]}),"\n",(0,s.jsx)(n.h2,{id:"create-cloudwatch-stream",children:"Create CloudWatch stream"}),"\n",(0,s.jsxs)(n.p,{children:["Navigate to the CloudWatch consoloe, for example\n",(0,s.jsx)(n.code,{children:"https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#metric-streams:streamsList"}),'\nand click "Create metric stream".']}),"\n",(0,s.jsx)(n.p,{children:"Select the metics needed, either all metrics of only from selected namespaces."}),"\n",(0,s.jsx)(n.p,{children:'Configure the Metric Stream by using an existing Firehose which was created by the CDK.\nChange the output format to JSON instead of OpenTelemetry 0.7.\nModify the Metric Stream name to your liking, and click "Create metric stream":'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screen shot of the Cloudwatch Metric Stream Configuration",src:t(20725).A+"",width:"1606",height:"1372"})}),"\n",(0,s.jsxs)(n.p,{children:["To verify the Lambda function invocation, navigate to the ",(0,s.jsx)(n.a,{href:"https://console.aws.amazon.com/lambda/home",children:"Lambda console"}),"\nand click the function ",(0,s.jsx)(n.code,{children:"KinesisMessageHandler"}),". Click the ",(0,s.jsx)(n.code,{children:"Monitor"})," tab and ",(0,s.jsx)(n.code,{children:"Logs"})," subtab, and under ",(0,s.jsx)(n.code,{children:"Recent Invocations"})," there should be entries of the Lambda function being triggered."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"It may take upto 5 minutes for invocations to show in the Monitor tab."})}),"\n",(0,s.jsx)(n.p,{children:"That is it! Congratulations, your metrics are now being streamed from CloudWatch to Amazon Managed Service for Prometheus."}),"\n",(0,s.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,s.jsx)(n.p,{children:"First, delete the CloudFormation stack:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd cdk\ncdk destroy\n"})}),"\n",(0,s.jsx)(n.p,{children:"Remove the AMP workspace:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"aws amp delete-workspace --workspace-id \\\n    `aws amp list-workspaces --alias prometheus-sample-app --query 'workspaces[0].workspaceId' --output text`\n"})}),"\n",(0,s.jsx)(n.p,{children:"Last but not least, remove the CloudWatch Metric Stream by removing it from the console."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},94585:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cdk-amp-iam-changes-3a782e1a12d809c1087c8120564ecb95.png"}}]);