"use strict";(self.webpackChunkapi_documentation_tool=self.webpackChunkapi_documentation_tool||[]).push([[585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),k=a,h=c["".concat(s,".").concat(k)]||c[k]||u[k]||i;return n?l.createElement(h,r(r({ref:t},p),{},{components:n})):l.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},37650:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const i={},r="Get Solana RPC endpoint Details",o={type:"api",id:"get-solana-rpc-endpoint-details",unversionedId:"get-solana-rpc-endpoint-details",title:"Get Solana RPC endpoint Details",description:"",slug:"/get-solana-rpc-endpoint-details",frontMatter:{},api:{tags:["Solana RPC Data"],description:"This enpoint fetches the response for Solana Node RPC calls.",parameters:[{name:"network",in:"path",description:'Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - "mainnet" is the live network with actual data while networks like "testnet:" are test networks.\r\n\r\nExample : testnet\r\n\r\nPossible Values : mainnet, testnet',required:!0,schema:{type:"string"}},{name:"Access-Control-Allow-Origin",in:"header",required:!0,schema:{type:"string"}}],responses:{200:{description:"HTTP Status Code: 200\r\n\r\nContent-Type: application/json\r\n\r\nThe request has been successful.",content:{"application/json":{schema:{type:"array",properties:{status:{type:"integer"},data:{type:"object",properties:{jsonrpc:{type:"string",description:"Specifies the JSON RPC version"},result:{type:"object",description:"Specifies the response data received from the node."},id:{type:"integer",description:"Specifies the id of the rpc request against which the response is received."}}},error:{type:"boolen",description:"Resprestes the error while 200 status code it is always false"}}}}}},400:{description:"The specified URI has not been found. Check the URI and try again."},401:{description:'The specific authorization header (API Key) is missing, please check our Authorization section in our Documentation.\r\n\r\nor\r\n\r\nThe auth_token is incorrect"'},402:{description:"You have insufficient credits. Please upgrade your plan from your Dashboard or contact our team via email."},403:{description:'This IP address has been banned. To check the reason for that, please contact our team via email."'},404:{description:"The specified block has not been found on the specific blockchain."},409:{description:"The data provided seems to be invalid."},415:{description:"The selected Media Type is unavailable. The Content-Type header should be 'application/json'"},429:{description:"The request limit has been reached. Please contact our team via email if you need more or upgrade your plan."},500:{description:"An unexpected server error has occurred, we are working to fix this. Please try again later and in case it occurs again please report it to our team via email."}},method:"get",path:"/v1/native-api/solana/{network}",servers:[{url:"https://app.develop.zeeve.io/shared-api/blockchain-data"}],info:{title:"",version:""},postman:{name:"Get Solana RPC endpoint Details",description:{content:"This enpoint fetches the response for Solana Node RPC calls.",type:"text/plain"},url:{path:["v1","native-api","solana",":network"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:'(Required) Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - "mainnet" is the live network with actual data while networks like "testnet:" are test networks.\r\n\r\nExample : testnet\r\n\r\nPossible Values : mainnet, testnet',type:"text/plain"},type:"any",value:"<string>",key:"network"}]},header:[{description:{content:"(Required) ",type:"text/plain"},key:"Access-Control-Allow-Origin",value:"<string>"}],method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/ledger-api-doc/ledger-api-doc/get-solana-rpc-endpoint-details",previous:{title:"Get Transaction Details By Transaction ID",permalink:"/ledger-api-doc/ledger-api-doc/get-transaction-details-by-transaction-id"}},s=[],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-solana-rpc-endpoint-details"},"Get Solana RPC endpoint Details"),(0,a.kt)("p",null,"This enpoint fetches the response for Solana Node RPC calls."),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"network"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,'Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - "mainnet" is the live network with actual data while networks like "testnet:" are test networks.'),(0,a.kt)("p",null,"Example : testnet"),(0,a.kt)("p",null,"Possible Values : mainnet, testnet")))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Header Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"Access-Control-Allow-Origin"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"HTTP Status Code: 200"),(0,a.kt)("p",null,"Content-Type: application/json"),(0,a.kt)("p",null,"The request has been successful."))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"status"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"jsonrpc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Specifies the JSON RPC version")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"result"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Specifies the response data received from the node.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Specifies the id of the rpc request against which the response is received.")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"error"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolen"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Resprestes the error while 200 status code it is always false"))))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"400")),(0,a.kt)("div",null,(0,a.kt)("p",null,"The specified URI has not been found. Check the URI and try again."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"401")),(0,a.kt)("div",null,(0,a.kt)("p",null,"The specific authorization header (API Key) is missing, please check our Authorization section in our Documentation."),(0,a.kt)("p",null,"or"),(0,a.kt)("p",null,'The auth_token is incorrect"'))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"402")),(0,a.kt)("div",null,(0,a.kt)("p",null,"You have insufficient credits. Please upgrade your plan from your Dashboard or contact our team via email."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"403")),(0,a.kt)("div",null,(0,a.kt)("p",null,'This IP address has been banned. To check the reason for that, please contact our team via email."'))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"404")),(0,a.kt)("div",null,(0,a.kt)("p",null,"The specified block has not been found on the specific blockchain."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"409")),(0,a.kt)("div",null,(0,a.kt)("p",null,"The data provided seems to be invalid."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"415")),(0,a.kt)("div",null,(0,a.kt)("p",null,"The selected Media Type is unavailable. The Content-Type header should be 'application/json'"))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"429")),(0,a.kt)("div",null,(0,a.kt)("p",null,"The request limit has been reached. Please contact our team via email if you need more or upgrade your plan."))),(0,a.kt)("div",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"500")),(0,a.kt)("div",null,(0,a.kt)("p",null,"An unexpected server error has occurred, we are working to fix this. Please try again later and in case it occurs again please report it to our team via email."))),(0,a.kt)("div",null))))))}p.isMDXComponent=!0}}]);