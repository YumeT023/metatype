"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2996],{2039:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(5882),o=(a(959),a(7942));const r={toc:[]};function i(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Metatype is a ",(0,o.kt)("strong",{parentName:"p"},"composition ecosystem")," for developers. It allows to build autonomous, discoverable, and modular API blocks orchestration.\nThese building blocks enable developers to iterate faster, remain agile as the stack grow and focus on domain design rather than implementation."),(0,o.kt)("p",null,"The ecosystem consists of the following parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/typegraph"},(0,o.kt)("strong",{parentName:"a"},"Typegraph")),": a package to describe typegraphs (graphs of types) and their compositions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/typegate"},(0,o.kt)("strong",{parentName:"a"},"Typegate")),": a scalable and fast query engine (API orchestration) with serverless deployment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/meta-cli"},(0,o.kt)("strong",{parentName:"a"},"Meta CLI")),": a command-line tool to smooth the developer experience")))}i.isMDXComponent=!0},4720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>w,frontMatter:()=>g,metadata:()=>k,toc:()=>v});var n=a(5882),o=a(959),r=a(7942),i=(a(9751),a(7875)),s=a(9208);var l=a(4881),p=a(8067),d=a(1576),c=a(2180);const u=l.Ps`
  mutation docs($email: String!) {
    newsletterSignUp(email: $email) {
      id
    }
  }
`;function m(){const[e,t]=(0,o.useState)(""),[a,n]=(0,o.useState)(null),r=function(e){const{siteConfig:{customFields:{tgUrl:t}}}=(0,c.Z)();return(0,o.useMemo)((()=>new p.f({uri:`${t}/${e}`,cache:new d.h})),[t])}("docs");return a||o.createElement("form",{onSubmit:async t=>{if(t.preventDefault(),e.length>0){const{data:t}=await r.mutate({mutation:u,variables:{email:e}});n(t?.newsletterSignUp?.id?"Success!":"Already subscribed!")}}},o.createElement("input",{type:"email",className:"p-1 border border-solid font-sans border-gray-300 rounded-sm text-base",value:e,onChange:e=>t(e.target.value)}),o.createElement("input",{type:"submit",className:"p-1 border border-solid font-sans border-gray-300 rounded-sm cursor-pointer text-base bg-transparent",value:"Submit"}))}var h=a(2039);const g={sidebar_position:1},y="Getting started",k={unversionedId:"tutorials/getting-started",id:"tutorials/getting-started",title:"Getting started",description:"Head over to the conceptual overview to understand the components.",source:"@site/docs/tutorials/getting-started.mdx",sourceDirName:"tutorials",slug:"/tutorials/getting-started",permalink:"/docs/tutorials/getting-started",draft:!1,editUrl:"https://github.com/metatypedev/metatype/tree/main/website/docs/tutorials/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",next:{title:"Your first typegraph",permalink:"/docs/tutorials/your-first-typegraph"}},b={},v=[{value:"Introduction",id:"introduction",level:2},{value:"Quickstart with Metatype Cloud",id:"quickstart-with-metatype-cloud",level:2},{value:"Quickstart with Docker",id:"quickstart-with-docker",level:2},{value:"1. <code>meta</code> CLI",id:"1-meta-cli",level:3},{value:"2. <code>typegraph</code> package",id:"2-typegraph-package",level:3},{value:"3. <code>typegate</code> node",id:"3-typegate-node",level:3},{value:"Source installation",id:"source-installation",level:3}],f={toc:v};function w(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)(h.ZP,{mdxType:"Metatype"}),(0,r.kt)("admonition",{title:"Looking first for some explanation?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Head over to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/overview"},"conceptual overview")," to understand the components.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this tutorial, you will write your first typegraph and deploy it on a typegate node using the Meta CLI.\nYou will design some API blocks for a chat-based app where users can exchange messages and share products."),(0,r.kt)("p",null,"Running the ecosystem requires Python >= 3.8 which should be available on most the recent OS."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"linux",label:"Debian-based Linux",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install python3 python3-pip python3-venv\n"))),(0,r.kt)(s.Z,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python3\n"))),(0,r.kt)(s.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/windows/"},"installer")," from the official Python website and follow the steps."))),(0,r.kt)("admonition",{title:"No previous Python knowledge required.",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"While the definition of typegraphs is currently done in Python, it doesn't require previous experience in Python.\nThe tutorial covers all the basics and doesn't use advanced features of the language.")),(0,r.kt)("h2",{id:"quickstart-with-metatype-cloud"},"Quickstart with Metatype Cloud"),(0,r.kt)("p",null,"This is the easiest way to get started, yet it's not publicly accessible. You can sign-up for the private beta below."),(0,r.kt)(m,{mdxType:"Newsletter"}),(0,r.kt)("h2",{id:"quickstart-with-docker"},"Quickstart with Docker"),(0,r.kt)("h3",{id:"1-meta-cli"},"1. ",(0,r.kt)("inlineCode",{parentName:"h3"},"meta")," CLI"),(0,r.kt)("p",null,"You can download the binary executable from\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metatypedev/metatype/releases/"},"releases page")," on Github, make it\nexecutable and add it to your ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH")," or use\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zyedidia/eget"},"eget")," to automate those steps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eget metatypedev/metatype --to $HOME/.local/bin\n\nmeta --help\nmeta upgrade\n")),(0,r.kt)("h3",{id:"2-typegraph-package"},"2. ",(0,r.kt)("inlineCode",{parentName:"h3"},"typegraph")," package"),(0,r.kt)("p",null,"Create (and activate) the virtual environment (a local folder where you install the dependency of a project) for your project. Then install the ",(0,r.kt)("inlineCode",{parentName:"p"},"typegraph")," package from PyPi using pip."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv .venv\nsource .venv/bin/activate\npip3 install typegraph --upgrade\n\npython3 -c 'import typegraph; print(typegraph.version)'\n")),(0,r.kt)("h3",{id:"3-typegate-node"},"3. ",(0,r.kt)("inlineCode",{parentName:"h3"},"typegate")," node"),(0,r.kt)("p",null,"Finally download and launch a docker-compose manifest running a typegate node, a Redis instance (this is the sole dependency of the typegate) and a Postgres instance to store the app's messages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://raw.githubusercontent.com/metatypedev/metatype/main/examples/docker-compose.yml -o docker-compose.yml\ndocker compose up\n\ncurl -X POST http://localhost:7890/typegate \\\n  -H 'Authorization: Basic YWRtaW46cGFzc3dvcmQ=' \\\n  --data '{\"query\":\"query list { typegraphs { name  }}\"}'\n")),(0,r.kt)("p",null,"And go the next section."),(0,r.kt)("h3",{id:"source-installation"},"Source installation"),(0,r.kt)("p",null,"Alternatively, you can install directly the ",(0,r.kt)("inlineCode",{parentName:"p"},"typegraph")," package and the CLI from the Github repository (useful to check out unreleased features)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip3 install --upgrade git+https://github.com/metatypedev/metatype#subdirectory=typegraph\ncargo install --force meta-cli --git https://github.com/metatypedev/metatype\n")))}w.isMDXComponent=!0}}]);