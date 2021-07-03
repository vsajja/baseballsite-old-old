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
    _s6 = $RefreshSig$(),
    _s7 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // import matchSorter from 'match-sorter'

 // components

CardPlayers.defaultProps = {
  league: "Players",
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
              lineNumber: 671,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 670,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 669,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 668,
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
          lineNumber: 679,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 677,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 667,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJDYXJkUGxheWVycyIsImRlZmF1bHRQcm9wcyIsImxlYWd1ZSIsImRpdmlzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiU3R5bGVzIiwic3R5bGVkIiwiRWRpdGFibGVDZWxsIiwidmFsdWUiLCJpbml0aWFsVmFsdWUiLCJyb3ciLCJpbmRleCIsImNvbHVtbiIsImlkIiwidXBkYXRlTXlEYXRhIiwiZWRpdGFibGUiLCJzZXRWYWx1ZSIsIlJlYWN0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25CbHVyIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsImZpbHRlclZhbHVlIiwicHJlRmlsdGVyZWRSb3dzIiwic2V0RmlsdGVyIiwiY291bnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJvcHRpb25zIiwiU2V0IiwiZm9yRWFjaCIsImFkZCIsInZhbHVlcyIsIm1hcCIsIm9wdGlvbiIsImkiLCJTbGlkZXJDb2x1bW5GaWx0ZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwicGFyc2VJbnQiLCJOdW1iZXJSYW5nZUNvbHVtbkZpbHRlciIsImRpc3BsYXkiLCJ2YWwiLCJvbGQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImZ1enp5VGV4dEZpbHRlckZuIiwicm93cyIsIm1hdGNoU29ydGVyIiwia2V5cyIsImF1dG9SZW1vdmUiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwic2tpcFJlc2V0IiwiZmlsdGVyVHlwZXMiLCJmdXp6eVRleHQiLCJ0ZXh0IiwiZmlsdGVyIiwicm93VmFsdWUiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJkZWZhdWx0Q29sdW1uIiwiRmlsdGVyIiwiQ2VsbCIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInByZXBhcmVSb3ciLCJwYWdlIiwiY2FuUHJldmlvdXNQYWdlIiwiY2FuTmV4dFBhZ2UiLCJwYWdlT3B0aW9ucyIsInBhZ2VDb3VudCIsImdvdG9QYWdlIiwibmV4dFBhZ2UiLCJwcmV2aW91c1BhZ2UiLCJzZXRQYWdlU2l6ZSIsInN0YXRlIiwicGFnZUluZGV4IiwicGFnZVNpemUiLCJzb3J0QnkiLCJncm91cEJ5IiwiZXhwYW5kZWQiLCJmaWx0ZXJzIiwic2VsZWN0ZWRSb3dJZHMiLCJ1c2VUYWJsZSIsImF1dG9SZXNldFBhZ2UiLCJhdXRvUmVzZXRTZWxlY3RlZFJvd3MiLCJkaXNhYmxlTXVsdGlTb3J0IiwidXNlRmlsdGVycyIsInVzZUdyb3VwQnkiLCJ1c2VTb3J0QnkiLCJ1c2VFeHBhbmRlZCIsInVzZVBhZ2luYXRpb24iLCJ1c2VSb3dTZWxlY3QiLCJob29rcyIsInZpc2libGVDb2x1bW5zIiwicHVzaCIsImdyb3VwQnlCb3VuZGFyeSIsIkhlYWRlciIsImdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIiwiZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJnZXRIZWFkZXJQcm9wcyIsImNhbkdyb3VwQnkiLCJnZXRHcm91cEJ5VG9nZ2xlUHJvcHMiLCJpc0dyb3VwZWQiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsInJlbmRlciIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwiY2FuRmlsdGVyIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJnZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzIiwiaXNFeHBhbmRlZCIsInN1YlJvd3MiLCJpc0FnZ3JlZ2F0ZWQiLCJpc1BsYWNlaG9sZGVyIiwiTnVtYmVyIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbHRlckdyZWF0ZXJUaGFuIiwicm91bmRlZE1lZGlhbiIsImxlYWZWYWx1ZXMiLCJyb3VuZCIsIkluZGV0ZXJtaW5hdGVDaGVja2JveCIsInJlZiIsImluZGV0ZXJtaW5hdGUiLCJyZXN0IiwiZGVmYXVsdFJlZiIsInJlc29sdmVkUmVmIiwiY3VycmVudCIsImFjY2Vzc29yIiwiYWdncmVnYXRlIiwiQWdncmVnYXRlZCIsInNldERhdGEiLCJtYWtlRGF0YSIsIm9yaWdpbmFsRGF0YSIsInNraXBSZXNldFJlZiIsInJvd0luZGV4IiwiY29sdW1uSWQiLCJyZXNldERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBVUE7O0NBS0E7O0FBRUFBLFdBQVcsQ0FBQ0MsWUFBWixHQUEyQjtBQUN6QkMsUUFBTSxFQUFFLFNBRGlCO0FBRXpCQyxVQUFRLEVBQUU7QUFGZSxDQUEzQjtBQUtBSCxXQUFXLENBQUNJLFNBQVosR0FBd0I7QUFDdEJGLFFBQU0sRUFBRUcsMERBQWdCQztBQURGLENBQXhCO0FBT0EsTUFBTUMsTUFBTSxHQUFHQywwREFBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXhDQSxDLENBMENBOztBQUNBLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQ3BCQyxPQUFLLEVBQUVDLFlBRGE7QUFFcEJDLEtBQUcsRUFBRTtBQUFFQztBQUFGLEdBRmU7QUFHcEJDLFFBQU0sRUFBRTtBQUFFQztBQUFGLEdBSFk7QUFJcEJDLGNBSm9CO0FBSU47QUFDZEM7QUFMb0IsQ0FBRCxLQU1mO0FBQUE7O0FBQ0o7QUFDQSxRQUFNLENBQUNQLEtBQUQsRUFBUVEsUUFBUixJQUFvQkMscURBQUEsQ0FBZVIsWUFBZixD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUU7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsK0JBRUUsOERBQUMsS0FBRDtBQUNFLGlCQUFPLEVBQUV3RCxPQURYO0FBRUUsY0FBSSxFQUFFQyxJQUZSO0FBR0Usc0JBQVksRUFBRTNDLFlBSGhCO0FBSUUsbUJBQVMsRUFBRXVJLFlBQVksQ0FBQ1A7QUFKMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXdCRDs7SUE1SXVCaEosVzs7TUFBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZWUwMzgwODZmMTYxNmJkZWQ5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge1xyXG4gIHVzZVRhYmxlLFxyXG4gIHVzZVBhZ2luYXRpb24sXHJcbiAgdXNlU29ydEJ5LFxyXG4gIHVzZUZpbHRlcnMsXHJcbiAgdXNlR3JvdXBCeSxcclxuICB1c2VFeHBhbmRlZCxcclxuICB1c2VSb3dTZWxlY3QsXHJcbn0gZnJvbSAncmVhY3QtdGFibGUnXHJcbi8vIGltcG9ydCBtYXRjaFNvcnRlciBmcm9tICdtYXRjaC1zb3J0ZXInXHJcblxyXG5pbXBvcnQgbWFrZURhdGEgZnJvbSAnLi4vLi4vbWFrZURhdGEnXHJcblxyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuQ2FyZFBsYXllcnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxlYWd1ZTogXCJQbGF5ZXJzXCIsXHJcbiAgZGl2aXNpb246IFwiXCJcclxufTtcclxuXHJcbkNhcmRQbGF5ZXJzLnByb3BUeXBlcyA9IHtcclxuICBsZWFndWU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuXHJcbiAgICB0ciB7XHJcbiAgICAgIDpsYXN0LWNoaWxkIHtcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuXHJcbiAgICAgIDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFnaW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgfVxyXG5gXHJcblxyXG4vLyBDcmVhdGUgYW4gZWRpdGFibGUgY2VsbCByZW5kZXJlclxyXG5jb25zdCBFZGl0YWJsZUNlbGwgPSAoe1xyXG4gIHZhbHVlOiBpbml0aWFsVmFsdWUsXHJcbiAgcm93OiB7IGluZGV4IH0sXHJcbiAgY29sdW1uOiB7IGlkIH0sXHJcbiAgdXBkYXRlTXlEYXRhLCAvLyBUaGlzIGlzIGEgY3VzdG9tIGZ1bmN0aW9uIHRoYXQgd2Ugc3VwcGxpZWQgdG8gb3VyIHRhYmxlIGluc3RhbmNlXHJcbiAgZWRpdGFibGUsXHJcbn0pID0+IHtcclxuICAvLyBXZSBuZWVkIHRvIGtlZXAgYW5kIHVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGNlbGwgbm9ybWFsbHlcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZSlcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcclxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgLy8gV2UnbGwgb25seSB1cGRhdGUgdGhlIGV4dGVybmFsIGRhdGEgd2hlbiB0aGUgaW5wdXQgaXMgYmx1cnJlZFxyXG4gIGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcclxuICAgIHVwZGF0ZU15RGF0YShpbmRleCwgaWQsIHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgLy8gSWYgdGhlIGluaXRpYWxWYWx1ZSBpcyBjaGFuZ2VkIGV4dGVybmFsbCwgc3luYyBpdCB1cCB3aXRoIG91ciBzdGF0ZVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShpbml0aWFsVmFsdWUpXHJcbiAgfSwgW2luaXRpYWxWYWx1ZV0pXHJcblxyXG4gIGlmICghZWRpdGFibGUpIHtcclxuICAgIHJldHVybiBgJHtpbml0aWFsVmFsdWV9YFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxpbnB1dCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gb25CbHVyPXtvbkJsdXJ9IC8+XHJcbn1cclxuXHJcbi8vIERlZmluZSBhIGRlZmF1bHQgVUkgZm9yIGZpbHRlcmluZ1xyXG5mdW5jdGlvbiBEZWZhdWx0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHByZUZpbHRlcmVkUm93cywgc2V0RmlsdGVyIH0sXHJcbn0pIHtcclxuICBjb25zdCBjb3VudCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGhcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dFxyXG4gICAgICB2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgJyd9XHJcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKSAvLyBTZXQgdW5kZWZpbmVkIHRvIHJlbW92ZSB0aGUgZmlsdGVyIGVudGlyZWx5XHJcbiAgICAgIH19XHJcbiAgICAgIHBsYWNlaG9sZGVyPXtgU2VhcmNoICR7Y291bnR9IHJlY29yZHMuLi5gfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gZmlsdGVyIFVJIGZvciBzZWxlY3RpbmdcclxuLy8gYSB1bmlxdWUgb3B0aW9uIGZyb20gYSBsaXN0XHJcbmZ1bmN0aW9uIFNlbGVjdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBzZXRGaWx0ZXIsIHByZUZpbHRlcmVkUm93cywgaWQgfSxcclxufSkge1xyXG4gIC8vIENhbGN1bGF0ZSB0aGUgb3B0aW9ucyBmb3IgZmlsdGVyaW5nXHJcbiAgLy8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgU2V0KClcclxuICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIG9wdGlvbnMuYWRkKHJvdy52YWx1ZXNbaWRdKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBbLi4ub3B0aW9ucy52YWx1ZXMoKV1cclxuICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4gIC8vIFJlbmRlciBhIG11bHRpLXNlbGVjdCBib3hcclxuICByZXR1cm4gKFxyXG4gICAgPHNlbGVjdFxyXG4gICAgICB2YWx1ZT17ZmlsdGVyVmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XHJcbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXHJcbiAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAge29wdGlvbn1cclxuICAgICAgICA8L29wdGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L3NlbGVjdD5cclxuICApXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gZmlsdGVyIFVJIHRoYXQgdXNlcyBhXHJcbi8vIHNsaWRlciB0byBzZXQgdGhlIGZpbHRlciB2YWx1ZSBiZXR3ZWVuIGEgY29sdW1uJ3NcclxuLy8gbWluIGFuZCBtYXggdmFsdWVzXHJcbmZ1bmN0aW9uIFNsaWRlckNvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBzZXRGaWx0ZXIsIHByZUZpbHRlcmVkUm93cywgaWQgfSxcclxufSkge1xyXG4gIC8vIENhbGN1bGF0ZSB0aGUgbWluIGFuZCBtYXhcclxuICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcblxyXG4gIGNvbnN0IFttaW4sIG1heF0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGxldCBtaW4gPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbiAgICBsZXQgbWF4ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4gICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgbWluID0gTWF0aC5taW4ocm93LnZhbHVlc1tpZF0sIG1pbilcclxuICAgICAgbWF4ID0gTWF0aC5tYXgocm93LnZhbHVlc1tpZF0sIG1heClcclxuICAgIH0pXHJcbiAgICByZXR1cm4gW21pbiwgbWF4XVxyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgbWluPXttaW59XHJcbiAgICAgICAgbWF4PXttYXh9XHJcbiAgICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8IG1pbn1cclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICBzZXRGaWx0ZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSlcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcih1bmRlZmluZWQpfT5PZmY8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBVSSBmb3Igb3VyICdiZXR3ZWVuJyBvciBudW1iZXIgcmFuZ2VcclxuLy8gZmlsdGVyLiBJdCB1c2VzIHR3byBudW1iZXIgYm94ZXMgYW5kIGZpbHRlcnMgcm93cyB0b1xyXG4vLyBvbmVzIHRoYXQgaGF2ZSB2YWx1ZXMgYmV0d2VlbiB0aGUgdHdvXHJcbmZ1bmN0aW9uIE51bWJlclJhbmdlQ29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUgPSBbXSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIsIGlkIH0sXHJcbn0pIHtcclxuICBjb25zdCBbbWluLCBtYXhdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBsZXQgbWluID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4gICAgbGV0IG1heCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIG1pbiA9IE1hdGgubWluKHJvdy52YWx1ZXNbaWRdLCBtaW4pXHJcbiAgICAgIG1heCA9IE1hdGgubWF4KHJvdy52YWx1ZXNbaWRdLCBtYXgpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFttaW4sIG1heF1cclxuICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWVbMF0gfHwgJyd9XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgIHNldEZpbHRlcigob2xkID0gW10pID0+IFt2YWwgPyBwYXJzZUludCh2YWwsIDEwKSA6IHVuZGVmaW5lZCwgb2xkWzFdXSlcclxuICAgICAgICB9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtgTWluICgke21pbn0pYH1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6ICc3MHB4JyxcclxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMC41cmVtJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICB0b1xyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWVbMV0gfHwgJyd9XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgIHNldEZpbHRlcigob2xkID0gW10pID0+IFtvbGRbMF0sIHZhbCA/IHBhcnNlSW50KHZhbCwgMTApIDogdW5kZWZpbmVkXSlcclxuICAgICAgICB9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtgTWF4ICgke21heH0pYH1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6ICc3MHB4JyxcclxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwLjVyZW0nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1enp5VGV4dEZpbHRlckZuKHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSkge1xyXG4gIHJldHVybiBtYXRjaFNvcnRlcihyb3dzLCBmaWx0ZXJWYWx1ZSwgeyBrZXlzOiBbcm93ID0+IHJvdy52YWx1ZXNbaWRdXSB9KVxyXG59XHJcblxyXG4vLyBMZXQgdGhlIHRhYmxlIHJlbW92ZSB0aGUgZmlsdGVyIGlmIHRoZSBzdHJpbmcgaXMgZW1wdHlcclxuZnV6enlUZXh0RmlsdGVyRm4uYXV0b1JlbW92ZSA9IHZhbCA9PiAhdmFsXHJcblxyXG4vLyBCZSBzdXJlIHRvIHBhc3Mgb3VyIHVwZGF0ZU15RGF0YSBhbmQgdGhlIHNraXBSZXNldCBvcHRpb25cclxuZnVuY3Rpb24gVGFibGUoeyBjb2x1bW5zLCBkYXRhLCB1cGRhdGVNeURhdGEsIHNraXBSZXNldCB9KSB7XHJcbiAgY29uc3QgZmlsdGVyVHlwZXMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLy8gQWRkIGEgbmV3IGZ1enp5VGV4dEZpbHRlckZuIGZpbHRlciB0eXBlLlxyXG4gICAgICBmdXp6eVRleHQ6IGZ1enp5VGV4dEZpbHRlckZuLFxyXG4gICAgICAvLyBPciwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGV4dCBmaWx0ZXIgdG8gdXNlXHJcbiAgICAgIC8vIFwic3RhcnRXaXRoXCJcclxuICAgICAgdGV4dDogKHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByb3dzLmZpbHRlcihyb3cgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXVxyXG4gICAgICAgICAgcmV0dXJuIHJvd1ZhbHVlICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBTdHJpbmcocm93VmFsdWUpXHJcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0c1dpdGgoU3RyaW5nKGZpbHRlclZhbHVlKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICA6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBbXVxyXG4gIClcclxuXHJcbiAgY29uc3QgZGVmYXVsdENvbHVtbiA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAvLyBMZXQncyBzZXQgdXAgb3VyIGRlZmF1bHQgRmlsdGVyIFVJXHJcbiAgICAgIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuICAgICAgLy8gQW5kIGFsc28gb3VyIGRlZmF1bHQgZWRpdGFibGUgY2VsbFxyXG4gICAgICBDZWxsOiBFZGl0YWJsZUNlbGwsXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICAvLyBVc2UgdGhlIHN0YXRlIGFuZCBmdW5jdGlvbnMgcmV0dXJuZWQgZnJvbSB1c2VUYWJsZSB0byBidWlsZCB5b3VyIFVJXHJcbiAgY29uc3Qge1xyXG4gICAgZ2V0VGFibGVQcm9wcyxcclxuICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgcHJlcGFyZVJvdyxcclxuICAgIHBhZ2UsIC8vIEluc3RlYWQgb2YgdXNpbmcgJ3Jvd3MnLCB3ZSdsbCB1c2UgcGFnZSxcclxuICAgIC8vIHdoaWNoIGhhcyBvbmx5IHRoZSByb3dzIGZvciB0aGUgYWN0aXZlIHBhZ2VcclxuXHJcbiAgICAvLyBUaGUgcmVzdCBvZiB0aGVzZSB0aGluZ3MgYXJlIHN1cGVyIGhhbmR5LCB0b28gOylcclxuICAgIGNhblByZXZpb3VzUGFnZSxcclxuICAgIGNhbk5leHRQYWdlLFxyXG4gICAgcGFnZU9wdGlvbnMsXHJcbiAgICBwYWdlQ291bnQsXHJcbiAgICBnb3RvUGFnZSxcclxuICAgIG5leHRQYWdlLFxyXG4gICAgcHJldmlvdXNQYWdlLFxyXG4gICAgc2V0UGFnZVNpemUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICBwYWdlSW5kZXgsXHJcbiAgICAgIHBhZ2VTaXplLFxyXG4gICAgICBzb3J0QnksXHJcbiAgICAgIGdyb3VwQnksXHJcbiAgICAgIGV4cGFuZGVkLFxyXG4gICAgICBmaWx0ZXJzLFxyXG4gICAgICBzZWxlY3RlZFJvd0lkcyxcclxuICAgIH0sXHJcbiAgfSA9IHVzZVRhYmxlKFxyXG4gICAge1xyXG4gICAgICBjb2x1bW5zLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBkZWZhdWx0Q29sdW1uLFxyXG4gICAgICBmaWx0ZXJUeXBlcyxcclxuICAgICAgLy8gdXBkYXRlTXlEYXRhIGlzbid0IHBhcnQgb2YgdGhlIEFQSSwgYnV0XHJcbiAgICAgIC8vIGFueXRoaW5nIHdlIHB1dCBpbnRvIHRoZXNlIG9wdGlvbnMgd2lsbFxyXG4gICAgICAvLyBhdXRvbWF0aWNhbGx5IGJlIGF2YWlsYWJsZSBvbiB0aGUgaW5zdGFuY2UuXHJcbiAgICAgIC8vIFRoYXQgd2F5IHdlIGNhbiBjYWxsIHRoaXMgZnVuY3Rpb24gZnJvbSBvdXJcclxuICAgICAgLy8gY2VsbCByZW5kZXJlciFcclxuICAgICAgdXBkYXRlTXlEYXRhLFxyXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gcGFzcyB0aGlzIHNvIHRoZSBwYWdlIGRvZXNuJ3QgY2hhbmdlXHJcbiAgICAgIC8vIHdoZW4gd2UgZWRpdCB0aGUgZGF0YS5cclxuICAgICAgYXV0b1Jlc2V0UGFnZTogIXNraXBSZXNldCxcclxuICAgICAgYXV0b1Jlc2V0U2VsZWN0ZWRSb3dzOiAhc2tpcFJlc2V0LFxyXG4gICAgICBkaXNhYmxlTXVsdGlTb3J0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHVzZUZpbHRlcnMsXHJcbiAgICB1c2VHcm91cEJ5LFxyXG4gICAgdXNlU29ydEJ5LFxyXG4gICAgdXNlRXhwYW5kZWQsXHJcbiAgICB1c2VQYWdpbmF0aW9uLFxyXG4gICAgdXNlUm93U2VsZWN0LFxyXG4gICAgLy8gSGVyZSB3ZSB3aWxsIHVzZSBhIHBsdWdpbiB0byBhZGQgb3VyIHNlbGVjdGlvbiBjb2x1bW5cclxuICAgIGhvb2tzID0+IHtcclxuICAgICAgaG9va3MudmlzaWJsZUNvbHVtbnMucHVzaChjb2x1bW5zID0+IHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3NlbGVjdGlvbicsXHJcbiAgICAgICAgICAgIC8vIE1ha2UgdGhpcyBjb2x1bW4gYSBncm91cEJ5Qm91bmRhcnkuIFRoaXMgZW5zdXJlcyB0aGF0IGdyb3VwQnkgY29sdW1uc1xyXG4gICAgICAgICAgICAvLyBhcmUgcGxhY2VkIGFmdGVyIGl0XHJcbiAgICAgICAgICAgIGdyb3VwQnlCb3VuZGFyeTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gVGhlIGhlYWRlciBjYW4gdXNlIHRoZSB0YWJsZSdzIGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIG1ldGhvZFxyXG4gICAgICAgICAgICAvLyB0byByZW5kZXIgYSBjaGVja2JveFxyXG4gICAgICAgICAgICBIZWFkZXI6ICh7IGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIH0pID0+IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEluZGV0ZXJtaW5hdGVDaGVja2JveCB7Li4uZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMoKX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgLy8gVGhlIGNlbGwgY2FuIHVzZSB0aGUgaW5kaXZpZHVhbCByb3cncyBnZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzIG1ldGhvZFxyXG4gICAgICAgICAgICAvLyB0byB0aGUgcmVuZGVyIGEgY2hlY2tib3hcclxuICAgICAgICAgICAgQ2VsbDogKHsgcm93IH0pID0+IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEluZGV0ZXJtaW5hdGVDaGVja2JveCB7Li4ucm93LmdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMoKX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAuLi5jb2x1bW5zLFxyXG4gICAgICAgIF1cclxuICAgICAgfSlcclxuICAgIH1cclxuICApXHJcblxyXG4gIC8vIFJlbmRlciB0aGUgVUkgZm9yIHlvdXIgdGFibGVcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcclxuICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5jYW5Hcm91cEJ5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBjYW4gYmUgZ3JvdXBlZCwgbGV0J3MgYWRkIGEgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldEdyb3VwQnlUb2dnbGVQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc0dyb3VwZWQgPyAn8J+bkSAnIDogJ/CfkYogJ31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIEFkZCBhIHNvcnQgZGlyZWN0aW9uIGluZGljYXRvciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIPCflL0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnIPCflLwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIFJlbmRlciB0aGUgY29sdW1ucyBmaWx0ZXIgVUkgKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+e2NvbHVtbi5jYW5GaWx0ZXIgPyBjb2x1bW4ucmVuZGVyKCdGaWx0ZXInKSA6IG51bGx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICAge3BhZ2UubWFwKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLmlzR3JvdXBlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIGdyb3VwZWQgY2VsbCwgYWRkIGFuIGV4cGFuZGVyIGFuZCByb3cgY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4ucm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyAn8J+RhycgOiAn8J+RiSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGwucmVuZGVyKCdDZWxsJywgeyBlZGl0YWJsZTogZmFsc2UgfSl9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnN1YlJvd3MubGVuZ3RofSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc0FnZ3JlZ2F0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjZWxsIGlzIGFnZ3JlZ2F0ZWQsIHVzZSB0aGUgQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJlciBmb3IgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQWdncmVnYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc1BsYWNlaG9sZGVyID8gbnVsbCA6ICggLy8gRm9yIGNlbGxzIHdpdGggcmVwZWF0ZWQgdmFsdWVzLCByZW5kZXIgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGp1c3QgcmVuZGVyIHRoZSByZWd1bGFyIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0NlbGwnLCB7IGVkaXRhYmxlOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIHsvKlxyXG4gICAgICAgIFBhZ2luYXRpb24gY2FuIGJlIGJ1aWx0IGhvd2V2ZXIgeW91J2QgbGlrZS5cclxuICAgICAgICBUaGlzIGlzIGp1c3QgYSB2ZXJ5IGJhc2ljIFVJIGltcGxlbWVudGF0aW9uOlxyXG4gICAgICAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZSgwKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8PCd9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICB7JzwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgPC9idXR0b24+eycgJ31cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKHBhZ2VDb3VudCAtIDEpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuICAgICAgICAgIHsnPj4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBQYWdleycgJ31cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtwYWdlSW5kZXggKyAxfSBvZiB7cGFnZU9wdGlvbnMubGVuZ3RofVxyXG4gICAgICAgICAgPC9zdHJvbmc+eycgJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICB8IEdvIHRvIHBhZ2U6eycgJ31cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYWdlSW5kZXggKyAxfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAtIDEgOiAwXHJcbiAgICAgICAgICAgICAgZ290b1BhZ2UocGFnZSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPnsnICd9XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYWdlU2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7WzEwLCAyMCwgMzAsIDQwLCA1MF0ubWFwKHBhZ2VTaXplID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhZ2VTaXplfSB2YWx1ZT17cGFnZVNpemV9PlxyXG4gICAgICAgICAgICAgIFNob3cge3BhZ2VTaXplfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHByZT5cclxuICAgICAgICA8Y29kZT5cclxuICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHBhZ2VJbmRleCxcclxuICAgICAgICAgICAgICBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgICBwYWdlQ291bnQsXHJcbiAgICAgICAgICAgICAgY2FuTmV4dFBhZ2UsXHJcbiAgICAgICAgICAgICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgICAgICAgICAgIHNvcnRCeSxcclxuICAgICAgICAgICAgICBncm91cEJ5LFxyXG4gICAgICAgICAgICAgIGV4cGFuZGVkOiBleHBhbmRlZCxcclxuICAgICAgICAgICAgICBmaWx0ZXJzLFxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkUm93SWRzOiBzZWxlY3RlZFJvd0lkcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgMlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2NvZGU+XHJcbiAgICAgIDwvcHJlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBEZWZpbmUgYSBjdXN0b20gZmlsdGVyIGZpbHRlciBmdW5jdGlvbiFcclxuZnVuY3Rpb24gZmlsdGVyR3JlYXRlclRoYW4ocm93cywgaWQsIGZpbHRlclZhbHVlKSB7XHJcbiAgcmV0dXJuIHJvd3MuZmlsdGVyKHJvdyA9PiB7XHJcbiAgICBjb25zdCByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdXHJcbiAgICByZXR1cm4gcm93VmFsdWUgPj0gZmlsdGVyVmFsdWVcclxuICB9KVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGFuIGF1dG9SZW1vdmUgbWV0aG9kIG9uIHRoZSBmaWx0ZXIgZnVuY3Rpb24gdGhhdFxyXG4vLyB3aGVuIGdpdmVuIHRoZSBuZXcgZmlsdGVyIHZhbHVlIGFuZCByZXR1cm5zIHRydWUsIHRoZSBmaWx0ZXJcclxuLy8gd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuIE5vcm1hbGx5IHRoaXMgaXMganVzdCBhbiB1bmRlZmluZWRcclxuLy8gY2hlY2ssIGJ1dCBoZXJlLCB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgZmlsdGVyIGlmIGl0J3Mgbm90IGEgbnVtYmVyXHJcbmZpbHRlckdyZWF0ZXJUaGFuLmF1dG9SZW1vdmUgPSB2YWwgPT4gdHlwZW9mIHZhbCAhPT0gJ251bWJlcidcclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gYWdncmVnYXRvciB0aGF0XHJcbi8vIHRha2VzIGluIGFuIGFycmF5IG9mIGxlYWYgdmFsdWVzIGFuZFxyXG4vLyByZXR1cm5zIHRoZSByb3VuZGVkIG1lZGlhblxyXG5mdW5jdGlvbiByb3VuZGVkTWVkaWFuKGxlYWZWYWx1ZXMpIHtcclxuICBsZXQgbWluID0gbGVhZlZhbHVlc1swXSB8fCAwXHJcbiAgbGV0IG1heCA9IGxlYWZWYWx1ZXNbMF0gfHwgMFxyXG5cclxuICBsZWFmVmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZSlcclxuICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIE1hdGgucm91bmQoKG1pbiArIG1heCkgLyAyKVxyXG59XHJcblxyXG5jb25zdCBJbmRldGVybWluYXRlQ2hlY2tib3ggPSBSZWFjdC5mb3J3YXJkUmVmKFxyXG4gICh7IGluZGV0ZXJtaW5hdGUsIC4uLnJlc3QgfSwgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0UmVmID0gUmVhY3QudXNlUmVmKClcclxuICAgIGNvbnN0IHJlc29sdmVkUmVmID0gcmVmIHx8IGRlZmF1bHRSZWZcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICByZXNvbHZlZFJlZi5jdXJyZW50LmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlXHJcbiAgICB9LCBbcmVzb2x2ZWRSZWYsIGluZGV0ZXJtaW5hdGVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHJlZj17cmVzb2x2ZWRSZWZ9IHsuLi5yZXN0fSAvPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRQbGF5ZXJzKHtcclxuICBsZWFndWVcclxufSkge1xyXG5cclxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+IFtcclxuICAgICAge1xyXG4gICAgICAgIEhlYWRlcjogJ05hbWUnLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnRmlyc3QgTmFtZScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnZmlyc3ROYW1lJyxcclxuICAgICAgICAgICAgLy8gVXNlIGEgdHdvLXN0YWdlIGFnZ3JlZ2F0b3IgaGVyZSB0byBmaXJzdFxyXG4gICAgICAgICAgICAvLyBjb3VudCB0aGUgdG90YWwgcm93cyBiZWluZyBhZ2dyZWdhdGVkLFxyXG4gICAgICAgICAgICAvLyB0aGVuIHN1bSBhbnkgb2YgdGhvc2UgY291bnRzIGlmIHRoZXkgYXJlXHJcbiAgICAgICAgICAgIC8vIGFnZ3JlZ2F0ZWQgZnVydGhlclxyXG4gICAgICAgICAgICBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBOYW1lc2AsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdMYXN0IE5hbWUnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2xhc3ROYW1lJyxcclxuICAgICAgICAgICAgLy8gVXNlIG91ciBjdXN0b20gYGZ1enp5VGV4dGAgZmlsdGVyIG9uIHRoaXMgY29sdW1uXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2Z1enp5VGV4dCcsXHJcbiAgICAgICAgICAgIC8vIFVzZSBhbm90aGVyIHR3by1zdGFnZSBhZ2dyZWdhdG9yIGhlcmUgdG9cclxuICAgICAgICAgICAgLy8gZmlyc3QgY291bnQgdGhlIFVOSVFVRSB2YWx1ZXMgZnJvbSB0aGUgcm93c1xyXG4gICAgICAgICAgICAvLyBiZWluZyBhZ2dyZWdhdGVkLCB0aGVuIHN1bSB0aG9zZSBjb3VudHMgaWZcclxuICAgICAgICAgICAgLy8gdGhleSBhcmUgYWdncmVnYXRlZCBmdXJ0aGVyXHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZTogJ3VuaXF1ZUNvdW50JyxcclxuICAgICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IFVuaXF1ZSBOYW1lc2AsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6ICdJbmZvJyxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0FnZScsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnYWdlJyxcclxuICAgICAgICAgICAgRmlsdGVyOiBTbGlkZXJDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2VxdWFscycsXHJcbiAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSB0aGUgYXZlcmFnZSBhZ2Ugb2YgdmlzaXRvcnNcclxuICAgICAgICAgICAgYWdncmVnYXRlOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSAoYXZnKWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdWaXNpdHMnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Zpc2l0cycsXHJcbiAgICAgICAgICAgIEZpbHRlcjogTnVtYmVyUmFuZ2VDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2JldHdlZW4nLFxyXG4gICAgICAgICAgICAvLyBBZ2dyZWdhdGUgdGhlIHN1bSBvZiBhbGwgdmlzaXRzXHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZTogJ3N1bScsXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSAodG90YWwpYCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1N0YXR1cycsXHJcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnc3RhdHVzJyxcclxuICAgICAgICAgICAgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2luY2x1ZGVzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ1Byb2ZpbGUgUHJvZ3Jlc3MnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3Byb2dyZXNzJyxcclxuICAgICAgICAgICAgRmlsdGVyOiBTbGlkZXJDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgICAgIGZpbHRlcjogZmlsdGVyR3JlYXRlclRoYW4sXHJcbiAgICAgICAgICAgIC8vIFVzZSBvdXIgY3VzdG9tIHJvdW5kZWRNZWRpYW4gYWdncmVnYXRvclxyXG4gICAgICAgICAgICBhZ2dyZWdhdGU6IHJvdW5kZWRNZWRpYW4sXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSAobWVkKWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IG1ha2VEYXRhKDEwMDAwKSlcclxuICBjb25zdCBbb3JpZ2luYWxEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKGRhdGEpXHJcblxyXG4gIC8vIFdlIG5lZWQgdG8ga2VlcCB0aGUgdGFibGUgZnJvbSByZXNldHRpbmcgdGhlIHBhZ2VJbmRleCB3aGVuIHdlXHJcbiAgLy8gVXBkYXRlIGRhdGEuIFNvIHdlIGNhbiBrZWVwIHRyYWNrIG9mIHRoYXQgZmxhZyB3aXRoIGEgcmVmLlxyXG4gIGNvbnN0IHNraXBSZXNldFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSlcclxuXHJcbiAgLy8gV2hlbiBvdXIgY2VsbCByZW5kZXJlciBjYWxscyB1cGRhdGVNeURhdGEsIHdlJ2xsIHVzZVxyXG4gIC8vIHRoZSByb3dJbmRleCwgY29sdW1uSWQgYW5kIG5ldyB2YWx1ZSB0byB1cGRhdGUgdGhlXHJcbiAgLy8gb3JpZ2luYWwgZGF0YVxyXG4gIGNvbnN0IHVwZGF0ZU15RGF0YSA9IChyb3dJbmRleCwgY29sdW1uSWQsIHZhbHVlKSA9PiB7XHJcbiAgICAvLyBXZSBhbHNvIHR1cm4gb24gdGhlIGZsYWcgdG8gbm90IHJlc2V0IHRoZSBwYWdlXHJcbiAgICBza2lwUmVzZXRSZWYuY3VycmVudCA9IHRydWVcclxuICAgIHNldERhdGEob2xkID0+XHJcbiAgICAgIG9sZC5tYXAoKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IHJvd0luZGV4KSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICAgIFtjb2x1bW5JZF06IHZhbHVlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm93XHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvLyBBZnRlciBkYXRhIGNoYW5nZXMsIHdlIHR1cm4gdGhlIGZsYWcgYmFjayBvZmZcclxuICAvLyBzbyB0aGF0IGlmIGRhdGEgYWN0dWFsbHkgY2hhbmdlcyB3aGVuIHdlJ3JlIG5vdFxyXG4gIC8vIGVkaXRpbmcgaXQsIHRoZSBwYWdlIGlzIHJlc2V0XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNraXBSZXNldFJlZi5jdXJyZW50ID0gZmFsc2VcclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIC8vIExldCdzIGFkZCBhIGRhdGEgcmVzZXR0ZXIvcmFuZG9taXplciB0byBoZWxwXHJcbiAgLy8gaWxsdXN0cmF0ZSB0aGF0IGZsb3cuLi5cclxuICBjb25zdCByZXNldERhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyBEb24ndCByZXNldCB0aGUgcGFnZSB3aGVuIHdlIGRvIHRoaXNcclxuICAgIHNraXBSZXNldFJlZi5jdXJyZW50ID0gdHJ1ZVxyXG4gICAgc2V0RGF0YShvcmlnaW5hbERhdGEpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgYmctd2hpdGUgdy1mdWxsIG1iLTYgc2hhZG93LWxnIHJvdW5kZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdCBtYi0wIHB4LTQgcHktMyBib3JkZXItMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgcHgtNCBtYXgtdy1mdWxsIGZsZXgtZ3JvdyBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ibHVlR3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgIHtsZWFndWV9XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgICAgIHsvKiBQcm9qZWN0cyB0YWJsZSAqL31cclxuICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICB1cGRhdGVNeURhdGE9e3VwZGF0ZU15RGF0YX1cclxuICAgICAgICAgICAgc2tpcFJlc2V0PXtza2lwUmVzZXRSZWYuY3VycmVudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=