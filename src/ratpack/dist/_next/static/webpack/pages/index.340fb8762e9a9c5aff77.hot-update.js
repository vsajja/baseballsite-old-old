self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table": function() { return /* binding */ Table; },
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















function Table({
  columns,
  data
}) {
  _s();

  const {
    0: filterInput,
    1: setFilterInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(""); // Use the state and functions returned from useTable to build your UI

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_13__.useTable)({
    columns,
    data
  }, react_table__WEBPACK_IMPORTED_MODULE_13__.useFilters, react_table__WEBPACK_IMPORTED_MODULE_13__.useSortBy);

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("show.name", value);
    setFilterInput(value);
  }; // Render the UI for your table


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", _objectSpread(_objectSpread({
      className: "border"
    }, getTableProps()), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({
          className: "border bg-black text-white"
        }, headerGroup.getHeaderGroupProps()), {}, {
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
            className: column.isSorted ? column.isSortedDesc ? "sort-desc" : "sort-asc" : "",
            children: column.render("Header")
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        children: rows.map((row, i) => {
          prepareRow(row);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            children: row.cells.map(cell => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                children: cell.render("Cell")
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 21
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)
  }, void 0, false);
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

_s(Table, "6qAiXZLV1nFIp5wb/jIiXyHCtMo=", false, function () {
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
    }, // {
    //   Header: "AB",
    //   accessor: "atBats"
    // },
    {
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
      // const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      const result = await axios__WEBPACK_IMPORTED_MODULE_15___default()("http://localhost:5051/leaders");
      setHittingData(result.data);
    })();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_3__.default, {
      fixed: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
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
            lineNumber: 218,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsImZpbHRlcklucHV0Iiwic2V0RmlsdGVySW5wdXQiLCJ1c2VTdGF0ZSIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93Iiwic2V0RmlsdGVyIiwidXNlVGFibGUiLCJ1c2VGaWx0ZXJzIiwidXNlU29ydEJ5IiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidW5kZWZpbmVkIiwibWFwIiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImNvbHVtbiIsImdldEhlYWRlclByb3BzIiwiZ2V0U29ydEJ5VG9nZ2xlUHJvcHMiLCJpc1NvcnRlZCIsImlzU29ydGVkRGVzYyIsInJlbmRlciIsInJvdyIsImkiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsIkluZGV4IiwiaGl0dGluZ0NvbHMiLCJ1c2VNZW1vIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJoaXR0aW5nRGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJyZXN1bHQiLCJheGlvcyIsInNldEhpdHRpbmdEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFTyxTQUFTQSxLQUFULENBQWU7QUFBRUMsU0FBRjtBQUFXQztBQUFYLENBQWYsRUFBa0M7QUFBQTs7QUFDdkMsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxnREFBUSxD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QUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU9FO0FBQUssZUFBUyxFQUFDLDhCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsaUNBTUUsOERBQUMsS0FBRDtBQUFPLG1CQUFPLEVBQUVtQyxXQUFoQjtBQUE2QixnQkFBSSxFQUFFTTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixlQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJGLGVBdUJFLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkY7QUFBQSxrQkFERjtBQTJCRDs7SUE5R3VCUCxLOztNQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM0MGZiODc2MmU5YTljNWFmZjc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtbm8tdGFyZ2V0LWJsYW5rICovXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBJbmRleE5hdmJhciBmcm9tIFwiY29tcG9uZW50cy9OYXZiYXJzL0luZGV4TmF2YmFyLmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlcnMvRm9vdGVyLmpzXCI7XG5cbmltcG9ydCBDYXJkQmFyQ2hhcnQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZEJhckNoYXJ0LmpzXCI7XG5pbXBvcnQgQ2FyZExpbmVDaGFydCBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkTGluZUNoYXJ0LmpzXCI7XG5pbXBvcnQgQ2FyZFBhZ2VWaXNpdHMgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFBhZ2VWaXNpdHMuanNcIjtcbmltcG9ydCBDYXJkUHJvZmlsZSBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkUHJvZmlsZS5qc1wiO1xuaW1wb3J0IENhcmRTdGF0cyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkU3RhdHMuanNcIjtcbmltcG9ydCBDYXJkU29jaWFsVHJhZmZpYyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkU29jaWFsVHJhZmZpYy5qc1wiO1xuXG5pbXBvcnQgQ2FyZFNldHRpbmdzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTZXR0aW5ncy5qc1wiO1xuIFxuaW1wb3J0IG5hbW9yIGZyb20gJ25hbW9yJ1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlVGFibGUsIHVzZUdyb3VwQnksIHVzZUV4cGFuZGVkLCB1c2VGaWx0ZXJzLCB1c2VTb3J0QnkgfSBmcm9tICdyZWFjdC10YWJsZSdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSB9KSB7XG4gIGNvbnN0IFtmaWx0ZXJJbnB1dCwgc2V0RmlsdGVySW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIFVzZSB0aGUgc3RhdGUgYW5kIGZ1bmN0aW9ucyByZXR1cm5lZCBmcm9tIHVzZVRhYmxlIHRvIGJ1aWxkIHlvdXIgVUlcbiAgY29uc3Qge1xuICAgIGdldFRhYmxlUHJvcHMsXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgaGVhZGVyR3JvdXBzLFxuICAgIHJvd3MsXG4gICAgcHJlcGFyZVJvdyxcbiAgICBzZXRGaWx0ZXJcbiAgfSA9IHVzZVRhYmxlKFxuICAgIHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkYXRhXG4gICAgfSxcbiAgICB1c2VGaWx0ZXJzLFxuICAgIHVzZVNvcnRCeVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUZpbHRlckNoYW5nZSA9IGUgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkO1xuICAgIHNldEZpbHRlcihcInNob3cubmFtZVwiLCB2YWx1ZSk7XG4gICAgc2V0RmlsdGVySW5wdXQodmFsdWUpO1xuICB9O1xuXG4gIC8vIFJlbmRlciB0aGUgVUkgZm9yIHlvdXIgdGFibGVcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxpbnB1dFxuICAgICAgICB2YWx1ZT17ZmlsdGVySW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlYXJjaCBwbGF5ZXJcIn1cbiAgICAgIC8+ICovfVxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJvcmRlclwiIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlciBiZy1ibGFjayB0ZXh0LXdoaXRlXCIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uaXNTb3J0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzb3J0LWRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNvcnQtYXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcihcIkhlYWRlclwiKX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgICAge3Jvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC5yZW5kZXIoXCJDZWxsXCIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC8+XG4gICk7XG59XG5cblxuLy8gXCJwbGF5ZXJcIjoge1xuLy8gICBcInBsYXllck5hbWVcIjogXCJOaWNrIENhc3RlbGxhbm9zXCIsXG4vLyAgIFwibWxiUGxheWVySWRcIjogNTkyMjA2LFxuLy8gICBcInBvc2l0aW9uXCI6IFwiUkZcIixcbi8vICAgXCJyYW5rXCI6IDEsXG4vLyAgIFwiZ2FtZXNQbGF5ZWRcIjogNDEsXG4vLyAgIFwiaGl0c1wiOiA1OCxcbi8vICAgXCJhdEJhdHNcIjogXCIxNjNcIixcbi8vICAgXCJydW5zXCI6IDMzLFxuLy8gICBcImhvbWVSdW5zXCI6IDEyLFxuLy8gICBcInJiaVwiOiAzMCxcbi8vICAgXCJzdG9sZW5CYXNlc1wiOiAxLFxuLy8gICBcImF2Z1wiOiBcIi4zNTZcIixcbi8vICAgXCJvYnBcIjogXCIuNDE3XCIsXG4vLyAgIFwic2x1Z1wiOiBcIi42NjlcIixcbi8vICAgXCJvcHNcIjogXCIxLjA4NVwiXG4vLyB9XG5cblxuLy8gNDNHIDM5LzEzNUFCIDI0UiA1SFIgMTJSQkkgMlNCIC4yODlBVkcgLjM1OCBPQlAgLjQ4OSBTTEcgLjg0NiBPUFNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGhpdHRpbmdDb2xzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJIaXR0aW5nIExlYWRlcnNcIixcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIEhlYWRlcjogXCJcIixcbiAgICAgICAgICAvLyAgIGFjY2Vzc29yOiBcIm1sYlBsYXllcklkXCJcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJSYW5rXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJyYW5rXCIsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZGVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJOYW1lXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJwbGF5ZXJOYW1lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJQb3NpdGlvblwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicG9zaXRpb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIlN0YXRzXCIsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiR2FtZXNcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcImdhbWVzUGxheWVkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIEhlYWRlcjogXCJBQlwiLFxuICAgICAgICAgIC8vICAgYWNjZXNzb3I6IFwiYXRCYXRzXCJcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJSXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJydW5zXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJIUlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiaG9tZVJ1bnNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlJCSVwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicmJpXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJTQlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwic3RvbGVuQmFzZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkFWR1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiYXZnXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJPQlBcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcIm9icFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiT1BTXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJvcHNcIixcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgW2hpdHRpbmdEYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9c25vd1wiKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKFwiaHR0cDovL2xvY2FsaG9zdDo1MDUxL2xlYWRlcnNcIik7XG4gICAgICBzZXRIaXR0aW5nRGF0YShyZXN1bHQuZGF0YSk7XG4gICAgfSkoKTtcbiAgfSwgW10pOyAgXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5kZXhOYXZiYXIgZml4ZWQgLz5cblxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IHB5LTM2IG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgZmxleC0xXCI+XG4gICAgICAgICAgICB7LyogPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIkhvbWUgUnVuc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiUm9uYWxkIEFjdcOxYSBKci5cIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIxNSBIUlwiXG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtoaXR0aW5nQ29sc30gZGF0YT17aGl0dGluZ0RhdGF9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9