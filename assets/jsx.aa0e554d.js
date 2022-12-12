import{jsxs as n,Fragment as E,jsx as e}from"react/jsx-runtime";import{D as y}from"./index.6529e49c.js";import c,{useState as C}from"react";const A=["react","vue","vite","node"],d=({message:s="A Simple Component."})=>e("div",{children:s}),N=()=>{const[s,l]=C(!1),i=()=>e("div",{children:"Rendered by function."}),r=n(E,{children:[e("div",{children:"Hello World"}),e(c.Fragment,{children:e("div",{children:"\u{1F680}\u{1F680}\u{1F680}"})}),"This is a text element.",A.map(a=>n("div",{children:["[Array Element] -- let us learn ",a," "]},a)),e(d,{}),s?e(d,{message:"status: true"}):e(d,{message:"status: false"}),i(),e("button",{onClick:()=>l(!s),children:"toggle status"})]});return console.log("\u7ECF\u8FC7 React.createElement \u5904\u7406\u540E\u7684 el:",r),r},u=["react","vue","vite","node"],h=({message:s="A Simple Component."})=>e("div",{children:s}),g=()=>{const[s,l]=C(!1),i=()=>e("div",{children:"Rendered by function."}),r=n(E,{children:[e("div",{children:"Hello World"}),e(c.Fragment,{children:e("div",{children:"\u{1F680}\u{1F680}\u{1F680}"})}),"This is a text element.",u.map(o=>n("div",{children:["[Array Element] -- let us learn ",o," "]},o)),e(h,{}),s?e(h,{message:"status: true"}):e(h,{message:"status: false"}),i(),e("button",{onClick:()=>l(!s),children:"toggle status"})]}),{children:a}=r.props,p=c.Children.toArray(a);console.log("\u6241\u5E73\u5316\u540E\u7684 children:",p);const t=[];c.Children.forEach(p,o=>{c.isValidElement(o)&&t.push(o)});const m=c.createElement("div",{className:"last"},"last element");t.push(m);const F=c.cloneElement(r,{},...t);return console.log("\u589E\u5F3A\u53EF\u63A7\u6027\u540E\u7684 el:",F),F},v=void 0,x=[{id:"\u63D0\u51FA\u95EE\u9898",text:"\u63D0\u51FA\u95EE\u9898",depth:2},{id:"1-\u5E38\u7528\u7684\u5143\u7D20\u4F1A\u88AB-react-\u5904\u7406\u6210\u4EC0\u4E48",text:"1. \u5E38\u7528\u7684\u5143\u7D20\u4F1A\u88AB React \u5904\u7406\u6210\u4EC0\u4E48\uFF1F",depth:2},{id:"11-\u7ECF\u8FC7-babel-\u5904\u7406\u540E\u7684\u6837\u5B50",text:"1.1. \u7ECF\u8FC7 babel \u5904\u7406\u540E\u7684\u6837\u5B50",depth:3},{id:"12-\u7ECF\u8FC7-reactcreateelement-\u5904\u7406\u540E\u7684\u6837\u5B50",text:"1.2. \u7ECF\u8FC7 React.createElement \u5904\u7406\u540E\u7684\u6837\u5B50",depth:3},{id:"13-\u7ECF\u8FC7-react-\u5E95\u5C42\u8C03\u548C\u5904\u7406\u540E\u7684\u6837\u5B50",text:"1.3. \u7ECF\u8FC7 React \u5E95\u5C42\u8C03\u548C\u5904\u7406\u540E\u7684\u6837\u5B50",depth:3},{id:"131-fiber-tag",text:"1.3.1. Fiber Tag",depth:4},{id:"2-\u52A8\u624B\u5B9E\u8DF5----\u63D0\u9AD8\u7EC4\u4EF6\u53EF\u63A7\u6027",text:"2. \u52A8\u624B\u5B9E\u8DF5 -- \u63D0\u9AD8\u7EC4\u4EF6\u53EF\u63A7\u6027",depth:2},{id:"21-\u5C06-children-\u6241\u5E73\u5316\u628A\u91CC\u9762\u7684\u6570\u7EC4\u5143\u7D20\u62CD\u5E73",text:"2.1. \u5C06 children \u6241\u5E73\u5316\uFF0C\u628A\u91CC\u9762\u7684\u6570\u7EC4\u5143\u7D20\u62CD\u5E73",depth:3},{id:"22-\u53BB\u9664\u7EAF\u5B57\u7B26\u4E32\u5B50\u5143\u7D20",text:"2.2. \u53BB\u9664\u7EAF\u5B57\u7B26\u4E32\u5B50\u5143\u7D20",depth:3},{id:"23-\u5F80-children-\u7684\u672B\u5C3E\u63D2\u5165\u65B0\u5143\u7D20",text:"2.3. \u5F80 children \u7684\u672B\u5C3E\u63D2\u5165\u65B0\u5143\u7D20",depth:3},{id:"24-\u514B\u9686\u65B0\u7684\u5143\u7D20\u8282\u70B9\u5E76\u6E32\u67D3",text:"2.4. \u514B\u9686\u65B0\u7684\u5143\u7D20\u8282\u70B9\u5E76\u6E32\u67D3",depth:3},{id:"3-babel-\u662F\u5982\u4F55\u89E3\u6790-jsx-\u7684",text:"3. Babel \u662F\u5982\u4F55\u89E3\u6790 JSX \u7684\uFF1F",depth:2}],R="jsx";function D(s){const l=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",p:"p",div:"div",button:"button",span:"span",pre:"pre",code:"code",h3:"h3",img:"img",h4:"h4",ol:"ol"},s.components);return n(E,{children:[n(l.h1,{id:"jsx",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#jsx",children:"#"}),"jsx"]}),`
`,n(l.h2,{id:"\u63D0\u51FA\u95EE\u9898",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D0\u51FA\u95EE\u9898",children:"#"}),"\u63D0\u51FA\u95EE\u9898"]}),`
`,n(l.ul,{children:[`
`,e(l.li,{children:"\u5E38\u7528\u7684\u5143\u7D20\u4F1A\u88AB React \u5904\u7406\u6210\u4EC0\u4E48\uFF1F"}),`
`,e(l.li,{children:"JSX \u7684\u7F16\u8BD1\u8FC7\u7A0B\u662F\u600E\u6837\u7684\uFF1F"}),`
`]}),`
`,n(l.h2,{id:"1-\u5E38\u7528\u7684\u5143\u7D20\u4F1A\u88AB-react-\u5904\u7406\u6210\u4EC0\u4E48",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#1-\u5E38\u7528\u7684\u5143\u7D20\u4F1A\u88AB-react-\u5904\u7406\u6210\u4EC0\u4E48",children:"#"}),"1. \u5E38\u7528\u7684\u5143\u7D20\u4F1A\u88AB React \u5904\u7406\u6210\u4EC0\u4E48\uFF1F"]}),`
`,e(l.p,{children:"\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5305\u542B\u4E86\u7EC4\u4EF6\u7C7B\u578B\u7684\u5143\u7D20\u3001\u666E\u901A DOM \u5143\u7D20\u3001\u7EAF\u6587\u672C\u5143\u7D20"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"toLearn"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"vue"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"vite"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"node"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"]"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"SimpleComponentProps"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  message"}),e(l.span,{style:{color:"#81A1C1"},children:"?:"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"SimpleComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"A Simple Component."}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"SimpleComponentProps"}),e(l.span,{style:{color:"#D8DEE9FF"},children:") "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>{"}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:"}</div>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"JSXDemo1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"status"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setStatus"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"false"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"renderByFunc"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"Rendered by function."}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"el"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* element \u5143\u7D20\u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"Hello World"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* fragment \u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"React.Fragment"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u{1F680}\u{1F680}\u{1F680}"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"React.Fragment"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* text \u6587\u672C\u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"      This is a text element."})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u6570\u7EC4\u8282\u70B9\u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"toLearn"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"map"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"item"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"key"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"item"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"[Array Element] -- let us learn "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"item"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      ))"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u7EC4\u4EF6\u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"SimpleComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u4E09\u76EE\u8FD0\u7B97 */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"status"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"?"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"SimpleComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"status: true"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      ) "}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"SimpleComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"status: false"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      )"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u51FD\u6570\u6E32\u67D3 */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#88C0D0"},children:"renderByFunc"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"setStatus"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"!"}),e(l.span,{style:{color:"#D8DEE9"},children:"status"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"toggle status"}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"\u7ECF\u8FC7 React.createElement \u5904\u7406\u540E\u7684 el:"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"el"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"el"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"JSXDemo1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,`
`,e(y,{children:e(N,{})}),`
`,n(l.h3,{id:"11-\u7ECF\u8FC7-babel-\u5904\u7406\u540E\u7684\u6837\u5B50",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#11-\u7ECF\u8FC7-babel-\u5904\u7406\u540E\u7684\u6837\u5B50",children:"#"}),"1.1. \u7ECF\u8FC7 babel \u5904\u7406\u540E\u7684\u6837\u5B50"]}),`
`,n(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"js"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"createElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"div"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"null"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"createElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"TextComponent"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"null"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"createElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"div"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"null"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"hello,world"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"let us learn React!"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:")"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.div,{className:"island-directive info",children:[e(l.p,{className:"island-directive-title",children:"INFO"}),n(l.div,{className:"island-directive-content",children:[n(l.p,{children:["\u8FD9\u4E5F\u6B63\u662F\u4E3A\u4EC0\u4E48\u5728\u4F7F\u7528\u8001\u7248\u672C React \u65F6\uFF0C\u7F16\u5199 jsx \u6587\u4EF6\u65F6\u603B\u662F\u8981\u5199\u4E0A ",e(l.code,{children:"import React from 'react'"})]}),n(l.p,{children:["\u56E0\u4E3A\u7ECF\u8FC7 babel \u7F16\u8BD1\u540E\uFF0C\u4F1A\u6709 ",e(l.code,{children:"React.createElement"})," \u8FD9\u6837\u7684\u8C03\u7528\uFF0C\u53EA\u6709\u5F15\u5165\u4E86 React \u624D\u80FD\u6B63\u5E38\u8FD0\u884C"]})]})]}),`
`,n(l.h3,{id:"12-\u7ECF\u8FC7-reactcreateelement-\u5904\u7406\u540E\u7684\u6837\u5B50",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#12-\u7ECF\u8FC7-reactcreateelement-\u5904\u7406\u540E\u7684\u6837\u5B50",children:"#"}),"1.2. \u7ECF\u8FC7 React.createElement \u5904\u7406\u540E\u7684\u6837\u5B50"]}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%BB%8F%E8%BF%87createElement%E5%A4%84%E7%90%86%E5%90%8E%E7%9A%84%E5%85%83%E7%B4%A0.png",alt:"\u7ECF\u8FC7createElement\u5904\u7406\u540E\u7684\u5143\u7D20"})}),`
`,n(l.div,{className:"island-directive tip",children:[e(l.p,{className:"island-directive-title",children:"TIP"}),e(l.div,{className:"island-directive-content",children:e(l.p,{children:"\u53EF\u4EE5\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA"})})]}),`
`,e(l.p,{children:"createElement \u7684\u5904\u7406\u89C4\u5219\uFF1A"}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/createElement%E5%A4%84%E7%90%86%E8%A7%84%E5%88%99.png",alt:"createElement \u7684\u5904\u7406\u89C4\u5219"})}),`
`,n(l.h3,{id:"13-\u7ECF\u8FC7-react-\u5E95\u5C42\u8C03\u548C\u5904\u7406\u540E\u7684\u6837\u5B50",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#13-\u7ECF\u8FC7-react-\u5E95\u5C42\u8C03\u548C\u5904\u7406\u540E\u7684\u6837\u5B50",children:"#"}),"1.3. \u7ECF\u8FC7 React \u5E95\u5C42\u8C03\u548C\u5904\u7406\u540E\u7684\u6837\u5B50"]}),`
`,n(l.div,{className:"island-directive info",children:[e(l.p,{className:"island-directive-title",children:"INFO"}),e(l.div,{className:"island-directive-content",children:e(l.p,{children:"React element \u5BF9\u8C61\u7684\u6BCF\u4E00\u4E2A\u5B50\u8282\u70B9\u90FD\u4F1A\u5F62\u6210\u4E00\u4E2A\u4E0E\u4E4B\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\uFF0C\u7136\u540E\u901A\u8FC7 sibling\u3001return\u3001child \u5C06\u6BCF\u4E00\u4E2A fiber \u5BF9\u8C61\u8054\u7CFB\u8D77\u6765"})})]}),`
`,n(l.h4,{id:"131-fiber-tag",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#131-fiber-tag",children:"#"}),"1.3.1. Fiber Tag"]}),`
`,e(l.p,{children:"\u4E0D\u540C\u79CD\u7C7B\u7684 React Element \u5BF9\u5E94\u4E0D\u540C Tag \u7684 Fiber \u5BF9\u8C61\uFF0C\u5BF9\u5E94\u5173\u7CFB\u5982\u4E0B\uFF1A"}),`
`,n(l.div,{className:"language-ts",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"ts"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"FunctionComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u51FD\u6570\u7EC4\u4EF6"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"ClassComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u7C7B\u7EC4\u4EF6"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"IndeterminateComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"2"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u521D\u59CB\u5316\u7684\u65F6\u5019\u4E0D\u77E5\u9053\u662F\u51FD\u6570\u7EC4\u4EF6\u8FD8\u662F\u7C7B\u7EC4\u4EF6"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"HostRoot"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"3"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// Root Fiber \u53EF\u4EE5\u7406\u89E3\u4E3A\u6839\u5143\u7D20 \uFF0C \u901A\u8FC7reactDom.render()\u4EA7\u751F\u7684\u6839\u5143\u7D20"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"HostPortal"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"4"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u5BF9\u5E94  ReactDOM.createPortal \u4EA7\u751F\u7684 Portal"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"HostComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"5"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// dom \u5143\u7D20 \u6BD4\u5982 <div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"HostText"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"6"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u6587\u672C\u8282\u70B9"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"Fragment"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"7"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u5BF9\u5E94 <React.Fragment>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"Mode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"8"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u5BF9\u5E94 <React.StrictMode>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"ContextConsumer"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"9"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u5BF9\u5E94 <Context.Consumer>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"ContextProvider"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"10"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u5BF9\u5E94 <Context.Provider>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"ForwardRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"11"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u5BF9\u5E94 React.ForwardRef"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"Profiler"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"12"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u5BF9\u5E94 <Profiler/ >"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"SuspenseComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"13"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u5BF9\u5E94 <Suspense>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"MemoComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"14"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u5BF9\u5E94 React.memo \u8FD4\u56DE\u7684\u7EC4\u4EF6"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:"\u4E0B\u9762\u7684 jsx \u4EE3\u7801\u4F1A\u88AB\u8F6C\u6210\u5982\u4E0B fiber \u7ED3\u6784\uFF1A"}),`
`,n(l.div,{className:"language-jsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"jsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"reactElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"style"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"marginTop"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"100px"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"container"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* element \u5143\u7D20\u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"hello,world"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* fragment \u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"React.Fragment"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" \u{1F47D}\u{1F47D} "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"React.Fragment"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* text \u6587\u672C\u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    my name is alien"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u6570\u7EC4\u8282\u70B9\u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"toLearn"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"map"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"item"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"key"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"item"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"let us learn "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"item"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    ))"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u7EC4\u4EF6\u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"TextComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u4E09\u5143\u8FD0\u7B97 */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"{this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"status"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"?"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"TextComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u4E09\u5143\u8FD0\u7B97"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u51FD\u6570\u6267\u884C */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"{this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"renderFoot"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"())"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"      \u6253\u5370render\u540E\u7684\u5185\u5BB9"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:")"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E5%85%83%E7%B4%A0%E8%A2%AB%E8%BD%AC%E6%8D%A2%E5%90%8E%E7%9A%84fiber%E7%BB%93%E6%9E%84.png",alt:"\u5143\u7D20\u88AB\u8F6C\u6362\u540E\u7684 fiber \u7ED3\u6784"})}),`
`,e(l.p,{children:"\u603B\u7684\u6765\u8BF4\uFF0Cfiber \u7684\u7ED3\u6784\u5982\u4E0B\uFF1A"}),`
`,n(l.ul,{children:[`
`,e(l.li,{children:"child\uFF1A \u4E00\u4E2A\u7531\u7236\u7EA7 fiber \u6307\u5411\u5B50\u7EA7 fiber \u7684\u6307\u9488\u3002"}),`
`,e(l.li,{children:"return\uFF1A\u4E00\u4E2A\u5B50\u7EA7 fiber \u6307\u5411\u7236\u7EA7 fiber \u7684\u6307\u9488\u3002"}),`
`,e(l.li,{children:"sibling: \u4E00\u4E2A fiber \u6307\u5411\u4E0B\u4E00\u4E2A\u5144\u5F1F fiber \u7684\u6307\u9488\u3002"}),`
`]}),`
`,n(l.h2,{id:"2-\u52A8\u624B\u5B9E\u8DF5----\u63D0\u9AD8\u7EC4\u4EF6\u53EF\u63A7\u6027",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#2-\u52A8\u624B\u5B9E\u8DF5----\u63D0\u9AD8\u7EC4\u4EF6\u53EF\u63A7\u6027",children:"#"}),"2. \u52A8\u624B\u5B9E\u8DF5 -- \u63D0\u9AD8\u7EC4\u4EF6\u53EF\u63A7\u6027"]}),`
`,n(l.p,{children:["\u73B0\u5728",e(l.code,{children:"JSXDemo1"}),"\u7EC4\u4EF6\u7684",e(l.code,{children:"props.children"}),"\u4E2D\u7684\u7ED3\u6784\u6BD4\u8F83\u590D\u6742\uFF0C\u65E2\u6709\u5BF9\u8C61\u7C7B\u578B(\u5982",e(l.code,{children:"ReactElement"}),")\uFF0C\u53C8\u6709\u6570\u7EC4\u7C7B\u578B\uFF0C\u8FD8\u6709\u7EAF\u5B57\u7B26\u4E32\u7C7B\u578B"]}),`
`,e(l.p,{children:"\u4E3A\u4E86\u63D0\u9AD8\u53EF\u63A7\u6027\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u4E00\u4E9B\u6539\u9020\uFF0C\u5305\u542B\u4EE5\u4E0B\u6B65\u9AA4\uFF1A"}),`
`,n(l.ol,{children:[`
`,e(l.li,{children:"\u5C06 children \u6241\u5E73\u5316\uFF0C\u628A\u91CC\u9762\u7684\u6570\u7EC4\u5143\u7D20\u62CD\u5E73"}),`
`,e(l.li,{children:"\u53BB\u9664\u7EAF\u5B57\u7B26\u4E32\u5B50\u5143\u7D20"}),`
`,e(l.li,{children:"\u5F80 children \u7684\u672B\u5C3E\u63D2\u5165\u65B0\u5143\u7D20"}),`
`,e(l.li,{children:"\u514B\u9686\u65B0\u7684\u5143\u7D20\u8282\u70B9\u5E76\u6E32\u67D3"}),`
`]}),`
`,n(l.div,{className:"island-directive tip",children:[e(l.p,{className:"island-directive-title",children:"TIP"}),e(l.div,{className:"island-directive-content",children:e(l.p,{children:"\u7B2C\u4E09\u7B2C\u56DB\u6B65\u7EAF\u7CB9\u662F\u4E3A\u4E86\u52A0\u6DF1\u8BFB\u8005\u5BF9 jsx \u7F16\u8BD1\u540E\u7684 React.element \u7ED3\u6784\u7684\u7406\u89E3\uFF0C\u540C\u65F6\u4E5F\u662F\u4E3A\u4E86\u719F\u6089 React API \u7684\u4F7F\u7528"})})]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"toLearn"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"vue"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"vite"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"node"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"]"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"SimpleComponentProps"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  message"}),e(l.span,{style:{color:"#81A1C1"},children:"?:"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"SimpleComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"A Simple Component."}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"SimpleComponentProps"}),e(l.span,{style:{color:"#D8DEE9FF"},children:") "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>{"}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:"}</div>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"JSXDemo2"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"status"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setStatus"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"false"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"renderByFunc"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"Rendered by function."}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"el"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* element \u5143\u7D20\u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"Hello World"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* fragment \u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"React.Fragment"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u{1F680}\u{1F680}\u{1F680}"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"React.Fragment"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* text \u6587\u672C\u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"      This is a text element."})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u6570\u7EC4\u8282\u70B9\u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"toLearn"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"map"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"item"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"key"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"item"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"[Array Element] -- let us learn "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"item"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      ))"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u7EC4\u4EF6\u7C7B\u578B */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"SimpleComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u4E09\u76EE\u8FD0\u7B97 */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"status"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"?"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"SimpleComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"status: true"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      ) "}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"SimpleComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"status: false"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      )"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u51FD\u6570\u6E32\u67D3 */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#88C0D0"},children:"renderByFunc"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"setStatus"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"!"}),e(l.span,{style:{color:"#D8DEE9"},children:"status"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"toggle status"}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// 1. children \u6570\u7EC4\u6241\u5E73\u5316 -- \u5C06\u5185\u90E8\u7684 \u6570\u7EC4\u8282\u70B9 \u62CD\u5E73"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"children"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"el"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"flatChildren"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"Children"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"toArray"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"children"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"\u6241\u5E73\u5316\u540E\u7684 children:"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"flatChildren"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line highlighted"}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// 2. \u53BB\u9664\u7EAF\u5B57\u7B26\u4E32\u5B50\u5143\u7D20"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"any"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"[] "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" []"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"Children"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"forEach"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"flatChildren"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"child"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"if"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"isValidElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")) "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"push"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line highlighted"}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// 3. \u5F80 children \u7684\u672B\u5C3E\u63D2\u5165\u65B0\u5143\u7D20"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"lastChild"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"createElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"div"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"className"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"last"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"last element"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line highlighted",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"push"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"lastChild"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line highlighted"}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// 4. \u514B\u9686\u65B0\u7684\u5143\u7D20\u8282\u70B9\u5E76\u6E32\u67D3"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"newEl"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"cloneElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"el"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"..."}),e(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"\u589E\u5F3A\u53EF\u63A7\u6027\u540E\u7684 el:"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"newEl"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line highlighted"}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"newEl"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"JSXDemo2"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,`
`,e(y,{children:e(g,{})}),`
`,n(l.h3,{id:"21-\u5C06-children-\u6241\u5E73\u5316\u628A\u91CC\u9762\u7684\u6570\u7EC4\u5143\u7D20\u62CD\u5E73",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#21-\u5C06-children-\u6241\u5E73\u5316\u628A\u91CC\u9762\u7684\u6570\u7EC4\u5143\u7D20\u62CD\u5E73",children:"#"}),"2.1. \u5C06 children \u6241\u5E73\u5316\uFF0C\u628A\u91CC\u9762\u7684\u6570\u7EC4\u5143\u7D20\u62CD\u5E73"]}),`
`,n(l.p,{children:["\u4F7F\u7528",e(l.code,{children:"React.Children.toArray()"}),"\u5C06 children \u8F6C\u6210\u6241\u5E73\u5316\u3001\u89C4\u8303\u5316\u7684\u6570\u7EC4\uFF0C\u5728\u6211\u4EEC\u9700\u8981\u904D\u5386 children \u7684\u65F6\u5019\u5F88\u6709\u7528"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:"// 1. children \u6570\u7EC4\u6241\u5E73\u5316 -- \u5C06\u5185\u90E8\u7684 \u6570\u7EC4\u8282\u70B9 \u62CD\u5E73"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"children"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"el"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"flatChildren"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"Children"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"toArray"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"children"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"\u6241\u5E73\u5316\u540E\u7684 children:"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"flatChildren"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"22-\u53BB\u9664\u7EAF\u5B57\u7B26\u4E32\u5B50\u5143\u7D20",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#22-\u53BB\u9664\u7EAF\u5B57\u7B26\u4E32\u5B50\u5143\u7D20",children:"#"}),"2.2. \u53BB\u9664\u7EAF\u5B57\u7B26\u4E32\u5B50\u5143\u7D20"]}),`
`,n(l.p,{children:["\u4F7F\u7528",e(l.code,{children:"React.Children.forEach"}),"\u5B9E\u9645\u4E0A\u5C31\u7B49\u4EF7\u4E8E:"]}),`
`,n(l.ol,{children:[`
`,e(l.li,{children:"React.Children.toArray"}),`
`,e(l.li,{children:"Array.prototype.forEach"}),`
`]}),`
`,n(l.p,{children:["\u56E0\u6B64\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528",e(l.code,{children:"React.Children.forEach(children)"}),"\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u8FD9\u91CC\u53EA\u662F\u4E3A\u4E86\u8BA9\u8BFB\u8005\u719F\u6089 React API \u624D\u5C06\u5176\u5206\u5F00\u4F7F\u7528\u7684"]}),`
`,n(l.div,{className:"island-directive tip",children:[e(l.p,{className:"island-directive-title",children:"TIP"}),e(l.div,{className:"island-directive-content",children:n(l.p,{children:["flatChildren \u5DF2\u7ECF\u662F\u4E00\u4E2A\u6241\u5E73\u5316\u3001\u89C4\u8303\u5316\u7684\u6570\u7EC4\u4E86\uFF0C\u56E0\u6B64\u76F4\u63A5\u7528",e(l.code,{children:"flatChildren.forEach"}),"\u4E5F\u53EF\u4EE5"]})})]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:"// 2. \u53BB\u9664\u7EAF\u5B57\u7B26\u4E32\u5B50\u5143\u7D20"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"any"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"[] "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" []"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"Children"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"forEach"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"flatChildren"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"child"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"if"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"isValidElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")) "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"push"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"23-\u5F80-children-\u7684\u672B\u5C3E\u63D2\u5165\u65B0\u5143\u7D20",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#23-\u5F80-children-\u7684\u672B\u5C3E\u63D2\u5165\u65B0\u5143\u7D20",children:"#"}),"2.3. \u5F80 children \u7684\u672B\u5C3E\u63D2\u5165\u65B0\u5143\u7D20"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:"// 3. \u5F80 children \u7684\u672B\u5C3E\u63D2\u5165\u65B0\u5143\u7D20"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"lastChild"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"createElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"div"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"className"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"last"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"last element"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:")"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"push"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"lastChild"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:"\u4E0E\u4E4B\u7B49\u4EF7\u7684\u5199\u6CD5:"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"push"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"last"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#81A1C1"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"last element"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h3,{id:"24-\u514B\u9686\u65B0\u7684\u5143\u7D20\u8282\u70B9\u5E76\u6E32\u67D3",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#24-\u514B\u9686\u65B0\u7684\u5143\u7D20\u8282\u70B9\u5E76\u6E32\u67D3",children:"#"}),"2.4. \u514B\u9686\u65B0\u7684\u5143\u7D20\u8282\u70B9\u5E76\u6E32\u67D3"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:"// 4. \u514B\u9686\u65B0\u7684\u5143\u7D20\u8282\u70B9\u5E76\u6E32\u67D3"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"newEl"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"cloneElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"el"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"..."}),e(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"\u589E\u5F3A\u53EF\u63A7\u6027\u540E\u7684 el:"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"newEl"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"newEl"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.div,{className:"island-directive tip",children:[e(l.p,{className:"island-directive-title",children:"TIP"}),n(l.div,{className:"island-directive-content",children:[n(l.p,{children:[e(l.code,{children:"React.cloneElement"})," \u7684\u4F5C\u7528\u662F\u5C06\u4F20\u5165\u7684\u65B0 props \u4E0E\u88AB\u514B\u9686\u5143\u7D20\u7684 props \u6D45\u5C42\u5408\u5E76\u540E\u8FD4\u56DE"]}),n(l.p,{children:["\u5728\u8FD9\u91CC\u5219\u662F\u514B\u9686\u539F\u6765\u7684 el \u5143\u7D20\uFF0C\u5E76\u4F7F\u7528\u65B0\u7684 newChildren \u4F5C\u4E3A\u5176 ",e(l.code,{children:"props.children"})]})]})]}),`
`,n(l.div,{className:"island-directive info",children:[e(l.p,{className:"island-directive-title",children:"\u63D0\u95EE"}),n(l.div,{className:"island-directive-content",children:[e(l.p,{children:"React.createElement \u548C React.cloneElement \u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F"}),e(l.p,{children:"\u524D\u8005\u7528\u4E8E\u521B\u5EFA\u5143\u7D20\uFF0C\u540E\u8005\u7528\u4E8E\u5BF9\u5DF2\u6709\u5143\u7D20\u8FDB\u884C\u4FEE\u6539\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 React.element \u5BF9\u8C61"})]})]}),`
`,n(l.h2,{id:"3-babel-\u662F\u5982\u4F55\u89E3\u6790-jsx-\u7684",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#3-babel-\u662F\u5982\u4F55\u89E3\u6790-jsx-\u7684",children:"#"}),"3. Babel \u662F\u5982\u4F55\u89E3\u6790 JSX \u7684\uFF1F"]}),`
`,n(l.p,{children:["\u4F7F\u7528 Babel \u7F16\u8BD1 jsx \u65F6\uFF0C\u4E3B\u8981\u4F7F\u7528\u7684\u662F ",e(l.code,{children:"@babel/preset-react"})," \u8FD9\u4E2A preset\uFF0C\u5176\u4E2D\u8D77\u4E3B\u8981\u4F5C\u7528\u7684\u662F\u8BE5 preset \u5185\u90E8\u7684\u4E24\u4E2A\u63D2\u4EF6:"]}),`
`,n(l.ul,{children:[`
`,n(l.li,{children:[e(l.code,{children:"@babel/plugin-syntax-jsx"}),": \u8BA9 Babel \u89E3\u6790 jsx \u8BED\u6CD5"]}),`
`,n(l.li,{children:[e(l.code,{children:"@babel/plugin-transform-react-jsx"}),": \u5C06 jsx \u5143\u7D20\u8F6C\u6362\u6210 React API\uFF0C\u5982 ",e(l.code,{children:"React.createElement"})]}),`
`]}),`
`,n(l.p,{children:["\u800C\u5173\u4E8E React API \u7684\u8F6C\u6362\u5219\u5206\u4E3A\u4E24\u79CD\u6A21\u5F0F\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u89C2\u5BDF\u7ED3\u679C\uFF0C\u6211\u4EEC\u7F16\u5199\u4E00\u6BB5\u7B80\u5355\u7684 ts \u4EE3\u7801\uFF0C\u8C03\u7528 ",e(l.code,{children:"@babel/core"})," \u7684 ",e(l.code,{children:"transformSync"})," \u67E5\u770B\u4E00\u4E0B\u7F16\u8BD1\u7ED3\u679C"]}),`
`,n(l.div,{className:"language-shell",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"shell"}),e(l.pre,{children:n(l.code,{className:"",children:[e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"pnpm i @bebel/core @babel/preset-react @types/babel__core -D"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.div,{className:"language-ts",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"ts"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"transformSync"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"@babel/core"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"res"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"transformSync"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"<div>jsx</div>"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"presets"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"@babel/preset-react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"!"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"res"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"code"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:"\u521A\u521A\u8BF4\u8FC7\u4E86\uFF0C\u4E00\u5171\u6709\u4E24\u79CD\u8F6C\u6362\u65B9\u5F0F\uFF1A"}),`
`,n(l.ul,{children:[`
`,n(l.li,{children:[`
`,n(l.p,{children:[`React Classic Runtime
\u6839\u636E\u5B98\u65B9\u6587\u6863\u7684\u8BF4\u660E\uFF0C\u9ED8\u8BA4\u5C31\u662F\u4EE5 `,e(l.code,{children:"Classic Runtime"})," \u7684\u65B9\u5F0F\u8F6C\u6362 jsx \u7684"]}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/babel-preset-react%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE.png",alt:"@babel/preset-react\u9ED8\u8BA4\u914D\u7F6E"})}),`
`,e(l.p,{children:"\u8FD9\u79CD\u65B9\u5F0F\u7F16\u8BD1\u51FA\u6765\u7684\u7ED3\u679C\u5982\u4E0B:"}),`
`,n(l.div,{className:"language-text",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"text"}),e(l.pre,{children:n(l.code,{className:"",children:[e(l.span,{className:"line",children:e(l.span,{style:{color:"#d8dee9ff"},children:'/*#__PURE__*/React.createElement("div", null, "jsx");'})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#d8dee9ff"}})})]})})]}),`
`,n(l.p,{children:["\u4E5F\u5C31\u662F ",e(l.code,{children:"React.createElement"})," \u7684\u65B9\u5F0F\uFF0C\u56E0\u6B64\u6211\u4EEC\u7684\u6E90\u4EE3\u7801\u4E2D\u9700\u8981\u663E\u5F0F\u5F15\u5165 React"]}),`
`]}),`
`,n(l.li,{children:[`
`,e(l.p,{children:"React Automatic Runtime"}),`
`,e(l.p,{children:"\u5C06\u4EE3\u7801\u6539\u5199\u5982\u4E0B:"}),`
`,n(l.div,{className:"language-ts",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"ts"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"transformSync"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"@babel/core"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"res"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"transformSync"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"<div>jsx</div>"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"presets"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" [["}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"@babel/preset-react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"runtime"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"automatic"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"]]"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"!"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"res"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"code"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:"\u7F16\u8BD1\u7684\u7ED3\u679C\u5982\u4E0B:"}),`
`,n(l.div,{className:"language-text",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"text"}),e(l.pre,{children:n(l.code,{className:"",children:[e(l.span,{className:"line",children:e(l.span,{style:{color:"#d8dee9ff"},children:'import { jsx as _jsx } from "react/jsx-runtime";'})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#d8dee9ff"},children:'/*#__PURE__*/_jsx("div", {'})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#d8dee9ff"},children:'  children: "jsx"'})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#d8dee9ff"},children:"});"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#d8dee9ff"}})})]})})]}),`
`]}),`
`]})]})}function S(s={}){const{wrapper:l}=s.components||{};return l?e(l,Object.assign({},s,{children:e(D,s)})):D(s)}const j="2022/12/12 04:47:15",w=`import { DemoBlock } from '@island/demo-block'

# jsx

## \u63D0\u51FA\u95EE\u9898

- \u5E38\u7528\u7684\u5143\u7D20\u4F1A\u88AB React \u5904\u7406\u6210\u4EC0\u4E48\uFF1F
- JSX \u7684\u7F16\u8BD1\u8FC7\u7A0B\u662F\u600E\u6837\u7684\uFF1F

## 1. \u5E38\u7528\u7684\u5143\u7D20\u4F1A\u88AB React \u5904\u7406\u6210\u4EC0\u4E48\uFF1F

\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5305\u542B\u4E86\u7EC4\u4EF6\u7C7B\u578B\u7684\u5143\u7D20\u3001\u666E\u901A DOM \u5143\u7D20\u3001\u7EAF\u6587\u672C\u5143\u7D20

\`\`\`tsx
import React, { useState } from 'react'

const toLearn = ['react', 'vue', 'vite', 'node']

interface SimpleComponentProps {
  message?: string
}
const SimpleComponent = ({
  message = 'A Simple Component.',
}: SimpleComponentProps) => <div>{message}</div>

const JSXDemo1 = () => {
  const [status, setStatus] = useState(false)

  const renderByFunc = () => <div>Rendered by function.</div>
  const el = (
    <>
      {/* element \u5143\u7D20\u7C7B\u578B */}
      <div>Hello World</div>
      {/* fragment \u7C7B\u578B */}
      <React.Fragment>
        <div>\u{1F680}\u{1F680}\u{1F680}</div>
      </React.Fragment>
      {/* text \u6587\u672C\u7C7B\u578B */}
      This is a text element.
      {/* \u6570\u7EC4\u8282\u70B9\u7C7B\u578B */}
      {toLearn.map((item) => (
        <div key={item}>[Array Element] -- let us learn {item} </div>
      ))}
      {/* \u7EC4\u4EF6\u7C7B\u578B */}
      <SimpleComponent />
      {/* \u4E09\u76EE\u8FD0\u7B97 */}
      {status ? (
        <SimpleComponent message="status: true" />
      ) : (
        <SimpleComponent message="status: false" />
      )}
      {/* \u51FD\u6570\u6E32\u67D3 */}
      {renderByFunc()}
      <button onClick={() => setStatus(!status)}>toggle status</button>
    </>
  )

  console.log('\u7ECF\u8FC7 React.createElement \u5904\u7406\u540E\u7684 el:', el)

  return el
}

export { JSXDemo1 }
\`\`\`

import { JSXDemo1 } from '~/demos/jsx/demo1'

<DemoBlock>
  <JSXDemo1 />
</DemoBlock>

### 1.1. \u7ECF\u8FC7 babel \u5904\u7406\u540E\u7684\u6837\u5B50

\`\`\`js
React.createElement(
  'div',
  null,
  React.createElement(TextComponent, null),
  React.createElement('div', null, 'hello,world'),
  'let us learn React!',
)
\`\`\`

:::info

\u8FD9\u4E5F\u6B63\u662F\u4E3A\u4EC0\u4E48\u5728\u4F7F\u7528\u8001\u7248\u672C React \u65F6\uFF0C\u7F16\u5199 jsx \u6587\u4EF6\u65F6\u603B\u662F\u8981\u5199\u4E0A \`import React from 'react'\`

\u56E0\u4E3A\u7ECF\u8FC7 babel \u7F16\u8BD1\u540E\uFF0C\u4F1A\u6709 \`React.createElement\` \u8FD9\u6837\u7684\u8C03\u7528\uFF0C\u53EA\u6709\u5F15\u5165\u4E86 React \u624D\u80FD\u6B63\u5E38\u8FD0\u884C

:::

### 1.2. \u7ECF\u8FC7 React.createElement \u5904\u7406\u540E\u7684\u6837\u5B50

![\u7ECF\u8FC7createElement\u5904\u7406\u540E\u7684\u5143\u7D20](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%BB%8F%E8%BF%87createElement%E5%A4%84%E7%90%86%E5%90%8E%E7%9A%84%E5%85%83%E7%B4%A0.png)

:::tip

\u53EF\u4EE5\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA

:::

createElement \u7684\u5904\u7406\u89C4\u5219\uFF1A

![createElement \u7684\u5904\u7406\u89C4\u5219](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/createElement%E5%A4%84%E7%90%86%E8%A7%84%E5%88%99.png)

### 1.3. \u7ECF\u8FC7 React \u5E95\u5C42\u8C03\u548C\u5904\u7406\u540E\u7684\u6837\u5B50

:::info

React element \u5BF9\u8C61\u7684\u6BCF\u4E00\u4E2A\u5B50\u8282\u70B9\u90FD\u4F1A\u5F62\u6210\u4E00\u4E2A\u4E0E\u4E4B\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\uFF0C\u7136\u540E\u901A\u8FC7 sibling\u3001return\u3001child \u5C06\u6BCF\u4E00\u4E2A fiber \u5BF9\u8C61\u8054\u7CFB\u8D77\u6765

:::

#### 1.3.1. Fiber Tag

\u4E0D\u540C\u79CD\u7C7B\u7684 React Element \u5BF9\u5E94\u4E0D\u540C Tag \u7684 Fiber \u5BF9\u8C61\uFF0C\u5BF9\u5E94\u5173\u7CFB\u5982\u4E0B\uFF1A

\`\`\`ts
export const FunctionComponent = 0 // \u51FD\u6570\u7EC4\u4EF6
export const ClassComponent = 1 // \u7C7B\u7EC4\u4EF6
export const IndeterminateComponent = 2 // \u521D\u59CB\u5316\u7684\u65F6\u5019\u4E0D\u77E5\u9053\u662F\u51FD\u6570\u7EC4\u4EF6\u8FD8\u662F\u7C7B\u7EC4\u4EF6
export const HostRoot = 3 // Root Fiber \u53EF\u4EE5\u7406\u89E3\u4E3A\u6839\u5143\u7D20 \uFF0C \u901A\u8FC7reactDom.render()\u4EA7\u751F\u7684\u6839\u5143\u7D20
export const HostPortal = 4 // \u5BF9\u5E94  ReactDOM.createPortal \u4EA7\u751F\u7684 Portal
export const HostComponent = 5 // dom \u5143\u7D20 \u6BD4\u5982 <div>
export const HostText = 6 // \u6587\u672C\u8282\u70B9
export const Fragment = 7 // \u5BF9\u5E94 <React.Fragment>
export const Mode = 8 // \u5BF9\u5E94 <React.StrictMode>
export const ContextConsumer = 9 // \u5BF9\u5E94 <Context.Consumer>
export const ContextProvider = 10 // \u5BF9\u5E94 <Context.Provider>
export const ForwardRef = 11 // \u5BF9\u5E94 React.ForwardRef
export const Profiler = 12 // \u5BF9\u5E94 <Profiler/ >
export const SuspenseComponent = 13 // \u5BF9\u5E94 <Suspense>
export const MemoComponent = 14 // \u5BF9\u5E94 React.memo \u8FD4\u56DE\u7684\u7EC4\u4EF6
\`\`\`

\u4E0B\u9762\u7684 jsx \u4EE3\u7801\u4F1A\u88AB\u8F6C\u6210\u5982\u4E0B fiber \u7ED3\u6784\uFF1A

\`\`\`jsx
const reactElement = (
  <div style={{ marginTop: '100px' }} className="container">
    {/* element \u5143\u7D20\u7C7B\u578B */}
    <div>hello,world</div>
    {/* fragment \u7C7B\u578B */}
    <React.Fragment>
      <div> \u{1F47D}\u{1F47D} </div>
    </React.Fragment>
    {/* text \u6587\u672C\u7C7B\u578B */}
    my name is alien
    {/* \u6570\u7EC4\u8282\u70B9\u7C7B\u578B */}
    {toLearn.map((item) => (
      <div key={item}>let us learn {item} </div>
    ))}
    {/* \u7EC4\u4EF6\u7C7B\u578B */}
    <TextComponent />
    {/* \u4E09\u5143\u8FD0\u7B97 */}
    {this.status ? <TextComponent /> : <div>\u4E09\u5143\u8FD0\u7B97</div>}
    {/* \u51FD\u6570\u6267\u884C */}
    {this.renderFoot()}
    <button onClick={() => console.log(this.render())}>
      \u6253\u5370render\u540E\u7684\u5185\u5BB9
    </button>
  </div>
)
\`\`\`

![\u5143\u7D20\u88AB\u8F6C\u6362\u540E\u7684 fiber \u7ED3\u6784](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E5%85%83%E7%B4%A0%E8%A2%AB%E8%BD%AC%E6%8D%A2%E5%90%8E%E7%9A%84fiber%E7%BB%93%E6%9E%84.png)

\u603B\u7684\u6765\u8BF4\uFF0Cfiber \u7684\u7ED3\u6784\u5982\u4E0B\uFF1A

- child\uFF1A \u4E00\u4E2A\u7531\u7236\u7EA7 fiber \u6307\u5411\u5B50\u7EA7 fiber \u7684\u6307\u9488\u3002
- return\uFF1A\u4E00\u4E2A\u5B50\u7EA7 fiber \u6307\u5411\u7236\u7EA7 fiber \u7684\u6307\u9488\u3002
- sibling: \u4E00\u4E2A fiber \u6307\u5411\u4E0B\u4E00\u4E2A\u5144\u5F1F fiber \u7684\u6307\u9488\u3002

## 2. \u52A8\u624B\u5B9E\u8DF5 -- \u63D0\u9AD8\u7EC4\u4EF6\u53EF\u63A7\u6027

\u73B0\u5728\`JSXDemo1\`\u7EC4\u4EF6\u7684\`props.children\`\u4E2D\u7684\u7ED3\u6784\u6BD4\u8F83\u590D\u6742\uFF0C\u65E2\u6709\u5BF9\u8C61\u7C7B\u578B(\u5982\`ReactElement\`)\uFF0C\u53C8\u6709\u6570\u7EC4\u7C7B\u578B\uFF0C\u8FD8\u6709\u7EAF\u5B57\u7B26\u4E32\u7C7B\u578B

\u4E3A\u4E86\u63D0\u9AD8\u53EF\u63A7\u6027\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u4E00\u4E9B\u6539\u9020\uFF0C\u5305\u542B\u4EE5\u4E0B\u6B65\u9AA4\uFF1A

1. \u5C06 children \u6241\u5E73\u5316\uFF0C\u628A\u91CC\u9762\u7684\u6570\u7EC4\u5143\u7D20\u62CD\u5E73
2. \u53BB\u9664\u7EAF\u5B57\u7B26\u4E32\u5B50\u5143\u7D20
3. \u5F80 children \u7684\u672B\u5C3E\u63D2\u5165\u65B0\u5143\u7D20
4. \u514B\u9686\u65B0\u7684\u5143\u7D20\u8282\u70B9\u5E76\u6E32\u67D3

:::tip

\u7B2C\u4E09\u7B2C\u56DB\u6B65\u7EAF\u7CB9\u662F\u4E3A\u4E86\u52A0\u6DF1\u8BFB\u8005\u5BF9 jsx \u7F16\u8BD1\u540E\u7684 React.element \u7ED3\u6784\u7684\u7406\u89E3\uFF0C\u540C\u65F6\u4E5F\u662F\u4E3A\u4E86\u719F\u6089 React API \u7684\u4F7F\u7528

:::

\`\`\`tsx{44-69}
import React, { useState } from 'react'

const toLearn = ['react', 'vue', 'vite', 'node']

interface SimpleComponentProps {
  message?: string
}
const SimpleComponent = ({
  message = 'A Simple Component.',
}: SimpleComponentProps) => <div>{message}</div>

const JSXDemo2 = () => {
  const [status, setStatus] = useState(false)

  const renderByFunc = () => <div>Rendered by function.</div>
  const el = (
    <>
      {/* element \u5143\u7D20\u7C7B\u578B */}
      <div>Hello World</div>
      {/* fragment \u7C7B\u578B */}
      <React.Fragment>
        <div>\u{1F680}\u{1F680}\u{1F680}</div>
      </React.Fragment>
      {/* text \u6587\u672C\u7C7B\u578B */}
      This is a text element.
      {/* \u6570\u7EC4\u8282\u70B9\u7C7B\u578B */}
      {toLearn.map((item) => (
        <div key={item}>[Array Element] -- let us learn {item} </div>
      ))}
      {/* \u7EC4\u4EF6\u7C7B\u578B */}
      <SimpleComponent />
      {/* \u4E09\u76EE\u8FD0\u7B97 */}
      {status ? (
        <SimpleComponent message="status: true" />
      ) : (
        <SimpleComponent message="status: false" />
      )}
      {/* \u51FD\u6570\u6E32\u67D3 */}
      {renderByFunc()}
      <button onClick={() => setStatus(!status)}>toggle status</button>
    </>
  )

  // 1. children \u6570\u7EC4\u6241\u5E73\u5316 -- \u5C06\u5185\u90E8\u7684 \u6570\u7EC4\u8282\u70B9 \u62CD\u5E73
  const { children } = el.props
  const flatChildren = React.Children.toArray(children)
  console.log('\u6241\u5E73\u5316\u540E\u7684 children:', flatChildren)

  // 2. \u53BB\u9664\u7EAF\u5B57\u7B26\u4E32\u5B50\u5143\u7D20
  const newChildren: any[] = []
  React.Children.forEach(flatChildren, (child) => {
    if (React.isValidElement(child)) {
      newChildren.push(child)
    }
  })

  // 3. \u5F80 children \u7684\u672B\u5C3E\u63D2\u5165\u65B0\u5143\u7D20
  const lastChild = React.createElement(
    'div',
    { className: 'last' },
    'last element',
  )
  newChildren.push(lastChild)

  // 4. \u514B\u9686\u65B0\u7684\u5143\u7D20\u8282\u70B9\u5E76\u6E32\u67D3
  const newEl = React.cloneElement(el, {}, ...newChildren)
  console.log('\u589E\u5F3A\u53EF\u63A7\u6027\u540E\u7684 el:', newEl)

  return newEl
}

export { JSXDemo2 }
\`\`\`

import { JSXDemo2 } from '~/demos/jsx/demo2.tsx'

<DemoBlock>
  <JSXDemo2 />
</DemoBlock>

### 2.1. \u5C06 children \u6241\u5E73\u5316\uFF0C\u628A\u91CC\u9762\u7684\u6570\u7EC4\u5143\u7D20\u62CD\u5E73

\u4F7F\u7528\`React.Children.toArray()\`\u5C06 children \u8F6C\u6210\u6241\u5E73\u5316\u3001\u89C4\u8303\u5316\u7684\u6570\u7EC4\uFF0C\u5728\u6211\u4EEC\u9700\u8981\u904D\u5386 children \u7684\u65F6\u5019\u5F88\u6709\u7528

\`\`\`tsx
// 1. children \u6570\u7EC4\u6241\u5E73\u5316 -- \u5C06\u5185\u90E8\u7684 \u6570\u7EC4\u8282\u70B9 \u62CD\u5E73
const { children } = el.props
const flatChildren = React.Children.toArray(children)
console.log('\u6241\u5E73\u5316\u540E\u7684 children:', flatChildren)
\`\`\`

### 2.2. \u53BB\u9664\u7EAF\u5B57\u7B26\u4E32\u5B50\u5143\u7D20

\u4F7F\u7528\`React.Children.forEach\`\u5B9E\u9645\u4E0A\u5C31\u7B49\u4EF7\u4E8E:

1. React.Children.toArray
2. Array.prototype.forEach

\u56E0\u6B64\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528\`React.Children.forEach(children)\`\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u8FD9\u91CC\u53EA\u662F\u4E3A\u4E86\u8BA9\u8BFB\u8005\u719F\u6089 React API \u624D\u5C06\u5176\u5206\u5F00\u4F7F\u7528\u7684

:::tip

flatChildren \u5DF2\u7ECF\u662F\u4E00\u4E2A\u6241\u5E73\u5316\u3001\u89C4\u8303\u5316\u7684\u6570\u7EC4\u4E86\uFF0C\u56E0\u6B64\u76F4\u63A5\u7528\`flatChildren.forEach\`\u4E5F\u53EF\u4EE5

:::

\`\`\`tsx
// 2. \u53BB\u9664\u7EAF\u5B57\u7B26\u4E32\u5B50\u5143\u7D20
const newChildren: any[] = []
React.Children.forEach(flatChildren, (child) => {
  if (React.isValidElement(child)) {
    newChildren.push(child)
  }
})
\`\`\`

### 2.3. \u5F80 children \u7684\u672B\u5C3E\u63D2\u5165\u65B0\u5143\u7D20

\`\`\`tsx
// 3. \u5F80 children \u7684\u672B\u5C3E\u63D2\u5165\u65B0\u5143\u7D20
const lastChild = React.createElement(
  'div',
  { className: 'last' },
  'last element',
)
newChildren.push(lastChild)
\`\`\`

\u4E0E\u4E4B\u7B49\u4EF7\u7684\u5199\u6CD5:

\`\`\`tsx
newChildren.push(<div className="last">last element</div>)
\`\`\`

### 2.4. \u514B\u9686\u65B0\u7684\u5143\u7D20\u8282\u70B9\u5E76\u6E32\u67D3

\`\`\`tsx
// 4. \u514B\u9686\u65B0\u7684\u5143\u7D20\u8282\u70B9\u5E76\u6E32\u67D3
const newEl = React.cloneElement(el, {}, ...newChildren)
console.log('\u589E\u5F3A\u53EF\u63A7\u6027\u540E\u7684 el:', newEl)

return newEl
\`\`\`

:::tip

\`React.cloneElement\` \u7684\u4F5C\u7528\u662F\u5C06\u4F20\u5165\u7684\u65B0 props \u4E0E\u88AB\u514B\u9686\u5143\u7D20\u7684 props \u6D45\u5C42\u5408\u5E76\u540E\u8FD4\u56DE

\u5728\u8FD9\u91CC\u5219\u662F\u514B\u9686\u539F\u6765\u7684 el \u5143\u7D20\uFF0C\u5E76\u4F7F\u7528\u65B0\u7684 newChildren \u4F5C\u4E3A\u5176 \`props.children\`

:::

:::info{title=\u63D0\u95EE}

React.createElement \u548C React.cloneElement \u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F

\u524D\u8005\u7528\u4E8E\u521B\u5EFA\u5143\u7D20\uFF0C\u540E\u8005\u7528\u4E8E\u5BF9\u5DF2\u6709\u5143\u7D20\u8FDB\u884C\u4FEE\u6539\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 React.element \u5BF9\u8C61

:::

## 3. Babel \u662F\u5982\u4F55\u89E3\u6790 JSX \u7684\uFF1F

\u4F7F\u7528 Babel \u7F16\u8BD1 jsx \u65F6\uFF0C\u4E3B\u8981\u4F7F\u7528\u7684\u662F \`@babel/preset-react\` \u8FD9\u4E2A preset\uFF0C\u5176\u4E2D\u8D77\u4E3B\u8981\u4F5C\u7528\u7684\u662F\u8BE5 preset \u5185\u90E8\u7684\u4E24\u4E2A\u63D2\u4EF6:

- \`@babel/plugin-syntax-jsx\`: \u8BA9 Babel \u89E3\u6790 jsx \u8BED\u6CD5
- \`@babel/plugin-transform-react-jsx\`: \u5C06 jsx \u5143\u7D20\u8F6C\u6362\u6210 React API\uFF0C\u5982 \`React.createElement\`

\u800C\u5173\u4E8E React API \u7684\u8F6C\u6362\u5219\u5206\u4E3A\u4E24\u79CD\u6A21\u5F0F\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u89C2\u5BDF\u7ED3\u679C\uFF0C\u6211\u4EEC\u7F16\u5199\u4E00\u6BB5\u7B80\u5355\u7684 ts \u4EE3\u7801\uFF0C\u8C03\u7528 \`@babel/core\` \u7684 \`transformSync\` \u67E5\u770B\u4E00\u4E0B\u7F16\u8BD1\u7ED3\u679C

\`\`\`shell
pnpm i @bebel/core @babel/preset-react @types/babel__core -D
\`\`\`

\`\`\`ts
import { transformSync } from '@babel/core'

const res = transformSync('<div>jsx</div>', {
  presets: ['@babel/preset-react'],
})!

console.log(res.code)
\`\`\`

\u521A\u521A\u8BF4\u8FC7\u4E86\uFF0C\u4E00\u5171\u6709\u4E24\u79CD\u8F6C\u6362\u65B9\u5F0F\uFF1A

- React Classic Runtime
  \u6839\u636E\u5B98\u65B9\u6587\u6863\u7684\u8BF4\u660E\uFF0C\u9ED8\u8BA4\u5C31\u662F\u4EE5 \`Classic Runtime\` \u7684\u65B9\u5F0F\u8F6C\u6362 jsx \u7684

  ![@babel/preset-react\u9ED8\u8BA4\u914D\u7F6E](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/babel-preset-react%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE.png)

  \u8FD9\u79CD\u65B9\u5F0F\u7F16\u8BD1\u51FA\u6765\u7684\u7ED3\u679C\u5982\u4E0B:

  \`\`\`text
  /*#__PURE__*/React.createElement("div", null, "jsx");
  \`\`\`

  \u4E5F\u5C31\u662F \`React.createElement\` \u7684\u65B9\u5F0F\uFF0C\u56E0\u6B64\u6211\u4EEC\u7684\u6E90\u4EE3\u7801\u4E2D\u9700\u8981\u663E\u5F0F\u5F15\u5165 React

- React Automatic Runtime

  \u5C06\u4EE3\u7801\u6539\u5199\u5982\u4E0B:

  \`\`\`ts
  import { transformSync } from '@babel/core'

  const res = transformSync('<div>jsx</div>', {
    presets: [['@babel/preset-react', { runtime: 'automatic' }]],
  })!

  console.log(res.code)
  \`\`\`

  \u7F16\u8BD1\u7684\u7ED3\u679C\u5982\u4E0B:

  \`\`\`text
  import { jsx as _jsx } from "react/jsx-runtime";
  /*#__PURE__*/_jsx("div", {
    children: "jsx"
  });
  \`\`\`
`;export{w as content,S as default,v as frontmatter,j as lastUpdatedTime,R as title,x as toc};
