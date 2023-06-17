import{r as y,M as He,s as ne,R as u,c as P,x as V,B as Ie,q as N,u as te,v as re,a4 as pe,g as $e,m as _e,k as Ee,a as Fe}from"./index-7e4a4b07.js";import Ne from"./index-5b57a4c3.js";import"./placements-d495e90e.js";import"./roundedArrow-cf08b32b.js";import"./Compact-a8ad6370.js";import"./index-5d226ec8.js";import"./zoom-470fe614.js";import"./colors-7be04c46.js";import"./presetColors-88dfd00f.js";var Ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"};const Le=Ve;var Me=function(t,n){return y.createElement(He,ne({},t,{ref:n,icon:Le}))};const Oe=y.forwardRef(Me);function De(e,t){var n=e.disabled,a=e.prefixCls,o=e.character,g=e.characterRender,s=e.index,I=e.count,f=e.value,h=e.allowHalf,C=e.focused,d=e.onHover,R=e.onClick,p=function(b){d(b,s)},w=function(b){R(b,s)},$=function(b){b.keyCode===V.ENTER&&R(b,s)},S=s+1,i=new Set([a]);f===0&&s===0&&C?i.add("".concat(a,"-focused")):h&&f+.5>=S&&f<S?(i.add("".concat(a,"-half")),i.add("".concat(a,"-active")),C&&i.add("".concat(a,"-focused"))):(S<=f?i.add("".concat(a,"-full")):i.add("".concat(a,"-zero")),S===f&&C&&i.add("".concat(a,"-focused")));var _=typeof o=="function"?o(e):o,x=u.createElement("li",{className:P(Array.from(i)),ref:t},u.createElement("div",{onClick:n?null:w,onKeyDown:n?null:$,onMouseMove:n?null:p,role:"radio","aria-checked":f>s?"true":"false","aria-posinset":s+1,"aria-setsize":I,tabIndex:n?-1:0},u.createElement("div",{className:"".concat(a,"-first")},_),u.createElement("div",{className:"".concat(a,"-second")},_)));return g&&(x=g(x,e)),x}const Te=u.forwardRef(De);function je(){var e=y.useRef({});function t(a){return e.current[a]}function n(a){return function(o){e.current[a]=o}}return[t,n]}function Be(e){var t=e.pageXOffset,n="scrollLeft";if(typeof t!="number"){var a=e.document;t=a.documentElement[n],typeof t!="number"&&(t=a.body[n])}return t}function Ke(e){var t,n,a=e.ownerDocument,o=a.body,g=a&&a.documentElement,s=e.getBoundingClientRect();return t=s.left,n=s.top,t-=g.clientLeft||o.clientLeft||0,n-=g.clientTop||o.clientTop||0,{left:t,top:n}}function Pe(e){var t=Ke(e),n=e.ownerDocument,a=n.defaultView||n.parentWindow;return t.left+=Be(a),t.left}var ze=["prefixCls","className","defaultValue","value","count","allowHalf","allowClear","character","characterRender","disabled","direction","tabIndex","autoFocus","onHoverChange","onChange","onFocus","onBlur","onKeyDown","onMouseLeave"];function Ae(e,t){var n,a=e.prefixCls,o=a===void 0?"rc-rate":a,g=e.className,s=e.defaultValue,I=e.value,f=e.count,h=f===void 0?5:f,C=e.allowHalf,d=C===void 0?!1:C,R=e.allowClear,p=R===void 0?!0:R,w=e.character,$=w===void 0?"★":w,S=e.characterRender,i=e.disabled,_=e.direction,x=_===void 0?"ltr":_,E=e.tabIndex,b=E===void 0?0:E,le=e.autoFocus,H=e.onHoverChange,L=e.onChange,M=e.onFocus,O=e.onBlur,D=e.onKeyDown,T=e.onMouseLeave,oe=Ie(e,ze),ie=je(),z=N(ie,2),ce=z[0],se=z[1],j=u.useRef(null),A=function(){if(!i){var r;(r=j.current)===null||r===void 0||r.focus()}};u.useImperativeHandle(t,function(){return{focus:A,blur:function(){if(!i){var r;(r=j.current)===null||r===void 0||r.blur()}}}});var ue=te(s||0,{value:I}),X=N(ue,2),B=X[0],fe=X[1],de=te(null),k=N(de,2),ve=k[0],K=k[1],W=function(r,m){var c=x==="rtl",l=r+1;if(d){var Z=ce(r),ee=Pe(Z),ae=Z.clientWidth;(c&&m-ee>ae/2||!c&&m-ee<ae/2)&&(l-=.5)}return l},F=function(r){fe(r),L?.(r)},me=u.useState(!1),G=N(me,2),ge=G[0],q=G[1],he=function(){q(!0),M?.()},Ce=function(){q(!1),O?.()},Se=u.useState(null),J=N(Se,2),Q=J[0],U=J[1],be=function(r,m){var c=W(m,r.pageX);c!==ve&&(U(c),K(null)),H?.(c)},Y=function(r){i||(U(null),K(null),H?.(void 0)),r&&T?.(r)},ye=function(r,m){var c=W(m,r.pageX),l=!1;p&&(l=c===B),Y(),F(l?0:c),K(l?c:null)},Re=function(r){var m=r.keyCode,c=x==="rtl",l=B;m===V.RIGHT&&l<h&&!c?(d?l+=.5:l+=1,F(l),r.preventDefault()):m===V.LEFT&&l>0&&!c||m===V.RIGHT&&l>0&&c?(d?l-=.5:l-=1,F(l),r.preventDefault()):m===V.LEFT&&l<h&&c&&(d?l+=.5:l+=1,F(l),r.preventDefault()),D?.(r)};u.useEffect(function(){le&&!i&&A()},[]);var we=new Array(h).fill(0).map(function(v,r){return u.createElement(Te,{ref:se(r),index:r,count:h,disabled:i,prefixCls:"".concat(o,"-star"),allowHalf:d,value:Q===null?B:Q,onClick:ye,onHover:be,key:v||r,character:$,characterRender:S,focused:ge})}),xe=P(o,g,(n={},re(n,"".concat(o,"-disabled"),i),re(n,"".concat(o,"-rtl"),x==="rtl"),n));return u.createElement("ul",ne({className:xe,onMouseLeave:Y,tabIndex:i?-1:b,onFocus:i?null:he,onBlur:i?null:Ce,onKeyDown:i?null:Re,ref:j,role:"radiogroup"},pe(oe,{aria:!0,data:!0,attr:!0})),we)}const Xe=u.forwardRef(Ae),ke=e=>{const{componentCls:t}=e;return{[`${t}-star`]:{position:"relative",display:"inline-block",color:"inherit",cursor:"pointer","&:not(:last-child)":{marginInlineEnd:e.marginXS},"> div":{transition:`all ${e.motionDurationMid}, outline 0s`,"&:hover":{transform:e.starHoverScale},"&:focus":{outline:0},"&:focus-visible":{outline:`${e.lineWidth}px dashed ${e.starColor}`,transform:e.starHoverScale}},"&-first, &-second":{color:e.starBg,transition:`all ${e.motionDurationMid}`,userSelect:"none",[e.iconCls]:{verticalAlign:"middle"}},"&-first":{position:"absolute",top:0,insetInlineStart:0,width:"50%",height:"100%",overflow:"hidden",opacity:0},[`&-half ${t}-star-first, &-half ${t}-star-second`]:{opacity:1},[`&-half ${t}-star-first, &-full ${t}-star-second`]:{color:"inherit"}}}},We=e=>({[`&-rtl${e.componentCls}`]:{direction:"rtl"}}),Ge=e=>{const{componentCls:t}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Ee(e)),{display:"inline-block",margin:0,padding:0,color:e.starColor,fontSize:e.starSize,lineHeight:"unset",listStyle:"none",outline:"none",[`&-disabled${t} ${t}-star`]:{cursor:"default","> div:hover":{transform:"scale(1)"}}}),ke(e)),{[`+ ${t}-text`]:{display:"inline-block",marginInlineStart:e.marginXS,fontSize:e.fontSize}}),We(e))}},qe=$e("Rate",e=>{const t=_e(e,{});return[Ge(t)]},e=>({starColor:e.yellow6,starSize:e.controlHeightLG*.5,starHoverScale:"scale(1.1)",starBg:e.colorFillContent}));var Je=globalThis&&globalThis.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n};const la=y.forwardRef((e,t)=>{const{prefixCls:n,className:a,rootClassName:o,tooltips:g,character:s=y.createElement(Oe,null)}=e,I=Je(e,["prefixCls","className","rootClassName","tooltips","character"]),f=(w,$)=>{let{index:S}=$;return g?y.createElement(Ne,{title:g[S]},w):w},{getPrefixCls:h,direction:C}=y.useContext(Fe),d=h("rate",n),[R,p]=qe(d);return R(y.createElement(Xe,Object.assign({ref:t,character:s,characterRender:f},I,{className:P(a,o,p),prefixCls:d,direction:C})))});export{la as default};
