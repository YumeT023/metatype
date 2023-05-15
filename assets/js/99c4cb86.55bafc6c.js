(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[476],{7942:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>h});var r=n(959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2092:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(2564),a=(n(959),n(7942)),i=n(7035);const o={},s="IAM provider",l={unversionedId:"iam-provider/index",id:"iam-provider/index",title:"IAM provider",description:"An Identity and Access Management (IAM) provider is a core component of the cloud computing ecosystems. It provide an efficient and secure way to manage authentification for user identities and their authorized privileges within a system.",source:"@site/use-cases/iam-provider/index.mdx",sourceDirName:"iam-provider",slug:"/iam-provider/",permalink:"/use-cases/iam-provider/",draft:!1,editUrl:"https://github.com/metatypedev/metatype/tree/main/website/use-cases/iam-provider/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"useCases",previous:{title:"All-in-one GraphQL server",permalink:"/use-cases/graphql-server/"},next:{title:"Microservices orchestration",permalink:"/use-cases/microservice-orchestration/"}},c={},u=[{value:"Case study",id:"case-study",level:2},{value:"Metatype&#39;s solution",id:"metatypes-solution",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iam-provider"},"IAM provider"),(0,a.kt)("p",null,"An Identity and Access Management (IAM) provider is a core component of the cloud computing ecosystems. It provide an efficient and secure way to manage authentification for user identities and their authorized privileges within a system."),(0,a.kt)("h2",{id:"case-study"},"Case study"),(0,a.kt)("div",{className:"text-center md:float-right p-8"},(0,a.kt)("p",null,(0,a.kt)("img",{src:n(122).Z,width:"321",height:"301"}))),(0,a.kt)("p",null,"Suppose a developer is building a social media platform that allows users to post updates and view other users' profiles. The developer wants to ensure that only authenticated users can access the platform's resources, and that each user can only access their own data."),(0,a.kt)("p",null,"To achieve this, the developer can use OAuth2 for user authentication and access control. OAuth2 allows users to log in using their Google or GitHub credentials, which are verified by Google or GitHub's IAM system. Once the user is authenticated, the social media platform can use OAuth2 to obtain an access token, which is used to authorize the user's access to the platform's resources."),(0,a.kt)("p",null,"The social media platform can also use IAM to control access to resources based on user roles and permissions. For example, only authenticated users can access the platform's resources, and each user can only access their own data."),(0,a.kt)("h2",{id:"metatypes-solution"},"Metatype's solution"),(0,a.kt)("p",null,"Metatype comes with a built-in IAM provider that can be used to manage user identities and their authorized privileges within a system. It supports any OpenID/OAuth2 provider and includes a list of pre-configured ones like Google, GitHub, Facebook, Twitter or LinkedIn. You can also use your own identity provider and rely on JSON Web Tokens (JWT) for authentication."),(0,a.kt)("p",null,"Once the user is authenticated, you can use policy access based control (PBAC) to control access to resources based on user identifies and permissions. For example, only authenticated users can access the platform's resources, and each user can only access their own data. Policies can be defined by any function, and run on or off Metatype."),(0,a.kt)(i.Z,{typegraph:"iam-provider",python:n(1105),query:n(2424),mdxType:"TGExample"}))}m.isMDXComponent=!0},4133:(e,t,n)=>{"use strict";n.d(t,{r:()=>a});var r=n(959);function a(e){let{name:t,choices:n,choice:a,onChange:i}=e;return r.createElement("ul",{className:"pl-0 m-0 list-none w-full"},Object.entries(n).map((e=>{let[n,o]=e;return r.createElement("li",{key:n,className:"inline-block rounded-md overflow-clip mr-1"},r.createElement("div",null,r.createElement("label",{className:"cursor-pointer"},r.createElement("input",{type:"radio",name:t,value:n,checked:n===a,onChange:()=>i(n),className:"hidden peer"}),r.createElement("div",{className:"px-3 py-1 bg-slate-100 peer-checked:bg-metared peer-checked:text-white"},o))))})))}},2481:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(959),a=n(4087),i=n(7731),o=n(1996),s=n(3117),l=n(884);const c=e=>{e.getWrapperElement().closest(".graphiql-editor").style.height=`${e.doc.height}px`};function u(e){const{queryEditor:t,variableEditor:n,headerEditor:a}=(0,l._i)({nonNull:!0}),[i,o]=(0,r.useState)(e.defaultTab),s=(0,l.Xd)({onCopyQuery:e.onCopyQuery}),u=(0,l.fE)();return(0,r.useEffect)((()=>{n&&c(n)}),[i,n]),(0,r.useEffect)((()=>{a&&c(a)}),[i,a]),(0,r.useEffect)((()=>{t&&(t.setOption("lineNumbers",!1),t.setOption("extraKeys",{"Alt-G":()=>{t.replaceSelection("@")}}),t.setOption("gutters",[]),t.on("change",c),c(t))}),[t]),(0,r.useEffect)((()=>{n&&(n.setOption("lineNumbers",!1),n.setOption("gutters",[]),n.on("change",c))}),[n]),(0,r.useEffect)((()=>{a&&(a.setOption("lineNumbers",!1),a.setOption("gutters",[]),a.on("change",c))}),[a]),r.createElement("div",{className:"graphiql-editors"},r.createElement("section",{className:"graphiql-query-editor shadow-sm","aria-label":"Query Editor"},r.createElement("div",{className:"graphiql-query-editor-wrapper"},r.createElement(l.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly})),r.createElement("div",{className:"graphiql-toolbar",role:"toolbar","aria-label":"Editor Commands"},r.createElement(l._8,null),r.createElement(l.wC,{onClick:()=>u(),label:"Prettify query (Shift-Ctrl-P)"},r.createElement(l.Kt,{className:"graphiql-toolbar-icon","aria-hidden":"true"})),r.createElement(l.wC,{onClick:()=>s(),label:"Copy query (Shift-Ctrl-C)"},r.createElement(l.TI,{className:"graphiql-toolbar-icon","aria-hidden":"true"})))),e.noTool?null:r.createElement(r.Fragment,null,r.createElement("div",{className:"graphiql-editor-tools p-0 text-sm "},r.createElement("div",{className:"graphiql-editor-tools-tabs"},r.createElement("div",{className:("variables"===i?"text-slate-800":"")+" p-2 hover:text-slate-800 cursor-pointer",onClick:()=>{o("variables"===i?"":"variables")}},"Variables"),r.createElement("div",{className:("headers"===i?"text-slate-800":"")+" p-2 hover:text-slate-800 cursor-pointer",onClick:()=>{o("headers"===i?"":"headers")}},"Headers"))),r.createElement("section",{className:"graphiql-editor-tool "+(i&&i.length>0?"pt-0":"hidden p-0"),"aria-label":"variables"===i?"Variables":"Headers"},r.createElement(l.hF,{editorTheme:e.editorTheme,isHidden:"variables"!==i,keyMap:e.keyMap,onEdit:e.onEditVariables,readOnly:e.readOnly}),r.createElement(l.LA,{editorTheme:e.editorTheme,isHidden:"headers"!==i,keyMap:e.keyMap,onEdit:e.onEditHeaders,readOnly:e.readOnly}))))}class d{constructor(){this.map=new Map,this.length=0}getItem(e){return this.map.get(e)}setItem(e,t){this.map.has(e)||(this.length+=1),this.map.set(e,t)}removeItem(e){this.map.has(e)&&(this.length-=1),this.map.delete(e)}clear(){this.length=0,this.map.clear()}}var p=n(4133);function m(){return(0,l.JB)({nonNull:!0}).isFetching?r.createElement(l.$j,null):null}const h={typegraph:"Typegraph",playground:"Playground"};function f(e){let{typegraph:t,query:n,code:i,codeLanguage:c,codeFileUrl:f,headers:y={},variables:g={},tab:v="",noTool:b=!1,defaultMode:E=null}=e;const{siteConfig:{customFields:{tgUrl:k}}}=(0,o.Z)(),O=(0,r.useMemo)((()=>new d),[]),w=(0,r.useRef)();(0,r.useEffect)((()=>{w.current&&w.current.querySelector(".clean-btn")?.click()}),[w.current]);const x=(0,r.useMemo)((()=>(0,a.nq)({url:`${k}/${t}`})),[]),[N,T]=(0,r.useState)(E);return r.createElement("div",{className:"@container miniql mb-5"},E?r.createElement(p.r,{name:"mode",choices:h,choice:N,onChange:T}):null,r.createElement(l.j$,{fetcher:x,defaultQuery:n.loc?.source.body.trim(),defaultHeaders:JSON.stringify(y),shouldPersistHeaders:!0,variables:JSON.stringify(g),storage:O},r.createElement("div",{className:(E?"":"grid @2xl:grid-cols-2")+" gap-2 w-full order-first"},E&&"typegraph"!==N?null:r.createElement("div",{className:" bg-slate-100 rounded-lg flex flex-col",ref:w},f?r.createElement("div",{className:"p-2 text-xs font-light"},"See/edit full code on"," ",r.createElement("a",{href:`https://github.com/metatypedev/metatype/blob/main/${f}`},f)):null,i?r.createElement(s.Z,{language:c,wrap:!0,className:"flex-1"},i):null),E&&"playground"!==N?null:r.createElement("div",{className:"flex flex-col graphiql-container"},r.createElement("div",{className:"flex-1 graphiql-session"},r.createElement(u,{defaultTab:v,noTool:b})),r.createElement("div",{className:"flex-1 graphiql-response min-h-[200px] p-2 mt-2 bg-slate-100 rounded-lg"},r.createElement(m,null),r.createElement(l.iB,null))))))}function y(e){return r.createElement(i.Z,{fallback:r.createElement("div",null,"Loading...")},(()=>r.createElement(f,e)))}},7035:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(2564),a=n(2481),i=n(959);function o(e){let{python:t,...n}=e;return i.createElement(a.Z,(0,r.Z)({code:t.content,codeLanguage:"python",codeFileUrl:t.path},n))}},2424:e=>{var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"loginUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"context"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"logoutUrl"},arguments:[],directives:[]}]}}],loc:{start:0,end:64}};t.loc.source={body:"query {\n  loginUrl\n\n  context {\n    username\n  }\n\n  logoutUrl\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var r=e.type;"NamedType"===r.kind&&t.add(r.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,t)})),e.definitions&&e.definitions.forEach((function(e){n(e,t)}))}var r={};t.definitions.forEach((function(e){if(e.name){var t=new Set;n(e,t),r[e.name.value]=t}})),e.exports=t},122:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/image.drawio-b3345f8611397f333ceac94ea774b2d3.svg"},1105:e=>{e.exports={content:'with TypeGraph(\n  "iam-provider",\n  auths=[oauth2.github("openid profile email")],\n) as g:\n  public = policies.public()\n\n  deno = DenoRuntime()\n  host = environ.get("TG_URL", "http://localhost:7890")\n  url = f"{host}/iam-provider/auth/github?redirect_uri={quote_plus(host)}"\n\n  g.expose(\n    loginUrl=deno.static(t.string(), url),\n    logoutUrl=deno.static(t.string(), f"{url}&clear"),\n    context=t.func(\n      t.struct({}),\n      t.struct({"username": t.string()}).optional(),\n      PureFunMat(\n        "(_, { context }) => Object.keys(context).length === 0 ? null : context"\n      ),\n    ),\n    default_policy=[public],\n  )',path:"website/use-cases/iam-provider/typegraph.py"}}}]);