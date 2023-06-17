import{ag as j,r as D,c as L,v as N,s as X,_ as ie,e as de,f as ce,aW as I,y as M,h as se,B as Y,a4 as le,S as q,j as H,a8 as pe,o as fe}from"./index-7e4a4b07.js";function J(a,t){var s=new Set;return a.forEach(function(e){t.has(e)||s.add(e)}),s}function ue(a){var t=a||{},s=t.disabled,e=t.disableCheckbox,o=t.checkable;return!!(s||e)||o===!1}function ve(a,t,s,e){for(var o=new Set(a),i=new Set,f=0;f<=s;f+=1){var r=t.get(f)||new Set;r.forEach(function(l){var p=l.key,u=l.node,v=l.children,g=v===void 0?[]:v;o.has(p)&&!e(u)&&g.filter(function(h){return!e(h.node)}).forEach(function(h){o.add(h.key)})})}for(var n=new Set,c=s;c>=0;c-=1){var d=t.get(c)||new Set;d.forEach(function(l){var p=l.parent,u=l.node;if(!(e(u)||!l.parent||n.has(l.parent.key))){if(e(l.parent.node)){n.add(p.key);return}var v=!0,g=!1;(p.children||[]).filter(function(h){return!e(h.node)}).forEach(function(h){var k=h.key,y=o.has(k);v&&!y&&(v=!1),!g&&(y||i.has(k))&&(g=!0)}),v&&o.add(p.key),g&&i.add(p.key),n.add(p.key)}})}return{checkedKeys:Array.from(o),halfCheckedKeys:Array.from(J(i,o))}}function he(a,t,s,e,o){for(var i=new Set(a),f=new Set(t),r=0;r<=e;r+=1){var n=s.get(r)||new Set;n.forEach(function(p){var u=p.key,v=p.node,g=p.children,h=g===void 0?[]:g;!i.has(u)&&!f.has(u)&&!o(v)&&h.filter(function(k){return!o(k.node)}).forEach(function(k){i.delete(k.key)})})}f=new Set;for(var c=new Set,d=e;d>=0;d-=1){var l=s.get(d)||new Set;l.forEach(function(p){var u=p.parent,v=p.node;if(!(o(v)||!p.parent||c.has(p.parent.key))){if(o(p.parent.node)){c.add(u.key);return}var g=!0,h=!1;(u.children||[]).filter(function(k){return!o(k.node)}).forEach(function(k){var y=k.key,x=i.has(y);g&&!x&&(g=!1),!h&&(x||f.has(y))&&(h=!0)}),g||i.delete(u.key),h&&f.add(u.key),c.add(u.key)}})}return{checkedKeys:Array.from(i),halfCheckedKeys:Array.from(J(f,i))}}function Oe(a,t,s,e){var o=[],i;e?i=e:i=ue;var f=new Set(a.filter(function(d){var l=!!s[d];return l||o.push(d),l})),r=new Map,n=0;Object.keys(s).forEach(function(d){var l=s[d],p=l.level,u=r.get(p);u||(u=new Set,r.set(p,u)),u.add(l),n=Math.max(n,p)}),j(!o.length,"Tree missing follow keys: ".concat(o.slice(0,100).map(function(d){return"'".concat(d,"'")}).join(", ")));var c;return t===!0?c=ve(f,r,n,i):c=he(f,t.halfCheckedKeys,r,n,i),c}var ge=D.createContext(null),ye=function(t){for(var s=t.prefixCls,e=t.level,o=t.isStart,i=t.isEnd,f="".concat(s,"-indent-unit"),r=[],n=0;n<e;n+=1){var c;r.push(D.createElement("span",{key:n,className:L(f,(c={},N(c,"".concat(f,"-start"),o[n]),N(c,"".concat(f,"-end"),i[n]),c))}))}return D.createElement("span",{"aria-hidden":"true",className:"".concat(s,"-indent")},r)};const ke=D.memo(ye);var xe=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],z="open",U="close",Ce="---",Ne=function(a){ie(s,a);var t=de(s);function s(){var e;ce(this,s);for(var o=arguments.length,i=new Array(o),f=0;f<o;f++)i[f]=arguments[f];return e=t.call.apply(t,[this].concat(i)),e.state={dragNodeHighlight:!1},e.selectHandle=void 0,e.onSelectorClick=function(r){var n=e.props.context.onNodeClick;n(r,P(e.props)),e.isSelectable()?e.onSelect(r):e.onCheck(r)},e.onSelectorDoubleClick=function(r){var n=e.props.context.onNodeDoubleClick;n(r,P(e.props))},e.onSelect=function(r){if(!e.isDisabled()){var n=e.props.context.onNodeSelect;r.preventDefault(),n(r,P(e.props))}},e.onCheck=function(r){if(!e.isDisabled()){var n=e.props,c=n.disableCheckbox,d=n.checked,l=e.props.context.onNodeCheck;if(!(!e.isCheckable()||c)){r.preventDefault();var p=!d;l(r,P(e.props),p)}}},e.onMouseEnter=function(r){var n=e.props.context.onNodeMouseEnter;n(r,P(e.props))},e.onMouseLeave=function(r){var n=e.props.context.onNodeMouseLeave;n(r,P(e.props))},e.onContextMenu=function(r){var n=e.props.context.onNodeContextMenu;n(r,P(e.props))},e.onDragStart=function(r){var n=e.props.context.onNodeDragStart;r.stopPropagation(),e.setState({dragNodeHighlight:!0}),n(r,I(e));try{r.dataTransfer.setData("text/plain","")}catch{}},e.onDragEnter=function(r){var n=e.props.context.onNodeDragEnter;r.preventDefault(),r.stopPropagation(),n(r,I(e))},e.onDragOver=function(r){var n=e.props.context.onNodeDragOver;r.preventDefault(),r.stopPropagation(),n(r,I(e))},e.onDragLeave=function(r){var n=e.props.context.onNodeDragLeave;r.stopPropagation(),n(r,I(e))},e.onDragEnd=function(r){var n=e.props.context.onNodeDragEnd;r.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(r,I(e))},e.onDrop=function(r){var n=e.props.context.onNodeDrop;r.preventDefault(),r.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(r,I(e))},e.onExpand=function(r){var n=e.props,c=n.loading,d=n.context.onNodeExpand;c||d(r,P(e.props))},e.setSelectHandle=function(r){e.selectHandle=r},e.getNodeState=function(){var r=e.props.expanded;return e.isLeaf()?null:r?z:U},e.hasChildren=function(){var r=e.props.eventKey,n=e.props.context.keyEntities,c=n[r]||{},d=c.children;return!!(d||[]).length},e.isLeaf=function(){var r=e.props,n=r.isLeaf,c=r.loaded,d=e.props.context.loadData,l=e.hasChildren();return n===!1?!1:n||!d&&!l||d&&c&&!l},e.isDisabled=function(){var r=e.props.disabled,n=e.props.context.disabled;return!!(n||r)},e.isCheckable=function(){var r=e.props.checkable,n=e.props.context.checkable;return!n||r===!1?!1:n},e.syncLoadData=function(r){var n=r.expanded,c=r.loading,d=r.loaded,l=e.props.context,p=l.loadData,u=l.onNodeLoad;c||p&&n&&!e.isLeaf()&&!e.hasChildren()&&!d&&u(P(e.props))},e.isDraggable=function(){var r=e.props,n=r.data,c=r.context.draggable;return!!(c&&(!c.nodeDraggable||c.nodeDraggable(n)))},e.renderDragHandler=function(){var r=e.props.context,n=r.draggable,c=r.prefixCls;return n?.icon?D.createElement("span",{className:"".concat(c,"-draggable-icon")},n.icon):null},e.renderSwitcherIconDom=function(r){var n=e.props.switcherIcon,c=e.props.context.switcherIcon,d=n||c;return typeof d=="function"?d(M(M({},e.props),{},{isLeaf:r})):d},e.renderSwitcher=function(){var r=e.props.expanded,n=e.props.context.prefixCls;if(e.isLeaf()){var c=e.renderSwitcherIconDom(!0);return c!==!1?D.createElement("span",{className:L("".concat(n,"-switcher"),"".concat(n,"-switcher-noop"))},c):null}var d=L("".concat(n,"-switcher"),"".concat(n,"-switcher_").concat(r?z:U)),l=e.renderSwitcherIconDom(!1);return l!==!1?D.createElement("span",{onClick:e.onExpand,className:d},l):null},e.renderCheckbox=function(){var r=e.props,n=r.checked,c=r.halfChecked,d=r.disableCheckbox,l=e.props.context.prefixCls,p=e.isDisabled(),u=e.isCheckable();if(!u)return null;var v=typeof u!="boolean"?u:null;return D.createElement("span",{className:L("".concat(l,"-checkbox"),n&&"".concat(l,"-checkbox-checked"),!n&&c&&"".concat(l,"-checkbox-indeterminate"),(p||d)&&"".concat(l,"-checkbox-disabled")),onClick:e.onCheck},v)},e.renderIcon=function(){var r=e.props.loading,n=e.props.context.prefixCls;return D.createElement("span",{className:L("".concat(n,"-iconEle"),"".concat(n,"-icon__").concat(e.getNodeState()||"docu"),r&&"".concat(n,"-icon_loading"))})},e.renderSelector=function(){var r=e.state.dragNodeHighlight,n=e.props,c=n.title,d=c===void 0?Ce:c,l=n.selected,p=n.icon,u=n.loading,v=n.data,g=e.props.context,h=g.prefixCls,k=g.showIcon,y=g.icon,x=g.loadData,E=g.titleRender,m=e.isDisabled(),S="".concat(h,"-node-content-wrapper"),O;if(k){var K=p||y;O=K?D.createElement("span",{className:L("".concat(h,"-iconEle"),"".concat(h,"-icon__customize"))},typeof K=="function"?K(e.props):K):e.renderIcon()}else x&&u&&(O=e.renderIcon());var C;typeof d=="function"?C=d(v):E?C=E(v):C=d;var b=D.createElement("span",{className:"".concat(h,"-title")},C);return D.createElement("span",{ref:e.setSelectHandle,title:typeof d=="string"?d:"",className:L("".concat(S),"".concat(S,"-").concat(e.getNodeState()||"normal"),!m&&(l||r)&&"".concat(h,"-node-selected")),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onContextMenu:e.onContextMenu,onClick:e.onSelectorClick,onDoubleClick:e.onSelectorDoubleClick},O,b,e.renderDropIndicator())},e.renderDropIndicator=function(){var r=e.props,n=r.disabled,c=r.eventKey,d=e.props.context,l=d.draggable,p=d.dropLevelOffset,u=d.dropPosition,v=d.prefixCls,g=d.indent,h=d.dropIndicatorRender,k=d.dragOverNodeKey,y=d.direction,x=!!l,E=!n&&x&&k===c;return E?h({dropPosition:u,dropLevelOffset:p,indent:g,prefixCls:v,direction:y}):null},e}return se(s,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var o=this.props.selectable,i=this.props.context.selectable;return typeof o=="boolean"?o:i}},{key:"render",value:function(){var o,i=this.props,f=i.eventKey,r=i.className,n=i.style,c=i.dragOver,d=i.dragOverGapTop,l=i.dragOverGapBottom,p=i.isLeaf,u=i.isStart,v=i.isEnd,g=i.expanded,h=i.selected,k=i.checked,y=i.halfChecked,x=i.loading,E=i.domRef,m=i.active;i.data;var S=i.onMouseMove,O=i.selectable,K=Y(i,xe),C=this.props.context,b=C.prefixCls,G=C.filterTreeNode,w=C.keyEntities,T=C.dropContainerKey,_=C.dropTargetKey,B=C.draggingNodeKey,A=this.isDisabled(),re=le(K,{aria:!0,data:!0}),ne=w[f]||{},ae=ne.level,te=v[v.length-1],$=this.isDraggable(),R=!A&&$,W=B===f,oe=O!==void 0?{"aria-selected":!!O}:void 0;return D.createElement("div",X({ref:E,className:L(r,"".concat(b,"-treenode"),(o={},N(o,"".concat(b,"-treenode-disabled"),A),N(o,"".concat(b,"-treenode-switcher-").concat(g?"open":"close"),!p),N(o,"".concat(b,"-treenode-checkbox-checked"),k),N(o,"".concat(b,"-treenode-checkbox-indeterminate"),y),N(o,"".concat(b,"-treenode-selected"),h),N(o,"".concat(b,"-treenode-loading"),x),N(o,"".concat(b,"-treenode-active"),m),N(o,"".concat(b,"-treenode-leaf-last"),te),N(o,"".concat(b,"-treenode-draggable"),$),N(o,"dragging",W),N(o,"drop-target",_===f),N(o,"drop-container",T===f),N(o,"drag-over",!A&&c),N(o,"drag-over-gap-top",!A&&d),N(o,"drag-over-gap-bottom",!A&&l),N(o,"filter-node",G&&G(P(this.props))),o)),style:n,draggable:R,"aria-grabbed":W,onDragStart:R?this.onDragStart:void 0,onDragEnter:$?this.onDragEnter:void 0,onDragOver:$?this.onDragOver:void 0,onDragLeave:$?this.onDragLeave:void 0,onDrop:$?this.onDrop:void 0,onDragEnd:$?this.onDragEnd:void 0,onMouseMove:S},oe,re),D.createElement(ke,{prefixCls:b,level:ae,isStart:u,isEnd:v}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),s}(D.Component),Q=function(t){return D.createElement(ge.Consumer,null,function(s){return D.createElement(Ne,X({},t,{context:s}))})};Q.displayName="TreeNode";Q.isTreeNode=1;function Pe(a,t){if(!a)return[];var s=a.slice(),e=s.indexOf(t);return e>=0&&s.splice(e,1),s}function we(a,t){var s=(a||[]).slice();return s.indexOf(t)===-1&&s.push(t),s}function V(a){return a.split("-")}function Z(a,t){return"".concat(a,"-").concat(t)}function me(a){return a&&a.type&&a.type.isTreeNode}function Te(a,t){var s=[],e=t[a];function o(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];i.forEach(function(f){var r=f.key,n=f.children;s.push(r),o(n)})}return o(e.children),s}function be(a){if(a.parent){var t=V(a.pos);return Number(t[t.length-1])===a.parent.children.length-1}return!1}function De(a){var t=V(a.pos);return Number(t[t.length-1])===0}function Le(a,t,s,e,o,i,f,r,n,c){var d,l=a.clientX,p=a.clientY,u=a.target.getBoundingClientRect(),v=u.top,g=u.height,h=(c==="rtl"?-1:1)*((o?.x||0)-l),k=(h-12)/e,y=r[s.props.eventKey];if(p<v+g/2){var x=f.findIndex(function(B){return B.key===y.key}),E=x<=0?0:x-1,m=f[E].key;y=r[m]}var S=y.key,O=y,K=y.key,C=0,b=0;if(!n.includes(S))for(var G=0;G<k&&be(y);G+=1)y=y.parent,b+=1;var w=t.props.data,T=y.node,_=!0;return De(y)&&y.level===0&&p<v+g/2&&i({dragNode:w,dropNode:T,dropPosition:-1})&&y.key===s.props.eventKey?C=-1:(O.children||[]).length&&n.includes(K)?i({dragNode:w,dropNode:T,dropPosition:0})?C=0:_=!1:b===0?k>-1.5?i({dragNode:w,dropNode:T,dropPosition:1})?C=1:_=!1:i({dragNode:w,dropNode:T,dropPosition:0})?C=0:i({dragNode:w,dropNode:T,dropPosition:1})?C=1:_=!1:i({dragNode:w,dropNode:T,dropPosition:1})?C=1:_=!1,{dropPosition:C,dropLevelOffset:b,dropTargetKey:y.key,dropTargetPos:y.pos,dragOverNodeKey:K,dropContainerKey:C===0?null:((d=y.parent)===null||d===void 0?void 0:d.key)||null,dropAllowed:_}}function _e(a,t){if(a){var s=t.multiple;return s?a.slice():a.length?[a[0]]:a}}function $e(a){if(!a)return null;var t;if(Array.isArray(a))t={checkedKeys:a,halfCheckedKeys:void 0};else if(q(a)==="object")t={checkedKeys:a.checked||void 0,halfCheckedKeys:a.halfChecked||void 0};else return j(!1,"`checkedKeys` is not an array or an object"),null;return t}function Me(a,t){var s=new Set;function e(o){if(!s.has(o)){var i=t[o];if(i){s.add(o);var f=i.parent,r=i.node;r.disabled||f&&e(f.key)}}}return(a||[]).forEach(function(o){e(o)}),H(s)}var Ee=["children"];function F(a,t){return a??t}function ee(a){var t=a||{},s=t.title,e=t._title,o=t.key,i=t.children,f=s||"title";return{title:f,_title:e||[f],key:o||"key",children:i||"children"}}function Ie(a){function t(s){var e=pe(s);return e.map(function(o){if(!me(o))return j(!o,"Tree/TreeNode can only accept TreeNode as children."),null;var i=o.key,f=o.props,r=f.children,n=Y(f,Ee),c=M({key:i},n),d=t(r);return d.length&&(c.children=d),c}).filter(function(o){return o})}return t(a)}function Ge(a,t,s){var e=ee(s),o=e._title,i=e.key,f=e.children,r=new Set(t===!0?[]:t),n=[];function c(d){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return d.map(function(p,u){for(var v=Z(l?l.pos:"0",u),g=F(p[i],v),h,k=0;k<o.length;k+=1){var y=o[k];if(p[y]!==void 0){h=p[y];break}}var x=M(M({},fe(p,[].concat(H(o),[i,f]))),{},{title:h,key:g,parent:l,pos:v,children:null,data:p,isStart:[].concat(H(l?l.isStart:[]),[u===0]),isEnd:[].concat(H(l?l.isEnd:[]),[u===d.length-1])});return n.push(x),t===!0||r.has(g)?x.children=c(p[f]||[],x):x.children=[],x})}return c(a),n}function Ke(a,t,s){var e={};q(s)==="object"?e=s:e={externalGetKey:s},e=e||{};var o=e,i=o.childrenPropName,f=o.externalGetKey,r=o.fieldNames,n=ee(r),c=n.key,d=n.children,l=i||d,p;f?typeof f=="string"?p=function(g){return g[f]}:typeof f=="function"&&(p=function(g){return f(g)}):p=function(g,h){return F(g[c],h)};function u(v,g,h,k){var y=v?v[l]:a,x=v?Z(h.pos,g):"0",E=v?[].concat(H(k),[v]):[];if(v){var m=p(v,x),S={node:v,index:g,pos:x,key:m,parentPos:h.node?h.pos:null,level:h.level+1,nodes:E};t(S)}y&&y.forEach(function(O,K){u(O,K,{node:v,pos:x,level:h?h.level+1:-1},E)})}u(null)}function Ae(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=t.initWrapper,e=t.processEntity,o=t.onProcessFinished,i=t.externalGetKey,f=t.childrenPropName,r=t.fieldNames,n=arguments.length>2?arguments[2]:void 0,c=i||n,d={},l={},p={posEntities:d,keyEntities:l};return s&&(p=s(p)||p),Ke(a,function(u){var v=u.node,g=u.index,h=u.pos,k=u.key,y=u.parentPos,x=u.level,E=u.nodes,m={node:v,nodes:E,index:g,key:k,pos:h,level:x},S=F(k,h);d[h]=m,l[S]=m,m.parent=d[y],m.parent&&(m.parent.children=m.parent.children||[],m.parent.children.push(m)),e&&e(m,p)},{externalGetKey:c,childrenPropName:f,fieldNames:r}),o&&o(p),p}function He(a,t){var s=t.expandedKeys,e=t.selectedKeys,o=t.loadedKeys,i=t.loadingKeys,f=t.checkedKeys,r=t.halfCheckedKeys,n=t.dragOverNodeKey,c=t.dropPosition,d=t.keyEntities,l=d[a],p={eventKey:a,expanded:s.indexOf(a)!==-1,selected:e.indexOf(a)!==-1,loaded:o.indexOf(a)!==-1,loading:i.indexOf(a)!==-1,checked:f.indexOf(a)!==-1,halfChecked:r.indexOf(a)!==-1,pos:String(l?l.pos:""),dragOver:n===a&&c===0,dragOverGapTop:n===a&&c===-1,dragOverGapBottom:n===a&&c===1};return p}function P(a){var t=a.data,s=a.expanded,e=a.selected,o=a.checked,i=a.loaded,f=a.loading,r=a.halfChecked,n=a.dragOver,c=a.dragOverGapTop,d=a.dragOverGapBottom,l=a.pos,p=a.active,u=a.eventKey,v=M(M({},t),{},{expanded:s,selected:e,checked:o,loaded:i,loading:f,halfChecked:r,dragOver:n,dragOverGapTop:c,dragOverGapBottom:d,pos:l,active:p,key:u});return"props"in v||Object.defineProperty(v,"props",{get:function(){return j(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),a}}),v}export{Q as C,ge as T,Oe as a,Pe as b,Ae as c,we as d,Me as e,Ie as f,He as g,F as h,ee as i,Te as j,P as k,Le as l,Ge as m,_e as n,$e as o,V as p};
