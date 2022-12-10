var f=Object.defineProperty;var N=(c,n,s)=>n in c?f(c,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[n]=s;var h=(c,n,s)=>(N(c,typeof n!="symbol"?n+"":n,s),s);import{jsxs as e,jsx as l,Fragment as A}from"react/jsx-runtime";import{D as F}from"./index.6529e49c.js";import D,{useState as i,useEffect as p}from"react";import{c as C}from"./scoped-log.b13f94b9.js";const B=(c,n)=>{let s=null;return(...o)=>{s&&clearTimeout(s),s=setTimeout(()=>{c.apply(void 0,o)},n)}},d=C("FunctionComponentLifeCycleDemo"),g=()=>{const[c,n]=i(!0),[s,o]=i(0);return e("div",{children:[c&&l(S,{counter:s}),l("button",{onClick:()=>o(r=>r+1),children:"add counter"}),l("button",{onClick:()=>n(!1),children:"\u5378\u8F7D\u9500\u6BC1\u7EC4\u4EF6"})]})},S=c=>{const[n,s]=i(0);return p(()=>(d.log("\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210 -- componentDidMount"),()=>{d.log("\u7EC4\u4EF6\u5373\u5C06\u5378\u8F7D\u9500\u6BC1 -- componentWillUnmount")}),[]),p(()=>{d.log("props \u53D8\u5316 -- componentWillReceiveProps")},[c]),p(()=>{d.log("\u7EC4\u4EF6\u66F4\u65B0\u5B8C\u6210 -- componentDidUpdate")}),e("div",{children:[e("p",{children:["props.counter: ",c.counter]}),e("p",{children:["stateCounter: ",n]}),l("button",{onClick:()=>s(o=>o+1),children:"add stateCounter"})]})};class v extends D.Component{constructor(s){super(s);h(this,"rootEl",null);this.state={list:[]},this.handleScroll=this.handleScroll.bind(this),this.handleScroll=B(this.handleScroll,200)}handleScroll(s){const{onScroll:o=()=>{}}=this.props;o&&o(s),this.checkScrollToBottom()}checkScrollToBottom(){const{onScrollToBottom:s}=this.props,{scrollHeight:o,scrollTop:r,offsetHeight:t}=this.rootEl;o<=r+t&&s&&s()}static getDerivedStateFromProps(s){var o;return{list:(o=s.list)!=null?o:[]}}componentDidMount(){this.rootEl.addEventListener("scroll",this.handleScroll)}shouldComponentUpdate(s,o){return o.list!==this.state.list}getSnapshotBeforeUpdate(){return this.rootEl.scrollHeight}componentDidUpdate(s,o,r){var t;((t=this.rootEl)==null?void 0:t.scrollHeight)!==void 0&&r!==void 0&&console.log(`\u5BB9\u5668\u9AD8\u5EA6\u53D8\u5316\u91CF: ${this.rootEl.scrollHeight-r}`)}componentWillUnmount(){var s;(s=this.rootEl)==null||s.removeEventListener("scroll",this.handleScroll)}render(){const{list:s}=this.state,{itemComponent:o,maxHeight:r="300px"}=this.props;return l("div",{style:{maxHeight:r,overflowY:"scroll"},ref:t=>this.rootEl=t,children:l("div",{style:{display:"flex",flexDirection:"column",gap:"30px"},children:s.map(t=>D.createElement(o,{key:t.id,data:t.data}))})})}}const P=3;let a=0;const U=c=>new Promise((n,s)=>{c<=P?n({code:0,page:c,list:[{id:a++,data:{title:"\u7EA6\u65AF\u592B\u5BB6\u5EAD\u6821\u56ED\u591A\u529F\u80FD\u521B\u53EF\u8D34\u5361\u901A\u5973\u5C11\u5973\u53EF\u7231\u8D85\u5F39\u9632\u6C34\u900F\u6C14\u5F39\u529B\u5C0F\u9762\u79EF\u5F00\u653E\u6027\u521B\u4F24\u521B\u53E3\u8D34",cover:"https://img14.360buyimg.com/n1/jfs/t1/117043/23/16493/438028/5f50a682E96819e0d/a3678e5c4fb5a3cf.jpg",price:66}},{id:a++,data:{title:"\u3010MaincareBio\u3011\u533B\u7528\u5916\u79D1\u53E3\u7F69\u4E00\u6B21\u6027\u65E0\u83CC\u4E09\u5C42\u900F\u6C14\u6210\u4EBA\u6302\u8033\u5F0F\u9632\u7EC6\u83CC\u75C5\u6BD2\u98DE\u6CAB\u9632\u62A4\u533B\u7528\u53E3\u7F69 \u513F\u7AE5\u533B\u7528\u5916\u79D1\u53E3\u7F6950\u53EA\u301010\u53EA/\u5305*5\u5305\u3011",cover:"https://img14.360buyimg.com/n1/jfs/t1/133614/39/16312/128620/5fb3a1b8E02fec0c6/0b7d82a132932f35.jpg",price:77}},{id:a++,data:{title:"\u4E50\u6A0A\u4E00\u6B21\u6027\u533B\u7528\u5916\u79D1\u53E3\u7F69\u533B\u751F\u4E13\u7528\u6210\u4EBA\u901A\u7528\u4E09\u5C42\u533B\u7597\u53E3\u7F69\u900F\u6C14\u5355\u7247\u9632\u62A4 \u533B\u7528\u5916\u79D1\u53E3\u7F69100\u53EA\u84DD\u8272\u3010\u975E\u72EC\u7ACB\u5305\u88C5/2\u5305\u3011",cover:"https://img14.360buyimg.com/n1/jfs/t1/151889/33/15018/129441/6008e066Ee813ef0d/1f1a8218fa30a05f.jpg",price:88}},{id:a++,data:{title:"\u4FCF\u4E1C\u65B9 \u4E00\u6B21\u6027\u533B\u7528\u53E3\u7F69\u767D\u8272 \u8F7B\u8584\u900F\u6C14 \u4E09\u5C42\u9632\u62A4\u542B\u7194\u55B7\u8FC7\u6EE4\u6210\u4EBA\u7537\u5973\u9002\u7528\u51AC\u5B63\u9632\u62A4\u9762\u7F69 50\u53EA\u533B\u7528\u53E3\u7F69\u767D\u8272\u6574\u5305(\u5DE5\u5382\u7279\u60E0)",cover:"https://img14.360buyimg.com/n1/jfs/t1/164271/11/7365/212791/6032be25E162107e3/df794675c5095edf.jpg",price:99}},{id:a++,data:{title:"\u30107\u4ED3\u9694\u65E5\u8FBE\u3011\u5494\u8D1D\u7231(KABEIAI)\u4E00\u6B21\u6027\u533B\u7528\u9632\u62A4\u53E3\u7F69\u9632\u5C18\u9632\u96FE\u973E\u9632\u9897\u7C92\u7269 \u4E09\u5C42\u9632\u62A4\u900F\u6C14\u533B\u7528\u53E3\u7F69 \u533B\u7528\u53E3\u7F6950\u53EA\uFF081\u5305\uFF09",cover:"https://img14.360buyimg.com/n1/jfs/t1/156216/4/9112/168310/601e5d2aE4ad9ee3b/65a25f358d136a20.jpg",price:100}}]}):n({code:100,page:c,list:[]})}),y=C("ScrollViewClassComponentDemo"),w=c=>{const{title:n,cover:s,price:o}=c.data;return e("div",{style:{display:"flex",justifyContent:"space-between",gap:"30px"},children:[l("img",{src:s,style:{maxHeight:"80px"}}),e("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[l("div",{children:n}),e("div",{children:["\uFFE5 ",o]})]})]})},b=()=>{const[c,n]=i([]),[s,o]=i(0),r=async()=>{const E=await U(s);E.code===0?(n(u=>u.concat(E.list)),o(E.page+1)):y.log("\u65E0\u6570\u636E\u4E86")},t=()=>{y.log("\u6EDA\u52A8\u5230\u5E95\u90E8\u4E86"),r()};return p(()=>{r()},[]),l("div",{children:l(v,{list:c,itemComponent:w,maxHeight:"400px",onScrollToBottom:t})})},I=void 0,L=[{id:"1-\u7C7B\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u539F\u7406",text:"1. \u7C7B\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u539F\u7406",depth:2},{id:"11-\u57FA\u672C\u6D41\u7A0B",text:"1.1. \u57FA\u672C\u6D41\u7A0B",depth:3},{id:"12-\u7EC4\u4EF6\u521D\u59CB\u5316",text:"1.2. \u7EC4\u4EF6\u521D\u59CB\u5316",depth:3},{id:"121-constructclassinstace",text:"1.2.1. constructClassInstace",depth:4},{id:"122-mountclassinstance",text:"1.2.2. mountClassInstance",depth:4},{id:"123-componentdidmount-\u6267\u884C\u65F6\u673A",text:"1.2.3. componentDidMount \u6267\u884C\u65F6\u673A",depth:4},{id:"13-\u7EC4\u4EF6\u66F4\u65B0",text:"1.3. \u7EC4\u4EF6\u66F4\u65B0",depth:3},{id:"14-\u7EC4\u4EF6\u9500\u6BC1",text:"1.4. \u7EC4\u4EF6\u9500\u6BC1",depth:3},{id:"15-\u4E09\u4E2A\u9636\u6BB5\u603B\u89C8",text:"1.5. \u4E09\u4E2A\u9636\u6BB5\u603B\u89C8",depth:3},{id:"2-\u5404\u4E2A\u751F\u547D\u5468\u671F\u4E2D\u80FD\u505A\u7684\u4E8B\u60C5",text:"2. \u5404\u4E2A\u751F\u547D\u5468\u671F\u4E2D\u80FD\u505A\u7684\u4E8B\u60C5",depth:2},{id:"21-constructor",text:"2.1. constructor",depth:3},{id:"22-getderivedstatefromprops",text:"2.2. getDerivedStateFromProps",depth:3},{id:"23-componentwillmount",text:"2.3. componentWillMount",depth:3},{id:"24-componentwillreceiveprops",text:"2.4. componentWillReceiveProps",depth:3},{id:"25-componentwillupdate",text:"2.5. componentWillUpdate",depth:3},{id:"26-render",text:"2.6. render",depth:3},{id:"27-getsnapshotbeforeupdate",text:"2.7. getSnapshotBeforeUpdate",depth:3},{id:"28-componentdidupdate",text:"2.8. componentDidUpdate",depth:3},{id:"29-componentdidmount",text:"2.9. componentDidMount",depth:3},{id:"210-shouldcomponentupdate",text:"2.10. shouldComponentUpdate",depth:3},{id:"211-componentwillunmount",text:"2.11. componentWillUnmount",depth:3},{id:"3-unsafe-\u751F\u547D\u5468\u671F\u4E3A\u4EC0\u4E48-unsafe",text:"3. UNSAFE \u751F\u547D\u5468\u671F\u4E3A\u4EC0\u4E48 UNSAFE",depth:2},{id:"-31-unsafe_componentwillmount",text:"* 3.1. UNSAFE_componentWillMount",depth:3},{id:"32-unsafe_componentwillreceiveprops",text:"3.2. UNSAFE_componentWillReceiveProps",depth:3},{id:"33-unsafe_componentwillupdate",text:"3.3. UNSAFE_componentWillUpdate",depth:3},{id:"4-\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684\u58F0\u660E\u5468\u671F\u66FF\u4EE3\u65B9\u6848",text:"4. \u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684\u58F0\u660E\u5468\u671F\u66FF\u4EE3\u65B9\u6848",depth:2},{id:"41-useeffect--uselayouteffect",text:"4.1. useEffect & useLayoutEffect",depth:3},{id:"411-useeffect",text:"4.1.1. useEffect",depth:4},{id:"412-uselayouteffect",text:"4.1.2. useLayoutEffect",depth:4},{id:"413-\u5982\u4F55\u9009\u62E9-useeffect-\u548C-uselayouteffect",text:"4.1.3. \u5982\u4F55\u9009\u62E9 useEffect \u548C useLayoutEffect",depth:4},{id:"414-\u548C-componentdidmountcomponentdidupdate-\u6709\u5565\u533A\u522B",text:"4.1.4. \u548C componentDidMount/componentDidUpdate \u6709\u5565\u533A\u522B\uFF1F",depth:4},{id:"42-useinsertioneffect",text:"4.2. useInsertionEffect",depth:3},{id:"43-componentdidmount-\u66FF\u4EE3\u65B9\u6848",text:"4.3. componentDidMount \u66FF\u4EE3\u65B9\u6848",depth:3},{id:"44-componentwillunmount-\u66FF\u4EE3\u65B9\u6848",text:"4.4. componentWillUnmount \u66FF\u4EE3\u65B9\u6848",depth:3},{id:"45-componentwillreceiveprops-\u66FF\u4EE3\u65B9\u6848",text:"4.5. componentWillReceiveProps \u66FF\u4EE3\u65B9\u6848",depth:3},{id:"46-componentdidupdate-\u66FF\u4EE3\u65B9\u6848",text:"4.6. componentDidUpdate \u66FF\u4EE3\u65B9\u6848",depth:3},{id:"47-\u51FD\u6570\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6848\u4F8B",text:"4.7. \u51FD\u6570\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6848\u4F8B",depth:3},{id:"5-\u751F\u547D\u5468\u671F\u5B9E\u6218----scrollview-\u7EC4\u4EF6",text:"5. \u751F\u547D\u5468\u671F\u5B9E\u6218 -- ScrollView \u7EC4\u4EF6",depth:2}],j="life cycle";function m(c){const n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ol:"ol",li:"li",h3:"h3",code:"code",div:"div",button:"button",span:"span",pre:"pre",img:"img",h4:"h4",ul:"ul"},c.components);return e(A,{children:[e(n.h1,{id:"life-cycle",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#life-cycle",children:"#"}),"life cycle"]}),`
`,e(n.h2,{id:"1-\u7C7B\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u539F\u7406",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-\u7C7B\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u539F\u7406",children:"#"}),"1. \u7C7B\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u539F\u7406"]}),`
`,l(n.p,{children:"React \u4E2D\u6709\u4E24\u4E2A\u6838\u5FC3\u9636\u6BB5\uFF1A"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:[`
`,l(n.p,{children:"\u8C03\u548C (render) \u9636\u6BB5"}),`
`,l(n.p,{children:"\u904D\u5386 Fiber \u6811\uFF0C\u901A\u8FC7 diff \u7B97\u6CD5\u627E\u51FA\u53D8\u5316\u7684\u90E8\u5206\uFF0C\u5982\u679C\u662F\u7EC4\u4EF6\u5219\u4F1A\u6267\u884C\u5176 render \u51FD\u6570\u8FDB\u884C\u66F4\u65B0"}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"commit \u9636\u6BB5"}),`
`,l(n.p,{children:"\u6839\u636E\u8C03\u548C\u7684\u7ED3\u679C\u53BB\u521B\u5EFA\u6216\u4FEE\u6539\u771F\u5B9E DOM \u8282\u70B9"}),`
`]}),`
`]}),`
`,l(n.p,{children:"\u751F\u547D\u5468\u671F\u662F\u8D2F\u7A7F\u5728\u4E00\u4E2A\u7EC4\u4EF6\u7684\u521B\u5EFA\u3001\u66F4\u65B0\u3001\u9500\u6BC1\u4E2D\u7684\uFF0C\u6B63\u597D\u662F\u4E00\u4E2A\u7EC4\u4EF6\u4ECE\u51FA\u73B0\u5230\u6D88\u5931\u7684\u6574\u4E2A\u8FC7\u7A0B\uFF0C\u56E0\u6B64\u88AB\u5F62\u8C61\u5730\u79F0\u4E3A\u201C\u751F\u547D\u5468\u671F\u201D"}),`
`,e(n.h3,{id:"11-\u57FA\u672C\u6D41\u7A0B",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#11-\u57FA\u672C\u6D41\u7A0B",children:"#"}),"1.1. \u57FA\u672C\u6D41\u7A0B"]}),`
`,l(n.p,{children:"\u5148\u6765\u770B\u770B\u5B83\u7684\u57FA\u672C\u6D41\u7A0B\uFF1A"}),`
`,l(n.p,{children:l(n.code,{children:"packages/react-reconciler/src/ReactFiberBeginWork.js"})}),`
`,e(n.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#616E88"},children:"/** "}),l(n.span,{style:{color:"#ECEFF4"},children:"@"}),l(n.span,{style:{color:"#8FBCBB"},children:"description"}),l(n.span,{style:{color:"#616E88"},children:" workloop React \u5904\u7406\u7C7B\u7EC4\u4EF6\u7684\u4E3B\u8981\u529F\u80FD\u65B9\u6CD5 */"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"updateClassComponent"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// shouldUpdate \u6807\u8BC6\u7528\u6765\u8BC1\u660E \u7EC4\u4EF6\u662F\u5426\u9700\u8981\u66F4\u65B0"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"let"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"shouldUpdate"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// stateNode \u662F fiber \u6307\u5411 \u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u6307\u9488\u3002"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"stateNode"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// instance \u4E3A\u7EC4\u4EF6\u5B9E\u4F8B,\u5982\u679C\u7EC4\u4EF6\u5B9E\u4F8B\u4E0D\u5B58\u5728\uFF0C\u8BC1\u660E\u8BE5\u7C7B\u7EC4\u4EF6\u6CA1\u6709\u88AB\u6302\u8F7D\u8FC7\uFF0C\u90A3\u4E48\u4F1A\u8D70\u521D\u59CB\u5316\u6D41\u7A0B"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"==="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"null"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u7EC4\u4EF6\u5B9E\u4F8B\u5C06\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u88AB new"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"constructClassInstance"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"Component"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"nextProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u521D\u59CB\u5316\u6302\u8F7D\u7EC4\u4EF6\u6D41\u7A0B"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"mountClassInstance"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"Component"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"nextProps"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"renderExpirationTime"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"shouldUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"true"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"else"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u7EC4\u4EF6\u5B9E\u4F8B\u5DF2\u5B58\u5728 -- \u66F4\u65B0\u7EC4\u4EF6"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"shouldUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"updateClassInstance"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"current"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"Component"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"nextProps"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"renderExpirationTime"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#D8DEE9"},children:"shouldUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u6267\u884Crender\u51FD\u6570 \uFF0C\u5F97\u5230\u5B50\u8282\u70B9"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"nextChildren"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"render"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u7EE7\u7EED\u8C03\u548C\u5B50\u8282\u70B9"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#88C0D0"},children:"reconcileChildren"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"current"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"nextChildren"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"renderExpirationTime"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:"\u5927\u4F53\u4E0A\u5C31\u662F\u68C0\u67E5\u7EC4\u4EF6\u5B9E\u4F8B\u662F\u5426\u5B58\u5728\uFF0C\u4E0D\u5B58\u5728\u5219\u8D70\u521D\u59CB\u5316\u7684\u6D41\u7A0B\uFF0C\u5DF2\u5B58\u5728\u5219\u8D70\u66F4\u65B0\u7684\u6D41\u7A0B"}),`
`,l(n.p,{children:"\u6709\u51E0\u4E2A\u91CD\u8981\u7684\u5730\u65B9\u9700\u8981\u8BB0\u4F4F\uFF1A"}),`
`,e(n.ol,{children:[`
`,l(n.li,{children:"instance: \u7C7B\u7EC4\u4EF6\u5B9E\u4F8B"}),`
`,l(n.li,{children:"workInProgress: \u5F53\u524D\u6B63\u5728\u8C03\u548C\u7684 fiber \u6811"}),`
`,l(n.li,{children:"current: \u8C03\u548C\u7ED3\u675F\u540E\u4F1A\u5C06 workInProgress \u8D4B\u503C\u7ED9 current"}),`
`,l(n.li,{children:"Component: \u7528\u6237\u7F16\u5199\u7684 class \u7EC4\u4EF6"}),`
`,l(n.li,{children:"nextProps: \u7EC4\u4EF6\u5728\u4E00\u6B21\u66F4\u65B0\u4E2D\u7684 props"}),`
`,l(n.li,{children:"renderExpirationTime: \u4E0B\u4E00\u6B21\u6E32\u67D3\u7684\u8FC7\u671F\u65F6\u95F4"}),`
`,e(n.li,{children:["\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u4E0E fiber \u5BF9\u8C61\u7684\u5173\u7CFB: \u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u901A\u8FC7 ",l(n.code,{children:"_reactInternals"})," \u83B7\u53D6\u5BF9\u5E94 fiber \u8282\u70B9\uFF0Cfiber \u8282\u70B9\u901A\u8FC7 ",l(n.code,{children:"stateNode"}),` \u83B7\u53D6\u5BF9\u5E94\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B
`,l(n.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%B1%BB%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E4%B8%8Efiber%E7%9A%84%E5%85%B3%E7%B3%BB.png",alt:"\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u4E0Efiber\u5BF9\u8C61\u7684\u5173\u7CFB"})]}),`
`]}),`
`,e(n.h3,{id:"12-\u7EC4\u4EF6\u521D\u59CB\u5316",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#12-\u7EC4\u4EF6\u521D\u59CB\u5316",children:"#"}),"1.2. \u7EC4\u4EF6\u521D\u59CB\u5316"]}),`
`,e(n.h4,{id:"121-constructclassinstace",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#121-constructclassinstace",children:"#"}),"1.2.1. constructClassInstace"]}),`
`,e(n.p,{children:["\u9996\u5148\u4F1A\u6267\u884C ",l(n.code,{children:"constructClassInstace"})," \u5B9E\u4F8B\u5316\u7C7B\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u5728\u524D\u9762\u7684",l(n.code,{children:"\u8D77\u6E90 Component"}),"\u7AE0\u8282\u6709\u8BB2\u5230"]}),`
`,e(n.h4,{id:"122-mountclassinstance",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#122-mountclassinstance",children:"#"}),"1.2.2. mountClassInstance"]}),`
`,e(n.p,{children:["\u5B9E\u4F8B\u5316\u540E\u4F1A\u6267\u884C ",l(n.code,{children:"mountClassInstance"})," \u53BB\u6302\u8F7D\u7EC4\u4EF6\uFF0C\u5982\u4F55\u6302\u8F7D\u7684\u5462\uFF1F\u770B\u770B\u6838\u5FC3\u4EE3\u7801\uFF1A"]}),`
`,l(n.p,{children:l(n.code,{children:"packages/react-reconciler/src/ReactFiberBeginWork.js"})}),`
`,e(n.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"mountClassInstance"}),l(n.span,{style:{color:"#ECEFF4"},children:"("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"ctor"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"newProps"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"renderExpirationTime"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"stateNode"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// ctor \u5C31\u662F\u6211\u4EEC\u5199\u7684\u7C7B\u7EC4\u4EF6\uFF0C\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u7684\u9759\u6001\u65B9\u6CD5"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"getDerivedStateFromProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"ctor"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"getDerivedStateFromProps"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u8FD9\u4E2A\u65F6\u5019\u6267\u884C getDerivedStateFromProps \u751F\u547D\u5468\u671F \uFF0C\u5F97\u5230\u5C06\u5408\u5E76\u7684 state"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#81A1C1"},children:"typeof"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"getDerivedStateFromProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"==="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"function"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// getDerivedStateFromProps \u751F\u547D\u5468\u671F\u6839\u636E\u65B0\u7684 props \u548C\u65E7\u7684 state \u6D3E\u751F\u51FA\u65B0\u7684 state"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"partialState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"getDerivedStateFromProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"nextProps"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"prevState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u5408\u5E76state"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"memoizedState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"partialState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"==="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"null"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"||"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"partialState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"==="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"undefined"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(n.span,{style:{color:"#81A1C1"},children:"?"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"prevState"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"Object"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"assign"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"{},"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"prevState"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"partialState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"memoizedState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"memoizedState"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u5C06 state \u8D4B\u503C\u7ED9\u6211\u4EEC\u5B9E\u4F8B\u4E0A\uFF0Cinstance.state  \u5C31\u662F\u6211\u4EEC\u5728\u7EC4\u4EF6\u4E2D this.state \u83B7\u53D6\u7684 state"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"state"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"memoizedState"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u5F53 getDerivedStateFromProps \u548C getSnapshotBeforeUpdate \u4E0D\u5B58\u5728\u7684\u65F6\u5019 \uFF0C\u6267\u884C componentWillMount"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"typeof"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"ctor"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"getDerivedStateFromProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"!=="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"function"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"&&"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"typeof"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"getSnapshotBeforeUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"!=="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"function"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"&&"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"typeof"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"componentWillMount"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"==="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"function"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  ) "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"componentWillMount"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"})]})})]}),`
`,e(n.h4,{id:"123-componentdidmount-\u6267\u884C\u65F6\u673A",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#123-componentdidmount-\u6267\u884C\u65F6\u673A",children:"#"}),"1.2.3. componentDidMount \u6267\u884C\u65F6\u673A"]}),`
`,e(n.p,{children:[l(n.code,{children:"componentDidMount"}),"\u58F0\u660E\u5468\u671F\u8FD8\u6CA1\u6709\u51FA\u73B0\uFF0C\u5B83\u662F\u5728\u4F55\u65F6\u88AB\u6267\u884C\u7684\u5462\uFF1F"]}),`
`,e(n.p,{children:["\u524D\u9762\u7684",l(n.code,{children:"getDerivedStateFromProps"})," \u548C ",l(n.code,{children:"componentWillMount"})," \u751F\u547D\u5468\u671F\u90FD\u662F\u5728 render \u9636\u6BB5\u6267\u884C\u7684"]}),`
`,e(n.p,{children:[l(n.code,{children:"componentDidMount"})," \u5219\u662F\u5728 commit \u9636\u6BB5\u624D\u6267\u884C\u7684"]}),`
`,l(n.p,{children:l(n.code,{children:"packages/react-reconciler/src/ReactFiberCommitWork.js"})}),`
`,l(n.p,{children:"commit \u9636\u6BB5\u5165\u53E3"}),`
`,e(n.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"commitLayoutEffectOnFiber"}),l(n.span,{style:{color:"#ECEFF4"},children:"("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"finishedRoot"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" FiberRoot"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"current"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" Fiber "}),l(n.span,{style:{color:"#81A1C1"},children:"|"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"null"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"finishedWork"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" Fiber"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"committedLanes"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" Lanes"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"void"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u6839\u636E fiber tag \u8BC6\u522B\u7C7B\u7EC4\u4EF6\u5E76\u6267\u884C\u76F8\u5E94\u751F\u547D\u5468\u671F"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"switch"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#D8DEE9"},children:"finishedWork"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"tag"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"case"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"ClassComponent"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#88C0D0"},children:"commitClassLayoutLifecycles"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"finishedWork"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"current"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:"\u7C7B\u7EC4\u4EF6 commit \u9636\u6BB5\u751F\u547D\u5468\u671F\u8C03\u7528"}),`
`,e(n.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"commitClassLayoutLifecycles"}),l(n.span,{style:{color:"#ECEFF4"},children:"("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"finishedWork"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" Fiber"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"current"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" Fiber "}),l(n.span,{style:{color:"#81A1C1"},children:"|"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"null"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u4ECE fiber \u4E2D\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"finishedWork"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"stateNode"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#D8DEE9"},children:"current"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"==="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"null"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u7C7B\u7EC4\u4EF6\u9996\u6B21\u8C03\u548C\u6E32\u67D3"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"componentDidMount"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"else"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u7C7B\u7EC4\u4EF6\u66F4\u65B0"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"componentDidUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"prevProps"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"prevState"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"__reactInternalSnapshotBeforeUpdate"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"})]})})]}),`
`,e(n.p,{children:["\u4ECE\u6E90\u7801\u4E2D\u53EF\u4EE5\u4E86\u89E3\u5230 ",l(n.code,{children:"componentDidMount"})," \u548C ",l(n.code,{children:"componentDidUpdate"})," \u7684\u6267\u884C\u65F6\u673A\u662F\u4E00\u6837\u7684"]}),`
`,l(n.p,{children:"\u7EFC\u4E0A\uFF0C\u53EF\u4EE5\u4E86\u89E3\u5230\u4E00\u4E2A\u7C7B\u7EC4\u4EF6\u521D\u59CB\u5316\u7684\u65F6\u5019\u7684\u751F\u547D\u5468\u671F\u7684\u6267\u884C\u987A\u5E8F\u4E3A\uFF1A"}),`
`,l(n.p,{children:l(n.code,{children:"constructor -> getDerivedStateFromProps / componentWillMount -> render -> componentDidMount"})}),`
`,e(n.h3,{id:"13-\u7EC4\u4EF6\u66F4\u65B0",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#13-\u7EC4\u4EF6\u66F4\u65B0",children:"#"}),"1.3. \u7EC4\u4EF6\u66F4\u65B0"]}),`
`,e(n.p,{children:["\u6839\u636E\u57FA\u672C\u6D41\u7A0B\u4E2D\u7684\u4EE3\u7801\u903B\u8F91\uFF0C\u5F53 ",l(n.code,{children:"current === null"})," \u7684\u65F6\u5019\u4F1A\u53BB\u66F4\u65B0\u7C7B\u7EC4\u4EF6\uFF0C\u6765\u770B\u770B ",l(n.code,{children:"updateClassInstance"})," \u76F8\u5173\u4EE3\u7801\uFF0C\u53EA\u770B\u548C\u751F\u547D\u5468\u671F\u94A9\u5B50\u8C03\u7528\u76F8\u5173\u7684\u90E8\u5206\uFF1A"]}),`
`,l(n.p,{children:l(n.code,{children:"packages/react-reconciler/src/ReactFiberClassComponent.js"})}),`
`,e(n.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"function"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"updateClassInstance"}),l(n.span,{style:{color:"#ECEFF4"},children:"("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"current"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" Fiber"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" Fiber"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"ctor"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"any"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"newProps"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"any"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"renderLanes"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" Lanes"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"boolean"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"stateNode"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u5224\u65AD\u662F\u5426\u6709 getDerivedStateFromProps \u751F\u547D\u5468\u671F"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"hasNewLifecycles"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"typeof"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"getDerivedStateFromProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"==="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"function"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"!"}),l(n.span,{style:{color:"#D8DEE9"},children:"hasNewLifecycles"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"&&"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"typeof"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"componentWillReceiveProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"==="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"function"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  ) "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u6D45\u5C42\u6BD4\u8F83 props"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#D8DEE9"},children:"oldProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"!=="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"newProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"||"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"oldContext"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"!=="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"nextContext"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"      "}),l(n.span,{style:{color:"#616E88"},children:"// \u6267\u884C\u751F\u547D\u5468\u671F -- componentWillReceiveProps"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"componentWillReceiveProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"newProps"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"nextContext"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"let"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"newState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"state"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"oldState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u6267\u884C\u751F\u547D\u5468\u671F getDerivedStateFromProps  \uFF0C\u903B\u8F91\u548C mounted \u7C7B\u4F3C \uFF0C\u5408\u5E76 state"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#81A1C1"},children:"typeof"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"getDerivedStateFromProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"==="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"function"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"ctor"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"getDerivedStateFromProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"nextProps"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"prevState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"newState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"workInProgress"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"memoizedState"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"let"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"shouldUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"true"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u6267\u884C\u751F\u547D\u5468\u671F shouldComponentUpdate \u8FD4\u56DE\u503C\u51B3\u5B9A\u662F\u5426\u6267\u884C render \uFF0C\u8C03\u548C\u5B50\u8282\u70B9"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#81A1C1"},children:"typeof"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"shouldComponentUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"==="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"function"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"shouldUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"shouldComponentUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"newProps"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"newState"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"nextContext"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#D8DEE9"},children:"shouldUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u6267\u884C\u751F\u547D\u5468\u671F componentWillUpdate"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#81A1C1"},children:"typeof"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"componentWillUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"==="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"function"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"instance"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"componentWillUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"return"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"shouldUpdate"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:"\u6839\u636E\u6E90\u7801\u53EF\u4EE5\u5F97\u77E5\u66F4\u65B0\u9636\u6BB5\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u7684\u6267\u884C\u987A\u5E8F\u5982\u4E0B\uFF1A"}),`
`,e(n.ol,{children:[`
`,l(n.li,{children:"componentWillReceiveProps -- \u6CA1\u6709 getDerivedStateFromProps \u4E14 props \u53D1\u751F\u53D8\u5316\u65F6\u624D\u4F1A\u6267\u884C"}),`
`,l(n.li,{children:"getDerivedStateFromProps"}),`
`,l(n.li,{children:"shouldComponentUpdate"}),`
`,l(n.li,{children:"componentWillUpdate -- shouldComponentUpdate \u8FD4\u56DE true \u65F6\u624D\u6267\u884C"}),`
`,l(n.li,{children:"\u6267\u884C render \u51FD\u6570 -- shouldComponentUpdate \u8FD4\u56DE true \u65F6\u624D\u6267\u884C"}),`
`,l(n.li,{children:"\u8C03\u548C\u5B50\u8282\u70B9 -- shouldComponentUpdate \u8FD4\u56DE true \u65F6\u624D\u6267\u884C"}),`
`,e(n.li,{children:["getSnapshotBeforeUpdate -- \u53D1\u751F\u5728 commit \u9636\u6BB5\u7684 ",l(n.code,{children:"before Mutation"})," \u65F6\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u4FEE\u6539\u771F\u5B9E DOM \u5143\u7D20\u4E4B\u524D"]}),`
`,l(n.li,{children:"componentDidUpdate"}),`
`]}),`
`,l(n.p,{children:l(n.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%B1%BB%E7%BB%84%E4%BB%B6%E6%9B%B4%E6%96%B0%E6%B5%81%E7%A8%8B.awebp",alt:"\u7C7B\u7EC4\u4EF6\u66F4\u65B0\u6D41\u7A0B"})}),`
`,e(n.h3,{id:"14-\u7EC4\u4EF6\u9500\u6BC1",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#14-\u7EC4\u4EF6\u9500\u6BC1",children:"#"}),"1.4. \u7EC4\u4EF6\u9500\u6BC1"]}),`
`,e(n.p,{children:["\u4EC5\u6709\u4E00\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u5728 commit \u9636\u6BB5\u7684 ",l(n.code,{children:"before Mutation"})," \u65F6\u6267\u884C ",l(n.code,{children:"componentWillUnmount"})]}),`
`,e(n.h3,{id:"15-\u4E09\u4E2A\u9636\u6BB5\u603B\u89C8",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#15-\u4E09\u4E2A\u9636\u6BB5\u603B\u89C8",children:"#"}),"1.5. \u4E09\u4E2A\u9636\u6BB5\u603B\u89C8"]}),`
`,l(n.p,{children:l(n.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%B8%89%E4%B8%AA%E9%98%B6%E6%AE%B5%E6%80%BB%E8%A7%88.awebp",alt:"\u7C7B\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u4E09\u4E2A\u9636\u6BB5\u603B\u89C8"})}),`
`,e(n.h2,{id:"2-\u5404\u4E2A\u751F\u547D\u5468\u671F\u4E2D\u80FD\u505A\u7684\u4E8B\u60C5",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-\u5404\u4E2A\u751F\u547D\u5468\u671F\u4E2D\u80FD\u505A\u7684\u4E8B\u60C5",children:"#"}),"2. \u5404\u4E2A\u751F\u547D\u5468\u671F\u4E2D\u80FD\u505A\u7684\u4E8B\u60C5"]}),`
`,l(n.p,{children:"\u76EE\u524D\u6211\u4EEC\u77E5\u9053\u5404\u4E2A\u751F\u547D\u5468\u671F\u7684\u6267\u884C\u987A\u5E8F\u4E86\uFF0C\u4F46\u8FD8\u4E0D\u77E5\u9053\u5B9E\u9645\u4F7F\u7528\u7684\u65F6\u5019\u8BE5\u7528\u5B83\u4EEC\u6765\u5E72\u561B\uFF0C\u63A5\u4E0B\u6765\u5C31\u4E3E\u4E00\u4E9B\u4F8B\u5B50\u6765\u770B\u770B"}),`
`,e(n.h3,{id:"21-constructor",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#21-constructor",children:"#"}),"2.1. constructor"]}),`
`,l(n.p,{children:"\u5728\u7C7B\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u4E00\u822C\u53EF\u4EE5\u505A\u4EE5\u4E0B\u4E8B\u60C5\uFF1A"}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:[`
`,l(n.p,{children:"\u521D\u59CB\u5316\u7EC4\u4EF6 state"}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"\u5BF9\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u505A\u5904\u7406"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["\u7ED1\u5B9A this -- \u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5982\u679C\u662F\u76F4\u63A5\u4F20\u9012\u65F6\uFF0C\u5728\u4E8B\u4EF6\u7CFB\u7EDF\u4E2D\u88AB\u6267\u884C\u65F6\uFF0C\u662F\u76F4\u63A5\u8C03\u7528\u7684\uFF0C\u4F1A\u51FA\u73B0 this \u6CA1\u6307\u5411\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u60C5\u51B5\uFF0C\u6B64\u65F6\u53EF\u4EE5\u5728\u6784\u9020\u51FD\u6570\u4E2D\u7ED1\u5B9A this\uFF0C\u6216\u8005\u7528 ",l(n.code,{children:"onClick={() => this.handleClick()}"}),"\u7684\u65B9\u5F0F\u7ED1\u5B9A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570"]}),`
`]}),`
`]}),`
`,e(n.li,{children:[`
`,l(n.p,{children:"\u5BF9\u7C7B\u7EC4\u4EF6\u8FDB\u884C\u751F\u547D\u5468\u671F\u52AB\u6301\u3001\u6E32\u67D3\u52AB\u6301 -- \u5E38\u7528\u4E8E\u53CD\u5411\u7EE7\u627F\u7684 HOC"}),`
`]}),`
`]}),`
`,e(n.h3,{id:"22-getderivedstatefromprops",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#22-getderivedstatefromprops",children:"#"}),"2.2. getDerivedStateFromProps"]}),`
`,e(n.ol,{children:[`
`,e(n.li,{children:["\u7528\u4E8E\u66FF\u4EE3 ",l(n.code,{children:"componentWillReceiveProps"})," \u548C ",l(n.code,{children:"componentWillMount"})]}),`
`,l(n.li,{children:"\u7EC4\u4EF6\u521D\u59CB\u5316\u6216\u66F4\u65B0\u65F6\u5C06 props \u6620\u5C04\u5230 state"}),`
`,e(n.li,{children:["\u8FD4\u56DE\u503C\u4E0E state \u5408\u5E76\u540E\u53EF\u4EE5\u4F5C\u4E3A ",l(n.code,{children:"shouldComponentUpdate"})," \u751F\u547D\u5468\u671F\u94A9\u5B50\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570 ",l(n.code,{children:"newState"})]}),`
`]}),`
`,e(n.h3,{id:"23-componentwillmount",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#23-componentwillmount",children:"#"}),"2.3. componentWillMount"]}),`
`,l(n.p,{children:"\u9002\u5408\u505A\u4E00\u4E9B\u521D\u59CB\u5316\u5DE5\u4F5C"}),`
`,e(n.h3,{id:"24-componentwillreceiveprops",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#24-componentwillreceiveprops",children:"#"}),"2.4. componentWillReceiveProps"]}),`
`,e(n.ol,{children:[`
`,l(n.li,{children:"\u76D1\u542C\u7236\u7EC4\u4EF6\u662F\u5426\u6267\u884C render (\u4E0D\u5B89\u5168\u6027\u7684\u4F53\u73B0)"}),`
`,l(n.li,{children:"\u5728\u5F02\u6B65\u56DE\u8C03\u4E2D\u6539\u53D8 state"}),`
`]}),`
`,e(n.h3,{id:"25-componentwillupdate",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#25-componentwillupdate",children:"#"}),"2.5. componentWillUpdate"]}),`
`,l(n.p,{children:"\u83B7\u53D6\u7EC4\u4EF6\u66F4\u65B0\u4E4B\u524D\u7684\u72B6\u6001\uFF0C\u6BD4\u5982 DOM \u5143\u7D20\u7684\u4F4D\u7F6E"}),`
`,e(n.h3,{id:"26-render",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#26-render",children:"#"}),"2.6. render"]}),`
`,l(n.p,{children:"render \u51FD\u6570\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u5C06 jsx \u5143\u7D20\u8F6C\u6362\u6210 React element\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5728 render \u51FD\u6570\u91CC\u505A\u4EE5\u4E0B\u4E8B\u60C5\uFF1A"}),`
`,e(n.ol,{children:[`
`,l(n.li,{children:"createElement"}),`
`,l(n.li,{children:"cloneElement"}),`
`,l(n.li,{children:"\u904D\u5386 children"}),`
`]}),`
`,e(n.h3,{id:"27-getsnapshotbeforeupdate",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#27-getsnapshotbeforeupdate",children:"#"}),"2.7. getSnapshotBeforeUpdate"]}),`
`,l(n.p,{children:"\u914D\u5408 componentDidUpdate \u4E00\u8D77\u4F7F\u7528\uFF0C\u5728\u66F4\u65B0 DOM \u5143\u7D20\u4E4B\u524D\u83B7\u53D6 DOM \u5143\u7D20\u7684\u5FEB\u7167\uFF0C\u5C06\u8FD9\u4E2A\u5FEB\u7167 return \u540E\u4F1A\u4F20\u7ED9 componentDidUpdate \u7684\u7B2C\u4E09\u4E2A\u53C2\u6570"}),`
`,e(n.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#88C0D0"},children:"getSnapshotBeforeUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"prevProps"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9"},children:"preState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"style"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"getComputedStyle"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"node"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u4F20\u9012\u66F4\u65B0\u524D\u7684\u5143\u7D20\u4F4D\u7F6E"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"return"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#88C0D0"},children:"cx"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9"},children:"style"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"cx"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#88C0D0"},children:"cy"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9"},children:"style"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"cy"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#88C0D0"},children:"componentDidUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"prevProps"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"prevState"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"snapshot"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u83B7\u53D6\u5143\u7D20\u7ED8\u5236\u4E4B\u524D\u7684\u4F4D\u7F6E"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"console"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"log"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"snapshot"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"})]})})]}),`
`,e(n.div,{className:"island-directive warning",children:[l(n.p,{className:"island-directive-title",children:"WARNING"}),e(n.div,{className:"island-directive-content",children:[l(n.p,{children:"\u5982\u679C\u6CA1\u6709\u8FD4\u56DE\u503C\u4F5C\u4E3A snapshot \u4F1A\u6709\u63A7\u5236\u53F0\u8B66\u544A\u4FE1\u606F"}),l(n.p,{children:"\u5982\u679C\u6CA1\u6709 componentDidUpdate \u4E5F\u4F1A\u6709\u63A7\u5236\u53F0\u8B66\u544A\u4FE1\u606F"})]})]}),`
`,e(n.h3,{id:"28-componentdidupdate",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#28-componentdidupdate",children:"#"}),"2.8. componentDidUpdate"]}),`
`,e(n.ol,{children:[`
`,l(n.li,{children:"\u83B7\u53D6\u7EC4\u4EF6\u66F4\u65B0\u540E\u7684 DOM \u5143\u7D20"}),`
`,l(n.li,{children:"\u6D88\u8D39 getSnapshotBeforeUpdate \u8FD4\u56DE\u7684 snapshot"}),`
`]}),`
`,e(n.div,{className:"island-directive warning",children:[l(n.p,{className:"island-directive-title",children:"WARNING"}),l(n.div,{className:"island-directive-content",children:l(n.p,{children:"\u5982\u679C\u5728\u8FD9\u91CC\u9762\u4F7F\u7528 setState \u4E00\u5B9A\u8981\u52A0\u4EE5\u9650\u5236\uFF0C\u5426\u5219\u4F1A\u5F15\u8D77\u65E0\u9650\u5FAA\u73AF"})})]}),`
`,e(n.h3,{id:"29-componentdidmount",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#29-componentdidmount",children:"#"}),"2.9. componentDidMount"]}),`
`,e(n.ol,{children:[`
`,l(n.li,{children:"\u505A\u4E00\u4E9B\u5173\u4E8E DOM \u7684\u64CD\u4F5C\uFF0C\u5982\u57FA\u4E8E DOM \u7684\u4E8B\u4EF6\u76D1\u542C\u5668"}),`
`,l(n.li,{children:"\u521D\u59CB\u5316\u53D1\u8D77\u5F02\u6B65\u8BF7\u6C42\u6570\u636E\uFF0C\u6E32\u67D3\u89C6\u56FE"}),`
`]}),`
`,e(n.h3,{id:"210-shouldcomponentupdate",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#210-shouldcomponentupdate",children:"#"}),"2.10. shouldComponentUpdate"]}),`
`,e(n.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#88C0D0"},children:"shouldComponentUpdate"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"newProps"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9"},children:"newState"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9"},children:"nextContext"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{}"})]}),`
`,l(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:"\u5E38\u7528\u4E8E\u6027\u80FD\u4F18\u5316\uFF0C\u5176\u8FD4\u56DE\u503C\u51B3\u5B9A\u7740\u7EC4\u4EF6\u662F\u5426\u9700\u8981\u66F4\u65B0"}),`
`,e(n.div,{className:"island-directive tip",children:[l(n.p,{className:"island-directive-title",children:"TIP"}),l(n.div,{className:"island-directive-content",children:l(n.p,{children:"newState \u53EF\u4EE5\u6765\u81EA\u4E8E getDerivedStateFromProps \u751F\u547D\u5468\u671F\u7684\u8FD4\u56DE\u503C\u4E0E\u73B0\u6709 state \u5408\u5E76\u540E\u7684\u7ED3\u679C"})})]}),`
`,e(n.h3,{id:"211-componentwillunmount",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#211-componentwillunmount",children:"#"}),"2.11. componentWillUnmount"]}),`
`,l(n.p,{children:"\u505A\u4E00\u4E9B\u6536\u5C3E\u5DE5\u4F5C\uFF0C\u5982\u6E05\u9664\u5B9A\u65F6\u5668\uFF0C\u79FB\u9664 DOM \u5143\u7D20\u4E8B\u4EF6\u76D1\u542C\u5668"}),`
`,e(n.h2,{id:"3-unsafe-\u751F\u547D\u5468\u671F\u4E3A\u4EC0\u4E48-unsafe",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-unsafe-\u751F\u547D\u5468\u671F\u4E3A\u4EC0\u4E48-unsafe",children:"#"}),"3. UNSAFE \u751F\u547D\u5468\u671F\u4E3A\u4EC0\u4E48 UNSAFE"]}),`
`,l(n.p,{children:"\u4ECE React v16.3 \u5F00\u59CB\uFF0CcomponentWillMount \u88AB\u6807\u8BC6\u4E3A UNSAFE\uFF0C\u4E5F\u5C31\u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u4E3B\u8981\u662F\u4EE5\u4E0B\u4E09\u4E2A\uFF1A"}),`
`,e(n.ul,{children:[`
`,l(n.li,{children:"UNSAFE_componentWillMount"}),`
`,l(n.li,{children:"UNSAFE_componentWillReceiveProps"}),`
`,l(n.li,{children:"UNSAFE_componentWillUpdate"}),`
`]}),`
`,l(n.p,{children:"\u63A5\u4E0B\u6765\u6211\u4EEC\u770B\u770B\u5B83\u4EEC\u4E3A\u4EC0\u4E48\u4E0D\u5B89\u5168"}),`
`,e(n.h3,{id:"-31-unsafe_componentwillmount",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#-31-unsafe_componentwillmount",children:"#"}),"* 3.1. UNSAFE_componentWillMount"]}),`
`,l(n.p,{children:"\u5B83\u662F\u5728 render \u4E4B\u524D\u6267\u884C\u7684\uFF0C\u5BF9\u4E8E\u662F\u5426\u6267\u884C render \u53EF\u4EE5\u901A\u8FC7 shouldUpdate \u53BB\u5236\u7EA6\uFF0C\u4F46\u662F\u5BF9\u4E8E componentWillMount \u8FD9\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u5728\u591A\u6B21\u89E6\u53D1 updateClassInstance \u65F6\uFF0C\u5E76\u6CA1\u6709\u6761\u4EF6\u9650\u5236\uFF0C\u56E0\u6B64\u5B58\u5728\u751F\u547D\u5468\u671F\u5185\u7684\u4E0A\u4E0B\u6587\u88AB\u591A\u6B21\u6267\u884C\u7684\u98CE\u9669"}),`
`,e(n.h3,{id:"32-unsafe_componentwillreceiveprops",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#32-unsafe_componentwillreceiveprops",children:"#"}),"3.2. UNSAFE_componentWillReceiveProps"]}),`
`,l(n.p,{children:"\u5F53\u65B0\u65E7 props \u53D8\u5316\u65F6\u4F1A\u6267\u884C componentWillReceiveProps\uFF0C\u4F46\u662F\u7236\u7EC4\u4EF6\u7684 render \u51FD\u6570\u6267\u884C\u65F6\uFF0C\u5373\u4FBF\u5B50\u7EC4\u4EF6 props \u672A\u6539\u53D8\uFF0C\u4E5F\u4F1A\u5BFC\u81F4 componentWillReceiveProps \u751F\u547D\u5468\u671F\u6267\u884C"}),`
`,l(n.p,{children:"\u8FD9\u662F\u56E0\u4E3A\u5BF9\u4E8E\u65B0\u65E7 props \u7684\u6BD4\u8F83\u4EC5\u4EC5\u662F\u6BD4\u8F83\u5185\u5B58\u5730\u5740\u662F\u5426\u53D1\u751F\u53D8\u5316\uFF0C\u800C\u7236\u7EC4\u4EF6 render \u51FD\u6570\u6267\u884C\u65F6\uFF0C\u5B50\u7EC4\u4EF6 props \u91CD\u65B0\u521B\u5EFA\uFF0C\u5373\u4FBF\u5BF9\u8C61\u7684\u5C5E\u6027\u6CA1\u53D1\u751F\u53D8\u5316\uFF0C\u4F46\u5DF2\u7ECF\u662F\u53E6\u5916\u4E00\u4E2A\u5BF9\u8C61\u4E86\uFF0C\u4ECE\u800C\u5BFC\u81F4 componentWillReceiveProps \u6267\u884C"}),`
`,e(n.h3,{id:"33-unsafe_componentwillupdate",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#33-unsafe_componentwillupdate",children:"#"}),"3.3. UNSAFE_componentWillUpdate"]}),`
`,e(n.p,{children:["\u63A8\u8350\u4F7F\u7528 ",l(n.code,{children:"getSnapshotBeforeUpdate"})," \u751F\u547D\u5468\u671F\u66FF\u4EE3"]}),`
`,e(n.h2,{id:"4-\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684\u58F0\u660E\u5468\u671F\u66FF\u4EE3\u65B9\u6848",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4-\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684\u58F0\u660E\u5468\u671F\u66FF\u4EE3\u65B9\u6848",children:"#"}),"4. \u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684\u58F0\u660E\u5468\u671F\u66FF\u4EE3\u65B9\u6848"]}),`
`,l(n.p,{children:"\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4E0D\u5B58\u5728\u7C7B\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\uFF0C\u4F46\u53EF\u4EE5\u901A\u8FC7 hooks \u53BB\u66FF\u4EE3\u5B9E\u73B0\uFF0C\u9996\u5148\u770B\u770B\u76F8\u5173 hooks \u7684\u7279\u6027\u65B9\u4FBF\u7406\u89E3\u5982\u4F55\u66FF\u4EE3\u7C7B\u7EC4\u4EF6\u751F\u547D\u5468\u671F"}),`
`,e(n.h3,{id:"41-useeffect--uselayouteffect",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#41-useeffect--uselayouteffect",children:"#"}),"4.1. useEffect & useLayoutEffect"]}),`
`,e(n.h4,{id:"411-useeffect",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#411-useeffect",children:"#"}),"4.1.1. useEffect"]}),`
`,l(n.p,{children:"useEffect \u662F\u5F02\u6B65\u6267\u884C\u7684\uFF0C\u4E0D\u4F1A\u963B\u585E\u6D4F\u89C8\u5668\u6E32\u67D3"}),`
`,e(n.h4,{id:"412-uselayouteffect",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#412-uselayouteffect",children:"#"}),"4.1.2. useLayoutEffect"]}),`
`,l(n.p,{children:"useLayoutEffect \u662F\u540C\u6B65\u6267\u884C\u7684\uFF0C\u5728 DOM \u66F4\u65B0\u4E4B\u540E\uFF0C\u6D4F\u89C8\u5668\u6E32\u67D3\u7ED8\u5236\u4E4B\u524D\u6267\u884C\uFF0C\u5982\u679C\u6267\u884C\u7684\u4EFB\u52A1\u6BD4\u8F83\u8017\u65F6\u5219\u6709\u53EF\u80FD\u963B\u585E\u6D4F\u89C8\u5668\u6E32\u67D3"}),`
`,e(n.h4,{id:"413-\u5982\u4F55\u9009\u62E9-useeffect-\u548C-uselayouteffect",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#413-\u5982\u4F55\u9009\u62E9-useeffect-\u548C-uselayouteffect",children:"#"}),"4.1.3. \u5982\u4F55\u9009\u62E9 useEffect \u548C useLayoutEffect"]}),`
`,l(n.p,{children:"\u9700\u8981\u4FEE\u6539 DOM\uFF0C\u6539\u53D8\u9875\u9762\u5E03\u5C40\u5C31\u4F7F\u7528 useLayoutEffect\uFF0C\u5426\u5219\u90FD\u4F7F\u7528 useEffect"}),`
`,e(n.h4,{id:"414-\u548C-componentdidmountcomponentdidupdate-\u6709\u5565\u533A\u522B",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#414-\u548C-componentdidmountcomponentdidupdate-\u6709\u5565\u533A\u522B",children:"#"}),"4.1.4. \u548C componentDidMount/componentDidUpdate \u6709\u5565\u533A\u522B\uFF1F"]}),`
`,e(n.p,{children:[l(n.code,{children:"componentDidMount/componentDidUpdate"})," \u90FD\u662F\u540C\u6B65\u6267\u884C\u7684\uFF0C\u548C useLayoutEffect \u66F4\u52A0\u76F8\u4F3C"]}),`
`,e(n.h3,{id:"42-useinsertioneffect",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#42-useinsertioneffect",children:"#"}),"4.2. useInsertionEffect"]}),`
`,e(n.p,{children:["\u4E3B\u8981\u7528\u4E8E ",l(n.code,{children:"CSS in JS"})," \u7684\u573A\u666F\u4E0B\uFF0C\u5176\u4ED6\u573A\u666F\u4E0B\u5B98\u65B9\u4E0D\u63A8\u8350\u4F7F\u7528\u8BE5 hook\uFF0C\u90A3\u4E48\u4E3A\u4EC0\u4E48\u5B83\u9002\u7528\u4E8E CSS in JS \u573A\u666F\u5462\uFF1F"]}),`
`,e(n.p,{children:["\u9996\u5148\u9700\u8981\u4E86\u89E3\u4EE5\u4E0B CSS in JS \u7684\u7279\u6027\uFF0C\u4EE5 ",l(n.a,{href:"https://styled-components.com/",target:"_blank",rel:"nofollow",children:"styled-components"})," \u4E3A\u4F8B"]}),`
`,l(n.p,{children:"\u6837\u5F0F\u5747\u901A\u8FC7\u8BE5\u5E93\u63D0\u4F9B\u7684\u8FD0\u884C\u65F6 api \u5B9A\u4E49\uFF0C\u5E76\u5728\u6267\u884C\u5230\u76F8\u5173\u4EE3\u7801\u65F6\uFF0C\u4F1A\u52A8\u6001\u751F\u6210 style \u6807\u7B7E\u63D2\u5165\u5230 head \u6807\u7B7E\u4E2D\uFF0C\u4F7F\u6837\u5F0F\u751F\u6548"}),`
`,e(n.p,{children:["\u90A3\u4E48\u8FD9\u5C31\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u5982\u679C\u5728 ",l(n.code,{children:"useLayoutEffect"})," \u4E2D\u4F7F\u7528 CSS in JS \u7684\u4EE3\u7801\u7684\u8BDD\uFF0C\u6B64\u65F6 DOM \u662F\u5DF2\u7ECF\u66F4\u65B0\u4E86\u7684\uFF0C\u5E03\u5C40\u4E5F\u786E\u8BA4\u4E86\uFF0C\u53EA\u9700\u8981\u8BA9\u6D4F\u89C8\u5668\u7ED8\u5236\u5373\u53EF"]}),`
`,l(n.p,{children:"\u7136\u800C\u6B64\u65F6\u6267\u884C\u4E86 CSS in JS \u7684\u4EE3\u7801\uFF0C\u52A8\u6001\u5F80 head \u4E2D\u63D2\u5165\u4E86 style \u6807\u7B7E\uFF0C\u5BFC\u81F4\u6D4F\u89C8\u5668\u4E0D\u5F97\u4E0D\u91CD\u7ED8\u751A\u81F3\u91CD\u6392\u5E03\u5C40"}),`
`,e(n.p,{children:["\u6240\u4EE5\u6700\u4F73\u7684\u6267\u884C CSS in JS \u4EE3\u7801\u7684\u65F6\u673A\u5E94\u5F53\u662F DOM \u53D8\u5316\u4E4B\u524D\u5C31\u6267\u884C\uFF0C\u4ECE\u800C ",l(n.code,{children:"useInsertionEffect"})," \u5C31\u8BDE\u751F\u4E86\uFF0C\u5B83\u7684\u6267\u884C\u65F6\u673A\u5728 DOM \u66F4\u65B0\u4E4B\u524D\uFF0C\u6BD4 useLayoutEffect \u8981\u66F4\u65E9"]}),`
`,e(n.h3,{id:"43-componentdidmount-\u66FF\u4EE3\u65B9\u6848",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#43-componentdidmount-\u66FF\u4EE3\u65B9\u6848",children:"#"}),"4.3. componentDidMount \u66FF\u4EE3\u65B9\u6848"]}),`
`,e(n.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#88C0D0"},children:"useEffect"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u5F02\u6B65\u8BF7\u6C42\u3001\u4E8B\u4EF6\u76D1\u542C\u3001\u64CD\u4F5C DOM..."})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"},"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" [])"})]}),`
`,l(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:"\u5229\u7528 useEffect \u7B2C\u4E8C\u4E2A\u53C2\u6570 dep \u6570\u7EC4\u4E3A\u7A7A\u7684\u7279\u6027\uFF0C\u5F53 dep \u4E3A\u7A7A\u6570\u7EC4\u65F6\uFF0CuseEffect \u7684\u56DE\u8C03\u53EA\u4F1A\u6267\u884C\u4E00\u6B21"}),`
`,e(n.h3,{id:"44-componentwillunmount-\u66FF\u4EE3\u65B9\u6848",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#44-componentwillunmount-\u66FF\u4EE3\u65B9\u6848",children:"#"}),"4.4. componentWillUnmount \u66FF\u4EE3\u65B9\u6848"]}),`
`,e(n.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#88C0D0"},children:"useEffect"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"return"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u79FB\u9664\u4E8B\u4EF6\u76D1\u542C\u5668\u3001\u79FB\u9664\u5B9A\u65F6\u5668\u7B49"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"},"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" [])"})]}),`
`,l(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:"\u5229\u7528 useEffect \u56DE\u8C03\u4E2D\u8FD4\u56DE\u7684\u51FD\u6570\u4F1A\u5728\u7EC4\u4EF6\u9500\u6BC1\u524D\u6267\u884C\u7684\u7279\u6027\u6A21\u62DF componentWillUnmount"}),`
`,l(n.p,{children:"\u540C\u6837\uFF0C\u8981\u8BA9 dep \u6570\u7EC4\u4E3A\u7A7A\u6570\u7EC4\u624D\u80FD\u8BA9\u5176\u53EA\u6267\u884C\u4E00\u6B21"}),`
`,e(n.h3,{id:"45-componentwillreceiveprops-\u66FF\u4EE3\u65B9\u6848",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#45-componentwillreceiveprops-\u66FF\u4EE3\u65B9\u6848",children:"#"}),"4.5. componentWillReceiveProps \u66FF\u4EE3\u65B9\u6848"]}),`
`,l(n.p,{children:"\u4E25\u683C\u6765\u8BF4\uFF0C\u8BF4 useEffect \u53EF\u4EE5\u66FF\u4EE3 componentWillReceiveProps \u8FD8\u662F\u6BD4\u8F83\u7275\u5F3A\u7684\uFF0C\u7406\u7531\u5982\u4E0B\uFF1A"}),`
`,e(n.ol,{children:[`
`,l(n.li,{children:"useEffect \u53D1\u751F\u5728 commit \u9636\u6BB5\uFF0C\u800C componentWillReceiveProps \u5219\u53D1\u751F\u5728 render \u9636\u6BB5"}),`
`,l(n.li,{children:"useEffect \u4F1A\u5728\u521D\u59CB\u5316\u65F6\u6267\u884C\u4E00\u6B21\uFF0C\u800C componentWillReceiveProps \u5E76\u4E0D\u4F1A"}),`
`]}),`
`,l(n.p,{children:"\u6240\u4EE5\u4E0D\u80FD\u8BF4\u4E25\u683C\u66FF\u4EE3\uFF0C\u4F46\u662F\u7531\u4E8E useEffect \u7684 dep \u6570\u7EC4\u53EF\u4EE5\u8D77\u5230\u4E00\u4E2A\u76D1\u542C\u7684\u4F5C\u7528\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u5B83\u6765\u76D1\u542C props \u6216 props \u4E2D\u5177\u4F53\u67D0\u4E2A\u5C5E\u6027\u7684\u53D8\u5316\uFF0C\u56E0\u800C\u4ECE\u529F\u80FD\u4F5C\u7528\u4E0A\u6765\u770B\u786E\u5B9E\u662F\u53EF\u4EE5\u66FF\u4EE3 componentWillReceiveProps\uFF0C\u4F46\u4ECE\u5E95\u5C42\u539F\u7406\u6765\u770B\u5E76\u4E0D\u80FD\u7B97\u662F\u66FF\u4EE3"}),`
`,e(n.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#88C0D0"},children:"useEffect"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"console"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"log"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"`"}),l(n.span,{style:{color:"#A3BE8C"},children:"props changed: "}),l(n.span,{style:{color:"#81A1C1"},children:"${"}),l(n.span,{style:{color:"#D8DEE9"},children:"props"}),l(n.span,{style:{color:"#81A1C1"},children:"}"}),l(n.span,{style:{color:"#ECEFF4"},children:"`"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"},"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ["}),l(n.span,{style:{color:"#D8DEE9"},children:"props"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"])"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#88C0D0"},children:"useEffect"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"console"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"log"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"`"}),l(n.span,{style:{color:"#A3BE8C"},children:"props.counter changed: "}),l(n.span,{style:{color:"#81A1C1"},children:"${"}),l(n.span,{style:{color:"#D8DEE9"},children:"props"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"counter"}),l(n.span,{style:{color:"#81A1C1"},children:"}"}),l(n.span,{style:{color:"#ECEFF4"},children:"`"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"},"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ["}),l(n.span,{style:{color:"#D8DEE9"},children:"props"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"counter"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"])"})]}),`
`,l(n.span,{className:"line"})]})})]}),`
`,e(n.h3,{id:"46-componentdidupdate-\u66FF\u4EE3\u65B9\u6848",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#46-componentdidupdate-\u66FF\u4EE3\u65B9\u6848",children:"#"}),"4.6. componentDidUpdate \u66FF\u4EE3\u65B9\u6848"]}),`
`,l(n.p,{children:"\u4E0E\u66FF\u4EE3 componentWillReceiveProps \u7C7B\u4F3C\uFF0C\u53EA\u80FD\u8BF4 useEffect \u5728\u529F\u80FD\u4F5C\u7528\u4E0A\u662F\u53EF\u4EE5\u66FF\u4EE3 componentDidUpdate\uFF0C\u4F46\u662F\u5728\u5E95\u5C42\u539F\u7406\u4E0A\u4E0D\u7B97\u662F\u4E25\u683C\u66FF\u4EE3 componentDidUpdate"}),`
`,l(n.p,{children:"\u56E0\u4E3A componentDidUpdate \u662F\u540C\u6B65\u6267\u884C\u7684\uFF0C\u800C useEffect \u662F\u5F02\u6B65\u6267\u884C\u7684\uFF0C\u4F46\u5B83\u4EEC\u7684\u6267\u884C\u65F6\u673A\u90FD\u662F\u5728 commit \u9636\u6BB5"}),`
`,l(n.p,{children:"\u53EA\u9700\u8981\u4E0D\u4F20\u9012 useEffect \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5373\u53EF\u5728\u6BCF\u6B21\u51FD\u6570\u7EC4\u4EF6\u6267\u884C\u65F6\u6267\u884C useEffect \u91CC\u7684\u56DE\u8C03"}),`
`,e(n.div,{className:"language-js",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"js"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#88C0D0"},children:"useEffect"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"console"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"log"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"\u6A21\u62DF componentDidUpdate"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"}"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line"})]})})]}),`
`,e(n.h3,{id:"47-\u51FD\u6570\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6848\u4F8B",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#47-\u51FD\u6570\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6848\u4F8B",children:"#"}),"4.7. \u51FD\u6570\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6848\u4F8B"]}),`
`,l(n.p,{children:"\u63A5\u4E0B\u6765\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684 demo \u6A21\u62DF\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u7684\u5404\u4E2A\u9636\u6BB5"}),`
`,e(n.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"tsx"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"FunctionComponentLifeCycleDemo"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"React"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#8FBCBB"},children:"FC"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u63A7\u5236\u7EC4\u4EF6\u662F\u5426\u6302\u8F7D\u548C\u5378\u8F7D"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"["}),l(n.span,{style:{color:"#D8DEE9"},children:"shouldRender"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"setShouldRender"}),l(n.span,{style:{color:"#ECEFF4"},children:"]"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"useState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#81A1C1"},children:"true"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u4F5C\u4E3A\u5B50\u7EC4\u4EF6 props"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"["}),l(n.span,{style:{color:"#D8DEE9"},children:"counter"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"setCounter"}),l(n.span,{style:{color:"#ECEFF4"},children:"]"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"useState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#B48EAD"},children:"0"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"return"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:"{"}),l(n.span,{style:{color:"#D8DEE9"},children:"shouldRender"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"&&"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"<"}),l(n.span,{style:{color:"#8FBCBB"},children:"FunctionComponentLifeCycle"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"counter"}),l(n.span,{style:{color:"#81A1C1"},children:"={"}),l(n.span,{style:{color:"#D8DEE9"},children:"counter"}),l(n.span,{style:{color:"#81A1C1"},children:"}"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"/>}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:"<button"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"onClick"}),l(n.span,{style:{color:"#81A1C1"},children:"={"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"setCounter"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"counter"}),l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"counter"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"+"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#B48EAD"},children:"1"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"}),l(n.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#D8DEE9FF"},children:"        add counter"})}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:"<button"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"onClick"}),l(n.span,{style:{color:"#81A1C1"},children:"={"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"setShouldRender"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#81A1C1"},children:"false"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"}),l(n.span,{style:{color:"#81A1C1"},children:"}>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"\u5378\u8F7D\u9500\u6BC1\u7EC4\u4EF6"}),l(n.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"interface"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"FunctionComponentLifeCycleProps"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  counter"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"FunctionComponentLifeCycle"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"React"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#8FBCBB"},children:"FC"}),l(n.span,{style:{color:"#ECEFF4"},children:"<"}),l(n.span,{style:{color:"#8FBCBB"},children:"FunctionComponentLifeCycleProps"}),l(n.span,{style:{color:"#ECEFF4"},children:">"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#D8DEE9"},children:"props"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"["}),l(n.span,{style:{color:"#D8DEE9"},children:"stateCounter"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"setStateCounter"}),l(n.span,{style:{color:"#ECEFF4"},children:"]"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"useState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#B48EAD"},children:"0"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u6A21\u62DF\u7C7B\u7EC4\u4EF6 componentDidMount \u548C componentWillUnmount \u751F\u547D\u5468\u671F"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#88C0D0"},children:"useEffect"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"logger"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"log"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210 -- componentDidMount"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"return"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"logger"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"log"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"\u7EC4\u4EF6\u5373\u5C06\u5378\u8F7D\u9500\u6BC1 -- componentWillUnmount"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u6CE8\u610F\u8981\u5C06 deps \u8BBE\u7F6E\u4E3A\u7A7A\u6570\u7EC4"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"},"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" [])"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u6A21\u62DF\u7C7B\u7EC4\u4EF6 componentWillReceiveProps \u751F\u547D\u5468\u671F"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#88C0D0"},children:"useEffect"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"logger"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"log"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"props \u53D8\u5316 -- componentWillReceiveProps"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"},"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ["}),l(n.span,{style:{color:"#D8DEE9"},children:"props"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"])"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u6A21\u62DF\u7C7B\u7EC4\u4EF6 componentDidUpdate \u751F\u547D\u5468\u671F"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#88C0D0"},children:"useEffect"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"logger"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"log"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"\u7EC4\u4EF6\u66F4\u65B0\u5B8C\u6210 -- componentDidUpdate"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"return"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:"<p>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"props.counter: "}),l(n.span,{style:{color:"#81A1C1"},children:"{"}),l(n.span,{style:{color:"#D8DEE9"},children:"props"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"counter"}),l(n.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:"<p>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"stateCounter: "}),l(n.span,{style:{color:"#81A1C1"},children:"{"}),l(n.span,{style:{color:"#D8DEE9"},children:"stateCounter"}),l(n.span,{style:{color:"#81A1C1"},children:"}</p>"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:"<button"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(n.span,{style:{color:"#8FBCBB"},children:"onClick"}),l(n.span,{style:{color:"#81A1C1"},children:"={"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"setStateCounter"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"stateCounter"}),l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"stateCounter"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"+"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#B48EAD"},children:"1"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"}),l(n.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#D8DEE9FF"},children:"        add stateCounter"})}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"})]})})]}),`
`,l(F,{children:l(g,{})}),`
`,l(n.p,{children:l(n.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9Fdemo.jpg",alt:"\u51FD\u6570\u7EC4\u4EF6\u751F\u547D\u5468\u671Fdemo"})}),`
`,e(n.h2,{id:"5-\u751F\u547D\u5468\u671F\u5B9E\u6218----scrollview-\u7EC4\u4EF6",children:[l(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5-\u751F\u547D\u5468\u671F\u5B9E\u6218----scrollview-\u7EC4\u4EF6",children:"#"}),"5. \u751F\u547D\u5468\u671F\u5B9E\u6218 -- ScrollView \u7EC4\u4EF6"]}),`
`,e(n.p,{children:[l(n.code,{children:"ScrollView"})," \u662F\u4E00\u4E2A\u6EDA\u52A8\u5217\u8868\u7EC4\u4EF6\uFF0C\u652F\u6301\u4F20\u5165\u6570\u636E\u4EE5\u53CA\u5355\u5143\u9879\u7EC4\u4EF6\uFF0C\u5E76\u63D0\u4F9B\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u7684\u56DE\u8C03\uFF0C\u4F7F\u7528\u6548\u679C\u5982\u4E0B\uFF1A"]}),`
`,e(n.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"tsx"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"<"}),l(n.span,{style:{color:"#8FBCBB"},children:"ScrollView"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#8FBCBB"},children:"list"}),l(n.span,{style:{color:"#81A1C1"},children:"={"}),l(n.span,{style:{color:"#D8DEE9"},children:"list"}),l(n.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#8FBCBB"},children:"component"}),l(n.span,{style:{color:"#81A1C1"},children:"={"}),l(n.span,{style:{color:"#D8DEE9"},children:"Item"}),l(n.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#8FBCBB"},children:"onScrollToBottom"}),l(n.span,{style:{color:"#81A1C1"},children:"={"}),l(n.span,{style:{color:"#D8DEE9"},children:"handleScrollToBottom"}),l(n.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#81A1C1"},children:"/>"})}),`
`,l(n.span,{className:"line"})]})})]}),`
`,l(n.p,{children:"\u5B9E\u73B0\u5982\u4E0B\uFF1A"}),`
`,e(n.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[l(n.button,{className:"copy"}),l(n.span,{className:"lang",children:"tsx"}),l(n.pre,{children:e(n.code,{className:"",children:[e(n.span,{className:"line",children:[l(n.span,{style:{color:"#81A1C1"},children:"class"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"ScrollView"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"extends"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"React"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),l(n.span,{style:{color:"#ECEFF4"},children:"<"}),l(n.span,{style:{color:"#8FBCBB"},children:"ScrollViewProps"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"ScrollViewState"}),l(n.span,{style:{color:"#ECEFF4"},children:">"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// ================ \u5C5E\u6027 ================"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// \u6839 DOM \u5143\u7D20\u7ED3\u70B9\u7684\u5F15\u7528"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  rootEl"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"HTMLElement"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"|"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"null"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"null"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// ================ \u4E8B\u4EF6\u5904\u7406\u65B9\u6CD5 ================"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#88C0D0"},children:"handleScroll"}),l(n.span,{style:{color:"#ECEFF4"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"e"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"Event"}),l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// emit scroll \u4E8B\u4EF6\u7ED9\u5916\u754C"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" onScroll"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"emitScroll"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{}"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"emitScroll"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"&&"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"emitScroll"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"e"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u68C0\u6D4B\u6EDA\u52A8\u6761\u662F\u5426\u89E6\u5E95"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"checkScrollToBottom"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// ================ \u666E\u901A\u65B9\u6CD5 ================"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"/** "}),l(n.span,{style:{color:"#ECEFF4"},children:"@"}),l(n.span,{style:{color:"#81A1C1"},children:"description"}),l(n.span,{style:{color:"#616E88"},children:" \u68C0\u6D4B\u6EDA\u52A8\u6761\u662F\u5426\u89E6\u5E95 -- \u89E6\u5E95\u5219 emit scroll-to-bottom \u4E8B\u4EF6 */"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#88C0D0"},children:"checkScrollToBottom"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" onScrollToBottom"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"emitScrollToBottom"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"scrollHeight"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"scrollTop"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"offsetHeight"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"rootEl"}),l(n.span,{style:{color:"#81A1C1"},children:"!"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u89E6\u5E95\u6761\u4EF6"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#D8DEE9"},children:"scrollHeight"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"<="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"scrollTop"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"+"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"offsetHeight"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"emitScrollToBottom"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"&&"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"emitScrollToBottom"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"// ================ \u751F\u547D\u5468\u671F ================"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"constructor"}),l(n.span,{style:{color:"#ECEFF4"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"props"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"ScrollViewProps"}),l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"super"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"props"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// \u521D\u59CB\u5316 state"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"state"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"list"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" []"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#ECEFF4"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"// handleScroll \u65B9\u6CD5\u9632\u6296\u5904\u7406"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"handleScroll"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"handleScroll"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"bind"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"handleScroll"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"debounce"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"handleScroll"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#B48EAD"},children:"200"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"/** "}),l(n.span,{style:{color:"#ECEFF4"},children:"@"}),l(n.span,{style:{color:"#81A1C1"},children:"description"}),l(n.span,{style:{color:"#616E88"},children:" \u6839\u636E props \u6D3E\u751F state */"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#81A1C1"},children:"static"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#88C0D0"},children:"getDerivedStateFromProps"}),l(n.span,{style:{color:"#ECEFF4"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"nextProps"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"ScrollViewProps"}),l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"ScrollViewState"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"return"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"list"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"nextProps"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"list"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"??"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" []"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"/** "}),l(n.span,{style:{color:"#ECEFF4"},children:"@"}),l(n.span,{style:{color:"#81A1C1"},children:"description"}),l(n.span,{style:{color:"#616E88"},children:" \u7ED1\u5B9A\u4E8B\u4EF6\u76D1\u542C\u5668 */"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#88C0D0"},children:"componentDidMount"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"void"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"rootEl"}),l(n.span,{style:{color:"#81A1C1"},children:"!"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"addEventListener"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"scroll"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"handleScroll"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"/** "}),l(n.span,{style:{color:"#ECEFF4"},children:"@"}),l(n.span,{style:{color:"#81A1C1"},children:"description"}),l(n.span,{style:{color:"#616E88"},children:" \u4EC5\u5F53 props.list \u53D8\u5316\u624D\u66F4\u65B0\u6E32\u67D3\u7EC4\u4EF6 */"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#88C0D0"},children:"shouldComponentUpdate"}),l(n.span,{style:{color:"#ECEFF4"},children:"("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"_"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"Readonly"}),l(n.span,{style:{color:"#ECEFF4"},children:"<"}),l(n.span,{style:{color:"#8FBCBB"},children:"ScrollViewProps"}),l(n.span,{style:{color:"#ECEFF4"},children:">,"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"nextState"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"Readonly"}),l(n.span,{style:{color:"#ECEFF4"},children:"<"}),l(n.span,{style:{color:"#8FBCBB"},children:"ScrollViewState"}),l(n.span,{style:{color:"#ECEFF4"},children:">,"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"boolean"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"return"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"nextState"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"list"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"!=="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"state"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"list"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"/** "}),l(n.span,{style:{color:"#ECEFF4"},children:"@"}),l(n.span,{style:{color:"#81A1C1"},children:"description"}),l(n.span,{style:{color:"#616E88"},children:" \u4FDD\u5B58\u7EC4\u4EF6\u66F4\u65B0\u524D\u7684\u5BB9\u5668\u9AD8\u5EA6 */"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#88C0D0"},children:"getSnapshotBeforeUpdate"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"return"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"rootEl"}),l(n.span,{style:{color:"#81A1C1"},children:"!"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"scrollHeight"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"/** "}),l(n.span,{style:{color:"#ECEFF4"},children:"@"}),l(n.span,{style:{color:"#81A1C1"},children:"description"}),l(n.span,{style:{color:"#616E88"},children:" \u8BA1\u7B97\u7EC4\u4EF6\u66F4\u65B0\u524D\u540E\u7684\u5BB9\u5668\u9AD8\u5EA6\u53D8\u5316\u91CF */"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#88C0D0"},children:"componentDidUpdate"}),l(n.span,{style:{color:"#ECEFF4"},children:"("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"prevProps"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"Readonly"}),l(n.span,{style:{color:"#ECEFF4"},children:"<"}),l(n.span,{style:{color:"#8FBCBB"},children:"ScrollViewProps"}),l(n.span,{style:{color:"#ECEFF4"},children:">,"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"prevState"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"Readonly"}),l(n.span,{style:{color:"#ECEFF4"},children:"<"}),l(n.span,{style:{color:"#8FBCBB"},children:"ScrollViewState"}),l(n.span,{style:{color:"#ECEFF4"},children:">,"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#D8DEE9"},children:"snapshot"}),l(n.span,{style:{color:"#81A1C1"},children:"?:"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"number"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"void"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"if"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"rootEl"}),l(n.span,{style:{color:"#ECEFF4"},children:"?."}),l(n.span,{style:{color:"#D8DEE9"},children:"scrollHeight"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"!=="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"undefined"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"&&"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"snapshot"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"!=="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"undefined"}),l(n.span,{style:{color:"#D8DEE9FF"},children:") "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#D8DEE9"},children:"console"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"log"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"`"}),l(n.span,{style:{color:"#A3BE8C"},children:"\u5BB9\u5668\u9AD8\u5EA6\u53D8\u5316\u91CF: "}),l(n.span,{style:{color:"#ECEFF4"},children:"${"}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"rootEl"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"scrollHeight"}),l(n.span,{style:{color:"#A3BE8C"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"-"}),l(n.span,{style:{color:"#A3BE8C"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"snapshot"}),l(n.span,{style:{color:"#ECEFF4"},children:"}`"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#616E88"},children:"/** "}),l(n.span,{style:{color:"#ECEFF4"},children:"@"}),l(n.span,{style:{color:"#81A1C1"},children:"description"}),l(n.span,{style:{color:"#616E88"},children:" \u89E3\u9664\u4E8B\u4EF6\u76D1\u542C\u5668 */"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#88C0D0"},children:"componentWillUnmount"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"void"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"rootEl"}),l(n.span,{style:{color:"#ECEFF4"},children:"?."}),l(n.span,{style:{color:"#88C0D0"},children:"removeEventListener"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"scroll"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"handleScroll"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#88C0D0"},children:"render"}),l(n.span,{style:{color:"#ECEFF4"},children:"()"}),l(n.span,{style:{color:"#81A1C1"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"React"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"list"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"const"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"itemComponent"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"maxHeight"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"300px"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,l(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#616E88"},children:"/**"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#616E88"},children:"     * React \u5C06\u5728\u7EC4\u4EF6\u6302\u8F7D\u65F6\uFF0C\u4F1A\u8C03\u7528 ref \u56DE\u8C03\u51FD\u6570\u5E76\u4F20\u5165 DOM \u5143\u7D20\uFF0C\u5F53\u5378\u8F7D\u65F6\u8C03\u7528\u5B83\u5E76\u4F20\u5165 null\u3002"})}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#616E88"},children:"     * \u5728 componentDidMount \u6216 componentDidUpdate \u89E6\u53D1\u524D\uFF0CReact \u4F1A\u4FDD\u8BC1 refs \u4E00\u5B9A\u662F\u6700\u65B0\u7684\u3002"})}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#616E88"},children:"     */"})}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),l(n.span,{style:{color:"#81A1C1"},children:"return"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:"<div"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(n.span,{style:{color:"#8FBCBB"},children:"style"}),l(n.span,{style:{color:"#81A1C1"},children:"={"}),l(n.span,{style:{color:"#ECEFF4"},children:"{"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"maxHeight"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"overflowY"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"scroll"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"}),l(n.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(n.span,{style:{color:"#8FBCBB"},children:"ref"}),l(n.span,{style:{color:"#81A1C1"},children:"={"}),l(n.span,{style:{color:"#ECEFF4"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"el"}),l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),l(n.span,{style:{color:"#81A1C1"},children:"this"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"rootEl"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"="}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"el"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"}),l(n.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(n.span,{style:{color:"#81A1C1"},children:"<div"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#8FBCBB"},children:"style"}),l(n.span,{style:{color:"#81A1C1"},children:"={"}),l(n.span,{style:{color:"#ECEFF4"},children:"{"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"display"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"flex"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"flexDirection"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"column"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"gap"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#A3BE8C"},children:"30px"}),l(n.span,{style:{color:"#ECEFF4"},children:"'"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"}),l(n.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"          "}),l(n.span,{style:{color:"#81A1C1"},children:"{"}),l(n.span,{style:{color:"#D8DEE9"},children:"list"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"map"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#ECEFF4"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"item"}),l(n.span,{style:{color:"#ECEFF4"},children:")"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"            "}),l(n.span,{style:{color:"#D8DEE9"},children:"React"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#88C0D0"},children:"createElement"}),l(n.span,{style:{color:"#D8DEE9FF"},children:"("}),l(n.span,{style:{color:"#D8DEE9"},children:"itemComponent"}),l(n.span,{style:{color:"#ECEFF4"},children:","}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"              "}),l(n.span,{style:{color:"#D8DEE9"},children:"key"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"item"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"id"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"              "}),l(n.span,{style:{color:"#D8DEE9"},children:"data"}),l(n.span,{style:{color:"#ECEFF4"},children:":"}),l(n.span,{style:{color:"#D8DEE9FF"},children:" "}),l(n.span,{style:{color:"#D8DEE9"},children:"item"}),l(n.span,{style:{color:"#ECEFF4"},children:"."}),l(n.span,{style:{color:"#D8DEE9"},children:"data"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"            "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"}),l(n.span,{style:{color:"#D8DEE9FF"},children:")"}),l(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"          )"}),l(n.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),l(n.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),l(n.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(n.span,{className:"line",children:[l(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),l(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line",children:l(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line"})]})})]}),`
`,l(F,{children:l(b,{})}),`
`,l(n.p,{children:l(n.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/ScrollView%E7%B1%BB%E7%BB%84%E4%BB%B6%E5%AE%9E%E7%8E%B0.gif",alt:"ScrollView\u7C7B\u7EC4\u4EF6\u5B9E\u73B0"})}),`
`,l(n.p,{children:"\u751F\u547D\u5468\u671F\u5404\u4E2A\u9636\u6BB5\u505A\u7684\u4E8B\u60C5\u5982\u4E0B\uFF1A"}),`
`,e(n.ul,{children:[`
`,l(n.li,{children:"constructor: \u521D\u59CB\u5316 state\uFF0C\u7ED1\u5B9A this \u5230\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u4F7F\u7528 debounce \u5904\u7406\u4E8B\u4EF6\u5904\u7406\u51FD\u6570"}),`
`,l(n.li,{children:"getDerivedStateFromProps: \u5408\u5E76 props.list \u5230 state \u4E2D"}),`
`,l(n.li,{children:"componentDidMount: \u7ED1\u5B9A\u76D1\u542C scroll \u4E8B\u4EF6"}),`
`,l(n.li,{children:"shouldComponentUpdate: \u6027\u80FD\u4F18\u5316 -- \u4EC5\u5F53 list \u53D8\u5316\u65F6\u624D\u91CD\u65B0\u6E32\u67D3"}),`
`,l(n.li,{children:"render: \u6E32\u67D3\u89C6\u56FE \u6839\u636E props.list \u8C03\u7528 itemComponent \u6E32\u67D3\u5BF9\u5E94\u5217\u8868\u9879"}),`
`,l(n.li,{children:"getSnapshotBeforeUpdate: \u4FDD\u5B58\u7EC4\u4EF6\u66F4\u65B0\u524D\u7684 ScrollView \u5BB9\u5668\u9AD8\u5EA6"}),`
`,l(n.li,{children:"componentDidUpdate: \u6839\u636E ScrollView \u66F4\u65B0\u524D\u540E\u7684\u9AD8\u5EA6\u8BA1\u7B97\u9AD8\u5EA6\u53D8\u5316\u91CF"}),`
`,l(n.li,{children:"componentWillUnmount: \u89E3\u9664 scroll \u4E8B\u4EF6\u76D1\u542C\u5668"}),`
`]})]})}function T(c={}){const{wrapper:n}=c.components||{};return n?l(n,Object.assign({},c,{children:l(m,c)})):m(c)}const O="2022/12/10 02:12:55",V=`import { DemoBlock } from '@island/demo-block'

import { FunctionComponentLifeCycleDemo } from '~/demos/life-cycle/demo1.tsx'
import { ScrollViewClassComponentDemo } from '~/demos/life-cycle/demo2'

# life cycle

## 1. \u7C7B\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u539F\u7406

React \u4E2D\u6709\u4E24\u4E2A\u6838\u5FC3\u9636\u6BB5\uFF1A

1. \u8C03\u548C (render) \u9636\u6BB5

   \u904D\u5386 Fiber \u6811\uFF0C\u901A\u8FC7 diff \u7B97\u6CD5\u627E\u51FA\u53D8\u5316\u7684\u90E8\u5206\uFF0C\u5982\u679C\u662F\u7EC4\u4EF6\u5219\u4F1A\u6267\u884C\u5176 render \u51FD\u6570\u8FDB\u884C\u66F4\u65B0

2. commit \u9636\u6BB5

   \u6839\u636E\u8C03\u548C\u7684\u7ED3\u679C\u53BB\u521B\u5EFA\u6216\u4FEE\u6539\u771F\u5B9E DOM \u8282\u70B9

\u751F\u547D\u5468\u671F\u662F\u8D2F\u7A7F\u5728\u4E00\u4E2A\u7EC4\u4EF6\u7684\u521B\u5EFA\u3001\u66F4\u65B0\u3001\u9500\u6BC1\u4E2D\u7684\uFF0C\u6B63\u597D\u662F\u4E00\u4E2A\u7EC4\u4EF6\u4ECE\u51FA\u73B0\u5230\u6D88\u5931\u7684\u6574\u4E2A\u8FC7\u7A0B\uFF0C\u56E0\u6B64\u88AB\u5F62\u8C61\u5730\u79F0\u4E3A\u201C\u751F\u547D\u5468\u671F\u201D

### 1.1. \u57FA\u672C\u6D41\u7A0B

\u5148\u6765\u770B\u770B\u5B83\u7684\u57FA\u672C\u6D41\u7A0B\uFF1A

\`packages/react-reconciler/src/ReactFiberBeginWork.js\`

\`\`\`js
/** @description workloop React \u5904\u7406\u7C7B\u7EC4\u4EF6\u7684\u4E3B\u8981\u529F\u80FD\u65B9\u6CD5 */
function updateClassComponent() {
  // shouldUpdate \u6807\u8BC6\u7528\u6765\u8BC1\u660E \u7EC4\u4EF6\u662F\u5426\u9700\u8981\u66F4\u65B0
  let shouldUpdate

  // stateNode \u662F fiber \u6307\u5411 \u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u6307\u9488\u3002
  const instance = workInProgress.stateNode

  // instance \u4E3A\u7EC4\u4EF6\u5B9E\u4F8B,\u5982\u679C\u7EC4\u4EF6\u5B9E\u4F8B\u4E0D\u5B58\u5728\uFF0C\u8BC1\u660E\u8BE5\u7C7B\u7EC4\u4EF6\u6CA1\u6709\u88AB\u6302\u8F7D\u8FC7\uFF0C\u90A3\u4E48\u4F1A\u8D70\u521D\u59CB\u5316\u6D41\u7A0B
  if (instance === null) {
    // \u7EC4\u4EF6\u5B9E\u4F8B\u5C06\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u88AB new
    constructClassInstance(workInProgress, Component, nextProps)

    // \u521D\u59CB\u5316\u6302\u8F7D\u7EC4\u4EF6\u6D41\u7A0B
    mountClassInstance(
      workInProgress,
      Component,
      nextProps,
      renderExpirationTime,
    )

    shouldUpdate = true
  } else {
    // \u7EC4\u4EF6\u5B9E\u4F8B\u5DF2\u5B58\u5728 -- \u66F4\u65B0\u7EC4\u4EF6
    shouldUpdate = updateClassInstance(
      current,
      workInProgress,
      Component,
      nextProps,
      renderExpirationTime,
    )
  }
  if (shouldUpdate) {
    // \u6267\u884Crender\u51FD\u6570 \uFF0C\u5F97\u5230\u5B50\u8282\u70B9
    nextChildren = instance.render()

    // \u7EE7\u7EED\u8C03\u548C\u5B50\u8282\u70B9
    reconcileChildren(
      current,
      workInProgress,
      nextChildren,
      renderExpirationTime,
    )
  }
}
\`\`\`

\u5927\u4F53\u4E0A\u5C31\u662F\u68C0\u67E5\u7EC4\u4EF6\u5B9E\u4F8B\u662F\u5426\u5B58\u5728\uFF0C\u4E0D\u5B58\u5728\u5219\u8D70\u521D\u59CB\u5316\u7684\u6D41\u7A0B\uFF0C\u5DF2\u5B58\u5728\u5219\u8D70\u66F4\u65B0\u7684\u6D41\u7A0B

\u6709\u51E0\u4E2A\u91CD\u8981\u7684\u5730\u65B9\u9700\u8981\u8BB0\u4F4F\uFF1A

1. instance: \u7C7B\u7EC4\u4EF6\u5B9E\u4F8B
2. workInProgress: \u5F53\u524D\u6B63\u5728\u8C03\u548C\u7684 fiber \u6811
3. current: \u8C03\u548C\u7ED3\u675F\u540E\u4F1A\u5C06 workInProgress \u8D4B\u503C\u7ED9 current
4. Component: \u7528\u6237\u7F16\u5199\u7684 class \u7EC4\u4EF6
5. nextProps: \u7EC4\u4EF6\u5728\u4E00\u6B21\u66F4\u65B0\u4E2D\u7684 props
6. renderExpirationTime: \u4E0B\u4E00\u6B21\u6E32\u67D3\u7684\u8FC7\u671F\u65F6\u95F4
7. \u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u4E0E fiber \u5BF9\u8C61\u7684\u5173\u7CFB: \u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u901A\u8FC7 \`_reactInternals\` \u83B7\u53D6\u5BF9\u5E94 fiber \u8282\u70B9\uFF0Cfiber \u8282\u70B9\u901A\u8FC7 \`stateNode\` \u83B7\u53D6\u5BF9\u5E94\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B
   ![\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u4E0Efiber\u5BF9\u8C61\u7684\u5173\u7CFB](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%B1%BB%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E4%B8%8Efiber%E7%9A%84%E5%85%B3%E7%B3%BB.png)

### 1.2. \u7EC4\u4EF6\u521D\u59CB\u5316

#### 1.2.1. constructClassInstace

\u9996\u5148\u4F1A\u6267\u884C \`constructClassInstace\` \u5B9E\u4F8B\u5316\u7C7B\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u5728\u524D\u9762\u7684\`\u8D77\u6E90 Component\`\u7AE0\u8282\u6709\u8BB2\u5230

#### 1.2.2. mountClassInstance

\u5B9E\u4F8B\u5316\u540E\u4F1A\u6267\u884C \`mountClassInstance\` \u53BB\u6302\u8F7D\u7EC4\u4EF6\uFF0C\u5982\u4F55\u6302\u8F7D\u7684\u5462\uFF1F\u770B\u770B\u6838\u5FC3\u4EE3\u7801\uFF1A

\`packages/react-reconciler/src/ReactFiberBeginWork.js\`

\`\`\`js
function mountClassInstance(
  workInProgress,
  ctor,
  newProps,
  renderExpirationTime,
) {
  const instance = workInProgress.stateNode

  // ctor \u5C31\u662F\u6211\u4EEC\u5199\u7684\u7C7B\u7EC4\u4EF6\uFF0C\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u7684\u9759\u6001\u65B9\u6CD5
  const getDerivedStateFromProps = ctor.getDerivedStateFromProps

  // \u8FD9\u4E2A\u65F6\u5019\u6267\u884C getDerivedStateFromProps \u751F\u547D\u5468\u671F \uFF0C\u5F97\u5230\u5C06\u5408\u5E76\u7684 state
  if (typeof getDerivedStateFromProps === 'function') {
    // getDerivedStateFromProps \u751F\u547D\u5468\u671F\u6839\u636E\u65B0\u7684 props \u548C\u65E7\u7684 state \u6D3E\u751F\u51FA\u65B0\u7684 state
    const partialState = getDerivedStateFromProps(nextProps, prevState)

    // \u5408\u5E76state
    const memoizedState =
      partialState === null || partialState === undefined
        ? prevState
        : Object.assign({}, prevState, partialState)
    workInProgress.memoizedState = memoizedState

    // \u5C06 state \u8D4B\u503C\u7ED9\u6211\u4EEC\u5B9E\u4F8B\u4E0A\uFF0Cinstance.state  \u5C31\u662F\u6211\u4EEC\u5728\u7EC4\u4EF6\u4E2D this.state \u83B7\u53D6\u7684 state
    instance.state = workInProgress.memoizedState
  }

  // \u5F53 getDerivedStateFromProps \u548C getSnapshotBeforeUpdate \u4E0D\u5B58\u5728\u7684\u65F6\u5019 \uFF0C\u6267\u884C componentWillMount
  if (
    typeof ctor.getDerivedStateFromProps !== 'function' &&
    typeof instance.getSnapshotBeforeUpdate !== 'function' &&
    typeof instance.componentWillMount === 'function'
  ) {
    instance.componentWillMount()
  }
}
\`\`\`

#### 1.2.3. componentDidMount \u6267\u884C\u65F6\u673A

\`componentDidMount\`\u58F0\u660E\u5468\u671F\u8FD8\u6CA1\u6709\u51FA\u73B0\uFF0C\u5B83\u662F\u5728\u4F55\u65F6\u88AB\u6267\u884C\u7684\u5462\uFF1F

\u524D\u9762\u7684\`getDerivedStateFromProps\` \u548C \`componentWillMount\` \u751F\u547D\u5468\u671F\u90FD\u662F\u5728 render \u9636\u6BB5\u6267\u884C\u7684

\`componentDidMount\` \u5219\u662F\u5728 commit \u9636\u6BB5\u624D\u6267\u884C\u7684

\`packages/react-reconciler/src/ReactFiberCommitWork.js\`

commit \u9636\u6BB5\u5165\u53E3

\`\`\`js
function commitLayoutEffectOnFiber(
  finishedRoot: FiberRoot,
  current: Fiber | null,
  finishedWork: Fiber,
  committedLanes: Lanes,
): void {
  // \u6839\u636E fiber tag \u8BC6\u522B\u7C7B\u7EC4\u4EF6\u5E76\u6267\u884C\u76F8\u5E94\u751F\u547D\u5468\u671F
  switch (finishedWork.tag) {
    case ClassComponent: {
      commitClassLayoutLifecycles(finishedWork, current)
    }
  }
}
\`\`\`

\u7C7B\u7EC4\u4EF6 commit \u9636\u6BB5\u751F\u547D\u5468\u671F\u8C03\u7528

\`\`\`js
function commitClassLayoutLifecycles(
  finishedWork: Fiber,
  current: Fiber | null,
) {
  // \u4ECE fiber \u4E2D\u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B
  const instance = finishedWork.stateNode
  if (current === null) {
    // \u7C7B\u7EC4\u4EF6\u9996\u6B21\u8C03\u548C\u6E32\u67D3
    instance.componentDidMount()
  } else {
    // \u7C7B\u7EC4\u4EF6\u66F4\u65B0
    instance.componentDidUpdate(
      prevProps,
      prevState,
      instance.__reactInternalSnapshotBeforeUpdate,
    )
  }
}
\`\`\`

\u4ECE\u6E90\u7801\u4E2D\u53EF\u4EE5\u4E86\u89E3\u5230 \`componentDidMount\` \u548C \`componentDidUpdate\` \u7684\u6267\u884C\u65F6\u673A\u662F\u4E00\u6837\u7684

\u7EFC\u4E0A\uFF0C\u53EF\u4EE5\u4E86\u89E3\u5230\u4E00\u4E2A\u7C7B\u7EC4\u4EF6\u521D\u59CB\u5316\u7684\u65F6\u5019\u7684\u751F\u547D\u5468\u671F\u7684\u6267\u884C\u987A\u5E8F\u4E3A\uFF1A

\`constructor -> getDerivedStateFromProps / componentWillMount -> render -> componentDidMount\`

### 1.3. \u7EC4\u4EF6\u66F4\u65B0

\u6839\u636E\u57FA\u672C\u6D41\u7A0B\u4E2D\u7684\u4EE3\u7801\u903B\u8F91\uFF0C\u5F53 \`current === null\` \u7684\u65F6\u5019\u4F1A\u53BB\u66F4\u65B0\u7C7B\u7EC4\u4EF6\uFF0C\u6765\u770B\u770B \`updateClassInstance\` \u76F8\u5173\u4EE3\u7801\uFF0C\u53EA\u770B\u548C\u751F\u547D\u5468\u671F\u94A9\u5B50\u8C03\u7528\u76F8\u5173\u7684\u90E8\u5206\uFF1A

\`packages/react-reconciler/src/ReactFiberClassComponent.js\`

\`\`\`js
function updateClassInstance(
  current: Fiber,
  workInProgress: Fiber,
  ctor: any,
  newProps: any,
  renderLanes: Lanes,
): boolean {
  // \u83B7\u53D6\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B
  const instance = workInProgress.stateNode

  // \u5224\u65AD\u662F\u5426\u6709 getDerivedStateFromProps \u751F\u547D\u5468\u671F
  const hasNewLifecycles = typeof getDerivedStateFromProps === 'function'

  if (
    !hasNewLifecycles &&
    typeof instance.componentWillReceiveProps === 'function'
  ) {
    // \u6D45\u5C42\u6BD4\u8F83 props
    if (oldProps !== newProps || oldContext !== nextContext) {
      // \u6267\u884C\u751F\u547D\u5468\u671F -- componentWillReceiveProps
      instance.componentWillReceiveProps(newProps, nextContext)
    }
  }

  let newState = (instance.state = oldState)

  // \u6267\u884C\u751F\u547D\u5468\u671F getDerivedStateFromProps  \uFF0C\u903B\u8F91\u548C mounted \u7C7B\u4F3C \uFF0C\u5408\u5E76 state
  if (typeof getDerivedStateFromProps === 'function') {
    ctor.getDerivedStateFromProps(nextProps, prevState)
    newState = workInProgress.memoizedState
  }

  let shouldUpdate = true

  // \u6267\u884C\u751F\u547D\u5468\u671F shouldComponentUpdate \u8FD4\u56DE\u503C\u51B3\u5B9A\u662F\u5426\u6267\u884C render \uFF0C\u8C03\u548C\u5B50\u8282\u70B9
  if (typeof instance.shouldComponentUpdate === 'function') {
    shouldUpdate = instance.shouldComponentUpdate(
      newProps,
      newState,
      nextContext,
    )
  }
  if (shouldUpdate) {
    // \u6267\u884C\u751F\u547D\u5468\u671F componentWillUpdate
    if (typeof instance.componentWillUpdate === 'function') {
      instance.componentWillUpdate()
    }
  }
  return shouldUpdate
}
\`\`\`

\u6839\u636E\u6E90\u7801\u53EF\u4EE5\u5F97\u77E5\u66F4\u65B0\u9636\u6BB5\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u7684\u6267\u884C\u987A\u5E8F\u5982\u4E0B\uFF1A

1. componentWillReceiveProps -- \u6CA1\u6709 getDerivedStateFromProps \u4E14 props \u53D1\u751F\u53D8\u5316\u65F6\u624D\u4F1A\u6267\u884C
2. getDerivedStateFromProps
3. shouldComponentUpdate
4. componentWillUpdate -- shouldComponentUpdate \u8FD4\u56DE true \u65F6\u624D\u6267\u884C
5. \u6267\u884C render \u51FD\u6570 -- shouldComponentUpdate \u8FD4\u56DE true \u65F6\u624D\u6267\u884C
6. \u8C03\u548C\u5B50\u8282\u70B9 -- shouldComponentUpdate \u8FD4\u56DE true \u65F6\u624D\u6267\u884C
7. getSnapshotBeforeUpdate -- \u53D1\u751F\u5728 commit \u9636\u6BB5\u7684 \`before Mutation\` \u65F6\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u4FEE\u6539\u771F\u5B9E DOM \u5143\u7D20\u4E4B\u524D
8. componentDidUpdate

![\u7C7B\u7EC4\u4EF6\u66F4\u65B0\u6D41\u7A0B](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%B1%BB%E7%BB%84%E4%BB%B6%E6%9B%B4%E6%96%B0%E6%B5%81%E7%A8%8B.awebp)

### 1.4. \u7EC4\u4EF6\u9500\u6BC1

\u4EC5\u6709\u4E00\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u5728 commit \u9636\u6BB5\u7684 \`before Mutation\` \u65F6\u6267\u884C \`componentWillUnmount\`

### 1.5. \u4E09\u4E2A\u9636\u6BB5\u603B\u89C8

![\u7C7B\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u4E09\u4E2A\u9636\u6BB5\u603B\u89C8](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%B8%89%E4%B8%AA%E9%98%B6%E6%AE%B5%E6%80%BB%E8%A7%88.awebp)

## 2. \u5404\u4E2A\u751F\u547D\u5468\u671F\u4E2D\u80FD\u505A\u7684\u4E8B\u60C5

\u76EE\u524D\u6211\u4EEC\u77E5\u9053\u5404\u4E2A\u751F\u547D\u5468\u671F\u7684\u6267\u884C\u987A\u5E8F\u4E86\uFF0C\u4F46\u8FD8\u4E0D\u77E5\u9053\u5B9E\u9645\u4F7F\u7528\u7684\u65F6\u5019\u8BE5\u7528\u5B83\u4EEC\u6765\u5E72\u561B\uFF0C\u63A5\u4E0B\u6765\u5C31\u4E3E\u4E00\u4E9B\u4F8B\u5B50\u6765\u770B\u770B

### 2.1. constructor

\u5728\u7C7B\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u4E00\u822C\u53EF\u4EE5\u505A\u4EE5\u4E0B\u4E8B\u60C5\uFF1A

1. \u521D\u59CB\u5316\u7EC4\u4EF6 state
2. \u5BF9\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u505A\u5904\u7406

   - \u7ED1\u5B9A this -- \u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u5982\u679C\u662F\u76F4\u63A5\u4F20\u9012\u65F6\uFF0C\u5728\u4E8B\u4EF6\u7CFB\u7EDF\u4E2D\u88AB\u6267\u884C\u65F6\uFF0C\u662F\u76F4\u63A5\u8C03\u7528\u7684\uFF0C\u4F1A\u51FA\u73B0 this \u6CA1\u6307\u5411\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u60C5\u51B5\uFF0C\u6B64\u65F6\u53EF\u4EE5\u5728\u6784\u9020\u51FD\u6570\u4E2D\u7ED1\u5B9A this\uFF0C\u6216\u8005\u7528 \`onClick={() => this.handleClick()}\`\u7684\u65B9\u5F0F\u7ED1\u5B9A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570

3. \u5BF9\u7C7B\u7EC4\u4EF6\u8FDB\u884C\u751F\u547D\u5468\u671F\u52AB\u6301\u3001\u6E32\u67D3\u52AB\u6301 -- \u5E38\u7528\u4E8E\u53CD\u5411\u7EE7\u627F\u7684 HOC

### 2.2. getDerivedStateFromProps

1. \u7528\u4E8E\u66FF\u4EE3 \`componentWillReceiveProps\` \u548C \`componentWillMount\`
2. \u7EC4\u4EF6\u521D\u59CB\u5316\u6216\u66F4\u65B0\u65F6\u5C06 props \u6620\u5C04\u5230 state
3. \u8FD4\u56DE\u503C\u4E0E state \u5408\u5E76\u540E\u53EF\u4EE5\u4F5C\u4E3A \`shouldComponentUpdate\` \u751F\u547D\u5468\u671F\u94A9\u5B50\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570 \`newState\`

### 2.3. componentWillMount

\u9002\u5408\u505A\u4E00\u4E9B\u521D\u59CB\u5316\u5DE5\u4F5C

### 2.4. componentWillReceiveProps

1. \u76D1\u542C\u7236\u7EC4\u4EF6\u662F\u5426\u6267\u884C render (\u4E0D\u5B89\u5168\u6027\u7684\u4F53\u73B0)
2. \u5728\u5F02\u6B65\u56DE\u8C03\u4E2D\u6539\u53D8 state

### 2.5. componentWillUpdate

\u83B7\u53D6\u7EC4\u4EF6\u66F4\u65B0\u4E4B\u524D\u7684\u72B6\u6001\uFF0C\u6BD4\u5982 DOM \u5143\u7D20\u7684\u4F4D\u7F6E

### 2.6. render

render \u51FD\u6570\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u5C06 jsx \u5143\u7D20\u8F6C\u6362\u6210 React element\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5728 render \u51FD\u6570\u91CC\u505A\u4EE5\u4E0B\u4E8B\u60C5\uFF1A

1. createElement
2. cloneElement
3. \u904D\u5386 children

### 2.7. getSnapshotBeforeUpdate

\u914D\u5408 componentDidUpdate \u4E00\u8D77\u4F7F\u7528\uFF0C\u5728\u66F4\u65B0 DOM \u5143\u7D20\u4E4B\u524D\u83B7\u53D6 DOM \u5143\u7D20\u7684\u5FEB\u7167\uFF0C\u5C06\u8FD9\u4E2A\u5FEB\u7167 return \u540E\u4F1A\u4F20\u7ED9 componentDidUpdate \u7684\u7B2C\u4E09\u4E2A\u53C2\u6570

\`\`\`js
getSnapshotBeforeUpdate(prevProps,preState){
  const style = getComputedStyle(this.node)

  // \u4F20\u9012\u66F4\u65B0\u524D\u7684\u5143\u7D20\u4F4D\u7F6E
  return {
      cx:style.cx,
      cy:style.cy
  }
}
componentDidUpdate(prevProps, prevState, snapshot){
  // \u83B7\u53D6\u5143\u7D20\u7ED8\u5236\u4E4B\u524D\u7684\u4F4D\u7F6E
  console.log(snapshot)
}
\`\`\`

:::warning

\u5982\u679C\u6CA1\u6709\u8FD4\u56DE\u503C\u4F5C\u4E3A snapshot \u4F1A\u6709\u63A7\u5236\u53F0\u8B66\u544A\u4FE1\u606F

\u5982\u679C\u6CA1\u6709 componentDidUpdate \u4E5F\u4F1A\u6709\u63A7\u5236\u53F0\u8B66\u544A\u4FE1\u606F

:::

### 2.8. componentDidUpdate

1. \u83B7\u53D6\u7EC4\u4EF6\u66F4\u65B0\u540E\u7684 DOM \u5143\u7D20
2. \u6D88\u8D39 getSnapshotBeforeUpdate \u8FD4\u56DE\u7684 snapshot

:::warning

\u5982\u679C\u5728\u8FD9\u91CC\u9762\u4F7F\u7528 setState \u4E00\u5B9A\u8981\u52A0\u4EE5\u9650\u5236\uFF0C\u5426\u5219\u4F1A\u5F15\u8D77\u65E0\u9650\u5FAA\u73AF

:::

### 2.9. componentDidMount

1. \u505A\u4E00\u4E9B\u5173\u4E8E DOM \u7684\u64CD\u4F5C\uFF0C\u5982\u57FA\u4E8E DOM \u7684\u4E8B\u4EF6\u76D1\u542C\u5668
2. \u521D\u59CB\u5316\u53D1\u8D77\u5F02\u6B65\u8BF7\u6C42\u6570\u636E\uFF0C\u6E32\u67D3\u89C6\u56FE

### 2.10. shouldComponentUpdate

\`\`\`js
shouldComponentUpdate(newProps,newState,nextContext) {}
\`\`\`

\u5E38\u7528\u4E8E\u6027\u80FD\u4F18\u5316\uFF0C\u5176\u8FD4\u56DE\u503C\u51B3\u5B9A\u7740\u7EC4\u4EF6\u662F\u5426\u9700\u8981\u66F4\u65B0

:::tip

newState \u53EF\u4EE5\u6765\u81EA\u4E8E getDerivedStateFromProps \u751F\u547D\u5468\u671F\u7684\u8FD4\u56DE\u503C\u4E0E\u73B0\u6709 state \u5408\u5E76\u540E\u7684\u7ED3\u679C

:::

### 2.11. componentWillUnmount

\u505A\u4E00\u4E9B\u6536\u5C3E\u5DE5\u4F5C\uFF0C\u5982\u6E05\u9664\u5B9A\u65F6\u5668\uFF0C\u79FB\u9664 DOM \u5143\u7D20\u4E8B\u4EF6\u76D1\u542C\u5668

## 3. UNSAFE \u751F\u547D\u5468\u671F\u4E3A\u4EC0\u4E48 UNSAFE

\u4ECE React v16.3 \u5F00\u59CB\uFF0CcomponentWillMount \u88AB\u6807\u8BC6\u4E3A UNSAFE\uFF0C\u4E5F\u5C31\u662F\u4E0D\u5B89\u5168\u7684\uFF0C\u4E3B\u8981\u662F\u4EE5\u4E0B\u4E09\u4E2A\uFF1A

- UNSAFE_componentWillMount
- UNSAFE_componentWillReceiveProps
- UNSAFE_componentWillUpdate

\u63A5\u4E0B\u6765\u6211\u4EEC\u770B\u770B\u5B83\u4EEC\u4E3A\u4EC0\u4E48\u4E0D\u5B89\u5168

### \\* 3.1. UNSAFE_componentWillMount

\u5B83\u662F\u5728 render \u4E4B\u524D\u6267\u884C\u7684\uFF0C\u5BF9\u4E8E\u662F\u5426\u6267\u884C render \u53EF\u4EE5\u901A\u8FC7 shouldUpdate \u53BB\u5236\u7EA6\uFF0C\u4F46\u662F\u5BF9\u4E8E componentWillMount \u8FD9\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u5728\u591A\u6B21\u89E6\u53D1 updateClassInstance \u65F6\uFF0C\u5E76\u6CA1\u6709\u6761\u4EF6\u9650\u5236\uFF0C\u56E0\u6B64\u5B58\u5728\u751F\u547D\u5468\u671F\u5185\u7684\u4E0A\u4E0B\u6587\u88AB\u591A\u6B21\u6267\u884C\u7684\u98CE\u9669

### 3.2. UNSAFE_componentWillReceiveProps

\u5F53\u65B0\u65E7 props \u53D8\u5316\u65F6\u4F1A\u6267\u884C componentWillReceiveProps\uFF0C\u4F46\u662F\u7236\u7EC4\u4EF6\u7684 render \u51FD\u6570\u6267\u884C\u65F6\uFF0C\u5373\u4FBF\u5B50\u7EC4\u4EF6 props \u672A\u6539\u53D8\uFF0C\u4E5F\u4F1A\u5BFC\u81F4 componentWillReceiveProps \u751F\u547D\u5468\u671F\u6267\u884C

\u8FD9\u662F\u56E0\u4E3A\u5BF9\u4E8E\u65B0\u65E7 props \u7684\u6BD4\u8F83\u4EC5\u4EC5\u662F\u6BD4\u8F83\u5185\u5B58\u5730\u5740\u662F\u5426\u53D1\u751F\u53D8\u5316\uFF0C\u800C\u7236\u7EC4\u4EF6 render \u51FD\u6570\u6267\u884C\u65F6\uFF0C\u5B50\u7EC4\u4EF6 props \u91CD\u65B0\u521B\u5EFA\uFF0C\u5373\u4FBF\u5BF9\u8C61\u7684\u5C5E\u6027\u6CA1\u53D1\u751F\u53D8\u5316\uFF0C\u4F46\u5DF2\u7ECF\u662F\u53E6\u5916\u4E00\u4E2A\u5BF9\u8C61\u4E86\uFF0C\u4ECE\u800C\u5BFC\u81F4 componentWillReceiveProps \u6267\u884C

### 3.3. UNSAFE_componentWillUpdate

\u63A8\u8350\u4F7F\u7528 \`getSnapshotBeforeUpdate\` \u751F\u547D\u5468\u671F\u66FF\u4EE3

## 4. \u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684\u58F0\u660E\u5468\u671F\u66FF\u4EE3\u65B9\u6848

\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4E0D\u5B58\u5728\u7C7B\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\uFF0C\u4F46\u53EF\u4EE5\u901A\u8FC7 hooks \u53BB\u66FF\u4EE3\u5B9E\u73B0\uFF0C\u9996\u5148\u770B\u770B\u76F8\u5173 hooks \u7684\u7279\u6027\u65B9\u4FBF\u7406\u89E3\u5982\u4F55\u66FF\u4EE3\u7C7B\u7EC4\u4EF6\u751F\u547D\u5468\u671F

### 4.1. useEffect & useLayoutEffect

#### 4.1.1. useEffect

useEffect \u662F\u5F02\u6B65\u6267\u884C\u7684\uFF0C\u4E0D\u4F1A\u963B\u585E\u6D4F\u89C8\u5668\u6E32\u67D3

#### 4.1.2. useLayoutEffect

useLayoutEffect \u662F\u540C\u6B65\u6267\u884C\u7684\uFF0C\u5728 DOM \u66F4\u65B0\u4E4B\u540E\uFF0C\u6D4F\u89C8\u5668\u6E32\u67D3\u7ED8\u5236\u4E4B\u524D\u6267\u884C\uFF0C\u5982\u679C\u6267\u884C\u7684\u4EFB\u52A1\u6BD4\u8F83\u8017\u65F6\u5219\u6709\u53EF\u80FD\u963B\u585E\u6D4F\u89C8\u5668\u6E32\u67D3

#### 4.1.3. \u5982\u4F55\u9009\u62E9 useEffect \u548C useLayoutEffect

\u9700\u8981\u4FEE\u6539 DOM\uFF0C\u6539\u53D8\u9875\u9762\u5E03\u5C40\u5C31\u4F7F\u7528 useLayoutEffect\uFF0C\u5426\u5219\u90FD\u4F7F\u7528 useEffect

#### 4.1.4. \u548C componentDidMount/componentDidUpdate \u6709\u5565\u533A\u522B\uFF1F

\`componentDidMount/componentDidUpdate\` \u90FD\u662F\u540C\u6B65\u6267\u884C\u7684\uFF0C\u548C useLayoutEffect \u66F4\u52A0\u76F8\u4F3C

### 4.2. useInsertionEffect

\u4E3B\u8981\u7528\u4E8E \`CSS in JS\` \u7684\u573A\u666F\u4E0B\uFF0C\u5176\u4ED6\u573A\u666F\u4E0B\u5B98\u65B9\u4E0D\u63A8\u8350\u4F7F\u7528\u8BE5 hook\uFF0C\u90A3\u4E48\u4E3A\u4EC0\u4E48\u5B83\u9002\u7528\u4E8E CSS in JS \u573A\u666F\u5462\uFF1F

\u9996\u5148\u9700\u8981\u4E86\u89E3\u4EE5\u4E0B CSS in JS \u7684\u7279\u6027\uFF0C\u4EE5 [styled-components](https://styled-components.com/) \u4E3A\u4F8B

\u6837\u5F0F\u5747\u901A\u8FC7\u8BE5\u5E93\u63D0\u4F9B\u7684\u8FD0\u884C\u65F6 api \u5B9A\u4E49\uFF0C\u5E76\u5728\u6267\u884C\u5230\u76F8\u5173\u4EE3\u7801\u65F6\uFF0C\u4F1A\u52A8\u6001\u751F\u6210 style \u6807\u7B7E\u63D2\u5165\u5230 head \u6807\u7B7E\u4E2D\uFF0C\u4F7F\u6837\u5F0F\u751F\u6548

\u90A3\u4E48\u8FD9\u5C31\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u5982\u679C\u5728 \`useLayoutEffect\` \u4E2D\u4F7F\u7528 CSS in JS \u7684\u4EE3\u7801\u7684\u8BDD\uFF0C\u6B64\u65F6 DOM \u662F\u5DF2\u7ECF\u66F4\u65B0\u4E86\u7684\uFF0C\u5E03\u5C40\u4E5F\u786E\u8BA4\u4E86\uFF0C\u53EA\u9700\u8981\u8BA9\u6D4F\u89C8\u5668\u7ED8\u5236\u5373\u53EF

\u7136\u800C\u6B64\u65F6\u6267\u884C\u4E86 CSS in JS \u7684\u4EE3\u7801\uFF0C\u52A8\u6001\u5F80 head \u4E2D\u63D2\u5165\u4E86 style \u6807\u7B7E\uFF0C\u5BFC\u81F4\u6D4F\u89C8\u5668\u4E0D\u5F97\u4E0D\u91CD\u7ED8\u751A\u81F3\u91CD\u6392\u5E03\u5C40

\u6240\u4EE5\u6700\u4F73\u7684\u6267\u884C CSS in JS \u4EE3\u7801\u7684\u65F6\u673A\u5E94\u5F53\u662F DOM \u53D8\u5316\u4E4B\u524D\u5C31\u6267\u884C\uFF0C\u4ECE\u800C \`useInsertionEffect\` \u5C31\u8BDE\u751F\u4E86\uFF0C\u5B83\u7684\u6267\u884C\u65F6\u673A\u5728 DOM \u66F4\u65B0\u4E4B\u524D\uFF0C\u6BD4 useLayoutEffect \u8981\u66F4\u65E9

### 4.3. componentDidMount \u66FF\u4EE3\u65B9\u6848

\`\`\`js
useEffect(() => {
  // \u5F02\u6B65\u8BF7\u6C42\u3001\u4E8B\u4EF6\u76D1\u542C\u3001\u64CD\u4F5C DOM...
}, [])
\`\`\`

\u5229\u7528 useEffect \u7B2C\u4E8C\u4E2A\u53C2\u6570 dep \u6570\u7EC4\u4E3A\u7A7A\u7684\u7279\u6027\uFF0C\u5F53 dep \u4E3A\u7A7A\u6570\u7EC4\u65F6\uFF0CuseEffect \u7684\u56DE\u8C03\u53EA\u4F1A\u6267\u884C\u4E00\u6B21

### 4.4. componentWillUnmount \u66FF\u4EE3\u65B9\u6848

\`\`\`js
useEffect(() => {
  return () => {
    // \u79FB\u9664\u4E8B\u4EF6\u76D1\u542C\u5668\u3001\u79FB\u9664\u5B9A\u65F6\u5668\u7B49
  }
}, [])
\`\`\`

\u5229\u7528 useEffect \u56DE\u8C03\u4E2D\u8FD4\u56DE\u7684\u51FD\u6570\u4F1A\u5728\u7EC4\u4EF6\u9500\u6BC1\u524D\u6267\u884C\u7684\u7279\u6027\u6A21\u62DF componentWillUnmount

\u540C\u6837\uFF0C\u8981\u8BA9 dep \u6570\u7EC4\u4E3A\u7A7A\u6570\u7EC4\u624D\u80FD\u8BA9\u5176\u53EA\u6267\u884C\u4E00\u6B21

### 4.5. componentWillReceiveProps \u66FF\u4EE3\u65B9\u6848

\u4E25\u683C\u6765\u8BF4\uFF0C\u8BF4 useEffect \u53EF\u4EE5\u66FF\u4EE3 componentWillReceiveProps \u8FD8\u662F\u6BD4\u8F83\u7275\u5F3A\u7684\uFF0C\u7406\u7531\u5982\u4E0B\uFF1A

1. useEffect \u53D1\u751F\u5728 commit \u9636\u6BB5\uFF0C\u800C componentWillReceiveProps \u5219\u53D1\u751F\u5728 render \u9636\u6BB5
2. useEffect \u4F1A\u5728\u521D\u59CB\u5316\u65F6\u6267\u884C\u4E00\u6B21\uFF0C\u800C componentWillReceiveProps \u5E76\u4E0D\u4F1A

\u6240\u4EE5\u4E0D\u80FD\u8BF4\u4E25\u683C\u66FF\u4EE3\uFF0C\u4F46\u662F\u7531\u4E8E useEffect \u7684 dep \u6570\u7EC4\u53EF\u4EE5\u8D77\u5230\u4E00\u4E2A\u76D1\u542C\u7684\u4F5C\u7528\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u5B83\u6765\u76D1\u542C props \u6216 props \u4E2D\u5177\u4F53\u67D0\u4E2A\u5C5E\u6027\u7684\u53D8\u5316\uFF0C\u56E0\u800C\u4ECE\u529F\u80FD\u4F5C\u7528\u4E0A\u6765\u770B\u786E\u5B9E\u662F\u53EF\u4EE5\u66FF\u4EE3 componentWillReceiveProps\uFF0C\u4F46\u4ECE\u5E95\u5C42\u539F\u7406\u6765\u770B\u5E76\u4E0D\u80FD\u7B97\u662F\u66FF\u4EE3

\`\`\`js
useEffect(() => {
  console.log(\`props changed: \${props}\`)
}, [props])

useEffect(() => {
  console.log(\`props.counter changed: \${props.counter}\`)
}, [props.counter])
\`\`\`

### 4.6. componentDidUpdate \u66FF\u4EE3\u65B9\u6848

\u4E0E\u66FF\u4EE3 componentWillReceiveProps \u7C7B\u4F3C\uFF0C\u53EA\u80FD\u8BF4 useEffect \u5728\u529F\u80FD\u4F5C\u7528\u4E0A\u662F\u53EF\u4EE5\u66FF\u4EE3 componentDidUpdate\uFF0C\u4F46\u662F\u5728\u5E95\u5C42\u539F\u7406\u4E0A\u4E0D\u7B97\u662F\u4E25\u683C\u66FF\u4EE3 componentDidUpdate

\u56E0\u4E3A componentDidUpdate \u662F\u540C\u6B65\u6267\u884C\u7684\uFF0C\u800C useEffect \u662F\u5F02\u6B65\u6267\u884C\u7684\uFF0C\u4F46\u5B83\u4EEC\u7684\u6267\u884C\u65F6\u673A\u90FD\u662F\u5728 commit \u9636\u6BB5

\u53EA\u9700\u8981\u4E0D\u4F20\u9012 useEffect \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5373\u53EF\u5728\u6BCF\u6B21\u51FD\u6570\u7EC4\u4EF6\u6267\u884C\u65F6\u6267\u884C useEffect \u91CC\u7684\u56DE\u8C03

\`\`\`js
useEffect(() => {
  console.log('\u6A21\u62DF componentDidUpdate')
})
\`\`\`

### 4.7. \u51FD\u6570\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6848\u4F8B

\u63A5\u4E0B\u6765\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684 demo \u6A21\u62DF\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u7684\u5404\u4E2A\u9636\u6BB5

\`\`\`tsx
const FunctionComponentLifeCycleDemo: React.FC = () => {
  // \u63A7\u5236\u7EC4\u4EF6\u662F\u5426\u6302\u8F7D\u548C\u5378\u8F7D
  const [shouldRender, setShouldRender] = useState(true)
  // \u4F5C\u4E3A\u5B50\u7EC4\u4EF6 props
  const [counter, setCounter] = useState(0)

  return (
    <div>
      {shouldRender && <FunctionComponentLifeCycle counter={counter} />}
      <button onClick={() => setCounter((counter) => counter + 1)}>
        add counter
      </button>

      <button onClick={() => setShouldRender(false)}>\u5378\u8F7D\u9500\u6BC1\u7EC4\u4EF6</button>
    </div>
  )
}

interface FunctionComponentLifeCycleProps {
  counter: number
}
const FunctionComponentLifeCycle: React.FC<FunctionComponentLifeCycleProps> = (
  props,
) => {
  const [stateCounter, setStateCounter] = useState(0)

  // \u6A21\u62DF\u7C7B\u7EC4\u4EF6 componentDidMount \u548C componentWillUnmount \u751F\u547D\u5468\u671F
  useEffect(() => {
    logger.log('\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210 -- componentDidMount')
    return () => {
      logger.log('\u7EC4\u4EF6\u5373\u5C06\u5378\u8F7D\u9500\u6BC1 -- componentWillUnmount')
    }
    // \u6CE8\u610F\u8981\u5C06 deps \u8BBE\u7F6E\u4E3A\u7A7A\u6570\u7EC4
  }, [])

  // \u6A21\u62DF\u7C7B\u7EC4\u4EF6 componentWillReceiveProps \u751F\u547D\u5468\u671F
  useEffect(() => {
    logger.log('props \u53D8\u5316 -- componentWillReceiveProps')
  }, [props])

  // \u6A21\u62DF\u7C7B\u7EC4\u4EF6 componentDidUpdate \u751F\u547D\u5468\u671F
  useEffect(() => {
    logger.log('\u7EC4\u4EF6\u66F4\u65B0\u5B8C\u6210 -- componentDidUpdate')
  })

  return (
    <div>
      <p>props.counter: {props.counter}</p>
      <p>stateCounter: {stateCounter}</p>
      <button
        onClick={() => setStateCounter((stateCounter) => stateCounter + 1)}
      >
        add stateCounter
      </button>
    </div>
  )
}
\`\`\`

<DemoBlock>
  <FunctionComponentLifeCycleDemo />
</DemoBlock>

![\u51FD\u6570\u7EC4\u4EF6\u751F\u547D\u5468\u671Fdemo](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9Fdemo.jpg)

## 5. \u751F\u547D\u5468\u671F\u5B9E\u6218 -- ScrollView \u7EC4\u4EF6

\`ScrollView\` \u662F\u4E00\u4E2A\u6EDA\u52A8\u5217\u8868\u7EC4\u4EF6\uFF0C\u652F\u6301\u4F20\u5165\u6570\u636E\u4EE5\u53CA\u5355\u5143\u9879\u7EC4\u4EF6\uFF0C\u5E76\u63D0\u4F9B\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u7684\u56DE\u8C03\uFF0C\u4F7F\u7528\u6548\u679C\u5982\u4E0B\uFF1A

\`\`\`tsx
<ScrollView
  list={list}
  component={Item}
  onScrollToBottom={handleScrollToBottom}
/>
\`\`\`

\u5B9E\u73B0\u5982\u4E0B\uFF1A

\`\`\`tsx
class ScrollView extends React.Component<ScrollViewProps, ScrollViewState> {
  // ================ \u5C5E\u6027 ================

  // \u6839 DOM \u5143\u7D20\u7ED3\u70B9\u7684\u5F15\u7528
  rootEl: HTMLElement | null = null

  // ================ \u4E8B\u4EF6\u5904\u7406\u65B9\u6CD5 ================

  handleScroll(e: Event) {
    // emit scroll \u4E8B\u4EF6\u7ED9\u5916\u754C
    const { onScroll: emitScroll = () => {} } = this.props
    emitScroll && emitScroll(e)

    // \u68C0\u6D4B\u6EDA\u52A8\u6761\u662F\u5426\u89E6\u5E95
    this.checkScrollToBottom()
  }

  // ================ \u666E\u901A\u65B9\u6CD5 ================

  /** @description \u68C0\u6D4B\u6EDA\u52A8\u6761\u662F\u5426\u89E6\u5E95 -- \u89E6\u5E95\u5219 emit scroll-to-bottom \u4E8B\u4EF6 */
  checkScrollToBottom() {
    const { onScrollToBottom: emitScrollToBottom } = this.props
    const { scrollHeight, scrollTop, offsetHeight } = this.rootEl!

    // \u89E6\u5E95\u6761\u4EF6
    if (scrollHeight <= scrollTop + offsetHeight) {
      emitScrollToBottom && emitScrollToBottom()
    }
  }

  // ================ \u751F\u547D\u5468\u671F ================
  constructor(props: ScrollViewProps) {
    super(props)

    // \u521D\u59CB\u5316 state
    this.state = {
      list: [],
    }

    // handleScroll \u65B9\u6CD5\u9632\u6296\u5904\u7406
    this.handleScroll = this.handleScroll.bind(this)
    this.handleScroll = debounce(this.handleScroll, 200)
  }

  /** @description \u6839\u636E props \u6D3E\u751F state */
  static getDerivedStateFromProps(nextProps: ScrollViewProps): ScrollViewState {
    return {
      list: nextProps.list ?? [],
    }
  }

  /** @description \u7ED1\u5B9A\u4E8B\u4EF6\u76D1\u542C\u5668 */
  componentDidMount(): void {
    this.rootEl!.addEventListener('scroll', this.handleScroll)
  }

  /** @description \u4EC5\u5F53 props.list \u53D8\u5316\u624D\u66F4\u65B0\u6E32\u67D3\u7EC4\u4EF6 */
  shouldComponentUpdate(
    _: Readonly<ScrollViewProps>,
    nextState: Readonly<ScrollViewState>,
  ): boolean {
    return nextState.list !== this.state.list
  }

  /** @description \u4FDD\u5B58\u7EC4\u4EF6\u66F4\u65B0\u524D\u7684\u5BB9\u5668\u9AD8\u5EA6 */
  getSnapshotBeforeUpdate() {
    return this.rootEl!.scrollHeight
  }

  /** @description \u8BA1\u7B97\u7EC4\u4EF6\u66F4\u65B0\u524D\u540E\u7684\u5BB9\u5668\u9AD8\u5EA6\u53D8\u5316\u91CF */
  componentDidUpdate(
    prevProps: Readonly<ScrollViewProps>,
    prevState: Readonly<ScrollViewState>,
    snapshot?: number,
  ): void {
    if (this.rootEl?.scrollHeight !== undefined && snapshot !== undefined) {
      console.log(\`\u5BB9\u5668\u9AD8\u5EA6\u53D8\u5316\u91CF: \${this.rootEl.scrollHeight - snapshot}\`)
    }
  }

  /** @description \u89E3\u9664\u4E8B\u4EF6\u76D1\u542C\u5668 */
  componentWillUnmount(): void {
    this.rootEl?.removeEventListener('scroll', this.handleScroll)
  }

  render(): React.ReactNode {
    const { list } = this.state
    const { itemComponent, maxHeight = '300px' } = this.props

    /**
     * React \u5C06\u5728\u7EC4\u4EF6\u6302\u8F7D\u65F6\uFF0C\u4F1A\u8C03\u7528 ref \u56DE\u8C03\u51FD\u6570\u5E76\u4F20\u5165 DOM \u5143\u7D20\uFF0C\u5F53\u5378\u8F7D\u65F6\u8C03\u7528\u5B83\u5E76\u4F20\u5165 null\u3002
     * \u5728 componentDidMount \u6216 componentDidUpdate \u89E6\u53D1\u524D\uFF0CReact \u4F1A\u4FDD\u8BC1 refs \u4E00\u5B9A\u662F\u6700\u65B0\u7684\u3002
     */
    return (
      <div
        style={{ maxHeight, overflowY: 'scroll' }}
        ref={(el) => (this.rootEl = el)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {list.map((item) =>
            React.createElement(itemComponent, {
              key: item.id,
              data: item.data,
            }),
          )}
        </div>
      </div>
    )
  }
}
\`\`\`

<DemoBlock>
  <ScrollViewClassComponentDemo />
</DemoBlock>

![ScrollView\u7C7B\u7EC4\u4EF6\u5B9E\u73B0](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/ScrollView%E7%B1%BB%E7%BB%84%E4%BB%B6%E5%AE%9E%E7%8E%B0.gif)

\u751F\u547D\u5468\u671F\u5404\u4E2A\u9636\u6BB5\u505A\u7684\u4E8B\u60C5\u5982\u4E0B\uFF1A

- constructor: \u521D\u59CB\u5316 state\uFF0C\u7ED1\u5B9A this \u5230\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u4F7F\u7528 debounce \u5904\u7406\u4E8B\u4EF6\u5904\u7406\u51FD\u6570
- getDerivedStateFromProps: \u5408\u5E76 props.list \u5230 state \u4E2D
- componentDidMount: \u7ED1\u5B9A\u76D1\u542C scroll \u4E8B\u4EF6
- shouldComponentUpdate: \u6027\u80FD\u4F18\u5316 -- \u4EC5\u5F53 list \u53D8\u5316\u65F6\u624D\u91CD\u65B0\u6E32\u67D3
- render: \u6E32\u67D3\u89C6\u56FE \u6839\u636E props.list \u8C03\u7528 itemComponent \u6E32\u67D3\u5BF9\u5E94\u5217\u8868\u9879
- getSnapshotBeforeUpdate: \u4FDD\u5B58\u7EC4\u4EF6\u66F4\u65B0\u524D\u7684 ScrollView \u5BB9\u5668\u9AD8\u5EA6
- componentDidUpdate: \u6839\u636E ScrollView \u66F4\u65B0\u524D\u540E\u7684\u9AD8\u5EA6\u8BA1\u7B97\u9AD8\u5EA6\u53D8\u5316\u91CF
- componentWillUnmount: \u89E3\u9664 scroll \u4E8B\u4EF6\u76D1\u542C\u5668
`;export{V as content,T as default,I as frontmatter,O as lastUpdatedTime,j as title,L as toc};
