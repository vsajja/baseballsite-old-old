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
      pageSize: 15
    }
  }, react_table__WEBPACK_IMPORTED_MODULE_5__.usePagination); // Render the UI for your table

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("style", {
      children: `
        table {
          border:1px solid black;
        }
        tr {
          border:1px solid black;
        }
        th {
          border:1px solid black;
        }
        td {
          border:1px solid black;
        }
      `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
            children: column.render('Header')
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 17
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
                lineNumber: 89,
                columnNumber: 26
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        children: '<<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
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
          lineNumber: 121,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
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
          lineNumber: 138,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
          className: "p-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            height: 34,
            src: "https://www.mlbstatic.com/team-logos/team-cap-on-light/" + row.value + ".svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 22
        }, this);
      }
    }, {
      Header: 'Player',
      accessor: 'mlbPlayerId',
      Cell: row => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "p-2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            height: 34,
            style: {
              width: '100%',
              height: 50
            },
            src: "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/" + row.value + "/headshot/67/current"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
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
      Header: 'Height (Ft)',
      accessor: 'heightFt'
    }, {
      Header: 'Height (Inches)',
      accessor: 'heightInches'
    }, {
      Header: 'Weight (lbs)',
      accessor: 'weight'
    }, {
      Header: 'Country',
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
    } // {
    //   Header: 'MLB Debut Date',
    //   accessor: 'mlbDebutDate',
    // },
    // {
    //   Header: 'Birth Date',
    //   accessor: 'birthDate',
    // }
    ]
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
      className: "relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg w-full rounded p-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "rounded-t mb-0 px-4 py-3 border-0",
        children: loadingData ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Loading Please wait..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 15
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
          className: "w-full",
          columns: columns,
          data: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 15
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicHJlcGFyZVJvdyIsInBhZ2UiLCJjYW5QcmV2aW91c1BhZ2UiLCJjYW5OZXh0UGFnZSIsInBhZ2VPcHRpb25zIiwicGFnZUNvdW50IiwiZ290b1BhZ2UiLCJuZXh0UGFnZSIsInByZXZpb3VzUGFnZSIsInNldFBhZ2VTaXplIiwic3RhdGUiLCJwYWdlSW5kZXgiLCJwYWdlU2l6ZSIsInVzZVRhYmxlIiwiaW5pdGlhbFN0YXRlIiwidXNlUGFnaW5hdGlvbiIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsInJvdyIsImkiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk51bWJlciIsIndpZHRoIiwiQ2FyZFBsYXllcnMiLCJkZWZhdWx0UHJvcHMiLCJsZWFndWUiLCJkaXZpc2lvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJDZWxsIiwiaGVpZ2h0Iiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxTQUFGO0FBQVdDO0FBQVgsQ0FBZixFQUFrQztBQUFBOztBQUNoQztBQUNBLFFBQU07QUFDSkMsaUJBREk7QUFFSkMscUJBRkk7QUFHSkMsZ0JBSEk7QUFJSkMsY0FKSTtBQUtKQyxRQUxJO0FBS0U7QUFDTjtBQUVBO0FBQ0FDLG1CQVRJO0FBVUpDLGVBVkk7QUFXSkMsZUFYSTtBQVlKQyxhQVpJO0FBYUpDLFlBYkk7QUFjSkMsWUFkSTtBQWVKQyxnQkFmSTtBQWdCSkMsZUFoQkk7QUFpQkpDLFNBQUssRUFBRTtBQUFFQyxlQUFGO0FBQWFDO0FBQWI7QUFqQkgsTUFrQkZDLHFEQUFRLENBQ1Y7QUFDRWxCLFdBREY7QUFFRUMsUUFGRjtBQUdFa0IsZ0JBQVksRUFBRTtBQUNaSCxlQUFTLEVBQUUsQ0FEQztBQUVaQyxjQUFRLEVBQUU7QUFGRTtBQUhoQixHQURVLEVBU1ZHLHNEQVRVLENBbEJaLENBRmdDLENBZ0NoQzs7QUFDQSxzQkFDRTtBQUFBLDRCQWdCRTtBQUFBLGdCQUFTO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLGVBOEJFLHVHQUFXbEIsYUFBYSxFQUF4QjtBQUFBLDhCQUNFO0FBQUEsa0JBQ0dFLFlBQVksQ0FBQ2lCLEdBQWIsQ0FBaUJDLFdBQVcsaUJBQzNCLG9HQUFRQSxXQUFXLENBQUNDLG1CQUFaLEVBQVI7QUFBQSxvQkFDR0QsV0FBVyxDQUFDRSxPQUFaLENBQW9CSCxHQUFwQixDQUF3QkksTUFBTSxpQkFDN0Isb0dBQVFBLE1BQU0sQ0FBQ0MsY0FBUCxFQUFSO0FBQUEsc0JBQWtDRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxRQUFkO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUUsdUdBQVd4QixpQkFBaUIsRUFBNUI7QUFBQSxrQkFDR0csSUFBSSxDQUFDZSxHQUFMLENBQVMsQ0FBQ08sR0FBRCxFQUFNQyxDQUFOLEtBQVk7QUFDcEJ4QixvQkFBVSxDQUFDdUIsR0FBRCxDQUFWO0FBQ0EsOEJBQ0Usb0dBQVFBLEdBQUcsQ0FBQ0UsV0FBSixFQUFSO0FBQUEsc0JBQ0dGLEdBQUcsQ0FBQ0csS0FBSixDQUFVVixHQUFWLENBQWNXLElBQUksSUFBSTtBQUNyQixrQ0FBTyxvR0FBUUEsSUFBSSxDQUFDQyxZQUFMLEVBQVI7QUFBQSwwQkFBOEJELElBQUksQ0FBQ0wsTUFBTCxDQUFZLE1BQVo7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBUDtBQUNELGFBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBT0QsU0FUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5QkYsZUF5REU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFO0FBQVEsZUFBTyxFQUFFLE1BQU1oQixRQUFRLENBQUMsQ0FBRCxDQUEvQjtBQUFvQyxnQkFBUSxFQUFFLENBQUNKLGVBQS9DO0FBQUEsa0JBQ0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFHWSxHQUhaLGVBSUU7QUFBUSxlQUFPLEVBQUUsTUFBTU0sWUFBWSxFQUFuQztBQUF1QyxnQkFBUSxFQUFFLENBQUNOLGVBQWxEO0FBQUEsa0JBQ0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsRUFNWSxHQU5aLGVBT0U7QUFBUSxlQUFPLEVBQUUsTUFBTUssUUFBUSxFQUEvQjtBQUFtQyxnQkFBUSxFQUFFLENBQUNKLFdBQTlDO0FBQUEsa0JBQ0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsRUFTWSxHQVRaLGVBVUU7QUFBUSxlQUFPLEVBQUUsTUFBTUcsUUFBUSxDQUFDRCxTQUFTLEdBQUcsQ0FBYixDQUEvQjtBQUFnRCxnQkFBUSxFQUFFLENBQUNGLFdBQTNEO0FBQUEsa0JBQ0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsRUFZWSxHQVpaLGVBYUU7QUFBQSwyQkFDTyxHQURQLGVBRUU7QUFBQSxxQkFDR1EsU0FBUyxHQUFHLENBRGYsVUFDc0JQLFdBQVcsQ0FBQ3lCLE1BRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUlZLEdBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsZUFtQkU7QUFBQSxvQ0FDZ0IsR0FEaEIsZUFFRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsc0JBQVksRUFBRWxCLFNBQVMsR0FBRyxDQUY1QjtBQUdFLGtCQUFRLEVBQUVtQixDQUFDLElBQUk7QUFDYixrQkFBTTdCLElBQUksR0FBRzZCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEdBQWlCQyxNQUFNLENBQUNILENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQU4sR0FBeUIsQ0FBMUMsR0FBOEMsQ0FBM0Q7QUFDQTFCLG9CQUFRLENBQUNMLElBQUQsQ0FBUjtBQUNELFdBTkg7QUFPRSxlQUFLLEVBQUU7QUFBRWlDLGlCQUFLLEVBQUU7QUFBVDtBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGLEVBOEJVLEdBOUJWLGVBK0JFO0FBQ0UsYUFBSyxFQUFFdEIsUUFEVDtBQUVFLGdCQUFRLEVBQUVrQixDQUFDLElBQUk7QUFDYnJCLHFCQUFXLENBQUN3QixNQUFNLENBQUNILENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVAsQ0FBWDtBQUNELFNBSkg7QUFBQSxrQkFNRyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUJoQixHQUFyQixDQUF5QkosUUFBUSxpQkFDaEM7QUFBdUIsZUFBSyxFQUFFQSxRQUE5QjtBQUFBLDhCQUNRQSxRQURSO0FBQUEsV0FBYUEsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6REY7QUFBQSxrQkFERjtBQXdHRCxDLENBRUQ7OztHQTNJU2xCLEs7VUFvQkhtQixpRDs7O0tBcEJHbkIsSztBQTZJVHlDLFdBQVcsQ0FBQ0MsWUFBWixHQUEyQjtBQUN6QkMsUUFBTSxFQUFFLHVCQURpQjtBQUV6QkMsVUFBUSxFQUFFO0FBRmUsQ0FBM0I7QUFLQUgsV0FBVyxDQUFDSSxTQUFaLEdBQXdCO0FBQ3RCRixRQUFNLEVBQUVHLDBEQUFnQkM7QUFERixDQUF4QjtBQUllLFNBQVNOLFdBQVQsQ0FBcUI7QUFDbENFO0FBRGtDLENBQXJCLEVBRVo7QUFBQTs7QUFFRDtBQUNBO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQywrQ0FBUSxDQUFDLElBQUQsQ0FBOUM7QUFHQSxRQUFNakQsT0FBTyxHQUFHa0Qsb0RBQUEsQ0FDZCxNQUFNLENBQ0o7QUFDRUMsVUFBTSxFQUFFLGFBRFY7QUFFRW5ELFdBQU8sRUFBRSxDQUNQO0FBQ0VtRCxZQUFNLEVBQUUsTUFEVjtBQUVFQyxjQUFRLEVBQUUsV0FGWjtBQUdFQyxVQUFJLEVBQUd6QixHQUFELElBQVM7QUFDYiw0QkFBTztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUFxQjtBQUFLLGtCQUFNLEVBQUUsRUFBYjtBQUFpQixlQUFHLEVBQUUsNERBQTREQSxHQUFHLENBQUNTLEtBQWhFLEdBQXdFO0FBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUNEO0FBTEgsS0FETyxFQVFQO0FBQ0VjLFlBQU0sRUFBRSxRQURWO0FBRUVDLGNBQVEsRUFBRSxhQUZaO0FBR0VDLFVBQUksRUFBR3pCLEdBQUQsSUFBUztBQUNiLDRCQUFPO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsaUNBQXFCO0FBQUssa0JBQU0sRUFBRSxFQUFiO0FBQzVCLGlCQUFLLEVBQUU7QUFBRVcsbUJBQUssRUFBRSxNQUFUO0FBQWlCZSxvQkFBTSxFQUFFO0FBQXpCLGFBRHFCO0FBRzVCLGVBQUcsRUFDRCw0SEFBNEgxQixHQUFHLENBQUNTLEtBQWhJLEdBQXdJO0FBSjlHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQU1EO0FBVkgsS0FSTyxFQW9CUDtBQUNFYyxZQUFNLEVBQUUsWUFEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQXBCTyxFQXdCUDtBQUNFRCxZQUFNLEVBQUUsV0FEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQXhCTyxFQTRCUDtBQUNFRCxZQUFNLEVBQUUsYUFEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQTVCTyxFQWdDUDtBQUNFRCxZQUFNLEVBQUUsaUJBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0FoQ08sRUFvQ1A7QUFDRUQsWUFBTSxFQUFFLGNBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0FwQ08sRUF3Q1A7QUFDRUQsWUFBTSxFQUFFLFNBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0F4Q08sRUE0Q1A7QUFDRUQsWUFBTSxFQUFFLE1BRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0E1Q08sRUFnRFA7QUFDRUQsWUFBTSxFQUFFLFFBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0FoRE8sRUFvRFA7QUFDRUQsWUFBTSxFQUFFLGVBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0FwRE8sRUF3RFA7QUFDRUQsWUFBTSxFQUFFLFVBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0F4RE8sQ0E0RFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5FTztBQUZYLEdBREksQ0F5RUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyRkksR0FEUSxFQXdGZCxFQXhGYyxDQUFoQjtBQTJGQSxRQUFNO0FBQUEsT0FBQ25ELElBQUQ7QUFBQSxPQUFPc0Q7QUFBUCxNQUFrQk4sK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBRUFPLGtEQUFTLENBQUMsTUFBTTtBQUNkLG1CQUFlQyxPQUFmLEdBQXlCO0FBQ3ZCLFlBQU1DLGdEQUFBLENBQ0MsK0JBREQsRUFFSEMsSUFGRyxDQUVHQyxRQUFELElBQWM7QUFDbEI7QUFDQUMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQzNELElBQXJCO0FBQ0FzRCxlQUFPLENBQUNLLFFBQVEsQ0FBQzNELElBQVYsQ0FBUCxDQUhrQixDQUlsQjs7QUFDQStDLHNCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0QsT0FSRyxDQUFOO0FBU0Q7O0FBQ0QsUUFBSUQsV0FBSixFQUFpQjtBQUNmO0FBQ0FVLGFBQU87QUFDUjtBQUNGLEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7QUFrQkEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx1RkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxtQ0FBZjtBQUFBLGtCQUNLVixXQUFXLGdCQUNWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURVLGdCQUdWLDhEQUFDLEtBQUQ7QUFBTyxtQkFBUyxFQUFDLFFBQWpCO0FBQTBCLGlCQUFPLEVBQUUvQyxPQUFuQztBQUE0QyxjQUFJLEVBQUVDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBYUQ7O0lBckl1QnVDLFc7O01BQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzFlNjYyMTU5ZDc5ZDMzOTk1MDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZVBhZ2luYXRpb24gfSBmcm9tICdyZWFjdC10YWJsZSdcclxuXHJcbmltcG9ydCBtYWtlRGF0YSBmcm9tICcuLi8uLi9tYWtlRGF0YSdcclxuXHJcbmZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSB9KSB7XHJcbiAgLy8gVXNlIHRoZSBzdGF0ZSBhbmQgZnVuY3Rpb25zIHJldHVybmVkIGZyb20gdXNlVGFibGUgdG8gYnVpbGQgeW91ciBVSVxyXG4gIGNvbnN0IHtcclxuICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgIGhlYWRlckdyb3VwcyxcclxuICAgIHByZXBhcmVSb3csXHJcbiAgICBwYWdlLCAvLyBJbnN0ZWFkIG9mIHVzaW5nICdyb3dzJywgd2UnbGwgdXNlIHBhZ2UsXHJcbiAgICAvLyB3aGljaCBoYXMgb25seSB0aGUgcm93cyBmb3IgdGhlIGFjdGl2ZSBwYWdlXHJcblxyXG4gICAgLy8gVGhlIHJlc3Qgb2YgdGhlc2UgdGhpbmdzIGFyZSBzdXBlciBoYW5keSwgdG9vIDspXHJcbiAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICBjYW5OZXh0UGFnZSxcclxuICAgIHBhZ2VPcHRpb25zLFxyXG4gICAgcGFnZUNvdW50LFxyXG4gICAgZ290b1BhZ2UsXHJcbiAgICBuZXh0UGFnZSxcclxuICAgIHByZXZpb3VzUGFnZSxcclxuICAgIHNldFBhZ2VTaXplLFxyXG4gICAgc3RhdGU6IHsgcGFnZUluZGV4LCBwYWdlU2l6ZSB9LFxyXG4gIH0gPSB1c2VUYWJsZShcclxuICAgIHtcclxuICAgICAgY29sdW1ucyxcclxuICAgICAgZGF0YSxcclxuICAgICAgaW5pdGlhbFN0YXRlOiB7IFxyXG4gICAgICAgIHBhZ2VJbmRleDogMCxcclxuICAgICAgICBwYWdlU2l6ZTogMTVcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB1c2VQYWdpbmF0aW9uXHJcbiAgKVxyXG5cclxuICAvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8cHJlPlxyXG4gICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcGFnZUluZGV4LFxyXG4gICAgICAgICAgICAgIHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgIHBhZ2VDb3VudCxcclxuICAgICAgICAgICAgICBjYW5OZXh0UGFnZSxcclxuICAgICAgICAgICAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9jb2RlPlxyXG4gICAgICA8L3ByZT4gKi99XHJcbiAgICAgIDxzdHlsZT57YFxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9Pntjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX08L3RoPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICAge3BhZ2UubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+e2NlbGwucmVuZGVyKCdDZWxsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIHsvKiBcclxuICAgICAgICBQYWdpbmF0aW9uIGNhbiBiZSBidWlsdCBob3dldmVyIHlvdSdkIGxpa2UuIFxyXG4gICAgICAgIFRoaXMgaXMganVzdCBhIHZlcnkgYmFzaWMgVUkgaW1wbGVtZW50YXRpb246XHJcbiAgICAgICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKDApfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7Jzw8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJldmlvdXNQYWdlKCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5leHRQYWdlKCl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UocGFnZUNvdW50IC0gMSl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+Pid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFBhZ2V7JyAnfVxyXG4gICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAge3BhZ2VJbmRleCArIDF9IG9mIHtwYWdlT3B0aW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICA8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIHwgR28gdG8gcGFnZTp7JyAnfVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BhZ2VJbmRleCArIDF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBwYWdlID0gZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIC0gMSA6IDBcclxuICAgICAgICAgICAgICBnb3RvUGFnZShwYWdlKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICB2YWx1ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VTaXplKE51bWJlcihlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtbMTAsIDIwLCAzMCwgNDAsIDUwXS5tYXAocGFnZVNpemUgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17cGFnZVNpemV9IHZhbHVlPXtwYWdlU2l6ZX0+XHJcbiAgICAgICAgICAgICAgU2hvdyB7cGFnZVNpemV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG5DYXJkUGxheWVycy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGVhZ3VlOiBcIk1ham9yIExlYWd1ZSBCYXNlYmFsbFwiLFxyXG4gIGRpdmlzaW9uOiBcIlwiXHJcbn07XHJcblxyXG5DYXJkUGxheWVycy5wcm9wVHlwZXMgPSB7XHJcbiAgbGVhZ3VlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkUGxheWVycyh7XHJcbiAgbGVhZ3VlXHJcbn0pIHtcclxuXHJcbiAgLy8gaGVyZSB5b3Ugc2V0IGEgc3RhdGUgdG8gdGVsbCB0aGUgY29tcG9uZW50IGl0IG5lZWQgdG8gd2FpdFxyXG4gIC8vICB1bnRpbCB0aGUgcmVzdWx0IGlzIGZldGNoZWQgZnJvbSB0aGUgYXBpXHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiAnTUxCIFBsYXllcnMnLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnVGVhbScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnbWxiVGVhbUlkJyxcclxuICAgICAgICAgICAgQ2VsbDogKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPjxpbWcgaGVpZ2h0PXszNH0gc3JjPXtcImh0dHBzOi8vd3d3Lm1sYnN0YXRpYy5jb20vdGVhbS1sb2dvcy90ZWFtLWNhcC1vbi1saWdodC9cIiArIHJvdy52YWx1ZSArIFwiLnN2Z1wifS8+PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1BsYXllcicsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnbWxiUGxheWVySWQnLFxyXG4gICAgICAgICAgICBDZWxsOiAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+PGltZyBoZWlnaHQ9ezM0fSBcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDUwIH19XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWcubWxic3RhdGljLmNvbS9tbGItcGhvdG9zL2ltYWdlL3VwbG9hZC9kX3Blb3BsZTpnZW5lcmljOmhlYWRzaG90OjY3OmN1cnJlbnQucG5nL3dfMjEzLHFfYXV0bzpiZXN0L3YxL3Blb3BsZS9cIiArIHJvdy52YWx1ZSArIFwiL2hlYWRzaG90LzY3L2N1cnJlbnRcIlxyXG4gICAgICAgICAgICAgIH0vPjwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdGaXJzdCBOYW1lJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICduYW1lRmlyc3QnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdMYXN0IE5hbWUnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ25hbWVMYXN0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0hlaWdodCAoRnQpJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdoZWlnaHRGdCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdIZWlnaHQgKEluY2hlcyknLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2hlaWdodEluY2hlcycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdXZWlnaHQgKGxicyknLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3dlaWdodCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdDb3VudHJ5JyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdiaXJ0aENvdW50cnknLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnQmF0cycsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnYmF0cycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdUaHJvd3MnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Rocm93cycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdKZXJzZXkgTnVtYmVyJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdqZXJzZXlOdW1iZXInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnUG9zaXRpb24nLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Bvc2l0aW9uJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAvLyAgIEhlYWRlcjogJ01MQiBEZWJ1dCBEYXRlJyxcclxuICAgICAgICAgIC8vICAgYWNjZXNzb3I6ICdtbGJEZWJ1dERhdGUnLFxyXG4gICAgICAgICAgLy8gfSxcclxuICAgICAgICAgIC8vIHtcclxuICAgICAgICAgIC8vICAgSGVhZGVyOiAnQmlydGggRGF0ZScsXHJcbiAgICAgICAgICAvLyAgIGFjY2Vzc29yOiAnYmlydGhEYXRlJyxcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgSGVhZGVyOiAnSW5mbycsXHJcbiAgICAgIC8vICAgY29sdW1uczogW1xyXG4gICAgICAvLyAgICAge1xyXG4gICAgICAvLyAgICAgICBIZWFkZXI6ICdBZ2UnLFxyXG4gICAgICAvLyAgICAgICBhY2Nlc3NvcjogJ2FnZScsXHJcbiAgICAgIC8vICAgICB9LFxyXG4gICAgICAvLyAgICAge1xyXG4gICAgICAvLyAgICAgICBIZWFkZXI6ICdMYXN0IE5hbWUnLFxyXG4gICAgICAvLyAgICAgICBhY2Nlc3NvcjogJ25hbWVMYXN0JyxcclxuICAgICAgLy8gICAgIH0sXHJcbiAgICAgIC8vICAgXSxcclxuICAgICAgLy8gfVxyXG4gICAgXSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwNTEvcGxheWVyc1wiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGRhdGEgaXMgcG9wdWxhdGVkXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAvLyB5b3UgdGVsbCBpdCB0aGF0IHlvdSBoYWQgdGhlIHJlc3VsdFxyXG4gICAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvYWRpbmdEYXRhKSB7XHJcbiAgICAgIC8vIGlmIHRoZSByZXN1bHQgaXMgbm90IHJlYWR5IHNvIHlvdSBtYWtlIHRoZSBheGlvcyBjYWxsXHJcbiAgICAgIGdldERhdGEoKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLXctMCBicmVhay13b3JkcyBiZy13aGl0ZSBtYi02IHNoYWRvdy1sZyB3LWZ1bGwgcm91bmRlZCBwLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdCBtYi0wIHB4LTQgcHktMyBib3JkZXItMFwiPlxyXG4gICAgICAgICAgICB7bG9hZGluZ0RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgPHA+TG9hZGluZyBQbGVhc2Ugd2FpdC4uLjwvcD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwidy1mdWxsXCIgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=