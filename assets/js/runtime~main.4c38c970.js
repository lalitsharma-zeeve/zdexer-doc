(()=>{"use strict";var e,a,t,f,c,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=r,b.c=d,e=[],b.O=(a,t,f,c)=>{if(!t){var r=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],c=e[i][2];for(var d=!0,o=0;o<t.length;o++)(!1&c||r>=c)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(d=!1,c<r&&(r=c));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[t,f,c]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var c=Object.create(null);b.r(c);var r={};a=a||[null,t({}),t([]),t(t)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(c,r),c},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",280:"37938c36",398:"e8fadab2",585:"e858d3c9",802:"ff3ba914",948:"8717b14a",1217:"e51d0f0a",1439:"00c3e596",1727:"cee3a664",1893:"4c5e977b",1914:"d9f32620",1922:"35bb5380",1970:"ad9cd0ee",1992:"5b233e0d",2267:"59362658",2362:"e273c56f",2535:"814f3328",2847:"2082207a",2859:"18c41134",3085:"1f391b9e",3089:"a6aa9e1f",3514:"73664a40",3608:"9e4087bc",3792:"dff1c289",3897:"55a8b8ad",3992:"13f93831",4013:"01a85c17",4193:"f55d3e7a",4195:"c4f5d8e4",4196:"96ca1e98",4290:"75ff4a4f",4373:"454bd87d",4427:"94c0a739",4607:"533a09ca",4785:"bed644fb",5037:"b5257597",5589:"5c868d36",6019:"f531188e",6103:"ccc49370",6504:"822bd8ab",6755:"e44a2883",7026:"510c71eb",7414:"393be207",7918:"17896441",8009:"ac3cc3f5",8024:"ac626a74",8610:"6875c492",8636:"f4f34a3a",8818:"1e4232ab",9003:"925b3f96",9514:"1be78505",9642:"7661071f",9671:"0e384e19"}[e]||e)+"."+{53:"c6ddf50b",280:"d941bac5",398:"5044f376",585:"a40648d8",802:"39c58d60",948:"e7ecd2cf",1217:"ffdc17c3",1439:"3debf2f8",1727:"8d46b8cc",1893:"b23ae2d5",1914:"53f1c701",1922:"3f8e0d19",1970:"9c8a28a3",1992:"79e759df",2267:"964b0ac5",2362:"da6c1f10",2529:"11ac917f",2535:"12de3316",2847:"8d7dbe83",2859:"174e6970",3085:"600487ca",3089:"aa9a44f2",3514:"1b64fa0f",3608:"61339bbb",3792:"c1ace6dc",3897:"6a8b7a43",3992:"fdd42cff",4013:"01f81394",4193:"5a1c8af6",4195:"35decdfe",4196:"2c844f82",4290:"23fc260c",4373:"efe5cdaa",4427:"e3f2d01f",4607:"7176a4f3",4785:"7a2049a5",4972:"5de8caaa",5037:"3e3136e7",5589:"03f7fd5e",6019:"18183e67",6103:"4640002b",6504:"3a60a153",6755:"65380e01",6897:"2a259604",7026:"4bc3de2e",7187:"178a9426",7414:"29a15095",7918:"795b1e77",8009:"6f91cc29",8024:"865b0e06",8610:"e74caeb2",8636:"e7e5275c",8818:"30122c33",9003:"72ce69ec",9425:"67cf88ad",9514:"22cb8587",9642:"bcfe59fe",9671:"476d4672"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},c="api-documentation-tool:",b.l=(e,a,t,r)=>{if(f[e])f[e].push(a);else{var d,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==c+t){d=l;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",c+t),d.src=e),f[e]=[a];var u=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var c=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),c&&c.forEach((e=>e(t))),a)return a(t)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),b.p="/ledger-api-doc/",b.gca=function(e){return e={17896441:"7918",59362658:"2267","935f2afb":"53","37938c36":"280",e8fadab2:"398",e858d3c9:"585",ff3ba914:"802","8717b14a":"948",e51d0f0a:"1217","00c3e596":"1439",cee3a664:"1727","4c5e977b":"1893",d9f32620:"1914","35bb5380":"1922",ad9cd0ee:"1970","5b233e0d":"1992",e273c56f:"2362","814f3328":"2535","2082207a":"2847","18c41134":"2859","1f391b9e":"3085",a6aa9e1f:"3089","73664a40":"3514","9e4087bc":"3608",dff1c289:"3792","55a8b8ad":"3897","13f93831":"3992","01a85c17":"4013",f55d3e7a:"4193",c4f5d8e4:"4195","96ca1e98":"4196","75ff4a4f":"4290","454bd87d":"4373","94c0a739":"4427","533a09ca":"4607",bed644fb:"4785",b5257597:"5037","5c868d36":"5589",f531188e:"6019",ccc49370:"6103","822bd8ab":"6504",e44a2883:"6755","510c71eb":"7026","393be207":"7414",ac3cc3f5:"8009",ac626a74:"8024","6875c492":"8610",f4f34a3a:"8636","1e4232ab":"8818","925b3f96":"9003","1be78505":"9514","7661071f":"9642","0e384e19":"9671"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((t,c)=>f=e[a]=[t,c]));t.push(f[2]=c);var r=b.p+b.u(a),d=new Error;b.l(r,(t=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,f[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var f,c,r=t[0],d=t[1],o=t[2],n=0;if(r.some((a=>0!==e[a]))){for(f in d)b.o(d,f)&&(b.m[f]=d[f]);if(o)var i=o(b)}for(a&&a(t);n<r.length;n++)c=r[n],b.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return b.O(i)},t=self.webpackChunkapi_documentation_tool=self.webpackChunkapi_documentation_tool||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();