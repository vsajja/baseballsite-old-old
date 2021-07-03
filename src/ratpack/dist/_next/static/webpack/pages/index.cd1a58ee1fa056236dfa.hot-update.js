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
      await axios__WEBPACK_IMPORTED_MODULE_4___default().get("http://localhost:5051/players") // .get("players")
      .then(response => {
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
      className: "relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded p-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "rounded-t mb-0 px-4 py-3 border-0",
        children: loadingData ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Loading Please wait..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 15
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
          columns: columns,
          data: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 282,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicHJlcGFyZVJvdyIsInBhZ2UiLCJjYW5QcmV2aW91c1BhZ2UiLCJjYW5OZXh0UGFnZSIsInBhZ2VPcHRpb25zIiwicGFnZUNvdW50IiwiZ290b1BhZ2UiLCJuZXh0UGFnZSIsInByZXZpb3VzUGFnZSIsInNldFBhZ2VTaXplIiwic3RhdGUiLCJwYWdlSW5kZXgiLCJwYWdlU2l6ZSIsInVzZVRhYmxlIiwiaW5pdGlhbFN0YXRlIiwidXNlUGFnaW5hdGlvbiIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsInJvdyIsImkiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk51bWJlciIsIndpZHRoIiwiQ2FyZFBsYXllcnMiLCJkZWZhdWx0UHJvcHMiLCJsZWFndWUiLCJkaXZpc2lvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJDZWxsIiwiaGVpZ2h0Iiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxTQUFGO0FBQVdDO0FBQVgsQ0FBZixFQUFrQztBQUFBOztBQUNoQztBQUNBLFFBQU07QUFDSkMsaUJBREk7QUFFSkMscUJBRkk7QUFHSkMsZ0JBSEk7QUFJSkMsY0FKSTtBQUtKQyxRQUxJO0FBS0U7QUFDTjtBQUVBO0FBQ0FDLG1CQVRJO0FBVUpDLGVBVkk7QUFXSkMsZUFYSTtBQVlKQyxhQVpJO0FBYUpDLFlBYkk7QUFjSkMsWUFkSTtBQWVKQyxnQkFmSTtBQWdCSkMsZUFoQkk7QUFpQkpDLFNBQUssRUFBRTtBQUFFQyxlQUFGO0FBQWFDO0FBQWI7QUFqQkgsTUFrQkZDLHFEQUFRLENBQ1Y7QUFDRWxCLFdBREY7QUFFRUMsUUFGRjtBQUdFa0IsZ0JBQVksRUFBRTtBQUNaSCxlQUFTLEVBQUUsQ0FEQztBQUVaQyxjQUFRLEVBQUU7QUFGRTtBQUhoQixHQURVLEVBU1ZHLHNEQVRVLENBbEJaLENBRmdDLENBZ0NoQzs7QUFDQSxzQkFDRTtBQUFBLDRCQWdCRTtBQUFBLGdCQUFTO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLGVBOEJFLHVHQUFXbEIsYUFBYSxFQUF4QjtBQUFBLDhCQUNFO0FBQUEsa0JBQ0dFLFlBQVksQ0FBQ2lCLEdBQWIsQ0FBaUJDLFdBQVcsaUJBQzNCLG9HQUFRQSxXQUFXLENBQUNDLG1CQUFaLEVBQVI7QUFBQSxvQkFDR0QsV0FBVyxDQUFDRSxPQUFaLENBQW9CSCxHQUFwQixDQUF3QkksTUFBTSxpQkFDN0Isb0dBQVFBLE1BQU0sQ0FBQ0MsY0FBUCxFQUFSO0FBQUEsc0JBQWtDRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxRQUFkO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUUsdUdBQVd4QixpQkFBaUIsRUFBNUI7QUFBQSxrQkFDR0csSUFBSSxDQUFDZSxHQUFMLENBQVMsQ0FBQ08sR0FBRCxFQUFNQyxDQUFOLEtBQVk7QUFDcEJ4QixvQkFBVSxDQUFDdUIsR0FBRCxDQUFWO0FBQ0EsOEJBQ0Usb0dBQVFBLEdBQUcsQ0FBQ0UsV0FBSixFQUFSO0FBQUEsc0JBQ0dGLEdBQUcsQ0FBQ0csS0FBSixDQUFVVixHQUFWLENBQWNXLElBQUksSUFBSTtBQUNyQixrQ0FBTyxvR0FBUUEsSUFBSSxDQUFDQyxZQUFMLEVBQVI7QUFBQSwwQkFBOEJELElBQUksQ0FBQ0wsTUFBTCxDQUFZLE1BQVo7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBUDtBQUNELGFBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBT0QsU0FUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5QkYsZUF5REU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFO0FBQVEsZUFBTyxFQUFFLE1BQU1oQixRQUFRLENBQUMsQ0FBRCxDQUEvQjtBQUFvQyxnQkFBUSxFQUFFLENBQUNKLGVBQS9DO0FBQUEsa0JBQ0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFHWSxHQUhaLGVBSUU7QUFBUSxlQUFPLEVBQUUsTUFBTU0sWUFBWSxFQUFuQztBQUF1QyxnQkFBUSxFQUFFLENBQUNOLGVBQWxEO0FBQUEsa0JBQ0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsRUFNWSxHQU5aLGVBT0U7QUFBUSxlQUFPLEVBQUUsTUFBTUssUUFBUSxFQUEvQjtBQUFtQyxnQkFBUSxFQUFFLENBQUNKLFdBQTlDO0FBQUEsa0JBQ0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsRUFTWSxHQVRaLGVBVUU7QUFBUSxlQUFPLEVBQUUsTUFBTUcsUUFBUSxDQUFDRCxTQUFTLEdBQUcsQ0FBYixDQUEvQjtBQUFnRCxnQkFBUSxFQUFFLENBQUNGLFdBQTNEO0FBQUEsa0JBQ0c7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsRUFZWSxHQVpaLGVBYUU7QUFBQSwyQkFDTyxHQURQLGVBRUU7QUFBQSxxQkFDR1EsU0FBUyxHQUFHLENBRGYsVUFDc0JQLFdBQVcsQ0FBQ3lCLE1BRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUlZLEdBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsZUFtQkU7QUFBQSxvQ0FDZ0IsR0FEaEIsZUFFRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsc0JBQVksRUFBRWxCLFNBQVMsR0FBRyxDQUY1QjtBQUdFLGtCQUFRLEVBQUVtQixDQUFDLElBQUk7QUFDYixrQkFBTTdCLElBQUksR0FBRzZCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEdBQWlCQyxNQUFNLENBQUNILENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQU4sR0FBeUIsQ0FBMUMsR0FBOEMsQ0FBM0Q7QUFDQTFCLG9CQUFRLENBQUNMLElBQUQsQ0FBUjtBQUNELFdBTkg7QUFPRSxlQUFLLEVBQUU7QUFBRWlDLGlCQUFLLEVBQUU7QUFBVDtBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGLEVBOEJVLEdBOUJWLGVBK0JFO0FBQ0UsYUFBSyxFQUFFdEIsUUFEVDtBQUVFLGdCQUFRLEVBQUVrQixDQUFDLElBQUk7QUFDYnJCLHFCQUFXLENBQUN3QixNQUFNLENBQUNILENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVAsQ0FBWDtBQUNELFNBSkg7QUFBQSxrQkFNRyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUJoQixHQUFyQixDQUF5QkosUUFBUSxpQkFDaEM7QUFBdUIsZUFBSyxFQUFFQSxRQUE5QjtBQUFBLDhCQUNRQSxRQURSO0FBQUEsV0FBYUEsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6REY7QUFBQSxrQkFERjtBQXdHRCxDLENBRUQ7OztHQTNJU2xCLEs7VUFvQkhtQixpRDs7O0tBcEJHbkIsSztBQTZJVHlDLFdBQVcsQ0FBQ0MsWUFBWixHQUEyQjtBQUN6QkMsUUFBTSxFQUFFLHVCQURpQjtBQUV6QkMsVUFBUSxFQUFFO0FBRmUsQ0FBM0I7QUFLQUgsV0FBVyxDQUFDSSxTQUFaLEdBQXdCO0FBQ3RCRixRQUFNLEVBQUVHLDBEQUFnQkM7QUFERixDQUF4QjtBQUllLFNBQVNOLFdBQVQsQ0FBcUI7QUFDbENFO0FBRGtDLENBQXJCLEVBRVo7QUFBQTs7QUFFRDtBQUNBO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQywrQ0FBUSxDQUFDLElBQUQsQ0FBOUM7QUFHQSxRQUFNakQsT0FBTyxHQUFHa0Qsb0RBQUEsQ0FDZCxNQUFNLENBQ0o7QUFDRUMsVUFBTSxFQUFFLGFBRFY7QUFFRW5ELFdBQU8sRUFBRSxDQUNQO0FBQ0VtRCxZQUFNLEVBQUUsTUFEVjtBQUVFQyxjQUFRLEVBQUUsV0FGWjtBQUdFQyxVQUFJLEVBQUd6QixHQUFELElBQVM7QUFDYiw0QkFBTztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGlDQUFxQjtBQUFLLGtCQUFNLEVBQUUsRUFBYjtBQUFpQixlQUFHLEVBQUUsNERBQTREQSxHQUFHLENBQUNTLEtBQWhFLEdBQXdFO0FBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUNEO0FBTEgsS0FETyxFQVFQO0FBQ0VjLFlBQU0sRUFBRSxRQURWO0FBRUVDLGNBQVEsRUFBRSxhQUZaO0FBR0VDLFVBQUksRUFBR3pCLEdBQUQsSUFBUztBQUNiLDRCQUFPO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsaUNBQXFCO0FBQUssa0JBQU0sRUFBRSxFQUFiO0FBQzVCLGlCQUFLLEVBQUU7QUFBRVcsbUJBQUssRUFBRSxNQUFUO0FBQWlCZSxvQkFBTSxFQUFFO0FBQXpCLGFBRHFCO0FBRzVCLGVBQUcsRUFDRCw0SEFBNEgxQixHQUFHLENBQUNTLEtBQWhJLEdBQXdJO0FBSjlHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQU1EO0FBVkgsS0FSTyxFQW9CUDtBQUNFYyxZQUFNLEVBQUUsWUFEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQXBCTyxFQXdCUDtBQUNFRCxZQUFNLEVBQUUsV0FEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQXhCTyxFQTRCUDtBQUNFRCxZQUFNLEVBQUUsYUFEVjtBQUVFQyxjQUFRLEVBQUU7QUFGWixLQTVCTyxFQWdDUDtBQUNFRCxZQUFNLEVBQUUsaUJBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0FoQ08sRUFvQ1A7QUFDRUQsWUFBTSxFQUFFLGNBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0FwQ08sRUF3Q1A7QUFDRUQsWUFBTSxFQUFFLFNBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0F4Q08sRUE0Q1A7QUFDRUQsWUFBTSxFQUFFLE1BRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0E1Q08sRUFnRFA7QUFDRUQsWUFBTSxFQUFFLFFBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0FoRE8sRUFvRFA7QUFDRUQsWUFBTSxFQUFFLGVBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0FwRE8sRUF3RFA7QUFDRUQsWUFBTSxFQUFFLFVBRFY7QUFFRUMsY0FBUSxFQUFFO0FBRlosS0F4RE8sQ0E0RFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5FTztBQUZYLEdBREksQ0F5RUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyRkksR0FEUSxFQXdGZCxFQXhGYyxDQUFoQjtBQTJGQSxRQUFNO0FBQUEsT0FBQ25ELElBQUQ7QUFBQSxPQUFPc0Q7QUFBUCxNQUFrQk4sK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBRUFPLGtEQUFTLENBQUMsTUFBTTtBQUNkLG1CQUFlQyxPQUFmLEdBQXlCO0FBQ3ZCLFlBQU1DLGdEQUFBLENBQ0MsK0JBREQsRUFFSjtBQUZJLE9BR0hDLElBSEcsQ0FHR0MsUUFBRCxJQUFjO0FBQ2xCO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUMzRCxJQUFyQjtBQUNBc0QsZUFBTyxDQUFDSyxRQUFRLENBQUMzRCxJQUFWLENBQVAsQ0FIa0IsQ0FJbEI7O0FBQ0ErQyxzQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELE9BVEcsQ0FBTjtBQVVEOztBQUNELFFBQUlELFdBQUosRUFBaUI7QUFDZjtBQUNBVSxhQUFPO0FBQ1I7QUFDRixHQWpCUSxFQWlCTixFQWpCTSxDQUFUO0FBbUJBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsZ0ZBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsbUNBQWY7QUFBQSxrQkFDS1YsV0FBVyxnQkFDVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEVSxnQkFHViw4REFBQyxLQUFEO0FBQU8saUJBQU8sRUFBRS9DLE9BQWhCO0FBQXlCLGNBQUksRUFBRUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFhRDs7SUF0SXVCdUMsVzs7TUFBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZDFhNThlZTFmYTA1NjIzNmRmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlUGFnaW5hdGlvbiB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xyXG5cclxuaW1wb3J0IG1ha2VEYXRhIGZyb20gJy4uLy4uL21ha2VEYXRhJ1xyXG5cclxuZnVuY3Rpb24gVGFibGUoeyBjb2x1bW5zLCBkYXRhIH0pIHtcclxuICAvLyBVc2UgdGhlIHN0YXRlIGFuZCBmdW5jdGlvbnMgcmV0dXJuZWQgZnJvbSB1c2VUYWJsZSB0byBidWlsZCB5b3VyIFVJXHJcbiAgY29uc3Qge1xyXG4gICAgZ2V0VGFibGVQcm9wcyxcclxuICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgcHJlcGFyZVJvdyxcclxuICAgIHBhZ2UsIC8vIEluc3RlYWQgb2YgdXNpbmcgJ3Jvd3MnLCB3ZSdsbCB1c2UgcGFnZSxcclxuICAgIC8vIHdoaWNoIGhhcyBvbmx5IHRoZSByb3dzIGZvciB0aGUgYWN0aXZlIHBhZ2VcclxuXHJcbiAgICAvLyBUaGUgcmVzdCBvZiB0aGVzZSB0aGluZ3MgYXJlIHN1cGVyIGhhbmR5LCB0b28gOylcclxuICAgIGNhblByZXZpb3VzUGFnZSxcclxuICAgIGNhbk5leHRQYWdlLFxyXG4gICAgcGFnZU9wdGlvbnMsXHJcbiAgICBwYWdlQ291bnQsXHJcbiAgICBnb3RvUGFnZSxcclxuICAgIG5leHRQYWdlLFxyXG4gICAgcHJldmlvdXNQYWdlLFxyXG4gICAgc2V0UGFnZVNpemUsXHJcbiAgICBzdGF0ZTogeyBwYWdlSW5kZXgsIHBhZ2VTaXplIH0sXHJcbiAgfSA9IHVzZVRhYmxlKFxyXG4gICAge1xyXG4gICAgICBjb2x1bW5zLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBpbml0aWFsU3RhdGU6IHsgXHJcbiAgICAgICAgcGFnZUluZGV4OiAwLFxyXG4gICAgICAgIHBhZ2VTaXplOiAxNVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHVzZVBhZ2luYXRpb25cclxuICApXHJcblxyXG4gIC8vIFJlbmRlciB0aGUgVUkgZm9yIHlvdXIgdGFibGVcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDxwcmU+XHJcbiAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwYWdlSW5kZXgsXHJcbiAgICAgICAgICAgICAgcGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgcGFnZUNvdW50LFxyXG4gICAgICAgICAgICAgIGNhbk5leHRQYWdlLFxyXG4gICAgICAgICAgICAgIGNhblByZXZpb3VzUGFnZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgMlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2NvZGU+XHJcbiAgICAgIDwvcHJlPiAqL31cclxuICAgICAgPHN0eWxlPntgXHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcclxuICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+e2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfTwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgICB7cGFnZS5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC5yZW5kZXIoJ0NlbGwnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgey8qIFxyXG4gICAgICAgIFBhZ2luYXRpb24gY2FuIGJlIGJ1aWx0IGhvd2V2ZXIgeW91J2QgbGlrZS4gXHJcbiAgICAgICAgVGhpcyBpcyBqdXN0IGEgdmVyeSBiYXNpYyBVSSBpbXBsZW1lbnRhdGlvbjpcclxuICAgICAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UoMCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPDwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmV2aW91c1BhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV4dFBhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShwYWdlQ291bnQgLSAxKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgUGFnZXsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICB7cGFnZUluZGV4ICsgMX0gb2Yge3BhZ2VPcHRpb25zLmxlbmd0aH1cclxuICAgICAgICAgIDwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgfCBHbyB0byBwYWdlOnsnICd9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFnZUluZGV4ICsgMX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLSAxIDogMFxyXG4gICAgICAgICAgICAgIGdvdG9QYWdlKHBhZ2UpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgc2V0UGFnZVNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1sxMCwgMjAsIDMwLCA0MCwgNTBdLm1hcChwYWdlU2l6ZSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwYWdlU2l6ZX0gdmFsdWU9e3BhZ2VTaXplfT5cclxuICAgICAgICAgICAgICBTaG93IHtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcbkNhcmRQbGF5ZXJzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsZWFndWU6IFwiTWFqb3IgTGVhZ3VlIEJhc2ViYWxsXCIsXHJcbiAgZGl2aXNpb246IFwiXCJcclxufTtcclxuXHJcbkNhcmRQbGF5ZXJzLnByb3BUeXBlcyA9IHtcclxuICBsZWFndWU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRQbGF5ZXJzKHtcclxuICBsZWFndWVcclxufSkge1xyXG5cclxuICAvLyBoZXJlIHlvdSBzZXQgYSBzdGF0ZSB0byB0ZWxsIHRoZSBjb21wb25lbnQgaXQgbmVlZCB0byB3YWl0XHJcbiAgLy8gIHVudGlsIHRoZSByZXN1bHQgaXMgZmV0Y2hlZCBmcm9tIHRoZSBhcGlcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiBbXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6ICdNTEIgUGxheWVycycsXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdUZWFtJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdtbGJUZWFtSWQnLFxyXG4gICAgICAgICAgICBDZWxsOiAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+PGltZyBoZWlnaHQ9ezM0fSBzcmM9e1wiaHR0cHM6Ly93d3cubWxic3RhdGljLmNvbS90ZWFtLWxvZ29zL3RlYW0tY2FwLW9uLWxpZ2h0L1wiICsgcm93LnZhbHVlICsgXCIuc3ZnXCJ9Lz48L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnUGxheWVyJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdtbGJQbGF5ZXJJZCcsXHJcbiAgICAgICAgICAgIENlbGw6IChyb3cpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwLTJcIj48aW1nIGhlaWdodD17MzR9IFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogNTAgfX1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgXCJodHRwczovL2ltZy5tbGJzdGF0aWMuY29tL21sYi1waG90b3MvaW1hZ2UvdXBsb2FkL2RfcGVvcGxlOmdlbmVyaWM6aGVhZHNob3Q6Njc6Y3VycmVudC5wbmcvd18yMTMscV9hdXRvOmJlc3QvdjEvcGVvcGxlL1wiICsgcm93LnZhbHVlICsgXCIvaGVhZHNob3QvNjcvY3VycmVudFwiXHJcbiAgICAgICAgICAgICAgfS8+PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0ZpcnN0IE5hbWUnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ25hbWVGaXJzdCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0xhc3QgTmFtZScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnbmFtZUxhc3QnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnSGVpZ2h0IChGdCknLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2hlaWdodEZ0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0hlaWdodCAoSW5jaGVzKScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnaGVpZ2h0SW5jaGVzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1dlaWdodCAobGJzKScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnd2VpZ2h0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0NvdW50cnknLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2JpcnRoQ291bnRyeScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdCYXRzJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdiYXRzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1Rocm93cycsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAndGhyb3dzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0plcnNleSBOdW1iZXInLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2plcnNleU51bWJlcicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdQb3NpdGlvbicsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAncG9zaXRpb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIHtcclxuICAgICAgICAgIC8vICAgSGVhZGVyOiAnTUxCIERlYnV0IERhdGUnLFxyXG4gICAgICAgICAgLy8gICBhY2Nlc3NvcjogJ21sYkRlYnV0RGF0ZScsXHJcbiAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgLy8gICBIZWFkZXI6ICdCaXJ0aCBEYXRlJyxcclxuICAgICAgICAgIC8vICAgYWNjZXNzb3I6ICdiaXJ0aERhdGUnLFxyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICBIZWFkZXI6ICdJbmZvJyxcclxuICAgICAgLy8gICBjb2x1bW5zOiBbXHJcbiAgICAgIC8vICAgICB7XHJcbiAgICAgIC8vICAgICAgIEhlYWRlcjogJ0FnZScsXHJcbiAgICAgIC8vICAgICAgIGFjY2Vzc29yOiAnYWdlJyxcclxuICAgICAgLy8gICAgIH0sXHJcbiAgICAgIC8vICAgICB7XHJcbiAgICAgIC8vICAgICAgIEhlYWRlcjogJ0xhc3QgTmFtZScsXHJcbiAgICAgIC8vICAgICAgIGFjY2Vzc29yOiAnbmFtZUxhc3QnLFxyXG4gICAgICAvLyAgICAgfSxcclxuICAgICAgLy8gICBdLFxyXG4gICAgICAvLyB9XHJcbiAgICBdLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MS9wbGF5ZXJzXCIpXHJcbiAgICAgICAgLy8gLmdldChcInBsYXllcnNcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBkYXRhIGlzIHBvcHVsYXRlZFxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgLy8geW91IHRlbGwgaXQgdGhhdCB5b3UgaGFkIHRoZSByZXN1bHRcclxuICAgICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChsb2FkaW5nRGF0YSkge1xyXG4gICAgICAvLyBpZiB0aGUgcmVzdWx0IGlzIG5vdCByZWFkeSBzbyB5b3UgbWFrZSB0aGUgYXhpb3MgY2FsbFxyXG4gICAgICBnZXREYXRhKCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgYmctd2hpdGUgbWItNiBzaGFkb3ctbGcgcm91bmRlZCBwLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdCBtYi0wIHB4LTQgcHktMyBib3JkZXItMFwiPlxyXG4gICAgICAgICAgICB7bG9hZGluZ0RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgPHA+TG9hZGluZyBQbGVhc2Ugd2FpdC4uLjwvcD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=