import{r as n,B as ge,y as ve,af as ye,s as be,g as Ce,m as q,k as he,c as A,a as J,u as Oe,aa as we,$ as Se,G as xe,V as K}from"./index-7e4a4b07.js";import{P as Q,M as Pe,g as Ne,a as Te}from"./placements-d495e90e.js";import{N as _e}from"./Compact-a8ad6370.js";import{t as $e}from"./index-5d226ec8.js";import{i as Ae}from"./zoom-470fe614.js";import{g as je,i as Ee}from"./colors-7be04c46.js";import"./roundedArrow-cf08b32b.js";import"./presetColors-88dfd00f.js";var S={shiftX:64,adjustY:1},x={adjustX:1,shiftY:!0},f=[0,0],Ie={left:{points:["cr","cl"],overflow:x,offset:[-4,0],targetOffset:f},right:{points:["cl","cr"],overflow:x,offset:[4,0],targetOffset:f},top:{points:["bc","tc"],overflow:S,offset:[0,-4],targetOffset:f},bottom:{points:["tc","bc"],overflow:S,offset:[0,4],targetOffset:f},topLeft:{points:["bl","tl"],overflow:S,offset:[0,-4],targetOffset:f},leftTop:{points:["tr","tl"],overflow:x,offset:[-4,0],targetOffset:f},topRight:{points:["br","tr"],overflow:S,offset:[0,-4],targetOffset:f},rightTop:{points:["tl","tr"],overflow:x,offset:[4,0],targetOffset:f},bottomRight:{points:["tr","br"],overflow:S,offset:[0,4],targetOffset:f},rightBottom:{points:["bl","br"],overflow:x,offset:[4,0],targetOffset:f},bottomLeft:{points:["tl","bl"],overflow:S,offset:[0,4],targetOffset:f},leftBottom:{points:["br","bl"],overflow:x,offset:[-4,0],targetOffset:f}},Re=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],De=function(t,a){var o=t.overlayClassName,r=t.trigger,l=r===void 0?["hover"]:r,c=t.mouseEnterDelay,s=c===void 0?0:c,i=t.mouseLeaveDelay,y=i===void 0?.1:i,u=t.overlayStyle,p=t.prefixCls,g=p===void 0?"rc-tooltip":p,b=t.children,m=t.onVisibleChange,v=t.afterVisibleChange,P=t.transitionName,j=t.animation,N=t.motion,E=t.placement,I=E===void 0?"right":E,C=t.align,L=C===void 0?{}:C,T=t.destroyTooltipOnHide,z=T===void 0?!1:T,R=t.defaultVisible,D=t.getTooltipContainer,M=t.overlayInnerStyle;t.arrowContent;var W=t.overlay,_=t.id,V=t.showArrow,X=V===void 0?!0:V,$=ge(t,Re),B=n.useRef(null);n.useImperativeHandle(a,function(){return B.current});var k=ve({},$);"visible"in t&&(k.popupVisible=t.visible);var F=function(){return n.createElement(Q,{key:"content",prefixCls:g,id:_,overlayInnerStyle:M},W)};return n.createElement(ye,be({popupClassName:o,prefixCls:g,popup:F,action:l,builtinPlacements:Ie,popupPlacement:I,ref:B,popupAlign:L,getPopupContainer:D,onPopupVisibleChange:m,afterPopupVisibleChange:v,popupTransitionName:P,popupAnimation:j,popupMotion:N,defaultPopupVisible:R,autoDestroy:z,mouseLeaveDelay:y,popupStyle:u,mouseEnterDelay:s,arrow:X},k),b)};const Ve=n.forwardRef(De),Be=e=>{const{componentCls:t,tooltipMaxWidth:a,tooltipColor:o,tooltipBg:r,tooltipBorderRadius:l,zIndexPopup:c,controlHeight:s,boxShadowSecondary:i,paddingSM:y,paddingXS:u,tooltipRadiusOuter:p}=e;return[{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},he(e)),{position:"absolute",zIndex:c,display:"block",width:"max-content",maxWidth:a,visibility:"visible",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":r,[`${t}-inner`]:{minWidth:s,minHeight:s,padding:`${y/2}px ${u}px`,color:o,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:r,borderRadius:l,boxShadow:i,boxSizing:"border-box"},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${t}-inner`]:{borderRadius:Math.min(l,Pe)}},[`${t}-content`]:{position:"relative"}}),je(e,(g,b)=>{let{darkColor:m}=b;return{[`&${t}-${g}`]:{[`${t}-inner`]:{backgroundColor:m},[`${t}-arrow`]:{"--antd-arrow-background-color":m}}}})),{"&-rtl":{direction:"rtl"}})},Ne(q(e,{borderRadiusOuter:p}),{colorBg:"var(--antd-arrow-background-color)",contentRadius:l,limitVerticalRadius:!0}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}}]},ee=(e,t)=>Ce("Tooltip",o=>{if(t===!1)return[];const{borderRadius:r,colorTextLightSolid:l,colorBgDefault:c,borderRadiusOuter:s}=o,i=q(o,{tooltipMaxWidth:250,tooltipColor:l,tooltipBorderRadius:r,tooltipBg:c,tooltipRadiusOuter:s>4?4:s});return[Be(i),Ae(o,"zoom-big-fast")]},o=>{let{zIndexPopupBase:r,colorBgSpotlight:l}=o;return{zIndexPopup:r+70,colorBgDefault:l}},{resetStyle:!1})(e);function te(e,t){const a=Ee(t),o=A({[`${e}-${t}`]:t&&a}),r={},l={};return t&&!a&&(r.background=t,l["--antd-arrow-background-color"]=t),{className:o,overlayStyle:r,arrowStyle:l}}function ke(e){const{prefixCls:t,className:a,placement:o="top",title:r,color:l,overlayInnerStyle:c}=e,{getPrefixCls:s}=n.useContext(J),i=s("tooltip",t),[y,u]=ee(i,!0),p=te(i,l),g=Object.assign(Object.assign({},c),p.overlayStyle),b=p.arrowStyle;return y(n.createElement("div",{className:A(u,i,`${i}-pure`,`${i}-placement-${o}`,a,p.className),style:b},n.createElement("div",{className:`${i}-arrow`}),n.createElement(Q,Object.assign({},e,{className:u,prefixCls:i,overlayInnerStyle:g}),r)))}var He=globalThis&&globalThis.__rest||function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a};const{useToken:Le}=$e,ze=(e,t)=>{const a={},o=Object.assign({},e);return t.forEach(r=>{e&&r in e&&(a[r]=e[r],delete o[r])}),{picked:a,omitted:o}};function Me(e,t){const a=e.type;if((a.__ANT_BUTTON===!0||e.type==="button")&&e.props.disabled||a.__ANT_SWITCH===!0&&(e.props.disabled||e.props.loading)||a.__ANT_RADIO===!0&&e.props.disabled){const{picked:o,omitted:r}=ze(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),l=Object.assign(Object.assign({display:"inline-block"},o),{cursor:"not-allowed",width:e.props.block?"100%":void 0}),c=Object.assign(Object.assign({},r),{pointerEvents:"none"}),s=K(e,{style:c,className:null});return n.createElement("span",{style:l,className:A(e.props.className,`${t}-disabled-compatible-wrapper`)},s)}return e}const oe=n.forwardRef((e,t)=>{var a,o;const{prefixCls:r,openClassName:l,getTooltipContainer:c,overlayClassName:s,color:i,overlayInnerStyle:y,children:u,afterOpenChange:p,afterVisibleChange:g,destroyTooltipOnHide:b,arrow:m=!0,title:v,overlay:P,builtinPlacements:j,arrowPointAtCenter:N=!1,autoAdjustOverflow:E=!0}=e,I=!!m,{token:C}=Le(),{getPopupContainer:L,getPrefixCls:T,direction:z}=n.useContext(J),R=n.useRef(null),D=()=>{var d;(d=R.current)===null||d===void 0||d.forceAlign()};n.useImperativeHandle(t,()=>({forceAlign:D,forcePopupAlign:()=>{D()}}));const[M,W]=Oe(!1,{value:(a=e.open)!==null&&a!==void 0?a:e.visible,defaultValue:(o=e.defaultOpen)!==null&&o!==void 0?o:e.defaultVisible}),_=!v&&!P&&v!==0,V=d=>{var O,w;W(_?!1:d),_||((O=e.onOpenChange)===null||O===void 0||O.call(e,d),(w=e.onVisibleChange)===null||w===void 0||w.call(e,d))},X=n.useMemo(()=>{var d,O;let w=N;return typeof m=="object"&&(w=(O=(d=m.pointAtCenter)!==null&&d!==void 0?d:m.arrowPointAtCenter)!==null&&O!==void 0?O:N),j||Te({arrowPointAtCenter:w,autoAdjustOverflow:E,arrowWidth:I?C.sizePopupArrow:0,borderRadius:C.borderRadius,offset:C.marginXXS,visibleFirst:!0})},[N,m,j,C]),$=n.useMemo(()=>v===0?v:P||v||"",[P,v]),B=n.createElement(_e,null,typeof $=="function"?$():$),{getPopupContainer:k,placement:F="top",mouseEnterDelay:Z=.1,mouseLeaveDelay:re=.1,overlayStyle:ae,rootClassName:ne}=e,le=He(e,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),h=T("tooltip",r),ie=T(),se=e["data-popover-inject"];let U=M;!("open"in e)&&!("visible"in e)&&_&&(U=!1);const Y=Me(we(u)&&!Se(u)?u:n.createElement("span",null,u),h),H=Y.props,ce=!H.className||typeof H.className=="string"?A(H.className,{[l||`${h}-open`]:!0}):H.className,[pe,fe]=ee(h,!se),G=te(h,i),ue=Object.assign(Object.assign({},y),G.overlayStyle),de=G.arrowStyle,me=A(s,{[`${h}-rtl`]:z==="rtl"},G.className,ne,fe);return pe(n.createElement(Ve,Object.assign({},le,{showArrow:I,placement:F,mouseEnterDelay:Z,mouseLeaveDelay:re,prefixCls:h,overlayClassName:me,overlayStyle:Object.assign(Object.assign({},de),ae),getTooltipContainer:k||c||L,ref:R,builtinPlacements:X,overlay:B,visible:U,onVisibleChange:V,afterVisibleChange:p??g,overlayInnerStyle:ue,arrowContent:n.createElement("span",{className:`${h}-arrow-content`}),motion:{motionName:xe(ie,"zoom-big-fast",e.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!b}),U?K(Y,{className:ce}):Y))});oe._InternalPanelDoNotUseOrYouWillBeFired=ke;const Je=oe;export{Je as default};
