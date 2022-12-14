var I=Object.defineProperty;var w=(s,e,c)=>e in s?I(s,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[e]=c;var C=(s,e,c)=>(w(s,typeof e!="symbol"?e+"":e,c),c);import{jsxs as n,jsx as l,Fragment as L}from"react/jsx-runtime";import{D as o}from"./index.6529e49c.js";import d,{createContext as h,useState as t,useContext as i,memo as _,useEffect as u}from"react";import{c as j}from"./scoped-log.b13f94b9.js";var p={exports:{}},W="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y=W,O=Y;function x(){}function A(){}A.resetWarningCache=x;var z=function(){function s(a,y,ne,se,ce,S){if(S!==O){var D=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw D.name="Invariant Violation",D}}s.isRequired=s;function e(){return s}var c={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:e,element:s,elementType:s,instanceOf:e,node:s,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:A,resetWarningCache:x};return c.PropTypes=c,c};p.exports=z();class N extends d.Component{getChildContext(){return{theme:{color:"darkcyan",background:"cyan"}}}render(){return n("div",{children:[l("p",{children:"Provider"}),l(B,{})]})}}N.childContextTypes={theme:p.exports.object};class B extends d.Component{render(){const{color:e,background:c}=this.context.theme;return l("div",{style:{color:e,background:c},children:"Consumer"})}}B.contextTypes={theme:p.exports.object};const U={color:"black",background:"white"},r=h(U);class M extends d.Component{constructor(){super(...arguments);C(this,"theme",{color:"darkcyan",background:"cyan"})}render(){return l(r.Provider,{value:this.theme,children:l(g,{})})}}class g extends d.Component{render(){const{color:e,background:c}=this.context;return l("div",{style:{color:e,background:c},children:"Class Component Consumber"})}}g.contextType=r;const $=()=>{const[s]=t({color:"darkcyan",background:"cyan"});return l(r.Provider,{value:s,children:l(H,{})})},H=()=>{const{color:s,background:e}=i(r);return l("div",{style:{color:s,background:e},children:"Function Component Consumber"})},X=()=>{const[s]=t({color:"darkcyan",background:"cyan"});return l(r.Provider,{value:s,children:l(q,{})})},q=()=>{const s=e=>{const{color:c,background:a}=e.theme;return l("div",{style:{color:c,background:a},children:"Context Consumber Component"})};return l(r.Consumer,{children:e=>l(s,{theme:e})})},T={color:"black",background:"white"},E={...T},V={color:"white",background:"black"},F=h(T);F.displayName="PlasticineThemeContext";const G="_container_170sc_1",J="_consumer_170sc_7",v={container:G,consumer:J},f=j("DynamicContextDemo"),K=()=>{const[s,e]=t(E),c=()=>{e(s===E?V:E)};return n("div",{className:v.container,children:[l(F.Provider,{value:s,children:l(Q,{})}),l("button",{onClick:()=>c(),children:"toggle theme"})]})},Q=_(()=>(u(()=>{f.log("Child \u7EC4\u4EF6\u6E32\u67D3")}),l(Z,{}))),Z=()=>{const{color:s,background:e}=i(F);return u(()=>{f.log("Consumer \u7EC4\u4EF6\u6E32\u67D3")}),l("div",{style:{color:s,background:e},className:v.consumer,children:"Consumber"})},b={color:"darkcyan",background:"cyan"},P=h(b),k={lang:"zh-CN"},R=h(k),ee=()=>{const[s]=t(b),[e,c]=t(k),a=()=>{const{lang:y}=e;c(y==="zh-CN"?{lang:"en-US"}:{lang:"zh-CN"})};return n("div",{children:[l(P.Provider,{value:s,children:l(R.Provider,{value:e,children:l(le,{})})}),l("button",{onClick:()=>a(),children:"toggle language"})]})},le=()=>{const{color:s,background:e}=i(P),{lang:c}=i(R);return l("div",{style:{color:s,background:e},children:l("p",{children:c==="zh-CN"?"\u4F60\u597D\u4E16\u754C":c==="en-US"?"Hello World":"unknown language"})})},de=void 0,he=[{id:"1-context-\u57FA\u672C\u4F7F\u7528",text:"1. context \u57FA\u672C\u4F7F\u7528",depth:2},{id:"11-legacy-context",text:"1.1. Legacy Context",depth:3},{id:"12-new-context",text:"1.2. New Context",depth:3},{id:"121-legacy-context-\u5B58\u5728\u4EC0\u4E48\u95EE\u9898",text:"1.2.1. Legacy Context \u5B58\u5728\u4EC0\u4E48\u95EE\u9898\uFF1F",depth:4},{id:"122-\u5982\u4F55\u4F7F\u7528-new-context-api",text:"1.2.2. \u5982\u4F55\u4F7F\u7528 New Context API",depth:4},{id:"123-\u7C7B\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E",text:"1.2.3. \u7C7B\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E",depth:4},{id:"124-\u51FD\u6570\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E",text:"1.2.4. \u51FD\u6570\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E",depth:4},{id:"125-\u4F7F\u7528-context-\u5BF9\u8C61\u7684-consumer-\u6D88\u8D39\u6570\u636E",text:"1.2.5. \u4F7F\u7528 context \u5BF9\u8C61\u7684 Consumer \u6D88\u8D39\u6570\u636E",depth:4},{id:"13-\u52A8\u6001-context",text:"1.3. \u52A8\u6001 context",depth:3},{id:"14-displayname",text:"1.4. displayName",depth:3},{id:"2-context-\u9AD8\u9636\u7528\u6CD5",text:"2. context \u9AD8\u9636\u7528\u6CD5",depth:2},{id:"21-\u5D4C\u5957-context",text:"2.1. \u5D4C\u5957 context",depth:3}],Ee="context";function m(s){const e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",ol:"ol",strong:"strong",div:"div",button:"button",span:"span",pre:"pre",img:"img",h4:"h4"},s.components);return n(L,{children:[n(e.h1,{id:"context",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#context",children:"#"}),"context"]}),`
`,n(e.h2,{id:"1-context-\u57FA\u672C\u4F7F\u7528",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1-context-\u57FA\u672C\u4F7F\u7528",children:"#"}),"1. context \u57FA\u672C\u4F7F\u7528"]}),`
`,l(e.p,{children:"\u4F1A\u5206\u522B\u4ECB\u7ECD React \u4E2D\u65B0\u65E7\u7248\u672C\u7684 context \u4F7F\u7528\u65B9\u5F0F"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["\u65E7\u7248\u672C\u662F ",l(e.code,{children:"Legacy Context"})," -- React v16.3 \u4E4B\u524D"]}),`
`,n(e.li,{children:["\u65B0\u7248\u672C\u662F ",l(e.code,{children:"New Context"})," -- React v16.3 \u4E4B\u540E"]}),`
`]}),`
`,n(e.h3,{id:"11-legacy-context",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#11-legacy-context",children:"#"}),"1.1. Legacy Context"]}),`
`,n(e.p,{children:["\u63D0\u4F9B\u6570\u636E\u7684\u4E00\u65B9\u4E2D\u8981\u5B9E\u73B0\u4E00\u4E2A ",l(e.code,{children:"getChildContext"})," \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u7684\u8FD4\u56DE\u503C\u4F1A\u4F5C\u4E3A\u5B50\u7EC4\u4EF6\u83B7\u53D6\u7684 context"]}),`
`,n(e.p,{children:["\u5B50\u7EC4\u4EF6\u4E2D\u901A\u8FC7 ",l(e.code,{children:"this.context"})," \u5373\u53EF\u83B7\u53D6\u5230 context"]}),`
`,l(e.p,{children:"\u9700\u8981\u6CE8\u610F\u7684\u662F\u8FD8\u8981\u4E3A\u4ED6\u4EEC\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E\u624D\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u5F53\u7136\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u58F0\u660E\u6307\u7684\u4E0D\u662F TypeScript \u7684\u7C7B\u578B\u58F0\u660E\uFF0C\u800C\u662F\u7528\u4E8E React \u8FD0\u884C\u65F6\u7684\u7C7B\u578B\u68C0\u6D4B"}),`
`,n(e.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u7ED3\u5408 ",l(e.code,{children:"prop-types"})," \u8FD9\u4E2A\u5E93\u6765\u58F0\u660E context \u7684\u7C7B\u578B\uFF0C\u58F0\u660E\u89C4\u5219\u5982\u4E0B\uFF1A"]}),`
`,n(e.ol,{children:[`
`,l(e.li,{children:n(e.strong,{children:["\u63D0\u4F9B\u6570\u636E\u7684\u7EC4\u4EF6\u8981\u58F0\u660E ",l(e.code,{children:"childContextTypes"})]})}),`
`,l(e.li,{children:n(e.strong,{children:["\u6D88\u8D39\u6570\u636E\u7684\u7EC4\u4EF6\u8981\u58F0\u660E ",l(e.code,{children:"contextTypes"})]})}),`
`]}),`
`,l(e.p,{children:"\u4E0B\u9762\u901A\u8FC7\u4E00\u4E2A Demo \u6765\u4F53\u9A8C\u4E00\u4E0B"}),`
`,n(e.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[l(e.button,{className:"copy"}),l(e.span,{className:"lang",children:"tsx"}),l(e.pre,{children:n(e.code,{className:"",children:[n(e.span,{className:"line",children:[l(e.span,{style:{color:"#616E88"},children:"/** "}),l(e.span,{style:{color:"#ECEFF4"},children:"@"}),l(e.span,{style:{color:"#81A1C1"},children:"description"}),l(e.span,{style:{color:"#616E88"},children:" Legacy Context */"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"React"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"react"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"PropTypes"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"prop-types"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#616E88"},children:"/**"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#616E88"},children:" * "}),l(e.span,{style:{color:"#ECEFF4"},children:"@"}),l(e.span,{style:{color:"#81A1C1"},children:"description"}),l(e.span,{style:{color:"#616E88"},children:" \u63D0\u4F9B\u6570\u636E"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#616E88"},children:" */"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"class"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"ContextProviderDemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"extends"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#616E88"},children:"/** "}),l(e.span,{style:{color:"#ECEFF4"},children:"@"}),l(e.span,{style:{color:"#81A1C1"},children:"description"}),l(e.span,{style:{color:"#616E88"},children:" \u5728 getChildContext \u4E2D\u6307\u5B9A context \u7684\u6570\u636E */"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#88C0D0"},children:"getChildContext"}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"darkcyan"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"cyan"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#88C0D0"},children:"render"}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(e.span,{style:{color:"#81A1C1"},children:"<p>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"Provider"}),l(e.span,{style:{color:"#81A1C1"},children:"</p>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"ContextConsumerDemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#616E88"},children:"// @ts-ignore"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9"},children:"ContextProviderDemo"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"childContextTypes"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"PropTypes"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"object"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#616E88"},children:"/**"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#616E88"},children:" * "}),l(e.span,{style:{color:"#ECEFF4"},children:"@"}),l(e.span,{style:{color:"#81A1C1"},children:"description"}),l(e.span,{style:{color:"#616E88"},children:" \u6D88\u8D39\u6570\u636E"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#616E88"},children:" */"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"class"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"ContextConsumerDemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"extends"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#88C0D0"},children:"render"}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(e.span,{style:{color:"#81A1C1"},children:"this"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"context"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"as"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"any"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"<div"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"style"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"Consumer"}),l(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#616E88"},children:"// @ts-ignore"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9"},children:"ContextConsumerDemo"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"contextTypes"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"PropTypes"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"object"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"export"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ContextProviderDemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"})]})})]}),`
`,l(o,{children:l(N,{})}),`
`,l(e.p,{children:l(e.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/legacy_context%E4%BD%BF%E7%94%A8%E6%95%88%E6%9E%9C.jpg",alt:"legacy_context\u4F7F\u7528\u6548\u679C"})}),`
`,n(e.h3,{id:"12-new-context",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#12-new-context",children:"#"}),"1.2. New Context"]}),`
`,n(e.h4,{id:"121-legacy-context-\u5B58\u5728\u4EC0\u4E48\u95EE\u9898",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#121-legacy-context-\u5B58\u5728\u4EC0\u4E48\u95EE\u9898",children:"#"}),"1.2.1. Legacy Context \u5B58\u5728\u4EC0\u4E48\u95EE\u9898\uFF1F"]}),`
`,n(e.p,{children:["\u5728\u5982\u4ECA\u8FD9\u4E2A TypeScript \u9010\u6E10\u6210\u4E3A\u524D\u7AEF\u4E3B\u6D41\u7684\u65F6\u4EE3\uFF0C",l(e.code,{children:"Legacy Context"})," \u4E2D\u90A3\u79CD\u4F9D\u8D56\u4E8E ",l(e.code,{children:"prop-types"})," \u7684\u7528\u6CD5\u672A\u514D\u592A\u4E0D\u4F18\u96C5\u4E86\uFF0C\u5E76\u4E14\u662F\u5F3A\u4F9D\u8D56\u4E8E ",l(e.code,{children:"prop-types"}),"\uFF0C\u5982\u679C\u4F60\u4E0D\u58F0\u660E ",l(e.code,{children:"childContextTypes"})," \u6216 ",l(e.code,{children:"contextTypes"})," \u5219\u4F1A\u5BFC\u81F4\u62A5\u9519\uFF1A"]}),`
`,l(e.p,{children:"\u672A\u58F0\u660E contextTypes \u65F6\u7684\u62A5\u9519\u4FE1\u606F\uFF1A"}),`
`,l(e.p,{children:l(e.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E6%9C%AA%E5%A3%B0%E6%98%8EcontextTypes%E6%97%B6%E7%9A%84%E6%8A%A5%E9%94%99%E4%BF%A1%E6%81%AF.jpg",alt:"\u672A\u58F0\u660EcontextTypes\u65F6\u7684\u62A5\u9519\u4FE1\u606F"})}),`
`,l(e.p,{children:"\u672A\u58F0\u660E childContextTypes \u65F6\u7684\u62A5\u9519\u4FE1\u606F\uFF1A"}),`
`,l(e.p,{children:l(e.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E6%9C%AA%E5%A3%B0%E6%98%8EchildContextTypes%E6%97%B6%E7%9A%84%E6%8A%A5%E9%94%99%E4%BF%A1%E6%81%AF.jpg",alt:"\u672A\u58F0\u660EchildContextTypes\u65F6\u7684\u62A5\u9519\u4FE1\u606F"})}),`
`,l(e.p,{children:"\u8FD9\u79CD\u5F00\u53D1\u4F53\u9A8C\u5341\u5206\u4E0D\u597D\uFF0C\u56E0\u6B64\u4ECE React v16.3 \u5F00\u59CB\uFF0C\u63A8\u51FA\u4E86\u65B0\u7684 Context API\uFF0C\u8BA9\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u770B\u65B0\u7684 Context API \u5982\u4F55\u4F7F\u7528\u5427~"}),`
`,n(e.h4,{id:"122-\u5982\u4F55\u4F7F\u7528-new-context-api",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#122-\u5982\u4F55\u4F7F\u7528-new-context-api",children:"#"}),"1.2.2. \u5982\u4F55\u4F7F\u7528 New Context API"]}),`
`,n(e.p,{children:["React v16.3 \u4E4B\u540E\u51FA\u4E86\u4E00\u4E2A ",l(e.code,{children:"createContext"})," API\uFF0C\u89C1\u540D\u77E5\u610F\uFF0C\u5C31\u662F\u521B\u5EFA\u4E00\u4E2A context \u5BF9\u8C61\u7528\u7684\uFF0C\u800C\u8FD9\u4E2A context \u5BF9\u8C61\u4E0A\u6709\u4E00\u4E2A ",l(e.code,{children:"Provider"})," \u5C5E\u6027\u548C\u4E00\u4E2A ",l(e.code,{children:"Consumer"})," \u5C5E\u6027\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5F53\u6210\u7EC4\u4EF6\u4F7F\u7528"]}),`
`,n(e.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[l(e.button,{className:"copy"}),l(e.span,{className:"lang",children:"tsx"}),l(e.pre,{children:n(e.code,{className:"",children:[l(e.span,{className:"line",children:l(e.span,{style:{color:"#616E88"},children:"// createContext \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F5C\u4E3A context value \u7684\u521D\u59CB\u503C"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"createContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#81A1C1"},children:"null"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#616E88"},children:"// \u53EF\u76F4\u63A5\u4F5C\u4E3A\u7EC4\u4EF6\u4F7F\u7528"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeProvider"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"Provider"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeConsumer"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"Consumer"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"cyan"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"darkcyan"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeProvider"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"value"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeConsumer"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"</"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeProvider"}),l(e.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,l(e.span,{className:"line"})]})})]}),`
`,l(e.p,{children:"\u5982\u679C\u6CA1\u6709\u4F20\u9012 value \u5C5E\u6027\u7ED9 Provider \u7EC4\u4EF6\u65F6\uFF0C\u5219\u4F1A\u4F7F\u7528 createContext \u8C03\u7528\u65F6\u4F20\u5165\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F5C\u4E3A\u9ED8\u8BA4\u503C"}),`
`,l(e.p,{children:"\u5173\u4E8E\u63D0\u4F9B\u6570\u636E\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 Provider \u7EC4\u4EF6\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5DF2\u7ECF\u6F14\u793A\u8FC7\u4E86\uFF0C\u5F88\u597D\u7406\u89E3"}),`
`,l(e.p,{children:"\u4F46\u662F\u6D88\u8D39\u6570\u636E\u5219\u6709\u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5206\u522B\u662F\u9488\u5BF9\u7C7B\u7EC4\u4EF6\u3001\u51FD\u6570\u7EC4\u4EF6\u4EE5\u53CA\u4F7F\u7528 createContext \u521B\u5EFA\u7684 context \u5BF9\u8C61\u4E0A\u7684 Consumer \u7EC4\u4EF6\u8BA2\u9605\u65B9\u5F0F\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5206\u522B\u770B\u770B\u5B83\u4EEC\u5982\u4F55\u4F7F\u7528\u5427~"}),`
`,n(e.h4,{id:"123-\u7C7B\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#123-\u7C7B\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E",children:"#"}),"1.2.3. \u7C7B\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E"]}),`
`,n(e.p,{children:["\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E\uFF0C\u6211\u4EEC\u5F88\u81EA\u7136\u4F1A\u901A\u8FC7 ",l(e.code,{children:"this.context"})," \u53BB\u83B7\u53D6 createContext \u521B\u5EFA\u51FA\u6765\u7684 context \u5BF9\u8C61\uFF0C\u4F46\u6B64\u65F6\u5C31\u6709\u4E00\u4E2A\u95EE\u9898\u4E86\uFF0CReact \u600E\u4E48\u77E5\u9053\u4F60\u7684 this.context \u662F\u4EC0\u4E48\uFF1F\u5B83\u5E94\u8BE5\u6307\u5411\u54EA\u4E2A context?"]}),`
`,n(e.p,{children:["\u6240\u4EE5\u80AF\u5B9A\u662F\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u53BB\u6307\u5B9A\u4F7F\u7528\u7684 context\uFF0C\u5F88\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u901A\u8FC7\u7ED9\u7C7B\u7EC4\u4EF6\u6784\u9020\u51FD\u6570\u5BF9\u8C61\u4E0A\u58F0\u660E\u4E00\u4E2A ",l(e.code,{children:"contextType"})," \u5C5E\u6027\u5373\u53EF"]}),`
`,n(e.p,{children:["\u800C\u5982\u679C\u8981\u4F7F\u7528 TypeScript\uFF0C\u4E3A this.context \u6DFB\u52A0\u7C7B\u578B\u58F0\u660E\u600E\u4E48\u529E\uFF1F\u96BE\u9053\u8981\u6BCF\u6B21\u90FD\u7528\u7C7B\u578B\u65AD\u8A00\uFF0C\u901A\u8FC7 ",l(e.code,{children:"(this.context as Xxx).xxx"})," \u7684\u65B9\u5F0F\u53BB\u4F7F\u7528\u5417\uFF1F\u8FD9\u6837\u672A\u514D\u592A\u4E0D\u4F18\u96C5\u4E86"]}),`
`,n(e.p,{children:["React \u5B98\u65B9\u63A8\u8350\u7684\u65B9\u5F0F\u662F\u4F7F\u7528 ",l(e.code,{children:"declare"})," \u5173\u952E\u5B57\uFF0C\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u58F0\u660E context \u7684\u7C7B\u578B"]}),`
`,l(e.p,{children:"\u63A5\u4E0B\u6765\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u5C0F Demo \u4F53\u9A8C\u4E00\u4E0B\u5427~"}),`
`,l(e.p,{children:"\u9996\u5148\u662F context \u5BF9\u8C61\u7684\u7BA1\u7406\uFF0C\u6211\u4EEC\u4EE5\u4E3B\u9898\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684\u7BA1\u7406\u4E3A\u4F8B"}),`
`,l(e.p,{children:l(e.code,{children:"context.ts"})}),`
`,n(e.div,{className:"language-ts",style:{backgroundColor:"#2e3440ff"},children:[l(e.button,{className:"copy"}),l(e.span,{className:"lang",children:"ts"}),l(e.pre,{children:n(e.code,{className:"",children:[n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"createContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"react"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"interface"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"Theme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  color"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  background"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"defaultTheme"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"Theme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"black"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"white"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#616E88"},children:"/** "}),l(e.span,{style:{color:"#ECEFF4"},children:"@"}),l(e.span,{style:{color:"#81A1C1"},children:"description"}),l(e.span,{style:{color:"#616E88"},children:" \u4E3B\u9898\u4E0A\u4E0B\u6587\u5BF9\u8C61 */"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"createContext"}),l(e.span,{style:{color:"#ECEFF4"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"Theme"}),l(e.span,{style:{color:"#ECEFF4"},children:">"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"defaultTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"export"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"})]})})]}),`
`,l(e.p,{children:"\u7136\u540E\u518D\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u6D88\u8D39"}),`
`,n(e.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[l(e.button,{className:"copy"}),l(e.span,{className:"lang",children:"tsx"}),l(e.pre,{children:n(e.code,{className:"",children:[n(e.span,{className:"line",children:[l(e.span,{style:{color:"#616E88"},children:"/** "}),l(e.span,{style:{color:"#ECEFF4"},children:"@"}),l(e.span,{style:{color:"#81A1C1"},children:"description"}),l(e.span,{style:{color:"#616E88"},children:" \u7C7B\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E */"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"React"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"react"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"./context"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"class"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"ClassComponentConsumerDemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"extends"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#ECEFF4"},children:"  "}),l(e.span,{style:{color:"#616E88"},children:"// \u4E3A context \u58F0\u660E\u7C7B\u578B"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"declare"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" context"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"ContextType"}),l(e.span,{style:{color:"#ECEFF4"},children:"<"}),l(e.span,{style:{color:"#81A1C1"},children:"typeof"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#ECEFF4"},children:">"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#88C0D0"},children:"render"}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"this"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"context"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"<div"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"style"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"Class Component Consumber"}),l(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#616E88"},children:"// \u9700\u8981\u58F0\u660E contextType \u624D\u80FD\u8BA9 React \u77E5\u9053\u7C7B\u7EC4\u4EF6\u4E2D\u7684 this.context \u6307\u5411\u8C01"})}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#616E88"},children:"// \u6CE8\u610F\u4E0D\u662F contextTypes !!!"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9"},children:"ClassComponentConsumerDemo"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"contextType"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"export"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ClassComponentConsumerDemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"})]})})]}),`
`,l(o,{children:l(M,{})}),`
`,n(e.h4,{id:"124-\u51FD\u6570\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#124-\u51FD\u6570\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E",children:"#"}),"1.2.4. \u51FD\u6570\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E"]}),`
`,n(e.p,{children:["\u51FD\u6570\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E\u5C31\u5F88\u76F4\u89C2\u4E86\uFF0C\u76F4\u63A5\u4F7F\u7528 ",l(e.code,{children:"useContext"})," \u8FD9\u4E2A hook\uFF0C\u4F20\u5165\u6211\u4EEC\u7684 context \u5BF9\u8C61\u5373\u53EF\u83B7\u53D6\u5230\u5B83\u7684 value\uFF0C\u5E76\u4E14\u80FD\u591F\u81EA\u52A8\u63A8\u5BFC\u7C7B\u578B\uFF0C\u4E0D\u9700\u8981\u6211\u4EEC\u4E3A\u4E86\u7C7B\u578B\u63A8\u5BFC\u53BB\u505A\u4EC0\u4E48\u989D\u5916\u7684\u5DE5\u4F5C"]}),`
`,n(e.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[l(e.button,{className:"copy"}),l(e.span,{className:"lang",children:"tsx"}),l(e.pre,{children:n(e.code,{className:"",children:[n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"useContext"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"useState"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"react"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"Theme"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"./context"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"FunctionComponentProviderDemo"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"FC"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"["}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#ECEFF4"},children:"]"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"useState"}),l(e.span,{style:{color:"#ECEFF4"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"Theme"}),l(e.span,{style:{color:"#ECEFF4"},children:">"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"darkcyan"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"cyan"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeContext.Provider"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"value"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"FunctionComponentConsumerDemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"</"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeContext.Provider"}),l(e.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"FunctionComponentConsumerDemo"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"FC"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#ECEFF4"},children:"  "}),l(e.span,{style:{color:"#616E88"},children:"// \u901A\u8FC7 useContext \u6D88\u8D39\u6700\u8FD1\u7684\u7236\u7EC4\u4EF6\u4E2D Provider \u63D0\u4F9B\u7684\u6570\u636E"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"useContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"<div"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"style"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"Function Component Consumber"}),l(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"export"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"FunctionComponentProviderDemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"})]})})]}),`
`,l(o,{children:l($,{})}),`
`,n(e.h4,{id:"125-\u4F7F\u7528-context-\u5BF9\u8C61\u7684-consumer-\u6D88\u8D39\u6570\u636E",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#125-\u4F7F\u7528-context-\u5BF9\u8C61\u7684-consumer-\u6D88\u8D39\u6570\u636E",children:"#"}),"1.2.5. \u4F7F\u7528 context \u5BF9\u8C61\u7684 Consumer \u6D88\u8D39\u6570\u636E"]}),`
`,n(e.p,{children:["\u5230\u76EE\u524D\u4F4D\u7F6E\uFF0C\u6211\u4EEC\u53EA\u4F7F\u7528\u4E86 ",l(e.code,{children:"createContext"})," \u521B\u5EFA\u7684 context \u5BF9\u8C61\u4E2D\u7684 Provider \u7528\u4E8E\u63D0\u4F9B\u6570\u636E\uFF0C\u4F46\u5176\u5B9E\u5B83\u8FD8\u6709\u4E00\u4E2A Consumer \u7EC4\u4EF6\u53EF\u4F9B\u6211\u4EEC\u6D88\u8D39\u6570\u636E"]}),`
`,l(e.p,{children:"\u8FD9\u79CD\u65B9\u5F0F\u901A\u8FC7\u5728 Consumer \u7EC4\u4EF6\u4E2D\u7684 callback children \u6D88\u8D39\u6570\u636E"}),`
`,n(e.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[l(e.button,{className:"copy"}),l(e.span,{className:"lang",children:"tsx"}),l(e.pre,{children:n(e.code,{className:"",children:[n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"useState"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"react"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"Theme"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"./context"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"ContextProviderDemo2"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"FC"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"["}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#ECEFF4"},children:"]"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"useState"}),l(e.span,{style:{color:"#ECEFF4"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"Theme"}),l(e.span,{style:{color:"#ECEFF4"},children:">"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"darkcyan"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"cyan"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeContext.Provider"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"value"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"ContextConsumerDemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"</"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeContext.Provider"}),l(e.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"interface"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"ConsumberComponentProps"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  theme"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"Theme"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"ContextConsumerDemo"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"FC"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#ECEFF4"},children:"  "}),l(e.span,{style:{color:"#616E88"},children:"// \u6D88\u8D39\u6570\u636E\u7684\u771F\u6B63\u7EC4\u4EF6"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"ConsumberComponent"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"FC"}),l(e.span,{style:{color:"#ECEFF4"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"ConsumberComponentProps"}),l(e.span,{style:{color:"#ECEFF4"},children:">"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"props"}),l(e.span,{style:{color:"#ECEFF4"},children:")"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"props"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"<div"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"style"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"Context Consumber Component"}),l(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#ECEFF4"},children:"  "}),l(e.span,{style:{color:"#616E88"},children:"// \u901A\u8FC7\u5305\u88F9 Consumber \u7EC4\u4EF6\u83B7\u53D6\u6D88\u8D39\u6570\u636E\u7684\u80FD\u529B\uFF0C\u5C06\u6D88\u8D39\u6570\u636E\u4F5C\u4E3A\u7EC4\u4EF6 props \u4F20\u7ED9\u771F\u6B63\u6D88\u8D39\u6570\u636E\u7684\u7EC4\u4EF6"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeContext.Consumer"}),l(e.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"{"}),l(e.span,{style:{color:"#ECEFF4"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#ECEFF4"},children:")"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"ConsumberComponent"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"theme"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#81A1C1"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"/>}"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"</"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeContext.Consumer"}),l(e.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"export"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ContextProviderDemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"})]})})]}),`
`,l(o,{children:l(X,{})}),`
`,l(e.p,{children:"\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u7684\u4F18\u70B9\u5728\u4E8E\u65E0\u9700\u7406\u4F1A\u662F\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u8FD8\u662F\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E\uFF0C\u76F4\u63A5\u4F7F\u7528 context Consumber \u7EC4\u4EF6\u5373\u53EF"}),`
`,n(e.h3,{id:"13-\u52A8\u6001-context",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#13-\u52A8\u6001-context",children:"#"}),"1.3. \u52A8\u6001 context"]}),`
`,l(e.p,{children:"\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u7684 Demo \u4E2D\u4F7F\u7528\u7684 context \u90FD\u662F\u9759\u6001\u7684\uFF0C\u90A3\u5982\u679C context \u9700\u8981\u662F\u52A8\u6001\u7684\u8BDD\u8981\u600E\u4E48\u5904\u7406\u5462\uFF1F\u6BD4\u5982\u6211\u4EEC\u6DFB\u52A0\u4E00\u4E2A\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u53EF\u4EE5\u6765\u56DE\u5207\u6362\u65E5\u95F4\u591C\u95F4\u6A21\u5F0F"}),`
`,n(e.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[l(e.button,{className:"copy"}),l(e.span,{className:"lang",children:"tsx"}),l(e.pre,{children:n(e.code,{className:"",children:[n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"useContext"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"useEffect"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"useState"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"memo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"react"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"createLoggerWithScope"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"~/utils"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"darkTheme"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"lightTheme"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"Theme"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"./context"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"s"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"./style.module.scss"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"logger"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"createLoggerWithScope"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"DynamicContextDemo"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"DynamicContextDemo"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"FC"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"["}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"setTheme"}),l(e.span,{style:{color:"#ECEFF4"},children:"]"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"useState"}),l(e.span,{style:{color:"#ECEFF4"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"Theme"}),l(e.span,{style:{color:"#ECEFF4"},children:">"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"lightTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"handleToggleTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"if"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"==="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"lightTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:") "}),l(e.span,{style:{color:"#88C0D0"},children:"setTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"darkTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"else"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"setTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"lightTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"<div"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"className"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#D8DEE9"},children:"s"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"container"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeContext.Provider"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"value"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"Child"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"</"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeContext.Provider"}),l(e.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"<button"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"onClick"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"handleToggleTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"toggle theme"}),l(e.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#616E88"},children:"// \u901A\u8FC7 memo \u5904\u7406\u540E \u53EA\u8981 Child \u7EC4\u4EF6\u7684 props \u4E0D\u53D8\u5219 Child \u7EC4\u4EF6\u4E0D\u4F1A\u968F\u7740\u7236\u7EC4\u4EF6\u7684\u6E32\u67D3\u800C\u91CD\u65B0\u6E32\u67D3"})}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#616E88"},children:"// \u8FD9\u91CC\u662F\u4E3A\u4E86\u9A8C\u8BC1 Consumer \u7EC4\u4EF6\u7684\u66F4\u65B0\u5E76\u4E0D\u662F\u7531 Child \u7EC4\u4EF6\u7684\u66F4\u65B0\u5F15\u8D77\u7684"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"Child"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"FC"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"memo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#ECEFF4"},children:"  "}),l(e.span,{style:{color:"#616E88"},children:"// \u7528\u4E8E\u9A8C\u8BC1 Consumer \u66F4\u65B0\u662F\u5426\u662F\u7531 Child \u7EC4\u4EF6\u66F4\u65B0\u5F15\u8D77\u7684 \u800C\u662F\u7531 context API \u7684\u8FD0\u884C\u673A\u5236\u5F15\u8D77\u7684"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#88C0D0"},children:"useEffect"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#D8DEE9"},children:"logger"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#88C0D0"},children:"log"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"Child \u7EC4\u4EF6\u6E32\u67D3"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"Consumer"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"Consumer"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"FC"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"useContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"<div"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"style"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#81A1C1"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"className"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#D8DEE9"},children:"s"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"consumer"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#D8DEE9FF"},children:"      Consumber"})}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"export"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"DynamicContextDemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"})]})})]}),`
`,l(o,{children:l(K,{})}),`
`,l(e.p,{children:"\u8FD9\u91CC\u5DF2\u7ECF\u5BF9 Child \u7EC4\u4EF6\u7528 memo \u5904\u7406\u8FC7\u4E86\uFF0C\u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u6392\u9664 Consumer \u7EC4\u4EF6\u7684\u66F4\u65B0\u662F\u7531 Child \u7EC4\u4EF6\u66F4\u65B0\u5F15\u8D77\u7684\u8FD9\u4E00\u53EF\u80FD\u6027"}),`
`,n(e.p,{children:["\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236\u53F0\u67E5\u770B Child \u7EC4\u4EF6\u4E2D\u7684 ",l(e.code,{children:"useEffect"})," \u662F\u5426\u6267\u884C\u6765\u9A8C\u8BC1\u8FD9\u4E00\u70B9"]}),`
`,l(e.p,{children:l(e.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E5%8A%A8%E6%80%81context%E6%95%88%E6%9E%9C.gif",alt:"\u52A8\u6001context\u6548\u679C"})}),`
`,l(e.p,{children:"useEffect \u6CA1\u6267\u884C\uFF0C\u800C Consumer \u5374\u66F4\u65B0\u4E86\uFF0C\u8BF4\u660E\u662F\u7531 context API \u7684\u8FD0\u884C\u673A\u5236\u5F15\u8D77\u7684\u66F4\u65B0"}),`
`,l(e.p,{children:"\u9664\u4E86\u4F7F\u7528 memo \u5305\u88F9 Child \u7EC4\u4EF6\u5916\uFF0C\u8FD8\u6709\u53E6\u5916\u4E00\u79CD\u65B9\u5F0F\u7528\u4E8E\u89E3\u51B3\u8FD9\u91CC Child \u7EC4\u4EF6\u7684\u4E0D\u5FC5\u8981\u66F4\u65B0\u7684\u65B9\u5F0F\uFF0C\u90A3\u5C31\u662F\u4F7F\u7528 useMemo"}),`
`,n(e.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[l(e.button,{className:"copy"}),l(e.span,{className:"lang",children:"tsx"}),l(e.pre,{children:n(e.code,{className:"",children:[n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"DynamicContextDemo"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"FC"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"["}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"setTheme"}),l(e.span,{style:{color:"#ECEFF4"},children:"]"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"useState"}),l(e.span,{style:{color:"#ECEFF4"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"Theme"}),l(e.span,{style:{color:"#ECEFF4"},children:">"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"lightTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"handleToggleTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"if"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"==="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"lightTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:") "}),l(e.span,{style:{color:"#88C0D0"},children:"setTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"darkTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"else"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"setTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"lightTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"<div"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"className"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#D8DEE9"},children:"s"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"container"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeContext.Provider"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"value"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(e.span,{className:"line highlighted",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(e.span,{style:{color:"#81A1C1"},children:"{"}),l(e.span,{style:{color:"#88C0D0"},children:"useMemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,n(e.span,{className:"line highlighted",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"          "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(e.span,{className:"line highlighted",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"            "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"Child"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(e.span,{className:"line highlighted",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"          )"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line highlighted",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"          []"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line highlighted",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"        )"}),l(e.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"</"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeContext.Provider"}),l(e.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"<button"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"onClick"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"handleToggleTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"toggle theme"}),l(e.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"})]})})]}),`
`,n(e.h3,{id:"14-displayname",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#14-displayname",children:"#"}),"1.4. displayName"]}),`
`,l(e.p,{children:"\u901A\u8FC7 createContext \u521B\u5EFA\u7684 context \u5BF9\u8C61\u8FD8\u6709\u4E00\u4E2A displayName \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u7528\u4E8E\u5728 React Devtools \u4E2D\u8FDB\u884C\u5C55\u793A"}),`
`,n(e.div,{className:"language-ts",style:{backgroundColor:"#2e3440ff"},children:[l(e.button,{className:"copy"}),l(e.span,{className:"lang",children:"ts"}),l(e.pre,{children:n(e.code,{className:"",children:[n(e.span,{className:"line",children:[l(e.span,{style:{color:"#616E88"},children:"/** "}),l(e.span,{style:{color:"#ECEFF4"},children:"@"}),l(e.span,{style:{color:"#81A1C1"},children:"description"}),l(e.span,{style:{color:"#616E88"},children:" \u4E3B\u9898\u4E0A\u4E0B\u6587\u5BF9\u8C61 */"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"createContext"}),l(e.span,{style:{color:"#ECEFF4"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"Theme"}),l(e.span,{style:{color:"#ECEFF4"},children:">"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"defaultTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#D8DEE9"},children:"displayName"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"PlasticineThemeContext"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"})]})})]}),`
`,l(e.p,{children:l(e.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/context%E7%9A%84displayName%E4%BD%9C%E7%94%A8.jpg",alt:"context\u7684displayName\u4F5C\u7528"})}),`
`,n(e.h2,{id:"2-context-\u9AD8\u9636\u7528\u6CD5",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#2-context-\u9AD8\u9636\u7528\u6CD5",children:"#"}),"2. context \u9AD8\u9636\u7528\u6CD5"]}),`
`,n(e.h3,{id:"21-\u5D4C\u5957-context",children:[l(e.a,{className:"header-anchor","aria-hidden":"true",href:"#21-\u5D4C\u5957-context",children:"#"}),"2.1. \u5D4C\u5957 context"]}),`
`,l(e.p,{children:"\u5F53\u6211\u4EEC\u6709\u591A\u4E2A context \u9700\u8981\u88AB\u6D88\u8D39\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5D4C\u5957\u7ED3\u6784"}),`
`,n(e.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[l(e.button,{className:"copy"}),l(e.span,{className:"lang",children:"tsx"}),l(e.pre,{children:n(e.code,{className:"",children:[n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"useContext"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"useState"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"react"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"import"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#D8DEE9"},children:"defaultI18n"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#D8DEE9"},children:"defaultTheme"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#D8DEE9"},children:"I18n"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#D8DEE9"},children:"I18nContext"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#D8DEE9"},children:"Theme"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"from"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"./context"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"NestedContextDemo"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"FC"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"["}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#ECEFF4"},children:"]"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"useState"}),l(e.span,{style:{color:"#ECEFF4"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"Theme"}),l(e.span,{style:{color:"#ECEFF4"},children:">"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"defaultTheme"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"["}),l(e.span,{style:{color:"#D8DEE9"},children:"i18n"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"setI18n"}),l(e.span,{style:{color:"#ECEFF4"},children:"]"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"useState"}),l(e.span,{style:{color:"#ECEFF4"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"I18n"}),l(e.span,{style:{color:"#ECEFF4"},children:">"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"defaultI18n"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"handleChangeLanguage"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"lang"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"i18n"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"if"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(e.span,{style:{color:"#D8DEE9"},children:"lang"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"==="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"zh-CN"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#D8DEE9FF"},children:") "}),l(e.span,{style:{color:"#88C0D0"},children:"setI18n"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"lang"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"en-US"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"else"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"setI18n"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"lang"}),l(e.span,{style:{color:"#ECEFF4"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"zh-CN"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#ECEFF4"},children:"  "}),l(e.span,{style:{color:"#616E88"},children:"// \u5D4C\u5957\u4F7F\u7528\u591A\u4E2A context"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeContext.Provider"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"value"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#D8DEE9"},children:"theme"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"I18nContext.Provider"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"value"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#D8DEE9"},children:"i18n"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"          "}),l(e.span,{style:{color:"#81A1C1"},children:"<"}),l(e.span,{style:{color:"#8FBCBB"},children:"Consumer"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(e.span,{style:{color:"#81A1C1"},children:"</"}),l(e.span,{style:{color:"#8FBCBB"},children:"I18nContext.Provider"}),l(e.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"</"}),l(e.span,{style:{color:"#8FBCBB"},children:"ThemeContext.Provider"}),l(e.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"<button"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"onClick"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"handleChangeLanguage"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"()"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"toggle language"}),l(e.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"Consumer"}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"React"}),l(e.span,{style:{color:"#ECEFF4"},children:"."}),l(e.span,{style:{color:"#8FBCBB"},children:"FC"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"()"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"=>"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"useContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"ThemeContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"const"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"lang"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#88C0D0"},children:"useContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:"("}),l(e.span,{style:{color:"#D8DEE9"},children:"I18nContext"}),l(e.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(e.span,{style:{color:"#81A1C1"},children:"return"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"<div"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#8FBCBB"},children:"style"}),l(e.span,{style:{color:"#81A1C1"},children:"={"}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"color"}),l(e.span,{style:{color:"#ECEFF4"},children:","}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"background"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"}),l(e.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"<p>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(e.span,{style:{color:"#81A1C1"},children:"{"}),l(e.span,{style:{color:"#D8DEE9"},children:"lang"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"==="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"zh-CN"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"          "}),l(e.span,{style:{color:"#81A1C1"},children:"?"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"\u4F60\u597D\u4E16\u754C"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"          "}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"lang"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#81A1C1"},children:"==="}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"en-US"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"          "}),l(e.span,{style:{color:"#81A1C1"},children:"?"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"Hello World"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"          "}),l(e.span,{style:{color:"#81A1C1"},children:":"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#A3BE8C"},children:"unknown language"}),l(e.span,{style:{color:"#ECEFF4"},children:"'"}),l(e.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(e.span,{style:{color:"#81A1C1"},children:"</p>"})]}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(e.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,l(e.span,{className:"line",children:l(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(e.span,{className:"line"}),`
`,n(e.span,{className:"line",children:[l(e.span,{style:{color:"#81A1C1"},children:"export"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"{"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#D8DEE9"},children:"NestedContextDemo"}),l(e.span,{style:{color:"#D8DEE9FF"},children:" "}),l(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line"})]})})]}),`
`,l(o,{children:l(ee,{})}),`
`,l(e.p,{children:l(e.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E5%B5%8C%E5%A5%97context.gif",alt:"\u5D4C\u5957context"})})]})}function pe(s={}){const{wrapper:e}=s.components||{};return e?l(e,Object.assign({},s,{children:l(m,s)})):m(s)}const Fe="2022/12/14 06:33:26",ye=`import { DemoBlock } from '@island/demo-block'

import { ContextProviderDemo } from '~/demos/context/demo1.tsx'
import {
  ClassComponentProviderDemo,
  FunctionComponentProviderDemo,
  ContextProviderDemo2,
} from '~/demos/context/demo2'
import { DynamicContextDemo } from '~/demos/context/demo3'
import { NestedContextDemo } from '~/demos/context/demo4'

# context

## 1. context \u57FA\u672C\u4F7F\u7528

\u4F1A\u5206\u522B\u4ECB\u7ECD React \u4E2D\u65B0\u65E7\u7248\u672C\u7684 context \u4F7F\u7528\u65B9\u5F0F

- \u65E7\u7248\u672C\u662F \`Legacy Context\` -- React v16.3 \u4E4B\u524D
- \u65B0\u7248\u672C\u662F \`New Context\` -- React v16.3 \u4E4B\u540E

### 1.1. Legacy Context

\u63D0\u4F9B\u6570\u636E\u7684\u4E00\u65B9\u4E2D\u8981\u5B9E\u73B0\u4E00\u4E2A \`getChildContext\` \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u7684\u8FD4\u56DE\u503C\u4F1A\u4F5C\u4E3A\u5B50\u7EC4\u4EF6\u83B7\u53D6\u7684 context

\u5B50\u7EC4\u4EF6\u4E2D\u901A\u8FC7 \`this.context\` \u5373\u53EF\u83B7\u53D6\u5230 context

\u9700\u8981\u6CE8\u610F\u7684\u662F\u8FD8\u8981\u4E3A\u4ED6\u4EEC\u6DFB\u52A0\u7C7B\u578B\u58F0\u660E\u624D\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u5F53\u7136\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u58F0\u660E\u6307\u7684\u4E0D\u662F TypeScript \u7684\u7C7B\u578B\u58F0\u660E\uFF0C\u800C\u662F\u7528\u4E8E React \u8FD0\u884C\u65F6\u7684\u7C7B\u578B\u68C0\u6D4B

\u6211\u4EEC\u53EF\u4EE5\u7ED3\u5408 \`prop-types\` \u8FD9\u4E2A\u5E93\u6765\u58F0\u660E context \u7684\u7C7B\u578B\uFF0C\u58F0\u660E\u89C4\u5219\u5982\u4E0B\uFF1A

1. **\u63D0\u4F9B\u6570\u636E\u7684\u7EC4\u4EF6\u8981\u58F0\u660E \`childContextTypes\`**
2. **\u6D88\u8D39\u6570\u636E\u7684\u7EC4\u4EF6\u8981\u58F0\u660E \`contextTypes\`**

\u4E0B\u9762\u901A\u8FC7\u4E00\u4E2A Demo \u6765\u4F53\u9A8C\u4E00\u4E0B

\`\`\`tsx
/** @description Legacy Context */

import React from 'react'

import PropTypes from 'prop-types'

/**
 * @description \u63D0\u4F9B\u6570\u636E
 */
class ContextProviderDemo extends React.Component {
  /** @description \u5728 getChildContext \u4E2D\u6307\u5B9A context \u7684\u6570\u636E */
  getChildContext() {
    const theme = {
      color: 'darkcyan',
      background: 'cyan',
    }

    return { theme }
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>Provider</p>
        <ContextConsumerDemo />
      </div>
    )
  }
}

// @ts-ignore
ContextProviderDemo.childContextTypes = {
  theme: PropTypes.object,
}

/**
 * @description \u6D88\u8D39\u6570\u636E
 */
class ContextConsumerDemo extends React.Component {
  render(): React.ReactNode {
    const { color, background } = (this.context as any).theme

    return <div style={{ color, background }}>Consumer</div>
  }
}

// @ts-ignore
ContextConsumerDemo.contextTypes = {
  theme: PropTypes.object,
}

export { ContextProviderDemo }
\`\`\`

<DemoBlock>
  <ContextProviderDemo />
</DemoBlock>

![legacy_context\u4F7F\u7528\u6548\u679C](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/legacy_context%E4%BD%BF%E7%94%A8%E6%95%88%E6%9E%9C.jpg)

### 1.2. New Context

#### 1.2.1. Legacy Context \u5B58\u5728\u4EC0\u4E48\u95EE\u9898\uFF1F

\u5728\u5982\u4ECA\u8FD9\u4E2A TypeScript \u9010\u6E10\u6210\u4E3A\u524D\u7AEF\u4E3B\u6D41\u7684\u65F6\u4EE3\uFF0C\`Legacy Context\` \u4E2D\u90A3\u79CD\u4F9D\u8D56\u4E8E \`prop-types\` \u7684\u7528\u6CD5\u672A\u514D\u592A\u4E0D\u4F18\u96C5\u4E86\uFF0C\u5E76\u4E14\u662F\u5F3A\u4F9D\u8D56\u4E8E \`prop-types\`\uFF0C\u5982\u679C\u4F60\u4E0D\u58F0\u660E \`childContextTypes\` \u6216 \`contextTypes\` \u5219\u4F1A\u5BFC\u81F4\u62A5\u9519\uFF1A

\u672A\u58F0\u660E contextTypes \u65F6\u7684\u62A5\u9519\u4FE1\u606F\uFF1A

![\u672A\u58F0\u660EcontextTypes\u65F6\u7684\u62A5\u9519\u4FE1\u606F](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E6%9C%AA%E5%A3%B0%E6%98%8EcontextTypes%E6%97%B6%E7%9A%84%E6%8A%A5%E9%94%99%E4%BF%A1%E6%81%AF.jpg)

\u672A\u58F0\u660E childContextTypes \u65F6\u7684\u62A5\u9519\u4FE1\u606F\uFF1A

![\u672A\u58F0\u660EchildContextTypes\u65F6\u7684\u62A5\u9519\u4FE1\u606F](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E6%9C%AA%E5%A3%B0%E6%98%8EchildContextTypes%E6%97%B6%E7%9A%84%E6%8A%A5%E9%94%99%E4%BF%A1%E6%81%AF.jpg)

\u8FD9\u79CD\u5F00\u53D1\u4F53\u9A8C\u5341\u5206\u4E0D\u597D\uFF0C\u56E0\u6B64\u4ECE React v16.3 \u5F00\u59CB\uFF0C\u63A8\u51FA\u4E86\u65B0\u7684 Context API\uFF0C\u8BA9\u6211\u4EEC\u4E00\u8D77\u6765\u770B\u770B\u65B0\u7684 Context API \u5982\u4F55\u4F7F\u7528\u5427~

#### 1.2.2. \u5982\u4F55\u4F7F\u7528 New Context API

React v16.3 \u4E4B\u540E\u51FA\u4E86\u4E00\u4E2A \`createContext\` API\uFF0C\u89C1\u540D\u77E5\u610F\uFF0C\u5C31\u662F\u521B\u5EFA\u4E00\u4E2A context \u5BF9\u8C61\u7528\u7684\uFF0C\u800C\u8FD9\u4E2A context \u5BF9\u8C61\u4E0A\u6709\u4E00\u4E2A \`Provider\` \u5C5E\u6027\u548C\u4E00\u4E2A \`Consumer\` \u5C5E\u6027\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5F53\u6210\u7EC4\u4EF6\u4F7F\u7528

\`\`\`tsx
// createContext \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F5C\u4E3A context value \u7684\u521D\u59CB\u503C
const ThemeContext = createContext(null)

// \u53EF\u76F4\u63A5\u4F5C\u4E3A\u7EC4\u4EF6\u4F7F\u7528
const ThemeProvider = ThemeContext.Provider
const ThemeConsumer = ThemeContext.Consumer

const theme = { color: 'cyan', background: 'darkcyan' }
<ThemeProvider value={theme}>
  <ThemeConsumer />
</ThemeProvider>
\`\`\`

\u5982\u679C\u6CA1\u6709\u4F20\u9012 value \u5C5E\u6027\u7ED9 Provider \u7EC4\u4EF6\u65F6\uFF0C\u5219\u4F1A\u4F7F\u7528 createContext \u8C03\u7528\u65F6\u4F20\u5165\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F5C\u4E3A\u9ED8\u8BA4\u503C

\u5173\u4E8E\u63D0\u4F9B\u6570\u636E\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 Provider \u7EC4\u4EF6\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5DF2\u7ECF\u6F14\u793A\u8FC7\u4E86\uFF0C\u5F88\u597D\u7406\u89E3

\u4F46\u662F\u6D88\u8D39\u6570\u636E\u5219\u6709\u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5206\u522B\u662F\u9488\u5BF9\u7C7B\u7EC4\u4EF6\u3001\u51FD\u6570\u7EC4\u4EF6\u4EE5\u53CA\u4F7F\u7528 createContext \u521B\u5EFA\u7684 context \u5BF9\u8C61\u4E0A\u7684 Consumer \u7EC4\u4EF6\u8BA2\u9605\u65B9\u5F0F\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5206\u522B\u770B\u770B\u5B83\u4EEC\u5982\u4F55\u4F7F\u7528\u5427~

#### 1.2.3. \u7C7B\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E

\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E\uFF0C\u6211\u4EEC\u5F88\u81EA\u7136\u4F1A\u901A\u8FC7 \`this.context\` \u53BB\u83B7\u53D6 createContext \u521B\u5EFA\u51FA\u6765\u7684 context \u5BF9\u8C61\uFF0C\u4F46\u6B64\u65F6\u5C31\u6709\u4E00\u4E2A\u95EE\u9898\u4E86\uFF0CReact \u600E\u4E48\u77E5\u9053\u4F60\u7684 this.context \u662F\u4EC0\u4E48\uFF1F\u5B83\u5E94\u8BE5\u6307\u5411\u54EA\u4E2A context?

\u6240\u4EE5\u80AF\u5B9A\u662F\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u53BB\u6307\u5B9A\u4F7F\u7528\u7684 context\uFF0C\u5F88\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u901A\u8FC7\u7ED9\u7C7B\u7EC4\u4EF6\u6784\u9020\u51FD\u6570\u5BF9\u8C61\u4E0A\u58F0\u660E\u4E00\u4E2A \`contextType\` \u5C5E\u6027\u5373\u53EF

\u800C\u5982\u679C\u8981\u4F7F\u7528 TypeScript\uFF0C\u4E3A this.context \u6DFB\u52A0\u7C7B\u578B\u58F0\u660E\u600E\u4E48\u529E\uFF1F\u96BE\u9053\u8981\u6BCF\u6B21\u90FD\u7528\u7C7B\u578B\u65AD\u8A00\uFF0C\u901A\u8FC7 \`(this.context as Xxx).xxx\` \u7684\u65B9\u5F0F\u53BB\u4F7F\u7528\u5417\uFF1F\u8FD9\u6837\u672A\u514D\u592A\u4E0D\u4F18\u96C5\u4E86

React \u5B98\u65B9\u63A8\u8350\u7684\u65B9\u5F0F\u662F\u4F7F\u7528 \`declare\` \u5173\u952E\u5B57\uFF0C\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u58F0\u660E context \u7684\u7C7B\u578B

\u63A5\u4E0B\u6765\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u5C0F Demo \u4F53\u9A8C\u4E00\u4E0B\u5427~

\u9996\u5148\u662F context \u5BF9\u8C61\u7684\u7BA1\u7406\uFF0C\u6211\u4EEC\u4EE5\u4E3B\u9898\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684\u7BA1\u7406\u4E3A\u4F8B

\`context.ts\`

\`\`\`ts
import { createContext } from 'react'

interface Theme {
  color: string
  background: string
}

const defaultTheme: Theme = {
  color: 'black',
  background: 'white',
}

/** @description \u4E3B\u9898\u4E0A\u4E0B\u6587\u5BF9\u8C61 */
const ThemeContext = createContext<Theme>(defaultTheme)

export { ThemeContext }
\`\`\`

\u7136\u540E\u518D\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u6D88\u8D39

\`\`\`tsx
/** @description \u7C7B\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E */

import React from 'react'

import { ThemeContext } from './context'

class ClassComponentConsumerDemo extends React.Component {
  // \u4E3A context \u58F0\u660E\u7C7B\u578B
  declare context: React.ContextType<typeof ThemeContext>

  render(): React.ReactNode {
    const { color, background } = this.context
    return <div style={{ color, background }}>Class Component Consumber</div>
  }
}
// \u9700\u8981\u58F0\u660E contextType \u624D\u80FD\u8BA9 React \u77E5\u9053\u7C7B\u7EC4\u4EF6\u4E2D\u7684 this.context \u6307\u5411\u8C01
// \u6CE8\u610F\u4E0D\u662F contextTypes !!!
ClassComponentConsumerDemo.contextType = ThemeContext

export { ClassComponentConsumerDemo }
\`\`\`

<DemoBlock>
  <ClassComponentProviderDemo />
</DemoBlock>

#### 1.2.4. \u51FD\u6570\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E

\u51FD\u6570\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E\u5C31\u5F88\u76F4\u89C2\u4E86\uFF0C\u76F4\u63A5\u4F7F\u7528 \`useContext\` \u8FD9\u4E2A hook\uFF0C\u4F20\u5165\u6211\u4EEC\u7684 context \u5BF9\u8C61\u5373\u53EF\u83B7\u53D6\u5230\u5B83\u7684 value\uFF0C\u5E76\u4E14\u80FD\u591F\u81EA\u52A8\u63A8\u5BFC\u7C7B\u578B\uFF0C\u4E0D\u9700\u8981\u6211\u4EEC\u4E3A\u4E86\u7C7B\u578B\u63A8\u5BFC\u53BB\u505A\u4EC0\u4E48\u989D\u5916\u7684\u5DE5\u4F5C

\`\`\`tsx
import { useContext, useState } from 'react'

import { Theme, ThemeContext } from './context'

const FunctionComponentProviderDemo: React.FC = () => {
  const [theme] = useState<Theme>({
    color: 'darkcyan',
    background: 'cyan',
  })

  return (
    <ThemeContext.Provider value={theme}>
      <FunctionComponentConsumerDemo />
    </ThemeContext.Provider>
  )
}

const FunctionComponentConsumerDemo: React.FC = () => {
  // \u901A\u8FC7 useContext \u6D88\u8D39\u6700\u8FD1\u7684\u7236\u7EC4\u4EF6\u4E2D Provider \u63D0\u4F9B\u7684\u6570\u636E
  const { color, background } = useContext(ThemeContext)

  return <div style={{ color, background }}>Function Component Consumber</div>
}

export { FunctionComponentProviderDemo }
\`\`\`

<DemoBlock>
  <FunctionComponentProviderDemo />
</DemoBlock>

#### 1.2.5. \u4F7F\u7528 context \u5BF9\u8C61\u7684 Consumer \u6D88\u8D39\u6570\u636E

\u5230\u76EE\u524D\u4F4D\u7F6E\uFF0C\u6211\u4EEC\u53EA\u4F7F\u7528\u4E86 \`createContext\` \u521B\u5EFA\u7684 context \u5BF9\u8C61\u4E2D\u7684 Provider \u7528\u4E8E\u63D0\u4F9B\u6570\u636E\uFF0C\u4F46\u5176\u5B9E\u5B83\u8FD8\u6709\u4E00\u4E2A Consumer \u7EC4\u4EF6\u53EF\u4F9B\u6211\u4EEC\u6D88\u8D39\u6570\u636E

\u8FD9\u79CD\u65B9\u5F0F\u901A\u8FC7\u5728 Consumer \u7EC4\u4EF6\u4E2D\u7684 callback children \u6D88\u8D39\u6570\u636E

\`\`\`tsx
import { useState } from 'react'

import { Theme, ThemeContext } from './context'

const ContextProviderDemo2: React.FC = () => {
  const [theme] = useState<Theme>({ color: 'darkcyan', background: 'cyan' })

  return (
    <ThemeContext.Provider value={theme}>
      <ContextConsumerDemo />
    </ThemeContext.Provider>
  )
}

interface ConsumberComponentProps {
  theme: Theme
}
const ContextConsumerDemo: React.FC = () => {
  // \u6D88\u8D39\u6570\u636E\u7684\u771F\u6B63\u7EC4\u4EF6
  const ConsumberComponent: React.FC<ConsumberComponentProps> = (props) => {
    const { color, background } = props.theme

    return <div style={{ color, background }}>Context Consumber Component</div>
  }

  // \u901A\u8FC7\u5305\u88F9 Consumber \u7EC4\u4EF6\u83B7\u53D6\u6D88\u8D39\u6570\u636E\u7684\u80FD\u529B\uFF0C\u5C06\u6D88\u8D39\u6570\u636E\u4F5C\u4E3A\u7EC4\u4EF6 props \u4F20\u7ED9\u771F\u6B63\u6D88\u8D39\u6570\u636E\u7684\u7EC4\u4EF6
  return (
    <ThemeContext.Consumer>
      {(theme) => <ConsumberComponent theme={theme} />}
    </ThemeContext.Consumer>
  )
}

export { ContextProviderDemo }
\`\`\`

<DemoBlock>
  <ContextProviderDemo2 />
</DemoBlock>

\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u7684\u4F18\u70B9\u5728\u4E8E\u65E0\u9700\u7406\u4F1A\u662F\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u8FD8\u662F\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u6D88\u8D39\u6570\u636E\uFF0C\u76F4\u63A5\u4F7F\u7528 context Consumber \u7EC4\u4EF6\u5373\u53EF

### 1.3. \u52A8\u6001 context

\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u7684 Demo \u4E2D\u4F7F\u7528\u7684 context \u90FD\u662F\u9759\u6001\u7684\uFF0C\u90A3\u5982\u679C context \u9700\u8981\u662F\u52A8\u6001\u7684\u8BDD\u8981\u600E\u4E48\u5904\u7406\u5462\uFF1F\u6BD4\u5982\u6211\u4EEC\u6DFB\u52A0\u4E00\u4E2A\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u53EF\u4EE5\u6765\u56DE\u5207\u6362\u65E5\u95F4\u591C\u95F4\u6A21\u5F0F

\`\`\`tsx
import { useContext, useEffect, useState, memo } from 'react'

import { createLoggerWithScope } from '~/utils'

import { darkTheme, lightTheme, Theme, ThemeContext } from './context'

import s from './style.module.scss'

const logger = createLoggerWithScope('DynamicContextDemo')

const DynamicContextDemo: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  const handleToggleTheme = () => {
    if (theme === lightTheme) setTheme(darkTheme)
    else setTheme(lightTheme)
  }

  return (
    <div className={s.container}>
      <ThemeContext.Provider value={theme}>
        <Child />
      </ThemeContext.Provider>
      <button onClick={() => handleToggleTheme()}>toggle theme</button>
    </div>
  )
}

// \u901A\u8FC7 memo \u5904\u7406\u540E \u53EA\u8981 Child \u7EC4\u4EF6\u7684 props \u4E0D\u53D8\u5219 Child \u7EC4\u4EF6\u4E0D\u4F1A\u968F\u7740\u7236\u7EC4\u4EF6\u7684\u6E32\u67D3\u800C\u91CD\u65B0\u6E32\u67D3
// \u8FD9\u91CC\u662F\u4E3A\u4E86\u9A8C\u8BC1 Consumer \u7EC4\u4EF6\u7684\u66F4\u65B0\u5E76\u4E0D\u662F\u7531 Child \u7EC4\u4EF6\u7684\u66F4\u65B0\u5F15\u8D77\u7684
const Child: React.FC = memo(() => {
  // \u7528\u4E8E\u9A8C\u8BC1 Consumer \u66F4\u65B0\u662F\u5426\u662F\u7531 Child \u7EC4\u4EF6\u66F4\u65B0\u5F15\u8D77\u7684 \u800C\u662F\u7531 context API \u7684\u8FD0\u884C\u673A\u5236\u5F15\u8D77\u7684
  useEffect(() => {
    logger.log('Child \u7EC4\u4EF6\u6E32\u67D3')
  })

  return <Consumer />
})

const Consumer: React.FC = () => {
  const { color, background } = useContext(ThemeContext)
  return (
    <div style={{ color, background }} className={s.consumer}>
      Consumber
    </div>
  )
}

export { DynamicContextDemo }
\`\`\`

<DemoBlock>
  <DynamicContextDemo />
</DemoBlock>

\u8FD9\u91CC\u5DF2\u7ECF\u5BF9 Child \u7EC4\u4EF6\u7528 memo \u5904\u7406\u8FC7\u4E86\uFF0C\u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u6392\u9664 Consumer \u7EC4\u4EF6\u7684\u66F4\u65B0\u662F\u7531 Child \u7EC4\u4EF6\u66F4\u65B0\u5F15\u8D77\u7684\u8FD9\u4E00\u53EF\u80FD\u6027

\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236\u53F0\u67E5\u770B Child \u7EC4\u4EF6\u4E2D\u7684 \`useEffect\` \u662F\u5426\u6267\u884C\u6765\u9A8C\u8BC1\u8FD9\u4E00\u70B9

![\u52A8\u6001context\u6548\u679C](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E5%8A%A8%E6%80%81context%E6%95%88%E6%9E%9C.gif)

useEffect \u6CA1\u6267\u884C\uFF0C\u800C Consumer \u5374\u66F4\u65B0\u4E86\uFF0C\u8BF4\u660E\u662F\u7531 context API \u7684\u8FD0\u884C\u673A\u5236\u5F15\u8D77\u7684\u66F4\u65B0

\u9664\u4E86\u4F7F\u7528 memo \u5305\u88F9 Child \u7EC4\u4EF6\u5916\uFF0C\u8FD8\u6709\u53E6\u5916\u4E00\u79CD\u65B9\u5F0F\u7528\u4E8E\u89E3\u51B3\u8FD9\u91CC Child \u7EC4\u4EF6\u7684\u4E0D\u5FC5\u8981\u66F4\u65B0\u7684\u65B9\u5F0F\uFF0C\u90A3\u5C31\u662F\u4F7F\u7528 useMemo

\`\`\`tsx{12-17}
const DynamicContextDemo: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  const handleToggleTheme = () => {
    if (theme === lightTheme) setTheme(darkTheme)
    else setTheme(lightTheme)
  }

  return (
    <div className={s.container}>
      <ThemeContext.Provider value={theme}>
        {useMemo(
          () => (
            <Child />
          ),
          [],
        )}
      </ThemeContext.Provider>
      <button onClick={() => handleToggleTheme()}>toggle theme</button>
    </div>
  )
}
\`\`\`

### 1.4. displayName

\u901A\u8FC7 createContext \u521B\u5EFA\u7684 context \u5BF9\u8C61\u8FD8\u6709\u4E00\u4E2A displayName \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u7528\u4E8E\u5728 React Devtools \u4E2D\u8FDB\u884C\u5C55\u793A

\`\`\`ts
/** @description \u4E3B\u9898\u4E0A\u4E0B\u6587\u5BF9\u8C61 */
const ThemeContext = createContext<Theme>(defaultTheme)
ThemeContext.displayName = 'PlasticineThemeContext'
\`\`\`

![context\u7684displayName\u4F5C\u7528](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/context%E7%9A%84displayName%E4%BD%9C%E7%94%A8.jpg)

## 2. context \u9AD8\u9636\u7528\u6CD5

### 2.1. \u5D4C\u5957 context

\u5F53\u6211\u4EEC\u6709\u591A\u4E2A context \u9700\u8981\u88AB\u6D88\u8D39\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5D4C\u5957\u7ED3\u6784

\`\`\`tsx
import { useContext, useState } from 'react'

import {
  defaultI18n,
  defaultTheme,
  I18n,
  I18nContext,
  Theme,
  ThemeContext,
} from './context'

const NestedContextDemo: React.FC = () => {
  const [theme] = useState<Theme>(defaultTheme)
  const [i18n, setI18n] = useState<I18n>(defaultI18n)

  const handleChangeLanguage = () => {
    const { lang } = i18n

    if (lang === 'zh-CN') setI18n({ lang: 'en-US' })
    else setI18n({ lang: 'zh-CN' })
  }

  // \u5D4C\u5957\u4F7F\u7528\u591A\u4E2A context
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <I18nContext.Provider value={i18n}>
          <Consumer />
        </I18nContext.Provider>
      </ThemeContext.Provider>

      <button onClick={() => handleChangeLanguage()}>toggle language</button>
    </div>
  )
}

const Consumer: React.FC = () => {
  const { color, background } = useContext(ThemeContext)
  const { lang } = useContext(I18nContext)

  return (
    <div style={{ color, background }}>
      <p>
        {lang === 'zh-CN'
          ? '\u4F60\u597D\u4E16\u754C'
          : lang === 'en-US'
          ? 'Hello World'
          : 'unknown language'}
      </p>
    </div>
  )
}

export { NestedContextDemo }
\`\`\`

<DemoBlock>
  <NestedContextDemo />
</DemoBlock>

![\u5D4C\u5957context](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E5%B5%8C%E5%A5%97context.gif)
`;export{ye as content,pe as default,de as frontmatter,Fe as lastUpdatedTime,Ee as title,he as toc};
