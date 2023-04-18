(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7204],{7942:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>r,kt:()=>c});var i=a(959);function I(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){I(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function C(e,t){if(null==e)return{};var a,i,I=function(e,t){if(null==e)return{};var a,i,I={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(I[a]=e[a]);return I}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(I[a]=e[a])}return I}var l=i.createContext({}),o=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},r=function(e){var t=o(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var a=e.components,I=e.mdxType,n=e.originalType,l=e.parentName,r=C(e,["components","mdxType","originalType","parentName"]),d=o(a),s=I,c=d["".concat(l,".").concat(s)]||d[s]||A[s]||n;return a?i.createElement(c,g(g({ref:t},r),{},{components:a})):i.createElement(c,g({ref:t},r))}));function c(e,t){var a=arguments,I=t&&t.mdxType;if("string"==typeof e||I){var n=a.length,g=new Array(n);g[0]=s;var C={};for(var l in t)hasOwnProperty.call(t,l)&&(C[l]=t[l]);C.originalType=e,C[d]="string"==typeof e?e:I,g[1]=C;for(var o=2;o<n;o++)g[o]=a[o];return i.createElement.apply(null,g)}return i.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8100:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>C,default:()=>s,frontMatter:()=>g,metadata:()=>l,toc:()=>r});var i=a(1163),I=(a(959),a(7942)),n=a(7128);const g={},C="Automatic CRUD & validation",l={unversionedId:"automatic-crud-validation/index",id:"automatic-crud-validation/index",title:"Automatic CRUD & validation",description:"CRUD stands for Create, Read, Update, and Delete, which are the four basic functions of persistent storage in a software application. Those operations are commonly used in combination with data validation to ensure that the stored data is correct and consistent.",source:"@site/use-cases/automatic-crud-validation/index.mdx",sourceDirName:"automatic-crud-validation",slug:"/automatic-crud-validation/",permalink:"/use-cases/automatic-crud-validation/",draft:!1,editUrl:"https://github.com/metatypedev/metatype/tree/main/website/use-cases/automatic-crud-validation/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"useCases",next:{title:"Backend for frontend",permalink:"/use-cases/backend-for-frontend/"}},o={},r=[{value:"Case study",id:"case-study",level:2},{value:"Metatype&#39;s solution",id:"metatypes-solution",level:2}],d={toc:r},A="wrapper";function s(e){let{components:t,...g}=e;return(0,I.kt)(A,(0,i.Z)({},d,g,{components:t,mdxType:"MDXLayout"}),(0,I.kt)("h1",{id:"automatic-crud--validation"},"Automatic CRUD & validation"),(0,I.kt)("p",null,"CRUD stands for Create, Read, Update, and Delete, which are the four basic functions of persistent storage in a software application. Those operations are commonly used in combination with data validation to ensure that the stored data is correct and consistent."),(0,I.kt)("h2",{id:"case-study"},"Case study"),(0,I.kt)("div",{className:"text-center md:float-right p-8"},(0,I.kt)("p",null,(0,I.kt)("img",{src:a(4828).Z,width:"121",height:"321"}))),(0,I.kt)("p",null,"Let's say you are developing a web application for a retail store that allows customers to place orders online. In this scenario, you would need to use CRUD operations to create, read, update, and delete data related to orders, customers, products, and inventory."),(0,I.kt)("p",null,"You would have to model each of these entities as a data type, define the operations that can be performed on them and write the code to ensure the correctness of the data processed in the operations."),(0,I.kt)("p",null,"For example, you would need to define a ",(0,I.kt)("inlineCode",{parentName:"p"},"Customer")," type with the following fields: ",(0,I.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,I.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,I.kt)("inlineCode",{parentName:"p"},"email"),", and ",(0,I.kt)("inlineCode",{parentName:"p"},"address"),". You would also need to define the operations that can be performed on the ",(0,I.kt)("inlineCode",{parentName:"p"},"Customer")," type, such as ",(0,I.kt)("inlineCode",{parentName:"p"},"createCustomer"),", ",(0,I.kt)("inlineCode",{parentName:"p"},"updateCustomer"),", and ",(0,I.kt)("inlineCode",{parentName:"p"},"deleteCustomer"),". You would also need to write the code to validate the data in the ",(0,I.kt)("inlineCode",{parentName:"p"},"createCustomer")," operation to ensure that the customer's email address is valid and that the customer's address is not empty. Same for the other fields."),(0,I.kt)("h2",{id:"metatypes-solution"},"Metatype's solution"),(0,I.kt)("p",null,"Metatype simplifies the development of CRUD APIs by providing the ",(0,I.kt)("a",{parentName:"p",href:"/docs/reference/typegraph/typegraph/providers/prisma/runtimes/prisma"},"Prisma runtime")," that automates the creation of the API for CRUD operations and corresponding data validation. It can even validate some advanced types like email which may not be supported by downstream system (like database that often store email address into plain string field). This makes it faster for developers to create scalable CRUD APIs and enable them to focus their expertise where it matters most like checkout or search capabilities."),(0,I.kt)(n.Z,{typegraph:"prisma-runtime",python:a(2107),query:a(683),mdxType:"TGExample"}))}s.isMDXComponent=!0},9428:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var i=a(959),I=a(6233),n=a(4838),g=a(2232),C=a(2441),l=a(6361);const o={container:"container_KHaM",panel:"panel_p8cl",editor:"editor_LjJP",response:"response_Ger1",tool:"tool_nUFu",notool:"notool_i7V8"},r=e=>{e.getWrapperElement().closest(".graphiql-editor").style.height=`${e.doc.height}px`};function d(e){const{queryEditor:t,variableEditor:a,headerEditor:I}=(0,l._i)({nonNull:!0}),[n,g]=(0,i.useState)(e.defaultTab),C=(0,l.Xd)({onCopyQuery:e.onCopyQuery}),d=(0,l.fE)();return(0,i.useEffect)((()=>{a&&r(a)}),[n,a]),(0,i.useEffect)((()=>{I&&r(I)}),[n,I]),(0,i.useEffect)((()=>{t&&(t.setOption("lineNumbers",!1),t.setOption("extraKeys",{"Alt-G":()=>{t.replaceSelection("@")}}),t.setOption("gutters",[]),t.on("change",r),r(t))}),[t]),(0,i.useEffect)((()=>{a&&(a.setOption("lineNumbers",!1),a.setOption("gutters",[]),a.on("change",r))}),[a]),(0,i.useEffect)((()=>{I&&(I.setOption("lineNumbers",!1),I.setOption("gutters",[]),I.on("change",r))}),[I]),i.createElement("div",{className:"graphiql-editors"},i.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},i.createElement("div",{className:"graphiql-query-editor-wrapper"},i.createElement(l.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly})),i.createElement("div",{className:"graphiql-toolbar",role:"toolbar","aria-label":"Editor Commands"},i.createElement(l._8,null),i.createElement(l.wC,{onClick:()=>d(),label:"Prettify query (Shift-Ctrl-P)"},i.createElement(l.Kt,{className:"graphiql-toolbar-icon","aria-hidden":"true"})),i.createElement(l.wC,{onClick:()=>C(),label:"Copy query (Shift-Ctrl-C)"},i.createElement(l.TI,{className:"graphiql-toolbar-icon","aria-hidden":"true"})))),i.createElement("div",{className:"graphiql-editor-tools"},i.createElement("div",{className:"graphiql-editor-tools-tabs"},i.createElement(l.v0,{type:"button",className:"variables"===n?"active":"",onClick:()=>{g("variables"===n?"":"variables")}},"Variables"),i.createElement(l.v0,{type:"button",className:"headers"===n?"active":"",onClick:()=>{g("headers"===n?"":"headers")}},"Headers"))),i.createElement("section",{className:`graphiql-editor-tool ${n&&n.length>0?o.tool:o.notool}`,"aria-label":"variables"===n?"Variables":"Headers"},i.createElement(l.hF,{editorTheme:e.editorTheme,isHidden:"variables"!==n,keyMap:e.keyMap,onEdit:e.onEditVariables,readOnly:e.readOnly}),i.createElement(l.LA,{editorTheme:e.editorTheme,isHidden:"headers"!==n,keyMap:e.keyMap,onEdit:e.onEditHeaders,readOnly:e.readOnly})))}class A{constructor(){this.map=new Map,this.length=0}getItem(e){return this.map.get(e)}setItem(e,t){this.map.has(e)||(this.length+=1),this.map.set(e,t)}removeItem(e){this.map.has(e)&&(this.length-=1),this.map.delete(e)}clear(){this.length=0,this.map.clear()}}function s(){return(0,l.JB)({nonNull:!0}).isFetching?i.createElement(l.$j,null):null}function c(e){let{typegraph:t,query:a,code:r,codeLanguage:c,codeFileUrl:m,headers:u={},variables:p={},tab:b=""}=e;const{siteConfig:{customFields:{tgUrl:y}}}=(0,g.Z)(),Z=(0,i.useMemo)((()=>new A),[]);return i.createElement(n.Z,{fallback:i.createElement("div",null,"Loading...")},(()=>{const e=(0,i.useMemo)((()=>(0,I.nq)({url:`${y}/${t}`})),[]);return i.createElement(l.j$,{fetcher:e,defaultQuery:a.loc.source.body.trim(),defaultHeaders:JSON.stringify(u),variables:JSON.stringify(p),storage:Z},i.createElement("div",{className:"mb-6"},i.createElement("div",{className:`graphiql-container ${o.container}`},r?i.createElement("div",{className:`graphiql-response ${o.panel}`},i.createElement(C.Z,{language:c},r)):null,i.createElement("div",{className:`graphiql-session ${o.editor}`},i.createElement(d,{defaultTab:b})),i.createElement("div",{className:`graphiql-response ${o.response}`},i.createElement(s,null),i.createElement(l.iB,null))),m?i.createElement("small",{className:"mx-2"},"See/edit full code on"," ",i.createElement("a",{href:`https://github.com/metatypedev/metatype/blob/main/${m}`},m)):null))}))}},7128:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var i=a(1163),I=a(9428),n=a(959);function g(e){let{python:t,...a}=e;return n.createElement(I.Z,(0,i.Z)({code:t.content,codeLanguage:"python",codeFileUrl:t.path},a))}},683:e=>{var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"create"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"create_user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"data"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"firstname"},value:{kind:"StringValue",value:"",block:!1}},{kind:"ObjectField",name:{kind:"Name",value:"email"},value:{kind:"StringValue",value:"john@doe.com",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"read"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"read_user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"firstname"},value:{kind:"StringValue",value:"",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:223}};t.loc.source={body:'mutation create {\n  create_user(\n    data: {\n      firstname: "" # fill me\n      email: "john@doe.com"\n    }\n  ) {\n    id\n  }\n}\n\nquery read {\n  read_user(\n    where: {\n      firstname: "" # fill me\n    }\n  ) {\n    id\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,t)})),e.definitions&&e.definitions.forEach((function(e){a(e,t)}))}var i={};function I(e,t){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==t)return i}}function n(e,t){var a={kind:e.kind,definitions:[I(e,t)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var n=i[t]||new Set,g=new Set,C=new Set;for(n.forEach((function(e){C.add(e)}));C.size>0;){var l=C;C=new Set,l.forEach((function(e){g.has(e)||(g.add(e),(i[e]||new Set).forEach((function(e){C.add(e)})))}))}return g.forEach((function(t){var i=I(e,t);i&&a.definitions.push(i)})),a}t.definitions.forEach((function(e){if(e.name){var t=new Set;a(e,t),i[e.name.value]=t}})),e.exports=t,e.exports.create=n(t,"create"),e.exports.read=n(t,"read")},4828:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyBob3N0PSI2NWJkNzExNDRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMjFweCIgaGVpZ2h0PSIzMjFweCIgdmlld0JveD0iLTAuNSAtMC41IDEyMSAzMjEiIGNvbnRlbnQ9IiZsdDtteGZpbGUmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7dEF4eUpDZUVWUjVvV2UyWDZEYmsmcXVvdDsgbmFtZT0mcXVvdDtQYWdlLTEmcXVvdDsmZ3Q7elZiZmI5b3dFUDVyZUJ6S0R3anRZNEYybTFRME5qUzFmVFRKa1ZnemNlUTRrT3l2M3lXMms1aEF5N1NwNmd2Y2ZiN3puYis3Y3p6eUYvdnlzeUJac3VJUnNKSG5ST1hJWDQ0OEw1aTQrRnNEbFFMOFcwY0JzYUNSZ3R3TzJORGZvRUZqVnRBSWNzdFFjczRreld3dzVHa0tvYlF3SWdRLzJtWTd6dXlvR1lsaEFHeEN3b2JvRTQxa290QWJiOWJoWDRER2lZbnNCcmRxWlUrTXNUNUpucENJSDN1UWZ6L3lGNEp6cWFSOXVRQldjMmQ0VVg0UEYxYmJ4QVNrOGhvSHoxY2VCOElLZlRpZG1Lek1hU0hDdzJzMTVTbit6Uk81WjZpNUtFSko1VFBLem5pcXRaZmV5ckl1dVdPVXlpaXBGRlhQcVZaZittdWRXNk1aUDVWYW5jL0Y0Mm9vNTRVSXRaVTMwUzFDUkF6YXpBdGFzckZKZ2U4QjQ2Q043dEJQenRqMXBzcE5BQ09TSHV5UVJIZFEzTHEydTYwNXhXUTZFNzdiNVJqV3FvS3hLVTAydWgzMFBFd21qaDFHcGE2OXVvMVE2R1hmUVUyUkx4UjhjcWJnQVVOYTVsc1U0bHE0VzMrdGg0ZFJaRFZ2VjRWWk5naUdhbDJlQUVVTTd0eGxtUkkySUE0VVMzRGFUWUlYYVFTUnJ1Z3hvUkkyR1dscWRjVEx3bTR1blNzSUNlWHJKYjlZU3MrM3VmWE42QjI3eVhVTmx2U21ObkF1bDlvcXdHdHNUei93TkRYYUdnVEZZNEg0dHhFTHpvelk3SHhkcnA2bnEwa08zbTdweFkrZnl6cE1HdFdmSFNLSnNxY29VcDVlMStNcmtFUlcyY2RyNmZhNmVKZVduZzNZM254L2JHYitsTVFWVDJPK25LdjdBR1E0SGpDSG43K3NGc09LVWFSUStHL3p0MVZrUDI1YmdJUy80cVlFM3dxSjI0REdjL1ZzY0tmL2lmU1RPM29hREVrUHpuQis4L2VjbzlxOUFOUWQzejJqL1BzLyZsdDsvZGlhZ3JhbSZndDsmbHQ7L214ZmlsZSZndDsiPgogICAgPGRlZnMvPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTSA2MCA2MCBMIDYwIDExMy42MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0gNjAgMTE4Ljg4IEwgNTYuNSAxMTEuODggTCA2MCAxMTMuNjMgTCA2My41IDExMS44OCBaIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+CiAgICAgICAgICAgIDxzd2l0Y2g+CiAgICAgICAgICAgICAgICA8Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij4KICAgICAgICAgICAgICAgICAgICA8ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDExOHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDMwcHg7IG1hcmdpbi1sZWZ0OiAxcHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQVBJIGNsaWVudHMKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2ViLCBBcHAsIFNlcnZpY2UKICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZm9yZWlnbk9iamVjdD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjYwIiB5PSIzNCIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgICAgICAgICAgICAgICAgIEFQSSBjbGllbnRzLi4uCiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgIDwvc3dpdGNoPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBkPSJNIDYwIDE4MCBMIDYwIDIzMy42MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0gNjAgMjM4Ljg4IEwgNTYuNSAyMzEuODggTCA2MCAyMzMuNjMgTCA2My41IDIzMS44OCBaIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSIwIiB5PSIxMjAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgc3Ryb2tlPSJyZ2IoMCwgMCwgMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj4KICAgICAgICAgICAgPHN3aXRjaD4KICAgICAgICAgICAgICAgIDxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPgogICAgICAgICAgICAgICAgICAgIDxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMTUwcHg7IG1hcmdpbi1sZWZ0OiAxcHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1JVRCBhbmQgZGF0YSB2YWxpZGF0aW9uCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ldGF0eXBlCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI2MCIgeT0iMTU0IiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICAgICAgICAgICAgICAgICAgQ1JVRCBhbmQgZGF0YSB2YWxpZGEuLi4KICAgICAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICAgICAgPC9zd2l0Y2g+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGQ9Ik0gMzAgMjU1IEMgMzAgMjQ2LjcyIDQzLjQzIDI0MCA2MCAyNDAgQyA2Ny45NiAyNDAgNzUuNTkgMjQxLjU4IDgxLjIxIDI0NC4zOSBDIDg2Ljg0IDI0Ny4yMSA5MCAyNTEuMDIgOTAgMjU1IEwgOTAgMzA1IEMgOTAgMzEzLjI4IDc2LjU3IDMyMCA2MCAzMjAgQyA0My40MyAzMjAgMzAgMzEzLjI4IDMwIDMwNSBaIiBmaWxsPSJyZ2IoMjU1LCAyNTUsIDI1NSkiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cGF0aCBkPSJNIDkwIDI1NSBDIDkwIDI2My4yOCA3Ni41NyAyNzAgNjAgMjcwIEMgNDMuNDMgMjcwIDMwIDI2My4yOCAzMCAyNTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDAsIDAsIDApIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj4KICAgICAgICAgICAgPHN3aXRjaD4KICAgICAgICAgICAgICAgIDxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPgogICAgICAgICAgICAgICAgICAgIDxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogNThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAyOTNweDsgbWFyZ2luLWxlZnQ6IDMxcHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTUUwsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb25nb0RCLCBldGMuCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSI2MCIgeT0iMjk2IiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICAgICAgICAgICAgICAgICAgU1FMLC4uLgogICAgICAgICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICA8L3N3aXRjaD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8c3dpdGNoPgogICAgICAgIDxnIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIvPgogICAgICAgIDxhIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTUpIiB4bGluazpocmVmPSJodHRwczovL3d3dy5kaWFncmFtcy5uZXQvZG9jL2ZhcS9zdmctZXhwb3J0LXRleHQtcHJvYmxlbXMiIHRhcmdldD0iX2JsYW5rIj4KICAgICAgICAgICAgPHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMHB4IiB4PSI1MCUiIHk9IjEwMCUiPgogICAgICAgICAgICAgICAgVGV4dCBpcyBub3QgU1ZHIC0gY2Fubm90IGRpc3BsYXkKICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvYT4KICAgIDwvc3dpdGNoPgo8L3N2Zz4K"},2107:e=>{e.exports={content:'with TypeGraph(\n  "prisma-runtime",\n) as g:\n  public = policies.public()\n  db = PrismaRuntime("legacy", "POSTGRES_CONN")\n\n  user = t.struct(\n    {\n      "id": t.uuid().config("id", "auto"),\n      "email": t.email(),\n      "firstname": t.string().min(2).max(2000),\n    }\n  ).named("user")\n\n  g.expose(\n    create_user=db.create(user),\n    read_user=db.find(user),\n    default_policy=[public],\n  )',path:"website/use-cases/prisma.py"}}}]);