(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8927],{7942:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>f});var i=n(959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9428:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var i=n(959),a=n(6233),r=n(4838),o=n(2232),l=n(2441),s=n(6361);const c={container:"container_KHaM",panel:"panel_p8cl",editor:"editor_LjJP",response:"response_Ger1",tool:"tool_nUFu",notool:"notool_i7V8"},d=e=>{e.getWrapperElement().closest(".graphiql-editor").style.height=`${e.doc.height}px`};function u(e){const{queryEditor:t,variableEditor:n,headerEditor:a}=(0,s._i)({nonNull:!0}),[r,o]=(0,i.useState)(e.defaultTab),l=(0,s.Xd)({onCopyQuery:e.onCopyQuery}),u=(0,s.fE)();return(0,i.useEffect)((()=>{n&&d(n)}),[r,n]),(0,i.useEffect)((()=>{a&&d(a)}),[r,a]),(0,i.useEffect)((()=>{t&&(t.setOption("lineNumbers",!1),t.setOption("extraKeys",{"Alt-G":()=>{t.replaceSelection("@")}}),t.setOption("gutters",[]),t.on("change",d),d(t))}),[t]),(0,i.useEffect)((()=>{n&&(n.setOption("lineNumbers",!1),n.setOption("gutters",[]),n.on("change",d))}),[n]),(0,i.useEffect)((()=>{a&&(a.setOption("lineNumbers",!1),a.setOption("gutters",[]),a.on("change",d))}),[a]),i.createElement("div",{className:"graphiql-editors"},i.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},i.createElement("div",{className:"graphiql-query-editor-wrapper"},i.createElement(s.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly})),i.createElement("div",{className:"graphiql-toolbar",role:"toolbar","aria-label":"Editor Commands"},i.createElement(s._8,null),i.createElement(s.wC,{onClick:()=>u(),label:"Prettify query (Shift-Ctrl-P)"},i.createElement(s.Kt,{className:"graphiql-toolbar-icon","aria-hidden":"true"})),i.createElement(s.wC,{onClick:()=>l(),label:"Copy query (Shift-Ctrl-C)"},i.createElement(s.TI,{className:"graphiql-toolbar-icon","aria-hidden":"true"})))),i.createElement("div",{className:"graphiql-editor-tools"},i.createElement("div",{className:"graphiql-editor-tools-tabs"},i.createElement(s.v0,{type:"button",className:"variables"===r?"active":"",onClick:()=>{o("variables"===r?"":"variables")}},"Variables"),i.createElement(s.v0,{type:"button",className:"headers"===r?"active":"",onClick:()=>{o("headers"===r?"":"headers")}},"Headers"))),i.createElement("section",{className:`graphiql-editor-tool ${r&&r.length>0?c.tool:c.notool}`,"aria-label":"variables"===r?"Variables":"Headers"},i.createElement(s.hF,{editorTheme:e.editorTheme,isHidden:"variables"!==r,keyMap:e.keyMap,onEdit:e.onEditVariables,readOnly:e.readOnly}),i.createElement(s.LA,{editorTheme:e.editorTheme,isHidden:"headers"!==r,keyMap:e.keyMap,onEdit:e.onEditHeaders,readOnly:e.readOnly})))}class p{constructor(){this.map=new Map,this.length=0}getItem(e){return this.map.get(e)}setItem(e,t){this.map.has(e)||(this.length+=1),this.map.set(e,t)}removeItem(e){this.map.has(e)&&(this.length-=1),this.map.delete(e)}clear(){this.length=0,this.map.clear()}}function m(){return(0,s.JB)({nonNull:!0}).isFetching?i.createElement(s.$j,null):null}function f(e){let{typegraph:t,query:n,code:d,codeLanguage:f,codeFileUrl:h,headers:y={},variables:v={},tab:b=""}=e;const{siteConfig:{customFields:{tgUrl:g}}}=(0,o.Z)(),k=(0,i.useMemo)((()=>new p),[]);return i.createElement(r.Z,{fallback:i.createElement("div",null,"Loading...")},(()=>{const e=(0,i.useMemo)((()=>(0,a.nq)({url:`${g}/${t}`})),[]);return i.createElement(s.j$,{fetcher:e,defaultQuery:n.loc.source.body.trim(),defaultHeaders:JSON.stringify(y),variables:JSON.stringify(v),storage:k},i.createElement("div",{className:"mb-6"},i.createElement("div",{className:`graphiql-container ${c.container}`},d?i.createElement("div",{className:`graphiql-response ${c.panel}`},i.createElement(l.Z,{language:f},d)):null,i.createElement("div",{className:`graphiql-session ${c.editor}`},i.createElement(u,{defaultTab:b})),i.createElement("div",{className:`graphiql-response ${c.response}`},i.createElement(m,null),i.createElement(s.iB,null))),h?i.createElement("small",{className:"mx-2"},"See/edit full code on"," ",i.createElement("a",{href:`https://github.com/metatypedev/metatype/blob/main/${h}`},h)):null))}))}},7128:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(1163),a=n(9428),r=n(959);function o(e){let{python:t,...n}=e;return r.createElement(a.Z,(0,i.Z)({code:t.content,codeLanguage:"python",codeFileUrl:t.path},n))}},5221:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(1163),a=(n(959),n(7942)),r=(n(2441),n(7128));const o={sidebar_position:6},l="Policies and materializers",s={unversionedId:"tutorials/policies-and-materializers/index",id:"tutorials/policies-and-materializers/index",title:"Policies and materializers",description:"This section also makes use of toy typegraph for the sake of clarity. You will continue the chat-based app on the next one.",source:"@site/docs/tutorials/policies-and-materializers/index.mdx",sourceDirName:"tutorials/policies-and-materializers",slug:"/tutorials/policies-and-materializers/",permalink:"/docs/tutorials/policies-and-materializers/",draft:!1,editUrl:"https://github.com/metatypedev/metatype/tree/main/website/docs/tutorials/policies-and-materializers/index.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Authentication and security",permalink:"/docs/tutorials/authentication-and-security/"},next:{title:"Your chat app",permalink:"/docs/tutorials/your-chat-app/"}},c={},d=[{value:"Deno runtime",id:"deno-runtime",level:2},{value:"Policy based access control (PBAC)",id:"policy-based-access-control-pbac",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"policies-and-materializers"},"Policies and materializers"),(0,a.kt)("p",null,"This section also makes use of toy typegraph for the sake of clarity. You will continue the chat-based app on the next one."),(0,a.kt)("h2",{id:"deno-runtime"},"Deno runtime"),(0,a.kt)("p",null,"While the tutorial covered already interesting runtimes, allowing you to connect to already a lots of systems and different protocols, there is still one powerful that wasn't covered yet: the typescript or Deno runtime."),(0,a.kt)("p",null,"This enable to run lightweight and short-lived typescript function in a sandboxed environment. Permissions can be customized per typegraph and by default only include some HTTPs domains. It's a great way to implement custom logic and materializers. All typegraphs can lazily spawn a web worker and get an incredible cold-start and continuous performance thanks to the V8 engine powering Deno."),(0,a.kt)(r.Z,{typegraph:"deno",python:n(2643),query:n(968),mdxType:"TGExample"}),(0,a.kt)("h2",{id:"policy-based-access-control-pbac"},"Policy based access control (PBAC)"),(0,a.kt)("p",null,"The Deno runtime enable to understand the last abstraction. Policies are a way to verify for each type whether the user is authorized or not to access it. It's a very powerful concept that can be for instance used to guarantee a given type is never accidentally exposed to the outside world."),(0,a.kt)("p",null,"Metatype comes with some built-in policies but you can use the Deno runtime to define your own:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"policies.public()")," is an alias for ",(0,a.kt)("inlineCode",{parentName:"li"},'Policy(PureFunMat("() => true"))')," providing everyone open access."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'policies.jwt("role_value", "role_field")')," is a companion policy for the authentication strategy you learnt in the previous section. It will verify the context and give adequate access to the user.")),(0,a.kt)("p",null,"Policies are hierarchical in the sense that the request starts with a deny, and the root materializers must explicitly provide an access or not. Once access granted, any further types can either inherit or override the access. Policies evaluate in order in case multiple ones are defined."),(0,a.kt)(r.Z,{typegraph:"policies",python:n(7989),query:n(3971),mdxType:"TGExample"}),(0,a.kt)("p",null,"Enough studied, lets go back to your app and finalize it."))}m.isMDXComponent=!0},968:e=>{var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"compute_fib"},arguments:[{kind:"Argument",name:{kind:"Name",value:"n"},value:{kind:"IntValue",value:"3"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"res"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ms"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:51}};t.loc.source={body:"query {\n  compute_fib(n: 3) {\n    res\n    ms\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,t)})),e.definitions&&e.definitions.forEach((function(e){n(e,t)}))}var i={};t.definitions.forEach((function(e){if(e.name){var t=new Set;n(e,t),i[e.name.value]=t}})),e.exports=t},3971:e=>{var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"A"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"public"},arguments:[],directives:[]}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"B"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"admin_only"},arguments:[],directives:[]}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"C"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user_only"},arguments:[],directives:[]}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"D"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"both"},arguments:[],directives:[]}]}}],loc:{start:0,end:92}};t.loc.source={body:"query A {\n  public\n}\n\nquery B {\n  admin_only\n}\n\nquery C {\n  user_only\n}\n\nquery D {\n  both\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,t)})),e.definitions&&e.definitions.forEach((function(e){n(e,t)}))}var i={};function a(e,t){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==t)return i}}function r(e,t){var n={kind:e.kind,definitions:[a(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=i[t]||new Set,o=new Set,l=new Set;for(r.forEach((function(e){l.add(e)}));l.size>0;){var s=l;l=new Set,s.forEach((function(e){o.has(e)||(o.add(e),(i[e]||new Set).forEach((function(e){l.add(e)})))}))}return o.forEach((function(t){var i=a(e,t);i&&n.definitions.push(i)})),n}t.definitions.forEach((function(e){if(e.name){var t=new Set;n(e,t),i[e.name.value]=t}})),e.exports=t,e.exports.A=r(t,"A"),e.exports.B=r(t,"B"),e.exports.C=r(t,"C"),e.exports.D=r(t,"D")},2643:e=>{e.exports={content:'with TypeGraph(\n  "deno",\n) as g:\n  public = policies.public()\n\n  fib = t.func(\n    t.struct({"n": t.number()}),\n    t.struct({"res": t.integer(), "ms": t.float()}),\n    PureFunMat(\n      """\n      ({ n }) => {\n        let a = 0, b = 1, c;\n        const start = performance.now();\n        for (\n          let i = 0;\n          i < Math.min(n, 10);\n          c = a + b, a = b, b = c, i += 1\n        );\n        return {\n          res: b,\n          ms: performance.now() - start,\n        };\n      }\n      """\n    ),\n  )\n\n  g.expose(\n    compute_fib=fib,\n    default_policy=[public],\n  )',path:"website/docs/tutorials/policies-and-materializers/deno.py"}},7989:e=>{e.exports={content:'with TypeGraph(\n  "policies",\n  auths=[\n    TypeGraph.Auth.basic(["admin", "user"]),\n  ],\n  cors=TypeGraph.Cors(\n    allow_origin=["https://metatype.dev", "http://localhost:3000"],\n    allow_headers=["authorization"],\n  ),\n) as g:\n  random = RandomRuntime()\n  public = policies.public()\n\n  admin_only = Policy(\n    PureFunMat(\n      "(args, { context }) => context.user ? context.user === \'admin\' : null"\n    ),\n  )\n  user_only = Policy(\n    PureFunMat(\n      "(args, { context }) => context.user ? context.user === \'user\' : null"\n    ),\n  )\n\n  g.expose(\n    public=random.generate(t.string()).add_policy(public),\n    admin_only=random.generate(t.string()).add_policy(admin_only),\n    user_only=random.generate(t.string()).add_policy(user_only),\n    both=random.generate(t.string()).add_policy(user_only, admin_only),\n  )',path:"website/docs/tutorials/policies-and-materializers/policies.py"}}}]);