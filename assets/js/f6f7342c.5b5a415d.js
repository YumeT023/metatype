"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3337],{9254:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(959),a=r(2411),i=r(6787),o=r(2180),l=r(4635);const s="container_KHaM",p="session_k0Fj",c="response_Ger1",u="tool_nUFu",d="notool_i7V8",m=e=>{console.log(e);e.getWrapperElement().closest(".graphiql-editor").style.height=`${e.doc.height}px`};function h(e){const{queryEditor:t,variableEditor:r,headerEditor:a}=(0,l._i)({nonNull:!0}),i=(0,l.JB)({nonNull:!0}),[o,h]=(0,n.useState)(e.defaultTab),y=(0,l.Xd)({onCopyQuery:e.onCopyQuery}),g=(0,l.fE)();return(0,n.useEffect)((()=>{r&&m(r)}),[o,r]),(0,n.useEffect)((()=>{a&&m(a)}),[o,a]),(0,n.useEffect)((()=>{g()}),[g]),(0,n.useEffect)((()=>{t&&(t.setOption("lineNumbers",!1),t.setOption("gutters",[]),t.on("change",m),m(t))}),[t]),(0,n.useEffect)((()=>{r&&(r.setOption("lineNumbers",!1),r.setOption("gutters",[]),r.on("change",m))}),[r]),(0,n.useEffect)((()=>{a&&(a.setOption("lineNumbers",!1),a.setOption("gutters",[]),a.on("change",m))}),[a]),n.createElement("div",{className:`graphiql-container ${s}`},n.createElement("div",{className:`graphiql-session ${p}`},n.createElement("div",{className:"graphiql-editors"},n.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},n.createElement("div",{className:"graphiql-query-editor-wrapper"},n.createElement(l.WK,{style:{background:"red"},editorTheme:e.editorTheme,keyMap:e.keyMap,onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly})),n.createElement("div",{className:"graphiql-toolbar",role:"toolbar","aria-label":"Editor Commands"},n.createElement(l._8,null),n.createElement(l.wC,{onClick:()=>g(),label:"Prettify query (Shift-Ctrl-P)"},n.createElement(l.Kt,{className:"graphiql-toolbar-icon","aria-hidden":"true"})),n.createElement(l.wC,{onClick:()=>y(),label:"Copy query (Shift-Ctrl-C)"},n.createElement(l.TI,{className:"graphiql-toolbar-icon","aria-hidden":"true"})))),n.createElement("div",{className:"graphiql-editor-tools"},n.createElement("div",{className:"graphiql-editor-tools-tabs"},n.createElement(l.v0,{type:"button",className:"variables"===o?"active":"",onClick:()=>{h("variables"===o?"":"variables")}},"Variables"),n.createElement(l.v0,{type:"button",className:"headers"===o?"active":"",onClick:()=>{h("headers"===o?"":"headers")}},"Headers"))),n.createElement("section",{className:`graphiql-editor-tool ${o&&o.length>0?u:d}`,"aria-label":"variables"===o?"Variables":"Headers"},n.createElement(l.hF,{editorTheme:e.editorTheme,isHidden:"variables"!==o,keyMap:e.keyMap,onEdit:e.onEditVariables,readOnly:e.readOnly}),n.createElement(l.LA,{editorTheme:e.editorTheme,isHidden:"headers"!==o,keyMap:e.keyMap,onEdit:e.onEditHeaders,readOnly:e.readOnly})))),n.createElement("div",{className:`graphiql-response ${c}`},i.isFetching?n.createElement(l.$j,null):null,n.createElement(l.iB,{editorTheme:e.editorTheme,responseTooltip:e.responseTooltip,keyMap:e.keyMap})))}class y{constructor(){this.map=new Map,this.length=0}getItem(e){return this.map.get(e)}setItem(e,t){this.map.has(e)||(this.length+=1),this.map.set(e,t)}removeItem(e){this.map.has(e)&&(this.length-=1),this.map.delete(e)}clear(){this.length=0,this.map.clear()}}function g(e){let{typegraph:t,query:r,headers:s={},variables:p={},tab:c=""}=e;const{siteConfig:{customFields:{tgUrl:u}}}=(0,o.Z)(),d=(0,n.useMemo)((()=>new y),[]);return n.createElement(i.Z,{fallback:n.createElement("div",null,"Loading...")},(()=>{const e=(0,n.useMemo)((()=>(0,a.nq)({url:`${u}/${t}`})),[]);return n.createElement(l.j$,{fetcher:e,defaultQuery:r.loc.source.body,defaultHeaders:JSON.stringify(s),variables:JSON.stringify(p),storage:d},n.createElement(h,{defaultTab:c}))}))}},304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(5882),a=(r(959),r(7942)),i=r(6224),o=r(9254),l=r(4881);const s={sidebar_position:2},p="Your first typegraph",c={unversionedId:"tutorials/your-first-typegraph",id:"tutorials/your-first-typegraph",title:"Your first typegraph",description:"Typegraphs (or graphs of types) are the secret sauce of the ecosystem. Similar to type systems in programming languages, they let the developer describe:",source:"@site/docs/tutorials/your-first-typegraph.mdx",sourceDirName:"tutorials",slug:"/tutorials/your-first-typegraph",permalink:"/docs/tutorials/your-first-typegraph",draft:!1,editUrl:"https://github.com/metatypedev/metatype/tree/main/website/docs/tutorials/your-first-typegraph.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/tutorials/getting-started"},next:{title:"Adding more runtimes",permalink:"/docs/tutorials/adding-more-runtimes"}},u={},d=[{value:"Describing types",id:"describing-types",level:2},{value:"Describing graphs",id:"describing-graphs",level:2}],m={toc:d};function h(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"your-first-typegraph"},"Your first typegraph"),(0,a.kt)("p",null,"Typegraphs (or graphs of types) are the secret sauce of the ecosystem. Similar to type systems in programming languages, they let the developer describe:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"what")," data types exists"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"where")," these data types are available"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"how")," to combine these data types together"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"who")," can access these data types")),(0,a.kt)("h2",{id:"describing-types"},"Describing types"),(0,a.kt)("p",null,'There is no such thing like a "class" type or "primitive" types but there are 4 categories:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"value types: ",(0,a.kt)("inlineCode",{parentName:"li"},"t.integer()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"t.string()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"t.uuid()"),", etc."),(0,a.kt)("li",{parentName:"ul"},"quantifier types: ",(0,a.kt)("inlineCode",{parentName:"li"},"t.optional(\xb7)"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"t.array(\xb7)"),", etc."),(0,a.kt)("li",{parentName:"ul"},"consolidator types: ",(0,a.kt)("inlineCode",{parentName:"li"},"t.struct(\xb7, \xb7)"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"t.union(\xb7, \xb7)"),", etc."),(0,a.kt)("li",{parentName:"ul"},"function types: ",(0,a.kt)("inlineCode",{parentName:"li"},"t.func(\xb7 \u2192 \xb7)"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"t.gen(\u2192 \xb7)"),", etc.")),(0,a.kt)("p",null,"This allows to describe almost any data type you may encounter, and verify the data format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'t.struct({\n  "name": t.string(),\n  "age": t.optional(t.integer()),\n  "messages": t.array(t.struct({\n    "text": t.string(),\n    "sentAt": t.datetime()\n  }))\n})\n\n# will let the following pass\n{\n  "name": "Alan",\n  "age": null,\n  "messages": [\n    {\n      "text": "Hello!",\n      "sentAt": "2022-12-28T01:11:10Z"\n    }\n  ]\n}\n\n# and will reject\n{\n  "name": "Turing",\n  "messages": [\n    {\n      "sentAt": 1\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"describing-graphs"},"Describing graphs"),(0,a.kt)(i.Z,{language:"py",title:"first-typegraph.py",mdxType:"CodeBlock"},r(6137).Z),(0,a.kt)(o.Z,{typegraph:"typegate",variables:{a:"1"},headers:{Authorization:"Basic YWRtaW46cGFzc3dvcmQ="},query:l.ZP`
    {
      typegraphs {
        name
      }
    }
  `,mdxType:"MiniQL"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from typegraph import t # all types\nfrom typegraph import m # core materializer\nfrom typegraph.providers.XXX import XXX #\n\n")))}h.isMDXComponent=!0},4881:(e,t,r)=>{r.d(t,{Ps:()=>d,ZP:()=>v});var n=r(677),a=r(2472),i=new Map,o=new Map,l=!0,s=!1;function p(e){return e.replace(/[\s,]+/g," ").trim()}function c(e){var t=new Set,r=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var n=e.name.value,a=p((s=e.loc).source.body.substring(s.start,s.end)),i=o.get(n);i&&!i.has(a)?l&&console.warn("Warning: fragment with name "+n+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):i||o.set(n,i=new Set),i.add(a),t.has(a)||(t.add(a),r.push(e))}else r.push(e);var s})),(0,n.pi)((0,n.pi)({},e),{definitions:r})}function u(e){var t=p(e);if(!i.has(t)){var r=(0,a.Qc)(e,{experimentalFragmentVariables:s,allowLegacyFragmentVariables:s});if(!r||"Document"!==r.kind)throw new Error("Not a valid GraphQL document.");i.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(r){var n=e[r];n&&"object"==typeof n&&t.add(n)}))}));var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}(c(r)))}return i.get(t)}function d(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];"string"==typeof e&&(e=[e]);var n=e[0];return t.forEach((function(t,r){t&&"Document"===t.kind?n+=t.loc.source.body:n+=t,n+=e[r+1]})),u(n)}var m,h=d,y=function(){i.clear(),o.clear()},g=function(){l=!1},f=function(){s=!0},b=function(){s=!1};(m=d||(d={})).gql=h,m.resetCaches=y,m.disableFragmentWarnings=g,m.enableExperimentalFragmentVariables=f,m.disableExperimentalFragmentVariables=b,d.default=d;const v=d},6137:(e,t,r)=>{r.d(t,{Z:()=>n});const n='from typegraph import policies\nfrom typegraph import t\nfrom typegraph import TypeGraph\nfrom typegraph.runtimes.graphql import GraphQLRuntime\n\nwith TypeGraph("mini2") as g:\n\n    remote = GraphQLRuntime("https://graphqlzero.almansi.me/api")\n\n    allow_all = policies.allow_all()\n\n    post = t.struct(\n        {\n            "id": t.integer(),\n            "title": t.string(),\n            "body": t.string(),\n        }\n    ).named("Post")\n\n    getter = remote.query(t.struct({"id": t.integer()}), t.optional(post)).add_policy(\n        allow_all\n    )\n\n    g.expose(post=getter)\n'},677:(e,t,r)=>{r.d(t,{Jh:()=>s,ZT:()=>a,_T:()=>o,ev:()=>p,mG:()=>l,pi:()=>i});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function l(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{s(n.next(e))}catch(t){i(t)}}function l(e){try{s(n.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,l)}s((n=n.apply(e,t||[])).next())}))}function s(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(s){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&l[0]?n.return:l[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,l[1])).done)return a;switch(n=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,n=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(s){l=[6,s],n=0}finally{r=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}}Object.create;function p(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}Object.create}}]);