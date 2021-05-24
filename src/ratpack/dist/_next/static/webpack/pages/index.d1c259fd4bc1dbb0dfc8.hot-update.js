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
      accessor: "playerName"
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
      accessor: "obp"
    }, {
      Header: "OPS",
      accessor: "ops"
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
      lineNumber: 254,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
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
            lineNumber: 268,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 276,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BHZXR0ZXIiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZ2V0SGVhZGVyUHJvcHMiLCJnZXRDb2x1bW5Qcm9wcyIsImdldFJvd1Byb3BzIiwiZ2V0Q2VsbFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJ1c2VUYWJsZSIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsInJlbmRlciIsInJvdyIsImkiLCJjZWxscyIsImNlbGwiLCJJbmRleCIsImhpdHRpbmdDb2xzIiwidXNlTWVtbyIsIkhlYWRlciIsImFjY2Vzc29yIiwiZm9udFdlaWdodCIsImhpdHRpbmdEYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVzdWx0IiwiYXhpb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtDQUdBOztBQUNBLE1BQU1BLGlCQUFpQixHQUFHLE9BQU8sRUFBUCxDQUExQixDLENBRUE7OztBQUNBLFNBQVNDLEtBQVQsQ0FBZTtBQUNiQyxTQURhO0FBRWJDLE1BRmE7QUFHYkMsZ0JBQWMsR0FBR0osaUJBSEo7QUFJYkssZ0JBQWMsR0FBR0wsaUJBSko7QUFLYk0sYUFBVyxHQUFHTixpQkFMRDtBQU1iTyxjQUFZLEdBQUdQO0FBTkYsQ0FBZixFQU9HO0FBQUE7O0FBQ0QsUUFBTTtBQUNKUSxpQkFESTtBQUVKQyxxQkFGSTtBQUdKQyxnQkFISTtBQUlKQyxRQUpJ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QVA7QUFDRCxLQUpEO0FBS0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsc0VBQUQ7QUFBYSxXQUFLO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU9FO0FBQUssZUFBUyxFQUFDLDhCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsaUNBTUUsOERBQUMsS0FBRDtBQUFPLG1CQUFPLEVBQUV3QixXQUFoQjtBQUE2QixnQkFBSSxFQUFFSztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixlQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJGLGVBdUJFLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkY7QUFBQSxrQkFERjtBQTJCRDs7SUE3R3VCTixLOztNQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQxYzI1OWZkNGJjMWRiYjBkZmM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtbm8tdGFyZ2V0LWJsYW5rICovXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBJbmRleE5hdmJhciBmcm9tIFwiY29tcG9uZW50cy9OYXZiYXJzL0luZGV4TmF2YmFyLmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlcnMvRm9vdGVyLmpzXCI7XG5cbmltcG9ydCBDYXJkQmFyQ2hhcnQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZEJhckNoYXJ0LmpzXCI7XG5pbXBvcnQgQ2FyZExpbmVDaGFydCBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkTGluZUNoYXJ0LmpzXCI7XG5pbXBvcnQgQ2FyZFBhZ2VWaXNpdHMgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFBhZ2VWaXNpdHMuanNcIjtcbmltcG9ydCBDYXJkUHJvZmlsZSBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkUHJvZmlsZS5qc1wiO1xuaW1wb3J0IENhcmRTdGF0cyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkU3RhdHMuanNcIjtcbmltcG9ydCBDYXJkU29jaWFsVHJhZmZpYyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkU29jaWFsVHJhZmZpYy5qc1wiO1xuXG5pbXBvcnQgQ2FyZFNldHRpbmdzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTZXR0aW5ncy5qc1wiO1xuIFxuaW1wb3J0IG5hbW9yIGZyb20gJ25hbW9yJ1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlVGFibGUsIHVzZUdyb3VwQnksIHVzZUV4cGFuZGVkLCB1c2VGaWx0ZXJzLCB1c2VTb3J0QnkgfSBmcm9tICdyZWFjdC10YWJsZSdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy8gQ3JlYXRlIGEgZGVmYXVsdCBwcm9wIGdldHRlclxuY29uc3QgZGVmYXVsdFByb3BHZXR0ZXIgPSAoKSA9PiAoe30pXG5cbi8vIEV4cG9zZSBzb21lIHByb3AgZ2V0dGVycyBmb3IgaGVhZGVycywgcm93cyBhbmQgY2VsbHMsIG9yIG1vcmUgaWYgeW91IHdhbnQhXG5mdW5jdGlvbiBUYWJsZSh7XG4gIGNvbHVtbnMsXG4gIGRhdGEsXG4gIGdldEhlYWRlclByb3BzID0gZGVmYXVsdFByb3BHZXR0ZXIsXG4gIGdldENvbHVtblByb3BzID0gZGVmYXVsdFByb3BHZXR0ZXIsXG4gIGdldFJvd1Byb3BzID0gZGVmYXVsdFByb3BHZXR0ZXIsXG4gIGdldENlbGxQcm9wcyA9IGRlZmF1bHRQcm9wR2V0dGVyLFxufSkge1xuICBjb25zdCB7XG4gICAgZ2V0VGFibGVQcm9wcyxcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcbiAgICBoZWFkZXJHcm91cHMsXG4gICAgcm93cyxcbiAgICBwcmVwYXJlUm93LFxuICB9ID0gdXNlVGFibGUoe1xuICAgIGNvbHVtbnMsXG4gICAgZGF0YSxcbiAgfSlcblxuICAvLyAvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPD5cbiAgLy8gICAgIHsvKiA8aW5wdXRcbiAgLy8gICAgICAgdmFsdWU9e2ZpbHRlcklucHV0fVxuICAvLyAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsdGVyQ2hhbmdlfVxuICAvLyAgICAgICBwbGFjZWhvbGRlcj17XCJTZWFyY2ggcGxheWVyXCJ9XG4gIC8vICAgICAvPiAqL31cbiAgLy8gICAgIDx0YWJsZSBjbGFzc05hbWU9XCJib3JkZXJcIiB7Li4uZ2V0VGFibGVQcm9wcygpfT5cbiAgLy8gICAgICAgPHRoZWFkPlxuICAvLyAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbiAgLy8gICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXIgYmctYmxhY2sgdGV4dC13aGl0ZVwiIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuICAvLyAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbiAgLy8gICAgICAgICAgICAgICA8dGhcbiAgLy8gICAgICAgICAgICAgICAgIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfVxuICAvLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgLy8gICAgICAgICAgICAgICAgICAgY29sdW1uLmlzU29ydGVkXG4gIC8vICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICA/IFwic29ydC1kZXNjXCJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIDogXCJzb3J0LWFzY1wiXG4gIC8vICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gIC8vICAgICAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoXCJIZWFkZXJcIil9XG4gIC8vICAgICAgICAgICAgICAgPC90aD5cbiAgLy8gICAgICAgICAgICAgKSl9XG4gIC8vICAgICAgICAgICA8L3RyPlxuICAvLyAgICAgICAgICkpfVxuICAvLyAgICAgICA8L3RoZWFkPlxuICAvLyAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuICAvLyAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gIC8vICAgICAgICAgICBwcmVwYXJlUm93KHJvdyk7XG4gIC8vICAgICAgICAgICByZXR1cm4gKFxuICAvLyAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cbiAgLy8gICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcbiAgLy8gICAgICAgICAgICAgICAgIHJldHVybiAoXG4gIC8vICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+e2NlbGwucmVuZGVyKFwiQ2VsbFwiKX08L3RkPlxuICAvLyAgICAgICAgICAgICAgICAgKTtcbiAgLy8gICAgICAgICAgICAgICB9KX1cbiAgLy8gICAgICAgICAgICAgPC90cj5cbiAgLy8gICAgICAgICAgICk7XG4gIC8vICAgICAgICAgfSl9XG4gIC8vICAgICAgIDwvdGJvZHk+XG4gIC8vICAgICA8L3RhYmxlPlxuICAvLyAgIDwvPlxuICAvLyApO1xuXG4gIHJldHVybiAoXG4gICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuICAgICAgPHRoZWFkPlxuICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlciBiZy1ibGFjayB0ZXh0LXdoaXRlXCIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGFuIGFycmF5IG9mIHByb3Agb2JqZWN0cyBhbmQgcmVhY3QtdGFibGUgd2lsbCBtZXJnZSB0aGVtIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogY29sdW1uLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGdldENvbHVtblByb3BzKGNvbHVtbiksXG4gICAgICAgICAgICAgICAgICBnZXRIZWFkZXJQcm9wcyhjb2x1bW4pLFxuICAgICAgICAgICAgICAgIF0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxuICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKSl9XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cbiAgICAgICAge3Jvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICBwcmVwYXJlUm93KHJvdylcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgLy8gTWVyZ2UgdXNlciByb3cgcHJvcHMgaW5cbiAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKGdldFJvd1Byb3BzKHJvdykpfT5cbiAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gYW4gYXJyYXkgb2YgcHJvcCBvYmplY3RzIGFuZCByZWFjdC10YWJsZSB3aWxsIG1lcmdlIHRoZW0gYXBwcm9wcmlhdGVseVxuICAgICAgICAgICAgICAgICAgICB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2VsbC5jb2x1bW4uY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGNlbGwuY29sdW1uLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0Q29sdW1uUHJvcHMoY2VsbC5jb2x1bW4pLFxuICAgICAgICAgICAgICAgICAgICAgIGdldENlbGxQcm9wcyhjZWxsKSxcbiAgICAgICAgICAgICAgICAgICAgXSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcpfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApO1xufVxuXG5cbi8vIFwicGxheWVyXCI6IHtcbi8vICAgXCJwbGF5ZXJOYW1lXCI6IFwiTmljayBDYXN0ZWxsYW5vc1wiLFxuLy8gICBcIm1sYlBsYXllcklkXCI6IDU5MjIwNixcbi8vICAgXCJwb3NpdGlvblwiOiBcIlJGXCIsXG4vLyAgIFwicmFua1wiOiAxLFxuLy8gICBcImdhbWVzUGxheWVkXCI6IDQxLFxuLy8gICBcImhpdHNcIjogNTgsXG4vLyAgIFwiYXRCYXRzXCI6IFwiMTYzXCIsXG4vLyAgIFwicnVuc1wiOiAzMyxcbi8vICAgXCJob21lUnVuc1wiOiAxMixcbi8vICAgXCJyYmlcIjogMzAsXG4vLyAgIFwic3RvbGVuQmFzZXNcIjogMSxcbi8vICAgXCJhdmdcIjogXCIuMzU2XCIsXG4vLyAgIFwib2JwXCI6IFwiLjQxN1wiLFxuLy8gICBcInNsdWdcIjogXCIuNjY5XCIsXG4vLyAgIFwib3BzXCI6IFwiMS4wODVcIlxuLy8gfVxuXG5cbi8vIDQzRyAzOS8xMzVBQiAyNFIgNUhSIDEyUkJJIDJTQiAuMjg5QVZHIC4zNTggT0JQIC40ODkgU0xHIC44NDYgT1BTXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBoaXR0aW5nQ29scyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICBIZWFkZXI6IFwiSGl0dGluZyBMZWFkZXJzXCIsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBIZWFkZXI6IFwiXCIsXG4gICAgICAgICAgLy8gICBhY2Nlc3NvcjogXCJtbGJQbGF5ZXJJZFwiXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiUmFua1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicmFua1wiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGRlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiTmFtZVwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicGxheWVyTmFtZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiUG9zaXRpb25cIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInBvc2l0aW9uXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJTdGF0c1wiLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkdhbWVzXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJnYW1lc1BsYXllZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiQUJcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcImF0QmF0c1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiUlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicnVuc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiSFJcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcImhvbWVSdW5zXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJSQklcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInJiaVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiU0JcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInN0b2xlbkJhc2VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJBVkdcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcImF2Z1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiT0JQXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJvYnBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIk9QU1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwib3BzXCIsXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IFtoaXR0aW5nRGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXCJodHRwczovL2Jhc2ViYWxsc2l0ZS5oZXJva3VhcHAuY29tL2xlYWRlcnNcIik7XG4gICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MS9sZWFkZXJzXCIpO1xuICAgICAgc2V0RGF0YShyZXN1bHQuZGF0YSk7XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbmRleE5hdmJhciBmaXhlZCAvPlxuXG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgcHktMzYgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBmbGV4LTFcIj5cbiAgICAgICAgICAgIHsvKiA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiSG9tZSBSdW5zXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJSb25hbGQgQWN1w7FhIEpyLlwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjE1IEhSXCJcbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPFRhYmxlIGNvbHVtbnM9e2hpdHRpbmdDb2xzfSBkYXRhPXtoaXR0aW5nRGF0YX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=