"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8177],{38126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"guide/docs/write_document_guide","title":"Documentation Writing and Management Guidelines","description":"Documentation Tools","source":"@site/docs/guide/docs/write_document_guide.md","sourceDirName":"guide/docs","slug":"/guide/docs/write_document_guide","permalink":"/did-doc-architecture/docs/next/guide/docs/write_document_guide","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/docs/write_document_guide.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"OpenDID API \ubb38\uc11c \uc791\uc131 \uac00\uc774\ub4dc","permalink":"/did-doc-architecture/docs/next/guide/api/API Documentation Writing Guide_ko"},"next":{"title":"Glossary","permalink":"/did-doc-architecture/docs/next/guide/glossary"}}');var r=t(74848),o=t(28453);const d={},s="Documentation Writing and Management Guidelines",a={},c=[{value:"Documentation Tools",id:"documentation-tools",level:2},{value:"Diagram Creation Methods",id:"diagram-creation-methods",level:2},{value:"Document Structure",id:"document-structure",level:3},{value:"Document Modification Example",id:"document-modification-example",level:2}];function l(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"documentation-writing-and-management-guidelines",children:"Documentation Writing and Management Guidelines"})}),"\n",(0,r.jsx)(n.h2,{id:"documentation-tools",children:"Documentation Tools"}),"\n",(0,r.jsx)(n.p,{children:"Most design documents use Markdown (*.md) format. Below is a list of tools used to write Markdown documents."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Tool"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Visual Studio Code"}),(0,r.jsx)(n.td,{children:"Markdown, PlantUML editing, and PDF build"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PlantUML"}),(0,r.jsx)(n.td,{children:"Writing UML diagrams"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"yEd"}),(0,r.jsx)(n.td,{children:"Creating various diagrams including UML"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"diagram-creation-methods",children:"Diagram Creation Methods"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"- Using PlantUML"}),(0,r.jsx)(n.br,{}),"\nThere are two ways to insert PlantUML diagrams within Markdown:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create UML in a separate file (*.puml), export it as an image, and import the image into Markdown."}),"\n",(0,r.jsx)(n.li,{children:"Write the code directly within Markdown."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"- Using yEd"}),(0,r.jsx)(n.br,{}),"\nyEd allows you to create diagrams by editing shapes and lines with a mouse, similar to PowerPoint, while PlantUML requires coding to create diagrams. Diagrams created with yEd can be exported in various image formats such as SVG, PNG, or JPG to be inserted into Markdown documents."]}),"\n",(0,r.jsx)(n.h3,{id:"document-structure",children:"Document Structure"}),"\n",(0,r.jsxs)(n.p,{children:["The repository contains documentation as .md files corresponding to each directory in the ",(0,r.jsx)(n.code,{children:"docs"})," folder, structured as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"XXXX.md\n - /graphml - .graphml files created with yEd  \n - /images - Images converted from diagrams created with yEd and PlantUML, such as PNG and SVG files  \n - /plantuml - .puml files created with PlantUML  \n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Images inserted into the md files are exported with the same file names to manage the history of the files created with graphml and plantuml.",(0,r.jsx)(n.br,{}),"\nThis means that one image corresponds to one graphml or plantuml file."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"document-modification-example",children:"Document Modification Example"}),"\n",(0,r.jsxs)(n.p,{children:["If changes occur in the ",(0,r.jsx)(n.code,{children:"Software Architecture.md of docs/architecture"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Write the content for 4.8 Notification Service"}),"\n",(0,r.jsx)(n.li,{children:"Add the yEd diagram for Notification Service (graphml/308.component_notification_service.graphml)"}),"\n",(0,r.jsx)(n.li,{children:"Export the .graphml to SVG and add it (images/308.component_notification_service.svg)"}),"\n",(0,r.jsx)(n.li,{children:"Write the corresponding content in the md file and insert the image"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"### 4.8. Notification Service  \nWrite a description of the notification service // Write content  \n![](images/308.component_notification_service.svg) // Insert image  \n"})}),"\n",(0,r.jsx)(n.br,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>s});var i=t(96540);const r={},o=i.createContext(r);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);