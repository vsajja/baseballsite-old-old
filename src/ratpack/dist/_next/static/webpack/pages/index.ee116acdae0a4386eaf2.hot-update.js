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
      accessor: "atBats"
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
      lineNumber: 218,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
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
            lineNumber: 232,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR2VucmVzIiwidmFsdWVzIiwibWFwIiwiZ2VucmUiLCJpZHgiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZmlsdGVySW5wdXQiLCJzZXRGaWx0ZXJJbnB1dCIsInVzZVN0YXRlIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJzZXRGaWx0ZXIiLCJ1c2VUYWJsZSIsInVzZUZpbHRlcnMiLCJ1c2VTb3J0QnkiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwicmVuZGVyIiwicm93IiwiaSIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwiSW5kZXgiLCJ1c2VNZW1vIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwicmVzdWx0IiwiYXhpb3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFDN0Isc0JBQ0U7QUFBQSxjQUNHQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxDQUFDQyxLQUFELEVBQVFDLEdBQVIsS0FBZ0I7QUFDMUIsMEJBQ0U7QUFBZ0IsaUJBQVMsRUFBQyxPQUExQjtBQUFBLGtCQUNHRDtBQURILFNBQVdDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUtELEtBTkE7QUFESCxtQkFERjtBQVdELENBWkQ7O0tBQU1KLE07QUFjQyxTQUFTSyxLQUFULENBQWU7QUFBRUMsU0FBRjtBQUFXQztBQUFYLENBQWYsRUFBa0M7QUFBQTs7QUFDdkMsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxnREFBUSxDQUFDLEVBQUQsQ0FBOUMsQ0FEdUMsQ0FFdkM7O0FBQ0EsUUFBTTtBQUNKQyxpQkFESTtBQUVKQyxxQkFGSTtBQUdKQyxnQkFISTtBQUlKQyxRQUpJO0FBS0pDLGNBTEk7QUFNSkM7QUFOSSxNQU9GQyxzREFBUSxDQUNWO0FBQ0VYLFdBREY7QUFFRUM7QUFGRixHQURVLEVBS1ZXLG9EQUxVLEVBTVZDLG1EQU5VLENBUFo7O0FBZ0JBLFFBQU1DLGtCQUFrQixHQUFHQyxDQUFDLElBQUk7QUFDOUIsVUFBTUMsS0FBSyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsS0FBVCxJQUFrQkUsU0FBaEM7QUFDQVIsYUFBUyxDQUFDLFdBQUQsRUFBY00sS0FBZCxDQUFUO0FBQ0FiLGtCQUFjLENBQUNhLEtBQUQsQ0FBZDtBQUNELEdBSkQsQ0FuQnVDLENBeUJ2Qzs7O0FBQ0Esc0JBQ0U7QUFBQSwyQkFNRTtBQUFPLGVBQVMsRUFBQztBQUFqQixPQUE4QlgsYUFBYSxFQUEzQztBQUFBLDhCQUNFO0FBQUEsa0JBQ0dFLFlBQVksQ0FBQ1gsR0FBYixDQUFpQnVCLFdBQVcsaUJBQzNCO0FBQUksbUJBQVMsRUFBQztBQUFkLFdBQStDQSxXQUFXLENBQUNDLG1CQUFaLEVBQS9DO0FBQUEsb0JBQ0dELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQnpCLEdBQXBCLENBQXdCMEIsTUFBTSxpQkFDN0Isb0dBQ01BLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkQsTUFBTSxDQUFDRSxvQkFBUCxFQUF0QixDQUROO0FBRUUscUJBQVMsRUFDUEYsTUFBTSxDQUFDRyxRQUFQLEdBQ0lILE1BQU0sQ0FBQ0ksWUFBUCxHQUNFLFdBREYsR0FFRSxVQUhOLEdBSUksRUFQUjtBQUFBLHNCQVVHSixNQUFNLENBQUNLLE1BQVAsQ0FBYyxRQUFkO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFxQkUsdUdBQVdyQixpQkFBaUIsRUFBNUI7QUFBQSxrQkFDR0UsSUFBSSxDQUFDWixHQUFMLENBQVMsQ0FBQ2dDLEdBQUQsRUFBTUMsQ0FBTixLQUFZO0FBQ3BCcEIsb0JBQVUsQ0FBQ21CLEdBQUQsQ0FBVjtBQUNBLDhCQUNFLG9HQUFRQSxHQUFHLENBQUNFLFdBQUosRUFBUjtBQUFBLHNCQUNHRixHQUFHLENBQUNHLEtBQUosQ0FBVW5DLEdBQVYsQ0FBY29DLElBQUksSUFBSTtBQUNyQixrQ0FDRSxvR0FBUUEsSUFBSSxDQUFDQyxZQUFMLEVBQVI7QUFBQSwwQkFBOEJELElBQUksQ0FBQ0wsTUFBTCxDQUFZLE1BQVo7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERjtBQUdELGFBSkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBU0QsU0FYQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkYsbUJBREY7QUE2Q0QsQyxDQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7R0E3RmdCNUIsSztVQVVWWSxrRDs7O01BVlVaLEs7QUErRkQsU0FBU21DLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsUUFBTWxDLE9BQU8sR0FBR21DLCtDQUFPLENBQ3JCLE1BQU0sQ0FDSjtBQUNFQyxVQUFNLEVBQUUsaUJBRFY7QUFFRXBDLFdBQU8sRUFBRSxDQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRW9DLFlBQU0sRUFBRSxNQURWO0FBRUVDLGNBQVEsRUFBRSxNQUZaO0FBR0VDLFdBQUssRUFBRTtBQUNMQyxrQkFBVSxFQUFFO0FBRFA7QUFIVCxLQUxPLEVBWVA7QUFDRUgsWUFBTSxFQUFFLE1BRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0FaTyxFQWdCUDtBQUNFRCxZQUFNLEVBQUUsVUFEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQWhCTztBQUZYLEdBREksRUF5Qko7QUFDRUQsVUFBTSxFQUFFLE9BRFY7QUFFRXBDLFdBQU8sRUFBRSxDQUNQO0FBQ0VvQyxZQUFNLEVBQUUsT0FEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQURPLEVBS1A7QUFDRUQsWUFBTSxFQUFFLElBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0FMTyxFQVNQO0FBQ0VELFlBQU0sRUFBRSxNQURWO0FBRUVDLGNBQVEsRUFBRTtBQUZaLEtBVE8sRUFhUDtBQUNFRCxZQUFNLEVBQUUsSUFEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQWJPLEVBaUJQO0FBQ0VELFlBQU0sRUFBRSxnQkFEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQWpCTyxFQXFCUDtBQUNFRCxZQUFNLEVBQUUsSUFEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQXJCTyxFQXlCUDtBQUNFRCxZQUFNLEVBQUUsS0FEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQXpCTyxFQTZCUDtBQUNFRCxZQUFNLEVBQUUsS0FEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQTdCTyxFQWlDUDtBQUNFRCxZQUFNLEVBQUUsS0FEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQWpDTztBQUZYLEdBekJJLENBRGUsRUFvRXJCLEVBcEVxQixDQUF2QjtBQXVFQSxRQUFNO0FBQUEsT0FBQ3BDLElBQUQ7QUFBQSxPQUFPdUM7QUFBUCxNQUFrQnBDLGdEQUFRLENBQUMsRUFBRCxDQUFoQztBQUVBcUMsbURBQVMsQ0FBQyxNQUFNO0FBQ2QsS0FBQyxZQUFZO0FBQ1g7QUFDQSxZQUFNQyxNQUFNLEdBQUcsTUFBTUMsNkNBQUssQ0FBQywrQkFBRCxDQUExQjtBQUNBSCxhQUFPLENBQUNFLE1BQU0sQ0FBQ3pDLElBQVIsQ0FBUDtBQUNELEtBSkQ7QUFLRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBU0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxzRUFBRDtBQUFhLFdBQUs7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBT0U7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxpQ0FNRSw4REFBQyxLQUFEO0FBQU8sbUJBQU8sRUFBRUQsT0FBaEI7QUFBeUIsZ0JBQUksRUFBRUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkYsZUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRixlQXdCRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGO0FBQUEsa0JBREY7QUE0QkQ7O0lBL0d1QmlDLEs7O01BQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWUxMTZhY2RhZTBhNDM4NmVhZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby10YXJnZXQtYmxhbmsgKi9cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IEluZGV4TmF2YmFyIGZyb20gXCJjb21wb25lbnRzL05hdmJhcnMvSW5kZXhOYXZiYXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVycy9Gb290ZXIuanNcIjtcblxuaW1wb3J0IENhcmRCYXJDaGFydCBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkQmFyQ2hhcnQuanNcIjtcbmltcG9ydCBDYXJkTGluZUNoYXJ0IGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRMaW5lQ2hhcnQuanNcIjtcbmltcG9ydCBDYXJkUGFnZVZpc2l0cyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkUGFnZVZpc2l0cy5qc1wiO1xuaW1wb3J0IENhcmRQcm9maWxlIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRQcm9maWxlLmpzXCI7XG5pbXBvcnQgQ2FyZFN0YXRzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTdGF0cy5qc1wiO1xuaW1wb3J0IENhcmRTb2NpYWxUcmFmZmljIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTb2NpYWxUcmFmZmljLmpzXCI7XG5cbmltcG9ydCBDYXJkU2V0dGluZ3MgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFNldHRpbmdzLmpzXCI7XG4gXG5pbXBvcnQgbmFtb3IgZnJvbSAnbmFtb3InXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlR3JvdXBCeSwgdXNlRXhwYW5kZWQsIHVzZUZpbHRlcnMsIHVzZVNvcnRCeSB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBHZW5yZXMgPSAoeyB2YWx1ZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dmFsdWVzLm1hcCgoZ2VucmUsIGlkeCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzcGFuIGtleT17aWR4fSBjbGFzc05hbWU9XCJiYWRnZVwiPlxuICAgICAgICAgICAge2dlbnJlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSB9KSB7XG4gIGNvbnN0IFtmaWx0ZXJJbnB1dCwgc2V0RmlsdGVySW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIFVzZSB0aGUgc3RhdGUgYW5kIGZ1bmN0aW9ucyByZXR1cm5lZCBmcm9tIHVzZVRhYmxlIHRvIGJ1aWxkIHlvdXIgVUlcbiAgY29uc3Qge1xuICAgIGdldFRhYmxlUHJvcHMsXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgaGVhZGVyR3JvdXBzLFxuICAgIHJvd3MsXG4gICAgcHJlcGFyZVJvdyxcbiAgICBzZXRGaWx0ZXJcbiAgfSA9IHVzZVRhYmxlKFxuICAgIHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkYXRhXG4gICAgfSxcbiAgICB1c2VGaWx0ZXJzLFxuICAgIHVzZVNvcnRCeVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUZpbHRlckNoYW5nZSA9IGUgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkO1xuICAgIHNldEZpbHRlcihcInNob3cubmFtZVwiLCB2YWx1ZSk7XG4gICAgc2V0RmlsdGVySW5wdXQodmFsdWUpO1xuICB9O1xuXG4gIC8vIFJlbmRlciB0aGUgVUkgZm9yIHlvdXIgdGFibGVcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxpbnB1dFxuICAgICAgICB2YWx1ZT17ZmlsdGVySW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlYXJjaCBwbGF5ZXJcIn1cbiAgICAgIC8+ICovfVxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImJvcmRlclwiIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlciBiZy1ibGFjayB0ZXh0LXdoaXRlXCIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcyhjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uaXNTb3J0ZWRcbiAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzb3J0LWRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInNvcnQtYXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcihcIkhlYWRlclwiKX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgICAge3Jvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC5yZW5kZXIoXCJDZWxsXCIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC8+XG4gICk7XG59XG5cblxuLy8gXCJwbGF5ZXJcIjoge1xuLy8gICBcInBsYXllck5hbWVcIjogXCJOaWNrIENhc3RlbGxhbm9zXCIsXG4vLyAgIFwibWxiUGxheWVySWRcIjogNTkyMjA2LFxuLy8gICBcInBvc2l0aW9uXCI6IFwiUkZcIixcbi8vICAgXCJyYW5rXCI6IDEsXG4vLyAgIFwiZ2FtZXNQbGF5ZWRcIjogNDEsXG4vLyAgIFwiaGl0c1wiOiA1OCxcbi8vICAgXCJhdEJhdHNcIjogXCIxNjNcIixcbi8vICAgXCJydW5zXCI6IDMzLFxuLy8gICBcImhvbWVSdW5zXCI6IDEyLFxuLy8gICBcInJiaVwiOiAzMCxcbi8vICAgXCJzdG9sZW5CYXNlc1wiOiAxLFxuLy8gICBcImF2Z1wiOiBcIi4zNTZcIixcbi8vICAgXCJvYnBcIjogXCIuNDE3XCIsXG4vLyAgIFwic2x1Z1wiOiBcIi42NjlcIixcbi8vICAgXCJvcHNcIjogXCIxLjA4NVwiXG4vLyB9XG5cblxuLy8gNDNHIDM5LzEzNUFCIDI0UiA1SFIgMTJSQkkgMlNCIC4yODlBVkcgLjM1OCBPQlAgLjQ4OSBTTEcgLjg0NiBPUFNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGNvbHVtbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiBcIkhpdHRpbmcgTGVhZGVyc1wiLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgSGVhZGVyOiBcIlwiLFxuICAgICAgICAgIC8vICAgYWNjZXNzb3I6IFwibWxiUGxheWVySWRcIlxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlJhbmtcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInJhbmtcIixcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIk5hbWVcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInBsYXllck5hbWVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlBvc2l0aW9uXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJwb3NpdGlvblwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBIZWFkZXI6IFwiU3RhdHNcIixcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJHYW1lc1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwiZ2FtZXNQbGF5ZWRcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkFCXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJhdEJhdHNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIlJ1bnNcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInJ1bnNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkhSXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJob21lUnVuc1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiUnVucyBCYXR0ZWQgSW5cIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInJiaVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiU0JcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInN0b2xlbkJhc2VzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJBVkdcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcImF2Z1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiT0JQXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJvYnBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIk9QU1wiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwib3BzXCIsXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICBbXVxuICApO1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9c25vd1wiKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKFwiaHR0cDovL2xvY2FsaG9zdDo1MDUxL2xlYWRlcnNcIik7XG4gICAgICBzZXREYXRhKHJlc3VsdC5kYXRhKTtcbiAgICB9KSgpO1xuICB9LCBbXSk7ICBcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbmRleE5hdmJhciBmaXhlZCAvPlxuXG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgcHktMzYgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBmbGV4LTFcIj5cbiAgICAgICAgICAgIHsvKiA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiSG9tZSBSdW5zXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJSb25hbGQgQWN1w7FhIEpyLlwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjE1IEhSXCJcbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2RhdGF9IC8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=