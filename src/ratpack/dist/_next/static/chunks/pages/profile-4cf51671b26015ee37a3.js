(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{3391:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,l=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(o){a=!0,l=o}finally{try{n||null==i.return||i.return()}finally{if(a)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return a}})},6071:function(e,t,r){"use strict";var n=r(3038),a=r(862);t.default=void 0;var l=a(r(7294)),s=r(1689),i=r(2441),o=r(5749),c={};function u(e,t,r,n){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,i.useRouter)(),a=r&&r.asPath||"/",f=l.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),r=n(t,2),l=r[0],i=r[1];return{href:l,as:e.as?(0,s.resolveHref)(a,e.as):i||l}}),[a,e.href,e.as]),d=f.href,x=f.as,m=e.children,p=e.replace,b=e.shallow,h=e.scroll,v=e.locale;"string"===typeof m&&(m=l.default.createElement("a",null,m));var y=l.Children.only(m),g=y&&"object"===typeof y&&y.ref,j=(0,o.useIntersection)({rootMargin:"200px"}),w=n(j,2),N=w[0],k=w[1],G=l.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);(0,l.useEffect)((function(){var e=k&&t&&(0,s.isLocalURL)(d),n="undefined"!==typeof v?v:r&&r.locale,a=c[d+"%"+x+(n?"%"+n:"")];e&&!a&&u(r,d,x,{locale:n})}),[x,d,k,v,t,r]);var C={ref:G,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,l,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:l,locale:o,scroll:i}))}(e,r,d,x,p,b,h,v)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(r,d,x,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var E="undefined"!==typeof v?v:r&&r.locale,M=r&&r.isLocaleDomain&&(0,s.getDomainLocale)(x,E,r&&r.locales,r&&r.domainLocales);C.href=M||(0,s.addBasePath)((0,s.addLocale)(x,E,r&&r.defaultLocale))}return l.default.cloneElement(y,C)};t.default=f},5749:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!s,o=(0,a.useRef)(),c=(0,a.useState)(!1),u=n(c,2),f=u[0],d=u[1],x=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),r||f||e&&e.tagName&&(o.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,l=n.observer,s=n.elements;return s.set(e,t),l.observe(e),function(){s.delete(e),l.unobserve(e),0===s.size&&(l.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){if(!s&&!f){var e=(0,l.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,l.cancelIdleCallback)(e)}}}),[f]),[x,f]};var a=r(7294),l=r(8391),s="undefined"!==typeof IntersectionObserver;var i=new Map},8573:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),a=r(7294),l=r(3391),s=r(1664);function i(e){var t=a.useState(!1),r=(0,l.Z)(t,2),i=r[0],o=r[1];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{className:"top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-1 navbar-expand-lg bg-black hadow",children:(0,n.jsxs)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:[(0,n.jsxs)("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("a",{className:"text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",href:"#pablo",children:(0,n.jsx)("i",{className:"fas fa-2x fa-baseball-ball text-white"})})}),(0,n.jsx)("button",{className:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return o(!i)},children:(0,n.jsx)("i",{className:"fas fa-bars"})})]}),(0,n.jsx)("div",{className:"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"+(i?" block":" hidden"),id:"example-navbar-warning",children:(0,n.jsx)("ul",{className:"flex flex-col lg:flex-row list-none mr-auto"})})]})})})}function o(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("footer",{className:"relative pt-8 pb-6",children:(0,n.jsxs)("div",{className:"container mx-auto px-4",children:[(0,n.jsx)("hr",{className:"my-6 border-blueGray-300"}),(0,n.jsx)("div",{className:"flex flex-wrap items-center md:justify-between justify-center",children:(0,n.jsx)("div",{className:"w-full md:w-4/12 px-4 mx-auto text-center",children:(0,n.jsxs)("div",{className:"text-sm font-semibold py-1",children:["\xa9 ",(new Date).getFullYear()]})})})]})})})}r(3318),r(4583);var c=r(2098),u=r(3377);function f(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{fixed:!0}),(0,n.jsxs)("main",{className:"profile-page",children:[(0,n.jsxs)("section",{className:"relative block h-350-px",children:[(0,n.jsx)("div",{className:"absolute top-0 w-full h-full bg-center bg-cover",style:{backgroundImage:"url('')"},children:(0,n.jsx)("span",{id:"blackOverlay",className:"w-full h-full absolute opacity-50 bg-black"})}),(0,n.jsx)("div",{className:"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16",style:{transform:"translateZ(0)"},children:(0,n.jsx)("svg",{className:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:(0,n.jsx)("polygon",{className:"text-blueGray-200 fill-current",points:"2560 0 2560 100 0 100"})})})]}),(0,n.jsx)("section",{className:"relative py-16 bg-blueGray-200",children:(0,n.jsx)("div",{className:"container mx-auto px-4",children:(0,n.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64",children:(0,n.jsxs)("div",{className:"px-6",children:[(0,n.jsxs)("div",{className:"flex flex-wrap justify-center",children:[(0,n.jsx)("div",{className:"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center",children:(0,n.jsx)("div",{className:"relative"})}),(0,n.jsx)("div",{className:"w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center",children:(0,n.jsx)("div",{className:"py-6 px-3 mt-32 sm:mt-0",children:(0,n.jsx)("button",{className:"bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150",type:"button",children:"Connect"})})}),(0,n.jsx)("div",{className:"w-full lg:w-4/12 px-4 lg:order-1",children:(0,n.jsxs)("div",{className:"flex justify-center py-4 lg:pt-4 pt-8",children:[(0,n.jsxs)("div",{className:"mr-4 p-3 text-center",children:[(0,n.jsx)("span",{className:"text-xl font-bold block uppercase tracking-wide text-blueGray-600",children:"22"}),(0,n.jsx)("span",{className:"text-sm text-blueGray-400",children:"Friends"})]}),(0,n.jsxs)("div",{className:"mr-4 p-3 text-center",children:[(0,n.jsx)("span",{className:"text-xl font-bold block uppercase tracking-wide text-blueGray-600",children:"10"}),(0,n.jsx)("span",{className:"text-sm text-blueGray-400",children:"Photos"})]}),(0,n.jsxs)("div",{className:"lg:mr-4 p-3 text-center",children:[(0,n.jsx)("span",{className:"text-xl font-bold block uppercase tracking-wide text-blueGray-600",children:"89"}),(0,n.jsx)("span",{className:"text-sm text-blueGray-400",children:"Comments"})]})]})})]}),(0,n.jsxs)("div",{className:"text-center mt-12",children:[(0,n.jsx)("h3",{className:"text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2",children:"Jenna Stones"}),(0,n.jsxs)("div",{className:"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase",children:[(0,n.jsx)("i",{className:"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"})," ","Los Angeles, California"]}),(0,n.jsxs)("div",{className:"mb-2 text-blueGray-600 mt-10",children:[(0,n.jsx)("i",{className:"fas fa-briefcase mr-2 text-lg text-blueGray-400"}),"Solution Manager - Creative Tim Officer"]}),(0,n.jsxs)("div",{className:"mb-2 text-blueGray-600",children:[(0,n.jsx)("i",{className:"fas fa-university mr-2 text-lg text-blueGray-400"}),"University of Computer Science"]})]}),(0,n.jsx)("div",{className:"mt-10 py-10 border-t border-blueGray-200 text-center",children:(0,n.jsx)("div",{className:"flex flex-wrap justify-center",children:(0,n.jsxs)("div",{className:"w-full lg:w-9/12 px-4",children:[(0,n.jsx)("p",{className:"mb-4 text-lg leading-relaxed text-blueGray-700",children:"An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range."}),(0,n.jsx)("a",{href:"#pablo",className:"font-normal text-lightBlue-500",onClick:function(e){return e.preventDefault()},children:"Show more"})]})})}),(0,n.jsx)("div",{className:"w-full xl:w-8/12 mb-12 xl:mb-0 px-4",children:(0,n.jsx)(c.Z,{})}),(0,n.jsx)("div",{className:"w-full xl:w-4/12 px-4",children:(0,n.jsx)(u.Z,{})})]})})})})]}),(0,n.jsx)(o,{})]})}},3962:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return r(8573)}])},1664:function(e,t,r){e.exports=r(6071)}},function(e){e.O(0,[698,885,762,66,774,888,179],(function(){return t=3962,e(e.s=t);var t}));var t=e.O();_N_E=t}]);