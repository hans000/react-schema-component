import{C as oi}from"./CheckOutlined-66dd52de.js";import{B as J,c as A,v,y as U,r as l,s as G,R as Q,t as ri,g as ai,m as li,k as ci,a8 as si,a as di,a2 as mi,d as pi}from"./index-7e4a4b07.js";import{u as gi}from"./useBreakpoint-2a5fa87b.js";import{P as $i}from"./progress-94f4af7e.js";import Si from"./index-5b57a4c3.js";import"./useForceUpdate-26674e36.js";import"./placements-d495e90e.js";import"./roundedArrow-cf08b32b.js";import"./Compact-a8ad6370.js";import"./index-5d226ec8.js";import"./zoom-470fe614.js";import"./colors-7be04c46.js";import"./presetColors-88dfd00f.js";var hi=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick","render"];function q(i){return typeof i=="string"}function Z(i){var t,e=i.className,n=i.prefixCls,o=i.style,r=i.active,a=i.status,m=i.iconPrefix,c=i.icon;i.wrapperStyle;var $=i.stepNumber,y=i.disabled,S=i.description,p=i.title,f=i.subTitle,I=i.progressDot,u=i.stepIcon,g=i.tailContent,s=i.icons,P=i.stepIndex,b=i.onStepClick,z=i.onClick,H=i.render,w=J(i,hi),W=function(){z&&z.apply(void 0,arguments),b(P)},O=function(){var X,d,B=A("".concat(n,"-icon"),"".concat(m,"icon"),(X={},v(X,"".concat(m,"icon-").concat(c),c&&q(c)),v(X,"".concat(m,"icon-check"),!c&&a==="finish"&&(s&&!s.finish||!s)),v(X,"".concat(m,"icon-cross"),!c&&a==="error"&&(s&&!s.error||!s)),X)),_=l.createElement("span",{className:"".concat(n,"-icon-dot")});return I?typeof I=="function"?d=l.createElement("span",{className:"".concat(n,"-icon")},I(_,{index:$-1,status:a,title:p,description:S})):d=l.createElement("span",{className:"".concat(n,"-icon")},_):c&&!q(c)?d=l.createElement("span",{className:"".concat(n,"-icon")},c):s&&s.finish&&a==="finish"?d=l.createElement("span",{className:"".concat(n,"-icon")},s.finish):s&&s.error&&a==="error"?d=l.createElement("span",{className:"".concat(n,"-icon")},s.error):c||a==="finish"||a==="error"?d=l.createElement("span",{className:B}):d=l.createElement("span",{className:"".concat(n,"-icon")},$),u&&(d=u({index:$-1,status:a,title:p,description:S,node:d})),d},M=a||"wait",T=A("".concat(n,"-item"),"".concat(n,"-item-").concat(M),e,(t={},v(t,"".concat(n,"-item-custom"),c),v(t,"".concat(n,"-item-active"),r),v(t,"".concat(n,"-item-disabled"),y===!0),t)),x=U({},o),h={};b&&!y&&(h.role="button",h.tabIndex=0,h.onClick=W);var N=l.createElement("div",G({},w,{className:T,style:x}),l.createElement("div",G({onClick:z},h,{className:"".concat(n,"-item-container")}),l.createElement("div",{className:"".concat(n,"-item-tail")},g),l.createElement("div",{className:"".concat(n,"-item-icon")},O()),l.createElement("div",{className:"".concat(n,"-item-content")},l.createElement("div",{className:"".concat(n,"-item-title")},p,f&&l.createElement("div",{title:typeof f=="string"?f:void 0,className:"".concat(n,"-item-subtitle")},f)),S&&l.createElement("div",{className:"".concat(n,"-item-description")},S))));return H&&(N=H(N)||null),N}var fi=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange","itemRender","items"];function K(i){var t,e=i.prefixCls,n=e===void 0?"rc-steps":e,o=i.style,r=o===void 0?{}:o,a=i.className;i.children;var m=i.direction,c=m===void 0?"horizontal":m,$=i.type,y=$===void 0?"default":$,S=i.labelPlacement,p=S===void 0?"horizontal":S,f=i.iconPrefix,I=f===void 0?"rc":f,u=i.status,g=u===void 0?"process":u,s=i.size,P=i.current,b=P===void 0?0:P,z=i.progressDot,H=z===void 0?!1:z,w=i.stepIcon,W=i.initial,O=W===void 0?0:W,M=i.icons,T=i.onChange,x=i.itemRender,h=i.items,N=h===void 0?[]:h,j=J(i,fi),X=y==="navigation",d=y==="inline",B=d||H,_=d?"horizontal":c,V=d?void 0:s,k=B?"vertical":p,ii=A(n,"".concat(n,"-").concat(_),a,(t={},v(t,"".concat(n,"-").concat(V),V),v(t,"".concat(n,"-label-").concat(k),_==="horizontal"),v(t,"".concat(n,"-dot"),!!B),v(t,"".concat(n,"-navigation"),X),v(t,"".concat(n,"-inline"),d),t)),ti=function(L){T&&b!==L&&T(L)},ei=function(L,Y){var C=U({},L),D=O+Y;return g==="error"&&Y===b-1&&(C.className="".concat(n,"-next-error")),C.status||(D===b?C.status=g:D<b?C.status="finish":C.status="wait"),d&&(C.icon=void 0,C.subTitle=void 0),!C.render&&x&&(C.render=function(ni){return x(C,ni)}),Q.createElement(Z,G({},C,{active:D===b,stepNumber:D+1,stepIndex:D,key:D,prefixCls:n,iconPrefix:I,wrapperStyle:r,progressDot:B,stepIcon:w,icons:M,onStepClick:T&&ti}))};return Q.createElement("div",G({className:ii,style:r},j),N.filter(function(F){return F}).map(ei))}K.Step=Z;const ui=i=>{const{componentCls:t,customIconTop:e,customIconSize:n,customIconFontSize:o}=i;return{[`${t}-item-custom`]:{[`> ${t}-item-container > ${t}-item-icon`]:{height:"auto",background:"none",border:0,[`> ${t}-icon`]:{top:e,width:n,height:n,fontSize:o,lineHeight:`${o}px`}}},[`&:not(${t}-vertical)`]:{[`${t}-item-custom`]:{[`${t}-item-icon`]:{width:"auto",background:"none"}}}}},bi=ui,Ci=i=>{const{componentCls:t,inlineDotSize:e,inlineTitleColor:n,inlineTailColor:o}=i,r=i.paddingXS+i.lineWidth,a={[`${t}-item-container ${t}-item-content ${t}-item-title`]:{color:n}};return{[`&${t}-inline`]:{width:"auto",display:"inline-flex",[`${t}-item`]:{flex:"none","&-container":{padding:`${r}px ${i.paddingXXS}px 0`,margin:`0 ${i.marginXXS/2}px`,borderRadius:i.borderRadiusSM,cursor:"pointer",transition:`background-color ${i.motionDurationMid}`,"&:hover":{background:i.controlItemBgHover},["&[role='button']:hover"]:{opacity:1}},"&-icon":{width:e,height:e,marginInlineStart:`calc(50% - ${e/2}px)`,[`> ${t}-icon`]:{top:0},[`${t}-icon-dot`]:{borderRadius:i.fontSizeSM/4}},"&-content":{width:"auto",marginTop:i.marginXS-i.lineWidth},"&-title":{color:n,fontSize:i.fontSizeSM,lineHeight:i.lineHeightSM,fontWeight:"normal",marginBottom:i.marginXXS/2},"&-description":{display:"none"},"&-tail":{marginInlineStart:0,top:r+e/2,transform:"translateY(-50%)","&:after":{width:"100%",height:i.lineWidth,borderRadius:0,marginInlineStart:0,background:o}},[`&:first-child ${t}-item-tail`]:{width:"50%",marginInlineStart:"50%"},[`&:last-child ${t}-item-tail`]:{display:"block",width:"50%"},"&-wait":Object.assign({[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:i.colorBorderBg,border:`${i.lineWidth}px ${i.lineType} ${o}`}},a),"&-finish":Object.assign({[`${t}-item-tail::after`]:{backgroundColor:o},[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:o,border:`${i.lineWidth}px ${i.lineType} ${o}`}},a),"&-error":a,"&-active, &-process":Object.assign({[`${t}-item-icon`]:{width:e,height:e,marginInlineStart:`calc(50% - ${e/2}px)`,top:0}},a),[`&:not(${t}-item-active) > ${t}-item-container[role='button']:hover`]:{[`${t}-item-title`]:{color:n}}}}}},vi=Ci,yi=i=>{const{componentCls:t,iconSize:e,lineHeight:n,iconSizeSM:o}=i;return{[`&${t}-label-vertical`]:{[`${t}-item`]:{overflow:"visible","&-tail":{marginInlineStart:e/2+i.controlHeightLG,padding:`${i.paddingXXS}px ${i.paddingLG}px`},"&-content":{display:"block",width:(e/2+i.controlHeightLG)*2,marginTop:i.marginSM,textAlign:"center"},"&-icon":{display:"inline-block",marginInlineStart:i.controlHeightLG},"&-title":{paddingInlineEnd:0,paddingInlineStart:0,"&::after":{display:"none"}},"&-subtitle":{display:"block",marginBottom:i.marginXXS,marginInlineStart:0,lineHeight:n}},[`&${t}-small:not(${t}-dot)`]:{[`${t}-item`]:{"&-icon":{marginInlineStart:i.controlHeightLG+(e-o)/2}}}}}},Ii=yi,xi=i=>{const{componentCls:t,navContentMaxWidth:e,navArrowColor:n,stepsNavActiveColor:o,motionDurationSlow:r}=i;return{[`&${t}-navigation`]:{paddingTop:i.paddingSM,[`&${t}-small`]:{[`${t}-item`]:{"&-container":{marginInlineStart:-i.marginSM}}},[`${t}-item`]:{overflow:"visible",textAlign:"center","&-container":{display:"inline-block",height:"100%",marginInlineStart:-i.margin,paddingBottom:i.paddingSM,textAlign:"start",transition:`opacity ${r}`,[`${t}-item-content`]:{maxWidth:e},[`${t}-item-title`]:Object.assign(Object.assign({maxWidth:"100%",paddingInlineEnd:0},ri),{"&::after":{display:"none"}})},[`&:not(${t}-item-active)`]:{[`${t}-item-container[role='button']`]:{cursor:"pointer","&:hover":{opacity:.85}}},"&:last-child":{flex:1,"&::after":{display:"none"}},"&::after":{position:"absolute",top:`calc(50% - ${i.paddingSM/2}px)`,insetInlineStart:"100%",display:"inline-block",width:i.fontSizeIcon,height:i.fontSizeIcon,borderTop:`${i.lineWidth}px ${i.lineType} ${n}`,borderBottom:"none",borderInlineStart:"none",borderInlineEnd:`${i.lineWidth}px ${i.lineType} ${n}`,transform:"translateY(-50%) translateX(-50%) rotate(45deg)",content:'""'},"&::before":{position:"absolute",bottom:0,insetInlineStart:"50%",display:"inline-block",width:0,height:i.lineWidthBold,backgroundColor:o,transition:`width ${r}, inset-inline-start ${r}`,transitionTimingFunction:"ease-out",content:'""'}},[`${t}-item${t}-item-active::before`]:{insetInlineStart:0,width:"100%"}},[`&${t}-navigation${t}-vertical`]:{[`> ${t}-item`]:{marginInlineEnd:0,"&::before":{display:"none"},[`&${t}-item-active::before`]:{top:0,insetInlineEnd:0,insetInlineStart:"unset",display:"block",width:i.lineWidth*3,height:`calc(100% - ${i.marginLG}px)`},"&::after":{position:"relative",insetInlineStart:"50%",display:"block",width:i.controlHeight*.25,height:i.controlHeight*.25,marginBottom:i.marginXS,textAlign:"center",transform:"translateY(-50%) translateX(-50%) rotate(135deg)"},[`> ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}},[`&${t}-navigation${t}-horizontal`]:{[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}}},zi=xi,wi=i=>{const{antCls:t,componentCls:e}=i;return{[`&${e}-with-progress`]:{[`${e}-item`]:{paddingTop:i.paddingXXS,[`&-process ${e}-item-container ${e}-item-icon ${e}-icon`]:{color:i.processIconColor}},[`&${e}-vertical > ${e}-item `]:{paddingInlineStart:i.paddingXXS,[`> ${e}-item-container > ${e}-item-tail`]:{top:i.marginXXS,insetInlineStart:i.iconSize/2-i.lineWidth+i.paddingXXS}},[`&, &${e}-small`]:{[`&${e}-horizontal ${e}-item:first-child`]:{paddingBottom:i.paddingXXS,paddingInlineStart:i.paddingXXS}},[`&${e}-small${e}-vertical > ${e}-item > ${e}-item-container > ${e}-item-tail`]:{insetInlineStart:i.iconSizeSM/2-i.lineWidth+i.paddingXXS},[`&${e}-label-vertical`]:{[`${e}-item ${e}-item-tail`]:{top:i.margin-2*i.lineWidth}},[`${e}-item-icon`]:{position:"relative",[`${t}-progress`]:{position:"absolute",insetBlockStart:(i.iconSize-i.stepsProgressSize-i.lineWidth*2)/2,insetInlineStart:(i.iconSize-i.stepsProgressSize-i.lineWidth*2)/2}}}}},Ti=wi,Ni=i=>{const{componentCls:t,descriptionMaxWidth:e,lineHeight:n,dotCurrentSize:o,dotSize:r,motionDurationSlow:a}=i;return{[`&${t}-dot, &${t}-dot${t}-small`]:{[`${t}-item`]:{"&-title":{lineHeight:n},"&-tail":{top:Math.floor((i.dotSize-i.lineWidth*3)/2),width:"100%",marginTop:0,marginBottom:0,marginInline:`${e/2}px 0`,padding:0,"&::after":{width:`calc(100% - ${i.marginSM*2}px)`,height:i.lineWidth*3,marginInlineStart:i.marginSM}},"&-icon":{width:r,height:r,marginInlineStart:(i.descriptionMaxWidth-r)/2,paddingInlineEnd:0,lineHeight:`${r}px`,background:"transparent",border:0,[`${t}-icon-dot`]:{position:"relative",float:"left",width:"100%",height:"100%",borderRadius:100,transition:`all ${a}`,"&::after":{position:"absolute",top:-i.marginSM,insetInlineStart:(r-i.controlHeightLG*1.5)/2,width:i.controlHeightLG*1.5,height:i.controlHeight,background:"transparent",content:'""'}}},"&-content":{width:e},[`&-process ${t}-item-icon`]:{position:"relative",top:(r-o)/2,width:o,height:o,lineHeight:`${o}px`,background:"none",marginInlineStart:(i.descriptionMaxWidth-o)/2},[`&-process ${t}-icon`]:{[`&:first-child ${t}-icon-dot`]:{insetInlineStart:0}}}},[`&${t}-vertical${t}-dot`]:{[`${t}-item-icon`]:{marginTop:(i.controlHeight-r)/2,marginInlineStart:0,background:"none"},[`${t}-item-process ${t}-item-icon`]:{marginTop:(i.controlHeight-o)/2,top:0,insetInlineStart:(r-o)/2,marginInlineStart:0},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(i.controlHeight-r)/2,insetInlineStart:0,margin:0,padding:`${r+i.paddingXS}px 0 ${i.paddingXS}px`,"&::after":{marginInlineStart:(r-i.lineWidth)/2}},[`&${t}-small`]:{[`${t}-item-icon`]:{marginTop:(i.controlHeightSM-r)/2},[`${t}-item-process ${t}-item-icon`]:{marginTop:(i.controlHeightSM-o)/2},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(i.controlHeightSM-r)/2}},[`${t}-item:first-child ${t}-icon-dot`]:{insetInlineStart:0},[`${t}-item-content`]:{width:"inherit"}}}},Xi=Ni,Pi=i=>{const{componentCls:t}=i;return{[`&${t}-rtl`]:{direction:"rtl",[`${t}-item`]:{"&-subtitle":{float:"left"}},[`&${t}-navigation`]:{[`${t}-item::after`]:{transform:"rotate(-45deg)"}},[`&${t}-vertical`]:{[`> ${t}-item`]:{"&::after":{transform:"rotate(225deg)"},[`${t}-item-icon`]:{float:"right"}}},[`&${t}-dot`]:{[`${t}-item-icon ${t}-icon-dot, &${t}-small ${t}-item-icon ${t}-icon-dot`]:{float:"right"}}}}},Hi=Pi,Wi=i=>{const{componentCls:t,iconSizeSM:e,fontSizeSM:n,fontSize:o,colorTextDescription:r}=i;return{[`&${t}-small`]:{[`&${t}-horizontal:not(${t}-label-vertical) ${t}-item`]:{paddingInlineStart:i.paddingSM,"&:first-child":{paddingInlineStart:0}},[`${t}-item-icon`]:{width:e,height:e,marginTop:0,marginBottom:0,marginInline:`0 ${i.marginXS}px`,fontSize:n,lineHeight:`${e}px`,textAlign:"center",borderRadius:e},[`${t}-item-title`]:{paddingInlineEnd:i.paddingSM,fontSize:o,lineHeight:`${e}px`,"&::after":{top:e/2}},[`${t}-item-description`]:{color:r,fontSize:o},[`${t}-item-tail`]:{top:e/2-i.paddingXXS},[`${t}-item-custom ${t}-item-icon`]:{width:"inherit",height:"inherit",lineHeight:"inherit",background:"none",border:0,borderRadius:0,[`> ${t}-icon`]:{fontSize:e,lineHeight:`${e}px`,transform:"none"}}}}},Di=Wi,Ei=i=>{const{componentCls:t,iconSizeSM:e,iconSize:n}=i;return{[`&${t}-vertical`]:{display:"flex",flexDirection:"column",[`> ${t}-item`]:{display:"block",flex:"1 0 auto",paddingInlineStart:0,overflow:"visible",[`${t}-item-icon`]:{float:"left",marginInlineEnd:i.margin},[`${t}-item-content`]:{display:"block",minHeight:i.controlHeight*1.5,overflow:"hidden"},[`${t}-item-title`]:{lineHeight:`${n}px`},[`${t}-item-description`]:{paddingBottom:i.paddingSM}},[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:n/2-i.lineWidth,width:i.lineWidth,height:"100%",padding:`${n+i.marginXXS*1.5}px 0 ${i.marginXXS*1.5}px`,"&::after":{width:i.lineWidth,height:"100%"}},[`> ${t}-item:not(:last-child) > ${t}-item-container > ${t}-item-tail`]:{display:"block"},[` > ${t}-item > ${t}-item-container > ${t}-item-content > ${t}-item-title`]:{"&::after":{display:"none"}},[`&${t}-small ${t}-item-container`]:{[`${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:e/2-i.lineWidth,padding:`${e+i.marginXXS*1.5}px 0 ${i.marginXXS*1.5}px`},[`${t}-item-title`]:{lineHeight:`${e}px`}}}}},Oi=Ei;var E;(function(i){i.wait="wait",i.process="process",i.finish="finish",i.error="error"})(E||(E={}));const R=(i,t)=>{const e=`${t.componentCls}-item`,n=`${i}IconColor`,o=`${i}TitleColor`,r=`${i}DescriptionColor`,a=`${i}TailColor`,m=`${i}IconBgColor`,c=`${i}IconBorderColor`,$=`${i}DotColor`;return{[`${e}-${i} ${e}-icon`]:{backgroundColor:t[m],borderColor:t[c],[`> ${t.componentCls}-icon`]:{color:t[n],[`${t.componentCls}-icon-dot`]:{background:t[$]}}},[`${e}-${i}${e}-custom ${e}-icon`]:{[`> ${t.componentCls}-icon`]:{color:t[$]}},[`${e}-${i} > ${e}-container > ${e}-content > ${e}-title`]:{color:t[o],"&::after":{backgroundColor:t[a]}},[`${e}-${i} > ${e}-container > ${e}-content > ${e}-description`]:{color:t[r]},[`${e}-${i} > ${e}-container > ${e}-tail::after`]:{backgroundColor:t[a]}}},Mi=i=>{const{componentCls:t,motionDurationSlow:e}=i,n=`${t}-item`;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[n]:{position:"relative",display:"inline-block",flex:1,overflow:"hidden",verticalAlign:"top","&:last-child":{flex:"none",[`> ${n}-container > ${n}-tail, > ${n}-container >  ${n}-content > ${n}-title::after`]:{display:"none"}}},[`${n}-container`]:{outline:"none"},[`${n}-icon, ${n}-content`]:{display:"inline-block",verticalAlign:"top"},[`${n}-icon`]:{width:i.iconSize,height:i.iconSize,marginTop:0,marginBottom:0,marginInlineStart:0,marginInlineEnd:i.marginXS,fontSize:i.iconFontSize,fontFamily:i.fontFamily,lineHeight:`${i.iconSize}px`,textAlign:"center",borderRadius:i.iconSize,border:`${i.lineWidth}px ${i.lineType} transparent`,transition:`background-color ${e}, border-color ${e}`,[`${t}-icon`]:{position:"relative",top:i.iconTop,color:i.colorPrimary,lineHeight:1}},[`${n}-tail`]:{position:"absolute",top:i.iconSize/2-i.paddingXXS,insetInlineStart:0,width:"100%","&::after":{display:"inline-block",width:"100%",height:i.lineWidth,background:i.colorSplit,borderRadius:i.lineWidth,transition:`background ${e}`,content:'""'}},[`${n}-title`]:{position:"relative",display:"inline-block",paddingInlineEnd:i.padding,color:i.colorText,fontSize:i.fontSizeLG,lineHeight:`${i.titleLineHeight}px`,"&::after":{position:"absolute",top:i.titleLineHeight/2,insetInlineStart:"100%",display:"block",width:9999,height:i.lineWidth,background:i.processTailColor,content:'""'}},[`${n}-subtitle`]:{display:"inline",marginInlineStart:i.marginXS,color:i.colorTextDescription,fontWeight:"normal",fontSize:i.fontSize},[`${n}-description`]:{color:i.colorTextDescription,fontSize:i.fontSize}},R(E.wait,i)),R(E.process,i)),{[`${n}-process > ${n}-container > ${n}-title`]:{fontWeight:i.fontWeightStrong}}),R(E.finish,i)),R(E.error,i)),{[`${n}${t}-next-error > ${t}-item-title::after`]:{background:i.colorError},[`${n}-disabled`]:{cursor:"not-allowed"}})},ji=i=>{const{componentCls:t,motionDurationSlow:e}=i;return{[`& ${t}-item`]:{[`&:not(${t}-item-active)`]:{[`& > ${t}-item-container[role='button']`]:{cursor:"pointer",[`${t}-item`]:{[`&-title, &-subtitle, &-description, &-icon ${t}-icon`]:{transition:`color ${e}`}},"&:hover":{[`${t}-item`]:{["&-title, &-subtitle, &-description"]:{color:i.colorPrimary}}}},[`&:not(${t}-item-process)`]:{[`& > ${t}-item-container[role='button']:hover`]:{[`${t}-item`]:{"&-icon":{borderColor:i.colorPrimary,[`${t}-icon`]:{color:i.colorPrimary}}}}}}},[`&${t}-horizontal:not(${t}-label-vertical)`]:{[`${t}-item`]:{paddingInlineStart:i.padding,whiteSpace:"nowrap","&:first-child":{paddingInlineStart:0},[`&:last-child ${t}-item-title`]:{paddingInlineEnd:0},"&-tail":{display:"none"},"&-description":{maxWidth:i.descriptionMaxWidth,whiteSpace:"normal"}}}}},Bi=i=>{const{componentCls:t}=i;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ci(i)),{display:"flex",width:"100%",fontSize:0,textAlign:"initial"}),Mi(i)),ji(i)),bi(i)),Di(i)),Oi(i)),Ii(i)),Xi(i)),zi(i)),Hi(i)),Ti(i)),vi(i))}},_i=ai("Steps",i=>{const{wireframe:t,colorTextDisabled:e,controlHeightLG:n,colorTextLightSolid:o,colorText:r,colorPrimary:a,colorTextLabel:m,colorTextDescription:c,colorTextQuaternary:$,colorFillContent:y,controlItemBgActive:S,colorError:p,colorBgContainer:f,colorBorderSecondary:I,colorSplit:u}=i,g=li(i,{processIconColor:o,processTitleColor:r,processDescriptionColor:r,processIconBgColor:a,processIconBorderColor:a,processDotColor:a,processTailColor:u,waitIconColor:t?e:m,waitTitleColor:c,waitDescriptionColor:c,waitTailColor:u,waitIconBgColor:t?f:y,waitIconBorderColor:t?e:"transparent",waitDotColor:e,finishIconColor:a,finishTitleColor:r,finishDescriptionColor:c,finishTailColor:a,finishIconBgColor:t?f:S,finishIconBorderColor:t?a:S,finishDotColor:a,errorIconColor:o,errorTitleColor:p,errorDescriptionColor:p,errorTailColor:u,errorIconBgColor:p,errorIconBorderColor:p,errorDotColor:p,stepsNavActiveColor:a,stepsProgressSize:n,inlineDotSize:6,inlineTitleColor:$,inlineTailColor:I});return[Bi(g)]},i=>{const{colorTextDisabled:t,fontSize:e,controlHeightSM:n,controlHeight:o,controlHeightLG:r,fontSizeHeading3:a}=i;return{titleLineHeight:o,customIconSize:o,customIconTop:0,customIconFontSize:n,iconSize:o,iconTop:-.5,iconFontSize:e,iconSizeSM:a,dotSize:o/4,dotCurrentSize:r/4,navArrowColor:t,navContentMaxWidth:"auto",descriptionMaxWidth:140}});function Li(i){return i.filter(t=>t)}function Ri(i,t){if(i)return i;const e=si(t).map(n=>{if(l.isValidElement(n)){const{props:o}=n;return Object.assign({},o)}return null});return Li(e)}var Ai=globalThis&&globalThis.__rest||function(i,t){var e={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&t.indexOf(n)<0&&(e[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(i);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(i,n[o])&&(e[n[o]]=i[n[o]]);return e};const Gi=i=>{const{percent:t,size:e,className:n,rootClassName:o,direction:r,items:a,responsive:m=!0,current:c=0,children:$}=i,y=Ai(i,["percent","size","className","rootClassName","direction","items","responsive","current","children"]),{xs:S}=gi(m),{getPrefixCls:p,direction:f}=l.useContext(di),I=l.useMemo(()=>m&&S?"vertical":r,[S,r]),u=mi(e),g=p("steps",i.prefixCls),[s,P]=_i(g),b=i.type==="inline",z=p("",i.iconPrefix),H=Ri(a,$),w=b?void 0:t,W=A({[`${g}-rtl`]:f==="rtl",[`${g}-with-progress`]:w!==void 0},n,o,P),O={finish:l.createElement(oi,{className:`${g}-finish-icon`}),error:l.createElement(pi,{className:`${g}-error-icon`})},M=x=>{let{node:h,status:N}=x;if(N==="process"&&w!==void 0){const j=u==="small"?32:40;return l.createElement("div",{className:`${g}-progress-icon`},l.createElement($i,{type:"circle",percent:w,size:j,strokeWidth:4,format:()=>null}),h)}return h},T=(x,h)=>x.description?l.createElement(Si,{title:x.description},h):h;return s(l.createElement(K,Object.assign({icons:O},y,{current:c,size:u,items:H,itemRender:b?T:void 0,stepIcon:M,direction:I,prefixCls:g,iconPrefix:z,className:W})))};Gi.Step=K.Step;export{Gi as default};
