const m=(n,s,t,x,b)=>{const o=n/2,e=0,$=o,r=t*1/Math.sqrt(2),a=o-t*(1-1/Math.sqrt(2)),h=o-s*(1/Math.sqrt(2)),p=t*(Math.sqrt(2)-1)+s*(1/Math.sqrt(2)),g=2*o-h,M=p,f=2*o-r,q=a,y=2*o-e,_=$,l=o*Math.sqrt(2)+t*(Math.sqrt(2)-2),c=t*(Math.sqrt(2)-1);return{pointerEvents:"none",width:n,height:n,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:n,height:n/2,background:x,clipPath:{_multi_value_:!0,value:[`polygon(${c}px 100%, 50% ${c}px, ${2*o-c}px 100%, ${c}px 100%)`,`path('M ${e} ${$} A ${t} ${t} 0 0 0 ${r} ${a} L ${h} ${p} A ${s} ${s} 0 0 1 ${g} ${M} L ${f} ${q} A ${t} ${t} 0 0 0 ${y} ${_} Z')`]},content:'""'},"&::after":{content:'""',position:"absolute",width:l,height:l,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${s}px 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:b,zIndex:0,background:"transparent"}}};export{m as r};
