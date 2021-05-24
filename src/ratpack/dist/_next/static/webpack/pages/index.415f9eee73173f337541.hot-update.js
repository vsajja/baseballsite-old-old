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
    }, {
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
            lineNumber: 169,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
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
  }, {
    Header: "Stats",
    columns: [{
      Header: "",
      accessor: "mlbPlayerId"
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
      lineNumber: 230,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 234,
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
            lineNumber: 244,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 253,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR2VucmVzIiwidmFsdWVzIiwibWFwIiwiZ2VucmUiLCJpZHgiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZmlsdGVySW5wdXQiLCJzZXRGaWx0ZXJJbnB1dCIsInVzZVN0YXRlIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJzZXRGaWx0ZXIiLCJ1c2VUYWJsZSIsInVzZUZpbHRlcnMiLCJ1c2VTb3J0QnkiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwicmVuZGVyIiwicm93IiwiaSIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwiSW5kZXgiLCJ1c2VNZW1vIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJDZWxsIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsInJlc3VsdCIsImF4aW9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQzdCLHNCQUNFO0FBQUEsY0FDR0EsTUFBTSxDQUFDQyxHQUFQLENBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLEtBQWdCO0FB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QUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQxNWY5ZWVlNzMxNzNmMzM3NTQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtbm8tdGFyZ2V0LWJsYW5rICovXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBJbmRleE5hdmJhciBmcm9tIFwiY29tcG9uZW50cy9OYXZiYXJzL0luZGV4TmF2YmFyLmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlcnMvRm9vdGVyLmpzXCI7XG5cbmltcG9ydCBDYXJkQmFyQ2hhcnQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZEJhckNoYXJ0LmpzXCI7XG5pbXBvcnQgQ2FyZExpbmVDaGFydCBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkTGluZUNoYXJ0LmpzXCI7XG5pbXBvcnQgQ2FyZFBhZ2VWaXNpdHMgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFBhZ2VWaXNpdHMuanNcIjtcbmltcG9ydCBDYXJkUHJvZmlsZSBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkUHJvZmlsZS5qc1wiO1xuaW1wb3J0IENhcmRTdGF0cyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkU3RhdHMuanNcIjtcbmltcG9ydCBDYXJkU29jaWFsVHJhZmZpYyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkU29jaWFsVHJhZmZpYy5qc1wiO1xuXG5pbXBvcnQgQ2FyZFNldHRpbmdzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTZXR0aW5ncy5qc1wiO1xuIFxuaW1wb3J0IG5hbW9yIGZyb20gJ25hbW9yJ1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlVGFibGUsIHVzZUdyb3VwQnksIHVzZUV4cGFuZGVkLCB1c2VGaWx0ZXJzLCB1c2VTb3J0QnkgfSBmcm9tICdyZWFjdC10YWJsZSdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgR2VucmVzID0gKHsgdmFsdWVzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3ZhbHVlcy5tYXAoKGdlbnJlLCBpZHgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3BhbiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiYmFkZ2VcIj5cbiAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJsZSh7IGNvbHVtbnMsIGRhdGEgfSkge1xuICBjb25zdCBbZmlsdGVySW5wdXQsIHNldEZpbHRlcklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBVc2UgdGhlIHN0YXRlIGFuZCBmdW5jdGlvbnMgcmV0dXJuZWQgZnJvbSB1c2VUYWJsZSB0byBidWlsZCB5b3VyIFVJXG4gIGNvbnN0IHtcbiAgICBnZXRUYWJsZVByb3BzLFxuICAgIGdldFRhYmxlQm9keVByb3BzLFxuICAgIGhlYWRlckdyb3VwcyxcbiAgICByb3dzLFxuICAgIHByZXBhcmVSb3csXG4gICAgc2V0RmlsdGVyXG4gIH0gPSB1c2VUYWJsZShcbiAgICB7XG4gICAgICBjb2x1bW5zLFxuICAgICAgZGF0YVxuICAgIH0sXG4gICAgdXNlRmlsdGVycyxcbiAgICB1c2VTb3J0QnlcbiAgKTtcblxuICBjb25zdCBoYW5kbGVGaWx0ZXJDaGFuZ2UgPSBlID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZDtcbiAgICBzZXRGaWx0ZXIoXCJzaG93Lm5hbWVcIiwgdmFsdWUpO1xuICAgIHNldEZpbHRlcklucHV0KHZhbHVlKTtcbiAgfTtcblxuICAvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8aW5wdXRcbiAgICAgICAgdmFsdWU9e2ZpbHRlcklucHV0fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsdGVyQ2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj17XCJTZWFyY2ggcGxheWVyXCJ9XG4gICAgICAvPiAqL31cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJib3JkZXJcIiB7Li4uZ2V0VGFibGVQcm9wcygpfT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXIgYmctYmxhY2sgdGV4dC13aGl0ZVwiIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLmlzU29ydGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwic29ydC1kZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzb3J0LWFzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoXCJIZWFkZXJcIil9XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdyk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+e2NlbGwucmVuZGVyKFwiQ2VsbFwiKX08L3RkPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvPlxuICApO1xufVxuXG5cbi8vIFwicGxheWVyXCI6IHtcbi8vICAgXCJwbGF5ZXJOYW1lXCI6IFwiTmljayBDYXN0ZWxsYW5vc1wiLFxuLy8gICBcIm1sYlBsYXllcklkXCI6IDU5MjIwNixcbi8vICAgXCJwb3NpdGlvblwiOiBcIlJGXCIsXG4vLyAgIFwicmFua1wiOiAxLFxuLy8gICBcImdhbWVzUGxheWVkXCI6IDQxLFxuLy8gICBcImhpdHNcIjogNTgsXG4vLyAgIFwiYXRCYXRzXCI6IFwiMTYzXCIsXG4vLyAgIFwicnVuc1wiOiAzMyxcbi8vICAgXCJob21lUnVuc1wiOiAxMixcbi8vICAgXCJyYmlcIjogMzAsXG4vLyAgIFwic3RvbGVuQmFzZXNcIjogMSxcbi8vICAgXCJhdmdcIjogXCIuMzU2XCIsXG4vLyAgIFwib2JwXCI6IFwiLjQxN1wiLFxuLy8gICBcInNsdWdcIjogXCIuNjY5XCIsXG4vLyAgIFwib3BzXCI6IFwiMS4wODVcIlxuLy8gfVxuXG5cbi8vIDQzRyAzOS8xMzVBQiAyNFIgNUhSIDEyUkJJIDJTQiAuMjg5QVZHIC4zNTggT0JQIC40ODkgU0xHIC44NDYgT1BTXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBjb2x1bW5zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJIaXR0aW5nIExlYWRlcnNcIixcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIEhlYWRlcjogXCJcIixcbiAgICAgICAgICAvLyAgIGFjY2Vzc29yOiBcIm1sYlBsYXllcklkXCJcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJSYW5rXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJyYW5rXCIsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZGVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJOYW1lXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJwbGF5ZXJOYW1lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJQb3NpdGlvblwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicG9zaXRpb25cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkdhbWVzXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJnYW1lc1BsYXllZFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiQXQgQmF0c1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiYXRCYXRzXCIsXG4gICAgICAgICAgICBDZWxsOiByb3cgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiY2xhc3MtZm9yLW5hbWVcIj57cm93LmF0QmF0c308L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xhc3MtZm9yLWRlc2NyaXB0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiUnVuc1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicnVuc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiSFJcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcImhvbWVSdW5zXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJSdW5zIEJhdHRlZCBJblwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwicmJpXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJTQlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwic3RvbGVuQmFzZXNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkFWR1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiYXZnXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJPQlBcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcIm9icFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiT1BTXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJvcHNcIixcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJTdGF0c1wiLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwibWxiUGxheWVySWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXCJodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPXNub3dcIik7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MS9sZWFkZXJzXCIpO1xuICAgICAgc2V0RGF0YShyZXN1bHQuZGF0YSk7XG4gICAgfSkoKTtcbiAgfSwgW10pOyAgXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5kZXhOYXZiYXIgZml4ZWQgLz5cblxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IHB5LTM2IG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgZmxleC0xXCI+XG4gICAgICAgICAgICB7LyogPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIkhvbWUgUnVuc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiUm9uYWxkIEFjdcOxYSBKci5cIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIxNSBIUlwiXG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9