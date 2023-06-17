import{g as M,m as W,k as F,r as a,a as x,c as O,d as L}from"./index-7e4a4b07.js";import{g as R,i as A,a as D}from"./colors-7be04c46.js";import{W as X}from"./index-618df176.js";import"./presetColors-88dfd00f.js";function Q(o){return typeof o!="string"?o:o.charAt(0).toUpperCase()+o.slice(1)}const C=(o,t,l)=>{const e=Q(l);return{[`${o.componentCls}-${t}`]:{color:o[`color${l}`],background:o[`color${e}Bg`],borderColor:o[`color${e}Border`],[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}},U=o=>R(o,(t,l)=>{let{textColor:e,lightBorderColor:r,lightColor:n,darkColor:c}=l;return{[`${o.componentCls}-${t}`]:{color:e,background:n,borderColor:r,"&-inverse":{color:o.colorTextLightSolid,background:c,borderColor:c},[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}}),V=o=>{const{paddingXXS:t,lineWidth:l,tagPaddingHorizontal:e,componentCls:r}=o,n=e-l,c=t-l;return{[r]:Object.assign(Object.assign({},F(o)),{display:"inline-block",height:"auto",marginInlineEnd:o.marginXS,paddingInline:n,fontSize:o.tagFontSize,lineHeight:o.tagLineHeight,whiteSpace:"nowrap",background:o.defaultBg,border:`${o.lineWidth}px ${o.lineType} ${o.colorBorder}`,borderRadius:o.borderRadiusSM,opacity:1,transition:`all ${o.motionDurationMid}`,textAlign:"start",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:o.defaultColor},[`${r}-close-icon`]:{marginInlineStart:c,color:o.colorTextDescription,fontSize:o.tagIconSize,cursor:"pointer",transition:`all ${o.motionDurationMid}`,"&:hover":{color:o.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${o.iconCls}-close, ${o.iconCls}-close:hover`]:{color:o.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:o.colorPrimary,backgroundColor:o.colorFillSecondary},"&:active, &-checked":{color:o.colorTextLightSolid},"&-checked":{backgroundColor:o.colorPrimary,"&:hover":{backgroundColor:o.colorPrimaryHover}},"&:active":{backgroundColor:o.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${o.iconCls} + span, > span + ${o.iconCls}`]:{marginInlineStart:n}}),[`${r}-borderless`]:{borderColor:"transparent",background:o.tagBorderlessBg}}},P=M("Tag",o=>{const{lineWidth:t,fontSizeIcon:l}=o,e=o.fontSizeSM,r=`${o.lineHeightSM*e}px`,n=W(o,{tagFontSize:e,tagLineHeight:r,tagIconSize:l-2*t,tagPaddingHorizontal:8,tagBorderlessBg:o.colorFillTertiary});return[V(n),U(n),C(n,"success","Success"),C(n,"processing","Info"),C(n,"error","Error"),C(n,"warning","Warning")]},o=>({defaultBg:o.colorFillQuaternary,defaultColor:o.colorText}));var q=globalThis&&globalThis.__rest||function(o,t){var l={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(l[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(o);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(o,e[r])&&(l[e[r]]=o[e[r]]);return l};const G=o=>{const{prefixCls:t,className:l,checked:e,onChange:r,onClick:n}=o,c=q(o,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:b}=a.useContext(x),i=g=>{r?.(!e),n?.(g)},d=b("tag",t),[u,p]=P(d),f=O(d,{[`${d}-checkable`]:!0,[`${d}-checkable-checked`]:e},l,p);return u(a.createElement("span",Object.assign({},c,{className:f,onClick:i})))},J=G;var K=globalThis&&globalThis.__rest||function(o,t){var l={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(l[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(o);r<e.length;r++)t.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(o,e[r])&&(l[e[r]]=o[e[r]]);return l};const Y=(o,t)=>{const{prefixCls:l,className:e,rootClassName:r,style:n,children:c,icon:b,color:i,onClose:d,closeIcon:u,closable:p=!1,bordered:f=!0}=o,g=K(o,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:T,direction:I}=a.useContext(x),[N,S]=a.useState(!0);a.useEffect(()=>{"visible"in g&&S(g.visible)},[g.visible]);const h=A(i)||D(i),z=Object.assign({backgroundColor:i&&!h?i:void 0},n),s=T("tag",l),[j,E]=P(s),w=O(s,{[`${s}-${i}`]:h,[`${s}-has-color`]:i&&!h,[`${s}-hidden`]:!N,[`${s}-rtl`]:I==="rtl",[`${s}-borderless`]:!f},e,r,E),m=y=>{y.stopPropagation(),d?.(y),!y.defaultPrevented&&S(!1)},B=a.useMemo(()=>p?u?a.createElement("span",{className:`${s}-close-icon`,onClick:m},u):a.createElement(L,{className:`${s}-close-icon`,onClick:m}):null,[p,u,s,m]),H=typeof g.onClick=="function"||c&&c.type==="a",$=b||null,_=$?a.createElement(a.Fragment,null,$,a.createElement("span",null,c)):c,v=a.createElement("span",Object.assign({},g,{ref:t,className:w,style:z}),_,B);return j(H?a.createElement(X,null,v):v)},Z=a.forwardRef(Y);Z.CheckableTag=J;export{Z as default};
