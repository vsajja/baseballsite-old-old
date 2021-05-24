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
/* harmony import */ var components_Cards_CardSocialTraffic_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Cards/CardSocialTraffic.js */ "./components/Cards/CardSocialTraffic.js");
/* harmony import */ var components_Cards_CardSettings_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Cards/CardSettings.js */ "./components/Cards/CardSettings.js");
/* harmony import */ var namor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! namor */ "./node_modules/namor/dist/index.js");
/* harmony import */ var namor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(namor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_14__);
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
    firstName: namor__WEBPACK_IMPORTED_MODULE_13___default().generate({
      words: 1,
      numbers: 0
    }),
    lastName: namor__WEBPACK_IMPORTED_MODULE_13___default().generate({
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
const Styles = styled_components__WEBPACK_IMPORTED_MODULE_15__.default.div`
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
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_14__.useTable)({
    columns,
    data
  }, react_table__WEBPACK_IMPORTED_MODULE_14__.useGroupBy, react_table__WEBPACK_IMPORTED_MODULE_14__.useExpanded // useGroupBy would be pretty useless without useExpanded ;)
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
        lineNumber: 114,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Legend, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
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
              lineNumber: 125,
              columnNumber: 21
            }, this) : null, column.render('Header')]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 17
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
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
                    lineNumber: 160,
                    columnNumber: 27
                  }, this), ' ', cell.render('Cell'), " (", row.subRows.length, ")"]
                }, void 0, true) : cell.isAggregated ? // If the cell is aggregated, use the Aggregated
                // renderer for cell
                cell.render('Aggregated') : cell.isPlaceholder ? null : // For cells with repeated values, render null
                // Otherwise, just render the regular cell
                cell.render('Cell')
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 21
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: ["Showing the first 100 results of ", rows.length, " rows"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Table, "N4J+b219lJvE8BypZW6dcsu2+eY=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_14__.useTable];
});

_c = Table;

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
      lineNumber: 194,
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
      lineNumber: 203,
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
      lineNumber: 212,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 5
  }, this);
} // This is a custom aggregator that
// takes in an array of leaf values and
// returns the rounded median


_c2 = Legend;

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
      lineNumber: 286,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 290,
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
            lineNumber: 295,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Home Runs",
            statTitle: "Ronald Acu\xF1a Jr.",
            statPercent: "15 HR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Runs Batted In",
            statTitle: "Trey Mancini",
            statPercent: "39 RBI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Batting Average",
            statTitle: "Yermin Mercedes",
            statPercent: "0.354 AVG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Stolen Bases",
            statTitle: "Whit Merrifield",
            statPercent: "13 SB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full px-4 flex-1",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Wins",
            statTitle: "Jack Flaherty",
            statPercent: "8 W"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 325,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Saves",
            statTitle: "Mark Melancon",
            statPercent: "15 SV"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Strike Outs",
            statTitle: "Shane Bieber",
            statPercent: "98 K"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "Earned Run Average",
            statTitle: "Brandon Woodruff",
            statPercent: "1.58 ERA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardStats_js__WEBPACK_IMPORTED_MODULE_10__.default, {
            statSubtitle: "WHIP",
            statTitle: "Brandon Woodruff",
            statPercent: "0.74 WHIP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 349,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container px-4 py-36 mx-auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-wrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full lg:w-8/12 px-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardSettings_js__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full lg:w-4/12 px-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardProfile_js__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full xl:w-8/12 mb-12 xl:mb-0 px-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardLineChart_js__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full xl:w-4/12 px-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardBarChart_js__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full xl:w-8/12 mb-12 xl:mb-0 px-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardPageVisits_js__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "w-full xl:w-4/12 px-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Cards_CardSocialTraffic_js__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Index, "7zObr1GywQUmP9L3sfy/4IDluAk=");

_c3 = Index;

var _c, _c2, _c3;

$RefreshReg$(_c, "Table");
$RefreshReg$(_c2, "Legend");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicmFuZ2UiLCJsZW4iLCJhcnIiLCJpIiwicHVzaCIsIm5ld1BlcnNvbiIsInN0YXR1c0NoYW5jZSIsIk1hdGgiLCJyYW5kb20iLCJmaXJzdE5hbWUiLCJuYW1vciIsIndvcmRzIiwibnVtYmVycyIsImxhc3ROYW1lIiwiYWdlIiwiZmxvb3IiLCJ2aXNpdHMiLCJwcm9ncmVzcyIsInN0YXR1cyIsIm1ha2VEYXRhIiwibGVucyIsIm1ha2VEYXRhTGV2ZWwiLCJkZXB0aCIsIm1hcCIsImQiLCJzdWJSb3dzIiwidW5kZWZpbmVkIiwiU3R5bGVzIiwic3R5bGVkIiwiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93Iiwic3RhdGUiLCJncm91cEJ5IiwiZXhwYW5kZWQiLCJ1c2VUYWJsZSIsInVzZUdyb3VwQnkiLCJ1c2VFeHBhbmRlZCIsImZpcnN0UGFnZVJvd3MiLCJzbGljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJjYW5Hcm91cEJ5IiwiZ2V0R3JvdXBCeVRvZ2dsZVByb3BzIiwiaXNHcm91cGVkIiwicmVuZGVyIiwicm93IiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJiYWNrZ3JvdW5kIiwiaXNBZ2dyZWdhdGVkIiwiaXNQbGFjZWhvbGRlciIsImdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMiLCJpc0V4cGFuZGVkIiwibGVuZ3RoIiwiTGVnZW5kIiwicGFkZGluZyIsImRpc3BsYXkiLCJyb3VuZGVkTWVkaWFuIiwibGVhZlZhbHVlcyIsIm1pbiIsIm1heCIsImZvckVhY2giLCJ2YWx1ZSIsInJvdW5k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QUFTLEVBQUMscUNBQWY7QUFBQSxpQ0FDRSw4REFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRixlQWdCRTtBQUFLLG1CQUFTLEVBQUMsdUJBQWY7QUFBQSxpQ0FDRSw4REFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdFRixlQW1HRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkdGO0FBQUEsa0JBREY7QUF1R0Q7O0lBbEp1QjBELEs7O01BQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWI4NGIzMjczMTlhZjI5NTVlNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby10YXJnZXQtYmxhbmsgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IEluZGV4TmF2YmFyIGZyb20gXCJjb21wb25lbnRzL05hdmJhcnMvSW5kZXhOYXZiYXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVycy9Gb290ZXIuanNcIjtcblxuaW1wb3J0IENhcmRCYXJDaGFydCBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkQmFyQ2hhcnQuanNcIjtcbmltcG9ydCBDYXJkTGluZUNoYXJ0IGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRMaW5lQ2hhcnQuanNcIjtcbmltcG9ydCBDYXJkUGFnZVZpc2l0cyBmcm9tIFwiY29tcG9uZW50cy9DYXJkcy9DYXJkUGFnZVZpc2l0cy5qc1wiO1xuaW1wb3J0IENhcmRQcm9maWxlIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRQcm9maWxlLmpzXCI7XG5pbXBvcnQgQ2FyZFN0YXRzIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTdGF0cy5qc1wiO1xuaW1wb3J0IENhcmRTb2NpYWxUcmFmZmljIGZyb20gXCJjb21wb25lbnRzL0NhcmRzL0NhcmRTb2NpYWxUcmFmZmljLmpzXCI7XG5cbmltcG9ydCBDYXJkU2V0dGluZ3MgZnJvbSBcImNvbXBvbmVudHMvQ2FyZHMvQ2FyZFNldHRpbmdzLmpzXCI7XG4gXG5pbXBvcnQgbmFtb3IgZnJvbSAnbmFtb3InXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VUYWJsZSwgdXNlR3JvdXBCeSwgdXNlRXhwYW5kZWQgfSBmcm9tICdyZWFjdC10YWJsZSdcblxuY29uc3QgcmFuZ2UgPSBsZW4gPT4ge1xuICBjb25zdCBhcnIgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyLnB1c2goaSlcbiAgfVxuICByZXR1cm4gYXJyXG59XG5cbmNvbnN0IG5ld1BlcnNvbiA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdHVzQ2hhbmNlID0gTWF0aC5yYW5kb20oKVxuICByZXR1cm4ge1xuICAgIGZpcnN0TmFtZTogbmFtb3IuZ2VuZXJhdGUoeyB3b3JkczogMSwgbnVtYmVyczogMCB9KSxcbiAgICBsYXN0TmFtZTogbmFtb3IuZ2VuZXJhdGUoeyB3b3JkczogMSwgbnVtYmVyczogMCB9KSxcbiAgICBhZ2U6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwKSxcbiAgICB2aXNpdHM6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCksXG4gICAgcHJvZ3Jlc3M6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCksXG4gICAgc3RhdHVzOlxuICAgICAgc3RhdHVzQ2hhbmNlID4gMC42NlxuICAgICAgICA/ICdyZWxhdGlvbnNoaXAnXG4gICAgICAgIDogc3RhdHVzQ2hhbmNlID4gMC4zM1xuICAgICAgICA/ICdjb21wbGljYXRlZCdcbiAgICAgICAgOiAnc2luZ2xlJyxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURhdGEoLi4ubGVucykge1xuICBjb25zdCBtYWtlRGF0YUxldmVsID0gKGRlcHRoID0gMCkgPT4ge1xuICAgIGNvbnN0IGxlbiA9IGxlbnNbZGVwdGhdXG4gICAgcmV0dXJuIHJhbmdlKGxlbikubWFwKGQgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV3UGVyc29uKCksXG4gICAgICAgIHN1YlJvd3M6IGxlbnNbZGVwdGggKyAxXSA/IG1ha2VEYXRhTGV2ZWwoZGVwdGggKyAxKSA6IHVuZGVmaW5lZCxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1ha2VEYXRhTGV2ZWwoKVxufVxuXG5jb25zdCBTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxcmVtO1xuXG4gIHRhYmxlIHtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIHRyIHtcbiAgICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgICAgdGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aCxcbiAgICB0ZCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcblxuICAgICAgOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSB9KSB7XG4gIGNvbnN0IHtcbiAgICBnZXRUYWJsZVByb3BzLFxuICAgIGdldFRhYmxlQm9keVByb3BzLFxuICAgIGhlYWRlckdyb3VwcyxcbiAgICByb3dzLFxuICAgIHByZXBhcmVSb3csXG4gICAgc3RhdGU6IHsgZ3JvdXBCeSwgZXhwYW5kZWQgfSxcbiAgfSA9IHVzZVRhYmxlKFxuICAgIHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkYXRhLFxuICAgIH0sXG4gICAgdXNlR3JvdXBCeSxcbiAgICB1c2VFeHBhbmRlZCAvLyB1c2VHcm91cEJ5IHdvdWxkIGJlIHByZXR0eSB1c2VsZXNzIHdpdGhvdXQgdXNlRXhwYW5kZWQgOylcbiAgKVxuXG4gIC8vIFdlIGRvbid0IHdhbnQgdG8gcmVuZGVyIGFsbCBvZiB0aGUgcm93cyBmb3IgdGhpcyBleGFtcGxlLCBzbyBjYXBcbiAgLy8gaXQgYXQgMTAwIGZvciB0aGlzIHVzZSBjYXNlXG4gIGNvbnN0IGZpcnN0UGFnZVJvd3MgPSByb3dzLnNsaWNlKDAsIDEwMClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8cHJlPlxuICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkoeyBncm91cEJ5LCBleHBhbmRlZCB9LCBudWxsLCAyKX08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICAgIDxMZWdlbmQgLz5cbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cbiAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gY2FuIGJlIGdyb3VwZWQsIGxldCdzIGFkZCBhIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldEdyb3VwQnlUb2dnbGVQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzR3JvdXBlZCA/ICfwn5uRICcgOiAn8J+RiiAnfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgICAge2ZpcnN0UGFnZVJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZWR1Y2F0aW9uYWwgcHVycG9zZXMsIGxldCdzIGNvbG9yIHRoZVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGNlbGwgZGVwZW5kaW5nIG9uIHdoYXQgdHlwZSBpdCBpcyBnaXZlblxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIHVzZUdyb3VwQnkgaG9va1xuICAgICAgICAgICAgICAgICAgICAgIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjZWxsLmlzR3JvdXBlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjMGFmZjAwODInXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2VsbC5pc0FnZ3JlZ2F0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2ZmYTUwMDc4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNlbGwuaXNQbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcjZmYwMDAwNDInXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2NlbGwuaXNHcm91cGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIGdyb3VwZWQgY2VsbCwgYWRkIGFuIGV4cGFuZGVyIGFuZCByb3cgY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5yb3cuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyAn8J+RhycgOiAn8J+RiSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoJ0NlbGwnKX0gKHtyb3cuc3ViUm93cy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNlbGwgaXMgYWdncmVnYXRlZCwgdXNlIHRoZSBBZ2dyZWdhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJlciBmb3IgY2VsbFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzUGxhY2Vob2xkZXIgPyBudWxsIDogKCAvLyBGb3IgY2VsbHMgd2l0aCByZXBlYXRlZCB2YWx1ZXMsIHJlbmRlciBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGp1c3QgcmVuZGVyIHRoZSByZWd1bGFyIGNlbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJylcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdj5TaG93aW5nIHRoZSBmaXJzdCAxMDAgcmVzdWx0cyBvZiB7cm93cy5sZW5ndGh9IHJvd3M8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBMZWdlbmQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogJzAuNXJlbSAwJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHNwYW5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzBhZmYwMDgyJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMC41cmVtJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgR3JvdXBlZFxuICAgICAgPC9zcGFuPnsnICd9XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZhNTAwNzgnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwLjVyZW0nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZ2dyZWdhdGVkXG4gICAgICA8L3NwYW4+eycgJ31cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgYmFja2dyb3VuZDogJyNmZjAwMDA0MicsXG4gICAgICAgICAgcGFkZGluZzogJzAuNXJlbScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFJlcGVhdGVkIFZhbHVlXG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gVGhpcyBpcyBhIGN1c3RvbSBhZ2dyZWdhdG9yIHRoYXRcbi8vIHRha2VzIGluIGFuIGFycmF5IG9mIGxlYWYgdmFsdWVzIGFuZFxuLy8gcmV0dXJucyB0aGUgcm91bmRlZCBtZWRpYW5cbmZ1bmN0aW9uIHJvdW5kZWRNZWRpYW4obGVhZlZhbHVlcykge1xuICBsZXQgbWluID0gbGVhZlZhbHVlc1swXSB8fCAwXG4gIGxldCBtYXggPSBsZWFmVmFsdWVzWzBdIHx8IDBcblxuICBsZWFmVmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUpXG4gICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZSlcbiAgfSlcblxuICByZXR1cm4gTWF0aC5yb3VuZCgobWluICsgbWF4KSAvIDIpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiAnTmFtZScsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdGaXJzdCBOYW1lJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnZmlyc3ROYW1lJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ0xhc3QgTmFtZScsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2xhc3ROYW1lJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiAnSW5mbycsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdBZ2UnLFxuICAgICAgICAgICAgYWNjZXNzb3I6ICdhZ2UnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiAnVmlzaXRzJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAndmlzaXRzJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ1N0YXR1cycsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3N0YXR1cycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdQcm9maWxlIFByb2dyZXNzJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAncHJvZ3Jlc3MnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgW11cbiAgKVxuXG4gIGNvbnN0IGRhdGEgPSBSZWFjdC51c2VNZW1vKCgpID0+IG1ha2VEYXRhKDIwKSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEluZGV4TmF2YmFyIGZpeGVkIC8+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNCBweS0zNiBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IGZsZXgtMVwiPlxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlJ1bnNcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIkouRC4gTWFydGluZXpcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIzOCBSXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJIb21lIFJ1bnNcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIlJvbmFsZCBBY3XDsWEgSnIuXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMTUgSFJcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlJ1bnMgQmF0dGVkIEluXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJUcmV5IE1hbmNpbmlcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIzOSBSQklcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJCYXR0aW5nIEF2ZXJhZ2VcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIlllcm1pbiBNZXJjZWRlc1wiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjAuMzU0IEFWR1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlN0b2xlbiBCYXNlc1wiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiV2hpdCBNZXJyaWZpZWxkXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMTMgU0JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IGZsZXgtMVwiPlxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIldpbnNcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIkphY2sgRmxhaGVydHlcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCI4IFdcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlNhdmVzXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJNYXJrIE1lbGFuY29uXCJcbiAgICAgICAgICAgIHN0YXRQZXJjZW50PVwiMTUgU1ZcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPENhcmRTdGF0cyBcbiAgICAgICAgICAgIHN0YXRTdWJ0aXRsZT1cIlN0cmlrZSBPdXRzXCIgXG4gICAgICAgICAgICBzdGF0VGl0bGU9XCJTaGFuZSBCaWViZXJcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCI5OCBLXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxDYXJkU3RhdHMgXG4gICAgICAgICAgICBzdGF0U3VidGl0bGU9XCJFYXJuZWQgUnVuIEF2ZXJhZ2VcIiBcbiAgICAgICAgICAgIHN0YXRUaXRsZT1cIkJyYW5kb24gV29vZHJ1ZmZcIlxuICAgICAgICAgICAgc3RhdFBlcmNlbnQ9XCIxLjU4IEVSQVwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Q2FyZFN0YXRzIFxuICAgICAgICAgICAgc3RhdFN1YnRpdGxlPVwiV0hJUFwiIFxuICAgICAgICAgICAgc3RhdFRpdGxlPVwiQnJhbmRvbiBXb29kcnVmZlwiXG4gICAgICAgICAgICBzdGF0UGVyY2VudD1cIjAuNzQgV0hJUFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IHB5LTM2IG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctOC8xMiBweC00XCI+XG4gICAgICAgICAgICA8Q2FyZFNldHRpbmdzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy00LzEyIHB4LTRcIj5cbiAgICAgICAgICAgIDxDYXJkUHJvZmlsZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHhsOnctOC8xMiBtYi0xMiB4bDptYi0wIHB4LTRcIj5cbiAgICAgICAgICAgIDxDYXJkTGluZUNoYXJ0IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgeGw6dy00LzEyIHB4LTRcIj5cbiAgICAgICAgICAgIDxDYXJkQmFyQ2hhcnQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB4bDp3LTgvMTIgbWItMTIgeGw6bWItMCBweC00XCI+XG4gICAgICAgICAgICA8Q2FyZFBhZ2VWaXNpdHMgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB4bDp3LTQvMTIgcHgtNFwiPlxuICAgICAgICAgICAgPENhcmRTb2NpYWxUcmFmZmljIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9