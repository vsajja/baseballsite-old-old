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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _makeData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../makeData */ "./makeData.js");
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
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_5__.useTable)({
    columns,
    data,
    initialState: {
      pageIndex: 0,
      pageSize: 50
    }
  }, react_table__WEBPACK_IMPORTED_MODULE_5__.usePagination); // Render the UI for your table

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
            children: column.render('Header')
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
                lineNumber: 76,
                columnNumber: 26
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        children: '<<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
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
          lineNumber: 108,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
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
          lineNumber: 125,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)]
  }, void 0, true);
} // components


_s(Table, "JDI+7VFvVRrIJkCn908U3ObIOC0=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_5__.useTable];
});

_c = Table;
CardPlayers.defaultProps = {
  league: "Major League Baseball",
  division: ""
};
CardPlayers.propTypes = {
  league: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const columns = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => [{
    Header: 'MLB Players',
    columns: [{
      Header: 'Team',
      accessor: 'mlbTeamId',
      Cell: row => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            height: 34,
            src: "https://www.mlbstatic.com/team-logos/team-cap-on-light/" + row.value + ".svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 27
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 22
        }, this);
      }
    }, {
      Header: 'Player',
      accessor: 'mlbPlayerId',
      Cell: row => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            height: 34,
            src: "https://img.mlbstatic.com/mlb-photos/image/upload/w_150,q_auto:good/v1/people/663538/action/hero/current"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 27
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 22
        }, this);
      }
    }, {
      Header: 'First Name',
      accessor: 'nameFirst'
    }, {
      Header: 'Last Name',
      accessor: 'nameLast'
    }, {
      Header: 'Ft',
      accessor: 'heightFt'
    }, {
      Header: 'Inches',
      accessor: 'heightInches'
    }, {
      Header: 'Weight',
      accessor: 'weight'
    }, {
      Header: 'Birth Country',
      accessor: 'birthCountry'
    }, {
      Header: 'Bats',
      accessor: 'bats'
    }, {
      Header: 'Throws',
      accessor: 'throws'
    }, {
      Header: 'Jersey Number',
      accessor: 'jerseyNumber'
    }, {
      Header: 'Position',
      accessor: 'position'
    }, // {
    //   Header: 'MLB Debut Date',
    //   accessor: 'mlbDebutDate',
    // },
    // {
    //   Header: 'Birth Date',
    //   accessor: 'birthDate',
    // },
    {
      Header: 'Birth City',
      accessor: 'birthCity'
    }]
  } // {
  //   Header: 'Info',
  //   columns: [
  //     {
  //       Header: 'Age',
  //       accessor: 'age',
  //     },
  //     {
  //       Header: 'Last Name',
  //       accessor: 'nameLast',
  //     },
  //   ],
  // }
  ], []);
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    async function getData() {
      await axios__WEBPACK_IMPORTED_MODULE_4___default().get("http://localhost:5051/players").then(response => {
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
        children: loadingData ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Loading Please wait..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 15
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
          columns: columns,
          data: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicHJlcGFyZVJvdyIsInBhZ2UiLCJjYW5QcmV2aW91c1BhZ2UiLCJjYW5OZXh0UGFnZSIsInBhZ2VPcHRpb25zIiwicGFnZUNvdW50IiwiZ290b1BhZ2UiLCJuZXh0UGFnZSIsInByZXZpb3VzUGFnZSIsInNldFBhZ2VTaXplIiwic3RhdGUiLCJwYWdlSW5kZXgiLCJwYWdlU2l6ZSIsInVzZVRhYmxlIiwiaW5pdGlhbFN0YXRlIiwidXNlUGFnaW5hdGlvbiIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsInJvdyIsImkiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk51bWJlciIsIndpZHRoIiwiQ2FyZFBsYXllcnMiLCJkZWZhdWx0UHJvcHMiLCJsZWFndWUiLCJkaXZpc2lvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJDZWxsIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxTQUFG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QUhrQixDQUlsQjs7QUFDQStDLHNCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0QsT0FSRyxDQUFOO0FBU0Q7O0FBQ0QsUUFBSUQsV0FBSixFQUFpQjtBQUNmO0FBQ0FTLGFBQU87QUFDUjtBQUNGLEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7QUFrQkEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx1RkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxtQ0FBZjtBQUFBLGtCQUVLVCxXQUFXLGdCQUNWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURVLGdCQUdWLDhEQUFDLEtBQUQ7QUFBTyxpQkFBTyxFQUFFL0MsT0FBaEI7QUFBeUIsY0FBSSxFQUFFQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWNEOztJQXRJdUJ1QyxXOztNQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk4NjE3MGI0NTAzZDM4MzQ1ZjA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VQYWdpbmF0aW9uIH0gZnJvbSAncmVhY3QtdGFibGUnXHJcblxyXG5pbXBvcnQgbWFrZURhdGEgZnJvbSAnLi4vLi4vbWFrZURhdGEnXHJcblxyXG5mdW5jdGlvbiBUYWJsZSh7IGNvbHVtbnMsIGRhdGEgfSkge1xyXG4gIC8vIFVzZSB0aGUgc3RhdGUgYW5kIGZ1bmN0aW9ucyByZXR1cm5lZCBmcm9tIHVzZVRhYmxlIHRvIGJ1aWxkIHlvdXIgVUlcclxuICBjb25zdCB7XHJcbiAgICBnZXRUYWJsZVByb3BzLFxyXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICBoZWFkZXJHcm91cHMsXHJcbiAgICBwcmVwYXJlUm93LFxyXG4gICAgcGFnZSwgLy8gSW5zdGVhZCBvZiB1c2luZyAncm93cycsIHdlJ2xsIHVzZSBwYWdlLFxyXG4gICAgLy8gd2hpY2ggaGFzIG9ubHkgdGhlIHJvd3MgZm9yIHRoZSBhY3RpdmUgcGFnZVxyXG5cclxuICAgIC8vIFRoZSByZXN0IG9mIHRoZXNlIHRoaW5ncyBhcmUgc3VwZXIgaGFuZHksIHRvbyA7KVxyXG4gICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgY2FuTmV4dFBhZ2UsXHJcbiAgICBwYWdlT3B0aW9ucyxcclxuICAgIHBhZ2VDb3VudCxcclxuICAgIGdvdG9QYWdlLFxyXG4gICAgbmV4dFBhZ2UsXHJcbiAgICBwcmV2aW91c1BhZ2UsXHJcbiAgICBzZXRQYWdlU2l6ZSxcclxuICAgIHN0YXRlOiB7IHBhZ2VJbmRleCwgcGFnZVNpemUgfSxcclxuICB9ID0gdXNlVGFibGUoXHJcbiAgICB7XHJcbiAgICAgIGNvbHVtbnMsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGluaXRpYWxTdGF0ZTogeyBcclxuICAgICAgICBwYWdlSW5kZXg6IDAsXHJcbiAgICAgICAgcGFnZVNpemU6IDUwXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdXNlUGFnaW5hdGlvblxyXG4gIClcclxuXHJcbiAgLy8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPHByZT5cclxuICAgICAgICA8Y29kZT5cclxuICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHBhZ2VJbmRleCxcclxuICAgICAgICAgICAgICBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgICBwYWdlQ291bnQsXHJcbiAgICAgICAgICAgICAgY2FuTmV4dFBhZ2UsXHJcbiAgICAgICAgICAgICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvY29kZT5cclxuICAgICAgPC9wcmU+ICovfVxyXG5cclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcclxuICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+e2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfTwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgICB7cGFnZS5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC5yZW5kZXIoJ0NlbGwnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgey8qIFxyXG4gICAgICAgIFBhZ2luYXRpb24gY2FuIGJlIGJ1aWx0IGhvd2V2ZXIgeW91J2QgbGlrZS4gXHJcbiAgICAgICAgVGhpcyBpcyBqdXN0IGEgdmVyeSBiYXNpYyBVSSBpbXBsZW1lbnRhdGlvbjpcclxuICAgICAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UoMCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPDwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmV2aW91c1BhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV4dFBhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShwYWdlQ291bnQgLSAxKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgUGFnZXsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICB7cGFnZUluZGV4ICsgMX0gb2Yge3BhZ2VPcHRpb25zLmxlbmd0aH1cclxuICAgICAgICAgIDwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgfCBHbyB0byBwYWdlOnsnICd9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFnZUluZGV4ICsgMX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLSAxIDogMFxyXG4gICAgICAgICAgICAgIGdvdG9QYWdlKHBhZ2UpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgc2V0UGFnZVNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1sxMCwgMjAsIDMwLCA0MCwgNTBdLm1hcChwYWdlU2l6ZSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwYWdlU2l6ZX0gdmFsdWU9e3BhZ2VTaXplfT5cclxuICAgICAgICAgICAgICBTaG93IHtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcbkNhcmRQbGF5ZXJzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsZWFndWU6IFwiTWFqb3IgTGVhZ3VlIEJhc2ViYWxsXCIsXHJcbiAgZGl2aXNpb246IFwiXCJcclxufTtcclxuXHJcbkNhcmRQbGF5ZXJzLnByb3BUeXBlcyA9IHtcclxuICBsZWFndWU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRQbGF5ZXJzKHtcclxuICBsZWFndWVcclxufSkge1xyXG5cclxuICAvLyBoZXJlIHlvdSBzZXQgYSBzdGF0ZSB0byB0ZWxsIHRoZSBjb21wb25lbnQgaXQgbmVlZCB0byB3YWl0XHJcbiAgLy8gIHVudGlsIHRoZSByZXN1bHQgaXMgZmV0Y2hlZCBmcm9tIHRoZSBhcGlcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiBbXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6ICdNTEIgUGxheWVycycsXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdUZWFtJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdtbGJUZWFtSWQnLFxyXG4gICAgICAgICAgICBDZWxsOiAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+PGltZyBoZWlnaHQ9ezM0fSBzcmM9e1wiaHR0cHM6Ly93d3cubWxic3RhdGljLmNvbS90ZWFtLWxvZ29zL3RlYW0tY2FwLW9uLWxpZ2h0L1wiICsgcm93LnZhbHVlICsgXCIuc3ZnXCJ9Lz48L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnUGxheWVyJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdtbGJQbGF5ZXJJZCcsXHJcbiAgICAgICAgICAgIENlbGw6IChyb3cpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPGRpdj48aW1nIGhlaWdodD17MzR9IHNyYz17XCJodHRwczovL2ltZy5tbGJzdGF0aWMuY29tL21sYi1waG90b3MvaW1hZ2UvdXBsb2FkL3dfMTUwLHFfYXV0bzpnb29kL3YxL3Blb3BsZS82NjM1MzgvYWN0aW9uL2hlcm8vY3VycmVudFwifS8+PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdGaXJzdCBOYW1lJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICduYW1lRmlyc3QnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnTGFzdCBOYW1lJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICduYW1lTGFzdCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdGdCcsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnaGVpZ2h0RnQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnSW5jaGVzJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdoZWlnaHRJbmNoZXMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnV2VpZ2h0JyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICd3ZWlnaHQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnQmlydGggQ291bnRyeScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnYmlydGhDb3VudHJ5JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0JhdHMnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2JhdHMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnVGhyb3dzJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICd0aHJvd3MnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnSmVyc2V5IE51bWJlcicsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnamVyc2V5TnVtYmVyJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1Bvc2l0aW9uJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdwb3NpdGlvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgLy8gICBIZWFkZXI6ICdNTEIgRGVidXQgRGF0ZScsXHJcbiAgICAgICAgICAvLyAgIGFjY2Vzc29yOiAnbWxiRGVidXREYXRlJyxcclxuICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAvLyAgIEhlYWRlcjogJ0JpcnRoIERhdGUnLFxyXG4gICAgICAgICAgLy8gICBhY2Nlc3NvcjogJ2JpcnRoRGF0ZScsXHJcbiAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdCaXJ0aCBDaXR5JyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdiaXJ0aENpdHknLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICBIZWFkZXI6ICdJbmZvJyxcclxuICAgICAgLy8gICBjb2x1bW5zOiBbXHJcbiAgICAgIC8vICAgICB7XHJcbiAgICAgIC8vICAgICAgIEhlYWRlcjogJ0FnZScsXHJcbiAgICAgIC8vICAgICAgIGFjY2Vzc29yOiAnYWdlJyxcclxuICAgICAgLy8gICAgIH0sXHJcbiAgICAgIC8vICAgICB7XHJcbiAgICAgIC8vICAgICAgIEhlYWRlcjogJ0xhc3QgTmFtZScsXHJcbiAgICAgIC8vICAgICAgIGFjY2Vzc29yOiAnbmFtZUxhc3QnLFxyXG4gICAgICAvLyAgICAgfSxcclxuICAgICAgLy8gICBdLFxyXG4gICAgICAvLyB9XHJcbiAgICBdLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MS9wbGF5ZXJzXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgZGF0YSBpcyBwb3B1bGF0ZWRcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIC8vIHlvdSB0ZWxsIGl0IHRoYXQgeW91IGhhZCB0aGUgcmVzdWx0XHJcbiAgICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9hZGluZ0RhdGEpIHtcclxuICAgICAgLy8gaWYgdGhlIHJlc3VsdCBpcyBub3QgcmVhZHkgc28geW91IG1ha2UgdGhlIGF4aW9zIGNhbGxcclxuICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIGJnLXdoaXRlIHctZnVsbCBtYi02IHNoYWRvdy1sZyByb3VuZGVkIHAtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC10IG1iLTAgcHgtNCBweS0zIGJvcmRlci0wXCI+XHJcblxyXG4gICAgICAgICAgICB7bG9hZGluZ0RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgPHA+TG9hZGluZyBQbGVhc2Ugd2FpdC4uLjwvcD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=