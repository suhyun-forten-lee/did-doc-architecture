"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9454],{99757:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"data standard/verifiable credential format/Profile format","title":"Profile format","description":"- Subject","source":"@site/versioned_docs/version-1.000/data standard/verifiable credential format/Profile format.md","sourceDirName":"data standard/verifiable credential format","slug":"/data standard/verifiable credential format/Profile format","permalink":"/did-doc-architecture/docs/data standard/verifiable credential format/Profile format","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.000/data standard/verifiable credential format/Profile format.md","tags":[],"version":"1.000","frontMatter":{"puppeteer":{"pdf":{"format":"A4","displayHeaderFooter":true,"landscape":false,"scale":0.8,"margin":{"top":"1.2cm","right":"1cm","bottom":"1cm","left":"1cm"}},"image":{"quality":100,"fullPage":false}}},"sidebar":"tutorialSidebar","previous":{"title":"DID Document format","permalink":"/did-doc-architecture/docs/data standard/did document format/DID Document format_ko"},"next":{"title":"Profile format","permalink":"/did-doc-architecture/docs/data standard/verifiable credential format/Profile format_ko"}}');var r=i(74848),t=i(28453);const l={puppeteer:{pdf:{format:"A4",displayHeaderFooter:!0,landscape:!1,scale:.8,margin:{top:"1.2cm",right:"1cm",bottom:"1cm",left:"1cm"}},image:{quality:100,fullPage:!1}}},o="Profile format",a={},d=[{value:"Revision History",id:"revision-history",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"1. Overview",id:"1-overview",level:2},{value:"1.1. Purpose",id:"11-purpose",level:3},{value:"2. General Matters",id:"2-general-matters",level:2},{value:"2.1. Data Types and Constants",id:"21-data-types-and-constants",level:3},{value:"3. Issue Profile",id:"3-issue-profile",level:2},{value:"3.1. Issue Profile Structure",id:"31-issue-profile-structure",level:3},{value:"3.1.1. <code>IssueProfile</code> object",id:"311-issueprofile-object",level:4},{value:"3.2. Issue Profile Example",id:"32-issue-profile-example",level:3},{value:"4. Verify Profile",id:"4-verify-profile",level:2},{value:"4.1. Verify Profile Structure",id:"41-verify-profile-structure",level:3},{value:"4.1.1. <code>VerifyProfile</code> object",id:"411-verifyprofile-object",level:4},{value:"4.2. Verify Profile Example",id:"42-verify-profile-example",level:3}];function c(e){const n={a:"a",br:"br",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"profile-format",children:"Profile format"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Subject\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Profile Structure Definition"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Author: Kang Youngho"}),"\n",(0,r.jsx)(n.li,{children:"Date: 2024-09-03"}),"\n",(0,r.jsx)(n.li,{children:"Version: v1.0.0"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"revision-history",children:"Revision History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Version"}),(0,r.jsx)(n.th,{children:"Date"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"v1.0.0"}),(0,r.jsx)(n.td,{children:"2024-09-03"}),(0,r.jsx)(n.td,{children:"Initial version"})]})})]}),"\n",(0,r.jsx)(n.div,{style:{pageBreakAfter:"always"}}),"\n",(0,r.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#1-overview",children:"1. Overview"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#11-purpose",children:"1.1. Purpose"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#2-general-matters",children:"2. General Matters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#21-data-types-and-constants",children:"2.1. Data Types and Constants"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#3-issue-profile",children:"3. Issue Profile"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#31-issue-profile-structure",children:"3.1. Issue Profile Structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"#311-issueprofile-object",children:["3.1.1. ",(0,r.jsx)(n.code,{children:"IssueProfile"})," object"]})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#32-issue-profile-example",children:"3.2. Issue Profile Example"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#4-verify-profile",children:"4. Verify Profile"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#41-verify-profile-structure",children:"4.1. Verify Profile Structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"#411-verifyprofile-object",children:["4.1.1. ",(0,r.jsx)(n.code,{children:"VerifyProfile"})," object"]})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#42-verify-profile-example",children:"4.2. Verify Profile Example"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.div,{style:{pageBreakAfter:"always"}}),"\n",(0,r.jsx)(n.h2,{id:"1-overview",children:"1. Overview"}),"\n",(0,r.jsx)(n.p,{children:"The Profile is the request information provided to the Holder when the Issuer issues a VC or the Verifier receives a VP presentation. There are two types as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Issue Profile: Issuance Request Information"}),"\n",(0,r.jsx)(n.li,{children:"Verify Profile: Verification Request Information"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"How the Profile is transmitted to the Holder's device is beyond the scope of this document, but examples include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example 1"}),": Encoding the Profile into a QR code and displaying it on a screen"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example 2"}),": Serializing the Profile into other forms of data and including it in a PUSH request message to send a PUSH message"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example 3"}),": Transmitting a downloadable URL for the Profile via various interfaces such as email, NFC, BLE, etc."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"11-purpose",children:"1.1. Purpose"}),"\n",(0,r.jsx)(n.p,{children:"The purpose of this document is to define the structure of various Profiles and explain how to use them. As mentioned earlier, the methods of transmitting Profiles between entities are not covered in this document and should be implemented separately according to the requirements of each implementation."}),"\n",(0,r.jsx)(n.h2,{id:"2-general-matters",children:"2. General Matters"}),"\n",(0,r.jsx)(n.h3,{id:"21-data-types-and-constants",children:"2.1. Data Types and Constants"}),"\n",(0,r.jsxs)(n.p,{children:["For items not defined here, refer to ",(0,r.jsx)(n.code,{children:"[DATA-SPEC]"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:'def enum PROOF_TYPE: "proof type"\n{\n    "RsaSignature2018",\n    "Secp256k1Signature2018",\n    "Secp256r1Signature2018",\n}\n\ndef enum PROOF_PURPOSE: "proof purpose"\n{\n    "assertionMethod",\n    "authentication",\n    "keyAgreement",\n    "capabilityInvocation",\n    "capabilityDelegation",\n}\n\ndef enum CREDENTIAL_SCHEMA_TYPE: "credential schema type"\n{\n    "OsdSchemaCredential": "OSD VC Schema",\n}\n\ndef enum PROFILE_TYPE: "profile type"\n{\n    "IssueProfile" : "Issuance Request Information",\n    "VerifyProfile": "Verification Request Information",\n}\n\ndef enum ECC_CURVE_TYPE: "ECC curve type"\n{\n    "Secp256k1",\n    "Secp256r1",\n}\n\ndef enum SYMMETRIC_CIPHER_TYPE: "symmetric cipher type"\n{\n    "AES-128-CBC",\n    "AES-128-ECB",\n    "AES-256-CBC",\n    "AES-256-ECB",\n}\n\ndef enum SYMMETRIC_PADDING_TYPE: "symmetric padding type"\n{\n    "NOPAD",\n    "PKCS5",\n}\n\ndef enum VERIFY_AUTH_TYPE: "authentication type for presentation"\n{\n    0x00000000: "No restrictions on authentication methods",\n    0x00000001: "No Authentication",\n    0x00000002: "PIN",\n    0x00000004: "BIO",\n    0x00000006: "PIN or BIO",\n    0x00008006: "PIN and BIO",\n}\n'})}),"\n",(0,r.jsx)(n.div,{style:{pageBreakAfter:"always"}}),"\n",(0,r.jsx)(n.h2,{id:"3-issue-profile",children:"3. Issue Profile"}),"\n",(0,r.jsx)(n.p,{children:"The Issue Profile is a data bundle that the Issuer uses to provide the Holder with information about the issuance procedure and the VC to be issued. Specifically, it includes the following information:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Category"}),(0,r.jsx)(n.th,{children:"Details"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Issuer Info"}),(0,r.jsx)(n.td,{children:"\u2022 Name, DID, Reference URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"VC Schema"}),(0,r.jsxs)(n.td,{children:["\u2022 VC Schema URL or directly includes the VC Schema",(0,r.jsx)(n.br,{}),"(Includes directly only if there is no limit on Profile size)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Issuance Method"}),(0,r.jsxs)(n.td,{children:["\u2022 Issuance request API URL",(0,r.jsx)(n.br,{}),"\u2022 Information related to request encryption (recipient public key, nonce, algorithm, etc.)"]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"31-issue-profile-structure",children:"3.1. Issue Profile Structure"}),"\n",(0,r.jsxs)(n.h4,{id:"311-issueprofile-object",children:["3.1.1. ",(0,r.jsx)(n.code,{children:"IssueProfile"})," object"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:'def object IssueProfile: "Issue Profile"\n{\n    //--------------------------------------------------------------------------\n    // Profile Metadata\n    //--------------------------------------------------------------------------\n    + uuid         "id"         : "profile id"\n    + PROFILE_TYPE "type"       : "profile type", value("IssueProfile")\n    + string       "title"      : "profile title"\n    - string       "description": "profile description", default(""), emptiable(true)\n    - LogoImage    "logo"       : "logo image for issuance"\n    + ENCODING     "encoding"   : "encoding", default("UTF-8")\n    + LANGUAGE     "language"   : "language code"\n\n    //--------------------------------------------------------------------------\n    // Profile Contents\n    //--------------------------------------------------------------------------\n    + object "profile": "profile contents"\n    {\n        + ProviderDetail "issuer": "issuer information"\n\n        + object "credentialSchema": "VC Schema information"\n        {\n            + url                    "id"   : "VC Schema URL"\n            + CREDENTIAL_SCHEMA_TYPE "type" : "VC Schema format type"\n            - multibase              "value": "VC Schema encoded in multibase"\n        }\n\n        + object "process": "issuance method"\n        {\n            + array(url) "endpoints"  : "list of issuance API endpoints"\n            + ReqE2e     "reqE2e"     : "E2E request information (without proof)"\n            + multibase  "issuerNonce": "issuer nonce", byte_length(16)\n        }\n    }\n\n    //--------------------------------------------------------------------------\n    // Proof\n    //--------------------------------------------------------------------------\n    + AssertProof "proof": "issuer\'s signature for the profile"\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"~/profile/credentialSchema"}),": VC Schema Information\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"id"}),": URL to download the VC Schema"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value"}),": VC Schema encoded in multibase (Base64 recommended)\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Used when a client cannot download the VC Schema"}),"\n",(0,r.jsx)(n.li,{children:"Be cautious of Profile size as it may become large depending on the Profile transmission method (e.g., QR code)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"~/profile/process"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"endpoints"}),": Service endpoint part excluding the path portion of the issuance API"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"reqE2e"}),": Key exchange request information for E2E encryption"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"issuerNonce"}),": Must include ",(0,r.jsx)(n.code,{children:"issuerNonce"})," when signing the issuance request information in the future"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"32-issue-profile-example",children:"3.2. Issue Profile Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "id": "24a60adc-19f0-45c3-934b-fc9f350c7d4c",\n    "type": "IssueProfile",\n    "title": "Woosan University Student ID Issuance",\n    "description": "Issuance of Woosan University Student ID.",\n    "encoding": "UTF-8",\n    "language": "ko",\n    "profile": {\n        "issuer": {\n            "did": "did:example:woosanuniv",\n            "certVcRef": "https://woosan.ac.kr/cert-vc/0528",\n            "name": "Woosan University",\n            "ref": "https://woosan.ac.kr"\n        },\n        "credentialSchema": {\n            "id": "https://woosan.ac.kr/schema/student_id_v2.json",\n            "type": "OsdSchemaCredential"\n        },\n        "process": {\n            "endpoints": ["https://woosan.ac.kr/issue"],\n            "reqE2e": {\n                "nonce": "uVGhlIHF1aWNrIGJy",\n                "curve": "Secp256r1",\n                "publicKey": "zgg7kPM4Fv6id6YaLJ2v5uEdX4Y73kZBvuJCxieAAVQna",\n                "cipher": "AES-256-CBC",\n                "padding": "PKCS5"\n            },\n            "issuerNonce": "ucmthamw7ZmtkamFhZGZlZg"\n        }\n    },\n    "proof": {\n        "type": "Secp256r1Signature2018",\n        "created": "2024-04-29T11:27:30Z",\n        "verificationMethod": "did:example:woosanuniv?versionId=1#assert",\n        "proofPurpose": "assertionMethod",\n        "proofValue": "zDgYdYMUYHURJLD7xdnWRiqWCEY5u5fKzZs6Z...MzLHoPiPQ9sSVfRrs1D"\n    }\n}\n'})}),"\n",(0,r.jsx)(n.div,{style:{pageBreakAfter:"always"}}),"\n",(0,r.jsx)(n.h2,{id:"4-verify-profile",children:"4. Verify Profile"}),"\n",(0,r.jsx)(n.p,{children:"The Verify Profile is a data bundle that the Verifier uses to provide the Holder with information about the VP presentation method and the VC to be presented. Specifically, it includes the following information:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Category"}),(0,r.jsx)(n.th,{children:"Details"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Verify Info"}),(0,r.jsx)(n.td,{children:"\u2022 Name, DID, Reference URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Filter"}),(0,r.jsxs)(n.td,{children:["\u2022 Submission of All Claims",(0,r.jsx)(n.br,{}),"\u2022 List of eligible VC Schemas and Issuers",(0,r.jsx)(n.br,{}),"\u2022 List of claims to be displayed on the user\u2019s screen",(0,r.jsx)(n.br,{}),"\u2022 List of claims that must be submitted"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"VP Submission Method"}),(0,r.jsxs)(n.td,{children:["\u2022 Submission API URL",(0,r.jsx)(n.br,{}),"\u2022 Information related to submission encryption (recipient public key, nonce, algorithm, etc.)",(0,r.jsx)(n.br,{}),"\u2022 Authentication type for presentation"]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Determining whether multiple specified VC Schemas are treated as AND or OR conditions is beyond the scope of this document.\nIt should be handled in accordance with predefined methods between the Verifier and the Profile recipient."}),"\n",(0,r.jsx)(n.h3,{id:"41-verify-profile-structure",children:"4.1. Verify Profile Structure"}),"\n",(0,r.jsxs)(n.h4,{id:"411-verifyprofile-object",children:["4.1.1. ",(0,r.jsx)(n.code,{children:"VerifyProfile"})," object"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c#",children:'def object VerifyProfile: "Verify Profile"\n{\n    //--------------------------------------------------------------------------\n    // Profile Metadata\n    //--------------------------------------------------------------------------\n    + uuid         "id"         : "profile id"\n    + PROFILE_TYPE "type"       : "profile type", value("VerifyProfile")\n    + string       "title"      : "profile title"\n    - string       "description": "profile description", default(""), emptiable(true)\n    - LogoImage    "logo"       : "logo image for presentation"\n    + ENCODING     "encoding"   : "encoding", default("UTF-8")\n    + LANGUAGE     "language"   : "language code"\n\n    //--------------------------------------------------------------------------\n    // Profile Contents\n    //--------------------------------------------------------------------------\n    + object "profile": "profile contents"\n    {\n        + ProviderDetail "verifier": "verifier information"\n\n        + object "filter": "filter for selecting VCs to be presented"\n        {\n            + array(object) "credentialSchemas": "claims and issuers per acceptable VC Schema"\n            {\n                + url                    "id"            : "VC Schema URL"\n                + CREDENTIAL_SCHEMA_TYPE "type"          : "VC Schema format type"\n                - multibase              "value"         : "VC Schema encoded in multibase"\n                - array(claimCode)       "displayClaims" : "list of claims to be shown on the user\'s screen"\n                    , emptiable(false)\n                - array(claimCode)       "requiredClaims": "list of mandatory claims to be submitted"\n                    , emptiable(false)\n                - array(did)             "allowedIssuers": "list of allowed issuer DIDs"\n                    , emptiable(false)\n\n                // VC Schema information\n                + url                    "id"        : "VC Schema URL"\n                + CREDENTIAL_SCHEMA_TYPE "type"      : "VC Schema format type"\n                - multibase              "value"     : "The value of the VC Schema encoded in multibase"\n                // Claim constraints\n                - bool             "presentAll"    : "Whether all claims are submitted", default(false)\n                - array(claimCode) "displayClaims" : "List of claims displayed on the screen", emptiable(false)\n                - array(claimCode) "requiredClaims": "List of mandatory claims to be submitted", emptiable(false)\n                - array(did)       "allowedIssuers": "List of allowed issuer DIDs", emptiable(false)\n            }\n        }\n\n        + object "process": "VP presentation method"\n        {\n            - array(url)       "endpoints"    : "list of submission API endpoints"\n            + ReqE2e           "reqE2e"       : "E2E request information (without proof)"\n            + multibase        "verifierNonce": "verifier nonce", byte_length(16)\n            - VERIFY_AUTH_TYPE "authType"     : "authentication type for presentation"\n        }\n    }\n\n    //--------------------------------------------------------------------------\n    // Proof\n    //--------------------------------------------------------------------------\n    + AssertProof "proof": "verifier\'s signature for the profile"\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"~/profile/filter/credentialSchemas[]"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"presentAll"}),": Whether all claims are submitted\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["true: Submit all claims\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"displayClaims"})," value should be ignored, and all claims must be displayed on the screen"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"requiredClaims"})," value should be ignored, and all claims must be submitted as mandatory"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"false: Partial submission is allowed"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"displayClaims"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The list of claims to be displayed to the user, regardless of whether they are optional or required"}),"\n",(0,r.jsxs)(n.li,{children:["Items included in ",(0,r.jsx)(n.code,{children:"requiredClaims"})," should not be allowed to be deselected"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"displayClaims"}),"\uc5d0 \uc5c6\uc73c\ub098 ",(0,r.jsx)(n.code,{children:"requiredClaims"}),"\uc5d0\ub294 \uc788\ub294 \ud56d\ubaa9\uc758 \uc81c\ucd9c \uc5ec\ubd80\ub294 TAS\uc758 \uc815\ucc45\uc73c\ub85c \uacb0\uc815"]}),"\n",(0,r.jsx)(n.li,{children:"If unspecified, all claims should be displayed on the screen"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"requiredClaims"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The list of claims that must be submitted"}),"\n",(0,r.jsx)(n.li,{children:"If not specified, there are no mandatory claims to be submitted"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"allowedIssuers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"List of allowed Issuer DIDs"}),"\n",(0,r.jsx)(n.li,{children:"The VC held by the Holder can only be submitted if it is included in the Issuer list"}),"\n",(0,r.jsx)(n.li,{children:"If not specified, any VC issued under the specified VC Schema can be submitted"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"~/profile/process"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"endpoints"}),": Service endpoint part excluding the path portion of the submission API"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"reqE2e"}),": Key exchange request information for E2E encryption"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"verifierNonce"}),": Must include ",(0,r.jsx)(n.code,{children:"verifierNonce"})," when signing the VP in the future"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"authType"}),": Conditions for user authentication when submitting VP"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"42-verify-profile-example",children:"4.2. Verify Profile Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "id": "d1f26925-6743-4609-9932-e909dda0299f",\n    "type": "VerifyProfile",\n    "title": "MyShopping Student ID Verification",\n    "description": "Discounts are not available if personal identifier submission is not agreed.",\n    "encoding": "UTF-8",\n    "language": "ko",\n    "profile": {\n        "verifier": {\n            "did": "did:example:myshopping",\n            "certVcRef": "https://myshopping.com/cert-vc/1",\n            "name": "MyShopping",\n            "ref": "https://myshopping.com"\n        },\n        "filter": {\n            "credentialSchemas": [\n                {\n                    "id": "https://school-id.com/schema/student_id_v1.json",\n                    "type": "OsdSchemaCredential",\n                    "displayClaims": [\n                        "com.school_id.v1.school_name",\n                        "com.school_id.v1.pii",\n                        "com.school_id.v1.student_id",\n                        "com.school_id.v1.student_name"\n                    ],\n                    "requiredClaims": [\n                        "com.school_id.v1.school_name",\n                        "com.school_id.v1.student_name"\n                    ]\n                }\n            ]\n        },\n        "process": {\n            "endpoints": ["https://myshopping.com/verify"],\n            "reqE2e": {\n                "nonce": "uTX0SWpBnrG-gvkQg1MzUFQ",\n                "curve": "Secp256r1",\n                "publicKey": "zpuheLvAneYCdu3hjpdqF9BotnEpM2v7BmidRq5QBLKej",\n                "cipher": "AES-256-CBC",\n                "padding": "PKCS5"\n            },\n            "verifierNonce": "uYXNlNjQgZW5jb2Rpbmcgcw",\n            "authType": 6\n        }\n    },\n    "proof": {\n        "type": "Secp256r1Signature2018",\n        "created": "2024-04-29T11:27:30Z",\n        "verificationMethod": "did:example:myshopping?versionId=1#assert",\n        "proofPurpose": "assertionMethod",\n        "proofValue": "zDgYdYMUYHURJLD7xdnWRiqWCEY5u5fKzZs6Z...MzLHoPiPQ9sSVfRrs1D"\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(96540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);