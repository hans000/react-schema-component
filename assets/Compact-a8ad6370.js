import{g as N,r,c as C,a as P,a2 as z,a8 as k}from"./index-7e4a4b07.js";const D=t=>{const{componentCls:n}=t;return{[n]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},E=D,j=t=>{const{componentCls:n}=t;return{[n]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${n}-item:empty`]:{display:"none"}}}},w=N("Space",t=>[j(t),E(t)],()=>({}),{resetStyle:!1});var f=globalThis&&globalThis.__rest||function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,o=Object.getOwnPropertySymbols(t);c<o.length;c++)n.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(t,o[c])&&(e[o[c]]=t[o[c]]);return e};const u=r.createContext(null),M=(t,n)=>{const e=r.useContext(u),o=r.useMemo(()=>{if(!e)return"";const{compactDirection:c,isFirstItem:d,isLastItem:v}=e,s=c==="vertical"?"-vertical-":"-";return C({[`${t}-compact${s}item`]:!0,[`${t}-compact${s}first-item`]:d,[`${t}-compact${s}last-item`]:v,[`${t}-compact${s}item-rtl`]:n==="rtl"})},[t,n,e]);return{compactSize:e?.compactSize,compactDirection:e?.compactDirection,compactItemClassnames:o}},T=t=>{let{children:n}=t;return r.createElement(u.Provider,{value:null},n)},_=t=>{var{children:n}=t,e=f(t,["children"]);return r.createElement(u.Provider,{value:e},n)},F=t=>{const{getPrefixCls:n,direction:e}=r.useContext(P),{size:o,direction:c,block:d,prefixCls:v,className:s,rootClassName:y,children:x}=t,g=f(t,["size","direction","block","prefixCls","className","rootClassName","children"]),S=z(m=>{var l;return(l=o??m)!==null&&l!==void 0?l:"middle"}),i=n("space-compact",v),[I,b]=w(i),$=C(i,b,{[`${i}-rtl`]:e==="rtl",[`${i}-block`]:d,[`${i}-vertical`]:c==="vertical"},s,y),a=r.useContext(u),p=k(x),h=r.useMemo(()=>p.map((m,l)=>{const O=m&&m.key||`${i}-item-${l}`;return r.createElement(_,{key:O,compactSize:S,compactDirection:c,isFirstItem:l===0&&(!a||a?.isFirstItem),isLastItem:l===p.length-1&&(!a||a?.isLastItem)},m)}),[o,p,a]);return p.length===0?null:I(r.createElement("div",Object.assign({className:$},g),h))},A=F;export{A as C,T as N,w as a,M as u};