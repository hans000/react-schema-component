import{r as e,u as j,a as y,H as E}from"./index-7e4a4b07.js";function R(d,g,i,a){return function(s){const{prefixCls:v,style:m}=s,r=e.useRef(null),[b,P]=e.useState(0),[h,C]=e.useState(0),[c,O]=j(!1,{value:s.open}),{getPrefixCls:x}=e.useContext(y),l=x(g||"select",v);e.useEffect(()=>{if(O(!0),typeof ResizeObserver<"u"){const u=new ResizeObserver(t=>{const n=t[0].target;P(n.offsetHeight+8),C(n.offsetWidth)}),f=setInterval(()=>{var t;const n=i?`.${i(l)}`:`.${l}-dropdown`,p=(t=r.current)===null||t===void 0?void 0:t.querySelector(n);p&&(clearInterval(f),u.observe(p))},10);return()=>{clearInterval(f),u.disconnect()}}},[]);let o=Object.assign(Object.assign({},s),{style:Object.assign(Object.assign({},m),{margin:0}),open:c,visible:c,getPopupContainer:()=>r.current});return a&&(o=a(o)),e.createElement(E,{theme:{token:{motion:!1}}},e.createElement("div",{ref:r,style:{paddingBottom:b,position:"relative",minWidth:h}},e.createElement(d,Object.assign({},o))))}}export{R as g};
