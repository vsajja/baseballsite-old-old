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
/* harmony import */ var C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/jsx-no-target-blank */
















const Genres = ({
  values
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: values.map((genre, idx) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "badge",
        children: genre
      }, idx, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, undefined);
    })
  }, void 0, false);
};

_c = Genres;
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


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("table", _objectSpread(_objectSpread({
      className: "border"
    }, getTableProps()), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("thead", {
        children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tr", _objectSpread(_objectSpread({
          className: "border bg-black text-white"
        }, headerGroup.getHeaderGroupProps()), {}, {
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
            className: column.isSorted ? column.isSortedDesc ? "sort-desc" : "sort-asc" : "",
            children: column.render("Header")
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 17
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        children: rows.map((row, i) => {
          prepareRow(row);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            children: row.cells.map(cell => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                children: cell.render("Cell")
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 21
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
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

_c2 = Table;
function Index() {
  _s2();

  const columns = (0,react__WEBPACK_IMPORTED_MODULE_14__.useMemo)(() => [{
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
      accessor: "atBats",
      Cell: row => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "class-for-description",
            children: row.atBats
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }, this);
      }
    }, {
      Header: "Runs",
      accessor: "runs"
    }, {
      Header: "HR",
      accessor: "homeRuns"
    }, {
      Header: "Runs Batted In",
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
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(() => {
    (async () => {
      // const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      const result = await axios__WEBPACK_IMPORTED_MODULE_15___default()("http://localhost:5051/leaders");
      setData(result.data);
    })();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_3__.default, {
      fixed: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "container px-4 py-36 mx-auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex flex-wrap",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Table, {
            columns: columns,
            data: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Index, "TYGuL0g4zE67Bs30rnnW+EaJADk=");

_c3 = Index;

var _c, _c2, _c3;

$RefreshReg$(_c, "Genres");
$RefreshReg$(_c2, "Table");
$RefreshReg$(_c3, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR2VucmVzIiwidmFsdWVzIiwibWFwIiwiZ2VucmUiLCJpZHgiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZmlsdGVySW5wdXQiLCJzZXRGaWx0ZXJJbnB1dCIsInVzZVN0YXRlIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJzZXRGaWx0ZXIiLCJ1c2VUYWJsZSIsInVzZUZpbHRlcnMiLCJ1c2VTb3J0QnkiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwicmVuZGVyIiwicm93IiwiaSIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwiSW5kZXgiLCJ1c2VNZW1vIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJDZWxsIiwiYXRCYXRzIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsInJlc3VsdCIsImF4aW9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQzdCLHNCQUNFO0FBQUEsY0FDR0EsTUFBTSxDQUFDQyxHQUFQLENBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFS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c3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGFjZjQ3OGQyZTA4NzliNTZhYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby10YXJnZXQtYmxhbmsgKi9cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IEluZGV4TmF2YmFyIGZyb20gXCJjb21wb25lbnRzL05hdmJhcnMvSW5kZXhOYXZiYXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVycy9Gb290ZXIuanNcIjtcblxuaW1wb3J0IENhcmRCYXJDaGFydCBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkQmFyQ2hhcnQuanNcIjtcbmltcG9ydCBDYXJkTGluZUNoYXJ0IGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRMaW5lQ2hhcnQuanNcIjtcbmltcG9ydCBDYXJkUGFnZVZpc2l0cyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkUGFnZVZpc2l0cy5qc1wiO1xuaW1wb3J0IENhcmRQcm9maWxlIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRQcm9maWxlLmpzXCI7XG5pbXBvcnQgQ2FyZFN0YXRzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTdGF0cy5qc1wiO1xuaW1wb3J0IENhcmRTb2NpYWxUcmFmZmljIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTb2NpYWxUcmFmZmljLmpzXCI7XG5cbmltcG9ydCBDYXJkU2V0dGluZ3MgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFNldHRpbmdzLmpzXCI7XG4gXG5pbXBvcnQgbmFtb3IgZnJvbSAnbmFtb3InXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlR3JvdXBCeSwgdXNlRXhwYW5kZWQsIHVzZUZpbHRlcnMsIHVzZVNvcnRCeSB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBHZW5yZXMgPSAoeyB2YWx1ZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dmFsdWVzLm1hcCgoZ2VucmUsIGlkeCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzcGFuIGtleT17aWR4fSBjbGFzc05hbWU9XCJiYWRnZVwiPlxuICAgICAgICAgICAge2dlbnJlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSB9KSB7XG4gIGNvbnN0IFtmaWx0ZXJJbnB1dCwgc2V0RmlsdGVySW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIFVzZSB0aGUgc3RhdGUgYW5kIGZ1bmN0aW9ucyByZXR1cm5lZCBmcm9tIHVzZVRhYmxlIHRvIGJ1aWxkIHlvdXIgVUlcbiAgY29uc3Qge1xuICAgIGdldFRhYmxlUHJvcHMsXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgaGVhZGVyR3JvdXBzLFxuICAgIHJvd3MsXG4gICAgcHJlcGFyZVJvdyxcbiAgICBzZXRGaWx0ZXJcbiAgfSA9IHVzZVRhYmxlKFxuICAgIHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkYXRhXG4gICAgfSxcbiAgICB1c2VGaWx0ZXJzLFxuICAgIHVzZVNvcnRCeVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUZpbHRlckNoYW5nZSA9IGUgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkO1xuICAgIHNldEZpbHRlcihcInNob3cubmFtZVwiLCB2YWx1ZSk7XG4gICAgc2V0RmlsdGVySW5wdXQodmFsdWUpO1xuICB9O1xuXG4gIC8vIFJlbmRlciB0aGUgVUkgZm9yIHlvdXIgdGFibGVcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxpbnB1dFxuICAgICAgICB2YWx1ZT17ZmlsdGVySW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlYXJjaCBwbGF5ZXJcIn1cbiAgICAgIC8+ICovfVxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJvcmRlclwiIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlciBiZy1ibGFjayB0ZXh0LXdoaXRlXCIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uaXNTb3J0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzb3J0LWRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNvcnQtYXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcihcIkhlYWRlclwiKX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgICAge3Jvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC5yZW5kZXIoXCJDZWxsXCIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC8+XG4gICk7XG59XG5cblxuLy8gXCJwbGF5ZXJcIjoge1xuLy8gICBcInBsYXllck5hbWVcIjogXCJOaWNrIENhc3RlbGxhbm9zXCIsXG4vLyAgIFwibWxiUGxheWVySWRcIjogNTkyMjA2LFxuLy8gICBcInBvc2l0aW9uXCI6IFwiUkZcIixcbi8vICAgXCJyYW5rXCI6IDEsXG4vLyAgIFwiZ2FtZXNQbGF5ZWRcIjogNDEsXG4vLyAgIFwiaGl0c1wiOiA1OCxcbi8vICAgXCJhdEJhdHNcIjogXCIxNjNcIixcbi8vICAgXCJydW5zXCI6IDMzLFxuLy8gICBcImhvbWVSdW5zXCI6IDEyLFxuLy8gICBcInJiaVwiOiAzMCxcbi8vICAgXCJzdG9sZW5CYXNlc1wiOiAxLFxuLy8gICBcImF2Z1wiOiBcIi4zNTZcIixcbi8vICAgXCJvYnBcIjogXCIuNDE3XCIsXG4vLyAgIFwic2x1Z1wiOiBcIi42NjlcIixcbi8vICAgXCJvcHNcIjogXCIxLjA4NVwiXG4vLyB9XG5cblxuLy8gNDNHIDM5LzEzNUFCIDI0UiA1SFIgMTJSQkkgMlNCIC4yODlBVkcgLjM1OCBPQlAgLjQ4OSBTTEcgLjg0NiBPUFNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIkhpdHRpbmcgTGVhZGVyc1wiLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgSGVhZGVyOiBcIlwiLFxuICAgICAgICAgIC8vICAgYWNjZXNzb3I6IFwibWxiUGxheWVySWRcIlxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlJhbmtcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInJhbmtcIixcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIk5hbWVcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInBsYXllck5hbWVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlBvc2l0aW9uXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJwb3NpdGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBIZWFkZXI6IFwiU3RhdHNcIixcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJHYW1lc1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiZ2FtZXNQbGF5ZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkFCXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJhdEJhdHNcIixcbiAgICAgICAgICAgIENlbGw6IHJvdyA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJjbGFzcy1mb3ItbmFtZVwiPntyb3cuYXRCYXRzfTwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbGFzcy1mb3ItZGVzY3JpcHRpb25cIj57cm93LmF0QmF0c308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJSdW5zXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJydW5zXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJIUlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiaG9tZVJ1bnNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlJ1bnMgQmF0dGVkIEluXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJyYmlcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlNCXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJzdG9sZW5CYXNlc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiQVZHXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJhdmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIk9CUFwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwib2JwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJPUFNcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcIm9wc1wiLFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXCJodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPXNub3dcIik7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MS9sZWFkZXJzXCIpO1xuICAgICAgc2V0RGF0YShyZXN1bHQuZGF0YSk7XG4gICAgfSkoKTtcbiAgfSwgW10pOyAgXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5kZXhOYXZiYXIgZml4ZWQgLz5cblxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IHB5LTM2IG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgZmxleC0xXCI+XG4gICAgICAgICAgICB7LyogPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIkhvbWUgUnVuc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiUm9uYWxkIEFjdcOxYSBKci5cIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIxNSBIUlwiXG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9