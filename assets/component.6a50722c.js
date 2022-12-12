var y=Object.defineProperty;var D=(s,l,c)=>l in s?y(s,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[l]=c;var h=(s,l,c)=>(D(s,typeof l!="symbol"?l+"":l,c),c);import{jsx as e,jsxs as n,Fragment as C}from"react/jsx-runtime";import{D as t}from"./index.6529e49c.js";import m,{useState as i,useEffect as F}from"react";class g extends m.Component{constructor(){super(...arguments);h(this,"state",{message:"I'm ClassComponent."});h(this,"sayHello",()=>this.setState({message:"Hello, I'm ClassComponent."}))}render(){return e("div",{onClick:()=>this.sayHello(),children:this.state.message})}}const u=()=>{const[s,l]=i("I'm FunctionComponent."),c=()=>{l("Hello, I'm FunctionComponent")};return console.log("\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684 this -- ",void 0),e("div",{onClick:()=>c(),children:s})},N="_container_1eus2_1",A="_parent_1eus2_17",B="_child_1eus2_24",d={container:N,parent:A,child:B},f=()=>{const[s,l]=i("father message"),[c,r]=i("child message");return n("div",{className:d.container,children:[n("section",{className:d.parent,children:[e("h3",{children:"\u8FD9\u91CC\u662F\u7236\u7EC4\u4EF6"}),n("p",{children:["\u5B50\u7EC4\u4EF6\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6\u7684 message: ",s]}),e("input",{type:"text",placeholder:"\u6211\u60F3\u4F20\u6D88\u606F\u7ED9\u5B50\u7EC4\u4EF6...",onChange:o=>r(o.target.value)})]}),e(M,{childMessage:c,onChangeFatherMessage:o=>l(o)})]})},M=({childMessage:s,onChangeFatherMessage:l})=>n("section",{className:d.child,children:[e("h3",{children:"\u8FD9\u91CC\u662F\u5B50\u7EC4\u4EF6"}),n("p",{children:["\u7236\u7EC4\u4EF6\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u7684 message: ",s]}),e("input",{type:"text",placeholder:"\u6211\u60F3\u4F20\u6D88\u606F\u7ED9\u7236\u7EC4\u4EF6...",onChange:c=>l(c.target.value)})]});function b(s){return{all:s=s||new Map,on:function(l,c){var r=s.get(l);r?r.push(c):s.set(l,[c])},off:function(l,c){var r=s.get(l);r&&(c?r.splice(r.indexOf(c)>>>0,1):s.set(l,[]))},emit:function(l,c){var r=s.get(l);r&&r.slice().map(function(o){o(c)}),(r=s.get("*"))&&r.slice().map(function(o){o(l,c)})}}}const v="_container_1eus2_1",k="_parent_1eus2_17",x="_child_1eus2_24",p={container:v,parent:k,child:x},a=b(),S=()=>{const[s,l]=i("");return F(()=>(a.on("changeFatherMessage",({fatherMessage:c})=>{l(c)}),()=>{a.off("changeFatherMessage")}),[]),n("div",{className:p.container,children:[n("section",{className:p.parent,children:[e("h3",{children:"\u8FD9\u91CC\u662F\u7236\u7EC4\u4EF6"}),n("p",{children:["\u5B50\u7EC4\u4EF6\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6\u7684 message: ",s]}),e("input",{type:"text",placeholder:"\u6211\u60F3\u4F20\u6D88\u606F\u7ED9\u5B50\u7EC4\u4EF6...",onChange:c=>a.emit("changeChildMessage",{childMessage:c.target.value})})]}),e(R,{})]})},R=()=>{const[s,l]=i("");return F(()=>(a.on("changeChildMessage",({childMessage:c})=>l(c)),()=>{a.off("changeChildMessage")}),[]),n("section",{className:p.child,children:[e("h3",{children:"\u8FD9\u91CC\u662F\u5B50\u7EC4\u4EF6"}),n("p",{children:["\u7236\u7EC4\u4EF6\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u7684 message: ",s]}),e("input",{type:"text",placeholder:"\u6211\u60F3\u4F20\u6D88\u606F\u7ED9\u7236\u7EC4\u4EF6...",onChange:c=>a.emit("changeFatherMessage",{fatherMessage:c.target.value})})]})},U=void 0,w=[{id:"\u63D0\u51FA\u95EE\u9898",text:"\u63D0\u51FA\u95EE\u9898",depth:2},{id:"1-react-\u7EC4\u4EF6\u7684\u672C\u8D28\u662F\u4EC0\u4E48",text:"1. React \u7EC4\u4EF6\u7684\u672C\u8D28\u662F\u4EC0\u4E48\uFF1F",depth:2},{id:"2-\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u533A\u522B\u5728\u54EA",text:"2. \u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u533A\u522B\u5728\u54EA\uFF1F",depth:2},{id:"21-\u7C7B\u7EC4\u4EF6",text:"2.1. \u7C7B\u7EC4\u4EF6",depth:3},{id:"22-\u51FD\u6570\u7EC4\u4EF6",text:"2.2. \u51FD\u6570\u7EC4\u4EF6",depth:3},{id:"23-\u533A\u522B",text:"2.3. \u533A\u522B",depth:3},{id:"3-\u7EC4\u4EF6\u95F4\u901A\u4FE1\u65B9\u5F0F\u6709\u54EA\u4E9B",text:"3. \u7EC4\u4EF6\u95F4\u901A\u4FE1\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F",depth:2},{id:"31-props-\u548C-callback",text:"3.1. props \u548C callback",depth:3},{id:"32-event-bus",text:"3.2. event bus",depth:3},{id:"4-\u7EC4\u4EF6\u5F3A\u5316\u65B9\u5F0F\u6709\u54EA\u4E9B",text:"4. \u7EC4\u4EF6\u5F3A\u5316\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F",depth:2}],P="comopnent";function E(s){const l=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",p:"p",div:"div",button:"button",span:"span",pre:"pre",code:"code",h3:"h3",img:"img",ol:"ol"},s.components);return n(C,{children:[n(l.h1,{id:"comopnent",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#comopnent",children:"#"}),"comopnent"]}),`
`,n(l.h2,{id:"\u63D0\u51FA\u95EE\u9898",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u63D0\u51FA\u95EE\u9898",children:"#"}),"\u63D0\u51FA\u95EE\u9898"]}),`
`,n(l.ul,{children:[`
`,e(l.li,{children:"React \u7EC4\u4EF6\u7684\u672C\u8D28\u662F\u4EC0\u4E48\uFF1F"}),`
`,e(l.li,{children:"\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u533A\u522B\u5728\u54EA\uFF1F"}),`
`,e(l.li,{children:"\u7EC4\u4EF6\u95F4\u901A\u4FE1\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F"}),`
`,e(l.li,{children:"\u7EC4\u4EF6\u5F3A\u5316\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F"}),`
`]}),`
`,n(l.h2,{id:"1-react-\u7EC4\u4EF6\u7684\u672C\u8D28\u662F\u4EC0\u4E48",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#1-react-\u7EC4\u4EF6\u7684\u672C\u8D28\u662F\u4EC0\u4E48",children:"#"}),"1. React \u7EC4\u4EF6\u7684\u672C\u8D28\u662F\u4EC0\u4E48\uFF1F"]}),`
`,e(l.p,{children:"\u9996\u5148\u6765\u770B\u770B React \u4E2D\u7EC4\u4EF6\u662F\u600E\u4E48\u4F7F\u7528\u7684\uFF0C\u5305\u62EC\u4E24\u79CD\uFF1A"}),`
`,n(l.ul,{children:[`
`,e(l.li,{children:"\u7C7B\u7EC4\u4EF6"}),`
`,e(l.li,{children:"\u51FD\u6570\u7EC4\u4EF6"}),`
`]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u4F7F\u7528 React \u7EC4\u4EF6 */"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u7C7B\u7EC4\u4EF6 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ClassComponentState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  message"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ClassComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// state"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"ClassComponentState"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"I'm ClassComponent."}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// methods"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"sayHello"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"Hello, I'm ClassComponent."}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// render method"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"sayHello"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}>{this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:"}</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u51FD\u6570\u7EC4\u4EF6 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"FunctionComponent"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FunctionComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"I'm FunctionComponent."}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"sayHello"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"setMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"Hello, I'm FunctionComponent"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"sayHello"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}>{"}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:"}</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"ClassComponent"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"FunctionComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,`
`,e(l.p,{children:e(l.code,{children:"ClassComponent"})}),`
`,e(t,{children:e(g,{})}),`
`,e(l.p,{children:e(l.code,{children:"FunctionComponent"})}),`
`,e(t,{children:e(u,{})}),`
`,e(l.p,{children:"\u4E0D\u96BE\u53D1\u73B0\uFF0C\u7EC4\u4EF6\u627F\u8F7D\u4E86\u6E32\u67D3\u89C6\u56FE\u7684 UI \u548C\u66F4\u65B0\u89C6\u56FE\u7684 setState \u3001 useState \u7B49\u65B9\u6CD5"}),`
`,n(l.div,{className:"island-directive tip",children:[e(l.p,{className:"island-directive-title",children:"React \u7EC4\u4EF6\u7684\u672C\u8D28"}),e(l.div,{className:"island-directive-content",children:e(l.p,{children:"UI + update + \u5E38\u89C4\u7684\u7C7B\u548C\u51FD\u6570"})})]}),`
`,n(l.h2,{id:"2-\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u533A\u522B\u5728\u54EA",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#2-\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u533A\u522B\u5728\u54EA",children:"#"}),"2. \u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u533A\u522B\u5728\u54EA\uFF1F"]}),`
`,e(l.p,{children:"\u8981\u56DE\u7B54\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u9700\u8981\u7A0D\u5FAE\u63A2\u7D22\u4E00\u4E0B React \u5173\u4E8E\u4E24\u79CD\u7EC4\u4EF6\u7684\u5904\u7406\u6E90\u7801\u4F1A\u66F4\u52A0\u597D\u7406\u89E3"}),`
`,n(l.h3,{id:"21-\u7C7B\u7EC4\u4EF6",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#21-\u7C7B\u7EC4\u4EF6",children:"#"}),"2.1. \u7C7B\u7EC4\u4EF6"]}),`
`,e(l.p,{children:"\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u6784\u9020\u5BF9\u5E94\u7684\u6E90\u7801\uFF1A"}),`
`,e(l.p,{children:e(l.code,{children:"packages/react-reconciler/src/ReactFiberClassComponent.old.js"})}),`
`,n(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"js"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"function"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"constructClassInstance"}),e(l.span,{style:{color:"#ECEFF4"},children:"("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" Fiber"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u5F53\u524D\u6B63\u5728\u5DE5\u4F5C\u7684 Fiber \u5BF9\u8C61"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"ctor"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"any"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u7528\u6237\u7F16\u5199\u7684\u7C7B\u7EC4\u4EF6"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"any"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u4F20\u9012\u7ED9\u7C7B\u7EC4\u4EF6\u7684 props"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"any"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// ..."})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"let"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"instance"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"new"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"ctor"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"context"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// ..."})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u5E73\u65F6\u7F16\u5199\u7684\u7C7B\u7EC4\u4EF6\u662F\u901A\u8FC7 ",e(l.code,{children:"new"})," \u7684\u65B9\u5F0F\u88AB\u5B9E\u4F8B\u5316\u51FA\u6765\u7684"]}),`
`,n(l.p,{children:["\u518D\u770B\u770B\u7F16\u5199\u7C7B\u7EC4\u4EF6\u65F6\uFF0C\u7EE7\u627F\u7684 ",e(l.code,{children:"React.Component"})," \u662F\u4F55\u65B9\u795E\u5723"]}),`
`,e(l.p,{children:e(l.code,{children:"packages/react/src/ReactBaseClasses.js"})}),`
`,n(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"js"}),e(l.pre,{children:n(l.code,{className:"",children:[e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:"// React.Component"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"emptyObject"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"function"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"context"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"updater"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"context"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"context"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// If a component has string refs, we will assign a different object later."})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"refs"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"emptyObject"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// We initialize the default updater but the real one gets injected by the"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// renderer."})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"updater"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"updater"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"||"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"ReactNoopUpdateQueue"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:"// \u7C7B\u7EC4\u4EF6 setState \u65B9\u6CD5"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#8FBCBB"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9FF"},children:"prototype"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"function"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"partialState"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"callback"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// ..."})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"updater"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"enqueueSetState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"partialState"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"callback"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"setState"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:"// \u7C7B\u7EC4\u4EF6 forceUpdate \u65B9\u6CD5"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#8FBCBB"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9FF"},children:"prototype"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"forceUpdate"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"function"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"callback"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"updater"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"enqueueForceUpdate"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"callback"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"forceUpdate"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C",e(l.code,{children:"React.Component"})," \u5C31\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u91CC\u9762\u5B8C\u6210\u4E86 ",e(l.code,{children:"props"}),"\u3001",e(l.code,{children:"context"})," \u7684\u521D\u59CB\u5316\u8D4B\u503C\uFF0C\u5E76\u8BA9 ",e(l.code,{children:"refs"})," \u6307\u5411\u4E00\u4E2A\u7A7A\u5BF9\u8C61"]}),`
`,n(l.p,{children:["\u800C\u5E73\u65F6\u7528\u5230\u7684\u7C7B\u7EC4\u4EF6 ",e(l.code,{children:"this.setState"})," \u672C\u8D28\u4E0A\u662F\u5728\u8C03\u7528 ",e(l.code,{children:"this.updater.enqueueSetState"})," \u65B9\u6CD5"]}),`
`,n(l.p,{children:[e(l.code,{children:"this.forceUpdate"})," \u672C\u8D28\u4E0A\u662F\u5728\u8C03\u7528 ",e(l.code,{children:"this.updater.enqueueForceUpdate"})," \u65B9\u6CD5"]}),`
`,n(l.h3,{id:"22-\u51FD\u6570\u7EC4\u4EF6",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#22-\u51FD\u6570\u7EC4\u4EF6",children:"#"}),"2.2. \u51FD\u6570\u7EC4\u4EF6"]}),`
`,e(l.p,{children:"\u51FD\u6570\u7EC4\u4EF6\u521B\u5EFA\u7684\u5BF9\u5E94\u6E90\u7801\uFF1A"}),`
`,e(l.p,{children:e(l.code,{children:"packages/react-reconciler/src/ReactFiberHooks.old.js"})}),`
`,n(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"js"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"function"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"renderWithHooks"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"Props"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" SecondArg"}),e(l.span,{style:{color:"#ECEFF4"},children:">("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"current"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" Fiber "}),e(l.span,{style:{color:"#81A1C1"},children:"|"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"null"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u5F53\u524D\u51FD\u6570\u7EC4\u4EF6\u5BF9\u5E94\u7684 Fiber \u5BF9\u8C61"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" Fiber"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u5F53\u524D\u6B63\u5728\u5DE5\u4F5C\u7684 Fiber \u5BF9\u8C61"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"Component"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"p"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" Props"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"arg"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" SecondArg"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"any"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u7528\u6237\u7F16\u5199\u7684\u51FD\u6570\u7EC4\u4EF6"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" Props"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u51FD\u6570\u7EC4\u4EF6\u7B2C\u4E00\u4E2A\u53C2\u6570 props"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"secondArg"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" SecondArg"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u51FD\u6570\u7EC4\u4EF6\u5269\u4F59\u53C2\u6570"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"nextRenderLanes"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" Lanes"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#616E88"},children:"// \u4E0B\u6B21\u6E32\u67D3\u8FC7\u671F\u65F6\u95F4"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"any"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// ..."})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"let"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"children"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"secondArg"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// ..."})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:"\u51FD\u6570\u7EC4\u4EF6\u7684\u521B\u5EFA\u662F\u76F4\u63A5\u8C03\u7528\u6211\u4EEC\u7F16\u5199\u7684\u4F1A\u8FD4\u56DE JSX \u7684\u51FD\u6570"}),`
`,n(l.div,{className:"island-directive tip",children:[e(l.p,{className:"island-directive-title",children:"TIP"}),n(l.div,{className:"island-directive-content",children:[e(l.p,{children:"\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u4E0D\u5E94\u8BE5\u5728\u51FD\u6570\u7EC4\u4EF6\u7684 prototype \u4E0A\u7ED1\u5B9A\u4EFB\u4F55\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u662F\u76F4\u63A5\u8C03\u7528\u51FD\u6570"}),e(l.p,{children:"\u56E0\u6B64\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684 this \u7ED1\u5B9A\u89C4\u5219\u662F\u9ED8\u8BA4\u7ED1\u5B9A\uFF0C\u6240\u4EE5\u4E0D\u80FD\u901A\u8FC7 this \u8BBF\u95EE\u5230 prototype \u4E0A\u7684\u4EFB\u4F55\u4E1C\u897F"}),n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"FunctionComponent"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FunctionComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"I'm FunctionComponent."}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"sayHello"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"setMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"Hello, I'm FunctionComponent"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684 this -- "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"sayHello"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}>{"}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:"}</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E4%B8%AD%E7%9A%84this.png",alt:"\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684this"})})]})]}),`
`,n(l.h3,{id:"23-\u533A\u522B",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#23-\u533A\u522B",children:"#"}),"2.3. \u533A\u522B"]}),`
`,e(l.p,{children:"\u603B\u7684\u6765\u8BF4\uFF0C\u4E8C\u8005\u533A\u522B\u5982\u4E0B\uFF1A"}),`
`,n(l.ul,{children:[`
`,e(l.li,{children:"\u7C7B\u7EC4\u4EF6\u5E95\u5C42\u53EA\u5B9E\u4F8B\u5316\u4E86\u4E00\u6B21\uFF0C\u5E76\u4E14\u5728\u5B9E\u4F8B\u4E2D\u4FDD\u5B58\u4E86\u7EC4\u4EF6\u7684 state\uFF0C\u7EC4\u4EF6\u66F4\u65B0\u65F6\u53EA\u9700\u8981\u8C03\u7528\u7EC4\u4EF6\u5B9E\u4F8B\u7684 render \u65B9\u6CD5\u548C\u5BF9\u5E94\u7684\u751F\u547D\u5468\u671F\u5373\u53EF"}),`
`,e(l.li,{children:"\u51FD\u6570\u7EC4\u4EF6\u6BCF\u6B21\u66F4\u65B0\u90FD\u662F\u4E00\u4E2A\u5168\u65B0\u7684\u51FD\u6570\u6267\u884C\uFF0C\u4E0D\u80FD\u4FDD\u7559\u7EC4\u4EF6\u7684 state\uFF0C\u5E76\u4E14\u65E0\u6CD5\u50CF\u7C7B\u7EC4\u4EF6\u90A3\u6837\u62E5\u6709\u751F\u547D\u5468\u671F"}),`
`]}),`
`,n(l.p,{children:["\u8FD9\u6837\u770B\u6765\u51FD\u6570\u7EC4\u4EF6\u7684\u5C40\u9650\u6027\u8FD8\u662F\u5F88\u5927\u7684\uFF0C\u4E3A\u6B64 React \u81EA\u4ECE v16.8 \u7248\u672C\u5F00\u59CB\uFF0C\u5927\u529B\u63A8\u884C ",e(l.code,{children:"React Hooks"}),"\uFF0C\u8BA9\u51FD\u6570\u7EC4\u4EF6\u80FD\u591F\u4FDD\u5B58\u81EA\u5DF1\u7684\u72B6\u6001\uFF0C\u5E76\u901A\u8FC7 ",e(l.code,{children:"useEffect"})," \u526F\u4F5C\u7528 hook \u5B9E\u73B0\u7C7B\u4F3C\u7C7B\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u7684\u7279\u6027"]}),`
`,n(l.h2,{id:"3-\u7EC4\u4EF6\u95F4\u901A\u4FE1\u65B9\u5F0F\u6709\u54EA\u4E9B",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#3-\u7EC4\u4EF6\u95F4\u901A\u4FE1\u65B9\u5F0F\u6709\u54EA\u4E9B",children:"#"}),"3. \u7EC4\u4EF6\u95F4\u901A\u4FE1\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F"]}),`
`,e(l.p,{children:"React \u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F\u4E3B\u6D41\u7684\u6709\u4EE5\u4E0B\u4E94\u79CD\uFF1A"}),`
`,n(l.ul,{children:[`
`,e(l.li,{children:"props \u548C callback"}),`
`,e(l.li,{children:"ref"}),`
`,e(l.li,{children:"context"}),`
`,e(l.li,{children:"event bus"}),`
`,e(l.li,{children:"\u72B6\u6001\u7BA1\u7406\u5E93 -- \u5982 redux\u3001mobx\u3001zustand \u7B49"}),`
`]}),`
`,n(l.p,{children:["\u672C\u7AE0\u8282\u4E3B\u8981\u8BB2\u89E3 ",e(l.code,{children:"props \u548C callback"})," \u4EE5\u53CA ",e(l.code,{children:"event bus"})," \u7684\u65B9\u5F0F\uFF0C\u5176\u4F59\u7684\u4F1A\u6709\u4E13\u95E8\u7684\u7AE0\u8282\u8BB2\u89E3"]}),`
`,n(l.h3,{id:"31-props-\u548C-callback",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#31-props-\u548C-callback",children:"#"}),"3.1. props \u548C callback"]}),`
`,e(l.p,{children:"\u5E38\u7528\u4E8E\u7236\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u901A\u4FE1\uFF1A"}),`
`,n(l.ul,{children:[`
`,e(l.li,{children:"\u7236 -> \u5B50\uFF1A\u7236\u7EC4\u4EF6\u5C06\u6570\u636E\u901A\u8FC7 props \u7684\u65B9\u5F0F\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6"}),`
`,e(l.li,{children:"\u5B50 -> \u7236\uFF1A\u5B50\u7EC4\u4EF6\u8C03\u7528 props \u4E2D\u7684 callback prop \u901A\u77E5\u7236\u7EC4\u4EF6"}),`
`]}),`
`,e(l.p,{children:e(l.code,{children:"\u7236 -> \u5B50"})}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u7EC4\u4EF6\u901A\u4FE1 -- props \u548C callback */"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"./style.module.scss"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u7236\u7EC4\u4EF6 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"Father"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"father message"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"childMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"child message"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"container"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<section"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"parent"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<h3>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u8FD9\u91CC\u662F\u7236\u7EC4\u4EF6"}),e(l.span,{style:{color:"#81A1C1"},children:"</h3>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u5B50\u7EC4\u4EF6\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6\u7684 message: "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherMessage"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<input"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"type"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"text"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"placeholder"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"\u6211\u60F3\u4F20\u6D88\u606F\u7ED9\u5B50\u7EC4\u4EF6..."}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"onChange"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"setChildMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"target"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"value"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</section>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#8FBCBB"},children:"childMessage"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"childMessage"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#8FBCBB"},children:"onChangeFatherMessage"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#88C0D0"},children:"setFatherMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u5B50\u7EC4\u4EF6 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ChildProps"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  childMessage"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"onChangeFatherMessage"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherMessage"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"void"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"Child"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"ChildProps"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"childMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"onChangeFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:") "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<section"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"child"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<h3>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u8FD9\u91CC\u662F\u5B50\u7EC4\u4EF6"}),e(l.span,{style:{color:"#81A1C1"},children:"</h3>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u7236\u7EC4\u4EF6\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u7684 message: "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"childMessage"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<input"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#8FBCBB"},children:"type"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"text"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#8FBCBB"},children:"placeholder"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"\u6211\u60F3\u4F20\u6D88\u606F\u7ED9\u7236\u7EC4\u4EF6..."}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#8FBCBB"},children:"onChange"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"onChangeFatherMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"target"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"value"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</section>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"Father"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,`
`,e(t,{children:e(f,{})}),`
`,n(l.h3,{id:"32-event-bus",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#32-event-bus",children:"#"}),"3.2. event bus"]}),`
`,e(l.p,{children:"\u4F18\u70B9\uFF1A"}),`
`,n(l.ul,{children:[`
`,n(l.li,{children:["\u80FD\u591F\u8DE8\u5C42\u7EA7\u901A\u4FE1\uFF0C\u4E0D\u7BA1\u662F\u7236\u5B50\u7EC4\u4EF6\u3001\u7237\u5B59\u7EC4\u4EF6\u3001\u5144\u5F1F\u7EC4\u4EF6\u7B49\u7B49\u60C5\u51B5\u90FD\u80FD\u591F\u8F7B\u677E\u4F7F\u7528 ",e(l.code,{children:"event bus"})," \u5B8C\u6210\u901A\u4FE1"]}),`
`]}),`
`,e(l.p,{children:"\u7F3A\u70B9\uFF1A"}),`
`,n(l.ul,{children:[`
`,e(l.li,{children:"\u9700\u8981\u624B\u52A8\u5728\u526F\u4F5C\u7528\u51FD\u6570\u4E2D\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u5E76\u5728\u7EC4\u4EF6\u9500\u6BC1\u65F6\u89E3\u7ED1\u4E8B\u4EF6"}),`
`,e(l.li,{children:"\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u8FDD\u80CC\u4E86 React \u5355\u5411\u6570\u636E\u6D41\u539F\u5219"}),`
`,e(l.li,{children:"\u5BF9\u4E8E\u89C4\u6A21\u7A0D\u5927\u7684\u9879\u76EE\uFF0C\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5BFC\u81F4\u96BE\u4EE5\u7EF4\u62A4\uFF0C\u56E0\u4E3A\u7EC4\u4EF6\u95F4\u7684\u6570\u636E\u6D41\u5411\u5173\u7CFB\u6BD4\u8F83\u6DF7\u4E71"}),`
`]}),`
`,n(l.p,{children:["\u4E0B\u9762\u6211\u4EEC\u7684 demo \u4ECD\u7136\u662F ",e(l.code,{children:"props \u548C callback"})," \u4E2D\u7684\u90A3\u4E2A\uFF0C\u4F46\u662F\u4F7F\u7528 ",e(l.code,{children:"event bus"})," \u8FDB\u884C\u6539\u9020"]}),`
`,n(l.p,{children:["\u8FD9\u91CC\u6211\u4EEC\u4F1A\u4F7F\u7528 ",e(l.a,{href:"https://github.com/developit/mitt",target:"_blank",rel:"nofollow",children:"mitt"})," \u8FD9\u4E2A\u5E93\uFF0C\u5B83\u5341\u5206\u8F7B\u91CF\uFF0C\u5E76\u4E14 TypeScript \u53CB\u597D"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u7EC4\u4EF6\u901A\u4FE1 -- event bus */"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"useEffect"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"mitt"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"mitt"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"./style.module.scss"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,e(l.span,{className:"line highlighted",children:e(l.span,{style:{color:"#616E88"},children:"// emitter \u652F\u6301\u7684\u4E8B\u4EF6\u7C7B\u578B\u5B9A\u4E49"})}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#81A1C1"},children:"type"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"EventType"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  changeFatherMessage"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" fatherMessage"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  changeChildMessage"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" childMessage"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line highlighted",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"emitter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"mitt"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"EventType"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u7236\u7EC4\u4EF6 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"Father"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"father message"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// \u526F\u4F5C\u7528 -- \u7ED1\u5B9A\u4E8B\u4EF6\u5E76\u5728\u7EC4\u4EF6\u9500\u6BC1\u65F6\u89E3\u7ED1"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"useEffect"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"emitter"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"on"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"changeFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"({"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"})"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#88C0D0"},children:"setFatherMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line highlighted"}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"emitter"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"off"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"changeFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" [])"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"container"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<section"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"parent"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<h3>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u8FD9\u91CC\u662F\u7236\u7EC4\u4EF6"}),e(l.span,{style:{color:"#81A1C1"},children:"</h3>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u5B50\u7EC4\u4EF6\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6\u7684 message: "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherMessage"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<input"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"type"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"text"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"placeholder"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"\u6211\u60F3\u4F20\u6D88\u606F\u7ED9\u5B50\u7EC4\u4EF6..."}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"onChange"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#D8DEE9"},children:"emitter"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"emit"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"changeChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#D8DEE9"},children:"childMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"target"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"value"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</section>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u5B50\u7EC4\u4EF6 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"Child"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"childMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"father to child message"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line highlighted"}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// \u526F\u4F5C\u7528 -- \u7ED1\u5B9A\u4E8B\u4EF6\u5E76\u5728\u7EC4\u4EF6\u9500\u6BC1\u65F6\u89E3\u7ED1"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"useEffect"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// \u76D1\u542C\u7236\u7EC4\u4EF6\u901A\u8FC7 event bus \u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u7684\u6D88\u606F"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"emitter"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"on"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"changeChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"({"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"childMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"})"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#88C0D0"},children:"setChildMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"childMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line highlighted",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line highlighted"}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"emitter"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"off"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"changeChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" [])"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<section"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"child"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<h3>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u8FD9\u91CC\u662F\u5B50\u7EC4\u4EF6"}),e(l.span,{style:{color:"#81A1C1"},children:"</h3>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u7236\u7EC4\u4EF6\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u7684 message: "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"childMessage"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<input"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#8FBCBB"},children:"type"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"text"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#8FBCBB"},children:"placeholder"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"\u6211\u60F3\u4F20\u6D88\u606F\u7ED9\u7236\u7EC4\u4EF6..."}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#8FBCBB"},children:"onChange"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#D8DEE9"},children:"emitter"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"emit"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"changeFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"target"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"value"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</section>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"Father"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,`
`,e(t,{children:e(S,{})}),`
`,n(l.h2,{id:"4-\u7EC4\u4EF6\u5F3A\u5316\u65B9\u5F0F\u6709\u54EA\u4E9B",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#4-\u7EC4\u4EF6\u5F3A\u5316\u65B9\u5F0F\u6709\u54EA\u4E9B",children:"#"}),"4. \u7EC4\u4EF6\u5F3A\u5316\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F"]}),`
`,e(l.p,{children:"\u7EC4\u4EF6\u5F3A\u5316\u6307\u7684\u662F\u5BF9\u7EC4\u4EF6\u7684\u8FDB\u884C\u6539\u9020\u3001\u5F3A\u5316\u548C\u6DFB\u52A0\u989D\u5916\u529F\u80FD"}),`
`,e(l.p,{children:"\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E09\u79CD\u65B9\u5F0F\uFF1A"}),`
`,n(l.ol,{children:[`
`,n(l.li,{children:[`\u7C7B\u7EC4\u4EF6\u7684\u7EE7\u627F
\u8F83\u4E3A\u7B80\u5355\uFF0C\u5C31\u662F\u5229\u7528 `,e(l.code,{children:"js"})," \u7684\u7C7B\u7EE7\u627F\u5C06\u7236\u7EC4\u4EF6\u7684\u7279\u6027\u4FDD\u7559\uFF0C\u5E76\u5BF9\u5176\u8FDB\u884C\u4FEE\u6539"]}),`
`,e(l.li,{children:`\u51FD\u6570\u7EC4\u4EF6\u81EA\u5B9A\u4E49 hooks
\u81EA\u5B9A\u4E49 hooks \u7AE0\u8282\u4F1A\u8BE6\u7EC6\u4ECB\u7ECD`}),`
`,e(l.li,{children:`HOC \u9AD8\u9636\u7EC4\u4EF6
\u540C\u6837\u4F1A\u5728\u76F8\u5173\u7AE0\u8282\u4E13\u95E8\u4ECB\u7ECD`}),`
`]})]})}function O(s={}){const{wrapper:l}=s.components||{};return l?e(l,Object.assign({},s,{children:e(E,s)})):E(s)}const q="2022/12/12 04:47:15",T=`import { DemoBlock } from '@island/demo-block'

# comopnent

## \u63D0\u51FA\u95EE\u9898

- React \u7EC4\u4EF6\u7684\u672C\u8D28\u662F\u4EC0\u4E48\uFF1F
- \u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u533A\u522B\u5728\u54EA\uFF1F
- \u7EC4\u4EF6\u95F4\u901A\u4FE1\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F
- \u7EC4\u4EF6\u5F3A\u5316\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F

## 1. React \u7EC4\u4EF6\u7684\u672C\u8D28\u662F\u4EC0\u4E48\uFF1F

\u9996\u5148\u6765\u770B\u770B React \u4E2D\u7EC4\u4EF6\u662F\u600E\u4E48\u4F7F\u7528\u7684\uFF0C\u5305\u62EC\u4E24\u79CD\uFF1A

- \u7C7B\u7EC4\u4EF6
- \u51FD\u6570\u7EC4\u4EF6

\`\`\`tsx
/** @description \u4F7F\u7528 React \u7EC4\u4EF6 */

import React, { useState } from 'react'

/** @description \u7C7B\u7EC4\u4EF6 */
interface ClassComponentState {
  message: string
}
class ClassComponent extends React.Component {
  // state
  state: Readonly<ClassComponentState> = { message: "I'm ClassComponent." }

  // methods
  sayHello = () => this.setState({ message: "Hello, I'm ClassComponent." })

  // render method
  render(): React.ReactNode {
    return <div onClick={() => this.sayHello()}>{this.state.message}</div>
  }
}

/** @description \u51FD\u6570\u7EC4\u4EF6 */
const FunctionComponent: React.FunctionComponent = () => {
  const [message, setMessage] = useState("I'm FunctionComponent.")

  const sayHello = () => {
    setMessage("Hello, I'm FunctionComponent")
  }

  return <div onClick={() => sayHello()}>{message}</div>
}

export { ClassComponent, FunctionComponent }
\`\`\`

import { ClassComponent, FunctionComponent } from '~/demos/component/demo1.tsx'

\`ClassComponent\`

<DemoBlock>
  <ClassComponent />
</DemoBlock>

\`FunctionComponent\`

<DemoBlock>
  <FunctionComponent />
</DemoBlock>

\u4E0D\u96BE\u53D1\u73B0\uFF0C\u7EC4\u4EF6\u627F\u8F7D\u4E86\u6E32\u67D3\u89C6\u56FE\u7684 UI \u548C\u66F4\u65B0\u89C6\u56FE\u7684 setState \u3001 useState \u7B49\u65B9\u6CD5

:::tip{title='React \u7EC4\u4EF6\u7684\u672C\u8D28'}

UI + update + \u5E38\u89C4\u7684\u7C7B\u548C\u51FD\u6570

:::

## 2. \u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u533A\u522B\u5728\u54EA\uFF1F

\u8981\u56DE\u7B54\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u9700\u8981\u7A0D\u5FAE\u63A2\u7D22\u4E00\u4E0B React \u5173\u4E8E\u4E24\u79CD\u7EC4\u4EF6\u7684\u5904\u7406\u6E90\u7801\u4F1A\u66F4\u52A0\u597D\u7406\u89E3

### 2.1. \u7C7B\u7EC4\u4EF6

\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u6784\u9020\u5BF9\u5E94\u7684\u6E90\u7801\uFF1A

\`packages/react-reconciler/src/ReactFiberClassComponent.old.js\`

\`\`\`js
function constructClassInstance(
  workInProgress: Fiber, // \u5F53\u524D\u6B63\u5728\u5DE5\u4F5C\u7684 Fiber \u5BF9\u8C61
  ctor: any, // \u7528\u6237\u7F16\u5199\u7684\u7C7B\u7EC4\u4EF6
  props: any, // \u4F20\u9012\u7ED9\u7C7B\u7EC4\u4EF6\u7684 props
): any {
  // ...
  let instance = new ctor(props, context)
  // ...
}
\`\`\`

\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u5E73\u65F6\u7F16\u5199\u7684\u7C7B\u7EC4\u4EF6\u662F\u901A\u8FC7 \`new\` \u7684\u65B9\u5F0F\u88AB\u5B9E\u4F8B\u5316\u51FA\u6765\u7684

\u518D\u770B\u770B\u7F16\u5199\u7C7B\u7EC4\u4EF6\u65F6\uFF0C\u7EE7\u627F\u7684 \`React.Component\` \u662F\u4F55\u65B9\u795E\u5723

\`packages/react/src/ReactBaseClasses.js\`

\`\`\`js
// React.Component
const emptyObject = {}
function Component(props, context, updater) {
  this.props = props
  this.context = context
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue
}

// \u7C7B\u7EC4\u4EF6 setState \u65B9\u6CD5
Component.prototype.setState = function (partialState, callback) {
  // ...
  this.updater.enqueueSetState(this, partialState, callback, 'setState')
}

// \u7C7B\u7EC4\u4EF6 forceUpdate \u65B9\u6CD5
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate')
}
\`\`\`

\u53EF\u4EE5\u770B\u5230\uFF0C\`React.Component\` \u5C31\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u91CC\u9762\u5B8C\u6210\u4E86 \`props\`\u3001\`context\` \u7684\u521D\u59CB\u5316\u8D4B\u503C\uFF0C\u5E76\u8BA9 \`refs\` \u6307\u5411\u4E00\u4E2A\u7A7A\u5BF9\u8C61

\u800C\u5E73\u65F6\u7528\u5230\u7684\u7C7B\u7EC4\u4EF6 \`this.setState\` \u672C\u8D28\u4E0A\u662F\u5728\u8C03\u7528 \`this.updater.enqueueSetState\` \u65B9\u6CD5

\`this.forceUpdate\` \u672C\u8D28\u4E0A\u662F\u5728\u8C03\u7528 \`this.updater.enqueueForceUpdate\` \u65B9\u6CD5

### 2.2. \u51FD\u6570\u7EC4\u4EF6

\u51FD\u6570\u7EC4\u4EF6\u521B\u5EFA\u7684\u5BF9\u5E94\u6E90\u7801\uFF1A

\`packages/react-reconciler/src/ReactFiberHooks.old.js\`

\`\`\`js
export function renderWithHooks<Props, SecondArg>(
  current: Fiber | null, // \u5F53\u524D\u51FD\u6570\u7EC4\u4EF6\u5BF9\u5E94\u7684 Fiber \u5BF9\u8C61
  workInProgress: Fiber, // \u5F53\u524D\u6B63\u5728\u5DE5\u4F5C\u7684 Fiber \u5BF9\u8C61
  Component: (p: Props, arg: SecondArg) => any, // \u7528\u6237\u7F16\u5199\u7684\u51FD\u6570\u7EC4\u4EF6
  props: Props, // \u51FD\u6570\u7EC4\u4EF6\u7B2C\u4E00\u4E2A\u53C2\u6570 props
  secondArg: SecondArg, // \u51FD\u6570\u7EC4\u4EF6\u5269\u4F59\u53C2\u6570
  nextRenderLanes: Lanes, // \u4E0B\u6B21\u6E32\u67D3\u8FC7\u671F\u65F6\u95F4
): any {
  // ...
  let children = Component(props, secondArg)
  // ...
}
\`\`\`

\u51FD\u6570\u7EC4\u4EF6\u7684\u521B\u5EFA\u662F\u76F4\u63A5\u8C03\u7528\u6211\u4EEC\u7F16\u5199\u7684\u4F1A\u8FD4\u56DE JSX \u7684\u51FD\u6570

:::warn

\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u4E0D\u5E94\u8BE5\u5728\u51FD\u6570\u7EC4\u4EF6\u7684 prototype \u4E0A\u7ED1\u5B9A\u4EFB\u4F55\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u662F\u76F4\u63A5\u8C03\u7528\u51FD\u6570

\u56E0\u6B64\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684 this \u7ED1\u5B9A\u89C4\u5219\u662F\u9ED8\u8BA4\u7ED1\u5B9A\uFF0C\u6240\u4EE5\u4E0D\u80FD\u901A\u8FC7 this \u8BBF\u95EE\u5230 prototype \u4E0A\u7684\u4EFB\u4F55\u4E1C\u897F

\`\`\`tsx
const FunctionComponent: React.FunctionComponent = () => {
  const [message, setMessage] = useState("I'm FunctionComponent.")

  const sayHello = () => {
    setMessage("Hello, I'm FunctionComponent")
  }

  console.log('\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684 this -- ', this)

  return <div onClick={() => sayHello()}>{message}</div>
}
\`\`\`

![\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684this](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E4%B8%AD%E7%9A%84this.png)

:::

### 2.3. \u533A\u522B

\u603B\u7684\u6765\u8BF4\uFF0C\u4E8C\u8005\u533A\u522B\u5982\u4E0B\uFF1A

- \u7C7B\u7EC4\u4EF6\u5E95\u5C42\u53EA\u5B9E\u4F8B\u5316\u4E86\u4E00\u6B21\uFF0C\u5E76\u4E14\u5728\u5B9E\u4F8B\u4E2D\u4FDD\u5B58\u4E86\u7EC4\u4EF6\u7684 state\uFF0C\u7EC4\u4EF6\u66F4\u65B0\u65F6\u53EA\u9700\u8981\u8C03\u7528\u7EC4\u4EF6\u5B9E\u4F8B\u7684 render \u65B9\u6CD5\u548C\u5BF9\u5E94\u7684\u751F\u547D\u5468\u671F\u5373\u53EF
- \u51FD\u6570\u7EC4\u4EF6\u6BCF\u6B21\u66F4\u65B0\u90FD\u662F\u4E00\u4E2A\u5168\u65B0\u7684\u51FD\u6570\u6267\u884C\uFF0C\u4E0D\u80FD\u4FDD\u7559\u7EC4\u4EF6\u7684 state\uFF0C\u5E76\u4E14\u65E0\u6CD5\u50CF\u7C7B\u7EC4\u4EF6\u90A3\u6837\u62E5\u6709\u751F\u547D\u5468\u671F

\u8FD9\u6837\u770B\u6765\u51FD\u6570\u7EC4\u4EF6\u7684\u5C40\u9650\u6027\u8FD8\u662F\u5F88\u5927\u7684\uFF0C\u4E3A\u6B64 React \u81EA\u4ECE v16.8 \u7248\u672C\u5F00\u59CB\uFF0C\u5927\u529B\u63A8\u884C \`React Hooks\`\uFF0C\u8BA9\u51FD\u6570\u7EC4\u4EF6\u80FD\u591F\u4FDD\u5B58\u81EA\u5DF1\u7684\u72B6\u6001\uFF0C\u5E76\u901A\u8FC7 \`useEffect\` \u526F\u4F5C\u7528 hook \u5B9E\u73B0\u7C7B\u4F3C\u7C7B\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u7684\u7279\u6027

## 3. \u7EC4\u4EF6\u95F4\u901A\u4FE1\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F

React \u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F\u4E3B\u6D41\u7684\u6709\u4EE5\u4E0B\u4E94\u79CD\uFF1A

- props \u548C callback
- ref
- context
- event bus
- \u72B6\u6001\u7BA1\u7406\u5E93 -- \u5982 redux\u3001mobx\u3001zustand \u7B49

\u672C\u7AE0\u8282\u4E3B\u8981\u8BB2\u89E3 \`props \u548C callback\` \u4EE5\u53CA \`event bus\` \u7684\u65B9\u5F0F\uFF0C\u5176\u4F59\u7684\u4F1A\u6709\u4E13\u95E8\u7684\u7AE0\u8282\u8BB2\u89E3

### 3.1. props \u548C callback

\u5E38\u7528\u4E8E\u7236\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u901A\u4FE1\uFF1A

- \u7236 -> \u5B50\uFF1A\u7236\u7EC4\u4EF6\u5C06\u6570\u636E\u901A\u8FC7 props \u7684\u65B9\u5F0F\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6
- \u5B50 -> \u7236\uFF1A\u5B50\u7EC4\u4EF6\u8C03\u7528 props \u4E2D\u7684 callback prop \u901A\u77E5\u7236\u7EC4\u4EF6

\`\u7236 -> \u5B50\`

\`\`\`tsx
/** @description \u7EC4\u4EF6\u901A\u4FE1 -- props \u548C callback */

import { useState } from 'react'
import s from './style.module.scss'

/** @description \u7236\u7EC4\u4EF6 */
const Father: React.FC = () => {
  const [fatherMessage, setFatherMessage] = useState('father message')
  const [childMessage, setChildMessage] = useState('child message')

  return (
    <div className={s.container}>
      <section className={s.parent}>
        <h3>\u8FD9\u91CC\u662F\u7236\u7EC4\u4EF6</h3>
        <p>\u5B50\u7EC4\u4EF6\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6\u7684 message: {fatherMessage}</p>
        <input
          type="text"
          placeholder="\u6211\u60F3\u4F20\u6D88\u606F\u7ED9\u5B50\u7EC4\u4EF6..."
          onChange={(e) => setChildMessage(e.target.value)}
        />
      </section>

      <Child
        childMessage={childMessage}
        onChangeFatherMessage={(fatherMessage) =>
          setFatherMessage(fatherMessage)
        }
      />
    </div>
  )
}

/** @description \u5B50\u7EC4\u4EF6 */
interface ChildProps {
  childMessage: string
  onChangeFatherMessage: (fatherMessage: string) => void
}
const Child: React.FC<ChildProps> = ({
  childMessage,
  onChangeFatherMessage,
}) => {
  return (
    <section className={s.child}>
      <h3>\u8FD9\u91CC\u662F\u5B50\u7EC4\u4EF6</h3>
      <p>\u7236\u7EC4\u4EF6\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u7684 message: {childMessage}</p>
      <input
        type="text"
        placeholder="\u6211\u60F3\u4F20\u6D88\u606F\u7ED9\u7236\u7EC4\u4EF6..."
        onChange={(e) => onChangeFatherMessage(e.target.value)}
      />
    </section>
  )
}

export { Father }
\`\`\`

import { Father } from '~/demos/component/demo2'

<DemoBlock>
  <Father />
</DemoBlock>

### 3.2. event bus

\u4F18\u70B9\uFF1A

- \u80FD\u591F\u8DE8\u5C42\u7EA7\u901A\u4FE1\uFF0C\u4E0D\u7BA1\u662F\u7236\u5B50\u7EC4\u4EF6\u3001\u7237\u5B59\u7EC4\u4EF6\u3001\u5144\u5F1F\u7EC4\u4EF6\u7B49\u7B49\u60C5\u51B5\u90FD\u80FD\u591F\u8F7B\u677E\u4F7F\u7528 \`event bus\` \u5B8C\u6210\u901A\u4FE1

\u7F3A\u70B9\uFF1A

- \u9700\u8981\u624B\u52A8\u5728\u526F\u4F5C\u7528\u51FD\u6570\u4E2D\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u5E76\u5728\u7EC4\u4EF6\u9500\u6BC1\u65F6\u89E3\u7ED1\u4E8B\u4EF6
- \u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u8FDD\u80CC\u4E86 React \u5355\u5411\u6570\u636E\u6D41\u539F\u5219
- \u5BF9\u4E8E\u89C4\u6A21\u7A0D\u5927\u7684\u9879\u76EE\uFF0C\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5BFC\u81F4\u96BE\u4EE5\u7EF4\u62A4\uFF0C\u56E0\u4E3A\u7EC4\u4EF6\u95F4\u7684\u6570\u636E\u6D41\u5411\u5173\u7CFB\u6BD4\u8F83\u6DF7\u4E71

\u4E0B\u9762\u6211\u4EEC\u7684 demo \u4ECD\u7136\u662F \`props \u548C callback\` \u4E2D\u7684\u90A3\u4E2A\uFF0C\u4F46\u662F\u4F7F\u7528 \`event bus\` \u8FDB\u884C\u6539\u9020

\u8FD9\u91CC\u6211\u4EEC\u4F1A\u4F7F\u7528 [mitt](https://github.com/developit/mitt) \u8FD9\u4E2A\u5E93\uFF0C\u5B83\u5341\u5206\u8F7B\u91CF\uFF0C\u5E76\u4E14 TypeScript \u53CB\u597D

\`\`\`tsx{9-14,20-29,36-44,47,54-66,72-80}
/** @description \u7EC4\u4EF6\u901A\u4FE1 -- event bus */

import { useEffect, useState } from 'react'

import mitt from 'mitt'

import s from './style.module.scss'

// emitter \u652F\u6301\u7684\u4E8B\u4EF6\u7C7B\u578B\u5B9A\u4E49
type EventType = {
  changeFatherMessage: { fatherMessage: string }
  changeChildMessage: { childMessage: string }
}
const emitter = mitt<EventType>()

/** @description \u7236\u7EC4\u4EF6 */
const Father: React.FC = () => {
  const [fatherMessage, setFatherMessage] = useState('father message')

  // \u526F\u4F5C\u7528 -- \u7ED1\u5B9A\u4E8B\u4EF6\u5E76\u5728\u7EC4\u4EF6\u9500\u6BC1\u65F6\u89E3\u7ED1
  useEffect(() => {
    emitter.on('changeFatherMessage', ({ fatherMessage }) => {
      setFatherMessage(fatherMessage)
    })

    return () => {
      emitter.off('changeFatherMessage')
    }
  }, [])

  return (
    <div className={s.container}>
      <section className={s.parent}>
        <h3>\u8FD9\u91CC\u662F\u7236\u7EC4\u4EF6</h3>
        <p>\u5B50\u7EC4\u4EF6\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6\u7684 message: {fatherMessage}</p>
        <input
          type="text"
          placeholder="\u6211\u60F3\u4F20\u6D88\u606F\u7ED9\u5B50\u7EC4\u4EF6..."
          onChange={(e) =>
            emitter.emit('changeChildMessage', {
              childMessage: e.target.value,
            })
          }
        />
      </section>

      <Child />
    </div>
  )
}

/** @description \u5B50\u7EC4\u4EF6 */
const Child: React.FC = () => {
  const [childMessage, setChildMessage] = useState('father to child message')

  // \u526F\u4F5C\u7528 -- \u7ED1\u5B9A\u4E8B\u4EF6\u5E76\u5728\u7EC4\u4EF6\u9500\u6BC1\u65F6\u89E3\u7ED1
  useEffect(() => {
    // \u76D1\u542C\u7236\u7EC4\u4EF6\u901A\u8FC7 event bus \u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u7684\u6D88\u606F
    emitter.on('changeChildMessage', ({ childMessage }) =>
      setChildMessage(childMessage),
    )

    return () => {
      emitter.off('changeChildMessage')
    }
  }, [])

  return (
    <section className={s.child}>
      <h3>\u8FD9\u91CC\u662F\u5B50\u7EC4\u4EF6</h3>
      <p>\u7236\u7EC4\u4EF6\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u7684 message: {childMessage}</p>
      <input
        type="text"
        placeholder="\u6211\u60F3\u4F20\u6D88\u606F\u7ED9\u7236\u7EC4\u4EF6..."
        onChange={(e) =>
          emitter.emit('changeFatherMessage', {
            fatherMessage: e.target.value,
          })
        }
      />
    </section>
  )
}

export { Father }
\`\`\`

import { Father as Father2 } from '~/demos/component/demo3'

<DemoBlock>
  <Father2 />
</DemoBlock>

## 4. \u7EC4\u4EF6\u5F3A\u5316\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F

\u7EC4\u4EF6\u5F3A\u5316\u6307\u7684\u662F\u5BF9\u7EC4\u4EF6\u7684\u8FDB\u884C\u6539\u9020\u3001\u5F3A\u5316\u548C\u6DFB\u52A0\u989D\u5916\u529F\u80FD

\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E09\u79CD\u65B9\u5F0F\uFF1A

1. \u7C7B\u7EC4\u4EF6\u7684\u7EE7\u627F
   \u8F83\u4E3A\u7B80\u5355\uFF0C\u5C31\u662F\u5229\u7528 \`js\` \u7684\u7C7B\u7EE7\u627F\u5C06\u7236\u7EC4\u4EF6\u7684\u7279\u6027\u4FDD\u7559\uFF0C\u5E76\u5BF9\u5176\u8FDB\u884C\u4FEE\u6539
2. \u51FD\u6570\u7EC4\u4EF6\u81EA\u5B9A\u4E49 hooks
   \u81EA\u5B9A\u4E49 hooks \u7AE0\u8282\u4F1A\u8BE6\u7EC6\u4ECB\u7ECD
3. HOC \u9AD8\u9636\u7EC4\u4EF6
   \u540C\u6837\u4F1A\u5728\u76F8\u5173\u7AE0\u8282\u4E13\u95E8\u4ECB\u7ECD
`;export{T as content,O as default,U as frontmatter,q as lastUpdatedTime,P as title,w as toc};
