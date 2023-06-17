import{f as F,u as A,F as z,a as h,b as H,c as V}from"./FloatButton-56dbc259.js";import{r,a as R,c as C,u as U,R as i,b as I,d as W}from"./index-7e4a4b07.js";import{V as Y}from"./VerticalAlignTopOutlined-b3ed3b8e.js";import{s as q,g as J}from"./scrollTo-c3afcdee.js";import{t as K}from"./throttleByAnimationFrame-ade9e9c6.js";import"./index-71543965.js";import"./colors-7be04c46.js";import"./presetColors-88dfd00f.js";import"./index-5b57a4c3.js";import"./placements-d495e90e.js";import"./roundedArrow-cf08b32b.js";import"./Compact-a8ad6370.js";import"./index-5d226ec8.js";import"./zoom-470fe614.js";import"./fade-0f6bc5f7.js";const Q=t=>{const{prefixCls:s,className:n,style:e,shape:o="circle",type:g="default",icon:E=i.createElement(H,null),closeIcon:p=i.createElement(W,null),description:d,trigger:c,children:P,onOpenChange:l}=t,{direction:k,getPrefixCls:v}=r.useContext(R),O=v(F,s),[b,T]=A(O),u=`${O}-group`,N=C(u,T,n,{[`${u}-rtl`]:k==="rtl",[`${u}-${o}`]:o,[`${u}-${o}-shadow`]:!c}),B=C(T,`${u}-wrap`),[S,y]=U(!1,{value:t.open}),j=r.useRef(null),w=r.useRef(null),m=r.useMemo(()=>c==="hover"?{onMouseEnter(){y(!0),l?.(!0)},onMouseLeave(){y(!1),l?.(!1)}}:{},[c]),a=()=>{y(f=>(l?.(!f),!f))},_=r.useCallback(f=>{var x,$;if(!((x=j.current)===null||x===void 0)&&x.contains(f.target)){!(($=w.current)===null||$===void 0)&&$.contains(f.target)&&a();return}y(!1),l?.(!1)},[c]);return r.useEffect(()=>{if(c==="click")return document.addEventListener("click",_),()=>{document.removeEventListener("click",_)}},[c]),b(i.createElement(z,{value:o},i.createElement("div",Object.assign({ref:j,className:N,style:e},m),c&&["click","hover"].includes(c)?i.createElement(i.Fragment,null,i.createElement(I,{visible:S,motionName:`${u}-wrap`},f=>{let{className:x}=f;return i.createElement("div",{className:C(x,B)},P)}),i.createElement(h,{ref:w,type:g,shape:o,icon:S?p:E,description:d})):P)))},L=r.memo(Q);var X=globalThis&&globalThis.__rest||function(t,s){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&s.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)s.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const Z=t=>{const{prefixCls:s,className:n,type:e="default",shape:o="circle",visibilityHeight:g=400,icon:E=i.createElement(Y,null),target:p,onClick:d,duration:c=450}=t,P=X(t,["prefixCls","className","type","shape","visibilityHeight","icon","target","onClick","duration"]),[l,k]=r.useState(g===0),v=r.useRef(null),O=()=>v.current&&v.current.ownerDocument?v.current.ownerDocument:window,b=K(m=>{const a=J(m.target,!0);k(a>=g)});r.useEffect(()=>{const a=(p||O)();return b({target:a}),a?.addEventListener("scroll",b),()=>{b.cancel(),a?.removeEventListener("scroll",b)}},[p]);const T=m=>{q(0,{getContainer:p||O,duration:c}),d?.(m)},{getPrefixCls:u}=r.useContext(R),N=u(F,s),B=u(),[S]=A(N),j=r.useContext(V)||o,w=Object.assign({prefixCls:N,icon:E,type:e,shape:j},P);return S(i.createElement(I,{visible:l,motionName:`${B}-fade`},m=>{let{className:a}=m;return i.createElement(h,Object.assign({ref:v},w,{onClick:T,className:C(n,a)}))}))},M=r.memo(Z);var D=globalThis&&globalThis.__rest||function(t,s){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&s.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)s.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const G=t=>{var{backTop:s}=t,n=D(t,["backTop"]);return s?r.createElement(M,Object.assign({},n,{visibilityHeight:0})):r.createElement(h,Object.assign({},n))};function ee(t){var{className:s,items:n}=t,e=D(t,["className","items"]);const{prefixCls:o}=e,{getPrefixCls:g}=r.useContext(R),p=`${g(F,o)}-pure`;return n?r.createElement(L,Object.assign({className:C(s,p)},e),n.map((d,c)=>r.createElement(G,Object.assign({key:c},d)))):r.createElement(G,Object.assign({className:C(s,p)},e))}const te=r.memo(ee);h.BackTop=M;h.Group=L;h._InternalPanelDoNotUseOrYouWillBeFired=te;export{h as default};
