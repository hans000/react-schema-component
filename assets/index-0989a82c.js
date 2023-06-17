import{i as le,g as re,P as oe,a as ie}from"./index-fceba21f.js";import{r as o,ab as W,g as se,m as ce,k as de,a as ge,u as A,c as D,aS as me}from"./index-7e4a4b07.js";import{Group as ue,Button as z}from"./index-479507ce.js";import L from"./index-d2164892.js";import{i as he}from"./index-6cf728da.js";import{u as pe}from"./useLocale-67a063e1.js";import"./compact-item-94a971d4.js";import"./move-59245a0d.js";import"./roundedArrow-cf08b32b.js";import"./index-93b69565.js";import"./iconUtil-5e0f2400.js";import"./List-6fe3f4d7.js";import"./CheckOutlined-66dd52de.js";import"./DownOutlined-96364070.js";import"./LoadingOutlined-abbc5ffc.js";import"./SearchOutlined-1ac9e689.js";import"./PurePanel-881ad915.js";import"./statusUtils-603cf288.js";import"./defaultRenderEmpty-c1d6a389.js";import"./index-d633e674.js";import"./Compact-a8ad6370.js";const $e=10,Ce=20;function fe(e){const{fullscreen:n,validRange:a,generateConfig:r,locale:g,prefixCls:l,value:s,onChange:h,divRef:S}=e,p=r.getYear(s||r.getNow());let m=p-$e,$=m+Ce;a&&(m=r.getYear(a[0]),$=r.getYear(a[1])+1);const b=g&&g.year==="年"?"年":"",C=[];for(let i=m;i<$;i++)C.push({label:`${i}${b}`,value:i});return o.createElement(L,{size:n?void 0:"small",options:C,value:p,className:`${l}-year-select`,onChange:i=>{let d=r.setYear(s,i);if(a){const[f,M]=a,H=r.getYear(d),x=r.getMonth(d);H===r.getYear(M)&&x>r.getMonth(M)&&(d=r.setMonth(d,r.getMonth(M))),H===r.getYear(f)&&x<r.getMonth(f)&&(d=r.setMonth(d,r.getMonth(f)))}h(d)},getPopupContainer:()=>S.current})}function ve(e){const{prefixCls:n,fullscreen:a,validRange:r,value:g,generateConfig:l,locale:s,onChange:h,divRef:S}=e,p=l.getMonth(g||l.getNow());let m=0,$=11;if(r){const[i,d]=r,f=l.getYear(g);l.getYear(d)===f&&($=l.getMonth(d)),l.getYear(i)===f&&(m=l.getMonth(i))}const b=s.shortMonths||l.locale.getShortMonths(s.locale),C=[];for(let i=m;i<=$;i+=1)C.push({label:b[i],value:i});return o.createElement(L,{size:a?void 0:"small",className:`${n}-month-select`,value:p,options:C,onChange:i=>{h(l.setMonth(g,i))},getPopupContainer:()=>S.current})}function Se(e){const{prefixCls:n,locale:a,mode:r,fullscreen:g,onModeChange:l}=e;return o.createElement(ue,{onChange:s=>{let{target:{value:h}}=s;l(h)},value:r,size:g?void 0:"small",className:`${n}-mode-switch`},o.createElement(z,{value:"month"},a.month),o.createElement(z,{value:"year"},a.year))}function be(e){const{prefixCls:n,fullscreen:a,mode:r,onChange:g,onModeChange:l}=e,s=o.useRef(null),h=o.useContext(W),S=o.useMemo(()=>Object.assign(Object.assign({},h),{isFormItemInput:!1}),[h]),p=Object.assign(Object.assign({},e),{fullscreen:a,divRef:s});return o.createElement("div",{className:`${n}-header`,ref:s},o.createElement(W.Provider,{value:S},o.createElement(fe,Object.assign({},p,{onChange:m=>{g(m,"year")}})),r==="month"&&o.createElement(ve,Object.assign({},p,{onChange:m=>{g(m,"month")}}))),o.createElement(Se,Object.assign({},p,{onModeChange:l})))}const xe=e=>{const{calendarCls:n,componentCls:a,fullBg:r,fullPanelBg:g,itemActiveBg:l}=e;return{[n]:Object.assign(Object.assign(Object.assign({},re(e)),de(e)),{background:r,"&-rtl":{direction:"rtl"},[`${n}-header`]:{display:"flex",justifyContent:"flex-end",padding:`${e.paddingSM}px 0`,[`${n}-year-select`]:{minWidth:e.yearControlWidth},[`${n}-month-select`]:{minWidth:e.monthControlWidth,marginInlineStart:e.marginXS},[`${n}-mode-switch`]:{marginInlineStart:e.marginXS}}}),[`${n} ${a}-panel`]:{background:g,border:0,borderTop:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,borderRadius:0,[`${a}-month-panel, ${a}-date-panel`]:{width:"auto"},[`${a}-body`]:{padding:`${e.paddingXS}px 0`},[`${a}-content`]:{width:"100%"}},[`${n}-mini`]:{borderRadius:e.borderRadiusLG,[`${n}-header`]:{paddingInlineEnd:e.paddingXS,paddingInlineStart:e.paddingXS},[`${a}-panel`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${a}-content`]:{height:e.miniContentHeight,th:{height:"auto",padding:0,lineHeight:`${e.weekHeight}px`}},[`${a}-cell::before`]:{pointerEvents:"none"}},[`${n}${n}-full`]:{[`${a}-panel`]:{display:"block",width:"100%",textAlign:"end",background:r,border:0,[`${a}-body`]:{"th, td":{padding:0},th:{height:"auto",paddingInlineEnd:e.paddingSM,paddingBottom:e.paddingXXS,lineHeight:`${e.weekHeight}px`}}},[`${a}-cell`]:{"&::before":{display:"none"},"&:hover":{[`${n}-date`]:{background:e.controlItemBgHover}},[`${n}-date-today::before`]:{display:"none"},[`&-in-view${a}-cell-selected`]:{[`${n}-date, ${n}-date-today`]:{background:l}},"&-selected, &-selected:hover":{[`${n}-date, ${n}-date-today`]:{[`${n}-date-value`]:{color:e.colorPrimary}}}},[`${n}-date`]:{display:"block",width:"auto",height:"auto",margin:`0 ${e.marginXS/2}px`,padding:`${e.paddingXS/2}px ${e.paddingXS}px 0`,border:0,borderTop:`${e.lineWidthBold}px ${e.lineType} ${e.colorSplit}`,borderRadius:0,transition:`background ${e.motionDurationSlow}`,"&-value":{lineHeight:`${e.dateValueHeight}px`,transition:`color ${e.motionDurationSlow}`},"&-content":{position:"static",width:"auto",height:e.dateContentHeight,overflowY:"auto",color:e.colorText,lineHeight:e.lineHeight,textAlign:"start"},"&-today":{borderColor:e.colorPrimary,[`${n}-date-value`]:{color:e.colorText}}}},[`@media only screen and (max-width: ${e.screenXS}px) `]:{[`${n}`]:{[`${n}-header`]:{display:"block",[`${n}-year-select`]:{width:"50%"},[`${n}-month-select`]:{width:`calc(50% - ${e.paddingXS}px)`},[`${n}-mode-switch`]:{width:"100%",marginTop:e.marginXS,marginInlineStart:0,"> label":{width:"50%",textAlign:"center"}}}}}}},ye=se("Calendar",e=>{const n=`${e.componentCls}-calendar`,a=ce(he(e),le(e),{calendarCls:n,pickerCellInnerCls:`${e.componentCls}-cell-inner`,dateValueHeight:e.controlHeightSM,weekHeight:e.controlHeightSM*.75,dateContentHeight:(e.fontSizeSM*e.lineHeightSM+e.marginXS)*3+e.lineWidth*2});return[xe(a)]},e=>({fullBg:e.colorBgContainer,fullPanelBg:e.colorBgContainer,itemActiveBg:e.controlItemBgActive,yearControlWidth:80,monthControlWidth:70,miniContentHeight:256}));function F(e){function n(l,s){return l&&s&&e.getYear(l)===e.getYear(s)}function a(l,s){return n(l,s)&&e.getMonth(l)===e.getMonth(s)}function r(l,s){return a(l,s)&&e.getDate(l)===e.getDate(s)}return l=>{const{prefixCls:s,className:h,rootClassName:S,style:p,dateFullCellRender:m,dateCellRender:$,monthFullCellRender:b,monthCellRender:C,cellRender:i,fullCellRender:d,headerRender:f,value:M,defaultValue:H,disabledDate:x,mode:V,validRange:R,fullscreen:P=!0,onChange:Y,onPanelChange:N,onSelect:j}=l,{getPrefixCls:G,direction:U}=o.useContext(ge),w=G("picker",s),u=`${w}-calendar`,[q,J]=ye(w),X=e.getNow(),[y,K]=A(()=>M||e.getNow(),{defaultValue:H,value:M}),[E,Q]=A("month",{value:V}),I=o.useMemo(()=>E==="year"?"month":"date",[E]),Z=o.useCallback(t=>(R?e.isAfter(R[0],t)||e.isAfter(t,R[1]):!1)||!!x?.(t),[x,R]),B=(t,c)=>{N?.(t,c)},_=t=>{K(t),r(t,y)||((I==="date"&&!a(t,y)||I==="month"&&!n(t,y))&&B(t,E),Y?.(t))},T=t=>{Q(t),B(y,t)},O=(t,c)=>{_(t),j?.(t,{source:c})},k=()=>{const{locale:t}=l,c=Object.assign(Object.assign({},me),t);return c.lang=Object.assign(Object.assign({},c.lang),(t||{}).lang),c},ee=o.useCallback((t,c)=>d?d(t,c):m?m(t):o.createElement("div",{className:D(`${w}-cell-inner`,`${u}-date`,{[`${u}-date-today`]:r(X,t)})},o.createElement("div",{className:`${u}-date-value`},String(e.getDate(t)).padStart(2,"0")),o.createElement("div",{className:`${u}-date-content`},i?i(t,c):$&&$(t))),[m,$,i,d]),te=o.useCallback((t,c)=>{if(d)return d(t,c);if(b)return b(t);const ae=c.locale.shortMonths||e.locale.getShortMonths(c.locale.locale);return o.createElement("div",{className:D(`${w}-cell-inner`,`${u}-date`,{[`${u}-date-today`]:a(X,t)})},o.createElement("div",{className:`${u}-date-value`},ae[e.getMonth(t)]),o.createElement("div",{className:`${u}-date-content`},i?i(t,c):C&&C(t)))},[b,C,i,d]),[v]=pe("Calendar",k),ne=(t,c)=>{if(c.type==="date")return ee(t,c);if(c.type==="month")return te(t,Object.assign(Object.assign({},c),{locale:v?.lang}))};return q(o.createElement("div",{className:D(u,{[`${u}-full`]:P,[`${u}-mini`]:!P,[`${u}-rtl`]:U==="rtl"},h,S,J),style:p},f?f({value:y,type:E,onChange:t=>{O(t,"customize")},onTypeChange:T}):o.createElement(be,{prefixCls:u,value:y,generateConfig:e,mode:E,fullscreen:P,locale:v?.lang,validRange:R,onChange:O,onModeChange:T}),o.createElement(oe,{value:y,prefixCls:w,locale:v?.lang,generateConfig:e,cellRender:ne,onSelect:t=>{O(t,I)},mode:I,picker:I,disabledDate:Z,hideHeader:!0})))}}const Me=F(ie);Me.generateCalendar=F;export{Me as default};
