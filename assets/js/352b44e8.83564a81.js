"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2040],{9352:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>I,contentTitle:()=>r,default:()=>o,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"concepts/components","title":"Open DID Architecture","description":"- Subject: Open DID Architecture","source":"@site/versioned_docs/version-1.000/concepts/components.md","sourceDirName":"concepts","slug":"/concepts/components","permalink":"/did-doc-architecture/docs/concepts/components","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.000/concepts/components.md","tags":[],"version":"1.000","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\ube14\ub85d\uccb4\uc778 \uc5f0\ub3d9","permalink":"/did-doc-architecture/docs/concepts/blockchain_access_ko"},"next":{"title":"Open DID \uad6c\uc131\ub3c4","permalink":"/did-doc-architecture/docs/concepts/components_ko"}}');var t=n(74848),l=n(28453);const c={},r="Open DID Architecture",I={},a=[{value:"Open DID Components",id:"open-did-components",level:2},{value:"Entities",id:"entities",level:3},{value:"Services",id:"services",level:3},{value:"Overall Architecture",id:"overall-architecture",level:2},{value:"Providers",id:"providers",level:3},{value:"TAS Provider",id:"tas-provider",level:4},{value:"Issuer",id:"issuer",level:4},{value:"Verifier",id:"verifier",level:4},{value:"Search Provider",id:"search-provider",level:4},{value:"CApp Provider",id:"capp-provider",level:4},{value:"OP Provider",id:"op-provider",level:4},{value:"Wallet Provider",id:"wallet-provider",level:4},{value:"List Provider",id:"list-provider",level:4},{value:"KYC Provider",id:"kyc-provider",level:4},{value:"Notification Provider",id:"notification-provider",level:4},{value:"Log Provider",id:"log-provider",level:4},{value:"Portal Provider",id:"portal-provider",level:4},{value:"Delegated Issuer",id:"delegated-issuer",level:4},{value:"Storage (Blockchain Provider)",id:"storage-blockchain-provider",level:4},{value:"Storage (DBMS Provider)",id:"storage-dbms-provider",level:4},{value:"Backup Provider",id:"backup-provider",level:4}];function d(i){const e={br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"open-did-architecture",children:"Open DID Architecture"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Subject: Open DID Architecture"}),"\n",(0,t.jsx)(e.li,{children:"Author: OpenSource Development Team"}),"\n",(0,t.jsx)(e.li,{children:"Date: 2024-10-18"}),"\n",(0,t.jsx)(e.li,{children:"Version: v1.0.0"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Version"}),(0,t.jsx)(e.th,{children:"Date"}),(0,t.jsx)(e.th,{children:"Changes"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"v1.0.0"}),(0,t.jsx)(e.td,{children:"2024-10-18"}),(0,t.jsx)(e.td,{children:"Initial version"})]})})]}),"\n",(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.p,{children:"This document explains the main components that make up the Open DID system and provides an overall architecture diagram."}),"\n",(0,t.jsx)(e.h2,{id:"open-did-components",children:"Open DID Components"}),"\n",(0,t.jsx)(e.p,{children:"The components of the Open DID system include entities, services, and providers. Providers combine entities to offer services. The diagram below shows how these components are structured."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"overview",src:n(94086).A+"",width:"382",height:"241"})}),"\n",(0,t.jsx)(e.h3,{id:"entities",children:"Entities"}),"\n",(0,t.jsx)(e.p,{children:"Entities perform a single function. Each entity has a specific role, and the main entities in Open DID are as follows:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"TA (Trusted Authority)"}),": Responsible for registering all providers into the Open DID system to establish trust relationships."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Issuer"}),": Holds the user's identity or qualification information and issues digital IDs to the users."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Verifier"}),": Requests and verifies the user's digital ID to provide services."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"services",children:"Services"}),"\n",(0,t.jsx)(e.p,{children:"Services combine the functions of various entities into products. Services can be offered in various forms such as servers, apps, or SDKs. Examples of services include:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Digital ID Issuance and Management Service"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Entities"}),": Issuer, Wallet, Notification"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Description"}),": A service that issues and manages digital IDs for users. The Issuer entity issues and renews digital IDs based on user identity information, the Wallet entity securely stores and manages issued digital IDs, and the Notification entity supports sending notifications related to ID issuance and renewal."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Notification and Log Management Service"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Entities"}),": Notification, Log, Storage"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Description"}),": Manages notifications related to events occurring within the system and collects and stores all log data to provide necessary statistical data. The Notification entity sends notifications in a user-defined manner, the Log entity records and stores event logs, and the Storage entity securely stores and manages this data."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Integrated Security and Authentication Service"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Entities"}),": KYC, OP"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Description"}),": Provides services for user authentication and authorization management. The KYC entity verifies and authenticates the user's identity, while the OP entity issues secure tokens based on the authenticated information and grants permissions to users."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"overall-architecture",children:"Overall Architecture"}),"\n",(0,t.jsx)(e.p,{children:"The diagram below represents the overall architecture of Open DID. To clearly illustrate the entities that make up Open DID, each provider is assumed to offer a single service, and that service provides the function of a single entity."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"components_overview",src:n(9685).A+"",width:"1240",height:"618"})}),"\n",(0,t.jsx)(e.h3,{id:"providers",children:"Providers"}),"\n",(0,t.jsx)(e.p,{children:"Providers are entities that combine various services to offer comprehensive solutions."}),"\n",(0,t.jsx)(e.h4,{id:"tas-provider",children:"TAS Provider"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Entity Registration: After authenticating the identity of all entities, register them in the OPEN DID system and grant appropriate permissions to the entities."}),"\n",(0,t.jsx)(e.li,{children:"Security Policy Management: Manage and apply security policies for entities in the OPEN DID system to establish trust relationships."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"issuer",children:"Issuer"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Digital ID Issuance: Possesses the user's identity or qualification information and can issue a digital ID to the user."}),"\n",(0,t.jsx)(e.li,{children:"Digital ID Renewal: When the user's identity information changes or the ID expires, a new ID can be created or renewed."}),"\n",(0,t.jsx)(e.li,{children:"Digital ID Revocation: Can revoke the digital ID upon user cancellation or withdrawal."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"verifier",children:"Verifier"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Digital ID Verification: Requests and verifies the user's digital ID to check if the user is authorized to use the service."}),"\n",(0,t.jsx)(e.li,{children:"Service Provision: Provides services to users with valid digital IDs."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"search-provider",children:"Search Provider"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Wallet List Provision: Provides a list of wallets where the user can manage their digital IDs."}),"\n",(0,t.jsx)(e.li,{children:"Wallet Information Provision: Provides detailed information about the wallet (functions, security level, etc.) to help the user make informed choices."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"capp-provider",children:"CApp Provider"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"App Status Verification: Checks if the user's app is in a normal state and verifies whether it is a trusted app."}),"\n",(0,t.jsx)(e.li,{children:"Wallet Trust Information Provision: Provides reliability information about the app requested by the user."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"op-provider",children:"OP Provider"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Token Provision: Verifies the trust information provided by the user and provides a safe and valid token to the user."}),"\n",(0,t.jsx)(e.li,{children:"Authorization Management per Token: Grants permissions based on the tokens issued to the user."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"wallet-provider",children:"Wallet Provider"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Key Storage Integration: Provides an interface to connect to storage (HSM, File, Vault) that can store wallet keys appropriate to the type (device/cloud)."}),"\n",(0,t.jsx)(e.li,{children:"Wallet Status Verification: Checks if the user's wallet is in a normal state and verifies whether it is a trusted wallet."}),"\n",(0,t.jsx)(e.li,{children:"Wallet Trust Information Provision: Provides reliability information about the wallet requested by the user."}),"\n",(0,t.jsx)(e.li,{children:"Provision of Crypto Functions: Provides encryption/decryption, signing/signature verification, encoding/decoding functions."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"list-provider",children:"List Provider"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Issuer List Provision: Provides a list of issuers for VC issuance."}),"\n",(0,t.jsx)(e.li,{children:"VC List Provision: Provides a list of VCs for issuance."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"kyc-provider",children:"KYC Provider"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"User Authentication: Performs user authentication for the use of digital IDs."}),"\n",(0,t.jsx)(e.li,{children:"Identity Information Provision: Provides identity information for the use of digital IDs."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"notification-provider",children:"Notification Provider"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"User Notification Feature Provision: Sends messages to the user via email, SMS, or push notifications."}),"\n",(0,t.jsx)(e.li,{children:"Data and Token Management: Manages data and tokens for the notification feature."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"log-provider",children:"Log Provider"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Log Recording: Collects and stores logs related to events that occur in the system."}),"\n",(0,t.jsx)(e.li,{children:"Statistics Provision: Extracts statistical data from the stored logs and provides it to the user."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"portal-provider",children:"Portal Provider"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Web Portal Service Provision: Provides a web portal service for using VC issuance and VP presentation services."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"delegated-issuer",children:"Delegated Issuer"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"VC Issuance Delegation: Performs functions delegated for VC issuance."}),"\n",(0,t.jsx)(e.li,{children:"VP Submission Delegation: Performs functions delegated for VP submission."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"storage-blockchain-provider",children:"Storage (Blockchain Provider)"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Blockchain Platform Provision: Provides a blockchain platform to store and manage necessary data for each entity."}),"\n",(0,t.jsx)(e.li,{children:"Data Management: Stores and manages data such as DID Docs and VC Meta."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"storage-dbms-provider",children:"Storage (DBMS Provider)"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Public Database Provision: Provides a public database to store and manage necessary data for each entity."}),"\n",(0,t.jsx)(e.li,{children:"Data Management: Stores and manages data such as public keys and VC Meta."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"backup-provider",children:"Backup Provider"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Data Backup: Provides functions to store and manage backup data such as wallets and VCs."}),"\n"]})]})}function o(i={}){const{wrapper:e}={...(0,l.R)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(d,{...i})}):d(i)}},9685:(i,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/components_provider-f8adb29cb861e6099fc9d0167218f65e.svg"},94086:(i,e,n)=>{n.d(e,{A:()=>s});const s="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGZpbGwtb3BhY2l0eT0iMSIgY29sb3ItcmVuZGVyaW5nPSJhdXRvIiBjb2xvci1pbnRlcnBvbGF0aW9uPSJhdXRvIiB0ZXh0LXJlbmRlcmluZz0iYXV0byIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgd2lkdGg9IjM4MiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzaGFwZS1yZW5kZXJpbmc9ImF1dG8iIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJibGFjayIgc3Ryb2tlLWRhc2hhcnJheT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgc3Ryb2tlLXdpZHRoPSIxIiBoZWlnaHQ9IjI0MSIgZm9udC1mYW1pbHk9IidEaWFsb2cnIiBmb250LXN0eWxlPSJub3JtYWwiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIGZvbnQtc2l6ZT0iMTJweCIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGltYWdlLXJlbmRlcmluZz0iYXV0byI+CiAgPCEtLUdlbmVyYXRlZCBieSB5U1ZHIDIuNi0tPgogIDxkZWZzIGlkPSJnZW5lcmljRGVmcyIvPgogIDxnPgogICAgPGRlZnMgaWQ9ImRlZnMxIj4KICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1NDMuNTU5OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgyPSI2NjIuOTc0MyIgeTE9IjIxNC4wMzI0IiB5Mj0iMjU0LjAzMjQiIGlkPSJsaW5lYXJHcmFkaWVudDEiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+CiAgICAgICAgPHN0b3Agc3RvcC1vcGFjaXR5PSIxIiBzdG9wLWNvbG9yPSJyZ2IoMjMyLDIzOCwyNDcpIiBvZmZzZXQ9IjAlIi8+CiAgICAgICAgPHN0b3Agc3RvcC1vcGFjaXR5PSIxIiBzdG9wLWNvbG9yPSJyZ2IoMTgzLDIwMSwyMjcpIiBvZmZzZXQ9IjEwMCUiLz4KICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI1NDMuNTU5OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgyPSI2NjIuOTc0MyIgeTE9IjI3My41NjQ4IiB5Mj0iMzEzLjU2NDgiIGlkPSJsaW5lYXJHcmFkaWVudDIiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+CiAgICAgICAgPHN0b3Agc3RvcC1vcGFjaXR5PSIxIiBzdG9wLWNvbG9yPSJyZ2IoMjMyLDIzOCwyNDcpIiBvZmZzZXQ9IjAlIi8+CiAgICAgICAgPHN0b3Agc3RvcC1vcGFjaXR5PSIxIiBzdG9wLWNvbG9yPSJyZ2IoMTgzLDIwMSwyMjcpIiBvZmZzZXQ9IjEwMCUiLz4KICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI3MDcuOTc0MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgyPSI4MjcuMzg4OSIgeTE9IjIxNC4wMzI0IiB5Mj0iMjU0LjAzMjQiIGlkPSJsaW5lYXJHcmFkaWVudDMiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+CiAgICAgICAgPHN0b3Agc3RvcC1vcGFjaXR5PSIxIiBzdG9wLWNvbG9yPSJyZ2IoMjMyLDIzOCwyNDcpIiBvZmZzZXQ9IjAlIi8+CiAgICAgICAgPHN0b3Agc3RvcC1vcGFjaXR5PSIxIiBzdG9wLWNvbG9yPSJyZ2IoMTgzLDIwMSwyMjcpIiBvZmZzZXQ9IjEwMCUiLz4KICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPGNsaXBQYXRoIGNsaXBQYXRoVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY2xpcFBhdGgxIj4KICAgICAgICA8cGF0aCBkPSJNMCAwIEwzODIgMCBMMzgyIDI0MSBMMCAyNDEgTDAgMCBaIi8+CiAgICAgIDwvY2xpcFBhdGg+CiAgICAgIDxjbGlwUGF0aCBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNsaXBQYXRoMiI+CiAgICAgICAgPHBhdGggZD0iTTQ5OCAxMjUgTDg4MCAxMjUgTDg4MCAzNjYgTDQ5OCAzNjYgTDQ5OCAxMjUgWiIvPgogICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0id2hpdGUiIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDk4LC0xMjUpIiBzdHJva2U9IndoaXRlIj4KICAgICAgPHJlY3QgeD0iNDk4IiB3aWR0aD0iMzgyIiBoZWlnaHQ9IjI0MSIgeT0iMTI1IiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgyKSIgc3Ryb2tlPSJub25lIi8+CiAgICA8L2c+CiAgICA8ZyBmaWxsPSJyZ2IoMjQ1LDI0NSwyNDUpIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwtNDk4LC0xMjUpIiBzdHJva2U9InJnYigyNDUsMjQ1LDI0NSkiPgogICAgICA8cmVjdCB4PSI1MTMuNTU5NyIgeT0iMTQwLjcwMDMiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDIpIiB3aWR0aD0iMzUwLjYxNjgiIHJ4PSI0IiByeT0iNCIgaGVpZ2h0PSIyMDkuMzMyIiBzdHJva2U9Im5vbmUiLz4KICAgICAgPHJlY3QgeD0iNTEzLjU1OTciIHk9IjE0MC43MDAzIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgyKSIgZmlsbD0icmdiKDIzNSwyMzUsMjM1KSIgd2lkdGg9IjM1MC42MTY4IiBoZWlnaHQ9IjIxLjY2NiIgc3Ryb2tlPSJub25lIi8+CiAgICA8L2c+CiAgICA8ZyBmb250LXNpemU9IjE1cHgiIHN0cm9rZS1saW5lY2FwPSJidXR0IiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLC00OTgsLTEyNSkiIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEuNDUiPgogICAgICA8dGV4dCB4PSI2NTkuMDI5MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMTU3LjIwMjMiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDIpIiBzdHJva2U9Im5vbmUiPlByb3ZpZGVyPC90ZXh0PgogICAgICA8cmVjdCB4PSI1MTMuNTU5NyIgeT0iMTQwLjcwMDMiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDIpIiBmaWxsPSJub25lIiB3aWR0aD0iMzUwLjYxNjgiIHN0cm9rZS1kYXNoYXJyYXk9IjYsMiIgcng9IjQiIHJ5PSI0IiBoZWlnaHQ9IjIwOS4zMzIiLz4KICAgIDwvZz4KICAgIDxnIGZpbGw9InJnYigyMjUsMjI1LDIyNSkiIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLC00OTgsLTEyNSkiIHN0cm9rZT0icmdiKDIyNSwyMjUsMjI1KSI+CiAgICAgIDxyZWN0IHg9IjUyOC41NTk3IiB5PSIxNzcuMzY2NCIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMikiIHdpZHRoPSIxNTEuNzg3NyIgcng9IjQiIHJ5PSI0IiBoZWlnaHQ9IjE1Mi42NjYiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8cmVjdCB4PSI1MjguNTU5NyIgeT0iMTc3LjM2NjQiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDIpIiBmaWxsPSJyZ2IoMjM1LDIzNSwyMzUpIiB3aWR0aD0iMTUxLjc4NzciIGhlaWdodD0iMjEuNjY2IiBzdHJva2U9Im5vbmUiLz4KICAgIDwvZz4KICAgIDxnIGZvbnQtc2l6ZT0iMTVweCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsLTQ5OCwtMTI1KSIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiBzdHJva2UtbWl0ZXJsaW1pdD0iMS40NSI+CiAgICAgIDx0ZXh0IHg9IjU3OS4wOTcxIiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIxOTMuODY4MyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMikiIHN0cm9rZT0ibm9uZSI+U2VydmljZTwvdGV4dD4KICAgICAgPHJlY3QgeD0iNTI4LjU1OTciIHk9IjE3Ny4zNjY0IiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgyKSIgZmlsbD0ibm9uZSIgd2lkdGg9IjE1MS43ODc3IiBzdHJva2UtZGFzaGFycmF5PSI2LDIiIHJ4PSI0IiByeT0iNCIgaGVpZ2h0PSIxNTIuNjY2Ii8+CiAgICA8L2c+CiAgICA8ZyBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50MSkiIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLC00OTgsLTEyNSkiIHN0cm9rZT0idXJsKCNsaW5lYXJHcmFkaWVudDEpIj4KICAgICAgPHBhdGggZD0iTTU0My41NTk4IDIxNC4wMzI0IEw2NjIuOTc0MyAyMTQuMDMyNCBMNjYyLjk3NDMgMjU0LjAzMjQgTDU0My41NTk4IDI1NC4wMzI0IFoiIHN0cm9rZT0ibm9uZSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMikiLz4KICAgIDwvZz4KICAgIDxnIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQ1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwtNDk4LC0xMjUpIiBzdHJva2UtbGluZWNhcD0iYnV0dCI+CiAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik01NDMuNTU5OCAyMTQuMDMyNCBMNjYyLjk3NDMgMjE0LjAzMjQgTDY2Mi45NzQzIDI1NC4wMzI0IEw1NDMuNTU5OCAyNTQuMDMyNCBaIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgyKSIvPgogICAgICA8dGV4dCB4PSI1ODYuOTM0IiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIyMzguNTY3NSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMikiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBzdHJva2U9Im5vbmUiPkVudGl0eTwvdGV4dD4KICAgIDwvZz4KICAgIDxnIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQyKSIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsLTQ5OCwtMTI1KSIgc3Ryb2tlPSJ1cmwoI2xpbmVhckdyYWRpZW50MikiPgogICAgICA8cGF0aCBkPSJNNTQzLjU1OTggMjczLjU2NDggTDY2Mi45NzQzIDI3My41NjQ4IEw2NjIuOTc0MyAzMTMuNTY0OCBMNTQzLjU1OTggMzEzLjU2NDggWiIgc3Ryb2tlPSJub25lIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgyKSIvPgogICAgPC9nPgogICAgPGcgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEuNDUiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLC00OTgsLTEyNSkiIHN0cm9rZS1saW5lY2FwPSJidXR0Ij4KICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTU0My41NTk4IDI3My41NjQ4IEw2NjIuOTc0MyAyNzMuNTY0OCBMNjYyLjk3NDMgMzEzLjU2NDggTDU0My41NTk4IDMxMy41NjQ4IFoiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDIpIi8+CiAgICAgIDx0ZXh0IHg9IjU4Ni45MzQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjI5OC4wOTk5IiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgyKSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIHN0cm9rZT0ibm9uZSI+RW50aXR5PC90ZXh0PgogICAgPC9nPgogICAgPGcgZmlsbD0icmdiKDIyNSwyMjUsMjI1KSIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsLTQ5OCwtMTI1KSIgc3Ryb2tlPSJyZ2IoMjI1LDIyNSwyMjUpIj4KICAgICAgPHJlY3QgeD0iNjkyLjk3NDMiIHk9IjE3Ny4zNjY0IiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgyKSIgd2lkdGg9IjE0OS40MTQ2IiByeD0iNCIgcnk9IjQiIGhlaWdodD0iOTEuNjY2IiBzdHJva2U9Im5vbmUiLz4KICAgICAgPHJlY3QgeD0iNjkyLjk3NDMiIHk9IjE3Ny4zNjY0IiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgyKSIgZmlsbD0icmdiKDIzNSwyMzUsMjM1KSIgd2lkdGg9IjE0OS40MTQ2IiBoZWlnaHQ9IjIxLjY2NiIgc3Ryb2tlPSJub25lIi8+CiAgICA8L2c+CiAgICA8ZyBmb250LXNpemU9IjE1cHgiIHN0cm9rZS1saW5lY2FwPSJidXR0IiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLC00OTgsLTEyNSkiIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEuNDUiPgogICAgICA8dGV4dCB4PSI3NDIuMzI1MSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMTkzLjg2ODMiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDIpIiBzdHJva2U9Im5vbmUiPlNlcnZpY2U8L3RleHQ+CiAgICAgIDxyZWN0IHg9IjY5Mi45NzQzIiB5PSIxNzcuMzY2NCIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMikiIGZpbGw9Im5vbmUiIHdpZHRoPSIxNDkuNDE0NiIgc3Ryb2tlLWRhc2hhcnJheT0iNiwyIiByeD0iNCIgcnk9IjQiIGhlaWdodD0iOTEuNjY2Ii8+CiAgICA8L2c+CiAgICA8ZyBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50MykiIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLC00OTgsLTEyNSkiIHN0cm9rZT0idXJsKCNsaW5lYXJHcmFkaWVudDMpIj4KICAgICAgPHBhdGggZD0iTTcwNy45NzQzIDIxNC4wMzI0IEw4MjcuMzg4OSAyMTQuMDMyNCBMODI3LjM4ODkgMjU0LjAzMjQgTDcwNy45NzQzIDI1NC4wMzI0IFoiIHN0cm9rZT0ibm9uZSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXBQYXRoMikiLz4KICAgIDwvZz4KICAgIDxnIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQ1IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwtNDk4LC0xMjUpIiBzdHJva2UtbGluZWNhcD0iYnV0dCI+CiAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik03MDcuOTc0MyAyMTQuMDMyNCBMODI3LjM4ODkgMjE0LjAzMjQgTDgyNy4zODg5IDI1NC4wMzI0IEw3MDcuOTc0MyAyNTQuMDMyNCBaIiBjbGlwLXBhdGg9InVybCgjY2xpcFBhdGgyKSIvPgogICAgICA8dGV4dCB4PSI3NTEuMzQ4NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMjM4LjU2NzUiIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDIpIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgc3Ryb2tlPSJub25lIj5FbnRpdHk8L3RleHQ+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"},28453:(i,e,n)=>{n.d(e,{R:()=>c,x:()=>r});var s=n(96540);const t={},l=s.createContext(t);function c(i){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function r(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:c(i.components),s.createElement(l.Provider,{value:e},i.children)}}}]);