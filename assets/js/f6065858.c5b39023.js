"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[2353],{28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>o});var t=s(96540);const n={},r=t.createContext(n);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(r.Provider,{value:a},e.children)}},98711:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"faq/x-ray","title":"AWS X-Ray - FAQ","description":"Does AWS Distro for Open Telemetry (ADOT) support trace propagation across AWS services such as Event Bridge or SQS?","source":"@site/docs/faq/x-ray.md","sourceDirName":"faq","slug":"/faq/x-ray","permalink":"/observability-best-practices/faq/x-ray","draft":false,"unlisted":false,"editUrl":"https://github.com/aws-observability/observability-best-practices/blob/main/docusaurus/docs/faq/x-ray.md","tags":[],"version":"current","frontMatter":{},"sidebar":"faq","previous":{"title":"Amazon CloudWatch - FAQ","permalink":"/observability-best-practices/faq/cloudwatch"},"next":{"title":"Amazon Managed Service for Prometheus - FAQ","permalink":"/observability-best-practices/faq/amp"}}');var n=s(74848),r=s(28453);const i={},o="AWS X-Ray - FAQ",c={},l=[{value:"Does AWS Distro for Open Telemetry (ADOT) support trace propagation across AWS services such as Event Bridge or SQS?",id:"does-aws-distro-for-open-telemetry-adot-support-trace-propagation-across-aws-services-such-as-event-bridge-or-sqs",level:2},{value:"Will I be able to use the W3C trace header to ingest spans into AWS X-Ray using ADOT?",id:"will-i-be-able-to-use-the-w3c-trace-header-to-ingest-spans-into-aws-x-ray-using-adot",level:2},{value:"Can I trace requests across Lambda functions when SQS is involved in the middle?",id:"can-i-trace-requests-across-lambda-functions-when-sqs-is-involved-in-the-middle",level:2},{value:"Should I use X-Ray SDK or the OTel SDK to instrument my application?",id:"should-i-use-x-ray-sdk-or-the-otel-sdk-to-instrument-my-application",level:2},{value:"Are span events supported in AWS X-Ray?",id:"are-span-events-supported-in-aws-x-ray",level:2},{value:"How can I extract data out of AWS X-Ray?",id:"how-can-i-extract-data-out-of-aws-x-ray",level:2},{value:"Can I achieve 100% sampling? That is, I want all traces to be recorded without sampling at all.",id:"can-i-achieve-100-sampling-that-is-i-want-all-traces-to-be-recorded-without-sampling-at-all",level:2},{value:"Can I dynamically increase or decrease sampling rules through APIs?",id:"can-i-dynamically-increase-or-decrease-sampling-rules-through-apis",level:2}];function d(e){const a={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"aws-x-ray---faq",children:"AWS X-Ray - FAQ"})}),"\n",(0,n.jsx)(a.h2,{id:"does-aws-distro-for-open-telemetry-adot-support-trace-propagation-across-aws-services-such-as-event-bridge-or-sqs",children:"Does AWS Distro for Open Telemetry (ADOT) support trace propagation across AWS services such as Event Bridge or SQS?"}),"\n",(0,n.jsx)(a.p,{children:"Technically, that\u2019s not ADOT but AWS X-Ray. We are working on expanding the number and types of AWS services that propagate and/or generate spans. If you have a use case depending on this, please reach out to us."}),"\n",(0,n.jsx)(a.h2,{id:"will-i-be-able-to-use-the-w3c-trace-header-to-ingest-spans-into-aws-x-ray-using-adot",children:"Will I be able to use the W3C trace header to ingest spans into AWS X-Ray using ADOT?"}),"\n",(0,n.jsxs)(a.p,{children:["Yes. ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/about-aws/whats-new/2023/10/aws-x-ray-w3c-format-trace-ids-distributed-tracing/",children:"W3c trace header"})," was released on Oct 27th 2023."]}),"\n",(0,n.jsx)(a.h2,{id:"can-i-trace-requests-across-lambda-functions-when-sqs-is-involved-in-the-middle",children:"Can I trace requests across Lambda functions when SQS is involved in the middle?"}),"\n",(0,n.jsxs)(a.p,{children:["Yes. X-Ray now supports tracing across Lambda functions when SQS is involved in the middle. Traces from upstream message producers are ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/xray/latest/devguide/xray-services-sqs.html",children:"automatically linked to traces"})," from downstream Lambda consumer nodes, creating an end-to-end view of the application."]}),"\n",(0,n.jsx)(a.h2,{id:"should-i-use-x-ray-sdk-or-the-otel-sdk-to-instrument-my-application",children:"Should I use X-Ray SDK or the OTel SDK to instrument my application?"}),"\n",(0,n.jsxs)(a.p,{children:["OTel offers more features than the X-Ray SDK, but to choose which one is right for your use case see ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/xray/latest/devguide/xray-instrumenting-your-app.html#xray-instrumenting-choosing",children:"Choosing between ADOT and X-Ray SDK"})]}),"\n",(0,n.jsxs)(a.h2,{id:"are-span-events-supported-in-aws-x-ray",children:["Are ",(0,n.jsx)(a.a,{href:"https://opentelemetry.io/docs/instrumentation/ruby/manual/#add-span-events",children:"span events"})," supported in AWS X-Ray?"]}),"\n",(0,n.jsx)(a.p,{children:"Span events do not fit into the X-Ray model and are hence dropped."}),"\n",(0,n.jsx)(a.h2,{id:"how-can-i-extract-data-out-of-aws-x-ray",children:"How can I extract data out of AWS X-Ray?"}),"\n",(0,n.jsxs)(a.p,{children:["You can retrieve Service Graph, Traces and Root cause analytics data ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/xray/latest/devguide/xray-api-gettingdata.html",children:"using X-Ray APIs"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"can-i-achieve-100-sampling-that-is-i-want-all-traces-to-be-recorded-without-sampling-at-all",children:"Can I achieve 100% sampling? That is, I want all traces to be recorded without sampling at all."}),"\n",(0,n.jsxs)(a.p,{children:["You can adjust the sampling rules to capture significantly increased amount of trace data. As long as the total segments sent do not breach the ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/general/latest/gr/xray.html#limits_xray",children:"service quota limits mentioned here"}),", X-Ray will make an effort to collect data as configured. There is no guarantee that this will result in 100% trace data capture as a result."]}),"\n",(0,n.jsx)(a.h2,{id:"can-i-dynamically-increase-or-decrease-sampling-rules-through-apis",children:"Can I dynamically increase or decrease sampling rules through APIs?"}),"\n",(0,n.jsxs)(a.p,{children:["Yes, you can use the ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/xray/latest/devguide/xray-api-sampling.html",children:"X-Ray sampling APIs"})," to make adjustments dynamically as necessary. See this ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/dynamically-adjusting-x-ray-sampling-rules/",children:"blog for a use-case based explanation"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Product FAQ:"})," ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com/xray/faqs/",children:"https://aws.amazon.com/xray/faqs/"})]})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);