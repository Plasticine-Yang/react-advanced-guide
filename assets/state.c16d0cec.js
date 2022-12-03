var h=Object.defineProperty;var E=(s,l,c)=>l in s?h(s,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[l]=c;var o=(s,l,c)=>(E(s,typeof l!="symbol"?l+"":l,c),c);import{jsxs as n,jsx as e,Fragment as p}from"react/jsx-runtime";import{D as r}from"./index.6529e49c.js";import t,{useState as a,useEffect as F}from"react";import D,{unstable_batchedUpdates as y}from"react-dom";class C extends t.Component{constructor(){super(...arguments);o(this,"state",{counter:0})}render(){return n("div",{children:[n("p",{children:["counter: ",this.state.counter]}),e("button",{onClick:()=>this.setState({counter:this.state.counter+1},()=>{console.log(`\u5BF9\u8C61\u5F62\u5F0F setState \u4E4B\u540E\u7684 counter: ${this.state.counter}`)}),children:"\u5BF9\u8C61\u5F62\u5F0F setState"})]})}}class m extends t.Component{constructor(){super(...arguments);o(this,"state",{counter:0})}render(){return n("div",{children:[n("p",{children:["counter: ",this.state.counter]}),e("button",{onClick:()=>this.setState((c,i)=>({counter:c.counter+1}),()=>{console.log(`\u51FD\u6570\u5F62\u5F0F setState \u4E4B\u540E\u7684 counter: ${this.state.counter}`)}),children:"\u51FD\u6570\u5F62\u5F0F setState"})]})}}class u extends t.Component{constructor(){super(...arguments);o(this,"state",{counter:0})}handleClick(){this.setState({counter:this.state.counter+1},()=>{console.log(`callback 1 -- ${this.state.counter}`)}),console.log(this.state.counter),this.setState({counter:this.state.counter+1},()=>{console.log(`callback 2 -- ${this.state.counter}`)}),console.log(this.state.counter),this.setState({counter:this.state.counter+1},()=>{console.log(`callback 3 -- ${this.state.counter}`)}),console.log(this.state.counter)}render(){return n("div",{children:[e("p",{children:this.state.counter}),e("button",{onClick:()=>this.handleClick(),children:"counter++"})]})}}class N extends t.Component{constructor(){super(...arguments);o(this,"state",{counter:0})}handleClick(){setTimeout(()=>{this.setState({counter:this.state.counter+1},()=>{console.log(`callback 1 -- ${this.state.counter}`)}),console.log(this.state.counter),this.setState({counter:this.state.counter+1},()=>{console.log(`callback 2 -- ${this.state.counter}`)}),console.log(this.state.counter),this.setState({counter:this.state.counter+1},()=>{console.log(`callback 3 -- ${this.state.counter}`)}),console.log(this.state.counter)})}render(){return n("div",{children:[e("p",{children:this.state.counter}),e("button",{onClick:()=>this.handleClick(),children:"counter++"})]})}}class B extends t.Component{constructor(){super(...arguments);o(this,"state",{counter:0})}handleClick(){setTimeout(()=>{y(()=>{this.setState({counter:this.state.counter+1},()=>{console.log(`callback 1 -- ${this.state.counter}`)}),console.log(this.state.counter),this.setState({counter:this.state.counter+1},()=>{console.log(`callback 2 -- ${this.state.counter}`)}),console.log(this.state.counter),this.setState({counter:this.state.counter+1},()=>{console.log(`callback 3 -- ${this.state.counter}`)}),console.log(this.state.counter)})})}render(){return n("div",{children:[e("p",{children:this.state.counter}),e("button",{onClick:()=>this.handleClick(),children:"counter++"})]})}}class A extends t.Component{constructor(){super(...arguments);o(this,"state",{counter:0})}handleClick(){setTimeout(()=>{this.setState({counter:1})}),this.setState({counter:2}),D.flushSync(()=>{this.setState({counter:3})}),this.setState({counter:4})}render(){return console.log("BatchUpdateDemo4 -- ",this.state.counter),n("div",{children:[e("p",{children:this.state.counter}),e("button",{onClick:()=>this.handleClick(),children:"counter++"})]})}}const S=()=>{const[s,l]=a(0),c=()=>{l(s+1)};return n("div",{children:[e("p",{children:s}),e("button",{onClick:()=>c(),children:"counter++"})]})},g=()=>{const[s,l]=a(()=>Math.random()>.5?1:0),c=()=>{l(s+1)};return n("div",{children:[e("p",{children:s}),e("button",{onClick:()=>c(),children:"counter++"})]})},b=()=>{const[s,l]=a(0),c=()=>{l(s+1),l(i=>i+1)};return n("div",{children:[e("p",{children:s}),e("button",{onClick:()=>c(),children:"counter + 2"})]})},f=()=>{const[s,l]=a(0);return F(()=>{console.log(`counter changed: ${s}`)},[s]),n("div",{children:[e("p",{children:s}),e("button",{onClick:()=>l(s+1),children:"counter++"})]})},$=void 0,j=[{id:"1-\u7C7B\u7EC4\u4EF6\u4E2D\u7684-state",text:"1. \u7C7B\u7EC4\u4EF6\u4E2D\u7684 state",depth:2},{id:"11-setstate-\u7684\u7528\u6CD5",text:"1.1. setState \u7684\u7528\u6CD5",depth:3},{id:"111-\u5BF9\u8C61\u5F62\u5F0F-setstate",text:"1.1.1. \u5BF9\u8C61\u5F62\u5F0F setState",depth:4},{id:"112-\u51FD\u6570\u5F62\u5F0F-setstate",text:"1.1.2. \u51FD\u6570\u5F62\u5F0F setState",depth:4},{id:"12-setstate-\u5E95\u5C42\u505A\u4E86\u4EC0\u4E48",text:"1.2. setState \u5E95\u5C42\u505A\u4E86\u4EC0\u4E48\uFF1F",depth:3},{id:"13-\u5982\u4F55\u9650\u5236-state-\u66F4\u65B0\u89C6\u56FE",text:"1.3. \u5982\u4F55\u9650\u5236 state \u66F4\u65B0\u89C6\u56FE",depth:3},{id:"14-\u4ECE\u6E90\u7801\u7406\u89E3-setstate-\u539F\u7406",text:"1.4. \u4ECE\u6E90\u7801\u7406\u89E3 setState \u539F\u7406",depth:3},{id:"141-enqueuesetstate-\u505A\u4E86\u4EC0\u4E48",text:"1.4.1. enqueueSetState \u505A\u4E86\u4EC0\u4E48\uFF1F",depth:4},{id:"142-react-\u5E95\u5C42\u5982\u4F55\u8FDB\u884C\u6279\u91CF\u66F4\u65B0\u7684",text:"1.4.2. React \u5E95\u5C42\u5982\u4F55\u8FDB\u884C\u6279\u91CF\u66F4\u65B0\u7684\uFF1F",depth:4},{id:"143-\u540C\u6B65\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6B63\u5E38\u6267\u884C\u6D41\u7A0B",text:"1.4.3. \u540C\u6B65\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6B63\u5E38\u6267\u884C\u6D41\u7A0B",depth:4},{id:"144-\u5F02\u6B65\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6267\u884C\u6D41\u7A0B",text:"1.4.4. \u5F02\u6B65\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6267\u884C\u6D41\u7A0B",depth:4},{id:"15-unstable_batchedupdates----\u8BA9\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u5F02\u6B65\u64CD\u4F5C\u91CC\u7684-setstate-\u6279\u91CF\u66F4\u65B0",text:"1.5. unstable_batchedUpdates -- \u8BA9\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u5F02\u6B65\u64CD\u4F5C\u91CC\u7684 setState \u6279\u91CF\u66F4\u65B0",depth:3},{id:"16-\u63D0\u5347\u66F4\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7",text:"1.6. \u63D0\u5347\u66F4\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7",depth:3},{id:"2-\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684-state",text:"2. \u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684 state",depth:2},{id:"21-usestate-\u7684\u7528\u6CD5",text:"2.1. useState \u7684\u7528\u6CD5",depth:3},{id:"211-initialstate",text:"2.1.1. initialState",depth:4},{id:"212-setstate",text:"2.1.2. setState",depth:4},{id:"22-\u5982\u4F55\u76D1\u542C-state-\u53D8\u5316",text:"2.2. \u5982\u4F55\u76D1\u542C state \u53D8\u5316\uFF1F",depth:3},{id:"3-\u5BF9\u6BD4\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684-state",text:"3. \u5BF9\u6BD4\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684 state",depth:2}],M="\u7384\u5B66 state";function d(s){const l=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",h4:"h4",div:"div",button:"button",span:"span",pre:"pre",code:"code",ol:"ol",li:"li",p:"p",img:"img",blockquote:"blockquote",strong:"strong",ul:"ul"},s.components);return n(p,{children:[n(l.h1,{id:"\u7384\u5B66-state",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7384\u5B66-state",children:"#"}),"\u7384\u5B66 state"]}),`
`,n(l.h2,{id:"1-\u7C7B\u7EC4\u4EF6\u4E2D\u7684-state",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#1-\u7C7B\u7EC4\u4EF6\u4E2D\u7684-state",children:"#"}),"1. \u7C7B\u7EC4\u4EF6\u4E2D\u7684 state"]}),`
`,n(l.h3,{id:"11-setstate-\u7684\u7528\u6CD5",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#11-setstate-\u7684\u7528\u6CD5",children:"#"}),"1.1. setState \u7684\u7528\u6CD5"]}),`
`,n(l.h4,{id:"111-\u5BF9\u8C61\u5F62\u5F0F-setstate",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#111-\u5BF9\u8C61\u5F62\u5F0F-setstate",children:"#"}),"1.1.1. \u5BF9\u8C61\u5F62\u5F0F setState"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u5BF9\u8C61\u5F62\u5F0F setState */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"SetStateDemo1State"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  counter"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"SetStateDemo1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"SetStateDemo1State"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"counter: "}),e(l.span,{style:{color:"#81A1C1"},children:"{this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),e(l.span,{style:{color:"#ECEFF4"},children:"`"}),e(l.span,{style:{color:"#A3BE8C"},children:"\u5BF9\u8C61\u5F62\u5F0F setState \u4E4B\u540E\u7684 counter: "}),e(l.span,{style:{color:"#ECEFF4"},children:"${"}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:"}`"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line highlighted",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"              )"})}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"          \u5BF9\u8C61\u5F62\u5F0F setState"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(r,{children:e(C,{})}),`
`,n(l.h4,{id:"112-\u51FD\u6570\u5F62\u5F0F-setstate",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#112-\u51FD\u6570\u5F62\u5F0F-setstate",children:"#"}),"1.1.2. \u51FD\u6570\u5F62\u5F0F setState"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u51FD\u6570\u5F62\u5F0F setState */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"SetStateDemo2State"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  counter"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"SetStateDemo2"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"<{},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"SetStateDemo2State"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  state "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"counter: "}),e(l.span,{style:{color:"#81A1C1"},children:"{this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"props"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"                "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"                  "}),e(l.span,{style:{color:"#ECEFF4"},children:"`"}),e(l.span,{style:{color:"#A3BE8C"},children:"\u51FD\u6570\u5F62\u5F0F setState \u4E4B\u540E\u7684 counter: "}),e(l.span,{style:{color:"#ECEFF4"},children:"${"}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:"}`"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line highlighted",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"                )"})}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,e(l.span,{className:"line highlighted",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"            )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"          \u51FD\u6570\u5F62\u5F0F setState"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(r,{children:e(m,{})}),`
`,n(l.h3,{id:"12-setstate-\u5E95\u5C42\u505A\u4E86\u4EC0\u4E48",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#12-setstate-\u5E95\u5C42\u505A\u4E86\u4EC0\u4E48",children:"#"}),"1.2. setState \u5E95\u5C42\u505A\u4E86\u4EC0\u4E48\uFF1F"]}),`
`,n(l.ol,{children:[`
`,n(l.li,{children:["\u4EA7\u751F\u5F53\u524D\u66F4\u65B0\u7684\u4F18\u5148\u7EA7 -- \u8001\u7248\u672C\u4E2D\u4F7F\u7528 ",e(l.code,{children:"expirationTime"})," \u65B0\u7248\u672C\u4F7F\u7528 ",e(l.code,{children:"lane"})]}),`
`,n(l.li,{children:["\u4ECE ",e(l.code,{children:"fiber root"}),` \u5F00\u59CB\u8C03\u548C:
2.1. \u4E5F\u5C31\u662F\u5BF9\u6BD4\u65B0\u8001\u865A\u62DF DOM\uFF0C\u627E\u51FA\u53D1\u751F\u53D8\u5316\u7684\u90E8\u5206
2.2. \u518D\u5BF9\u6BD4 `,e(l.code,{children:"expirationTime"}),` \u627E\u5230\u53D1\u751F\u66F4\u65B0\u7684\u7EC4\u4EF6
2.3. \u5408\u5E76 state\uFF0C\u89E6\u53D1 render \u51FD\u6570\uFF0C\u5F97\u5230\u65B0\u7684 UI \u89C6\u56FE\uFF0C\u5B8C\u6210 render \u9636\u6BB5`]}),`
`,e(l.li,{children:"commit \u9636\u6BB5\uFF0C\u5C06\u865A\u62DF DOM \u66F4\u65B0\u6210\u771F\u5B9E DOM\uFF0C\u66F4\u65B0\u540E\u518D\u6267\u884C setState \u7684\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u53C2\u6570"}),`
`]}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/setState%E5%BA%95%E5%B1%82%E9%80%BB%E8%BE%91.png",alt:"setState\u5E95\u5C42\u903B\u8F91"})}),`
`,n(l.h3,{id:"13-\u5982\u4F55\u9650\u5236-state-\u66F4\u65B0\u89C6\u56FE",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#13-\u5982\u4F55\u9650\u5236-state-\u66F4\u65B0\u89C6\u56FE",children:"#"}),"1.3. \u5982\u4F55\u9650\u5236 state \u66F4\u65B0\u89C6\u56FE"]}),`
`,n(l.ol,{children:[`
`,n(l.li,{children:[e(l.code,{children:"pureComponent"})," -- \u53EA\u4F1A\u5BF9 state \u548C props \u8FDB\u884C shallow \u6BD4\u8F83"]}),`
`,n(l.li,{children:[e(l.code,{children:"shouldComponentUpdate"})," \u751F\u547D\u5468\u671F -- \u9700\u8981\u66F4\u65B0\u5219\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false"]}),`
`]}),`
`,n(l.h3,{id:"14-\u4ECE\u6E90\u7801\u7406\u89E3-setstate-\u539F\u7406",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#14-\u4ECE\u6E90\u7801\u7406\u89E3-setstate-\u539F\u7406",children:"#"}),"1.4. \u4ECE\u6E90\u7801\u7406\u89E3 setState \u539F\u7406"]}),`
`,e(l.p,{children:"\u4E0A\u4E00\u8282\u4E2D\u8BB2\u5230\u8FC7\uFF0C\u7C7B\u7EC4\u4EF6\u7684 setState \u672C\u8D28\u4E0A\u662F\u8C03\u7528\u4E86 updater \u5BF9\u8C61\u4E0A\u7684 enqueueSetState \u65B9\u6CD5\uFF0C\u4ECE\u547D\u540D\u4E0A\u770B\u5C31\u77E5\u9053 updater \u5BF9\u8C61\u4E13\u95E8\u8D1F\u8D23\u7528\u6765\u66F4\u65B0\u7EC4\u4EF6\u7684"}),`
`,e(l.p,{children:"\u65E2\u7136\u66F4\u65B0 state \u4F1A\u66F4\u65B0\u89C6\u56FE\uFF0C\u90A3\u4E48\u5982\u679C\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u591A\u6B21\u6267\u884C setState \u64CD\u4F5C\u7684\u8BDD\u662F\u5426\u610F\u5473\u7740\u6BCF\u4E2A setState \u90FD\u4F1A\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0\u5462\uFF1F\u8FD8\u662F\u8BF4 React \u4F1A\u667A\u80FD\u5730\u5C06\u591A\u6B21 setState \u5BF9\u72B6\u6001\u7684\u6539\u53D8\u5408\u5E76\u6210\u6700\u7EC8\u72B6\u6001\uFF0C\u518D\u6279\u91CF\u66F4\u65B0\u5462\uFF1F"}),`
`,e(l.p,{children:"\u5E26\u7740\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u6765\u5230\u6E90\u7801\u5F53\u4E2D\u63A2\u7D22\u4E00\u4E0B"}),`
`,e(l.p,{children:"\u60F3\u8981\u5F04\u660E\u767D setState \u7684\u539F\u7406\uFF0C\u5C31\u9700\u8981\u4ECE\u4EE5\u4E0B\u4E24\u65B9\u9762\u5165\u624B\uFF1A"}),`
`,n(l.ol,{children:[`
`,e(l.li,{children:"enqueueSetState \u505A\u4E86\u4EC0\u4E48\uFF1F"}),`
`,e(l.li,{children:"React \u5E95\u5C42\u5982\u4F55\u8FDB\u884C\u6279\u91CF\u66F4\u65B0\u7684\uFF1F"}),`
`]}),`
`,n(l.h4,{id:"141-enqueuesetstate-\u505A\u4E86\u4EC0\u4E48",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#141-enqueuesetstate-\u505A\u4E86\u4EC0\u4E48",children:"#"}),"1.4.1. enqueueSetState \u505A\u4E86\u4EC0\u4E48\uFF1F"]}),`
`,e(l.p,{children:"\u8FD9\u91CC\u5BF9\u6E90\u7801\u8FDB\u884C\u7B80\u5316\uFF0C\u6311\u51FA\u6838\u5FC3\u90E8\u5206\uFF1A"}),`
`,e(l.p,{children:e(l.code,{children:"packages/react-reconciler/src/ReactFiberClassComponent.old.js"})}),`
`,n(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"js"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"classComponentUpdater"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"enqueueSetState"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9FF"},children:"..."}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"callback"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// \u6BCF\u6B21\u8C03\u7528 setState \u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A update \u5BF9\u8C61\u7EF4\u62A4\u66F4\u65B0\u6240\u9700\u4FE1\u606F"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"update"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"createUpdate"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"eventTime"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"lane"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// \u6302\u8F7D setState \u7684\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u53C2\u6570\u5230 update \u5BF9\u8C61\u4E0A"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"if"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(l.span,{style:{color:"#D8DEE9"},children:"callback"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"!=="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"undefined"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"&&"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"callback"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"!=="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"null"}),e(l.span,{style:{color:"#D8DEE9FF"},children:") "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"update"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"callback"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"callback"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// \u5C06 fiber \u4EE5\u53CA\u5BF9\u5E94\u7684 update \u5BF9\u8C61\u52A0\u5165\u5230\u66F4\u65B0\u961F\u5217\u4E2D"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"enqueueUpdate"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"fiber"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"update"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// \u8C03\u5EA6\u66F4\u65B0 -- \u8C03\u548C\u9636\u6BB5"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"scheduleUpdateOnFiber"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"root"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"fiber"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"lane"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"eventTime"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h4,{id:"142-react-\u5E95\u5C42\u5982\u4F55\u8FDB\u884C\u6279\u91CF\u66F4\u65B0\u7684",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#142-react-\u5E95\u5C42\u5982\u4F55\u8FDB\u884C\u6279\u91CF\u66F4\u65B0\u7684",children:"#"}),"1.4.2. React \u5E95\u5C42\u5982\u4F55\u8FDB\u884C\u6279\u91CF\u66F4\u65B0\u7684\uFF1F"]}),`
`,e(l.p,{children:"React \u7684 batchUpdate \u662F\u4EC0\u4E48\u65F6\u5019\u52A0\u4E0A\u53BB\u7684\u5462\uFF1F"}),`
`,e(l.p,{children:"\u8FD9\u548C React \u7684\u4E8B\u4EF6\u7CFB\u7EDF\u6709\u5173\uFF0CReact \u5E95\u5C42\u6709\u4E00\u5957\u4E8B\u4EF6\u7CFB\u7EDF\u7EDF\u4E00\u8C03\u5EA6\u4E8B\u4EF6\uFF0C\u800C batchUpdate \u5219\u662F\u4F5C\u4E3A\u4E00\u79CD\u4E8B\u4EF6\u88AB\u4E8B\u4EF6\u7CFB\u7EDF\u8C03\u5EA6\u6267\u884C\u7684"}),`
`,e(l.p,{children:e(l.code,{children:"packages/react-dom-bindings/src/events/DOMPluginEventSystem.js"})}),`
`,n(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"js"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"function"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"dispatchEventForPluginEventSystem"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// ..."})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"batchedUpdates"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"dispatchEventsForPlugins"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"domEventName"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"eventSystemFlags"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"nativeEvent"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"ancestorInst"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"targetContainer"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"}),e(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:"\u8FD9\u91CC\u7684 batchedUpdates \u51FD\u6570\u5C31\u662F\u6279\u91CF\u66F4\u65B0\u7684\u91CD\u70B9"}),`
`,e(l.p,{children:e(l.code,{children:"packages/react-dom-bindings/src/events/ReactDOMUpdateBatching.js"})}),`
`,n(l.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"js"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"function"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"batchedUpdates"}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"fn"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"a"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"b"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// \u5F00\u542F\u6279\u91CF\u66F4\u65B0"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#D8DEE9"},children:"isInsideEventHandler"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"true"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"try"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// \u8FD9\u91CC\u6267\u884C\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0CsetState \u5C31\u662F\u5728\u8FD9\u91CC\u9762\u88AB\u6267\u884C\u7684"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"batchedUpdatesImpl"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"fn"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"a"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"b"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"finally"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// try \u4E2D return \u4E0D\u5F71\u54CD finally \u7684\u6267\u884C"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// \u5B8C\u6210\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u540E\u5173\u95ED\u6807\u5FD7\u53D8\u91CF\uFF0C\u5F00\u59CB\u6279\u91CF\u66F4\u65B0"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"isInsideEventHandler"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"false"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,n(l.h4,{id:"143-\u540C\u6B65\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6B63\u5E38\u6267\u884C\u6D41\u7A0B",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#143-\u540C\u6B65\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6B63\u5E38\u6267\u884C\u6D41\u7A0B",children:"#"}),"1.4.3. \u540C\u6B65\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6B63\u5E38\u6267\u884C\u6D41\u7A0B"]}),`
`,e(l.p,{children:"\u901A\u8FC7\u4E00\u4E2A\u4F8B\u5B50\u6765\u770B\u770B\u8FD9\u4E2A\u8FC7\u7A0B\u4F1A\u66F4\u52A0\u597D\u7406\u89E3"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" batchUpdate \u7684\u6D41\u7A0B -- \u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u6267\u884C\u540C\u6B65\u64CD\u4F5C */"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo1State"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  counter"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"<{},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo1State"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo1State"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"`"}),e(l.span,{style:{color:"#A3BE8C"},children:"callback 1 -- "}),e(l.span,{style:{color:"#ECEFF4"},children:"${"}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:"}`"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"`"}),e(l.span,{style:{color:"#A3BE8C"},children:"callback 2 -- "}),e(l.span,{style:{color:"#ECEFF4"},children:"${"}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:"}`"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"`"}),e(l.span,{style:{color:"#A3BE8C"},children:"callback 3 -- "}),e(l.span,{style:{color:"#ECEFF4"},children:"${"}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:"}`"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"{this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"counter++"}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"BatchUpdateDemo1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(r,{children:e(u,{})}),`
`,e(l.p,{children:"\u63A7\u5236\u53F0\u8F93\u51FA\u5982\u4E0B\uFF1A"}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/BatchUpdateDemo1%E6%8E%A7%E5%88%B6%E5%8F%B0%E8%BE%93%E5%87%BA.png",alt:"BatchUpdateDemo1\u63A7\u5236\u53F0\u8F93\u51FA"})}),`
`,e(l.p,{children:"\u4E3A\u4EC0\u4E48\u7ED3\u679C\u662F\u8FD9\u6837\u7684\u5462\uFF1F\u6211\u4EEC\u7ED3\u5408\u521A\u521A\u770B\u8FC7\u7684\u6E90\u7801\u5206\u6790\u4E00\u4E0B"}),`
`,n(l.p,{children:["\u9996\u5148\u901A\u8FC7\u6309\u94AE\u70B9\u51FB\u89E6\u53D1\u4E8B\u4EF6\u5904\u7406\u51FD\u6570",e(l.code,{children:"handleClick"}),"\uFF0C\u5B83\u4F1A\u88AB React \u7684\u4E8B\u4EF6\u7CFB\u7EDF\u6258\u7BA1\uFF0C\u7531\u4E8B\u4EF6\u7CFB\u7EDF\u7EDF\u4E00\u8C03\u5EA6"]}),`
`,n(l.p,{children:["\u4E5F\u5C31\u662F\u5728 ",e(l.code,{children:"batchedUpdates"})," \u8FD9\u4E2A\u51FD\u6570\u4E0A\u4E0B\u6587\u4E2D\u8FDB\u884C\uFF0C\u90A3\u4E48\u6211\u4EEC\u7ED3\u5408\u521A\u624D\u7684\u7CBE\u7B80\u7248\u753B\u4E00\u4E2A\u8FD9\u4E2A\u51FD\u6570\u4E0A\u4E0B\u6587\u4E2D\u7684\u6267\u884C\u60C5\u51B5\u5982\u4E0B\u56FE\u6240\u793A\uFF1A"]}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0%E5%9C%A8React%E5%BA%95%E5%B1%82%E7%9A%84%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.png",alt:"\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5728React\u5E95\u5C42\u7684\u6267\u884C\u6D41\u7A0B"})}),`
`,e(l.p,{children:"\u76F8\u4FE1\u73B0\u5728\u4F60\u80FD\u7406\u89E3\u4E3A\u4EC0\u4E48\u8F93\u51FA\u60C5\u51B5\u662F\u4E0A\u9762\u90A3\u6837\u4E86"}),`
`,n(l.h4,{id:"144-\u5F02\u6B65\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6267\u884C\u6D41\u7A0B",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#144-\u5F02\u6B65\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6267\u884C\u6D41\u7A0B",children:"#"}),"1.4.4. \u5F02\u6B65\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6267\u884C\u6D41\u7A0B"]}),`
`,e(l.p,{children:"\u5982\u679C\u6211\u4EEC\u5728 handleClick \u4E2D\u6709\u5F02\u6B65\u64CD\u4F5C\u4F1A\u53D1\u751F\u4EC0\u4E48\u5462\uFF1F"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" batchUpdate \u7684\u6D41\u7A0B -- \u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u6267\u884C\u5F02\u6B65\u64CD\u4F5C */"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo2State"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  counter"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo2"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"<{},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo2State"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo2State"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"setTimeout"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"`"}),e(l.span,{style:{color:"#A3BE8C"},children:"callback 1 -- "}),e(l.span,{style:{color:"#ECEFF4"},children:"${"}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:"}`"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"`"}),e(l.span,{style:{color:"#A3BE8C"},children:"callback 2 -- "}),e(l.span,{style:{color:"#ECEFF4"},children:"${"}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:"}`"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"`"}),e(l.span,{style:{color:"#A3BE8C"},children:"callback 3 -- "}),e(l.span,{style:{color:"#ECEFF4"},children:"${"}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:"}`"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"{this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"counter++"}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"BatchUpdateDemo2"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(r,{children:e(N,{})}),`
`,n(l.p,{children:["\u5F02\u6B65\u4EFB\u52A1\u5E76\u6CA1\u6709\u5728\u4E8B\u4EF6\u7CFB\u7EDF\u7684 ",e(l.code,{children:"batchUpdates"})," \u51FD\u6570\u4E0A\u4E0B\u6587\u4E2D\u6267\u884C\uFF0C\u56E0\u800C\u91CC\u9762\u7684 setState \u5E76\u4E0D\u4F1A\u88AB\u6279\u91CF\u66F4\u65B0\uFF0C\u800C\u662F\u4E00\u6B21\u4E00\u6B21\u5730\u4FEE\u6539 state\uFF0C\u7136\u540E\u66F4\u65B0\u89C6\u56FE"]}),`
`,n(l.div,{className:"island-directive tip",children:[e(l.p,{className:"island-directive-title",children:"TIP"}),n(l.div,{className:"island-directive-content",children:[e(l.p,{children:"\u8FD9\u4E2A\u73B0\u8C61\u53EA\u5728 React 17 \u53CA\u4E4B\u524D\u5B58\u5728\uFF0C18 \u5F00\u59CB\u9ED8\u8BA4\u652F\u6301\u5F02\u6B65\u64CD\u4F5C\u4E2D\u8FDB\u884C\u6279\u91CF\u66F4\u65B0"}),n(l.blockquote,{children:[`
`,e(l.p,{children:"Before React 18, only updates inside React event handlers were batched. Starting with React 18, batching is enabled for all updates by default."}),`
`]}),n(l.blockquote,{children:[`
`,e(l.p,{children:"React 18 adds out-of-the-box performance improvements by doing more batching by default. Batching is when React groups multiple state updates into a single re-render for better performance. Before React 18, we only batched updates inside React event handlers. Updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default"}),`
`]})]})]}),`
`,n(l.h3,{id:"15-unstable_batchedupdates----\u8BA9\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u5F02\u6B65\u64CD\u4F5C\u91CC\u7684-setstate-\u6279\u91CF\u66F4\u65B0",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#15-unstable_batchedupdates----\u8BA9\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u5F02\u6B65\u64CD\u4F5C\u91CC\u7684-setstate-\u6279\u91CF\u66F4\u65B0",children:"#"}),"1.5. unstable_batchedUpdates -- \u8BA9\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u5F02\u6B65\u64CD\u4F5C\u91CC\u7684 setState \u6279\u91CF\u66F4\u65B0"]}),`
`,e(l.p,{children:"\u5982\u4F55\u8BA9\u5F02\u6B65\u64CD\u4F5C\u4E2D\u7684\u591A\u6B21 setState \u4E5F\u6279\u91CF\u66F4\u65B0\u5462\uFF1F"}),`
`,n(l.p,{children:["ReactDOM \u4E2D\u63D0\u4F9B\u4E86\u4E00\u4E2A ",e(l.code,{children:"unstable_batchedUpdates"})," API\uFF0C\u80FD\u591F\u5141\u8BB8\u6211\u4EEC\u624B\u52A8\u5F00\u542F setState \u6279\u91CF\u66F4\u65B0"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" batchUpdate \u7684\u6D41\u7A0B -- \u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7684\u5F02\u6B65\u64CD\u4F5C\u4E2D setState \u6279\u91CF\u66F4\u65B0 */"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"unstable_batchedUpdates"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react-dom"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo3State"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  counter"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo3"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"<{},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo3State"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo3State"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"setTimeout"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#88C0D0"},children:"unstable_batchedUpdates"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"`"}),e(l.span,{style:{color:"#A3BE8C"},children:"callback 1 -- "}),e(l.span,{style:{color:"#ECEFF4"},children:"${"}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:"}`"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"`"}),e(l.span,{style:{color:"#A3BE8C"},children:"callback 2 -- "}),e(l.span,{style:{color:"#ECEFF4"},children:"${"}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:"}`"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"`"}),e(l.span,{style:{color:"#A3BE8C"},children:"callback 3 -- "}),e(l.span,{style:{color:"#ECEFF4"},children:"${"}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:"}`"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"{this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"counter++"}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"BatchUpdateDemo3"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(r,{children:e(B,{})}),`
`,n(l.div,{className:"island-directive tip",children:[e(l.p,{className:"island-directive-title",children:"unstable_batchedUpdates \u4F7F\u7528\u573A\u666F"}),e(l.div,{className:"island-directive-content",children:e(l.p,{children:"\u5F53\u7528 ajax \u8BF7\u6C42\u6570\u636E\u540E\u5982\u679C\u6709\u591A\u6B21 setState \u64CD\u4F5C\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 unstable_batchedUpdates \u5305\u88F9\u8FD9\u4E9B\u591A\u6B21 setState \u64CD\u4F5C\uFF0C\u5F00\u542F\u6279\u91CF\u66F4\u65B0 state \u7684\u7279\u6027\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u5730\u591A\u6B21\u66F4\u65B0\u4E2D\u95F4 state \u89C6\u56FE"})})]}),`
`,n(l.h3,{id:"16-\u63D0\u5347\u66F4\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#16-\u63D0\u5347\u66F4\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7",children:"#"}),"1.6. \u63D0\u5347\u66F4\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7"]}),`
`,n(l.p,{children:["ReactDOM \u63D0\u4F9B\u7684 ",e(l.code,{children:"flushSync"})," API \u53EF\u4EE5\u5C06\u4F20\u5165\u7684\u56DE\u8C03\u653E\u5728\u4E00\u4E2A\u8F83\u9AD8\u7684\u4F18\u5148\u7EA7"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u63D0\u5347\u66F4\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7 */"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"React"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#81A1C1"},children:"import"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"ReactDOM"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"from"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"react-dom"}),e(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"interface"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo4State"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  counter"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"class"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo4"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"extends"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),e(l.span,{style:{color:"#ECEFF4"},children:"<{},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo4State"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),e(l.span,{style:{color:"#ECEFF4"},children:"<"}),e(l.span,{style:{color:"#8FBCBB"},children:"BatchUpdateDemo4State"}),e(l.span,{style:{color:"#ECEFF4"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"setTimeout"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line highlighted"}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"2"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"ReactDOM"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"flushSync"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"3"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line highlighted"}),`
`,n(l.span,{className:"line highlighted",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"setState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"4"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"render"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#A3BE8C"},children:"BatchUpdateDemo4 -- "}),e(l.span,{style:{color:"#ECEFF4"},children:"'"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"{this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"this"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"counter++"}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"export"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"BatchUpdateDemo4"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(r,{children:e(A,{})}),`
`,e(l.p,{children:e(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/flushSync%E6%8F%90%E5%8D%87%E6%9B%B4%E6%96%B0%E4%BB%BB%E5%8A%A1%E4%BC%98%E5%85%88%E7%BA%A7.png",alt:"flushSync\u63D0\u5347\u66F4\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7"})}),`
`,n(l.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u6709\u4E86 ",e(l.code,{children:"flushSync"})," \u540E\uFF0C\u5C3D\u7BA1\u524D\u9762\u6709\u4E00\u4E2A\u5C06 counter \u8BBE\u7F6E\u4E3A 2 \u7684 setState\uFF0C\u4F46\u662F\u6E32\u67D3\u51FD\u6570\u5E76\u6CA1\u6709\u6267\u884C"]}),`
`,n(l.p,{children:["\u4E5F\u5C31\u662F\u8BF4 ",e(l.code,{children:"flushSync"})," \u4F1A\u4E0E\u524D\u9762\u7684\u540C\u6B65 setState \u8FDB\u884C\u5408\u5E76\u540E\u518D\u6E32\u67D3"]}),`
`,n(l.div,{className:"island-directive tip",children:[e(l.p,{className:"island-directive-title",children:"\u66F4\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7"}),e(l.div,{className:"island-directive-content",children:e(l.p,{children:"flushSync \u4E2D\u7684 setState > \u6B63\u5E38\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u7684 setState > \u5F02\u6B65\u64CD\u4F5C(\u5982 setTimeout, promise.then)\u4E2D\u7684 setState"})})]}),`
`,n(l.h2,{id:"2-\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684-state",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#2-\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684-state",children:"#"}),"2. \u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684 state"]}),`
`,n(l.h3,{id:"21-usestate-\u7684\u7528\u6CD5",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#21-usestate-\u7684\u7528\u6CD5",children:"#"}),"2.1. useState \u7684\u7528\u6CD5"]}),`
`,e(l.p,{children:"\u5173\u4E8E useState \u7684\u7528\u6CD5\u76F8\u4FE1\u5927\u5BB6\u90FD\u6BD4\u8F83\u719F\u6089\u4E86\uFF0C\u4E0D\u8FC7\u8FD9\u91CC\u8FD8\u662F\u7A0D\u5FAE\u63D0\u4E00\u4E0B"}),`
`,n(l.h4,{id:"211-initialstate",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#211-initialstate",children:"#"}),"2.1.1. initialState"]}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"state"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setState"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"initialState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(l.p,{children:"\u5E38\u89C1\u7684\u7528\u6CD5\u662F initialState \u76F4\u63A5\u521D\u59CB\u5316\u4E00\u4E2A\u6570\u636E\uFF0C\u6BD4\u5982 number\u3001string\u3001boolean\u3001object \u7B49"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" initialState \u4F7F\u7528\u76F4\u63A5\u6570\u636E */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"UseStateDemo1"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setCounter"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"setCounter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>{"}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"counter++"}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(r,{children:e(S,{})}),`
`,e(l.p,{children:"\u4F46\u5176\u5B9E initialState \u4E5F\u80FD\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F5C\u4E3A\u521D\u59CB state\uFF0C\u8FD9\u4E2A\u573A\u666F\u7528\u5728\u54EA\u91CC\u5462\uFF1F"}),`
`,e(l.p,{children:"\u5B83\u53EF\u4EE5\u7528\u5728\u61D2\u52A0\u8F7D\u7684\u573A\u666F\uFF0C\u5F53 initialState \u662F\u4E00\u4E2A\u9700\u8981\u590D\u6742\u8BA1\u7B97\u624D\u80FD\u83B7\u5F97\u7684\u503C\u65F6\uFF0C\u5C31\u9002\u5408\u7528\u51FD\u6570\u7684\u65B9\u5F0F\u4F5C\u4E3A initialState"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" initialState \u4F7F\u7528\u51FD\u6570 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"UseStateDemo2"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setCounter"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// \u5047\u8BBE\u8FD9\u91CC\u6709\u5F88\u591A\u590D\u6742\u8BA1\u7B97..."})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"value"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"Math"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"random"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"() "}),e(l.span,{style:{color:"#81A1C1"},children:">"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0.5"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"?"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"0"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// \u8BA1\u7B97\u5B8C\u540E\u8FD4\u56DE\u503C\u4F5C\u4E3A initialState"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"value"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"setCounter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>{"}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"counter++"}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(r,{children:e(g,{})}),`
`,e(l.p,{children:"\u521D\u59CB\u503C\u53EA\u4F1A\u5728\u9996\u6B21\u6E32\u67D3\u7684\u65F6\u5019\u88AB\u8BA1\u7B97\uFF0C\u540E\u7EED\u66F4\u65B0\u6E32\u67D3\u65F6\u4E0D\u4F1A\u518D\u91CD\u590D\u6267\u884C\u8BA1\u7B97\u903B\u8F91"}),`
`,n(l.h4,{id:"212-setstate",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#212-setstate",children:"#"}),"2.1.2. setState"]}),`
`,e(l.p,{children:"setState \u5E38\u89C1\u7684\u662F\u76F4\u63A5\u8D4B\u503C\u4F7F\u7528\uFF0C\u4F20\u5165\u65B0\u7684 state\uFF0C\u4F46\u5B9E\u9645\u4E0A\u4ED6\u8FD8\u652F\u6301\u4F20\u5165\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u4E5F\u88AB\u79F0\u4E3A reducer"}),`
`,e(l.p,{children:"reducer \u7684\u53C2\u6570\u662F\u65E7 state\uFF0C\u4F7F\u7528\u65F6\u9700\u8981\u751F\u6210\u65B0 state \u540E\u8FD4\u56DE"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" setState reducer */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"UseStateDemo3"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setCounter"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// \u76F4\u63A5 setState"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"setCounter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"    "}),e(l.span,{style:{color:"#616E88"},children:"// \u4F7F\u7528 reducer \u7684\u65B9\u5F0F setState"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#88C0D0"},children:"setCounter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:")"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>{"}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"counter + 2"}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(r,{children:e(b,{})}),`
`,n(l.div,{className:"island-directive warning",children:[e(l.p,{className:"island-directive-title",children:"\u4F7F\u7528 reducer \u65F6\u7684\u6CE8\u610F\u4E8B\u9879"}),n(l.div,{className:"island-directive-content",children:[e(l.p,{children:"\u5982\u679C state \u662F\u4E00\u4E2A object\uFF0C\u90A3\u4E48\u4E0D\u5E94\u8BE5\u5728 reducer \u4E2D\u76F4\u63A5\u4FEE\u6539\u65E7 state\uFF0C\u800C\u662F\u62F7\u8D1D\u4E00\u4EFD\u540E\u5BF9\u526F\u672C\u8FDB\u884C\u4FEE\u6539\u5E76\u8FD4\u56DE\u526F\u672C"}),e(l.p,{children:"\u56E0\u4E3A react \u5E95\u5C42\u5BF9 state \u7684\u5BF9\u6BD4\u662F\u6D45\u6BD4\u8F83\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5982\u679C\u65B0\u65E7 state \u90FD\u662F\u6307\u5411\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\u7684\u5BF9\u8C61\uFF0C\u90A3\u4E48\u5373\u4F7F\u5B83\u4EEC\u7684\u5C5E\u6027\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u89C6\u56FE\u4E5F\u4E0D\u4F1A\u8FDB\u884C\u66F4\u65B0"}),n(l.p,{children:["\u8FD9\u5C31\u662F\u6240\u8C13\u7684 ",e(l.code,{children:"immutable"})," \u6570\u636E\uFF0C\u8FD9\u5BF9 react \u5E95\u5C42\u6027\u80FD\u4F18\u5316\u6709\u91CD\u8981\u610F\u4E49"]})]})]}),`
`,n(l.h3,{id:"22-\u5982\u4F55\u76D1\u542C-state-\u53D8\u5316",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#22-\u5982\u4F55\u76D1\u542C-state-\u53D8\u5316",children:"#"}),"2.2. \u5982\u4F55\u76D1\u542C state \u53D8\u5316\uFF1F"]}),`
`,e(l.p,{children:"\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u6211\u4EEC\u8981\u76D1\u542C state \u53D8\u5316\u65F6\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A"}),`
`,n(l.ol,{children:[`
`,n(l.li,{children:["\u5728 ",e(l.code,{children:"this.setState"})," \u7684\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u53C2\u6570\u4E2D\u83B7\u53D6\u53D8\u5316\u540E\u7684 state \u8FDB\u884C\u64CD\u4F5C"]}),`
`,n(l.li,{children:["\u5728 ",e(l.code,{children:"componentDidUpdate"})," \u751F\u547D\u5468\u671F\u4E2D\u83B7\u53D6\u66F4\u65B0\u540E\u7684 state"]}),`
`]}),`
`,e(l.p,{children:"\u90A3\u4E48\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u5982\u4F55\u7C7B\u4F3C\u5730\u5BF9 state \u8FDB\u884C\u76D1\u542C\u5462\uFF1F"}),`
`,n(l.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",e(l.code,{children:"useEffect"})," \u8FD9\u4E2A hook"]}),`
`,e(l.p,{children:"\u5728\u7B2C\u4E00\u4E2A\u56DE\u8C03\u53C2\u6570\u4E2D\u7F16\u5199\u76D1\u542C\u903B\u8F91\uFF0C\u5C06\u8981\u76D1\u542C\u7684 state \u653E\u5230\u7B2C\u4E8C\u4E2A\u6570\u7EC4\u53C2\u6570\u4E2D\u5373\u53EF\u5728 state \u53D8\u5316\u65F6\u6267\u884C\u7B2C\u4E00\u4E2A\u56DE\u8C03\u53C2\u6570"}),`
`,n(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[e(l.button,{className:"copy"}),e(l.span,{className:"lang",children:"tsx"}),e(l.pre,{children:n(l.code,{className:"",children:[n(l.span,{className:"line",children:[e(l.span,{style:{color:"#616E88"},children:"/** "}),e(l.span,{style:{color:"#ECEFF4"},children:"@"}),e(l.span,{style:{color:"#81A1C1"},children:"description"}),e(l.span,{style:{color:"#616E88"},children:" \u76D1\u542C counter \u53D8\u5316 */"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"UseEffectDemo1"}),e(l.span,{style:{color:"#81A1C1"},children:":"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"React"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#8FBCBB"},children:"FC"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"const"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"["}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:","}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#D8DEE9"},children:"setCounter"}),e(l.span,{style:{color:"#ECEFF4"},children:"]"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"="}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"useState"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#B48EAD"},children:"0"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#ECEFF4"},children:"  "}),e(l.span,{style:{color:"#616E88"},children:"// \u5728 useEffect \u4E2D\u76D1\u542C counter \u53D8\u5316"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#88C0D0"},children:"useEffect"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#D8DEE9"},children:"console"}),e(l.span,{style:{color:"#ECEFF4"},children:"."}),e(l.span,{style:{color:"#88C0D0"},children:"log"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#ECEFF4"},children:"`"}),e(l.span,{style:{color:"#A3BE8C"},children:"counter changed: "}),e(l.span,{style:{color:"#ECEFF4"},children:"${"}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#ECEFF4"},children:"}`"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#ECEFF4"},children:"},"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ["}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"])"})]}),`
`,e(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(l.span,{style:{color:"#81A1C1"},children:"return"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<p>{"}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(l.span,{style:{color:"#81A1C1"},children:"<button"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),e(l.span,{style:{color:"#81A1C1"},children:"={"}),e(l.span,{style:{color:"#ECEFF4"},children:"()"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"=>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#88C0D0"},children:"setCounter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"("}),e(l.span,{style:{color:"#D8DEE9"},children:"counter"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#81A1C1"},children:"+"}),e(l.span,{style:{color:"#D8DEE9FF"},children:" "}),e(l.span,{style:{color:"#B48EAD"},children:"1"}),e(l.span,{style:{color:"#D8DEE9FF"},children:")"}),e(l.span,{style:{color:"#81A1C1"},children:"}>"}),e(l.span,{style:{color:"#D8DEE9FF"},children:"counter++"}),e(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,n(l.span,{className:"line",children:[e(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line"})]})})]}),`
`,e(r,{children:e(f,{})}),`
`,n(l.h2,{id:"3-\u5BF9\u6BD4\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684-state",children:[e(l.a,{className:"header-anchor","aria-hidden":"true",href:"#3-\u5BF9\u6BD4\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684-state",children:"#"}),"3. \u5BF9\u6BD4\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684 state"]}),`
`,e(l.p,{children:e(l.strong,{children:"\u76F8\u540C\u70B9\uFF1A"})}),`
`,n(l.ul,{children:[`
`,n(l.li,{children:["\u5E95\u5C42\u90FD\u8C03\u7528\u4E86 ",e(l.code,{children:"scheduleUpdateOnFiber"})," \u65B9\u6CD5\uFF0C\u5E76\u4E14\u5728\u4E8B\u4EF6\u7CFB\u7EDF\u4E2D\u90FD\u6709\u6279\u91CF\u66F4\u65B0 state \u7684\u7279\u6027"]}),`
`]}),`
`,e(l.p,{children:e(l.strong,{children:"\u4E0D\u540C\u70B9\uFF1A"})}),`
`,n(l.ul,{children:[`
`,e(l.li,{children:"\u5BF9\u4E8E\u975E PureComponent \u800C\u8A00\uFF0C\u7C7B\u7EC4\u4EF6 setState \u4E0D\u4F1A\u6D45\u6BD4\u8F83\u65B0\u65E7 state\uFF0C\u53EA\u8981\u8C03\u7528\u4E86\u5C31\u66F4\u65B0\uFF1B\u800C\u51FD\u6570\u7EC4\u4EF6\u7684 useState \u4F1A\u9ED8\u8BA4\u6BD4\u8F83\u65B0\u65E7 state \u662F\u5426\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u6765\u51B3\u5B9A\u662F\u5426\u8FDB\u884C\u66F4\u65B0"}),`
`,e(l.li,{children:"setState \u503E\u5411\u4E8E\u5408\u5E76 state \u8FDB\u884C\u66F4\u65B0\uFF1BuseState \u503E\u5411\u4E8E\u62F7\u8D1D\u539F state\uFF0C\u5BF9\u526F\u672C\u8FDB\u884C\u6539\u53D8\u89E6\u53D1\u66F4\u65B0"}),`
`,e(l.li,{children:"setState \u53EF\u4EE5\u901A\u8FC7\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u53C2\u6570\u6216\u8005 componentDidUpdate \u751F\u547D\u5468\u671F\u76D1\u542C state \u53D8\u5316\uFF1BuseState \u9700\u8981\u914D\u5408 useEffect \u6765\u76D1\u542C state \u53D8\u5316"}),`
`]})]})}function O(s={}){const{wrapper:l}=s.components||{};return l?e(l,Object.assign({},s,{children:e(d,s)})):d(s)}const w="2022/12/3 14:26:03",T=`import { DemoBlock } from '@island/demo-block'

import { SetStateDemo1 } from '~/demos/state/demo1.tsx'
import { SetStateDemo2 } from '~/demos/state/demo1.tsx'
import { BatchUpdateDemo1 } from '~/demos/state/demo2.tsx'
import { BatchUpdateDemo2 } from '~/demos/state/demo3.tsx'
import { BatchUpdateDemo3 } from '~/demos/state/demo4.tsx'
import { BatchUpdateDemo4 } from '~/demos/state/demo5.tsx'
import { UseStateDemo1 } from '~/demos/state/demo6.tsx'
import { UseStateDemo2 } from '~/demos/state/demo6.tsx'
import { UseStateDemo3 } from '~/demos/state/demo6.tsx'
import { UseEffectDemo1 } from '~/demos/state/demo7.tsx'

# \u7384\u5B66 state

## 1. \u7C7B\u7EC4\u4EF6\u4E2D\u7684 state

### 1.1. setState \u7684\u7528\u6CD5

#### 1.1.1. \u5BF9\u8C61\u5F62\u5F0F setState

\`\`\`tsx{16-20}
/** @description \u5BF9\u8C61\u5F62\u5F0F setState */
interface SetStateDemo1State {
  counter: number
}
class SetStateDemo1 extends React.Component {
  state: Readonly<SetStateDemo1State> = {
    counter: 0,
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>counter: {this.state.counter}</p>
        <button
          onClick={() =>
            this.setState({ counter: this.state.counter + 1 }, () => {
              console.log(
                \`\u5BF9\u8C61\u5F62\u5F0F setState \u4E4B\u540E\u7684 counter: \${this.state.counter}\`,
              )
            })
          }
        >
          \u5BF9\u8C61\u5F62\u5F0F setState
        </button>
      </div>
    )
  }
}
\`\`\`

<DemoBlock>
  <SetStateDemo1 />
</DemoBlock>

#### 1.1.2. \u51FD\u6570\u5F62\u5F0F setState

\`\`\`tsx{16-23}
/** @description \u51FD\u6570\u5F62\u5F0F setState */
interface SetStateDemo2State {
  counter: number
}
class SetStateDemo2 extends React.Component<{}, SetStateDemo2State> {
  state = {
    counter: 0,
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>counter: {this.state.counter}</p>
        <button
          onClick={() =>
            this.setState(
              (state, props) => ({ counter: state.counter + 1 }),
              () => {
                console.log(
                  \`\u51FD\u6570\u5F62\u5F0F setState \u4E4B\u540E\u7684 counter: \${this.state.counter}\`,
                )
              },
            )
          }
        >
          \u51FD\u6570\u5F62\u5F0F setState
        </button>
      </div>
    )
  }
}
\`\`\`

<DemoBlock>
  <SetStateDemo2 />
</DemoBlock>

### 1.2. setState \u5E95\u5C42\u505A\u4E86\u4EC0\u4E48\uFF1F

1. \u4EA7\u751F\u5F53\u524D\u66F4\u65B0\u7684\u4F18\u5148\u7EA7 -- \u8001\u7248\u672C\u4E2D\u4F7F\u7528 \`expirationTime\` \u65B0\u7248\u672C\u4F7F\u7528 \`lane\`
2. \u4ECE \`fiber root\` \u5F00\u59CB\u8C03\u548C:
   2.1. \u4E5F\u5C31\u662F\u5BF9\u6BD4\u65B0\u8001\u865A\u62DF DOM\uFF0C\u627E\u51FA\u53D1\u751F\u53D8\u5316\u7684\u90E8\u5206
   2.2. \u518D\u5BF9\u6BD4 \`expirationTime\` \u627E\u5230\u53D1\u751F\u66F4\u65B0\u7684\u7EC4\u4EF6
   2.3. \u5408\u5E76 state\uFF0C\u89E6\u53D1 render \u51FD\u6570\uFF0C\u5F97\u5230\u65B0\u7684 UI \u89C6\u56FE\uFF0C\u5B8C\u6210 render \u9636\u6BB5
3. commit \u9636\u6BB5\uFF0C\u5C06\u865A\u62DF DOM \u66F4\u65B0\u6210\u771F\u5B9E DOM\uFF0C\u66F4\u65B0\u540E\u518D\u6267\u884C setState \u7684\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u53C2\u6570

![setState\u5E95\u5C42\u903B\u8F91](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/setState%E5%BA%95%E5%B1%82%E9%80%BB%E8%BE%91.png)

### 1.3. \u5982\u4F55\u9650\u5236 state \u66F4\u65B0\u89C6\u56FE

1. \`pureComponent\` -- \u53EA\u4F1A\u5BF9 state \u548C props \u8FDB\u884C shallow \u6BD4\u8F83
2. \`shouldComponentUpdate\` \u751F\u547D\u5468\u671F -- \u9700\u8981\u66F4\u65B0\u5219\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false

### 1.4. \u4ECE\u6E90\u7801\u7406\u89E3 setState \u539F\u7406

\u4E0A\u4E00\u8282\u4E2D\u8BB2\u5230\u8FC7\uFF0C\u7C7B\u7EC4\u4EF6\u7684 setState \u672C\u8D28\u4E0A\u662F\u8C03\u7528\u4E86 updater \u5BF9\u8C61\u4E0A\u7684 enqueueSetState \u65B9\u6CD5\uFF0C\u4ECE\u547D\u540D\u4E0A\u770B\u5C31\u77E5\u9053 updater \u5BF9\u8C61\u4E13\u95E8\u8D1F\u8D23\u7528\u6765\u66F4\u65B0\u7EC4\u4EF6\u7684

\u65E2\u7136\u66F4\u65B0 state \u4F1A\u66F4\u65B0\u89C6\u56FE\uFF0C\u90A3\u4E48\u5982\u679C\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u591A\u6B21\u6267\u884C setState \u64CD\u4F5C\u7684\u8BDD\u662F\u5426\u610F\u5473\u7740\u6BCF\u4E2A setState \u90FD\u4F1A\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0\u5462\uFF1F\u8FD8\u662F\u8BF4 React \u4F1A\u667A\u80FD\u5730\u5C06\u591A\u6B21 setState \u5BF9\u72B6\u6001\u7684\u6539\u53D8\u5408\u5E76\u6210\u6700\u7EC8\u72B6\u6001\uFF0C\u518D\u6279\u91CF\u66F4\u65B0\u5462\uFF1F

\u5E26\u7740\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u6765\u5230\u6E90\u7801\u5F53\u4E2D\u63A2\u7D22\u4E00\u4E0B

\u60F3\u8981\u5F04\u660E\u767D setState \u7684\u539F\u7406\uFF0C\u5C31\u9700\u8981\u4ECE\u4EE5\u4E0B\u4E24\u65B9\u9762\u5165\u624B\uFF1A

1. enqueueSetState \u505A\u4E86\u4EC0\u4E48\uFF1F
2. React \u5E95\u5C42\u5982\u4F55\u8FDB\u884C\u6279\u91CF\u66F4\u65B0\u7684\uFF1F

#### 1.4.1. enqueueSetState \u505A\u4E86\u4EC0\u4E48\uFF1F

\u8FD9\u91CC\u5BF9\u6E90\u7801\u8FDB\u884C\u7B80\u5316\uFF0C\u6311\u51FA\u6838\u5FC3\u90E8\u5206\uFF1A

\`packages/react-reconciler/src/ReactFiberClassComponent.old.js\`

\`\`\`js
const classComponentUpdater = {
  enqueueSetState(..., callback) {
    // \u6BCF\u6B21\u8C03\u7528 setState \u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A update \u5BF9\u8C61\u7EF4\u62A4\u66F4\u65B0\u6240\u9700\u4FE1\u606F
    const update = createUpdate(eventTime, lane)

    // \u6302\u8F7D setState \u7684\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u53C2\u6570\u5230 update \u5BF9\u8C61\u4E0A
    if (callback !== undefined && callback !== null) {
      update.callback = callback
    }

    // \u5C06 fiber \u4EE5\u53CA\u5BF9\u5E94\u7684 update \u5BF9\u8C61\u52A0\u5165\u5230\u66F4\u65B0\u961F\u5217\u4E2D
    enqueueUpdate(fiber, update)

    // \u8C03\u5EA6\u66F4\u65B0 -- \u8C03\u548C\u9636\u6BB5
    scheduleUpdateOnFiber(root, fiber, lane, eventTime)
  },
}
\`\`\`

#### 1.4.2. React \u5E95\u5C42\u5982\u4F55\u8FDB\u884C\u6279\u91CF\u66F4\u65B0\u7684\uFF1F

React \u7684 batchUpdate \u662F\u4EC0\u4E48\u65F6\u5019\u52A0\u4E0A\u53BB\u7684\u5462\uFF1F

\u8FD9\u548C React \u7684\u4E8B\u4EF6\u7CFB\u7EDF\u6709\u5173\uFF0CReact \u5E95\u5C42\u6709\u4E00\u5957\u4E8B\u4EF6\u7CFB\u7EDF\u7EDF\u4E00\u8C03\u5EA6\u4E8B\u4EF6\uFF0C\u800C batchUpdate \u5219\u662F\u4F5C\u4E3A\u4E00\u79CD\u4E8B\u4EF6\u88AB\u4E8B\u4EF6\u7CFB\u7EDF\u8C03\u5EA6\u6267\u884C\u7684

\`packages/react-dom-bindings/src/events/DOMPluginEventSystem.js\`

\`\`\`js
export function dispatchEventForPluginEventSystem() {
  // ...

  batchedUpdates(() =>
    dispatchEventsForPlugins(
      domEventName,
      eventSystemFlags,
      nativeEvent,
      ancestorInst,
      targetContainer,
    ),
  )
}
\`\`\`

\u8FD9\u91CC\u7684 batchedUpdates \u51FD\u6570\u5C31\u662F\u6279\u91CF\u66F4\u65B0\u7684\u91CD\u70B9

\`packages/react-dom-bindings/src/events/ReactDOMUpdateBatching.js\`

\`\`\`js
export function batchedUpdates(fn, a, b) {
  // \u5F00\u542F\u6279\u91CF\u66F4\u65B0
  isInsideEventHandler = true

  try {
    // \u8FD9\u91CC\u6267\u884C\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0CsetState \u5C31\u662F\u5728\u8FD9\u91CC\u9762\u88AB\u6267\u884C\u7684
    return batchedUpdatesImpl(fn, a, b)
  } finally {
    // try \u4E2D return \u4E0D\u5F71\u54CD finally \u7684\u6267\u884C

    // \u5B8C\u6210\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u540E\u5173\u95ED\u6807\u5FD7\u53D8\u91CF\uFF0C\u5F00\u59CB\u6279\u91CF\u66F4\u65B0
    isInsideEventHandler = false
  }
}
\`\`\`

#### 1.4.3. \u540C\u6B65\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6B63\u5E38\u6267\u884C\u6D41\u7A0B

\u901A\u8FC7\u4E00\u4E2A\u4F8B\u5B50\u6765\u770B\u770B\u8FD9\u4E2A\u8FC7\u7A0B\u4F1A\u66F4\u52A0\u597D\u7406\u89E3

\`\`\`tsx
/** @description batchUpdate \u7684\u6D41\u7A0B -- \u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u6267\u884C\u540C\u6B65\u64CD\u4F5C */

import React from 'react'

interface BatchUpdateDemo1State {
  counter: number
}
class BatchUpdateDemo1 extends React.Component<{}, BatchUpdateDemo1State> {
  state: Readonly<BatchUpdateDemo1State> = { counter: 0 }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(\`callback 1 -- \${this.state.counter}\`)
    })
    console.log(this.state.counter)

    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(\`callback 2 -- \${this.state.counter}\`)
    })
    console.log(this.state.counter)

    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(\`callback 3 -- \${this.state.counter}\`)
    })
    console.log(this.state.counter)
  }

  render(): React.ReactNode {
    return (
      <div>
        {this.state.counter}
        <button onClick={() => this.handleClick()}>counter++</button>
      </div>
    )
  }
}

export { BatchUpdateDemo1 }
\`\`\`

<DemoBlock>
  <BatchUpdateDemo1 />
</DemoBlock>

\u63A7\u5236\u53F0\u8F93\u51FA\u5982\u4E0B\uFF1A

![BatchUpdateDemo1\u63A7\u5236\u53F0\u8F93\u51FA](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/BatchUpdateDemo1%E6%8E%A7%E5%88%B6%E5%8F%B0%E8%BE%93%E5%87%BA.png)

\u4E3A\u4EC0\u4E48\u7ED3\u679C\u662F\u8FD9\u6837\u7684\u5462\uFF1F\u6211\u4EEC\u7ED3\u5408\u521A\u521A\u770B\u8FC7\u7684\u6E90\u7801\u5206\u6790\u4E00\u4E0B

\u9996\u5148\u901A\u8FC7\u6309\u94AE\u70B9\u51FB\u89E6\u53D1\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\`handleClick\`\uFF0C\u5B83\u4F1A\u88AB React \u7684\u4E8B\u4EF6\u7CFB\u7EDF\u6258\u7BA1\uFF0C\u7531\u4E8B\u4EF6\u7CFB\u7EDF\u7EDF\u4E00\u8C03\u5EA6

\u4E5F\u5C31\u662F\u5728 \`batchedUpdates\` \u8FD9\u4E2A\u51FD\u6570\u4E0A\u4E0B\u6587\u4E2D\u8FDB\u884C\uFF0C\u90A3\u4E48\u6211\u4EEC\u7ED3\u5408\u521A\u624D\u7684\u7CBE\u7B80\u7248\u753B\u4E00\u4E2A\u8FD9\u4E2A\u51FD\u6570\u4E0A\u4E0B\u6587\u4E2D\u7684\u6267\u884C\u60C5\u51B5\u5982\u4E0B\u56FE\u6240\u793A\uFF1A

![\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5728React\u5E95\u5C42\u7684\u6267\u884C\u6D41\u7A0B](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0%E5%9C%A8React%E5%BA%95%E5%B1%82%E7%9A%84%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.png)

\u76F8\u4FE1\u73B0\u5728\u4F60\u80FD\u7406\u89E3\u4E3A\u4EC0\u4E48\u8F93\u51FA\u60C5\u51B5\u662F\u4E0A\u9762\u90A3\u6837\u4E86

#### 1.4.4. \u5F02\u6B65\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u6267\u884C\u6D41\u7A0B

\u5982\u679C\u6211\u4EEC\u5728 handleClick \u4E2D\u6709\u5F02\u6B65\u64CD\u4F5C\u4F1A\u53D1\u751F\u4EC0\u4E48\u5462\uFF1F

\`\`\`tsx
/** @description batchUpdate \u7684\u6D41\u7A0B -- \u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u6267\u884C\u5F02\u6B65\u64CD\u4F5C */

import React from 'react'

interface BatchUpdateDemo2State {
  counter: number
}
class BatchUpdateDemo2 extends React.Component<{}, BatchUpdateDemo2State> {
  state: Readonly<BatchUpdateDemo2State> = { counter: 0 }

  handleClick() {
    setTimeout(() => {
      this.setState({ counter: this.state.counter + 1 }, () => {
        console.log(\`callback 1 -- \${this.state.counter}\`)
      })
      console.log(this.state.counter)

      this.setState({ counter: this.state.counter + 1 }, () => {
        console.log(\`callback 2 -- \${this.state.counter}\`)
      })
      console.log(this.state.counter)

      this.setState({ counter: this.state.counter + 1 }, () => {
        console.log(\`callback 3 -- \${this.state.counter}\`)
      })
      console.log(this.state.counter)
    })
  }

  render(): React.ReactNode {
    return (
      <div>
        {this.state.counter}
        <button onClick={() => this.handleClick()}>counter++</button>
      </div>
    )
  }
}

export { BatchUpdateDemo2 }
\`\`\`

<DemoBlock>
  <BatchUpdateDemo2 />
</DemoBlock>

\u5F02\u6B65\u4EFB\u52A1\u5E76\u6CA1\u6709\u5728\u4E8B\u4EF6\u7CFB\u7EDF\u7684 \`batchUpdates\` \u51FD\u6570\u4E0A\u4E0B\u6587\u4E2D\u6267\u884C\uFF0C\u56E0\u800C\u91CC\u9762\u7684 setState \u5E76\u4E0D\u4F1A\u88AB\u6279\u91CF\u66F4\u65B0\uFF0C\u800C\u662F\u4E00\u6B21\u4E00\u6B21\u5730\u4FEE\u6539 state\uFF0C\u7136\u540E\u66F4\u65B0\u89C6\u56FE

:::tip

\u8FD9\u4E2A\u73B0\u8C61\u53EA\u5728 React 17 \u53CA\u4E4B\u524D\u5B58\u5728\uFF0C18 \u5F00\u59CB\u9ED8\u8BA4\u652F\u6301\u5F02\u6B65\u64CD\u4F5C\u4E2D\u8FDB\u884C\u6279\u91CF\u66F4\u65B0

> Before React 18, only updates inside React event handlers were batched. Starting with React 18, batching is enabled for all updates by default.

> React 18 adds out-of-the-box performance improvements by doing more batching by default. Batching is when React groups multiple state updates into a single re-render for better performance. Before React 18, we only batched updates inside React event handlers. Updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default

:::

### 1.5. unstable_batchedUpdates -- \u8BA9\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u5F02\u6B65\u64CD\u4F5C\u91CC\u7684 setState \u6279\u91CF\u66F4\u65B0

\u5982\u4F55\u8BA9\u5F02\u6B65\u64CD\u4F5C\u4E2D\u7684\u591A\u6B21 setState \u4E5F\u6279\u91CF\u66F4\u65B0\u5462\uFF1F

ReactDOM \u4E2D\u63D0\u4F9B\u4E86\u4E00\u4E2A \`unstable_batchedUpdates\` API\uFF0C\u80FD\u591F\u5141\u8BB8\u6211\u4EEC\u624B\u52A8\u5F00\u542F setState \u6279\u91CF\u66F4\u65B0

\`\`\`tsx{4,14,30}
/** @description batchUpdate \u7684\u6D41\u7A0B -- \u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7684\u5F02\u6B65\u64CD\u4F5C\u4E2D setState \u6279\u91CF\u66F4\u65B0 */

import React from 'react'
import { unstable_batchedUpdates } from 'react-dom'

interface BatchUpdateDemo3State {
  counter: number
}
class BatchUpdateDemo3 extends React.Component<{}, BatchUpdateDemo3State> {
  state: Readonly<BatchUpdateDemo3State> = { counter: 0 }

  handleClick() {
    setTimeout(() => {
      unstable_batchedUpdates(() => {
        this.setState({ counter: this.state.counter + 1 }, () => {
          console.log(\`callback 1 -- \${this.state.counter}\`)
        })
        console.log(this.state.counter)

        this.setState({ counter: this.state.counter + 1 }, () => {
          console.log(\`callback 2 -- \${this.state.counter}\`)
        })
        console.log(this.state.counter)

        this.setState({ counter: this.state.counter + 1 }, () => {
          console.log(\`callback 3 -- \${this.state.counter}\`)
        })
        console.log(this.state.counter)
      })
    })
  }

  render(): React.ReactNode {
    return (
      <div>
        {this.state.counter}
        <button onClick={() => this.handleClick()}>counter++</button>
      </div>
    )
  }
}

export { BatchUpdateDemo3 }
\`\`\`

<DemoBlock>
  <BatchUpdateDemo3 />
</DemoBlock>

:::tip{title='unstable_batchedUpdates \u4F7F\u7528\u573A\u666F'}

\u5F53\u7528 ajax \u8BF7\u6C42\u6570\u636E\u540E\u5982\u679C\u6709\u591A\u6B21 setState \u64CD\u4F5C\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 unstable_batchedUpdates \u5305\u88F9\u8FD9\u4E9B\u591A\u6B21 setState \u64CD\u4F5C\uFF0C\u5F00\u542F\u6279\u91CF\u66F4\u65B0 state \u7684\u7279\u6027\uFF0C\u907F\u514D\u4E0D\u5FC5\u8981\u5730\u591A\u6B21\u66F4\u65B0\u4E2D\u95F4 state \u89C6\u56FE

:::

### 1.6. \u63D0\u5347\u66F4\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7

ReactDOM \u63D0\u4F9B\u7684 \`flushSync\` API \u53EF\u4EE5\u5C06\u4F20\u5165\u7684\u56DE\u8C03\u653E\u5728\u4E00\u4E2A\u8F83\u9AD8\u7684\u4F18\u5148\u7EA7

\`\`\`tsx{4,13-22}
/** @description \u63D0\u5347\u66F4\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7 */

import React from 'react'
import ReactDOM from 'react-dom'

interface BatchUpdateDemo4State {
  counter: number
}
class BatchUpdateDemo4 extends React.Component<{}, BatchUpdateDemo4State> {
  state: Readonly<BatchUpdateDemo4State> = { counter: 0 }

  handleClick() {
    setTimeout(() => {
      this.setState({ counter: 1 })
    })

    this.setState({ counter: 2 })
    ReactDOM.flushSync(() => {
      this.setState({ counter: 3 })
    })

    this.setState({ counter: 4 })
  }

  render(): React.ReactNode {
    console.log('BatchUpdateDemo4 -- ', this.state.counter)
    return (
      <div>
        {this.state.counter}
        <button onClick={() => this.handleClick()}>counter++</button>
      </div>
    )
  }
}

export { BatchUpdateDemo4 }
\`\`\`

<DemoBlock>
  <BatchUpdateDemo4 />
</DemoBlock>

![flushSync\u63D0\u5347\u66F4\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/flushSync%E6%8F%90%E5%8D%87%E6%9B%B4%E6%96%B0%E4%BB%BB%E5%8A%A1%E4%BC%98%E5%85%88%E7%BA%A7.png)

\u53EF\u4EE5\u770B\u5230\uFF0C\u6709\u4E86 \`flushSync\` \u540E\uFF0C\u5C3D\u7BA1\u524D\u9762\u6709\u4E00\u4E2A\u5C06 counter \u8BBE\u7F6E\u4E3A 2 \u7684 setState\uFF0C\u4F46\u662F\u6E32\u67D3\u51FD\u6570\u5E76\u6CA1\u6709\u6267\u884C

\u4E5F\u5C31\u662F\u8BF4 \`flushSync\` \u4F1A\u4E0E\u524D\u9762\u7684\u540C\u6B65 setState \u8FDB\u884C\u5408\u5E76\u540E\u518D\u6E32\u67D3

:::tip{title=\u66F4\u65B0\u4EFB\u52A1\u4F18\u5148\u7EA7}

flushSync \u4E2D\u7684 setState > \u6B63\u5E38\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u7684 setState > \u5F02\u6B65\u64CD\u4F5C(\u5982 setTimeout, promise.then)\u4E2D\u7684 setState

:::

## 2. \u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684 state

### 2.1. useState \u7684\u7528\u6CD5

\u5173\u4E8E useState \u7684\u7528\u6CD5\u76F8\u4FE1\u5927\u5BB6\u90FD\u6BD4\u8F83\u719F\u6089\u4E86\uFF0C\u4E0D\u8FC7\u8FD9\u91CC\u8FD8\u662F\u7A0D\u5FAE\u63D0\u4E00\u4E0B

#### 2.1.1. initialState

\`\`\`tsx
const [state, setState] = useState(initialState)
\`\`\`

\u5E38\u89C1\u7684\u7528\u6CD5\u662F initialState \u76F4\u63A5\u521D\u59CB\u5316\u4E00\u4E2A\u6570\u636E\uFF0C\u6BD4\u5982 number\u3001string\u3001boolean\u3001object \u7B49

\`\`\`tsx
/** @description initialState \u4F7F\u7528\u76F4\u63A5\u6570\u636E */
const UseStateDemo1: React.FC = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => handleClick()}>counter++</button>
    </div>
  )
}
\`\`\`

<DemoBlock>
  <UseStateDemo1 />
</DemoBlock>

\u4F46\u5176\u5B9E initialState \u4E5F\u80FD\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F5C\u4E3A\u521D\u59CB state\uFF0C\u8FD9\u4E2A\u573A\u666F\u7528\u5728\u54EA\u91CC\u5462\uFF1F

\u5B83\u53EF\u4EE5\u7528\u5728\u61D2\u52A0\u8F7D\u7684\u573A\u666F\uFF0C\u5F53 initialState \u662F\u4E00\u4E2A\u9700\u8981\u590D\u6742\u8BA1\u7B97\u624D\u80FD\u83B7\u5F97\u7684\u503C\u65F6\uFF0C\u5C31\u9002\u5408\u7528\u51FD\u6570\u7684\u65B9\u5F0F\u4F5C\u4E3A initialState

\`\`\`tsx
/** @description initialState \u4F7F\u7528\u51FD\u6570 */
const UseStateDemo2: React.FC = () => {
  const [counter, setCounter] = useState(() => {
    // \u5047\u8BBE\u8FD9\u91CC\u6709\u5F88\u591A\u590D\u6742\u8BA1\u7B97...
    const value = Math.random() > 0.5 ? 1 : 0

    // \u8BA1\u7B97\u5B8C\u540E\u8FD4\u56DE\u503C\u4F5C\u4E3A initialState
    return value
  })

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => handleClick()}>counter++</button>
    </div>
  )
}
\`\`\`

<DemoBlock>
  <UseStateDemo2 />
</DemoBlock>

\u521D\u59CB\u503C\u53EA\u4F1A\u5728\u9996\u6B21\u6E32\u67D3\u7684\u65F6\u5019\u88AB\u8BA1\u7B97\uFF0C\u540E\u7EED\u66F4\u65B0\u6E32\u67D3\u65F6\u4E0D\u4F1A\u518D\u91CD\u590D\u6267\u884C\u8BA1\u7B97\u903B\u8F91

#### 2.1.2. setState

setState \u5E38\u89C1\u7684\u662F\u76F4\u63A5\u8D4B\u503C\u4F7F\u7528\uFF0C\u4F20\u5165\u65B0\u7684 state\uFF0C\u4F46\u5B9E\u9645\u4E0A\u4ED6\u8FD8\u652F\u6301\u4F20\u5165\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u4E5F\u88AB\u79F0\u4E3A reducer

reducer \u7684\u53C2\u6570\u662F\u65E7 state\uFF0C\u4F7F\u7528\u65F6\u9700\u8981\u751F\u6210\u65B0 state \u540E\u8FD4\u56DE

\`\`\`tsx
/** @description setState reducer */
const UseStateDemo3: React.FC = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    // \u76F4\u63A5 setState
    setCounter(counter + 1)

    // \u4F7F\u7528 reducer \u7684\u65B9\u5F0F setState
    setCounter((counter) => counter + 1)
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => handleClick()}>counter + 2</button>
    </div>
  )
}
\`\`\`

<DemoBlock>
  <UseStateDemo3 />
</DemoBlock>

:::warning{title='\u4F7F\u7528 reducer \u65F6\u7684\u6CE8\u610F\u4E8B\u9879'}

\u5982\u679C state \u662F\u4E00\u4E2A object\uFF0C\u90A3\u4E48\u4E0D\u5E94\u8BE5\u5728 reducer \u4E2D\u76F4\u63A5\u4FEE\u6539\u65E7 state\uFF0C\u800C\u662F\u62F7\u8D1D\u4E00\u4EFD\u540E\u5BF9\u526F\u672C\u8FDB\u884C\u4FEE\u6539\u5E76\u8FD4\u56DE\u526F\u672C

\u56E0\u4E3A react \u5E95\u5C42\u5BF9 state \u7684\u5BF9\u6BD4\u662F\u6D45\u6BD4\u8F83\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5982\u679C\u65B0\u65E7 state \u90FD\u662F\u6307\u5411\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\u7684\u5BF9\u8C61\uFF0C\u90A3\u4E48\u5373\u4F7F\u5B83\u4EEC\u7684\u5C5E\u6027\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u89C6\u56FE\u4E5F\u4E0D\u4F1A\u8FDB\u884C\u66F4\u65B0

\u8FD9\u5C31\u662F\u6240\u8C13\u7684 \`immutable\` \u6570\u636E\uFF0C\u8FD9\u5BF9 react \u5E95\u5C42\u6027\u80FD\u4F18\u5316\u6709\u91CD\u8981\u610F\u4E49

:::

### 2.2. \u5982\u4F55\u76D1\u542C state \u53D8\u5316\uFF1F

\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u6211\u4EEC\u8981\u76D1\u542C state \u53D8\u5316\u65F6\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A

1. \u5728 \`this.setState\` \u7684\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u53C2\u6570\u4E2D\u83B7\u53D6\u53D8\u5316\u540E\u7684 state \u8FDB\u884C\u64CD\u4F5C
2. \u5728 \`componentDidUpdate\` \u751F\u547D\u5468\u671F\u4E2D\u83B7\u53D6\u66F4\u65B0\u540E\u7684 state

\u90A3\u4E48\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u5982\u4F55\u7C7B\u4F3C\u5730\u5BF9 state \u8FDB\u884C\u76D1\u542C\u5462\uFF1F

\u53EF\u4EE5\u4F7F\u7528 \`useEffect\` \u8FD9\u4E2A hook

\u5728\u7B2C\u4E00\u4E2A\u56DE\u8C03\u53C2\u6570\u4E2D\u7F16\u5199\u76D1\u542C\u903B\u8F91\uFF0C\u5C06\u8981\u76D1\u542C\u7684 state \u653E\u5230\u7B2C\u4E8C\u4E2A\u6570\u7EC4\u53C2\u6570\u4E2D\u5373\u53EF\u5728 state \u53D8\u5316\u65F6\u6267\u884C\u7B2C\u4E00\u4E2A\u56DE\u8C03\u53C2\u6570

\`\`\`tsx
/** @description \u76D1\u542C counter \u53D8\u5316 */
const UseEffectDemo1: React.FC = () => {
  const [counter, setCounter] = useState(0)

  // \u5728 useEffect \u4E2D\u76D1\u542C counter \u53D8\u5316
  useEffect(() => {
    console.log(\`counter changed: \${counter}\`)
  }, [counter])

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>counter++</button>
    </div>
  )
}
\`\`\`

<DemoBlock>
  <UseEffectDemo1 />
</DemoBlock>

## 3. \u5BF9\u6BD4\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684 state

**\u76F8\u540C\u70B9\uFF1A**

- \u5E95\u5C42\u90FD\u8C03\u7528\u4E86 \`scheduleUpdateOnFiber\` \u65B9\u6CD5\uFF0C\u5E76\u4E14\u5728\u4E8B\u4EF6\u7CFB\u7EDF\u4E2D\u90FD\u6709\u6279\u91CF\u66F4\u65B0 state \u7684\u7279\u6027

**\u4E0D\u540C\u70B9\uFF1A**

- \u5BF9\u4E8E\u975E PureComponent \u800C\u8A00\uFF0C\u7C7B\u7EC4\u4EF6 setState \u4E0D\u4F1A\u6D45\u6BD4\u8F83\u65B0\u65E7 state\uFF0C\u53EA\u8981\u8C03\u7528\u4E86\u5C31\u66F4\u65B0\uFF1B\u800C\u51FD\u6570\u7EC4\u4EF6\u7684 useState \u4F1A\u9ED8\u8BA4\u6BD4\u8F83\u65B0\u65E7 state \u662F\u5426\u662F\u540C\u4E00\u4E2A\u5BF9\u8C61\u6765\u51B3\u5B9A\u662F\u5426\u8FDB\u884C\u66F4\u65B0
- setState \u503E\u5411\u4E8E\u5408\u5E76 state \u8FDB\u884C\u66F4\u65B0\uFF1BuseState \u503E\u5411\u4E8E\u62F7\u8D1D\u539F state\uFF0C\u5BF9\u526F\u672C\u8FDB\u884C\u6539\u53D8\u89E6\u53D1\u66F4\u65B0
- setState \u53EF\u4EE5\u901A\u8FC7\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u53C2\u6570\u6216\u8005 componentDidUpdate \u751F\u547D\u5468\u671F\u76D1\u542C state \u53D8\u5316\uFF1BuseState \u9700\u8981\u914D\u5408 useEffect \u6765\u76D1\u542C state \u53D8\u5316
`;export{T as content,O as default,$ as frontmatter,w as lastUpdatedTime,M as title,j as toc};
