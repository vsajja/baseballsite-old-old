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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        children: '<<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
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
            width: '100%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
          lineNumber: 101,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("style", {
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
      lineNumber: 107,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
            children: column.render('Header')
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 17
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
                lineNumber: 137,
                columnNumber: 26
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        children: '<<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
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
          lineNumber: 169,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
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
          lineNumber: 186,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
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
            lineNumber: 225,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
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
            lineNumber: 232,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
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
      className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "rounded-t mb-0 px-4 py-3 border-0",
        children: loadingData ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Loading Please wait..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 15
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
          columns: columns,
          data: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 329,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicHJlcGFyZVJvdyIsInBhZ2UiLCJjYW5QcmV2aW91c1BhZ2UiLCJjYW5OZXh0UGFnZSIsInBhZ2VPcHRpb25zIiwicGFnZUNvdW50IiwiZ290b1BhZ2UiLCJuZXh0UGFnZSIsInByZXZpb3VzUGFnZSIsInNldFBhZ2VTaXplIiwic3RhdGUiLCJwYWdlSW5kZXgiLCJwYWdlU2l6ZSIsInVzZVRhYmxlIiwiaW5pdGlhbFN0YXRlIiwidXNlUGFnaW5hdGlvbiIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk51bWJlciIsIndpZHRoIiwibWFwIiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImNvbHVtbiIsImdldEhlYWRlclByb3BzIiwicmVuZGVyIiwicm93IiwiaSIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwiQ2FyZFBsYXllcnMiLCJkZWZhdWx0UHJvcHMiLCJsZWFndWUiLCJkaXZpc2lvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJDZWxsIiwiaGVpZ2h0Iiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtB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QUNFO0FBQUssZUFBUyxFQUFDLHVGQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1DQUFmO0FBQUEsa0JBRUtWLFdBQVcsZ0JBQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFUsZ0JBR1YsOERBQUMsS0FBRDtBQUFPLGlCQUFPLEVBQUUvQyxPQUFoQjtBQUF5QixjQUFJLEVBQUVDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBY0Q7O0lBdEl1QnVDLFc7O01BQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjM0OTg0MDY3YmFlMWY2MjRhODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZVBhZ2luYXRpb24gfSBmcm9tICdyZWFjdC10YWJsZSdcclxuXHJcbmltcG9ydCBtYWtlRGF0YSBmcm9tICcuLi8uLi9tYWtlRGF0YSdcclxuXHJcbmZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSB9KSB7XHJcbiAgLy8gVXNlIHRoZSBzdGF0ZSBhbmQgZnVuY3Rpb25zIHJldHVybmVkIGZyb20gdXNlVGFibGUgdG8gYnVpbGQgeW91ciBVSVxyXG4gIGNvbnN0IHtcclxuICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgIGhlYWRlckdyb3VwcyxcclxuICAgIHByZXBhcmVSb3csXHJcbiAgICBwYWdlLCAvLyBJbnN0ZWFkIG9mIHVzaW5nICdyb3dzJywgd2UnbGwgdXNlIHBhZ2UsXHJcbiAgICAvLyB3aGljaCBoYXMgb25seSB0aGUgcm93cyBmb3IgdGhlIGFjdGl2ZSBwYWdlXHJcblxyXG4gICAgLy8gVGhlIHJlc3Qgb2YgdGhlc2UgdGhpbmdzIGFyZSBzdXBlciBoYW5keSwgdG9vIDspXHJcbiAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICBjYW5OZXh0UGFnZSxcclxuICAgIHBhZ2VPcHRpb25zLFxyXG4gICAgcGFnZUNvdW50LFxyXG4gICAgZ290b1BhZ2UsXHJcbiAgICBuZXh0UGFnZSxcclxuICAgIHByZXZpb3VzUGFnZSxcclxuICAgIHNldFBhZ2VTaXplLFxyXG4gICAgc3RhdGU6IHsgcGFnZUluZGV4LCBwYWdlU2l6ZSB9LFxyXG4gIH0gPSB1c2VUYWJsZShcclxuICAgIHtcclxuICAgICAgY29sdW1ucyxcclxuICAgICAgZGF0YSxcclxuICAgICAgaW5pdGlhbFN0YXRlOiB7IFxyXG4gICAgICAgIHBhZ2VJbmRleDogMCxcclxuICAgICAgICBwYWdlU2l6ZTogNTBcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB1c2VQYWdpbmF0aW9uXHJcbiAgKVxyXG5cclxuICAvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8cHJlPlxyXG4gICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcGFnZUluZGV4LFxyXG4gICAgICAgICAgICAgIHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgIHBhZ2VDb3VudCxcclxuICAgICAgICAgICAgICBjYW5OZXh0UGFnZSxcclxuICAgICAgICAgICAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9jb2RlPlxyXG4gICAgICA8L3ByZT4gKi99XHJcbiAgICAgIHsvKiBcclxuICAgICAgICBQYWdpbmF0aW9uIGNhbiBiZSBidWlsdCBob3dldmVyIHlvdSdkIGxpa2UuIFxyXG4gICAgICAgIFRoaXMgaXMganVzdCBhIHZlcnkgYmFzaWMgVUkgaW1wbGVtZW50YXRpb246XHJcbiAgICAgICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKDApfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7Jzw8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJldmlvdXNQYWdlKCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5leHRQYWdlKCl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UocGFnZUNvdW50IC0gMSl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+Pid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFBhZ2V7JyAnfVxyXG4gICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAge3BhZ2VJbmRleCArIDF9IG9mIHtwYWdlT3B0aW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICA8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIHwgR28gdG8gcGFnZTp7JyAnfVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BhZ2VJbmRleCArIDF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBwYWdlID0gZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIC0gMSA6IDBcclxuICAgICAgICAgICAgICBnb3RvUGFnZShwYWdlKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgc2V0UGFnZVNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1sxMCwgMjAsIDMwLCA0MCwgNTBdLm1hcChwYWdlU2l6ZSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwYWdlU2l6ZX0gdmFsdWU9e3BhZ2VTaXplfT5cclxuICAgICAgICAgICAgICBTaG93IHtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZT57YFxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9Pntjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX08L3RoPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICAge3BhZ2UubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+e2NlbGwucmVuZGVyKCdDZWxsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIHsvKiBcclxuICAgICAgICBQYWdpbmF0aW9uIGNhbiBiZSBidWlsdCBob3dldmVyIHlvdSdkIGxpa2UuIFxyXG4gICAgICAgIFRoaXMgaXMganVzdCBhIHZlcnkgYmFzaWMgVUkgaW1wbGVtZW50YXRpb246XHJcbiAgICAgICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKDApfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7Jzw8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJldmlvdXNQYWdlKCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5leHRQYWdlKCl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UocGFnZUNvdW50IC0gMSl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+Pid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFBhZ2V7JyAnfVxyXG4gICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAge3BhZ2VJbmRleCArIDF9IG9mIHtwYWdlT3B0aW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICA8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIHwgR28gdG8gcGFnZTp7JyAnfVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BhZ2VJbmRleCArIDF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBwYWdlID0gZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIC0gMSA6IDBcclxuICAgICAgICAgICAgICBnb3RvUGFnZShwYWdlKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICB2YWx1ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VTaXplKE51bWJlcihlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtbMTAsIDIwLCAzMCwgNDAsIDUwXS5tYXAocGFnZVNpemUgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17cGFnZVNpemV9IHZhbHVlPXtwYWdlU2l6ZX0+XHJcbiAgICAgICAgICAgICAgU2hvdyB7cGFnZVNpemV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG5DYXJkUGxheWVycy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGVhZ3VlOiBcIk1ham9yIExlYWd1ZSBCYXNlYmFsbFwiLFxyXG4gIGRpdmlzaW9uOiBcIlwiXHJcbn07XHJcblxyXG5DYXJkUGxheWVycy5wcm9wVHlwZXMgPSB7XHJcbiAgbGVhZ3VlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkUGxheWVycyh7XHJcbiAgbGVhZ3VlXHJcbn0pIHtcclxuXHJcbiAgLy8gaGVyZSB5b3Ugc2V0IGEgc3RhdGUgdG8gdGVsbCB0aGUgY29tcG9uZW50IGl0IG5lZWQgdG8gd2FpdFxyXG4gIC8vICB1bnRpbCB0aGUgcmVzdWx0IGlzIGZldGNoZWQgZnJvbSB0aGUgYXBpXHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiAnTUxCIFBsYXllcnMnLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnVGVhbScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnbWxiVGVhbUlkJyxcclxuICAgICAgICAgICAgQ2VsbDogKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPjxpbWcgaGVpZ2h0PXszNH0gc3JjPXtcImh0dHBzOi8vd3d3Lm1sYnN0YXRpYy5jb20vdGVhbS1sb2dvcy90ZWFtLWNhcC1vbi1saWdodC9cIiArIHJvdy52YWx1ZSArIFwiLnN2Z1wifS8+PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1BsYXllcicsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnbWxiUGxheWVySWQnLFxyXG4gICAgICAgICAgICBDZWxsOiAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+PGltZyBoZWlnaHQ9ezM0fSBcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDUwIH19XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWcubWxic3RhdGljLmNvbS9tbGItcGhvdG9zL2ltYWdlL3VwbG9hZC9kX3Blb3BsZTpnZW5lcmljOmhlYWRzaG90OjY3OmN1cnJlbnQucG5nL3dfMjEzLHFfYXV0bzpiZXN0L3YxL3Blb3BsZS9cIiArIHJvdy52YWx1ZSArIFwiL2hlYWRzaG90LzY3L2N1cnJlbnRcIlxyXG4gICAgICAgICAgICAgIH0vPjwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdGaXJzdCBOYW1lJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICduYW1lRmlyc3QnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdMYXN0IE5hbWUnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ25hbWVMYXN0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0hlaWdodCAoRnQpJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdoZWlnaHRGdCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdIZWlnaHQgKEluY2hlcyknLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2hlaWdodEluY2hlcycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdXZWlnaHQgKGxicyknLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3dlaWdodCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdDb3VudHJ5JyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdiaXJ0aENvdW50cnknLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnQmF0cycsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnYmF0cycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdUaHJvd3MnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Rocm93cycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdKZXJzZXkgTnVtYmVyJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdqZXJzZXlOdW1iZXInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnUG9zaXRpb24nLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Bvc2l0aW9uJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAvLyAgIEhlYWRlcjogJ01MQiBEZWJ1dCBEYXRlJyxcclxuICAgICAgICAgIC8vICAgYWNjZXNzb3I6ICdtbGJEZWJ1dERhdGUnLFxyXG4gICAgICAgICAgLy8gfSxcclxuICAgICAgICAgIC8vIHtcclxuICAgICAgICAgIC8vICAgSGVhZGVyOiAnQmlydGggRGF0ZScsXHJcbiAgICAgICAgICAvLyAgIGFjY2Vzc29yOiAnYmlydGhEYXRlJyxcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgSGVhZGVyOiAnSW5mbycsXHJcbiAgICAgIC8vICAgY29sdW1uczogW1xyXG4gICAgICAvLyAgICAge1xyXG4gICAgICAvLyAgICAgICBIZWFkZXI6ICdBZ2UnLFxyXG4gICAgICAvLyAgICAgICBhY2Nlc3NvcjogJ2FnZScsXHJcbiAgICAgIC8vICAgICB9LFxyXG4gICAgICAvLyAgICAge1xyXG4gICAgICAvLyAgICAgICBIZWFkZXI6ICdMYXN0IE5hbWUnLFxyXG4gICAgICAvLyAgICAgICBhY2Nlc3NvcjogJ25hbWVMYXN0JyxcclxuICAgICAgLy8gICAgIH0sXHJcbiAgICAgIC8vICAgXSxcclxuICAgICAgLy8gfVxyXG4gICAgXSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwNTEvcGxheWVyc1wiKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGRhdGEgaXMgcG9wdWxhdGVkXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAvLyB5b3UgdGVsbCBpdCB0aGF0IHlvdSBoYWQgdGhlIHJlc3VsdFxyXG4gICAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvYWRpbmdEYXRhKSB7XHJcbiAgICAgIC8vIGlmIHRoZSByZXN1bHQgaXMgbm90IHJlYWR5IHNvIHlvdSBtYWtlIHRoZSBheGlvcyBjYWxsXHJcbiAgICAgIGdldERhdGEoKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLXctMCBicmVhay13b3JkcyBiZy13aGl0ZSB3LWZ1bGwgbWItNiBzaGFkb3ctbGcgcm91bmRlZCBwLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdCBtYi0wIHB4LTQgcHktMyBib3JkZXItMFwiPlxyXG5cclxuICAgICAgICAgICAge2xvYWRpbmdEYXRhID8gKFxyXG4gICAgICAgICAgICAgIDxwPkxvYWRpbmcgUGxlYXNlIHdhaXQuLi48L3A+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2RhdGF9ICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9