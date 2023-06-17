import{R as U}from"./RightOutlined-69814dd2.js";import{R as g,q as L,c as M,v as k,B as X,s as H,b as Y,x as T,a8 as W,u as Z,ag as ee,S as ne,j as ae,r as A,a as V,g as te,m as oe,k as le,as as re,a2 as ie,aP as ce,o as D,V as G}from"./index-7e4a4b07.js";import{g as se}from"./collapse-97de76d4.js";var q=g.forwardRef(function(n,e){var a,t=n.prefixCls,r=n.forceRender,h=n.className,y=n.style,m=n.children,u=n.isActive,i=n.role,I=g.useState(u||r),o=L(I,2),d=o[0],f=o[1];return g.useEffect(function(){(r||u)&&f(!0)},[r,u]),d?g.createElement("div",{ref:e,className:M("".concat(t,"-content"),(a={},k(a,"".concat(t,"-content-active"),u),k(a,"".concat(t,"-content-inactive"),!u),a),h),style:y,role:i},g.createElement("div",{className:"".concat(t,"-content-box")},m)):null});q.displayName="PanelContent";var de=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],F=g.forwardRef(function(n,e){var a,t,r=n.showArrow,h=r===void 0?!0:r,y=n.headerClass,m=n.isActive,u=n.onItemClick,i=n.forceRender,I=n.className,o=n.prefixCls,d=n.collapsible,f=n.accordion,v=n.panelKey,p=n.extra,P=n.header,x=n.expandIcon,b=n.openMotion,S=n.destroyInactivePanel,c=n.children,N=X(n,de),$=d==="disabled",l=d==="header",s=d==="icon",C=p!=null&&typeof p!="boolean",w=function(){u?.(v)},R=function(_){(_.key==="Enter"||_.keyCode===T.ENTER||_.which===T.ENTER)&&w()},E=typeof x=="function"?x(n):g.createElement("i",{className:"arrow"});E&&(E=g.createElement("div",{className:"".concat(o,"-expand-icon"),onClick:["header","icon"].includes(d)?w:void 0},E));var K=M((a={},k(a,"".concat(o,"-item"),!0),k(a,"".concat(o,"-item-active"),m),k(a,"".concat(o,"-item-disabled"),$),a),I),j=M((t={},k(t,"".concat(o,"-header"),!0),k(t,"headerClass",y),k(t,"".concat(o,"-header-collapsible-only"),l),k(t,"".concat(o,"-icon-collapsible-only"),s),t)),O={className:j,"aria-expanded":m,"aria-disabled":$,onKeyDown:R};return!l&&!s&&(O.onClick=w,O.role=f?"tab":"button",O.tabIndex=$?-1:0),g.createElement("div",H({},N,{ref:e,className:K}),g.createElement("div",O,h&&E,g.createElement("span",{className:"".concat(o,"-header-text"),onClick:d==="header"?w:void 0},P),C&&g.createElement("div",{className:"".concat(o,"-extra")},p)),g.createElement(Y,H({visible:m,leavedClassName:"".concat(o,"-content-hidden")},b,{forceRender:i,removeOnLeave:S}),function(B,_){var J=B.className,Q=B.style;return g.createElement(q,{ref:_,prefixCls:o,className:J,style:Q,isActive:m,forceRender:i,role:f?"tabpanel":void 0},c)}))}),me=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],ue=function(e,a){var t=a.prefixCls,r=a.accordion,h=a.collapsible,y=a.destroyInactivePanel,m=a.onItemClick,u=a.activeKey,i=a.openMotion,I=a.expandIcon;return e.map(function(o,d){var f=o.children,v=o.label,p=o.key,P=o.collapsible,x=o.onItemClick,b=o.destroyInactivePanel,S=X(o,me),c=String(p??d),N=P??h,$=b??y,l=function(w){N!=="disabled"&&(m(w),x?.(w))},s=!1;return r?s=u[0]===c:s=u.indexOf(c)>-1,g.createElement(F,H({},S,{prefixCls:t,key:c,panelKey:c,isActive:s,accordion:r,openMotion:i,expandIcon:I,header:v,collapsible:N,onItemClick:l,destroyInactivePanel:$}),f)})},fe=function(e,a,t){if(!e)return null;var r=t.prefixCls,h=t.accordion,y=t.collapsible,m=t.destroyInactivePanel,u=t.onItemClick,i=t.activeKey,I=t.openMotion,o=t.expandIcon,d=e.key||String(a),f=e.props,v=f.header,p=f.headerClass,P=f.destroyInactivePanel,x=f.collapsible,b=f.onItemClick,S=!1;h?S=i[0]===d:S=i.indexOf(d)>-1;var c=x??y,N=function(s){c!=="disabled"&&(u(s),b?.(s))},$={key:d,panelKey:d,header:v,headerClass:p,isActive:S,prefixCls:r,destroyInactivePanel:P??m,openMotion:I,accordion:h,children:e.props.children,onItemClick:N,expandIcon:o,collapsible:c};return typeof e.type=="string"?e:(Object.keys($).forEach(function(l){typeof $[l]>"u"&&delete $[l]}),g.cloneElement(e,$))};function ve(n,e,a){return Array.isArray(n)?ue(n,a):W(e).map(function(t,r){return fe(t,r,a)})}function pe(n){var e=n;if(!Array.isArray(e)){var a=ne(e);e=a==="number"||a==="string"?[e]:[]}return e.map(function(t){return String(t)})}var Ce=g.forwardRef(function(n,e){var a=n.prefixCls,t=a===void 0?"rc-collapse":a,r=n.destroyInactivePanel,h=r===void 0?!1:r,y=n.style,m=n.accordion,u=n.className,i=n.children,I=n.collapsible,o=n.openMotion,d=n.expandIcon,f=n.activeKey,v=n.defaultActiveKey,p=n.onChange,P=n.items,x=M(t,u),b=Z([],{value:f,onChange:function(C){return p?.(C)},defaultValue:v,postState:pe}),S=L(b,2),c=S[0],N=S[1],$=function(C){return N(function(){if(m)return c[0]===C?[]:[C];var w=c.indexOf(C),R=w>-1;return R?c.filter(function(E){return E!==C}):[].concat(ae(c),[C])})};ee(!i,"`children` will be removed in next major version. Please use `items` instead.");var l=ve(P,i,{prefixCls:t,accordion:m,openMotion:o,expandIcon:d,collapsible:I,destroyInactivePanel:h,onItemClick:$,activeKey:c});return g.createElement("div",{ref:e,className:x,style:y,role:m?"tablist":void 0},l)});const z=Object.assign(Ce,{Panel:F});z.Panel;const ge=A.forwardRef((n,e)=>{const{getPrefixCls:a}=A.useContext(V),{prefixCls:t,className:r="",showArrow:h=!0}=n,y=a("collapse",t),m=M({[`${y}-no-arrow`]:!h},r);return A.createElement(z.Panel,Object.assign({ref:e},n,{prefixCls:y,className:m}))}),xe=ge,be=n=>{const{componentCls:e,collapseContentBg:a,padding:t,collapseContentPaddingHorizontal:r,collapseHeaderBg:h,collapseHeaderPadding:y,collapseHeaderPaddingSM:m,collapseHeaderPaddingLG:u,collapsePanelBorderRadius:i,lineWidth:I,lineType:o,colorBorder:d,colorText:f,colorTextHeading:v,colorTextDisabled:p,fontSize:P,fontSizeLG:x,lineHeight:b,marginSM:S,paddingSM:c,paddingLG:N,paddingXS:$,motionDurationSlow:l,fontSizeIcon:s}=n,C=`${I}px ${o} ${d}`;return{[e]:Object.assign(Object.assign({},le(n)),{backgroundColor:h,border:C,borderBottom:0,borderRadius:`${i}px`,["&-rtl"]:{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:C,["&:last-child"]:{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${i}px ${i}px`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:y,paddingInlineStart:c,color:v,lineHeight:b,cursor:"pointer",transition:`all ${l}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:P*b,display:"flex",alignItems:"center",paddingInlineEnd:S,marginInlineStart:t-c},[`${e}-arrow`]:Object.assign(Object.assign({},re()),{fontSize:s,svg:{transition:`transform ${l}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-header-collapsible-only`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"}},[`${e}-icon-collapsible-only`]:{cursor:"default",[`${e}-expand-icon`]:{cursor:"pointer"}}},[`${e}-content`]:{color:f,backgroundColor:a,borderTop:C,[`& > ${e}-content-box`]:{padding:`${t}px ${r}px`},["&-hidden"]:{display:"none"}},["&-small"]:{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:m,paddingInlineStart:$,[`> ${e}-expand-icon`]:{marginInlineStart:c-$}},[`> ${e}-content > ${e}-content-box`]:{padding:c}}},["&-large"]:{[`> ${e}-item`]:{fontSize:x,[`> ${e}-header`]:{padding:u,paddingInlineStart:t,[`> ${e}-expand-icon`]:{height:x*b,marginInlineStart:N-t}},[`> ${e}-content > ${e}-content-box`]:{padding:N}}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${i}px ${i}px`}},[`& ${e}-item-disabled > ${e}-header`]:{[`
          &,
          & > .arrow
        `]:{color:p,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:S}}}}})}},$e=n=>{const{componentCls:e}=n,a=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},he=n=>{const{componentCls:e,collapseHeaderBg:a,paddingXXS:t,colorBorder:r}=n;return{[`${e}-borderless`]:{backgroundColor:a,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${r}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:t}}}},ye=n=>{const{componentCls:e,paddingSM:a}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:a}}}}}},Ie=te("Collapse",n=>{const e=oe(n,{collapseContentBg:n.colorBgContainer,collapseHeaderBg:n.colorFillAlter,collapseHeaderPadding:`${n.paddingSM}px ${n.padding}px`,collapseHeaderPaddingSM:`${n.paddingXS}px ${n.paddingSM}px`,collapseHeaderPaddingLG:`${n.padding}px ${n.paddingLG}px`,collapsePanelBorderRadius:n.borderRadiusLG,collapseContentPaddingHorizontal:16});return[be(e),he(e),ye(e),$e(e),se(e)]}),Pe=A.forwardRef((n,e)=>{const{getPrefixCls:a,direction:t}=A.useContext(V),{prefixCls:r,className:h,rootClassName:y,bordered:m=!0,ghost:u,size:i,expandIconPosition:I="start",children:o,expandIcon:d}=n,f=ie(l=>{var s;return(s=i??l)!==null&&s!==void 0?s:"middle"}),v=a("collapse",r),p=a(),[P,x]=Ie(v),b=A.useMemo(()=>I==="left"?"start":I==="right"?"end":I,[I]),S=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=d?d(l):A.createElement(U,{rotate:l.isActive?90:void 0});return G(s,()=>({className:M(s.props.className,`${v}-arrow`)}))},c=M(`${v}-icon-position-${b}`,{[`${v}-borderless`]:!m,[`${v}-rtl`]:t==="rtl",[`${v}-ghost`]:!!u,[`${v}-${f}`]:f!=="middle"},h,y,x),N=Object.assign(Object.assign({},ce(p)),{motionAppear:!1,leavedClassName:`${v}-content-hidden`}),$=A.useMemo(()=>o?W(o).map((l,s)=>{var C,w;if(!((C=l.props)===null||C===void 0)&&C.disabled){const R=(w=l.key)!==null&&w!==void 0?w:String(s),{disabled:E,collapsible:K}=l.props,j=Object.assign(Object.assign({},D(l.props,["disabled"])),{key:R,collapsible:K??(E?"disabled":void 0)});return G(l,j)}return l}):null,[o]);return P(A.createElement(z,Object.assign({ref:e,openMotion:N},D(n,["rootClassName"]),{expandIcon:S,prefixCls:v,className:c}),$))}),ke=Object.assign(Pe,{Panel:xe});export{ke as C};