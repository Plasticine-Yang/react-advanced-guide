var T=Object.defineProperty;var M=(s,l,c)=>l in s?T(s,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[l]=c;var a=(s,l,c)=>(M(s,typeof l!="symbol"?l+"":l,c),c);import{jsxs as n,jsx as e,Fragment as p}from"react/jsx-runtime";import{D as d}from"./index.6529e49c.js";import o,{forwardRef as B,useEffect as E,useRef as F,useState as D,useImperativeHandle as b}from"react";import{c as h}from"./scoped-log.b13f94b9.js";class u extends o.Component{render(){const{children:l}=this.props;return n("div",{children:[e("p",{children:"Child"}),l]})}}class x extends o.Component{constructor(){super(...arguments);a(this,"logger",h("RefDemo1"))}componentDidMount(){this.logger.log(this.refs)}render(){return n(p,{children:[e("div",{ref:"refDemo1DOM",children:"ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32\u83B7\u53D6 DOM \u5143\u7D20"}),e(u,{ref:"refDemo1Component",children:"ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B"})]})}}class O extends o.Component{constructor(){super(...arguments);a(this,"logger",h("RefDemo2"));a(this,"refDemo2DOM",null);a(this,"refDemo2Component",null)}componentDidMount(){this.logger.log(this.refDemo2DOM),this.logger.log(this.refDemo2Component)}render(){return n(p,{children:[e("div",{ref:c=>this.refDemo2DOM=c,children:"ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570\u83B7\u53D6 DOM \u5143\u7D20"}),e(u,{ref:c=>this.refDemo2Component=c,children:"ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B"})]})}}class w extends o.Component{constructor(){super(...arguments);a(this,"logger",h("RefDemo3"));a(this,"refDemo3DOM",o.createRef());a(this,"refDemo3Component",o.createRef())}componentDidMount(){this.logger.log(this.refDemo3DOM),this.logger.log(this.refDemo3Component)}render(){return n(p,{children:[e("div",{ref:this.refDemo3DOM,children:"ref \u5C5E\u6027\u4F20\u9012\u5BF9\u8C61\u83B7\u53D6 DOM \u5143\u7D20"}),e(u,{ref:this.refDemo3Component,children:"ref \u5C5E\u6027\u4F20\u9012\u5BF9\u8C61\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B"})]})}}const I=h("GrandFather"),H=s=>{const{grandRef:l}=s;return n(p,{children:[e("p",{children:"Child"}),e("div",{ref:l,children:"\u8981\u83B7\u53D6\u7684\u76EE\u6807\u5143\u7D20"})]})},W=B((s,l)=>e("div",{children:e(H,{grandRef:l})})),k=()=>{let s=null;return E(()=>{I.log(s)},[]),e("div",{children:e(W,{ref:l=>s=l})})},S=h("Foo");class L extends o.Component{render(){return e("div",{children:"Baz"})}}class P extends o.Component{constructor(){super(...arguments);a(this,"buttonEl",null);a(this,"bazInstance",null)}componentDidMount(){const{customRef:c}=this.props;c&&(c.current={bar:this,barButton:this.buttonEl,baz:this.bazInstance})}render(){return n(p,{children:[e("button",{ref:c=>this.buttonEl=c,children:"Bar button"}),e(L,{ref:c=>this.bazInstance=c})]})}}const _=B((s,l)=>e(P,{...s,customRef:l})),z=()=>{const s=F(null);return E(()=>{S.log(s.current)},[]),e(_,{ref:s})};class R extends o.Component{render(){return e("p",{children:"TestComponent"})}}const j=s=>{class l extends o.Component{render(){return n("div",{children:[e("p",{children:"WrapComponent"}),e(s,{})]})}}return l},Y=j(R),$=()=>{const s=h("RefHOCWithoutForwardRefDemo"),l=F(null);return E(()=>{s.log(l.current)},[]),e(Y,{ref:l})},G=s=>{class l extends o.Component{render(){const{forwardedRef:r}=this.props;return n("div",{children:[e("p",{children:"WrapComponent"}),e(s,{ref:r})]})}}return o.forwardRef((c,r)=>e(l,{forwardedRef:r,...c}))},U=G(R),X=()=>{const s=h("RefHOCWithForwardRefDemo"),l=F(null);return E(()=>{s.log(l.current)},[]),e(U,{ref:l})},q="_father_11nmx_1",J="_child_11nmx_11",K="_message-input-box_11nmx_18",y={father:q,child:J,messageInputBox:K};class Q extends o.Component{constructor(c){super(c);a(this,"state",{fatherToChildMessage:"",childToFatherMessage:""});a(this,"childRef",o.createRef());a(this,"handleChildToFather",c=>{this.setState(r=>({...r,childToFatherMessage:c}))});this.handleChildToFather=this.handleChildToFather.bind(this)}render(){const{fatherToChildMessage:c,childToFatherMessage:r}=this.state;return n("div",{className:y.father,children:[e("h3",{children:"\u7236\u7EC4\u4EF6"}),n("p",{children:["\u5B50\u7EC4\u4EF6\u5BF9\u6211\u8BF4\uFF1A",r]}),n("div",{className:y.messageInputBox,children:[n("section",{children:[e("label",{htmlFor:"to-father",children:"\u6211\u5BF9\u5B50\u7EC4\u4EF6\u8BF4\uFF1A"}),e("input",{type:"text",id:"to-child",onChange:t=>this.setState(i=>({...i,fatherToChildMessage:t.target.value}))})]}),e("button",{onClick:()=>{var t;return(t=this.childRef.current)==null?void 0:t.setFatherToChildMessage(c)},children:"\u53D1\u9001"})]}),e(V,{ref:this.childRef,onChildToFather:this.handleChildToFather})]})}}class V extends o.Component{constructor(){super(...arguments);a(this,"state",{fatherToChildMessage:"",childToFatherMessage:""})}setFatherToChildMessage(c){this.setState(r=>({...r,fatherToChildMessage:c}))}render(){const{onChildToFather:c}=this.props,{fatherToChildMessage:r,childToFatherMessage:t}=this.state;return n("div",{className:y.child,children:[e("h3",{children:"\u5B50\u7EC4\u4EF6"}),n("p",{children:["\u7236\u7EC4\u4EF6\u5BF9\u6211\u8BF4\uFF1A",r]}),n("div",{className:y.messageInputBox,children:[n("section",{children:[e("label",{htmlFor:"to-father",children:"\u6211\u5BF9\u7236\u7EC4\u4EF6\u8BF4\uFF1A"}),e("input",{type:"text",id:"to-father",onChange:i=>this.setState(m=>({...m,childToFatherMessage:i.target.value}))})]}),e("button",{onClick:()=>c(t),children:"\u53D1\u9001"})]})]})}}const Z="_father_11nmx_1",ll="_child_11nmx_11",el="_message-input-box_11nmx_18",C={father:Z,child:ll,messageInputBox:el},nl=()=>{const[s,l]=D(""),[c,r]=D(""),t=F(null);return n("div",{className:C.father,children:[e("h3",{children:"\u7236\u7EC4\u4EF6"}),n("p",{children:["\u5B50\u7EC4\u4EF6\u5BF9\u6211\u8BF4\uFF1A",c]}),n("div",{className:C.messageInputBox,children:[n("section",{children:[e("label",{htmlFor:"to-father",children:"\u6211\u5BF9\u5B50\u7EC4\u4EF6\u8BF4\uFF1A"}),e("input",{type:"text",id:"to-child",onChange:i=>l(i.target.value)})]}),e("button",{onClick:()=>{var i;return(i=t.current)==null?void 0:i.setFatherToChildMessage(s)},children:"\u53D1\u9001"})]}),e(sl,{ref:t,onChildToFather:i=>r(i)})]})},sl=B((s,l)=>{const{onChildToFather:c}=s,[r,t]=D(""),[i,m]=D("");return b(l,()=>({setFatherToChildMessage:t})),n("div",{className:C.child,children:[e("h3",{children:"\u5B50\u7EC4\u4EF6"}),n("p",{children:["\u7236\u7EC4\u4EF6\u5BF9\u6211\u8BF4\uFF1A",r]}),n("div",{className:C.messageInputBox,children:[n("section",{children:[e("label",{htmlFor:"to-father",children:"\u6211\u5BF9\u7236\u7EC4\u4EF6\u8BF4\uFF1A"}),e("input",{type:"text",id:"to-father",onChange:v=>m(v.target.value)})]}),e("button",{onClick:()=>c(i),children:"\u53D1\u9001"})]})]})}),cl="_container_oorws_1",rl="_list_oorws_6",ol="_item_oorws_11",f={container:cl,list:rl,item:ol},A=h("CacheDataWithRefDemo"),N=[{id:1,name:"coding"},{id:2,name:"eating"},{id:3,name:"sleeping"},{id:4,name:"playing"}],al=()=>{const s=F(N[0]);return E(()=>{A.log("\u68C0\u6D4B\u7EC4\u4EF6\u662F\u5426\u6709\u66F4\u65B0")}),n("div",{className:f.container,children:[e("div",{className:f.list,children:N.map(l=>e("div",{className:f.item,onClick:()=>s.current=l,children:e("p",{children:l.name})},l.id))}),e("button",{onClick:()=>A.log(s.current),children:"\u63A7\u5236\u53F0\u8F93\u51FA\u6700\u65B0\u7684 activeTodoItem"})]})},El=void 0,Fl=[{id:"1-ref-\u7684\u7406\u89E3\u4E0E\u4F7F\u7528",text:"1. Ref \u7684\u7406\u89E3\u4E0E\u4F7F\u7528",depth:2},{id:"11-ref-\u5BF9\u8C61\u7684\u521B\u5EFA",text:"1.1. Ref \u5BF9\u8C61\u7684\u521B\u5EFA",depth:3},{id:"111-createref",text:"1.1.1. createRef",depth:4},{id:"112-useref",text:"1.1.2. useRef",depth:4},{id:"12-react-\u5BF9\u6807\u7B7E\u4E2D-ref-\u5C5E\u6027\u7684\u5904\u7406",text:"1.2. React \u5BF9\u6807\u7B7E\u4E2D ref \u5C5E\u6027\u7684\u5904\u7406",depth:3},{id:"121-ref-\u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32",text:"1.2.1. ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32",depth:4},{id:"122-ref-\u5C5E\u6027\u4F20\u9012\u51FD\u6570",text:"1.2.2. ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570",depth:4},{id:"123-ref-\u5C5E\u6027\u4F20\u9012\u5BF9\u8C61",text:"1.2.3. ref \u5C5E\u6027\u4F20\u9012\u5BF9\u8C61",depth:4},{id:"2-ref-\u9AD8\u9636\u7528\u6CD5",text:"2. ref \u9AD8\u9636\u7528\u6CD5",depth:2},{id:"21-forwardref-\u8F6C\u53D1-ref",text:"2.1. forwardRef \u8F6C\u53D1 ref",depth:3},{id:"211-\u8DE8\u5C42\u7EA7\u83B7\u53D6",text:"2.1.1. \u8DE8\u5C42\u7EA7\u83B7\u53D6",depth:4},{id:"212-\u5408\u5E76\u8F6C\u53D1\u81EA\u5B9A\u4E49-ref",text:"2.1.2. \u5408\u5E76\u8F6C\u53D1\u81EA\u5B9A\u4E49 ref",depth:4},{id:"213-\u9AD8\u9636\u7EC4\u4EF6\u8F6C\u53D1-ref",text:"2.1.3. \u9AD8\u9636\u7EC4\u4EF6\u8F6C\u53D1 ref",depth:4},{id:"22-ref-\u5B9E\u73B0\u7EC4\u4EF6\u901A\u4FE1",text:"2.2. ref \u5B9E\u73B0\u7EC4\u4EF6\u901A\u4FE1",depth:3},{id:"221-\u7C7B\u7EC4\u4EF6-ref-\u66B4\u9732\u7EC4\u4EF6\u5B9E\u4F8B",text:"2.2.1. \u7C7B\u7EC4\u4EF6 ref \u66B4\u9732\u7EC4\u4EF6\u5B9E\u4F8B",depth:4},{id:"222-\u51FD\u6570\u7EC4\u4EF6-ref-\u66B4\u9732\u6307\u5B9A\u65B9\u6CD5",text:"2.2.2. \u51FD\u6570\u7EC4\u4EF6 ref \u66B4\u9732\u6307\u5B9A\u65B9\u6CD5",depth:4},{id:"23-\u51FD\u6570\u7EC4\u4EF6\u7F13\u5B58\u6570\u636E",text:"2.3. \u51FD\u6570\u7EC4\u4EF6\u7F13\u5B58\u6570\u636E",depth:3}],Dl="\u591A\u529F\u80FD Ref";function g(s){const l=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ol:"ol",li:"li",code:"code",h3:"h3",h4:"h4",div:"div",button:"button",span:"span",pre:"pre",img:"img"},s.components);return n(p,{children:[n(l.h1,{id:"\u591A\u529F\u80FD-ref",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u591A\u529F\u80FD-ref",children:"#"}),"\u591A\u529F\u80FD Ref"]}),`
`,n(l.h2,{id:"1-ref-\u7684\u7406\u89E3\u4E0E\u4F7F\u7528",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#1-ref-\u7684\u7406\u89E3\u4E0E\u4F7F\u7528",children:"#"}),"1. Ref \u7684\u7406\u89E3\u4E0E\u4F7F\u7528"]}),`
`,e(l.p,{children:"\u5BF9\u4E8E Ref \u7684\u7406\u89E3\uFF0C\u8981\u4ECE\u4E24\u4E2A\u89D2\u5EA6\u53BB\u5206\u6790\uFF1A"}),`
`,n(l.ol,{children:[`
`,n(l.li,{children:["Ref \u5BF9\u8C61\u7684\u521B\u5EFA\uFF1A\u4F7F\u7528 ",e(l.code,{children:"createRef"})," \u6216 ",e(l.code,{children:"useRef"})," \u521B\u5EFA Ref \u5BF9\u8C61"]}),`
`,e(l.li,{children:"React \u672C\u8EAB\u5BF9 Ref \u7684\u5904\u7406\uFF1A\u5BF9\u4E8E\u6807\u7B7E\u4E2D\u7684 ref \u5C5E\u6027\uFF0CReact \u662F\u5982\u4F55\u5904\u7406\u7684"}),`
`]}),`
`,n(l.h3,{id:"11-ref-\u5BF9\u8C61\u7684\u521B\u5EFA",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#11-ref-\u5BF9\u8C61\u7684\u521B\u5EFA",children:"#"}),"1.1. Ref \u5BF9\u8C61\u7684\u521B\u5EFA"]}),`
`,n(l.h4,{id:"111-createref",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#111-createref",children:"#"}),"1.1.1. createRef"]}),`
`,n(l.p,{children:["\u5728\u7C7B\u7EC4\u4EF6\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u901A\u8FC7 ",e(l.code,{children:"createRef"})," \u53BB\u521B\u5EFA\u4E00\u4E2A Ref \u5BF9\u8C61\uFF0C\u5176\u4F1A\u88AB\u4FDD\u5B58\u5728\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u4E0A\uFF0C\u5B83\u7684\u5B9E\u73B0\u5F88\u7B80\u5355"]}),`
`,e(l.p,{children:e(l.code,{children:"packages/react/src/ReactCreateRef.js"})}),`
`,n(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"js"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"function"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"createRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" RefObject "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"refObject"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"current"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"null"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"refObject"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u5C31\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u5305\u542B ",e(l.code,{children:"current"})," \u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u4EC5\u6B64\u800C\u5DF2"]}),`
`,n(l.h4,{id:"112-useref",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#112-useref",children:"#"}),"1.1.2. useRef"]}),`
`,n(l.p,{children:["\u8FD9\u4E5F\u5C31\u610F\u5473\u7740\u6211\u4EEC\u4E0D\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528 ",e(l.code,{children:"createRef"}),"\uFF0C\u56E0\u4E3A\u6BCF\u6B21\u51FD\u6570\u7EC4\u4EF6\u6E32\u67D3\u90FD\u662F\u4E00\u6B21\u65B0\u7684\u51FD\u6570\u6267\u884C\uFF0C\u6BCF\u6B21\u6267\u884C ",e(l.code,{children:"createRef"})," \u5F97\u5230\u7684\u90FD\u662F\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u65E0\u6CD5\u4FDD\u7559\u5176\u539F\u6765\u7684\u5F15\u7528"]}),`
`,n(l.p,{children:["\u6240\u4EE5\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u4F7F\u7528 ",e(l.code,{children:"useRef"})," \u521B\u5EFA Ref \u5BF9\u8C61\uFF0CReact \u4F1A\u5C06 useRef \u548C\u51FD\u6570\u7EC4\u4EF6\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u5173\u8054\uFF0C\u5C06 ",e(l.code,{children:"useRef"})," \u521B\u5EFA\u7684 ref \u5BF9\u8C61\u6302\u8F7D\u5230\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u4E0A"]}),`
`,e(l.p,{children:"\u8FD9\u6837\u4E00\u6765\u6BCF\u6B21\u51FD\u6570\u7EC4\u4EF6\u6267\u884C\uFF0C\u53EA\u8981\u51FD\u6570\u7EC4\u4EF6\u4E0D\u88AB\u9500\u6BC1\uFF0C\u90A3\u4E48\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u5B9E\u4F8B\u4E5F\u4F1A\u4E00\u76F4\u5B58\u5728\uFF0C\u6240\u4EE5 ref \u4E5F\u80FD\u591F\u88AB\u4FDD\u7559\u4E0B\u6765"}),`
`,n(l.h3,{id:"12-react-\u5BF9\u6807\u7B7E\u4E2D-ref-\u5C5E\u6027\u7684\u5904\u7406",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#12-react-\u5BF9\u6807\u7B7E\u4E2D-ref-\u5C5E\u6027\u7684\u5904\u7406",children:"#"}),"1.2. React \u5BF9\u6807\u7B7E\u4E2D ref \u5C5E\u6027\u7684\u5904\u7406"]}),`
`,e(l.p,{children:"\u9996\u5148\u8981\u660E\u786E\u4E00\u4E2A\u7ED3\u8BBA\uFF0C\u5728 React \u4E2D\u83B7\u53D6 DOM \u5143\u7D20\u6216\u8005\u7EC4\u4EF6\u5B9E\u4F8B\u5E76\u4E0D\u662F\u53EA\u80FD\u901A\u8FC7 ref \u5BF9\u8C61\u83B7\u53D6\uFF01\uFF01\uFF01"}),`
`,n(l.p,{children:["\u4E5F\u5C31\u662F\u8BF4\u5E76\u4E0D\u662F\u53EA\u80FD\u901A\u8FC7\u5148\u8C03\u7528 ",e(l.code,{children:"createRef"})," \u521B\u5EFA ref \u5BF9\u8C61\uFF0C\u7136\u540E\u5C06\u5B83\u8D4B\u503C\u5230\u8981\u83B7\u53D6\u7684\u5143\u7D20\u6216\u7EC4\u4EF6\u5B9E\u4F8B\u7684 ref \u5C5E\u6027\u4E0A\uFF0C\u5B9E\u9645\u4E0A\u8FD8\u6709\u522B\u7684\u65B9\u5F0F"]}),`
`,n(l.div,{className:"island-directive tip",children:[e(l.p,{className:"island-directive-title",children:"TIP"}),e(l.div,{className:"island-directive-content",children:n(l.p,{children:["\u53EA\u6709\u7C7B\u7EC4\u4EF6\u624D\u6709\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B\u8FD9\u4E00\u8BF4\u6CD5\uFF0C\u51FD\u6570\u7EC4\u4EF6\u6CA1\u6709\u5B9E\u4F8B\uFF0C\u4E0D\u80FD\u88AB ref \u6807\u8BB0\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7 ",e(l.code,{children:"forwardRef"})," \u7ED3\u5408 ",e(l.code,{children:"useImperativeHandle"})," \u7ED9\u51FD\u6570\u7EC4\u4EF6\u8D4B\u4E88 ref \u6807\u8BB0\u7684"]})})]}),`
`,n(l.h4,{id:"121-ref-\u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#121-ref-\u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32",children:"#"}),"1.2.1. ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32"]}),`
`,n(l.p,{children:["\u5F53\u6211\u4EEC\u7ED9\u5143\u7D20\u6216\u7C7B\u7EC4\u4EF6\u6807\u7B7E\u4E2D\u7684 ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32\u65F6\uFF0C\u80FD\u591F\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u7684 ",e(l.code,{children:"this.refs"})," \u4E2D\u8BBF\u95EE\u5230"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PropsWithChildren"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"children"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"Child"}),e(l.span,{style:{color:"#81A1C1"},children:"</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"children"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"RefDemo1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  logger "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"createLoggerWithScope"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"RefDemo1"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"componentDidMount"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"void"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"refs"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"refDemo1DOM"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#81A1C1"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32\u83B7\u53D6 DOM \u5143\u7D20"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"refDemo1Component"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#81A1C1"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B"}),e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(d,{children:e(x,{})}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/ref%E5%B1%9E%E6%80%A7%E4%BC%A0%E9%80%92%E5%AD%97%E7%AC%A6%E4%B8%B2.jpg",alt:"ref\u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32"})}),`
`,n(l.div,{className:"island-directive warning",children:[e(l.p,{className:"island-directive-title",children:"WARNING"}),e(l.div,{className:"island-directive-content",children:e(l.p,{children:"\u8FD9\u79CD\u65B9\u5F0F\u5DF2\u7ECF\u88AB React \u5B98\u65B9\u5E9F\u5F03\uFF0C\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528"})})]}),`
`,n(l.h4,{id:"122-ref-\u5C5E\u6027\u4F20\u9012\u51FD\u6570",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#122-ref-\u5C5E\u6027\u4F20\u9012\u51FD\u6570",children:"#"}),"1.2.2. ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570"]}),`
`,e(l.p,{children:"ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570\u65F6\uFF0C\u4F1A\u5728 commit \u9636\u6BB5\u521B\u5EFA\u771F\u5B9E DOM \u65F6\u6267\u884C ref \u6307\u5B9A\u7684\u51FD\u6570\uFF0C\u5E76\u5C06\u5143\u7D20\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165\uFF0C\u6B64\u65F6\u6211\u4EEC\u5C31\u53EF\u4EE5\u5229\u7528\u5B83\u8FDB\u884C\u8D4B\u503C\u4EE5\u83B7\u53D6 DOM \u5143\u7D20\u6216\u7EC4\u4EF6\u5B9E\u4F8B"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"RefDemo2"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  logger "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"createLoggerWithScope"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"RefDemo2"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  refDemo2DOM"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"HTMLElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"|"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"null"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"null"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  refDemo2Component"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"|"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"null"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"null"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"componentDidMount"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"void"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"refDemo2DOM"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"refDemo2Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"el"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"refDemo2DOM"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"el"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"          ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570\u83B7\u53D6 DOM \u5143\u7D20"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"child"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"refDemo2Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"          ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(d,{children:e(O,{})}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/ref%E5%B1%9E%E6%80%A7%E4%BC%A0%E9%80%92%E5%87%BD%E6%95%B0.jpg",alt:"ref\u5C5E\u6027\u4F20\u9012\u51FD\u6570"})}),`
`,n(l.h4,{id:"123-ref-\u5C5E\u6027\u4F20\u9012\u5BF9\u8C61",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#123-ref-\u5C5E\u6027\u4F20\u9012\u5BF9\u8C61",children:"#"}),"1.2.3. ref \u5C5E\u6027\u4F20\u9012\u5BF9\u8C61"]}),`
`,n(l.p,{children:["\u8FD9\u79CD\u65B9\u5F0F\u5C31\u662F\u6211\u4EEC\u6700\u5E38\u7528\u7684\u65B9\u5F0F\u4E86\uFF0C\u4F7F\u7528 ",e(l.code,{children:"createRef"})," \u6216\u8005 ",e(l.code,{children:"useRef"})," \u521B\u5EFA Ref \u5BF9\u8C61\uFF0C\u5E76\u5C06\u5176\u4F20\u7ED9\u6807\u7B7E\u7684 ref \u5C5E\u6027\u5373\u53EF"]}),`
`,n(l.p,{children:["\u8FD9\u79CD\u65B9\u5F0F\u83B7\u53D6\u5230\u7684 ref \u9700\u8981\u5148\u8C03\u7528 ",e(l.code,{children:"current"})," \u5C5E\u6027\u624D\u80FD\u83B7\u53D6\u5230\u5BF9\u5E94\u7684 DOM \u5143\u7D20\u6216\u7EC4\u4EF6\u5B9E\u4F8B"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" ref \u5C5E\u6027\u4F20\u9012\u5BF9\u8C61 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"RefDemo3"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  logger "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"createLoggerWithScope"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"RefDemo3"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  refDemo3DOM "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"createRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"HTMLDivElement"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  refDemo3Component "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"createRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"componentDidMount"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"void"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"refDemo3DOM"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"refDemo3Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"refDemo3DOM"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"ref \u5C5E\u6027\u4F20\u9012\u5BF9\u8C61\u83B7\u53D6 DOM \u5143\u7D20"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"refDemo3Component"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"          ref \u5C5E\u6027\u4F20\u9012\u5BF9\u8C61\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(d,{children:e(w,{})}),`
`,n(l.h2,{id:"2-ref-\u9AD8\u9636\u7528\u6CD5",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#2-ref-\u9AD8\u9636\u7528\u6CD5",children:"#"}),"2. ref \u9AD8\u9636\u7528\u6CD5"]}),`
`,n(l.h3,{id:"21-forwardref-\u8F6C\u53D1-ref",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#21-forwardref-\u8F6C\u53D1-ref",children:"#"}),"2.1. forwardRef \u8F6C\u53D1 ref"]}),`
`,n(l.h4,{id:"211-\u8DE8\u5C42\u7EA7\u83B7\u53D6",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#211-\u8DE8\u5C42\u7EA7\u83B7\u53D6",children:"#"}),"2.1.1. \u8DE8\u5C42\u7EA7\u83B7\u53D6"]}),`
`,e(l.p,{children:"\u60F3\u8981\u5728\u7237\u7EC4\u4EF6\u4E2D\u901A\u8FC7\u5728\u5B50\u7EC4\u4EF6\u4E2D\u4F20\u9012 ref \u83B7\u53D6\u5230\u5B59\u7EC4\u4EF6\u7684\u67D0\u4E2A\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F\u5728\u7237\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u5230\u4E86\u5B59\u7EC4\u4EF6\u7684\u5143\u7D20\uFF0C\u662F\u4E00\u79CD\u8DE8\u5C42\u7EA7\u83B7\u53D6"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u5B59\u7EC4\u4EF6 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"Child"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#ECEFF4"},children:"<{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" grandRef"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"LegacyRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"HTMLDivElement"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"grandRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"Child"}),e(l.span,{style:{color:"#81A1C1"},children:"</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"grandRef"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u8981\u83B7\u53D6\u7684\u76EE\u6807\u5143\u7D20"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:"/**"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:" * "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u7236\u7EC4\u4EF6"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:" *"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:" * \u7B2C\u4E00\u4E2A\u6CDB\u578B\u53C2\u6570\u662F ref \u7684\u7C7B\u578B"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:" * \u7B2C\u4E8C\u4E2A\u6CDB\u578B\u53C2\u6570\u662F props \u7684\u7C7B\u578B"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:" */"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"Father"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"forwardRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"HTMLDivElement"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"ref"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"grandRef"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u7237\u7EC4\u4EF6 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"GrandFather"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"let"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"grandChildDiv"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"HTMLDivElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"|"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"null"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"null"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"useEffect"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"grandChildDiv"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" [])"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Father"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"el"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#D8DEE9"},children:"grandChildDiv"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"el"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(d,{children:e(k,{})}),`
`,n(l.h4,{id:"212-\u5408\u5E76\u8F6C\u53D1\u81EA\u5B9A\u4E49-ref",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#212-\u5408\u5E76\u8F6C\u53D1\u81EA\u5B9A\u4E49-ref",children:"#"}),"2.1.2. \u5408\u5E76\u8F6C\u53D1\u81EA\u5B9A\u4E49 ref"]}),`
`,e(l.p,{children:"forwardRef \u4E0D\u4EC5\u53EF\u4EE5\u8F6C\u53D1 ref \u83B7\u53D6 DOM \u5143\u7D20\u548C\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u8FD8\u53EF\u4EE5\u8F6C\u53D1\u5408\u5E76\u540E\u7684\u81EA\u5B9A\u4E49 ref"}),`
`,e(l.p,{children:"\u4EC0\u4E48\u662F\u201C\u5408\u5E76\u540E\u7684\u81EA\u5B9A\u4E49 ref\u201D\u5462\uFF1F\u901A\u8FC7\u4E00\u4E2A\u573A\u666F\u6765\u770B\u770B\u5C31\u660E\u767D\u4E86"}),`
`,n(l.div,{className:"island-directive info",children:[e(l.p,{className:"island-directive-title",children:"\u573A\u666F"}),n(l.div,{className:"island-directive-content",children:[e(l.p,{children:"\u901A\u8FC7\u7ED9 Foo \u7EC4\u4EF6\u7ED1\u5B9A ref\uFF0C\u83B7\u53D6\u591A\u4E2A\u5185\u5BB9\uFF0C\u5305\u62EC\uFF1A"}),n(l.ol,{children:[`
`,e(l.li,{children:"\u5B50\u7EC4\u4EF6 Bar \u7684\u7EC4\u4EF6\u5B9E\u4F8B"}),`
`,e(l.li,{children:"Bar \u7EC4\u4EF6\u4E2D\u7684 DOM \u5143\u7D20 button"}),`
`,e(l.li,{children:"\u5B59\u7EC4\u4EF6 Baz \u7684\u7EC4\u4EF6\u5B9E\u4F8B"}),`
`]})]})]}),`
`,e(l.p,{children:"\u8FD9\u79CD\u5728\u4E00\u4E2A ref \u91CC\u80FD\u591F\u8BBF\u95EE\u591A\u4E2A\u5143\u7D20\u548C\u5B9E\u4F8B\u7684\u5C31\u662F\u201C\u5408\u5E76\u540E\u7684\u81EA\u5B9A\u4E49 ref\u201D"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u81EA\u5B9A\u4E49 ref \u7684\u7C7B\u578B */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"CustomRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  bar"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Bar"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  barButton"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"HTMLButtonElement"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  baz"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Baz"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Baz"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"Baz"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Bar"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"<{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  customRef"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ForwardedRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"CustomRef"}),e(l.span,{style:{color:"#ECEFF4"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  buttonEl"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"HTMLButtonElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"|"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"null"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"null"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  bazInstance"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Baz"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"|"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"null"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"null"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"componentDidMount"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"void"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"customRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"if"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#D8DEE9"},children:"customRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:") "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:";"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"customRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"as"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"MutableRefObject"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"CustomRef"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"current"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#D8DEE9"},children:"bar"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#D8DEE9"},children:"barButton"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"buttonEl"}),e(l.span,{style:{color:"#81A1C1"},children:"!"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#D8DEE9"},children:"baz"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"bazInstance"}),e(l.span,{style:{color:"#81A1C1"},children:"!"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"el"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"buttonEl"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"el"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"Bar button"}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Baz"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"instance"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"bazInstance"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"instance"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"FowardRefBar"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"forwardRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"CustomRef"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"ref"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Bar"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"{..."}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"customRef"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"))"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"Foo"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"customRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"CustomRef"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"null"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"useEffect"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"customRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"current"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" [])"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"FowardRefBar"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"customRef"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(d,{children:e(z,{})}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91%E8%87%AA%E5%AE%9A%E4%B9%89ref.jpg",alt:"\u5408\u5E76\u8F6C\u53D1\u81EA\u5B9A\u4E49ref"})}),`
`,n(l.h4,{id:"213-\u9AD8\u9636\u7EC4\u4EF6\u8F6C\u53D1-ref",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#213-\u9AD8\u9636\u7EC4\u4EF6\u8F6C\u53D1-ref",children:"#"}),"2.1.3. \u9AD8\u9636\u7EC4\u4EF6\u8F6C\u53D1 ref"]}),`
`,e(l.p,{children:"\u5982\u679C\u6211\u4EEC\u5728\u9AD8\u9636\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528 ref\uFF0C\u5B83\u4F1A\u76F4\u63A5\u6307\u5411 WrapComponent"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"TestComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"TestComponent"}),e(l.span,{style:{color:"#81A1C1"},children:"</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u4E0D\u4F7F\u7528 forwardRef \u8F6C\u53D1 HOC \u4E2D\u7684 ref */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"HOCWithoutForwardRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"Component"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"typeof"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"WrapComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"WrapComponent"}),e(l.span,{style:{color:"#81A1C1"},children:"</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"      )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"WrapComponent"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"HOCComponent1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"HOCWithoutForwardRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"TestComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"RefHOCWithoutForwardRefDemo"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"createLoggerWithScope"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"RefHOCWithoutForwardRefDemo"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"wrapRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"null"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"useEffect"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// wrapRef \u6307\u5411\u7684\u662F WrapComponent \u5B9E\u4F8B \u800C\u4E0D\u662F HOCComponent1 \u5B9E\u4F8B"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"wrapRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"current"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" [])"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"HOCComponent1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"wrapRef"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(d,{children:e($,{})}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/HOC%E4%B8%AD%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8ref.jpg",alt:"HOC\u4E2D\u76F4\u63A5\u4F7F\u7528ref"})}),`
`,n(l.p,{children:["\u5982\u679C\u6211\u4EEC\u5E0C\u671B ",e(l.code,{children:"ref"})," \u6307\u5411\u7684\u662F\u88AB\u5305\u88F9\u7684 TestComponent \u800C\u4E0D\u662F HOC \u5185\u90E8\u7684 WrapComponent \u65F6\u8BE5\u600E\u4E48\u529E\u5462\uFF1F"]}),`
`,e(l.p,{children:"\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u7528 forwardRef \u8FDB\u884C\u8F6C\u53D1\u4E86"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" HOC \u4E2D\u4F7F\u7528 forwardRef \u8F6C\u53D1 ref */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"HOCWithForwardRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"Component"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"typeof"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"WrapComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"<{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    forwardedRef"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"LegacyRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"any"}),e(l.span,{style:{color:"#ECEFF4"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"forwardedRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"WrapComponent"}),e(l.span,{style:{color:"#81A1C1"},children:"</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"forwardedRef"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"      )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"forwardRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"ref"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"WrapComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"forwardedRef"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"{..."}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  ))"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"HOCComponent2"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"HOCWithForwardRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"TestComponent"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"RefHOCWithForwardRefDemo"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"createLoggerWithScope"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"RefHOCWithForwardRefDemo"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"hocComponent2Ref"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"null"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"useEffect"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// hocComponent2Ref \u6307\u5411\u7684\u662F HOCComponent2 \u5B9E\u4F8B"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"hocComponent2Ref"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"current"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" [])"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"HOCComponent2"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"hocComponent2Ref"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(d,{children:e(X,{})}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/HOC%E4%B8%AD%E4%BD%BF%E7%94%A8forwardRef%E8%BD%AC%E5%8F%91ref.jpg",alt:"HOC\u4E2D\u4F7F\u7528forwardRef\u8F6C\u53D1ref"})}),`
`,n(l.h3,{id:"22-ref-\u5B9E\u73B0\u7EC4\u4EF6\u901A\u4FE1",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#22-ref-\u5B9E\u73B0\u7EC4\u4EF6\u901A\u4FE1",children:"#"}),"2.2. ref \u5B9E\u73B0\u7EC4\u4EF6\u901A\u4FE1"]}),`
`,e(l.p,{children:"\u4E00\u822C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7236\u7EC4\u4EF6\u6539\u53D8\u5B50\u7EC4\u4EF6 props \u7684\u65B9\u5F0F\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u66F4\u65B0\u6E32\u67D3\u5B8C\u6210\u7EC4\u4EF6\u95F4\u901A\u4FE1"}),`
`,e(l.p,{children:"\u4F46\u5982\u679C\u6211\u4EEC\u4E0D\u5E0C\u671B\u901A\u8FC7\u8FD9\u79CD\u6539\u53D8\u5B50\u7EC4\u4EF6 props \u7684\u65B9\u5F0F\u7684\u8BDD\u8FD8\u80FD\u6709\u522B\u7684\u529E\u6CD5\u5417\uFF1F"}),`
`,e(l.p,{children:"\u53EF\u4EE5\u901A\u8FC7 ref \u83B7\u53D6\u5B50\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u7136\u540E\u5B50\u7EC4\u4EF6\u66B4\u9732\u51FA\u901A\u4FE1\u7684\u65B9\u6CD5\uFF0C\u7236\u7EC4\u4EF6\u8C03\u7528\u8BE5\u65B9\u6CD5\u5373\u53EF\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u66F4\u65B0\u6E32\u67D3"}),`
`,n(l.p,{children:["\u5BF9\u4E8E\u51FD\u6570\u7EC4\u4EF6\uFF0C\u7531\u4E8E\u5176\u4E0D\u5B58\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u8FD9\u6837\u7684\u8BF4\u6CD5\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",e(l.code,{children:"useImperativeHandle"})," \u8FD9\u4E2A hook \u6765\u6307\u5B9A ref \u5F15\u7528\u65F6\u5F97\u5230\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4E0B\u9762\u6211\u4EEC\u5206\u522B\u7528\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u90FD\u5B9E\u73B0\u4E00\u904D"]}),`
`,n(l.h4,{id:"221-\u7C7B\u7EC4\u4EF6-ref-\u66B4\u9732\u7EC4\u4EF6\u5B9E\u4F8B",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#221-\u7C7B\u7EC4\u4EF6-ref-\u66B4\u9732\u7EC4\u4EF6\u5B9E\u4F8B",children:"#"}),"2.2.1. \u7C7B\u7EC4\u4EF6 ref \u66B4\u9732\u7EC4\u4EF6\u5B9E\u4F8B"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:"/**"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:" * \u7236 -> \u5B50 \u4F7F\u7528 ref"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:" * \u5B50 -> \u7236 \u4F7F\u7528 props \u56DE\u8C03"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:" */"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoFather"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"{},"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoFatherState"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoFatherState"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherToChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"''"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"childToFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"''"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  childRef "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"createRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoChild"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u63D0\u4F9B\u7ED9\u5B50\u7EC4\u4EF6\u4FEE\u6539\u7236\u7EC4\u4EF6\u4E2D\u7684\u72B6\u6001 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"handleChildToFather"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"..."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"childToFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"constructor"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{})"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"super"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"handleChildToFather"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"handleChildToFather"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"bind"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherToChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"childToFatherMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"father"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<h3>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u7236\u7EC4\u4EF6"}),e(l.span,{style:{color:"#81A1C1"},children:"</h3>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u5B50\u7EC4\u4EF6\u5BF9\u6211\u8BF4\uFF1A"}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"childToFatherMessage"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"messageInputBox"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<section>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#81A1C1"},children:"<label"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"htmlFor"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"to-father"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#81A1C1"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u6211\u5BF9\u5B50\u7EC4\u4EF6\u8BF4\uFF1A"}),e(l.span,{style:{color:"#81A1C1"},children:"</label>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#81A1C1"},children:"<input"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#8FBCBB"},children:"type"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"text"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#8FBCBB"},children:"id"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"to-child"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#8FBCBB"},children:"onChange"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"                  "}),e(l.span,{style:{color:"#81A1C1"},children:"..."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"                  "}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherToChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"target"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"value"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"</section>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u7236 -> \u5B50 -- \u4F7F\u7528 ref \u5B8C\u6210\u7EC4\u4EF6\u901A\u4FE1 */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"childRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"current"}),e(l.span,{style:{color:"#ECEFF4"},children:"?."}),e(l.span,{style:{color:"#88C0D0"},children:"setFatherToChildMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherToChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"              )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"            \u53D1\u9001"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoChild"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"childRef"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"onChildToFather"}),e(l.span,{style:{color:"#81A1C1"},children:"={this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"handleChildToFather"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoChildProps"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"onChildToFather"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"void"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:"// \u5B50\u7EC4\u4EF6\u81EA\u5DF1\u7EF4\u62A4\u72B6\u6001 \u4E0D\u4F9D\u8D56\u4E8E\u7236\u7EC4\u4EF6 props"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoChildState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  fatherToChildMessage"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  childToFatherMessage"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoChild"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoChildProps"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoChildState"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoChildState"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherToChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"''"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"childToFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"''"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u4F7F\u7528\u7684 API -- \u4FEE\u6539\u7236\u5230\u5B50\u7684\u6D88\u606F fatherToChildMessage */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"setFatherToChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"..."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherToChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" onChildToFather"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"emitChildToFather"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherToChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"childToFatherMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"child"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<h3>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u5B50\u7EC4\u4EF6"}),e(l.span,{style:{color:"#81A1C1"},children:"</h3>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u7236\u7EC4\u4EF6\u5BF9\u6211\u8BF4\uFF1A"}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherToChildMessage"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"messageInputBox"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<section>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#81A1C1"},children:"<label"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"htmlFor"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"to-father"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#81A1C1"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u6211\u5BF9\u7236\u7EC4\u4EF6\u8BF4\uFF1A"}),e(l.span,{style:{color:"#81A1C1"},children:"</label>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#81A1C1"},children:"<input"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#8FBCBB"},children:"type"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"text"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#8FBCBB"},children:"id"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"to-father"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#8FBCBB"},children:"onChange"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"                  "}),e(l.span,{style:{color:"#81A1C1"},children:"..."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"                  "}),e(l.span,{style:{color:"#D8DEE9"},children:"childToFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"target"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"value"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"</section>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u5B50 -> \u7236 -- \u4F7F\u7528 props \u56DE\u8C03\u5B8C\u6210\u7EC4\u4EF6\u901A\u4FE1 */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"emitChildToFather"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"childToFatherMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"            \u53D1\u9001"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(d,{children:e(Q,{})}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BD%BF%E7%94%A8ref%E5%AE%8C%E6%88%90%E7%B1%BB%E7%BB%84%E4%BB%B6%E9%97%B4%E9%80%9A%E4%BF%A1.gif",alt:"\u4F7F\u7528ref\u5B8C\u6210\u7C7B\u7EC4\u4EF6\u95F4\u901A\u4FE1"})}),`
`,n(l.h4,{id:"222-\u51FD\u6570\u7EC4\u4EF6-ref-\u66B4\u9732\u6307\u5B9A\u65B9\u6CD5",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#222-\u51FD\u6570\u7EC4\u4EF6-ref-\u66B4\u9732\u6307\u5B9A\u65B9\u6CD5",children:"#"}),"2.2.2. \u51FD\u6570\u7EC4\u4EF6 ref \u66B4\u9732\u6307\u5B9A\u65B9\u6CD5"]}),`
`,n(l.p,{children:["\u4F7F\u7528 ",e(l.code,{children:"useImperativeHandle"})," hook \u53EF\u4EE5\u8BA9\u6211\u4EEC\u6307\u5B9A ref \u5F15\u7528\u65F6\u80FD\u83B7\u53D6\u5230\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4E2A\u4EBA\u8BA4\u4E3A\u76F8\u6BD4\u7C7B\u7EC4\u4EF6\u7684 ref\uFF0C\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u80FD\u591F\u66F4\u52A0\u597D\u7684\u63A7\u5236\u7EC4\u4EF6\u60F3\u66B4\u9732\u7ED9\u5916\u754C\u7684 API"]}),`
`,e(l.p,{children:"\u800C\u4E0D\u50CF\u7C7B\u7EC4\u4EF6\u90A3\u6837\u76F4\u63A5\u5168\u90E8\u66B4\u9732\u51FA\u53BB\uFF0C\u5F53\u7136\uFF0C\u5982\u679C\u4F60\u60F3\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u53EA\u66B4\u9732\u90E8\u5206 API \u7684\u8BDD\uFF0C\u53EF\u4EE5\u7528\u524D\u9762\u8BF4\u7684\u5408\u5E76\u8F6C\u53D1\u81EA\u5B9A\u4E49 ref \u7684\u65B9\u5F0F\u53BB\u5B8C\u6210"}),`
`,n(l.p,{children:["\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u7528 ",e(l.code,{children:"useImperativeHandle"})," hook \u6539\u9020\u4E0A\u9762\u7684\u7C7B\u7EC4\u4EF6\u5B9E\u73B0\u7684 demo \u5427"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"ChildRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"setFatherToChildMessage"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"void"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:"/**"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:" * \u7236 -> \u5B50 \u4F7F\u7528 ref"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:" * \u5B50 -> \u7236 \u4F7F\u7528 props \u56DE\u8C03"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#616E88"},children:" */"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"CommunicationDemoFunctionComponentFather"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherToChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setFatherToChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"''"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"childToFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setChildToFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"''"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"childRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"ChildRef"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"null"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"father"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<h3>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u7236\u7EC4\u4EF6"}),e(l.span,{style:{color:"#81A1C1"},children:"</h3>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u5B50\u7EC4\u4EF6\u5BF9\u6211\u8BF4\uFF1A"}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"childToFatherMessage"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"messageInputBox"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<section>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<label"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"htmlFor"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"to-father"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#81A1C1"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u6211\u5BF9\u5B50\u7EC4\u4EF6\u8BF4\uFF1A"}),e(l.span,{style:{color:"#81A1C1"},children:"</label>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<input"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#8FBCBB"},children:"type"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"text"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#8FBCBB"},children:"id"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"to-child"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#8FBCBB"},children:"onChange"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"setFatherToChildMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"target"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"value"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</section>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u7236 -> \u5B50 -- \u4F7F\u7528 ref \u5B8C\u6210\u7EC4\u4EF6\u901A\u4FE1 */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#D8DEE9"},children:"childRef"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"current"}),e(l.span,{style:{color:"#ECEFF4"},children:"?."}),e(l.span,{style:{color:"#88C0D0"},children:"setFatherToChildMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherToChildMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"          \u53D1\u9001"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoFunctionComponentChild"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#8FBCBB"},children:"ref"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"childRef"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#8FBCBB"},children:"onChildToFather"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"setChildToFatherMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"CommunicationDemoFunctionComponentChildProps"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"onChildToFather"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"void"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"CommunicationDemoFunctionComponentChild"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"forwardRef"}),e(l.span,{style:{color:"#81A1C1"},children:"<"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"ChildRef"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"CommunicationDemoFunctionComponentChildProps"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"ref"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" onChildToFather"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"emitChildToFather"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// \u5B50\u7EC4\u4EF6\u81EA\u5DF1\u7EF4\u62A4\u72B6\u6001 \u4E0D\u4F9D\u8D56\u4E8E\u7236\u7EC4\u4EF6 props"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherToChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setFatherToChildMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"''"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"childToFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setChildToFatherMessage"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"''"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// \u5B9A\u4E49\u66B4\u9732\u7ED9\u5916\u754C\u7684 API"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"useImperativeHandle"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"ref"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setFatherToChildMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"child"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<h3>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u5B50\u7EC4\u4EF6"}),e(l.span,{style:{color:"#81A1C1"},children:"</h3>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u7236\u7EC4\u4EF6\u5BF9\u6211\u8BF4\uFF1A"}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"fatherToChildMessage"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"messageInputBox"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<section>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<label"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"htmlFor"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"to-father"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#81A1C1"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"\u6211\u5BF9\u7236\u7EC4\u4EF6\u8BF4\uFF1A"}),e(l.span,{style:{color:"#81A1C1"},children:"</label>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<input"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#8FBCBB"},children:"type"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"text"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#8FBCBB"},children:"id"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"to-father"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#8FBCBB"},children:"onChange"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"setChildToFatherMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"target"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"value"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</section>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#616E88"},children:"/* \u5B50 -> \u7236 -- \u4F7F\u7528 props \u56DE\u8C03\u5B8C\u6210\u7EC4\u4EF6\u901A\u4FE1 */"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"emitChildToFather"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"childToFatherMessage"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"          \u53D1\u9001"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(d,{children:e(nl,{})}),`
`,n(l.h3,{id:"23-\u51FD\u6570\u7EC4\u4EF6\u7F13\u5B58\u6570\u636E",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#23-\u51FD\u6570\u7EC4\u4EF6\u7F13\u5B58\u6570\u636E",children:"#"}),"2.3. \u51FD\u6570\u7EC4\u4EF6\u7F13\u5B58\u6570\u636E"]}),`
`,n(l.p,{children:["\u5F53\u6211\u4EEC\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u5982\u679C\u6570\u636E\u66F4\u65B0\u540E\u4E0D\u5E0C\u671B\u89C6\u56FE\u6539\u53D8\uFF0C\u4E5F\u5C31\u662F\u8BF4\u89C6\u56FE\u4E0D\u4F9D\u8D56\u4E8E\u8FD9\u4E2A\u6570\u636E\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u8003\u8651\u7528 ",e(l.code,{children:"useRef"})," \u5BF9\u8FD9\u79CD\u6570\u636E\u8FDB\u884C\u7F13\u5B58"]}),`
`,n(l.p,{children:["\u4E3A\u4EC0\u4E48 ",e(l.code,{children:"useRef"})," \u53EF\u4EE5\u5BF9\u6570\u636E\u8FDB\u884C\u7F13\u5B58\uFF1F"]}),`
`,e(l.p,{children:"\u8FD8\u8BB0\u5F97\u4E4B\u524D\u8BF4\u7684 useRef \u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684\u4F5C\u7528\u539F\u7406\u5417\uFF1F"}),`
`,e(l.p,{children:"React \u4F1A\u5C06 useRef \u548C\u51FD\u6570\u7EC4\u4EF6\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u5173\u8054\uFF0C\u5C06 useRef \u521B\u5EFA\u7684 ref \u5BF9\u8C61\u6302\u8F7D\u5230\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u4E0A\uFF0C\u8FD9\u6837\u4E00\u6765\u6BCF\u6B21\u51FD\u6570\u7EC4\u4EF6\u6267\u884C\uFF0C\u53EA\u8981\u51FD\u6570\u7EC4\u4EF6\u4E0D\u88AB\u9500\u6BC1\uFF0C\u90A3\u4E48\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u5B9E\u4F8B\u4E5F\u4F1A\u4E00\u76F4\u5B58\u5728\uFF0C\u6240\u4EE5 ref \u4E5F\u80FD\u591F\u88AB\u4FDD\u7559\u4E0B\u6765"}),`
`,n(l.p,{children:["\u5229\u7528\u8FD9\u4E2A\u7279\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u6570\u636E\u653E\u5230 ",e(l.code,{children:"useRef"})," \u4E2D\uFF0C\u7531\u4E8E\u5B83\u5728\u5185\u5B58\u4E2D\u4E00\u76F4\u90FD\u662F\u540C\u4E00\u5757\u5185\u5B58\u5730\u5740\uFF0C\u6240\u4EE5\u65E0\u8BBA\u5982\u4F55\u53D8\u5316\u90FD\u4E0D\u4F1A\u5F71\u54CD\u5230\u89C6\u56FE\u7684\u6539\u53D8"]}),`
`,n(l.div,{className:"island-directive warning",children:[e(l.p,{className:"island-directive-title",children:"\u6CE8\u610F"}),e(l.div,{className:"island-directive-content",children:e(l.p,{children:"\u4E00\u5B9A\u8981\u770B\u6E05\u524D\u63D0\uFF0C\u53EA\u9002\u7528\u4E8E\u4E0E\u89C6\u56FE\u65E0\u5173\u7684\u6570\u636E"})})]}),`
`,e(l.p,{children:"\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684 demo \u6765\u66F4\u6E05\u695A\u5730\u4F53\u4F1A\u4E0B\u8FD9\u4E2A\u5E94\u7528\u573A\u666F"}),`
`,n(l.p,{children:["\u5047\u8BBE\u6211\u6709\u4E00\u4E2A ",e(l.code,{children:"todoList"})," \u5217\u8868\uFF0C\u89C6\u56FE\u4E0A\u4F1A\u628A\u8FD9\u4E2A\u5217\u8868\u6E32\u67D3\u51FA\u6765\uFF0C\u5E76\u4E14\u6709\u4E00\u4E2A\u6570\u636E activeTodoItem \u662F\u63A7\u5236\u5F53\u524D\u9009\u4E2D\u7684\u662F\u54EA\u4E2A todoItem"]}),`
`,n(l.p,{children:["\u70B9\u51FB todoItem \u4F1A\u5207\u6362\u8FD9\u4E2A activeTodoItem\uFF0C\u4F46\u662F\u5E76\u4E0D\u9700\u8981\u5728\u89C6\u56FE\u4E0A\u4F5C\u51FA\u4EFB\u4F55\u53D8\u5316\uFF0C\u5982\u679C\u4F7F\u7528 ",e(l.code,{children:"useState"})," \u53BB\u4FDD\u5B58 activeTodoItem\uFF0C\u90A3\u4E48\u5F53\u5176\u53D8\u5316\u65F6\u4F1A\u5BFC\u81F4\u51FD\u6570\u7EC4\u4EF6\u91CD\u65B0\u6267\u884C\uFF0C\u89C6\u56FE\u91CD\u65B0\u6E32\u67D3\uFF0C\u4F46\u5728\u8FD9\u4E2A\u573A\u666F\u4E2D\u6211\u4EEC\u5E76\u4E0D\u5E0C\u671B\u66F4\u65B0\u89C6\u56FE"]}),`
`,n(l.p,{children:["\u76F8\u5BF9\u7684\uFF0C\u6211\u4EEC\u5E0C\u671B\u8FD9\u4E2A activeTodoItem \u6570\u636E\u88AB\u7F13\u5B58\u8D77\u6765\uFF0C\u4E0D\u4F1A\u968F\u7740\u89C6\u56FE\u7684\u91CD\u65B0\u6E32\u67D3\u800C\u5BFC\u81F4\u5176\u4F5C\u4E3A ",e(l.code,{children:"useState"})," \u7684\u6267\u884C\u7ED3\u679C\u91CD\u65B0\u751F\u6210\u4E00\u904D\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u6539\u6210\u7528 ",e(l.code,{children:"useRef"})," \u5B9E\u73B0\uFF0C\u56E0\u4E3A\u5176\u5728\u5185\u5B58\u4E2D\u4E00\u76F4\u90FD\u662F\u540C\u4E00\u5757\u5185\u5B58\u5730\u5740\uFF0C\u8FD9\u6837\u5C31\u4E0D\u4F1A\u56E0\u4E3A\u5B83\u7684\u6539\u53D8\u800C\u66F4\u65B0\u89C6\u56FE\u4E86"]}),`
`,e(l.p,{children:"\u540C\u7406\uFF0C\u5728 useEffect \u4E2D\u5982\u679C\u4F7F\u7528\u5230\u4E86 useRef \u7684\u6570\u636E\uFF0C\u4E5F\u4E0D\u9700\u8981\u5C06\u5176\u58F0\u660E\u5230 deps \u6570\u7EC4\u4E2D\uFF0C\u56E0\u4E3A\u5176\u5185\u5B58\u5730\u5740\u4E0D\u4F1A\u53D8\u5316\uFF0C\u6240\u4EE5\u6BCF\u6B21\u5728 useEffect \u4E2D\u83B7\u53D6\u5230\u7684 ref \u6570\u636E\u4E00\u5B9A\u662F\u6700\u65B0\u7684"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"TodoItem"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  id"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  name"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"todoList"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"TodoItem"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"[] "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"id"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"name"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"coding"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"id"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"2"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"name"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"eating"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"id"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"3"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"name"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"sleeping"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"id"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"4"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"name"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"playing"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"]"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"CacheDataWithRefDemo"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"activeTodoItem"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useRef"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"todoList"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"["}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"])"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// \u6A21\u62DF componentDidUpdate -- \u5982\u679C\u6539\u53D8 activeTodoItem \u540E\u7EC4\u4EF6\u6CA1\u91CD\u65B0\u6E32\u67D3\uFF0C\u8BF4\u660E\u89C6\u56FE\u53EF\u4EE5\u4E0D\u4F9D\u8D56\u4E8E activeTodoItem \u6570\u636E"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"useEffect"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"\u68C0\u6D4B\u7EC4\u4EF6\u662F\u5426\u6709\u66F4\u65B0"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"container"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"list"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"{"}),e(l.span,{style:{color:"#D8DEE9"},children:"todoList"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"map"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"todoItem"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"<div"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#8FBCBB"},children:"key"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"todoItem"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"id"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#8FBCBB"},children:"className"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#D8DEE9"},children:"s"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"item"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#D8DEE9"},children:"activeTodoItem"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"current"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"todoItem"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>{"}),e(l.span,{style:{color:"#D8DEE9"},children:"todoItem"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"name"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        ))"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"activeTodoItem"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"current"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"        \u63A7\u5236\u53F0\u8F93\u51FA\u6700\u65B0\u7684 activeTodoItem"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(d,{children:e(al,{})}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BD%BF%E7%94%A8ref%E7%BC%93%E5%AD%98%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%95%B0%E6%8D%AE.gif",alt:"\u4F7F\u7528ref\u7F13\u5B58\u51FD\u6570\u7EC4\u4EF6\u6570\u636E"})})]})}function yl(s={}){const{wrapper:l}=s.components||{};return l?e(l,Object.assign({},s,{children:e(g,s)})):g(s)}const Cl="2022/12/4 13:36:43",ml=`import { DemoBlock } from '@island/demo-block'

import { RefDemo1, RefDemo2, RefDemo3 } from '~/demos/ref/demo1.tsx'
import { GrandFather } from '~/demos/ref/demo2.tsx'
import { Foo } from '~/demos/ref/demo3.tsx'
import {
  RefHOCWithoutForwardRefDemo,
  RefHOCWithForwardRefDemo,
} from '~/demos/ref/demo4.tsx'
import { CommunicationDemoFather } from '~/demos/ref/demo5'
import { CommunicationDemoFunctionComponentFather } from '~/demos/ref/demo6'
import { CacheDataWithRefDemo } from '~/demos/ref/demo7'

# \u591A\u529F\u80FD Ref

## 1. Ref \u7684\u7406\u89E3\u4E0E\u4F7F\u7528

\u5BF9\u4E8E Ref \u7684\u7406\u89E3\uFF0C\u8981\u4ECE\u4E24\u4E2A\u89D2\u5EA6\u53BB\u5206\u6790\uFF1A

1. Ref \u5BF9\u8C61\u7684\u521B\u5EFA\uFF1A\u4F7F\u7528 \`createRef\` \u6216 \`useRef\` \u521B\u5EFA Ref \u5BF9\u8C61
2. React \u672C\u8EAB\u5BF9 Ref \u7684\u5904\u7406\uFF1A\u5BF9\u4E8E\u6807\u7B7E\u4E2D\u7684 ref \u5C5E\u6027\uFF0CReact \u662F\u5982\u4F55\u5904\u7406\u7684

### 1.1. Ref \u5BF9\u8C61\u7684\u521B\u5EFA

#### 1.1.1. createRef

\u5728\u7C7B\u7EC4\u4EF6\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u901A\u8FC7 \`createRef\` \u53BB\u521B\u5EFA\u4E00\u4E2A Ref \u5BF9\u8C61\uFF0C\u5176\u4F1A\u88AB\u4FDD\u5B58\u5728\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u4E0A\uFF0C\u5B83\u7684\u5B9E\u73B0\u5F88\u7B80\u5355

\`packages/react/src/ReactCreateRef.js\`

\`\`\`js
export function createRef(): RefObject {
  const refObject = {
    current: null,
  }

  return refObject
}
\`\`\`

\u53EF\u4EE5\u770B\u5230\uFF0C\u5C31\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u5305\u542B \`current\` \u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u4EC5\u6B64\u800C\u5DF2

#### 1.1.2. useRef

\u8FD9\u4E5F\u5C31\u610F\u5473\u7740\u6211\u4EEC\u4E0D\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528 \`createRef\`\uFF0C\u56E0\u4E3A\u6BCF\u6B21\u51FD\u6570\u7EC4\u4EF6\u6E32\u67D3\u90FD\u662F\u4E00\u6B21\u65B0\u7684\u51FD\u6570\u6267\u884C\uFF0C\u6BCF\u6B21\u6267\u884C \`createRef\` \u5F97\u5230\u7684\u90FD\u662F\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u65E0\u6CD5\u4FDD\u7559\u5176\u539F\u6765\u7684\u5F15\u7528

\u6240\u4EE5\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u4F7F\u7528 \`useRef\` \u521B\u5EFA Ref \u5BF9\u8C61\uFF0CReact \u4F1A\u5C06 useRef \u548C\u51FD\u6570\u7EC4\u4EF6\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u5173\u8054\uFF0C\u5C06 \`useRef\` \u521B\u5EFA\u7684 ref \u5BF9\u8C61\u6302\u8F7D\u5230\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u4E0A

\u8FD9\u6837\u4E00\u6765\u6BCF\u6B21\u51FD\u6570\u7EC4\u4EF6\u6267\u884C\uFF0C\u53EA\u8981\u51FD\u6570\u7EC4\u4EF6\u4E0D\u88AB\u9500\u6BC1\uFF0C\u90A3\u4E48\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u5B9E\u4F8B\u4E5F\u4F1A\u4E00\u76F4\u5B58\u5728\uFF0C\u6240\u4EE5 ref \u4E5F\u80FD\u591F\u88AB\u4FDD\u7559\u4E0B\u6765

### 1.2. React \u5BF9\u6807\u7B7E\u4E2D ref \u5C5E\u6027\u7684\u5904\u7406

\u9996\u5148\u8981\u660E\u786E\u4E00\u4E2A\u7ED3\u8BBA\uFF0C\u5728 React \u4E2D\u83B7\u53D6 DOM \u5143\u7D20\u6216\u8005\u7EC4\u4EF6\u5B9E\u4F8B\u5E76\u4E0D\u662F\u53EA\u80FD\u901A\u8FC7 ref \u5BF9\u8C61\u83B7\u53D6\uFF01\uFF01\uFF01

\u4E5F\u5C31\u662F\u8BF4\u5E76\u4E0D\u662F\u53EA\u80FD\u901A\u8FC7\u5148\u8C03\u7528 \`createRef\` \u521B\u5EFA ref \u5BF9\u8C61\uFF0C\u7136\u540E\u5C06\u5B83\u8D4B\u503C\u5230\u8981\u83B7\u53D6\u7684\u5143\u7D20\u6216\u7EC4\u4EF6\u5B9E\u4F8B\u7684 ref \u5C5E\u6027\u4E0A\uFF0C\u5B9E\u9645\u4E0A\u8FD8\u6709\u522B\u7684\u65B9\u5F0F

:::tip

\u53EA\u6709\u7C7B\u7EC4\u4EF6\u624D\u6709\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B\u8FD9\u4E00\u8BF4\u6CD5\uFF0C\u51FD\u6570\u7EC4\u4EF6\u6CA1\u6709\u5B9E\u4F8B\uFF0C\u4E0D\u80FD\u88AB ref \u6807\u8BB0\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7 \`forwardRef\` \u7ED3\u5408 \`useImperativeHandle\` \u7ED9\u51FD\u6570\u7EC4\u4EF6\u8D4B\u4E88 ref \u6807\u8BB0\u7684

:::

#### 1.2.1. ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32

\u5F53\u6211\u4EEC\u7ED9\u5143\u7D20\u6216\u7C7B\u7EC4\u4EF6\u6807\u7B7E\u4E2D\u7684 ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32\u65F6\uFF0C\u80FD\u591F\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u7684 \`this.refs\` \u4E2D\u8BBF\u95EE\u5230

\`\`\`tsx
class Child extends React.Component<PropsWithChildren> {
  render(): React.ReactNode {
    const { children } = this.props

    return (
      <div>
        <p>Child</p>
        {children}
      </div>
    )
  }
}

/** @description ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32 */
class RefDemo1 extends React.Component {
  logger = createLoggerWithScope('RefDemo1')

  componentDidMount(): void {
    this.logger.log(this.refs)
  }

  render(): React.ReactNode {
    return (
      <>
        <div ref="refDemo1DOM">ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32\u83B7\u53D6 DOM \u5143\u7D20</div>
        <Child ref="refDemo1Component">ref \u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B</Child>
      </>
    )
  }
}
\`\`\`

<DemoBlock>
  <RefDemo1 />
</DemoBlock>

![ref\u5C5E\u6027\u4F20\u9012\u5B57\u7B26\u4E32](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/ref%E5%B1%9E%E6%80%A7%E4%BC%A0%E9%80%92%E5%AD%97%E7%AC%A6%E4%B8%B2.jpg)

:::warning

\u8FD9\u79CD\u65B9\u5F0F\u5DF2\u7ECF\u88AB React \u5B98\u65B9\u5E9F\u5F03\uFF0C\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528

:::

#### 1.2.2. ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570

ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570\u65F6\uFF0C\u4F1A\u5728 commit \u9636\u6BB5\u521B\u5EFA\u771F\u5B9E DOM \u65F6\u6267\u884C ref \u6307\u5B9A\u7684\u51FD\u6570\uFF0C\u5E76\u5C06\u5143\u7D20\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165\uFF0C\u6B64\u65F6\u6211\u4EEC\u5C31\u53EF\u4EE5\u5229\u7528\u5B83\u8FDB\u884C\u8D4B\u503C\u4EE5\u83B7\u53D6 DOM \u5143\u7D20\u6216\u7EC4\u4EF6\u5B9E\u4F8B

\`\`\`tsx
/** @description ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570 */
class RefDemo2 extends React.Component {
  logger = createLoggerWithScope('RefDemo2')

  refDemo2DOM: HTMLElement | null = null
  refDemo2Component: Child | null = null

  componentDidMount(): void {
    this.logger.log(this.refDemo2DOM)
    this.logger.log(this.refDemo2Component)
  }

  render(): React.ReactNode {
    return (
      <>
        <div ref={(el) => (this.refDemo2DOM = el)}>
          ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570\u83B7\u53D6 DOM \u5143\u7D20
        </div>

        <Child ref={(child) => (this.refDemo2Component = child)}>
          ref \u5C5E\u6027\u4F20\u9012\u51FD\u6570\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B
        </Child>
      </>
    )
  }
}
\`\`\`

<DemoBlock>
  <RefDemo2 />
</DemoBlock>

![ref\u5C5E\u6027\u4F20\u9012\u51FD\u6570](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/ref%E5%B1%9E%E6%80%A7%E4%BC%A0%E9%80%92%E5%87%BD%E6%95%B0.jpg)

#### 1.2.3. ref \u5C5E\u6027\u4F20\u9012\u5BF9\u8C61

\u8FD9\u79CD\u65B9\u5F0F\u5C31\u662F\u6211\u4EEC\u6700\u5E38\u7528\u7684\u65B9\u5F0F\u4E86\uFF0C\u4F7F\u7528 \`createRef\` \u6216\u8005 \`useRef\` \u521B\u5EFA Ref \u5BF9\u8C61\uFF0C\u5E76\u5C06\u5176\u4F20\u7ED9\u6807\u7B7E\u7684 ref \u5C5E\u6027\u5373\u53EF

\u8FD9\u79CD\u65B9\u5F0F\u83B7\u53D6\u5230\u7684 ref \u9700\u8981\u5148\u8C03\u7528 \`current\` \u5C5E\u6027\u624D\u80FD\u83B7\u53D6\u5230\u5BF9\u5E94\u7684 DOM \u5143\u7D20\u6216\u7EC4\u4EF6\u5B9E\u4F8B

\`\`\`tsx
/** @description ref \u5C5E\u6027\u4F20\u9012\u5BF9\u8C61 */
class RefDemo3 extends React.Component {
  logger = createLoggerWithScope('RefDemo3')

  refDemo3DOM = React.createRef<HTMLDivElement>()
  refDemo3Component = React.createRef<Child>()

  componentDidMount(): void {
    this.logger.log(this.refDemo3DOM)
    this.logger.log(this.refDemo3Component)
  }

  render(): React.ReactNode {
    return (
      <>
        <div ref={this.refDemo3DOM}>ref \u5C5E\u6027\u4F20\u9012\u5BF9\u8C61\u83B7\u53D6 DOM \u5143\u7D20</div>

        <Child ref={this.refDemo3Component}>
          ref \u5C5E\u6027\u4F20\u9012\u5BF9\u8C61\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B
        </Child>
      </>
    )
  }
}
\`\`\`

<DemoBlock>
  <RefDemo3 />
</DemoBlock>

## 2. ref \u9AD8\u9636\u7528\u6CD5

### 2.1. forwardRef \u8F6C\u53D1 ref

#### 2.1.1. \u8DE8\u5C42\u7EA7\u83B7\u53D6

\u60F3\u8981\u5728\u7237\u7EC4\u4EF6\u4E2D\u901A\u8FC7\u5728\u5B50\u7EC4\u4EF6\u4E2D\u4F20\u9012 ref \u83B7\u53D6\u5230\u5B59\u7EC4\u4EF6\u7684\u67D0\u4E2A\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F\u5728\u7237\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u5230\u4E86\u5B59\u7EC4\u4EF6\u7684\u5143\u7D20\uFF0C\u662F\u4E00\u79CD\u8DE8\u5C42\u7EA7\u83B7\u53D6

\`\`\`tsx
/** @description \u5B59\u7EC4\u4EF6 */
const Child: React.FC<{ grandRef: LegacyRef<HTMLDivElement> }> = (props) => {
  const { grandRef } = props

  return (
    <>
      <p>Child</p>
      <div ref={grandRef}>\u8981\u83B7\u53D6\u7684\u76EE\u6807\u5143\u7D20</div>
    </>
  )
}

/**
 * @description \u7236\u7EC4\u4EF6
 *
 * \u7B2C\u4E00\u4E2A\u6CDB\u578B\u53C2\u6570\u662F ref \u7684\u7C7B\u578B
 * \u7B2C\u4E8C\u4E2A\u6CDB\u578B\u53C2\u6570\u662F props \u7684\u7C7B\u578B
 */
const Father = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div>
      <Child grandRef={ref} />
    </div>
  )
})

/** @description \u7237\u7EC4\u4EF6 */
const GrandFather: React.FC = () => {
  let grandChildDiv: HTMLDivElement | null = null

  useEffect(() => {
    logger.log(grandChildDiv)
  }, [])

  return (
    <div>
      <Father ref={(el) => (grandChildDiv = el)} />
    </div>
  )
}
\`\`\`

<DemoBlock>
  <GrandFather />
</DemoBlock>

#### 2.1.2. \u5408\u5E76\u8F6C\u53D1\u81EA\u5B9A\u4E49 ref

forwardRef \u4E0D\u4EC5\u53EF\u4EE5\u8F6C\u53D1 ref \u83B7\u53D6 DOM \u5143\u7D20\u548C\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u8FD8\u53EF\u4EE5\u8F6C\u53D1\u5408\u5E76\u540E\u7684\u81EA\u5B9A\u4E49 ref

\u4EC0\u4E48\u662F\u201C\u5408\u5E76\u540E\u7684\u81EA\u5B9A\u4E49 ref\u201D\u5462\uFF1F\u901A\u8FC7\u4E00\u4E2A\u573A\u666F\u6765\u770B\u770B\u5C31\u660E\u767D\u4E86

:::info{title=\u573A\u666F}

\u901A\u8FC7\u7ED9 Foo \u7EC4\u4EF6\u7ED1\u5B9A ref\uFF0C\u83B7\u53D6\u591A\u4E2A\u5185\u5BB9\uFF0C\u5305\u62EC\uFF1A

1. \u5B50\u7EC4\u4EF6 Bar \u7684\u7EC4\u4EF6\u5B9E\u4F8B
2. Bar \u7EC4\u4EF6\u4E2D\u7684 DOM \u5143\u7D20 button
3. \u5B59\u7EC4\u4EF6 Baz \u7684\u7EC4\u4EF6\u5B9E\u4F8B

:::

\u8FD9\u79CD\u5728\u4E00\u4E2A ref \u91CC\u80FD\u591F\u8BBF\u95EE\u591A\u4E2A\u5143\u7D20\u548C\u5B9E\u4F8B\u7684\u5C31\u662F\u201C\u5408\u5E76\u540E\u7684\u81EA\u5B9A\u4E49 ref\u201D

\`\`\`tsx
/** @description \u81EA\u5B9A\u4E49 ref \u7684\u7C7B\u578B */
interface CustomRef {
  bar: Bar
  barButton: HTMLButtonElement
  baz: Baz
}

class Baz extends React.Component {
  render(): React.ReactNode {
    return <div>Baz</div>
  }
}

class Bar extends React.Component<{
  customRef: ForwardedRef<CustomRef>
}> {
  buttonEl: HTMLButtonElement | null = null
  bazInstance: Baz | null = null

  componentDidMount(): void {
    const { customRef } = this.props

    if (customRef) {
      ;(customRef as MutableRefObject<CustomRef>).current = {
        bar: this,
        barButton: this.buttonEl!,
        baz: this.bazInstance!,
      }
    }
  }

  render() {
    return (
      <>
        <button ref={(el) => (this.buttonEl = el)}>Bar button</button>
        <Baz ref={(instance) => (this.bazInstance = instance)} />
      </>
    )
  }
}
const FowardRefBar = forwardRef<CustomRef>((props, ref) => (
  <Bar {...props} customRef={ref} />
))

const Foo: React.FC = () => {
  const customRef = useRef<CustomRef>(null)

  useEffect(() => {
    logger.log(customRef.current)
  }, [])

  return <FowardRefBar ref={customRef} />
}
\`\`\`

<DemoBlock>
  <Foo />
</DemoBlock>

![\u5408\u5E76\u8F6C\u53D1\u81EA\u5B9A\u4E49ref](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91%E8%87%AA%E5%AE%9A%E4%B9%89ref.jpg)

#### 2.1.3. \u9AD8\u9636\u7EC4\u4EF6\u8F6C\u53D1 ref

\u5982\u679C\u6211\u4EEC\u5728\u9AD8\u9636\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528 ref\uFF0C\u5B83\u4F1A\u76F4\u63A5\u6307\u5411 WrapComponent

\`\`\`tsx
class TestComponent extends React.Component {
  render(): React.ReactNode {
    return <p>TestComponent</p>
  }
}

/** @description \u4E0D\u4F7F\u7528 forwardRef \u8F6C\u53D1 HOC \u4E2D\u7684 ref */
const HOCWithoutForwardRef = (Component: typeof React.Component) => {
  class WrapComponent extends React.Component {
    render(): React.ReactNode {
      return (
        <div>
          <p>WrapComponent</p>
          <Component />
        </div>
      )
    }
  }

  return WrapComponent
}

const HOCComponent1 = HOCWithoutForwardRef(TestComponent)
const RefHOCWithoutForwardRefDemo = () => {
  const logger = createLoggerWithScope('RefHOCWithoutForwardRefDemo')
  const wrapRef = useRef(null)

  useEffect(() => {
    // wrapRef \u6307\u5411\u7684\u662F WrapComponent \u5B9E\u4F8B \u800C\u4E0D\u662F HOCComponent1 \u5B9E\u4F8B
    logger.log(wrapRef.current)
  }, [])

  return <HOCComponent1 ref={wrapRef} />
}
\`\`\`

<DemoBlock>
  <RefHOCWithoutForwardRefDemo />
</DemoBlock>

![HOC\u4E2D\u76F4\u63A5\u4F7F\u7528ref](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/HOC%E4%B8%AD%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8ref.jpg)

\u5982\u679C\u6211\u4EEC\u5E0C\u671B \`ref\` \u6307\u5411\u7684\u662F\u88AB\u5305\u88F9\u7684 TestComponent \u800C\u4E0D\u662F HOC \u5185\u90E8\u7684 WrapComponent \u65F6\u8BE5\u600E\u4E48\u529E\u5462\uFF1F

\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u7528 forwardRef \u8FDB\u884C\u8F6C\u53D1\u4E86

\`\`\`tsx
/** @description HOC \u4E2D\u4F7F\u7528 forwardRef \u8F6C\u53D1 ref */
const HOCWithForwardRef = (Component: typeof React.Component) => {
  class WrapComponent extends React.Component<{
    forwardedRef: LegacyRef<any>
  }> {
    render(): React.ReactNode {
      const { forwardedRef } = this.props

      return (
        <div>
          <p>WrapComponent</p>
          <Component ref={forwardedRef} />
        </div>
      )
    }
  }

  return React.forwardRef((props, ref) => (
    <WrapComponent forwardedRef={ref} {...props} />
  ))
}

const HOCComponent2 = HOCWithForwardRef(TestComponent)
const RefHOCWithForwardRefDemo = () => {
  const logger = createLoggerWithScope('RefHOCWithForwardRefDemo')
  const hocComponent2Ref = useRef(null)

  useEffect(() => {
    // hocComponent2Ref \u6307\u5411\u7684\u662F HOCComponent2 \u5B9E\u4F8B
    logger.log(hocComponent2Ref.current)
  }, [])

  return <HOCComponent2 ref={hocComponent2Ref} />
}
\`\`\`

<DemoBlock>
  <RefHOCWithForwardRefDemo />
</DemoBlock>

![HOC\u4E2D\u4F7F\u7528forwardRef\u8F6C\u53D1ref](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/HOC%E4%B8%AD%E4%BD%BF%E7%94%A8forwardRef%E8%BD%AC%E5%8F%91ref.jpg)

### 2.2. ref \u5B9E\u73B0\u7EC4\u4EF6\u901A\u4FE1

\u4E00\u822C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7236\u7EC4\u4EF6\u6539\u53D8\u5B50\u7EC4\u4EF6 props \u7684\u65B9\u5F0F\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u66F4\u65B0\u6E32\u67D3\u5B8C\u6210\u7EC4\u4EF6\u95F4\u901A\u4FE1

\u4F46\u5982\u679C\u6211\u4EEC\u4E0D\u5E0C\u671B\u901A\u8FC7\u8FD9\u79CD\u6539\u53D8\u5B50\u7EC4\u4EF6 props \u7684\u65B9\u5F0F\u7684\u8BDD\u8FD8\u80FD\u6709\u522B\u7684\u529E\u6CD5\u5417\uFF1F

\u53EF\u4EE5\u901A\u8FC7 ref \u83B7\u53D6\u5B50\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u7136\u540E\u5B50\u7EC4\u4EF6\u66B4\u9732\u51FA\u901A\u4FE1\u7684\u65B9\u6CD5\uFF0C\u7236\u7EC4\u4EF6\u8C03\u7528\u8BE5\u65B9\u6CD5\u5373\u53EF\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u66F4\u65B0\u6E32\u67D3

\u5BF9\u4E8E\u51FD\u6570\u7EC4\u4EF6\uFF0C\u7531\u4E8E\u5176\u4E0D\u5B58\u5728\u7EC4\u4EF6\u5B9E\u4F8B\u8FD9\u6837\u7684\u8BF4\u6CD5\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 \`useImperativeHandle\` \u8FD9\u4E2A hook \u6765\u6307\u5B9A ref \u5F15\u7528\u65F6\u5F97\u5230\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4E0B\u9762\u6211\u4EEC\u5206\u522B\u7528\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u90FD\u5B9E\u73B0\u4E00\u904D

#### 2.2.1. \u7C7B\u7EC4\u4EF6 ref \u66B4\u9732\u7EC4\u4EF6\u5B9E\u4F8B

\`\`\`tsx
/**
 * \u7236 -> \u5B50 \u4F7F\u7528 ref
 * \u5B50 -> \u7236 \u4F7F\u7528 props \u56DE\u8C03
 */
class CommunicationDemoFather extends React.Component<
  {},
  CommunicationDemoFatherState
> {
  state: Readonly<CommunicationDemoFatherState> = {
    fatherToChildMessage: '',
    childToFatherMessage: '',
  }

  childRef = React.createRef<CommunicationDemoChild>()

  /** @description \u63D0\u4F9B\u7ED9\u5B50\u7EC4\u4EF6\u4FEE\u6539\u7236\u7EC4\u4EF6\u4E2D\u7684\u72B6\u6001 */
  handleChildToFather = (message: string) => {
    this.setState((state) => ({
      ...state,
      childToFatherMessage: message,
    }))
  }

  constructor(props: {}) {
    super(props)
    this.handleChildToFather = this.handleChildToFather.bind(this)
  }

  render(): React.ReactNode {
    const { fatherToChildMessage, childToFatherMessage } = this.state

    return (
      <div className={s.father}>
        <h3>\u7236\u7EC4\u4EF6</h3>
        <p>\u5B50\u7EC4\u4EF6\u5BF9\u6211\u8BF4\uFF1A{childToFatherMessage}</p>
        <div className={s.messageInputBox}>
          <section>
            <label htmlFor="to-father">\u6211\u5BF9\u5B50\u7EC4\u4EF6\u8BF4\uFF1A</label>
            <input
              type="text"
              id="to-child"
              onChange={(e) =>
                this.setState((state) => ({
                  ...state,
                  fatherToChildMessage: e.target.value,
                }))
              }
            />
          </section>

          {/* \u7236 -> \u5B50 -- \u4F7F\u7528 ref \u5B8C\u6210\u7EC4\u4EF6\u901A\u4FE1 */}
          <button
            onClick={() =>
              this.childRef.current?.setFatherToChildMessage(
                fatherToChildMessage,
              )
            }
          >
            \u53D1\u9001
          </button>
        </div>

        <CommunicationDemoChild
          ref={this.childRef}
          onChildToFather={this.handleChildToFather}
        />
      </div>
    )
  }
}

interface CommunicationDemoChildProps {
  onChildToFather: (message: string) => void
}
// \u5B50\u7EC4\u4EF6\u81EA\u5DF1\u7EF4\u62A4\u72B6\u6001 \u4E0D\u4F9D\u8D56\u4E8E\u7236\u7EC4\u4EF6 props
interface CommunicationDemoChildState {
  fatherToChildMessage: string
  childToFatherMessage: string
}
class CommunicationDemoChild extends React.Component<
  CommunicationDemoChildProps,
  CommunicationDemoChildState
> {
  state: Readonly<CommunicationDemoChildState> = {
    fatherToChildMessage: '',
    childToFatherMessage: '',
  }

  /** @description \u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u4F7F\u7528\u7684 API -- \u4FEE\u6539\u7236\u5230\u5B50\u7684\u6D88\u606F fatherToChildMessage */
  setFatherToChildMessage(message: string) {
    this.setState((state) => ({ ...state, fatherToChildMessage: message }))
  }

  render(): React.ReactNode {
    const { onChildToFather: emitChildToFather } = this.props
    const { fatherToChildMessage, childToFatherMessage } = this.state

    return (
      <div className={s.child}>
        <h3>\u5B50\u7EC4\u4EF6</h3>
        <p>\u7236\u7EC4\u4EF6\u5BF9\u6211\u8BF4\uFF1A{fatherToChildMessage}</p>
        <div className={s.messageInputBox}>
          <section>
            <label htmlFor="to-father">\u6211\u5BF9\u7236\u7EC4\u4EF6\u8BF4\uFF1A</label>
            <input
              type="text"
              id="to-father"
              onChange={(e) =>
                this.setState((state) => ({
                  ...state,
                  childToFatherMessage: e.target.value,
                }))
              }
            />
          </section>

          {/* \u5B50 -> \u7236 -- \u4F7F\u7528 props \u56DE\u8C03\u5B8C\u6210\u7EC4\u4EF6\u901A\u4FE1 */}
          <button onClick={() => emitChildToFather(childToFatherMessage)}>
            \u53D1\u9001
          </button>
        </div>
      </div>
    )
  }
}
\`\`\`

<DemoBlock>
  <CommunicationDemoFather />
</DemoBlock>

![\u4F7F\u7528ref\u5B8C\u6210\u7C7B\u7EC4\u4EF6\u95F4\u901A\u4FE1](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BD%BF%E7%94%A8ref%E5%AE%8C%E6%88%90%E7%B1%BB%E7%BB%84%E4%BB%B6%E9%97%B4%E9%80%9A%E4%BF%A1.gif)

#### 2.2.2. \u51FD\u6570\u7EC4\u4EF6 ref \u66B4\u9732\u6307\u5B9A\u65B9\u6CD5

\u4F7F\u7528 \`useImperativeHandle\` hook \u53EF\u4EE5\u8BA9\u6211\u4EEC\u6307\u5B9A ref \u5F15\u7528\u65F6\u80FD\u83B7\u53D6\u5230\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4E2A\u4EBA\u8BA4\u4E3A\u76F8\u6BD4\u7C7B\u7EC4\u4EF6\u7684 ref\uFF0C\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u80FD\u591F\u66F4\u52A0\u597D\u7684\u63A7\u5236\u7EC4\u4EF6\u60F3\u66B4\u9732\u7ED9\u5916\u754C\u7684 API

\u800C\u4E0D\u50CF\u7C7B\u7EC4\u4EF6\u90A3\u6837\u76F4\u63A5\u5168\u90E8\u66B4\u9732\u51FA\u53BB\uFF0C\u5F53\u7136\uFF0C\u5982\u679C\u4F60\u60F3\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u53EA\u66B4\u9732\u90E8\u5206 API \u7684\u8BDD\uFF0C\u53EF\u4EE5\u7528\u524D\u9762\u8BF4\u7684\u5408\u5E76\u8F6C\u53D1\u81EA\u5B9A\u4E49 ref \u7684\u65B9\u5F0F\u53BB\u5B8C\u6210

\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u7528 \`useImperativeHandle\` hook \u6539\u9020\u4E0A\u9762\u7684\u7C7B\u7EC4\u4EF6\u5B9E\u73B0\u7684 demo \u5427

\`\`\`tsx
interface ChildRef {
  setFatherToChildMessage: (message: string) => void
}

/**
 * \u7236 -> \u5B50 \u4F7F\u7528 ref
 * \u5B50 -> \u7236 \u4F7F\u7528 props \u56DE\u8C03
 */
const CommunicationDemoFunctionComponentFather: React.FC = () => {
  const [fatherToChildMessage, setFatherToChildMessage] = useState('')
  const [childToFatherMessage, setChildToFatherMessage] = useState('')

  const childRef = useRef<ChildRef>(null)

  return (
    <div className={s.father}>
      <h3>\u7236\u7EC4\u4EF6</h3>
      <p>\u5B50\u7EC4\u4EF6\u5BF9\u6211\u8BF4\uFF1A{childToFatherMessage}</p>
      <div className={s.messageInputBox}>
        <section>
          <label htmlFor="to-father">\u6211\u5BF9\u5B50\u7EC4\u4EF6\u8BF4\uFF1A</label>
          <input
            type="text"
            id="to-child"
            onChange={(e) => setFatherToChildMessage(e.target.value)}
          />
        </section>

        {/* \u7236 -> \u5B50 -- \u4F7F\u7528 ref \u5B8C\u6210\u7EC4\u4EF6\u901A\u4FE1 */}
        <button
          onClick={() =>
            childRef.current?.setFatherToChildMessage(fatherToChildMessage)
          }
        >
          \u53D1\u9001
        </button>
      </div>

      <CommunicationDemoFunctionComponentChild
        ref={childRef}
        onChildToFather={(message) => setChildToFatherMessage(message)}
      />
    </div>
  )
}

interface CommunicationDemoFunctionComponentChildProps {
  onChildToFather: (message: string) => void
}
const CommunicationDemoFunctionComponentChild = forwardRef<
  ChildRef,
  CommunicationDemoFunctionComponentChildProps
>((props, ref) => {
  const { onChildToFather: emitChildToFather } = props

  // \u5B50\u7EC4\u4EF6\u81EA\u5DF1\u7EF4\u62A4\u72B6\u6001 \u4E0D\u4F9D\u8D56\u4E8E\u7236\u7EC4\u4EF6 props
  const [fatherToChildMessage, setFatherToChildMessage] = useState('')
  const [childToFatherMessage, setChildToFatherMessage] = useState('')

  // \u5B9A\u4E49\u66B4\u9732\u7ED9\u5916\u754C\u7684 API
  useImperativeHandle(ref, () => ({ setFatherToChildMessage }))

  return (
    <div className={s.child}>
      <h3>\u5B50\u7EC4\u4EF6</h3>
      <p>\u7236\u7EC4\u4EF6\u5BF9\u6211\u8BF4\uFF1A{fatherToChildMessage}</p>
      <div className={s.messageInputBox}>
        <section>
          <label htmlFor="to-father">\u6211\u5BF9\u7236\u7EC4\u4EF6\u8BF4\uFF1A</label>
          <input
            type="text"
            id="to-father"
            onChange={(e) => setChildToFatherMessage(e.target.value)}
          />
        </section>

        {/* \u5B50 -> \u7236 -- \u4F7F\u7528 props \u56DE\u8C03\u5B8C\u6210\u7EC4\u4EF6\u901A\u4FE1 */}
        <button onClick={() => emitChildToFather(childToFatherMessage)}>
          \u53D1\u9001
        </button>
      </div>
    </div>
  )
})
\`\`\`

<DemoBlock>
  <CommunicationDemoFunctionComponentFather />
</DemoBlock>

### 2.3. \u51FD\u6570\u7EC4\u4EF6\u7F13\u5B58\u6570\u636E

\u5F53\u6211\u4EEC\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u5982\u679C\u6570\u636E\u66F4\u65B0\u540E\u4E0D\u5E0C\u671B\u89C6\u56FE\u6539\u53D8\uFF0C\u4E5F\u5C31\u662F\u8BF4\u89C6\u56FE\u4E0D\u4F9D\u8D56\u4E8E\u8FD9\u4E2A\u6570\u636E\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u8003\u8651\u7528 \`useRef\` \u5BF9\u8FD9\u79CD\u6570\u636E\u8FDB\u884C\u7F13\u5B58

\u4E3A\u4EC0\u4E48 \`useRef\` \u53EF\u4EE5\u5BF9\u6570\u636E\u8FDB\u884C\u7F13\u5B58\uFF1F

\u8FD8\u8BB0\u5F97\u4E4B\u524D\u8BF4\u7684 useRef \u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684\u4F5C\u7528\u539F\u7406\u5417\uFF1F

React \u4F1A\u5C06 useRef \u548C\u51FD\u6570\u7EC4\u4EF6\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u5173\u8054\uFF0C\u5C06 useRef \u521B\u5EFA\u7684 ref \u5BF9\u8C61\u6302\u8F7D\u5230\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u4E0A\uFF0C\u8FD9\u6837\u4E00\u6765\u6BCF\u6B21\u51FD\u6570\u7EC4\u4EF6\u6267\u884C\uFF0C\u53EA\u8981\u51FD\u6570\u7EC4\u4EF6\u4E0D\u88AB\u9500\u6BC1\uFF0C\u90A3\u4E48\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u5B9E\u4F8B\u4E5F\u4F1A\u4E00\u76F4\u5B58\u5728\uFF0C\u6240\u4EE5 ref \u4E5F\u80FD\u591F\u88AB\u4FDD\u7559\u4E0B\u6765

\u5229\u7528\u8FD9\u4E2A\u7279\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u6570\u636E\u653E\u5230 \`useRef\` \u4E2D\uFF0C\u7531\u4E8E\u5B83\u5728\u5185\u5B58\u4E2D\u4E00\u76F4\u90FD\u662F\u540C\u4E00\u5757\u5185\u5B58\u5730\u5740\uFF0C\u6240\u4EE5\u65E0\u8BBA\u5982\u4F55\u53D8\u5316\u90FD\u4E0D\u4F1A\u5F71\u54CD\u5230\u89C6\u56FE\u7684\u6539\u53D8

:::warning{title=\u6CE8\u610F}

\u4E00\u5B9A\u8981\u770B\u6E05\u524D\u63D0\uFF0C\u53EA\u9002\u7528\u4E8E\u4E0E\u89C6\u56FE\u65E0\u5173\u7684\u6570\u636E

:::

\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684 demo \u6765\u66F4\u6E05\u695A\u5730\u4F53\u4F1A\u4E0B\u8FD9\u4E2A\u5E94\u7528\u573A\u666F

\u5047\u8BBE\u6211\u6709\u4E00\u4E2A \`todoList\` \u5217\u8868\uFF0C\u89C6\u56FE\u4E0A\u4F1A\u628A\u8FD9\u4E2A\u5217\u8868\u6E32\u67D3\u51FA\u6765\uFF0C\u5E76\u4E14\u6709\u4E00\u4E2A\u6570\u636E activeTodoItem \u662F\u63A7\u5236\u5F53\u524D\u9009\u4E2D\u7684\u662F\u54EA\u4E2A todoItem

\u70B9\u51FB todoItem \u4F1A\u5207\u6362\u8FD9\u4E2A activeTodoItem\uFF0C\u4F46\u662F\u5E76\u4E0D\u9700\u8981\u5728\u89C6\u56FE\u4E0A\u4F5C\u51FA\u4EFB\u4F55\u53D8\u5316\uFF0C\u5982\u679C\u4F7F\u7528 \`useState\` \u53BB\u4FDD\u5B58 activeTodoItem\uFF0C\u90A3\u4E48\u5F53\u5176\u53D8\u5316\u65F6\u4F1A\u5BFC\u81F4\u51FD\u6570\u7EC4\u4EF6\u91CD\u65B0\u6267\u884C\uFF0C\u89C6\u56FE\u91CD\u65B0\u6E32\u67D3\uFF0C\u4F46\u5728\u8FD9\u4E2A\u573A\u666F\u4E2D\u6211\u4EEC\u5E76\u4E0D\u5E0C\u671B\u66F4\u65B0\u89C6\u56FE

\u76F8\u5BF9\u7684\uFF0C\u6211\u4EEC\u5E0C\u671B\u8FD9\u4E2A activeTodoItem \u6570\u636E\u88AB\u7F13\u5B58\u8D77\u6765\uFF0C\u4E0D\u4F1A\u968F\u7740\u89C6\u56FE\u7684\u91CD\u65B0\u6E32\u67D3\u800C\u5BFC\u81F4\u5176\u4F5C\u4E3A \`useState\` \u7684\u6267\u884C\u7ED3\u679C\u91CD\u65B0\u751F\u6210\u4E00\u904D\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u6539\u6210\u7528 \`useRef\` \u5B9E\u73B0\uFF0C\u56E0\u4E3A\u5176\u5728\u5185\u5B58\u4E2D\u4E00\u76F4\u90FD\u662F\u540C\u4E00\u5757\u5185\u5B58\u5730\u5740\uFF0C\u8FD9\u6837\u5C31\u4E0D\u4F1A\u56E0\u4E3A\u5B83\u7684\u6539\u53D8\u800C\u66F4\u65B0\u89C6\u56FE\u4E86

\u540C\u7406\uFF0C\u5728 useEffect \u4E2D\u5982\u679C\u4F7F\u7528\u5230\u4E86 useRef \u7684\u6570\u636E\uFF0C\u4E5F\u4E0D\u9700\u8981\u5C06\u5176\u58F0\u660E\u5230 deps \u6570\u7EC4\u4E2D\uFF0C\u56E0\u4E3A\u5176\u5185\u5B58\u5730\u5740\u4E0D\u4F1A\u53D8\u5316\uFF0C\u6240\u4EE5\u6BCF\u6B21\u5728 useEffect \u4E2D\u83B7\u53D6\u5230\u7684 ref \u6570\u636E\u4E00\u5B9A\u662F\u6700\u65B0\u7684

\`\`\`tsx
interface TodoItem {
  id: number
  name: string
}

const todoList: TodoItem[] = [
  {
    id: 1,
    name: 'coding',
  },
  {
    id: 2,
    name: 'eating',
  },
  {
    id: 3,
    name: 'sleeping',
  },
  {
    id: 4,
    name: 'playing',
  },
]

const CacheDataWithRefDemo: React.FC = () => {
  const activeTodoItem = useRef(todoList[0])

  // \u6A21\u62DF componentDidUpdate -- \u5982\u679C\u6539\u53D8 activeTodoItem \u540E\u7EC4\u4EF6\u6CA1\u91CD\u65B0\u6E32\u67D3\uFF0C\u8BF4\u660E\u89C6\u56FE\u53EF\u4EE5\u4E0D\u4F9D\u8D56\u4E8E activeTodoItem \u6570\u636E
  useEffect(() => {
    logger.log('\u68C0\u6D4B\u7EC4\u4EF6\u662F\u5426\u6709\u66F4\u65B0')
  })

  return (
    <div className={s.container}>
      <div className={s.list}>
        {todoList.map((todoItem) => (
          <div
            key={todoItem.id}
            className={s.item}
            onClick={() => (activeTodoItem.current = todoItem)}
          >
            <p>{todoItem.name}</p>
          </div>
        ))}
      </div>

      <button onClick={() => logger.log(activeTodoItem.current)}>
        \u63A7\u5236\u53F0\u8F93\u51FA\u6700\u65B0\u7684 activeTodoItem
      </button>
    </div>
  )
}
\`\`\`

<DemoBlock>
  <CacheDataWithRefDemo />
</DemoBlock>

![\u4F7F\u7528ref\u7F13\u5B58\u51FD\u6570\u7EC4\u4EF6\u6570\u636E](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BD%BF%E7%94%A8ref%E7%BC%93%E5%AD%98%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%95%B0%E6%8D%AE.gif)
`;export{ml as content,yl as default,El as frontmatter,Cl as lastUpdatedTime,Dl as title,Fl as toc};
