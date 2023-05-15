"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5630],{7942:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||y[m]||o;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},516:(e,t,r)=>{r.d(t,{ZP:()=>c});var n=r(2564),a=(r(959),r(7942));const o={toc:[]},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ meta new your-folder\n$ cd your-folder\n$ docker compose up --detach\n\n$ curl -X POST http://localhost:7890/typegate \\\n  -H \'Authorization: Basic YWRtaW46cGFzc3dvcmQ=\' \\ # base64 encoded "admin:password"\n  --data \'{"query":"query list { typegraphs { name } }"}\'\n')))}c.isMDXComponent=!0},534:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var n=r(2564),a=(r(959),r(7942)),o=r(516);const p={},c="Typegate",i={unversionedId:"reference/typegate",id:"reference/typegate",title:"Typegate",description:"Typegate version",source:"@site/docs/reference/typegate.mdx",sourceDirName:"reference",slug:"/reference/typegate",permalink:"/docs/reference/typegate",draft:!1,editUrl:"https://github.com/metatypedev/metatype/tree/main/website/docs/reference/typegate.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"types",permalink:"/docs/reference/typegraph/python/typegraph/types"},next:{title:"Queries",permalink:"/docs/reference/typegate/internal-api/prisma-migration/queries"}},s={},l=[],u={toc:l},y="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typegate"},"Typegate"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/metatypedev/metatype/pkgs/container/typegate"},(0,a.kt)("img",{parentName:"a",src:"https://ghcr-badge.deta.dev/metatypedev/typegate/latest_tag?trim=major&label=typegate",alt:"Typegate version"}))),(0,a.kt)(o.ZP,{mdxType:"InstallTypegate"}))}m.isMDXComponent=!0}}]);