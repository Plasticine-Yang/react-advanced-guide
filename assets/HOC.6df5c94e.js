var I=Object.defineProperty;var Y=(s,l,c)=>l in s?I(s,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[l]=c;var y=(s,l,c)=>(Y(s,typeof l!="symbol"?l+"":l,c),c);import{jsx as n,jsxs as e,Fragment as V}from"react/jsx-runtime";import{D as E}from"./index.6529e49c.js";import a from"react";import{_ as z}from"./island_inject.6e5e5457.js";import{c as X}from"./scoped-log.b13f94b9.js";class q extends a.Component{render(){const l=K(U);return n(l,{})}}const K=s=>class extends a.Component{render(){return n(s,{...{name:"foo"}})}};class U extends a.Component{render(){const{name:l}=this.props;return e("div",{children:["name: ",l]})}}class G extends a.Component{render(){const l=J(Q);return n(l,{})}}const J=s=>class extends s{constructor(){super(...arguments);y(this,"state",{name:"foo"})}};class Q extends a.Component{render(){const{name:l}=this.state;return e("div",{children:["name: ",l]})}}const Z=()=>{const s=ll(nl);return n(s,{})},ll=s=>class extends s{render(){const c=super.render(),i=c.props.children,p=a.Children.map(i,(h,F)=>F===0?n("li",{children:"React 666"}):h);return a.cloneElement(c,c.props,p)}};class nl extends a.Component{render(){return e("ul",{children:[n("li",{children:"React"}),n("li",{children:"Vue"}),n("li",{children:"Solid"}),n("li",{children:"Svelte"})]})}}const el=()=>{const s=sl(()=>new Promise(l=>{setTimeout(()=>{l(z(()=>import("./component.fb29a80a.js"),[]))},5e3)}));return n("div",{children:n(s,{})})},sl=s=>class extends a.Component{constructor(){super(...arguments);y(this,"state",{Component:null})}componentDidMount(){this.state.Component||s().then(i=>i.default).then(i=>this.setState({Component:i}))}render(){const{Component:i}=this.state;return i?n(i,{...this.props}):n(rl,{})}},rl=()=>n("div",{children:"Loading..."}),cl=X("HOCDemo5"),ol=s=>{class l extends a.Component{handleClick(){cl.log("\u68C0\u6D4B\u5230 click \u4E8B\u4EF6\u89E6\u53D1")}render(){return n("div",{onClick:()=>this.handleClick(),children:n(s,{...this.props})})}}return l};class al extends a.Component{render(){return n("button",{children:"Button"})}}const tl=ol(al);var $={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,H=o?Symbol.for("react.element"):60103,x=o?Symbol.for("react.portal"):60106,D=o?Symbol.for("react.fragment"):60107,C=o?Symbol.for("react.strict_mode"):60108,m=o?Symbol.for("react.profiler"):60114,B=o?Symbol.for("react.provider"):60109,N=o?Symbol.for("react.context"):60110,v=o?Symbol.for("react.async_mode"):60111,A=o?Symbol.for("react.concurrent_mode"):60111,u=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,il=o?Symbol.for("react.suspense_list"):60120,g=o?Symbol.for("react.memo"):60115,R=o?Symbol.for("react.lazy"):60116,pl=o?Symbol.for("react.block"):60121,dl=o?Symbol.for("react.fundamental"):60117,El=o?Symbol.for("react.responder"):60118,hl=o?Symbol.for("react.scope"):60119;function t(s){if(typeof s=="object"&&s!==null){var l=s.$$typeof;switch(l){case H:switch(s=s.type,s){case v:case A:case D:case m:case C:case f:return s;default:switch(s=s&&s.$$typeof,s){case N:case u:case R:case g:case B:return s;default:return l}}case x:return l}}}function k(s){return t(s)===A}r.AsyncMode=v;r.ConcurrentMode=A;r.ContextConsumer=N;r.ContextProvider=B;r.Element=H;r.ForwardRef=u;r.Fragment=D;r.Lazy=R;r.Memo=g;r.Portal=x;r.Profiler=m;r.StrictMode=C;r.Suspense=f;r.isAsyncMode=function(s){return k(s)||t(s)===v};r.isConcurrentMode=k;r.isContextConsumer=function(s){return t(s)===N};r.isContextProvider=function(s){return t(s)===B};r.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===H};r.isForwardRef=function(s){return t(s)===u};r.isFragment=function(s){return t(s)===D};r.isLazy=function(s){return t(s)===R};r.isMemo=function(s){return t(s)===g};r.isPortal=function(s){return t(s)===x};r.isProfiler=function(s){return t(s)===m};r.isStrictMode=function(s){return t(s)===C};r.isSuspense=function(s){return t(s)===f};r.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===D||s===A||s===m||s===C||s===f||s===il||typeof s=="object"&&s!==null&&(s.$$typeof===R||s.$$typeof===g||s.$$typeof===B||s.$$typeof===N||s.$$typeof===u||s.$$typeof===dl||s.$$typeof===El||s.$$typeof===hl||s.$$typeof===pl)};r.typeOf=t;(function(s){s.exports=r})($);var S=$.exports,Fl={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yl={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dl={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},b={};b[S.ForwardRef]=Dl;b[S.Memo]=_;function P(s){return S.isMemo(s)?_:b[s.$$typeof]||Fl}var Cl=Object.defineProperty,ml=Object.getOwnPropertyNames,W=Object.getOwnPropertySymbols,Bl=Object.getOwnPropertyDescriptor,Nl=Object.getPrototypeOf,T=Object.prototype;function L(s,l,c){if(typeof l!="string"){if(T){var i=Nl(l);i&&i!==T&&L(s,i,c)}var p=ml(l);W&&(p=p.concat(W(l)));for(var h=P(s),F=P(l),O=0;O<p.length;++O){var d=p[O];if(!yl[d]&&!(c&&c[d])&&!(F&&F[d])&&!(h&&h[d])){var M=Bl(l,d);try{Cl(s,d,M)}catch{}}}}return s}var Al=L;const ul=s=>{class l extends a.Component{render(){return n(s,{})}}return Al(l,s),l},fl=()=>{const s=ul(j);return console.log(s.age),s.sayHello(),n(s,{})};class j extends a.Component{static sayHello(){console.log("hello")}render(){return n("div",{children:"Foo"})}}y(j,"age",21);const wl=void 0,$l=[{id:"1-\u63D0\u51FA\u95EE\u9898",text:"1. \u63D0\u51FA\u95EE\u9898",depth:2},{id:"2-hoc-\u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898",text:"2. HOC \u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F",depth:2},{id:"3-\u4E24\u79CD\u9AD8\u9636\u7EC4\u4EF6----\u5C5E\u6027\u4EE3\u7406\u548C\u53CD\u5411\u7EE7\u627F",text:"3. \u4E24\u79CD\u9AD8\u9636\u7EC4\u4EF6 -- \u5C5E\u6027\u4EE3\u7406\u548C\u53CD\u5411\u7EE7\u627F",depth:2},{id:"31-\u5C5E\u6027\u4EE3\u7406",text:"3.1. \u5C5E\u6027\u4EE3\u7406",depth:3},{id:"311-\u4F18\u70B9",text:"3.1.1. \u4F18\u70B9",depth:4},{id:"312-\u7F3A\u70B9",text:"3.1.2. \u7F3A\u70B9",depth:4},{id:"32-\u53CD\u5411\u7EE7\u627F",text:"3.2. \u53CD\u5411\u7EE7\u627F",depth:3},{id:"321-\u4F18\u70B9",text:"3.2.1. \u4F18\u70B9",depth:4},{id:"322-\u7F3A\u70B9",text:"3.2.2. \u7F3A\u70B9",depth:4},{id:"4-hoc-\u7684\u4F7F\u7528\u573A\u666F",text:"4. HOC \u7684\u4F7F\u7528\u573A\u666F",depth:2},{id:"41-\u5F3A\u5316-props",text:"4.1. \u5F3A\u5316 props",depth:3},{id:"42-\u52AB\u6301\u63A7\u5236\u6E32\u67D3\u903B\u8F91",text:"4.2. \u52AB\u6301\u63A7\u5236\u6E32\u67D3\u903B\u8F91",depth:3},{id:"43-\u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6",text:"4.3. \u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6",depth:3},{id:"44-\u5229\u7528\u88C5\u9970\u5668\u6A21\u5F0F\u76D1\u542C\u7EC4\u4EF6\u4E8B\u4EF6",text:"4.4. \u5229\u7528\u88C5\u9970\u5668\u6A21\u5F0F\u76D1\u542C\u7EC4\u4EF6\u4E8B\u4EF6",depth:3},{id:"5-\u5982\u4F55\u5904\u7406\u9759\u6001\u5C5E\u6027\u4E22\u5931\u95EE\u9898",text:"5. \u5982\u4F55\u5904\u7406\u9759\u6001\u5C5E\u6027\u4E22\u5931\u95EE\u9898\uFF1F",depth:2},{id:"6-\u603B\u7ED3",text:"6. \u603B\u7ED3",depth:2}],kl="HOC";function w(s){const l=Object.assign({h1:"h1",a:"a",h2:"h2",ol:"ol",li:"li",h3:"h3",p:"p",div:"div",button:"button",span:"span",pre:"pre",code:"code",h4:"h4",img:"img"},s.components);return e(V,{children:[e(l.h1,{id:"hoc",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#hoc",children:"#"}),"HOC"]}),`
`,e(l.h2,{id:"1-\u63D0\u51FA\u95EE\u9898",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#1-\u63D0\u51FA\u95EE\u9898",children:"#"}),"1. \u63D0\u51FA\u95EE\u9898"]}),`
`,e(l.ol,{children:[`
`,n(l.li,{children:"HOC \u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F"}),`
`,n(l.li,{children:"HOC \u7684\u4F7F\u7528\u573A\u666F\uFF1F"}),`
`]}),`
`,e(l.h2,{id:"2-hoc-\u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#2-hoc-\u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898",children:"#"}),"2. HOC \u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F"]}),`
`,e(l.ol,{children:[`
`,n(l.li,{children:"\u62E6\u622A\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u5305\u62EC\u662F\u5426\u6E32\u67D3\u7EC4\u4EF6\u3001\u61D2\u52A0\u8F7D\u7EC4\u4EF6"}),`
`,n(l.li,{children:"\u5F80\u7EC4\u4EF6\u7684 props \u4E2D\u6DF7\u5165\u6240\u9700\u7684\u4E1C\u897F\uFF0C\u6BD4\u5982\u7ED9\u975E Route \u7EC4\u4EF6\u7684 props \u6DF7\u5165 history \u5BF9\u8C61\uFF0C\u4F7F\u5176\u80FD\u591F\u652F\u6301\u8DEF\u7531\u8DF3\u8F6C"}),`
`,n(l.li,{children:"\u76D1\u63A7\u7EC4\u4EF6\u5185\u90E8\u72B6\u6001\uFF0C\u5982\u6DFB\u52A0\u989D\u5916\u751F\u547D\u5468\u671F\u3001\u5BF9\u7EC4\u4EF6\u67D0\u4E9B\u4E8B\u4EF6\u8FDB\u884C\u76D1\u542C\u7B49"}),`
`]}),`
`,e(l.h2,{id:"3-\u4E24\u79CD\u9AD8\u9636\u7EC4\u4EF6----\u5C5E\u6027\u4EE3\u7406\u548C\u53CD\u5411\u7EE7\u627F",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#3-\u4E24\u79CD\u9AD8\u9636\u7EC4\u4EF6----\u5C5E\u6027\u4EE3\u7406\u548C\u53CD\u5411\u7EE7\u627F",children:"#"}),"3. \u4E24\u79CD\u9AD8\u9636\u7EC4\u4EF6 -- \u5C5E\u6027\u4EE3\u7406\u548C\u53CD\u5411\u7EE7\u627F"]}),`
`,e(l.h3,{id:"31-\u5C5E\u6027\u4EE3\u7406",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#31-\u5C5E\u6027\u4EE3\u7406",children:"#"}),"3.1. \u5C5E\u6027\u4EE3\u7406"]}),`
`,n(l.p,{children:"\u5C06\u539F\u59CB\u7EC4\u4EF6\u5305\u88F9\u5728\u4EE3\u7406\u7EC4\u4EF6\u4E2D\u8FDB\u884C\u589E\u52A0\uFF0C\u5E76\u4E14\u539F\u59CB\u7EC4\u4EF6\u662F\u5728\u4EE3\u7406\u7EC4\u4EF6\u4E2D\u8FDB\u884C\u6E32\u67D3\u7684\uFF0C\u56E0\u6B64\u4EE3\u7406\u7EC4\u4EF6\u53EF\u4EE5\u638C\u63A7\u5BF9\u539F\u59CB\u7EC4\u4EF6\u7684\u63A7\u5236\u6743\u9650"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u5C5E\u6027\u4EE3\u7406 */"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"react"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"HOCDemo1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"TargetComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Foo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"TargetComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"typeof"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"WrappedComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"      "}),n(l.span,{style:{color:"#616E88"},children:"// \u5BF9\u539F\u59CB\u7EC4\u4EF6\u7684\u5F3A\u5316\u64CD\u4F5C -- \u6DF7\u5165 props"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"fooEnhancedProps"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FooEnhancedProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"foo"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"      "}),n(l.span,{style:{color:"#616E88"},children:"// \u539F\u59CB\u7EC4\u4EF6\u5728\u4EE3\u7406\u7EC4\u4EF6\u4E2D\u6E32\u67D3"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"{..."}),n(l.span,{style:{color:"#D8DEE9"},children:"fooEnhancedProps"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FooRawProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FooEnhancedProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" name"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"type"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FooProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FooRawProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"&"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FooEnhancedProps"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Foo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"FooProps"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"name: "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#81A1C1"},children:"}</div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"HOCDemo1"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(E,{children:n(q,{})}),`
`,n(l.p,{children:"\u8FD9\u91CC\u901A\u8FC7\u5C5E\u6027\u4EE3\u7406\u5F80\u539F\u59CB\u7EC4\u4EF6\u7684 props \u4E2D\u6DF7\u5165\u4E86\u65B0\u7684\u5C5E\u6027"}),`
`,e(l.h4,{id:"311-\u4F18\u70B9",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#311-\u4F18\u70B9",children:"#"}),"3.1.1. \u4F18\u70B9"]}),`
`,e(l.ol,{children:[`
`,n(l.li,{children:"\u4EE3\u7406\u7EC4\u4EF6\u548C\u539F\u59CB\u7EC4\u4EF6\u4F4E\u8026\u5408"}),`
`,n(l.li,{children:"\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u5747\u53EF\u4F7F\u7528"}),`
`,n(l.li,{children:"\u53EF\u4EE5\u63A7\u5236\u539F\u59CB\u7EC4\u4EF6\u662F\u5426\u6E32\u67D3"}),`
`,n(l.li,{children:"\u53EF\u4EE5\u5D4C\u5957\u4F7F\u7528"}),`
`]}),`
`,e(l.h4,{id:"312-\u7F3A\u70B9",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#312-\u7F3A\u70B9",children:"#"}),"3.1.2. \u7F3A\u70B9"]}),`
`,e(l.ol,{children:[`
`,n(l.li,{children:"\u65E0\u6CD5\u76F4\u63A5\u83B7\u53D6\u539F\u59CB\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u9700\u8981\u901A\u8FC7 ref \u83B7\u53D6"}),`
`,n(l.li,{children:"\u65E0\u6CD5\u76F4\u63A5\u7EE7\u627F\u9759\u6001\u5C5E\u6027\uFF0C\u9700\u8981\u989D\u5916\u5B9E\u73B0\u6216\u8005\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93\u624D\u884C"}),`
`,n(l.li,{children:"\u5982\u679C\u9700\u8981\u4FDD\u6301 ref \u7684\u6B63\u786E\u6307\u5411\uFF0C\u9700\u8981\u914D\u5408 forwardRef \u8F6C\u53D1 ref \u5230\u539F\u59CB\u7EC4\u4EF6\u4E0A"}),`
`]}),`
`,e(l.h3,{id:"32-\u53CD\u5411\u7EE7\u627F",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#32-\u53CD\u5411\u7EE7\u627F",children:"#"}),"3.2. \u53CD\u5411\u7EE7\u627F"]}),`
`,n(l.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u7EE7\u627F\u81EA\u539F\u59CB\u7EC4\u4EF6\u7684\u7EC4\u4EF6"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u53CD\u5411\u7EE7\u627F */"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"react"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"HOCDemo2"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"TargetComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Foo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"TargetComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"typeof"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Foo"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"WrappedComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    state"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"FooState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"foo"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FooState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  name"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"string"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Foo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"<{},"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"FooState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"name: "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#81A1C1"},children:"}</div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"HOCDemo2"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(E,{children:n(G,{})}),`
`,n(l.p,{children:"\u8FD9\u91CC\u901A\u8FC7\u53CD\u5411\u7EE7\u627F\u4FEE\u6539\u539F\u59CB\u7EC4\u4EF6\u7684 state \u5B9E\u73B0\u4E86\u548C\u4E0A\u9762\u5C5E\u6027\u4EE3\u7406\u7684 Demo \u4E2D\u76F8\u540C\u7684\u6548\u679C"}),`
`,e(l.h4,{id:"321-\u4F18\u70B9",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#321-\u4F18\u70B9",children:"#"}),"3.2.1. \u4F18\u70B9"]}),`
`,e(l.ol,{children:[`
`,n(l.li,{children:"\u80FD\u591F\u5F88\u65B9\u4FBF\u5730\u83B7\u53D6\u7EC4\u4EF6\u5185\u90E8\u7684\u72B6\u6001\uFF0C\u5982 state\u3001props\u3001\u751F\u547D\u5468\u671F\u3001\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7B49"}),`
`,n(l.li,{children:"\u57FA\u4E8E ES6 \u7684\u7EE7\u627F\u53EF\u4EE5\u5F88\u597D\u5730\u7EE7\u627F\u9759\u6001\u5C5E\u6027\uFF0C\u65E0\u9700\u989D\u5916\u5B9E\u73B0\u6216\u8005\u7B2C\u4E09\u65B9\u5E93\u5373\u53EF\u7BA1\u7406\u9759\u6001\u5C5E\u6027"}),`
`]}),`
`,e(l.h4,{id:"322-\u7F3A\u70B9",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#322-\u7F3A\u70B9",children:"#"}),"3.2.2. \u7F3A\u70B9"]}),`
`,e(l.ol,{children:[`
`,n(l.li,{children:"\u4EE3\u7406\u7EC4\u4EF6\u4E0E\u539F\u59CB\u7EC4\u4EF6\u9AD8\u8026\u5408"}),`
`,n(l.li,{children:"\u51FD\u6570\u7EC4\u4EF6\u65E0\u6CD5\u4F7F\u7528"}),`
`,n(l.li,{children:"\u5D4C\u5957\u4F7F\u7528\u6709\u98CE\u9669\uFF0C\u5185\u5C42\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u4F1A\u8986\u76D6\u5916\u5C42\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F"}),`
`]}),`
`,e(l.h2,{id:"4-hoc-\u7684\u4F7F\u7528\u573A\u666F",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#4-hoc-\u7684\u4F7F\u7528\u573A\u666F",children:"#"}),"4. HOC \u7684\u4F7F\u7528\u573A\u666F"]}),`
`,e(l.h3,{id:"41-\u5F3A\u5316-props",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#41-\u5F3A\u5316-props",children:"#"}),"4.1. \u5F3A\u5316 props"]}),`
`,n(l.p,{children:"\u4E5F\u5C31\u662F\u5728\u539F\u59CB\u7EC4\u4EF6\u7684 props \u4E0A\u6DF7\u5165\u522B\u7684 props \u4EE5\u5F3A\u5316\u539F\u59CB\u7EC4\u4EF6\u7684\u529F\u80FD\uFF0C\u6BD4\u5982 React Router \u7684 withRouter"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"function"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"withRouter"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"displayName"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"`"}),n(l.span,{style:{color:"#A3BE8C"},children:"withRouter("}),n(l.span,{style:{color:"#ECEFF4"},children:"${"}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"displayName"}),n(l.span,{style:{color:"#A3BE8C"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"||"}),n(l.span,{style:{color:"#A3BE8C"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"name"}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#A3BE8C"},children:")"}),n(l.span,{style:{color:"#ECEFF4"},children:"`"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"C"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#616E88"},children:"/*  \u83B7\u53D6 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"wrappedComponentRef"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"..."}),n(l.span,{style:{color:"#D8DEE9"},children:"remainingProps"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"props"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"RouterContext.Consumer"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"{"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"context"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Component"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),n(l.span,{style:{color:"#81A1C1"},children:"{..."}),n(l.span,{style:{color:"#D8DEE9"},children:"remainingProps"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#616E88"},children:"// \u7EC4\u4EF6\u539F\u59CB\u7684props"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),n(l.span,{style:{color:"#81A1C1"},children:"{..."}),n(l.span,{style:{color:"#D8DEE9"},children:"context"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#616E88"},children:"// \u5B58\u5728\u8DEF\u7531\u5BF9\u8C61\u7684\u4E0A\u4E0B\u6587\uFF0Chistory  location \u7B49"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"              "}),n(l.span,{style:{color:"#8FBCBB"},children:"ref"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#D8DEE9"},children:"wrappedComponentRef"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"            "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"          )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#81A1C1"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</"}),n(l.span,{style:{color:"#8FBCBB"},children:"RouterContext.Consumer"}),n(l.span,{style:{color:"#81A1C1"},children:">"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#D8DEE9"},children:"C"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"displayName"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"displayName"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#D8DEE9"},children:"C"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"WrappedComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"/* \u7EE7\u627F\u9759\u6001\u5C5E\u6027 */"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"hoistStatics"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"C"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"default"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"withRouter"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h3,{id:"42-\u52AB\u6301\u63A7\u5236\u6E32\u67D3\u903B\u8F91",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#42-\u52AB\u6301\u63A7\u5236\u6E32\u67D3\u903B\u8F91",children:"#"}),"4.2. \u52AB\u6301\u63A7\u5236\u6E32\u67D3\u903B\u8F91"]}),`
`,e(l.p,{children:["\u5229\u7528\u53CD\u5411\u7EE7\u627F\u7684\u7279\u70B9\uFF0C\u80FD\u591F\u901A\u8FC7 ",n(l.code,{children:"super.render()"})," \u8C03\u7528\u539F\u59CB\u7EC4\u4EF6\u7684\u6E32\u67D3\u51FD\u6570\u5B8C\u6210\u6E32\u67D3\uFF0C\u5E76\u4E14\u80FD\u591F\u83B7\u53D6\u548C\u4FEE\u6539\u6E32\u67D3\u540E\u7684 React Element"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u52AB\u6301\u63A7\u5236\u6E32\u67D3 */"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"react"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOCDemo3"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"TargetComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Foo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"TargetComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"typeof"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"WrappedComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"      "}),n(l.span,{style:{color:"#616E88"},children:"// \u8C03\u7528\u539F\u59CB\u7EC4\u4EF6\u7684 render \u65B9\u6CD5\u83B7\u53D6\u6E32\u67D3\u540E\u7684 React Element"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"el"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"super"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"      "}),n(l.span,{style:{color:"#616E88"},children:"// @ts-ignore"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"rawChildren"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"el"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"children"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"      "}),n(l.span,{style:{color:"#616E88"},children:"// \u4FEE\u6539 el"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"modifiedChildren"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"Children"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"map"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"rawChildren"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"child"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"idx"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#D8DEE9"},children:"idx"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"==="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"0"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<li>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"React 666"}),n(l.span,{style:{color:"#81A1C1"},children:"</li>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"child"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"      "}),n(l.span,{style:{color:"#616E88"},children:"// @ts-ignore"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"cloneElement"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"el"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"el"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"modifiedChildren"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Foo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<ul>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<li>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"React"}),n(l.span,{style:{color:"#81A1C1"},children:"</li>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<li>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Vue"}),n(l.span,{style:{color:"#81A1C1"},children:"</li>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<li>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Solid"}),n(l.span,{style:{color:"#81A1C1"},children:"</li>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<li>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Svelte"}),n(l.span,{style:{color:"#81A1C1"},children:"</li>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"</ul>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"    )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"HOCDemo3"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(E,{children:n(Z,{})}),`
`,e(l.h3,{id:"43-\u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#43-\u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6",children:"#"}),"4.3. \u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" \u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6 */"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"useEffect"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"useState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"react"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOCDemo4"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"TargetComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"DynamicLoadHOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"new"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Promise"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"resolve"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#88C0D0"},children:"setTimeout"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#88C0D0"},children:"resolve"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"./component"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"5000"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"TargetComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"  )"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"interface"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"WrappedComponentState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  Component"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"typeof"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"|"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"null"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"DynamicLoadHOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#88C0D0"},children:"loader"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Promise"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"any"}),n(l.span,{style:{color:"#ECEFF4"},children:">)"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"WrappedComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"{},"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#8FBCBB"},children:"WrappedComponentState"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    state"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Readonly"}),n(l.span,{style:{color:"#ECEFF4"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"WrappedComponentState"}),n(l.span,{style:{color:"#ECEFF4"},children:">"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"null"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"componentDidMount"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"void"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"if"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:") "}),n(l.span,{style:{color:"#81A1C1"},children:"return"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#88C0D0"},children:"loader"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"then"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"module"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"module"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"default"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"then"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"setState"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"))"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"state"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"?"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"{...this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Loading"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"Loading"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"FC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Loading..."}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"HOCDemo4"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(E,{children:n(el,{})}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/HOC%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%BB%84%E4%BB%B6.gif",alt:"HOC\u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6"})}),`
`,e(l.h3,{id:"44-\u5229\u7528\u88C5\u9970\u5668\u6A21\u5F0F\u76D1\u542C\u7EC4\u4EF6\u4E8B\u4EF6",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#44-\u5229\u7528\u88C5\u9970\u5668\u6A21\u5F0F\u76D1\u542C\u7EC4\u4EF6\u4E8B\u4EF6",children:"#"}),"4.4. \u5229\u7528\u88C5\u9970\u5668\u6A21\u5F0F\u76D1\u542C\u7EC4\u4EF6\u4E8B\u4EF6"]}),`
`,n(l.p,{children:"\u4F7F\u7528\u4E00\u4E2A\u5916\u90E8\u5BB9\u5668\u5143\u7D20\u5305\u88F9\u539F\u59CB\u7EC4\u4EF6\uFF0C\u7ED9\u8FD9\u4E2A\u5916\u90E8\u5BB9\u5668\u5143\u7D20\u6DFB\u52A0\u76F8\u5E94\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u672C\u8D28\u4E0A\u5C31\u662F\u5229\u7528\u4E8B\u4EF6\u4EE3\u7406\u673A\u5236\u8D77\u5230\u4E00\u4E2A\u76D1\u542C\u539F\u59CB\u7EC4\u4EF6\u76F8\u5E94\u4E8B\u4EF6\u7684\u4F5C\u7528"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"react"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"createLoggerWithScope"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"~/utils"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"createLoggerWithScope"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"HOCDemo5"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"OnClickHOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"typeof"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"WrappedComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#D8DEE9"},children:"logger"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"\u68C0\u6D4B\u5230 click \u4E8B\u4EF6\u89E6\u53D1"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" ("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"<div"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"onClick"}),n(l.span,{style:{color:"#81A1C1"},children:"={"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"handleClick"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:"}>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"          "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"{...this"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"props"}),n(l.span,{style:{color:"#81A1C1"},children:"}"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"      )"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"WrappedComponent"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D08770"},children:"@OnClickHOC"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"HOCDemo5"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<button>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Button"}),n(l.span,{style:{color:"#81A1C1"},children:"</button>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"HOCDemo5"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(E,{children:n(tl,{})}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/HOC%E7%9B%91%E5%90%AC%E4%BA%8B%E4%BB%B6.gif",alt:"HOC\u76D1\u542C\u4E8B\u4EF6"})}),`
`,e(l.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C",n(l.code,{children:"HOCDemo5"})," \u7EC4\u4EF6\u4E2D\u5E76\u6CA1\u6709\u6DFB\u52A0\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u4F46\u662F\u53EA\u8981\u52A0\u4E0A ",n(l.code,{children:"OnClickHOC"})," \u88C5\u9970\u5668\uFF0C\u5C31\u53EF\u4EE5\u76D1\u542C\u5230\u5B83\u7684\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1\uFF0C\u5341\u5206\u65B9\u4FBF\uFF01"]}),`
`,e(l.h2,{id:"5-\u5982\u4F55\u5904\u7406\u9759\u6001\u5C5E\u6027\u4E22\u5931\u95EE\u9898",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#5-\u5982\u4F55\u5904\u7406\u9759\u6001\u5C5E\u6027\u4E22\u5931\u95EE\u9898",children:"#"}),"5. \u5982\u4F55\u5904\u7406\u9759\u6001\u5C5E\u6027\u4E22\u5931\u95EE\u9898\uFF1F"]}),`
`,n(l.p,{children:"\u8003\u8651\u4E00\u4E0B\u4E0B\u9762\u8FD9\u4E2A\u573A\u666F\uFF0C\u6211\u4EEC\u7684\u539F\u59CB\u7EC4\u4EF6\u4E0A\u6709\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F46\u662F HOC \u8FD4\u56DE\u7684 WrappedComponent \u4E2D\u662F\u4E0D\u5B58\u5728\u539F\u59CB\u7EC4\u4EF6\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\uFF0C\u8FD9\u5C31\u5BFC\u81F4\u7528\u6237\u5728\u4F7F\u7528\u4E86\u6211\u4EEC\u7684 HOC \u540E\uFF0C\u539F\u6765\u7ED1\u5B9A\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u83AB\u540D\u5176\u5999\u4E22\u5931\u4E86\uFF01"}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#616E88"},children:"/** "}),n(l.span,{style:{color:"#ECEFF4"},children:"@"}),n(l.span,{style:{color:"#81A1C1"},children:"description"}),n(l.span,{style:{color:"#616E88"},children:" HOC \u539F\u59CB\u7C7B\u7EC4\u4EF6\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u4E22\u5931 */"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"react"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"typeof"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"WrappedComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"WrappedComponent"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOCDemo6"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"TargetComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Foo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// @ts-ignore"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#D8DEE9"},children:"console"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"TargetComponent"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"age"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// @ts-ignore"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#D8DEE9"},children:"TargetComponent"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"sayHello"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"()"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"TargetComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"Foo"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"static"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" age "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"21"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"static"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"sayHello"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"console"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"log"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#A3BE8C"},children:"hello"}),n(l.span,{style:{color:"#ECEFF4"},children:"'"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<div>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"Foo"}),n(l.span,{style:{color:"#81A1C1"},children:"</div>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"export"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"HOCDemo6"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/HOC%E4%B8%A2%E5%A4%B1%E5%8E%9F%E5%A7%8B%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%9A%84%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7.jpg",alt:"HOC\u4E22\u5931\u539F\u59CB\u7C7B\u7EC4\u4EF6\u7684\u9759\u6001\u5C5E\u6027"})}),`
`,e(l.p,{children:["\u90A3\u4E48\u8BE5\u5982\u4F55\u89E3\u51B3\u5462\uFF1F\u4E00\u4E2A\u5F88\u81EA\u7136\u7684\u60F3\u6CD5\u662F\u624B\u52A8\u5C06\u539F\u59CB\u7EC4\u4EF6\u4E0A\u7684\u9759\u6001\u5C5E\u6027\u5F15\u7528\u62F7\u8D1D\u5230 ",n(l.code,{children:"WrappedComponent"})," \u4E0A"]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"typeof"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"WrappedComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line highlighted",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// @ts-ignore"})]}),`
`,e(l.span,{className:"line highlighted",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#D8DEE9"},children:"WrappedComponent"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"age"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"age"})]}),`
`,n(l.span,{className:"line highlighted"}),`
`,e(l.span,{className:"line highlighted",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// @ts-ignore"})]}),`
`,e(l.span,{className:"line highlighted",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#D8DEE9"},children:"WrappedComponent"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"sayHello"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"sayHello"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"WrappedComponent"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(E,{children:n(fl,{})}),`
`,e(l.p,{children:["\u4F46\u8FD9\u6837\u5B50\u5176\u5B9E\u4E0D\u592A\u5408\u7406\uFF0C\u6BD5\u7ADF\u6211\u4EEC\u4E0D\u53EF\u80FD\u77E5\u9053\u7528\u6237\u5728\u4F7F\u7528\u6211\u4EEC\u7684 HOC \u65F6\u4F20\u5165\u7684\u539F\u59CB\u7C7B\u7EC4\u4EF6\u4E0A\u6709\u4EC0\u4E48\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u8FD9\u91CC\u63A8\u8350\u4F7F\u7528\u4E00\u4E2A\u540D\u4E3A ",n(l.code,{children:"hoist-non-react-statics"})," \u7684\u5E93\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u6211\u4EEC\u62F7\u8D1D\u4E00\u4E2A\u7C7B\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u5230\u53E6\u4E00\u4E2A\u7C7B\u4E0A"]}),`
`,e(l.div,{className:"language-shell",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"shell"}),n(l.pre,{children:e(l.code,{className:"",children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"pnpm i hoist-non-react-statics"})}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"pnpm i @types/hoist-non-react-statics -D"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.div,{className:"language-tsx",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"tsx"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"const"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"HOC"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"typeof"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#ECEFF4"},children:")"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"=>"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"class"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"WrappedComponent"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"extends"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB",fontStyle:"italic"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#88C0D0"},children:"render"}),n(l.span,{style:{color:"#ECEFF4"},children:"()"}),n(l.span,{style:{color:"#81A1C1"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#8FBCBB"},children:"React"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#8FBCBB"},children:"ReactNode"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"<"}),n(l.span,{style:{color:"#8FBCBB"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"/>"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#ECEFF4"},children:"  "}),n(l.span,{style:{color:"#616E88"},children:"// \u62F7\u8D1D Component \u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u5230 WrappedComponent \u4E0A"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#88C0D0"},children:"hoistNonReactStatics"}),n(l.span,{style:{color:"#D8DEE9FF"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"WrappedComponent"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"Component"}),n(l.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(l.span,{style:{color:"#81A1C1"},children:"return"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#D8DEE9"},children:"WrappedComponent"})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:n(l.img,{src:"https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BD%BF%E7%94%A8hoist-non-react-statics%E8%A7%A3%E5%86%B3HOC%E4%B8%AD%E4%B8%A2%E5%A4%B1%E5%8E%9F%E5%A7%8B%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%9A%84%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95.jpg",alt:"\u4F7F\u7528hoist-non-react-statics\u89E3\u51B3HOC\u4E2D\u4E22\u5931\u539F\u59CB\u7C7B\u7EC4\u4EF6\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5"})}),`
`,e(l.h2,{id:"6-\u603B\u7ED3",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#6-\u603B\u7ED3",children:"#"}),"6. \u603B\u7ED3"]}),`
`,n(l.p,{children:"\u672C\u7BC7\u6587\u7AE0\u6211\u4EEC\u5B66\u4E60\u5230\u4E86\uFF1A"}),`
`,e(l.ol,{children:[`
`,n(l.li,{children:"\u4E3A\u4EC0\u4E48\u8981\u7528 HOC\uFF0CHOC \u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898"}),`
`,n(l.li,{children:"HOC \u7684\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F -- \u5C5E\u6027\u4EE3\u7406\u548C\u53CD\u5411\u7EE7\u627F\uFF0C\u5E76\u5206\u522B\u4ECB\u7ECD\u4E86\u5B83\u4EEC\u7684\u4F18\u7F3A\u70B9"}),`
`,n(l.li,{children:"\u4ECB\u7ECD\u4E86\u56DB\u79CD HOC \u7684\u4F7F\u7528\u573A\u666F\uFF0C\u5E76\u901A\u8FC7 Demo \u52A0\u6DF1\u7406\u89E3"}),`
`,n(l.li,{children:"\u5982\u4F55\u89E3\u51B3 HOC \u4E2D\u539F\u59CB\u7C7B\u7EC4\u4EF6\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u4E22\u5931"}),`
`]}),`
`,n(l.p,{children:"\u5E0C\u671B\u901A\u8FC7\u672C\u7BC7\u6587\u7AE0\u7684\u5B66\u4E60\uFF0C\u80FD\u5E2E\u52A9\u4F60\u89E3\u51B3\u5BF9 HOC \u7684\u7591\u60D1\uFF0C\u5982\u679C\u6709\u4EC0\u4E48\u522B\u7684\u95EE\u9898\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u7559\u8A00\uFF0C\u6211\u4F1A\u7B2C\u4E00\u65F6\u95F4\u56DE\u590D~"})]})}function _l(s={}){const{wrapper:l}=s.components||{};return l?n(l,Object.assign({},s,{children:n(w,s)})):w(s)}const Ll="2022/12/11 14:03:01",jl=`import { DemoBlock } from '@island/demo-block'

import { HOCDemo1 } from '~/demos/HOC/demo1'
import { HOCDemo2 } from '~/demos/HOC/demo2'
import { HOCDemo3 } from '~/demos/HOC/demo3'
import { HOCDemo4 } from '~/demos/HOC/demo4'
import { HOCDemo5 } from '~/demos/HOC/demo5'
import { HOCDemo6 } from '~/demos/HOC/demo6'

# HOC

## 1. \u63D0\u51FA\u95EE\u9898

1. HOC \u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F
2. HOC \u7684\u4F7F\u7528\u573A\u666F\uFF1F

## 2. HOC \u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F

1. \u62E6\u622A\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u5305\u62EC\u662F\u5426\u6E32\u67D3\u7EC4\u4EF6\u3001\u61D2\u52A0\u8F7D\u7EC4\u4EF6
2. \u5F80\u7EC4\u4EF6\u7684 props \u4E2D\u6DF7\u5165\u6240\u9700\u7684\u4E1C\u897F\uFF0C\u6BD4\u5982\u7ED9\u975E Route \u7EC4\u4EF6\u7684 props \u6DF7\u5165 history \u5BF9\u8C61\uFF0C\u4F7F\u5176\u80FD\u591F\u652F\u6301\u8DEF\u7531\u8DF3\u8F6C
3. \u76D1\u63A7\u7EC4\u4EF6\u5185\u90E8\u72B6\u6001\uFF0C\u5982\u6DFB\u52A0\u989D\u5916\u751F\u547D\u5468\u671F\u3001\u5BF9\u7EC4\u4EF6\u67D0\u4E9B\u4E8B\u4EF6\u8FDB\u884C\u76D1\u542C\u7B49

## 3. \u4E24\u79CD\u9AD8\u9636\u7EC4\u4EF6 -- \u5C5E\u6027\u4EE3\u7406\u548C\u53CD\u5411\u7EE7\u627F

### 3.1. \u5C5E\u6027\u4EE3\u7406

\u5C06\u539F\u59CB\u7EC4\u4EF6\u5305\u88F9\u5728\u4EE3\u7406\u7EC4\u4EF6\u4E2D\u8FDB\u884C\u589E\u52A0\uFF0C\u5E76\u4E14\u539F\u59CB\u7EC4\u4EF6\u662F\u5728\u4EE3\u7406\u7EC4\u4EF6\u4E2D\u8FDB\u884C\u6E32\u67D3\u7684\uFF0C\u56E0\u6B64\u4EE3\u7406\u7EC4\u4EF6\u53EF\u4EE5\u638C\u63A7\u5BF9\u539F\u59CB\u7EC4\u4EF6\u7684\u63A7\u5236\u6743\u9650

\`\`\`tsx
/** @description \u5C5E\u6027\u4EE3\u7406 */

import React from 'react'

class HOCDemo1 extends React.Component {
  render(): React.ReactNode {
    const TargetComponent = HOC(Foo)
    return <TargetComponent />
  }
}

const HOC = (Component: typeof React.Component) => {
  return class WrappedComponent extends React.Component {
    render(): React.ReactNode {
      // \u5BF9\u539F\u59CB\u7EC4\u4EF6\u7684\u5F3A\u5316\u64CD\u4F5C -- \u6DF7\u5165 props
      const fooEnhancedProps: FooEnhancedProps = {
        name: 'foo',
      }

      // \u539F\u59CB\u7EC4\u4EF6\u5728\u4EE3\u7406\u7EC4\u4EF6\u4E2D\u6E32\u67D3
      return <Component {...fooEnhancedProps} />
    }
  }
}

type FooRawProps = {}
type FooEnhancedProps = { name: string }
type FooProps = FooRawProps & FooEnhancedProps
class Foo extends React.Component<FooProps> {
  render(): React.ReactNode {
    const { name } = this.props
    return <div>name: {name}</div>
  }
}

export { HOCDemo1 }
\`\`\`

<DemoBlock>
  <HOCDemo1 />
</DemoBlock>

\u8FD9\u91CC\u901A\u8FC7\u5C5E\u6027\u4EE3\u7406\u5F80\u539F\u59CB\u7EC4\u4EF6\u7684 props \u4E2D\u6DF7\u5165\u4E86\u65B0\u7684\u5C5E\u6027

#### 3.1.1. \u4F18\u70B9

1. \u4EE3\u7406\u7EC4\u4EF6\u548C\u539F\u59CB\u7EC4\u4EF6\u4F4E\u8026\u5408
2. \u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u5747\u53EF\u4F7F\u7528
3. \u53EF\u4EE5\u63A7\u5236\u539F\u59CB\u7EC4\u4EF6\u662F\u5426\u6E32\u67D3
4. \u53EF\u4EE5\u5D4C\u5957\u4F7F\u7528

#### 3.1.2. \u7F3A\u70B9

1. \u65E0\u6CD5\u76F4\u63A5\u83B7\u53D6\u539F\u59CB\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u9700\u8981\u901A\u8FC7 ref \u83B7\u53D6
2. \u65E0\u6CD5\u76F4\u63A5\u7EE7\u627F\u9759\u6001\u5C5E\u6027\uFF0C\u9700\u8981\u989D\u5916\u5B9E\u73B0\u6216\u8005\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93\u624D\u884C
3. \u5982\u679C\u9700\u8981\u4FDD\u6301 ref \u7684\u6B63\u786E\u6307\u5411\uFF0C\u9700\u8981\u914D\u5408 forwardRef \u8F6C\u53D1 ref \u5230\u539F\u59CB\u7EC4\u4EF6\u4E0A

### 3.2. \u53CD\u5411\u7EE7\u627F

\u8FD4\u56DE\u4E00\u4E2A\u7EE7\u627F\u81EA\u539F\u59CB\u7EC4\u4EF6\u7684\u7EC4\u4EF6

\`\`\`tsx
/** @description \u53CD\u5411\u7EE7\u627F */

import React from 'react'

class HOCDemo2 extends React.Component {
  render(): React.ReactNode {
    const TargetComponent = HOC(Foo)
    return <TargetComponent />
  }
}

const HOC = (Component: typeof Foo) => {
  return class WrappedComponent extends Component {
    state: Readonly<FooState> = {
      name: 'foo',
    }
  }
}

interface FooState {
  name: string
}
class Foo extends React.Component<{}, FooState> {
  render(): React.ReactNode {
    const { name } = this.state
    return <div>name: {name}</div>
  }
}

export { HOCDemo2 }
\`\`\`

<DemoBlock>
  <HOCDemo2 />
</DemoBlock>

\u8FD9\u91CC\u901A\u8FC7\u53CD\u5411\u7EE7\u627F\u4FEE\u6539\u539F\u59CB\u7EC4\u4EF6\u7684 state \u5B9E\u73B0\u4E86\u548C\u4E0A\u9762\u5C5E\u6027\u4EE3\u7406\u7684 Demo \u4E2D\u76F8\u540C\u7684\u6548\u679C

#### 3.2.1. \u4F18\u70B9

1. \u80FD\u591F\u5F88\u65B9\u4FBF\u5730\u83B7\u53D6\u7EC4\u4EF6\u5185\u90E8\u7684\u72B6\u6001\uFF0C\u5982 state\u3001props\u3001\u751F\u547D\u5468\u671F\u3001\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u7B49
2. \u57FA\u4E8E ES6 \u7684\u7EE7\u627F\u53EF\u4EE5\u5F88\u597D\u5730\u7EE7\u627F\u9759\u6001\u5C5E\u6027\uFF0C\u65E0\u9700\u989D\u5916\u5B9E\u73B0\u6216\u8005\u7B2C\u4E09\u65B9\u5E93\u5373\u53EF\u7BA1\u7406\u9759\u6001\u5C5E\u6027

#### 3.2.2. \u7F3A\u70B9

1. \u4EE3\u7406\u7EC4\u4EF6\u4E0E\u539F\u59CB\u7EC4\u4EF6\u9AD8\u8026\u5408
2. \u51FD\u6570\u7EC4\u4EF6\u65E0\u6CD5\u4F7F\u7528
3. \u5D4C\u5957\u4F7F\u7528\u6709\u98CE\u9669\uFF0C\u5185\u5C42\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u4F1A\u8986\u76D6\u5916\u5C42\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F

## 4. HOC \u7684\u4F7F\u7528\u573A\u666F

### 4.1. \u5F3A\u5316 props

\u4E5F\u5C31\u662F\u5728\u539F\u59CB\u7EC4\u4EF6\u7684 props \u4E0A\u6DF7\u5165\u522B\u7684 props \u4EE5\u5F3A\u5316\u539F\u59CB\u7EC4\u4EF6\u7684\u529F\u80FD\uFF0C\u6BD4\u5982 React Router \u7684 withRouter

\`\`\`tsx
function withRouter(Component) {
  const displayName = \`withRouter(\${Component.displayName || Component.name})\`
  const C = (props) => {
    /*  \u83B7\u53D6 */
    const { wrappedComponentRef, ...remainingProps } = props
    return (
      <RouterContext.Consumer>
        {(context) => {
          return (
            <Component
              {...remainingProps} // \u7EC4\u4EF6\u539F\u59CB\u7684props
              {...context} // \u5B58\u5728\u8DEF\u7531\u5BF9\u8C61\u7684\u4E0A\u4E0B\u6587\uFF0Chistory  location \u7B49
              ref={wrappedComponentRef}
            />
          )
        }}
      </RouterContext.Consumer>
    )
  }

  C.displayName = displayName
  C.WrappedComponent = Component
  /* \u7EE7\u627F\u9759\u6001\u5C5E\u6027 */
  return hoistStatics(C, Component)
}
export default withRouter
\`\`\`

### 4.2. \u52AB\u6301\u63A7\u5236\u6E32\u67D3\u903B\u8F91

\u5229\u7528\u53CD\u5411\u7EE7\u627F\u7684\u7279\u70B9\uFF0C\u80FD\u591F\u901A\u8FC7 \`super.render()\` \u8C03\u7528\u539F\u59CB\u7EC4\u4EF6\u7684\u6E32\u67D3\u51FD\u6570\u5B8C\u6210\u6E32\u67D3\uFF0C\u5E76\u4E14\u80FD\u591F\u83B7\u53D6\u548C\u4FEE\u6539\u6E32\u67D3\u540E\u7684 React Element

\`\`\`tsx
/** @description \u52AB\u6301\u63A7\u5236\u6E32\u67D3 */

import React from 'react'

const HOCDemo3: React.FC = () => {
  const TargetComponent = HOC(Foo)
  return <TargetComponent />
}

const HOC = (Component: typeof React.Component) => {
  return class WrappedComponent extends Component {
    render(): React.ReactNode {
      // \u8C03\u7528\u539F\u59CB\u7EC4\u4EF6\u7684 render \u65B9\u6CD5\u83B7\u53D6\u6E32\u67D3\u540E\u7684 React Element
      const el = super.render()
      // @ts-ignore
      const rawChildren = el.props.children

      // \u4FEE\u6539 el
      const modifiedChildren = React.Children.map(rawChildren, (child, idx) => {
        if (idx === 0) {
          return <li>React 666</li>
        }

        return child
      })

      // @ts-ignore
      return React.cloneElement(el, el.props, modifiedChildren)
    }
  }
}

class Foo extends React.Component {
  render(): React.ReactNode {
    return (
      <ul>
        <li>React</li>
        <li>Vue</li>
        <li>Solid</li>
        <li>Svelte</li>
      </ul>
    )
  }
}

export { HOCDemo3 }
\`\`\`

<DemoBlock>
  <HOCDemo3 />
</DemoBlock>

### 4.3. \u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6

\`\`\`tsx
/** @description \u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6 */

import React, { useEffect, useState } from 'react'

const HOCDemo4: React.FC = () => {
  const TargetComponent = DynamicLoadHOC(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./component'))
      }, 5000)
    })
  })

  return (
    <div>
      <TargetComponent />
    </div>
  )
}

interface WrappedComponentState {
  Component: typeof React.Component | null
}
const DynamicLoadHOC = (loader: () => Promise<any>) => {
  return class WrappedComponent extends React.Component<
    {},
    WrappedComponentState
  > {
    state: Readonly<WrappedComponentState> = {
      Component: null,
    }

    componentDidMount(): void {
      if (this.state.Component) return
      loader()
        .then((module) => module.default)
        .then((Component) => this.setState({ Component }))
    }

    render(): React.ReactNode {
      const { Component } = this.state
      return Component ? <Component {...this.props} /> : <Loading />
    }
  }
}

const Loading: React.FC = () => {
  return <div>Loading...</div>
}

export { HOCDemo4 }
\`\`\`

<DemoBlock>
  <HOCDemo4 />
</DemoBlock>

![HOC\u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/HOC%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E7%BB%84%E4%BB%B6.gif)

### 4.4. \u5229\u7528\u88C5\u9970\u5668\u6A21\u5F0F\u76D1\u542C\u7EC4\u4EF6\u4E8B\u4EF6

\u4F7F\u7528\u4E00\u4E2A\u5916\u90E8\u5BB9\u5668\u5143\u7D20\u5305\u88F9\u539F\u59CB\u7EC4\u4EF6\uFF0C\u7ED9\u8FD9\u4E2A\u5916\u90E8\u5BB9\u5668\u5143\u7D20\u6DFB\u52A0\u76F8\u5E94\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u672C\u8D28\u4E0A\u5C31\u662F\u5229\u7528\u4E8B\u4EF6\u4EE3\u7406\u673A\u5236\u8D77\u5230\u4E00\u4E2A\u76D1\u542C\u539F\u59CB\u7EC4\u4EF6\u76F8\u5E94\u4E8B\u4EF6\u7684\u4F5C\u7528

\`\`\`tsx
import React from 'react'

import { createLoggerWithScope } from '~/utils'

const logger = createLoggerWithScope('HOCDemo5')

const OnClickHOC = (Component: typeof React.Component) => {
  class WrappedComponent extends React.Component {
    handleClick() {
      logger.log('\u68C0\u6D4B\u5230 click \u4E8B\u4EF6\u89E6\u53D1')
    }

    render(): React.ReactNode {
      return (
        <div onClick={() => this.handleClick()}>
          <Component {...this.props} />
        </div>
      )
    }
  }

  return WrappedComponent
}

@OnClickHOC
class HOCDemo5 extends React.Component {
  render(): React.ReactNode {
    return <button>Button</button>
  }
}

export { HOCDemo5 }
\`\`\`

<DemoBlock>
  <HOCDemo5 />
</DemoBlock>

![HOC\u76D1\u542C\u4E8B\u4EF6](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/HOC%E7%9B%91%E5%90%AC%E4%BA%8B%E4%BB%B6.gif)

\u53EF\u4EE5\u770B\u5230\uFF0C\`HOCDemo5\` \u7EC4\u4EF6\u4E2D\u5E76\u6CA1\u6709\u6DFB\u52A0\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u4F46\u662F\u53EA\u8981\u52A0\u4E0A \`OnClickHOC\` \u88C5\u9970\u5668\uFF0C\u5C31\u53EF\u4EE5\u76D1\u542C\u5230\u5B83\u7684\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1\uFF0C\u5341\u5206\u65B9\u4FBF\uFF01

## 5. \u5982\u4F55\u5904\u7406\u9759\u6001\u5C5E\u6027\u4E22\u5931\u95EE\u9898\uFF1F

\u8003\u8651\u4E00\u4E0B\u4E0B\u9762\u8FD9\u4E2A\u573A\u666F\uFF0C\u6211\u4EEC\u7684\u539F\u59CB\u7EC4\u4EF6\u4E0A\u6709\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F46\u662F HOC \u8FD4\u56DE\u7684 WrappedComponent \u4E2D\u662F\u4E0D\u5B58\u5728\u539F\u59CB\u7EC4\u4EF6\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\uFF0C\u8FD9\u5C31\u5BFC\u81F4\u7528\u6237\u5728\u4F7F\u7528\u4E86\u6211\u4EEC\u7684 HOC \u540E\uFF0C\u539F\u6765\u7ED1\u5B9A\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u83AB\u540D\u5176\u5999\u4E22\u5931\u4E86\uFF01

\`\`\`tsx
/** @description HOC \u539F\u59CB\u7C7B\u7EC4\u4EF6\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u4E22\u5931 */

import React from 'react'

const HOC = (Component: typeof React.Component) => {
  class WrappedComponent extends React.Component {
    render(): React.ReactNode {
      return <Component />
    }
  }

  return WrappedComponent
}

const HOCDemo6 = () => {
  const TargetComponent = HOC(Foo)

  // @ts-ignore
  console.log(TargetComponent.age)

  // @ts-ignore
  TargetComponent.sayHello()

  return <TargetComponent />
}

class Foo extends React.Component {
  static age = 21
  static sayHello() {
    console.log('hello')
  }

  render(): React.ReactNode {
    return <div>Foo</div>
  }
}

export { HOCDemo6 }
\`\`\`

![HOC\u4E22\u5931\u539F\u59CB\u7C7B\u7EC4\u4EF6\u7684\u9759\u6001\u5C5E\u6027](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/HOC%E4%B8%A2%E5%A4%B1%E5%8E%9F%E5%A7%8B%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%9A%84%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7.jpg)

\u90A3\u4E48\u8BE5\u5982\u4F55\u89E3\u51B3\u5462\uFF1F\u4E00\u4E2A\u5F88\u81EA\u7136\u7684\u60F3\u6CD5\u662F\u624B\u52A8\u5C06\u539F\u59CB\u7EC4\u4EF6\u4E0A\u7684\u9759\u6001\u5C5E\u6027\u5F15\u7528\u62F7\u8D1D\u5230 \`WrappedComponent\` \u4E0A

\`\`\`tsx{8-12}
const HOC = (Component: typeof React.Component) => {
  class WrappedComponent extends React.Component {
    render(): React.ReactNode {
      return <Component />
    }
  }

  // @ts-ignore
  WrappedComponent.age = Component.age

  // @ts-ignore
  WrappedComponent.sayHello = Component.sayHello

  return WrappedComponent
}
\`\`\`

<DemoBlock>
  <HOCDemo6 />
</DemoBlock>

\u4F46\u8FD9\u6837\u5B50\u5176\u5B9E\u4E0D\u592A\u5408\u7406\uFF0C\u6BD5\u7ADF\u6211\u4EEC\u4E0D\u53EF\u80FD\u77E5\u9053\u7528\u6237\u5728\u4F7F\u7528\u6211\u4EEC\u7684 HOC \u65F6\u4F20\u5165\u7684\u539F\u59CB\u7C7B\u7EC4\u4EF6\u4E0A\u6709\u4EC0\u4E48\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u8FD9\u91CC\u63A8\u8350\u4F7F\u7528\u4E00\u4E2A\u540D\u4E3A \`hoist-non-react-statics\` \u7684\u5E93\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u6211\u4EEC\u62F7\u8D1D\u4E00\u4E2A\u7C7B\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u5230\u53E6\u4E00\u4E2A\u7C7B\u4E0A

\`\`\`shell
pnpm i hoist-non-react-statics
pnpm i @types/hoist-non-react-statics -D
\`\`\`

\`\`\`tsx
const HOC = (Component: typeof React.Component) => {
  class WrappedComponent extends React.Component {
    render(): React.ReactNode {
      return <Component />
    }
  }

  // \u62F7\u8D1D Component \u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u5230 WrappedComponent \u4E0A
  hoistNonReactStatics(WrappedComponent, Component)

  return WrappedComponent
}
\`\`\`

![\u4F7F\u7528hoist-non-react-statics\u89E3\u51B3HOC\u4E2D\u4E22\u5931\u539F\u59CB\u7C7B\u7EC4\u4EF6\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5](https://raw.githubusercontent.com/Plasticine-Yang/plasticine-cloud-image/main/images/react-advanced-guide/%E4%BD%BF%E7%94%A8hoist-non-react-statics%E8%A7%A3%E5%86%B3HOC%E4%B8%AD%E4%B8%A2%E5%A4%B1%E5%8E%9F%E5%A7%8B%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%9A%84%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95.jpg)

## 6. \u603B\u7ED3

\u672C\u7BC7\u6587\u7AE0\u6211\u4EEC\u5B66\u4E60\u5230\u4E86\uFF1A

1. \u4E3A\u4EC0\u4E48\u8981\u7528 HOC\uFF0CHOC \u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898
2. HOC \u7684\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F -- \u5C5E\u6027\u4EE3\u7406\u548C\u53CD\u5411\u7EE7\u627F\uFF0C\u5E76\u5206\u522B\u4ECB\u7ECD\u4E86\u5B83\u4EEC\u7684\u4F18\u7F3A\u70B9
3. \u4ECB\u7ECD\u4E86\u56DB\u79CD HOC \u7684\u4F7F\u7528\u573A\u666F\uFF0C\u5E76\u901A\u8FC7 Demo \u52A0\u6DF1\u7406\u89E3
4. \u5982\u4F55\u89E3\u51B3 HOC \u4E2D\u539F\u59CB\u7C7B\u7EC4\u4EF6\u7684\u9759\u6001\u5C5E\u6027\u548C\u65B9\u6CD5\u4E22\u5931

\u5E0C\u671B\u901A\u8FC7\u672C\u7BC7\u6587\u7AE0\u7684\u5B66\u4E60\uFF0C\u80FD\u5E2E\u52A9\u4F60\u89E3\u51B3\u5BF9 HOC \u7684\u7591\u60D1\uFF0C\u5982\u679C\u6709\u4EC0\u4E48\u522B\u7684\u95EE\u9898\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u7559\u8A00\uFF0C\u6211\u4F1A\u7B2C\u4E00\u65F6\u95F4\u56DE\u590D~
`;export{jl as content,_l as default,wl as frontmatter,Ll as lastUpdatedTime,kl as title,$l as toc};
