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
      Cell: props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "number",
          children: props.original.phone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "email",
          children: props.original.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }, this),
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
        className: avg.value > 0.3 ? "bg-red-500 text-white" : "",
        children: avg.value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
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
        lineNumber: 243,
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
        lineNumber: 252,
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
      lineNumber: 275,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
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
            lineNumber: 289,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 300,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdFByb3BHZXR0ZXIiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZ2V0SGVhZGVyUHJvcHMiLCJnZXRDb2x1bW5Qcm9wcyIsImdldFJvd1Byb3BzIiwiZ2V0Q2VsbFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJ1c2VUYWJsZSIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsInJlbmRlciIsInJvdyIsImkiLCJjZWxscyIsImNlbGwiLCJJbmRleCIsImhpdHRpbmdDb2xzIiwidXNlTWVtbyIsIkhlYWRlciIsImFjY2Vzc29yIiwiZm9udFdlaWdodCIsIkNlbGwiLCJwcm9wcyIsIm9yaWdpbmFsIiwicGhvbmUiLCJlbWFpbCIsImF2ZyIsInZhbHVlIiwib2JwIiwib3BzIiwiaGl0dGluZ0RhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJyZXN1bHQiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0NBR0E7O0FBQ0EsTUFBTUEsaUJBQWlCLEdBQUcsT0FBTyxFQUFQLENBQTFCLEMsQ0FFQTs7O0FBQ0EsU0FBU0MsS0FBVCxDQUFlO0FBQ2JDLFNBRGE7QUFFYkMsTUFGYTtBQUdiQyxnQkFBYyxHQUFHSixpQkFISjtBQUliSyxnQkFBYyxHQUFHTCxpQkFKSjtBQUtiTSxhQUFXLEdBQUdOLGlCQUxEO0FBTWJPLGNBQVksR0FBR1A7QUFORixDQUFm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V0FBSztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFPRTtBQUFLLGVBQVMsRUFBQyw4QkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGlDQU1FLDhEQUFDLEtBQUQ7QUFDRSxtQkFBTyxFQUFFd0IsV0FEWDtBQUVFLGdCQUFJLEVBQUVjO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBdUJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkYsZUF3QkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRixlQTBCRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGO0FBQUEsa0JBREY7QUE4QkQ7O0lBdkl1QmYsSzs7TUFBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZTU5NGE2YzZkOTIzMGYzMmQzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LW5vLXRhcmdldC1ibGFuayAqL1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgSW5kZXhOYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFycy9JbmRleE5hdmJhci5qc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXJzL0Zvb3Rlci5qc1wiO1xuXG5pbXBvcnQgQ2FyZEJhckNoYXJ0IGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRCYXJDaGFydC5qc1wiO1xuaW1wb3J0IENhcmRMaW5lQ2hhcnQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZExpbmVDaGFydC5qc1wiO1xuaW1wb3J0IENhcmRQYWdlVmlzaXRzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRQYWdlVmlzaXRzLmpzXCI7XG5pbXBvcnQgQ2FyZFByb2ZpbGUgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFByb2ZpbGUuanNcIjtcbmltcG9ydCBDYXJkU3RhdHMgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFN0YXRzLmpzXCI7XG5pbXBvcnQgQ2FyZFNvY2lhbFRyYWZmaWMgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFNvY2lhbFRyYWZmaWMuanNcIjtcblxuaW1wb3J0IENhcmRTZXR0aW5ncyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkU2V0dGluZ3MuanNcIjtcbiBcbmltcG9ydCBuYW1vciBmcm9tICduYW1vcidcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VHcm91cEJ5LCB1c2VFeHBhbmRlZCwgdXNlRmlsdGVycywgdXNlU29ydEJ5IH0gZnJvbSAncmVhY3QtdGFibGUnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIENyZWF0ZSBhIGRlZmF1bHQgcHJvcCBnZXR0ZXJcbmNvbnN0IGRlZmF1bHRQcm9wR2V0dGVyID0gKCkgPT4gKHt9KVxuXG4vLyBFeHBvc2Ugc29tZSBwcm9wIGdldHRlcnMgZm9yIGhlYWRlcnMsIHJvd3MgYW5kIGNlbGxzLCBvciBtb3JlIGlmIHlvdSB3YW50IVxuZnVuY3Rpb24gVGFibGUoe1xuICBjb2x1bW5zLFxuICBkYXRhLFxuICBnZXRIZWFkZXJQcm9wcyA9IGRlZmF1bHRQcm9wR2V0dGVyLFxuICBnZXRDb2x1bW5Qcm9wcyA9IGRlZmF1bHRQcm9wR2V0dGVyLFxuICBnZXRSb3dQcm9wcyA9IGRlZmF1bHRQcm9wR2V0dGVyLFxuICBnZXRDZWxsUHJvcHMgPSBkZWZhdWx0UHJvcEdldHRlcixcbn0pIHtcbiAgY29uc3Qge1xuICAgIGdldFRhYmxlUHJvcHMsXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgaGVhZGVyR3JvdXBzLFxuICAgIHJvd3MsXG4gICAgcHJlcGFyZVJvdyxcbiAgfSA9IHVzZVRhYmxlKHtcbiAgICBjb2x1bW5zLFxuICAgIGRhdGEsXG4gIH0pXG5cbiAgLy8gLy8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxuICAvLyByZXR1cm4gKFxuICAvLyAgIDw+XG4gIC8vICAgICB7LyogPGlucHV0XG4gIC8vICAgICAgIHZhbHVlPXtmaWx0ZXJJbnB1dH1cbiAgLy8gICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbHRlckNoYW5nZX1cbiAgLy8gICAgICAgcGxhY2Vob2xkZXI9e1wiU2VhcmNoIHBsYXllclwifVxuICAvLyAgICAgLz4gKi99XG4gIC8vICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYm9yZGVyXCIgey4uLmdldFRhYmxlUHJvcHMoKX0+XG4gIC8vICAgICAgIDx0aGVhZD5cbiAgLy8gICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXG4gIC8vICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWJsYWNrIHRleHQtd2hpdGVcIiB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cbiAgLy8gICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4gIC8vICAgICAgICAgICAgICAgPHRoXG4gIC8vICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX1cbiAgLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gIC8vICAgICAgICAgICAgICAgICAgIGNvbHVtbi5pc1NvcnRlZFxuICAvLyAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgPyBcInNvcnQtZGVzY1wiXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICA6IFwic29ydC1hc2NcIlxuICAvLyAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAvLyAgICAgICAgICAgICAgICAgfVxuICAvLyAgICAgICAgICAgICAgID5cbiAgLy8gICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKFwiSGVhZGVyXCIpfVxuICAvLyAgICAgICAgICAgICAgIDwvdGg+XG4gIC8vICAgICAgICAgICAgICkpfVxuICAvLyAgICAgICAgICAgPC90cj5cbiAgLy8gICAgICAgICApKX1cbiAgLy8gICAgICAgPC90aGVhZD5cbiAgLy8gICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cbiAgLy8gICAgICAgICB7cm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAvLyAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xuICAvLyAgICAgICAgICAgcmV0dXJuIChcbiAgLy8gICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XG4gIC8vICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XG4gIC8vICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAvLyAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PntjZWxsLnJlbmRlcihcIkNlbGxcIil9PC90ZD5cbiAgLy8gICAgICAgICAgICAgICAgICk7XG4gIC8vICAgICAgICAgICAgICAgfSl9XG4gIC8vICAgICAgICAgICAgIDwvdHI+XG4gIC8vICAgICAgICAgICApO1xuICAvLyAgICAgICAgIH0pfVxuICAvLyAgICAgICA8L3Rib2R5PlxuICAvLyAgICAgPC90YWJsZT5cbiAgLy8gICA8Lz5cbiAgLy8gKTtcblxuICByZXR1cm4gKFxuICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXIgYmctYmxhY2sgdGV4dC13aGl0ZVwiIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBhbiBhcnJheSBvZiBwcm9wIG9iamVjdHMgYW5kIHJlYWN0LXRhYmxlIHdpbGwgbWVyZ2UgdGhlbSBhcHByb3ByaWF0ZWx5XG4gICAgICAgICAgICAgICAgey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBnZXRDb2x1bW5Qcm9wcyhjb2x1bW4pLFxuICAgICAgICAgICAgICAgICAgZ2V0SGVhZGVyUHJvcHMoY29sdW1uKSxcbiAgICAgICAgICAgICAgICBdKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cbiAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICkpfVxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgIHtyb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vIE1lcmdlIHVzZXIgcm93IHByb3BzIGluXG4gICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcyhnZXRSb3dQcm9wcyhyb3cpKX0+XG4gICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIGFuIGFycmF5IG9mIHByb3Agb2JqZWN0cyBhbmQgcmVhY3QtdGFibGUgd2lsbCBtZXJnZSB0aGVtIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNlbGwuY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBjZWxsLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGdldENvbHVtblByb3BzKGNlbGwuY29sdW1uKSxcbiAgICAgICAgICAgICAgICAgICAgICBnZXRDZWxsUHJvcHMoY2VsbCksXG4gICAgICAgICAgICAgICAgICAgIF0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoJ0NlbGwnKX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn1cblxuLy8gXCJwbGF5ZXJcIjoge1xuLy8gICBcInBsYXllck5hbWVcIjogXCJOaWNrIENhc3RlbGxhbm9zXCIsXG4vLyAgIFwibWxiUGxheWVySWRcIjogNTkyMjA2LFxuLy8gICBcInBvc2l0aW9uXCI6IFwiUkZcIixcbi8vICAgXCJyYW5rXCI6IDEsXG4vLyAgIFwiZ2FtZXNQbGF5ZWRcIjogNDEsXG4vLyAgIFwiaGl0c1wiOiA1OCxcbi8vICAgXCJhdEJhdHNcIjogXCIxNjNcIixcbi8vICAgXCJydW5zXCI6IDMzLFxuLy8gICBcImhvbWVSdW5zXCI6IDEyLFxuLy8gICBcInJiaVwiOiAzMCxcbi8vICAgXCJzdG9sZW5CYXNlc1wiOiAxLFxuLy8gICBcImF2Z1wiOiBcIi4zNTZcIixcbi8vICAgXCJvYnBcIjogXCIuNDE3XCIsXG4vLyAgIFwic2x1Z1wiOiBcIi42NjlcIixcbi8vICAgXCJvcHNcIjogXCIxLjA4NVwiXG4vLyB9XG5cbi8vIDQzRyAzOS8xMzVBQiAyNFIgNUhSIDEyUkJJIDJTQiAuMjg5QVZHIC4zNTggT0JQIC40ODkgU0xHIC44NDYgT1BTXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBoaXR0aW5nQ29scyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICBIZWFkZXI6IFwiSGl0dGluZyBMZWFkZXJzXCIsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBIZWFkZXI6IFwiXCIsXG4gICAgICAgICAgLy8gICBhY2Nlc3NvcjogXCJtbGJQbGF5ZXJJZFwiXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiUmFua1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicmFua1wiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJOYW1lXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJwbGF5ZXJOYW1lXCIsXG4gICAgICAgICAgICBDZWxsICAgICA6IHByb3BzID0+XG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdudW1iZXInPntwcm9wcy5vcmlnaW5hbC5waG9uZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdlbWFpbCc+e3Byb3BzLm9yaWdpbmFsLmVtYWlsfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+LFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJQb3NpdGlvblwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicG9zaXRpb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIlN0YXRzXCIsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiR2FtZXNcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcImdhbWVzUGxheWVkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJBQlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiYXRCYXRzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJSXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJydW5zXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJIUlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiaG9tZVJ1bnNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlJCSVwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicmJpXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJTQlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwic3RvbGVuQmFzZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkFWR1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiYXZnXCIsXG4gICAgICAgICAgICBDZWxsOiBhdmcgPT4gKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2F2Zy52YWx1ZSA+IDAuMyA/IFwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlXCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICB7YXZnLnZhbHVlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiT0JQXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJvYnBcIixcbiAgICAgICAgICAgIENlbGw6IG9icCA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17b2JwLnZhbHVlID4gMC40ID8gXCJiZy1yZWQtNTAwIHRleHQtd2hpdGVcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgIHtvYnAudmFsdWV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJPUFNcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcIm9wc1wiLFxuICAgICAgICAgICAgQ2VsbDogb3BzID0+IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtvcHMudmFsdWUgPiAwLjkgPyBcImJnLXJlZC01MDAgdGV4dC13aGl0ZVwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAge29wcy52YWx1ZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBbaGl0dGluZ0RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKFwiaHR0cHM6Ly9iYXNlYmFsbHNpdGUuaGVyb2t1YXBwLmNvbS9sZWFkZXJzXCIpO1xuICAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXCJodHRwOi8vbG9jYWxob3N0OjUwNTEvbGVhZGVyc1wiKTtcbiAgICAgIHNldERhdGEocmVzdWx0LmRhdGEpO1xuICAgIH0pKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5kZXhOYXZiYXIgZml4ZWQgLz5cblxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IHB5LTM2IG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgZmxleC0xXCI+XG4gICAgICAgICAgICB7LyogPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIkhvbWUgUnVuc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiUm9uYWxkIEFjdcOxYSBKci5cIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIxNSBIUlwiXG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDxUYWJsZSBcbiAgICAgICAgICAgICAgY29sdW1ucz17aGl0dGluZ0NvbHN9IFxuICAgICAgICAgICAgICBkYXRhPXtoaXR0aW5nRGF0YX0gXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==