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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Wins",
            statTitle: "Jack Flaherty",
            statPercent: "8 W"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 1
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Saves",
            statTitle: "Mark Melancon",
            statPercent: "15 SV"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 1
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Strike Outs",
            statTitle: "Shane Bieber",
            statPercent: "98 K"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 1
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Earned Run Average",
            statTitle: "Brandon Woodruff",
            statPercent: "1.58 ERA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 1
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "WHIP",
            statTitle: "Whit Merrifield",
            statPercent: "0.74 WHIP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 1
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
              lineNumber: 383,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 382,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 393,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicmFuZ2UiLCJsZW4iLCJhcnIiLCJpIiwicHVzaCIsIm5ld1BlcnNvbiIsInN0YXR1c0NoYW5jZSIsIk1hdGgiLCJyYW5kb20iLCJmaXJzdE5hbWUiLCJuYW1vciIsIndvcmRzIiwibnVtYmVycyIsImxhc3ROYW1lIiwiYWdlIiwiZmxvb3IiLCJ2aXNpdHMiLCJwcm9ncmVzcyIsInN0YXR1cyIsIm1ha2VEYXRhIiwibGVucyIsIm1ha2VEYXRhTGV2ZWwiLCJkZXB0aCIsIm1hcCIsImQiLCJzdWJSb3dzIiwidW5kZWZpbmVkIiwiU3R5bGVzIiwic3R5bGVkIiwiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93Iiwic3RhdGUiLCJncm91cEJ5IiwiZXhwYW5kZWQiLCJ1c2VUYWJsZSIsInVzZUdyb3VwQnkiLCJ1c2VFeHBhbmRlZCIsImZpcnN0UGFnZVJvd3MiLCJzbGljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJjYW5Hcm91cEJ5IiwiZ2V0R3JvdXBCeVRvZ2dsZVByb3BzIiwiaXNHcm91cGVkIiwicmVuZGVyIiwicm93IiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJiYWNrZ3JvdW5kIiwiaXNBZ2dyZWdhdGVkIiwiaXNQbGFjZWhvbGRlciIsImdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMiLCJpc0V4cGFuZGVkIiwibGVuZ3RoIiwiTGVnZW5kIiwicGFkZGluZyIsImRpc3BsYXkiLCJyb3VuZGVkTWVkaWFuIiwibGVhZlZhbHVlcyIsIm1pbiIsIm1heCIsImZvckVhY2giLCJ2YWx1ZSIsInJvdW5k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TUFBRDtBQUFBLG1DQUNFLDhEQUFDLEtBQUQ7QUFBTyxxQkFBTyxFQUFFVyxPQUFoQjtBQUF5QixrQkFBSSxFQUFFQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0ZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQTRHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUdGLGVBNkdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3R0YsZUErR0UsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9HRjtBQUFBLGtCQURGO0FBbUhEOztJQTlKdUI4QyxLOztNQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU2NGQ2YjQ4YWUwMzI3MmNiNjg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtbm8tdGFyZ2V0LWJsYW5rICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBJbmRleE5hdmJhciBmcm9tIFwiY29tcG9uZW50cy9OYXZiYXJzL0luZGV4TmF2YmFyLmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlcnMvRm9vdGVyLmpzXCI7XG5cbmltcG9ydCBDYXJkQmFyQ2hhcnQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZEJhckNoYXJ0LmpzXCI7XG5pbXBvcnQgQ2FyZExpbmVDaGFydCBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkTGluZUNoYXJ0LmpzXCI7XG5pbXBvcnQgQ2FyZFBhZ2VWaXNpdHMgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFBhZ2VWaXNpdHMuanNcIjtcbmltcG9ydCBDYXJkUHJvZmlsZSBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkUHJvZmlsZS5qc1wiO1xuaW1wb3J0IENhcmRTdGF0cyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkU3RhdHMuanNcIjtcblxuaW1wb3J0IG5hbW9yIGZyb20gJ25hbW9yJ1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlVGFibGUsIHVzZUdyb3VwQnksIHVzZUV4cGFuZGVkIH0gZnJvbSAncmVhY3QtdGFibGUnXG5cbmNvbnN0IHJhbmdlID0gbGVuID0+IHtcbiAgY29uc3QgYXJyID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGFyci5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIGFyclxufVxuXG5jb25zdCBuZXdQZXJzb24gPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXR1c0NoYW5jZSA9IE1hdGgucmFuZG9tKClcbiAgcmV0dXJuIHtcbiAgICBmaXJzdE5hbWU6IG5hbW9yLmdlbmVyYXRlKHsgd29yZHM6IDEsIG51bWJlcnM6IDAgfSksXG4gICAgbGFzdE5hbWU6IG5hbW9yLmdlbmVyYXRlKHsgd29yZHM6IDEsIG51bWJlcnM6IDAgfSksXG4gICAgYWdlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCksXG4gICAgdmlzaXRzOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApLFxuICAgIHByb2dyZXNzOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApLFxuICAgIHN0YXR1czpcbiAgICAgIHN0YXR1c0NoYW5jZSA+IDAuNjZcbiAgICAgICAgPyAncmVsYXRpb25zaGlwJ1xuICAgICAgICA6IHN0YXR1c0NoYW5jZSA+IDAuMzNcbiAgICAgICAgPyAnY29tcGxpY2F0ZWQnXG4gICAgICAgIDogJ3NpbmdsZScsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEYXRhKC4uLmxlbnMpIHtcbiAgY29uc3QgbWFrZURhdGFMZXZlbCA9IChkZXB0aCA9IDApID0+IHtcbiAgICBjb25zdCBsZW4gPSBsZW5zW2RlcHRoXVxuICAgIHJldHVybiByYW5nZShsZW4pLm1hcChkID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5ld1BlcnNvbigpLFxuICAgICAgICBzdWJSb3dzOiBsZW5zW2RlcHRoICsgMV0gPyBtYWtlRGF0YUxldmVsKGRlcHRoICsgMSkgOiB1bmRlZmluZWQsXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBtYWtlRGF0YUxldmVsKClcbn1cblxuY29uc3QgU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMXJlbTtcblxuICB0YWJsZSB7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgICB0ciB7XG4gICAgICA6bGFzdC1jaGlsZCB7XG4gICAgICAgIHRkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGgsXG4gICAgdGQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG5cbiAgICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5mdW5jdGlvbiBUYWJsZSh7IGNvbHVtbnMsIGRhdGEgfSkge1xuICBjb25zdCB7XG4gICAgZ2V0VGFibGVQcm9wcyxcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcbiAgICBoZWFkZXJHcm91cHMsXG4gICAgcm93cyxcbiAgICBwcmVwYXJlUm93LFxuICAgIHN0YXRlOiB7IGdyb3VwQnksIGV4cGFuZGVkIH0sXG4gIH0gPSB1c2VUYWJsZShcbiAgICB7XG4gICAgICBjb2x1bW5zLFxuICAgICAgZGF0YSxcbiAgICB9LFxuICAgIHVzZUdyb3VwQnksXG4gICAgdXNlRXhwYW5kZWQgLy8gdXNlR3JvdXBCeSB3b3VsZCBiZSBwcmV0dHkgdXNlbGVzcyB3aXRob3V0IHVzZUV4cGFuZGVkIDspXG4gIClcblxuICAvLyBXZSBkb24ndCB3YW50IHRvIHJlbmRlciBhbGwgb2YgdGhlIHJvd3MgZm9yIHRoaXMgZXhhbXBsZSwgc28gY2FwXG4gIC8vIGl0IGF0IDEwMCBmb3IgdGhpcyB1c2UgY2FzZVxuICBjb25zdCBmaXJzdFBhZ2VSb3dzID0gcm93cy5zbGljZSgwLCAxMDApXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHByZT5cbiAgICAgICAgPGNvZGU+e0pTT04uc3RyaW5naWZ5KHsgZ3JvdXBCeSwgZXhwYW5kZWQgfSwgbnVsbCwgMil9PC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgICA8TGVnZW5kIC8+XG4gICAgICA8dGFibGUgey4uLmdldFRhYmxlUHJvcHMoKX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXG4gICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9PlxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5jYW5Hcm91cEJ5ID8gKFxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29sdW1uIGNhbiBiZSBncm91cGVkLCBsZXQncyBhZGQgYSB0b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc0dyb3VwZWQgPyAn8J+bkSAnIDogJ/CfkYogJ31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuICAgICAgICAgIHtmaXJzdFBhZ2VSb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGVkdWNhdGlvbmFsIHB1cnBvc2VzLCBsZXQncyBjb2xvciB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjZWxsIGRlcGVuZGluZyBvbiB3aGF0IHR5cGUgaXQgaXMgZ2l2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZSB1c2VHcm91cEJ5IGhvb2tcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY2VsbC5pc0dyb3VwZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIzBhZmYwMDgyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNBZ2dyZWdhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZmE1MDA3OCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLmlzUGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmMDAwMDQyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLmlzR3JvdXBlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBncm91cGVkIGNlbGwsIGFkZCBhbiBleHBhbmRlciBhbmQgcm93IGNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4ucm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pc0V4cGFuZGVkID8gJ/CfkYcnIDogJ/CfkYknfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGwucmVuZGVyKCdDZWxsJyl9ICh7cm93LnN1YlJvd3MubGVuZ3RofSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzQWdncmVnYXRlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjZWxsIGlzIGFnZ3JlZ2F0ZWQsIHVzZSB0aGUgQWdncmVnYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyZXIgZm9yIGNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdBZ2dyZWdhdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc1BsYWNlaG9sZGVyID8gbnVsbCA6ICggLy8gRm9yIGNlbGxzIHdpdGggcmVwZWF0ZWQgdmFsdWVzLCByZW5kZXIgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQ2VsbCcpXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8YnIgLz5cbiAgICAgIDxkaXY+U2hvd2luZyB0aGUgZmlyc3QgMTAwIHJlc3VsdHMgb2Yge3Jvd3MubGVuZ3RofSByb3dzPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gTGVnZW5kKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBhZGRpbmc6ICcwLjVyZW0gMCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyMwYWZmMDA4MicsXG4gICAgICAgICAgcGFkZGluZzogJzAuNXJlbScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEdyb3VwZWRcbiAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgPHNwYW5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmYTUwMDc4JyxcbiAgICAgICAgICBwYWRkaW5nOiAnMC41cmVtJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQWdncmVnYXRlZFxuICAgICAgPC9zcGFuPnsnICd9XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmYwMDAwNDInLFxuICAgICAgICAgIHBhZGRpbmc6ICcwLjVyZW0nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBSZXBlYXRlZCBWYWx1ZVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIFRoaXMgaXMgYSBjdXN0b20gYWdncmVnYXRvciB0aGF0XG4vLyB0YWtlcyBpbiBhbiBhcnJheSBvZiBsZWFmIHZhbHVlcyBhbmRcbi8vIHJldHVybnMgdGhlIHJvdW5kZWQgbWVkaWFuXG5mdW5jdGlvbiByb3VuZGVkTWVkaWFuKGxlYWZWYWx1ZXMpIHtcbiAgbGV0IG1pbiA9IGxlYWZWYWx1ZXNbMF0gfHwgMFxuICBsZXQgbWF4ID0gbGVhZlZhbHVlc1swXSB8fCAwXG5cbiAgbGVhZlZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHZhbHVlKVxuICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUpXG4gIH0pXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKG1pbiArIG1heCkgLyAyKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ05hbWUnLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiAnRmlyc3QgTmFtZScsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2ZpcnN0TmFtZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdMYXN0IE5hbWUnLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICdsYXN0TmFtZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIEhlYWRlcjogJ0luZm8nLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiAnQWdlJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnYWdlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ1Zpc2l0cycsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Zpc2l0cycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdTdGF0dXMnLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICdzdGF0dXMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiAnUHJvZmlsZSBQcm9ncmVzcycsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Byb2dyZXNzJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtdXG4gIClcblxuICBjb25zdCBkYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiBtYWtlRGF0YSgyMCksIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbmRleE5hdmJhciBmaXhlZCAvPlxuXG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgcHktMzYgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IGZsZXgtMVwiPlxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlJ1bnNcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIkouRC4gTWFydGluZXpcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIzOCBSXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJIb21lIFJ1bnNcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIlJvbmFsZCBBY3XDsWEgSnIuXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMTUgSFJcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlJ1bnMgQmF0dGVkIEluXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJUcmV5IE1hbmNpbmlcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIzOSBSQklcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJCYXR0aW5nIEF2ZXJhZ2VcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIlllcm1pbiBNZXJjZWRlc1wiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjAuMzU0IEFWR1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlN0b2xlbiBCYXNlc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiV2hpdCBNZXJyaWZpZWxkXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMTMgU0JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IGZsZXgtMVwiPlxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlJ1bnNcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIkouRC4gTWFydGluZXpcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIzOCBSXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJIb21lIFJ1bnNcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIlJvbmFsZCBBY3XDsWEgSnIuXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMTUgSFJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJSdW5zIEJhdHRlZCBJblwiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiVHJleSBNYW5jaW5pXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMzkgUkJJXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiQmF0dGluZyBBdmVyYWdlXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJZZXJtaW4gTWVyY2VkZXNcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIwLjM1NCBBVkdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJTdG9sZW4gQmFzZXNcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIldoaXQgTWVycmlmaWVsZFwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjEzIFNCXCJcbiAgICAgICAgICAgIC8+XG5cbjxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJXaW5zXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJKYWNrIEZsYWhlcnR5XCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiOCBXXCJcbiAgICAgICAgICAgIC8+XG5cbjxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJTYXZlc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiTWFyayBNZWxhbmNvblwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjE1IFNWXCJcbiAgICAgICAgICAgIC8+XG5cbjxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJTdHJpa2UgT3V0c1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiU2hhbmUgQmllYmVyXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiOTggS1wiXG4gICAgICAgICAgICAvPlxuXG48Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiRWFybmVkIFJ1biBBdmVyYWdlXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJCcmFuZG9uIFdvb2RydWZmXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMS41OCBFUkFcIlxuICAgICAgICAgICAgLz5cblxuPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIldISVBcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIldoaXQgTWVycmlmaWVsZFwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjAuNzQgV0hJUFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBmbGV4LTFcIj5cbiAgICAgICAgICAgIDxTdHlsZXM+XG4gICAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICAgPC9TdHlsZXM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=