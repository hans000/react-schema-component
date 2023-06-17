import{r as l,q as B,ak as X,l as ke,c as k,j as ue,a3 as Oe,S as me,R as s,a6 as pe,y as L,s as A,B as Te,u as ee,af as Ie,L as Re,d as _e,g as Me,m as Ae,k as je,at as W,a as fe}from"./index-7e4a4b07.js";import{M as ze,g as Be,a as Le}from"./placements-d495e90e.js";import{t as Fe}from"./index-5d226ec8.js";import{R as Ve}from"./PurePanel-bfdc9985.js";import{B as ce}from"./button-8fc5a235.js";import{u as De}from"./useLocale-67a063e1.js";import"./roundedArrow-cf08b32b.js";import"./zoom-470fe614.js";import"./presetColors-88dfd00f.js";import"./index-618df176.js";import"./Compact-a8ad6370.js";import"./LoadingOutlined-abbc5ffc.js";import"./compact-item-94a971d4.js";function We(t){var e=window.innerWidth||document.documentElement.clientWidth,o=window.innerHeight||document.documentElement.clientHeight,n=t.getBoundingClientRect(),r=n.top,c=n.right,i=n.bottom,a=n.left;return r>=0&&a>=0&&c<=e&&i<=o}function He(t,e,o,n){var r=l.useState(void 0),c=B(r,2),i=c[0],a=c[1];X(function(){var d=typeof t=="function"?t():t;a(d||null)});var m=l.useState(null),p=B(m,2),f=p[0],u=p[1],g=ke(function(){if(i){!We(i)&&e&&i.scrollIntoView(n);var d=i.getBoundingClientRect(),y=d.left,v=d.top,h=d.width,C=d.height,E={left:y,top:v,width:h,height:C,radius:0};u(function(N){return JSON.stringify(N)!==JSON.stringify(E)?E:N})}else u(null)});X(function(){return g(),window.addEventListener("resize",g),function(){window.removeEventListener("resize",g)}},[i,e,g]);var w=l.useMemo(function(){if(!f)return f;var d=o?.offset||6,y=o?.radius||2;return{left:f.left-d,top:f.top-d,width:f.width+d*2,height:f.height+d*2,radius:y}},[f,o]);return[w,i]}function Xe(t){var e=t.prefixCls,o=t.current,n=t.total,r=t.title,c=t.description,i=t.onClose,a=t.onPrev,m=t.onNext,p=t.onFinish,f=t.className;return l.createElement("div",{className:k("".concat(e,"-content"),f)},l.createElement("div",{className:"".concat(e,"-inner")},l.createElement("button",{type:"button",onClick:i,"aria-label":"Close",className:"".concat(e,"-close")},l.createElement("span",{className:"".concat(e,"-close-x")},"×")),l.createElement("div",{className:"".concat(e,"-header")},l.createElement("div",{className:"".concat(e,"-title")},r)),l.createElement("div",{className:"".concat(e,"-description")},c),l.createElement("div",{className:"".concat(e,"-footer")},l.createElement("div",{className:"".concat(e,"-sliders")},n>1?ue(Array.from({length:n}).keys()).map(function(u,g){return l.createElement("span",{key:u,className:g===o?"active":""})}):null),l.createElement("div",{className:"".concat(e,"-buttons")},o!==0?l.createElement("button",{className:"".concat(e,"-prev-btn"),onClick:a},"Prev"):null,o===n-1?l.createElement("button",{className:"".concat(e,"-finish-btn"),onClick:p},"Finish"):l.createElement("button",{className:"".concat(e,"-next-btn"),onClick:m},"Next")))))}var Je=function(e){var o=e.current,n=e.renderPanel;return l.createElement(l.Fragment,null,typeof n=="function"?n(e,o):l.createElement(Xe,e))},H={fill:"transparent",pointerEvents:"auto"},Ue=function(e){var o=e.prefixCls,n=e.rootClassName,r=e.pos,c=e.showMask,i=e.style,a=i===void 0?{}:i,m=e.fill,p=m===void 0?"rgba(0,0,0,0.5)":m,f=e.open,u=e.animated,g=e.zIndex,w=Oe(),d="".concat(o,"-mask-").concat(w),y=me(u)==="object"?u?.placeholder:u;return s.createElement(pe,{open:f,autoLock:!0},s.createElement("div",{className:k("".concat(o,"-mask"),n),style:L({position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:g,pointerEvents:"none"},a)},c?s.createElement("svg",{style:{width:"100%",height:"100%"}},s.createElement("defs",null,s.createElement("mask",{id:d},s.createElement("rect",{x:"0",y:"0",width:"100vw",height:"100vh",fill:"white"}),r&&s.createElement("rect",{x:r.left,y:r.top,rx:r.radius,width:r.width,height:r.height,fill:"black",className:y?"".concat(o,"-placeholder-animated"):""}))),s.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:p,mask:"url(#".concat(d,")")}),r&&s.createElement(s.Fragment,null,s.createElement("rect",A({},H,{x:"0",y:"0",width:"100%",height:r.top})),s.createElement("rect",A({},H,{x:"0",y:"0",width:r.left,height:"100%"})),s.createElement("rect",A({},H,{x:"0",y:r.top+r.height,width:"100%",height:"calc(100vh - ".concat(r.top+r.height,"px)")})),s.createElement("rect",A({},H,{x:r.left+r.width,y:"0",width:"calc(100vw - ".concat(r.left+r.width,"px)"),height:"100%"})))):null))},Ze=[0,0],de={left:{points:["cr","cl"],offset:[-8,0]},right:{points:["cl","cr"],offset:[8,0]},top:{points:["bc","tc"],offset:[0,-8]},bottom:{points:["tc","bc"],offset:[0,8]},topLeft:{points:["bl","tl"],offset:[0,-8]},leftTop:{points:["tr","tl"],offset:[-8,0]},topRight:{points:["br","tr"],offset:[0,-8]},rightTop:{points:["tl","tr"],offset:[8,0]},bottomRight:{points:["tr","br"],offset:[0,8]},rightBottom:{points:["bl","br"],offset:[8,0]},bottomLeft:{points:["tl","bl"],offset:[0,8]},leftBottom:{points:["br","bl"],offset:[-8,0]}};function ve(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e={};return Object.keys(de).forEach(function(o){e[o]=L(L({},de[o]),{},{autoArrow:t,targetOffset:Ze})}),e}ve();var qe=["prefixCls","steps","defaultCurrent","current","onChange","onClose","onFinish","open","mask","arrow","rootClassName","placement","renderPanel","gap","animated","scrollIntoViewOptions","zIndex"],Ge={left:"50%",top:"50%",width:1,height:1},Ye=function(e){var o=e.prefixCls,n=o===void 0?"rc-tour":o,r=e.steps,c=r===void 0?[]:r,i=e.defaultCurrent,a=e.current,m=e.onChange,p=e.onClose,f=e.onFinish,u=e.open,g=e.mask,w=g===void 0?!0:g,d=e.arrow,y=d===void 0?!0:d,v=e.rootClassName,h=e.placement,C=h===void 0?"bottom":h,E=e.renderPanel,N=e.gap,$=e.animated,x=e.scrollIntoViewOptions,j=x===void 0?!0:x,R=e.zIndex,F=R===void 0?1001:R,J=Te(e,qe),_=l.useRef(),U=ee(0,{value:a,defaultValue:i}),V=B(U,2),b=V[0],P=V[1],Z=ee(void 0,{value:u,postState:function(S){return b<0||b>=c.length?!1:S??!0}}),te=B(Z,2),O=te[0],be=te[1],ne=l.useRef(O);X(function(){O&&!ne.current&&P(0),ne.current=O},[O]);var I=c[b]||{},Ce=I.target,q=I.placement,ye=I.style,re=I.arrow,xe=I.className,G=I.mask,Y=I.scrollIntoViewOptions,we=q??C,z=O&&(G??w),Ee=Y??j,Ne=He(Ce,u,N,Ee),oe=B(Ne,2),ae=oe[0],K=oe[1],D=K?typeof re>"u"?y:re:!1,le=me(D)==="object"?D.pointAtCenter:!1;X(function(){var T;(T=_.current)===null||T===void 0||T.forceAlign()},[le,b]);var ie=function(S){P(S),m?.(S)};if(K===void 0)return null;var se=function(){be(!1),p?.(b)},Pe=function(){return l.createElement(Je,A({arrow:D,key:"content",prefixCls:n,total:c.length,renderPanel:E,onPrev:function(){ie(b-1)},onNext:function(){ie(b+1)},onClose:se,current:b,onFinish:function(){se(),f?.()}},c[b]))},$e=typeof z=="boolean"?z:!!z,M=typeof z=="boolean"?void 0:z,Se=function(S){return S||K||document.body};return l.createElement(l.Fragment,null,l.createElement(Ue,{zIndex:F,prefixCls:n,pos:ae,showMask:$e,style:M?.style,fill:M?.color,open:O,animated:$,rootClassName:v}),l.createElement(Ie,A({builtinPlacements:ve(le)},J,{ref:_,popupStyle:ye,popupPlacement:we,popupVisible:O,popupClassName:k(v,xe),prefixCls:n,popup:Pe,forceRender:!1,destroyPopupOnHide:!0,zIndex:F,getTriggerDOMNode:Se,arrow:!!D}),l.createElement(pe,{open:O,autoLock:!0},l.createElement("div",{className:k(v,"".concat(n,"-target-placeholder")),style:L(L({},ae||Ge),{},{position:"fixed",pointerEvents:"none"})}))))};function Q(t){return t!=null}const Ke=t=>{let{stepProps:e,current:o,type:n,indicatorsRender:r}=t;var c,i;const{prefixCls:a,total:m=1,title:p,onClose:f,onPrev:u,onNext:g,onFinish:w,cover:d,description:y,nextButtonProps:v,prevButtonProps:h,type:C,className:E}=e,N=C??n,$=o===m-1,x=()=>{var P;u?.(),(P=h?.onClick)===null||P===void 0||P.call(h)},j=()=>{var P;$?w?.():g?.(),(P=v?.onClick)===null||P===void 0||P.call(v)},R=Q(p)?s.createElement("div",{className:`${a}-header`},s.createElement("div",{className:`${a}-title`},p)):null,F=Q(y)?s.createElement("div",{className:`${a}-description`},y):null,J=Q(d)?s.createElement("div",{className:`${a}-cover`},d):null;let _;r?_=r(o,m):_=ue(Array.from({length:m}).keys()).map((P,Z)=>s.createElement("span",{key:P,className:k(Z===o&&`${a}-indicator-active`,`${a}-indicator`)}));const U=N==="primary"?"default":"primary",V={type:"default",ghost:N==="primary"},[b]=De("Tour",Re.Tour);return s.createElement("div",{className:k(E,`${a}-content`)},s.createElement("div",{className:`${a}-inner`},s.createElement(_e,{className:`${a}-close`,onClick:f}),J,R,F,s.createElement("div",{className:`${a}-footer`},m>1&&s.createElement("div",{className:`${a}-indicators`},_),s.createElement("div",{className:`${a}-buttons`},o!==0?s.createElement(ce,Object.assign({},V,h,{onClick:x,size:"small",className:k(`${a}-prev-btn`,h?.className)}),(c=h?.children)!==null&&c!==void 0?c:b?.Previous):null,s.createElement(ce,Object.assign({type:U},v,{onClick:j,size:"small",className:k(`${a}-next-btn`,v?.className)}),(i=v?.children)!==null&&i!==void 0?i:$?b?.Finish:b?.Next)))))},ge=Ke,Qe=t=>{const{componentCls:e,lineHeight:o,padding:n,paddingXS:r,borderRadius:c,borderRadiusXS:i,colorPrimary:a,colorText:m,colorFill:p,indicatorHeight:f,indicatorWidth:u,boxShadowTertiary:g,tourZIndexPopup:w,fontSize:d,colorBgContainer:y,fontWeightStrong:v,marginXS:h,colorTextLightSolid:C,tourBorderRadius:E,colorWhite:N,colorBgTextHover:$,tourCloseSize:x,motionDurationSlow:j,antCls:R}=t;return[{[e]:Object.assign(Object.assign({},je(t)),{color:m,position:"absolute",zIndex:w,display:"block",visibility:"visible",fontSize:d,lineHeight:o,width:520,"--antd-arrow-background-color":y,"&-pure":{maxWidth:"100%",position:"relative"},[`&${e}-hidden`]:{display:"none"},[`${e}-content`]:{position:"relative"},[`${e}-inner`]:{textAlign:"start",textDecoration:"none",borderRadius:E,boxShadow:g,position:"relative",backgroundColor:y,border:"none",backgroundClip:"padding-box",[`${e}-close`]:{position:"absolute",top:n,insetInlineEnd:n,color:t.colorIcon,outline:"none",width:x,height:x,borderRadius:t.borderRadiusSM,transition:`background-color ${t.motionDurationMid}, color ${t.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:t.colorIconHover,backgroundColor:t.wireframe?"transparent":t.colorFillContent}},[`${e}-cover`]:{textAlign:"center",padding:`${n+x+r}px ${n}px 0`,img:{width:"100%"}},[`${e}-header`]:{padding:`${n}px ${n}px ${r}px`,[`${e}-title`]:{lineHeight:o,fontSize:d,fontWeight:v}},[`${e}-description`]:{padding:`0 ${n}px`,lineHeight:o,wordWrap:"break-word"},[`${e}-footer`]:{padding:`${r}px ${n}px ${n}px`,textAlign:"end",borderRadius:`0 0 ${i}px ${i}px`,display:"flex",[`${e}-indicators`]:{display:"inline-block",[`${e}-indicator`]:{width:u,height:f,display:"inline-block",borderRadius:"50%",background:p,"&:not(:last-child)":{marginInlineEnd:f},"&-active":{background:a}}},[`${e}-buttons`]:{marginInlineStart:"auto",[`${R}-btn`]:{marginInlineStart:h}}}},[`${e}-primary, &${e}-primary`]:{"--antd-arrow-background-color":a,[`${e}-inner`]:{color:C,textAlign:"start",textDecoration:"none",backgroundColor:a,borderRadius:c,boxShadow:g,[`${e}-close`]:{color:C},[`${e}-indicators`]:{[`${e}-indicator`]:{background:new W(C).setAlpha(.15).toRgbString(),"&-active":{background:C}}},[`${e}-prev-btn`]:{color:C,borderColor:new W(C).setAlpha(.15).toRgbString(),backgroundColor:a,"&:hover":{backgroundColor:new W(C).setAlpha(.15).toRgbString(),borderColor:"transparent"}},[`${e}-next-btn`]:{color:a,borderColor:"transparent",background:N,"&:hover":{background:new W($).onBackground(N).toRgbString()}}}}}),[`${e}-mask`]:{[`${e}-placeholder-animated`]:{transition:`all ${j}`}},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${e}-inner`]:{borderRadius:Math.min(E,ze)}}},Be(t,{colorBg:"var(--antd-arrow-background-color)",contentRadius:E,limitVerticalRadius:!0})]},he=Me("Tour",t=>{const{borderRadiusLG:e,fontSize:o,lineHeight:n}=t,r=Ae(t,{tourZIndexPopup:t.zIndexPopupBase+70,indicatorWidth:6,indicatorHeight:6,tourBorderRadius:e,tourCloseSize:o*n});return[Qe(r)]});var et=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};const tt=t=>{const{prefixCls:e,current:o=0,total:n=6,className:r,style:c,type:i}=t,a=et(t,["prefixCls","current","total","className","style","type"]),{getPrefixCls:m}=l.useContext(fe),p=m("tour",e),[f,u]=he(p);return f(l.createElement(Ve,{prefixCls:p,hashId:u,className:k(r,`${p}-pure`,i&&`${p}-${i}`),style:c},l.createElement(ge,{stepProps:Object.assign(Object.assign({},a),{prefixCls:p,total:n}),current:o,type:i})))},nt=tt,rt=t=>{let{defaultType:e,steps:o=[],current:n,defaultCurrent:r}=t;var c;const[i,a]=ee(r,{value:n});l.useLayoutEffect(()=>{n!==void 0&&a(n)},[n]);const m=typeof i=="number"?(c=o[i])===null||c===void 0?void 0:c.type:e;return{currentMergedType:m??e,updateInnerCurrent:a}},ot=rt;var at=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};const lt=t=>{const{prefixCls:e,current:o,defaultCurrent:n,type:r,rootClassName:c,indicatorsRender:i,steps:a}=t,m=at(t,["prefixCls","current","defaultCurrent","type","rootClassName","indicatorsRender","steps"]),{getPrefixCls:p,direction:f}=l.useContext(fe),u=p("tour",e),[g,w]=he(u),{token:d}=Fe.useToken(),{currentMergedType:y,updateInnerCurrent:v}=ot({defaultType:r,steps:a,current:o,defaultCurrent:n}),h=Le({arrowPointAtCenter:!0,autoAdjustOverflow:!0,offset:d.marginXXS,arrowWidth:d.sizePopupArrow,borderRadius:d.borderRadius}),C=k({[`${u}-primary`]:y==="primary",[`${u}-rtl`]:f==="rtl"},w,c),E=($,x)=>s.createElement(ge,{type:r,stepProps:$,current:x,indicatorsRender:i}),N=$=>{var x;v($),(x=t.onChange)===null||x===void 0||x.call(t,$)};return g(s.createElement(Ye,Object.assign({},m,{rootClassName:C,prefixCls:u,current:o,defaultCurrent:n,animated:!0,renderPanel:E,builtinPlacements:h,onChange:N,steps:a})))};lt._InternalPanelDoNotUseOrYouWillBeFired=nt;export{lt as default};