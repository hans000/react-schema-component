import{r as s,a as ee,c as v,aJ as de,a8 as me,aK as ue,o as L,V as X,aa as E,aL as ge,aM as pe,aN as te,aO as be,t as $e,g as fe,m as G,at as Y,ar as F,a7 as V,k as he,as as ve,l as Ie,aP as Ce,aQ as Se,aR as xe}from"./index-7e4a4b07.js";import{S as oe}from"./Sider-a98be609.js";import ye from"./index-5b57a4c3.js";import{i as Be}from"./zoom-470fe614.js";import{g as Oe}from"./collapse-97de76d4.js";const we=s.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),z=we;var Te=globalThis&&globalThis.__rest||function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e};const _=s.createContext(null),Ue=n=>{const{children:t}=n,e=Te(n,["children"]),o=s.useContext(_),r=s.useMemo(()=>Object.assign(Object.assign({},o),e),[o,e.prefixCls,e.mode,e.selectable]);return s.createElement(_.Provider,{value:r},t)},K=_;var je=globalThis&&globalThis.__rest||function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e};const He=n=>{const{prefixCls:t,className:e,dashed:o}=n,r=je(n,["prefixCls","className","dashed"]),{getPrefixCls:i}=s.useContext(ee),l=i("menu",t),a=v({[`${l}-item-divider-dashed`]:!!o},e);return s.createElement(de,Object.assign({className:a},r))},ne=He,Me=n=>{var t;const{className:e,children:o,icon:r,title:i,danger:l}=n,{prefixCls:a,firstLevel:c,direction:u,disableMenuItemTitleTooltip:g,inlineCollapsed:d}=s.useContext(z),$=I=>{const y=s.createElement("span",{className:`${a}-title-content`},o);return(!r||E(o)&&o.type==="span")&&o&&I&&c&&typeof o=="string"?s.createElement("div",{className:`${a}-inline-collapsed-noicon`},o.charAt(0)):y},{siderCollapsed:p}=s.useContext(oe);let m=i;typeof i>"u"?m=c?o:"":i===!1&&(m="");const f={title:m};!p&&!d&&(f.title=null,f.open=!1);const b=me(o).length;let h=s.createElement(ue,Object.assign({},L(n,["title","icon","danger"]),{className:v({[`${a}-item-danger`]:l,[`${a}-item-only-child`]:(r?b+1:b)===1},e),title:typeof i=="string"?i:void 0}),X(r,{className:v(E(r)?(t=r.props)===null||t===void 0?void 0:t.className:"",`${a}-item-icon`)}),$(d));return g||(h=s.createElement(ye,Object.assign({},f,{placement:u==="rtl"?"left":"right",overlayClassName:`${a}-inline-collapsed-tooltip`}),h)),h},re=Me,Ee=n=>{var t;const{popupClassName:e,icon:o,title:r,theme:i}=n,l=s.useContext(z),{prefixCls:a,inlineCollapsed:c,theme:u}=l,g=ge();let d;if(!o)d=c&&!g.length&&r&&typeof r=="string"?s.createElement("div",{className:`${a}-inline-collapsed-noicon`},r.charAt(0)):s.createElement("span",{className:`${a}-title-content`},r);else{const p=E(r)&&r.type==="span";d=s.createElement(s.Fragment,null,X(o,{className:v(E(o)?(t=o.props)===null||t===void 0?void 0:t.className:"",`${a}-item-icon`)}),p?r:s.createElement("span",{className:`${a}-title-content`},r))}const $=s.useMemo(()=>Object.assign(Object.assign({},l),{firstLevel:!1}),[l]);return s.createElement(z.Provider,{value:$},s.createElement(pe,Object.assign({},L(n,["icon"]),{title:d,popupClassName:v(a,e,`${a}-${i||u}`)})))},ie=Ee;var ze=globalThis&&globalThis.__rest||function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e};function W(n){return(n||[]).map((t,e)=>{if(t&&typeof t=="object"){const o=t,{label:r,children:i,key:l,type:a}=o,c=ze(o,["label","children","key","type"]),u=l??`tmp-${e}`;return i||a==="group"?a==="group"?s.createElement(te,Object.assign({key:u},c,{title:r}),W(i)):s.createElement(ie,Object.assign({key:u},c,{title:r}),W(i)):a==="divider"?s.createElement(ne,Object.assign({key:u},c)):s.createElement(re,Object.assign({key:u},c),r)}return null}).filter(t=>t)}function Pe(n){return s.useMemo(()=>n&&W(n),[n])}const Ne=n=>{const{componentCls:t,motionDurationSlow:e,menuHorizontalHeight:o,colorSplit:r,lineWidth:i,lineType:l,menuItemPaddingInline:a}=n;return{[`${t}-horizontal`]:{lineHeight:`${o}px`,border:0,borderBottom:`${i}px ${l} ${r}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:a},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}},Ae=Ne,De=n=>{let{componentCls:t,menuArrowOffset:e}=n;return{[`${t}-rtl`]:{direction:"rtl"},[`${t}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]:{[`${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(-${e})`},"&::after":{transform:`rotate(45deg) translateY(${e})`}}}}},ke=De,J=n=>Object.assign({},be(n)),Re=(n,t)=>{const{componentCls:e,itemColor:o,itemSelectedColor:r,groupTitleColor:i,itemBg:l,subMenuItemBg:a,itemSelectedBg:c,activeBarHeight:u,activeBarWidth:g,activeBarBorderWidth:d,motionDurationSlow:$,motionEaseInOut:p,motionEaseOut:m,menuItemPaddingInline:f,motionDurationMid:b,itemHoverColor:h,lineType:I,colorSplit:y,itemDisabledColor:j,dangerItemColor:B,dangerItemHoverColor:O,dangerItemSelectedColor:H,dangerItemActiveBg:P,dangerItemSelectedBg:N,itemHoverBg:M,menuSubMenuBg:A,horizontalItemSelectedColor:x,horizontalItemSelectedBg:D,horizontalItemBorderRadius:w,horizontalItemHoverBg:k}=n;return{[`${e}-${t}, ${e}-${t} > ${e}`]:{color:o,background:l,[`&${e}-root:focus-visible`]:Object.assign({},J(n)),[`${e}-item-group-title`]:{color:i},[`${e}-submenu-selected`]:{[`> ${e}-submenu-title`]:{color:r}},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${j} !important`},[`${e}-item:hover, ${e}-submenu-title:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:h}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:M},"&:active":{backgroundColor:c}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:M},"&:active":{backgroundColor:c}}},[`${e}-item-danger`]:{color:B,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:O}},[`&${e}-item:active`]:{background:P}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:r,[`&${e}-item-danger`]:{color:H},["a, a:hover"]:{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:c,[`&${e}-item-danger`]:{backgroundColor:N}},[`${e}-item, ${e}-submenu-title`]:{[`&:not(${e}-item-disabled):focus-visible`]:Object.assign({},J(n))},[`&${e}-submenu > ${e}`]:{backgroundColor:A},[`&${e}-popup > ${e}`]:{backgroundColor:l},[`&${e}-horizontal`]:Object.assign(Object.assign({},t==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:d,marginTop:-d,marginBottom:0,borderRadius:w,"&::after":{position:"absolute",insetInline:f,bottom:0,borderBottom:`${u}px solid transparent`,transition:`border-color ${$} ${p}`,content:'""'},["&:hover, &-active, &-open"]:{background:k,"&::after":{borderBottomWidth:u,borderBottomColor:x}},["&-selected"]:{color:x,backgroundColor:D,"&::after":{borderBottomWidth:u,borderBottomColor:x}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${d}px ${I} ${y}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:a},[`${e}-item, ${e}-submenu-title`]:d&&g?{width:`calc(100% + ${d}px)`}:{},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${g}px solid ${r}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${b} ${m}`,`opacity ${b} ${m}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:H}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${b} ${p}`,`opacity ${b} ${p}`].join(",")}}}}}},Q=Re,Z=n=>{const{componentCls:t,menuItemHeight:e,itemMarginInline:o,padding:r,menuArrowSize:i,marginXS:l,marginXXS:a}=n,c=r+i+l;return{[`${t}-item`]:{position:"relative",overflow:"hidden"},[`${t}-item, ${t}-submenu-title`]:{height:e,lineHeight:`${e}px`,paddingInline:r,overflow:"hidden",textOverflow:"ellipsis",marginInline:o,marginBlock:a,width:`calc(100% - ${o*2}px)`},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:e,lineHeight:`${e}px`},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:c}}},_e=n=>{const{componentCls:t,iconCls:e,menuItemHeight:o,colorTextLightSolid:r,dropdownWidth:i,controlHeightLG:l,motionDurationMid:a,motionEaseOut:c,paddingXL:u,itemMarginInline:g,fontSizeLG:d,motionDurationSlow:$,paddingXS:p,boxShadowSecondary:m}=n,f={height:o,lineHeight:`${o}px`,listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{["&-inline, &-vertical"]:Object.assign({[`&${t}-root`]:{boxShadow:"none"}},Z(n))},[`${t}-submenu-popup`]:{[`${t}-vertical`]:Object.assign(Object.assign({},Z(n)),{boxShadow:m})}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:i,maxHeight:`calc(100vh - ${l*2.5}px)`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${$}`,`background ${$}`,`padding ${a} ${c}`].join(","),[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:f,[`& ${t}-item-group-title`]:{paddingInlineStart:u}},[`${t}-item`]:f}},{[`${t}-inline-collapsed`]:{width:o*2,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:d,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${d/2}px - ${g}px)`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${e}`]:{margin:0,fontSize:d,lineHeight:`${o}px`,"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:r}},[`${t}-item-group-title`]:Object.assign(Object.assign({},$e),{paddingInline:p})}}]},We=_e,q=n=>{const{componentCls:t,fontSize:e,motionDurationSlow:o,motionDurationMid:r,motionEaseInOut:i,motionEaseOut:l,iconCls:a,controlHeightSM:c}=n;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${o}`,`background ${o}`,`padding ${o} ${i}`].join(","),[`${t}-item-icon, ${a}`]:{minWidth:e,fontSize:e,transition:[`font-size ${r} ${l}`,`margin ${o} ${i}`,`color ${o}`].join(","),"+ span":{marginInlineStart:c-e,opacity:1,transition:[`opacity ${o} ${i}`,`margin ${o}`,`color ${o}`].join(",")}},[`${t}-item-icon`]:Object.assign({},ve()),[`&${t}-item-only-child`]:{[`> ${a}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},U=n=>{const{componentCls:t,motionDurationSlow:e,motionEaseInOut:o,borderRadius:r,menuArrowSize:i,menuArrowOffset:l}=n;return{[`${t}-submenu`]:{["&-expand-icon, &-arrow"]:{position:"absolute",top:"50%",insetInlineEnd:n.margin,width:i,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${o}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:i*.6,height:i*.15,backgroundColor:"currentcolor",borderRadius:r,transition:[`background ${e} ${o}`,`transform ${e} ${o}`,`top ${e} ${o}`,`color ${e} ${o}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(-${l})`},"&::after":{transform:`rotate(-45deg) translateY(${l})`}}}}},Le=n=>{const{antCls:t,componentCls:e,fontSize:o,motionDurationSlow:r,motionDurationMid:i,motionEaseInOut:l,lineHeight:a,paddingXS:c,padding:u,colorSplit:g,lineWidth:d,zIndexPopup:$,borderRadiusLG:p,subMenuItemBorderRadius:m,menuArrowSize:f,menuArrowOffset:b,lineType:h,menuPanelMaskInset:I}=n;return[{"":{[`${e}`]:Object.assign(Object.assign({},V()),{["&-hidden"]:{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},he(n)),V()),{marginBottom:0,paddingInlineStart:0,fontSize:o,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`,["ul, ol"]:{margin:0,padding:0,listStyle:"none"},["&-overflow"]:{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:n.itemBorderRadius},[`${e}-item-group-title`]:{padding:`${c}px ${u}px`,fontSize:o,lineHeight:a,transition:`all ${r}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${r} ${l}`,`background ${r} ${l}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${r} ${l}`,`background ${r} ${l}`,`padding ${i} ${l}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${r} ${l}`,`padding ${r} ${l}`].join(",")},[`${e}-title-content`]:{transition:`color ${r}`},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:g,borderStyle:h,borderWidth:0,borderTopWidth:d,marginBlock:d,padding:0,"&-dashed":{borderStyle:"dashed"}}}),q(n)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${o*2}px ${u}px`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:$,borderRadius:p,boxShadow:"none",transformOrigin:"0 0",[`&${e}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:`${I}px 0 0`,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:I},[`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]:{transformOrigin:"100% 0"},[`
          &-placement-leftBottom,
          &-placement-topRight,
          `]:{transformOrigin:"100% 100%"},[`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]:{transformOrigin:"0 100%"},[`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]:{transformOrigin:"0 0"},[`
          &-placement-leftTop,
          &-placement-leftBottom
          `]:{paddingInlineEnd:n.paddingXS},[`
          &-placement-rightTop,
          &-placement-rightBottom
          `]:{paddingInlineStart:n.paddingXS},[`
          &-placement-topRight,
          &-placement-topLeft
          `]:{paddingBottom:n.paddingXS},[`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]:{paddingTop:n.paddingXS},[`> ${e}`]:Object.assign(Object.assign(Object.assign({borderRadius:p},q(n)),U(n)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:m},[`${e}-submenu-title::after`]:{transition:`transform ${r} ${l}`}})}}),U(n)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${b})`},"&::after":{transform:`rotate(45deg) translateX(-${b})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(-${f*.2}px)`,"&::after":{transform:`rotate(-45deg) translateX(-${b})`},"&::before":{transform:`rotate(45deg) translateX(${b})`}}})},{[`${t}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},Xe=(n,t)=>fe("Menu",(o,r)=>{let{overrideComponentToken:i}=r;if(t===!1)return[];const{colorBgElevated:l,colorPrimary:a,colorError:c,colorErrorHover:u,colorTextLightSolid:g,controlHeightLG:d,fontSize:$}=o,p=$/7*5,m=G(o,{menuItemHeight:d,menuItemPaddingInline:o.margin,menuArrowSize:p,menuHorizontalHeight:d*1.15,menuArrowOffset:`${p*.25}px`,menuPanelMaskInset:-7,menuSubMenuBg:l}),f=new Y(g).setAlpha(.65).toRgbString(),b=G(m,{itemColor:f,itemHoverColor:g,groupTitleColor:f,itemSelectedColor:g,itemBg:"#001529",subMenuItemBg:"#000c17",itemActiveBg:"transparent",itemSelectedBg:a,activeBarWidth:0,activeBarHeight:0,activeBarBorderWidth:0,itemDisabledColor:new Y(g).setAlpha(.25).toRgbString(),dangerItemColor:c,dangerItemHoverColor:u,dangerItemSelectedColor:g,dangerItemActiveBg:c,dangerItemSelectedBg:c,menuSubMenuBg:"#001529",horizontalItemSelectedColor:g,horizontalItemSelectedBg:a},Object.assign({},i));return[Le(m),Ae(m),We(m),Q(m,"light"),Q(b,"dark"),ke(m),Oe(m),F(m,"slide-up"),F(m,"slide-down"),Be(m,"zoom-big")]},o=>{const{colorPrimary:r,colorError:i,colorTextDisabled:l,colorErrorBg:a,colorText:c,colorTextDescription:u,colorBgContainer:g,colorFillAlter:d,colorFillContent:$,lineWidth:p,lineWidthBold:m,controlItemBgActive:f,colorBgTextHover:b}=o;return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,itemBorderRadius:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,subMenuItemBorderRadius:o.borderRadiusSM,colorItemText:c,itemColor:c,colorItemTextHover:c,itemHoverColor:c,colorItemTextHoverHorizontal:r,horizontalItemHoverColor:r,colorGroupTitle:u,groupTitleColor:u,colorItemTextSelected:r,itemSelectedColor:r,colorItemTextSelectedHorizontal:r,horizontalItemSelectedColor:r,colorItemBg:g,itemBg:g,colorItemBgHover:b,itemHoverBg:b,colorItemBgActive:$,itemActiveBg:$,colorSubItemBg:d,subMenuItemBg:d,colorItemBgSelected:f,itemSelectedBg:f,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:0,colorActiveBarHeight:m,activeBarHeight:m,colorActiveBarBorderSize:p,activeBarBorderWidth:p,colorItemTextDisabled:l,itemDisabledColor:l,colorDangerItemText:i,dangerItemColor:i,colorDangerItemTextHover:i,dangerItemHoverColor:i,colorDangerItemTextSelected:i,dangerItemSelectedColor:i,colorDangerItemBgActive:a,dangerItemActiveBg:a,colorDangerItemBgSelected:a,dangerItemSelectedBg:a,itemMarginInline:o.marginXXS,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent"}},{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"]]})(n);var Ge=globalThis&&globalThis.__rest||function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e};const Ye=s.forwardRef((n,t)=>{var e,o;const r=s.useContext(K),i=r||{},{getPrefixCls:l,getPopupContainer:a,direction:c}=s.useContext(ee),u=l(),{prefixCls:g,className:d,theme:$="light",expandIcon:p,_internalDisableMenuItemTitleTooltip:m,inlineCollapsed:f,siderCollapsed:b,items:h,children:I,rootClassName:y,mode:j,selectable:B,onClick:O,overflowedIndicatorPopupClassName:H}=n,P=Ge(n,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),N=L(P,["collapsedWidth"]),M=Pe(h)||I;(e=i.validator)===null||e===void 0||e.call(i,{mode:j});const A=Ie(function(){var S;O?.apply(void 0,arguments),(S=i.onClick)===null||S===void 0||S.call(i)}),x=i.mode||j,D=B??i.selectable,w=s.useMemo(()=>b!==void 0?b:f,[f,b]),k={horizontal:{motionName:`${u}-slide-up`},inline:Ce(u),other:{motionName:`${u}-zoom-big`}},C=l("menu",g||i.prefixCls),[le,ae]=Xe(C,!r),se=v(`${C}-${$}`,d);let R;if(typeof p=="function")R=p;else{const S=p||i.expandIcon;R=X(S,{className:v(`${C}-submenu-expand-icon`,(o=S?.props)===null||o===void 0?void 0:o.className)})}const ce=s.useMemo(()=>({prefixCls:C,inlineCollapsed:w||!1,direction:c,firstLevel:!0,theme:$,mode:x,disableMenuItemTitleTooltip:m}),[C,w,c,m,$]);return le(s.createElement(K.Provider,{value:null},s.createElement(z.Provider,{value:ce},s.createElement(Se,Object.assign({getPopupContainer:a,overflowedIndicator:s.createElement(xe,null),overflowedIndicatorPopupClassName:v(C,`${C}-${$}`,H),mode:x,selectable:D,onClick:A},N,{inlineCollapsed:w,className:se,prefixCls:C,direction:c,defaultMotions:k,expandIcon:R,ref:t,rootClassName:v(y,ae)}),M))))}),Fe=Ye,T=s.forwardRef((n,t)=>{const e=s.useRef(null),o=s.useContext(oe);return s.useImperativeHandle(t,()=>({menu:e.current,focus:r=>{var i;(i=e.current)===null||i===void 0||i.focus(r)}})),s.createElement(Fe,Object.assign({ref:e},n,o))});T.Item=re;T.SubMenu=ie;T.Divider=ne;T.ItemGroup=te;const Ve=T,et=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"}));export{Ve as M,Ue as O,et as i};
