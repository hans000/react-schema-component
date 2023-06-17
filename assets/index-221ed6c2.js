import{u as w}from"./useBreakpoint-2a5fa87b.js";import{r as c,j as E,H as G,J as v}from"./index-7e4a4b07.js";import{r as I}from"./index-618df176.js";import{w as b,a as B,P as H,b as $}from"./useMessage-1e55e4fe.js";function k(){return w()}const _={useBreakpoint:k};let r=null,i=e=>e(),g=[],p={};function A(){const{prefixCls:e,getContainer:t,duration:o,rtl:n,maxCount:s,top:a}=p,l=e??v().getPrefixCls("message"),u=t?.()||document.body;return{prefixCls:l,container:u,duration:o,rtl:n,maxCount:s,top:a}}const D=c.forwardRef((e,t)=>{const o=()=>{const{prefixCls:f,container:d,maxCount:F,duration:M,rtl:O,top:j}=A();return{prefixCls:f,getContainer:()=>d,maxCount:F,duration:M,rtl:O,top:j}},[n,s]=c.useState(o),[a,l]=$(n),u=v(),x=u.getRootPrefixCls(),y=u.getIconPrefixCls(),P=u.getTheme(),C=()=>{s(o)};return c.useEffect(C,[]),c.useImperativeHandle(t,()=>{const f=Object.assign({},a);return Object.keys(f).forEach(d=>{f[d]=function(){return C(),a[d].apply(a,arguments)}}),{instance:f,sync:C}}),c.createElement(G,{prefixCls:x,iconPrefixCls:y,theme:P},l)});function m(){if(!r){const e=document.createDocumentFragment(),t={fragment:e};r=t,i(()=>{I(c.createElement(D,{ref:o=>{const{instance:n,sync:s}=o||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=s,m())})}}),e)});return}r.instance&&(g.forEach(e=>{const{type:t,skipped:o}=e;if(!o)switch(t){case"open":{i(()=>{const n=r.instance.open(Object.assign(Object.assign({},p),e.config));n?.then(e.resolve),e.setCloseFn(n)});break}case"destroy":i(()=>{r?.instance.destroy(e.key)});break;default:i(()=>{var n;const s=(n=r.instance)[t].apply(n,E(e.args));s?.then(e.resolve),e.setCloseFn(s)})}}),g=[])}function N(e){p=Object.assign(Object.assign({},p),e),i(()=>{var t;(t=r?.sync)===null||t===void 0||t.call(r)})}function R(e){const t=b(o=>{let n;const s={type:"open",config:e,resolve:o,setCloseFn:a=>{n=a}};return g.push(s),()=>{n?i(()=>{n()}):s.skipped=!0}});return m(),t}function S(e,t){const o=b(n=>{let s;const a={type:e,args:t,resolve:n,setCloseFn:l=>{s=l}};return g.push(a),()=>{s?i(()=>{s()}):a.skipped=!0}});return m(),o}function z(e){g.push({type:"destroy",key:e}),m()}const J=["success","info","warning","error","loading"],Q={open:R,destroy:z,config:N,useMessage:B,_InternalPanelDoNotUseOrYouWillBeFired:H},h=Q;J.forEach(e=>{h[e]=function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return S(e,o)}});const q=h;export{_ as G,q as m};