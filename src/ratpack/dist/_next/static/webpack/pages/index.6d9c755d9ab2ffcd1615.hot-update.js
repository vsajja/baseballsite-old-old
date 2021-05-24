self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Navbars/IndexNavbar.js */ "./components/Navbars/IndexNavbar.js");
/* harmony import */ var components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Footers/Footer.js */ "./components/Footers/Footer.js");
/* harmony import */ var components_Cards_CardBarChart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Cards/CardBarChart.js */ "./components/Cards/CardBarChart.js");
/* harmony import */ var components_Cards_CardLineChart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Cards/CardLineChart.js */ "./components/Cards/CardLineChart.js");
/* harmony import */ var components_Cards_CardPageVisits_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Cards/CardPageVisits.js */ "./components/Cards/CardPageVisits.js");
/* harmony import */ var components_Cards_CardProfile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Cards/CardProfile.js */ "./components/Cards/CardProfile.js");
/* harmony import */ var components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Cards/CardStats.js */ "./components/Cards/CardStats.js");
/* harmony import */ var components_Cards_CardSocialTraffic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Cards/CardSocialTraffic.js */ "./components/Cards/CardSocialTraffic.js");
/* harmony import */ var components_Cards_CardSettings_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Cards/CardSettings.js */ "./components/Cards/CardSettings.js");
/* harmony import */ var namor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! namor */ "./node_modules/namor/dist/index.js");
/* harmony import */ var namor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(namor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\git\\baseballsite\\portal\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/jsx-no-target-blank */














 // Create a default prop getter

const defaultPropGetter = () => ({}); // Expose some prop getters for headers, rows and cells, or more if you want!


function Table({
  columns,
  data,
  getHeaderProps = defaultPropGetter,
  getColumnProps = defaultPropGetter,
  getRowProps = defaultPropGetter,
  getCellProps = defaultPropGetter
}) {
  _s();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_13__.useTable)({
    columns,
    data
  }); // // Render the UI for your table
  // return (
  //   <>
  //     {/* <input
  //       value={filterInput}
  //       onChange={handleFilterChange}
  //       placeholder={"Search player"}
  //     /> */}
  //     <table className="border" {...getTableProps()}>
  //       <thead>
  //         {headerGroups.map(headerGroup => (
  //           <tr className="border bg-black text-white" {...headerGroup.getHeaderGroupProps()}>
  //             {headerGroup.headers.map(column => (
  //               <th
  //                 {...column.getHeaderProps(column.getSortByToggleProps())}
  //                 className={
  //                   column.isSorted
  //                     ? column.isSortedDesc
  //                       ? "sort-desc"
  //                       : "sort-asc"
  //                     : ""
  //                 }
  //               >
  //                 {column.render("Header")}
  //               </th>
  //             ))}
  //           </tr>
  //         ))}
  //       </thead>
  //       <tbody {...getTableBodyProps()}>
  //         {rows.map((row, i) => {
  //           prepareRow(row);
  //           return (
  //             <tr {...row.getRowProps()}>
  //               {row.cells.map(cell => {
  //                 return (
  //                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
  //                 );
  //               })}
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   </>
  // );

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
      children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({
        className: "border bg-black text-white"
      }, headerGroup.getHeaderGroupProps()), {}, {
        children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps([{
          className: column.className,
          style: column.style
        }, getColumnProps(column), getHeaderProps(column)])), {}, {
          children: column.render('Header')
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }, this))
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
      children: rows.map((row, i) => {
        prepareRow(row);
        return (
          /*#__PURE__*/
          // Merge user row props in
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, row.getRowProps(getRowProps(row))), {}, {
            children: row.cells.map(cell => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", _objectSpread(_objectSpread({}, cell.getCellProps([{
                className: cell.column.className,
                style: cell.column.style
              }, getColumnProps(cell.column), getCellProps(cell)])), {}, {
                children: cell.render('Cell')
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 19
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)
        );
      })
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, this);
} // "player": {
//   "playerName": "Nick Castellanos",
//   "mlbPlayerId": 592206,
//   "position": "RF",
//   "rank": 1,
//   "gamesPlayed": 41,
//   "hits": 58,
//   "atBats": "163",
//   "runs": 33,
//   "homeRuns": 12,
//   "rbi": 30,
//   "stolenBases": 1,
//   "avg": ".356",
//   "obp": ".417",
//   "slug": ".669",
//   "ops": "1.085"
// }
// 43G 39/135AB 24R 5HR 12RBI 2SB .289AVG .358 OBP .489 SLG .846 OPS


_s(Table, "I30oMK7YX0QNq2cykcLOZcUVqsc=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_13__.useTable];
});

_c = Table;
function Index() {
  _s2();

  const hittingCols = (0,react__WEBPACK_IMPORTED_MODULE_14__.useMemo)(() => [{
    Header: "Hitting Leaders",
    columns: [// {
    //   Header: "",
    //   accessor: "mlbPlayerId"
    // },
    {
      Header: "Rank",
      accessor: "rank",
      style: {
        fontWeight: 'bolder'
      }
    }, {
      Header: "Name",
      accessor: "playerName",
      style: {
        fontWeight: 'bolder'
      }
    }, {
      Header: "Position",
      accessor: "position"
    }]
  }, {
    Header: "Stats",
    columns: [{
      Header: "Games",
      accessor: "gamesPlayed"
    }, {
      Header: "AB",
      accessor: "atBats"
    }, {
      Header: "R",
      accessor: "runs"
    }, {
      Header: "HR",
      accessor: "homeRuns"
    }, {
      Header: "RBI",
      accessor: "rbi"
    }, {
      Header: "SB",
      accessor: "stolenBases"
    }, {
      Header: "AVG",
      accessor: "avg"
    }, {
      Header: "OBP",
      accessor: "obp",
      Cell: obp => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: obp.value > 0.4 ? "bg-red-500 text-white" : "",
        children: ops.value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 15
      }, this)
    }, {
      Header: "OPS",
      accessor: "ops",
      Cell: ops => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: ops.value > 0.9 ? "bg-red-500 text-white" : "",
        children: ops.value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 15
      }, this)
    }]
  }], []);
  const {
    0: hittingData,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(() => {
    (async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_15___default()("https://baseballsite.herokuapp.com/leaders"); // const result = await axios("http://localhost:5051/leaders");

      setData(result.data);
    })();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_3__.default, {
      fixed: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container px-4 py-36 mx-auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-wrap",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
            columns: hittingCols,
            data: hittingData
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Index, "C7m7QIrbA3lU/7OJcdHLkLrWsVA=");

_c2 = Index;

var _c, _c2;

$RefreshReg$(_c, "Table");
$RefreshReg$(_c2, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BHZXR0ZXIiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZ2V0SGVhZGVyUHJvcHMiLCJnZXRDb2x1bW5Qcm9wcyIsImdldFJvd1Byb3BzIiwiZ2V0Q2VsbFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJ1c2VUYWJsZSIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsInJlbmRlciIsInJvdyIsImkiLCJjZWxscyIsImNlbGwiLCJJbmRleCIsImhpdHRpbmdDb2xzIiwidXNlTWVtbyIsIkhlYWRlciIsImFjY2Vzc29yIiwiZm9udFdlaWdodCIsIkNlbGwiLCJvYnAiLCJ2YWx1ZSIsIm9wcyIsImhpdHRpbmdEYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVzdWx0IiwiYXhpb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtDQUdBOztBQUNBLE1BQU1BLGlCQUFpQixHQUFHLE9BQU8sRUFBUCxDQUExQixDLENBRUE7OztBQUNBLFNBQVNDLEtBQVQsQ0FBZTtBQUNiQyxTQURhO0FBRWJDLE1BRmE7QUFHYkMsZ0JBQWMsR0FBR0osaUJBSEo7QUFJYkssZ0JBQWMsR0FBR0wsaUJBSko7QUFLYk0sYUFBVyxHQUFHTixpQkFMRDtBQU1iTyxjQUFZLEdBQUdQO0FBTkYsQ0FBZixFQU9HO0FBQUE7O0FBQ0QsUUFBTTtBQUNKUSxpQkFESTtBQUVKQyxx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OERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRjtBQUFBLGtCQURGO0FBOEJEOztJQTdIdUJWLEs7O01BQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmQ5Yzc1NWQ5YWIyZmZjZDE2MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby10YXJnZXQtYmxhbmsgKi9cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IEluZGV4TmF2YmFyIGZyb20gXCJjb21wb25lbnRzL05hdmJhcnMvSW5kZXhOYXZiYXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVycy9Gb290ZXIuanNcIjtcblxuaW1wb3J0IENhcmRCYXJDaGFydCBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkQmFyQ2hhcnQuanNcIjtcbmltcG9ydCBDYXJkTGluZUNoYXJ0IGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRMaW5lQ2hhcnQuanNcIjtcbmltcG9ydCBDYXJkUGFnZVZpc2l0cyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkUGFnZVZpc2l0cy5qc1wiO1xuaW1wb3J0IENhcmRQcm9maWxlIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRQcm9maWxlLmpzXCI7XG5pbXBvcnQgQ2FyZFN0YXRzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTdGF0cy5qc1wiO1xuaW1wb3J0IENhcmRTb2NpYWxUcmFmZmljIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTb2NpYWxUcmFmZmljLmpzXCI7XG5cbmltcG9ydCBDYXJkU2V0dGluZ3MgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFNldHRpbmdzLmpzXCI7XG4gXG5pbXBvcnQgbmFtb3IgZnJvbSAnbmFtb3InXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlR3JvdXBCeSwgdXNlRXhwYW5kZWQsIHVzZUZpbHRlcnMsIHVzZVNvcnRCeSB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4vLyBDcmVhdGUgYSBkZWZhdWx0IHByb3AgZ2V0dGVyXG5jb25zdCBkZWZhdWx0UHJvcEdldHRlciA9ICgpID0+ICh7fSlcblxuLy8gRXhwb3NlIHNvbWUgcHJvcCBnZXR0ZXJzIGZvciBoZWFkZXJzLCByb3dzIGFuZCBjZWxscywgb3IgbW9yZSBpZiB5b3Ugd2FudCFcbmZ1bmN0aW9uIFRhYmxlKHtcbiAgY29sdW1ucyxcbiAgZGF0YSxcbiAgZ2V0SGVhZGVyUHJvcHMgPSBkZWZhdWx0UHJvcEdldHRlcixcbiAgZ2V0Q29sdW1uUHJvcHMgPSBkZWZhdWx0UHJvcEdldHRlcixcbiAgZ2V0Um93UHJvcHMgPSBkZWZhdWx0UHJvcEdldHRlcixcbiAgZ2V0Q2VsbFByb3BzID0gZGVmYXVsdFByb3BHZXR0ZXIsXG59KSB7XG4gIGNvbnN0IHtcbiAgICBnZXRUYWJsZVByb3BzLFxuICAgIGdldFRhYmxlQm9keVByb3BzLFxuICAgIGhlYWRlckdyb3VwcyxcbiAgICByb3dzLFxuICAgIHByZXBhcmVSb3csXG4gIH0gPSB1c2VUYWJsZSh7XG4gICAgY29sdW1ucyxcbiAgICBkYXRhLFxuICB9KVxuXG4gIC8vIC8vIFJlbmRlciB0aGUgVUkgZm9yIHlvdXIgdGFibGVcbiAgLy8gcmV0dXJuIChcbiAgLy8gICA8PlxuICAvLyAgICAgey8qIDxpbnB1dFxuICAvLyAgICAgICB2YWx1ZT17ZmlsdGVySW5wdXR9XG4gIC8vICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9XG4gIC8vICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlYXJjaCBwbGF5ZXJcIn1cbiAgLy8gICAgIC8+ICovfVxuICAvLyAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJvcmRlclwiIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuICAvLyAgICAgICA8dGhlYWQ+XG4gIC8vICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAvLyAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlciBiZy1ibGFjayB0ZXh0LXdoaXRlXCIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gIC8vICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAvLyAgICAgICAgICAgICAgIDx0aFxuICAvLyAgICAgICAgICAgICAgICAgey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9XG4gIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAvLyAgICAgICAgICAgICAgICAgICBjb2x1bW4uaXNTb3J0ZWRcbiAgLy8gICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgID8gXCJzb3J0LWRlc2NcIlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgOiBcInNvcnQtYXNjXCJcbiAgLy8gICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgLy8gICAgICAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgICAgICA+XG4gIC8vICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcihcIkhlYWRlclwiKX1cbiAgLy8gICAgICAgICAgICAgICA8L3RoPlxuICAvLyAgICAgICAgICAgICApKX1cbiAgLy8gICAgICAgICAgIDwvdHI+XG4gIC8vICAgICAgICAgKSl9XG4gIC8vICAgICAgIDwvdGhlYWQ+XG4gIC8vICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gIC8vICAgICAgICAge3Jvd3MubWFwKChyb3csIGkpID0+IHtcbiAgLy8gICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcbiAgLy8gICAgICAgICAgIHJldHVybiAoXG4gIC8vICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuICAvLyAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xuICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgLy8gICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC5yZW5kZXIoXCJDZWxsXCIpfTwvdGQ+XG4gIC8vICAgICAgICAgICAgICAgICApO1xuICAvLyAgICAgICAgICAgICAgIH0pfVxuICAvLyAgICAgICAgICAgICA8L3RyPlxuICAvLyAgICAgICAgICAgKTtcbiAgLy8gICAgICAgICB9KX1cbiAgLy8gICAgICAgPC90Ym9keT5cbiAgLy8gICAgIDwvdGFibGU+XG4gIC8vICAgPC8+XG4gIC8vICk7XG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgey4uLmdldFRhYmxlUHJvcHMoKX0+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWJsYWNrIHRleHQtd2hpdGVcIiB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cbiAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gYW4gYXJyYXkgb2YgcHJvcCBvYmplY3RzIGFuZCByZWFjdC10YWJsZSB3aWxsIG1lcmdlIHRoZW0gYXBwcm9wcmlhdGVseVxuICAgICAgICAgICAgICAgIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBjb2x1bW4uc3R5bGUsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZ2V0Q29sdW1uUHJvcHMoY29sdW1uKSxcbiAgICAgICAgICAgICAgICAgIGdldEhlYWRlclByb3BzKGNvbHVtbiksXG4gICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XG4gICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApKX1cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuICAgICAgICB7cm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgIHByZXBhcmVSb3cocm93KVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAvLyBNZXJnZSB1c2VyIHJvdyBwcm9wcyBpblxuICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoZ2V0Um93UHJvcHMocm93KSl9PlxuICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiBhbiBhcnJheSBvZiBwcm9wIG9iamVjdHMgYW5kIHJlYWN0LXRhYmxlIHdpbGwgbWVyZ2UgdGhlbSBhcHByb3ByaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgIHsuLi5jZWxsLmdldENlbGxQcm9wcyhbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjZWxsLmNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogY2VsbC5jb2x1bW4uc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBnZXRDb2x1bW5Qcm9wcyhjZWxsLmNvbHVtbiksXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q2VsbFByb3BzKGNlbGwpLFxuICAgICAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NlbGwucmVuZGVyKCdDZWxsJyl9XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59XG5cbi8vIFwicGxheWVyXCI6IHtcbi8vICAgXCJwbGF5ZXJOYW1lXCI6IFwiTmljayBDYXN0ZWxsYW5vc1wiLFxuLy8gICBcIm1sYlBsYXllcklkXCI6IDU5MjIwNixcbi8vICAgXCJwb3NpdGlvblwiOiBcIlJGXCIsXG4vLyAgIFwicmFua1wiOiAxLFxuLy8gICBcImdhbWVzUGxheWVkXCI6IDQxLFxuLy8gICBcImhpdHNcIjogNTgsXG4vLyAgIFwiYXRCYXRzXCI6IFwiMTYzXCIsXG4vLyAgIFwicnVuc1wiOiAzMyxcbi8vICAgXCJob21lUnVuc1wiOiAxMixcbi8vICAgXCJyYmlcIjogMzAsXG4vLyAgIFwic3RvbGVuQmFzZXNcIjogMSxcbi8vICAgXCJhdmdcIjogXCIuMzU2XCIsXG4vLyAgIFwib2JwXCI6IFwiLjQxN1wiLFxuLy8gICBcInNsdWdcIjogXCIuNjY5XCIsXG4vLyAgIFwib3BzXCI6IFwiMS4wODVcIlxuLy8gfVxuXG4vLyA0M0cgMzkvMTM1QUIgMjRSIDVIUiAxMlJCSSAyU0IgLjI4OUFWRyAuMzU4IE9CUCAuNDg5IFNMRyAuODQ2IE9QU1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgaGl0dGluZ0NvbHMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIkhpdHRpbmcgTGVhZGVyc1wiLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgSGVhZGVyOiBcIlwiLFxuICAgICAgICAgIC8vICAgYWNjZXNzb3I6IFwibWxiUGxheWVySWRcIlxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlJhbmtcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInJhbmtcIixcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiTmFtZVwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicGxheWVyTmFtZVwiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJQb3NpdGlvblwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicG9zaXRpb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIlN0YXRzXCIsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiR2FtZXNcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcImdhbWVzUGxheWVkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJBQlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiYXRCYXRzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJSXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJydW5zXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJIUlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiaG9tZVJ1bnNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlJCSVwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicmJpXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJTQlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwic3RvbGVuQmFzZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkFWR1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiYXZnXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJPQlBcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcIm9icFwiLFxuICAgICAgICAgICAgQ2VsbDogb2JwID0+IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtvYnAudmFsdWUgPiAwLjQgPyBcImJnLXJlZC01MDAgdGV4dC13aGl0ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAge29wcy52YWx1ZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIk9QU1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwib3BzXCIsXG4gICAgICAgICAgICBDZWxsOiBvcHMgPT4gKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e29wcy52YWx1ZSA+IDAuOSA/IFwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICB7b3BzLnZhbHVlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IFtoaXR0aW5nRGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXCJodHRwczovL2Jhc2ViYWxsc2l0ZS5oZXJva3VhcHAuY29tL2xlYWRlcnNcIik7XG4gICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MS9sZWFkZXJzXCIpO1xuICAgICAgc2V0RGF0YShyZXN1bHQuZGF0YSk7XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbmRleE5hdmJhciBmaXhlZCAvPlxuXG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgcHktMzYgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBmbGV4LTFcIj5cbiAgICAgICAgICAgIHsvKiA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiSG9tZSBSdW5zXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJSb25hbGQgQWN1w7FhIEpyLlwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjE1IEhSXCJcbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPFRhYmxlIFxuICAgICAgICAgICAgICBjb2x1bW5zPXtoaXR0aW5nQ29sc30gXG4gICAgICAgICAgICAgIGRhdGE9e2hpdHRpbmdEYXRhfSBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9