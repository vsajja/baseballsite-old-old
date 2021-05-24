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
      accessor: "avg",
      Cell: avg => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: avg.value > 0.4 ? "bg-red-500 text-white" : "",
        children: avg.value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 15
      }, this)
    }, {
      Header: "OBP",
      accessor: "obp",
      Cell: obp => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: obp.value > 0.4 ? "bg-red-500 text-white" : "",
        children: obp.value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
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
        lineNumber: 247,
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
      lineNumber: 270,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 274,
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
            lineNumber: 284,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 295,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BHZXR0ZXIiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZ2V0SGVhZGVyUHJvcHMiLCJnZXRDb2x1bW5Qcm9wcyIsImdldFJvd1Byb3BzIiwiZ2V0Q2VsbFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJ1c2VUYWJsZSIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsInJlbmRlciIsInJvdyIsImkiLCJjZWxscyIsImNlbGwiLCJJbmRleCIsImhpdHRpbmdDb2xzIiwidXNlTWVtbyIsIkhlYWRlciIsImFjY2Vzc29yIiwiZm9udFdlaWdodCIsIkNlbGwiLCJhdmciLCJ2YWx1ZSIsIm9icCIsIm9wcyIsImhpdHRpbmdEYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVzdWx0IiwiYXhpb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtDQUdBOztBQUNBLE1BQU1BLGlCQUFpQixHQUFHLE9BQU8sRUFBUCxDQUExQixDLENBRUE7OztBQUNBLFNBQVNDLEtBQVQsQ0FBZTtBQUNiQyxTQURhO0FBRWJDLE1BRmE7QUFHYkMsZ0JBQWMsR0FBR0osaUJBSEo7QUFJYkssZ0JBQWMsR0FBR0wsaUJBSko7QUFLYk0sYUFBVyxHQUFHTixpQkFMRDtBQU1iTyxjQUFZLEdBQUdQO0FBTkYsQ0FBZixFQU9HO0FBQUE7O0FBQ0QsUUFBTTtBQUNKUSxpQkFESTtB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QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBdUJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkYsZUF3QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRixlQTBCRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGO0FBQUEsa0JBREY7QUE4QkQ7O0lBbEl1QlgsSzs7TUFBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOTMxYTE5ODViZDhkOGRmZTRiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LW5vLXRhcmdldC1ibGFuayAqL1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgSW5kZXhOYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFycy9JbmRleE5hdmJhci5qc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXJzL0Zvb3Rlci5qc1wiO1xuXG5pbXBvcnQgQ2FyZEJhckNoYXJ0IGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRCYXJDaGFydC5qc1wiO1xuaW1wb3J0IENhcmRMaW5lQ2hhcnQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZExpbmVDaGFydC5qc1wiO1xuaW1wb3J0IENhcmRQYWdlVmlzaXRzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRQYWdlVmlzaXRzLmpzXCI7XG5pbXBvcnQgQ2FyZFByb2ZpbGUgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFByb2ZpbGUuanNcIjtcbmltcG9ydCBDYXJkU3RhdHMgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFN0YXRzLmpzXCI7XG5pbXBvcnQgQ2FyZFNvY2lhbFRyYWZmaWMgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFNvY2lhbFRyYWZmaWMuanNcIjtcblxuaW1wb3J0IENhcmRTZXR0aW5ncyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkU2V0dGluZ3MuanNcIjtcbiBcbmltcG9ydCBuYW1vciBmcm9tICduYW1vcidcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VHcm91cEJ5LCB1c2VFeHBhbmRlZCwgdXNlRmlsdGVycywgdXNlU29ydEJ5IH0gZnJvbSAncmVhY3QtdGFibGUnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIENyZWF0ZSBhIGRlZmF1bHQgcHJvcCBnZXR0ZXJcbmNvbnN0IGRlZmF1bHRQcm9wR2V0dGVyID0gKCkgPT4gKHt9KVxuXG4vLyBFeHBvc2Ugc29tZSBwcm9wIGdldHRlcnMgZm9yIGhlYWRlcnMsIHJvd3MgYW5kIGNlbGxzLCBvciBtb3JlIGlmIHlvdSB3YW50IVxuZnVuY3Rpb24gVGFibGUoe1xuICBjb2x1bW5zLFxuICBkYXRhLFxuICBnZXRIZWFkZXJQcm9wcyA9IGRlZmF1bHRQcm9wR2V0dGVyLFxuICBnZXRDb2x1bW5Qcm9wcyA9IGRlZmF1bHRQcm9wR2V0dGVyLFxuICBnZXRSb3dQcm9wcyA9IGRlZmF1bHRQcm9wR2V0dGVyLFxuICBnZXRDZWxsUHJvcHMgPSBkZWZhdWx0UHJvcEdldHRlcixcbn0pIHtcbiAgY29uc3Qge1xuICAgIGdldFRhYmxlUHJvcHMsXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgaGVhZGVyR3JvdXBzLFxuICAgIHJvd3MsXG4gICAgcHJlcGFyZVJvdyxcbiAgfSA9IHVzZVRhYmxlKHtcbiAgICBjb2x1bW5zLFxuICAgIGRhdGEsXG4gIH0pXG5cbiAgLy8gLy8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxuICAvLyByZXR1cm4gKFxuICAvLyAgIDw+XG4gIC8vICAgICB7LyogPGlucHV0XG4gIC8vICAgICAgIHZhbHVlPXtmaWx0ZXJJbnB1dH1cbiAgLy8gICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbHRlckNoYW5nZX1cbiAgLy8gICAgICAgcGxhY2Vob2xkZXI9e1wiU2VhcmNoIHBsYXllclwifVxuICAvLyAgICAgLz4gKi99XG4gIC8vICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYm9yZGVyXCIgey4uLmdldFRhYmxlUHJvcHMoKX0+XG4gIC8vICAgICAgIDx0aGVhZD5cbiAgLy8gICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXG4gIC8vICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWJsYWNrIHRleHQtd2hpdGVcIiB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cbiAgLy8gICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4gIC8vICAgICAgICAgICAgICAgPHRoXG4gIC8vICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX1cbiAgLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gIC8vICAgICAgICAgICAgICAgICAgIGNvbHVtbi5pc1NvcnRlZFxuICAvLyAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgPyBcInNvcnQtZGVzY1wiXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICA6IFwic29ydC1hc2NcIlxuICAvLyAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAvLyAgICAgICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgICAgID5cbiAgLy8gICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKFwiSGVhZGVyXCIpfVxuICAvLyAgICAgICAgICAgICAgIDwvdGg+XG4gIC8vICAgICAgICAgICAgICkpfVxuICAvLyAgICAgICAgICAgPC90cj5cbiAgLy8gICAgICAgICApKX1cbiAgLy8gICAgICAgPC90aGVhZD5cbiAgLy8gICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cbiAgLy8gICAgICAgICB7cm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAvLyAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xuICAvLyAgICAgICAgICAgcmV0dXJuIChcbiAgLy8gICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XG4gIC8vICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XG4gIC8vICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAvLyAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PntjZWxsLnJlbmRlcihcIkNlbGxcIil9PC90ZD5cbiAgLy8gICAgICAgICAgICAgICAgICk7XG4gIC8vICAgICAgICAgICAgICAgfSl9XG4gIC8vICAgICAgICAgICAgIDwvdHI+XG4gIC8vICAgICAgICAgICApO1xuICAvLyAgICAgICAgIH0pfVxuICAvLyAgICAgICA8L3Rib2R5PlxuICAvLyAgICAgPC90YWJsZT5cbiAgLy8gICA8Lz5cbiAgLy8gKTtcblxuICByZXR1cm4gKFxuICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXIgYmctYmxhY2sgdGV4dC13aGl0ZVwiIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBhbiBhcnJheSBvZiBwcm9wIG9iamVjdHMgYW5kIHJlYWN0LXRhYmxlIHdpbGwgbWVyZ2UgdGhlbSBhcHByb3ByaWF0ZWx5XG4gICAgICAgICAgICAgICAgey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBnZXRDb2x1bW5Qcm9wcyhjb2x1bW4pLFxuICAgICAgICAgICAgICAgICAgZ2V0SGVhZGVyUHJvcHMoY29sdW1uKSxcbiAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cbiAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICkpfVxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgIHtyb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vIE1lcmdlIHVzZXIgcm93IHByb3BzIGluXG4gICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcyhnZXRSb3dQcm9wcyhyb3cpKX0+XG4gICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIGFuIGFycmF5IG9mIHByb3Agb2JqZWN0cyBhbmQgcmVhY3QtdGFibGUgd2lsbCBtZXJnZSB0aGVtIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNlbGwuY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBjZWxsLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGdldENvbHVtblByb3BzKGNlbGwuY29sdW1uKSxcbiAgICAgICAgICAgICAgICAgICAgICBnZXRDZWxsUHJvcHMoY2VsbCksXG4gICAgICAgICAgICAgICAgICAgIF0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoJ0NlbGwnKX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn1cblxuLy8gXCJwbGF5ZXJcIjoge1xuLy8gICBcInBsYXllck5hbWVcIjogXCJOaWNrIENhc3RlbGxhbm9zXCIsXG4vLyAgIFwibWxiUGxheWVySWRcIjogNTkyMjA2LFxuLy8gICBcInBvc2l0aW9uXCI6IFwiUkZcIixcbi8vICAgXCJyYW5rXCI6IDEsXG4vLyAgIFwiZ2FtZXNQbGF5ZWRcIjogNDEsXG4vLyAgIFwiaGl0c1wiOiA1OCxcbi8vICAgXCJhdEJhdHNcIjogXCIxNjNcIixcbi8vICAgXCJydW5zXCI6IDMzLFxuLy8gICBcImhvbWVSdW5zXCI6IDEyLFxuLy8gICBcInJiaVwiOiAzMCxcbi8vICAgXCJzdG9sZW5CYXNlc1wiOiAxLFxuLy8gICBcImF2Z1wiOiBcIi4zNTZcIixcbi8vICAgXCJvYnBcIjogXCIuNDE3XCIsXG4vLyAgIFwic2x1Z1wiOiBcIi42NjlcIixcbi8vICAgXCJvcHNcIjogXCIxLjA4NVwiXG4vLyB9XG5cbi8vIDQzRyAzOS8xMzVBQiAyNFIgNUhSIDEyUkJJIDJTQiAuMjg5QVZHIC4zNTggT0JQIC40ODkgU0xHIC44NDYgT1BTXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBoaXR0aW5nQ29scyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICBIZWFkZXI6IFwiSGl0dGluZyBMZWFkZXJzXCIsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBIZWFkZXI6IFwiXCIsXG4gICAgICAgICAgLy8gICBhY2Nlc3NvcjogXCJtbGJQbGF5ZXJJZFwiXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiUmFua1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicmFua1wiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJOYW1lXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJwbGF5ZXJOYW1lXCIsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlBvc2l0aW9uXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJwb3NpdGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBIZWFkZXI6IFwiU3RhdHNcIixcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJHYW1lc1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiZ2FtZXNQbGF5ZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkFCXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJhdEJhdHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlJcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInJ1bnNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkhSXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJob21lUnVuc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiUkJJXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJyYmlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlNCXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJzdG9sZW5CYXNlc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiQVZHXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJhdmdcIixcbiAgICAgICAgICAgIENlbGw6IGF2ZyA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YXZnLnZhbHVlID4gMC40ID8gXCJiZy1yZWQtNTAwIHRleHQtd2hpdGVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgIHthdmcudmFsdWV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJPQlBcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcIm9icFwiLFxuICAgICAgICAgICAgQ2VsbDogb2JwID0+IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtvYnAudmFsdWUgPiAwLjQgPyBcImJnLXJlZC01MDAgdGV4dC13aGl0ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAge29icC52YWx1ZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIk9QU1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwib3BzXCIsXG4gICAgICAgICAgICBDZWxsOiBvcHMgPT4gKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e29wcy52YWx1ZSA+IDAuOSA/IFwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICB7b3BzLnZhbHVlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IFtoaXR0aW5nRGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXCJodHRwczovL2Jhc2ViYWxsc2l0ZS5oZXJva3VhcHAuY29tL2xlYWRlcnNcIik7XG4gICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MS9sZWFkZXJzXCIpO1xuICAgICAgc2V0RGF0YShyZXN1bHQuZGF0YSk7XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbmRleE5hdmJhciBmaXhlZCAvPlxuXG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgcHktMzYgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBmbGV4LTFcIj5cbiAgICAgICAgICAgIHsvKiA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiSG9tZSBSdW5zXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJSb25hbGQgQWN1w7FhIEpyLlwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjE1IEhSXCJcbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPFRhYmxlIFxuICAgICAgICAgICAgICBjb2x1bW5zPXtoaXR0aW5nQ29sc30gXG4gICAgICAgICAgICAgIGRhdGE9e2hpdHRpbmdEYXRhfSBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9