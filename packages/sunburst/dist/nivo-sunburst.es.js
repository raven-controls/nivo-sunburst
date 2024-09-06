import{useMemo as e,createElement as r,Fragment as o}from"react";import{useTheme as n,usePropertyAccessor as t,useValueFormatter as i,Container as a,useDimensions as d,bindDefs as l,SvgWrapper as c,ResponsiveWrapper as s}from"@nivo/core";import{useArcGenerator as u,ArcsLayer as v,ArcLabelsLayer as f}from"@nivo/arcs";import{BasicTooltip as h,useTooltip as m}from"@nivo/tooltip";import{jsx as p}from"react/jsx-runtime";import{hierarchy as b,partition as C}from"d3-hierarchy";import{scaleRadial as g}from"d3-scale";import M from"lodash/cloneDeep";import L from"lodash/sortBy";import{useOrdinalColorScale as R,useInheritedColor as y}from"@nivo/colors";function x(){return x=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},x.apply(this,arguments)}var F={id:"id",value:"value",cornerRadius:0,innerRadius:.4,renderRootNode:!1,layers:["arcs","arcLabels"],colors:{scheme:"nivo"},colorBy:"id",inheritColorFromParent:!0,childColor:{from:"color"},borderWidth:1,borderColor:"white",enableArcLabels:!1,arcLabel:"formattedValue",arcLabelsRadiusOffset:.5,arcLabelsSkipAngle:0,arcLabelsTextColor:{theme:"labels.text.fill"},animate:!0,motionConfig:"gentle",transitionMode:"innerRadius",isInteractive:!0,defs:[],fill:[],tooltip:function(e){var r=e.id,o=e.formattedValue,n=e.color;return p(h,{id:r,value:o,enableChip:!0,color:n})},role:"img"},I=function(r){var o=r.data,a=r.id,d=void 0===a?F.id:a,l=r.value,c=void 0===l?F.value:l,s=r.valueFormat,v=r.radius,f=r.cornerRadius,h=void 0===f?F.cornerRadius:f,m=r.innerRadius,p=void 0===m?F.innerRadius:m,x=r.renderRootNode,I=void 0===x?F.renderRootNode:x,W=r.colors,O=void 0===W?F.colors:W,k=r.colorBy,A=void 0===k?F.colorBy:k,G=r.inheritColorFromParent,P=void 0===G?F.inheritColorFromParent:G,w=r.childColor,B=void 0===w?F.childColor:w,N=n(),j=R(O,A),E=y(B,N),T=t(d),X=t(c),Y=i(s),K=e((function(){var e,r=M(o),n=b(r).sum(X),t=C().size([2*Math.PI,v*v]),i=I?t(n).descendants():t(n).descendants().slice(1),a=null!=(e=n.value)?e:0,d=L(i,"depth"),l=v*Math.min(p,1),c=Math.max.apply(Math,d.map((function(e){return e.depth}))),u=g().domain([0,c]).range([l,v]);return d.reduce((function(e,r){var o,n=T(r.data),t=r.value,i=100*t/a,d=r.ancestors().map((function(e){return T(e.data)})),l={startAngle:r.x0,endAngle:r.x1,innerRadius:I&&0===r.depth?0:u(r.depth-1),outerRadius:I&&0===r.depth?p:u(r.depth)};r.parent&&(o=e.find((function(e){return e.id===T(r.parent.data)})));var c={id:n,path:d,value:t,percentage:i,formattedValue:s?Y(t):i.toFixed(2)+"%",color:"",arc:l,data:r.data,depth:r.depth,height:r.height};return P&&o&&c.depth>1?c.color=E(o,c):c.color=j(c),[].concat(e,[c])}),[])}),[o,v,X,T,s,Y,j,P,E,p,I]);return{arcGenerator:u({cornerRadius:h}),nodes:K}},W=function(r){var o=r.nodes,n=r.arcGenerator,t=r.centerX,i=r.centerY,a=r.radius;return e((function(){return{nodes:o,arcGenerator:n,centerX:t,centerY:i,radius:a}}),[o,n,t,i,a])},O=function(o){var n=o.center,t=o.data,i=o.arcGenerator,a=o.borderWidth,d=o.borderColor,l=o.isInteractive,c=o.onClick,s=o.onMouseEnter,u=o.onMouseMove,f=o.onMouseLeave,h=o.tooltip,b=o.transitionMode,C=m(),g=C.showTooltipFromEvent,M=C.hideTooltip,L=e((function(){if(l)return function(e,r){null==c||c(e,r)}}),[l,c]),R=e((function(){if(l)return function(e,o){g(r(h,e),o),null==s||s(e,o)}}),[l,g,h,s]),y=e((function(){if(l)return function(e,o){g(r(h,e),o),null==u||u(e,o)}}),[l,g,h,u]),x=e((function(){if(l)return function(e,r){M(),null==f||f(e,r)}}),[l,M,f]);return p(v,{center:n,data:t,arcGenerator:i,borderWidth:a,borderColor:d,transitionMode:b,onClick:L,onMouseEnter:R,onMouseMove:y,onMouseLeave:x})},k=["isInteractive","animate","motionConfig","theme","renderWrapper"],A=function(n){var t=n.data,i=n.id,a=void 0===i?F.id:i,s=n.value,u=void 0===s?F.value:s,v=n.innerRadius,h=void 0===v?F.innerRadius:v,m=n.renderRootNode,b=void 0===m?F.renderRootNode:m,C=n.valueFormat,g=n.cornerRadius,M=void 0===g?F.cornerRadius:g,L=n.layers,R=void 0===L?F.layers:L,y=n.colors,x=void 0===y?F.colors:y,k=n.colorBy,A=void 0===k?F.colorBy:k,G=n.inheritColorFromParent,P=void 0===G?F.inheritColorFromParent:G,w=n.childColor,B=void 0===w?F.childColor:w,N=n.borderWidth,j=void 0===N?F.borderWidth:N,E=n.borderColor,T=void 0===E?F.borderColor:E,X=n.margin,Y=n.width,K=n.height,S=n.enableArcLabels,V=void 0===S?F.enableArcLabels:S,H=n.arcLabel,z=void 0===H?F.arcLabel:H,D=n.arcLabelsRadiusOffset,q=void 0===D?F.arcLabelsRadiusOffset:D,J=n.arcLabelsSkipAngle,Q=void 0===J?F.arcLabelsSkipAngle:J,U=n.arcLabelsTextColor,Z=void 0===U?F.arcLabelsTextColor:U,$=n.arcLabelsComponent,_=n.defs,ee=void 0===_?F.defs:_,re=n.fill,oe=void 0===re?F.fill:re,ne=n.transitionMode,te=void 0===ne?F.transitionMode:ne,ie=n.isInteractive,ae=void 0===ie?F.isInteractive:ie,de=n.onClick,le=n.onMouseEnter,ce=n.onMouseLeave,se=n.onMouseMove,ue=n.tooltip,ve=void 0===ue?F.tooltip:ue,fe=n.role,he=void 0===fe?F.role:fe,me=d(Y,K,X),pe=me.innerHeight,be=me.innerWidth,Ce=me.margin,ge=me.outerHeight,Me=me.outerWidth,Le=e((function(){return{radius:Math.min(be,pe)/2,centerX:be/2,centerY:pe/2}}),[pe,be]),Re=Le.centerX,ye=Le.centerY,xe=Le.radius,Fe=I({data:t,id:a,value:u,valueFormat:C,radius:xe,cornerRadius:M,innerRadius:h,renderRootNode:b,colors:x,colorBy:A,inheritColorFromParent:P,childColor:B}),Ie=Fe.arcGenerator,We=Fe.nodes,Oe=l(ee,We,oe,{dataKey:".",colorKey:"color",targetKey:"fill"}),ke={arcs:null,arcLabels:null};R.includes("arcs")&&(ke.arcs=p(O,{center:[Re,ye],data:We,arcGenerator:Ie,borderWidth:j,borderColor:T,transitionMode:te,isInteractive:ae,tooltip:ve,onClick:de,onMouseEnter:le,onMouseLeave:ce,onMouseMove:se},"arcs")),V&&R.includes("arcLabels")&&(ke.arcLabels=p(f,{center:[Re,ye],data:We,label:z,radiusOffset:q,skipAngle:Q,textColor:Z,transitionMode:te,component:$},"arcLabels"));var Ae=W({nodes:We,arcGenerator:Ie,centerX:Re,centerY:ye,radius:xe});return p(c,{width:Me,height:ge,defs:Oe,margin:Ce,role:he,children:R.map((function(e,n){return void 0!==ke[e]?ke[e]:"function"==typeof e?p(o,{children:r(e,Ae)},n):null}))})},G=function(e){var r=e.isInteractive,o=void 0===r?F.isInteractive:r,n=e.animate,t=void 0===n?F.animate:n,i=e.motionConfig,d=void 0===i?F.motionConfig:i,l=e.theme,c=e.renderWrapper,s=function(e,r){if(null==e)return{};var o,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,k);return p(a,{isInteractive:o,animate:t,motionConfig:d,theme:l,renderWrapper:c,children:p(A,x({isInteractive:o},s))})},P=function(e){return p(s,{children:function(r){var o=r.width,n=r.height;return p(G,x({width:o,height:n},e))}})};export{P as ResponsiveSunburst,G as Sunburst,F as defaultProps,I as useSunburst,W as useSunburstLayerContext};
//# sourceMappingURL=nivo-sunburst.es.js.map
