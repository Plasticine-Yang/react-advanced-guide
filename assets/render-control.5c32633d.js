var A=Object.defineProperty;var N=(s,l,c)=>l in s?A(s,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[l]=c;var a=(s,l,c)=>(N(s,typeof l!="symbol"?l+"":l,c),c);import{jsxs as e,jsx as n,Fragment as g}from"react/jsx-runtime";import{D as d}from"./index.6529e49c.js";import o,{useState as E,useEffect as p,useMemo as b}from"react";import{c as h}from"./scoped-log.b13f94b9.js";const f="_parent_ho2te_1",R="_child_ho2te_11",F={parent:f,child:R},y=h("RenderControlDemo1ClassComponent");class S extends o.Component{constructor(){super(...arguments);a(this,"state",{counter:0})}componentDidUpdate(){y.log("\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3")}render(){const{counter:c}=this.state;return e("div",{className:F.parent,children:[e("p",{children:["\u7236\u7EC4\u4EF6: ",c]}),n(v,{}),n("button",{onClick:()=>this.setState(r=>({counter:r.counter+1})),children:"add count"})]})}}class v extends o.Component{componentDidUpdate(){y.log("\u5B50\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3")}render(){return n("div",{className:F.child,children:n("p",{children:"\u5B50\u7EC4\u4EF6"})})}}const C=h("RenderControlDemo1FunctionComponent"),k=()=>{const[s,l]=E(0);return p(()=>{C.log("\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3")}),e("div",{className:F.parent,children:[e("p",{children:["\u7236\u7EC4\u4EF6: ",s]}),n(P,{}),n("button",{onClick:()=>l(s+1),children:"add count"})]})},P=()=>(p(()=>{C.log("\u5B50\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3")}),n("div",{className:F.child,children:n("p",{children:"\u5B50\u7EC4\u4EF6"})})),x="_parent_5gzx2_1",j="_child_5gzx2_11",w="_btn-group_5gzx2_21",t={parent:x,child:j,btnGroup:w},m=h("RenderControlDemo2ClassComponent");class _ extends o.Component{constructor(c){super(c);a(this,"state",{counter:0,childCounter:0});a(this,"cachedChild");this.cachedChild=n(q,{counter:this.state.childCounter})}componentDidUpdate(){m.log("\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3")}childRenderControl(){const{props:c}=this.cachedChild;return c.counter!==this.state.childCounter?this.cachedChild=o.cloneElement(this.cachedChild,{counter:this.state.childCounter}):this.cachedChild}render(){const{counter:c}=this.state;return e("div",{className:t.parent,children:[e("p",{children:["\u7236\u7EC4\u4EF6: ",c]}),this.childRenderControl(),e("div",{className:t.btnGroup,children:[n("button",{onClick:()=>this.setState(r=>({...this.state,counter:r.counter+1})),children:"add counter"}),n("button",{onClick:()=>this.setState(r=>({...this.state,childCounter:r.childCounter+1})),children:"add childCounter"})]})]})}}class q extends o.Component{componentDidUpdate(){m.log("\u5B50\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3")}render(){const{counter:l}=this.props;return n("div",{className:t.child,children:e("p",{children:["\u5B50\u7EC4\u4EF6: ",l]})})}}const u=h("RenderControlDemo2FunctionComponent"),G=()=>{const[s,l]=E(0),[c,r]=E(0);return p(()=>{u.log("\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3")}),e("div",{className:t.parent,children:[e("p",{children:["\u7236\u7EC4\u4EF6: ",s]}),b(()=>n(M,{counter:c}),[c]),e("div",{className:t.btnGroup,children:[n("button",{onClick:()=>l(s+1),children:"add counter"}),n("button",{onClick:()=>r(c+1),children:"add childCounter"})]})]})},M=s=>{const{counter:l}=s;return p(()=>{u.log("\u5B50\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3")}),n("div",{className:t.child,children:e("p",{children:["\u5B50\u7EC4\u4EF6: ",l]})})},U="_parent_5gzx2_1",Y="_child_5gzx2_11",$="_btn-group_5gzx2_21",i={parent:U,child:Y,btnGroup:$},B=h("PureComponentDemo"),K=()=>{const[s,l]=E(0),[c,r]=E(0);return e("div",{className:i.parent,children:[e("p",{children:["\u7236\u7EC4\u4EF6\uFF1A",s]}),n(z,{counter:c}),n(O,{counter:c}),e("div",{className:i.btnGroup,children:[n("button",{onClick:()=>l(s+1),children:"add counter"}),n("button",{onClick:()=>r(c+1),children:"add childCounter"})]})]})};class O extends o.PureComponent{constructor(){super(...arguments);a(this,"state",{foo:"foo",bar:"bar"})}render(){B.log("PureChild \u6E32\u67D3");const{counter:c}=this.props;return e("div",{className:i.child,children:[e("p",{children:["PureComponent\uFF1A",c]}),e("div",{className:i.btnGroup,children:[n("button",{onClick:()=>this.setState({foo:"foo"}),children:"setState \u8D4B\u503C\u76F8\u540C\u5C5E\u6027\u503C"}),n("button",{onClick:()=>this.setState({foo:"modified-foo"}),children:"setState \u8D4B\u503C\u4E0D\u540C\u5C5E\u6027\u503C"}),n("button",{onClick:()=>{this.setState(r=>(r.bar="modified-bar",r))},children:"setState \u8FD4\u56DE\u76F8\u540C\u7684\u5F15\u7528"})]})]})}}class z extends o.Component{constructor(){super(...arguments);a(this,"state",{foo:"foo",bar:"bar"})}render(){B.log("NormalChild \u6E32\u67D3");const{counter:c}=this.props;return e("div",{className:i.child,children:[e("p",{children:["NormalComponent\uFF1A",c]}),e("div",{className:i.btnGroup,children:[n("button",{onClick:()=>this.setState({foo:"foo"}),children:"setState \u8D4B\u503C\u76F8\u540C\u5C5E\u6027\u503C"}),n("button",{onClick:()=>this.setState({foo:"modified-foo"}),children:"setState \u8D4B\u503C\u4E0D\u540C\u5C5E\u6027\u503C"}),n("button",{onClick:()=>{this.setState(r=>(r.bar="modified-bar",r))},children:"setState \u8FD4\u56DE\u76F8\u540C\u7684\u5F15\u7528"})]})]})}}const I=void 0,J=[{id:"1-render-\u9636\u6BB5\u7684\u4F5C\u7528",text:"1. render \u9636\u6BB5\u7684\u4F5C\u7528",depth:2},{id:"2-\u63A7\u5236\u6E32\u67D3\u7684\u51E0\u79CD\u65B9\u5F0F",text:"2. \u63A7\u5236\u6E32\u67D3\u7684\u51E0\u79CD\u65B9\u5F0F",depth:2},{id:"21-\u7F13\u5B58-reactelement-\u5BF9\u8C61",text:"2.1. \u7F13\u5B58 ReactElement \u5BF9\u8C61",depth:3},{id:"211-\u7C7B\u7EC4\u4EF6\u5B9E\u73B0\u7F13\u5B58\u903B\u8F91",text:"2.1.1. \u7C7B\u7EC4\u4EF6\u5B9E\u73B0\u7F13\u5B58\u903B\u8F91",depth:4},{id:"212-\u51FD\u6570\u7EC4\u4EF6-usememo-\u7F13\u5B58-reactelement",text:"2.1.2. \u51FD\u6570\u7EC4\u4EF6 useMemo \u7F13\u5B58 ReactElement",depth:4},{id:"22-purecomponent",text:"2.2. PureComponent",depth:3},{id:"221-\u7236\u7EC4\u4EF6\u72B6\u6001\u53D8\u5316\u5BF9\u4E24\u79CD\u5B50\u7EC4\u4EF6\u7684\u5F71\u54CD",text:"2.2.1. \u7236\u7EC4\u4EF6\u72B6\u6001\u53D8\u5316\u5BF9\u4E24\u79CD\u5B50\u7EC4\u4EF6\u7684\u5F71\u54CD",depth:4},{id:"222-setstate-\u8D4B\u503C\u76F8\u540C\u5C5E\u6027",text:"2.2.2. setState \u8D4B\u503C\u76F8\u540C\u5C5E\u6027",depth:4},{id:"223-setstate-\u8D4B\u503C\u4E0D\u540C\u5C5E\u6027",text:"2.2.3. setState \u8D4B\u503C\u4E0D\u540C\u5C5E\u6027",depth:4},{id:"224-setstate-\u8FD4\u56DE\u76F8\u540C\u7684\u5F15\u7528",text:"2.2.4. setState \u8FD4\u56DE\u76F8\u540C\u7684\u5F15\u7528",depth:4},{id:"225-purecomponent-\u7684\u673A\u5236",text:"2.2.5. PureComponent \u7684\u673A\u5236",depth:4},{id:"3-\u6E32\u67D3\u63A7\u5236\u6D41\u7A0B\u56FE",text:"3. \u6E32\u67D3\u63A7\u5236\u6D41\u7A0B\u56FE",depth:2}],Q="\u6E32\u67D3\u63A7\u5236";function D(s){const l=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",blockquote:"blockquote",strong:"strong",code:"code",ol:"ol",li:"li",h3:"h3",div:"div",button:"button",span:"span",pre:"pre",img:"img",h4:"h4",ul:"ul"},s.components);return e(g,{children:[e(l.h1,{id:"\u6E32\u67D3\u63A7\u5236",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6E32\u67D3\u63A7\u5236",children:"#"}),"\u6E32\u67D3\u63A7\u5236"]}),`
`,e(l.h2,{id:"1-render-\u9636\u6BB5\u7684\u4F5C\u7528",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#1-render-\u9636\u6BB5\u7684\u4F5C\u7528",children:"#"}),"1. render \u9636\u6BB5\u7684\u4F5C\u7528"]}),`
`,n(l.p,{children:"\u603B\u7684\u6765\u8BF4\uFF0Crender \u9636\u6BB5\u7684\u4E3B\u8981\u4F5C\u7528\u5C31\u662F\uFF1A"}),`
`,e(l.blockquote,{children:[`
`,n(l.p,{children:e(l.strong,{children:["\u5728\u4E00\u6B21\u66F4\u65B0\u4E2D\u4EA7\u751F\u7684\u65B0\u72B6\u6001\uFF0C\u901A\u8FC7 ",n(l.code,{children:"React.createElement"})," \u521B\u5EFA\u65B0\u72B6\u6001\u5BF9\u5E94\u7684 ReactElement"]})}),`
`]}),`
`,e(l.h2,{id:"2-\u63A7\u5236\u6E32\u67D3\u7684\u51E0\u79CD\u65B9\u5F0F",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#2-\u63A7\u5236\u6E32\u67D3\u7684\u51E0\u79CD\u65B9\u5F0F",children:"#"}),"2. \u63A7\u5236\u6E32\u67D3\u7684\u51E0\u79CD\u65B9\u5F0F"]}),`
`,n(l.p,{children:"\u53EF\u4EE5\u4ECE\u4E24\u4E2A\u89D2\u5EA6\u53BB\u770B\u5F85\uFF1A"}),`
`,e(l.ol,{children:[`
`,n(l.li,{children:"\u7236\u7EC4\u4EF6\u63A7\u5236\u5B50\u7EC4\u4EF6\u7684\u6E32\u67D3 -- \u901A\u8FC7 React.memo \u5B9E\u73B0"}),`
`,n(l.li,{children:"\u7EC4\u4EF6\u81EA\u8EAB\u63A7\u5236 -- PureComponent\u3001shouldComponentUpdate"}),`
`]}),`
`,e(l.h3,{id:"21-\u7F13\u5B58-reactelement-\u5BF9\u8C61",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#21-\u7F13\u5B58-reactelement-\u5BF9\u8C61",children:"#"}),"2.1. \u7F13\u5B58 ReactElement \u5BF9\u8C61"]}),`
`,n(l.p,{children:"\u5148\u6765\u770B\u770B\u4E0B\u9762\u8FD9\u4E2A\u5C0F Demo\uFF0C\u7236\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u65F6\uFF0C\u4F1A\u8FDE\u5E26\u5B50\u7EC4\u4EF6\u4E5F\u91CD\u65B0\u6E32\u67D3\uFF0C\u5C3D\u7BA1\u5B50\u7EC4\u4EF6\u7684 props \u548C state \u6CA1\u53D1\u751F\u53D8\u5316\u4E0D\u9700\u8981\u91CD\u65B0\u6E32\u67D3\uFF0C\u4E5F\u4ECD\u7136\u662F\u88AB\u91CD\u65B0\u6E32\u67D3\u4E86"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"RenderControlDemo1ClassComponentState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  counter"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"RenderControlDemo1ClassComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"{},"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#8FBCBB"},children:"RenderControlDemo1ClassComponentState"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"RenderControlDemo1ClassComponentState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"componentDidUpdate"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"parent"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u7236\u7EC4\u4EF6: "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"+"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"          add count"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"componentDidUpdate"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u5B50\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u5B50\u7EC4\u4EF6"}),n(l.span,{style:{color:"#81A1C1"},children:"</p>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(d,{children:n(S,{})}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%88%B6%E7%BB%84%E4%BB%B6%E6%9B%B4%E6%96%B0%E6%B8%B2%E6%9F%93%E5%BC%95%E8%B5%B7%E7%9A%84%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B8%8D%E5%BF%85%E8%A6%81%E6%9B%B4%E6%96%B0%E6%B8%B2%E6%9F%93.gif",alt:"\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3\u5F15\u8D77\u7684\u5B50\u7EC4\u4EF6\u4E0D\u5FC5\u8981\u66F4\u65B0\u6E32\u67D3"})}),`
`,n(l.p,{children:"\u8FD9\u91CC\u5B50\u7EC4\u4EF6\u5176\u5B9E\u5B8C\u5168\u6CA1\u5FC5\u8981\u8FDB\u884C\u66F4\u65B0\u6E32\u67D3\u7684\uFF0C\u4F46\u8FD8\u662F\u4F1A\u968F\u7740\u7236\u7EC4\u4EF6\u7684\u66F4\u65B0\u6E32\u67D3\u800C\u66F4\u65B0\uFF0C\u8FD9\u4E2A\u73B0\u8C61\u65E0\u8BBA\u662F\u5728\u7C7B\u7EC4\u4EF6\u8FD8\u662F\u51FD\u6570\u7EC4\u4EF6\u4E2D\u90FD\u4F1A\u5B58\u5728\uFF0C\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u7B49\u4EF7\u7684\u51FD\u6570\u7EC4\u4EF6"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"RenderControlDemo1FunctionComponent"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"setCounter"}),n(l.span,{style:{color:"#ECEFF4"},children:"]"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"useState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"useEffect"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"parent"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u7236\u7EC4\u4EF6: "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"setCounter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"+"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"add count"}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Child"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"useEffect"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u5B50\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u5B50\u7EC4\u4EF6"}),n(l.span,{style:{color:"#81A1C1"},children:"</p>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(d,{children:n(k,{})}),`
`,n(l.p,{children:"\u90A3\u6709\u6CA1\u6709\u4EC0\u4E48\u529E\u6CD5\u89E3\u51B3\u5462\uFF1F"}),`
`,n(l.p,{children:"\u53EA\u9700\u8981\u5C06\u5B50\u7EC4\u4EF6\u7F13\u5B58\u8D77\u6765\u5373\u53EF\uFF0C\u8FD9\u6837\u5728\u7236\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u5230\u5B50\u7EC4\u4EF6\u65F6\uFF0C\u5982\u679C\u53D1\u73B0\u5176\u7F13\u5B58\u547D\u4E2D\uFF0C\u5219\u4E0D\u4F1A\u5BF9\u5B50\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\uFF0C\u76F4\u63A5\u590D\u7528\u4E4B\u524D\u7684\u7ED3\u679C"}),`
`,e(l.p,{children:["\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u81EA\u5DF1\u7F16\u5199\u63A7\u5236\u6E32\u67D3\u7684\u903B\u8F91\uFF0C\u800C\u51FD\u6570\u7EC4\u4EF6\u4E2D\u5219\u9700\u8981\u901A\u8FC7 ",n(l.code,{children:"useMemo"})," \u8FD9\u4E2A hook \u5B9E\u73B0\u76F8\u540C\u7684\u6548\u679C"]}),`
`,e(l.h4,{id:"211-\u7C7B\u7EC4\u4EF6\u5B9E\u73B0\u7F13\u5B58\u903B\u8F91",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#211-\u7C7B\u7EC4\u4EF6\u5B9E\u73B0\u7F13\u5B58\u903B\u8F91",children:"#"}),"2.1.1. \u7C7B\u7EC4\u4EF6\u5B9E\u73B0\u7F13\u5B58\u903B\u8F91"]}),`
`,n(l.p,{children:"\u7531\u4E8E\u7C7B\u7EC4\u4EF6\u53EF\u4EE5\u4FDD\u5B58\u72B6\u6001\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u5B50\u7EC4\u4EF6\u7684 ReactElement \u4FDD\u5B58\u8D77\u6765\uFF0C\u7136\u540E\u6BCF\u6B21\u7236\u7EC4\u4EF6\u89E6\u53D1\u6E32\u67D3\u65F6\uFF0C\u6267\u884C\u6211\u4EEC\u7684\u63A7\u5236\u6E32\u67D3\u903B\u8F91\u68C0\u67E5\u5B50\u7EC4\u4EF6\u7F13\u5B58\u662F\u5426\u547D\u4E2D\uFF0C\u547D\u4E2D\u5219\u76F4\u63A5\u590D\u7528\uFF0C\u5426\u5219\u5C31\u91CD\u65B0\u6E32\u67D3\uFF0C\u5B8C\u5168\u7531\u6211\u4EEC\u81EA\u5DF1\u63A7\u5236"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"RenderControlDemo2ClassComponentState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  counter"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  childCounter"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"RenderControlDemo2ClassComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"{},"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#8FBCBB"},children:"RenderControlDemo2ClassComponentState"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"RenderControlDemo2ClassComponentState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  cachedChild"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactElement"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"ChildProps"}),n(l.span,{style:{color:"#ECEFF4"},children:">"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"constructor"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{})"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"super"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"cachedChild"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"counter"}),n(l.span,{style:{color:"#81A1C1"},children:"={this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"componentDidUpdate"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"childRenderControl"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"cachedChild"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u4EC5\u5F53 childCounter \u53D8\u5316\u65F6\u624D\u66F4\u65B0\u5B50\u7EC4\u4EF6"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"!=="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"      "}),n(l.span,{style:{color:"#616E88"},children:"// \u4F7F\u7528\u65B0\u72B6\u6001\u514B\u9686\u5B50\u7EC4\u4EF6\u5E76\u66F4\u65B0\u7F13\u5B58"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"cachedChild"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"cloneElement"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"cachedChild"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u5426\u5219\u76F4\u63A5\u8FD4\u56DE\u7F13\u5B58\u7684\u5B50\u7EC4\u4EF6"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"cachedChild"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"parent"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u7236\u7EC4\u4EF6: "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"{this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"childRenderControl"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"btnGroup"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),n(l.span,{style:{color:"#81A1C1"},children:"...this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"+"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"            add counter"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),n(l.span,{style:{color:"#81A1C1"},children:"...this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"+"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"            add childCounter"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ChildProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  counter"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"ChildProps"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"componentDidUpdate"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u5B50\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u5B50\u7EC4\u4EF6: "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(d,{children:n(_,{})}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%BC%93%E5%AD%98React%E5%85%83%E7%B4%A0%E9%81%BF%E5%85%8D%E4%B8%8D%E5%BF%85%E8%A6%81%E7%9A%84%E6%B8%B2%E6%9F%93.gif",alt:"\u7C7B\u7EC4\u4EF6\u7F13\u5B58React\u5143\u7D20\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3"})}),`
`,n(l.p,{children:"\u53EF\u4EE5\u770B\u5230\uFF0C\u6539\u53D8\u4E0E\u5B50\u7EC4\u4EF6\u65E0\u5173\u7684\u72B6\u6001\u65F6\uFF0C\u5B50\u7EC4\u4EF6\u4E0D\u4F1A\u88AB\u66F4\u65B0\uFF0C\u6211\u4EEC\u7684\u7F13\u5B58\u903B\u8F91\u751F\u6548\u4E86\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3\u5F00\u9500"}),`
`,e(l.h4,{id:"212-\u51FD\u6570\u7EC4\u4EF6-usememo-\u7F13\u5B58-reactelement",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#212-\u51FD\u6570\u7EC4\u4EF6-usememo-\u7F13\u5B58-reactelement",children:"#"}),"2.1.2. \u51FD\u6570\u7EC4\u4EF6 useMemo \u7F13\u5B58 ReactElement"]}),`
`,n(l.p,{children:"\u5BF9\u4E8E\u51FD\u6570\u7EC4\u4EF6\uFF0C\u7531\u4E8E\u4E0D\u80FD\u50CF\u7C7B\u7EC4\u4EF6\u90A3\u6837\u4FDD\u5B58\u72B6\u6001\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u501F\u52A9 hooks \u6765\u5E2E\u52A9\u6211\u4EEC\u5B9E\u73B0\u7F13\u5B58\u7684\u7279\u6027\uFF0CuseMemo \u5C31\u53EF\u4EE5\u5E2E\u6211\u4EEC\u5B9E\u73B0\u7F13\u5B58\u7684\u529F\u80FD"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"RenderControlDemo2FunctionComponent"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"setCounter"}),n(l.span,{style:{color:"#ECEFF4"},children:"]"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"useState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"setChildCounter"}),n(l.span,{style:{color:"#ECEFF4"},children:"]"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"useState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"useEffect"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"parent"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u7236\u7EC4\u4EF6: "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#88C0D0"},children:"useMemo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"counter"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        )"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        ["}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      )"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"btnGroup"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"setCounter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"+"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"add counter"}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"setChildCounter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"+"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"          add childCounter"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ChildProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  counter"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Child"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"ChildProps"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"useEffect"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u5B50\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u5B50\u7EC4\u4EF6: "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(d,{children:n(G,{})}),`
`,n(l.p,{children:"\u6700\u7EC8\u6548\u679C\u548C\u7C7B\u7EC4\u4EF6\u624B\u52A8\u5B9E\u73B0\u7F13\u5B58\u903B\u8F91\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u660E\u663E\u51FD\u6570\u7EC4\u4EF6\u7684\u7F13\u5B58\u903B\u8F91\u5199\u8D77\u6765\u66F4\u52A0\u8212\u670D\uFF0C\u56E0\u4E3A\u6709 useMemo \u8FD9\u4E2A\u8BED\u4E49\u5316\u7684 hook \u5E2E\u6211\u4EEC\u5B8C\u6210\u4E86\u7F13\u5B58\u903B\u8F91\uFF0C\u4E00\u65B9\u9762\u63D0\u9AD8\u4E86\u4EE3\u7801\u53EF\u8BFB\u6027\uFF0C\u53E6\u4E00\u65B9\u9762\u4E5F\u964D\u4F4E\u4E86\u6211\u4EEC\u7684\u5FC3\u667A\u8D1F\u62C5\uFF0C\u4F7F\u7528\u8D77\u6765\u5F88\u7B80\u5355"}),`
`,e(l.h3,{id:"22-purecomponent",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#22-purecomponent",children:"#"}),"2.2. PureComponent"]}),`
`,n(l.p,{children:"\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A Demo\uFF0C\u770B\u770B\u76F8\u540C\u7684\u5B50\u7EC4\u4EF6\u4F7F\u7528\u666E\u901A\u7684 React.Component \u548C\u4F7F\u7528 React.PureComponent \u6709\u4EC0\u4E48\u4E0D\u540C"}),`
`,n(l.p,{children:"\u7236\u7EC4\u4EF6\uFF1A"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"PureComponentDemo"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"setCounter"}),n(l.span,{style:{color:"#ECEFF4"},children:"]"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"useState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"setChildCounter"}),n(l.span,{style:{color:"#ECEFF4"},children:"]"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"useState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"parent"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"\u7236\u7EC4\u4EF6\uFF1A"}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"NormalChild"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"counter"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"PureChild"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"counter"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"btnGroup"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"setCounter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"+"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"add counter"}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"setChildCounter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"childCounter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"+"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"          add childCounter"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:["\u5B50\u7EC4\u4EF6\uFF08\u53EA\u653E\u51FA\u4E00\u4E2A\u5373\u53EF\uFF0C\u53E6\u4E00\u4E2A\u4EC5\u4EC5\u662F ",n(l.code,{children:"extends React.Component"})," \u548C ",n(l.code,{children:"extends React.PureComponent"})," \u7684\u533A\u522B\uFF09"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ChildProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  counter"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ChildState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  foo"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  bar"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" PureComponent Child */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"PureChild"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"PureComponent"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"ChildProps"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ChildState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"ChildState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"foo"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"foo"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"bar"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"bar"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"PureChild \u6E32\u67D3"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"PureComponent\uFF1A"}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"counter"}),n(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"btnGroup"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"foo"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"foo"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"            setState \u8D4B\u503C\u76F8\u540C\u5C5E\u6027\u503C"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"foo"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"modified-foo"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"            setState \u8D4B\u503C\u4E0D\u540C\u5C5E\u6027\u503C"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"                "}),n(l.span,{style:{color:"#616E88"},children:"// @ts-ignore"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"bar"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"modified-bar"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"            setState \u8FD4\u56DE\u76F8\u540C\u7684\u5F15\u7528"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(d,{children:n(K,{})}),`
`,e(l.h4,{id:"221-\u7236\u7EC4\u4EF6\u72B6\u6001\u53D8\u5316\u5BF9\u4E24\u79CD\u5B50\u7EC4\u4EF6\u7684\u5F71\u54CD",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#221-\u7236\u7EC4\u4EF6\u72B6\u6001\u53D8\u5316\u5BF9\u4E24\u79CD\u5B50\u7EC4\u4EF6\u7684\u5F71\u54CD",children:"#"}),"2.2.1. \u7236\u7EC4\u4EF6\u72B6\u6001\u53D8\u5316\u5BF9\u4E24\u79CD\u5B50\u7EC4\u4EF6\u7684\u5F71\u54CD"]}),`
`,n(l.p,{children:"\u9996\u5148\u770B\u770B\u7236\u7EC4\u4EF6\u66F4\u65B0 counter \u548C childCounter \u65F6\uFF0C\u4E24\u4E2A\u5B50\u7EC4\u4EF6\u662F\u5426\u4F1A\u6267\u884C\u6E32\u67D3\u66F4\u65B0\uFF1A"}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%88%B6%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81%E5%8F%98%E5%8C%96%E6%97%B6%E5%AF%B9%E4%B8%A4%E7%A7%8D%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E5%BD%B1%E5%93%8D.gif",alt:"\u7236\u7EC4\u4EF6\u72B6\u6001\u53D8\u5316\u65F6\u5BF9\u4E24\u79CD\u5B50\u7EC4\u4EF6\u7684\u5F71\u54CD"})}),`
`,e(l.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C",n(l.strong,{children:"\u666E\u901A\u7684\u7EC4\u4EF6\u4F1A\u968F\u7740\u7236\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u800C\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C PureComponent \u5219\u4E0D\u4F1A"})]}),`
`,e(l.h4,{id:"222-setstate-\u8D4B\u503C\u76F8\u540C\u5C5E\u6027",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#222-setstate-\u8D4B\u503C\u76F8\u540C\u5C5E\u6027",children:"#"}),"2.2.2. setState \u8D4B\u503C\u76F8\u540C\u5C5E\u6027"]}),`
`,n(l.p,{children:"\u63A5\u4E0B\u6765\u518D\u770B\u770B\u5206\u522B\u5728\u4E24\u79CD\u5B50\u7EC4\u4EF6\u4E2D\u901A\u8FC7 setState \u8D4B\u503C\u76F8\u540C\u7684\u5C5E\u6027\u503C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1A"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"foo"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"foo"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  setState \u8D4B\u503C\u76F8\u540C\u5C5E\u6027\u503C"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#81A1C1"},children:"</button>"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%B8%A4%E7%A7%8D%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B8%ADsetState%E8%B5%8B%E5%80%BC%E7%9B%B8%E5%90%8C%E5%B1%9E%E6%80%A7%E5%80%BC.gif",alt:"\u4E24\u79CD\u5B50\u7EC4\u4EF6\u4E2DsetState\u8D4B\u503C\u76F8\u540C\u5C5E\u6027\u503C"})}),`
`,e(l.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C",n(l.strong,{children:"setState \u8D4B\u503C\u7684\u5C5E\u6027\u503C\u76F8\u540C\u65F6\uFF0C\u666E\u901A\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C PureComponent \u5219\u4E0D\u4F1A"})]}),`
`,e(l.h4,{id:"223-setstate-\u8D4B\u503C\u4E0D\u540C\u5C5E\u6027",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#223-setstate-\u8D4B\u503C\u4E0D\u540C\u5C5E\u6027",children:"#"}),"2.2.3. setState \u8D4B\u503C\u4E0D\u540C\u5C5E\u6027"]}),`
`,n(l.p,{children:"\u63A5\u4E0B\u91CC\u518D\u770B\u770B\u5206\u522B\u518D\u4E24\u79CD\u5B50\u7EC4\u4EF6\u4E2D\u901A\u8FC7 setState \u8D4B\u503C\u4E0D\u540C\u7684\u5C5E\u6027\u503C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1A"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"<button"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"foo"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"modified-foo"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  setState \u8D4B\u503C\u4E0D\u540C\u5C5E\u6027\u503C"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#81A1C1"},children:"</button>"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%B8%A4%E7%A7%8D%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B8%ADsetState%E8%B5%8B%E5%80%BC%E4%B8%8D%E5%90%8C%E5%B1%9E%E6%80%A7%E5%80%BC.gif",alt:"\u4E24\u79CD\u5B50\u7EC4\u4EF6\u4E2DsetState\u8D4B\u503C\u4E0D\u540C\u5C5E\u6027\u503C"})}),`
`,e(l.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C",n(l.strong,{children:"setState \u8D4B\u503C\u7684\u5C5E\u6027\u503C\u4E0D\u540C\u65F6\uFF0C\u4E24\u79CD\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3"})]}),`
`,e(l.h4,{id:"224-setstate-\u8FD4\u56DE\u76F8\u540C\u7684\u5F15\u7528",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#224-setstate-\u8FD4\u56DE\u76F8\u540C\u7684\u5F15\u7528",children:"#"}),"2.2.4. setState \u8FD4\u56DE\u76F8\u540C\u7684\u5F15\u7528"]}),`
`,n(l.p,{children:"\u6700\u540E\u6211\u4EEC\u518D\u770B\u770B\u5F53\u6211\u4EEC setState \u76F4\u63A5\u4FEE\u6539\u539F\u59CB state \u5C5E\u6027\u503C\uFF0C\u8FD4\u56DE\u7684\u4ECD\u7136\u662F\u76F8\u540C\u7684 state \u5F15\u7528\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1A"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#81A1C1"},children:"<button"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"      "}),n(l.span,{style:{color:"#616E88"},children:"// @ts-ignore"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"bar"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"modified-bar"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#81A1C1"},children:">"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  setState \u8FD4\u56DE\u76F8\u540C\u7684\u5F15\u7528"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#81A1C1"},children:"</button>"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%B8%A4%E7%A7%8D%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B8%ADsetState%E8%BF%94%E5%9B%9E%E7%9B%B8%E5%90%8C%E5%BC%95%E7%94%A8.gif",alt:"\u4E24\u79CD\u5B50\u7EC4\u4EF6\u4E2DsetState\u8FD4\u56DE\u76F8\u540C\u5F15\u7528"})}),`
`,e(l.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C",n(l.strong,{children:"setState \u8FD4\u56DE\u76F8\u540C\u5F15\u7528\u65F6\uFF0C\u666E\u901A\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0CPureComponent \u5219\u4E0D\u4F1A"})]}),`
`,e(l.h4,{id:"225-purecomponent-\u7684\u673A\u5236",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#225-purecomponent-\u7684\u673A\u5236",children:"#"}),"2.2.5. PureComponent \u7684\u673A\u5236"]}),`
`,n(l.p,{children:"\u901A\u8FC7\u4E0A\u9762\u7684 Demo\uFF0C\u6211\u4EEC\u53EF\u4EE5\u603B\u7ED3\u51FA\u5982\u4E0B\u51E0\u70B9\uFF1A"}),`
`,e(l.ul,{children:[`
`,n(l.li,{children:"\u666E\u901A\u7684\u7EC4\u4EF6\u4F1A\u968F\u7740\u7236\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u800C\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C PureComponent \u5219\u4E0D\u4F1A"}),`
`,n(l.li,{children:"setState \u8D4B\u503C\u7684\u5C5E\u6027\u503C\u76F8\u540C\u65F6\uFF0C\u666E\u901A\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C PureComponent \u5219\u4E0D\u4F1A"}),`
`,n(l.li,{children:"setState \u8D4B\u503C\u7684\u5C5E\u6027\u503C\u4E0D\u540C\u65F6\uFF0C\u4E24\u79CD\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3"}),`
`,n(l.li,{children:"setState \u8FD4\u56DE\u76F8\u540C\u5F15\u7528\u65F6\uFF0C\u666E\u901A\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0CPureComponent \u5219\u4E0D\u4F1A"}),`
`]}),`
`,n(l.p,{children:"\u4ECE\u8FD9\u4E2A\u73B0\u8C61\u4E2D\u6211\u4EEC\u53EF\u4EE5\u5F97\u51FA\u4EC0\u4E48\u7ED3\u8BBA\u5462\uFF1F"}),`
`,e(l.p,{children:["PureComponent \u53EA\u4F1A\u5728 props \u6216 state \u6539\u53D8\u65F6\u91CD\u65B0\u6E32\u67D3\uFF0C\u5E76\u4E14\u5BF9 props \u548C state \u7684\u6BD4\u8F83\u662F ",n(l.code,{children:"shallowEqual"}),"\uFF0C\u5373\u53EA\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\u7684\u4E00\u5C42\uFF0C\u5BF9\u4E8E\u5C5E\u6027\u4ECD\u7136\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7684\u5219\u53EA\u4F1A\u6BD4\u8F83\u5B83\u4EEC\u7684\u5185\u5B58\u5730\u5740\u662F\u5426\u76F8\u540C\uFF0C\u5E76\u4E0D\u4F1A\u7EE7\u7EED\u9012\u5F52\u6BD4\u8F83\u5185\u90E8\u5C5E\u6027\u662F\u5426\u76F8\u540C"]}),`
`,n(l.p,{children:"\u4EE5\u4E0B\u662F React \u6E90\u7801\u4E2D\u5173\u4E8E shallowEqual \u7684\u6CE8\u91CA\u548C\u5B9E\u73B0\uFF1A"}),`
`,e(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"js"}),n(l.pre,{children:e(l.code,{className:"",children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"/**"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:" * Performs equality by iterating through keys on an object and returning false"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:" * when any key has values which are not strictly equal between the arguments."})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:" * Returns true when the values of all keys are strictly equal."})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:" */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"function"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"shallowEqual"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"objA"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" mixed"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"objB"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" mixed"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"boolean"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#88C0D0"},children:"is"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"objA"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"objB"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")) "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"typeof"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"objA"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"!=="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"object"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"||"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"objA"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"==="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"null"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"||"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"typeof"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"objB"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"!=="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"object"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"||"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"objB"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"==="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"null"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  ) "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"false"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"keysA"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Object"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"keys"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"objA"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"keysB"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Object"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"keys"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"objB"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"keysA"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9FF"},children:"length "}),n(l.span,{style:{color:"#81A1C1"},children:"!=="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"keysB"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9FF"},children:"length) "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"false"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// Test for A's keys different from B."})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"for"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#81A1C1"},children:"let"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"i"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#81A1C1"},children:";"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"i"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"keysA"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9FF"},children:"length"}),n(l.span,{style:{color:"#81A1C1"},children:";"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"i"}),n(l.span,{style:{color:"#81A1C1"},children:"++"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"currentKey"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"keysA"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"i"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"!"}),n(l.span,{style:{color:"#D8DEE9"},children:"hasOwnProperty"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"call"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"objB"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"currentKey"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#81A1C1"},children:"||"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"!"}),n(l.span,{style:{color:"#88C0D0"},children:"is"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"objA"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"currentKey"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"objB"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"currentKey"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"])"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    ) "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"false"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"// is \u7528\u4E8E\u6BD4\u8F83\u4E24\u4E2A\u503C\u662F\u5426\u4E25\u683C\u76F8\u7B49"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"function"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"is"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"x"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"any"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"y"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"any"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    ("}),n(l.span,{style:{color:"#D8DEE9"},children:"x"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"==="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"y"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"&&"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"x"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"!=="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"||"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"x"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"==="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"y"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")) "}),n(l.span,{style:{color:"#81A1C1"},children:"||"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"x"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"!=="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"x"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"&&"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"y"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"!=="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"y"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#616E88"},children:"// eslint-disable-line no-self-compare"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:"\u8FD9\u6837\u5C31\u4E0D\u96BE\u7406\u89E3 Demo \u4E2D\u7684\u73B0\u8C61\u4E86\uFF0C\u6211\u4EEC\u6765\u9010\u4E00\u5206\u6790\u4EE5\u4E0B\uFF1A"}),`
`,e(l.ol,{children:[`
`,e(l.li,{children:[`
`,n(l.p,{children:"\u666E\u901A\u7684\u7EC4\u4EF6\u4F1A\u968F\u7740\u7236\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u800C\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C PureComponent \u5219\u4E0D\u4F1A"}),`
`,e(l.p,{children:["\u7236\u7EC4\u4EF6\u6539\u53D8 childCounter \u65F6\uFF0C\u5B50\u7EC4\u4EF6\u7684\u65B0\u8001 props \u4E2D counter \u7684\u503C\u4E0D\u540C\u4E86\uFF0C\u4ECE\u800C ",n(l.code,{children:"shallowEqual"})," \u5224\u5B9A\u4E3A true\uFF0C\u4E0D\u89E6\u53D1\u66F4\u65B0"]}),`
`]}),`
`,e(l.li,{children:[`
`,n(l.p,{children:"setState \u8D4B\u503C\u7684\u5C5E\u6027\u503C\u76F8\u540C\u65F6\uFF0C\u666E\u901A\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C PureComponent \u5219\u4E0D\u4F1A"}),`
`,e(l.p,{children:["state \u5F15\u7528\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u4F46\u662F\u65B0\u8001 state \u4E2D\u7684\u6240\u6709 key \u7684\u503C\u90FD\u662F\u53EF\u4EE5\u7528 React \u5B9E\u73B0\u7684 ",n(l.code,{children:"is"})," \u53BB\u5224\u5B9A\u4E3A\u76F8\u7B49\u7684\uFF0C\u4ECE\u800C ",n(l.code,{children:"shallowEqual"})," \u5224\u5B9A\u4E3A true\uFF0C\u4E0D\u89E6\u53D1\u66F4\u65B0"]}),`
`]}),`
`,e(l.li,{children:[`
`,n(l.p,{children:"setState \u8D4B\u503C\u7684\u5C5E\u6027\u503C\u4E0D\u540C\u65F6\uFF0C\u4E24\u79CD\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3"}),`
`,e(l.p,{children:["state \u5F15\u7528\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u4E14\u65B0\u8001 state \u4E2D\u7684 foo \u5C5E\u6027\u7684\u503C\u88AB ",n(l.code,{children:"is"})," \u5224\u5B9A\u4E3A\u4E0D\u76F8\u7B49\uFF08\u65E7 state \u4E2D foo \u7684\u503C\u4E3A 'foo'\uFF0C\u65B0 state \u4E2D foo \u7684\u503C\u4E3A 'modified-foo'\uFF09\uFF0C\u4ECE\u800C ",n(l.code,{children:"shallowEqual"})," \u5224\u5B9A\u4E3A false\uFF0C\u89E6\u53D1\u66F4\u65B0"]}),`
`]}),`
`,e(l.li,{children:[`
`,n(l.p,{children:"setState \u8FD4\u56DE\u76F8\u540C\u5F15\u7528\u65F6\uFF0C\u666E\u901A\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0CPureComponent \u5219\u4E0D\u4F1A"}),`
`,n(l.p,{children:"state \u5F15\u7528\u672A\u53D1\u751F\u53D8\u5316\uFF0C\u76F4\u63A5\u8FD4\u56DE true\uFF0C\u5373\u4FBF\u503C\u53D8\u5316\u4E86\u4E5F\u4E0D\u4F1A\u7EE7\u7EED\u53BB\u8FDB\u884C\u6BD4\u8F83\uFF0C\u4ECE\u800C\u4E0D\u4F1A\u66F4\u65B0"}),`
`]}),`
`]}),`
`,e(l.p,{children:["\u603B\u7684\u6765\u8BF4\uFF0CPureComponent \u7684\u6838\u5FC3\u5C31\u5728\u4E8E",n(l.strong,{children:"\u4F7F\u7528 shallowEqual \u5BF9\u6BD4 props \u548C state\uFF0C\u53EA\u5BF9\u6BD4\u7B2C\u4E00\u5C42\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7684 object \u5E76\u4E0D\u4F1A\u9012\u5F52\u53BB\u6BD4\u5BF9\uFF0C\u53EA\u8981\u6BD4\u5BF9\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4E00\u4E2A\u5C5E\u6027\u53D1\u751F\u4E86\u53D8\u5316\u5C31\u4F1A\u89E6\u53D1\u66F4\u65B0"})]}),`
`,e(l.h2,{id:"3-\u6E32\u67D3\u63A7\u5236\u6D41\u7A0B\u56FE",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#3-\u6E32\u67D3\u63A7\u5236\u6D41\u7A0B\u56FE",children:"#"}),"3. \u6E32\u67D3\u63A7\u5236\u6D41\u7A0B\u56FE"]}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E6%B8%B2%E6%9F%93%E6%8E%A7%E5%88%B6%E6%B5%81%E7%A8%8B%E5%9B%BE.awebp",alt:"\u6E32\u67D3\u63A7\u5236\u6D41\u7A0B\u56FE"})})]})}function V(s={}){const{wrapper:l}=s.components||{};return l?n(l,Object.assign({},s,{children:n(D,s)})):D(s)}const Z="2022/12/14 02:23:45",ll=`import { DemoBlock } from '@island/demo-block'

import {
  RenderControlDemo1ClassComponent,
  RenderControlDemo1FunctionComponent,
} from '~/demos/render-control/demo1'
import {
  RenderControlDemo2ClassComponent,
  RenderControlDemo2FunctionComponent,
} from '~/demos/render-control/demo2'
import { PureComponentDemo } from '~/demos/render-control/demo3'

# \u6E32\u67D3\u63A7\u5236

## 1. render \u9636\u6BB5\u7684\u4F5C\u7528

\u603B\u7684\u6765\u8BF4\uFF0Crender \u9636\u6BB5\u7684\u4E3B\u8981\u4F5C\u7528\u5C31\u662F\uFF1A

> **\u5728\u4E00\u6B21\u66F4\u65B0\u4E2D\u4EA7\u751F\u7684\u65B0\u72B6\u6001\uFF0C\u901A\u8FC7 \`React.createElement\` \u521B\u5EFA\u65B0\u72B6\u6001\u5BF9\u5E94\u7684 ReactElement**

## 2. \u63A7\u5236\u6E32\u67D3\u7684\u51E0\u79CD\u65B9\u5F0F

\u53EF\u4EE5\u4ECE\u4E24\u4E2A\u89D2\u5EA6\u53BB\u770B\u5F85\uFF1A

1. \u7236\u7EC4\u4EF6\u63A7\u5236\u5B50\u7EC4\u4EF6\u7684\u6E32\u67D3 -- \u901A\u8FC7 React.memo \u5B9E\u73B0
2. \u7EC4\u4EF6\u81EA\u8EAB\u63A7\u5236 -- PureComponent\u3001shouldComponentUpdate

### 2.1. \u7F13\u5B58 ReactElement \u5BF9\u8C61

\u5148\u6765\u770B\u770B\u4E0B\u9762\u8FD9\u4E2A\u5C0F Demo\uFF0C\u7236\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u65F6\uFF0C\u4F1A\u8FDE\u5E26\u5B50\u7EC4\u4EF6\u4E5F\u91CD\u65B0\u6E32\u67D3\uFF0C\u5C3D\u7BA1\u5B50\u7EC4\u4EF6\u7684 props \u548C state \u6CA1\u53D1\u751F\u53D8\u5316\u4E0D\u9700\u8981\u91CD\u65B0\u6E32\u67D3\uFF0C\u4E5F\u4ECD\u7136\u662F\u88AB\u91CD\u65B0\u6E32\u67D3\u4E86

\`\`\`tsx
interface RenderControlDemo1ClassComponentState {
  counter: number
}
class RenderControlDemo1ClassComponent extends React.Component<
  {},
  RenderControlDemo1ClassComponentState
> {
  state: Readonly<RenderControlDemo1ClassComponentState> = {
    counter: 0,
  }

  componentDidUpdate(): void {
    logger.log('\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3')
  }

  render(): React.ReactNode {
    const { counter } = this.state

    return (
      <div className={s.parent}>
        <p>\u7236\u7EC4\u4EF6: {counter}</p>

        <Child />

        <button
          onClick={() =>
            this.setState((state) => ({ counter: state.counter + 1 }))
          }
        >
          add count
        </button>
      </div>
    )
  }
}

class Child extends React.Component {
  componentDidUpdate(): void {
    logger.log('\u5B50\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3')
  }

  render(): React.ReactNode {
    return (
      <div className={s.child}>
        <p>\u5B50\u7EC4\u4EF6</p>
      </div>
    )
  }
}
\`\`\`

<DemoBlock>
  <RenderControlDemo1ClassComponent />
</DemoBlock>

![\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3\u5F15\u8D77\u7684\u5B50\u7EC4\u4EF6\u4E0D\u5FC5\u8981\u66F4\u65B0\u6E32\u67D3](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%88%B6%E7%BB%84%E4%BB%B6%E6%9B%B4%E6%96%B0%E6%B8%B2%E6%9F%93%E5%BC%95%E8%B5%B7%E7%9A%84%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B8%8D%E5%BF%85%E8%A6%81%E6%9B%B4%E6%96%B0%E6%B8%B2%E6%9F%93.gif)

\u8FD9\u91CC\u5B50\u7EC4\u4EF6\u5176\u5B9E\u5B8C\u5168\u6CA1\u5FC5\u8981\u8FDB\u884C\u66F4\u65B0\u6E32\u67D3\u7684\uFF0C\u4F46\u8FD8\u662F\u4F1A\u968F\u7740\u7236\u7EC4\u4EF6\u7684\u66F4\u65B0\u6E32\u67D3\u800C\u66F4\u65B0\uFF0C\u8FD9\u4E2A\u73B0\u8C61\u65E0\u8BBA\u662F\u5728\u7C7B\u7EC4\u4EF6\u8FD8\u662F\u51FD\u6570\u7EC4\u4EF6\u4E2D\u90FD\u4F1A\u5B58\u5728\uFF0C\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E2A\u7B49\u4EF7\u7684\u51FD\u6570\u7EC4\u4EF6

\`\`\`tsx
const RenderControlDemo1FunctionComponent: React.FC = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    logger.log('\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3')
  })

  return (
    <div className={s.parent}>
      <p>\u7236\u7EC4\u4EF6: {counter}</p>

      <Child />

      <button onClick={() => setCounter(counter + 1)}>add count</button>
    </div>
  )
}

const Child: React.FC = () => {
  useEffect(() => {
    logger.log('\u5B50\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3')
  })

  return (
    <div className={s.child}>
      <p>\u5B50\u7EC4\u4EF6</p>
    </div>
  )
}
\`\`\`

<DemoBlock>
  <RenderControlDemo1FunctionComponent />
</DemoBlock>

\u90A3\u6709\u6CA1\u6709\u4EC0\u4E48\u529E\u6CD5\u89E3\u51B3\u5462\uFF1F

\u53EA\u9700\u8981\u5C06\u5B50\u7EC4\u4EF6\u7F13\u5B58\u8D77\u6765\u5373\u53EF\uFF0C\u8FD9\u6837\u5728\u7236\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u5230\u5B50\u7EC4\u4EF6\u65F6\uFF0C\u5982\u679C\u53D1\u73B0\u5176\u7F13\u5B58\u547D\u4E2D\uFF0C\u5219\u4E0D\u4F1A\u5BF9\u5B50\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\uFF0C\u76F4\u63A5\u590D\u7528\u4E4B\u524D\u7684\u7ED3\u679C

\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u81EA\u5DF1\u7F16\u5199\u63A7\u5236\u6E32\u67D3\u7684\u903B\u8F91\uFF0C\u800C\u51FD\u6570\u7EC4\u4EF6\u4E2D\u5219\u9700\u8981\u901A\u8FC7 \`useMemo\` \u8FD9\u4E2A hook \u5B9E\u73B0\u76F8\u540C\u7684\u6548\u679C

#### 2.1.1. \u7C7B\u7EC4\u4EF6\u5B9E\u73B0\u7F13\u5B58\u903B\u8F91

\u7531\u4E8E\u7C7B\u7EC4\u4EF6\u53EF\u4EE5\u4FDD\u5B58\u72B6\u6001\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u5B50\u7EC4\u4EF6\u7684 ReactElement \u4FDD\u5B58\u8D77\u6765\uFF0C\u7136\u540E\u6BCF\u6B21\u7236\u7EC4\u4EF6\u89E6\u53D1\u6E32\u67D3\u65F6\uFF0C\u6267\u884C\u6211\u4EEC\u7684\u63A7\u5236\u6E32\u67D3\u903B\u8F91\u68C0\u67E5\u5B50\u7EC4\u4EF6\u7F13\u5B58\u662F\u5426\u547D\u4E2D\uFF0C\u547D\u4E2D\u5219\u76F4\u63A5\u590D\u7528\uFF0C\u5426\u5219\u5C31\u91CD\u65B0\u6E32\u67D3\uFF0C\u5B8C\u5168\u7531\u6211\u4EEC\u81EA\u5DF1\u63A7\u5236

\`\`\`tsx
interface RenderControlDemo2ClassComponentState {
  counter: number
  childCounter: number
}
class RenderControlDemo2ClassComponent extends React.Component<
  {},
  RenderControlDemo2ClassComponentState
> {
  state: Readonly<RenderControlDemo2ClassComponentState> = {
    counter: 0,
    childCounter: 0,
  }

  cachedChild: ReactElement<ChildProps>

  constructor(props: {}) {
    super(props)

    this.cachedChild = <Child counter={this.state.childCounter} />
  }

  componentDidUpdate(): void {
    logger.log('\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3')
  }

  childRenderControl() {
    const { props } = this.cachedChild

    // \u4EC5\u5F53 childCounter \u53D8\u5316\u65F6\u624D\u66F4\u65B0\u5B50\u7EC4\u4EF6
    if (props.counter !== this.state.childCounter) {
      // \u4F7F\u7528\u65B0\u72B6\u6001\u514B\u9686\u5B50\u7EC4\u4EF6\u5E76\u66F4\u65B0\u7F13\u5B58
      return (this.cachedChild = React.cloneElement(this.cachedChild, {
        counter: this.state.childCounter,
      }))
    }

    // \u5426\u5219\u76F4\u63A5\u8FD4\u56DE\u7F13\u5B58\u7684\u5B50\u7EC4\u4EF6
    return this.cachedChild
  }

  render(): React.ReactNode {
    const { counter } = this.state

    return (
      <div className={s.parent}>
        <p>\u7236\u7EC4\u4EF6: {counter}</p>

        {this.childRenderControl()}

        <div className={s.btnGroup}>
          <button
            onClick={() =>
              this.setState((state) => ({
                ...this.state,
                counter: state.counter + 1,
              }))
            }
          >
            add counter
          </button>

          <button
            onClick={() =>
              this.setState((state) => ({
                ...this.state,
                childCounter: state.childCounter + 1,
              }))
            }
          >
            add childCounter
          </button>
        </div>
      </div>
    )
  }
}

interface ChildProps {
  counter: number
}
class Child extends React.Component<ChildProps> {
  componentDidUpdate(): void {
    logger.log('\u5B50\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3')
  }

  render(): React.ReactNode {
    const { counter } = this.props
    return (
      <div className={s.child}>
        <p>\u5B50\u7EC4\u4EF6: {counter}</p>
      </div>
    )
  }
}
\`\`\`

<DemoBlock>
  <RenderControlDemo2ClassComponent />
</DemoBlock>

![\u7C7B\u7EC4\u4EF6\u7F13\u5B58React\u5143\u7D20\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%BC%93%E5%AD%98React%E5%85%83%E7%B4%A0%E9%81%BF%E5%85%8D%E4%B8%8D%E5%BF%85%E8%A6%81%E7%9A%84%E6%B8%B2%E6%9F%93.gif)

\u53EF\u4EE5\u770B\u5230\uFF0C\u6539\u53D8\u4E0E\u5B50\u7EC4\u4EF6\u65E0\u5173\u7684\u72B6\u6001\u65F6\uFF0C\u5B50\u7EC4\u4EF6\u4E0D\u4F1A\u88AB\u66F4\u65B0\uFF0C\u6211\u4EEC\u7684\u7F13\u5B58\u903B\u8F91\u751F\u6548\u4E86\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3\u5F00\u9500

#### 2.1.2. \u51FD\u6570\u7EC4\u4EF6 useMemo \u7F13\u5B58 ReactElement

\u5BF9\u4E8E\u51FD\u6570\u7EC4\u4EF6\uFF0C\u7531\u4E8E\u4E0D\u80FD\u50CF\u7C7B\u7EC4\u4EF6\u90A3\u6837\u4FDD\u5B58\u72B6\u6001\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u501F\u52A9 hooks \u6765\u5E2E\u52A9\u6211\u4EEC\u5B9E\u73B0\u7F13\u5B58\u7684\u7279\u6027\uFF0CuseMemo \u5C31\u53EF\u4EE5\u5E2E\u6211\u4EEC\u5B9E\u73B0\u7F13\u5B58\u7684\u529F\u80FD

\`\`\`tsx
const RenderControlDemo2FunctionComponent: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const [childCounter, setChildCounter] = useState(0)

  useEffect(() => {
    logger.log('\u7236\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3')
  })

  return (
    <div className={s.parent}>
      <p>\u7236\u7EC4\u4EF6: {counter}</p>

      {useMemo(
        () => (
          <Child counter={childCounter} />
        ),
        [childCounter],
      )}

      <div className={s.btnGroup}>
        <button onClick={() => setCounter(counter + 1)}>add counter</button>
        <button onClick={() => setChildCounter(childCounter + 1)}>
          add childCounter
        </button>
      </div>
    </div>
  )
}

interface ChildProps {
  counter: number
}
const Child: React.FC<ChildProps> = (props) => {
  const { counter } = props

  useEffect(() => {
    logger.log('\u5B50\u7EC4\u4EF6\u66F4\u65B0\u6E32\u67D3')
  })

  return (
    <div className={s.child}>
      <p>\u5B50\u7EC4\u4EF6: {counter}</p>
    </div>
  )
}
\`\`\`

<DemoBlock>
  <RenderControlDemo2FunctionComponent />
</DemoBlock>

\u6700\u7EC8\u6548\u679C\u548C\u7C7B\u7EC4\u4EF6\u624B\u52A8\u5B9E\u73B0\u7F13\u5B58\u903B\u8F91\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u660E\u663E\u51FD\u6570\u7EC4\u4EF6\u7684\u7F13\u5B58\u903B\u8F91\u5199\u8D77\u6765\u66F4\u52A0\u8212\u670D\uFF0C\u56E0\u4E3A\u6709 useMemo \u8FD9\u4E2A\u8BED\u4E49\u5316\u7684 hook \u5E2E\u6211\u4EEC\u5B8C\u6210\u4E86\u7F13\u5B58\u903B\u8F91\uFF0C\u4E00\u65B9\u9762\u63D0\u9AD8\u4E86\u4EE3\u7801\u53EF\u8BFB\u6027\uFF0C\u53E6\u4E00\u65B9\u9762\u4E5F\u964D\u4F4E\u4E86\u6211\u4EEC\u7684\u5FC3\u667A\u8D1F\u62C5\uFF0C\u4F7F\u7528\u8D77\u6765\u5F88\u7B80\u5355

### 2.2. PureComponent

\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A Demo\uFF0C\u770B\u770B\u76F8\u540C\u7684\u5B50\u7EC4\u4EF6\u4F7F\u7528\u666E\u901A\u7684 React.Component \u548C\u4F7F\u7528 React.PureComponent \u6709\u4EC0\u4E48\u4E0D\u540C

\u7236\u7EC4\u4EF6\uFF1A

\`\`\`tsx
const PureComponentDemo: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const [childCounter, setChildCounter] = useState(0)

  return (
    <div className={s.parent}>
      <p>\u7236\u7EC4\u4EF6\uFF1A{counter}</p>

      <NormalChild counter={childCounter} />
      <PureChild counter={childCounter} />

      <div className={s.btnGroup}>
        <button onClick={() => setCounter(counter + 1)}>add counter</button>
        <button onClick={() => setChildCounter(childCounter + 1)}>
          add childCounter
        </button>
      </div>
    </div>
  )
}
\`\`\`

\u5B50\u7EC4\u4EF6\uFF08\u53EA\u653E\u51FA\u4E00\u4E2A\u5373\u53EF\uFF0C\u53E6\u4E00\u4E2A\u4EC5\u4EC5\u662F \`extends React.Component\` \u548C \`extends React.PureComponent\` \u7684\u533A\u522B\uFF09

\`\`\`tsx
interface ChildProps {
  counter: number
}
interface ChildState {
  foo: string
  bar: string
}

/** @description PureComponent Child */
class PureChild extends React.PureComponent<ChildProps, ChildState> {
  state: Readonly<ChildState> = {
    foo: 'foo',
    bar: 'bar',
  }

  render(): React.ReactNode {
    logger.log('PureChild \u6E32\u67D3')
    const { counter } = this.props
    return (
      <div className={s.child}>
        <p>PureComponent\uFF1A{counter}</p>
        <div className={s.btnGroup}>
          <button onClick={() => this.setState({ foo: 'foo' })}>
            setState \u8D4B\u503C\u76F8\u540C\u5C5E\u6027\u503C
          </button>

          <button onClick={() => this.setState({ foo: 'modified-foo' })}>
            setState \u8D4B\u503C\u4E0D\u540C\u5C5E\u6027\u503C
          </button>

          <button
            onClick={() => {
              this.setState((state) => {
                // @ts-ignore
                state.bar = 'modified-bar'
                return state
              })
            }}
          >
            setState \u8FD4\u56DE\u76F8\u540C\u7684\u5F15\u7528
          </button>
        </div>
      </div>
    )
  }
}
\`\`\`

<DemoBlock>
  <PureComponentDemo />
</DemoBlock>

#### 2.2.1. \u7236\u7EC4\u4EF6\u72B6\u6001\u53D8\u5316\u5BF9\u4E24\u79CD\u5B50\u7EC4\u4EF6\u7684\u5F71\u54CD

\u9996\u5148\u770B\u770B\u7236\u7EC4\u4EF6\u66F4\u65B0 counter \u548C childCounter \u65F6\uFF0C\u4E24\u4E2A\u5B50\u7EC4\u4EF6\u662F\u5426\u4F1A\u6267\u884C\u6E32\u67D3\u66F4\u65B0\uFF1A

![\u7236\u7EC4\u4EF6\u72B6\u6001\u53D8\u5316\u65F6\u5BF9\u4E24\u79CD\u5B50\u7EC4\u4EF6\u7684\u5F71\u54CD](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%88%B6%E7%BB%84%E4%BB%B6%E7%8A%B6%E6%80%81%E5%8F%98%E5%8C%96%E6%97%B6%E5%AF%B9%E4%B8%A4%E7%A7%8D%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E5%BD%B1%E5%93%8D.gif)

\u53EF\u4EE5\u770B\u5230\uFF0C**\u666E\u901A\u7684\u7EC4\u4EF6\u4F1A\u968F\u7740\u7236\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u800C\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C PureComponent \u5219\u4E0D\u4F1A**

#### 2.2.2. setState \u8D4B\u503C\u76F8\u540C\u5C5E\u6027

\u63A5\u4E0B\u6765\u518D\u770B\u770B\u5206\u522B\u5728\u4E24\u79CD\u5B50\u7EC4\u4EF6\u4E2D\u901A\u8FC7 setState \u8D4B\u503C\u76F8\u540C\u7684\u5C5E\u6027\u503C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1A

\`\`\`tsx
<button onClick={() => this.setState({ foo: 'foo' })}>
  setState \u8D4B\u503C\u76F8\u540C\u5C5E\u6027\u503C
</button>
\`\`\`

![\u4E24\u79CD\u5B50\u7EC4\u4EF6\u4E2DsetState\u8D4B\u503C\u76F8\u540C\u5C5E\u6027\u503C](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%B8%A4%E7%A7%8D%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B8%ADsetState%E8%B5%8B%E5%80%BC%E7%9B%B8%E5%90%8C%E5%B1%9E%E6%80%A7%E5%80%BC.gif)

\u53EF\u4EE5\u770B\u5230\uFF0C**setState \u8D4B\u503C\u7684\u5C5E\u6027\u503C\u76F8\u540C\u65F6\uFF0C\u666E\u901A\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C PureComponent \u5219\u4E0D\u4F1A**

#### 2.2.3. setState \u8D4B\u503C\u4E0D\u540C\u5C5E\u6027

\u63A5\u4E0B\u91CC\u518D\u770B\u770B\u5206\u522B\u518D\u4E24\u79CD\u5B50\u7EC4\u4EF6\u4E2D\u901A\u8FC7 setState \u8D4B\u503C\u4E0D\u540C\u7684\u5C5E\u6027\u503C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1A

\`\`\`tsx
<button onClick={() => this.setState({ foo: 'modified-foo' })}>
  setState \u8D4B\u503C\u4E0D\u540C\u5C5E\u6027\u503C
</button>
\`\`\`

![\u4E24\u79CD\u5B50\u7EC4\u4EF6\u4E2DsetState\u8D4B\u503C\u4E0D\u540C\u5C5E\u6027\u503C](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%B8%A4%E7%A7%8D%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B8%ADsetState%E8%B5%8B%E5%80%BC%E4%B8%8D%E5%90%8C%E5%B1%9E%E6%80%A7%E5%80%BC.gif)

\u53EF\u4EE5\u770B\u5230\uFF0C**setState \u8D4B\u503C\u7684\u5C5E\u6027\u503C\u4E0D\u540C\u65F6\uFF0C\u4E24\u79CD\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3**

#### 2.2.4. setState \u8FD4\u56DE\u76F8\u540C\u7684\u5F15\u7528

\u6700\u540E\u6211\u4EEC\u518D\u770B\u770B\u5F53\u6211\u4EEC setState \u76F4\u63A5\u4FEE\u6539\u539F\u59CB state \u5C5E\u6027\u503C\uFF0C\u8FD4\u56DE\u7684\u4ECD\u7136\u662F\u76F8\u540C\u7684 state \u5F15\u7528\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1A

\`\`\`tsx
<button
  onClick={() => {
    this.setState((state) => {
      // @ts-ignore
      state.bar = 'modified-bar'
      return state
    })
  }}
>
  setState \u8FD4\u56DE\u76F8\u540C\u7684\u5F15\u7528
</button>
\`\`\`

![\u4E24\u79CD\u5B50\u7EC4\u4EF6\u4E2DsetState\u8FD4\u56DE\u76F8\u540C\u5F15\u7528](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%B8%A4%E7%A7%8D%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B8%ADsetState%E8%BF%94%E5%9B%9E%E7%9B%B8%E5%90%8C%E5%BC%95%E7%94%A8.gif)

\u53EF\u4EE5\u770B\u5230\uFF0C**setState \u8FD4\u56DE\u76F8\u540C\u5F15\u7528\u65F6\uFF0C\u666E\u901A\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0CPureComponent \u5219\u4E0D\u4F1A**

#### 2.2.5. PureComponent \u7684\u673A\u5236

\u901A\u8FC7\u4E0A\u9762\u7684 Demo\uFF0C\u6211\u4EEC\u53EF\u4EE5\u603B\u7ED3\u51FA\u5982\u4E0B\u51E0\u70B9\uFF1A

- \u666E\u901A\u7684\u7EC4\u4EF6\u4F1A\u968F\u7740\u7236\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u800C\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C PureComponent \u5219\u4E0D\u4F1A
- setState \u8D4B\u503C\u7684\u5C5E\u6027\u503C\u76F8\u540C\u65F6\uFF0C\u666E\u901A\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C PureComponent \u5219\u4E0D\u4F1A
- setState \u8D4B\u503C\u7684\u5C5E\u6027\u503C\u4E0D\u540C\u65F6\uFF0C\u4E24\u79CD\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3
- setState \u8FD4\u56DE\u76F8\u540C\u5F15\u7528\u65F6\uFF0C\u666E\u901A\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0CPureComponent \u5219\u4E0D\u4F1A

\u4ECE\u8FD9\u4E2A\u73B0\u8C61\u4E2D\u6211\u4EEC\u53EF\u4EE5\u5F97\u51FA\u4EC0\u4E48\u7ED3\u8BBA\u5462\uFF1F

PureComponent \u53EA\u4F1A\u5728 props \u6216 state \u6539\u53D8\u65F6\u91CD\u65B0\u6E32\u67D3\uFF0C\u5E76\u4E14\u5BF9 props \u548C state \u7684\u6BD4\u8F83\u662F \`shallowEqual\`\uFF0C\u5373\u53EA\u6BD4\u8F83\u4E24\u4E2A\u5BF9\u8C61\u7684\u4E00\u5C42\uFF0C\u5BF9\u4E8E\u5C5E\u6027\u4ECD\u7136\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7684\u5219\u53EA\u4F1A\u6BD4\u8F83\u5B83\u4EEC\u7684\u5185\u5B58\u5730\u5740\u662F\u5426\u76F8\u540C\uFF0C\u5E76\u4E0D\u4F1A\u7EE7\u7EED\u9012\u5F52\u6BD4\u8F83\u5185\u90E8\u5C5E\u6027\u662F\u5426\u76F8\u540C

\u4EE5\u4E0B\u662F React \u6E90\u7801\u4E2D\u5173\u4E8E shallowEqual \u7684\u6CE8\u91CA\u548C\u5B9E\u73B0\uFF1A

\`\`\`js
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA: mixed, objB: mixed): boolean {
  if (is(objA, objB)) {
    return true
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) {
    return false
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    const currentKey = keysA[i]
    if (
      !hasOwnProperty.call(objB, currentKey) ||
      !is(objA[currentKey], objB[currentKey])
    ) {
      return false
    }
  }

  return true
}

// is \u7528\u4E8E\u6BD4\u8F83\u4E24\u4E2A\u503C\u662F\u5426\u4E25\u683C\u76F8\u7B49
function is(x: any, y: any) {
  return (
    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) // eslint-disable-line no-self-compare
  )
}
\`\`\`

\u8FD9\u6837\u5C31\u4E0D\u96BE\u7406\u89E3 Demo \u4E2D\u7684\u73B0\u8C61\u4E86\uFF0C\u6211\u4EEC\u6765\u9010\u4E00\u5206\u6790\u4EE5\u4E0B\uFF1A

1. \u666E\u901A\u7684\u7EC4\u4EF6\u4F1A\u968F\u7740\u7236\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u800C\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C PureComponent \u5219\u4E0D\u4F1A

   \u7236\u7EC4\u4EF6\u6539\u53D8 childCounter \u65F6\uFF0C\u5B50\u7EC4\u4EF6\u7684\u65B0\u8001 props \u4E2D counter \u7684\u503C\u4E0D\u540C\u4E86\uFF0C\u4ECE\u800C \`shallowEqual\` \u5224\u5B9A\u4E3A true\uFF0C\u4E0D\u89E6\u53D1\u66F4\u65B0

2. setState \u8D4B\u503C\u7684\u5C5E\u6027\u503C\u76F8\u540C\u65F6\uFF0C\u666E\u901A\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C PureComponent \u5219\u4E0D\u4F1A

   state \u5F15\u7528\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u4F46\u662F\u65B0\u8001 state \u4E2D\u7684\u6240\u6709 key \u7684\u503C\u90FD\u662F\u53EF\u4EE5\u7528 React \u5B9E\u73B0\u7684 \`is\` \u53BB\u5224\u5B9A\u4E3A\u76F8\u7B49\u7684\uFF0C\u4ECE\u800C \`shallowEqual\` \u5224\u5B9A\u4E3A true\uFF0C\u4E0D\u89E6\u53D1\u66F4\u65B0

3. setState \u8D4B\u503C\u7684\u5C5E\u6027\u503C\u4E0D\u540C\u65F6\uFF0C\u4E24\u79CD\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3

   state \u5F15\u7528\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u4E14\u65B0\u8001 state \u4E2D\u7684 foo \u5C5E\u6027\u7684\u503C\u88AB \`is\` \u5224\u5B9A\u4E3A\u4E0D\u76F8\u7B49\uFF08\u65E7 state \u4E2D foo \u7684\u503C\u4E3A 'foo'\uFF0C\u65B0 state \u4E2D foo \u7684\u503C\u4E3A 'modified-foo'\uFF09\uFF0C\u4ECE\u800C \`shallowEqual\` \u5224\u5B9A\u4E3A false\uFF0C\u89E6\u53D1\u66F4\u65B0

4. setState \u8FD4\u56DE\u76F8\u540C\u5F15\u7528\u65F6\uFF0C\u666E\u901A\u7EC4\u4EF6\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0CPureComponent \u5219\u4E0D\u4F1A

   state \u5F15\u7528\u672A\u53D1\u751F\u53D8\u5316\uFF0C\u76F4\u63A5\u8FD4\u56DE true\uFF0C\u5373\u4FBF\u503C\u53D8\u5316\u4E86\u4E5F\u4E0D\u4F1A\u7EE7\u7EED\u53BB\u8FDB\u884C\u6BD4\u8F83\uFF0C\u4ECE\u800C\u4E0D\u4F1A\u66F4\u65B0

\u603B\u7684\u6765\u8BF4\uFF0CPureComponent \u7684\u6838\u5FC3\u5C31\u5728\u4E8E**\u4F7F\u7528 shallowEqual \u5BF9\u6BD4 props \u548C state\uFF0C\u53EA\u5BF9\u6BD4\u7B2C\u4E00\u5C42\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7684 object \u5E76\u4E0D\u4F1A\u9012\u5F52\u53BB\u6BD4\u5BF9\uFF0C\u53EA\u8981\u6BD4\u5BF9\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4E00\u4E2A\u5C5E\u6027\u53D1\u751F\u4E86\u53D8\u5316\u5C31\u4F1A\u89E6\u53D1\u66F4\u65B0**

## 3. \u6E32\u67D3\u63A7\u5236\u6D41\u7A0B\u56FE

![\u6E32\u67D3\u63A7\u5236\u6D41\u7A0B\u56FE](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E6%B8%B2%E6%9F%93%E6%8E%A7%E5%88%B6%E6%B5%81%E7%A8%8B%E5%9B%BE.awebp)
`;export{ll as content,V as default,I as frontmatter,Z as lastUpdatedTime,Q as title,J as toc};
