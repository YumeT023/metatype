(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[625],{7942:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>h});var n=a(959);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9428:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var n=a(959),r=a(6233),i=a(4838),o=a(2232),l=a(2441),s=a(6361);const p={container:"container_KHaM",panel:"panel_p8cl",editor:"editor_LjJP",response:"response_Ger1",tool:"tool_nUFu",notool:"notool_i7V8"},c=e=>{e.getWrapperElement().closest(".graphiql-editor").style.height=`${e.doc.height}px`};function m(e){const{queryEditor:t,variableEditor:a,headerEditor:r}=(0,s._i)({nonNull:!0}),[i,o]=(0,n.useState)(e.defaultTab),l=(0,s.Xd)({onCopyQuery:e.onCopyQuery}),m=(0,s.fE)();return(0,n.useEffect)((()=>{a&&c(a)}),[i,a]),(0,n.useEffect)((()=>{r&&c(r)}),[i,r]),(0,n.useEffect)((()=>{t&&(t.setOption("lineNumbers",!1),t.setOption("extraKeys",{"Alt-G":()=>{t.replaceSelection("@")}}),t.setOption("gutters",[]),t.on("change",c),c(t))}),[t]),(0,n.useEffect)((()=>{a&&(a.setOption("lineNumbers",!1),a.setOption("gutters",[]),a.on("change",c))}),[a]),(0,n.useEffect)((()=>{r&&(r.setOption("lineNumbers",!1),r.setOption("gutters",[]),r.on("change",c))}),[r]),n.createElement("div",{className:"graphiql-editors"},n.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},n.createElement("div",{className:"graphiql-query-editor-wrapper"},n.createElement(s.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly})),n.createElement("div",{className:"graphiql-toolbar",role:"toolbar","aria-label":"Editor Commands"},n.createElement(s._8,null),n.createElement(s.wC,{onClick:()=>m(),label:"Prettify query (Shift-Ctrl-P)"},n.createElement(s.Kt,{className:"graphiql-toolbar-icon","aria-hidden":"true"})),n.createElement(s.wC,{onClick:()=>l(),label:"Copy query (Shift-Ctrl-C)"},n.createElement(s.TI,{className:"graphiql-toolbar-icon","aria-hidden":"true"})))),n.createElement("div",{className:"graphiql-editor-tools"},n.createElement("div",{className:"graphiql-editor-tools-tabs"},n.createElement(s.v0,{type:"button",className:"variables"===i?"active":"",onClick:()=>{o("variables"===i?"":"variables")}},"Variables"),n.createElement(s.v0,{type:"button",className:"headers"===i?"active":"",onClick:()=>{o("headers"===i?"":"headers")}},"Headers"))),n.createElement("section",{className:`graphiql-editor-tool ${i&&i.length>0?p.tool:p.notool}`,"aria-label":"variables"===i?"Variables":"Headers"},n.createElement(s.hF,{editorTheme:e.editorTheme,isHidden:"variables"!==i,keyMap:e.keyMap,onEdit:e.onEditVariables,readOnly:e.readOnly}),n.createElement(s.LA,{editorTheme:e.editorTheme,isHidden:"headers"!==i,keyMap:e.keyMap,onEdit:e.onEditHeaders,readOnly:e.readOnly})))}class d{constructor(){this.map=new Map,this.length=0}getItem(e){return this.map.get(e)}setItem(e,t){this.map.has(e)||(this.length+=1),this.map.set(e,t)}removeItem(e){this.map.has(e)&&(this.length-=1),this.map.delete(e)}clear(){this.length=0,this.map.clear()}}function u(){return(0,s.JB)({nonNull:!0}).isFetching?n.createElement(s.$j,null):null}function h(e){let{typegraph:t,query:a,code:c,codeLanguage:h,codeFileUrl:y,headers:g={},variables:f={},tab:k=""}=e;const{siteConfig:{customFields:{tgUrl:v}}}=(0,o.Z)(),b=(0,n.useMemo)((()=>new d),[]);return n.createElement(i.Z,{fallback:n.createElement("div",null,"Loading...")},(()=>{const e=(0,n.useMemo)((()=>(0,r.nq)({url:`${v}/${t}`})),[]);return n.createElement(s.j$,{fetcher:e,defaultQuery:a.loc.source.body.trim(),defaultHeaders:JSON.stringify(g),variables:JSON.stringify(f),storage:b},n.createElement("div",{className:"mb-6"},n.createElement("div",{className:`graphiql-container ${p.container}`},c?n.createElement("div",{className:`graphiql-response ${p.panel}`},n.createElement(l.Z,{language:h},c)):null,n.createElement("div",{className:`graphiql-session ${p.editor}`},n.createElement(m,{defaultTab:k})),n.createElement("div",{className:`graphiql-response ${p.response}`},n.createElement(u,null),n.createElement(s.iB,null))),y?n.createElement("small",{className:"mx-2"},"See/edit full code on"," ",n.createElement("a",{href:`https://github.com/metatypedev/metatype/blob/main/${y}`},y)):null))}))}},7128:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(1163),r=a(9428),i=a(959);function o(e){let{python:t,...a}=e;return i.createElement(r.Z,(0,n.Z)({code:t.content,codeLanguage:"python",codeFileUrl:t.path},a))}},4442:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(1163),r=(a(959),a(7942)),i=a(2441),o=a(7128);const l={sidebar_position:2},s="Your first typegraph",p={unversionedId:"tutorials/your-first-typegraph/index",id:"tutorials/your-first-typegraph/index",title:"Your first typegraph",description:"Before you jump into coding, a brief introduction. The typegraphs - virtual graphs of types - are the secret sauce of the ecosystem. They establish the foundation for all the abstraction that will be introduced later. Similar to programming languages, they let the developer describe with a type system:",source:"@site/docs/tutorials/your-first-typegraph/index.mdx",sourceDirName:"tutorials/your-first-typegraph",slug:"/tutorials/your-first-typegraph/",permalink:"/docs/tutorials/your-first-typegraph/",draft:!1,editUrl:"https://github.com/metatypedev/metatype/tree/main/website/docs/tutorials/your-first-typegraph/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/tutorials/getting-started"},next:{title:"Adding more runtimes",permalink:"/docs/tutorials/adding-more-runtimes/"}},c={},m=[{value:"Zooming on the types",id:"zooming-on-the-types",level:2},{value:"The typegraph package",id:"the-typegraph-package",level:2},{value:"The meta CLI",id:"the-meta-cli",level:2}],d={toc:m},u="wrapper";function h(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"your-first-typegraph"},"Your first typegraph"),(0,r.kt)("p",null,"Before you jump into coding, a brief introduction. The typegraphs - virtual graphs of types - are the secret sauce of the ecosystem. They establish the foundation for all the abstraction that will be introduced later. Similar to programming languages, they let the developer describe with a type system:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"what")," data types exists"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"how")," these data get transformed"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"where")," these data and transformations run"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"who")," can access them")),(0,r.kt)("h2",{id:"zooming-on-the-types"},"Zooming on the types"),(0,r.kt)("p",null,'There is no "object" or "primitive" type, only 4 main categories of types:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"value types: ",(0,r.kt)("inlineCode",{parentName:"li"},"t.integer()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"t.string()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"t.uuid()"),", etc."),(0,r.kt)("li",{parentName:"ul"},"quantifier types: ",(0,r.kt)("inlineCode",{parentName:"li"},"t.optional(\xb7)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"t.array(\xb7)"),", etc."),(0,r.kt)("li",{parentName:"ul"},"consolidator types: ",(0,r.kt)("inlineCode",{parentName:"li"},"t.struct(\xb7, \xb7)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"t.union(\xb7, \xb7)"),", etc."),(0,r.kt)("li",{parentName:"ul"},"function types: ",(0,r.kt)("inlineCode",{parentName:"li"},"t.func(\xb7 \u2192 \xb7)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"t.policy(\xb7 \u2192 \xb7)"),", etc.")),(0,r.kt)("p",null,"You can combine them with each other to describe almost any data type you may need. The typegate enforces the data validation when data flows through it. Some syntactic sugar is available to make the type definition shorter:"),(0,r.kt)(i.Z,{language:"python",mdxType:"CodeBlock"},a(3898).content),(0,r.kt)("h2",{id:"the-typegraph-package"},"The typegraph package"),(0,r.kt)("p",null,"The typegraph package is a Python package that allows to describe a full typegraph. It's a thin wrapper around the type system, and provides a few helpers to make the typegraph definition easier. It builds on the type system to provide some more building blocks:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"what")," data types exists \u2192 value, quantifier, consolidator ",(0,r.kt)("strong",{parentName:"li"},"types")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"how")," these data get transformed \u2192 function types and ",(0,r.kt)("strong",{parentName:"li"},"materializers")," that specify the transformation"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"where")," these data and transformations run \u2192 ",(0,r.kt)("strong",{parentName:"li"},"runtimes")," metadata that describe materializers operate"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"who")," can access them \u2192 a special case of function types named ",(0,r.kt)("strong",{parentName:"li"},"policies")," that control accesses")),(0,r.kt)("p",null,"This tutorial will cover these abstractions concept by concept and show how to use them by example."),(0,r.kt)("admonition",{title:"Code sample are interactive",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'You can interact with most of the typegraph in the documentation. Some parts might be voluntary hidden and full source can be found on GitHub. Click on "edit this page" to jump there and look into the parent folder.')),(0,r.kt)("p",null,"A complete typegraph definition may look like the following:"),(0,r.kt)(o.Z,{typegraph:"first-typegraph",python:a(1574),query:a(2521),mdxType:"TGExample"}),(0,r.kt)("p",null,"To start with the chat app design, copy the typegraph into a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"typegraph.py")," next to your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file."),(0,r.kt)("h2",{id:"the-meta-cli"},"The meta CLI"),(0,r.kt)("p",null,"The meta CLI use a YAML configuration file to source some information and avoid typing the same arguments over and over again. Copy the following into named ",(0,r.kt)("inlineCode",{parentName:"p"},"metatype.yml")," also next to previous files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'typegates:\n  dev:\n    url: "http://localhost:7890"\n    # default values\n    username: admin\n    password: password\ntypegraphs:\n  python:\n    include: "**/*.py"\n')),(0,r.kt)("p",null,"At this point, you should have everything ready for your first typegraph. Run the following command in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -1a\n# ./\n# ../\n# .venv/\n# docker-compose.yml\n# metatype.yml\n# typegraph.py\n\nmeta dev\n# Loaded 1 typegraph from ./typegraph.py:\n#  \u2192 Pushing typegraph first-typegraph...\n#  \u2713 Success!\n")),(0,r.kt)("p",null,"You can now open ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:7890/first-typegraph"},"http://localhost:7890/first-typegraph")," in your browser. The CLI will automatically watch for changes in the typegraph and reload the typegraph. You should see a GraphQL playground with a query editor and some auto-generated documentation clicking the top-left menu item. ",(0,r.kt)("strong",{parentName:"p"},"Congrats"),", you can now to play with your first typegraph!"),(0,r.kt)("div",{className:"text-center"},(0,r.kt)("img",{src:a(2805).Z,width:"600",alt:"typegate playground"})))}h.isMDXComponent=!0},2521:e=>{var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"get_message"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"second_one"},name:{kind:"Name",value:"get_message"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user_id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:106}};t.loc.source={body:"query {\n  get_message {\n    id\n    title\n    # user_id\n  }\n\n  second_one: get_message {\n    user_id\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,t)})),e.definitions&&e.definitions.forEach((function(e){a(e,t)}))}var n={};t.definitions.forEach((function(e){if(e.name){var t=new Set;a(e,t),n[e.name.value]=t}})),e.exports=t},2805:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/playground-e2945136e370af514015f00940316a79.png"},1574:e=>{e.exports={content:'from typegraph import TypeGraph, policies, t\nfrom typegraph.runtimes.random import RandomMat, RandomRuntime\n\nwith TypeGraph(\n  "first-typegraph",\n) as g:\n  # declare runtimes and policies\n  random = RandomRuntime()\n  public = policies.public()\n\n  # declare types\n  message = t.struct(\n    {\n      "id": t.integer(),\n      "title": t.string(),\n      "user_id": t.integer(),\n    }\n  )\n\n  # expose them with policies\n  g.expose(\n    # input \u2192 output via materializer\n    get_message=t.func(t.struct(), message, RandomMat(random)),\n    default_policy=[public],\n  )',path:"website/docs/tutorials/your-first-typegraph/typegraph.py"}},3898:e=>{e.exports={content:'t.struct(\n  {\n    "name": t.string().max(200),\n    "age": t.optional(t.integer()),  # or t.integer().optional()\n    "messages": t.array(t.struct({"text": t.string(), "sentAt": t.datetime()})),\n  }\n)\n\n# the typegate will accept data as follow\n{\n  "name": "Alan",\n  "age": 28,\n  "messages": [{"text": "Hello!", "sentAt": "2022-12-28T01:11:10Z"}],\n}\n\n# and reject invalid data\n{"name": "Turing", "messages": [{"sentAt": 1}]}',path:"website/docs/tutorials/your-first-typegraph/types.py"}}}]);