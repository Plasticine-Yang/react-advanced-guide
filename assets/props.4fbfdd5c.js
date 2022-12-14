var A=Object.defineProperty;var u=(s,l,r)=>l in s?A(s,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[l]=r;var m=(s,l,r)=>(u(s,typeof l!="symbol"?l+"":l,r),r);import{jsxs as e,jsx as n,Fragment as g}from"react/jsx-runtime";import{D as h}from"./index.6529e49c.js";import p,{forwardRef as f,useState as I,useImperativeHandle as v,useRef as R}from"react";import{c as D}from"./scoped-log.b13f94b9.js";class P extends p.Component{constructor(){super(...arguments);m(this,"state",{message:"Hello React"})}handleChange(r){this.setState({message:r})}render(){return e("div",{children:[n(b,{message:this.state.message}),n("input",{type:"text",onChange:r=>this.handleChange(r.target.value)})]})}}class b extends p.Component{componentWillReceiveProps(l){console.log("[PropsDemo1Child] nextProps:",l)}render(){return n("div",{children:n("p",{children:this.props.message})})}}const x=D("InjectPropsDemo1"),k=()=>n(S,{children:n(j,{name:"plasticine",age:"21"})}),S=s=>s.children,j=s=>(x.log("props:",s),n("div",{children:"child"})),w=D("InjectPropsDemo2"),W=()=>n(V,{children:n(_,{name:"plasticine",age:"21"})}),V=s=>p.cloneElement(s.children,{injectedProp:"hello"}),_=s=>(w.log("props:",s),n("div",{children:"child"})),H="_form_qirhu_1",L={form:H},G=f((s,l)=>{const[r,i]=I({}),o={setFormItemValue(c,a){i(E=>({...E,[c]:a}))},submit(c){c(r)},reset(){i(c=>{const a={};for(const E of Object.keys(c))a[E]="";return a})}};v(l,()=>o);const t=(c,a)=>{i(E=>{const C={...E};return C[c]=a,C})},d=[];return p.Children.forEach(s.children,c=>{if(p.isValidElement(c)&&c.type.displayName==="FormItem"){const{name:a}=c.props,E=p.cloneElement(c,{key:a,value:r[a]||"",label:a,onChange:t},c.props.children);d.push(E)}}),n("div",{className:L.form,children:d})}),$="_form-item_2s78b_1",O={formItem:$},F=s=>{const{name:l,value:r,label:i,children:o}=s,{onChange:t}=s,d=c=>{t&&t(l,c)};return e("div",{className:O.formItem,children:[n("label",{htmlFor:l,children:i}),p.isValidElement(o)&&o.type.displayName==="Input"?p.cloneElement(o,{value:r,onChange:d}):""]})};F.displayName="FormItem";const y=s=>{const{value:l}=s,{onChange:r}=s;return n("input",{type:"text",value:l,onChange:i=>r&&r(i.target.value)})};y.displayName="Input";const Y="_container_fmjh6_1",M="_button-group_fmjh6_7",B={container:Y,buttonGroup:M},T=D("PropsPracticalDemo"),X=()=>{const s=R(null),l=()=>{var o;(o=s.current)==null||o.submit(t=>{T.log(t)})},r=()=>{var o;(o=s.current)==null||o.reset()},i=()=>{var o,t;(o=s.current)==null||o.setFormItemValue("username","plasticine"),(t=s.current)==null||t.setFormItemValue("password","123456")};return e("div",{className:B.container,children:[e(G,{ref:s,children:[n("div",{children:"I will be ignored."}),n(F,{name:"username",children:n(y,{})}),n(F,{name:"password",children:n(y,{})}),n(F,{name:"ignored",children:n("div",{children:"I will be ignored."})})]}),e("section",{className:B.buttonGroup,children:[n("button",{onClick:()=>l(),children:"\u63D0\u4EA4"}),n("button",{onClick:()=>r(),children:"\u91CD\u7F6E"}),n("button",{onClick:()=>i(),children:"\u751F\u6210\u8868\u5355\u6A21\u677F\u6570\u636E"})]})]})},Q=void 0,Z=[{id:"1-\u76D1\u542C-props-\u53D8\u5316",text:"1. \u76D1\u542C props \u53D8\u5316",depth:2},{id:"11-\u7C7B\u7EC4\u4EF6\u4E2D",text:"1.1. \u7C7B\u7EC4\u4EF6\u4E2D",depth:3},{id:"12-\u51FD\u6570\u7EC4\u4EF6\u4E2D",text:"1.2. \u51FD\u6570\u7EC4\u4EF6\u4E2D",depth:3},{id:"2-\u6CE8\u5165-props",text:"2. \u6CE8\u5165 props",depth:2},{id:"21-\u663E\u5F0F\u6CE8\u5165",text:"2.1. \u663E\u5F0F\u6CE8\u5165",depth:3},{id:"22-\u9690\u5F0F\u6CE8\u5165-props",text:"2.2. \u9690\u5F0F\u6CE8\u5165 props",depth:3},{id:"3-\u5B9E\u6218----form-\u548C-formitem",text:"3. \u5B9E\u6218 -- Form \u548C FormItem",depth:2},{id:"31-\u9700\u6C42\u5206\u6790",text:"3.1. \u9700\u6C42\u5206\u6790",depth:3},{id:"32-\u4F7F\u7528\u6848\u4F8B",text:"3.2. \u4F7F\u7528\u6848\u4F8B",depth:3},{id:"33-\u5B9E\u73B0",text:"3.3 \u5B9E\u73B0",depth:3},{id:"331-form-\u7EC4\u4EF6",text:"3.3.1 Form \u7EC4\u4EF6",depth:4},{id:"332-formitem-\u7EC4\u4EF6",text:"3.3.2 FormItem \u7EC4\u4EF6",depth:4},{id:"333-input-\u7EC4\u4EF6",text:"3.3.3 Input \u7EC4\u4EF6",depth:4}],ll="props";function N(s){const l=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",code:"code",div:"div",button:"button",span:"span",pre:"pre",img:"img",ol:"ol",li:"li",h4:"h4"},s.components);return e(g,{children:[e(l.h1,{id:"props",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#props",children:"#"}),"props"]}),`
`,e(l.h2,{id:"1-\u76D1\u542C-props-\u53D8\u5316",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#1-\u76D1\u542C-props-\u53D8\u5316",children:"#"}),"1. \u76D1\u542C props \u53D8\u5316"]}),`
`,e(l.h3,{id:"11-\u7C7B\u7EC4\u4EF6\u4E2D",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#11-\u7C7B\u7EC4\u4EF6\u4E2D",children:"#"}),"1.1. \u7C7B\u7EC4\u4EF6\u4E2D"]}),`
`,e(l.p,{children:["\u5728 React 17 \u53CA\u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",n(l.code,{children:"componentWillReceiveProps"})," \u751F\u547D\u5468\u671F\u8FDB\u884C\u66F4\u65B0"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u76D1\u542C props \u53D8\u5316 */"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"react"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1State"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  message"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1ChildProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  message"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"<{},"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1State"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1State"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"message"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"Hello React"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"handleChange"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"newVal"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"message"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newVal"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1Child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"message"}),n(l.span,{style:{color:"#81A1C1"},children:"={this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"message"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<input"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#8FBCBB"},children:"type"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"text"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#8FBCBB"},children:"onChange"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"e"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"handleChange"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"e"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"target"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1Child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1ChildProps"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// \u76D1\u542C props \u53D8\u5316"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"componentWillReceiveProps"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"nextProps"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1ChildProps"}),n(l.span,{style:{color:"#ECEFF4"},children:">)"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"console"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"[PropsDemo1Child] nextProps:"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"nextProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>{this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"message"}),n(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"PropsDemo1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(h,{children:n(P,{})}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BD%BF%E7%94%A8componentWillReceiveProps%E7%9B%91%E5%90%ACprops%E5%8F%98%E5%8C%96.png",alt:"\u4F7F\u7528componentWillReceiveProps\u76D1\u542Cprops\u53D8\u5316"})}),`
`,e(l.div,{className:"island-directive warning",children:[n(l.p,{className:"island-directive-title",children:"WARNING"}),e(l.div,{className:"island-directive-content",children:[n(l.p,{children:"componentWillReceiveProps \u5728 React 18 \u5F00\u59CB\u5DF2\u7ECF\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u751F\u547D\u5468\u671F\u8D85\u8D8A\u4E86 React \u7684\u53EF\u63A7\u5236\u7684\u8303\u56F4\u5185\uFF0C\u53EF\u80FD\u5F15\u8D77\u591A\u6B21\u6267\u884C\u7B49\u60C5\u51B5\u53D1\u751F"}),e(l.p,{children:["\u4F46\u662F\u6709\u66FF\u4EE3\u7684\u751F\u547D\u5468\u671F ",n(l.code,{children:"getDerivedStateFromProps"})]})]})]}),`
`,e(l.h3,{id:"12-\u51FD\u6570\u7EC4\u4EF6\u4E2D",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#12-\u51FD\u6570\u7EC4\u4EF6\u4E2D",children:"#"}),"1.2. \u51FD\u6570\u7EC4\u4EF6\u4E2D"]}),`
`,n(l.p,{children:"\u548C\u76D1\u542C state \u53D8\u5316\u4E00\u6837\uFF0C\u53EA\u9700\u5C06\u8981\u76D1\u542C\u7684 props \u653E\u5728 useEffect \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6570\u7EC4\u4E2D\u5373\u53EF"}),`
`,e(l.h2,{id:"2-\u6CE8\u5165-props",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#2-\u6CE8\u5165-props",children:"#"}),"2. \u6CE8\u5165 props"]}),`
`,e(l.p,{children:["\u53EF\u4EE5 ",n(l.code,{children:"\u663E\u5F0F\u6CE8\u5165"})," \u548C ",n(l.code,{children:"\u9690\u5F0F\u6CE8\u5165"})," props"]}),`
`,e(l.h3,{id:"21-\u663E\u5F0F\u6CE8\u5165",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#21-\u663E\u5F0F\u6CE8\u5165",children:"#"}),"2.1. \u663E\u5F0F\u6CE8\u5165"]}),`
`,n(l.p,{children:"\u5373\u4F20\u5165\u7ED9\u7EC4\u4EF6\u7684 props \u662F\u4EC0\u4E48\u6700\u7EC8\u5F97\u5230\u7684 props \u5C31\u662F\u4EC0\u4E48"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u663E\u5F0F\u6CE8\u5165 props */"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"createLoggerWithScope"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"~/utils"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"createLoggerWithScope"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"InjectPropsDemo1"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"InjectPropsDemo1"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Father"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"name"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"plasticine"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"age"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"21"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</"}),n(l.span,{style:{color:"#8FBCBB"},children:"Father"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Father"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"any"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"children"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Child"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"any"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"props:"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"child"}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"InjectPropsDemo1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(h,{children:n(k,{})}),`
`,e(l.h3,{id:"22-\u9690\u5F0F\u6CE8\u5165-props",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#22-\u9690\u5F0F\u6CE8\u5165-props",children:"#"}),"2.2. \u9690\u5F0F\u6CE8\u5165 props"]}),`
`,n(l.p,{children:"\u4F20\u7ED9\u7EC4\u4EF6\u7684 props \u548C\u6700\u7EC8\u7EC4\u4EF6\u5F97\u5230\u7684 props \u4E0D\u540C\uFF0C\u901A\u8FC7\u4E2D\u95F4\u7EC4\u4EF6\u9690\u5F0F\u5730\u5411\u7EC4\u4EF6\u4E2D\u6CE8\u5165\u989D\u5916\u7684 props"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u9690\u5F0F\u6CE8\u5165 props */"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"react"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"createLoggerWithScope"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"~/utils"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"createLoggerWithScope"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"InjectPropsDemo2"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"InjectPropsDemo2"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Father"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"name"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"plasticine"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"age"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"21"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</"}),n(l.span,{style:{color:"#8FBCBB"},children:"Father"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Father"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"any"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line highlighted",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"cloneElement"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"children"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"injectedProp"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"hello"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Child"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"any"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"props:"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"child"}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"InjectPropsDemo2"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.div,{className:"island-directive tip",children:[n(l.p,{className:"island-directive-title",children:"TIP"}),n(l.div,{className:"island-directive-content",children:n(l.p,{children:"\u5F53\u8981\u4FEE\u6539\u5143\u7D20\u7684 props \u65F6\uFF0C\u63A8\u8350\u7684\u65B9\u5F0F\u662F\u7528 cloneElement \u514B\u9686\u539F\u7EC4\u4EF6\uFF0C\u5BF9\u526F\u672C\u8FDB\u884C\u4FEE\u6539"})})]}),`
`,n(h,{children:n(W,{})}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E6%98%BE%E5%BC%8F%E6%B3%A8%E5%85%A5%E5%92%8C%E9%9A%90%E5%BC%8F%E6%B3%A8%E5%85%A5props.png",alt:"\u663E\u5F0F\u6CE8\u5165\u548C\u9690\u5F0F\u6CE8\u5165props"})}),`
`,e(l.h2,{id:"3-\u5B9E\u6218----form-\u548C-formitem",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#3-\u5B9E\u6218----form-\u548C-formitem",children:"#"}),"3. \u5B9E\u6218 -- Form \u548C FormItem"]}),`
`,n(l.p,{children:"\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u8981\u7528\u524D\u9762\u8BB2\u5230\u7684\u77E5\u8BC6\u8FDB\u884C\u5B9E\u6218\uFF0C\u6BD4\u5982\uFF1A"}),`
`,e(l.ol,{children:[`
`,n(l.li,{children:"\u9690\u5F0F\u6CE8\u5165 props \u7528\u4E8E\u5C4F\u853D\u5BF9\u5916\u4F7F\u7528\u7EC6\u8282"}),`
`,n(l.li,{children:"\u5BF9 props.children \u8FDB\u884C\u8FC7\u6EE4\uFF0C\u53EA\u6E32\u67D3\u76EE\u6807\u7EC4\u4EF6"}),`
`]}),`
`,e(l.h3,{id:"31-\u9700\u6C42\u5206\u6790",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#31-\u9700\u6C42\u5206\u6790",children:"#"}),"3.1. \u9700\u6C42\u5206\u6790"]}),`
`,e(l.ol,{children:[`
`,e(l.li,{children:[`
`,n(l.p,{children:"Form \u7EC4\u4EF6\u5B9E\u4F8B\u63D0\u4F9B\u4E09\u4E2A\u65B9\u6CD5\uFF1A"}),`
`,n(l.p,{children:"1.1. setFormItemValue: \u8BBE\u7F6E\u8868\u5355\u9879\u7684\u503C"}),`
`,n(l.p,{children:"1.2. submit: \u63D0\u4EA4\u8868\u5355"}),`
`,n(l.p,{children:"1.3. reset: \u91CD\u7F6E\u8868\u5355"}),`
`]}),`
`,e(l.li,{children:[`
`,n(l.p,{children:"FormItem \u7EC4\u4EF6\u63A5\u6536\u4E00\u4E2A name prop \u4F5C\u4E3A\u6700\u7EC8\u63D0\u4EA4\u8868\u5355\u65F6\u7684 key \u4EE5\u53CA\u8868\u5355\u9879\u5C55\u793A\u65F6\u7684 label"}),`
`]}),`
`,e(l.li,{children:[`
`,n(l.p,{children:"Input \u7EC4\u4EF6\u8D1F\u8D23\u6E32\u67D3\u6587\u672C\u6846"}),`
`]}),`
`]}),`
`,e(l.div,{className:"island-directive info",children:[n(l.p,{className:"island-directive-title",children:"\u989D\u5916\u9700\u6C42"}),n(l.div,{className:"island-directive-content",children:e(l.ol,{children:[`
`,n(l.li,{children:"Form \u7EC4\u4EF6\u63D2\u69FD\u4E2D\u53EA\u4F1A\u6E32\u67D3 FormItem \u7EC4\u4EF6\uFF0C\u5FFD\u7565\u5176\u4ED6\u7EC4\u4EF6\u6216\u5143\u7D20\u7684\u6E32\u67D3"}),`
`,n(l.li,{children:"FormItem \u7EC4\u4EF6\u63D2\u69FD\u4E2D\u53EA\u4F1A\u6E32\u67D3 Input \u7EC4\u4EF6\uFF0C\u5FFD\u7565\u5176\u4ED6\u7EC4\u4EF6\u6216\u5143\u7D20\u7684\u6E32\u67D3"}),`
`]})})]}),`
`,e(l.h3,{id:"32-\u4F7F\u7528\u6848\u4F8B",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#32-\u4F7F\u7528\u6848\u4F8B",children:"#"}),"3.2. \u4F7F\u7528\u6848\u4F8B"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"PropsPracticalDemo"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"formRef"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"useRef"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"FormInstance"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#81A1C1"},children:"null"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u63D0\u4EA4\u8868\u5355 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"submit"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"formRef"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"current"}),n(l.span,{style:{color:"#ECEFF4"},children:"?."}),n(l.span,{style:{color:"#88C0D0"},children:"submit"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"formData"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"formData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u91CD\u7F6E\u8868\u5355 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"reset"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"formRef"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"current"}),n(l.span,{style:{color:"#ECEFF4"},children:"?."}),n(l.span,{style:{color:"#88C0D0"},children:"reset"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u751F\u6210\u8868\u5355\u6A21\u677F\u6570\u636E */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"generateFormData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"formRef"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"current"}),n(l.span,{style:{color:"#ECEFF4"},children:"?."}),n(l.span,{style:{color:"#88C0D0"},children:"setFormItemValue"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"username"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"plasticine"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"formRef"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"current"}),n(l.span,{style:{color:"#ECEFF4"},children:"?."}),n(l.span,{style:{color:"#88C0D0"},children:"setFormItemValue"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"password"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"123456"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"container"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Form"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ref"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"formRef"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"I will be ignored."}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"FormItem"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"name"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"username"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Input"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"</"}),n(l.span,{style:{color:"#8FBCBB"},children:"FormItem"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"FormItem"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"name"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"password"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Input"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"</"}),n(l.span,{style:{color:"#8FBCBB"},children:"FormItem"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"FormItem"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"name"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"ignored"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"I will be ignored."}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"</"}),n(l.span,{style:{color:"#8FBCBB"},children:"FormItem"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</"}),n(l.span,{style:{color:"#8FBCBB"},children:"Form"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<section"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"buttonGroup"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"submit"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u63D0\u4EA4"}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"reset"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u91CD\u7F6E"}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"generateFormData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u751F\u6210\u8868\u5355\u6A21\u677F\u6570\u636E"}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</section>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h3,{id:"33-\u5B9E\u73B0",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#33-\u5B9E\u73B0",children:"#"}),"3.3 \u5B9E\u73B0"]}),`
`,e(l.h4,{id:"331-form-\u7EC4\u4EF6",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#331-form-\u7EC4\u4EF6",children:"#"}),"3.3.1 Form \u7EC4\u4EF6"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#D8DEE9"},children:"forwardRef"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#D8DEE9"},children:"ReactElement"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#D8DEE9"},children:"useImperativeHandle"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#D8DEE9"},children:"useState"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"react"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"FormItemProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"../FormItem"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"./style.module.scss"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FormData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Record"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:">"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FormInstance"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u8BBE\u7F6E\u8868\u5355\u9879\u7684\u503C */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"setFormItemValue"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"key"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u63D0\u4EA4\u8868\u5355 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"submit"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#88C0D0"},children:"handleFormSubmit"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"formData"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FormData"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u91CD\u7F6E\u8868\u5355 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"reset"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Form"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"any"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"forwardRef"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"FormInstance"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"PropsWithChildren"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"ref"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"formData"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"setFormData"}),n(l.span,{style:{color:"#ECEFF4"},children:"]"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"useState"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"FormData"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"{}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u901A\u8FC7 ref \u83B7\u53D6\u7684\u7EC4\u4EF6\u5B9E\u4F8B */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"formInstance"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FormInstance"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#88C0D0"},children:"setFormItemValue"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"key"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#88C0D0"},children:"setFormData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"formData"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"..."}),n(l.span,{style:{color:"#D8DEE9"},children:"formData"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#D8DEE9"},children:"[key]"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#88C0D0"},children:"submit"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"handleFormSubmit"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#88C0D0"},children:"handleFormSubmit"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"formData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#88C0D0"},children:"reset"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#88C0D0"},children:"setFormData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFormData"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"initialFormData"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FormData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"for"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"key"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"of"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Object"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"keys"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFormData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")) "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#D8DEE9"},children:"initialFormData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"key"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"] "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"''"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"initialFormData"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u901A\u8FC7 useImperativeHandle \u5C06\u6307\u5B9A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u66B4\u9732\u7ED9\u5916\u754C"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"useImperativeHandle"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"ref"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"formInstance"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"handleChange"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"key"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#88C0D0"},children:"setFormData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFormData"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"clonedFormData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"..."}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFormData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"clonedFormData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"key"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"] "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"value"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"clonedFormData"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"children"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactElement"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"[] "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" []"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"Children"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"forEach"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"children"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"isValidElement"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#81A1C1"},children:"&&"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        ("}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"as"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"displayName"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"==="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"FormItem"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      ) "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"        "}),n(l.span,{style:{color:"#616E88"},children:"// \u9690\u5F0F\u6CE8\u5165 props"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"cloneElement"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"FormItemProps"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"as"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactElement"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#D8DEE9"},children:"key"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"formData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"] "}),n(l.span,{style:{color:"#81A1C1"},children:"||"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"''"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#D8DEE9"},children:"label"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#D8DEE9"},children:"onChange"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"handleChange"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"children"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"        )"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"children"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"push"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"form"}),n(l.span,{style:{color:"#81A1C1"},children:"}>{"}),n(l.span,{style:{color:"#D8DEE9"},children:"children"}),n(l.span,{style:{color:"#81A1C1"},children:"}</div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:")"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"FormData"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"FormInstance"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Form"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h4,{id:"332-formitem-\u7EC4\u4EF6",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#332-formitem-\u7EC4\u4EF6",children:"#"}),"3.3.2 FormItem \u7EC4\u4EF6"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"react"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"InputProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"../Input"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"./style.module.scss"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FormItemProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"PropsWithChildren"}),n(l.span,{style:{color:"#ECEFF4"},children:"<{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  name"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  value"}),n(l.span,{style:{color:"#81A1C1"},children:"?:"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  label"}),n(l.span,{style:{color:"#81A1C1"},children:"?:"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"onChange"}),n(l.span,{style:{color:"#81A1C1"},children:"?:"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"key"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}>"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"FormItem"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"FormItemProps"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"label"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"children"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" onChange"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"emitChange"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"handleChange"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"emitChange"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"&&"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"emitChange"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"formItem"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<label"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"htmlFor"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#81A1C1"},children:"}>{"}),n(l.span,{style:{color:"#D8DEE9"},children:"label"}),n(l.span,{style:{color:"#81A1C1"},children:"}</label>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"isValidElement"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"children"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#81A1C1"},children:"&&"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      ("}),n(l.span,{style:{color:"#D8DEE9"},children:"children"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"as"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"displayName"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"==="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"Input"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"?"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#616E88"},children:"// \u9690\u5F0F\u6CE8\u5165 Input \u9700\u8981\u7684 prop"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"cloneElement"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"InputProps"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"children"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"as"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactElement"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#D8DEE9"},children:"onChange"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"handleChange"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"''"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u8D77\u5230\u6807\u8BC6\u4F5C\u7528 \u7528\u4E8E\u7236\u7EC4\u4EF6\u6761\u4EF6\u6E32\u67D3\u63D2\u69FD\u65F6\u4F7F\u7528"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9"},children:"FormItem"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"displayName"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"FormItem"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"FormItemProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"FormItem"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h4,{id:"333-input-\u7EC4\u4EF6",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#333-input-\u7EC4\u4EF6",children:"#"}),"3.3.3 Input \u7EC4\u4EF6"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"/**"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:" * "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u8868\u5355\u9879\u4E2D\u7684\u63D2\u69FD\u7EC4\u4EF6 -- FormItem \u53EA\u4F1A\u6E32\u67D3 Input \u7EC4\u4EF6\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u4F1A\u88AB\u5FFD\u7565"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:" */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"InputProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  value"}),n(l.span,{style:{color:"#81A1C1"},children:"?:"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"onChange"}),n(l.span,{style:{color:"#81A1C1"},children:"?:"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Input"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"InputProps"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" onChange"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"emitChange"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<input"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#8FBCBB"},children:"type"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"text"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#8FBCBB"},children:"value"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#8FBCBB"},children:"onChange"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"e"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"emitChange"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"&&"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"emitChange"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"e"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"target"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"value"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// \u8D77\u5230\u6807\u8BC6\u4F5C\u7528 \u7528\u4E8E\u7236\u7EC4\u4EF6\u6761\u4EF6\u6E32\u67D3\u63D2\u69FD\u65F6\u4F7F\u7528"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9"},children:"Input"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"displayName"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"Input"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"InputProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Input"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(h,{children:n(X,{})})]})}function nl(s={}){const{wrapper:l}=s.components||{};return l?n(l,Object.assign({},s,{children:n(N,s)})):N(s)}const el="2022/12/14 02:23:45",sl=`import { DemoBlock } from '@island/demo-block'

import { PropsDemo1 } from '~/demos/props/demo1.tsx'
import { InjectPropsDemo1 } from '~/demos/props/demo2.tsx'
import { InjectPropsDemo2 } from '~/demos/props/demo3.tsx'
import { PropsPracticalDemo } from '~/demos/props/demo4'

# props

## 1. \u76D1\u542C props \u53D8\u5316

### 1.1. \u7C7B\u7EC4\u4EF6\u4E2D

\u5728 React 17 \u53CA\u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 \`componentWillReceiveProps\` \u751F\u547D\u5468\u671F\u8FDB\u884C\u66F4\u65B0

\`\`\`tsx
/** @description \u76D1\u542C props \u53D8\u5316 */

import React from 'react'

interface PropsDemo1State {
  message: string
}
interface PropsDemo1ChildProps {
  message: string
}
class PropsDemo1 extends React.Component<{}, PropsDemo1State> {
  state: Readonly<PropsDemo1State> = {
    message: 'Hello React',
  }

  handleChange(newVal: string) {
    this.setState({ message: newVal })
  }

  render(): React.ReactNode {
    return (
      <div>
        <PropsDemo1Child message={this.state.message} />
        <input
          type="text"
          onChange={(e) => this.handleChange(e.target.value)}
        />
      </div>
    )
  }
}
class PropsDemo1Child extends React.Component<PropsDemo1ChildProps> {
  // \u76D1\u542C props \u53D8\u5316
  componentWillReceiveProps(nextProps: Readonly<PropsDemo1ChildProps>): void {
    console.log('[PropsDemo1Child] nextProps:', nextProps)
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export { PropsDemo1 }
\`\`\`

<DemoBlock>
  <PropsDemo1 />
</DemoBlock>

![\u4F7F\u7528componentWillReceiveProps\u76D1\u542Cprops\u53D8\u5316](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BD%BF%E7%94%A8componentWillReceiveProps%E7%9B%91%E5%90%ACprops%E5%8F%98%E5%8C%96.png)

:::warning

componentWillReceiveProps \u5728 React 18 \u5F00\u59CB\u5DF2\u7ECF\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u751F\u547D\u5468\u671F\u8D85\u8D8A\u4E86 React \u7684\u53EF\u63A7\u5236\u7684\u8303\u56F4\u5185\uFF0C\u53EF\u80FD\u5F15\u8D77\u591A\u6B21\u6267\u884C\u7B49\u60C5\u51B5\u53D1\u751F

\u4F46\u662F\u6709\u66FF\u4EE3\u7684\u751F\u547D\u5468\u671F \`getDerivedStateFromProps\`

:::

### 1.2. \u51FD\u6570\u7EC4\u4EF6\u4E2D

\u548C\u76D1\u542C state \u53D8\u5316\u4E00\u6837\uFF0C\u53EA\u9700\u5C06\u8981\u76D1\u542C\u7684 props \u653E\u5728 useEffect \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6570\u7EC4\u4E2D\u5373\u53EF

## 2. \u6CE8\u5165 props

\u53EF\u4EE5 \`\u663E\u5F0F\u6CE8\u5165\` \u548C \`\u9690\u5F0F\u6CE8\u5165\` props

### 2.1. \u663E\u5F0F\u6CE8\u5165

\u5373\u4F20\u5165\u7ED9\u7EC4\u4EF6\u7684 props \u662F\u4EC0\u4E48\u6700\u7EC8\u5F97\u5230\u7684 props \u5C31\u662F\u4EC0\u4E48

\`\`\`tsx
/** @description \u663E\u5F0F\u6CE8\u5165 props */

import { createLoggerWithScope } from '~/utils'

const logger = createLoggerWithScope('InjectPropsDemo1')

const InjectPropsDemo1: React.FC = () => {
  return (
    <Father>
      <Child name="plasticine" age="21" />
    </Father>
  )
}

const Father: React.FC<any> = (props) => {
  return props.children
}

const Child: React.FC<any> = (props) => {
  logger.log('props:', props)
  return <div>child</div>
}

export { InjectPropsDemo1 }
\`\`\`

<DemoBlock>
  <InjectPropsDemo1 />
</DemoBlock>

### 2.2. \u9690\u5F0F\u6CE8\u5165 props

\u4F20\u7ED9\u7EC4\u4EF6\u7684 props \u548C\u6700\u7EC8\u7EC4\u4EF6\u5F97\u5230\u7684 props \u4E0D\u540C\uFF0C\u901A\u8FC7\u4E2D\u95F4\u7EC4\u4EF6\u9690\u5F0F\u5730\u5411\u7EC4\u4EF6\u4E2D\u6CE8\u5165\u989D\u5916\u7684 props

\`\`\`tsx{17}
/** @description \u9690\u5F0F\u6CE8\u5165 props */

import React from 'react'
import { createLoggerWithScope } from '~/utils'

const logger = createLoggerWithScope('InjectPropsDemo2')

const InjectPropsDemo2: React.FC = () => {
  return (
    <Father>
      <Child name="plasticine" age="21" />
    </Father>
  )
}

const Father: React.FC<any> = (props) => {
  return React.cloneElement(props.children, { injectedProp: 'hello' })
}

const Child: React.FC<any> = (props) => {
  logger.log('props:', props)
  return <div>child</div>
}

export { InjectPropsDemo2 }
\`\`\`

:::tip

\u5F53\u8981\u4FEE\u6539\u5143\u7D20\u7684 props \u65F6\uFF0C\u63A8\u8350\u7684\u65B9\u5F0F\u662F\u7528 cloneElement \u514B\u9686\u539F\u7EC4\u4EF6\uFF0C\u5BF9\u526F\u672C\u8FDB\u884C\u4FEE\u6539

:::

<DemoBlock>
  <InjectPropsDemo2 />
</DemoBlock>

![\u663E\u5F0F\u6CE8\u5165\u548C\u9690\u5F0F\u6CE8\u5165props](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E6%98%BE%E5%BC%8F%E6%B3%A8%E5%85%A5%E5%92%8C%E9%9A%90%E5%BC%8F%E6%B3%A8%E5%85%A5props.png)

## 3. \u5B9E\u6218 -- Form \u548C FormItem

\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u8981\u7528\u524D\u9762\u8BB2\u5230\u7684\u77E5\u8BC6\u8FDB\u884C\u5B9E\u6218\uFF0C\u6BD4\u5982\uFF1A

1. \u9690\u5F0F\u6CE8\u5165 props \u7528\u4E8E\u5C4F\u853D\u5BF9\u5916\u4F7F\u7528\u7EC6\u8282
2. \u5BF9 props.children \u8FDB\u884C\u8FC7\u6EE4\uFF0C\u53EA\u6E32\u67D3\u76EE\u6807\u7EC4\u4EF6

### 3.1. \u9700\u6C42\u5206\u6790

1. Form \u7EC4\u4EF6\u5B9E\u4F8B\u63D0\u4F9B\u4E09\u4E2A\u65B9\u6CD5\uFF1A

   1.1. setFormItemValue: \u8BBE\u7F6E\u8868\u5355\u9879\u7684\u503C

   1.2. submit: \u63D0\u4EA4\u8868\u5355

   1.3. reset: \u91CD\u7F6E\u8868\u5355

2. FormItem \u7EC4\u4EF6\u63A5\u6536\u4E00\u4E2A name prop \u4F5C\u4E3A\u6700\u7EC8\u63D0\u4EA4\u8868\u5355\u65F6\u7684 key \u4EE5\u53CA\u8868\u5355\u9879\u5C55\u793A\u65F6\u7684 label

3. Input \u7EC4\u4EF6\u8D1F\u8D23\u6E32\u67D3\u6587\u672C\u6846

:::info{title=\u989D\u5916\u9700\u6C42}

1. Form \u7EC4\u4EF6\u63D2\u69FD\u4E2D\u53EA\u4F1A\u6E32\u67D3 FormItem \u7EC4\u4EF6\uFF0C\u5FFD\u7565\u5176\u4ED6\u7EC4\u4EF6\u6216\u5143\u7D20\u7684\u6E32\u67D3
2. FormItem \u7EC4\u4EF6\u63D2\u69FD\u4E2D\u53EA\u4F1A\u6E32\u67D3 Input \u7EC4\u4EF6\uFF0C\u5FFD\u7565\u5176\u4ED6\u7EC4\u4EF6\u6216\u5143\u7D20\u7684\u6E32\u67D3

:::

### 3.2. \u4F7F\u7528\u6848\u4F8B

\`\`\`tsx
const PropsPracticalDemo: React.FC = () => {
  const formRef = useRef<FormInstance>(null)

  /** @description \u63D0\u4EA4\u8868\u5355 */
  const submit = () => {
    formRef.current?.submit((formData) => {
      logger.log(formData)
    })
  }

  /** @description \u91CD\u7F6E\u8868\u5355 */
  const reset = () => {
    formRef.current?.reset()
  }

  /** @description \u751F\u6210\u8868\u5355\u6A21\u677F\u6570\u636E */
  const generateFormData = () => {
    formRef.current?.setFormItemValue('username', 'plasticine')
    formRef.current?.setFormItemValue('password', '123456')
  }

  return (
    <div className={s.container}>
      <Form ref={formRef}>
        <div>I will be ignored.</div>
        <FormItem name="username">
          <Input />
        </FormItem>

        <FormItem name="password">
          <Input />
        </FormItem>

        <FormItem name="ignored">
          <div>I will be ignored.</div>
        </FormItem>
      </Form>

      <section className={s.buttonGroup}>
        <button onClick={() => submit()}>\u63D0\u4EA4</button>
        <button onClick={() => reset()}>\u91CD\u7F6E</button>
        <button onClick={() => generateFormData()}>\u751F\u6210\u8868\u5355\u6A21\u677F\u6570\u636E</button>
      </section>
    </div>
  )
}
\`\`\`

### 3.3 \u5B9E\u73B0

#### 3.3.1 Form \u7EC4\u4EF6

\`\`\`tsx
import React, {
  forwardRef,
  ReactElement,
  useImperativeHandle,
  useState,
} from 'react'

import type { FormItemProps } from '../FormItem'

import s from './style.module.scss'

type FormData = Record<string, string>

interface FormInstance {
  /** @description \u8BBE\u7F6E\u8868\u5355\u9879\u7684\u503C */
  setFormItemValue: (key: string, value: string) => void

  /** @description \u63D0\u4EA4\u8868\u5355 */
  submit: (handleFormSubmit: (formData: FormData) => void) => void

  /** @description \u91CD\u7F6E\u8868\u5355 */
  reset: () => void
}

const Form: React.FC<any> = forwardRef<FormInstance, React.PropsWithChildren>(
  (props, ref) => {
    const [formData, setFormData] = useState<FormData>({})

    /** @description \u901A\u8FC7 ref \u83B7\u53D6\u7684\u7EC4\u4EF6\u5B9E\u4F8B */
    const formInstance: FormInstance = {
      setFormItemValue(key, value) {
        setFormData((formData) => ({
          ...formData,
          [key]: value,
        }))
      },

      submit(handleFormSubmit) {
        handleFormSubmit(formData)
      },

      reset() {
        setFormData((oldFormData) => {
          const initialFormData: FormData = {}

          for (const key of Object.keys(oldFormData)) {
            initialFormData[key] = ''
          }

          return initialFormData
        })
      },
    }

    // \u901A\u8FC7 useImperativeHandle \u5C06\u6307\u5B9A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u66B4\u9732\u7ED9\u5916\u754C
    useImperativeHandle(ref, () => formInstance)

    const handleChange = (key: string, value: string) => {
      setFormData((oldFormData) => {
        const clonedFormData = { ...oldFormData }
        clonedFormData[key] = value

        return clonedFormData
      })
    }

    const children: ReactElement[] = []
    React.Children.forEach(props.children, (child) => {
      if (
        React.isValidElement(child) &&
        (child.type as React.FC).displayName === 'FormItem'
      ) {
        const { name } = child.props

        // \u9690\u5F0F\u6CE8\u5165 props
        const Child = React.cloneElement<FormItemProps>(
          child as React.ReactElement,
          {
            key: name,
            value: formData[name] || '',
            label: name,
            onChange: handleChange,
          },
          child.props.children,
        )

        children.push(Child)
      }
    })

    return <div className={s.form}>{children}</div>
  },
)

export type { FormData, FormInstance }
export { Form }
\`\`\`

#### 3.3.2 FormItem \u7EC4\u4EF6

\`\`\`tsx
import React from 'react'

import type { InputProps } from '../Input'

import s from './style.module.scss'

type FormItemProps = React.PropsWithChildren<{
  name: string
  value?: string
  label?: string

  onChange?: (key: string, value: string) => void
}>
const FormItem: React.FC<FormItemProps> = (props) => {
  const { name, value, label, children } = props
  const { onChange: emitChange } = props

  const handleChange = (value: string) => {
    emitChange && emitChange(name, value)
  }

  return (
    <div className={s.formItem}>
      <label htmlFor={name}>{label}</label>
      {React.isValidElement(children) &&
      (children.type as React.FC).displayName === 'Input'
        ? // \u9690\u5F0F\u6CE8\u5165 Input \u9700\u8981\u7684 prop
          React.cloneElement<InputProps>(children as React.ReactElement, {
            value,
            onChange: handleChange,
          })
        : ''}
    </div>
  )
}

// \u8D77\u5230\u6807\u8BC6\u4F5C\u7528 \u7528\u4E8E\u7236\u7EC4\u4EF6\u6761\u4EF6\u6E32\u67D3\u63D2\u69FD\u65F6\u4F7F\u7528
FormItem.displayName = 'FormItem'

export type { FormItemProps }
export { FormItem }
\`\`\`

#### 3.3.3 Input \u7EC4\u4EF6

\`\`\`tsx
/**
 * @description \u8868\u5355\u9879\u4E2D\u7684\u63D2\u69FD\u7EC4\u4EF6 -- FormItem \u53EA\u4F1A\u6E32\u67D3 Input \u7EC4\u4EF6\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u4F1A\u88AB\u5FFD\u7565
 */
interface InputProps {
  value?: string

  onChange?: (value: string) => void
}
const Input: React.FC<InputProps> = (props) => {
  const { value } = props
  const { onChange: emitChange } = props

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => emitChange && emitChange(e.target.value)}
    />
  )
}

// \u8D77\u5230\u6807\u8BC6\u4F5C\u7528 \u7528\u4E8E\u7236\u7EC4\u4EF6\u6761\u4EF6\u6E32\u67D3\u63D2\u69FD\u65F6\u4F7F\u7528
Input.displayName = 'Input'

export type { InputProps }
export { Input }
\`\`\`

<DemoBlock>
  <PropsPracticalDemo />
</DemoBlock>
`;export{sl as content,nl as default,Q as frontmatter,el as lastUpdatedTime,ll as title,Z as toc};
