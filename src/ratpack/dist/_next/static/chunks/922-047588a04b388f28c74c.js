(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{3391:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(f){o=!0,i=f}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})},7211:function(e,t,n){"use strict";function r(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof o(e).Element||e instanceof Element}function s(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function f(e){return"undefined"!==typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}function c(e){return e?(e.nodeName||"").toLowerCase():null}function u(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function l(e){return r(u(e)).left+i(e).scrollLeft}function p(e){return o(e).getComputedStyle(e)}function d(e){var t=p(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function h(e,t,n){void 0===n&&(n=!1);var a=u(t),f=r(e),p=s(t),h={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(p||!p&&!n)&&(("body"!==c(t)||d(a))&&(h=function(e){return e!==o(e)&&s(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:i(e);var t}(t)),s(t)?((m=r(t)).x+=t.clientLeft,m.y+=t.clientTop):a&&(m.x=l(a))),{x:f.left+h.scrollLeft-m.x,y:f.top+h.scrollTop-m.y,width:f.width,height:f.height}}function m(e){var t=r(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function v(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||(f(e)?e.host:null)||u(e)}function y(e){return["html","body","#document"].indexOf(c(e))>=0?e.ownerDocument.body:s(e)&&d(e)?e:y(v(e))}function g(e,t){var n;void 0===t&&(t=[]);var r=y(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),a=o(r),s=i?[a].concat(a.visualViewport||[],d(r)?r:[]):r,f=t.concat(s);return i?f:f.concat(g(v(s)))}function b(e){return["table","td","th"].indexOf(c(e))>=0}function w(e){return s(e)&&"fixed"!==p(e).position?e.offsetParent:null}function x(e){for(var t=o(e),n=w(e);n&&b(n)&&"static"===p(n).position;)n=w(n);return n&&("html"===c(n)||"body"===c(n)&&"static"===p(n).position)?t:n||function(e){for(var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=v(e);s(n)&&["html","body"].indexOf(c(n))<0;){var r=p(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}n.d(t,{fi:function(){return pe}});var O="top",E="bottom",j="right",L="left",k="auto",D=[O,E,j,L],M="start",A="end",P="viewport",C="popper",R=D.reduce((function(e,t){return e.concat([t+"-"+M,t+"-"+A])}),[]),S=[].concat(D,[k]).reduce((function(e,t){return e.concat([t,t+"-"+M,t+"-"+A])}),[]),B=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function H(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function W(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var T={placement:"bottom",modifiers:[],strategy:"absolute"};function I(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function q(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?T:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},T,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],f=!1,c={state:o,setOptions:function(n){u(),o.options=Object.assign({},i,o.options,n),o.scrollParents={reference:a(e)?g(e):e.contextElement?g(e.contextElement):[],popper:g(t)};var f=function(e){var t=H(e);return B.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:c,options:r}),f=function(){};s.push(a||f)}})),c.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,n=e.popper;if(I(t,n)){o.rects={reference:h(t,x(n),"fixed"===o.options.strategy),popper:m(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,u=void 0===s?{}:s,l=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:l,instance:c})||o)}else o.reset=!1,r=-1}}},update:W((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){u(),f=!0}};if(!I(e,t))return c;function u(){s.forEach((function(e){return e()})),s=[]}return c.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var N={passive:!0};var _={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,f=void 0===s||s,c=o(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,N)})),f&&c.addEventListener("resize",n.update,N),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,N)})),f&&c.removeEventListener("resize",n.update,N)}},data:{}};function U(e){return e.split("-")[0]}function V(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function K(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?U(o):null,a=o?V(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case O:t={x:s,y:n.y-r.height};break;case E:t={x:s,y:n.y+n.height};break;case j:t={x:n.x+n.width,y:f};break;case L:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?z(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case M:t[c]=t[c]-(n[u]/2-r[u]/2);break;case A:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var F={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=K({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},X=Math.max,Y=Math.min,Z=Math.round,$={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,d=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Z(Z(t*r)/r)||0,y:Z(Z(n*r)/r)||0}}(a):"function"===typeof l?l(a):a,h=d.x,m=void 0===h?0:h,v=d.y,y=void 0===v?0:v,g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),w=L,k=O,D=window;if(c){var M=x(n),A="clientHeight",P="clientWidth";M===o(n)&&"static"!==p(M=u(n)).position&&(A="scrollHeight",P="scrollWidth"),M=M,i===O&&(k=E,y-=M[A]-r.height,y*=f?1:-1),i===L&&(w=j,m-=M[P]-r.width,m*=f?1:-1)}var C,R=Object.assign({position:s},c&&$);return f?Object.assign({},R,((C={})[k]=b?"0":"",C[w]=g?"0":"",C.transform=(D.devicePixelRatio||1)<2?"translate("+m+"px, "+y+"px)":"translate3d("+m+"px, "+y+"px, 0)",C)):Object.assign({},R,((t={})[k]=b?y+"px":"",t[w]=g?m+"px":"",t.transform="",t))}var J={left:"right",right:"left",bottom:"top",top:"bottom"};function Q(e){return e.replace(/left|right|bottom|top/g,(function(e){return J[e]}))}var ee={start:"end",end:"start"};function te(e){return e.replace(/start|end/g,(function(e){return ee[e]}))}function ne(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&f(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function re(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oe(e,t){return t===P?re(function(e){var t=o(e),n=u(e),r=t.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,f=0;return r&&(i=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,f=r.offsetTop)),{width:i,height:a,x:s+l(e),y:f}}(e)):s(t)?function(e){var t=r(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):re(function(e){var t,n=u(e),r=i(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=X(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=X(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+l(e),c=-r.scrollTop;return"rtl"===p(o||n).direction&&(f+=X(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(u(e)))}function ie(e,t,n){var r="clippingParents"===t?function(e){var t=g(v(e)),n=["absolute","fixed"].indexOf(p(e).position)>=0&&s(e)?x(e):e;return a(n)?t.filter((function(e){return a(e)&&ne(e,n)&&"body"!==c(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],f=o.reduce((function(t,n){var r=oe(e,n);return t.top=X(r.top,t.top),t.right=Y(r.right,t.right),t.bottom=Y(r.bottom,t.bottom),t.left=X(r.left,t.left),t}),oe(e,i));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function ae(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function se(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function fe(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,s=n.boundary,f=void 0===s?"clippingParents":s,c=n.rootBoundary,l=void 0===c?P:c,p=n.elementContext,d=void 0===p?C:p,h=n.altBoundary,m=void 0!==h&&h,v=n.padding,y=void 0===v?0:v,g=ae("number"!==typeof y?y:se(y,D)),b=d===C?"reference":C,w=e.elements.reference,x=e.rects.popper,L=e.elements[m?b:d],k=ie(a(L)?L:L.contextElement||u(e.elements.popper),f,l),M=r(w),A=K({reference:M,element:x,strategy:"absolute",placement:i}),R=re(Object.assign({},x,A)),S=d===C?R:M,B={top:k.top-S.top+g.top,bottom:S.bottom-k.bottom+g.bottom,left:k.left-S.left+g.left,right:S.right-k.right+g.right},H=e.modifiersData.offset;if(d===C&&H){var W=H[i];Object.keys(B).forEach((function(e){var t=[j,E].indexOf(e)>=0?1:-1,n=[O,E].indexOf(e)>=0?"y":"x";B[e]+=W[n]*t}))}return B}function ce(e,t,n){return X(e,Y(t,n))}function ue(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function le(e){return[O,j,E,L].some((function(t){return e[t]>=0}))}var pe=q({defaultModifiers:[_,F,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,G(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,G(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];s(o)&&c(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&c(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var r=U(e),o=[L,O].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[L,j].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,y=U(v),g=f||(y===v||!h?[Q(v)]:function(e){if(U(e)===k)return[];var t=Q(e);return[te(e),t,te(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(U(n)===k?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?S:f,u=V(r),l=u?s?R:R.filter((function(e){return V(e)===u})):D,p=l.filter((function(e){return c.indexOf(e)>=0}));0===p.length&&(p=l);var d=p.reduce((function(t,n){return t[n]=fe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[U(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:l,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,A=new Map,P=!0,C=b[0],B=0;B<b.length;B++){var H=b[B],W=U(H),T=V(H)===M,I=[O,E].indexOf(W)>=0,q=I?"width":"height",N=fe(t,{placement:H,boundary:u,rootBoundary:l,altBoundary:p,padding:c}),_=I?T?j:L:T?E:O;w[q]>x[q]&&(_=Q(_));var z=Q(_),K=[];if(i&&K.push(N[W]<=0),s&&K.push(N[_]<=0,N[z]<=0),K.every((function(e){return e}))){C=H,P=!1;break}A.set(H,K)}if(P)for(var F=function(e){var t=b.find((function(t){var n=A.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},X=h?3:1;X>0;X--){if("break"===F(X))break}t.placement!==C&&(t.modifiersData[r]._skip=!0,t.placement=C,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,l=n.padding,p=n.tether,d=void 0===p||p,h=n.tetherOffset,v=void 0===h?0:h,y=fe(t,{boundary:f,rootBoundary:c,padding:l,altBoundary:u}),g=U(t.placement),b=V(t.placement),w=!b,k=z(g),D="x"===k?"y":"x",A=t.modifiersData.popperOffsets,P=t.rects.reference,C=t.rects.popper,R="function"===typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,S={x:0,y:0};if(A){if(i||s){var B="y"===k?O:L,H="y"===k?E:j,W="y"===k?"height":"width",T=A[k],I=A[k]+y[B],q=A[k]-y[H],N=d?-C[W]/2:0,_=b===M?P[W]:C[W],K=b===M?-C[W]:-P[W],F=t.elements.arrow,Z=d&&F?m(F):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=$[B],J=$[H],Q=ce(0,P[W],Z[W]),ee=w?P[W]/2-N-Q-G-R:_-Q-G-R,te=w?-P[W]/2+N+Q+J+R:K+Q+J+R,ne=t.elements.arrow&&x(t.elements.arrow),re=ne?"y"===k?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][k]:0,ie=A[k]+ee-oe-re,ae=A[k]+te-oe;if(i){var se=ce(d?Y(I,ie):I,T,d?X(q,ae):q);A[k]=se,S[k]=se-T}if(s){var ue="x"===k?O:L,le="x"===k?E:j,pe=A[D],de=pe+y[ue],he=pe-y[le],me=ce(d?Y(de,ie):de,pe,d?X(he,ae):he);A[D]=me,S[D]=me-pe}}t.modifiersData[r]=S}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=U(n.placement),f=z(s),c=[L,j].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return ae("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:se(e,D))}(o.padding,n),l=m(i),p="y"===f?O:L,d="y"===f?E:j,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],v=a[f]-n.rects.reference[f],y=x(i),g=y?"y"===f?y.clientHeight||0:y.clientWidth||0:0,b=h/2-v/2,w=u[p],k=g-l[c]-u[d],M=g/2-l[c]/2+b,A=ce(w,M,k),P=f;n.modifiersData[r]=((t={})[P]=A,t.centerOffset=A-M,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ne(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=fe(t,{elementContext:"reference"}),s=fe(t,{altBoundary:!0}),f=ue(a,r),c=ue(s,o,i),u=le(f),l=le(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]})},6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var i=o(n(7294)),a=n(1689),s=n(2441),f=n(5749),c={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),o=n&&n.asPath||"/",l=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):s||i}}),[o,e.href,e.as]),p=l.href,d=l.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=i.Children.only(h),w=b&&"object"===typeof b&&b.ref,x=(0,f.useIntersection)({rootMargin:"200px"}),O=r(x,2),E=O[0],j=O[1],L=i.default.useCallback((function(e){E(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,E]);(0,i.useEffect)((function(){var e=j&&t&&(0,a.isLocalURL)(p),r="undefined"!==typeof g?g:n&&n.locale,o=c[p+"%"+d+(r?"%"+r:"")];e&&!o&&u(n,p,d,{locale:r})}),[d,p,j,g,t,n]);var k={ref:L,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,f){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:f,scroll:s}))}(e,n,p,d,m,v,y,g)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(n,p,d,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var D="undefined"!==typeof g?g:n&&n.locale,M=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,D,n&&n.locales,n&&n.domainLocales);k.href=M||(0,a.addBasePath)((0,a.addLocale)(d,D,n&&n.defaultLocale))}return i.default.cloneElement(b,k)};t.default=l},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,f=(0,o.useRef)(),c=(0,o.useState)(!1),u=r(c,2),l=u[0],p=u[1],d=(0,o.useCallback)((function(e){f.current&&(f.current(),f.current=void 0),n||l||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!a&&!l){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[l]),[d,l]};var o=n(7294),i=n(8391),a="undefined"!==typeof IntersectionObserver;var s=new Map},1664:function(e,t,n){e.exports=n(6071)}}]);