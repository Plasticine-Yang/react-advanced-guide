import{jsxs as e,jsx as n,Fragment as E}from"react/jsx-runtime";import{D as r}from"./index.6529e49c.js";import{c as a}from"./scoped-log.b13f94b9.js";const p="_container_46kqb_1",F="_box_46kqb_7",o={container:p,box:F},i=a("Demo1"),y=()=>{const c=s=>{i.log(`${s} -- \u5192\u6CE1\u9636\u6BB5\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1`)},l=s=>{i.log(`${s} -- \u6355\u83B7\u9636\u6BB5\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1`)};return e("div",{className:o.container,children:[n("section",{className:o.box,onClick:()=>c("\u5BB9\u5668"),children:n("button",{onClickCapture:()=>c("\u6309\u94AE"),children:"\u4E8B\u4EF6\u5192\u6CE1"})}),n("section",{className:o.box,onClickCapture:()=>l("\u5BB9\u5668"),children:n("button",{onClickCapture:()=>l("\u6309\u94AE"),children:"\u4E8B\u4EF6\u6355\u83B7"})})]})},D="_container_hpt6g_1",C={container:D},t=a("Demo2"),m=()=>{const c=s=>{s.stopPropagation(),t.log("\u5B50\u5143\u7D20\u70B9\u51FB")},l=()=>{t.log("\u5BB9\u5668\u5143\u7D20\u70B9\u51FB")};return n("div",{className:C.container,onClick:l,children:n("button",{onClick:c,children:"\u505C\u6B62\u5192\u6CE1"})})},u="_container_1be4d_1",g={container:u},d=a("Demo3"),B=()=>{const c=()=>{d.log("change")},l=()=>{d.log("click")};return e("div",{className:g.container,children:[n("input",{type:"text",onChange:c}),n("button",{onClick:l,children:"Button"})]})},v=void 0,f=[{id:"1-\u63D0\u51FA\u95EE\u9898",text:"1. \u63D0\u51FA\u95EE\u9898",depth:2},{id:"2-react-\u4E3A\u4EC0\u4E48\u6709\u81EA\u5DF1\u7684\u4E8B\u4EF6\u7CFB\u7EDF",text:"2. React \u4E3A\u4EC0\u4E48\u6709\u81EA\u5DF1\u7684\u4E8B\u4EF6\u7CFB\u7EDF\uFF1F",depth:2},{id:"3-\u72EC\u7279\u7684\u4E8B\u4EF6\u5904\u7406",text:"3. \u72EC\u7279\u7684\u4E8B\u4EF6\u5904\u7406",depth:2},{id:"31-\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7",text:"3.1. \u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7",depth:3},{id:"32-\u963B\u6B62\u5192\u6CE1",text:"3.2. \u963B\u6B62\u5192\u6CE1",depth:3},{id:"33-\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A",text:"3.3. \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A",depth:3},{id:"4-\u4E8B\u4EF6\u5408\u6210",text:"4. \u4E8B\u4EF6\u5408\u6210",depth:2},{id:"41-\u4E8B\u4EF6\u63D2\u4EF6\u673A\u5236",text:"4.1. \u4E8B\u4EF6\u63D2\u4EF6\u673A\u5236",depth:3},{id:"5-\u4E8B\u4EF6\u7ED1\u5B9A",text:"5. \u4E8B\u4EF6\u7ED1\u5B9A",depth:2},{id:"51-fiber-\u7ED3\u6784",text:"5.1. fiber \u7ED3\u6784",depth:3},{id:"52-\u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C\u5668\u5230-document-\u4E2D",text:"5.2. \u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C\u5668\u5230 document \u4E2D",depth:3},{id:"6-\u4E8B\u4EF6\u89E6\u53D1",text:"6. \u4E8B\u4EF6\u89E6\u53D1",depth:2},{id:"7-\u5982\u4F55\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u7684",text:"7. \u5982\u4F55\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u7684\uFF1F",depth:2}],b="\u4E8B\u4EF6\u539F\u7406 -- \u65E7\u7248\u672C";function h(c){const l=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",ol:"ol",h3:"h3",p:"p",code:"code",div:"div",button:"button",span:"span",pre:"pre",img:"img"},c.components);return e(E,{children:[e(l.h1,{id:"\u4E8B\u4EF6\u539F\u7406----\u65E7\u7248\u672C",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4E8B\u4EF6\u539F\u7406----\u65E7\u7248\u672C",children:"#"}),"\u4E8B\u4EF6\u539F\u7406 -- \u65E7\u7248\u672C"]}),`
`,e(l.h2,{id:"1-\u63D0\u51FA\u95EE\u9898",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#1-\u63D0\u51FA\u95EE\u9898",children:"#"}),"1. \u63D0\u51FA\u95EE\u9898"]}),`
`,e(l.ul,{children:[`
`,n(l.li,{children:"React \u4E3A\u4EC0\u4E48\u6709\u81EA\u5DF1\u7684\u4E8B\u4EF6\u7CFB\u7EDF\uFF1F"}),`
`,n(l.li,{children:"\u4EC0\u4E48\u662F\u4E8B\u4EF6\u5408\u6210 \uFF1F"}),`
`,n(l.li,{children:"\u5982\u4F55\u5B9E\u73B0\u7684\u6279\u91CF\u66F4\u65B0\uFF1F"}),`
`,n(l.li,{children:"\u4E8B\u4EF6\u7CFB\u7EDF\u5982\u4F55\u6A21\u62DF\u5192\u6CE1\u548C\u6355\u83B7\u9636\u6BB5\uFF1F"}),`
`,n(l.li,{children:"\u5982\u4F55\u901A\u8FC7 dom \u5143\u7D20\u627E\u5230\u4E0E\u4E4B\u5339\u914D\u7684 fiber\uFF1F"}),`
`,n(l.li,{children:"\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u7528 return false \u6765\u963B\u6B62\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF1F"}),`
`,n(l.li,{children:"\u4E8B\u4EF6\u662F\u7ED1\u5B9A\u5728\u771F\u5B9E\u7684 dom \u4E0A\u5417\uFF1F\u5982\u4F55\u4E0D\u662F\u7ED1\u5B9A\u5728\u54EA\u91CC\uFF1F"}),`
`,n(l.li,{children:"V17 \u5BF9\u4E8B\u4EF6\u7CFB\u7EDF\u6709\u54EA\u4E9B\u6539\u53D8\uFF1F"}),`
`]}),`
`,e(l.h2,{id:"2-react-\u4E3A\u4EC0\u4E48\u6709\u81EA\u5DF1\u7684\u4E8B\u4EF6\u7CFB\u7EDF",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#2-react-\u4E3A\u4EC0\u4E48\u6709\u81EA\u5DF1\u7684\u4E8B\u4EF6\u7CFB\u7EDF",children:"#"}),"2. React \u4E3A\u4EC0\u4E48\u6709\u81EA\u5DF1\u7684\u4E8B\u4EF6\u7CFB\u7EDF\uFF1F"]}),`
`,e(l.ol,{children:[`
`,n(l.li,{children:"\u4E3A\u4E86\u62B9\u5E73\u4E0D\u540C\u6D4F\u89C8\u5668\u4E4B\u95F4\u7684\u4E8B\u4EF6\u7CFB\u7EDF\u5DEE\u5F02"}),`
`,n(l.li,{children:"\u4E8B\u4EF6\u76F4\u63A5\u7ED1\u5B9A\u5728\u771F\u5B9E DOM \u4E0A\u4F1A\u9020\u6210\u4E00\u4E9B\u4E0D\u53EF\u63A7\u7684\u60C5\u51B5\uFF0CReact v17 \u4E4B\u524D\uFF0C\u7EDF\u4E00\u5C06\u4E8B\u4EF6\u7ED1\u5B9A\u5728 document \u5143\u7D20\u4E0A\uFF0Cv17 \u4E4B\u540E\u7EDF\u4E00\u7ED1\u5B9A\u5728\u5E94\u7528\u5BB9\u5668\u5143\u7D20\u4E0A\uFF0C\u5E76\u6A21\u62DF\u4E86\u4E00\u5957\u4E8B\u4EF6\u6D41\uFF0C\u5305\u62EC\u4E8B\u4EF6\u6355\u83B7 -> \u4E8B\u4EF6\u6E90 -> \u4E8B\u4EF6\u5192\u6CE1\u7684\u5168\u6D41\u7A0B\uFF0C\u4EE5\u53CA\u91CD\u5199\u4E86\u4E8B\u4EF6\u6E90\u5BF9\u8C61 Event"}),`
`,n(l.li,{children:"\u5BF9 ssr \u548C \u8DE8\u7AEF\u652F\u6301\u5EA6\u5F88\u9AD8"}),`
`]}),`
`,e(l.h2,{id:"3-\u72EC\u7279\u7684\u4E8B\u4EF6\u5904\u7406",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#3-\u72EC\u7279\u7684\u4E8B\u4EF6\u5904\u7406",children:"#"}),"3. \u72EC\u7279\u7684\u4E8B\u4EF6\u5904\u7406"]}),`
`,e(l.h3,{id:"31-\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#31-\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7",children:"#"}),"3.1. \u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7"]}),`
`,n(l.p,{children:"\u5F53\u7236\u5B50\u5143\u7D20\u90FD\u7ED1\u5B9A\u4E86\u70B9\u51FB\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\u5982\u679C\u89E6\u53D1\u4E86\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5E94\u8BE5\u5148\u6267\u884C\u8C01\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\u5462\uFF1F"}),`
`,n(l.p,{children:"\u8FD9\u4E2A\u5C31\u548C\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7\u673A\u5236\u6709\u5173\u4E86\uFF0C\u4E8B\u4EF6\u5192\u6CE1\u662F\u4ECE\u6700\u5185\u5C42\u5143\u7D20\u5F80\u5916\u5C42\u5143\u7D20\u6267\u884C\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\uFF0C\u4E8B\u4EF6\u6355\u83B7\u5219\u76F8\u53CD"}),`
`,e(l.p,{children:["React \u4E2D\u5192\u6CE1\u4E8B\u4EF6\u7684\u7ED1\u5B9A\u4F7F\u7528\u5982 ",n(l.code,{children:"onClick"}),"\u3001",n(l.code,{children:"onChange"})," \u7B49\u5C5E\u6027\uFF0C\u6355\u83B7\u4E8B\u4EF6\u7684\u7ED1\u5B9A\u5219\u52A0\u4E0A ",n(l.code,{children:"Capture"})," \u540E\u7F00\u5373\u53EF\uFF0C\u6BD4\u5982 ",n(l.code,{children:"onClickCapture"}),"\u3001",n(l.code,{children:"onChangeCapture"})]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Demo1"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"`${"}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#A3BE8C"},children:" -- \u5192\u6CE1\u9636\u6BB5\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1"}),n(l.span,{style:{color:"#ECEFF4"},children:"`"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"handleClickCapture"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"`${"}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#A3BE8C"},children:" -- \u6355\u83B7\u9636\u6BB5\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1"}),n(l.span,{style:{color:"#ECEFF4"},children:"`"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"container"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#616E88"},children:"/* \u4E8B\u4EF6\u5192\u6CE1 */"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line highlighted",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<section"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"box"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u5BB9\u5668"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClickCapture"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u6309\u94AE"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u4E8B\u4EF6\u5192\u6CE1"}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</section>"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#616E88"},children:"/* \u4E8B\u4EF6\u6355\u83B7 */"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<section"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"box"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line highlighted",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClickCapture"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"handleClickCapture"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u5BB9\u5668"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClickCapture"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"handleClickCapture"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u6309\u94AE"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"          \u4E8B\u4EF6\u6355\u83B7"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</section>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(r,{children:n(y,{})}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/React%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1%E5%92%8C%E4%BA%8B%E4%BB%B6%E6%8D%95%E8%8E%B7.jpg",alt:"React\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7"})}),`
`,e(l.h3,{id:"32-\u963B\u6B62\u5192\u6CE1",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#32-\u963B\u6B62\u5192\u6CE1",children:"#"}),"3.2. \u963B\u6B62\u5192\u6CE1"]}),`
`,e(l.p,{children:["\u4F7F\u7528 React \u4E8B\u4EF6\u6E90\u5BF9\u8C61\u7684 ",n(l.code,{children:"stopPropagation"})," \u65B9\u6CD5\u963B\u6B62\u5192\u6CE1"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Demo2"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"e"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"MouseEvent"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"e"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"stopPropagation"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u5B50\u5143\u7D20\u70B9\u51FB"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"handleContainerClick"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u5BB9\u5668\u5143\u7D20\u70B9\u51FB"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"container"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"handleContainerClick"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"handleClick"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u505C\u6B62\u5192\u6CE1"}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(r,{children:n(m,{})}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/React%E9%98%BB%E6%AD%A2%E5%86%92%E6%B3%A1.jpg",alt:"React\u963B\u6B62\u5192\u6CE1"})}),`
`,e(l.h3,{id:"33-\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#33-\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A",children:"#"}),"3.3. \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A"]}),`
`,n(l.p,{children:"\u539F\u751F\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A"}),`
`,e(l.ol,{children:[`
`,e(l.li,{children:["\u8C03\u7528\u4E8B\u4EF6\u6E90\u5BF9\u8C61\u7684 ",n(l.code,{children:"preventDefault"})," \u65B9\u6CD5"]}),`
`,n(l.li,{children:"\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u8FD4\u56DE false"}),`
`]}),`
`,n(l.p,{children:"\u4F46\u662F\u5728 React \u4E2D\uFF0C\u53EA\u80FD\u901A\u8FC7\u7B2C\u4E00\u79CD\u65B9\u5F0F\u624D\u80FD\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u65E0\u6548"}),`
`,e(l.h2,{id:"4-\u4E8B\u4EF6\u5408\u6210",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#4-\u4E8B\u4EF6\u5408\u6210",children:"#"}),"4. \u4E8B\u4EF6\u5408\u6210"]}),`
`,e(l.p,{children:["React \u4E2D\u7684 ",n(l.code,{children:"onClick"}),"\u3001",n(l.code,{children:"onChange"})," \u7B49\u4E8B\u4EF6\u7684\u7ED1\u5B9A\u662F\u7531\u591A\u4E2A\u4E8B\u4EF6\u5408\u6210\u7684\uFF0C\u6BD4\u5982 ",n(l.code,{children:"onClick"})," \u7531\u539F\u751F ",n(l.code,{children:"click"})," \u4E8B\u4EF6\u5408\u6210\uFF0C",n(l.code,{children:"onChange"})," \u7531\u539F\u751F ",n(l.code,{children:"blur"}),"\u3001",n(l.code,{children:"change"}),"\u3001",n(l.code,{children:"focus"})," \u4E8B\u4EF6\u5408\u6210"]}),`
`,e(l.h3,{id:"41-\u4E8B\u4EF6\u63D2\u4EF6\u673A\u5236",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#41-\u4E8B\u4EF6\u63D2\u4EF6\u673A\u5236",children:"#"}),"4.1. \u4E8B\u4EF6\u63D2\u4EF6\u673A\u5236"]}),`
`,n(l.p,{children:"\u4E3B\u8981\u8BA4\u8BC6\u4E24\u4E2A\u5BF9\u8C61\uFF1A"}),`
`,e(l.ol,{children:[`
`,e(l.li,{children:[`
`,n(l.p,{children:"registrationNameModules"}),`
`,e(l.p,{children:["\u8BB0\u5F55\u4E0E ",n(l.code,{children:"onClick"})," \u7B49\u4E8B\u4EF6\u5C5E\u6027\u5BF9\u5E94\u7684\u4E8B\u4EF6\u63D2\u4EF6"]}),`
`,e(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"js"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"registrationNameModules"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"onBlur"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"SimpleEventPlugin"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"onClick"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"SimpleEventPlugin"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"onClickCapture"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"SimpleEventPlugin"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"onChange"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"ChangeEventPlugin"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"onChangeCapture"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"ChangeEventPlugin"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"onMouseEnter"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"EnterLeaveEventPlugin"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"onMouseLeave"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"EnterLeaveEventPlugin"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// ..."})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`]}),`
`,e(l.li,{children:[`
`,n(l.p,{children:"registrationNameDependencies"}),`
`,e(l.p,{children:["\u8BB0\u5F55 ",n(l.code,{children:"onClick"})," \u7B49\u4E8B\u4EF6\u5C5E\u6027\u9700\u8981\u7ED1\u5B9A\u7684\u539F\u751F\u4E8B\u4EF6"]}),`
`,e(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"js"}),n(l.pre,{children:e(l.code,{className:"",children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  onBlur"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"blur"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  onClick"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"click"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  onClickCapture"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"click"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  onChange"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"blur"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"change"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"click"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"focus"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"input"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"keydown"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"keyup"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"selectionchange"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  onMouseEnter"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"mouseout"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"mouseover"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  onMouseLeave"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"mouseout"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"mouseover"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// ..."})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`]}),`
`]}),`
`,e(l.h2,{id:"5-\u4E8B\u4EF6\u7ED1\u5B9A",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#5-\u4E8B\u4EF6\u7ED1\u5B9A",children:"#"}),"5. \u4E8B\u4EF6\u7ED1\u5B9A"]}),`
`,n(l.p,{children:"\u4EE5\u4E0B\u9762\u8FD9\u4E2A Demo \u6765\u770B\u770B React \u4E2D\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u6D41\u7A0B"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Demo3"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"handleChange"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"change"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"click"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<input"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"type"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"text"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onChange"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"handleChange"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"handleClick"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Button"}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(r,{children:n(B,{})}),`
`,e(l.h3,{id:"51-fiber-\u7ED3\u6784",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#51-fiber-\u7ED3\u6784",children:"#"}),"5.1. fiber \u7ED3\u6784"]}),`
`,e(l.p,{children:["\u8BE5 Demo \u4E2D\uFF0C\u4E8B\u4EF6\u5C5E\u6027 ",n(l.code,{children:"onClick"}),"\u3001",n(l.code,{children:"onChange"})," \u4F1A\u4FDD\u5B58\u5728 DOM \u5143\u7D20\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u7684 ",n(l.code,{children:"memoizedProps"})," \u4E0A"]}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E7%9A%84fiber%E7%BB%93%E6%9E%84.png",alt:"\u4E8B\u4EF6\u7ED1\u5B9A\u7684fiber\u7ED3\u6784"})}),`
`,e(l.h3,{id:"52-\u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C\u5668\u5230-document-\u4E2D",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#52-\u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C\u5668\u5230-document-\u4E2D",children:"#"}),"5.2. \u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C\u5668\u5230 document \u4E2D"]}),`
`,e(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"js"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"function"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"diffProperties"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/* \u5224\u65AD\u5F53\u524D\u7684 propKey \u662F\u4E0D\u662F React\u5408\u6210\u4E8B\u4EF6 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"registrationNameModules"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"hasOwnProperty"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"propKey"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")) "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"/* \u8FD9\u91CC\u591A\u4E2A\u51FD\u6570\u7B80\u5316\u4E86\uFF0C\u5982\u679C\u662F\u5408\u6210\u4E8B\u4EF6\uFF0C \u4F20\u5165\u6210\u4E8B\u4EF6\u540D\u79F0 onClick \uFF0C\u5411document\u6CE8\u518C\u4E8B\u4EF6  */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"legacyListenToEvent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"registrationName"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"document"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"function"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"legacyListenToEvent"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"registrationName"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\uFF0C"}),n(l.span,{style:{color:"#D8DEE9"},children:"mountAt"}),n(l.span,{style:{color:"#ECEFF4"},children:"){"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"   "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dependencies"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"registrationNameDependencies"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"registrationName"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#81A1C1"},children:";"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#616E88"},children:"// \u6839\u636E onClick \u83B7\u53D6  onClick \u4F9D\u8D56\u7684\u4E8B\u4EF6\u6570\u7EC4 [ 'click' ]\u3002"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"for"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#81A1C1"},children:"let"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"i"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#81A1C1"},children:";"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"i"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dependencies"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9FF"},children:"length"}),n(l.span,{style:{color:"#81A1C1"},children:";"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"i"}),n(l.span,{style:{color:"#81A1C1"},children:"++"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dependency"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dependencies"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"i"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"//  addEventListener \u7ED1\u5B9A\u4E8B\u4EF6\u76D1\u542C\u5668"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"..."})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:["\u8FD9\u91CC\u7ED9 ",n(l.code,{children:"document"})," \u7ED1\u5B9A\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5E76\u4E0D\u662F\u6211\u4EEC\u7F16\u5199\u7684 ",n(l.code,{children:"handleChange"}),"\u3001",n(l.code,{children:"handleClick"})," \u7B49\u51FD\u6570\uFF0C\u800C\u662F React \u7684\u7EDF\u4E00\u4E8B\u4EF6\u5904\u7406\u51FD\u6570 ",n(l.code,{children:"dispatchEvent"})]}),`
`,e(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"js"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"listener"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dispatchEvent"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"bind"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#81A1C1"},children:"null"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"click"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"eventSystemFlags"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"document"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9"},children:"document"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"addEventListener"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"click"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"listener"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"false"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h2,{id:"6-\u4E8B\u4EF6\u89E6\u53D1",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#6-\u4E8B\u4EF6\u89E6\u53D1",children:"#"}),"6. \u4E8B\u4EF6\u89E6\u53D1"]}),`
`,e(l.ol,{children:[`
`,n(l.li,{children:"\u6279\u91CF\u66F4\u65B0 -- \u5C06\u591A\u6B21 setState \u8C03\u7528\u7684\u7ED3\u679C\u5408\u5E76\u4E3A\u6700\u7EC8\u72B6\u6001"}),`
`,n(l.li,{children:"\u6839\u636E registrationNameModules \u627E\u5230\u5BF9\u5E94\u7684\u5904\u7406\u63D2\u4EF6\uFF0C\u5408\u6210\u4E8B\u4EF6\u6E90\u5BF9\u8C61 e"}),`
`,e(l.li,{children:["\u5F62\u6210\u4E8B\u4EF6\u6267\u884C\u961F\u5217\uFF0C\u9047\u5230\u5982 ",n(l.code,{children:"onClick"})," \u7684\u5192\u6CE1\u4E8B\u4EF6\u5C5E\u6027\u5C31\u5C06\u5BF9\u5E94\u7684\u5904\u7406\u51FD\u6570 push \u5230\u961F\u5217\u4E2D\uFF0C\u9047\u5230\u5982 ",n(l.code,{children:"onClickCapture"})," \u7684\u6355\u83B7\u4E8B\u4EF6\u5C5E\u6027\u5C31\u5C06\u5BF9\u5E94\u7684\u5904\u7406\u51FD\u6570 unshift \u5230\u961F\u5217\u4E2D"]}),`
`,n(l.li,{children:"\u4F9D\u6B21\u6267\u884C\u4E8B\u4EF6\u961F\u5217\u4E2D\u7684\u51FD\u6570\uFF0C\u5B8C\u6210\u4E8B\u4EF6\u89E6\u53D1"}),`
`]}),`
`,e(l.h2,{id:"7-\u5982\u4F55\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u7684",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#7-\u5982\u4F55\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u7684",children:"#"}),"7. \u5982\u4F55\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u7684\uFF1F"]}),`
`,e(l.p,{children:["\u5F53\u5F62\u6210\u4E8B\u4EF6\u6267\u884C\u961F\u5217\u540E\uFF0C\u4ECE\u524D\u5F80\u540E\u6267\u884C\u5404\u4E2A\u5904\u7406\u51FD\u6570\uFF0C\u53EA\u8981\u6709\u5176\u4E2D\u4E00\u4E2A\u5904\u7406\u51FD\u6570\u8C03\u7528\u4E86\u4E8B\u4EF6\u6E90\u5BF9\u8C61 ",n(l.code,{children:"e.stopPropagation"})," \u65B9\u6CD5\uFF0C\u5728\u540E\u7EED\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6267\u884C\u4E4B\u524D\u5C31\u80FD\u591F\u901A\u8FC7 ",n(l.code,{children:"e.isPropagationStopped"})," \u65B9\u6CD5\u611F\u77E5\u5230\uFF0C\u4ECE\u800C\u8DF3\u8FC7\u6267\u884C\uFF0C\u8FD9\u6837\u4FBF\u5B8C\u6210\u4E86\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u7684\u6548\u679C"]})]})}function x(c={}){const{wrapper:l}=c.components||{};return l?n(l,Object.assign({},c,{children:n(h,c)})):h(c)}const P="2022/12/14 06:33:26",R=`import { DemoBlock } from '@island/demo-block'

import { Demo1 } from '~/demos/old-event/demo1'
import { Demo2 } from '~/demos/old-event/demo2'
import { Demo3 } from '~/demos/old-event/demo3'

# \u4E8B\u4EF6\u539F\u7406 -- \u65E7\u7248\u672C

## 1. \u63D0\u51FA\u95EE\u9898

- React \u4E3A\u4EC0\u4E48\u6709\u81EA\u5DF1\u7684\u4E8B\u4EF6\u7CFB\u7EDF\uFF1F
- \u4EC0\u4E48\u662F\u4E8B\u4EF6\u5408\u6210 \uFF1F
- \u5982\u4F55\u5B9E\u73B0\u7684\u6279\u91CF\u66F4\u65B0\uFF1F
- \u4E8B\u4EF6\u7CFB\u7EDF\u5982\u4F55\u6A21\u62DF\u5192\u6CE1\u548C\u6355\u83B7\u9636\u6BB5\uFF1F
- \u5982\u4F55\u901A\u8FC7 dom \u5143\u7D20\u627E\u5230\u4E0E\u4E4B\u5339\u914D\u7684 fiber\uFF1F
- \u4E3A\u4EC0\u4E48\u4E0D\u80FD\u7528 return false \u6765\u963B\u6B62\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF1F
- \u4E8B\u4EF6\u662F\u7ED1\u5B9A\u5728\u771F\u5B9E\u7684 dom \u4E0A\u5417\uFF1F\u5982\u4F55\u4E0D\u662F\u7ED1\u5B9A\u5728\u54EA\u91CC\uFF1F
- V17 \u5BF9\u4E8B\u4EF6\u7CFB\u7EDF\u6709\u54EA\u4E9B\u6539\u53D8\uFF1F

## 2. React \u4E3A\u4EC0\u4E48\u6709\u81EA\u5DF1\u7684\u4E8B\u4EF6\u7CFB\u7EDF\uFF1F

1. \u4E3A\u4E86\u62B9\u5E73\u4E0D\u540C\u6D4F\u89C8\u5668\u4E4B\u95F4\u7684\u4E8B\u4EF6\u7CFB\u7EDF\u5DEE\u5F02
2. \u4E8B\u4EF6\u76F4\u63A5\u7ED1\u5B9A\u5728\u771F\u5B9E DOM \u4E0A\u4F1A\u9020\u6210\u4E00\u4E9B\u4E0D\u53EF\u63A7\u7684\u60C5\u51B5\uFF0CReact v17 \u4E4B\u524D\uFF0C\u7EDF\u4E00\u5C06\u4E8B\u4EF6\u7ED1\u5B9A\u5728 document \u5143\u7D20\u4E0A\uFF0Cv17 \u4E4B\u540E\u7EDF\u4E00\u7ED1\u5B9A\u5728\u5E94\u7528\u5BB9\u5668\u5143\u7D20\u4E0A\uFF0C\u5E76\u6A21\u62DF\u4E86\u4E00\u5957\u4E8B\u4EF6\u6D41\uFF0C\u5305\u62EC\u4E8B\u4EF6\u6355\u83B7 -> \u4E8B\u4EF6\u6E90 -> \u4E8B\u4EF6\u5192\u6CE1\u7684\u5168\u6D41\u7A0B\uFF0C\u4EE5\u53CA\u91CD\u5199\u4E86\u4E8B\u4EF6\u6E90\u5BF9\u8C61 Event
3. \u5BF9 ssr \u548C \u8DE8\u7AEF\u652F\u6301\u5EA6\u5F88\u9AD8

## 3. \u72EC\u7279\u7684\u4E8B\u4EF6\u5904\u7406

### 3.1. \u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7

\u5F53\u7236\u5B50\u5143\u7D20\u90FD\u7ED1\u5B9A\u4E86\u70B9\u51FB\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\u5982\u679C\u89E6\u53D1\u4E86\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5E94\u8BE5\u5148\u6267\u884C\u8C01\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\u5462\uFF1F

\u8FD9\u4E2A\u5C31\u548C\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7\u673A\u5236\u6709\u5173\u4E86\uFF0C\u4E8B\u4EF6\u5192\u6CE1\u662F\u4ECE\u6700\u5185\u5C42\u5143\u7D20\u5F80\u5916\u5C42\u5143\u7D20\u6267\u884C\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570\uFF0C\u4E8B\u4EF6\u6355\u83B7\u5219\u76F8\u53CD

React \u4E2D\u5192\u6CE1\u4E8B\u4EF6\u7684\u7ED1\u5B9A\u4F7F\u7528\u5982 \`onClick\`\u3001\`onChange\` \u7B49\u5C5E\u6027\uFF0C\u6355\u83B7\u4E8B\u4EF6\u7684\u7ED1\u5B9A\u5219\u52A0\u4E0A \`Capture\` \u540E\u7F00\u5373\u53EF\uFF0C\u6BD4\u5982 \`onClickCapture\`\u3001\`onChangeCapture\`

\`\`\`tsx{13,20}
const Demo1: React.FC = () => {
  const handleClick = (name: string) => {
    logger.log(\`\${name} -- \u5192\u6CE1\u9636\u6BB5\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1\`)
  }

  const handleClickCapture = (name: string) => {
    logger.log(\`\${name} -- \u6355\u83B7\u9636\u6BB5\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1\`)
  }

  return (
    <div className={s.container}>
      {/* \u4E8B\u4EF6\u5192\u6CE1 */}
      <section className={s.box} onClick={() => handleClick('\u5BB9\u5668')}>
        <button onClickCapture={() => handleClick('\u6309\u94AE')}>\u4E8B\u4EF6\u5192\u6CE1</button>
      </section>

      {/* \u4E8B\u4EF6\u6355\u83B7 */}
      <section
        className={s.box}
        onClickCapture={() => handleClickCapture('\u5BB9\u5668')}
      >
        <button onClickCapture={() => handleClickCapture('\u6309\u94AE')}>
          \u4E8B\u4EF6\u6355\u83B7
        </button>
      </section>
    </div>
  )
}
\`\`\`

<DemoBlock>
  <Demo1 />
</DemoBlock>

![React\u4E8B\u4EF6\u5192\u6CE1\u548C\u4E8B\u4EF6\u6355\u83B7](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/React%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1%E5%92%8C%E4%BA%8B%E4%BB%B6%E6%8D%95%E8%8E%B7.jpg)

### 3.2. \u963B\u6B62\u5192\u6CE1

\u4F7F\u7528 React \u4E8B\u4EF6\u6E90\u5BF9\u8C61\u7684 \`stopPropagation\` \u65B9\u6CD5\u963B\u6B62\u5192\u6CE1

\`\`\`tsx
const Demo2: React.FC = () => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation()
    logger.log('\u5B50\u5143\u7D20\u70B9\u51FB')
  }

  const handleContainerClick = () => {
    logger.log('\u5BB9\u5668\u5143\u7D20\u70B9\u51FB')
  }

  return (
    <div className={s.container} onClick={handleContainerClick}>
      <button onClick={handleClick}>\u505C\u6B62\u5192\u6CE1</button>
    </div>
  )
}
\`\`\`

<DemoBlock>
  <Demo2 />
</DemoBlock>

![React\u963B\u6B62\u5192\u6CE1](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/React%E9%98%BB%E6%AD%A2%E5%86%92%E6%B3%A1.jpg)

### 3.3. \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A

\u539F\u751F\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A

1. \u8C03\u7528\u4E8B\u4EF6\u6E90\u5BF9\u8C61\u7684 \`preventDefault\` \u65B9\u6CD5
2. \u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u8FD4\u56DE false

\u4F46\u662F\u5728 React \u4E2D\uFF0C\u53EA\u80FD\u901A\u8FC7\u7B2C\u4E00\u79CD\u65B9\u5F0F\u624D\u80FD\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u65E0\u6548

## 4. \u4E8B\u4EF6\u5408\u6210

React \u4E2D\u7684 \`onClick\`\u3001\`onChange\` \u7B49\u4E8B\u4EF6\u7684\u7ED1\u5B9A\u662F\u7531\u591A\u4E2A\u4E8B\u4EF6\u5408\u6210\u7684\uFF0C\u6BD4\u5982 \`onClick\` \u7531\u539F\u751F \`click\` \u4E8B\u4EF6\u5408\u6210\uFF0C\`onChange\` \u7531\u539F\u751F \`blur\`\u3001\`change\`\u3001\`focus\` \u4E8B\u4EF6\u5408\u6210

### 4.1. \u4E8B\u4EF6\u63D2\u4EF6\u673A\u5236

\u4E3B\u8981\u8BA4\u8BC6\u4E24\u4E2A\u5BF9\u8C61\uFF1A

1. registrationNameModules

   \u8BB0\u5F55\u4E0E \`onClick\` \u7B49\u4E8B\u4EF6\u5C5E\u6027\u5BF9\u5E94\u7684\u4E8B\u4EF6\u63D2\u4EF6

   \`\`\`js
   const registrationNameModules = {
     onBlur: SimpleEventPlugin,
     onClick: SimpleEventPlugin,
     onClickCapture: SimpleEventPlugin,
     onChange: ChangeEventPlugin,
     onChangeCapture: ChangeEventPlugin,
     onMouseEnter: EnterLeaveEventPlugin,
     onMouseLeave: EnterLeaveEventPlugin,
     // ...
   }
   \`\`\`

2. registrationNameDependencies

   \u8BB0\u5F55 \`onClick\` \u7B49\u4E8B\u4EF6\u5C5E\u6027\u9700\u8981\u7ED1\u5B9A\u7684\u539F\u751F\u4E8B\u4EF6

   \`\`\`js
   {
     onBlur: ['blur'],
     onClick: ['click'],
     onClickCapture: ['click'],
     onChange: ['blur', 'change', 'click', 'focus', 'input', 'keydown', 'keyup', 'selectionchange'],
     onMouseEnter: ['mouseout', 'mouseover'],
     onMouseLeave: ['mouseout', 'mouseover'],
     // ...
   }
   \`\`\`

## 5. \u4E8B\u4EF6\u7ED1\u5B9A

\u4EE5\u4E0B\u9762\u8FD9\u4E2A Demo \u6765\u770B\u770B React \u4E2D\u4E8B\u4EF6\u7ED1\u5B9A\u7684\u6D41\u7A0B

\`\`\`tsx
const Demo3: React.FC = () => {
  const handleChange = () => {
    logger.log('change')
  }

  const handleClick = () => {
    logger.log('click')
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Button</button>
    </div>
  )
}
\`\`\`

<DemoBlock>
  <Demo3 />
</DemoBlock>

### 5.1. fiber \u7ED3\u6784

\u8BE5 Demo \u4E2D\uFF0C\u4E8B\u4EF6\u5C5E\u6027 \`onClick\`\u3001\`onChange\` \u4F1A\u4FDD\u5B58\u5728 DOM \u5143\u7D20\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u7684 \`memoizedProps\` \u4E0A

![\u4E8B\u4EF6\u7ED1\u5B9A\u7684fiber\u7ED3\u6784](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E7%9A%84fiber%E7%BB%93%E6%9E%84.png)

### 5.2. \u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C\u5668\u5230 document \u4E2D

\`\`\`js
function diffProperties() {
  /* \u5224\u65AD\u5F53\u524D\u7684 propKey \u662F\u4E0D\u662F React\u5408\u6210\u4E8B\u4EF6 */
  if (registrationNameModules.hasOwnProperty(propKey)) {
    /* \u8FD9\u91CC\u591A\u4E2A\u51FD\u6570\u7B80\u5316\u4E86\uFF0C\u5982\u679C\u662F\u5408\u6210\u4E8B\u4EF6\uFF0C \u4F20\u5165\u6210\u4E8B\u4EF6\u540D\u79F0 onClick \uFF0C\u5411document\u6CE8\u518C\u4E8B\u4EF6  */
    legacyListenToEvent(registrationName, document)
  }
}

function legacyListenToEvent(registrationName\uFF0CmountAt){
   const dependencies = registrationNameDependencies[registrationName]; // \u6839\u636E onClick \u83B7\u53D6  onClick \u4F9D\u8D56\u7684\u4E8B\u4EF6\u6570\u7EC4 [ 'click' ]\u3002
    for (let i = 0; i < dependencies.length; i++) {
    const dependency = dependencies[i];
    //  addEventListener \u7ED1\u5B9A\u4E8B\u4EF6\u76D1\u542C\u5668
    ...
  }
}
\`\`\`

\u8FD9\u91CC\u7ED9 \`document\` \u7ED1\u5B9A\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5E76\u4E0D\u662F\u6211\u4EEC\u7F16\u5199\u7684 \`handleChange\`\u3001\`handleClick\` \u7B49\u51FD\u6570\uFF0C\u800C\u662F React \u7684\u7EDF\u4E00\u4E8B\u4EF6\u5904\u7406\u51FD\u6570 \`dispatchEvent\`

\`\`\`js
const listener = dispatchEvent.bind(null, 'click', eventSystemFlags, document)
document.addEventListener('click', listener, false)
\`\`\`

## 6. \u4E8B\u4EF6\u89E6\u53D1

1. \u6279\u91CF\u66F4\u65B0 -- \u5C06\u591A\u6B21 setState \u8C03\u7528\u7684\u7ED3\u679C\u5408\u5E76\u4E3A\u6700\u7EC8\u72B6\u6001
2. \u6839\u636E registrationNameModules \u627E\u5230\u5BF9\u5E94\u7684\u5904\u7406\u63D2\u4EF6\uFF0C\u5408\u6210\u4E8B\u4EF6\u6E90\u5BF9\u8C61 e
3. \u5F62\u6210\u4E8B\u4EF6\u6267\u884C\u961F\u5217\uFF0C\u9047\u5230\u5982 \`onClick\` \u7684\u5192\u6CE1\u4E8B\u4EF6\u5C5E\u6027\u5C31\u5C06\u5BF9\u5E94\u7684\u5904\u7406\u51FD\u6570 push \u5230\u961F\u5217\u4E2D\uFF0C\u9047\u5230\u5982 \`onClickCapture\` \u7684\u6355\u83B7\u4E8B\u4EF6\u5C5E\u6027\u5C31\u5C06\u5BF9\u5E94\u7684\u5904\u7406\u51FD\u6570 unshift \u5230\u961F\u5217\u4E2D
4. \u4F9D\u6B21\u6267\u884C\u4E8B\u4EF6\u961F\u5217\u4E2D\u7684\u51FD\u6570\uFF0C\u5B8C\u6210\u4E8B\u4EF6\u89E6\u53D1

## 7. \u5982\u4F55\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u7684\uFF1F

\u5F53\u5F62\u6210\u4E8B\u4EF6\u6267\u884C\u961F\u5217\u540E\uFF0C\u4ECE\u524D\u5F80\u540E\u6267\u884C\u5404\u4E2A\u5904\u7406\u51FD\u6570\uFF0C\u53EA\u8981\u6709\u5176\u4E2D\u4E00\u4E2A\u5904\u7406\u51FD\u6570\u8C03\u7528\u4E86\u4E8B\u4EF6\u6E90\u5BF9\u8C61 \`e.stopPropagation\` \u65B9\u6CD5\uFF0C\u5728\u540E\u7EED\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6267\u884C\u4E4B\u524D\u5C31\u80FD\u591F\u901A\u8FC7 \`e.isPropagationStopped\` \u65B9\u6CD5\u611F\u77E5\u5230\uFF0C\u4ECE\u800C\u8DF3\u8FC7\u6267\u884C\uFF0C\u8FD9\u6837\u4FBF\u5B8C\u6210\u4E86\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u7684\u6548\u679C
`;export{R as content,x as default,v as frontmatter,P as lastUpdatedTime,b as title,f as toc};
