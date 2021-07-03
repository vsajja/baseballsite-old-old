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
          width: 100%;
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
            lineNumber: 79,
            columnNumber: 17
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
                lineNumber: 90,
                columnNumber: 26
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        children: '<<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
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
          lineNumber: 122,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
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
          lineNumber: 139,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
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
            lineNumber: 178,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
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
            lineNumber: 185,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicHJlcGFyZVJvdyIsInBhZ2UiLCJjYW5QcmV2aW91c1BhZ2UiLCJjYW5OZXh0UGFnZSIsInBhZ2VPcHRpb25zIiwicGFnZUNvdW50IiwiZ290b1BhZ2UiLCJuZXh0UGFnZSIsInByZXZpb3VzUGFnZSIsInNldFBhZ2VTaXplIiwic3RhdGUiLCJwYWdlSW5kZXgiLCJwYWdlU2l6ZSIsInVzZVRhYmxlIiwiaW5pdGlhbFN0YXRlIiwidXNlUGFnaW5hdGlvbiIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsInJvdyIsImkiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk51bWJlciIsIndpZHRoIiwiQ2FyZFBsYXllcnMiLCJkZWZhdWx0UHJvcHMiLCJsZWFndWUiLCJkaXZpc2lvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJDZWxsIiwiaGVpZ2h0Iiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtB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QUFQLE1BQWtCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFFQU8sa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsbUJBQWVDLE9BQWYsR0FBeUI7QUFDdkIsWUFBTUMsZ0RBQUEsQ0FDQywrQkFERCxFQUVIQyxJQUZHLENBRUdDLFFBQUQsSUFBYztBQUNsQjtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDM0QsSUFBckI7QUFDQXNELGVBQU8sQ0FBQ0ssUUFBUSxDQUFDM0QsSUFBVixDQUFQLENBSGtCLENBSWxCOztBQUNBK0Msc0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxPQVJHLENBQU47QUFTRDs7QUFDRCxRQUFJRCxXQUFKLEVBQWlCO0FBQ2Y7QUFDQVUsYUFBTztBQUNSO0FBQ0YsR0FoQlEsRUFnQk4sRUFoQk0sQ0FBVDtBQWtCQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHVGQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1DQUFmO0FBQUEsa0JBQ0tWLFdBQVcsZ0JBQ1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFUsZ0JBR1YsOERBQUMsS0FBRDtBQUFPLGlCQUFPLEVBQUUvQyxPQUFoQjtBQUF5QixjQUFJLEVBQUVDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBYUQ7O0lBckl1QnVDLFc7O01BQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTAyZDkyOTkwZDYzY2EzZjlhMWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVGFibGUsIHVzZVBhZ2luYXRpb24gfSBmcm9tICdyZWFjdC10YWJsZSdcclxuXHJcbmltcG9ydCBtYWtlRGF0YSBmcm9tICcuLi8uLi9tYWtlRGF0YSdcclxuXHJcbmZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSB9KSB7XHJcbiAgLy8gVXNlIHRoZSBzdGF0ZSBhbmQgZnVuY3Rpb25zIHJldHVybmVkIGZyb20gdXNlVGFibGUgdG8gYnVpbGQgeW91ciBVSVxyXG4gIGNvbnN0IHtcclxuICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgIGhlYWRlckdyb3VwcyxcclxuICAgIHByZXBhcmVSb3csXHJcbiAgICBwYWdlLCAvLyBJbnN0ZWFkIG9mIHVzaW5nICdyb3dzJywgd2UnbGwgdXNlIHBhZ2UsXHJcbiAgICAvLyB3aGljaCBoYXMgb25seSB0aGUgcm93cyBmb3IgdGhlIGFjdGl2ZSBwYWdlXHJcblxyXG4gICAgLy8gVGhlIHJlc3Qgb2YgdGhlc2UgdGhpbmdzIGFyZSBzdXBlciBoYW5keSwgdG9vIDspXHJcbiAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICBjYW5OZXh0UGFnZSxcclxuICAgIHBhZ2VPcHRpb25zLFxyXG4gICAgcGFnZUNvdW50LFxyXG4gICAgZ290b1BhZ2UsXHJcbiAgICBuZXh0UGFnZSxcclxuICAgIHByZXZpb3VzUGFnZSxcclxuICAgIHNldFBhZ2VTaXplLFxyXG4gICAgc3RhdGU6IHsgcGFnZUluZGV4LCBwYWdlU2l6ZSB9LFxyXG4gIH0gPSB1c2VUYWJsZShcclxuICAgIHtcclxuICAgICAgY29sdW1ucyxcclxuICAgICAgZGF0YSxcclxuICAgICAgaW5pdGlhbFN0YXRlOiB7IFxyXG4gICAgICAgIHBhZ2VJbmRleDogMCxcclxuICAgICAgICBwYWdlU2l6ZTogMTVcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB1c2VQYWdpbmF0aW9uXHJcbiAgKVxyXG5cclxuICAvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8cHJlPlxyXG4gICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcGFnZUluZGV4LFxyXG4gICAgICAgICAgICAgIHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgIHBhZ2VDb3VudCxcclxuICAgICAgICAgICAgICBjYW5OZXh0UGFnZSxcclxuICAgICAgICAgICAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9jb2RlPlxyXG4gICAgICA8L3ByZT4gKi99XHJcbiAgICAgIDxzdHlsZT57YFxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcclxuICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+e2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfTwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgICB7cGFnZS5tYXAoKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC5yZW5kZXIoJ0NlbGwnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgey8qIFxyXG4gICAgICAgIFBhZ2luYXRpb24gY2FuIGJlIGJ1aWx0IGhvd2V2ZXIgeW91J2QgbGlrZS4gXHJcbiAgICAgICAgVGhpcyBpcyBqdXN0IGEgdmVyeSBiYXNpYyBVSSBpbXBsZW1lbnRhdGlvbjpcclxuICAgICAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UoMCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPDwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmV2aW91c1BhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV4dFBhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShwYWdlQ291bnQgLSAxKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgUGFnZXsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICB7cGFnZUluZGV4ICsgMX0gb2Yge3BhZ2VPcHRpb25zLmxlbmd0aH1cclxuICAgICAgICAgIDwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgfCBHbyB0byBwYWdlOnsnICd9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFnZUluZGV4ICsgMX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLSAxIDogMFxyXG4gICAgICAgICAgICAgIGdvdG9QYWdlKHBhZ2UpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgc2V0UGFnZVNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1sxMCwgMjAsIDMwLCA0MCwgNTBdLm1hcChwYWdlU2l6ZSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwYWdlU2l6ZX0gdmFsdWU9e3BhZ2VTaXplfT5cclxuICAgICAgICAgICAgICBTaG93IHtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcbkNhcmRQbGF5ZXJzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsZWFndWU6IFwiTWFqb3IgTGVhZ3VlIEJhc2ViYWxsXCIsXHJcbiAgZGl2aXNpb246IFwiXCJcclxufTtcclxuXHJcbkNhcmRQbGF5ZXJzLnByb3BUeXBlcyA9IHtcclxuICBsZWFndWU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRQbGF5ZXJzKHtcclxuICBsZWFndWVcclxufSkge1xyXG5cclxuICAvLyBoZXJlIHlvdSBzZXQgYSBzdGF0ZSB0byB0ZWxsIHRoZSBjb21wb25lbnQgaXQgbmVlZCB0byB3YWl0XHJcbiAgLy8gIHVudGlsIHRoZSByZXN1bHQgaXMgZmV0Y2hlZCBmcm9tIHRoZSBhcGlcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiBbXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6ICdNTEIgUGxheWVycycsXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdUZWFtJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdtbGJUZWFtSWQnLFxyXG4gICAgICAgICAgICBDZWxsOiAocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+PGltZyBoZWlnaHQ9ezM0fSBzcmM9e1wiaHR0cHM6Ly93d3cubWxic3RhdGljLmNvbS90ZWFtLWxvZ29zL3RlYW0tY2FwLW9uLWxpZ2h0L1wiICsgcm93LnZhbHVlICsgXCIuc3ZnXCJ9Lz48L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnUGxheWVyJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdtbGJQbGF5ZXJJZCcsXHJcbiAgICAgICAgICAgIENlbGw6IChyb3cpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwLTJcIj48aW1nIGhlaWdodD17MzR9IFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogNTAgfX1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgXCJodHRwczovL2ltZy5tbGJzdGF0aWMuY29tL21sYi1waG90b3MvaW1hZ2UvdXBsb2FkL2RfcGVvcGxlOmdlbmVyaWM6aGVhZHNob3Q6Njc6Y3VycmVudC5wbmcvd18yMTMscV9hdXRvOmJlc3QvdjEvcGVvcGxlL1wiICsgcm93LnZhbHVlICsgXCIvaGVhZHNob3QvNjcvY3VycmVudFwiXHJcbiAgICAgICAgICAgICAgfS8+PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0ZpcnN0IE5hbWUnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ25hbWVGaXJzdCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0xhc3QgTmFtZScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnbmFtZUxhc3QnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnSGVpZ2h0IChGdCknLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2hlaWdodEZ0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0hlaWdodCAoSW5jaGVzKScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnaGVpZ2h0SW5jaGVzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1dlaWdodCAobGJzKScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnd2VpZ2h0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0NvdW50cnknLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2JpcnRoQ291bnRyeScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdCYXRzJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdiYXRzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1Rocm93cycsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAndGhyb3dzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0plcnNleSBOdW1iZXInLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2plcnNleU51bWJlcicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdQb3NpdGlvbicsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAncG9zaXRpb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIHtcclxuICAgICAgICAgIC8vICAgSGVhZGVyOiAnTUxCIERlYnV0IERhdGUnLFxyXG4gICAgICAgICAgLy8gICBhY2Nlc3NvcjogJ21sYkRlYnV0RGF0ZScsXHJcbiAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgLy8gICBIZWFkZXI6ICdCaXJ0aCBEYXRlJyxcclxuICAgICAgICAgIC8vICAgYWNjZXNzb3I6ICdiaXJ0aERhdGUnLFxyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICBIZWFkZXI6ICdJbmZvJyxcclxuICAgICAgLy8gICBjb2x1bW5zOiBbXHJcbiAgICAgIC8vICAgICB7XHJcbiAgICAgIC8vICAgICAgIEhlYWRlcjogJ0FnZScsXHJcbiAgICAgIC8vICAgICAgIGFjY2Vzc29yOiAnYWdlJyxcclxuICAgICAgLy8gICAgIH0sXHJcbiAgICAgIC8vICAgICB7XHJcbiAgICAgIC8vICAgICAgIEhlYWRlcjogJ0xhc3QgTmFtZScsXHJcbiAgICAgIC8vICAgICAgIGFjY2Vzc29yOiAnbmFtZUxhc3QnLFxyXG4gICAgICAvLyAgICAgfSxcclxuICAgICAgLy8gICBdLFxyXG4gICAgICAvLyB9XHJcbiAgICBdLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MS9wbGF5ZXJzXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgZGF0YSBpcyBwb3B1bGF0ZWRcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIC8vIHlvdSB0ZWxsIGl0IHRoYXQgeW91IGhhZCB0aGUgcmVzdWx0XHJcbiAgICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9hZGluZ0RhdGEpIHtcclxuICAgICAgLy8gaWYgdGhlIHJlc3VsdCBpcyBub3QgcmVhZHkgc28geW91IG1ha2UgdGhlIGF4aW9zIGNhbGxcclxuICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIGJnLXdoaXRlIG1iLTYgc2hhZG93LWxnIHctZnVsbCByb3VuZGVkIHAtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC10IG1iLTAgcHgtNCBweS0zIGJvcmRlci0wXCI+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nRGF0YSA/IChcclxuICAgICAgICAgICAgICA8cD5Mb2FkaW5nIFBsZWFzZSB3YWl0Li4uPC9wPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==