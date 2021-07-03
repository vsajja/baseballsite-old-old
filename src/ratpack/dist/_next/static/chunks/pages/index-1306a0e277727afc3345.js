(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5548:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return j}});var n=t(5893),s=t(7294),a=t(7757),l=t.n(a),c=t(2137),i=t(6156),o=t(9669),d=t.n(o),u=t(9521);t(1134);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function h(e){var r=e.columns,t=e.data,s=(0,u.useTable)({columns:r,data:t,initialState:{pageIndex:0,pageSize:15}},u.usePagination),a=s.getTableProps,l=s.getTableBodyProps,c=s.headerGroups,i=s.prepareRow,o=s.page,d=s.canPreviousPage,p=s.canNextPage,h=s.pageOptions,m=s.pageCount,f=s.gotoPage,g=s.nextPage,b=s.previousPage,j=s.setPageSize,w=s.state,v=w.pageIndex,y=w.pageSize;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:"\n        table {\n          border:1px solid black;\n        }\n        tr {\n          border:1px solid black;\n        }\n        th {\n          border:1px solid black;\n        }\n        td {\n          border:1px solid black;\n        }\n      "}),(0,n.jsxs)("table",x(x({},a()),{},{children:[(0,n.jsx)("thead",{children:c.map((function(e){return(0,n.jsx)("tr",x(x({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,n.jsx)("th",x(x({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),(0,n.jsx)("tbody",x(x({},l()),{},{children:o.map((function(e,r){return i(e),(0,n.jsx)("tr",x(x({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,n.jsx)("td",x(x({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),(0,n.jsxs)("div",{className:"pagination",children:[(0,n.jsx)("button",{onClick:function(){return f(0)},disabled:!d,children:"<<"})," ",(0,n.jsx)("button",{onClick:function(){return b()},disabled:!d,children:"<"})," ",(0,n.jsx)("button",{onClick:function(){return g()},disabled:!p,children:">"})," ",(0,n.jsx)("button",{onClick:function(){return f(m-1)},disabled:!p,children:">>"})," ",(0,n.jsxs)("span",{children:["Page"," ",(0,n.jsxs)("strong",{children:[v+1," of ",h.length]})," "]}),(0,n.jsxs)("span",{children:["| Go to page:"," ",(0,n.jsx)("input",{type:"number",defaultValue:v+1,onChange:function(e){var r=e.target.value?Number(e.target.value)-1:0;f(r)},style:{width:"100px"}})]})," ",(0,n.jsx)("select",{value:y,onChange:function(e){j(Number(e.target.value))},children:[10,20,30,40,50].map((function(e){return(0,n.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})]})}function m(e){e.league;var r=(0,s.useState)(!0),t=r[0],a=r[1],i=s.useMemo((function(){return[{Header:"MLB Players",columns:[{Header:"Team",accessor:"mlbTeamId",Cell:function(e){return(0,n.jsx)("div",{className:"p-2",children:(0,n.jsx)("img",{height:34,src:"https://www.mlbstatic.com/team-logos/team-cap-on-light/"+e.value+".svg"})})}},{Header:"Player",accessor:"mlbPlayerId",Cell:function(e){return(0,n.jsx)("div",{className:"p-2",children:(0,n.jsx)("img",{height:34,style:{width:"100%",height:50},src:"https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/"+e.value+"/headshot/67/current"})})}},{Header:"First Name",accessor:"nameFirst"},{Header:"Last Name",accessor:"nameLast"},{Header:"Height (Ft)",accessor:"heightFt"},{Header:"Height (Inches)",accessor:"heightInches"},{Header:"Weight (lbs)",accessor:"weight"},{Header:"Country",accessor:"birthCountry"},{Header:"Bats",accessor:"bats"},{Header:"Throws",accessor:"throws"},{Header:"Jersey Number",accessor:"jerseyNumber"},{Header:"Position",accessor:"position"}]}]}),[]),o=(0,s.useState)([]),u=o[0],p=o[1];return(0,s.useEffect)((function(){function e(){return(e=(0,c.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("players").then((function(e){console.log(e.data),p(e.data),a(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded p-4",children:(0,n.jsx)("div",{className:"rounded-t mb-0 px-4 py-3 border-0",children:t?(0,n.jsx)("p",{children:"Loading Please wait..."}):(0,n.jsx)(h,{columns:i,data:u})})})})}function f(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{className:"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4",children:(0,n.jsx)("div",{className:"w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4",children:(0,n.jsx)("a",{className:"text-white text-xl uppercase lg:inline-block font-semibold",href:"/",onClick:function(e){return e.preventDefault()},children:"VINNY'S FANTASY BASEBALL"})})})})}function g(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"relative bg-black pb-32 pt-6 border border-black",children:(0,n.jsx)("div",{className:"px-4 md:px-10 mx-auto w-full",children:(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"flex flex-wrap",children:(0,n.jsx)("div",{className:"sm:w-full lg:w-1/12 xl:w-1/12 px-4"})})})})})})}function b(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("footer",{className:"relative pt-8 pb-6",children:(0,n.jsxs)("div",{className:"container mx-auto px-4",children:[(0,n.jsx)("div",{class:"bg-black h-1"}),(0,n.jsx)("div",{className:"flex flex-wrap items-center md:justify-between justify-center",children:(0,n.jsx)("div",{className:"w-full md:w-4/12 px-4 mx-auto text-center",children:(0,n.jsxs)("div",{className:"text-xl font-semibold py-1",children:["\xa9 ",(new Date).getFullYear()]})})})]})})})}function j(e){e.obj;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"flex flex-wrap mt-4",children:(0,n.jsx)(m,{league:"Players"})})})}m.defaultProps={league:"Major League Baseball",division:""},j.layout=function(e){var r=e.children;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)(f,{}),(0,n.jsx)(g,{}),(0,n.jsxs)("div",{className:"px-4 md:px-10 mx-auto w-full bg-emerald-200 -m-24 text-center",children:[r,(0,n.jsx)(b,{})]})]})})}},8581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5548)}])}},function(e){e.O(0,[595,774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);