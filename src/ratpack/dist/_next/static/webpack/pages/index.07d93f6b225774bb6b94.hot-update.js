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
      Header: "At Bats",
      accessor: "atBats",
      Cell: row => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "class-for-description"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR2VucmVzIiwidmFsdWVzIiwibWFwIiwiZ2VucmUiLCJpZHgiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZmlsdGVySW5wdXQiLCJzZXRGaWx0ZXJJbnB1dCIsInVzZVN0YXRlIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJzZXRGaWx0ZXIiLCJ1c2VUYWJsZSIsInVzZUZpbHRlcnMiLCJ1c2VTb3J0QnkiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwicmVuZGVyIiwicm93IiwiaSIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwiSW5kZXgiLCJ1c2VNZW1vIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJDZWxsIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsInJlc3VsdCIsImF4aW9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQzdCLHNCQUNFO0FBQUEsY0FDR0EsTUFBTSxDQUFDQyxHQUFQLENBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLEtBQWdCO0FB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NGJiNmI5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LW5vLXRhcmdldC1ibGFuayAqL1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgSW5kZXhOYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFycy9JbmRleE5hdmJhci5qc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXJzL0Zvb3Rlci5qc1wiO1xuXG5pbXBvcnQgQ2FyZEJhckNoYXJ0IGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRCYXJDaGFydC5qc1wiO1xuaW1wb3J0IENhcmRMaW5lQ2hhcnQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZExpbmVDaGFydC5qc1wiO1xuaW1wb3J0IENhcmRQYWdlVmlzaXRzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRQYWdlVmlzaXRzLmpzXCI7XG5pbXBvcnQgQ2FyZFByb2ZpbGUgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFByb2ZpbGUuanNcIjtcbmltcG9ydCBDYXJkU3RhdHMgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFN0YXRzLmpzXCI7XG5pbXBvcnQgQ2FyZFNvY2lhbFRyYWZmaWMgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFNvY2lhbFRyYWZmaWMuanNcIjtcblxuaW1wb3J0IENhcmRTZXR0aW5ncyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkU2V0dGluZ3MuanNcIjtcbiBcbmltcG9ydCBuYW1vciBmcm9tICduYW1vcidcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VHcm91cEJ5LCB1c2VFeHBhbmRlZCwgdXNlRmlsdGVycywgdXNlU29ydEJ5IH0gZnJvbSAncmVhY3QtdGFibGUnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEdlbnJlcyA9ICh7IHZhbHVlcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt2YWx1ZXMubWFwKChnZW5yZSwgaWR4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW4ga2V5PXtpZHh9IGNsYXNzTmFtZT1cImJhZGdlXCI+XG4gICAgICAgICAgICB7Z2VucmV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gVGFibGUoeyBjb2x1bW5zLCBkYXRhIH0pIHtcbiAgY29uc3QgW2ZpbHRlcklucHV0LCBzZXRGaWx0ZXJJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gVXNlIHRoZSBzdGF0ZSBhbmQgZnVuY3Rpb25zIHJldHVybmVkIGZyb20gdXNlVGFibGUgdG8gYnVpbGQgeW91ciBVSVxuICBjb25zdCB7XG4gICAgZ2V0VGFibGVQcm9wcyxcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcbiAgICBoZWFkZXJHcm91cHMsXG4gICAgcm93cyxcbiAgICBwcmVwYXJlUm93LFxuICAgIHNldEZpbHRlclxuICB9ID0gdXNlVGFibGUoXG4gICAge1xuICAgICAgY29sdW1ucyxcbiAgICAgIGRhdGFcbiAgICB9LFxuICAgIHVzZUZpbHRlcnMsXG4gICAgdXNlU29ydEJ5XG4gICk7XG5cbiAgY29uc3QgaGFuZGxlRmlsdGVyQ2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQ7XG4gICAgc2V0RmlsdGVyKFwic2hvdy5uYW1lXCIsIHZhbHVlKTtcbiAgICBzZXRGaWx0ZXJJbnB1dCh2YWx1ZSk7XG4gIH07XG5cbiAgLy8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogPGlucHV0XG4gICAgICAgIHZhbHVlPXtmaWx0ZXJJbnB1dH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbHRlckNoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e1wiU2VhcmNoIHBsYXllclwifVxuICAgICAgLz4gKi99XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwiYm9yZGVyXCIgey4uLmdldFRhYmxlUHJvcHMoKX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyIGJnLWJsYWNrIHRleHQtd2hpdGVcIiB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cbiAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5pc1NvcnRlZFxuICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNvcnQtZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwic29ydC1hc2NcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKFwiSGVhZGVyXCIpfVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cbiAgICAgICAgICB7cm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PntjZWxsLnJlbmRlcihcIkNlbGxcIil9PC90ZD5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuXG4vLyBcInBsYXllclwiOiB7XG4vLyAgIFwicGxheWVyTmFtZVwiOiBcIk5pY2sgQ2FzdGVsbGFub3NcIixcbi8vICAgXCJtbGJQbGF5ZXJJZFwiOiA1OTIyMDYsXG4vLyAgIFwicG9zaXRpb25cIjogXCJSRlwiLFxuLy8gICBcInJhbmtcIjogMSxcbi8vICAgXCJnYW1lc1BsYXllZFwiOiA0MSxcbi8vICAgXCJoaXRzXCI6IDU4LFxuLy8gICBcImF0QmF0c1wiOiBcIjE2M1wiLFxuLy8gICBcInJ1bnNcIjogMzMsXG4vLyAgIFwiaG9tZVJ1bnNcIjogMTIsXG4vLyAgIFwicmJpXCI6IDMwLFxuLy8gICBcInN0b2xlbkJhc2VzXCI6IDEsXG4vLyAgIFwiYXZnXCI6IFwiLjM1NlwiLFxuLy8gICBcIm9icFwiOiBcIi40MTdcIixcbi8vICAgXCJzbHVnXCI6IFwiLjY2OVwiLFxuLy8gICBcIm9wc1wiOiBcIjEuMDg1XCJcbi8vIH1cblxuXG4vLyA0M0cgMzkvMTM1QUIgMjRSIDVIUiAxMlJCSSAyU0IgLjI4OUFWRyAuMzU4IE9CUCAuNDg5IFNMRyAuODQ2IE9QU1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICBIZWFkZXI6IFwiSGl0dGluZyBMZWFkZXJzXCIsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBIZWFkZXI6IFwiXCIsXG4gICAgICAgICAgLy8gICBhY2Nlc3NvcjogXCJtbGJQbGF5ZXJJZFwiXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiUmFua1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicmFua1wiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGRlcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiTmFtZVwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicGxheWVyTmFtZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiUG9zaXRpb25cIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInBvc2l0aW9uXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJTdGF0c1wiLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkdhbWVzXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJnYW1lc1BsYXllZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiQXQgQmF0c1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiYXRCYXRzXCIsXG4gICAgICAgICAgICBDZWxsOiByb3cgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiY2xhc3MtZm9yLW5hbWVcIj57cm93LmF0QmF0c308L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xhc3MtZm9yLWRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiUnVuc1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicnVuc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiSFJcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcImhvbWVSdW5zXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJSdW5zIEJhdHRlZCBJblwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicmJpXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJTQlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwic3RvbGVuQmFzZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkFWR1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiYXZnXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJPQlBcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcIm9icFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiT1BTXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJvcHNcIixcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKFwiaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1zbm93XCIpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXCJodHRwOi8vbG9jYWxob3N0OjUwNTEvbGVhZGVyc1wiKTtcbiAgICAgIHNldERhdGEocmVzdWx0LmRhdGEpO1xuICAgIH0pKCk7XG4gIH0sIFtdKTsgIFxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEluZGV4TmF2YmFyIGZpeGVkIC8+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNCBweS0zNiBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IGZsZXgtMVwiPlxuICAgICAgICAgICAgey8qIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJIb21lIFJ1bnNcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIlJvbmFsZCBBY3XDsWEgSnIuXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMTUgSFJcIlxuICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==