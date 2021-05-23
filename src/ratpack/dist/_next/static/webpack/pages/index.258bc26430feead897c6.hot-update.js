self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeData": function() { return /* binding */ makeData; },
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Navbars/IndexNavbar.js */ "./components/Navbars/IndexNavbar.js");
/* harmony import */ var components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Footers/Footer.js */ "./components/Footers/Footer.js");
/* harmony import */ var components_Cards_CardBarChart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Cards/CardBarChart.js */ "./components/Cards/CardBarChart.js");
/* harmony import */ var components_Cards_CardLineChart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Cards/CardLineChart.js */ "./components/Cards/CardLineChart.js");
/* harmony import */ var components_Cards_CardPageVisits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Cards/CardPageVisits.js */ "./components/Cards/CardPageVisits.js");
/* harmony import */ var components_Cards_CardProfile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Cards/CardProfile.js */ "./components/Cards/CardProfile.js");
/* harmony import */ var components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Cards/CardStats.js */ "./components/Cards/CardStats.js");
/* harmony import */ var namor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! namor */ "./node_modules/namor/dist/index.js");
/* harmony import */ var namor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(namor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\git\\baseballsite\\portal\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/jsx-no-target-blank */













const range = len => {
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(i);
  }

  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor__WEBPACK_IMPORTED_MODULE_11___default().generate({
      words: 1,
      numbers: 0
    }),
    lastName: namor__WEBPACK_IMPORTED_MODULE_11___default().generate({
      words: 1,
      numbers: 0
    }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single'
  };
};

function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return _objectSpread(_objectSpread({}, newPerson()), {}, {
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      });
    });
  };

  return makeDataLevel();
}
const Styles = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
_c = Styles;

function Table({
  columns,
  data
}) {
  _s();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: {
      groupBy,
      expanded
    }
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_12__.useTable)({
    columns,
    data
  }, react_table__WEBPACK_IMPORTED_MODULE_12__.useGroupBy, react_table__WEBPACK_IMPORTED_MODULE_12__.useExpanded // useGroupBy would be pretty useless without useExpanded ;)
  ); // We don't want to render all of the rows for this example, so cap
  // it at 100 for this use case

  const firstPageRows = rows.slice(0, 100);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("code", {
        children: JSON.stringify({
          groupBy,
          expanded
        }, null, 2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Legend, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
            children: [column.canGroupBy ?
            /*#__PURE__*/
            // If the column can be grouped, let's add a toggle
            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", _objectSpread(_objectSpread({}, column.getGroupByToggleProps()), {}, {
              children: column.isGrouped ? '🛑 ' : '👊 '
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 21
            }, this) : null, column.render('Header')]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 17
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        children: firstPageRows.map((row, i) => {
          prepareRow(row);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            children: row.cells.map(cell => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                style: {
                  background: cell.isGrouped ? '#0aff0082' : cell.isAggregated ? '#ffa50078' : cell.isPlaceholder ? '#ff000042' : 'white'
                },
                children: cell.isGrouped ?
                /*#__PURE__*/
                // If it's a grouped cell, add an expander and row count
                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", _objectSpread(_objectSpread({}, row.getToggleRowExpandedProps()), {}, {
                    children: row.isExpanded ? '👇' : '👉'
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 27
                  }, this), ' ', cell.render('Cell'), " (", row.subRows.length, ")"]
                }, void 0, true) : cell.isAggregated ? // If the cell is aggregated, use the Aggregated
                // renderer for cell
                cell.render('Aggregated') : cell.isPlaceholder ? null : // For cells with repeated values, render null
                // Otherwise, just render the regular cell
                cell.render('Cell')
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 21
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: ["Showing the first 100 results of ", rows.length, " rows"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Table, "N4J+b219lJvE8BypZW6dcsu2+eY=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_12__.useTable];
});

_c2 = Table;

function Legend() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      padding: '0.5rem 0'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      style: {
        display: 'inline-block',
        background: '#0aff0082',
        padding: '0.5rem'
      },
      children: "Grouped"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      style: {
        display: 'inline-block',
        background: '#ffa50078',
        padding: '0.5rem'
      },
      children: "Aggregated"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      style: {
        display: 'inline-block',
        background: '#ff000042',
        padding: '0.5rem'
      },
      children: "Repeated Value"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 5
  }, this);
} // This is a custom aggregator that
// takes in an array of leaf values and
// returns the rounded median


_c3 = Legend;

function roundedMedian(leafValues) {
  let min = leafValues[0] || 0;
  let max = leafValues[0] || 0;
  leafValues.forEach(value => {
    min = Math.min(min, value);
    max = Math.max(max, value);
  });
  return Math.round((min + max) / 2);
}

function Index() {
  _s2();

  const columns = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => [{
    Header: 'Name',
    columns: [{
      Header: 'First Name',
      accessor: 'firstName'
    }, {
      Header: 'Last Name',
      accessor: 'lastName'
    }]
  }, {
    Header: 'Info',
    columns: [{
      Header: 'Age',
      accessor: 'age'
    }, {
      Header: 'Visits',
      accessor: 'visits'
    }, {
      Header: 'Status',
      accessor: 'status'
    }, {
      Header: 'Profile Progress',
      accessor: 'progress'
    }]
  }], []);
  const data = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => makeData(20), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_4__.default, {
      fixed: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container px-4 py-36 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-wrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Runs",
            statTitle: "J.D. Martinez",
            statPercent: "38 R"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Home Runs",
            statTitle: "Ronald Acu\xF1a Jr.",
            statPercent: "15 HR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Runs Batted In",
            statTitle: "Trey Mancini",
            statPercent: "39 RBI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Batting Average",
            statTitle: "Yermin Mercedes",
            statPercent: "0.354 AVG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Stolen Bases",
            statTitle: "Whit Merrifield",
            statPercent: "13 SB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Runs",
            statTitle: "J.D. Martinez",
            statPercent: "38 R"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Home Runs",
            statTitle: "Ronald Acu\xF1a Jr.",
            statPercent: "15 HR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Runs Batted In",
            statTitle: "Trey Mancini",
            statPercent: "39 RBI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Batting Average",
            statTitle: "Yermin Mercedes",
            statPercent: "0.354 AVG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Stolen Bases",
            statTitle: "Whit Merrifield",
            statPercent: "13 SB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Styles, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
              columns: columns,
              data: data
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-wrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Wins",
            statTitle: "Jack Flaherty",
            statPercent: "8 W"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 361,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Saves",
            statTitle: "Mark Melancon",
            statPercent: "15 SV"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Strike Outs",
            statTitle: "Shane Bieber",
            statPercent: "98 K"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Earned Run Average",
            statTitle: "Brandon Woodruff",
            statPercent: "1.58 ERA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 382,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "WHIP",
            statTitle: "Whit Merrifield",
            statPercent: "0.74 WHIP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Index, "7zObr1GywQUmP9L3sfy/4IDluAk=");

_c4 = Index;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Styles");
$RefreshReg$(_c2, "Table");
$RefreshReg$(_c3, "Legend");
$RefreshReg$(_c4, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicmFuZ2UiLCJsZW4iLCJhcnIiLCJpIiwicHVzaCIsIm5ld1BlcnNvbiIsInN0YXR1c0NoYW5jZSIsIk1hdGgiLCJyYW5kb20iLCJmaXJzdE5hbWUiLCJuYW1vciIsIndvcmRzIiwibnVtYmVycyIsImxhc3ROYW1lIiwiYWdlIiwiZmxvb3IiLCJ2aXNpdHMiLCJwcm9ncmVzcyIsInN0YXR1cyIsIm1ha2VEYXRhIiwibGVucyIsIm1ha2VEYXRhTGV2ZWwiLCJkZXB0aCIsIm1hcCIsImQiLCJzdWJSb3dzIiwidW5kZWZpbmVkIiwiU3R5bGVzIiwic3R5bGVkIiwiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93Iiwic3RhdGUiLCJncm91cEJ5IiwiZXhwYW5kZWQiLCJ1c2VUYWJsZSIsInVzZUdyb3VwQnkiLCJ1c2VFeHBhbmRlZCIsImZpcnN0UGFnZVJvd3MiLCJzbGljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJjYW5Hcm91cEJ5IiwiZ2V0R3JvdXBCeVRvZ2dsZVByb3BzIiwiaXNHcm91cGVkIiwicmVuZGVyIiwicm93IiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJiYWNrZ3JvdW5kIiwiaXNBZ2dyZWdhdGVkIiwiaXNQbGFjZWhvbGRlciIsImdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMiLCJpc0V4cGFuZGVkIiwibGVuZ3RoIiwiTGVnZW5kIiwicGFkZGluZyIsImRpc3BsYXkiLCJyb3VuZGVkTWVkaWFuIiwibGVhZlZhbHVlcyIsIm1pbiIsIm1heCIsImZvckVhY2giLCJ2YWx1ZSIsInJvdW5k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O0FBQUE7QUFBQSxnQkFSRixlQWVFO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGlDQUNFLDhEQUFDLG1FQUFEO0FBQ0Esd0JBQVksRUFBQyxhQURiO0FBRUEscUJBQVMsRUFBQyxjQUZWO0FBR0EsdUJBQVcsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGLGVBc0JFO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGlDQUNFLDhEQUFDLG1FQUFEO0FBQ0Esd0JBQVksRUFBQyxvQkFEYjtBQUVBLHFCQUFTLEVBQUMsa0JBRlY7QUFHQSx1QkFBVyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJGLGVBNkJFO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGlDQUNFLDhEQUFDLG1FQUFEO0FBQ0Esd0JBQVksRUFBQyxNQURiO0FBRUEscUJBQVMsRUFBQyxpQkFGVjtBQUdBLHVCQUFXLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBcUhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFySEYsZUFzSEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRIRixlQXdIRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEhGO0FBQUEsa0JBREY7QUE0SEQ7O0lBdkt1QjhDLEs7O01BQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjU4YmMyNjQzMGZlZWFkODk3YzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby10YXJnZXQtYmxhbmsgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IEluZGV4TmF2YmFyIGZyb20gXCJjb21wb25lbnRzL05hdmJhcnMvSW5kZXhOYXZiYXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVycy9Gb290ZXIuanNcIjtcblxuaW1wb3J0IENhcmRCYXJDaGFydCBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkQmFyQ2hhcnQuanNcIjtcbmltcG9ydCBDYXJkTGluZUNoYXJ0IGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRMaW5lQ2hhcnQuanNcIjtcbmltcG9ydCBDYXJkUGFnZVZpc2l0cyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkUGFnZVZpc2l0cy5qc1wiO1xuaW1wb3J0IENhcmRQcm9maWxlIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRQcm9maWxlLmpzXCI7XG5pbXBvcnQgQ2FyZFN0YXRzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTdGF0cy5qc1wiO1xuXG5pbXBvcnQgbmFtb3IgZnJvbSAnbmFtb3InXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlR3JvdXBCeSwgdXNlRXhwYW5kZWQgfSBmcm9tICdyZWFjdC10YWJsZSdcblxuY29uc3QgcmFuZ2UgPSBsZW4gPT4ge1xuICBjb25zdCBhcnIgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyLnB1c2goaSlcbiAgfVxuICByZXR1cm4gYXJyXG59XG5cbmNvbnN0IG5ld1BlcnNvbiA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdHVzQ2hhbmNlID0gTWF0aC5yYW5kb20oKVxuICByZXR1cm4ge1xuICAgIGZpcnN0TmFtZTogbmFtb3IuZ2VuZXJhdGUoeyB3b3JkczogMSwgbnVtYmVyczogMCB9KSxcbiAgICBsYXN0TmFtZTogbmFtb3IuZ2VuZXJhdGUoeyB3b3JkczogMSwgbnVtYmVyczogMCB9KSxcbiAgICBhZ2U6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSxcbiAgICB2aXNpdHM6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCksXG4gICAgcHJvZ3Jlc3M6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCksXG4gICAgc3RhdHVzOlxuICAgICAgc3RhdHVzQ2hhbmNlID4gMC42NlxuICAgICAgICA/ICdyZWxhdGlvbnNoaXAnXG4gICAgICAgIDogc3RhdHVzQ2hhbmNlID4gMC4zM1xuICAgICAgICA/ICdjb21wbGljYXRlZCdcbiAgICAgICAgOiAnc2luZ2xlJyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURhdGEoLi4ubGVucykge1xuICBjb25zdCBtYWtlRGF0YUxldmVsID0gKGRlcHRoID0gMCkgPT4ge1xuICAgIGNvbnN0IGxlbiA9IGxlbnNbZGVwdGhdXG4gICAgcmV0dXJuIHJhbmdlKGxlbikubWFwKGQgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV3UGVyc29uKCksXG4gICAgICAgIHN1YlJvd3M6IGxlbnNbZGVwdGggKyAxXSA/IG1ha2VEYXRhTGV2ZWwoZGVwdGggKyAxKSA6IHVuZGVmaW5lZCxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1ha2VEYXRhTGV2ZWwoKVxufVxuXG5jb25zdCBTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxcmVtO1xuXG4gIHRhYmxlIHtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIHRyIHtcbiAgICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgICAgdGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aCxcbiAgICB0ZCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcblxuICAgICAgOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSB9KSB7XG4gIGNvbnN0IHtcbiAgICBnZXRUYWJsZVByb3BzLFxuICAgIGdldFRhYmxlQm9keVByb3BzLFxuICAgIGhlYWRlckdyb3VwcyxcbiAgICByb3dzLFxuICAgIHByZXBhcmVSb3csXG4gICAgc3RhdGU6IHsgZ3JvdXBCeSwgZXhwYW5kZWQgfSxcbiAgfSA9IHVzZVRhYmxlKFxuICAgIHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkYXRhLFxuICAgIH0sXG4gICAgdXNlR3JvdXBCeSxcbiAgICB1c2VFeHBhbmRlZCAvLyB1c2VHcm91cEJ5IHdvdWxkIGJlIHByZXR0eSB1c2VsZXNzIHdpdGhvdXQgdXNlRXhwYW5kZWQgOylcbiAgKVxuXG4gIC8vIFdlIGRvbid0IHdhbnQgdG8gcmVuZGVyIGFsbCBvZiB0aGUgcm93cyBmb3IgdGhpcyBleGFtcGxlLCBzbyBjYXBcbiAgLy8gaXQgYXQgMTAwIGZvciB0aGlzIHVzZSBjYXNlXG4gIGNvbnN0IGZpcnN0UGFnZVJvd3MgPSByb3dzLnNsaWNlKDAsIDEwMClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkoeyBncm91cEJ5LCBleHBhbmRlZCB9LCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICAgIDxMZWdlbmQgLz5cbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cbiAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gY2FuIGJlIGdyb3VwZWQsIGxldCdzIGFkZCBhIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldEdyb3VwQnlUb2dnbGVQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzR3JvdXBlZCA/ICfwn5uRICcgOiAn8J+RiiAnfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgICAge2ZpcnN0UGFnZVJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZWR1Y2F0aW9uYWwgcHVycG9zZXMsIGxldCdzIGNvbG9yIHRoZVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGNlbGwgZGVwZW5kaW5nIG9uIHdoYXQgdHlwZSBpdCBpcyBnaXZlblxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIHVzZUdyb3VwQnkgaG9va1xuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjZWxsLmlzR3JvdXBlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjMGFmZjAwODInXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2VsbC5pc0FnZ3JlZ2F0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmYTUwMDc4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNQbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjZmYwMDAwNDInXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2NlbGwuaXNHcm91cGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIGdyb3VwZWQgY2VsbCwgYWRkIGFuIGV4cGFuZGVyIGFuZCByb3cgY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5yb3cuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyAn8J+RhycgOiAn8J+RiSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoJ0NlbGwnKX0gKHtyb3cuc3ViUm93cy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNlbGwgaXMgYWdncmVnYXRlZCwgdXNlIHRoZSBBZ2dyZWdhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJlciBmb3IgY2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzUGxhY2Vob2xkZXIgPyBudWxsIDogKCAvLyBGb3IgY2VsbHMgd2l0aCByZXBlYXRlZCB2YWx1ZXMsIHJlbmRlciBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGp1c3QgcmVuZGVyIHRoZSByZWd1bGFyIGNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJylcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdj5TaG93aW5nIHRoZSBmaXJzdCAxMDAgcmVzdWx0cyBvZiB7cm93cy5sZW5ndGh9IHJvd3M8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBMZWdlbmQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogJzAuNXJlbSAwJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHNwYW5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzBhZmYwMDgyJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMC41cmVtJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgR3JvdXBlZFxuICAgICAgPC9zcGFuPnsnICd9XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZhNTAwNzgnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwLjVyZW0nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZ2dyZWdhdGVkXG4gICAgICA8L3NwYW4+eycgJ31cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyNmZjAwMDA0MicsXG4gICAgICAgICAgcGFkZGluZzogJzAuNXJlbScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFJlcGVhdGVkIFZhbHVlXG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gVGhpcyBpcyBhIGN1c3RvbSBhZ2dyZWdhdG9yIHRoYXRcbi8vIHRha2VzIGluIGFuIGFycmF5IG9mIGxlYWYgdmFsdWVzIGFuZFxuLy8gcmV0dXJucyB0aGUgcm91bmRlZCBtZWRpYW5cbmZ1bmN0aW9uIHJvdW5kZWRNZWRpYW4obGVhZlZhbHVlcykge1xuICBsZXQgbWluID0gbGVhZlZhbHVlc1swXSB8fCAwXG4gIGxldCBtYXggPSBsZWFmVmFsdWVzWzBdIHx8IDBcblxuICBsZWFmVmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUpXG4gICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZSlcbiAgfSlcblxuICByZXR1cm4gTWF0aC5yb3VuZCgobWluICsgbWF4KSAvIDIpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiAnTmFtZScsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdGaXJzdCBOYW1lJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnZmlyc3ROYW1lJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ0xhc3QgTmFtZScsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2xhc3ROYW1lJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiAnSW5mbycsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdBZ2UnLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICdhZ2UnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiAnVmlzaXRzJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAndmlzaXRzJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ1N0YXR1cycsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3N0YXR1cycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdQcm9maWxlIFByb2dyZXNzJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAncHJvZ3Jlc3MnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgW11cbiAgKVxuXG4gIGNvbnN0IGRhdGEgPSBSZWFjdC51c2VNZW1vKCgpID0+IG1ha2VEYXRhKDIwKSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEluZGV4TmF2YmFyIGZpeGVkIC8+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNCBweS0zNiBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgZmxleC0xXCI+XG4gICAgICAgICAgICA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiUnVuc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiSi5ELiBNYXJ0aW5lelwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjM4IFJcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIkhvbWUgUnVuc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiUm9uYWxkIEFjdcOxYSBKci5cIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIxNSBIUlwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiUnVucyBCYXR0ZWQgSW5cIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIlRyZXkgTWFuY2luaVwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjM5IFJCSVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIkJhdHRpbmcgQXZlcmFnZVwiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiWWVybWluIE1lcmNlZGVzXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMC4zNTQgQVZHXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiU3RvbGVuIEJhc2VzXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJXaGl0IE1lcnJpZmllbGRcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIxMyBTQlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgZmxleC0xXCI+XG4gICAgICAgICAgICA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiUnVuc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiSi5ELiBNYXJ0aW5lelwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjM4IFJcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIkhvbWUgUnVuc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiUm9uYWxkIEFjdcOxYSBKci5cIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIxNSBIUlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlJ1bnMgQmF0dGVkIEluXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJUcmV5IE1hbmNpbmlcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIzOSBSQklcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJCYXR0aW5nIEF2ZXJhZ2VcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIlllcm1pbiBNZXJjZWRlc1wiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjAuMzU0IEFWR1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlN0b2xlbiBCYXNlc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiV2hpdCBNZXJyaWZpZWxkXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMTMgU0JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IGZsZXgtMVwiPlxuICAgICAgICAgICAgPFN0eWxlcz5cbiAgICAgICAgICAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICA8L1N0eWxlcz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGhyLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBmbGV4LTFcIj5cbiAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJXaW5zXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJKYWNrIEZsYWhlcnR5XCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiOCBXXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBmbGV4LTFcIj5cbiAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJTYXZlc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiTWFyayBNZWxhbmNvblwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjE1IFNWXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBmbGV4LTFcIj5cbiAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJTdHJpa2UgT3V0c1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiU2hhbmUgQmllYmVyXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiOTggS1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgZmxleC0xXCI+XG4gICAgICAgICAgICA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiRWFybmVkIFJ1biBBdmVyYWdlXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJCcmFuZG9uIFdvb2RydWZmXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMS41OCBFUkFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IGZsZXgtMVwiPlxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIldISVBcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIldoaXQgTWVycmlmaWVsZFwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjAuNzQgV0hJUFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9