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
    Filter: DefaultColumnFilter,
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
        lineNumber: 622,
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
          lineNumber: 626,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 621,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJDYXJkUGxheWVycyIsImRlZmF1bHRQcm9wcyIsImxlYWd1ZSIsImRpdmlzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiRWRpdGFibGVDZWxsIiwidmFsdWUiLCJpbml0aWFsVmFsdWUiLCJyb3ciLCJpbmRleCIsImNvbHVtbiIsImlkIiwidXBkYXRlTXlEYXRhIiwiZWRpdGFibGUiLCJzZXRWYWx1ZSIsIlJlYWN0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25CbHVyIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsImZpbHRlclZhbHVlIiwicHJlRmlsdGVyZWRSb3dzIiwic2V0RmlsdGVyIiwiY291bnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJvcHRpb25zIiwiU2V0IiwiZm9yRWFjaCIsImFkZCIsInZhbHVlcyIsIm1hcCIsIm9wdGlvbiIsImkiLCJTbGlkZXJDb2x1bW5GaWx0ZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwicGFyc2VJbnQiLCJOdW1iZXJSYW5nZUNvbHVtbkZpbHRlciIsImRpc3BsYXkiLCJ2YWwiLCJvbGQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImZ1enp5VGV4dEZpbHRlckZuIiwicm93cyIsIm1hdGNoU29ydGVyIiwia2V5cyIsImF1dG9SZW1vdmUiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwic2tpcFJlc2V0IiwiZmlsdGVyVHlwZXMiLCJmdXp6eVRleHQiLCJ0ZXh0IiwiZmlsdGVyIiwicm93VmFsdWUiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJkZWZhdWx0Q29sdW1uIiwiRmlsdGVyIiwiQ2VsbCIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInByZXBhcmVSb3ciLCJwYWdlIiwiY2FuUHJldmlvdXNQYWdlIiwiY2FuTmV4dFBhZ2UiLCJwYWdlT3B0aW9ucyIsInBhZ2VDb3VudCIsImdvdG9QYWdlIiwibmV4dFBhZ2UiLCJwcmV2aW91c1BhZ2UiLCJzZXRQYWdlU2l6ZSIsInN0YXRlIiwicGFnZUluZGV4IiwicGFnZVNpemUiLCJzb3J0QnkiLCJncm91cEJ5IiwiZXhwYW5kZWQiLCJmaWx0ZXJzIiwic2VsZWN0ZWRSb3dJZHMiLCJ1c2VUYWJsZSIsImF1dG9SZXNldFBhZ2UiLCJhdXRvUmVzZXRTZWxlY3RlZFJvd3MiLCJkaXNhYmxlTXVsdGlTb3J0IiwidXNlRmlsdGVycyIsInVzZUdyb3VwQnkiLCJ1c2VTb3J0QnkiLCJ1c2VFeHBhbmRlZCIsInVzZVBhZ2luYXRpb24iLCJ1c2VSb3dTZWxlY3QiLCJob29rcyIsInZpc2libGVDb2x1bW5zIiwicHVzaCIsImdyb3VwQnlCb3VuZGFyeSIsIkhlYWRlciIsImdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIiwiZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJnZXRIZWFkZXJQcm9wcyIsImNhbkdyb3VwQnkiLCJnZXRHcm91cEJ5VG9nZ2xlUHJvcHMiLCJpc0dyb3VwZWQiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsInJlbmRlciIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwiY2FuRmlsdGVyIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJnZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzIiwiaXNFeHBhbmRlZCIsInN1YlJvd3MiLCJpc0FnZ3JlZ2F0ZWQiLCJpc1BsYWNlaG9sZGVyIiwiTnVtYmVyIiwiZmlsdGVyR3JlYXRlclRoYW4iLCJyb3VuZGVkTWVkaWFuIiwibGVhZlZhbHVlcyIsInJvdW5kIiwiSW5kZXRlcm1pbmF0ZUNoZWNrYm94IiwicmVmIiwiaW5kZXRlcm1pbmF0ZSIsInJlc3QiLCJkZWZhdWx0UmVmIiwicmVzb2x2ZWRSZWYiLCJjdXJyZW50IiwiYWNjZXNzb3IiLCJhZ2dyZWdhdGUiLCJBZ2dyZWdhdGVkIiwic2V0RGF0YSIsIm1ha2VEYXRhIiwib3JpZ2luYWxEYXRhIiwic2tpcFJlc2V0UmVmIiwicm93SW5kZXgiLCJjb2x1bW5JZCIsInJlc2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQVVBOztDQUtBOztBQUVBQSxXQUFXLENBQUNDLFlBQVosR0FBMkI7QUFDekJDLFFBQU0sRUFBRSx1QkFEaUI7QUFFekJDLFVBQVEsRUFBRTtBQUZlLENBQTNCO0FBS0FILFdBQVcsQ0FBQ0ksU0FBWixHQUF3QjtBQUN0QkYsUUFBTSxFQUFFRywwREFBZ0JDO0FBREYsQ0FBeEIsQyxDQUlBOztBQUNBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQ3BCQyxPQUFLLEVBQUVDLFlBRGE7QUFFcEJDLEtBQUcsRUFBRTtBQUFFQztBQUFGLEdBRmU7QUFHcEJDLFFBQU0sRUFBRTtBQUFFQztBQUFGLEdBSFk7QUFJcEJDLGNBSm9CO0FBSU47QUFDZEM7QUFMb0IsQ0FBRCxLQU1mO0FBQUE7O0FBQ0o7QUFDQSxRQUFNLENBQUNQLEtBQUQsRUFBUVEsUUFBUixJQUFvQkMscURBQUEsQ0FBZVIsWUFBZixDQUExQjs7QUFFQSxRQUFNUyxRQUFRLEdBQUdDLENBQUMsSUFBSTtBQUNwQkgsWUFBUSxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU1osS0FBVixDQUFSO0FBQ0QsR0FGRCxDQUpJLENBUUo7OztBQUNBLFFBQU1hLE1BQU0sR0FBRyxNQUFNO0FBQ25CUCxnQkFBWSxDQUFDSCxLQUFELEVBQVFFLEVBQVIsRUFBWUwsS0FBWixDQUFaO0FBQ0QsR0FGRCxDQVRJLENBYUo7OztBQUNBUyx3REFBQSxDQUFnQixNQUFNO0FBQ3BCRCxZQUFRLENBQUNQLFlBQUQsQ0FBUjtBQUNELEdBRkQsRUFF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QUNBOztBQUNBLFFBQU02RixTQUFTLEdBQUcsTUFBTTtBQUN0QjtBQUNBSCxnQkFBWSxDQUFDUCxPQUFiLEdBQXVCLElBQXZCO0FBQ0FJLFdBQU8sQ0FBQ0UsWUFBRCxDQUFQO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHVGQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsK0JBRUUsOERBQUMsS0FBRDtBQUNFLGlCQUFPLEVBQUUxRixPQURYO0FBRUUsY0FBSSxFQUFFQyxJQUZSO0FBR0Usc0JBQVksRUFBRTNDLFlBSGhCO0FBSUUsbUJBQVMsRUFBRXFJLFlBQVksQ0FBQ1A7QUFKMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWlCRDs7SUFwSXVCNUksVzs7TUFBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZWY4OTY4ZTQ4MDZmNmU4MDIzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge1xyXG4gIHVzZVRhYmxlLFxyXG4gIHVzZVBhZ2luYXRpb24sXHJcbiAgdXNlU29ydEJ5LFxyXG4gIHVzZUZpbHRlcnMsXHJcbiAgdXNlR3JvdXBCeSxcclxuICB1c2VFeHBhbmRlZCxcclxuICB1c2VSb3dTZWxlY3QsXHJcbn0gZnJvbSAncmVhY3QtdGFibGUnXHJcbi8vIGltcG9ydCBtYXRjaFNvcnRlciBmcm9tICdtYXRjaC1zb3J0ZXInXHJcblxyXG5pbXBvcnQgbWFrZURhdGEgZnJvbSAnLi4vLi4vbWFrZURhdGEnXHJcblxyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuQ2FyZFBsYXllcnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxlYWd1ZTogXCJNYWpvciBMZWFndWUgQmFzZWJhbGxcIixcclxuICBkaXZpc2lvbjogXCJcIlxyXG59O1xyXG5cclxuQ2FyZFBsYXllcnMucHJvcFR5cGVzID0ge1xyXG4gIGxlYWd1ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuLy8gQ3JlYXRlIGFuIGVkaXRhYmxlIGNlbGwgcmVuZGVyZXJcclxuY29uc3QgRWRpdGFibGVDZWxsID0gKHtcclxuICB2YWx1ZTogaW5pdGlhbFZhbHVlLFxyXG4gIHJvdzogeyBpbmRleCB9LFxyXG4gIGNvbHVtbjogeyBpZCB9LFxyXG4gIHVwZGF0ZU15RGF0YSwgLy8gVGhpcyBpcyBhIGN1c3RvbSBmdW5jdGlvbiB0aGF0IHdlIHN1cHBsaWVkIHRvIG91ciB0YWJsZSBpbnN0YW5jZVxyXG4gIGVkaXRhYmxlLFxyXG59KSA9PiB7XHJcbiAgLy8gV2UgbmVlZCB0byBrZWVwIGFuZCB1cGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBjZWxsIG5vcm1hbGx5XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIC8vIFdlJ2xsIG9ubHkgdXBkYXRlIHRoZSBleHRlcm5hbCBkYXRhIHdoZW4gdGhlIGlucHV0IGlzIGJsdXJyZWRcclxuICBjb25zdCBvbkJsdXIgPSAoKSA9PiB7XHJcbiAgICB1cGRhdGVNeURhdGEoaW5kZXgsIGlkLCB2YWx1ZSlcclxuICB9XHJcblxyXG4gIC8vIElmIHRoZSBpbml0aWFsVmFsdWUgaXMgY2hhbmdlZCBleHRlcm5hbGwsIHN5bmMgaXQgdXAgd2l0aCBvdXIgc3RhdGVcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VmFsdWUoaW5pdGlhbFZhbHVlKVxyXG4gIH0sIFtpbml0aWFsVmFsdWVdKVxyXG5cclxuICBpZiAoIWVkaXRhYmxlKSB7XHJcbiAgICByZXR1cm4gYCR7aW5pdGlhbFZhbHVlfWBcclxuICB9XHJcblxyXG4gIHJldHVybiA8aW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IG9uQmx1cj17b25CbHVyfSAvPlxyXG59XHJcblxyXG4vLyBEZWZpbmUgYSBkZWZhdWx0IFVJIGZvciBmaWx0ZXJpbmdcclxuZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciB9LFxyXG59KSB7XHJcbiAgY29uc3QgY291bnQgPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXRcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8ICcnfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCkgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxyXG4gICAgICB9fVxyXG4gICAgICBwbGFjZWhvbGRlcj17YFNlYXJjaCAke2NvdW50fSByZWNvcmRzLi4uYH1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSBmb3Igc2VsZWN0aW5nXHJcbi8vIGEgdW5pcXVlIG9wdGlvbiBmcm9tIGEgbGlzdFxyXG5mdW5jdGlvbiBTZWxlY3RDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbn0pIHtcclxuICAvLyBDYWxjdWxhdGUgdGhlIG9wdGlvbnMgZm9yIGZpbHRlcmluZ1xyXG4gIC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3NcclxuICBjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IFNldCgpXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBvcHRpb25zLmFkZChyb3cudmFsdWVzW2lkXSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gWy4uLm9wdGlvbnMudmFsdWVzKCldXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICAvLyBSZW5kZXIgYSBtdWx0aS1zZWxlY3QgYm94XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWxlY3RcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZClcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxyXG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSB0aGF0IHVzZXMgYVxyXG4vLyBzbGlkZXIgdG8gc2V0IHRoZSBmaWx0ZXIgdmFsdWUgYmV0d2VlbiBhIGNvbHVtbidzXHJcbi8vIG1pbiBhbmQgbWF4IHZhbHVlc1xyXG5mdW5jdGlvbiBTbGlkZXJDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbn0pIHtcclxuICAvLyBDYWxjdWxhdGUgdGhlIG1pbiBhbmQgbWF4XHJcbiAgLy8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xyXG5cclxuICBjb25zdCBbbWluLCBtYXhdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBsZXQgbWluID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4gICAgbGV0IG1heCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIG1pbiA9IE1hdGgubWluKHJvdy52YWx1ZXNbaWRdLCBtaW4pXHJcbiAgICAgIG1heCA9IE1hdGgubWF4KHJvdy52YWx1ZXNbaWRdLCBtYXgpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFttaW4sIG1heF1cclxuICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgIG1pbj17bWlufVxyXG4gICAgICAgIG1heD17bWF4fVxyXG4gICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCBtaW59XHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgc2V0RmlsdGVyKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCkpXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIodW5kZWZpbmVkKX0+T2ZmPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gVUkgZm9yIG91ciAnYmV0d2Vlbicgb3IgbnVtYmVyIHJhbmdlXHJcbi8vIGZpbHRlci4gSXQgdXNlcyB0d28gbnVtYmVyIGJveGVzIGFuZCBmaWx0ZXJzIHJvd3MgdG9cclxuLy8gb25lcyB0aGF0IGhhdmUgdmFsdWVzIGJldHdlZW4gdGhlIHR3b1xyXG5mdW5jdGlvbiBOdW1iZXJSYW5nZUNvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlID0gW10sIHByZUZpbHRlcmVkUm93cywgc2V0RmlsdGVyLCBpZCB9LFxyXG59KSB7XHJcbiAgY29uc3QgW21pbiwgbWF4XSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgbGV0IG1pbiA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuICAgIGxldCBtYXggPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBtaW4gPSBNYXRoLm1pbihyb3cudmFsdWVzW2lkXSwgbWluKVxyXG4gICAgICBtYXggPSBNYXRoLm1heChyb3cudmFsdWVzW2lkXSwgbWF4KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBbbWluLCBtYXhdXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlWzBdIHx8ICcnfVxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICBzZXRGaWx0ZXIoKG9sZCA9IFtdKSA9PiBbdmFsID8gcGFyc2VJbnQodmFsLCAxMCkgOiB1bmRlZmluZWQsIG9sZFsxXV0pXHJcbiAgICAgICAgfX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17YE1pbiAoJHttaW59KWB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiAnNzBweCcsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNXJlbScsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgdG9cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlWzFdIHx8ICcnfVxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICBzZXRGaWx0ZXIoKG9sZCA9IFtdKSA9PiBbb2xkWzBdLCB2YWwgPyBwYXJzZUludCh2YWwsIDEwKSA6IHVuZGVmaW5lZF0pXHJcbiAgICAgICAgfX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17YE1heCAoJHttYXh9KWB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiAnNzBweCcsXHJcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMC41cmVtJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBmdXp6eVRleHRGaWx0ZXJGbihyb3dzLCBpZCwgZmlsdGVyVmFsdWUpIHtcclxuICByZXR1cm4gbWF0Y2hTb3J0ZXIocm93cywgZmlsdGVyVmFsdWUsIHsga2V5czogW3JvdyA9PiByb3cudmFsdWVzW2lkXV0gfSlcclxufVxyXG5cclxuLy8gTGV0IHRoZSB0YWJsZSByZW1vdmUgdGhlIGZpbHRlciBpZiB0aGUgc3RyaW5nIGlzIGVtcHR5XHJcbmZ1enp5VGV4dEZpbHRlckZuLmF1dG9SZW1vdmUgPSB2YWwgPT4gIXZhbFxyXG5cclxuLy8gQmUgc3VyZSB0byBwYXNzIG91ciB1cGRhdGVNeURhdGEgYW5kIHRoZSBza2lwUmVzZXQgb3B0aW9uXHJcbmZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSwgdXBkYXRlTXlEYXRhLCBza2lwUmVzZXQgfSkge1xyXG4gIGNvbnN0IGZpbHRlclR5cGVzID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIC8vIEFkZCBhIG5ldyBmdXp6eVRleHRGaWx0ZXJGbiBmaWx0ZXIgdHlwZS5cclxuICAgICAgZnV6enlUZXh0OiBmdXp6eVRleHRGaWx0ZXJGbixcclxuICAgICAgLy8gT3IsIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHRleHQgZmlsdGVyIHRvIHVzZVxyXG4gICAgICAvLyBcInN0YXJ0V2l0aFwiXHJcbiAgICAgIHRleHQ6IChyb3dzLCBpZCwgZmlsdGVyVmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gcm93cy5maWx0ZXIocm93ID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF1cclxuICAgICAgICAgIHJldHVybiByb3dWYWx1ZSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gU3RyaW5nKHJvd1ZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgIC5zdGFydHNXaXRoKFN0cmluZyhmaWx0ZXJWYWx1ZSkudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gIGNvbnN0IGRlZmF1bHRDb2x1bW4gPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLy8gTGV0J3Mgc2V0IHVwIG91ciBkZWZhdWx0IEZpbHRlciBVSVxyXG4gICAgICBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcbiAgICAgIC8vIEFuZCBhbHNvIG91ciBkZWZhdWx0IGVkaXRhYmxlIGNlbGxcclxuICAgICAgQ2VsbDogRWRpdGFibGVDZWxsLFxyXG4gICAgfSksXHJcbiAgICBbXVxyXG4gIClcclxuXHJcbiAgLy8gVXNlIHRoZSBzdGF0ZSBhbmQgZnVuY3Rpb25zIHJldHVybmVkIGZyb20gdXNlVGFibGUgdG8gYnVpbGQgeW91ciBVSVxyXG4gIGNvbnN0IHtcclxuICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgIGhlYWRlckdyb3VwcyxcclxuICAgIHByZXBhcmVSb3csXHJcbiAgICBwYWdlLCAvLyBJbnN0ZWFkIG9mIHVzaW5nICdyb3dzJywgd2UnbGwgdXNlIHBhZ2UsXHJcbiAgICAvLyB3aGljaCBoYXMgb25seSB0aGUgcm93cyBmb3IgdGhlIGFjdGl2ZSBwYWdlXHJcblxyXG4gICAgLy8gVGhlIHJlc3Qgb2YgdGhlc2UgdGhpbmdzIGFyZSBzdXBlciBoYW5keSwgdG9vIDspXHJcbiAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICBjYW5OZXh0UGFnZSxcclxuICAgIHBhZ2VPcHRpb25zLFxyXG4gICAgcGFnZUNvdW50LFxyXG4gICAgZ290b1BhZ2UsXHJcbiAgICBuZXh0UGFnZSxcclxuICAgIHByZXZpb3VzUGFnZSxcclxuICAgIHNldFBhZ2VTaXplLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgcGFnZUluZGV4LFxyXG4gICAgICBwYWdlU2l6ZSxcclxuICAgICAgc29ydEJ5LFxyXG4gICAgICBncm91cEJ5LFxyXG4gICAgICBleHBhbmRlZCxcclxuICAgICAgZmlsdGVycyxcclxuICAgICAgc2VsZWN0ZWRSb3dJZHMsXHJcbiAgICB9LFxyXG4gIH0gPSB1c2VUYWJsZShcclxuICAgIHtcclxuICAgICAgY29sdW1ucyxcclxuICAgICAgZGF0YSxcclxuICAgICAgZGVmYXVsdENvbHVtbixcclxuICAgICAgZmlsdGVyVHlwZXMsXHJcbiAgICAgIC8vIHVwZGF0ZU15RGF0YSBpc24ndCBwYXJ0IG9mIHRoZSBBUEksIGJ1dFxyXG4gICAgICAvLyBhbnl0aGluZyB3ZSBwdXQgaW50byB0aGVzZSBvcHRpb25zIHdpbGxcclxuICAgICAgLy8gYXV0b21hdGljYWxseSBiZSBhdmFpbGFibGUgb24gdGhlIGluc3RhbmNlLlxyXG4gICAgICAvLyBUaGF0IHdheSB3ZSBjYW4gY2FsbCB0aGlzIGZ1bmN0aW9uIGZyb20gb3VyXHJcbiAgICAgIC8vIGNlbGwgcmVuZGVyZXIhXHJcbiAgICAgIHVwZGF0ZU15RGF0YSxcclxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHBhc3MgdGhpcyBzbyB0aGUgcGFnZSBkb2Vzbid0IGNoYW5nZVxyXG4gICAgICAvLyB3aGVuIHdlIGVkaXQgdGhlIGRhdGEuXHJcbiAgICAgIGF1dG9SZXNldFBhZ2U6ICFza2lwUmVzZXQsXHJcbiAgICAgIGF1dG9SZXNldFNlbGVjdGVkUm93czogIXNraXBSZXNldCxcclxuICAgICAgZGlzYWJsZU11bHRpU29ydDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB1c2VGaWx0ZXJzLFxyXG4gICAgdXNlR3JvdXBCeSxcclxuICAgIHVzZVNvcnRCeSxcclxuICAgIHVzZUV4cGFuZGVkLFxyXG4gICAgdXNlUGFnaW5hdGlvbixcclxuICAgIHVzZVJvd1NlbGVjdCxcclxuICAgIC8vIEhlcmUgd2Ugd2lsbCB1c2UgYSBwbHVnaW4gdG8gYWRkIG91ciBzZWxlY3Rpb24gY29sdW1uXHJcbiAgICBob29rcyA9PiB7XHJcbiAgICAgIGhvb2tzLnZpc2libGVDb2x1bW5zLnB1c2goY29sdW1ucyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdzZWxlY3Rpb24nLFxyXG4gICAgICAgICAgICAvLyBNYWtlIHRoaXMgY29sdW1uIGEgZ3JvdXBCeUJvdW5kYXJ5LiBUaGlzIGVuc3VyZXMgdGhhdCBncm91cEJ5IGNvbHVtbnNcclxuICAgICAgICAgICAgLy8gYXJlIHBsYWNlZCBhZnRlciBpdFxyXG4gICAgICAgICAgICBncm91cEJ5Qm91bmRhcnk6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIFRoZSBoZWFkZXIgY2FuIHVzZSB0aGUgdGFibGUncyBnZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyBtZXRob2RcclxuICAgICAgICAgICAgLy8gdG8gcmVuZGVyIGEgY2hlY2tib3hcclxuICAgICAgICAgICAgSGVhZGVyOiAoeyBnZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJbmRldGVybWluYXRlQ2hlY2tib3ggey4uLmdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzKCl9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIC8vIFRoZSBjZWxsIGNhbiB1c2UgdGhlIGluZGl2aWR1YWwgcm93J3MgZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyBtZXRob2RcclxuICAgICAgICAgICAgLy8gdG8gdGhlIHJlbmRlciBhIGNoZWNrYm94XHJcbiAgICAgICAgICAgIENlbGw6ICh7IHJvdyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJbmRldGVybWluYXRlQ2hlY2tib3ggey4uLnJvdy5nZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzKCl9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLi4uY29sdW1ucyxcclxuICAgICAgICBdXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgKVxyXG5cclxuICAvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uY2FuR3JvdXBCeSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gY2FuIGJlIGdyb3VwZWQsIGxldCdzIGFkZCBhIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNHcm91cGVkID8gJ/Cfm5EgJyA6ICfwn5GKICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBBZGQgYSBzb3J0IGRpcmVjdGlvbiBpbmRpY2F0b3IgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzU29ydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyDwn5S9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJyDwn5S8J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBSZW5kZXIgdGhlIGNvbHVtbnMgZmlsdGVyIFVJICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntjb2x1bW4uY2FuRmlsdGVyID8gY29sdW1uLnJlbmRlcignRmlsdGVyJykgOiBudWxsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAgIHtwYWdlLm1hcChyb3cgPT4ge1xyXG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5pc0dyb3VwZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBncm91cGVkIGNlbGwsIGFkZCBhbiBleHBhbmRlciBhbmQgcm93IGNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLnJvdy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pc0V4cGFuZGVkID8gJ/CfkYcnIDogJ/CfkYknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcsIHsgZWRpdGFibGU6IGZhbHNlIH0pfSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5zdWJSb3dzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2VsbCBpcyBhZ2dyZWdhdGVkLCB1c2UgdGhlIEFnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyZXIgZm9yIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJywgeyBlZGl0YWJsZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICB7LypcclxuICAgICAgICBQYWdpbmF0aW9uIGNhbiBiZSBidWlsdCBob3dldmVyIHlvdSdkIGxpa2UuXHJcbiAgICAgICAgVGhpcyBpcyBqdXN0IGEgdmVyeSBiYXNpYyBVSSBpbXBsZW1lbnRhdGlvbjpcclxuICAgICAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UoMCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPDwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmV2aW91c1BhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV4dFBhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShwYWdlQ291bnQgLSAxKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgUGFnZXsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICB7cGFnZUluZGV4ICsgMX0gb2Yge3BhZ2VPcHRpb25zLmxlbmd0aH1cclxuICAgICAgICAgIDwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgfCBHbyB0byBwYWdlOnsnICd9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFnZUluZGV4ICsgMX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLSAxIDogMFxyXG4gICAgICAgICAgICAgIGdvdG9QYWdlKHBhZ2UpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgc2V0UGFnZVNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1sxMCwgMjAsIDMwLCA0MCwgNTBdLm1hcChwYWdlU2l6ZSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwYWdlU2l6ZX0gdmFsdWU9e3BhZ2VTaXplfT5cclxuICAgICAgICAgICAgICBTaG93IHtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8cHJlPlxyXG4gICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcGFnZUluZGV4LFxyXG4gICAgICAgICAgICAgIHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgIHBhZ2VDb3VudCxcclxuICAgICAgICAgICAgICBjYW5OZXh0UGFnZSxcclxuICAgICAgICAgICAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICAgICAgICAgICAgc29ydEJ5LFxyXG4gICAgICAgICAgICAgIGdyb3VwQnksXHJcbiAgICAgICAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxyXG4gICAgICAgICAgICAgIGZpbHRlcnMsXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IHNlbGVjdGVkUm93SWRzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvY29kZT5cclxuICAgICAgPC9wcmU+ICovfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBEZWZpbmUgYSBjdXN0b20gZmlsdGVyIGZpbHRlciBmdW5jdGlvbiFcclxuZnVuY3Rpb24gZmlsdGVyR3JlYXRlclRoYW4ocm93cywgaWQsIGZpbHRlclZhbHVlKSB7XHJcbiAgcmV0dXJuIHJvd3MuZmlsdGVyKHJvdyA9PiB7XHJcbiAgICBjb25zdCByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdXHJcbiAgICByZXR1cm4gcm93VmFsdWUgPj0gZmlsdGVyVmFsdWVcclxuICB9KVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGFuIGF1dG9SZW1vdmUgbWV0aG9kIG9uIHRoZSBmaWx0ZXIgZnVuY3Rpb24gdGhhdFxyXG4vLyB3aGVuIGdpdmVuIHRoZSBuZXcgZmlsdGVyIHZhbHVlIGFuZCByZXR1cm5zIHRydWUsIHRoZSBmaWx0ZXJcclxuLy8gd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuIE5vcm1hbGx5IHRoaXMgaXMganVzdCBhbiB1bmRlZmluZWRcclxuLy8gY2hlY2ssIGJ1dCBoZXJlLCB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgZmlsdGVyIGlmIGl0J3Mgbm90IGEgbnVtYmVyXHJcbmZpbHRlckdyZWF0ZXJUaGFuLmF1dG9SZW1vdmUgPSB2YWwgPT4gdHlwZW9mIHZhbCAhPT0gJ251bWJlcidcclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gYWdncmVnYXRvciB0aGF0XHJcbi8vIHRha2VzIGluIGFuIGFycmF5IG9mIGxlYWYgdmFsdWVzIGFuZFxyXG4vLyByZXR1cm5zIHRoZSByb3VuZGVkIG1lZGlhblxyXG5mdW5jdGlvbiByb3VuZGVkTWVkaWFuKGxlYWZWYWx1ZXMpIHtcclxuICBsZXQgbWluID0gbGVhZlZhbHVlc1swXSB8fCAwXHJcbiAgbGV0IG1heCA9IGxlYWZWYWx1ZXNbMF0gfHwgMFxyXG5cclxuICBsZWFmVmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZSlcclxuICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIE1hdGgucm91bmQoKG1pbiArIG1heCkgLyAyKVxyXG59XHJcblxyXG5jb25zdCBJbmRldGVybWluYXRlQ2hlY2tib3ggPSBSZWFjdC5mb3J3YXJkUmVmKFxyXG4gICh7IGluZGV0ZXJtaW5hdGUsIC4uLnJlc3QgfSwgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0UmVmID0gUmVhY3QudXNlUmVmKClcclxuICAgIGNvbnN0IHJlc29sdmVkUmVmID0gcmVmIHx8IGRlZmF1bHRSZWZcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICByZXNvbHZlZFJlZi5jdXJyZW50LmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlXHJcbiAgICB9LCBbcmVzb2x2ZWRSZWYsIGluZGV0ZXJtaW5hdGVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHJlZj17cmVzb2x2ZWRSZWZ9IHsuLi5yZXN0fSAvPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRQbGF5ZXJzKHtcclxuICBsZWFndWVcclxufSkge1xyXG5cclxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+IFtcclxuICAgICAge1xyXG4gICAgICAgIEhlYWRlcjogJ05hbWUnLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnRmlyc3QgTmFtZScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnZmlyc3ROYW1lJyxcclxuICAgICAgICAgICAgLy8gVXNlIGEgdHdvLXN0YWdlIGFnZ3JlZ2F0b3IgaGVyZSB0byBmaXJzdFxyXG4gICAgICAgICAgICAvLyBjb3VudCB0aGUgdG90YWwgcm93cyBiZWluZyBhZ2dyZWdhdGVkLFxyXG4gICAgICAgICAgICAvLyB0aGVuIHN1bSBhbnkgb2YgdGhvc2UgY291bnRzIGlmIHRoZXkgYXJlXHJcbiAgICAgICAgICAgIC8vIGFnZ3JlZ2F0ZWQgZnVydGhlclxyXG4gICAgICAgICAgICBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBOYW1lc2AsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdMYXN0IE5hbWUnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2xhc3ROYW1lJyxcclxuICAgICAgICAgICAgLy8gVXNlIG91ciBjdXN0b20gYGZ1enp5VGV4dGAgZmlsdGVyIG9uIHRoaXMgY29sdW1uXHJcbiAgICAgICAgICAgIC8vIFVzZSBhbm90aGVyIHR3by1zdGFnZSBhZ2dyZWdhdG9yIGhlcmUgdG9cclxuICAgICAgICAgICAgLy8gZmlyc3QgY291bnQgdGhlIFVOSVFVRSB2YWx1ZXMgZnJvbSB0aGUgcm93c1xyXG4gICAgICAgICAgICAvLyBiZWluZyBhZ2dyZWdhdGVkLCB0aGVuIHN1bSB0aG9zZSBjb3VudHMgaWZcclxuICAgICAgICAgICAgLy8gdGhleSBhcmUgYWdncmVnYXRlZCBmdXJ0aGVyXHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZTogJ3VuaXF1ZUNvdW50JyxcclxuICAgICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IFVuaXF1ZSBOYW1lc2AsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6ICdJbmZvJyxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0FnZScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnYWdlJyxcclxuICAgICAgICAgICAgRmlsdGVyOiBTbGlkZXJDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2VxdWFscycsXHJcbiAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSB0aGUgYXZlcmFnZSBhZ2Ugb2YgdmlzaXRvcnNcclxuICAgICAgICAgICAgYWdncmVnYXRlOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSAoYXZnKWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdWaXNpdHMnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Zpc2l0cycsXHJcbiAgICAgICAgICAgIEZpbHRlcjogTnVtYmVyUmFuZ2VDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2JldHdlZW4nLFxyXG4gICAgICAgICAgICAvLyBBZ2dyZWdhdGUgdGhlIHN1bSBvZiBhbGwgdmlzaXRzXHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZTogJ3N1bScsXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSAodG90YWwpYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1N0YXR1cycsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnc3RhdHVzJyxcclxuICAgICAgICAgICAgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2luY2x1ZGVzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1Byb2ZpbGUgUHJvZ3Jlc3MnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Byb2dyZXNzJyxcclxuICAgICAgICAgICAgRmlsdGVyOiBTbGlkZXJDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgICAgIGZpbHRlcjogZmlsdGVyR3JlYXRlclRoYW4sXHJcbiAgICAgICAgICAgIC8vIFVzZSBvdXIgY3VzdG9tIHJvdW5kZWRNZWRpYW4gYWdncmVnYXRvclxyXG4gICAgICAgICAgICBhZ2dyZWdhdGU6IHJvdW5kZWRNZWRpYW4sXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSAobWVkKWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IG1ha2VEYXRhKDEwMDAwKSlcclxuICBjb25zdCBbb3JpZ2luYWxEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKGRhdGEpXHJcblxyXG4gIC8vIFdlIG5lZWQgdG8ga2VlcCB0aGUgdGFibGUgZnJvbSByZXNldHRpbmcgdGhlIHBhZ2VJbmRleCB3aGVuIHdlXHJcbiAgLy8gVXBkYXRlIGRhdGEuIFNvIHdlIGNhbiBrZWVwIHRyYWNrIG9mIHRoYXQgZmxhZyB3aXRoIGEgcmVmLlxyXG4gIGNvbnN0IHNraXBSZXNldFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSlcclxuXHJcbiAgLy8gV2hlbiBvdXIgY2VsbCByZW5kZXJlciBjYWxscyB1cGRhdGVNeURhdGEsIHdlJ2xsIHVzZVxyXG4gIC8vIHRoZSByb3dJbmRleCwgY29sdW1uSWQgYW5kIG5ldyB2YWx1ZSB0byB1cGRhdGUgdGhlXHJcbiAgLy8gb3JpZ2luYWwgZGF0YVxyXG4gIGNvbnN0IHVwZGF0ZU15RGF0YSA9IChyb3dJbmRleCwgY29sdW1uSWQsIHZhbHVlKSA9PiB7XHJcbiAgICAvLyBXZSBhbHNvIHR1cm4gb24gdGhlIGZsYWcgdG8gbm90IHJlc2V0IHRoZSBwYWdlXHJcbiAgICBza2lwUmVzZXRSZWYuY3VycmVudCA9IHRydWVcclxuICAgIHNldERhdGEob2xkID0+XHJcbiAgICAgIG9sZC5tYXAoKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IHJvd0luZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICAgIFtjb2x1bW5JZF06IHZhbHVlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93XHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvLyBBZnRlciBkYXRhIGNoYW5nZXMsIHdlIHR1cm4gdGhlIGZsYWcgYmFjayBvZmZcclxuICAvLyBzbyB0aGF0IGlmIGRhdGEgYWN0dWFsbHkgY2hhbmdlcyB3aGVuIHdlJ3JlIG5vdFxyXG4gIC8vIGVkaXRpbmcgaXQsIHRoZSBwYWdlIGlzIHJlc2V0XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNraXBSZXNldFJlZi5jdXJyZW50ID0gZmFsc2VcclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIC8vIExldCdzIGFkZCBhIGRhdGEgcmVzZXR0ZXIvcmFuZG9taXplciB0byBoZWxwXHJcbiAgLy8gaWxsdXN0cmF0ZSB0aGF0IGZsb3cuLi5cclxuICBjb25zdCByZXNldERhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyBEb24ndCByZXNldCB0aGUgcGFnZSB3aGVuIHdlIGRvIHRoaXNcclxuICAgIHNraXBSZXNldFJlZi5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgc2V0RGF0YShvcmlnaW5hbERhdGEpXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLXctMCBicmVhay13b3JkcyBiZy13aGl0ZSB3LWZ1bGwgbWItNiBzaGFkb3ctbGcgcm91bmRlZCBwLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdCBtYi0wIHB4LTQgcHktMyBib3JkZXItMFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIG92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICAgICAgey8qIFByb2plY3RzIHRhYmxlICovfVxyXG4gICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgIHVwZGF0ZU15RGF0YT17dXBkYXRlTXlEYXRhfVxyXG4gICAgICAgICAgICBza2lwUmVzZXQ9e3NraXBSZXNldFJlZi5jdXJyZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==