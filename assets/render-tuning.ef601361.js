var D=Object.defineProperty;var y=(r,l,s)=>l in r?D(r,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[l]=s;var i=(r,l,s)=>(y(r,typeof l!="symbol"?l+"":l,s),s);import{jsx as n,jsxs as e,Fragment as C}from"react/jsx-runtime";import{D as o}from"./index.6529e49c.js";import{_ as m}from"./island_inject.f46abea8.js";import d,{lazy as E,Suspense as h,useState as F}from"react";const N=()=>n(h,{fallback:n(f,{}),children:n(u,{})}),A=async r=>new Promise(l=>setTimeout(l,r)),u=E(async()=>(await A(4e3),m(()=>import("./foo.9d8f7093.js"),[]))),f=()=>n("div",{children:"Loading..."}),B=()=>{const[r,l]=F(!1);if(r)throw new Error("throw error \u6309\u94AE\u89E6\u53D1\u5F02\u5E38");return e("div",{children:[n("p",{children:"Foo"}),n("button",{onClick:()=>{l(!0)},children:"throw error"})]})};class b extends d.Component{constructor(){super(...arguments);i(this,"state",{hasError:!1,errorInfo:""})}componentDidCatch(s,c){this.setState({hasError:!0,errorInfo:s.message})}render(){const{hasError:s,errorInfo:c}=this.state;return e("div",{children:[s?e("div",{children:["Foo \u7EC4\u4EF6\u9519\u8BEF: ",c]}):n(B,{}),n("p",{children:"Hello"})]})}}const g=()=>{const[r,l]=F(!1);if(r)throw new Error("throw error \u6309\u94AE\u89E6\u53D1\u5F02\u5E38");return e("div",{children:[n("p",{children:"Foo"}),n("button",{onClick:()=>{l(!0)},children:"throw error"})]})};class v extends d.Component{constructor(){super(...arguments);i(this,"state",{hasError:!1,errorInfo:""})}static getDerivedStateFromError(s){return{hasError:!0,errorInfo:s.message}}render(){const{hasError:s,errorInfo:c}=this.state;return e("div",{children:[s?e("div",{children:["Foo \u7EC4\u4EF6\u9519\u8BEF: ",c]}):n(g,{}),n("p",{children:"Hello"})]})}}const x=(r,l)=>E(()=>new Promise(async c=>{const a=await l();c({default:p=>n(r,{apiData:a,...p})})})),w=()=>new Promise(r=>{setTimeout(()=>{r({name:"plasticine",age:21})},3e3)}),S=r=>{const{id:l,apiData:s}=r,{name:c,age:a}=s;return e("div",{children:[e("p",{children:["id: ",l]}),e("p",{children:["name: ",c]}),e("p",{children:["age: ",a]})]})},I=()=>n("div",{children:"Loading..."}),R=()=>{const r=x(S,w);return n(h,{fallback:n(I,{}),children:n(r,{})})},_=void 0,G=[{id:"1-\u5F02\u6B65\u6E32\u67D3\u548C\u61D2\u52A0\u8F7D",text:"1. \u5F02\u6B65\u6E32\u67D3\u548C\u61D2\u52A0\u8F7D",depth:2},{id:"2-\u6E32\u67D3\u9519\u8BEF\u8FB9\u754C",text:"2. \u6E32\u67D3\u9519\u8BEF\u8FB9\u754C",depth:2},{id:"21-componentdidcatch",text:"2.1. componentDidCatch",depth:3},{id:"22-getderivedstatefromerror",text:"2.2. getDerivedStateFromError",depth:3},{id:"23-\u5BF9\u6BD4",text:"2.3. \u5BF9\u6BD4",depth:3},{id:"3-\u4ECE-diff-\u6765\u770B-key-\u7684\u4F5C\u7528",text:"3. \u4ECE diff \u6765\u770B key \u7684\u4F5C\u7528",depth:2},{id:"31-diff-children-\u6D41\u7A0B",text:"3.1. diff children \u6D41\u7A0B",depth:3},{id:"4-\u5B9E\u6218----\u5F02\u6B65\u7EC4\u4EF6",text:"4. \u5B9E\u6218 -- \u5F02\u6B65\u7EC4\u4EF6",depth:2}],P="\u6E32\u67D3\u8C03\u4F18";function t(r){const l=Object.assign({h1:"h1",a:"a",h2:"h2",div:"div",button:"button",span:"span",pre:"pre",code:"code",p:"p",ol:"ol",li:"li",h3:"h3"},r.components);return e(C,{children:[e(l.h1,{id:"\u6E32\u67D3\u8C03\u4F18",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6E32\u67D3\u8C03\u4F18",children:"#"}),"\u6E32\u67D3\u8C03\u4F18"]}),`
`,e(l.h2,{id:"1-\u5F02\u6B65\u6E32\u67D3\u548C\u61D2\u52A0\u8F7D",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#1-\u5F02\u6B65\u6E32\u67D3\u548C\u61D2\u52A0\u8F7D",children:"#"}),"1. \u5F02\u6B65\u6E32\u67D3\u548C\u61D2\u52A0\u8F7D"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u4F7F\u7528 Suspense */"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"FC"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"lazy"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Suspense"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"react"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Demo1"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Suspense"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"fallback"}),n(l.span,{style:{color:"#81A1C1"},children:"={<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Loading"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"LazyComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</"}),n(l.span,{style:{color:"#8FBCBB"},children:"Suspense"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"sleep"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"async"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"timeout"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"new"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Promise"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"resolve"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"setTimeout"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"resolve"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"timeout"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"LazyComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"lazy"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#81A1C1"},children:"async"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"await"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"sleep"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#B48EAD"},children:"4000"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"./foo"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Loading"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Loading..."}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Demo1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(o,{children:n(N,{})}),`
`,e(l.h2,{id:"2-\u6E32\u67D3\u9519\u8BEF\u8FB9\u754C",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#2-\u6E32\u67D3\u9519\u8BEF\u8FB9\u754C",children:"#"}),"2. \u6E32\u67D3\u9519\u8BEF\u8FB9\u754C"]}),`
`,n(l.p,{children:"\u5F53\u6E32\u67D3\u7EC4\u4EF6\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u5F02\u5E38\u65F6\u4F1A\u5BFC\u81F4\u9875\u9762\u767D\u5C4F\uFF0C\u8FD9\u662F\u5F88\u81F4\u547D\u7684\uFF0C\u597D\u5728 React \u63D0\u4F9B\u4E86\u4E24\u5468\u65B9\u5F0F\u4F9B\u6211\u4EEC\u5904\u7406\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u7684\u5F02\u5E38\uFF0C\u5E76\u5141\u8BB8\u6211\u4EEC\u8FDB\u884C\u964D\u7EA7\u6E32\u67D3\uFF0C\u9632\u6B62\u9875\u9762\u767D\u5C4F\u8FD9\u79CD\u81F4\u547D\u9519\u8BEF\u7684\u60C5\u51B5\u53D1\u751F"}),`
`,n(l.p,{children:"\u8FD9\u4E24\u79CD\u65B9\u5F0F\u662F\uFF1A"}),`
`,e(l.ol,{children:[`
`,n(l.li,{children:"componentDidCatch"}),`
`,n(l.li,{children:"getDerivedStateFromError"}),`
`]}),`
`,e(l.h3,{id:"21-componentdidcatch",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#21-componentdidcatch",children:"#"}),"2.1. componentDidCatch"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u4F7F\u7528 componentDidError \u63A7\u5236\u9519\u8BEF\u6E32\u67D3\u8FB9\u754C */"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"useState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"react"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Foo"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"hasError"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"setHasError"}),n(l.span,{style:{color:"#ECEFF4"},children:"]"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"useState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#81A1C1"},children:"false"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"hasError"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"throw"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"new"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Error"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"throw error \u6309\u94AE\u89E6\u53D1\u5F02\u5E38"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Foo"}),n(l.span,{style:{color:"#81A1C1"},children:"</p>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<button"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#88C0D0"},children:"setHasError"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#81A1C1"},children:"true"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"        throw error"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ComponentDidCatchDemoState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  hasError"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"boolean"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  errorInfo"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ComponentDidCatchDemo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"{},"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#8FBCBB"},children:"ComponentDidCatchDemoState"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"ComponentDidCatchDemoState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"hasError"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"false"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"''"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"componentDidCatch"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"error"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Error"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ErrorInfo"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"console"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"error"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"hasError"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"error"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"message"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"hasError"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"hasError"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"?"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Foo \u7EC4\u4EF6\u9519\u8BEF: "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#81A1C1"},children:"}</div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Foo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Hello"}),n(l.span,{style:{color:"#81A1C1"},children:"</p>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"ComponentDidCatchDemo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(o,{children:n(b,{})}),`
`,e(l.h3,{id:"22-getderivedstatefromerror",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#22-getderivedstatefromerror",children:"#"}),"2.2. getDerivedStateFromError"]}),`
`,n(l.p,{children:"\u8FD9\u662F\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5\uFF0C\u5B83\u7684\u8FD4\u56DE\u503C\u4F1A\u88AB\u5408\u5E76\u5230 state \u4E2D\uFF0C\u66F4\u63A8\u8350\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u5904\u7406\u6E32\u67D3\u5F02\u5E38\uFF0C\u56E0\u4E3A\u5728\u8FD9\u91CC\u9762\u4E0D\u80FD\u83B7\u53D6\u5230 this\uFF0C\u53EF\u4EE5\u907F\u514D\u6211\u4EEC\u8BEF\u64CD\u4F5C setState \u5BFC\u81F4\u4E0D\u53EF\u9884\u6599\u7684\u540E\u679C"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"GetDerivedStateFromErrorDemo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"{},"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#8FBCBB"},children:"GetDerivedStateFromErrorDemoState"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"GetDerivedStateFromErrorDemoState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"hasError"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"false"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"''"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"static"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"getDerivedStateFromError"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"error"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Error"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"hasError"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"error"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"message"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"hasError"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"hasError"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"?"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Foo \u7EC4\u4EF6\u9519\u8BEF: "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#81A1C1"},children:"}</div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Foo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<p>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Hello"}),n(l.span,{style:{color:"#81A1C1"},children:"</p>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(o,{children:n(v,{})}),`
`,e(l.h3,{id:"23-\u5BF9\u6BD4",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#23-\u5BF9\u6BD4",children:"#"}),"2.3. \u5BF9\u6BD4"]}),`
`,n(l.p,{children:n(l.code,{children:"componentDidCatch"})}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#88C0D0"},children:"componentDidCatch"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"error"}),n(l.span,{style:{color:"#D8DEE9FF"},children:": "}),n(l.span,{style:{color:"#D8DEE9"},children:"Error"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:": "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"ErrorInfo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"): "}),n(l.span,{style:{color:"#81A1C1"},children:"void"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"hasError"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"error"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"message"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:n(l.code,{children:"getDerivedStateFromError"})}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9"},children:"static"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"getDerivedStateFromError"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"error"}),n(l.span,{style:{color:"#D8DEE9FF"},children:": "}),n(l.span,{style:{color:"#D8DEE9"},children:"Error"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"hasError"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"errorInfo"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"error"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"message"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h2,{id:"3-\u4ECE-diff-\u6765\u770B-key-\u7684\u4F5C\u7528",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#3-\u4ECE-diff-\u6765\u770B-key-\u7684\u4F5C\u7528",children:"#"}),"3. \u4ECE diff \u6765\u770B key \u7684\u4F5C\u7528"]}),`
`,e(l.h3,{id:"31-diff-children-\u6D41\u7A0B",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#31-diff-children-\u6D41\u7A0B",children:"#"}),"3.1. diff children \u6D41\u7A0B"]}),`
`,e(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"js"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"function"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"reconcileChildrenArray"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/* \u7B2C\u4E00\u6B65 -- \u904D\u5386\u65B0 children \uFF0C\u590D\u7528 oldFiber  */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"for"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#81A1C1"},children:";"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"!=="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"null"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"&&"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newIdx"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9FF"},children:"length"}),n(l.span,{style:{color:"#81A1C1"},children:";"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newIdx"}),n(l.span,{style:{color:"#81A1C1"},children:"++"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFiber"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"index"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newIdx"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"nextOldFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFiber"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"null"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"else"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"nextOldFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFiber"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"sibling"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"updateSlot"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"returnFiber"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFiber"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"newIdx"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"expirationTime"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"newFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"==="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"null"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"break"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// ..\u4E00\u4E9B\u5176\u4ED6\u903B\u8F91"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"shouldTrackSideEffects"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"      "}),n(l.span,{style:{color:"#616E88"},children:"// shouldTrackSideEffects \u4E3A\u66F4\u65B0\u6D41\u7A0B\u3002"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"&&"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newFiber"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"alternate"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"==="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"null"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#616E88"},children:"/* \u627E\u5230\u4E86\u4E0E\u65B0\u8282\u70B9\u5BF9\u5E94\u7684fiber\uFF0C\u4F46\u662F\u4E0D\u80FD\u590D\u7528\uFF0C\u90A3\u4E48\u76F4\u63A5\u5220\u9664\u8001\u8282\u70B9 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#88C0D0"},children:"deleteChild"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"returnFiber"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// \u7B2C\u4E8C\u6B65\uFF1A\u7EDF\u4E00\u5220\u9664oldfiber"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"newIdx"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"==="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9FF"},children:"length) "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"deleteRemainingChildren"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"returnFiber"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"resultingFirstChild"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// \u7B2C\u4E09\u6B65\uFF1A\u7EDF\u4E00\u521B\u5EFAnewFiber"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"==="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"null"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"for"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#81A1C1"},children:";"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newIdx"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9FF"},children:"length"}),n(l.span,{style:{color:"#81A1C1"},children:";"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newIdx"}),n(l.span,{style:{color:"#81A1C1"},children:"++"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"createChild"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"returnFiber"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"["}),n(l.span,{style:{color:"#D8DEE9"},children:"newIdx"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"]"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"expirationTime"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"      )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"      "}),n(l.span,{style:{color:"#616E88"},children:"// ..."})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// \u7B2C\u56DB\u6B65\uFF1A\u9488\u5BF9\u53D1\u751F\u79FB\u52A8\u548C\u66F4\u590D\u6742\u7684\u60C5\u51B5"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"existingChildren"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"mapRemainingChildren"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"returnFiber"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"oldFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"for"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#81A1C1"},children:";"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newIdx"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newChildren"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9FF"},children:"length"}),n(l.span,{style:{color:"#81A1C1"},children:";"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newIdx"}),n(l.span,{style:{color:"#81A1C1"},children:"++"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"newFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"updateFromMap"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"existingChildren"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"returnFiber"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"/* \u4ECEmapRemainingChildren\u5220\u6389\u5DF2\u7ECF\u590D\u7528oldFiber */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// \u7B2C\u4E94\u6B65\uFF1A\u5220\u9664\u5269\u4F59\u6CA1\u6709\u590D\u7528\u7684oldFiber"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"shouldTrackSideEffects"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"/* \u79FB\u9664\u6CA1\u6709\u590D\u7528\u5230\u7684oldFiber */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"existingChildren"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"forEach"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"deleteChild"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"returnFiber"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h2,{id:"4-\u5B9E\u6218----\u5F02\u6B65\u7EC4\u4EF6",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#4-\u5B9E\u6218----\u5F02\u6B65\u7EC4\u4EF6",children:"#"}),"4. \u5B9E\u6218 -- \u5F02\u6B65\u7EC4\u4EF6"]}),`
`,n(l.p,{children:"\u4F7F\u7528 Suspense + React.lazy \u5B9E\u73B0\u5F02\u6B65\u7EC4\u4EF6\uFF0C\u652F\u6301\u4F20\u5165\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u7528\u4E8E\u83B7\u53D6\u6570\u636E\uFF0C\u5176 resolve \u7684\u7ED3\u679C\u4F1A\u4F5C\u4E3A apiData \u5C5E\u6027\u4F20\u9012\u7ED9\u4F20\u5165\u7684\u7EC4\u4EF6"}),`
`,n(o,{children:n(R,{})})]})}function j(r={}){const{wrapper:l}=r.components||{};return l?n(l,Object.assign({},r,{children:n(t,r)})):t(r)}const O="2022/12/13 07:50:11",M=`import { DemoBlock } from '@island/demo-block'

import { Demo1 } from '~/demos/render-tuning/demo1'
import {
  ComponentDidCatchDemo,
  GetDerivedStateFromErrorDemo,
} from '~/demos/render-tuning/demo2'
import { Demo3 } from '~/demos/render-tuning/demo3'

# \u6E32\u67D3\u8C03\u4F18

## 1. \u5F02\u6B65\u6E32\u67D3\u548C\u61D2\u52A0\u8F7D

\`\`\`tsx
/** @description \u4F7F\u7528 Suspense */

import { FC, lazy, Suspense } from 'react'

const Demo1: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  )
}

const sleep = async (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout))

const LazyComponent = lazy(async () => {
  await sleep(4000)
  return import('./foo')
})

const Loading: React.FC = () => {
  return <div>Loading...</div>
}

export { Demo1 }
\`\`\`

<DemoBlock>
  <Demo1 />
</DemoBlock>

## 2. \u6E32\u67D3\u9519\u8BEF\u8FB9\u754C

\u5F53\u6E32\u67D3\u7EC4\u4EF6\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u5F02\u5E38\u65F6\u4F1A\u5BFC\u81F4\u9875\u9762\u767D\u5C4F\uFF0C\u8FD9\u662F\u5F88\u81F4\u547D\u7684\uFF0C\u597D\u5728 React \u63D0\u4F9B\u4E86\u4E24\u5468\u65B9\u5F0F\u4F9B\u6211\u4EEC\u5904\u7406\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u7684\u5F02\u5E38\uFF0C\u5E76\u5141\u8BB8\u6211\u4EEC\u8FDB\u884C\u964D\u7EA7\u6E32\u67D3\uFF0C\u9632\u6B62\u9875\u9762\u767D\u5C4F\u8FD9\u79CD\u81F4\u547D\u9519\u8BEF\u7684\u60C5\u51B5\u53D1\u751F

\u8FD9\u4E24\u79CD\u65B9\u5F0F\u662F\uFF1A

1. componentDidCatch
2. getDerivedStateFromError

### 2.1. componentDidCatch

\`\`\`tsx
/** @description \u4F7F\u7528 componentDidError \u63A7\u5236\u9519\u8BEF\u6E32\u67D3\u8FB9\u754C */

import React, { useState } from 'react'

const Foo: React.FC = () => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    throw new Error('throw error \u6309\u94AE\u89E6\u53D1\u5F02\u5E38')
  }

  return (
    <div>
      <p>Foo</p>
      <button
        onClick={() => {
          setHasError(true)
        }}
      >
        throw error
      </button>
    </div>
  )
}

interface ComponentDidCatchDemoState {
  hasError: boolean
  errorInfo: string
}
class ComponentDidCatchDemo extends React.Component<
  {},
  ComponentDidCatchDemoState
> {
  state: Readonly<ComponentDidCatchDemoState> = {
    hasError: false,
    errorInfo: '',
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo)
    this.setState({ hasError: true, errorInfo: error.message })
  }

  render(): React.ReactNode {
    const { hasError, errorInfo } = this.state
    return (
      <div>
        {hasError ? <div>Foo \u7EC4\u4EF6\u9519\u8BEF: {errorInfo}</div> : <Foo />}
        <p>Hello</p>
      </div>
    )
  }
}

export { ComponentDidCatchDemo }
\`\`\`

<DemoBlock>
  <ComponentDidCatchDemo />
</DemoBlock>

### 2.2. getDerivedStateFromError

\u8FD9\u662F\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5\uFF0C\u5B83\u7684\u8FD4\u56DE\u503C\u4F1A\u88AB\u5408\u5E76\u5230 state \u4E2D\uFF0C\u66F4\u63A8\u8350\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u5904\u7406\u6E32\u67D3\u5F02\u5E38\uFF0C\u56E0\u4E3A\u5728\u8FD9\u91CC\u9762\u4E0D\u80FD\u83B7\u53D6\u5230 this\uFF0C\u53EF\u4EE5\u907F\u514D\u6211\u4EEC\u8BEF\u64CD\u4F5C setState \u5BFC\u81F4\u4E0D\u53EF\u9884\u6599\u7684\u540E\u679C

\`\`\`tsx
class GetDerivedStateFromErrorDemo extends React.Component<
  {},
  GetDerivedStateFromErrorDemoState
> {
  state: Readonly<GetDerivedStateFromErrorDemoState> = {
    hasError: false,
    errorInfo: '',
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorInfo: error.message }
  }

  render(): React.ReactNode {
    const { hasError, errorInfo } = this.state
    return (
      <div>
        {hasError ? <div>Foo \u7EC4\u4EF6\u9519\u8BEF: {errorInfo}</div> : <Foo />}
        <p>Hello</p>
      </div>
    )
  }
}
\`\`\`

<DemoBlock>
  <GetDerivedStateFromErrorDemo />
</DemoBlock>

### 2.3. \u5BF9\u6BD4

\`componentDidCatch\`

\`\`\`tsx
componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
  this.setState({ hasError: true, errorInfo: error.message })
}
\`\`\`

\`getDerivedStateFromError\`

\`\`\`tsx
static getDerivedStateFromError(error: Error) {
  return { hasError: true, errorInfo: error.message }
}
\`\`\`

## 3. \u4ECE diff \u6765\u770B key \u7684\u4F5C\u7528

### 3.1. diff children \u6D41\u7A0B

\`\`\`js
function reconcileChildrenArray() {
  /* \u7B2C\u4E00\u6B65 -- \u904D\u5386\u65B0 children \uFF0C\u590D\u7528 oldFiber  */
  for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
    if (oldFiber.index > newIdx) {
      nextOldFiber = oldFiber
      oldFiber = null
    } else {
      nextOldFiber = oldFiber.sibling
    }
    const newFiber = updateSlot(
      returnFiber,
      oldFiber,
      newChildren[newIdx],
      expirationTime,
    )
    if (newFiber === null) {
      break
    }
    // ..\u4E00\u4E9B\u5176\u4ED6\u903B\u8F91
    if (shouldTrackSideEffects) {
      // shouldTrackSideEffects \u4E3A\u66F4\u65B0\u6D41\u7A0B\u3002
      if (oldFiber && newFiber.alternate === null) {
        /* \u627E\u5230\u4E86\u4E0E\u65B0\u8282\u70B9\u5BF9\u5E94\u7684fiber\uFF0C\u4F46\u662F\u4E0D\u80FD\u590D\u7528\uFF0C\u90A3\u4E48\u76F4\u63A5\u5220\u9664\u8001\u8282\u70B9 */
        deleteChild(returnFiber, oldFiber)
      }
    }
  }

  // \u7B2C\u4E8C\u6B65\uFF1A\u7EDF\u4E00\u5220\u9664oldfiber
  if (newIdx === newChildren.length) {
    deleteRemainingChildren(returnFiber, oldFiber)
    return resultingFirstChild
  }

  // \u7B2C\u4E09\u6B65\uFF1A\u7EDF\u4E00\u521B\u5EFAnewFiber
  if (oldFiber === null) {
    for (; newIdx < newChildren.length; newIdx++) {
      const newFiber = createChild(
        returnFiber,
        newChildren[newIdx],
        expirationTime,
      )
      // ...
    }
  }

  // \u7B2C\u56DB\u6B65\uFF1A\u9488\u5BF9\u53D1\u751F\u79FB\u52A8\u548C\u66F4\u590D\u6742\u7684\u60C5\u51B5
  const existingChildren = mapRemainingChildren(returnFiber, oldFiber)
  for (; newIdx < newChildren.length; newIdx++) {
    const newFiber = updateFromMap(existingChildren, returnFiber)
    /* \u4ECEmapRemainingChildren\u5220\u6389\u5DF2\u7ECF\u590D\u7528oldFiber */
  }

  // \u7B2C\u4E94\u6B65\uFF1A\u5220\u9664\u5269\u4F59\u6CA1\u6709\u590D\u7528\u7684oldFiber
  if (shouldTrackSideEffects) {
    /* \u79FB\u9664\u6CA1\u6709\u590D\u7528\u5230\u7684oldFiber */
    existingChildren.forEach((child) => deleteChild(returnFiber, child))
  }
}
\`\`\`

## 4. \u5B9E\u6218 -- \u5F02\u6B65\u7EC4\u4EF6

\u4F7F\u7528 Suspense + React.lazy \u5B9E\u73B0\u5F02\u6B65\u7EC4\u4EF6\uFF0C\u652F\u6301\u4F20\u5165\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\u7528\u4E8E\u83B7\u53D6\u6570\u636E\uFF0C\u5176 resolve \u7684\u7ED3\u679C\u4F1A\u4F5C\u4E3A apiData \u5C5E\u6027\u4F20\u9012\u7ED9\u4F20\u5165\u7684\u7EC4\u4EF6

<DemoBlock>
  <Demo3 />
</DemoBlock>
`;export{M as content,j as default,_ as frontmatter,O as lastUpdatedTime,P as title,G as toc};
