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
  }, react_table__WEBPACK_IMPORTED_MODULE_13__.useFilters, useSortBy);

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("show.name", value);
    setFilterInput(value);
  }; // Render the UI for your table


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      value: filterInput,
      onChange: handleFilterChange,
      placeholder: "Search name"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("thead", {
        children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
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
    }, this)]
  }, void 0, true);
}

_s(Table, "6qAiXZLV1nFIp5wb/jIiXyHCtMo=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_13__.useTable];
});

_c2 = Table;
function Index() {
  _s2();

  const columns = (0,react__WEBPACK_IMPORTED_MODULE_14__.useMemo)(() => [{
    Header: "TV Show",
    columns: [{
      Header: "Name",
      accessor: "show.name"
    }, {
      Header: "Type",
      accessor: "show.type"
    }]
  }, {
    Header: "Details",
    columns: [{
      Header: "Language",
      accessor: "show.language"
    }, {
      Header: "Genre(s)",
      accessor: "show.genres",
      Cell: ({
        cell: {
          value
        }
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Genres, {
        values: value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 44
      }, this)
    }, {
      Header: "Runtime",
      accessor: "show.runtime",
      Cell: ({
        cell: {
          value
        }
      }) => {
        const hour = Math.floor(value / 60);
        const min = Math.floor(value % 60);
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : "", min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""]
        }, void 0, true);
      }
    }, {
      Header: "Status",
      accessor: "show.status"
    }]
  }], []);
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(() => {
    (async () => {
      const result = await axios__WEBPACK_IMPORTED_MODULE_15___default()("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_3__.default, {
      fixed: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
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
            lineNumber: 189,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR2VucmVzIiwidmFsdWVzIiwibWFwIiwiZ2VucmUiLCJpZHgiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZmlsdGVySW5wdXQiLCJzZXRGaWx0ZXJJbnB1dCIsInVzZVN0YXRlIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJzZXRGaWx0ZXIiLCJ1c2VUYWJsZSIsInVzZUZpbHRlcnMiLCJ1c2VTb3J0QnkiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwicmVuZGVyIiwicm93IiwiaSIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwiSW5kZXgiLCJ1c2VNZW1vIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJDZWxsIiwiaG91ciIsIk1hdGgiLCJmbG9vciIsIm1pbiIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJyZXN1bHQiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFnQjtBQUM3QixzQkFDRTtBQUFBLGNBQ0dBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLENBQUNDLEtBQUQsRUFBUUMsR0FBUixL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MjM3MDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby10YXJnZXQtYmxhbmsgKi9cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IEluZGV4TmF2YmFyIGZyb20gXCJjb21wb25lbnRzL05hdmJhcnMvSW5kZXhOYXZiYXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVycy9Gb290ZXIuanNcIjtcblxuaW1wb3J0IENhcmRCYXJDaGFydCBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkQmFyQ2hhcnQuanNcIjtcbmltcG9ydCBDYXJkTGluZUNoYXJ0IGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRMaW5lQ2hhcnQuanNcIjtcbmltcG9ydCBDYXJkUGFnZVZpc2l0cyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkUGFnZVZpc2l0cy5qc1wiO1xuaW1wb3J0IENhcmRQcm9maWxlIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRQcm9maWxlLmpzXCI7XG5pbXBvcnQgQ2FyZFN0YXRzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTdGF0cy5qc1wiO1xuaW1wb3J0IENhcmRTb2NpYWxUcmFmZmljIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTb2NpYWxUcmFmZmljLmpzXCI7XG5cbmltcG9ydCBDYXJkU2V0dGluZ3MgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFNldHRpbmdzLmpzXCI7XG4gXG5pbXBvcnQgbmFtb3IgZnJvbSAnbmFtb3InXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlR3JvdXBCeSwgdXNlRXhwYW5kZWQsIHVzZUZpbHRlcnMgfSBmcm9tICdyZWFjdC10YWJsZSdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgR2VucmVzID0gKHsgdmFsdWVzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3ZhbHVlcy5tYXAoKGdlbnJlLCBpZHgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3BhbiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiYmFkZ2VcIj5cbiAgICAgICAgICAgIHtnZW5yZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJsZSh7IGNvbHVtbnMsIGRhdGEgfSkge1xuICBjb25zdCBbZmlsdGVySW5wdXQsIHNldEZpbHRlcklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBVc2UgdGhlIHN0YXRlIGFuZCBmdW5jdGlvbnMgcmV0dXJuZWQgZnJvbSB1c2VUYWJsZSB0byBidWlsZCB5b3VyIFVJXG4gIGNvbnN0IHtcbiAgICBnZXRUYWJsZVByb3BzLFxuICAgIGdldFRhYmxlQm9keVByb3BzLFxuICAgIGhlYWRlckdyb3VwcyxcbiAgICByb3dzLFxuICAgIHByZXBhcmVSb3csXG4gICAgc2V0RmlsdGVyXG4gIH0gPSB1c2VUYWJsZShcbiAgICB7XG4gICAgICBjb2x1bW5zLFxuICAgICAgZGF0YVxuICAgIH0sXG4gICAgdXNlRmlsdGVycyxcbiAgICB1c2VTb3J0QnlcbiAgKTtcblxuICBjb25zdCBoYW5kbGVGaWx0ZXJDaGFuZ2UgPSBlID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZDtcbiAgICBzZXRGaWx0ZXIoXCJzaG93Lm5hbWVcIiwgdmFsdWUpO1xuICAgIHNldEZpbHRlcklucHV0KHZhbHVlKTtcbiAgfTtcblxuICAvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB2YWx1ZT17ZmlsdGVySW5wdXR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWx0ZXJDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlYXJjaCBuYW1lXCJ9XG4gICAgICAvPlxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCkpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLmlzU29ydGVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwic29ydC1kZXNjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzb3J0LWFzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoXCJIZWFkZXJcIil9XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdyk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+e2NlbGwucmVuZGVyKFwiQ2VsbFwiKX08L3RkPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICBIZWFkZXI6IFwiVFYgU2hvd1wiLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIk5hbWVcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cubmFtZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiVHlwZVwiLFxuICAgICAgICAgICAgYWNjZXNzb3I6IFwic2hvdy50eXBlXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogXCJEZXRhaWxzXCIsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6IFwiTGFuZ3VhZ2VcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cubGFuZ3VhZ2VcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiBcIkdlbnJlKHMpXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJzaG93LmdlbnJlc1wiLFxuICAgICAgICAgICAgQ2VsbDogKHsgY2VsbDogeyB2YWx1ZSB9IH0pID0+IDxHZW5yZXMgdmFsdWVzPXt2YWx1ZX0gLz5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJSdW50aW1lXCIsXG4gICAgICAgICAgICBhY2Nlc3NvcjogXCJzaG93LnJ1bnRpbWVcIixcbiAgICAgICAgICAgIENlbGw6ICh7IGNlbGw6IHsgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBNYXRoLmZsb29yKHZhbHVlIC8gNjApO1xuICAgICAgICAgICAgICBjb25zdCBtaW4gPSBNYXRoLmZsb29yKHZhbHVlICUgNjApO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7aG91ciA+IDAgPyBgJHtob3VyfSBociR7aG91ciA+IDEgPyBcInNcIiA6IFwiXCJ9IGAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAge21pbiA+IDAgPyBgJHttaW59IG1pbiR7bWluID4gMSA/IFwic1wiIDogXCJcIn1gIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogXCJTdGF0dXNcIixcbiAgICAgICAgICAgIGFjY2Vzc29yOiBcInNob3cuc3RhdHVzXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKFwiaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1zbm93XCIpO1xuICAgICAgc2V0RGF0YShyZXN1bHQuZGF0YSk7XG4gICAgfSkoKTtcbiAgfSwgW10pOyAgXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5kZXhOYXZiYXIgZml4ZWQgLz5cblxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IHB5LTM2IG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgZmxleC0xXCI+XG4gICAgICAgICAgICB7LyogPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIkhvbWUgUnVuc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiUm9uYWxkIEFjdcOxYSBKci5cIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIxNSBIUlwiXG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9