import{R as $,r,a as _,c as j,V as de,C as ge,g as pe,m as $e,k as fe,j as q,av as Q,b7 as ue}from"./index-7e4a4b07.js";import{e as he}from"./extendsObject-1e0cd48d.js";import{D as xe}from"./defaultRenderEmpty-c1d6a389.js";import{u as Se}from"./useBreakpoint-2a5fa87b.js";import{P as ye}from"./Pagination-76b31682.js";import be from"./index-111dbef7.js";import"./index-d633e674.js";import"./useLocale-67a063e1.js";import"./useForceUpdate-26674e36.js";import"./LeftOutlined-77672577.js";import"./RightOutlined-69814dd2.js";import"./index-d2164892.js";import"./iconUtil-5e0f2400.js";import"./List-6fe3f4d7.js";import"./compact-item-94a971d4.js";import"./move-59245a0d.js";import"./CheckOutlined-66dd52de.js";import"./DownOutlined-96364070.js";import"./LoadingOutlined-abbc5ffc.js";import"./SearchOutlined-1ac9e689.js";import"./PurePanel-881ad915.js";import"./statusUtils-603cf288.js";import"./Compact-a8ad6370.js";import"./index-6cf728da.js";import"./index-87e7e444.js";const V=$.createContext({});V.Consumer;var U=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(i[n[a]]=t[n[a]]);return i};const Ce=t=>{var{prefixCls:e,className:i,avatar:n,title:a,description:s}=t,f=U(t,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:u}=r.useContext(_),g=u("list",e),h=j(`${g}-item-meta`,i),y=$.createElement("div",{className:`${g}-item-meta-content`},a&&$.createElement("h4",{className:`${g}-item-meta-title`},a),s&&$.createElement("div",{className:`${g}-item-meta-description`},s));return $.createElement("div",Object.assign({},f,{className:h}),n&&$.createElement("div",{className:`${g}-item-meta-avatar`},n),(a||s)&&y)},ve=(t,e)=>{var{prefixCls:i,children:n,actions:a,extra:s,className:f,colStyle:u}=t,g=U(t,["prefixCls","children","actions","extra","className","colStyle"]);const{grid:h,itemLayout:y}=r.useContext(V),{getPrefixCls:l}=r.useContext(_),E=()=>{let C;return r.Children.forEach(n,v=>{typeof v=="string"&&(C=!0)}),C&&r.Children.count(n)>1},z=()=>y==="vertical"?!!s:!E(),c=l("list",i),S=a&&a.length>0&&$.createElement("ul",{className:`${c}-item-action`,key:"actions"},a.map((C,v)=>$.createElement("li",{key:`${c}-item-action-${v}`},C,v!==a.length-1&&$.createElement("em",{className:`${c}-item-action-split`})))),O=h?"div":"li",b=$.createElement(O,Object.assign({},g,h?{}:{ref:e},{className:j(`${c}-item`,{[`${c}-item-no-flex`]:!z()},f)}),y==="vertical"&&s?[$.createElement("div",{className:`${c}-item-main`,key:"content"},n,S),$.createElement("div",{className:`${c}-item-extra`,key:"extra"},s)]:[n,S,de(s,{key:"extra"})]);return h?$.createElement(ge,{ref:e,flex:1,style:u},b):b},Z=r.forwardRef(ve);Z.Meta=Ce;const Ee=Z,Pe=t=>{const{listBorderedCls:e,componentCls:i,paddingLG:n,margin:a,itemPaddingSM:s,itemPaddingLG:f,marginLG:u,borderRadiusLG:g}=t;return{[`${e}`]:{border:`${t.lineWidth}px ${t.lineType} ${t.colorBorder}`,borderRadius:g,[`${i}-header,${i}-footer,${i}-item`]:{paddingInline:n},[`${i}-pagination`]:{margin:`${a}px ${u}px`}},[`${e}${i}-sm`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:s}},[`${e}${i}-lg`]:{[`${i}-item,${i}-header,${i}-footer`]:{padding:f}}}},ze=t=>{const{componentCls:e,screenSM:i,screenMD:n,marginLG:a,marginSM:s,margin:f}=t;return{[`@media screen and (max-width:${n})`]:{[`${e}`]:{[`${e}-item`]:{[`${e}-item-action`]:{marginInlineStart:a}}},[`${e}-vertical`]:{[`${e}-item`]:{[`${e}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${i})`]:{[`${e}`]:{[`${e}-item`]:{flexWrap:"wrap",[`${e}-action`]:{marginInlineStart:s}}},[`${e}-vertical`]:{[`${e}-item`]:{flexWrap:"wrap-reverse",[`${e}-item-main`]:{minWidth:t.contentWidth},[`${e}-item-extra`]:{margin:`auto auto ${f}px`}}}}}},Oe=t=>{const{componentCls:e,antCls:i,controlHeight:n,minHeight:a,paddingSM:s,marginLG:f,padding:u,itemPadding:g,colorPrimary:h,itemPaddingSM:y,itemPaddingLG:l,paddingXS:E,margin:z,colorText:c,colorTextDescription:S,motionDurationSlow:O,lineWidth:b,headerBg:C,footerBg:v,emptyTextPadding:H,metaMarginBottom:B,avatarMarginRight:T,titleMarginBottom:W,descriptionFontSize:G}=t,I={};return["start","center","end"].forEach(N=>{I[`&-align-${N}`]={textAlign:N}}),{[`${e}`]:Object.assign(Object.assign({},fe(t)),{position:"relative","*":{outline:"none"},[`${e}-header`]:{background:C},[`${e}-footer`]:{background:v},[`${e}-header, ${e}-footer`]:{paddingBlock:s},[`${e}-pagination`]:Object.assign(Object.assign({marginBlockStart:f},I),{[`${i}-pagination-options`]:{textAlign:"start"}}),[`${e}-spin`]:{minHeight:a,textAlign:"center"},[`${e}-items`]:{margin:0,padding:0,listStyle:"none"},[`${e}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:g,color:c,[`${e}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${e}-item-meta-avatar`]:{marginInlineEnd:T},[`${e}-item-meta-content`]:{flex:"1 0",width:0,color:c},[`${e}-item-meta-title`]:{margin:`0 0 ${t.marginXXS}px 0`,color:c,fontSize:t.fontSize,lineHeight:t.lineHeight,"> a":{color:c,transition:`all ${O}`,["&:hover"]:{color:h}}},[`${e}-item-meta-description`]:{color:S,fontSize:G,lineHeight:t.lineHeight}},[`${e}-item-action`]:{flex:"0 0 auto",marginInlineStart:t.marginXXL,padding:0,fontSize:0,listStyle:"none",["& > li"]:{position:"relative",display:"inline-block",padding:`0 ${E}px`,color:S,fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"center",["&:first-child"]:{paddingInlineStart:0}},[`${e}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:b,height:Math.ceil(t.fontSize*t.lineHeight)-t.marginXXS*2,transform:"translateY(-50%)",backgroundColor:t.colorSplit}}},[`${e}-empty`]:{padding:`${u}px 0`,color:S,fontSize:t.fontSizeSM,textAlign:"center"},[`${e}-empty-text`]:{padding:H,color:t.colorTextDisabled,fontSize:t.fontSize,textAlign:"center"},[`${e}-item-no-flex`]:{display:"block"}}),[`${e}-grid ${i}-col > ${e}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:z,paddingBlock:0,borderBlockEnd:"none"},[`${e}-vertical ${e}-item`]:{alignItems:"initial",[`${e}-item-main`]:{display:"block",flex:1},[`${e}-item-extra`]:{marginInlineStart:f},[`${e}-item-meta`]:{marginBlockEnd:B,[`${e}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:W,color:c,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG}},[`${e}-item-action`]:{marginBlockStart:u,marginInlineStart:"auto","> li":{padding:`0 ${u}px`,["&:first-child"]:{paddingInlineStart:0}}}},[`${e}-split ${e}-item`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`,["&:last-child"]:{borderBlockEnd:"none"}},[`${e}-split ${e}-header`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-split${e}-empty ${e}-footer`]:{borderTop:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-loading ${e}-spin-nested-loading`]:{minHeight:n},[`${e}-split${e}-something-after-last-item ${i}-spin-container > ${e}-items > ${e}-item:last-child`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-lg ${e}-item`]:{padding:l},[`${e}-sm ${e}-item`]:{padding:y},[`${e}:not(${e}-vertical)`]:{[`${e}-item-no-flex`]:{[`${e}-item-action`]:{float:"right"}}}}},Be=pe("List",t=>{const e=$e(t,{listBorderedCls:`${t.componentCls}-bordered`,minHeight:t.controlHeightLG});return[Oe(e),Pe(e),ze(e)]},t=>({contentWidth:220,itemPadding:`${t.paddingContentVertical}px 0`,itemPaddingSM:`${t.paddingContentVerticalSM}px ${t.paddingContentHorizontal}px`,itemPaddingLG:`${t.paddingContentVerticalLG}px ${t.paddingContentHorizontalLG}px`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:t.padding,metaMarginBottom:t.padding,avatarMarginRight:t.padding,titleMarginBottom:t.paddingSM,descriptionFontSize:t.fontSize}));var Ie=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(i[n[a]]=t[n[a]]);return i};function Ne(t){var e,{pagination:i=!1,prefixCls:n,bordered:a=!1,split:s=!0,className:f,rootClassName:u,children:g,itemLayout:h,loadMore:y,grid:l,dataSource:E=[],size:z,header:c,footer:S,loading:O=!1,rowKey:b,renderItem:C,locale:v}=t,H=Ie(t,["pagination","prefixCls","bordered","split","className","rootClassName","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const B=i&&typeof i=="object"?i:{},[T,W]=r.useState(B.defaultCurrent||1),[G,I]=r.useState(B.defaultPageSize||10),{getPrefixCls:N,renderEmpty:R,direction:k}=r.useContext(_),ee={current:1,total:0},F=o=>(d,x)=>{W(d),I(x),i&&i[o]&&i[o](d,x)},te=F("onChange"),ie=F("onShowSizeChange"),ne=(o,d)=>{if(!C)return null;let x;return typeof b=="function"?x=b(o):b?x=o[b]:x=o.key,x||(x=`list-item-${d}`),r.createElement(r.Fragment,{key:x},C(o,d))},ae=()=>!!(y||i||S),m=N("list",n),[re,oe]=Be(m);let P=O;typeof P=="boolean"&&(P={spinning:P});const A=P&&P.spinning;let M="";switch(z){case"large":M="lg";break;case"small":M="sm";break}const le=j(m,{[`${m}-vertical`]:h==="vertical",[`${m}-${M}`]:M,[`${m}-split`]:s,[`${m}-bordered`]:a,[`${m}-loading`]:A,[`${m}-grid`]:!!l,[`${m}-something-after-last-item`]:ae(),[`${m}-rtl`]:k==="rtl"},f,u,oe),p=he(ee,{total:E.length,current:T,pageSize:G},i||{}),K=Math.ceil(p.total/p.pageSize);p.current>K&&(p.current=K);const J=i?r.createElement("div",{className:j(`${m}-pagination`,`${m}-pagination-align-${(e=p?.align)!==null&&e!==void 0?e:"end"}`)},r.createElement(ye,Object.assign({},p,{onChange:te,onShowSizeChange:ie}))):null;let D=q(E);i&&E.length>(p.current-1)*p.pageSize&&(D=q(E).splice((p.current-1)*p.pageSize,p.pageSize));const se=Object.keys(l||{}).some(o=>["xs","sm","md","lg","xl","xxl"].includes(o)),Y=Se(se),w=r.useMemo(()=>{for(let o=0;o<Q.length;o+=1){const d=Q[o];if(Y[d])return d}},[Y]),ce=r.useMemo(()=>{if(!l)return;const o=w&&l[w]?l[w]:l.column;if(o)return{width:`${100/o}%`,maxWidth:`${100/o}%`}},[l?.column,w]);let X=A&&r.createElement("div",{style:{minHeight:53}});if(D.length>0){const o=D.map((d,x)=>ne(d,x));X=l?r.createElement(ue,{gutter:l.gutter},r.Children.map(o,d=>r.createElement("div",{key:d?.key,style:ce},d))):r.createElement("ul",{className:`${m}-items`},o)}else!g&&!A&&(X=r.createElement("div",{className:`${m}-empty-text`},v&&v.emptyText||R?.("List")||r.createElement(xe,{componentName:"List"})));const L=p.position||"bottom",me=r.useMemo(()=>({grid:l,itemLayout:h}),[JSON.stringify(l),h]);return re(r.createElement(V.Provider,{value:me},r.createElement("div",Object.assign({className:le},H),(L==="top"||L==="both")&&J,c&&r.createElement("div",{className:`${m}-header`},c),r.createElement(be,Object.assign({},P),X,g),S&&r.createElement("div",{className:`${m}-footer`},S),y||(L==="bottom"||L==="both")&&J)))}Ne.Item=Ee;export{Ne as default};
