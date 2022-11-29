var B=Object.defineProperty;var g=(s,l,r)=>l in s?B(s,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[l]=r;var y=(s,l,r)=>(g(s,typeof l!="symbol"?l+"":l,r),r);import{jsxs as n,jsx as e,Fragment as A}from"react/jsx-runtime";import{D as p}from"./index.6529e49c.js";import i,{forwardRef as N,useState as u}from"react";class P extends i.Component{constructor(){super(...arguments);y(this,"state",{message:"Hello React"})}handleChange(r){this.setState({message:r})}render(){return n("div",{children:[e(f,{message:this.state.message}),e("input",{type:"text",onChange:r=>this.handleChange(r.target.value)})]})}}class f extends i.Component{componentWillReceiveProps(l){console.log("[PropsDemo1Child] nextProps:",l)}render(){return e("div",{children:e("p",{children:this.props.message})})}}const m=s=>({log:(r,...o)=>console.log(`[${s}]`,r,...o)}),v=m("InjectPropsDemo1"),R=()=>e(x,{children:e(I,{name:"plasticine",age:"21"})}),x=s=>s.children,I=s=>(v.log("props:",s),e("div",{children:"child"})),j=m("InjectPropsDemo2"),b=()=>e(S,{children:e(W,{name:"plasticine",age:"21"})}),S=s=>i.cloneElement(s.children,{injectedProp:"hello"}),W=s=>(j.log("props:",s),e("div",{children:"child"})),_="_container_i0hqo_1",k="_button-group_i0hqo_6",w="_form_i0hqo_9",L="_form-display_i0hqo_12",d={container:_,buttonGroup:k,form:w,formDisplay:L},q=()=>n("div",{className:d.container,children:[n("section",{className:d.form,children:[n(G,{children:[e("div",{children:"I will be ignored."}),e(D,{name:"username"}),e(D,{name:"password"})]}),n("section",{className:d.buttonGroup,children:[e("button",{children:"\u63D0\u4EA4"}),e("button",{children:"\u91CD\u7F6E"})]})]}),n("section",{className:d.formDisplay,children:[e("p",{children:"username: plasticine"}),e("p",{children:"password: 123123"})]})]}),G=N((s,l)=>{const[r,o]=u({}),h=(c,a)=>{o(E=>{const F={...E};return F[c]=a,F})},t=[];return i.Children.forEach(s.children,c=>{if(c.type.name==="FormItem"){const{name:a}=c.props,E=i.cloneElement(c,{key:a,value:r[a]||"",label:a,onChange:h},c.props.children);t.push(E)}}),e("div",{children:t})}),D=s=>{const{name:l,value:r,label:o}=s,{onChange:h=()=>{}}=s;return n("div",{children:[e("label",{htmlFor:l,children:o}),e("input",{type:"text",id:l,name:l,value:r,onChange:t=>h(l,t.target.value)})]})},M=void 0,O=[{id:"1-\u76D1\u542C-props-\u53D8\u5316",text:"1. \u76D1\u542C props \u53D8\u5316",depth:2},{id:"11-\u7C7B\u7EC4\u4EF6\u4E2D",text:"1.1. \u7C7B\u7EC4\u4EF6\u4E2D",depth:3},{id:"12-\u51FD\u6570\u7EC4\u4EF6\u4E2D",text:"1.2. \u51FD\u6570\u7EC4\u4EF6\u4E2D",depth:3},{id:"2-\u6CE8\u5165-props",text:"2. \u6CE8\u5165 props",depth:2},{id:"21-\u663E\u5F0F\u6CE8\u5165",text:"2.1. \u663E\u5F0F\u6CE8\u5165",depth:3},{id:"22-\u9690\u5F0F\u6CE8\u5165-props",text:"2.2. \u9690\u5F0F\u6CE8\u5165 props",depth:3},{id:"3-\u5B9E\u6218----form-\u548C-formitem",text:"3. \u5B9E\u6218 -- Form \u548C FormItem",depth:2}],T="\u6DF1\u5165 Props";function C(s){const l=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",code:"code",div:"div",button:"button",span:"span",pre:"pre",img:"img"},s.components);return n(A,{children:[n(l.h1,{id:"\u6DF1\u5165-props",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6DF1\u5165-props",children:"#"}),"\u6DF1\u5165 Props"]}),`
`,n(l.h2,{id:"1-\u76D1\u542C-props-\u53D8\u5316",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#1-\u76D1\u542C-props-\u53D8\u5316",children:"#"}),"1. \u76D1\u542C props \u53D8\u5316"]}),`
`,n(l.h3,{id:"11-\u7C7B\u7EC4\u4EF6\u4E2D",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#11-\u7C7B\u7EC4\u4EF6\u4E2D",children:"#"}),"1.1. \u7C7B\u7EC4\u4EF6\u4E2D"]}),`
`,n(l.p,{children:["\u5728 React 17 \u53CA\u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e(l.code,{children:"componentWillReceiveProps"})," \u751F\u547D\u5468\u671F\u8FDB\u884C\u66F4\u65B0"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u76D1\u542C props \u53D8\u5316 */"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1State"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  message"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1ChildProps"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  message"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"<{},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1State"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1State"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"Hello React"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"handleChange"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"newVal"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"string"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"newVal"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1Child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:"={this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<input"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"type"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"text"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"onChange"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"handleChange"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"e"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"target"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"value"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1Child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1ChildProps"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// \u76D1\u542C props \u53D8\u5316"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"componentWillReceiveProps"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"nextProps"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"PropsDemo1ChildProps"}),e(l.span,{style:{color:"#ECEFF4"},children:">)"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"void"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"[PropsDemo1Child] nextProps:"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"nextProps"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>{this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"message"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"PropsDemo1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(p,{children:e(P,{})}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BD%BF%E7%94%A8componentWillReceiveProps%E7%9B%91%E5%90%ACprops%E5%8F%98%E5%8C%96.png",alt:"\u4F7F\u7528componentWillReceiveProps\u76D1\u542Cprops\u53D8\u5316"})}),`
`,n(l.div,{className:"island-directive warning",children:[e(l.p,{className:"island-directive-title",children:"WARNING"}),n(l.div,{className:"island-directive-content",children:[e(l.p,{children:"componentWillReceiveProps \u5728 React 18 \u5F00\u59CB\u5DF2\u7ECF\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u751F\u547D\u5468\u671F\u8D85\u8D8A\u4E86 React \u7684\u53EF\u63A7\u5236\u7684\u8303\u56F4\u5185\uFF0C\u53EF\u80FD\u5F15\u8D77\u591A\u6B21\u6267\u884C\u7B49\u60C5\u51B5\u53D1\u751F"}),n(l.p,{children:["\u4F46\u662F\u6709\u66FF\u4EE3\u7684\u751F\u547D\u5468\u671F ",e(l.code,{children:"getDerivedStateFromProps"})]})]})]}),`
`,n(l.h3,{id:"12-\u51FD\u6570\u7EC4\u4EF6\u4E2D",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#12-\u51FD\u6570\u7EC4\u4EF6\u4E2D",children:"#"}),"1.2. \u51FD\u6570\u7EC4\u4EF6\u4E2D"]}),`
`,e(l.p,{children:"\u548C\u76D1\u542C state \u53D8\u5316\u4E00\u6837\uFF0C\u53EA\u9700\u5C06\u8981\u76D1\u542C\u7684 props \u653E\u5728 useEffect \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6570\u7EC4\u4E2D\u5373\u53EF"}),`
`,n(l.h2,{id:"2-\u6CE8\u5165-props",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#2-\u6CE8\u5165-props",children:"#"}),"2. \u6CE8\u5165 props"]}),`
`,n(l.p,{children:["\u53EF\u4EE5 ",e(l.code,{children:"\u663E\u5F0F\u6CE8\u5165"})," \u548C ",e(l.code,{children:"\u9690\u5F0F\u6CE8\u5165"})," props"]}),`
`,n(l.h3,{id:"21-\u663E\u5F0F\u6CE8\u5165",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#21-\u663E\u5F0F\u6CE8\u5165",children:"#"}),"2.1. \u663E\u5F0F\u6CE8\u5165"]}),`
`,e(l.p,{children:"\u5373\u4F20\u5165\u7ED9\u7EC4\u4EF6\u7684 props \u662F\u4EC0\u4E48\u6700\u7EC8\u5F97\u5230\u7684 props \u5C31\u662F\u4EC0\u4E48"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u663E\u5F0F\u6CE8\u5165 props */"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"createLoggerWithScope"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"~/utils"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"createLoggerWithScope"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"InjectPropsDemo1"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"InjectPropsDemo1"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Father"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"name"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"plasticine"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"age"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"21"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"Father"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"Father"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"any"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"children"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"Child"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"any"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"props:"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"child"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"InjectPropsDemo1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(p,{children:e(R,{})}),`
`,n(l.h3,{id:"22-\u9690\u5F0F\u6CE8\u5165-props",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#22-\u9690\u5F0F\u6CE8\u5165-props",children:"#"}),"2.2. \u9690\u5F0F\u6CE8\u5165 props"]}),`
`,e(l.p,{children:"\u4F20\u7ED9\u7EC4\u4EF6\u7684 props \u548C\u6700\u7EC8\u7EC4\u4EF6\u5F97\u5230\u7684 props \u4E0D\u540C\uFF0C\u901A\u8FC7\u4E2D\u95F4\u7EC4\u4EF6\u9690\u5F0F\u5730\u5411\u7EC4\u4EF6\u4E2D\u6CE8\u5165\u989D\u5916\u7684 props"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u9690\u5F0F\u6CE8\u5165 props */"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"createLoggerWithScope"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"~/utils"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"createLoggerWithScope"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"InjectPropsDemo2"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"InjectPropsDemo2"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Father"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"Child"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"name"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"plasticine"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"age"}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#A3BE8C"},children:"21"}),e(l.span,{style:{color:"#ECEFF4"},children:'"'}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</"}),e(l.span,{style:{color:"#8FBCBB"},children:"Father"}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"Father"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"any"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"cloneElement"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"children"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"injectedProp"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"hello"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"Child"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"any"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"logger"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"props:"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"child"}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"InjectPropsDemo2"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.div,{className:"island-directive tip",children:[e(l.p,{className:"island-directive-title",children:"TIP"}),e(l.div,{className:"island-directive-content",children:e(l.p,{children:"\u5F53\u8981\u4FEE\u6539\u5143\u7D20\u7684 props \u65F6\uFF0C\u63A8\u8350\u7684\u65B9\u5F0F\u662F\u7528 cloneElement \u514B\u9686\u539F\u7EC4\u4EF6\uFF0C\u5BF9\u526F\u672C\u8FDB\u884C\u4FEE\u6539"})})]}),`
`,e(p,{children:e(b,{})}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E6%98%BE%E5%BC%8F%E6%B3%A8%E5%85%A5%E5%92%8C%E9%9A%90%E5%BC%8F%E6%B3%A8%E5%85%A5props.png",alt:"\u663E\u5F0F\u6CE8\u5165\u548C\u9690\u5F0F\u6CE8\u5165props"})}),`
`,n(l.h2,{id:"3-\u5B9E\u6218----form-\u548C-formitem",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#3-\u5B9E\u6218----form-\u548C-formitem",children:"#"}),"3. \u5B9E\u6218 -- Form \u548C FormItem"]}),`
`,e(p,{children:e(q,{})})]})}function X(s={}){const{wrapper:l}=s.components||{};return l?e(l,Object.assign({},s,{children:e(C,s)})):C(s)}const U="2022/11/29 02:40:12",z=`import { DemoBlock } from '@island/demo-block'

import { PropsDemo1 } from '~/demos/props/demo1.tsx'
import { InjectPropsDemo1 } from '~/demos/props/demo2.tsx'
import { InjectPropsDemo2 } from '~/demos/props/demo3.tsx'
import { PropsPracticalDemo } from '~/demos/props/demo4'

# \u6DF1\u5165 Props

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

<DemoBlock>
  <PropsPracticalDemo />
</DemoBlock>
`;export{z as content,X as default,M as frontmatter,U as lastUpdatedTime,T as title,O as toc};
