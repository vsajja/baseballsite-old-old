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
/* harmony import */ var C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _makeData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../makeData */ "./makeData.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\git\\baseballsite\\portal\\components\\baseball\\CardPlayers.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$(),
    _s7 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // import matchSorter from 'match-sorter'

 // components

CardPlayers.defaultProps = {
  league: "Major League Baseball",
  division: ""
};
CardPlayers.propTypes = {
  league: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
}; // Create an editable cell renderer

const EditableCell = ({
  value: initialValue,
  row: {
    index
  },
  column: {
    id
  },
  updateMyData,
  // This is a custom function that we supplied to our table instance
  editable
}) => {
  _s();

  // We need to keep and update the state of the cell normally
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  }; // We'll only update the external data when the input is blurred


  const onBlur = () => {
    updateMyData(index, id, value);
  }; // If the initialValue is changed externall, sync it up with our state


  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  if (!editable) {
    return `${initialValue}`;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
    value: value,
    onChange: onChange,
    onBlur: onBlur
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 10
  }, undefined);
}; // Define a default UI for filtering


_s(EditableCell, "tWiMN+R1KrlPc+I/v9D+hnPBFtc=");

_c = EditableCell;

function DefaultColumnFilter({
  column: {
    filterValue,
    preFilteredRows,
    setFilter
  }
}) {
  const count = preFilteredRows.length;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
    value: filterValue || '',
    onChange: e => {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    placeholder: `Search ${count} records...`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
} // This is a custom filter UI for selecting
// a unique option from a list


_c2 = DefaultColumnFilter;

function SelectColumnFilter({
  column: {
    filterValue,
    setFilter,
    preFilteredRows,
    id
  }
}) {
  _s2();

  // Calculate the options for filtering
  // using the preFilteredRows
  const options = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]); // Render a multi-select box

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
    value: filterValue,
    onChange: e => {
      setFilter(e.target.value || undefined);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
      value: "",
      children: "All"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), options.map((option, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
      value: option,
      children: option
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, this);
} // This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values


_s2(SelectColumnFilter, "UfleS4trXWGxzhzYTKqqYygmjCE=");

_c3 = SelectColumnFilter;

function SliderColumnFilter({
  column: {
    filterValue,
    setFilter,
    preFilteredRows,
    id
  }
}) {
  _s3();

  // Calculate the min and max
  // using the preFilteredRows
  const [min, max] = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      type: "range",
      min: min,
      max: max,
      value: filterValue || min,
      onChange: e => {
        setFilter(parseInt(e.target.value, 10));
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
      onClick: () => setFilter(undefined),
      children: "Off"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, this)]
  }, void 0, true);
} // This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two


_s3(SliderColumnFilter, "JjGt0968bxIn2DIWJAwn7XKKSys=");

_c4 = SliderColumnFilter;

function NumberRangeColumnFilter({
  column: {
    filterValue = [],
    preFilteredRows,
    setFilter,
    id
  }
}) {
  _s4();

  const [min, max] = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    style: {
      display: 'flex'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      value: filterValue[0] || '',
      type: "number",
      onChange: e => {
        const val = e.target.value;
        setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]]);
      },
      placeholder: `Min (${min})`,
      style: {
        width: '70px',
        marginRight: '0.5rem'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, this), "to", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      value: filterValue[1] || '',
      type: "number",
      onChange: e => {
        const val = e.target.value;
        setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined]);
      },
      placeholder: `Max (${max})`,
      style: {
        width: '70px',
        marginLeft: '0.5rem'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 5
  }, this);
}

_s4(NumberRangeColumnFilter, "JjGt0968bxIn2DIWJAwn7XKKSys=");

_c5 = NumberRangeColumnFilter;

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, {
    keys: [row => row.values[id]]
  });
} // Let the table remove the filter if the string is empty


fuzzyTextFilterFn.autoRemove = val => !val; // Be sure to pass our updateMyData and the skipReset option


function Table({
  columns,
  data,
  updateMyData,
  skipReset
}) {
  _s5();

  const filterTypes = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(() => ({
    // Add a new fuzzyTextFilterFn filter type.
    fuzzyText: fuzzyTextFilterFn,
    // Or, override the default text filter to use
    // "startWith"
    text: (rows, id, filterValue) => {
      return rows.filter(row => {
        const rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
      });
    }
  }), []);
  const defaultColumn = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(() => ({
    // Let's set up our default Filter UI
    // Filter: DefaultColumnFilter,
    // And also our default editable cell
    Cell: EditableCell
  }), []); // Use the state and functions returned from useTable to build your UI

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
      pageSize,
      sortBy,
      groupBy,
      expanded,
      filters,
      selectedRowIds
    }
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_5__.useTable)({
    columns,
    data,
    defaultColumn,
    filterTypes,
    // updateMyData isn't part of the API, but
    // anything we put into these options will
    // automatically be available on the instance.
    // That way we can call this function from our
    // cell renderer!
    updateMyData,
    // We also need to pass this so the page doesn't change
    // when we edit the data.
    autoResetPage: !skipReset,
    autoResetSelectedRows: !skipReset,
    disableMultiSort: true
  }, react_table__WEBPACK_IMPORTED_MODULE_5__.useFilters, react_table__WEBPACK_IMPORTED_MODULE_5__.useGroupBy, react_table__WEBPACK_IMPORTED_MODULE_5__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_5__.useExpanded, react_table__WEBPACK_IMPORTED_MODULE_5__.usePagination, react_table__WEBPACK_IMPORTED_MODULE_5__.useRowSelect, // Here we will use a plugin to add our selection column
  hooks => {
    hooks.visibleColumns.push(columns => {
      return [{
        id: 'selection',
        // Make this column a groupByBoundary. This ensures that groupBy columns
        // are placed after it
        groupByBoundary: true,
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({
          getToggleAllRowsSelectedProps
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(IndeterminateCheckbox, _objectSpread({}, getToggleAllRowsSelectedProps()), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 15
        }, this),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({
          row
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(IndeterminateCheckbox, _objectSpread({}, row.getToggleRowSelectedProps()), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 15
        }, this)
      }, ...columns];
    });
  }); // Render the UI for your table

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("thead", {
        children: headerGroups.map(headerGroup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          children: headerGroup.headers.map(column => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: [column.canGroupBy ?
              /*#__PURE__*/
              // If the column can be grouped, let's add a toggle
              (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", _objectSpread(_objectSpread({}, column.getGroupByToggleProps()), {}, {
                children: column.isGrouped ? '🛑 ' : '👊 '
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 332,
                columnNumber: 23
              }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", _objectSpread(_objectSpread({}, column.getSortByToggleProps()), {}, {
                children: [column.render('Header'), column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : '']
              }), void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 336,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: column.canFilter ? column.render('Filter') : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 347,
              columnNumber: 19
            }, this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 17
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        children: page.map(row => {
          prepareRow(row);
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            children: row.cells.map(cell => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                children: cell.isGrouped ?
                /*#__PURE__*/
                // If it's a grouped cell, add an expander and row count
                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", _objectSpread(_objectSpread({}, row.getToggleRowExpandedProps()), {}, {
                    children: row.isExpanded ? '👇' : '👉'
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 364,
                    columnNumber: 27
                  }, this), ' ', cell.render('Cell', {
                    editable: false
                  }), " (", row.subRows.length, ")"]
                }, void 0, true) : cell.isAggregated ? // If the cell is aggregated, use the Aggregated
                // renderer for cell
                cell.render('Aggregated') : cell.isPlaceholder ? null : // For cells with repeated values, render null
                // Otherwise, just render the regular cell
                cell.render('Cell', {
                  editable: true
                })
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 21
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        children: '<<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("strong", {
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        children: ["| Go to page:", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
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
          lineNumber: 411,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
        value: pageSize,
        onChange: e => {
          setPageSize(Number(e.target.value));
        },
        children: [10, 20, 30, 40, 50].map(pageSize => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
          value: pageSize,
          children: ["Show ", pageSize]
        }, pageSize, true, {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 7
    }, this)]
  }, void 0, true);
} // Define a custom filter filter function!


_s5(Table, "2F+vPE/xig1U4SodFnHV6musR4g=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_5__.useTable];
});

_c6 = Table;

function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
} // This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number


filterGreaterThan.autoRemove = val => typeof val !== 'number'; // This is a custom aggregator that
// takes in an array of leaf values and
// returns the rounded median


function roundedMedian(leafValues) {
  let min = leafValues[0] || 0;
  let max = leafValues[0] || 0;
  leafValues.forEach(value => {
    min = Math.min(min, value);
    max = Math.max(max, value);
  });
  return Math.round((min + max) / 2);
}

const IndeterminateCheckbox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(_c7 = _s6((_ref, ref) => {
  _s6();

  let {
    indeterminate
  } = _ref,
      rest = (0,C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, ["indeterminate"]);

  const defaultRef = react__WEBPACK_IMPORTED_MODULE_3___default().useRef();
  const resolvedRef = ref || defaultRef;
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", _objectSpread({
      type: "checkbox",
      ref: resolvedRef
    }, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
}, "ouw4KVvDKeit07oEcYWUcp3TdOA="));
_c8 = IndeterminateCheckbox;
function CardPlayers({
  league
}) {
  _s7();

  const columns = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(() => [{
    Header: 'Name',
    columns: [{
      Header: 'First Name',
      accessor: 'firstName',
      // Use a two-stage aggregator here to first
      // count the total rows being aggregated,
      // then sum any of those counts if they are
      // aggregated further
      aggregate: 'count',
      Aggregated: ({
        value
      }) => `${value} Names`
    }, {
      Header: 'Last Name',
      accessor: 'lastName',
      // Use our custom `fuzzyText` filter on this column
      filter: 'fuzzyText',
      // Use another two-stage aggregator here to
      // first count the UNIQUE values from the rows
      // being aggregated, then sum those counts if
      // they are aggregated further
      aggregate: 'uniqueCount',
      Aggregated: ({
        value
      }) => `${value} Unique Names`
    }]
  }, {
    Header: 'Info',
    columns: [{
      Header: 'Age',
      accessor: 'age',
      Filter: SliderColumnFilter,
      filter: 'equals',
      // Aggregate the average age of visitors
      aggregate: 'average',
      Aggregated: ({
        value
      }) => `${value} (avg)`
    }, {
      Header: 'Visits',
      accessor: 'visits',
      Filter: NumberRangeColumnFilter,
      filter: 'between',
      // Aggregate the sum of all visits
      aggregate: 'sum',
      Aggregated: ({
        value
      }) => `${value} (total)`
    }, {
      Header: 'Status',
      accessor: 'status',
      Filter: SelectColumnFilter,
      filter: 'includes'
    }, {
      Header: 'Profile Progress',
      accessor: 'progress',
      Filter: SliderColumnFilter,
      filter: filterGreaterThan,
      // Use our custom roundedMedian aggregator
      aggregate: roundedMedian,
      Aggregated: ({
        value
      }) => `${value} (med)`
    }]
  }], []);
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(() => (0,_makeData__WEBPACK_IMPORTED_MODULE_6__.default)(10000));
  const [originalData] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(data); // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  const skipResetRef = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(false); // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data

  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    skipResetRef.current = true;
    setData(old => old.map((row, index) => {
      if (index === rowIndex) {
        return _objectSpread(_objectSpread({}, row), {}, {
          [columnId]: value
        });
      }

      return row;
    }));
  }; // After data changes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset


  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
    skipResetRef.current = false;
  }, [data]); // Let's add a data resetter/randomizer to help
  // illustrate that flow...

  const resetData = () => {
    // Don't reset the page when we do this
    skipResetRef.current = true;
    setData(originalData);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "rounded-t mb-0 px-4 py-3 border-0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "block w-full overflow-x-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Table, {
          columns: columns,
          data: data,
          updateMyData: updateMyData,
          skipReset: skipResetRef.current
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 625,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s7(CardPlayers, "vlZNbUGEeg1QBR6P2tA6cwT+6g8=");

_c9 = CardPlayers;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "EditableCell");
$RefreshReg$(_c2, "DefaultColumnFilter");
$RefreshReg$(_c3, "SelectColumnFilter");
$RefreshReg$(_c4, "SliderColumnFilter");
$RefreshReg$(_c5, "NumberRangeColumnFilter");
$RefreshReg$(_c6, "Table");
$RefreshReg$(_c7, "IndeterminateCheckbox$React.forwardRef");
$RefreshReg$(_c8, "IndeterminateCheckbox");
$RefreshReg$(_c9, "CardPlayers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJDYXJkUGxheWVycyIsImRlZmF1bHRQcm9wcyIsImxlYWd1ZSIsImRpdmlzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiRWRpdGFibGVDZWxsIiwidmFsdWUiLCJpbml0aWFsVmFsdWUiLCJyb3ciLCJpbmRleCIsImNvbHVtbiIsImlkIiwidXBkYXRlTXlEYXRhIiwiZWRpdGFibGUiLCJzZXRWYWx1ZSIsIlJlYWN0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25CbHVyIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsImZpbHRlclZhbHVlIiwicHJlRmlsdGVyZWRSb3dzIiwic2V0RmlsdGVyIiwiY291bnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJvcHRpb25zIiwiU2V0IiwiZm9yRWFjaCIsImFkZCIsInZhbHVlcyIsIm1hcCIsIm9wdGlvbiIsImkiLCJTbGlkZXJDb2x1bW5GaWx0ZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwicGFyc2VJbnQiLCJOdW1iZXJSYW5nZUNvbHVtbkZpbHRlciIsImRpc3BsYXkiLCJ2YWwiLCJvbGQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImZ1enp5VGV4dEZpbHRlckZuIiwicm93cyIsIm1hdGNoU29ydGVyIiwia2V5cyIsImF1dG9SZW1vdmUiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwic2tpcFJlc2V0IiwiZmlsdGVyVHlwZXMiLCJmdXp6eVRleHQiLCJ0ZXh0IiwiZmlsdGVyIiwicm93VmFsdWUiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJkZWZhdWx0Q29sdW1uIiwiQ2VsbCIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInByZXBhcmVSb3ciLCJwYWdlIiwiY2FuUHJldmlvdXNQYWdlIiwiY2FuTmV4dFBhZ2UiLCJwYWdlT3B0aW9ucyIsInBhZ2VDb3VudCIsImdvdG9QYWdlIiwibmV4dFBhZ2UiLCJwcmV2aW91c1BhZ2UiLCJzZXRQYWdlU2l6ZSIsInN0YXRlIiwicGFnZUluZGV4IiwicGFnZVNpemUiLCJzb3J0QnkiLCJncm91cEJ5IiwiZXhwYW5kZWQiLCJmaWx0ZXJzIiwic2VsZWN0ZWRSb3dJZHMiLCJ1c2VUYWJsZSIsImF1dG9SZXNldFBhZ2UiLCJhdXRvUmVzZXRTZWxlY3RlZFJvd3MiLCJkaXNhYmxlTXVsdGlTb3J0IiwidXNlRmlsdGVycyIsInVzZUdyb3VwQnkiLCJ1c2VTb3J0QnkiLCJ1c2VFeHBhbmRlZCIsInVzZVBhZ2luYXRpb24iLCJ1c2VSb3dTZWxlY3QiLCJob29rcyIsInZpc2libGVDb2x1bW5zIiwicHVzaCIsImdyb3VwQnlCb3VuZGFyeSIsIkhlYWRlciIsImdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIiwiZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJnZXRIZWFkZXJQcm9wcyIsImNhbkdyb3VwQnkiLCJnZXRHcm91cEJ5VG9nZ2xlUHJvcHMiLCJpc0dyb3VwZWQiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsInJlbmRlciIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwiY2FuRmlsdGVyIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJnZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzIiwiaXNFeHBhbmRlZCIsInN1YlJvd3MiLCJpc0FnZ3JlZ2F0ZWQiLCJpc1BsYWNlaG9sZGVyIiwiTnVtYmVyIiwiZmlsdGVyR3JlYXRlclRoYW4iLCJyb3VuZGVkTWVkaWFuIiwibGVhZlZhbHVlcyIsInJvdW5kIiwiSW5kZXRlcm1pbmF0ZUNoZWNrYm94IiwicmVmIiwiaW5kZXRlcm1pbmF0ZSIsInJlc3QiLCJkZWZhdWx0UmVmIiwicmVzb2x2ZWRSZWYiLCJjdXJyZW50IiwiYWNjZXNzb3IiLCJhZ2dyZWdhdGUiLCJBZ2dyZWdhdGVkIiwiRmlsdGVyIiwic2V0RGF0YSIsIm1ha2VEYXRhIiwib3JpZ2luYWxEYXRhIiwic2tpcFJlc2V0UmVmIiwicm93SW5kZXgiLCJjb2x1bW5JZCIsInJlc2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQVVBOztDQUtBOztBQUVBQSxXQUFXLENBQUNDLFlBQVosR0FBMkI7QUFDekJDLFFBQU0sRUFBRSx1QkFEaUI7QUFFekJDLFVBQVEsRUFBRTtBQUZlLENBQTNCO0FBS0FILFdBQVcsQ0FBQ0ksU0FBWixHQUF3QjtBQUN0QkYsUUFBTSxFQUFFRywwREFBZ0JDO0FBREYsQ0FBeEIsQyxDQUlBOztBQUNBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQ3BCQyxPQUFLLEVBQUVDLFlBRGE7QUFFcEJDLEtBQUcsRUFBRTtBQUFFQztBQUFGLEdBRmU7QUFHcEJDLFFBQU0sRUFBRTtBQUFFQztBQUFGLEdBSFk7QUFJcEJDLGNBSm9CO0FBSU47QUFDZEM7QUFMb0IsQ0FBRCxLQU1mO0FBQUE7O0FBQ0o7QUFDQSxRQUFNLENBQUNQLEtBQUQsRUFBUVEsUUFBUixJQUFvQkMscURBQUEsQ0FBZVIsWUFBZixDQUExQjs7QUFFQSxRQUFNUyxRQUFRLEdBQUdDLENBQUMsSUFBSTtBQUNwQkgsWUFBUSxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU1osS0FBVixDQUFSO0FBQ0QsR0FGRCxDQUpJLENBUUo7OztBQUNBLFFBQU1hLE1BQU0sR0FBRyxNQUFNO0FBQ25CUCxnQkFBWSxDQUFDSCxLQUFELEVBQVFFLEVBQVIsRUFBWUwsS0FBWixDQUFaO0FBQ0QsR0FGRCxDQVRJLENBYUo7OztBQUNBUyx3REFBQSxDQUFnQixNQUFNO0FBQ3BCRCxZQUFRLENBQUNQLFlBQUQsQ0FBUjtBQUNELEdBRkQsRUFF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Q0E7O0FBQ0EsUUFBTTZGLFNBQVMsR0FBRyxNQUFNO0FBQ3RCO0FBQ0FILGdCQUFZLENBQUNSLE9BQWIsR0FBdUIsSUFBdkI7QUFDQUssV0FBTyxDQUFDRSxZQUFELENBQVA7QUFDRCxHQUpEOztBQU1BLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsdUZBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRTtBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQSwrQkFFRSw4REFBQyxLQUFEO0FBQ0UsaUJBQU8sRUFBRTFGLE9BRFg7QUFFRSxjQUFJLEVBQUVDLElBRlI7QUFHRSxzQkFBWSxFQUFFM0MsWUFIaEI7QUFJRSxtQkFBUyxFQUFFcUksWUFBWSxDQUFDUjtBQUoxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBaUJEOztJQXJJdUIzSSxXOztNQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYwM2RlY2U4MTJlZTI5N2Y3NmE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7XHJcbiAgdXNlVGFibGUsXHJcbiAgdXNlUGFnaW5hdGlvbixcclxuICB1c2VTb3J0QnksXHJcbiAgdXNlRmlsdGVycyxcclxuICB1c2VHcm91cEJ5LFxyXG4gIHVzZUV4cGFuZGVkLFxyXG4gIHVzZVJvd1NlbGVjdCxcclxufSBmcm9tICdyZWFjdC10YWJsZSdcclxuLy8gaW1wb3J0IG1hdGNoU29ydGVyIGZyb20gJ21hdGNoLXNvcnRlcidcclxuXHJcbmltcG9ydCBtYWtlRGF0YSBmcm9tICcuLi8uLi9tYWtlRGF0YSdcclxuXHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG5DYXJkUGxheWVycy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGVhZ3VlOiBcIk1ham9yIExlYWd1ZSBCYXNlYmFsbFwiLFxyXG4gIGRpdmlzaW9uOiBcIlwiXHJcbn07XHJcblxyXG5DYXJkUGxheWVycy5wcm9wVHlwZXMgPSB7XHJcbiAgbGVhZ3VlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgYW4gZWRpdGFibGUgY2VsbCByZW5kZXJlclxyXG5jb25zdCBFZGl0YWJsZUNlbGwgPSAoe1xyXG4gIHZhbHVlOiBpbml0aWFsVmFsdWUsXHJcbiAgcm93OiB7IGluZGV4IH0sXHJcbiAgY29sdW1uOiB7IGlkIH0sXHJcbiAgdXBkYXRlTXlEYXRhLCAvLyBUaGlzIGlzIGEgY3VzdG9tIGZ1bmN0aW9uIHRoYXQgd2Ugc3VwcGxpZWQgdG8gb3VyIHRhYmxlIGluc3RhbmNlXHJcbiAgZWRpdGFibGUsXHJcbn0pID0+IHtcclxuICAvLyBXZSBuZWVkIHRvIGtlZXAgYW5kIHVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGNlbGwgbm9ybWFsbHlcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZSlcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgLy8gV2UnbGwgb25seSB1cGRhdGUgdGhlIGV4dGVybmFsIGRhdGEgd2hlbiB0aGUgaW5wdXQgaXMgYmx1cnJlZFxyXG4gIGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcclxuICAgIHVwZGF0ZU15RGF0YShpbmRleCwgaWQsIHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgLy8gSWYgdGhlIGluaXRpYWxWYWx1ZSBpcyBjaGFuZ2VkIGV4dGVybmFsbCwgc3luYyBpdCB1cCB3aXRoIG91ciBzdGF0ZVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShpbml0aWFsVmFsdWUpXHJcbiAgfSwgW2luaXRpYWxWYWx1ZV0pXHJcblxyXG4gIGlmICghZWRpdGFibGUpIHtcclxuICAgIHJldHVybiBgJHtpbml0aWFsVmFsdWV9YFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxpbnB1dCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gb25CbHVyPXtvbkJsdXJ9IC8+XHJcbn1cclxuXHJcbi8vIERlZmluZSBhIGRlZmF1bHQgVUkgZm9yIGZpbHRlcmluZ1xyXG5mdW5jdGlvbiBEZWZhdWx0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHByZUZpbHRlcmVkUm93cywgc2V0RmlsdGVyIH0sXHJcbn0pIHtcclxuICBjb25zdCBjb3VudCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGhcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dFxyXG4gICAgICB2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgJyd9XHJcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKSAvLyBTZXQgdW5kZWZpbmVkIHRvIHJlbW92ZSB0aGUgZmlsdGVyIGVudGlyZWx5XHJcbiAgICAgIH19XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtgU2VhcmNoICR7Y291bnR9IHJlY29yZHMuLi5gfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gZmlsdGVyIFVJIGZvciBzZWxlY3RpbmdcclxuLy8gYSB1bmlxdWUgb3B0aW9uIGZyb20gYSBsaXN0XHJcbmZ1bmN0aW9uIFNlbGVjdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBzZXRGaWx0ZXIsIHByZUZpbHRlcmVkUm93cywgaWQgfSxcclxufSkge1xyXG4gIC8vIENhbGN1bGF0ZSB0aGUgb3B0aW9ucyBmb3IgZmlsdGVyaW5nXHJcbiAgLy8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgU2V0KClcclxuICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIG9wdGlvbnMuYWRkKHJvdy52YWx1ZXNbaWRdKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBbLi4ub3B0aW9ucy52YWx1ZXMoKV1cclxuICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4gIC8vIFJlbmRlciBhIG11bHRpLXNlbGVjdCBib3hcclxuICByZXR1cm4gKFxyXG4gICAgPHNlbGVjdFxyXG4gICAgICB2YWx1ZT17ZmlsdGVyVmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XHJcbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXHJcbiAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAge29wdGlvbn1cclxuICAgICAgICA8L29wdGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L3NlbGVjdD5cclxuICApXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gZmlsdGVyIFVJIHRoYXQgdXNlcyBhXHJcbi8vIHNsaWRlciB0byBzZXQgdGhlIGZpbHRlciB2YWx1ZSBiZXR3ZWVuIGEgY29sdW1uJ3NcclxuLy8gbWluIGFuZCBtYXggdmFsdWVzXHJcbmZ1bmN0aW9uIFNsaWRlckNvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBzZXRGaWx0ZXIsIHByZUZpbHRlcmVkUm93cywgaWQgfSxcclxufSkge1xyXG4gIC8vIENhbGN1bGF0ZSB0aGUgbWluIGFuZCBtYXhcclxuICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcblxyXG4gIGNvbnN0IFttaW4sIG1heF0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGxldCBtaW4gPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbiAgICBsZXQgbWF4ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4gICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgbWluID0gTWF0aC5taW4ocm93LnZhbHVlc1tpZF0sIG1pbilcclxuICAgICAgbWF4ID0gTWF0aC5tYXgocm93LnZhbHVlc1tpZF0sIG1heClcclxuICAgIH0pXHJcbiAgICByZXR1cm4gW21pbiwgbWF4XVxyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgbWluPXttaW59XHJcbiAgICAgICAgbWF4PXttYXh9XHJcbiAgICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8IG1pbn1cclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICBzZXRGaWx0ZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSlcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcih1bmRlZmluZWQpfT5PZmY8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBVSSBmb3Igb3VyICdiZXR3ZWVuJyBvciBudW1iZXIgcmFuZ2VcclxuLy8gZmlsdGVyLiBJdCB1c2VzIHR3byBudW1iZXIgYm94ZXMgYW5kIGZpbHRlcnMgcm93cyB0b1xyXG4vLyBvbmVzIHRoYXQgaGF2ZSB2YWx1ZXMgYmV0d2VlbiB0aGUgdHdvXHJcbmZ1bmN0aW9uIE51bWJlclJhbmdlQ29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUgPSBbXSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIsIGlkIH0sXHJcbn0pIHtcclxuICBjb25zdCBbbWluLCBtYXhdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBsZXQgbWluID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4gICAgbGV0IG1heCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIG1pbiA9IE1hdGgubWluKHJvdy52YWx1ZXNbaWRdLCBtaW4pXHJcbiAgICAgIG1heCA9IE1hdGgubWF4KHJvdy52YWx1ZXNbaWRdLCBtYXgpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFttaW4sIG1heF1cclxuICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWVbMF0gfHwgJyd9XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgIHNldEZpbHRlcigob2xkID0gW10pID0+IFt2YWwgPyBwYXJzZUludCh2YWwsIDEwKSA6IHVuZGVmaW5lZCwgb2xkWzFdXSlcclxuICAgICAgICB9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtgTWluICgke21pbn0pYH1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6ICc3MHB4JyxcclxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMC41cmVtJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICB0b1xyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWVbMV0gfHwgJyd9XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgIHNldEZpbHRlcigob2xkID0gW10pID0+IFtvbGRbMF0sIHZhbCA/IHBhcnNlSW50KHZhbCwgMTApIDogdW5kZWZpbmVkXSlcclxuICAgICAgICB9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtgTWF4ICgke21heH0pYH1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6ICc3MHB4JyxcclxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwLjVyZW0nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1enp5VGV4dEZpbHRlckZuKHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSkge1xyXG4gIHJldHVybiBtYXRjaFNvcnRlcihyb3dzLCBmaWx0ZXJWYWx1ZSwgeyBrZXlzOiBbcm93ID0+IHJvdy52YWx1ZXNbaWRdXSB9KVxyXG59XHJcblxyXG4vLyBMZXQgdGhlIHRhYmxlIHJlbW92ZSB0aGUgZmlsdGVyIGlmIHRoZSBzdHJpbmcgaXMgZW1wdHlcclxuZnV6enlUZXh0RmlsdGVyRm4uYXV0b1JlbW92ZSA9IHZhbCA9PiAhdmFsXHJcblxyXG4vLyBCZSBzdXJlIHRvIHBhc3Mgb3VyIHVwZGF0ZU15RGF0YSBhbmQgdGhlIHNraXBSZXNldCBvcHRpb25cclxuZnVuY3Rpb24gVGFibGUoeyBjb2x1bW5zLCBkYXRhLCB1cGRhdGVNeURhdGEsIHNraXBSZXNldCB9KSB7XHJcbiAgY29uc3QgZmlsdGVyVHlwZXMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLy8gQWRkIGEgbmV3IGZ1enp5VGV4dEZpbHRlckZuIGZpbHRlciB0eXBlLlxyXG4gICAgICBmdXp6eVRleHQ6IGZ1enp5VGV4dEZpbHRlckZuLFxyXG4gICAgICAvLyBPciwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGV4dCBmaWx0ZXIgdG8gdXNlXHJcbiAgICAgIC8vIFwic3RhcnRXaXRoXCJcclxuICAgICAgdGV4dDogKHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByb3dzLmZpbHRlcihyb3cgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXVxyXG4gICAgICAgICAgcmV0dXJuIHJvd1ZhbHVlICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBTdHJpbmcocm93VmFsdWUpXHJcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0c1dpdGgoU3RyaW5nKGZpbHRlclZhbHVlKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICA6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBbXVxyXG4gIClcclxuXHJcbiAgY29uc3QgZGVmYXVsdENvbHVtbiA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAvLyBMZXQncyBzZXQgdXAgb3VyIGRlZmF1bHQgRmlsdGVyIFVJXHJcbiAgICAgIC8vIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuICAgICAgLy8gQW5kIGFsc28gb3VyIGRlZmF1bHQgZWRpdGFibGUgY2VsbFxyXG4gICAgICBDZWxsOiBFZGl0YWJsZUNlbGwsXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICAvLyBVc2UgdGhlIHN0YXRlIGFuZCBmdW5jdGlvbnMgcmV0dXJuZWQgZnJvbSB1c2VUYWJsZSB0byBidWlsZCB5b3VyIFVJXHJcbiAgY29uc3Qge1xyXG4gICAgZ2V0VGFibGVQcm9wcyxcclxuICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgcHJlcGFyZVJvdyxcclxuICAgIHBhZ2UsIC8vIEluc3RlYWQgb2YgdXNpbmcgJ3Jvd3MnLCB3ZSdsbCB1c2UgcGFnZSxcclxuICAgIC8vIHdoaWNoIGhhcyBvbmx5IHRoZSByb3dzIGZvciB0aGUgYWN0aXZlIHBhZ2VcclxuXHJcbiAgICAvLyBUaGUgcmVzdCBvZiB0aGVzZSB0aGluZ3MgYXJlIHN1cGVyIGhhbmR5LCB0b28gOylcclxuICAgIGNhblByZXZpb3VzUGFnZSxcclxuICAgIGNhbk5leHRQYWdlLFxyXG4gICAgcGFnZU9wdGlvbnMsXHJcbiAgICBwYWdlQ291bnQsXHJcbiAgICBnb3RvUGFnZSxcclxuICAgIG5leHRQYWdlLFxyXG4gICAgcHJldmlvdXNQYWdlLFxyXG4gICAgc2V0UGFnZVNpemUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICBwYWdlSW5kZXgsXHJcbiAgICAgIHBhZ2VTaXplLFxyXG4gICAgICBzb3J0QnksXHJcbiAgICAgIGdyb3VwQnksXHJcbiAgICAgIGV4cGFuZGVkLFxyXG4gICAgICBmaWx0ZXJzLFxyXG4gICAgICBzZWxlY3RlZFJvd0lkcyxcclxuICAgIH0sXHJcbiAgfSA9IHVzZVRhYmxlKFxyXG4gICAge1xyXG4gICAgICBjb2x1bW5zLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBkZWZhdWx0Q29sdW1uLFxyXG4gICAgICBmaWx0ZXJUeXBlcyxcclxuICAgICAgLy8gdXBkYXRlTXlEYXRhIGlzbid0IHBhcnQgb2YgdGhlIEFQSSwgYnV0XHJcbiAgICAgIC8vIGFueXRoaW5nIHdlIHB1dCBpbnRvIHRoZXNlIG9wdGlvbnMgd2lsbFxyXG4gICAgICAvLyBhdXRvbWF0aWNhbGx5IGJlIGF2YWlsYWJsZSBvbiB0aGUgaW5zdGFuY2UuXHJcbiAgICAgIC8vIFRoYXQgd2F5IHdlIGNhbiBjYWxsIHRoaXMgZnVuY3Rpb24gZnJvbSBvdXJcclxuICAgICAgLy8gY2VsbCByZW5kZXJlciFcclxuICAgICAgdXBkYXRlTXlEYXRhLFxyXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gcGFzcyB0aGlzIHNvIHRoZSBwYWdlIGRvZXNuJ3QgY2hhbmdlXHJcbiAgICAgIC8vIHdoZW4gd2UgZWRpdCB0aGUgZGF0YS5cclxuICAgICAgYXV0b1Jlc2V0UGFnZTogIXNraXBSZXNldCxcclxuICAgICAgYXV0b1Jlc2V0U2VsZWN0ZWRSb3dzOiAhc2tpcFJlc2V0LFxyXG4gICAgICBkaXNhYmxlTXVsdGlTb3J0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHVzZUZpbHRlcnMsXHJcbiAgICB1c2VHcm91cEJ5LFxyXG4gICAgdXNlU29ydEJ5LFxyXG4gICAgdXNlRXhwYW5kZWQsXHJcbiAgICB1c2VQYWdpbmF0aW9uLFxyXG4gICAgdXNlUm93U2VsZWN0LFxyXG4gICAgLy8gSGVyZSB3ZSB3aWxsIHVzZSBhIHBsdWdpbiB0byBhZGQgb3VyIHNlbGVjdGlvbiBjb2x1bW5cclxuICAgIGhvb2tzID0+IHtcclxuICAgICAgaG9va3MudmlzaWJsZUNvbHVtbnMucHVzaChjb2x1bW5zID0+IHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3NlbGVjdGlvbicsXHJcbiAgICAgICAgICAgIC8vIE1ha2UgdGhpcyBjb2x1bW4gYSBncm91cEJ5Qm91bmRhcnkuIFRoaXMgZW5zdXJlcyB0aGF0IGdyb3VwQnkgY29sdW1uc1xyXG4gICAgICAgICAgICAvLyBhcmUgcGxhY2VkIGFmdGVyIGl0XHJcbiAgICAgICAgICAgIGdyb3VwQnlCb3VuZGFyeTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gVGhlIGhlYWRlciBjYW4gdXNlIHRoZSB0YWJsZSdzIGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIG1ldGhvZFxyXG4gICAgICAgICAgICAvLyB0byByZW5kZXIgYSBjaGVja2JveFxyXG4gICAgICAgICAgICBIZWFkZXI6ICh7IGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIH0pID0+IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEluZGV0ZXJtaW5hdGVDaGVja2JveCB7Li4uZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMoKX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgLy8gVGhlIGNlbGwgY2FuIHVzZSB0aGUgaW5kaXZpZHVhbCByb3cncyBnZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzIG1ldGhvZFxyXG4gICAgICAgICAgICAvLyB0byB0aGUgcmVuZGVyIGEgY2hlY2tib3hcclxuICAgICAgICAgICAgQ2VsbDogKHsgcm93IH0pID0+IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEluZGV0ZXJtaW5hdGVDaGVja2JveCB7Li4ucm93LmdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMoKX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAuLi5jb2x1bW5zLFxyXG4gICAgICAgIF1cclxuICAgICAgfSlcclxuICAgIH1cclxuICApXHJcblxyXG4gIC8vIFJlbmRlciB0aGUgVUkgZm9yIHlvdXIgdGFibGVcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcclxuICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5jYW5Hcm91cEJ5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBjYW4gYmUgZ3JvdXBlZCwgbGV0J3MgYWRkIGEgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldEdyb3VwQnlUb2dnbGVQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc0dyb3VwZWQgPyAn8J+bkSAnIDogJ/CfkYogJ31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIEFkZCBhIHNvcnQgZGlyZWN0aW9uIGluZGljYXRvciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIPCflL0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnIPCflLwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIFJlbmRlciB0aGUgY29sdW1ucyBmaWx0ZXIgVUkgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2NvbHVtbi5jYW5GaWx0ZXIgPyBjb2x1bW4ucmVuZGVyKCdGaWx0ZXInKSA6IG51bGx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICAge3BhZ2UubWFwKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLmlzR3JvdXBlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIGdyb3VwZWQgY2VsbCwgYWRkIGFuIGV4cGFuZGVyIGFuZCByb3cgY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4ucm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyAn8J+RhycgOiAn8J+RiSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGwucmVuZGVyKCdDZWxsJywgeyBlZGl0YWJsZTogZmFsc2UgfSl9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnN1YlJvd3MubGVuZ3RofSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc0FnZ3JlZ2F0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjZWxsIGlzIGFnZ3JlZ2F0ZWQsIHVzZSB0aGUgQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJlciBmb3IgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQWdncmVnYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc1BsYWNlaG9sZGVyID8gbnVsbCA6ICggLy8gRm9yIGNlbGxzIHdpdGggcmVwZWF0ZWQgdmFsdWVzLCByZW5kZXIgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGp1c3QgcmVuZGVyIHRoZSByZWd1bGFyIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0NlbGwnLCB7IGVkaXRhYmxlOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIHsvKlxyXG4gICAgICAgIFBhZ2luYXRpb24gY2FuIGJlIGJ1aWx0IGhvd2V2ZXIgeW91J2QgbGlrZS5cclxuICAgICAgICBUaGlzIGlzIGp1c3QgYSB2ZXJ5IGJhc2ljIFVJIGltcGxlbWVudGF0aW9uOlxyXG4gICAgICAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZSgwKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8PCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7JzwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKHBhZ2VDb3VudCAtIDEpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPj4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBQYWdleycgJ31cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtwYWdlSW5kZXggKyAxfSBvZiB7cGFnZU9wdGlvbnMubGVuZ3RofVxyXG4gICAgICAgICAgPC9zdHJvbmc+eycgJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB8IEdvIHRvIHBhZ2U6eycgJ31cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYWdlSW5kZXggKyAxfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAtIDEgOiAwXHJcbiAgICAgICAgICAgICAgZ290b1BhZ2UocGFnZSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYWdlU2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7WzEwLCAyMCwgMzAsIDQwLCA1MF0ubWFwKHBhZ2VTaXplID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhZ2VTaXplfSB2YWx1ZT17cGFnZVNpemV9PlxyXG4gICAgICAgICAgICAgIFNob3cge3BhZ2VTaXplfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxwcmU+XHJcbiAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwYWdlSW5kZXgsXHJcbiAgICAgICAgICAgICAgcGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgcGFnZUNvdW50LFxyXG4gICAgICAgICAgICAgIGNhbk5leHRQYWdlLFxyXG4gICAgICAgICAgICAgIGNhblByZXZpb3VzUGFnZSxcclxuICAgICAgICAgICAgICBzb3J0QnksXHJcbiAgICAgICAgICAgICAgZ3JvdXBCeSxcclxuICAgICAgICAgICAgICBleHBhbmRlZDogZXhwYW5kZWQsXHJcbiAgICAgICAgICAgICAgZmlsdGVycyxcclxuICAgICAgICAgICAgICBzZWxlY3RlZFJvd0lkczogc2VsZWN0ZWRSb3dJZHMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9jb2RlPlxyXG4gICAgICA8L3ByZT4gKi99XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIERlZmluZSBhIGN1c3RvbSBmaWx0ZXIgZmlsdGVyIGZ1bmN0aW9uIVxyXG5mdW5jdGlvbiBmaWx0ZXJHcmVhdGVyVGhhbihyb3dzLCBpZCwgZmlsdGVyVmFsdWUpIHtcclxuICByZXR1cm4gcm93cy5maWx0ZXIocm93ID0+IHtcclxuICAgIGNvbnN0IHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF1cclxuICAgIHJldHVybiByb3dWYWx1ZSA+PSBmaWx0ZXJWYWx1ZVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYW4gYXV0b1JlbW92ZSBtZXRob2Qgb24gdGhlIGZpbHRlciBmdW5jdGlvbiB0aGF0XHJcbi8vIHdoZW4gZ2l2ZW4gdGhlIG5ldyBmaWx0ZXIgdmFsdWUgYW5kIHJldHVybnMgdHJ1ZSwgdGhlIGZpbHRlclxyXG4vLyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC4gTm9ybWFsbHkgdGhpcyBpcyBqdXN0IGFuIHVuZGVmaW5lZFxyXG4vLyBjaGVjaywgYnV0IGhlcmUsIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgaWYgaXQncyBub3QgYSBudW1iZXJcclxuZmlsdGVyR3JlYXRlclRoYW4uYXV0b1JlbW92ZSA9IHZhbCA9PiB0eXBlb2YgdmFsICE9PSAnbnVtYmVyJ1xyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBhZ2dyZWdhdG9yIHRoYXRcclxuLy8gdGFrZXMgaW4gYW4gYXJyYXkgb2YgbGVhZiB2YWx1ZXMgYW5kXHJcbi8vIHJldHVybnMgdGhlIHJvdW5kZWQgbWVkaWFuXHJcbmZ1bmN0aW9uIHJvdW5kZWRNZWRpYW4obGVhZlZhbHVlcykge1xyXG4gIGxldCBtaW4gPSBsZWFmVmFsdWVzWzBdIHx8IDBcclxuICBsZXQgbWF4ID0gbGVhZlZhbHVlc1swXSB8fCAwXHJcblxyXG4gIGxlYWZWYWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHZhbHVlKVxyXG4gICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZSlcclxuICB9KVxyXG5cclxuICByZXR1cm4gTWF0aC5yb3VuZCgobWluICsgbWF4KSAvIDIpXHJcbn1cclxuXHJcbmNvbnN0IEluZGV0ZXJtaW5hdGVDaGVja2JveCA9IFJlYWN0LmZvcndhcmRSZWYoXHJcbiAgKHsgaW5kZXRlcm1pbmF0ZSwgLi4ucmVzdCB9LCByZWYpID0+IHtcclxuICAgIGNvbnN0IGRlZmF1bHRSZWYgPSBSZWFjdC51c2VSZWYoKVxyXG4gICAgY29uc3QgcmVzb2x2ZWRSZWYgPSByZWYgfHwgZGVmYXVsdFJlZlxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHJlc29sdmVkUmVmLmN1cnJlbnQuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGVcclxuICAgIH0sIFtyZXNvbHZlZFJlZiwgaW5kZXRlcm1pbmF0ZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgcmVmPXtyZXNvbHZlZFJlZn0gey4uLnJlc3R9IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZFBsYXllcnMoe1xyXG4gIGxlYWd1ZVxyXG59KSB7XHJcblxyXG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiAnTmFtZScsXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdGaXJzdCBOYW1lJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdmaXJzdE5hbWUnLFxyXG4gICAgICAgICAgICAvLyBVc2UgYSB0d28tc3RhZ2UgYWdncmVnYXRvciBoZXJlIHRvIGZpcnN0XHJcbiAgICAgICAgICAgIC8vIGNvdW50IHRoZSB0b3RhbCByb3dzIGJlaW5nIGFnZ3JlZ2F0ZWQsXHJcbiAgICAgICAgICAgIC8vIHRoZW4gc3VtIGFueSBvZiB0aG9zZSBjb3VudHMgaWYgdGhleSBhcmVcclxuICAgICAgICAgICAgLy8gYWdncmVnYXRlZCBmdXJ0aGVyXHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuICAgICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IE5hbWVzYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0xhc3QgTmFtZScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnbGFzdE5hbWUnLFxyXG4gICAgICAgICAgICAvLyBVc2Ugb3VyIGN1c3RvbSBgZnV6enlUZXh0YCBmaWx0ZXIgb24gdGhpcyBjb2x1bW5cclxuICAgICAgICAgICAgZmlsdGVyOiAnZnV6enlUZXh0JyxcclxuICAgICAgICAgICAgLy8gVXNlIGFub3RoZXIgdHdvLXN0YWdlIGFnZ3JlZ2F0b3IgaGVyZSB0b1xyXG4gICAgICAgICAgICAvLyBmaXJzdCBjb3VudCB0aGUgVU5JUVVFIHZhbHVlcyBmcm9tIHRoZSByb3dzXHJcbiAgICAgICAgICAgIC8vIGJlaW5nIGFnZ3JlZ2F0ZWQsIHRoZW4gc3VtIHRob3NlIGNvdW50cyBpZlxyXG4gICAgICAgICAgICAvLyB0aGV5IGFyZSBhZ2dyZWdhdGVkIGZ1cnRoZXJcclxuICAgICAgICAgICAgYWdncmVnYXRlOiAndW5pcXVlQ291bnQnLFxyXG4gICAgICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gVW5pcXVlIE5hbWVzYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIEhlYWRlcjogJ0luZm8nLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnQWdlJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdhZ2UnLFxyXG4gICAgICAgICAgICBGaWx0ZXI6IFNsaWRlckNvbHVtbkZpbHRlcixcclxuICAgICAgICAgICAgZmlsdGVyOiAnZXF1YWxzJyxcclxuICAgICAgICAgICAgLy8gQWdncmVnYXRlIHRoZSBhdmVyYWdlIGFnZSBvZiB2aXNpdG9yc1xyXG4gICAgICAgICAgICBhZ2dyZWdhdGU6ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IChhdmcpYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1Zpc2l0cycsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAndmlzaXRzJyxcclxuICAgICAgICAgICAgRmlsdGVyOiBOdW1iZXJSYW5nZUNvbHVtbkZpbHRlcixcclxuICAgICAgICAgICAgZmlsdGVyOiAnYmV0d2VlbicsXHJcbiAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSB0aGUgc3VtIG9mIGFsbCB2aXNpdHNcclxuICAgICAgICAgICAgYWdncmVnYXRlOiAnc3VtJyxcclxuICAgICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9ICh0b3RhbClgLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnU3RhdHVzJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdzdGF0dXMnLFxyXG4gICAgICAgICAgICBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcclxuICAgICAgICAgICAgZmlsdGVyOiAnaW5jbHVkZXMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnUHJvZmlsZSBQcm9ncmVzcycsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAncHJvZ3Jlc3MnLFxyXG4gICAgICAgICAgICBGaWx0ZXI6IFNsaWRlckNvbHVtbkZpbHRlcixcclxuICAgICAgICAgICAgZmlsdGVyOiBmaWx0ZXJHcmVhdGVyVGhhbixcclxuICAgICAgICAgICAgLy8gVXNlIG91ciBjdXN0b20gcm91bmRlZE1lZGlhbiBhZ2dyZWdhdG9yXHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZTogcm91bmRlZE1lZGlhbixcclxuICAgICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IChtZWQpYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBbXVxyXG4gIClcclxuXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gbWFrZURhdGEoMTAwMDApKVxyXG4gIGNvbnN0IFtvcmlnaW5hbERhdGFdID0gUmVhY3QudXNlU3RhdGUoZGF0YSlcclxuXHJcbiAgLy8gV2UgbmVlZCB0byBrZWVwIHRoZSB0YWJsZSBmcm9tIHJlc2V0dGluZyB0aGUgcGFnZUluZGV4IHdoZW4gd2VcclxuICAvLyBVcGRhdGUgZGF0YS4gU28gd2UgY2FuIGtlZXAgdHJhY2sgb2YgdGhhdCBmbGFnIHdpdGggYSByZWYuXHJcbiAgY29uc3Qgc2tpcFJlc2V0UmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKVxyXG5cclxuICAvLyBXaGVuIG91ciBjZWxsIHJlbmRlcmVyIGNhbGxzIHVwZGF0ZU15RGF0YSwgd2UnbGwgdXNlXHJcbiAgLy8gdGhlIHJvd0luZGV4LCBjb2x1bW5JZCBhbmQgbmV3IHZhbHVlIHRvIHVwZGF0ZSB0aGVcclxuICAvLyBvcmlnaW5hbCBkYXRhXHJcbiAgY29uc3QgdXBkYXRlTXlEYXRhID0gKHJvd0luZGV4LCBjb2x1bW5JZCwgdmFsdWUpID0+IHtcclxuICAgIC8vIFdlIGFsc28gdHVybiBvbiB0aGUgZmxhZyB0byBub3QgcmVzZXQgdGhlIHBhZ2VcclxuICAgIHNraXBSZXNldFJlZi5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgc2V0RGF0YShvbGQgPT5cclxuICAgICAgb2xkLm1hcCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gcm93SW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnJvdyxcclxuICAgICAgICAgICAgW2NvbHVtbklkXTogdmFsdWUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dcclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIC8vIEFmdGVyIGRhdGEgY2hhbmdlcywgd2UgdHVybiB0aGUgZmxhZyBiYWNrIG9mZlxyXG4gIC8vIHNvIHRoYXQgaWYgZGF0YSBhY3R1YWxseSBjaGFuZ2VzIHdoZW4gd2UncmUgbm90XHJcbiAgLy8gZWRpdGluZyBpdCwgdGhlIHBhZ2UgaXMgcmVzZXRcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2tpcFJlc2V0UmVmLmN1cnJlbnQgPSBmYWxzZVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgLy8gTGV0J3MgYWRkIGEgZGF0YSByZXNldHRlci9yYW5kb21pemVyIHRvIGhlbHBcclxuICAvLyBpbGx1c3RyYXRlIHRoYXQgZmxvdy4uLlxyXG4gIGNvbnN0IHJlc2V0RGF0YSA9ICgpID0+IHtcclxuICAgIC8vIERvbid0IHJlc2V0IHRoZSBwYWdlIHdoZW4gd2UgZG8gdGhpc1xyXG4gICAgc2tpcFJlc2V0UmVmLmN1cnJlbnQgPSB0cnVlXHJcbiAgICBzZXREYXRhKG9yaWdpbmFsRGF0YSlcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIGJnLXdoaXRlIHctZnVsbCBtYi02IHNoYWRvdy1sZyByb3VuZGVkIHAtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC10IG1iLTAgcHgtNCBweS0zIGJvcmRlci0wXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgb3ZlcmZsb3cteC1hdXRvXCI+XHJcbiAgICAgICAgICB7LyogUHJvamVjdHMgdGFibGUgKi99XHJcbiAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgdXBkYXRlTXlEYXRhPXt1cGRhdGVNeURhdGF9XHJcbiAgICAgICAgICAgIHNraXBSZXNldD17c2tpcFJlc2V0UmVmLmN1cnJlbnR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9