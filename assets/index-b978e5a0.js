import{u as X,T as Y,S as Z,F as ee}from"./iconUtil-a48eeba7.js";import{c as te,e as ne,f as re,C as oe}from"./treeUtil-8a6683e7.js";import{r as l,M as F,s as M,R as x,a as q,aP as se,c as G,j as D}from"./index-7e4a4b07.js";var ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"};const ae=ce;var le=function(o,r){return l.createElement(F,M({},o,{ref:r,icon:ae}))};const ie=l.forwardRef(le);var de={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"};const fe=de;var ue=function(o,r){return l.createElement(F,M({},o,{ref:r,icon:fe}))};const pe=l.forwardRef(ue);var ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"};const me=ye;var xe=function(o,r){return l.createElement(F,M({},o,{ref:r,icon:me}))};const he=l.forwardRef(xe),R=4;function ge(e){const{dropPosition:o,dropLevelOffset:r,prefixCls:n,indent:s,direction:t="ltr"}=e,c=t==="ltr"?"left":"right",d=t==="ltr"?"right":"left",a={[c]:-r*s+R,[d]:0};switch(o){case-1:a.top=-3;break;case 1:a.bottom=-3;break;default:a.bottom=-3,a[c]=s+R;break}return x.createElement("div",{style:a,className:`${n}-drop-indicator`})}const be=x.forwardRef((e,o)=>{const{getPrefixCls:r,direction:n,virtual:s}=x.useContext(q),{prefixCls:t,className:c,showIcon:d=!1,showLine:a,switcherIcon:P,blockNode:v=!1,children:w,checkable:b=!1,selectable:O=!0,draggable:h,motion:E}=e,f=r("tree",t),T=r(),j=E??Object.assign(Object.assign({},se(T)),{motionAppear:!1}),H=Object.assign(Object.assign({},e),{checkable:b,selectable:O,showIcon:d,motion:j,blockNode:v,showLine:!!a,dropIndicatorRender:ge}),[$,I]=X(f),K=x.useMemo(()=>{if(!h)return!1;let i={};switch(typeof h){case"function":i.nodeDraggable=h;break;case"object":i=Object.assign({},h);break}return i.icon!==!1&&(i.icon=i.icon||x.createElement(he,null)),i},[h]),z=i=>x.createElement(Z,{prefixCls:f,switcherIcon:P,treeNodeProps:i,showLine:a});return $(x.createElement(Y,Object.assign({itemHeight:20,ref:o,virtual:s},H,{prefixCls:f,className:G({[`${f}-icon-hide`]:!d,[`${f}-block-node`]:v,[`${f}-unselectable`]:!O,[`${f}-rtl`]:n==="rtl"},c,I),direction:n,checkable:b&&x.createElement("span",{className:`${f}-checkbox-inner`}),selectable:O,switcherIcon:z,draggable:K}),w))}),J=be;var m;(function(e){e[e.None=0]="None",e[e.Start=1]="Start",e[e.End=2]="End"})(m||(m={}));function _(e,o){function r(n){const{key:s,children:t}=n;o(s,n)!==!1&&_(t||[],o)}e.forEach(r)}function ve(e){let{treeData:o,expandedKeys:r,startKey:n,endKey:s}=e;const t=[];let c=m.None;if(n&&n===s)return[n];if(!n||!s)return[];function d(a){return a===n||a===s}return _(o,a=>{if(c===m.End)return!1;if(d(a)){if(t.push(a),c===m.None)c=m.Start;else if(c===m.Start)return c=m.End,!1}else c===m.Start&&t.push(a);return r.includes(a)}),t}function k(e,o){const r=D(o),n=[];return _(e,(s,t)=>{const c=r.indexOf(s);return c!==-1&&(n.push(t),r.splice(c,1)),!!r.length}),n}var V=globalThis&&globalThis.__rest||function(e,o){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)o.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};function Oe(e){const{isLeaf:o,expanded:r}=e;return o?l.createElement(ee,null):r?l.createElement(ie,null):l.createElement(pe,null)}function B(e){let{treeData:o,children:r}=e;return o||re(r)}const Ee=(e,o)=>{var{defaultExpandAll:r,defaultExpandParent:n,defaultExpandedKeys:s}=e,t=V(e,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]);const c=l.useRef(),d=l.useRef(),a=()=>{const{keyEntities:i}=te(B(t));let p;return r?p=Object.keys(i):n?p=ne(t.expandedKeys||s||[],i):p=t.expandedKeys||s,p},[P,v]=l.useState(t.selectedKeys||t.defaultSelectedKeys||[]),[w,b]=l.useState(()=>a());l.useEffect(()=>{"selectedKeys"in t&&v(t.selectedKeys)},[t.selectedKeys]),l.useEffect(()=>{"expandedKeys"in t&&b(t.expandedKeys)},[t.expandedKeys]);const O=(i,p)=>{var g;return"expandedKeys"in t||b(i),(g=t.onExpand)===null||g===void 0?void 0:g.call(t,i,p)},h=(i,p)=>{var g;const{multiple:L}=t,{node:Q,nativeEvent:y}=p,{key:S=""}=Q,C=B(t),N=Object.assign(Object.assign({},p),{selected:!0}),U=y?.ctrlKey||y?.metaKey,W=y?.shiftKey;let u;L&&U?(u=i,c.current=S,d.current=u,N.selectedNodes=k(C,u)):L&&W?(u=Array.from(new Set([].concat(D(d.current||[]),D(ve({treeData:C,expandedKeys:w,startKey:S,endKey:c.current}))))),N.selectedNodes=k(C,u)):(u=[S],c.current=S,d.current=u,N.selectedNodes=k(C,u)),(g=t.onSelect)===null||g===void 0||g.call(t,u,N),"selectedKeys"in t||v(u)},{getPrefixCls:E,direction:f}=l.useContext(q),{prefixCls:T,className:j,showIcon:H=!0,expandAction:$="click"}=t,I=V(t,["prefixCls","className","showIcon","expandAction"]),K=E("tree",T),z=G(`${K}-directory`,{[`${K}-directory-rtl`]:f==="rtl"},j);return l.createElement(J,Object.assign({icon:Oe,ref:o,blockNode:!0},I,{showIcon:H,expandAction:$,prefixCls:K,className:z,expandedKeys:w,selectedKeys:P,onSelect:h,onExpand:O}))},Ke=l.forwardRef(Ee),we=Ke,A=J;A.DirectoryTree=we;A.TreeNode=oe;const Pe=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));export{he as H,A as T,Pe as i};
