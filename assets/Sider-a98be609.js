import{r as t,M as Q,s as U,g as Y,m as q,a as E,c as H,o as W,j as ee}from"./index-7e4a4b07.js";import{L as P}from"./LeftOutlined-77672577.js";import{R}from"./RightOutlined-69814dd2.js";var te={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};const re=te;var oe=function(a,r){return t.createElement(Q,U({},a,{ref:r,icon:re}))};const ne=t.forwardRef(oe),ae=e=>!isNaN(parseFloat(e))&&isFinite(e),se=ae,ie=e=>{const{componentCls:a,colorBgContainer:r,colorBgBody:o,colorText:n}=e;return{[`${a}-sider-light`]:{background:r,[`${a}-sider-trigger`]:{color:n,background:r},[`${a}-sider-zero-width-trigger`]:{color:n,background:r,border:`1px solid ${o}`,borderInlineStart:0}}}},le=ie,ce=e=>{const{antCls:a,componentCls:r,colorText:o,colorTextLightSolid:n,colorBgHeader:d,colorBgBody:c,colorBgTrigger:u,layoutHeaderHeight:f,layoutHeaderPaddingInline:p,layoutHeaderColor:h,layoutFooterPadding:S,layoutTriggerHeight:y,layoutZeroTriggerSize:b,motionDurationMid:g,motionDurationSlow:C,fontSize:$,borderRadius:i}=e;return{[r]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:c,"&, *":{boxSizing:"border-box"},[`&${r}-has-sider`]:{flexDirection:"row",[`> ${r}, > ${r}-content`]:{width:0}},[`${r}-header, &${r}-footer`]:{flex:"0 0 auto"},[`${r}-sider`]:{position:"relative",minWidth:0,background:d,transition:`all ${g}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${a}-menu${a}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:y},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:y,color:n,lineHeight:`${y}px`,textAlign:"center",background:u,cursor:"pointer",transition:`all ${g}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:f,insetInlineEnd:-b,zIndex:1,width:b,height:b,color:n,fontSize:e.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:d,borderStartStartRadius:0,borderStartEndRadius:i,borderEndEndRadius:i,borderEndStartRadius:0,cursor:"pointer",transition:`background ${C} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${C}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-b,borderStartStartRadius:i,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:i}}}}},le(e)),{"&-rtl":{direction:"rtl"}}),[`${r}-header`]:{height:f,paddingInline:p,color:h,lineHeight:`${f}px`,background:d,[`${a}-menu`]:{lineHeight:"inherit"}},[`${r}-footer`]:{padding:S,color:o,fontSize:$,background:c},[`${r}-content`]:{flex:"auto",minHeight:0}}},M=Y("Layout",e=>{const{colorText:a,controlHeightSM:r,controlHeight:o,controlHeightLG:n,marginXXS:d}=e,c=n*1.25,u=q(e,{layoutHeaderHeight:o*2,layoutHeaderPaddingInline:c,layoutHeaderColor:a,layoutFooterPadding:`${r}px ${c}px`,layoutTriggerHeight:n+d*2,layoutZeroTriggerSize:n});return[ce(u)]},e=>{const{colorBgLayout:a}=e;return{colorBgHeader:"#001529",colorBgBody:a,colorBgTrigger:"#002140"}});var F=globalThis&&globalThis.__rest||function(e,a){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&a.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)a.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const _=t.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}});function z(e){let{suffixCls:a,tagName:r,displayName:o}=e;return n=>t.forwardRef((c,u)=>t.createElement(n,Object.assign({ref:u,suffixCls:a,tagName:r},c)))}const T=t.forwardRef((e,a)=>{const{prefixCls:r,suffixCls:o,className:n,tagName:d}=e,c=F(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:u}=t.useContext(E),f=u("layout",r),[p,h]=M(f),S=o?`${f}-${o}`:f;return p(t.createElement(d,Object.assign({className:H(r||S,n,h),ref:a},c)))}),de=t.forwardRef((e,a)=>{const{direction:r}=t.useContext(E),[o,n]=t.useState([]),{prefixCls:d,className:c,rootClassName:u,children:f,hasSider:p,tagName:h}=e,S=F(e,["prefixCls","className","rootClassName","children","hasSider","tagName"]),y=W(S,["suffixCls"]),{getPrefixCls:b}=t.useContext(E),g=b("layout",d),[C,$]=M(g),i=H(g,{[`${g}-has-sider`]:typeof p=="boolean"?p:o.length>0,[`${g}-rtl`]:r==="rtl"},c,u,$),N=t.useMemo(()=>({siderHook:{addSider:m=>{n(w=>[].concat(ee(w),[m]))},removeSider:m=>{n(w=>w.filter(O=>O!==m))}}}),[]);return C(t.createElement(_.Provider,{value:N},t.createElement(h,Object.assign({ref:a,className:i},y),f)))}),ge=z({tagName:"section",displayName:"Layout"})(de),Se=z({suffixCls:"header",tagName:"header",displayName:"Header"})(T),$e=z({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(T),ve=z({suffixCls:"content",tagName:"main",displayName:"Content"})(T),we=ge;var ue=globalThis&&globalThis.__rest||function(e,a){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&a.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)a.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const I={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},fe=t.createContext({}),me=(()=>{let e=0;return function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,`${a}${e}`}})(),pe=t.forwardRef((e,a)=>{var{prefixCls:r,className:o,trigger:n,children:d,defaultCollapsed:c=!1,theme:u="dark",style:f={},collapsible:p=!1,reverseArrow:h=!1,width:S=200,collapsedWidth:y=80,zeroWidthTriggerStyle:b,breakpoint:g,onCollapse:C,onBreakpoint:$}=e,i=ue(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]);const{siderHook:N}=t.useContext(_),[m,w]=t.useState("collapsed"in i?i.collapsed:c),[O,A]=t.useState(!1);t.useEffect(()=>{"collapsed"in i&&w(i.collapsed)},[i.collapsed]);const k=(s,l)=>{"collapsed"in i||w(s),C?.(s,l)},L=t.useRef();L.current=s=>{A(s.matches),$?.(s.matches),m!==s.matches&&k(s.matches,"responsive")},t.useEffect(()=>{function s(x){return L.current(x)}let l;if(typeof window<"u"){const{matchMedia:x}=window;if(x&&g&&g in I){l=x(`(max-width: ${I[g]})`);try{l.addEventListener("change",s)}catch{l.addListener(s)}s(l)}}return()=>{try{l?.removeEventListener("change",s)}catch{l?.removeListener(s)}}},[g]),t.useEffect(()=>{const s=me("ant-sider-");return N.addSider(s),()=>N.removeSider(s)},[]);const j=()=>{k(!m,"clickTrigger")},{getPrefixCls:D}=t.useContext(E),X=()=>{const s=D("layout-sider",r),l=W(i,["collapsed"]),x=m?y:S,v=se(x)?`${x}px`:String(x),B=parseFloat(String(y||0))===0?t.createElement("span",{onClick:j,className:H(`${s}-zero-width-trigger`,`${s}-zero-width-trigger-${h?"right":"left"}`),style:b},n||t.createElement(ne,null)):null,Z={expanded:h?t.createElement(R,null):t.createElement(P,null),collapsed:h?t.createElement(P,null):t.createElement(R,null)}[m?"collapsed":"expanded"],G=n!==null?B||t.createElement("div",{className:`${s}-trigger`,onClick:j,style:{width:v}},n||Z):null,J=Object.assign(Object.assign({},f),{flex:`0 0 ${v}`,maxWidth:v,minWidth:v,width:v}),K=H(s,`${s}-${u}`,{[`${s}-collapsed`]:!!m,[`${s}-has-trigger`]:p&&n!==null&&!B,[`${s}-below`]:!!O,[`${s}-zero-width`]:parseFloat(v)===0},o);return t.createElement("aside",Object.assign({className:K},l,{style:J,ref:a}),t.createElement("div",{className:`${s}-children`},d),p||O&&B?G:null)},V=t.useMemo(()=>({siderCollapsed:m}),[m]);return t.createElement(fe.Provider,{value:V},X())}),Ne=pe;export{ve as C,$e as F,Se as H,we as I,fe as S,Ne as a};