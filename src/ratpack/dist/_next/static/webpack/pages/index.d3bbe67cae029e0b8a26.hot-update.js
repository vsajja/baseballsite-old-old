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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
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
                    lineNumber: 336,
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
                lineNumber: 332,
                columnNumber: 21
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 9
      }, this)
    }), void 0, false, {
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
        lineNumber: 363,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("strong", {
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 375,
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
          lineNumber: 383,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 381,
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
          lineNumber: 400,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 362,
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
      lineNumber: 470,
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
        lineNumber: 595,
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
          lineNumber: 599,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 594,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJDYXJkUGxheWVycyIsImRlZmF1bHRQcm9wcyIsImxlYWd1ZSIsImRpdmlzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiRWRpdGFibGVDZWxsIiwidmFsdWUiLCJpbml0aWFsVmFsdWUiLCJyb3ciLCJpbmRleCIsImNvbHVtbiIsImlkIiwidXBkYXRlTXlEYXRhIiwiZWRpdGFibGUiLCJzZXRWYWx1ZSIsIlJlYWN0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25CbHVyIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsImZpbHRlclZhbHVlIiwicHJlRmlsdGVyZWRSb3dzIiwic2V0RmlsdGVyIiwiY291bnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJvcHRpb25zIiwiU2V0IiwiZm9yRWFjaCIsImFkZCIsInZhbHVlcyIsIm1hcCIsIm9wdGlvbiIsImkiLCJTbGlkZXJDb2x1bW5GaWx0ZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwicGFyc2VJbnQiLCJOdW1iZXJSYW5nZUNvbHVtbkZpbHRlciIsImRpc3BsYXkiLCJ2YWwiLCJvbGQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImZ1enp5VGV4dEZpbHRlckZuIiwicm93cyIsIm1hdGNoU29ydGVyIiwia2V5cyIsImF1dG9SZW1vdmUiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwic2tpcFJlc2V0IiwiZmlsdGVyVHlwZXMiLCJmdXp6eVRleHQiLCJ0ZXh0IiwiZmlsdGVyIiwicm93VmFsdWUiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJkZWZhdWx0Q29sdW1uIiwiRmlsdGVyIiwiQ2VsbCIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInByZXBhcmVSb3ciLCJwYWdlIiwiY2FuUHJldmlvdXNQYWdlIiwiY2FuTmV4dFBhZ2UiLCJwYWdlT3B0aW9ucyIsInBhZ2VDb3VudCIsImdvdG9QYWdlIiwibmV4dFBhZ2UiLCJwcmV2aW91c1BhZ2UiLCJzZXRQYWdlU2l6ZSIsInN0YXRlIiwicGFnZUluZGV4IiwicGFnZVNpemUiLCJzb3J0QnkiLCJncm91cEJ5IiwiZXhwYW5kZWQiLCJmaWx0ZXJzIiwic2VsZWN0ZWRSb3dJZHMiLCJ1c2VUYWJsZSIsImF1dG9SZXNldFBhZ2UiLCJhdXRvUmVzZXRTZWxlY3RlZFJvd3MiLCJkaXNhYmxlTXVsdGlTb3J0IiwidXNlRmlsdGVycyIsInVzZUdyb3VwQnkiLCJ1c2VTb3J0QnkiLCJ1c2VFeHBhbmRlZCIsInVzZVBhZ2luYXRpb24iLCJ1c2VSb3dTZWxlY3QiLCJob29rcyIsInZpc2libGVDb2x1bW5zIiwicHVzaCIsImdyb3VwQnlCb3VuZGFyeSIsIkhlYWRlciIsImdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIiwiZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwiaXNHcm91cGVkIiwiZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyIsImlzRXhwYW5kZWQiLCJyZW5kZXIiLCJzdWJSb3dzIiwiaXNBZ2dyZWdhdGVkIiwiaXNQbGFjZWhvbGRlciIsIk51bWJlciIsImZpbHRlckdyZWF0ZXJUaGFuIiwicm91bmRlZE1lZGlhbiIsImxlYWZWYWx1ZXMiLCJyb3VuZCIsIkluZGV0ZXJtaW5hdGVDaGVja2JveCIsInJlZiIsImluZGV0ZXJtaW5hdGUiLCJyZXN0IiwiZGVmYXVsdFJlZiIsInJlc29sdmVkUmVmIiwiY3VycmVudCIsImFjY2Vzc29yIiwiYWdncmVnYXRlIiwiQWdncmVnYXRlZCIsInNldERhdGEiLCJtYWtlRGF0YSIsIm9yaWdpbmFsRGF0YSIsInNraXBSZXNldFJlZiIsInJvd0luZGV4IiwiY29sdW1uSWQiLCJyZXNl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LE1BQU07QUFDdEI7QUFDQUgsZ0JBQVksQ0FBQ1AsT0FBYixHQUF1QixJQUF2QjtBQUNBSSxXQUFPLENBQUNFLFlBQUQsQ0FBUDtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx1RkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUssaUJBQVMsRUFBQyw4QkFBZjtBQUFBLCtCQUVFLDhEQUFDLEtBQUQ7QUFDRSxpQkFBTyxFQUFFaEYsT0FEWDtBQUVFLGNBQUksRUFBRUMsSUFGUjtBQUdFLHNCQUFZLEVBQUUzQyxZQUhoQjtBQUlFLG1CQUFTLEVBQUUySCxZQUFZLENBQUNQO0FBSjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFpQkQ7O0lBckl1QmxJLFc7O01BQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDNiYmU2N2NhZTAyOWUwYjhhMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtcclxuICB1c2VUYWJsZSxcclxuICB1c2VQYWdpbmF0aW9uLFxyXG4gIHVzZVNvcnRCeSxcclxuICB1c2VGaWx0ZXJzLFxyXG4gIHVzZUdyb3VwQnksXHJcbiAgdXNlRXhwYW5kZWQsXHJcbiAgdXNlUm93U2VsZWN0LFxyXG59IGZyb20gJ3JlYWN0LXRhYmxlJ1xyXG4vLyBpbXBvcnQgbWF0Y2hTb3J0ZXIgZnJvbSAnbWF0Y2gtc29ydGVyJ1xyXG5cclxuaW1wb3J0IG1ha2VEYXRhIGZyb20gJy4uLy4uL21ha2VEYXRhJ1xyXG5cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcbkNhcmRQbGF5ZXJzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsZWFndWU6IFwiTWFqb3IgTGVhZ3VlIEJhc2ViYWxsXCIsXHJcbiAgZGl2aXNpb246IFwiXCJcclxufTtcclxuXHJcbkNhcmRQbGF5ZXJzLnByb3BUeXBlcyA9IHtcclxuICBsZWFndWU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbi8vIENyZWF0ZSBhbiBlZGl0YWJsZSBjZWxsIHJlbmRlcmVyXHJcbmNvbnN0IEVkaXRhYmxlQ2VsbCA9ICh7XHJcbiAgdmFsdWU6IGluaXRpYWxWYWx1ZSxcclxuICByb3c6IHsgaW5kZXggfSxcclxuICBjb2x1bW46IHsgaWQgfSxcclxuICB1cGRhdGVNeURhdGEsIC8vIFRoaXMgaXMgYSBjdXN0b20gZnVuY3Rpb24gdGhhdCB3ZSBzdXBwbGllZCB0byBvdXIgdGFibGUgaW5zdGFuY2VcclxuICBlZGl0YWJsZSxcclxufSkgPT4ge1xyXG4gIC8vIFdlIG5lZWQgdG8ga2VlcCBhbmQgdXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgY2VsbCBub3JtYWxseVxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlKVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICAvLyBXZSdsbCBvbmx5IHVwZGF0ZSB0aGUgZXh0ZXJuYWwgZGF0YSB3aGVuIHRoZSBpbnB1dCBpcyBibHVycmVkXHJcbiAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlTXlEYXRhKGluZGV4LCBpZCwgdmFsdWUpXHJcbiAgfVxyXG5cclxuICAvLyBJZiB0aGUgaW5pdGlhbFZhbHVlIGlzIGNoYW5nZWQgZXh0ZXJuYWxsLCBzeW5jIGl0IHVwIHdpdGggb3VyIHN0YXRlXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFZhbHVlKGluaXRpYWxWYWx1ZSlcclxuICB9LCBbaW5pdGlhbFZhbHVlXSlcclxuXHJcbiAgaWYgKCFlZGl0YWJsZSkge1xyXG4gICAgcmV0dXJuIGAke2luaXRpYWxWYWx1ZX1gXHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGlucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBvbkJsdXI9e29uQmx1cn0gLz5cclxufVxyXG5cclxuLy8gRGVmaW5lIGEgZGVmYXVsdCBVSSBmb3IgZmlsdGVyaW5nXHJcbmZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIgfSxcclxufSkge1xyXG4gIGNvbnN0IGNvdW50ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0XHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpIC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcclxuICAgICAgfX1cclxuICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggJHtjb3VudH0gcmVjb3Jkcy4uLmB9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgZm9yIHNlbGVjdGluZ1xyXG4vLyBhIHVuaXF1ZSBvcHRpb24gZnJvbSBhIGxpc3RcclxuZnVuY3Rpb24gU2VsZWN0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG59KSB7XHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcclxuICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKVxyXG4gICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgb3B0aW9ucy5hZGQocm93LnZhbHVlc1tpZF0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXVxyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbiAgLy8gUmVuZGVyIGEgbXVsdGktc2VsZWN0IGJveFxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VsZWN0XHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZX1cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcclxuICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvc2VsZWN0PlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgdGhhdCB1c2VzIGFcclxuLy8gc2xpZGVyIHRvIHNldCB0aGUgZmlsdGVyIHZhbHVlIGJldHdlZW4gYSBjb2x1bW4nc1xyXG4vLyBtaW4gYW5kIG1heCB2YWx1ZXNcclxuZnVuY3Rpb24gU2xpZGVyQ29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG59KSB7XHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBtaW4gYW5kIG1heFxyXG4gIC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3NcclxuXHJcbiAgY29uc3QgW21pbiwgbWF4XSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgbGV0IG1pbiA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuICAgIGxldCBtYXggPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBtaW4gPSBNYXRoLm1pbihyb3cudmFsdWVzW2lkXSwgbWluKVxyXG4gICAgICBtYXggPSBNYXRoLm1heChyb3cudmFsdWVzW2lkXSwgbWF4KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBbbWluLCBtYXhdXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICBtaW49e21pbn1cclxuICAgICAgICBtYXg9e21heH1cclxuICAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgbWlufVxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgIHNldEZpbHRlcihwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApKVxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKHVuZGVmaW5lZCl9Pk9mZjwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIFVJIGZvciBvdXIgJ2JldHdlZW4nIG9yIG51bWJlciByYW5nZVxyXG4vLyBmaWx0ZXIuIEl0IHVzZXMgdHdvIG51bWJlciBib3hlcyBhbmQgZmlsdGVycyByb3dzIHRvXHJcbi8vIG9uZXMgdGhhdCBoYXZlIHZhbHVlcyBiZXR3ZWVuIHRoZSB0d29cclxuZnVuY3Rpb24gTnVtYmVyUmFuZ2VDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSA9IFtdLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciwgaWQgfSxcclxufSkge1xyXG4gIGNvbnN0IFttaW4sIG1heF0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGxldCBtaW4gPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbiAgICBsZXQgbWF4ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4gICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgbWluID0gTWF0aC5taW4ocm93LnZhbHVlc1tpZF0sIG1pbilcclxuICAgICAgbWF4ID0gTWF0aC5tYXgocm93LnZhbHVlc1tpZF0sIG1heClcclxuICAgIH0pXHJcbiAgICByZXR1cm4gW21pbiwgbWF4XVxyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZVswXSB8fCAnJ31cclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgc2V0RmlsdGVyKChvbGQgPSBbXSkgPT4gW3ZhbCA/IHBhcnNlSW50KHZhbCwgMTApIDogdW5kZWZpbmVkLCBvbGRbMV1dKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e2BNaW4gKCR7bWlufSlgfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogJzcwcHgnLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICcwLjVyZW0nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIHRvXHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZVsxXSB8fCAnJ31cclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgc2V0RmlsdGVyKChvbGQgPSBbXSkgPT4gW29sZFswXSwgdmFsID8gcGFyc2VJbnQodmFsLCAxMCkgOiB1bmRlZmluZWRdKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e2BNYXggKCR7bWF4fSlgfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogJzcwcHgnLFxyXG4gICAgICAgICAgbWFyZ2luTGVmdDogJzAuNXJlbScsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gZnV6enlUZXh0RmlsdGVyRm4ocm93cywgaWQsIGZpbHRlclZhbHVlKSB7XHJcbiAgcmV0dXJuIG1hdGNoU29ydGVyKHJvd3MsIGZpbHRlclZhbHVlLCB7IGtleXM6IFtyb3cgPT4gcm93LnZhbHVlc1tpZF1dIH0pXHJcbn1cclxuXHJcbi8vIExldCB0aGUgdGFibGUgcmVtb3ZlIHRoZSBmaWx0ZXIgaWYgdGhlIHN0cmluZyBpcyBlbXB0eVxyXG5mdXp6eVRleHRGaWx0ZXJGbi5hdXRvUmVtb3ZlID0gdmFsID0+ICF2YWxcclxuXHJcbi8vIEJlIHN1cmUgdG8gcGFzcyBvdXIgdXBkYXRlTXlEYXRhIGFuZCB0aGUgc2tpcFJlc2V0IG9wdGlvblxyXG5mdW5jdGlvbiBUYWJsZSh7IGNvbHVtbnMsIGRhdGEsIHVwZGF0ZU15RGF0YSwgc2tpcFJlc2V0IH0pIHtcclxuICBjb25zdCBmaWx0ZXJUeXBlcyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAvLyBBZGQgYSBuZXcgZnV6enlUZXh0RmlsdGVyRm4gZmlsdGVyIHR5cGUuXHJcbiAgICAgIGZ1enp5VGV4dDogZnV6enlUZXh0RmlsdGVyRm4sXHJcbiAgICAgIC8vIE9yLCBvdmVycmlkZSB0aGUgZGVmYXVsdCB0ZXh0IGZpbHRlciB0byB1c2VcclxuICAgICAgLy8gXCJzdGFydFdpdGhcIlxyXG4gICAgICB0ZXh0OiAocm93cywgaWQsIGZpbHRlclZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJvd3MuZmlsdGVyKHJvdyA9PiB7XHJcbiAgICAgICAgICBjb25zdCByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdXHJcbiAgICAgICAgICByZXR1cm4gcm93VmFsdWUgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IFN0cmluZyhyb3dWYWx1ZSlcclxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnRzV2l0aChTdHJpbmcoZmlsdGVyVmFsdWUpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgIDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICBjb25zdCBkZWZhdWx0Q29sdW1uID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIC8vIExldCdzIHNldCB1cCBvdXIgZGVmYXVsdCBGaWx0ZXIgVUlcclxuICAgICAgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG4gICAgICAvLyBBbmQgYWxzbyBvdXIgZGVmYXVsdCBlZGl0YWJsZSBjZWxsXHJcbiAgICAgIENlbGw6IEVkaXRhYmxlQ2VsbCxcclxuICAgIH0pLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gIC8vIFVzZSB0aGUgc3RhdGUgYW5kIGZ1bmN0aW9ucyByZXR1cm5lZCBmcm9tIHVzZVRhYmxlIHRvIGJ1aWxkIHlvdXIgVUlcclxuICBjb25zdCB7XHJcbiAgICBnZXRUYWJsZVByb3BzLFxyXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICBoZWFkZXJHcm91cHMsXHJcbiAgICBwcmVwYXJlUm93LFxyXG4gICAgcGFnZSwgLy8gSW5zdGVhZCBvZiB1c2luZyAncm93cycsIHdlJ2xsIHVzZSBwYWdlLFxyXG4gICAgLy8gd2hpY2ggaGFzIG9ubHkgdGhlIHJvd3MgZm9yIHRoZSBhY3RpdmUgcGFnZVxyXG5cclxuICAgIC8vIFRoZSByZXN0IG9mIHRoZXNlIHRoaW5ncyBhcmUgc3VwZXIgaGFuZHksIHRvbyA7KVxyXG4gICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgY2FuTmV4dFBhZ2UsXHJcbiAgICBwYWdlT3B0aW9ucyxcclxuICAgIHBhZ2VDb3VudCxcclxuICAgIGdvdG9QYWdlLFxyXG4gICAgbmV4dFBhZ2UsXHJcbiAgICBwcmV2aW91c1BhZ2UsXHJcbiAgICBzZXRQYWdlU2l6ZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIHBhZ2VJbmRleCxcclxuICAgICAgcGFnZVNpemUsXHJcbiAgICAgIHNvcnRCeSxcclxuICAgICAgZ3JvdXBCeSxcclxuICAgICAgZXhwYW5kZWQsXHJcbiAgICAgIGZpbHRlcnMsXHJcbiAgICAgIHNlbGVjdGVkUm93SWRzLFxyXG4gICAgfSxcclxuICB9ID0gdXNlVGFibGUoXHJcbiAgICB7XHJcbiAgICAgIGNvbHVtbnMsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGRlZmF1bHRDb2x1bW4sXHJcbiAgICAgIGZpbHRlclR5cGVzLFxyXG4gICAgICAvLyB1cGRhdGVNeURhdGEgaXNuJ3QgcGFydCBvZiB0aGUgQVBJLCBidXRcclxuICAgICAgLy8gYW55dGhpbmcgd2UgcHV0IGludG8gdGhlc2Ugb3B0aW9ucyB3aWxsXHJcbiAgICAgIC8vIGF1dG9tYXRpY2FsbHkgYmUgYXZhaWxhYmxlIG9uIHRoZSBpbnN0YW5jZS5cclxuICAgICAgLy8gVGhhdCB3YXkgd2UgY2FuIGNhbGwgdGhpcyBmdW5jdGlvbiBmcm9tIG91clxyXG4gICAgICAvLyBjZWxsIHJlbmRlcmVyIVxyXG4gICAgICB1cGRhdGVNeURhdGEsXHJcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBwYXNzIHRoaXMgc28gdGhlIHBhZ2UgZG9lc24ndCBjaGFuZ2VcclxuICAgICAgLy8gd2hlbiB3ZSBlZGl0IHRoZSBkYXRhLlxyXG4gICAgICBhdXRvUmVzZXRQYWdlOiAhc2tpcFJlc2V0LFxyXG4gICAgICBhdXRvUmVzZXRTZWxlY3RlZFJvd3M6ICFza2lwUmVzZXQsXHJcbiAgICAgIGRpc2FibGVNdWx0aVNvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdXNlRmlsdGVycyxcclxuICAgIHVzZUdyb3VwQnksXHJcbiAgICB1c2VTb3J0QnksXHJcbiAgICB1c2VFeHBhbmRlZCxcclxuICAgIHVzZVBhZ2luYXRpb24sXHJcbiAgICB1c2VSb3dTZWxlY3QsXHJcbiAgICAvLyBIZXJlIHdlIHdpbGwgdXNlIGEgcGx1Z2luIHRvIGFkZCBvdXIgc2VsZWN0aW9uIGNvbHVtblxyXG4gICAgaG9va3MgPT4ge1xyXG4gICAgICBob29rcy52aXNpYmxlQ29sdW1ucy5wdXNoKGNvbHVtbnMgPT4ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnc2VsZWN0aW9uJyxcclxuICAgICAgICAgICAgLy8gTWFrZSB0aGlzIGNvbHVtbiBhIGdyb3VwQnlCb3VuZGFyeS4gVGhpcyBlbnN1cmVzIHRoYXQgZ3JvdXBCeSBjb2x1bW5zXHJcbiAgICAgICAgICAgIC8vIGFyZSBwbGFjZWQgYWZ0ZXIgaXRcclxuICAgICAgICAgICAgZ3JvdXBCeUJvdW5kYXJ5OiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBUaGUgaGVhZGVyIGNhbiB1c2UgdGhlIHRhYmxlJ3MgZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgbWV0aG9kXHJcbiAgICAgICAgICAgIC8vIHRvIHJlbmRlciBhIGNoZWNrYm94XHJcbiAgICAgICAgICAgIEhlYWRlcjogKHsgZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXRlcm1pbmF0ZUNoZWNrYm94IHsuLi5nZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcygpfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAvLyBUaGUgY2VsbCBjYW4gdXNlIHRoZSBpbmRpdmlkdWFsIHJvdydzIGdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMgbWV0aG9kXHJcbiAgICAgICAgICAgIC8vIHRvIHRoZSByZW5kZXIgYSBjaGVja2JveFxyXG4gICAgICAgICAgICBDZWxsOiAoeyByb3cgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXRlcm1pbmF0ZUNoZWNrYm94IHsuLi5yb3cuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcygpfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC4uLmNvbHVtbnMsXHJcbiAgICAgICAgXVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgLy8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dGFibGUgey4uLmdldFRhYmxlUHJvcHMoKX0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAgIHtwYWdlLm1hcChyb3cgPT4ge1xyXG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5pc0dyb3VwZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBncm91cGVkIGNlbGwsIGFkZCBhbiBleHBhbmRlciBhbmQgcm93IGNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLnJvdy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pc0V4cGFuZGVkID8gJ/CfkYcnIDogJ/CfkYknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcsIHsgZWRpdGFibGU6IGZhbHNlIH0pfSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5zdWJSb3dzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2VsbCBpcyBhZ2dyZWdhdGVkLCB1c2UgdGhlIEFnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyZXIgZm9yIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJywgeyBlZGl0YWJsZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICB7LypcclxuICAgICAgICBQYWdpbmF0aW9uIGNhbiBiZSBidWlsdCBob3dldmVyIHlvdSdkIGxpa2UuXHJcbiAgICAgICAgVGhpcyBpcyBqdXN0IGEgdmVyeSBiYXNpYyBVSSBpbXBsZW1lbnRhdGlvbjpcclxuICAgICAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UoMCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPDwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmV2aW91c1BhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV4dFBhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShwYWdlQ291bnQgLSAxKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgUGFnZXsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICB7cGFnZUluZGV4ICsgMX0gb2Yge3BhZ2VPcHRpb25zLmxlbmd0aH1cclxuICAgICAgICAgIDwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgfCBHbyB0byBwYWdlOnsnICd9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFnZUluZGV4ICsgMX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLSAxIDogMFxyXG4gICAgICAgICAgICAgIGdvdG9QYWdlKHBhZ2UpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgc2V0UGFnZVNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1sxMCwgMjAsIDMwLCA0MCwgNTBdLm1hcChwYWdlU2l6ZSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwYWdlU2l6ZX0gdmFsdWU9e3BhZ2VTaXplfT5cclxuICAgICAgICAgICAgICBTaG93IHtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8cHJlPlxyXG4gICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcGFnZUluZGV4LFxyXG4gICAgICAgICAgICAgIHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgIHBhZ2VDb3VudCxcclxuICAgICAgICAgICAgICBjYW5OZXh0UGFnZSxcclxuICAgICAgICAgICAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICAgICAgICAgICAgc29ydEJ5LFxyXG4gICAgICAgICAgICAgIGdyb3VwQnksXHJcbiAgICAgICAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxyXG4gICAgICAgICAgICAgIGZpbHRlcnMsXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IHNlbGVjdGVkUm93SWRzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvY29kZT5cclxuICAgICAgPC9wcmU+ICovfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBEZWZpbmUgYSBjdXN0b20gZmlsdGVyIGZpbHRlciBmdW5jdGlvbiFcclxuZnVuY3Rpb24gZmlsdGVyR3JlYXRlclRoYW4ocm93cywgaWQsIGZpbHRlclZhbHVlKSB7XHJcbiAgcmV0dXJuIHJvd3MuZmlsdGVyKHJvdyA9PiB7XHJcbiAgICBjb25zdCByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdXHJcbiAgICByZXR1cm4gcm93VmFsdWUgPj0gZmlsdGVyVmFsdWVcclxuICB9KVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGFuIGF1dG9SZW1vdmUgbWV0aG9kIG9uIHRoZSBmaWx0ZXIgZnVuY3Rpb24gdGhhdFxyXG4vLyB3aGVuIGdpdmVuIHRoZSBuZXcgZmlsdGVyIHZhbHVlIGFuZCByZXR1cm5zIHRydWUsIHRoZSBmaWx0ZXJcclxuLy8gd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuIE5vcm1hbGx5IHRoaXMgaXMganVzdCBhbiB1bmRlZmluZWRcclxuLy8gY2hlY2ssIGJ1dCBoZXJlLCB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgZmlsdGVyIGlmIGl0J3Mgbm90IGEgbnVtYmVyXHJcbmZpbHRlckdyZWF0ZXJUaGFuLmF1dG9SZW1vdmUgPSB2YWwgPT4gdHlwZW9mIHZhbCAhPT0gJ251bWJlcidcclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gYWdncmVnYXRvciB0aGF0XHJcbi8vIHRha2VzIGluIGFuIGFycmF5IG9mIGxlYWYgdmFsdWVzIGFuZFxyXG4vLyByZXR1cm5zIHRoZSByb3VuZGVkIG1lZGlhblxyXG5mdW5jdGlvbiByb3VuZGVkTWVkaWFuKGxlYWZWYWx1ZXMpIHtcclxuICBsZXQgbWluID0gbGVhZlZhbHVlc1swXSB8fCAwXHJcbiAgbGV0IG1heCA9IGxlYWZWYWx1ZXNbMF0gfHwgMFxyXG5cclxuICBsZWFmVmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZSlcclxuICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIE1hdGgucm91bmQoKG1pbiArIG1heCkgLyAyKVxyXG59XHJcblxyXG5jb25zdCBJbmRldGVybWluYXRlQ2hlY2tib3ggPSBSZWFjdC5mb3J3YXJkUmVmKFxyXG4gICh7IGluZGV0ZXJtaW5hdGUsIC4uLnJlc3QgfSwgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0UmVmID0gUmVhY3QudXNlUmVmKClcclxuICAgIGNvbnN0IHJlc29sdmVkUmVmID0gcmVmIHx8IGRlZmF1bHRSZWZcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICByZXNvbHZlZFJlZi5jdXJyZW50LmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlXHJcbiAgICB9LCBbcmVzb2x2ZWRSZWYsIGluZGV0ZXJtaW5hdGVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHJlZj17cmVzb2x2ZWRSZWZ9IHsuLi5yZXN0fSAvPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRQbGF5ZXJzKHtcclxuICBsZWFndWVcclxufSkge1xyXG5cclxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+IFtcclxuICAgICAge1xyXG4gICAgICAgIEhlYWRlcjogJ05hbWUnLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnRmlyc3QgTmFtZScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnZmlyc3ROYW1lJyxcclxuICAgICAgICAgICAgLy8gVXNlIGEgdHdvLXN0YWdlIGFnZ3JlZ2F0b3IgaGVyZSB0byBmaXJzdFxyXG4gICAgICAgICAgICAvLyBjb3VudCB0aGUgdG90YWwgcm93cyBiZWluZyBhZ2dyZWdhdGVkLFxyXG4gICAgICAgICAgICAvLyB0aGVuIHN1bSBhbnkgb2YgdGhvc2UgY291bnRzIGlmIHRoZXkgYXJlXHJcbiAgICAgICAgICAgIC8vIGFnZ3JlZ2F0ZWQgZnVydGhlclxyXG4gICAgICAgICAgICBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBOYW1lc2AsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdMYXN0IE5hbWUnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2xhc3ROYW1lJyxcclxuICAgICAgICAgICAgLy8gVXNlIG91ciBjdXN0b20gYGZ1enp5VGV4dGAgZmlsdGVyIG9uIHRoaXMgY29sdW1uXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2Z1enp5VGV4dCcsXHJcbiAgICAgICAgICAgIC8vIFVzZSBhbm90aGVyIHR3by1zdGFnZSBhZ2dyZWdhdG9yIGhlcmUgdG9cclxuICAgICAgICAgICAgLy8gZmlyc3QgY291bnQgdGhlIFVOSVFVRSB2YWx1ZXMgZnJvbSB0aGUgcm93c1xyXG4gICAgICAgICAgICAvLyBiZWluZyBhZ2dyZWdhdGVkLCB0aGVuIHN1bSB0aG9zZSBjb3VudHMgaWZcclxuICAgICAgICAgICAgLy8gdGhleSBhcmUgYWdncmVnYXRlZCBmdXJ0aGVyXHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZTogJ3VuaXF1ZUNvdW50JyxcclxuICAgICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IFVuaXF1ZSBOYW1lc2AsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6ICdJbmZvJyxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0FnZScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnYWdlJyxcclxuICAgICAgICAgICAgRmlsdGVyOiBTbGlkZXJDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2VxdWFscycsXHJcbiAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSB0aGUgYXZlcmFnZSBhZ2Ugb2YgdmlzaXRvcnNcclxuICAgICAgICAgICAgYWdncmVnYXRlOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSAoYXZnKWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdWaXNpdHMnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Zpc2l0cycsXHJcbiAgICAgICAgICAgIEZpbHRlcjogTnVtYmVyUmFuZ2VDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2JldHdlZW4nLFxyXG4gICAgICAgICAgICAvLyBBZ2dyZWdhdGUgdGhlIHN1bSBvZiBhbGwgdmlzaXRzXHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZTogJ3N1bScsXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSAodG90YWwpYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1N0YXR1cycsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnc3RhdHVzJyxcclxuICAgICAgICAgICAgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2luY2x1ZGVzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1Byb2ZpbGUgUHJvZ3Jlc3MnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Byb2dyZXNzJyxcclxuICAgICAgICAgICAgRmlsdGVyOiBTbGlkZXJDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgICAgIGZpbHRlcjogZmlsdGVyR3JlYXRlclRoYW4sXHJcbiAgICAgICAgICAgIC8vIFVzZSBvdXIgY3VzdG9tIHJvdW5kZWRNZWRpYW4gYWdncmVnYXRvclxyXG4gICAgICAgICAgICBhZ2dyZWdhdGU6IHJvdW5kZWRNZWRpYW4sXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSAobWVkKWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IG1ha2VEYXRhKDEwMDAwKSlcclxuICBjb25zdCBbb3JpZ2luYWxEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKGRhdGEpXHJcblxyXG4gIC8vIFdlIG5lZWQgdG8ga2VlcCB0aGUgdGFibGUgZnJvbSByZXNldHRpbmcgdGhlIHBhZ2VJbmRleCB3aGVuIHdlXHJcbiAgLy8gVXBkYXRlIGRhdGEuIFNvIHdlIGNhbiBrZWVwIHRyYWNrIG9mIHRoYXQgZmxhZyB3aXRoIGEgcmVmLlxyXG4gIGNvbnN0IHNraXBSZXNldFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSlcclxuXHJcbiAgLy8gV2hlbiBvdXIgY2VsbCByZW5kZXJlciBjYWxscyB1cGRhdGVNeURhdGEsIHdlJ2xsIHVzZVxyXG4gIC8vIHRoZSByb3dJbmRleCwgY29sdW1uSWQgYW5kIG5ldyB2YWx1ZSB0byB1cGRhdGUgdGhlXHJcbiAgLy8gb3JpZ2luYWwgZGF0YVxyXG4gIGNvbnN0IHVwZGF0ZU15RGF0YSA9IChyb3dJbmRleCwgY29sdW1uSWQsIHZhbHVlKSA9PiB7XHJcbiAgICAvLyBXZSBhbHNvIHR1cm4gb24gdGhlIGZsYWcgdG8gbm90IHJlc2V0IHRoZSBwYWdlXHJcbiAgICBza2lwUmVzZXRSZWYuY3VycmVudCA9IHRydWVcclxuICAgIHNldERhdGEob2xkID0+XHJcbiAgICAgIG9sZC5tYXAoKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IHJvd0luZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICAgIFtjb2x1bW5JZF06IHZhbHVlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93XHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvLyBBZnRlciBkYXRhIGNoYW5nZXMsIHdlIHR1cm4gdGhlIGZsYWcgYmFjayBvZmZcclxuICAvLyBzbyB0aGF0IGlmIGRhdGEgYWN0dWFsbHkgY2hhbmdlcyB3aGVuIHdlJ3JlIG5vdFxyXG4gIC8vIGVkaXRpbmcgaXQsIHRoZSBwYWdlIGlzIHJlc2V0XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNraXBSZXNldFJlZi5jdXJyZW50ID0gZmFsc2VcclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIC8vIExldCdzIGFkZCBhIGRhdGEgcmVzZXR0ZXIvcmFuZG9taXplciB0byBoZWxwXHJcbiAgLy8gaWxsdXN0cmF0ZSB0aGF0IGZsb3cuLi5cclxuICBjb25zdCByZXNldERhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyBEb24ndCByZXNldCB0aGUgcGFnZSB3aGVuIHdlIGRvIHRoaXNcclxuICAgIHNraXBSZXNldFJlZi5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgc2V0RGF0YShvcmlnaW5hbERhdGEpXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLXctMCBicmVhay13b3JkcyBiZy13aGl0ZSB3LWZ1bGwgbWItNiBzaGFkb3ctbGcgcm91bmRlZCBwLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdCBtYi0wIHB4LTQgcHktMyBib3JkZXItMFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIG92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICAgICAgey8qIFByb2plY3RzIHRhYmxlICovfVxyXG4gICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgIHVwZGF0ZU15RGF0YT17dXBkYXRlTXlEYXRhfVxyXG4gICAgICAgICAgICBza2lwUmVzZXQ9e3NraXBSZXNldFJlZi5jdXJyZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==