import{g as x,m as b,k as h,r as a,a as v,c as $}from"./index-7e4a4b07.js";import{g as P,P as y}from"./placements-d495e90e.js";import{i as C}from"./zoom-470fe614.js";import{P as w}from"./presetColors-88dfd00f.js";const f=e=>e?typeof e=="function"?e():e:null,S=e=>{const{componentCls:o,popoverColor:t,minWidth:r,fontWeightStrong:n,popoverPadding:i,boxShadowSecondary:l,colorTextHeading:s,borderRadiusLG:c,zIndexPopup:d,marginXS:p,colorBgElevated:g,popoverBg:m}=e;return[{[o]:Object.assign(Object.assign({},h(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":g,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:m,backgroundClip:"padding-box",borderRadius:c,boxShadow:l,padding:i},[`${o}-title`]:{minWidth:r,marginBottom:p,color:s,fontWeight:n},[`${o}-inner-content`]:{color:t}})},P(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${o}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${o}-content`]:{display:"inline-block"}}}]},O=e=>{const{componentCls:o}=e;return{[o]:w.map(t=>{const r=e[`${t}6`];return{[`&${o}-${t}`]:{"--antd-arrow-background-color":r,[`${o}-inner`]:{backgroundColor:r},[`${o}-arrow`]:{background:"transparent"}}}})}},k=e=>{const{componentCls:o,lineWidth:t,lineType:r,colorSplit:n,paddingSM:i,controlHeight:l,fontSize:s,lineHeight:c,padding:d}=e,p=l-Math.round(s*c),g=p/2,m=p/2-t,u=d;return{[o]:{[`${o}-inner`]:{padding:0},[`${o}-title`]:{margin:0,padding:`${g}px ${u}px ${m}px`,borderBottom:`${t}px ${r} ${n}`},[`${o}-inner-content`]:{padding:`${i}px ${u}px`}}}},B=x("Popover",e=>{const{colorBgElevated:o,colorText:t,wireframe:r}=e,n=b(e,{popoverPadding:12,popoverBg:o,popoverColor:t});return[S(n),O(n),r&&k(n),C(n,"zoom-big")]},e=>({width:177,minWidth:177,zIndexPopup:e.zIndexPopupBase+30}),{deprecatedTokens:[["width","minWidth"]]});var E=globalThis&&globalThis.__rest||function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t};const T=(e,o,t)=>{if(!(!o&&!t))return a.createElement(a.Fragment,null,o&&a.createElement("div",{className:`${e}-title`},f(o)),a.createElement("div",{className:`${e}-inner-content`},f(t)))};function z(e){const{hashId:o,prefixCls:t,className:r,style:n,placement:i="top",title:l,content:s,children:c}=e;return a.createElement("div",{className:$(o,t,`${t}-pure`,`${t}-placement-${i}`,r),style:n},a.createElement("div",{className:`${t}-arrow`}),a.createElement(y,Object.assign({},e,{className:o,prefixCls:t}),c||T(t,l,s)))}function _(e){const{prefixCls:o}=e,t=E(e,["prefixCls"]),{getPrefixCls:r}=a.useContext(v),n=r("popover",o),[i,l]=B(n);return i(a.createElement(z,Object.assign({},t,{prefixCls:n,hashId:l})))}export{_ as P,z as R,f as g,B as u};