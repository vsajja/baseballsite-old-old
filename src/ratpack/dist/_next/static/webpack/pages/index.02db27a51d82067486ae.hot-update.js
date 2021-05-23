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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Styles, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
              columns: columns,
              data: data
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Runs",
            statTitle: "J.D. Martinez",
            statPercent: "38 R"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Home Runs",
            statTitle: "Ronald Acu\xF1a Jr.",
            statPercent: "15 HR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Runs Batted In",
            statTitle: "Trey Mancini",
            statPercent: "39 RBI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 1
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Batting Average",
            statTitle: "Yermin Mercedes",
            statPercent: "0.354 AVG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Stolen Bases",
            statTitle: "Whit Merrifield",
            statPercent: "13 SB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
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
            lineNumber: 331,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Saves",
            statTitle: "Mark Melancon",
            statPercent: "15 SV"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Strike Outs",
            statTitle: "Shane Bieber",
            statPercent: "98 K"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Earned Run Average",
            statTitle: "Brandon Woodruff",
            statPercent: "1.58 ERA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "WHIP",
            statTitle: "Whit Merrifield",
            statPercent: "0.74 WHIP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 372,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicmFuZ2UiLCJsZW4iLCJhcnIiLCJpIiwicHVzaCIsIm5ld1BlcnNvbiIsInN0YXR1c0NoYW5jZSIsIk1hdGgiLCJyYW5kb20iLCJmaXJzdE5hbWUiLCJuYW1vciIsIndvcmRzIiwibnVtYmVycyIsImxhc3ROYW1lIiwiYWdlIiwiZmxvb3IiLCJ2aXNpdHMiLCJwcm9ncmVzcyIsInN0YXR1cyIsIm1ha2VEYXRhIiwibGVucyIsIm1ha2VEYXRhTGV2ZWwiLCJkZXB0aCIsIm1hcCIsImQiLCJzdWJSb3dzIiwidW5kZWZpbmVkIiwiU3R5bGVzIiwic3R5bGVkIiwiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93Iiwic3RhdGUiLCJncm91cEJ5IiwiZXhwYW5kZWQiLCJ1c2VUYWJsZSIsInVzZUdyb3VwQnkiLCJ1c2VFeHBhbmRlZCIsImZpcnN0UGFnZVJvd3MiLCJzbGljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJjYW5Hcm91cEJ5IiwiZ2V0R3JvdXBCeVRvZ2dsZVByb3BzIiwiaXNHcm91cGVkIiwicmVuZGVyIiwicm93IiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJiYWNrZ3JvdW5kIiwiaXNBZ2dyZWdhdGVkIiwiaXNQbGFjZWhvbGRlciIsImdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMiLCJpc0V4cGFuZGVkIiwibGVuZ3RoIiwiTGVnZW5kIiwicGFkZGluZyIsImRpc3BsYXkiLCJyb3VuZGVkTWVkaWFuIiwibGVhZlZhbHVlcyIsIm1pbiIsIm1heCIsImZvckVhY2giLCJ2YWx1ZSIsInJvdW5k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QXZGRixlQXdGRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEZGLGVBMEZFLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExRkY7QUFBQSxrQkFERjtBQThGRDs7SUF6SXVCOEMsSzs7TUFBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMmRiMjdhNTFkODIwNjc0ODZhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LW5vLXRhcmdldC1ibGFuayAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgSW5kZXhOYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFycy9JbmRleE5hdmJhci5qc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXJzL0Zvb3Rlci5qc1wiO1xuXG5pbXBvcnQgQ2FyZEJhckNoYXJ0IGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRCYXJDaGFydC5qc1wiO1xuaW1wb3J0IENhcmRMaW5lQ2hhcnQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZExpbmVDaGFydC5qc1wiO1xuaW1wb3J0IENhcmRQYWdlVmlzaXRzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRQYWdlVmlzaXRzLmpzXCI7XG5pbXBvcnQgQ2FyZFByb2ZpbGUgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFByb2ZpbGUuanNcIjtcbmltcG9ydCBDYXJkU3RhdHMgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFN0YXRzLmpzXCI7XG5cbmltcG9ydCBuYW1vciBmcm9tICduYW1vcidcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VHcm91cEJ5LCB1c2VFeHBhbmRlZCB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xuXG5jb25zdCByYW5nZSA9IGxlbiA9PiB7XG4gIGNvbnN0IGFyciA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIucHVzaChpKVxuICB9XG4gIHJldHVybiBhcnJcbn1cblxuY29uc3QgbmV3UGVyc29uID0gKCkgPT4ge1xuICBjb25zdCBzdGF0dXNDaGFuY2UgPSBNYXRoLnJhbmRvbSgpXG4gIHJldHVybiB7XG4gICAgZmlyc3ROYW1lOiBuYW1vci5nZW5lcmF0ZSh7IHdvcmRzOiAxLCBudW1iZXJzOiAwIH0pLFxuICAgIGxhc3ROYW1lOiBuYW1vci5nZW5lcmF0ZSh7IHdvcmRzOiAxLCBudW1iZXJzOiAwIH0pLFxuICAgIGFnZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzApLFxuICAgIHZpc2l0czogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICBwcm9ncmVzczogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICBzdGF0dXM6XG4gICAgICBzdGF0dXNDaGFuY2UgPiAwLjY2XG4gICAgICAgID8gJ3JlbGF0aW9uc2hpcCdcbiAgICAgICAgOiBzdGF0dXNDaGFuY2UgPiAwLjMzXG4gICAgICAgID8gJ2NvbXBsaWNhdGVkJ1xuICAgICAgICA6ICdzaW5nbGUnLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRGF0YSguLi5sZW5zKSB7XG4gIGNvbnN0IG1ha2VEYXRhTGV2ZWwgPSAoZGVwdGggPSAwKSA9PiB7XG4gICAgY29uc3QgbGVuID0gbGVuc1tkZXB0aF1cbiAgICByZXR1cm4gcmFuZ2UobGVuKS5tYXAoZCA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5uZXdQZXJzb24oKSxcbiAgICAgICAgc3ViUm93czogbGVuc1tkZXB0aCArIDFdID8gbWFrZURhdGFMZXZlbChkZXB0aCArIDEpIDogdW5kZWZpbmVkLFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gbWFrZURhdGFMZXZlbCgpXG59XG5cbmNvbnN0IFN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDFyZW07XG5cbiAgdGFibGUge1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgdHIge1xuICAgICAgOmxhc3QtY2hpbGQge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoLFxuICAgIHRkIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgICA6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuZnVuY3Rpb24gVGFibGUoeyBjb2x1bW5zLCBkYXRhIH0pIHtcbiAgY29uc3Qge1xuICAgIGdldFRhYmxlUHJvcHMsXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgaGVhZGVyR3JvdXBzLFxuICAgIHJvd3MsXG4gICAgcHJlcGFyZVJvdyxcbiAgICBzdGF0ZTogeyBncm91cEJ5LCBleHBhbmRlZCB9LFxuICB9ID0gdXNlVGFibGUoXG4gICAge1xuICAgICAgY29sdW1ucyxcbiAgICAgIGRhdGEsXG4gICAgfSxcbiAgICB1c2VHcm91cEJ5LFxuICAgIHVzZUV4cGFuZGVkIC8vIHVzZUdyb3VwQnkgd291bGQgYmUgcHJldHR5IHVzZWxlc3Mgd2l0aG91dCB1c2VFeHBhbmRlZCA7KVxuICApXG5cbiAgLy8gV2UgZG9uJ3Qgd2FudCB0byByZW5kZXIgYWxsIG9mIHRoZSByb3dzIGZvciB0aGlzIGV4YW1wbGUsIHNvIGNhcFxuICAvLyBpdCBhdCAxMDAgZm9yIHRoaXMgdXNlIGNhc2VcbiAgY29uc3QgZmlyc3RQYWdlUm93cyA9IHJvd3Muc2xpY2UoMCwgMTAwKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwcmU+XG4gICAgICAgIDxjb2RlPntKU09OLnN0cmluZ2lmeSh7IGdyb3VwQnksIGV4cGFuZGVkIH0sIG51bGwsIDIpfTwvY29kZT5cbiAgICAgIDwvcHJlPlxuICAgICAgPExlZ2VuZCAvPlxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxuICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcbiAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgIHtjb2x1bW4uY2FuR3JvdXBCeSA/IChcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBjYW4gYmUgZ3JvdXBlZCwgbGV0J3MgYWRkIGEgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5jb2x1bW4uZ2V0R3JvdXBCeVRvZ2dsZVByb3BzKCl9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNHcm91cGVkID8gJ/Cfm5EgJyA6ICfwn5GKICd9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cbiAgICAgICAgICB7Zmlyc3RQYWdlUm93cy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBlZHVjYXRpb25hbCBwdXJwb3NlcywgbGV0J3MgY29sb3IgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY2VsbCBkZXBlbmRpbmcgb24gd2hhdCB0eXBlIGl0IGlzIGdpdmVuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZnJvbSB0aGUgdXNlR3JvdXBCeSBob29rXG4gICAgICAgICAgICAgICAgICAgICAgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNlbGwuaXNHcm91cGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyMwYWZmMDA4MidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjZWxsLmlzQWdncmVnYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjZmZhNTAwNzgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2VsbC5pc1BsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmZjAwMDA0MidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5pc0dyb3VwZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGEgZ3JvdXBlZCBjZWxsLCBhZGQgYW4gZXhwYW5kZXIgYW5kIHJvdyBjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLnJvdy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXNFeHBhbmRlZCA/ICfwn5GHJyA6ICfwn5GJJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcpfSAoe3Jvdy5zdWJSb3dzLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc0FnZ3JlZ2F0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2VsbCBpcyBhZ2dyZWdhdGVkLCB1c2UgdGhlIEFnZ3JlZ2F0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlcmVyIGZvciBjZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQWdncmVnYXRlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwganVzdCByZW5kZXIgdGhlIHJlZ3VsYXIgY2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0NlbGwnKVxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2PlNob3dpbmcgdGhlIGZpcnN0IDEwMCByZXN1bHRzIG9mIHtyb3dzLmxlbmd0aH0gcm93czwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIExlZ2VuZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBwYWRkaW5nOiAnMC41cmVtIDAnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjMGFmZjAwODInLFxuICAgICAgICAgIHBhZGRpbmc6ICcwLjVyZW0nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBHcm91cGVkXG4gICAgICA8L3NwYW4+eycgJ31cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyNmZmE1MDA3OCcsXG4gICAgICAgICAgcGFkZGluZzogJzAuNXJlbScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFnZ3JlZ2F0ZWRcbiAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgPHNwYW5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmMDAwMDQyJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMC41cmVtJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgUmVwZWF0ZWQgVmFsdWVcbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGFnZ3JlZ2F0b3IgdGhhdFxuLy8gdGFrZXMgaW4gYW4gYXJyYXkgb2YgbGVhZiB2YWx1ZXMgYW5kXG4vLyByZXR1cm5zIHRoZSByb3VuZGVkIG1lZGlhblxuZnVuY3Rpb24gcm91bmRlZE1lZGlhbihsZWFmVmFsdWVzKSB7XG4gIGxldCBtaW4gPSBsZWFmVmFsdWVzWzBdIHx8IDBcbiAgbGV0IG1heCA9IGxlYWZWYWx1ZXNbMF0gfHwgMFxuXG4gIGxlYWZWYWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZSlcbiAgICBtYXggPSBNYXRoLm1heChtYXgsIHZhbHVlKVxuICB9KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKChtaW4gKyBtYXgpIC8gMilcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICBIZWFkZXI6ICdOYW1lJyxcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ0ZpcnN0IE5hbWUnLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICdmaXJzdE5hbWUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiAnTGFzdCBOYW1lJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnbGFzdE5hbWUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBIZWFkZXI6ICdJbmZvJyxcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ0FnZScsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2FnZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdWaXNpdHMnLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICd2aXNpdHMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiAnU3RhdHVzJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnc3RhdHVzJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ1Byb2ZpbGUgUHJvZ3Jlc3MnLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICdwcm9ncmVzcycsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXVxuICApXG5cbiAgY29uc3QgZGF0YSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gbWFrZURhdGEoMjApLCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5kZXhOYXZiYXIgZml4ZWQgLz5cblxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IHB5LTM2IG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgZmxleC0xXCI+XG4gICAgICAgICAgICA8U3R5bGVzPlxuICAgICAgICAgICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgIDwvU3R5bGVzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgZmxleC0xXCI+XG4gICAgICAgICAgICA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiUnVuc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiSi5ELiBNYXJ0aW5lelwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjM4IFJcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIkhvbWUgUnVuc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiUm9uYWxkIEFjdcOxYSBKci5cIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIxNSBIUlwiXG4gICAgICAgICAgICAvPlxuXG48Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiUnVucyBCYXR0ZWQgSW5cIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIlRyZXkgTWFuY2luaVwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjM5IFJCSVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIkJhdHRpbmcgQXZlcmFnZVwiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiWWVybWluIE1lcmNlZGVzXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMC4zNTQgQVZHXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiU3RvbGVuIEJhc2VzXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJXaGl0IE1lcnJpZmllbGRcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIxMyBTQlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aHIvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IGZsZXgtMVwiPlxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIldpbnNcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIkphY2sgRmxhaGVydHlcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCI4IFdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IGZsZXgtMVwiPlxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlNhdmVzXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJNYXJrIE1lbGFuY29uXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMTUgU1ZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IGZsZXgtMVwiPlxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlN0cmlrZSBPdXRzXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJTaGFuZSBCaWViZXJcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCI5OCBLXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBmbGV4LTFcIj5cbiAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJFYXJuZWQgUnVuIEF2ZXJhZ2VcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIkJyYW5kb24gV29vZHJ1ZmZcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIxLjU4IEVSQVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgZmxleC0xXCI+XG4gICAgICAgICAgICA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiV0hJUFwiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiV2hpdCBNZXJyaWZpZWxkXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMC43NCBXSElQXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=