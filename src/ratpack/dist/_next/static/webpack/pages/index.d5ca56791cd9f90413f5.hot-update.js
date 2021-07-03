self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/baseball/CardPlayers.js":
/*!********************************************!*\
  !*** ./components/baseball/CardPlayers.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CardPlayers; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _makeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../makeData */ "./makeData.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\git\\baseballsite\\portal\\components\\baseball\\CardPlayers.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Table({
  columns,
  data
}) {
  _s();

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize
    }
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_3__.useTable)({
    columns,
    data,
    initialState: {
      pageIndex: 2
    }
  }, react_table__WEBPACK_IMPORTED_MODULE_3__.usePagination); // Render the UI for your table

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
            children: column.render('Header')
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 17
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        children: page.map((row, i) => {
          prepareRow(row);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            children: row.cells.map(cell => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                children: cell.render('Cell')
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 26
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        children: '<<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: ["| Go to page:", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          defaultValue: pageIndex + 1,
          onChange: e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          },
          style: {
            width: '100px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        value: pageSize,
        onChange: e => {
          setPageSize(Number(e.target.value));
        },
        children: [10, 20, 30, 40, 50].map(pageSize => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
          value: pageSize,
          children: ["Show ", pageSize]
        }, pageSize, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this)]
  }, void 0, true);
} // components


_s(Table, "JDI+7VFvVRrIJkCn908U3ObIOC0=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_3__.useTable];
});

_c = Table;
CardPlayers.defaultProps = {
  league: "Major League Baseball",
  division: ""
};
CardPlayers.propTypes = {
  league: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
function CardPlayers({
  league
}) {
  _s2();

  // here you set a state to tell the component it need to wait
  //  until the result is fetched from the api
  const {
    0: loadingData,
    1: setLoadingData
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const columns = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(() => [{
    Header: 'Name',
    columns: [{
      Header: 'First Name',
      accessor: 'nameFirst'
    }, {
      Header: 'Last Name',
      accessor: 'nameLast'
    }]
  }, {
    Header: 'Info',
    columns: [{
      Header: 'Age',
      accessor: 'age'
    }]
  }], []); // const data = React.useMemo(() => makeData(100000), [])
  // console.log(data);

  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    async function getData() {
      await axios.get("http://localhost:5051/players").then(response => {
        // check if the data is populated
        console.log(response.data);
        setData(response.data); // you tell it that you had the result

        setLoadingData(false);
      });
    }

    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "rounded-t mb-0 px-4 py-3 border-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
          columns: columns,
          data: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s2(CardPlayers, "S15R9+c6B+dNPB/Qfgi0ZzOKUcA=");

_c2 = CardPlayers;

var _c, _c2;

$RefreshReg$(_c, "Table");
$RefreshReg$(_c2, "CardPlayers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicHJlcGFyZVJvdyIsInBhZ2UiLCJjYW5QcmV2aW91c1BhZ2UiLCJjYW5OZXh0UGFnZSIsInBhZ2VPcHRpb25zIiwicGFnZUNvdW50IiwiZ290b1BhZ2UiLCJuZXh0UGFnZSIsInByZXZpb3VzUGFnZSIsInNldFBhZ2VTaXplIiwic3RhdGUiLCJwYWdlSW5kZXgiLCJwYWdlU2l6ZSIsInVzZVRhYmxlIiwiaW5pdGlhbFN0YXRlIiwidXNlUGFnaW5hdGlvbiIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsInJvdyIsImkiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk51bWJlciIsIndpZHRoIiwiQ2FyZFBsYXllcnMiLCJkZWZhdWx0UHJvcHMiLCJsZWFndWUiLCJkaXZpc2lvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBR0EsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFNBQUY7QUFBV0M7QUFBWCxD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RyxDQUFOO0FBU0Q7O0FBQ0QsUUFBSUQsV0FBSixFQUFpQjtBQUNmO0FBQ0FRLGFBQU87QUFDUjtBQUNGLEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7QUFrQkEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx1RkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxtQ0FBZjtBQUFBLCtCQUNFLDhEQUFDLEtBQUQ7QUFBTyxpQkFBTyxFQUFFdkQsT0FBaEI7QUFBeUIsY0FBSSxFQUFFQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVNEOztJQXJFdUJ1QyxXOztNQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ1Y2E1Njc5MWNkOWY5MDQxM2Y1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VQYWdpbmF0aW9uIH0gZnJvbSAncmVhY3QtdGFibGUnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgbWFrZURhdGEgZnJvbSAnLi4vLi4vbWFrZURhdGEnXHJcblxyXG5cclxuZnVuY3Rpb24gVGFibGUoeyBjb2x1bW5zLCBkYXRhIH0pIHtcclxuICAvLyBVc2UgdGhlIHN0YXRlIGFuZCBmdW5jdGlvbnMgcmV0dXJuZWQgZnJvbSB1c2VUYWJsZSB0byBidWlsZCB5b3VyIFVJXHJcbiAgY29uc3Qge1xyXG4gICAgZ2V0VGFibGVQcm9wcyxcclxuICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgcHJlcGFyZVJvdyxcclxuICAgIHBhZ2UsIC8vIEluc3RlYWQgb2YgdXNpbmcgJ3Jvd3MnLCB3ZSdsbCB1c2UgcGFnZSxcclxuICAgIC8vIHdoaWNoIGhhcyBvbmx5IHRoZSByb3dzIGZvciB0aGUgYWN0aXZlIHBhZ2VcclxuXHJcbiAgICAvLyBUaGUgcmVzdCBvZiB0aGVzZSB0aGluZ3MgYXJlIHN1cGVyIGhhbmR5LCB0b28gOylcclxuICAgIGNhblByZXZpb3VzUGFnZSxcclxuICAgIGNhbk5leHRQYWdlLFxyXG4gICAgcGFnZU9wdGlvbnMsXHJcbiAgICBwYWdlQ291bnQsXHJcbiAgICBnb3RvUGFnZSxcclxuICAgIG5leHRQYWdlLFxyXG4gICAgcHJldmlvdXNQYWdlLFxyXG4gICAgc2V0UGFnZVNpemUsXHJcbiAgICBzdGF0ZTogeyBwYWdlSW5kZXgsIHBhZ2VTaXplIH0sXHJcbiAgfSA9IHVzZVRhYmxlKFxyXG4gICAge1xyXG4gICAgICBjb2x1bW5zLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBpbml0aWFsU3RhdGU6IHsgcGFnZUluZGV4OiAyIH0sXHJcbiAgICB9LFxyXG4gICAgdXNlUGFnaW5hdGlvblxyXG4gIClcclxuXHJcbiAgLy8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPHByZT5cclxuICAgICAgICA8Y29kZT5cclxuICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHBhZ2VJbmRleCxcclxuICAgICAgICAgICAgICBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgICBwYWdlQ291bnQsXHJcbiAgICAgICAgICAgICAgY2FuTmV4dFBhZ2UsXHJcbiAgICAgICAgICAgICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvY29kZT5cclxuICAgICAgPC9wcmU+ICovfVxyXG4gICAgICA8dGFibGUgey4uLmdldFRhYmxlUHJvcHMoKX0+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfT57Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9PC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAgIHtwYWdlLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PntjZWxsLnJlbmRlcignQ2VsbCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICB7LyogXHJcbiAgICAgICAgUGFnaW5hdGlvbiBjYW4gYmUgYnVpbHQgaG93ZXZlciB5b3UnZCBsaWtlLiBcclxuICAgICAgICBUaGlzIGlzIGp1c3QgYSB2ZXJ5IGJhc2ljIFVJIGltcGxlbWVudGF0aW9uOlxyXG4gICAgICAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZSgwKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8PCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7JzwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKHBhZ2VDb3VudCAtIDEpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPj4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBQYWdleycgJ31cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtwYWdlSW5kZXggKyAxfSBvZiB7cGFnZU9wdGlvbnMubGVuZ3RofVxyXG4gICAgICAgICAgPC9zdHJvbmc+eycgJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB8IEdvIHRvIHBhZ2U6eycgJ31cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYWdlSW5kZXggKyAxfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAtIDEgOiAwXHJcbiAgICAgICAgICAgICAgZ290b1BhZ2UocGFnZSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYWdlU2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7WzEwLCAyMCwgMzAsIDQwLCA1MF0ubWFwKHBhZ2VTaXplID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhZ2VTaXplfSB2YWx1ZT17cGFnZVNpemV9PlxyXG4gICAgICAgICAgICAgIFNob3cge3BhZ2VTaXplfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuQ2FyZFBsYXllcnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxlYWd1ZTogXCJNYWpvciBMZWFndWUgQmFzZWJhbGxcIixcclxuICBkaXZpc2lvbjogXCJcIlxyXG59O1xyXG5cclxuQ2FyZFBsYXllcnMucHJvcFR5cGVzID0ge1xyXG4gIGxlYWd1ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZFBsYXllcnMoe1xyXG4gIGxlYWd1ZVxyXG59KSB7XHJcblxyXG4gIC8vIGhlcmUgeW91IHNldCBhIHN0YXRlIHRvIHRlbGwgdGhlIGNvbXBvbmVudCBpdCBuZWVkIHRvIHdhaXRcclxuICAvLyAgdW50aWwgdGhlIHJlc3VsdCBpcyBmZXRjaGVkIGZyb20gdGhlIGFwaVxyXG4gIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiAnTmFtZScsXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdGaXJzdCBOYW1lJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICduYW1lRmlyc3QnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnTGFzdCBOYW1lJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICduYW1lTGFzdCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6ICdJbmZvJyxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0FnZScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnYWdlJyxcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gIC8vIGNvbnN0IGRhdGEgPSBSZWFjdC51c2VNZW1vKCgpID0+IG1ha2VEYXRhKDEwMDAwMCksIFtdKVxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDUxL3BsYXllcnNcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBkYXRhIGlzIHBvcHVsYXRlZFxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgLy8geW91IHRlbGwgaXQgdGhhdCB5b3UgaGFkIHRoZSByZXN1bHRcclxuICAgICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChsb2FkaW5nRGF0YSkge1xyXG4gICAgICAvLyBpZiB0aGUgcmVzdWx0IGlzIG5vdCByZWFkeSBzbyB5b3UgbWFrZSB0aGUgYXhpb3MgY2FsbFxyXG4gICAgICBnZXREYXRhKCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgYmctd2hpdGUgdy1mdWxsIG1iLTYgc2hhZG93LWxnIHJvdW5kZWQgcC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXQgbWItMCBweC00IHB5LTMgYm9yZGVyLTBcIj5cclxuICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9