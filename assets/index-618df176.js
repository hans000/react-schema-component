import{y as M,O as V,P as x,Q as v,S as H,g as G,r as o,w as W,b as K,c as L,a as Y,R as T,T as Q,U as q,V as J,W as X}from"./index-7e4a4b07.js";var d=M({},V),Z=d.version,ee=d.render,te=d.unmountComponentAtNode,g;try{var re=Number((Z||"").split(".")[0]);re>=18&&(g=d.createRoot)}catch{}function O(e){var t=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&H(t)==="object"&&(t.usingClientEntryPoint=e)}var b="__rc_react_root__";function ne(e,t){O(!0);var r=t[b]||g(t);O(!1),r.render(e),t[b]=r}function oe(e,t){ee(e,t)}function se(e,t){if(g){ne(e,t);return}oe(e,t)}function ae(e){return S.apply(this,arguments)}function S(){return S=x(v().mark(function e(t){return v().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.resolve().then(function(){var a;(a=t[b])===null||a===void 0||a.unmount(),delete t[b]}));case 1:case"end":return n.stop()}},e)})),S.apply(this,arguments)}function ie(e){te(e)}function ue(e){return C.apply(this,arguments)}function C(){return C=x(v().mark(function e(t){return v().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(g===void 0){n.next=2;break}return n.abrupt("return",ae(t));case 2:ie(t);case 3:case"end":return n.stop()}},e)})),C.apply(this,arguments)}const ce=e=>{const{componentCls:t,colorPrimary:r}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${r})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0}}}}},le=G("Wave",e=>[ce(e)]);function de(e){const t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}function y(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&de(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function fe(e){const{borderTopColor:t,borderColor:r,backgroundColor:n}=getComputedStyle(e);return y(t)?t:y(r)?r:y(n)?n:null}function E(e){return Number.isNaN(e)?0:e}const pe=e=>{const{className:t,target:r}=e,n=o.useRef(null),[a,f]=o.useState(null),[R,h]=o.useState([]),[_,i]=o.useState(0),[p,m]=o.useState(0),[A,U]=o.useState(0),[I,$]=o.useState(0),[k,P]=o.useState(!1),N={left:_,top:p,width:A,height:I,borderRadius:R.map(u=>`${u}px`).join(" ")};a&&(N["--wave-color"]=a);function w(){const u=getComputedStyle(r);f(fe(r));const s=u.position==="static",{borderLeftWidth:l,borderTopWidth:c}=u;i(s?r.offsetLeft:E(-parseFloat(l))),m(s?r.offsetTop:E(-parseFloat(c))),U(r.offsetWidth),$(r.offsetHeight);const{borderTopLeftRadius:B,borderTopRightRadius:D,borderBottomLeftRadius:F,borderBottomRightRadius:j}=u;h([B,D,j,F].map(z=>E(parseFloat(z))))}return o.useEffect(()=>{if(r){const u=W(()=>{w(),P(!0)});let s;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(w),s.observe(r)),()=>{W.cancel(u),s?.disconnect()}}},[]),k?o.createElement(K,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(u,s)=>{var l;if(s.deadline||s.propertyName==="opacity"){const c=(l=n.current)===null||l===void 0?void 0:l.parentElement;ue(c).then(()=>{c?.remove()})}return!1}},u=>{let{className:s}=u;return o.createElement("div",{ref:n,className:L(t,s),style:N})}):null};function me(e,t){const r=document.createElement("div");r.style.position="absolute",r.style.left="0px",r.style.top="0px",e?.insertBefore(r,e?.firstChild),se(o.createElement(pe,{target:e,className:t}),r)}function ve(e,t){function r(){const n=e.current;me(n,t)}return r}const be=e=>{const{children:t,disabled:r}=e,{getPrefixCls:n}=o.useContext(Y),a=o.useRef(null),f=n("wave"),[,R]=le(f),h=ve(a,L(f,R));if(T.useEffect(()=>{const i=a.current;if(!i||i.nodeType!==1||r)return;const p=m=>{m.target.tagName==="INPUT"||!X(m.target)||!i.getAttribute||i.getAttribute("disabled")||i.disabled||i.className.includes("disabled")||i.className.includes("-leave")||h()};return i.addEventListener("click",p,!0),()=>{i.removeEventListener("click",p,!0)}},[r]),!T.isValidElement(t))return t??null;const _=Q(t)?q(t.ref,a):a;return J(t,{ref:_})},Re=be;export{Re as W,se as r,ue as u};
