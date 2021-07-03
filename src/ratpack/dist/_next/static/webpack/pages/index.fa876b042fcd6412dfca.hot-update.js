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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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
    _s6 = $RefreshSig$();

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
};
const Styles = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div`
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

    td {
      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`; // Create an editable cell renderer

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
    lineNumber: 104,
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
    lineNumber: 114,
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
      lineNumber: 147,
      columnNumber: 7
    }, this), options.map((option, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
      value: option,
      children: option
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 141,
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
      lineNumber: 178,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
      onClick: () => setFilter(undefined),
      children: "Off"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
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
      lineNumber: 214,
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
      lineNumber: 228,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 209,
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
            lineNumber: 348,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 15
        }, this),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({
          row
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(IndeterminateCheckbox, _objectSpread({}, row.getToggleRowSelectedProps()), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
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
                lineNumber: 377,
                columnNumber: 23
              }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", _objectSpread(_objectSpread({}, column.getSortByToggleProps()), {}, {
                children: [column.render('Header'), column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : '']
              }), void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 381,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 374,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: column.canFilter ? column.render('Filter') : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 19
            }, this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 373,
            columnNumber: 17
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 369,
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
                    lineNumber: 409,
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
                lineNumber: 405,
                columnNumber: 21
              }, this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 402,
            columnNumber: 15
          }, this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => gotoPage(0),
        disabled: !canPreviousPage,
        children: '<<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => previousPage(),
        disabled: !canPreviousPage,
        children: '<'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => nextPage(),
        disabled: !canNextPage,
        children: '>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: () => gotoPage(pageCount - 1),
        disabled: !canNextPage,
        children: '>>'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 9
      }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        children: ["Page", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("strong", {
          children: [pageIndex + 1, " of ", pageOptions.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 450,
          columnNumber: 11
        }, this), ' ']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 448,
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
          lineNumber: 456,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 454,
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
          lineNumber: 473,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("pre", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("code", {
        children: JSON.stringify({
          pageIndex,
          pageSize,
          pageCount,
          canNextPage,
          canPreviousPage,
          sortBy,
          groupBy,
          expanded: expanded,
          filters,
          selectedRowIds: selectedRowIds
        }, null, 2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 479,
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
      lineNumber: 543,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
}, "ouw4KVvDKeit07oEcYWUcp3TdOA="));
_c8 = IndeterminateCheckbox;
function CardPlayers({
  league
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "rounded-t mb-0 px-4 py-3 border-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex flex-wrap items-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "relative w-full px-4 max-w-full flex-grow flex-1",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
              className: "font-semibold text-base text-blueGray-700",
              children: league
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 558,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 557,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 555,
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
          lineNumber: 566,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJDYXJkUGxheWVycyIsImRlZmF1bHRQcm9wcyIsImxlYWd1ZSIsImRpdmlzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiU3R5bGVzIiwic3R5bGVkIiwiRWRpdGFibGVDZWxsIiwidmFsdWUiLCJpbml0aWFsVmFsdWUiLCJyb3ciLCJpbmRleCIsImNvbHVtbiIsImlkIiwidXBkYXRlTXlEYXRhIiwiZWRpdGFibGUiLCJzZXRWYWx1ZSIsIlJlYWN0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25CbHVyIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsImZpbHRlclZhbHVlIiwicHJlRmlsdGVyZWRSb3dzIiwic2V0RmlsdGVyIiwiY291bnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJvcHRpb25zIiwiU2V0IiwiZm9yRWFjaCIsImFkZCIsInZhbHVlcyIsIm1hcCIsIm9wdGlvbiIsImkiLCJTbGlkZXJDb2x1bW5GaWx0ZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwicGFyc2VJbnQiLCJOdW1iZXJSYW5nZUNvbHVtbkZpbHRlciIsImRpc3BsYXkiLCJ2YWwiLCJvbGQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImZ1enp5VGV4dEZpbHRlckZuIiwicm93cyIsIm1hdGNoU29ydGVyIiwia2V5cyIsImF1dG9SZW1vdmUiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwic2tpcFJlc2V0IiwiZmlsdGVyVHlwZXMiLCJmdXp6eVRleHQiLCJ0ZXh0IiwiZmlsdGVyIiwicm93VmFsdWUiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJkZWZhdWx0Q29sdW1uIiwiRmlsdGVyIiwiQ2VsbCIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInByZXBhcmVSb3ciLCJwYWdlIiwiY2FuUHJldmlvdXNQYWdlIiwiY2FuTmV4dFBhZ2UiLCJwYWdlT3B0aW9ucyIsInBhZ2VDb3VudCIsImdvdG9QYWdlIiwibmV4dFBhZ2UiLCJwcmV2aW91c1BhZ2UiLCJzZXRQYWdlU2l6ZSIsInN0YXRlIiwicGFnZUluZGV4IiwicGFnZVNpemUiLCJzb3J0QnkiLCJncm91cEJ5IiwiZXhwYW5kZWQiLCJmaWx0ZXJzIiwic2VsZWN0ZWRSb3dJZHMiLCJ1c2VUYWJsZSIsImF1dG9SZXNldFBhZ2UiLCJhdXRvUmVzZXRTZWxlY3RlZFJvd3MiLCJkaXNhYmxlTXVsdGlTb3J0IiwidXNlRmlsdGVycyIsInVzZUdyb3VwQnkiLCJ1c2VTb3J0QnkiLCJ1c2VFeHBhbmRlZCIsInVzZVBhZ2luYXRpb24iLCJ1c2VSb3dTZWxlY3QiLCJob29rcyIsInZpc2libGVDb2x1bW5zIiwicHVzaCIsImdyb3VwQnlCb3VuZGFyeSIsIkhlYWRlciIsImdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIiwiZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJnZXRIZWFkZXJQcm9wcyIsImNhbkdyb3VwQnkiLCJnZXRHcm91cEJ5VG9nZ2xlUHJvcHMiLCJpc0dyb3VwZWQiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsInJlbmRlciIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwiY2FuRmlsdGVyIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJnZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzIiwiaXNFeHBhbmRlZCIsInN1YlJvd3MiLCJpc0FnZ3JlZ2F0ZWQiLCJpc1BsYWNlaG9sZGVyIiwiTnVtYmVyIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbHRlckdyZWF0ZXJUaGFuIiwicm91bmRlZE1lZGlhbiIsImxlYWZWYWx1ZXMiLCJyb3VuZCIsIkluZGV0ZXJtaW5hdGVDaGVja2JveCIsInJlZiIsImluZGV0ZXJtaW5hdGUiLCJyZXN0IiwiZGVmYXVsdFJlZiIsInJlc29sdmVkUmVmIiwiY3VycmVudCIsInNraXBSZXNldFJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQVVBOztDQUtBOztBQUVBQSxXQUFXLENBQUNDLFlBQVosR0FBMkI7QUFDekJDLFFBQU0sRUFBRSx1QkFEaUI7QUFFekJDLFVBQVEsRUFBRTtBQUZlLENBQTNCO0FBS0FILFdBQVcsQ0FBQ0ksU0FBWixHQUF3QjtBQUN0QkYsUUFBTSxFQUFFRywwREFBZ0JDO0FBREYsQ0FBeEI7QUFPQSxNQUFNQyxNQUFNLEdBQUdDLDBEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBeENBLEMsQ0EwQ0E7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFDcEJDLE9BQUssRUFBRUMsWUFEYTtBQUVwQkMsS0FBRyxFQUFFO0FBQUVDO0FBQUYsR0FGZTtBQUdwQkMsUUFBTSxFQUFFO0FBQUVDO0FBQUYsR0FIWTtBQUlwQkMsY0FKb0I7QUFJTjtBQUNkQztBQUxvQixDQUFELEtBTWY7QUFBQTs7QUFDSjtBQUNBLFFBQU0sQ0FBQ1AsS0FBRCxFQUFRUSxRQUFSLElBQW9CQyxxREFBQSxDQUFlUixZQUFmLENBQTFCOztBQUVBLFFBQU1TLFFBQVEsR0FBR0MsQ0FBQyxJQUFJO0FBQ3BCSCxZQUFRLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTWixLQUFWLENBQVI7QUFDRCxHQUZELENBSkksQ0FR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QTtBQUFBO0FBREYsbUJBREY7QUF3QkQ7TUEzQnVCaEosVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYTg3NmIwNDJmY2Q2NDEyZGZjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge1xyXG4gIHVzZVRhYmxlLFxyXG4gIHVzZVBhZ2luYXRpb24sXHJcbiAgdXNlU29ydEJ5LFxyXG4gIHVzZUZpbHRlcnMsXHJcbiAgdXNlR3JvdXBCeSxcclxuICB1c2VFeHBhbmRlZCxcclxuICB1c2VSb3dTZWxlY3QsXHJcbn0gZnJvbSAncmVhY3QtdGFibGUnXHJcbi8vIGltcG9ydCBtYXRjaFNvcnRlciBmcm9tICdtYXRjaC1zb3J0ZXInXHJcblxyXG5pbXBvcnQgbWFrZURhdGEgZnJvbSAnLi4vLi4vbWFrZURhdGEnXHJcblxyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuQ2FyZFBsYXllcnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxlYWd1ZTogXCJNYWpvciBMZWFndWUgQmFzZWJhbGxcIixcclxuICBkaXZpc2lvbjogXCJcIlxyXG59O1xyXG5cclxuQ2FyZFBsYXllcnMucHJvcFR5cGVzID0ge1xyXG4gIGxlYWd1ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5cclxuICAgIHRyIHtcclxuICAgICAgOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG5cclxuICAgICAgOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdpbmF0aW9uIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICB9XHJcbmBcclxuXHJcbi8vIENyZWF0ZSBhbiBlZGl0YWJsZSBjZWxsIHJlbmRlcmVyXHJcbmNvbnN0IEVkaXRhYmxlQ2VsbCA9ICh7XHJcbiAgdmFsdWU6IGluaXRpYWxWYWx1ZSxcclxuICByb3c6IHsgaW5kZXggfSxcclxuICBjb2x1bW46IHsgaWQgfSxcclxuICB1cGRhdGVNeURhdGEsIC8vIFRoaXMgaXMgYSBjdXN0b20gZnVuY3Rpb24gdGhhdCB3ZSBzdXBwbGllZCB0byBvdXIgdGFibGUgaW5zdGFuY2VcclxuICBlZGl0YWJsZSxcclxufSkgPT4ge1xyXG4gIC8vIFdlIG5lZWQgdG8ga2VlcCBhbmQgdXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgY2VsbCBub3JtYWxseVxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlKVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICAvLyBXZSdsbCBvbmx5IHVwZGF0ZSB0aGUgZXh0ZXJuYWwgZGF0YSB3aGVuIHRoZSBpbnB1dCBpcyBibHVycmVkXHJcbiAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xyXG4gICAgdXBkYXRlTXlEYXRhKGluZGV4LCBpZCwgdmFsdWUpXHJcbiAgfVxyXG5cclxuICAvLyBJZiB0aGUgaW5pdGlhbFZhbHVlIGlzIGNoYW5nZWQgZXh0ZXJuYWxsLCBzeW5jIGl0IHVwIHdpdGggb3VyIHN0YXRlXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFZhbHVlKGluaXRpYWxWYWx1ZSlcclxuICB9LCBbaW5pdGlhbFZhbHVlXSlcclxuXHJcbiAgaWYgKCFlZGl0YWJsZSkge1xyXG4gICAgcmV0dXJuIGAke2luaXRpYWxWYWx1ZX1gXHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGlucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBvbkJsdXI9e29uQmx1cn0gLz5cclxufVxyXG5cclxuLy8gRGVmaW5lIGEgZGVmYXVsdCBVSSBmb3IgZmlsdGVyaW5nXHJcbmZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIgfSxcclxufSkge1xyXG4gIGNvbnN0IGNvdW50ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0XHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpIC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcclxuICAgICAgfX1cclxuICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggJHtjb3VudH0gcmVjb3Jkcy4uLmB9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgZm9yIHNlbGVjdGluZ1xyXG4vLyBhIHVuaXF1ZSBvcHRpb24gZnJvbSBhIGxpc3RcclxuZnVuY3Rpb24gU2VsZWN0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG59KSB7XHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcclxuICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKVxyXG4gICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgb3B0aW9ucy5hZGQocm93LnZhbHVlc1tpZF0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXVxyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbiAgLy8gUmVuZGVyIGEgbXVsdGktc2VsZWN0IGJveFxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VsZWN0XHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZX1cclxuICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcclxuICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbn0+XHJcbiAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICApKX1cclxuICAgIDwvc2VsZWN0PlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgdGhhdCB1c2VzIGFcclxuLy8gc2xpZGVyIHRvIHNldCB0aGUgZmlsdGVyIHZhbHVlIGJldHdlZW4gYSBjb2x1bW4nc1xyXG4vLyBtaW4gYW5kIG1heCB2YWx1ZXNcclxuZnVuY3Rpb24gU2xpZGVyQ29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG59KSB7XHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBtaW4gYW5kIG1heFxyXG4gIC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3NcclxuXHJcbiAgY29uc3QgW21pbiwgbWF4XSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgbGV0IG1pbiA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuICAgIGxldCBtYXggPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBtaW4gPSBNYXRoLm1pbihyb3cudmFsdWVzW2lkXSwgbWluKVxyXG4gICAgICBtYXggPSBNYXRoLm1heChyb3cudmFsdWVzW2lkXSwgbWF4KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBbbWluLCBtYXhdXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICBtaW49e21pbn1cclxuICAgICAgICBtYXg9e21heH1cclxuICAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgbWlufVxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgIHNldEZpbHRlcihwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApKVxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKHVuZGVmaW5lZCl9Pk9mZjwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIFVJIGZvciBvdXIgJ2JldHdlZW4nIG9yIG51bWJlciByYW5nZVxyXG4vLyBmaWx0ZXIuIEl0IHVzZXMgdHdvIG51bWJlciBib3hlcyBhbmQgZmlsdGVycyByb3dzIHRvXHJcbi8vIG9uZXMgdGhhdCBoYXZlIHZhbHVlcyBiZXR3ZWVuIHRoZSB0d29cclxuZnVuY3Rpb24gTnVtYmVyUmFuZ2VDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSA9IFtdLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciwgaWQgfSxcclxufSkge1xyXG4gIGNvbnN0IFttaW4sIG1heF0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGxldCBtaW4gPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbiAgICBsZXQgbWF4ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4gICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgbWluID0gTWF0aC5taW4ocm93LnZhbHVlc1tpZF0sIG1pbilcclxuICAgICAgbWF4ID0gTWF0aC5tYXgocm93LnZhbHVlc1tpZF0sIG1heClcclxuICAgIH0pXHJcbiAgICByZXR1cm4gW21pbiwgbWF4XVxyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZVswXSB8fCAnJ31cclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgc2V0RmlsdGVyKChvbGQgPSBbXSkgPT4gW3ZhbCA/IHBhcnNlSW50KHZhbCwgMTApIDogdW5kZWZpbmVkLCBvbGRbMV1dKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e2BNaW4gKCR7bWlufSlgfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogJzcwcHgnLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICcwLjVyZW0nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIHRvXHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZVsxXSB8fCAnJ31cclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgc2V0RmlsdGVyKChvbGQgPSBbXSkgPT4gW29sZFswXSwgdmFsID8gcGFyc2VJbnQodmFsLCAxMCkgOiB1bmRlZmluZWRdKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e2BNYXggKCR7bWF4fSlgfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogJzcwcHgnLFxyXG4gICAgICAgICAgbWFyZ2luTGVmdDogJzAuNXJlbScsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gZnV6enlUZXh0RmlsdGVyRm4ocm93cywgaWQsIGZpbHRlclZhbHVlKSB7XHJcbiAgcmV0dXJuIG1hdGNoU29ydGVyKHJvd3MsIGZpbHRlclZhbHVlLCB7IGtleXM6IFtyb3cgPT4gcm93LnZhbHVlc1tpZF1dIH0pXHJcbn1cclxuXHJcbi8vIExldCB0aGUgdGFibGUgcmVtb3ZlIHRoZSBmaWx0ZXIgaWYgdGhlIHN0cmluZyBpcyBlbXB0eVxyXG5mdXp6eVRleHRGaWx0ZXJGbi5hdXRvUmVtb3ZlID0gdmFsID0+ICF2YWxcclxuXHJcbi8vIEJlIHN1cmUgdG8gcGFzcyBvdXIgdXBkYXRlTXlEYXRhIGFuZCB0aGUgc2tpcFJlc2V0IG9wdGlvblxyXG5mdW5jdGlvbiBUYWJsZSh7IGNvbHVtbnMsIGRhdGEsIHVwZGF0ZU15RGF0YSwgc2tpcFJlc2V0IH0pIHtcclxuICBjb25zdCBmaWx0ZXJUeXBlcyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAvLyBBZGQgYSBuZXcgZnV6enlUZXh0RmlsdGVyRm4gZmlsdGVyIHR5cGUuXHJcbiAgICAgIGZ1enp5VGV4dDogZnV6enlUZXh0RmlsdGVyRm4sXHJcbiAgICAgIC8vIE9yLCBvdmVycmlkZSB0aGUgZGVmYXVsdCB0ZXh0IGZpbHRlciB0byB1c2VcclxuICAgICAgLy8gXCJzdGFydFdpdGhcIlxyXG4gICAgICB0ZXh0OiAocm93cywgaWQsIGZpbHRlclZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJvd3MuZmlsdGVyKHJvdyA9PiB7XHJcbiAgICAgICAgICBjb25zdCByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdXHJcbiAgICAgICAgICByZXR1cm4gcm93VmFsdWUgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IFN0cmluZyhyb3dWYWx1ZSlcclxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnRzV2l0aChTdHJpbmcoZmlsdGVyVmFsdWUpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgIDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICBjb25zdCBkZWZhdWx0Q29sdW1uID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIC8vIExldCdzIHNldCB1cCBvdXIgZGVmYXVsdCBGaWx0ZXIgVUlcclxuICAgICAgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG4gICAgICAvLyBBbmQgYWxzbyBvdXIgZGVmYXVsdCBlZGl0YWJsZSBjZWxsXHJcbiAgICAgIENlbGw6IEVkaXRhYmxlQ2VsbCxcclxuICAgIH0pLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gIC8vIFVzZSB0aGUgc3RhdGUgYW5kIGZ1bmN0aW9ucyByZXR1cm5lZCBmcm9tIHVzZVRhYmxlIHRvIGJ1aWxkIHlvdXIgVUlcclxuICBjb25zdCB7XHJcbiAgICBnZXRUYWJsZVByb3BzLFxyXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICBoZWFkZXJHcm91cHMsXHJcbiAgICBwcmVwYXJlUm93LFxyXG4gICAgcGFnZSwgLy8gSW5zdGVhZCBvZiB1c2luZyAncm93cycsIHdlJ2xsIHVzZSBwYWdlLFxyXG4gICAgLy8gd2hpY2ggaGFzIG9ubHkgdGhlIHJvd3MgZm9yIHRoZSBhY3RpdmUgcGFnZVxyXG5cclxuICAgIC8vIFRoZSByZXN0IG9mIHRoZXNlIHRoaW5ncyBhcmUgc3VwZXIgaGFuZHksIHRvbyA7KVxyXG4gICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgY2FuTmV4dFBhZ2UsXHJcbiAgICBwYWdlT3B0aW9ucyxcclxuICAgIHBhZ2VDb3VudCxcclxuICAgIGdvdG9QYWdlLFxyXG4gICAgbmV4dFBhZ2UsXHJcbiAgICBwcmV2aW91c1BhZ2UsXHJcbiAgICBzZXRQYWdlU2l6ZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIHBhZ2VJbmRleCxcclxuICAgICAgcGFnZVNpemUsXHJcbiAgICAgIHNvcnRCeSxcclxuICAgICAgZ3JvdXBCeSxcclxuICAgICAgZXhwYW5kZWQsXHJcbiAgICAgIGZpbHRlcnMsXHJcbiAgICAgIHNlbGVjdGVkUm93SWRzLFxyXG4gICAgfSxcclxuICB9ID0gdXNlVGFibGUoXHJcbiAgICB7XHJcbiAgICAgIGNvbHVtbnMsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGRlZmF1bHRDb2x1bW4sXHJcbiAgICAgIGZpbHRlclR5cGVzLFxyXG4gICAgICAvLyB1cGRhdGVNeURhdGEgaXNuJ3QgcGFydCBvZiB0aGUgQVBJLCBidXRcclxuICAgICAgLy8gYW55dGhpbmcgd2UgcHV0IGludG8gdGhlc2Ugb3B0aW9ucyB3aWxsXHJcbiAgICAgIC8vIGF1dG9tYXRpY2FsbHkgYmUgYXZhaWxhYmxlIG9uIHRoZSBpbnN0YW5jZS5cclxuICAgICAgLy8gVGhhdCB3YXkgd2UgY2FuIGNhbGwgdGhpcyBmdW5jdGlvbiBmcm9tIG91clxyXG4gICAgICAvLyBjZWxsIHJlbmRlcmVyIVxyXG4gICAgICB1cGRhdGVNeURhdGEsXHJcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBwYXNzIHRoaXMgc28gdGhlIHBhZ2UgZG9lc24ndCBjaGFuZ2VcclxuICAgICAgLy8gd2hlbiB3ZSBlZGl0IHRoZSBkYXRhLlxyXG4gICAgICBhdXRvUmVzZXRQYWdlOiAhc2tpcFJlc2V0LFxyXG4gICAgICBhdXRvUmVzZXRTZWxlY3RlZFJvd3M6ICFza2lwUmVzZXQsXHJcbiAgICAgIGRpc2FibGVNdWx0aVNvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdXNlRmlsdGVycyxcclxuICAgIHVzZUdyb3VwQnksXHJcbiAgICB1c2VTb3J0QnksXHJcbiAgICB1c2VFeHBhbmRlZCxcclxuICAgIHVzZVBhZ2luYXRpb24sXHJcbiAgICB1c2VSb3dTZWxlY3QsXHJcbiAgICAvLyBIZXJlIHdlIHdpbGwgdXNlIGEgcGx1Z2luIHRvIGFkZCBvdXIgc2VsZWN0aW9uIGNvbHVtblxyXG4gICAgaG9va3MgPT4ge1xyXG4gICAgICBob29rcy52aXNpYmxlQ29sdW1ucy5wdXNoKGNvbHVtbnMgPT4ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnc2VsZWN0aW9uJyxcclxuICAgICAgICAgICAgLy8gTWFrZSB0aGlzIGNvbHVtbiBhIGdyb3VwQnlCb3VuZGFyeS4gVGhpcyBlbnN1cmVzIHRoYXQgZ3JvdXBCeSBjb2x1bW5zXHJcbiAgICAgICAgICAgIC8vIGFyZSBwbGFjZWQgYWZ0ZXIgaXRcclxuICAgICAgICAgICAgZ3JvdXBCeUJvdW5kYXJ5OiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBUaGUgaGVhZGVyIGNhbiB1c2UgdGhlIHRhYmxlJ3MgZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgbWV0aG9kXHJcbiAgICAgICAgICAgIC8vIHRvIHJlbmRlciBhIGNoZWNrYm94XHJcbiAgICAgICAgICAgIEhlYWRlcjogKHsgZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXRlcm1pbmF0ZUNoZWNrYm94IHsuLi5nZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcygpfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAvLyBUaGUgY2VsbCBjYW4gdXNlIHRoZSBpbmRpdmlkdWFsIHJvdydzIGdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMgbWV0aG9kXHJcbiAgICAgICAgICAgIC8vIHRvIHRoZSByZW5kZXIgYSBjaGVja2JveFxyXG4gICAgICAgICAgICBDZWxsOiAoeyByb3cgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXRlcm1pbmF0ZUNoZWNrYm94IHsuLi5yb3cuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcygpfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC4uLmNvbHVtbnMsXHJcbiAgICAgICAgXVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgLy8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dGFibGUgey4uLmdldFRhYmxlUHJvcHMoKX0+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4gICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29sdW1uIGNhbiBiZSBncm91cGVkLCBsZXQncyBhZGQgYSB0b2dnbGVcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5jb2x1bW4uZ2V0R3JvdXBCeVRvZ2dsZVByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzR3JvdXBlZCA/ICfwn5uRICcgOiAn8J+RiiAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5jb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogQWRkIGEgc29ydCBkaXJlY3Rpb24gaW5kaWNhdG9yICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcg8J+UvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcg8J+UvCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogUmVuZGVyIHRoZSBjb2x1bW5zIGZpbHRlciBVSSAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdj57Y29sdW1uLmNhbkZpbHRlciA/IGNvbHVtbi5yZW5kZXIoJ0ZpbHRlcicpIDogbnVsbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbiAgICAgICAgICB7cGFnZS5tYXAocm93ID0+IHtcclxuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NlbGwuaXNHcm91cGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGEgZ3JvdXBlZCBjZWxsLCBhZGQgYW4gZXhwYW5kZXIgYW5kIHJvdyBjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5yb3cuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXNFeHBhbmRlZCA/ICfwn5GHJyA6ICfwn5GJJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoJ0NlbGwnLCB7IGVkaXRhYmxlOiBmYWxzZSB9KX0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuc3ViUm93cy5sZW5ndGh9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzQWdncmVnYXRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNlbGwgaXMgYWdncmVnYXRlZCwgdXNlIHRoZSBBZ2dyZWdhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlcmVyIGZvciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdBZ2dyZWdhdGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzUGxhY2Vob2xkZXIgPyBudWxsIDogKCAvLyBGb3IgY2VsbHMgd2l0aCByZXBlYXRlZCB2YWx1ZXMsIHJlbmRlciBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwganVzdCByZW5kZXIgdGhlIHJlZ3VsYXIgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQ2VsbCcsIHsgZWRpdGFibGU6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgey8qXHJcbiAgICAgICAgUGFnaW5hdGlvbiBjYW4gYmUgYnVpbHQgaG93ZXZlciB5b3UnZCBsaWtlLlxyXG4gICAgICAgIFRoaXMgaXMganVzdCBhIHZlcnkgYmFzaWMgVUkgaW1wbGVtZW50YXRpb246XHJcbiAgICAgICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKDApfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7Jzw8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJldmlvdXNQYWdlKCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5leHRQYWdlKCl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UocGFnZUNvdW50IC0gMSl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4gICAgICAgICAgeyc+Pid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFBhZ2V7JyAnfVxyXG4gICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAge3BhZ2VJbmRleCArIDF9IG9mIHtwYWdlT3B0aW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICA8L3N0cm9uZz57JyAnfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIHwgR28gdG8gcGFnZTp7JyAnfVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BhZ2VJbmRleCArIDF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBwYWdlID0gZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIC0gMSA6IDBcclxuICAgICAgICAgICAgICBnb3RvUGFnZShwYWdlKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NwYW4+eycgJ31cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICB2YWx1ZT17cGFnZVNpemV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VTaXplKE51bWJlcihlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtbMTAsIDIwLCAzMCwgNDAsIDUwXS5tYXAocGFnZVNpemUgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17cGFnZVNpemV9IHZhbHVlPXtwYWdlU2l6ZX0+XHJcbiAgICAgICAgICAgICAgU2hvdyB7cGFnZVNpemV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cHJlPlxyXG4gICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcGFnZUluZGV4LFxyXG4gICAgICAgICAgICAgIHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgIHBhZ2VDb3VudCxcclxuICAgICAgICAgICAgICBjYW5OZXh0UGFnZSxcclxuICAgICAgICAgICAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICAgICAgICAgICAgc29ydEJ5LFxyXG4gICAgICAgICAgICAgIGdyb3VwQnksXHJcbiAgICAgICAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxyXG4gICAgICAgICAgICAgIGZpbHRlcnMsXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IHNlbGVjdGVkUm93SWRzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAyXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvY29kZT5cclxuICAgICAgPC9wcmU+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIERlZmluZSBhIGN1c3RvbSBmaWx0ZXIgZmlsdGVyIGZ1bmN0aW9uIVxyXG5mdW5jdGlvbiBmaWx0ZXJHcmVhdGVyVGhhbihyb3dzLCBpZCwgZmlsdGVyVmFsdWUpIHtcclxuICByZXR1cm4gcm93cy5maWx0ZXIocm93ID0+IHtcclxuICAgIGNvbnN0IHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF1cclxuICAgIHJldHVybiByb3dWYWx1ZSA+PSBmaWx0ZXJWYWx1ZVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYW4gYXV0b1JlbW92ZSBtZXRob2Qgb24gdGhlIGZpbHRlciBmdW5jdGlvbiB0aGF0XHJcbi8vIHdoZW4gZ2l2ZW4gdGhlIG5ldyBmaWx0ZXIgdmFsdWUgYW5kIHJldHVybnMgdHJ1ZSwgdGhlIGZpbHRlclxyXG4vLyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC4gTm9ybWFsbHkgdGhpcyBpcyBqdXN0IGFuIHVuZGVmaW5lZFxyXG4vLyBjaGVjaywgYnV0IGhlcmUsIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgaWYgaXQncyBub3QgYSBudW1iZXJcclxuZmlsdGVyR3JlYXRlclRoYW4uYXV0b1JlbW92ZSA9IHZhbCA9PiB0eXBlb2YgdmFsICE9PSAnbnVtYmVyJ1xyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBhZ2dyZWdhdG9yIHRoYXRcclxuLy8gdGFrZXMgaW4gYW4gYXJyYXkgb2YgbGVhZiB2YWx1ZXMgYW5kXHJcbi8vIHJldHVybnMgdGhlIHJvdW5kZWQgbWVkaWFuXHJcbmZ1bmN0aW9uIHJvdW5kZWRNZWRpYW4obGVhZlZhbHVlcykge1xyXG4gIGxldCBtaW4gPSBsZWFmVmFsdWVzWzBdIHx8IDBcclxuICBsZXQgbWF4ID0gbGVhZlZhbHVlc1swXSB8fCAwXHJcblxyXG4gIGxlYWZWYWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHZhbHVlKVxyXG4gICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZSlcclxuICB9KVxyXG5cclxuICByZXR1cm4gTWF0aC5yb3VuZCgobWluICsgbWF4KSAvIDIpXHJcbn1cclxuXHJcbmNvbnN0IEluZGV0ZXJtaW5hdGVDaGVja2JveCA9IFJlYWN0LmZvcndhcmRSZWYoXHJcbiAgKHsgaW5kZXRlcm1pbmF0ZSwgLi4ucmVzdCB9LCByZWYpID0+IHtcclxuICAgIGNvbnN0IGRlZmF1bHRSZWYgPSBSZWFjdC51c2VSZWYoKVxyXG4gICAgY29uc3QgcmVzb2x2ZWRSZWYgPSByZWYgfHwgZGVmYXVsdFJlZlxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHJlc29sdmVkUmVmLmN1cnJlbnQuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGVcclxuICAgIH0sIFtyZXNvbHZlZFJlZiwgaW5kZXRlcm1pbmF0ZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgcmVmPXtyZXNvbHZlZFJlZn0gey4uLnJlc3R9IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZFBsYXllcnMoe1xyXG4gIGxlYWd1ZVxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIGJnLXdoaXRlIHctZnVsbCBtYi02IHNoYWRvdy1sZyByb3VuZGVkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXQgbWItMCBweC00IHB5LTMgYm9yZGVyLTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHB4LTQgbWF4LXctZnVsbCBmbGV4LWdyb3cgZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtYmx1ZUdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICB7bGVhZ3VlfVxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgb3ZlcmZsb3cteC1hdXRvXCI+XHJcbiAgICAgICAgICB7LyogUHJvamVjdHMgdGFibGUgKi99XHJcbiAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgdXBkYXRlTXlEYXRhPXt1cGRhdGVNeURhdGF9XHJcbiAgICAgICAgICAgIHNraXBSZXNldD17c2tpcFJlc2V0UmVmLmN1cnJlbnR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9