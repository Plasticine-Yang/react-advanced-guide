var u=Object.defineProperty;var A=(r,l,s)=>l in r?u(r,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[l]=s;var d=(r,l,s)=>(A(r,typeof l!="symbol"?l+"":l,s),s);import{jsx as n,jsxs as e,Fragment as B}from"react/jsx-runtime";import{D as h}from"./index.6529e49c.js";import{useMemo as y,Component as C,createRef as m,useState as E,Fragment as g}from"react";const f="_circle_1ptt5_1",S={circle:f},v=r=>{const{containerShape:l}=r,s=y(()=>({background:L(),...M(l)}),[]);return n("div",{className:S.circle,style:s})},L=()=>{const r=()=>Math.floor(Math.random()*255),[l,s,c]=new Array(3).fill(0).map(r);return`rgba(${l}, ${s}, ${c}, 0.8)`},M=r=>{const{width:l,height:s}=r,c=o=>`${Math.ceil(Math.random()*o)}px`;return{left:c(l),top:c(s)}},x="_massive-data_15ggy_1",b={massiveData:x};class _ extends C{constructor(){super(...arguments);d(this,"state",{containerShape:{width:0,height:0},dataList:[]});d(this,"el",m())}refresh(){const{offsetWidth:s,offsetHeight:c}=this.el.current,{dataCount:o}=this.props,a=new Array(o).fill(666);this.setState({containerShape:{width:s,height:c},dataList:a})}componentDidMount(){this.refresh()}componentDidUpdate(s){const{dataCount:c}=s;c!==this.props.dataCount&&this.refresh()}render(){const{dataList:s,containerShape:c}=this.state,o=()=>s.map((a,i)=>n(v,{containerShape:c},i));return n("div",{ref:this.el,className:b.massiveData,children:o()})}}const k="_settings_1ouph_1",$="_btn-group_1ouph_9",p={settings:k,btnGroup:$},I=r=>{const{massiveDataConfig:l}=r,{onMassiveDataConfigChange:s}=r,[c,o]=E(l),{dataCount:a}=c;return e("div",{className:p.settings,children:[e("section",{children:[n("label",{htmlFor:"massive-data-settings-data-count",children:"\u6570\u636E\u91CF\uFF1A"}),n("input",{id:"massive-data-settings-data-count",type:"number",value:a,onChange:i=>o({dataCount:Number(i.target.value)})})]}),e("section",{className:p.btnGroup,children:[n("button",{onClick:()=>o({dataCount:1e3}),children:"\u5C11\u91CF\uFF08\u4E0D\u5361\u987F\uFF09"}),n("button",{onClick:()=>o({dataCount:5e3}),children:"\u4E2D\u91CF\uFF08\u8F7B\u5FAE\u5361\u987F\uFF09"}),n("button",{onClick:()=>o({dataCount:2e4}),children:"\u5927\u91CF\uFF08\u660E\u663E\u5361\u987F\uFF09"})]}),n("button",{onClick:()=>s(c),children:"\u4FDD\u5B58\u914D\u7F6E"})]})},T="_container_pdjdc_1",w={container:T},R=()=>{const[r,l]=E({dataCount:100}),{dataCount:s}=r,c=o=>{l(o)};return e("div",{className:w.container,children:[n(_,{dataCount:s}),n(I,{massiveDataConfig:r,onMassiveDataConfigChange:c})]})},P="_circle_1ptt5_1",H={circle:P},W=r=>{const{containerShape:l}=r,s=y(()=>({background:q(),...U(l)}),[]);return n("div",{className:H.circle,style:s})},q=()=>{const r=()=>Math.floor(Math.random()*255),[l,s,c]=new Array(3).fill(0).map(r);return`rgba(${l}, ${s}, ${c}, 0.8)`},U=r=>{const{width:l,height:s}=r,c=o=>`${Math.ceil(Math.random()*o)}px`;return{left:c(l),top:c(s)}},j="_massive-data_15ggy_1",G={massiveData:j};class z extends C{constructor(){super(...arguments);d(this,"state",{containerShape:{width:0,height:0},dataList:[],renderList:[]});d(this,"el",m())}refresh(){const{timeSlicingCount:s}=this.props,{offsetWidth:c,offsetHeight:o}=this.el.current,{dataCount:a}=this.props,i=new Array(a).fill(666),t=Math.ceil(i.length/s);this.setState({containerShape:{width:c,height:o},dataList:i,renderList:[]},()=>{this.renderListByTimeSlicing(1,t)})}renderListByTimeSlicing(s,c){if(s>c)return;const{renderList:o}=this.state;o.push(this.renderTimeSlice(s)),this.setState({renderList:o}),requestIdleCallback(()=>{this.renderListByTimeSlicing(++s,c)})}renderTimeSlice(s){const{dataList:c,containerShape:o}=this.state,{timeSlicingCount:a}=this.props,i=c.slice((s-1)*a,s*a);return n(g,{children:i.map((t,N)=>n(W,{containerShape:o},`${s}-${N}`))},s)}componentDidMount(){this.refresh()}componentDidUpdate(s){const{dataCount:c,timeSlicingCount:o}=s,{dataCount:a,timeSlicingCount:i}=this.props;(c!==a||o!==i)&&this.refresh()}render(){const{renderList:s}=this.state;return n("div",{ref:this.el,className:G.massiveData,children:s})}}const O="_settings_1ouph_1",X="_btn-group_1ouph_9",F={settings:O,btnGroup:X},J=r=>{const{massiveDataConfig:l}=r,{onMassiveDataConfigChange:s}=r,[c,o]=E(l),{dataCount:a,timeSlicingCount:i}=c;return e("div",{className:F.settings,children:[e("section",{children:[n("label",{htmlFor:"massive-data-settings-data-count",children:"\u6570\u636E\u91CF\uFF1A"}),n("input",{id:"massive-data-settings-data-count",type:"number",value:a,onChange:t=>o({...c,dataCount:Number(t.target.value)})})]}),e("section",{className:F.btnGroup,children:[n("button",{onClick:()=>o({...c,dataCount:1e3}),children:"\u5C11\u91CF"}),n("button",{onClick:()=>o({...c,dataCount:5e3}),children:"\u4E2D\u91CF"}),n("button",{onClick:()=>o({...c,dataCount:2e4}),children:"\u5927\u91CF"})]}),e("section",{children:[n("label",{htmlFor:"massive-data-settings-time-slicing-count",children:"\u5355\u4E2A\u65F6\u95F4\u7247\u6E32\u67D3\u6570\u636E\u91CF\uFF1A"}),n("input",{id:"massive-data-settings-time-slicing-count",type:"text",value:i,onChange:t=>o({...c,timeSlicingCount:Number(t.target.value)})})]}),n("button",{onClick:()=>s(c),children:"\u4FDD\u5B58\u914D\u7F6E"})]})},K="_container_pdjdc_1",Q={container:K},V=()=>{const[r,l]=E({dataCount:100,timeSlicingCount:50}),{dataCount:s,timeSlicingCount:c}=r,o=a=>{l(a)};return e("div",{className:Q.container,children:[n(z,{dataCount:s,timeSlicingCount:c}),n(J,{massiveDataConfig:r,onMassiveDataConfigChange:o})]})},el=void 0,sl=[{id:"1-\u6848\u4F8B\u573A\u666F",text:"1. \u6848\u4F8B\u573A\u666F",depth:2},{id:"2-\u65B9\u6848\u4E00\u65F6\u95F4\u5206\u7247",text:"2. \u65B9\u6848\u4E00\uFF1A\u65F6\u95F4\u5206\u7247",depth:2},{id:"3-\u65B9\u6848\u4E8C\u865A\u62DF\u5217\u8868",text:"3. \u65B9\u6848\u4E8C\uFF1A\u865A\u62DF\u5217\u8868",depth:2}],cl="\u6E32\u67D3\u6D77\u91CF\u6570\u636E";function D(r){const l=Object.assign({h1:"h1",a:"a",h2:"h2",div:"div",button:"button",span:"span",pre:"pre",code:"code",p:"p",ol:"ol",li:"li"},r.components);return e(B,{children:[e(l.h1,{id:"\u6E32\u67D3\u6D77\u91CF\u6570\u636E",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6E32\u67D3\u6D77\u91CF\u6570\u636E",children:"#"}),"\u6E32\u67D3\u6D77\u91CF\u6570\u636E"]}),`
`,e(l.h2,{id:"1-\u6848\u4F8B\u573A\u666F",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#1-\u6848\u4F8B\u573A\u666F",children:"#"}),"1. \u6848\u4F8B\u573A\u666F"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u6570\u636E\u91CF */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  dataCount"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u5BB9\u5668\u5143\u7D20\u5F62\u72B6\u4FE1\u606F */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  containerShape"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ContainerShape"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u6E32\u67D3\u5217\u8868 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  dataList"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"[]"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataProps"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"containerShape"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"width"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"height"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" []"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  el "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"createRef"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"HTMLDivElement"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"refresh"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u83B7\u53D6\u5BB9\u5668\u5143\u7D20\u7684\u5BBD\u9AD8"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"offsetWidth"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"offsetHeight"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"el"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"current"}),n(l.span,{style:{color:"#81A1C1"},children:"!"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u751F\u6210\u6E32\u67D3\u5217\u8868"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"new"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Array"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"dataCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"fill"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#B48EAD"},children:"666"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"containerShape"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"width"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"offsetWidth"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"height"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"offsetHeight"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u751F\u6210\u6E32\u67D3\u5217\u8868 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"componentDidMount"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"refresh"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"componentDidUpdate"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"prevProps"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataProps"}),n(l.span,{style:{color:"#ECEFF4"},children:">)"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"prevProps"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"dataCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"!=="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"dataCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"refresh"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"containerShape"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u6839\u636E\u6E32\u67D3\u5217\u8868\u5F97\u5230\u7684\u89C6\u56FE\u5143\u7D20\u5217\u8868 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"renderList"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"map"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"_"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"idx"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Circle"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"containerShape"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"containerShape"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"key"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"idx"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"      ))"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ref"}),n(l.span,{style:{color:"#81A1C1"},children:"={this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"el"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"massiveData"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#88C0D0"},children:"renderList"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(h,{children:n(R,{})}),`
`,e(l.h2,{id:"2-\u65B9\u6848\u4E00\u65F6\u95F4\u5206\u7247",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#2-\u65B9\u6848\u4E00\u65F6\u95F4\u5206\u7247",children:"#"}),"2. \u65B9\u6848\u4E00\uFF1A\u65F6\u95F4\u5206\u7247"]}),`
`,n(l.p,{children:"\u5927\u6570\u636E\u6E32\u67D3\u65F6\u5982\u679C\u4E00\u6B21\u6027\u6E32\u67D3\u5168\u90E8\u6570\u636E\u4F1A\u9020\u6210\u4E0A\u9762 Demo \u4E2D\u7684\u5361\u987F\u6548\u679C\uFF0C\u4F46\u662F\u5982\u679C\u628A\u5B83\u4EEC\u90FD\u62C6\u5206\u5230\u5404\u4E2A\u6BCF\u4E2A\u7EC6\u5C0F\u7684\u65F6\u95F4\u7247\u4E2D\u53BB\u8FDB\u884C\u5C31\u4E0D\u4F1A\u5361\u987F\u4E86"}),`
`,n(l.p,{children:"\u8FD9\u79CD\u89E3\u51B3\u65B9\u6848\u65E0\u8BBA\u662F\u4F1A\u6539\u53D8\u53EF\u89C6\u533A\u57DF\u957F\u5217\u8868\uFF0C\u8FD8\u662F\u4E0D\u4F1A\u6539\u53D8\u53EF\u89C6\u533A\u57DF\u7684\u5927\u91CF\u6570\u636E\u6E32\u67D3\u90FD\u662F\u9002\u7528\u7684"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataConfig"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u5BB9\u5668\u5143\u7D20\u5F62\u72B6\u4FE1\u606F */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  containerShape"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ContainerShape"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u6570\u636E\u5217\u8868 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  dataList"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"[]"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u6E32\u67D3\u5217\u8868 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  renderList"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"any"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"[]"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveData"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataProps"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  state"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"containerShape"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"width"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"height"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" []"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"renderList"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" []"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  el "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"createRef"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"HTMLDivElement"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u5237\u65B0\u89C6\u56FE */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"refresh"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSlicingCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u83B7\u53D6\u5BB9\u5668\u5143\u7D20\u7684\u5BBD\u9AD8"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"offsetWidth"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"offsetHeight"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"el"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"current"}),n(l.span,{style:{color:"#81A1C1"},children:"!"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u751F\u6210\u6E32\u67D3\u5217\u8868"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"new"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Array"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"dataCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"fill"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#B48EAD"},children:"666"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u8BA1\u7B97\u9700\u8981\u591A\u5C11\u4E2A\u65F6\u95F4\u7247"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"times"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Math"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"ceil"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"length"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSlicingCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"containerShape"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#D8DEE9"},children:"width"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"offsetWidth"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#D8DEE9"},children:"height"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"offsetHeight"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"        "}),n(l.span,{style:{color:"#616E88"},children:"// \u6BCF\u6B21 refresh \u9700\u8981\u6E05\u7A7A\u4E4B\u524D\u7F13\u5B58\u7684 renderList"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"renderList"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" []"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"        "}),n(l.span,{style:{color:"#616E88"},children:"// \u6570\u636E\u5217\u8868\u66F4\u65B0\u540E\u542F\u52A8\u65F6\u95F4\u5206\u7247\u6E32\u67D3\u6D41\u7A0B"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"renderListByTimeSlicing"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"times"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/**"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"   * "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u65F6\u95F4\u5206\u7247\u6E32\u67D3\u6D41\u7A0B"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"   * "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"param"}),n(l.span,{style:{color:"#616E88"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSliceIdx"}),n(l.span,{style:{color:"#616E88"},children:" \u5F53\u524D\u6240\u5728\u7684\u65F6\u95F4\u5206\u7247\u4E0B\u6807 -- \u4ECE 1 \u5F00\u59CB"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"   * "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"param"}),n(l.span,{style:{color:"#616E88"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"times"}),n(l.span,{style:{color:"#616E88"},children:" \u603B\u5171\u7684\u65F6\u95F4\u7247\u6570\u91CF"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#616E88"},children:"   */"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"renderListByTimeSlicing"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSliceIdx"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"times"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// base case: \u6240\u6709\u65F6\u95F4\u7247\u6E32\u67D3\u5B8C\u6BD5\u5219\u6CA1\u5FC5\u8981\u518D\u6E32\u67D3"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSliceIdx"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"times"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#81A1C1"},children:"return"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u5F80 this.state.renderList \u4E2D\u6DFB\u52A0\u6570\u636E\u8FDB\u884C\u7F13\u5B58\uFF0C\u65B9\u4FBF\u540E\u7EED\u6E32\u67D3\u65F6\u76F4\u63A5\u590D\u7528"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"renderList"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"renderList"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"push"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"renderTimeSlice"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSliceIdx"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u66F4\u65B0 renderList \u89E6\u53D1\u5F53\u524D\u65F6\u95F4\u7247\u5BF9\u5E94\u7684\u89C6\u56FE\u66F4\u65B0"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"renderList"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u5728 requestIdleCallback \u4E2D\u9012\u5F52\u6E32\u67D3\u540E\u7EED\u65F6\u95F4\u7247"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"requestIdleCallback"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"renderListByTimeSlicing"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#81A1C1"},children:"++"}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSliceIdx"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"times"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u6E32\u67D3\u65F6\u95F4\u7247 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"renderTimeSlice"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSliceIdx"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"number"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"containerShape"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSlicingCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u622A\u53D6\u51FA\u5F53\u524D\u65F6\u95F4\u7247\u5BF9\u5E94\u7684\u6570\u636E\u5217\u8868"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"targetDataList"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"slice"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      ("}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSliceIdx"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"-"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#81A1C1"},children:"*"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSlicingCount"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSliceIdx"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"*"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSlicingCount"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Fragment"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"key"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSliceIdx"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"targetDataList"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"map"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"_"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"idx"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Circle"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#8FBCBB"},children:"containerShape"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"containerShape"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#8FBCBB"},children:"key"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"`${"}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSliceIdx"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#A3BE8C"},children:"-"}),n(l.span,{style:{color:"#ECEFF4"},children:"${"}),n(l.span,{style:{color:"#D8DEE9"},children:"idx"}),n(l.span,{style:{color:"#ECEFF4"},children:"}`"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        ))"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</"}),n(l.span,{style:{color:"#8FBCBB"},children:"Fragment"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u751F\u6210\u6E32\u67D3\u5217\u8868 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"componentDidMount"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"refresh"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"componentDidUpdate"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"prevProps"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"MassiveDataProps"}),n(l.span,{style:{color:"#ECEFF4"},children:">)"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataCount"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSlicingCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"prevProps"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" dataCount"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"nextDataCount"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" timeSlicingCount"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"nextTimeSlicingCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u4EC5\u5F53 dataCount \u6216 timeSlicingCount \u53D1\u751F\u53D8\u5316\u65F6\u624D\u91CD\u65B0\u6E32\u67D3"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"!=="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"nextDataCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"||"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSlicingCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"!=="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"nextTimeSlicingCount"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    ) "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"refresh"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"renderList"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"ref"}),n(l.span,{style:{color:"#81A1C1"},children:"={this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"el"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"className"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"s"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"massiveData"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"renderList"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(h,{children:n(V,{})}),`
`,n(l.p,{children:"\u6838\u5FC3\u601D\u8DEF\u4E3B\u8981\u5206\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A"}),`
`,e(l.ol,{children:[`
`,e(l.li,{children:[`
`,n(l.p,{children:"\u8BA1\u7B97\u65F6\u95F4\u7247\u7684\u6570\u91CF\uFF0C\u53EF\u4EE5\u7528\u603B\u6570\u636E\u91CF\u9664\u4EE5\u6BCF\u4E2A\u65F6\u95F4\u7247\u7684\u6E32\u67D3\u6570\u91CF\u83B7\u5F97\uFF08\u9700\u8981\u5411\u4E0A\u53D6\u6574\u786E\u4FDD\u80FD\u591F\u6E32\u67D3\u6240\u6709\u6570\u636E\uFF09"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"times"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Math"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"ceil"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"length"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSlicingCount"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`]}),`
`,e(l.li,{children:[`
`,n(l.p,{children:"\u5728 setState \u7684\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u51FD\u6570\u4E2D\u542F\u52A8\u65F6\u95F4\u5206\u7247\u6E32\u67D3\u6D41\u7A0B"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"containerShape"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"width"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"offsetWidth"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"height"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"offsetHeight"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"dataList"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u6BCF\u6B21 refresh \u9700\u8981\u6E05\u7A7A\u4E4B\u524D\u7F13\u5B58\u7684 renderList"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"renderList"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" []"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"// \u6570\u636E\u5217\u8868\u66F4\u65B0\u540E\u542F\u52A8\u65F6\u95F4\u5206\u7247\u6E32\u67D3\u6D41\u7A0B"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"renderListByTimeSlicing"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"times"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:")"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`]}),`
`,e(l.li,{children:[`
`,n(l.p,{children:"\u5229\u7528\u7C7B\u7EC4\u4EF6\u7684 state \u8FDB\u884C\u7F13\u5B58\uFF0C\u6BCF\u6B21\u65F6\u95F4\u7247\u6E32\u67D3\u90FD\u5C06\u6E32\u67D3\u5F97\u5230\u7684\u5143\u7D20\u52A0\u5165\u5230\u7F13\u5B58\u6570\u7EC4\u4E2D\uFF0C\u5E76\u8C03\u7528 setState \u66F4\u65B0\u5F53\u524D\u65F6\u95F4\u7247\u89C6\u56FE"}),`
`]}),`
`,e(l.li,{children:[`
`,n(l.p,{children:"\u5229\u7528 requestIdleCallback \u9012\u5F52\u6E32\u67D3\u540E\u7EED\u65F6\u95F4\u7247\uFF0C\u76F4\u5230\u6240\u6709\u65F6\u95F4\u7247\u6E32\u67D3\u5B8C\u6210"}),`
`]}),`
`,e(l.li,{children:[`
`,n(l.p,{children:"\u6BCF\u4E2A\u65F6\u95F4\u7247\u7684\u6E32\u67D3\u4F7F\u7528 Fragment \u8FDB\u884C\u4F18\u5316"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Fragment"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"key"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSliceIdx"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"targetDataList"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"map"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"_"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"idx"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Circle"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"containerShape"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"containerShape"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"key"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"`${"}),n(l.span,{style:{color:"#D8DEE9"},children:"timeSliceIdx"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#A3BE8C"},children:"-"}),n(l.span,{style:{color:"#ECEFF4"},children:"${"}),n(l.span,{style:{color:"#D8DEE9"},children:"idx"}),n(l.span,{style:{color:"#ECEFF4"},children:"}`"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  ))"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"</"}),n(l.span,{style:{color:"#8FBCBB"},children:"Fragment"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`]}),`
`]}),`
`,e(l.h2,{id:"3-\u65B9\u6848\u4E8C\u865A\u62DF\u5217\u8868",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#3-\u65B9\u6848\u4E8C\u865A\u62DF\u5217\u8868",children:"#"}),"3. \u65B9\u6848\u4E8C\uFF1A\u865A\u62DF\u5217\u8868"]})]})}function rl(r={}){const{wrapper:l}=r.components||{};return l?n(l,Object.assign({},r,{children:n(D,r)})):D(r)}const ol="2022/12/14 06:33:26",al=`import { DemoBlock } from '@island/demo-block'

import { Demo1 } from '~/demos/render-massive-data/demo1'
import { Demo2 } from '~/demos/render-massive-data/demo2'

# \u6E32\u67D3\u6D77\u91CF\u6570\u636E

## 1. \u6848\u4F8B\u573A\u666F

\`\`\`tsx
interface MassiveDataProps {
  /** @description \u6570\u636E\u91CF */
  dataCount: number
}
interface MassiveDataState {
  /** @description \u5BB9\u5668\u5143\u7D20\u5F62\u72B6\u4FE1\u606F */
  containerShape: ContainerShape

  /** @description \u6E32\u67D3\u5217\u8868 */
  dataList: number[]
}
class MassiveData extends Component<MassiveDataProps, MassiveDataState> {
  state: Readonly<MassiveDataState> = {
    containerShape: { width: 0, height: 0 },
    dataList: [],
  }

  el = createRef<HTMLDivElement>()

  refresh() {
    // \u83B7\u53D6\u5BB9\u5668\u5143\u7D20\u7684\u5BBD\u9AD8
    const { offsetWidth, offsetHeight } = this.el.current!

    // \u751F\u6210\u6E32\u67D3\u5217\u8868
    const { dataCount } = this.props
    const dataList = new Array(dataCount).fill(666)

    this.setState({
      containerShape: {
        width: offsetWidth,
        height: offsetHeight,
      },

      dataList,
    })
  }

  /** @description \u751F\u6210\u6E32\u67D3\u5217\u8868 */
  componentDidMount(): void {
    this.refresh()
  }

  componentDidUpdate(prevProps: Readonly<MassiveDataProps>): void {
    const { dataCount } = prevProps
    if (dataCount !== this.props.dataCount) {
      this.refresh()
    }
  }

  render(): ReactNode {
    const { dataList, containerShape } = this.state

    /** @description \u6839\u636E\u6E32\u67D3\u5217\u8868\u5F97\u5230\u7684\u89C6\u56FE\u5143\u7D20\u5217\u8868 */
    const renderList = () =>
      dataList.map((_, idx) => (
        <Circle containerShape={containerShape} key={idx} />
      ))

    return (
      <div ref={this.el} className={s.massiveData}>
        {renderList()}
      </div>
    )
  }
}
\`\`\`

<DemoBlock>
  <Demo1 />
</DemoBlock>

## 2. \u65B9\u6848\u4E00\uFF1A\u65F6\u95F4\u5206\u7247

\u5927\u6570\u636E\u6E32\u67D3\u65F6\u5982\u679C\u4E00\u6B21\u6027\u6E32\u67D3\u5168\u90E8\u6570\u636E\u4F1A\u9020\u6210\u4E0A\u9762 Demo \u4E2D\u7684\u5361\u987F\u6548\u679C\uFF0C\u4F46\u662F\u5982\u679C\u628A\u5B83\u4EEC\u90FD\u62C6\u5206\u5230\u5404\u4E2A\u6BCF\u4E2A\u7EC6\u5C0F\u7684\u65F6\u95F4\u7247\u4E2D\u53BB\u8FDB\u884C\u5C31\u4E0D\u4F1A\u5361\u987F\u4E86

\u8FD9\u79CD\u89E3\u51B3\u65B9\u6848\u65E0\u8BBA\u662F\u4F1A\u6539\u53D8\u53EF\u89C6\u533A\u57DF\u957F\u5217\u8868\uFF0C\u8FD8\u662F\u4E0D\u4F1A\u6539\u53D8\u53EF\u89C6\u533A\u57DF\u7684\u5927\u91CF\u6570\u636E\u6E32\u67D3\u90FD\u662F\u9002\u7528\u7684

\`\`\`tsx
type MassiveDataProps = MassiveDataConfig
interface MassiveDataState {
  /** @description \u5BB9\u5668\u5143\u7D20\u5F62\u72B6\u4FE1\u606F */
  containerShape: ContainerShape

  /** @description \u6570\u636E\u5217\u8868 */
  dataList: number[]

  /** @description \u6E32\u67D3\u5217\u8868 */
  renderList: any[]
}
class MassiveData extends Component<MassiveDataProps, MassiveDataState> {
  state: Readonly<MassiveDataState> = {
    containerShape: { width: 0, height: 0 },
    dataList: [],
    renderList: [],
  }

  el = createRef<HTMLDivElement>()

  /** @description \u5237\u65B0\u89C6\u56FE */
  refresh() {
    const { timeSlicingCount } = this.props

    // \u83B7\u53D6\u5BB9\u5668\u5143\u7D20\u7684\u5BBD\u9AD8
    const { offsetWidth, offsetHeight } = this.el.current!

    // \u751F\u6210\u6E32\u67D3\u5217\u8868
    const { dataCount } = this.props
    const dataList = new Array(dataCount).fill(666)

    // \u8BA1\u7B97\u9700\u8981\u591A\u5C11\u4E2A\u65F6\u95F4\u7247
    const times = Math.ceil(dataList.length / timeSlicingCount)

    this.setState(
      {
        containerShape: {
          width: offsetWidth,
          height: offsetHeight,
        },

        dataList,

        // \u6BCF\u6B21 refresh \u9700\u8981\u6E05\u7A7A\u4E4B\u524D\u7F13\u5B58\u7684 renderList
        renderList: [],
      },

      () => {
        // \u6570\u636E\u5217\u8868\u66F4\u65B0\u540E\u542F\u52A8\u65F6\u95F4\u5206\u7247\u6E32\u67D3\u6D41\u7A0B
        this.renderListByTimeSlicing(1, times)
      },
    )
  }

  /**
   * @description \u65F6\u95F4\u5206\u7247\u6E32\u67D3\u6D41\u7A0B
   * @param timeSliceIdx \u5F53\u524D\u6240\u5728\u7684\u65F6\u95F4\u5206\u7247\u4E0B\u6807 -- \u4ECE 1 \u5F00\u59CB
   * @param times \u603B\u5171\u7684\u65F6\u95F4\u7247\u6570\u91CF
   */
  renderListByTimeSlicing(timeSliceIdx: number, times: number) {
    // base case: \u6240\u6709\u65F6\u95F4\u7247\u6E32\u67D3\u5B8C\u6BD5\u5219\u6CA1\u5FC5\u8981\u518D\u6E32\u67D3
    if (timeSliceIdx > times) return

    // \u5F80 this.state.renderList \u4E2D\u6DFB\u52A0\u6570\u636E\u8FDB\u884C\u7F13\u5B58\uFF0C\u65B9\u4FBF\u540E\u7EED\u6E32\u67D3\u65F6\u76F4\u63A5\u590D\u7528
    const { renderList } = this.state
    renderList.push(this.renderTimeSlice(timeSliceIdx))

    // \u66F4\u65B0 renderList \u89E6\u53D1\u5F53\u524D\u65F6\u95F4\u7247\u5BF9\u5E94\u7684\u89C6\u56FE\u66F4\u65B0
    this.setState({
      renderList,
    })

    // \u5728 requestIdleCallback \u4E2D\u9012\u5F52\u6E32\u67D3\u540E\u7EED\u65F6\u95F4\u7247
    requestIdleCallback(() => {
      this.renderListByTimeSlicing(++timeSliceIdx, times)
    })
  }

  /** @description \u6E32\u67D3\u65F6\u95F4\u7247 */
  renderTimeSlice(timeSliceIdx: number) {
    const { dataList, containerShape } = this.state
    const { timeSlicingCount } = this.props

    // \u622A\u53D6\u51FA\u5F53\u524D\u65F6\u95F4\u7247\u5BF9\u5E94\u7684\u6570\u636E\u5217\u8868
    const targetDataList = dataList.slice(
      (timeSliceIdx - 1) * timeSlicingCount,
      timeSliceIdx * timeSlicingCount,
    )

    return (
      <Fragment key={timeSliceIdx}>
        {targetDataList.map((_, idx) => (
          <Circle
            containerShape={containerShape}
            key={\`\${timeSliceIdx}-\${idx}\`}
          />
        ))}
      </Fragment>
    )
  }

  /** @description \u751F\u6210\u6E32\u67D3\u5217\u8868 */
  componentDidMount(): void {
    this.refresh()
  }

  componentDidUpdate(prevProps: Readonly<MassiveDataProps>): void {
    const { dataCount, timeSlicingCount } = prevProps
    const { dataCount: nextDataCount, timeSlicingCount: nextTimeSlicingCount } =
      this.props

    // \u4EC5\u5F53 dataCount \u6216 timeSlicingCount \u53D1\u751F\u53D8\u5316\u65F6\u624D\u91CD\u65B0\u6E32\u67D3
    if (
      dataCount !== nextDataCount ||
      timeSlicingCount !== nextTimeSlicingCount
    ) {
      this.refresh()
    }
  }

  render(): ReactNode {
    const { renderList } = this.state

    return (
      <div ref={this.el} className={s.massiveData}>
        {renderList}
      </div>
    )
  }
}
\`\`\`

<DemoBlock>
  <Demo2 />
</DemoBlock>

\u6838\u5FC3\u601D\u8DEF\u4E3B\u8981\u5206\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A

1. \u8BA1\u7B97\u65F6\u95F4\u7247\u7684\u6570\u91CF\uFF0C\u53EF\u4EE5\u7528\u603B\u6570\u636E\u91CF\u9664\u4EE5\u6BCF\u4E2A\u65F6\u95F4\u7247\u7684\u6E32\u67D3\u6570\u91CF\u83B7\u5F97\uFF08\u9700\u8981\u5411\u4E0A\u53D6\u6574\u786E\u4FDD\u80FD\u591F\u6E32\u67D3\u6240\u6709\u6570\u636E\uFF09

   \`\`\`tsx
   const times = Math.ceil(dataList.length / timeSlicingCount)
   \`\`\`

2. \u5728 setState \u7684\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u51FD\u6570\u4E2D\u542F\u52A8\u65F6\u95F4\u5206\u7247\u6E32\u67D3\u6D41\u7A0B

   \`\`\`tsx
   this.setState(
     {
       containerShape: {
         width: offsetWidth,
         height: offsetHeight,
       },

       dataList,

       // \u6BCF\u6B21 refresh \u9700\u8981\u6E05\u7A7A\u4E4B\u524D\u7F13\u5B58\u7684 renderList
       renderList: [],
     },

     () => {
       // \u6570\u636E\u5217\u8868\u66F4\u65B0\u540E\u542F\u52A8\u65F6\u95F4\u5206\u7247\u6E32\u67D3\u6D41\u7A0B
       this.renderListByTimeSlicing(1, times)
     },
   )
   \`\`\`

3. \u5229\u7528\u7C7B\u7EC4\u4EF6\u7684 state \u8FDB\u884C\u7F13\u5B58\uFF0C\u6BCF\u6B21\u65F6\u95F4\u7247\u6E32\u67D3\u90FD\u5C06\u6E32\u67D3\u5F97\u5230\u7684\u5143\u7D20\u52A0\u5165\u5230\u7F13\u5B58\u6570\u7EC4\u4E2D\uFF0C\u5E76\u8C03\u7528 setState \u66F4\u65B0\u5F53\u524D\u65F6\u95F4\u7247\u89C6\u56FE

4. \u5229\u7528 requestIdleCallback \u9012\u5F52\u6E32\u67D3\u540E\u7EED\u65F6\u95F4\u7247\uFF0C\u76F4\u5230\u6240\u6709\u65F6\u95F4\u7247\u6E32\u67D3\u5B8C\u6210

5. \u6BCF\u4E2A\u65F6\u95F4\u7247\u7684\u6E32\u67D3\u4F7F\u7528 Fragment \u8FDB\u884C\u4F18\u5316

   \`\`\`tsx
   <Fragment key={timeSliceIdx}>
     {targetDataList.map((_, idx) => (
       <Circle containerShape={containerShape} key={\`\${timeSliceIdx}-\${idx}\`} />
     ))}
   </Fragment>
   \`\`\`

## 3. \u65B9\u6848\u4E8C\uFF1A\u865A\u62DF\u5217\u8868
`;export{al as content,rl as default,el as frontmatter,ol as lastUpdatedTime,cl as title,sl as toc};
