import{P as s}from"./presetColors-88dfd00f.js";import{j as n}from"./index-7e4a4b07.js";function m(r,t){return s.reduce((o,e)=>{const u=r[`${e}1`],i=r[`${e}3`],a=r[`${e}6`],c=r[`${e}7`];return Object.assign(Object.assign({},o),t(e,{lightColor:u,lightBorderColor:i,darkColor:a,textColor:c}))},{})}const l=s.map(r=>`${r}-inverse`),g=["success","processing","error","default","warning"];function f(r){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat(n(l),n(s)).includes(r):s.includes(r)}function p(r){return g.includes(r)}export{p as a,m as g,f as i};