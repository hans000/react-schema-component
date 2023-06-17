import{r as o,a as D,c as $,g as st,m as ct,k as at,t as dt,l as j,j as ut}from"./index-7e4a4b07.js";import{t as ft}from"./index-8efc396c.js";import pt from"./index-95bd04c6.js";import{g as ht,s as gt}from"./scrollTo-c3afcdee.js";import"./throttleByAnimationFrame-ade9e9c6.js";const mt=o.createContext(void 0),J=mt,kt=e=>{const{href:t="#",title:r,prefixCls:l,children:s,className:m,target:c}=e,v=o.useContext(J),{registerLink:S,unregisterLink:y,scrollTo:b,onClick:u,activeLink:T,direction:p}=v||{};o.useEffect(()=>(S?.(t),()=>{y?.(t)}),[t]);const B=k=>{u?.(k,{title:r,href:t}),b?.(t)},{getPrefixCls:w}=o.useContext(D),h=w("anchor",l),f=T===t,x=$(`${h}-link`,m,{[`${h}-link-active`]:f}),A=$(`${h}-link-title`,{[`${h}-link-title-active`]:f});return o.createElement("div",{className:x},o.createElement("a",{className:A,href:t,title:typeof r=="string"?r:"",target:c,onClick:B},r),p!=="horizontal"?s:null)},V=kt,Ct=e=>{const{componentCls:t,holderOffsetBlock:r,motionDurationSlow:l,lineWidthBold:s,colorPrimary:m,lineType:c,colorSplit:v}=e;return{[`${t}-wrapper`]:{marginBlockStart:-r,paddingBlockStart:r,[t]:Object.assign(Object.assign({},at(e)),{position:"relative",paddingInlineStart:s,[`${t}-link`]:{paddingBlock:e.linkPaddingBlock,paddingInline:`${e.linkPaddingInlineStart}px 0`,"&-title":Object.assign(Object.assign({},dt),{position:"relative",display:"block",marginBlockEnd:e.anchorTitleBlock,color:e.colorText,transition:`all ${e.motionDurationSlow}`,"&:only-child":{marginBlockEnd:0}}),[`&-active > ${t}-link-title`]:{color:e.colorPrimary},[`${t}-link`]:{paddingBlock:e.anchorPaddingBlockSecondary}}}),[`&:not(${t}-wrapper-horizontal)`]:{[t]:{"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:`${s}px ${c} ${v}`,content:'" "'},[`${t}-ink`]:{position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:`top ${l} ease-in-out`,width:s,backgroundColor:m,[`&${t}-ink-visible`]:{display:"inline-block"}}}},[`${t}-fixed ${t}-ink ${t}-ink`]:{display:"none"}}}},vt=e=>{const{componentCls:t,motionDurationSlow:r,lineWidthBold:l,colorPrimary:s}=e;return{[`${t}-wrapper-horizontal`]:{position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:`1px ${e.lineType} ${e.colorSplit}`,content:'" "'},[t]:{overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"},[`${t}-link:first-of-type`]:{paddingInline:0},[`${t}-ink`]:{position:"absolute",bottom:0,transition:`left ${r} ease-in-out, width ${r} ease-in-out`,height:l,backgroundColor:s}}}}},xt=st("Anchor",e=>{const{fontSize:t,fontSizeLG:r,paddingXXS:l}=e,s=ct(e,{holderOffsetBlock:l,anchorPaddingBlockSecondary:l/2,anchorTitleBlock:t/14*3,anchorBallSize:r/2});return[Ct(s),vt(s)]},e=>({linkPaddingBlock:e.paddingXXS,linkPaddingInlineStart:e.padding}));function $t(){return window}function F(e,t){if(!e.getClientRects().length)return 0;const r=e.getBoundingClientRect();return r.width||r.height?t===window?(t=e.ownerDocument.documentElement,r.top-t.clientTop):r.top-t.getBoundingClientRect().top:r.top}const G=/#([\S ]+)$/,St=e=>{var t;const{rootClassName:r,anchorPrefixCls:l,className:s="",style:m,offsetTop:c,affix:v=!0,showInkInFixed:S=!1,children:y,items:b,direction:u="vertical",bounds:T,targetOffset:p,onClick:B,onChange:w,getContainer:h,getCurrentAnchor:f}=e,[x,A]=o.useState([]),[k,Y]=o.useState(null),I=o.useRef(k),H=o.useRef(null),N=o.useRef(null),P=o.useRef(!1),{direction:K,getTargetContainer:Q}=o.useContext(D),E=(t=h??Q)!==null&&t!==void 0?t:$t,z=JSON.stringify(x),U=j(n=>{x.includes(n)||A(i=>[].concat(ut(i),[n]))}),Z=j(n=>{x.includes(n)&&A(i=>i.filter(d=>d!==n))}),tt=()=>{var n;const i=(n=H.current)===null||n===void 0?void 0:n.querySelector(`.${l}-link-title-active`);if(i&&N.current){const{style:d}=N.current,a=u==="horizontal";d.top=a?"":`${i.offsetTop+i.clientHeight/2}px`,d.height=a?"":`${i.clientHeight}px`,d.left=a?`${i.offsetLeft}px`:"",d.width=a?`${i.clientWidth}px`:"",a&&ft(i,{scrollMode:"if-needed",block:"nearest"})}},et=function(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;const a=[],_=E();return n.forEach(C=>{const g=G.exec(C?.toString());if(!g)return;const L=document.getElementById(g[1]);if(L){const q=F(L,_);q<i+d&&a.push({link:C,top:q})}}),a.length?a.reduce((g,L)=>L.top>g.top?L:g).link:""},O=j(n=>{if(I.current===n)return;const i=typeof f=="function"?f(n):n;Y(i),I.current=i,w?.(n)}),R=o.useCallback(()=>{if(P.current||typeof f=="function")return;const n=et(x,p!==void 0?p:c||0,T);O(n)},[z,p,c]),M=o.useCallback(n=>{O(n);const i=G.exec(n);if(!i)return;const d=document.getElementById(i[1]);if(!d)return;const a=E(),_=ht(a,!0),C=F(d,a);let g=_+C;g-=p!==void 0?p:c||0,P.current=!0,gt(g,{getContainer:E,callback(){P.current=!1}})},[p,c]),nt=$(r,`${l}-wrapper`,{[`${l}-wrapper-horizontal`]:u==="horizontal",[`${l}-rtl`]:K==="rtl"},s),ot=$(l,{[`${l}-fixed`]:!v&&!S}),it=$(`${l}-ink`,{[`${l}-ink-visible`]:k}),rt=Object.assign({maxHeight:c?`calc(100vh - ${c}px)`:"100vh"},m),X=n=>Array.isArray(n)?n.map(i=>o.createElement(V,Object.assign({},i,{key:i.key}),u==="vertical"&&X(i.children))):null,W=o.createElement("div",{ref:H,className:nt,style:rt},o.createElement("div",{className:ot},o.createElement("span",{className:it,ref:N}),"items"in e?X(b):y));o.useEffect(()=>{const n=E();return R(),n?.addEventListener("scroll",R),()=>{n?.removeEventListener("scroll",R)}},[z]),o.useEffect(()=>{typeof f=="function"&&O(f(I.current||""))},[f]),o.useEffect(()=>{tt()},[u,f,z,k]);const lt=o.useMemo(()=>({registerLink:U,unregisterLink:Z,scrollTo:M,activeLink:k,onClick:B,direction:u}),[k,B,M,u]);return o.createElement(J.Provider,{value:lt},v?o.createElement(pt,{offsetTop:c,target:E},W):W)},yt=e=>{const{prefixCls:t,rootClassName:r}=e,{getPrefixCls:l}=o.useContext(D),s=l("anchor",t),[m,c]=xt(s);return m(o.createElement(St,Object.assign({},e,{rootClassName:$(c,r),anchorPrefixCls:s})))},bt=yt,wt=bt;wt.Link=V;export{wt as default};
