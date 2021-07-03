self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/baseball/CardPlayers.js":
/*!********************************************!*\
  !*** ./components/baseball/CardPlayers.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

function App() {
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
}

_s7(App, "vlZNbUGEeg1QBR6P2tA6cwT+6g8=");

_c9 = App;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "EditableCell");
$RefreshReg$(_c2, "DefaultColumnFilter");
$RefreshReg$(_c3, "SelectColumnFilter");
$RefreshReg$(_c4, "SliderColumnFilter");
$RefreshReg$(_c5, "NumberRangeColumnFilter");
$RefreshReg$(_c6, "Table");
$RefreshReg$(_c7, "IndeterminateCheckbox$React.forwardRef");
$RefreshReg$(_c8, "IndeterminateCheckbox");
$RefreshReg$(_c9, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJDYXJkUGxheWVycyIsImRlZmF1bHRQcm9wcyIsImxlYWd1ZSIsImRpdmlzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiU3R5bGVzIiwic3R5bGVkIiwiRWRpdGFibGVDZWxsIiwidmFsdWUiLCJpbml0aWFsVmFsdWUiLCJyb3ciLCJpbmRleCIsImNvbHVtbiIsImlkIiwidXBkYXRlTXlEYXRhIiwiZWRpdGFibGUiLCJzZXRWYWx1ZSIsIlJlYWN0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25CbHVyIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsImZpbHRlclZhbHVlIiwicHJlRmlsdGVyZWRSb3dzIiwic2V0RmlsdGVyIiwiY291bnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJvcHRpb25zIiwiU2V0IiwiZm9yRWFjaCIsImFkZCIsInZhbHVlcyIsIm1hcCIsIm9wdGlvbiIsImkiLCJTbGlkZXJDb2x1bW5GaWx0ZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwicGFyc2VJbnQiLCJOdW1iZXJSYW5nZUNvbHVtbkZpbHRlciIsImRpc3BsYXkiLCJ2YWwiLCJvbGQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImZ1enp5VGV4dEZpbHRlckZuIiwicm93cyIsIm1hdGNoU29ydGVyIiwia2V5cyIsImF1dG9SZW1vdmUiLCJUYWJsZSIsImNvbHVtbnMiLCJkYXRhIiwic2tpcFJlc2V0IiwiZmlsdGVyVHlwZXMiLCJmdXp6eVRleHQiLCJ0ZXh0IiwiZmlsdGVyIiwicm93VmFsdWUiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJkZWZhdWx0Q29sdW1uIiwiRmlsdGVyIiwiQ2VsbCIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInByZXBhcmVSb3ciLCJwYWdlIiwiY2FuUHJldmlvdXNQYWdlIiwiY2FuTmV4dFBhZ2UiLCJwYWdlT3B0aW9ucyIsInBhZ2VDb3VudCIsImdvdG9QYWdlIiwibmV4dFBhZ2UiLCJwcmV2aW91c1BhZ2UiLCJzZXRQYWdlU2l6ZSIsInN0YXRlIiwicGFnZUluZGV4IiwicGFnZVNpemUiLCJzb3J0QnkiLCJncm91cEJ5IiwiZXhwYW5kZWQiLCJmaWx0ZXJzIiwic2VsZWN0ZWRSb3dJZHMiLCJ1c2VUYWJsZSIsImF1dG9SZXNldFBhZ2UiLCJhdXRvUmVzZXRTZWxlY3RlZFJvd3MiLCJkaXNhYmxlTXVsdGlTb3J0IiwidXNlRmlsdGVycyIsInVzZUdyb3VwQnkiLCJ1c2VTb3J0QnkiLCJ1c2VFeHBhbmRlZCIsInVzZVBhZ2luYXRpb24iLCJ1c2VSb3dTZWxlY3QiLCJob29rcyIsInZpc2libGVDb2x1bW5zIiwicHVzaCIsImdyb3VwQnlCb3VuZGFyeSIsIkhlYWRlciIsImdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIiwiZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJnZXRIZWFkZXJQcm9wcyIsImNhbkdyb3VwQnkiLCJnZXRHcm91cEJ5VG9nZ2xlUHJvcHMiLCJpc0dyb3VwZWQiLCJnZXRTb3J0QnlUb2dnbGVQcm9wcyIsInJlbmRlciIsImlzU29ydGVkIiwiaXNTb3J0ZWREZXNjIiwiY2FuRmlsdGVyIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJnZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzIiwiaXNFeHBhbmRlZCIsInN1YlJvd3MiLCJpc0FnZ3JlZ2F0ZWQiLCJpc1BsYWNlaG9sZGVyIiwiTnVtYmVyIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbHRlckdyZWF0ZXJUaGFuIiwicm91bmRlZE1lZGlhbiIsImxlYWZWYWx1ZXMiLCJyb3VuZCIsIkluZGV0ZXJtaW5hdGVDaGVja2JveCIsInJlZiIsImluZGV0ZXJtaW5hdGUiLCJyZXN0IiwiZGVmYXVsdFJlZiIsInJlc29sdmVkUmVmIiwiY3VycmVudCIsIkFwcCIsImFjY2Vzc29yIiwiYWdncmVnYXRlIiwiQWdncmVnYXRlZCIsInNldERhdGEiLCJtYWtlRGF0YSIsIm9yaWdpbmFsRGF0YSIsInNraXBSZXNldFJlZiIsInJvd0luZGV4IiwiY29sdW1uSWQiLCJyZXNldERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBVUE7O0NBS0E7O0FBRUFBLFdBQVcsQ0FBQ0MsWUFBWixHQUEyQjtBQUN6QkMsUUFBTSxFQUFFLHVCQURpQjtBQUV6QkMsVUFBUSxFQUFFO0FBRmUsQ0FBM0I7QUFLQUgsV0FBVyxDQUFDSSxTQUFaLEdBQXdCO0FBQ3RCRixRQUFNLEVBQUVHLDBEQUFnQkM7QUFERixDQUF4QjtBQU9BLE1BQU1DLE1BQU0sR0FBR0MsMERBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F4Q0EsQyxDQTBDQTs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUNwQkMsT0FBSyxFQUFFQyxZQURhO0FBRXBCQyxLQUFHLEVBQUU7QUFBRUM7QUFBRixHQUZlO0FBR3BCQyxRQUFNLEVBQUU7QUFBRUM7QUFBRixHQUhZO0FBSXBCQyxjQUpvQjtBQUlOO0FBQ2RDO0FBTG9CLENBQUQsS0FNZjtBQUFBOztBQUNKO0FBQ0EsUUFBTSxDQUFDUCxLQUFELEVBQVFRLFFBQVIsSUFBb0JDLHFEQUFBLENBQWVSLFlB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ZXdDLElBQWYsQ0FBdkIsQ0F6RWEsQ0EyRWI7QUFDQTs7QUFDQSxRQUFNNkYsWUFBWSxHQUFHckksbURBQUEsQ0FBYSxLQUFiLENBQXJCLENBN0VhLENBK0ViO0FBQ0E7QUFDQTs7QUFDQSxRQUFNSCxZQUFZLEdBQUcsQ0FBQ3lJLFFBQUQsRUFBV0MsUUFBWCxFQUFxQmhKLEtBQXJCLEtBQStCO0FBQ2xEO0FBQ0E4SSxnQkFBWSxDQUFDUixPQUFiLEdBQXVCLElBQXZCO0FBQ0FLLFdBQU8sQ0FBQ3JHLEdBQUcsSUFDVEEsR0FBRyxDQUFDWCxHQUFKLENBQVEsQ0FBQ3pCLEdBQUQsRUFBTUMsS0FBTixLQUFnQjtBQUN0QixVQUFJQSxLQUFLLEtBQUs0SSxRQUFkLEVBQXdCO0FBQ3RCLCtDQUNLN0ksR0FETDtBQUVFLFdBQUM4SSxRQUFELEdBQVloSjtBQUZkO0FBSUQ7O0FBQ0QsYUFBT0UsR0FBUDtBQUNELEtBUkQsQ0FESyxDQUFQO0FBV0QsR0FkRCxDQWxGYSxDQWtHYjtBQUNBO0FBQ0E7OztBQUNBTyx3REFBQSxDQUFnQixNQUFNO0FBQ3BCcUksZ0JBQVksQ0FBQ1IsT0FBYixHQUF1QixLQUF2QjtBQUNELEdBRkQsRUFFRyxDQUFDckYsSUFBRCxDQUZILEVBckdhLENBeUdiO0FBQ0E7O0FBQ0EsUUFBTWdHLFNBQVMsR0FBRyxNQUFNO0FBQ3RCO0FBQ0FILGdCQUFZLENBQUNSLE9BQWIsR0FBdUIsSUFBdkI7QUFDQUssV0FBTyxDQUFDRSxZQUFELENBQVA7QUFDRCxHQUpEO0FBS0Q7O0lBaEhRTixHOztNQUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEyMDUxZjIwNjAyMDhmZmRjMGRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7XHJcbiAgdXNlVGFibGUsXHJcbiAgdXNlUGFnaW5hdGlvbixcclxuICB1c2VTb3J0QnksXHJcbiAgdXNlRmlsdGVycyxcclxuICB1c2VHcm91cEJ5LFxyXG4gIHVzZUV4cGFuZGVkLFxyXG4gIHVzZVJvd1NlbGVjdCxcclxufSBmcm9tICdyZWFjdC10YWJsZSdcclxuLy8gaW1wb3J0IG1hdGNoU29ydGVyIGZyb20gJ21hdGNoLXNvcnRlcidcclxuXHJcbmltcG9ydCBtYWtlRGF0YSBmcm9tICcuLi8uLi9tYWtlRGF0YSdcclxuXHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG5DYXJkUGxheWVycy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGVhZ3VlOiBcIk1ham9yIExlYWd1ZSBCYXNlYmFsbFwiLFxyXG4gIGRpdmlzaW9uOiBcIlwiXHJcbn07XHJcblxyXG5DYXJkUGxheWVycy5wcm9wVHlwZXMgPSB7XHJcbiAgbGVhZ3VlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblxyXG4gICAgdHIge1xyXG4gICAgICA6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcblxyXG4gICAgICA6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhZ2luYXRpb24ge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gIH1cclxuYFxyXG5cclxuLy8gQ3JlYXRlIGFuIGVkaXRhYmxlIGNlbGwgcmVuZGVyZXJcclxuY29uc3QgRWRpdGFibGVDZWxsID0gKHtcclxuICB2YWx1ZTogaW5pdGlhbFZhbHVlLFxyXG4gIHJvdzogeyBpbmRleCB9LFxyXG4gIGNvbHVtbjogeyBpZCB9LFxyXG4gIHVwZGF0ZU15RGF0YSwgLy8gVGhpcyBpcyBhIGN1c3RvbSBmdW5jdGlvbiB0aGF0IHdlIHN1cHBsaWVkIHRvIG91ciB0YWJsZSBpbnN0YW5jZVxyXG4gIGVkaXRhYmxlLFxyXG59KSA9PiB7XHJcbiAgLy8gV2UgbmVlZCB0byBrZWVwIGFuZCB1cGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBjZWxsIG5vcm1hbGx5XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIC8vIFdlJ2xsIG9ubHkgdXBkYXRlIHRoZSBleHRlcm5hbCBkYXRhIHdoZW4gdGhlIGlucHV0IGlzIGJsdXJyZWRcclxuICBjb25zdCBvbkJsdXIgPSAoKSA9PiB7XHJcbiAgICB1cGRhdGVNeURhdGEoaW5kZXgsIGlkLCB2YWx1ZSlcclxuICB9XHJcblxyXG4gIC8vIElmIHRoZSBpbml0aWFsVmFsdWUgaXMgY2hhbmdlZCBleHRlcm5hbGwsIHN5bmMgaXQgdXAgd2l0aCBvdXIgc3RhdGVcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VmFsdWUoaW5pdGlhbFZhbHVlKVxyXG4gIH0sIFtpbml0aWFsVmFsdWVdKVxyXG5cclxuICBpZiAoIWVkaXRhYmxlKSB7XHJcbiAgICByZXR1cm4gYCR7aW5pdGlhbFZhbHVlfWBcclxuICB9XHJcblxyXG4gIHJldHVybiA8aW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IG9uQmx1cj17b25CbHVyfSAvPlxyXG59XHJcblxyXG4vLyBEZWZpbmUgYSBkZWZhdWx0IFVJIGZvciBmaWx0ZXJpbmdcclxuZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciB9LFxyXG59KSB7XHJcbiAgY29uc3QgY291bnQgPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXRcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8ICcnfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCkgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxyXG4gICAgICB9fVxyXG4gICAgICBwbGFjZWhvbGRlcj17YFNlYXJjaCAke2NvdW50fSByZWNvcmRzLi4uYH1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSBmb3Igc2VsZWN0aW5nXHJcbi8vIGEgdW5pcXVlIG9wdGlvbiBmcm9tIGEgbGlzdFxyXG5mdW5jdGlvbiBTZWxlY3RDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbn0pIHtcclxuICAvLyBDYWxjdWxhdGUgdGhlIG9wdGlvbnMgZm9yIGZpbHRlcmluZ1xyXG4gIC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3NcclxuICBjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IFNldCgpXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBvcHRpb25zLmFkZChyb3cudmFsdWVzW2lkXSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gWy4uLm9wdGlvbnMudmFsdWVzKCldXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICAvLyBSZW5kZXIgYSBtdWx0aS1zZWxlY3QgYm94XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWxlY3RcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZClcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxyXG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSB0aGF0IHVzZXMgYVxyXG4vLyBzbGlkZXIgdG8gc2V0IHRoZSBmaWx0ZXIgdmFsdWUgYmV0d2VlbiBhIGNvbHVtbidzXHJcbi8vIG1pbiBhbmQgbWF4IHZhbHVlc1xyXG5mdW5jdGlvbiBTbGlkZXJDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbn0pIHtcclxuICAvLyBDYWxjdWxhdGUgdGhlIG1pbiBhbmQgbWF4XHJcbiAgLy8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xyXG5cclxuICBjb25zdCBbbWluLCBtYXhdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBsZXQgbWluID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4gICAgbGV0IG1heCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIG1pbiA9IE1hdGgubWluKHJvdy52YWx1ZXNbaWRdLCBtaW4pXHJcbiAgICAgIG1heCA9IE1hdGgubWF4KHJvdy52YWx1ZXNbaWRdLCBtYXgpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFttaW4sIG1heF1cclxuICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgIG1pbj17bWlufVxyXG4gICAgICAgIG1heD17bWF4fVxyXG4gICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCBtaW59XHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgc2V0RmlsdGVyKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCkpXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIodW5kZWZpbmVkKX0+T2ZmPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gVUkgZm9yIG91ciAnYmV0d2Vlbicgb3IgbnVtYmVyIHJhbmdlXHJcbi8vIGZpbHRlci4gSXQgdXNlcyB0d28gbnVtYmVyIGJveGVzIGFuZCBmaWx0ZXJzIHJvd3MgdG9cclxuLy8gb25lcyB0aGF0IGhhdmUgdmFsdWVzIGJldHdlZW4gdGhlIHR3b1xyXG5mdW5jdGlvbiBOdW1iZXJSYW5nZUNvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlID0gW10sIHByZUZpbHRlcmVkUm93cywgc2V0RmlsdGVyLCBpZCB9LFxyXG59KSB7XHJcbiAgY29uc3QgW21pbiwgbWF4XSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgbGV0IG1pbiA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuICAgIGxldCBtYXggPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBtaW4gPSBNYXRoLm1pbihyb3cudmFsdWVzW2lkXSwgbWluKVxyXG4gICAgICBtYXggPSBNYXRoLm1heChyb3cudmFsdWVzW2lkXSwgbWF4KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBbbWluLCBtYXhdXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlWzBdIHx8ICcnfVxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICBzZXRGaWx0ZXIoKG9sZCA9IFtdKSA9PiBbdmFsID8gcGFyc2VJbnQodmFsLCAxMCkgOiB1bmRlZmluZWQsIG9sZFsxXV0pXHJcbiAgICAgICAgfX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17YE1pbiAoJHttaW59KWB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiAnNzBweCcsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNXJlbScsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgdG9cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlWzFdIHx8ICcnfVxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICBzZXRGaWx0ZXIoKG9sZCA9IFtdKSA9PiBbb2xkWzBdLCB2YWwgPyBwYXJzZUludCh2YWwsIDEwKSA6IHVuZGVmaW5lZF0pXHJcbiAgICAgICAgfX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17YE1heCAoJHttYXh9KWB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiAnNzBweCcsXHJcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMC41cmVtJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBmdXp6eVRleHRGaWx0ZXJGbihyb3dzLCBpZCwgZmlsdGVyVmFsdWUpIHtcclxuICByZXR1cm4gbWF0Y2hTb3J0ZXIocm93cywgZmlsdGVyVmFsdWUsIHsga2V5czogW3JvdyA9PiByb3cudmFsdWVzW2lkXV0gfSlcclxufVxyXG5cclxuLy8gTGV0IHRoZSB0YWJsZSByZW1vdmUgdGhlIGZpbHRlciBpZiB0aGUgc3RyaW5nIGlzIGVtcHR5XHJcbmZ1enp5VGV4dEZpbHRlckZuLmF1dG9SZW1vdmUgPSB2YWwgPT4gIXZhbFxyXG5cclxuLy8gQmUgc3VyZSB0byBwYXNzIG91ciB1cGRhdGVNeURhdGEgYW5kIHRoZSBza2lwUmVzZXQgb3B0aW9uXHJcbmZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSwgdXBkYXRlTXlEYXRhLCBza2lwUmVzZXQgfSkge1xyXG4gIGNvbnN0IGZpbHRlclR5cGVzID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIC8vIEFkZCBhIG5ldyBmdXp6eVRleHRGaWx0ZXJGbiBmaWx0ZXIgdHlwZS5cclxuICAgICAgZnV6enlUZXh0OiBmdXp6eVRleHRGaWx0ZXJGbixcclxuICAgICAgLy8gT3IsIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHRleHQgZmlsdGVyIHRvIHVzZVxyXG4gICAgICAvLyBcInN0YXJ0V2l0aFwiXHJcbiAgICAgIHRleHQ6IChyb3dzLCBpZCwgZmlsdGVyVmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4gcm93cy5maWx0ZXIocm93ID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF1cclxuICAgICAgICAgIHJldHVybiByb3dWYWx1ZSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gU3RyaW5nKHJvd1ZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgIC5zdGFydHNXaXRoKFN0cmluZyhmaWx0ZXJWYWx1ZSkudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgW11cclxuICApXHJcblxyXG4gIGNvbnN0IGRlZmF1bHRDb2x1bW4gPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLy8gTGV0J3Mgc2V0IHVwIG91ciBkZWZhdWx0IEZpbHRlciBVSVxyXG4gICAgICBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcbiAgICAgIC8vIEFuZCBhbHNvIG91ciBkZWZhdWx0IGVkaXRhYmxlIGNlbGxcclxuICAgICAgQ2VsbDogRWRpdGFibGVDZWxsLFxyXG4gICAgfSksXHJcbiAgICBbXVxyXG4gIClcclxuXHJcbiAgLy8gVXNlIHRoZSBzdGF0ZSBhbmQgZnVuY3Rpb25zIHJldHVybmVkIGZyb20gdXNlVGFibGUgdG8gYnVpbGQgeW91ciBVSVxyXG4gIGNvbnN0IHtcclxuICAgIGdldFRhYmxlUHJvcHMsXHJcbiAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuICAgIGhlYWRlckdyb3VwcyxcclxuICAgIHByZXBhcmVSb3csXHJcbiAgICBwYWdlLCAvLyBJbnN0ZWFkIG9mIHVzaW5nICdyb3dzJywgd2UnbGwgdXNlIHBhZ2UsXHJcbiAgICAvLyB3aGljaCBoYXMgb25seSB0aGUgcm93cyBmb3IgdGhlIGFjdGl2ZSBwYWdlXHJcblxyXG4gICAgLy8gVGhlIHJlc3Qgb2YgdGhlc2UgdGhpbmdzIGFyZSBzdXBlciBoYW5keSwgdG9vIDspXHJcbiAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbiAgICBjYW5OZXh0UGFnZSxcclxuICAgIHBhZ2VPcHRpb25zLFxyXG4gICAgcGFnZUNvdW50LFxyXG4gICAgZ290b1BhZ2UsXHJcbiAgICBuZXh0UGFnZSxcclxuICAgIHByZXZpb3VzUGFnZSxcclxuICAgIHNldFBhZ2VTaXplLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgcGFnZUluZGV4LFxyXG4gICAgICBwYWdlU2l6ZSxcclxuICAgICAgc29ydEJ5LFxyXG4gICAgICBncm91cEJ5LFxyXG4gICAgICBleHBhbmRlZCxcclxuICAgICAgZmlsdGVycyxcclxuICAgICAgc2VsZWN0ZWRSb3dJZHMsXHJcbiAgICB9LFxyXG4gIH0gPSB1c2VUYWJsZShcclxuICAgIHtcclxuICAgICAgY29sdW1ucyxcclxuICAgICAgZGF0YSxcclxuICAgICAgZGVmYXVsdENvbHVtbixcclxuICAgICAgZmlsdGVyVHlwZXMsXHJcbiAgICAgIC8vIHVwZGF0ZU15RGF0YSBpc24ndCBwYXJ0IG9mIHRoZSBBUEksIGJ1dFxyXG4gICAgICAvLyBhbnl0aGluZyB3ZSBwdXQgaW50byB0aGVzZSBvcHRpb25zIHdpbGxcclxuICAgICAgLy8gYXV0b21hdGljYWxseSBiZSBhdmFpbGFibGUgb24gdGhlIGluc3RhbmNlLlxyXG4gICAgICAvLyBUaGF0IHdheSB3ZSBjYW4gY2FsbCB0aGlzIGZ1bmN0aW9uIGZyb20gb3VyXHJcbiAgICAgIC8vIGNlbGwgcmVuZGVyZXIhXHJcbiAgICAgIHVwZGF0ZU15RGF0YSxcclxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHBhc3MgdGhpcyBzbyB0aGUgcGFnZSBkb2Vzbid0IGNoYW5nZVxyXG4gICAgICAvLyB3aGVuIHdlIGVkaXQgdGhlIGRhdGEuXHJcbiAgICAgIGF1dG9SZXNldFBhZ2U6ICFza2lwUmVzZXQsXHJcbiAgICAgIGF1dG9SZXNldFNlbGVjdGVkUm93czogIXNraXBSZXNldCxcclxuICAgICAgZGlzYWJsZU11bHRpU29ydDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB1c2VGaWx0ZXJzLFxyXG4gICAgdXNlR3JvdXBCeSxcclxuICAgIHVzZVNvcnRCeSxcclxuICAgIHVzZUV4cGFuZGVkLFxyXG4gICAgdXNlUGFnaW5hdGlvbixcclxuICAgIHVzZVJvd1NlbGVjdCxcclxuICAgIC8vIEhlcmUgd2Ugd2lsbCB1c2UgYSBwbHVnaW4gdG8gYWRkIG91ciBzZWxlY3Rpb24gY29sdW1uXHJcbiAgICBob29rcyA9PiB7XHJcbiAgICAgIGhvb2tzLnZpc2libGVDb2x1bW5zLnB1c2goY29sdW1ucyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdzZWxlY3Rpb24nLFxyXG4gICAgICAgICAgICAvLyBNYWtlIHRoaXMgY29sdW1uIGEgZ3JvdXBCeUJvdW5kYXJ5LiBUaGlzIGVuc3VyZXMgdGhhdCBncm91cEJ5IGNvbHVtbnNcclxuICAgICAgICAgICAgLy8gYXJlIHBsYWNlZCBhZnRlciBpdFxyXG4gICAgICAgICAgICBncm91cEJ5Qm91bmRhcnk6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIFRoZSBoZWFkZXIgY2FuIHVzZSB0aGUgdGFibGUncyBnZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyBtZXRob2RcclxuICAgICAgICAgICAgLy8gdG8gcmVuZGVyIGEgY2hlY2tib3hcclxuICAgICAgICAgICAgSGVhZGVyOiAoeyBnZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJbmRldGVybWluYXRlQ2hlY2tib3ggey4uLmdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzKCl9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIC8vIFRoZSBjZWxsIGNhbiB1c2UgdGhlIGluZGl2aWR1YWwgcm93J3MgZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyBtZXRob2RcclxuICAgICAgICAgICAgLy8gdG8gdGhlIHJlbmRlciBhIGNoZWNrYm94XHJcbiAgICAgICAgICAgIENlbGw6ICh7IHJvdyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJbmRldGVybWluYXRlQ2hlY2tib3ggey4uLnJvdy5nZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzKCl9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLi4uY29sdW1ucyxcclxuICAgICAgICBdXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgKVxyXG5cclxuICAvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uY2FuR3JvdXBCeSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gY2FuIGJlIGdyb3VwZWQsIGxldCdzIGFkZCBhIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNHcm91cGVkID8gJ/Cfm5EgJyA6ICfwn5GKICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBBZGQgYSBzb3J0IGRpcmVjdGlvbiBpbmRpY2F0b3IgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzU29ydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJyDwn5S9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJyDwn5S8J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBSZW5kZXIgdGhlIGNvbHVtbnMgZmlsdGVyIFVJICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntjb2x1bW4uY2FuRmlsdGVyID8gY29sdW1uLnJlbmRlcignRmlsdGVyJykgOiBudWxsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAgIHtwYWdlLm1hcChyb3cgPT4ge1xyXG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5pc0dyb3VwZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBncm91cGVkIGNlbGwsIGFkZCBhbiBleHBhbmRlciBhbmQgcm93IGNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLnJvdy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pc0V4cGFuZGVkID8gJ/CfkYcnIDogJ/CfkYknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcsIHsgZWRpdGFibGU6IGZhbHNlIH0pfSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5zdWJSb3dzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2VsbCBpcyBhZ2dyZWdhdGVkLCB1c2UgdGhlIEFnZ3JlZ2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyZXIgZm9yIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJywgeyBlZGl0YWJsZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICB7LypcclxuICAgICAgICBQYWdpbmF0aW9uIGNhbiBiZSBidWlsdCBob3dldmVyIHlvdSdkIGxpa2UuXHJcbiAgICAgICAgVGhpcyBpcyBqdXN0IGEgdmVyeSBiYXNpYyBVSSBpbXBsZW1lbnRhdGlvbjpcclxuICAgICAgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UoMCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIHsnPDwnfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmV2aW91c1BhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgeyc8J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV4dFBhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShwYWdlQ291bnQgLSAxKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbiAgICAgICAgICB7Jz4+J31cclxuICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgUGFnZXsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICB7cGFnZUluZGV4ICsgMX0gb2Yge3BhZ2VPcHRpb25zLmxlbmd0aH1cclxuICAgICAgICAgIDwvc3Ryb25nPnsnICd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgfCBHbyB0byBwYWdlOnsnICd9XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFnZUluZGV4ICsgMX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLSAxIDogMFxyXG4gICAgICAgICAgICAgIGdvdG9QYWdlKHBhZ2UpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3Bhbj57JyAnfVxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgc2V0UGFnZVNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1sxMCwgMjAsIDMwLCA0MCwgNTBdLm1hcChwYWdlU2l6ZSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwYWdlU2l6ZX0gdmFsdWU9e3BhZ2VTaXplfT5cclxuICAgICAgICAgICAgICBTaG93IHtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwcmU+XHJcbiAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwYWdlSW5kZXgsXHJcbiAgICAgICAgICAgICAgcGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgcGFnZUNvdW50LFxyXG4gICAgICAgICAgICAgIGNhbk5leHRQYWdlLFxyXG4gICAgICAgICAgICAgIGNhblByZXZpb3VzUGFnZSxcclxuICAgICAgICAgICAgICBzb3J0QnksXHJcbiAgICAgICAgICAgICAgZ3JvdXBCeSxcclxuICAgICAgICAgICAgICBleHBhbmRlZDogZXhwYW5kZWQsXHJcbiAgICAgICAgICAgICAgZmlsdGVycyxcclxuICAgICAgICAgICAgICBzZWxlY3RlZFJvd0lkczogc2VsZWN0ZWRSb3dJZHMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9jb2RlPlxyXG4gICAgICA8L3ByZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy8gRGVmaW5lIGEgY3VzdG9tIGZpbHRlciBmaWx0ZXIgZnVuY3Rpb24hXHJcbmZ1bmN0aW9uIGZpbHRlckdyZWF0ZXJUaGFuKHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSkge1xyXG4gIHJldHVybiByb3dzLmZpbHRlcihyb3cgPT4ge1xyXG4gICAgY29uc3Qgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXVxyXG4gICAgcmV0dXJuIHJvd1ZhbHVlID49IGZpbHRlclZhbHVlXHJcbiAgfSlcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhbiBhdXRvUmVtb3ZlIG1ldGhvZCBvbiB0aGUgZmlsdGVyIGZ1bmN0aW9uIHRoYXRcclxuLy8gd2hlbiBnaXZlbiB0aGUgbmV3IGZpbHRlciB2YWx1ZSBhbmQgcmV0dXJucyB0cnVlLCB0aGUgZmlsdGVyXHJcbi8vIHdpbGwgYmUgYXV0b21hdGljYWxseSByZW1vdmVkLiBOb3JtYWxseSB0aGlzIGlzIGp1c3QgYW4gdW5kZWZpbmVkXHJcbi8vIGNoZWNrLCBidXQgaGVyZSwgd2Ugd2FudCB0byByZW1vdmUgdGhlIGZpbHRlciBpZiBpdCdzIG5vdCBhIG51bWJlclxyXG5maWx0ZXJHcmVhdGVyVGhhbi5hdXRvUmVtb3ZlID0gdmFsID0+IHR5cGVvZiB2YWwgIT09ICdudW1iZXInXHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGFnZ3JlZ2F0b3IgdGhhdFxyXG4vLyB0YWtlcyBpbiBhbiBhcnJheSBvZiBsZWFmIHZhbHVlcyBhbmRcclxuLy8gcmV0dXJucyB0aGUgcm91bmRlZCBtZWRpYW5cclxuZnVuY3Rpb24gcm91bmRlZE1lZGlhbihsZWFmVmFsdWVzKSB7XHJcbiAgbGV0IG1pbiA9IGxlYWZWYWx1ZXNbMF0gfHwgMFxyXG4gIGxldCBtYXggPSBsZWFmVmFsdWVzWzBdIHx8IDBcclxuXHJcbiAgbGVhZlZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUpXHJcbiAgICBtYXggPSBNYXRoLm1heChtYXgsIHZhbHVlKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBNYXRoLnJvdW5kKChtaW4gKyBtYXgpIC8gMilcclxufVxyXG5cclxuY29uc3QgSW5kZXRlcm1pbmF0ZUNoZWNrYm94ID0gUmVhY3QuZm9yd2FyZFJlZihcclxuICAoeyBpbmRldGVybWluYXRlLCAuLi5yZXN0IH0sIHJlZikgPT4ge1xyXG4gICAgY29uc3QgZGVmYXVsdFJlZiA9IFJlYWN0LnVzZVJlZigpXHJcbiAgICBjb25zdCByZXNvbHZlZFJlZiA9IHJlZiB8fCBkZWZhdWx0UmVmXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgcmVzb2x2ZWRSZWYuY3VycmVudC5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZVxyXG4gICAgfSwgW3Jlc29sdmVkUmVmLCBpbmRldGVybWluYXRlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiByZWY9e3Jlc29sdmVkUmVmfSB7Li4ucmVzdH0gLz5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG4pXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiBbXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6ICdOYW1lJyxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlcjogJ0ZpcnN0IE5hbWUnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2ZpcnN0TmFtZScsXHJcbiAgICAgICAgICAgIC8vIFVzZSBhIHR3by1zdGFnZSBhZ2dyZWdhdG9yIGhlcmUgdG8gZmlyc3RcclxuICAgICAgICAgICAgLy8gY291bnQgdGhlIHRvdGFsIHJvd3MgYmVpbmcgYWdncmVnYXRlZCxcclxuICAgICAgICAgICAgLy8gdGhlbiBzdW0gYW55IG9mIHRob3NlIGNvdW50cyBpZiB0aGV5IGFyZVxyXG4gICAgICAgICAgICAvLyBhZ2dyZWdhdGVkIGZ1cnRoZXJcclxuICAgICAgICAgICAgYWdncmVnYXRlOiAnY291bnQnLFxyXG4gICAgICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gTmFtZXNgLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnTGFzdCBOYW1lJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdsYXN0TmFtZScsXHJcbiAgICAgICAgICAgIC8vIFVzZSBvdXIgY3VzdG9tIGBmdXp6eVRleHRgIGZpbHRlciBvbiB0aGlzIGNvbHVtblxyXG4gICAgICAgICAgICBmaWx0ZXI6ICdmdXp6eVRleHQnLFxyXG4gICAgICAgICAgICAvLyBVc2UgYW5vdGhlciB0d28tc3RhZ2UgYWdncmVnYXRvciBoZXJlIHRvXHJcbiAgICAgICAgICAgIC8vIGZpcnN0IGNvdW50IHRoZSBVTklRVUUgdmFsdWVzIGZyb20gdGhlIHJvd3NcclxuICAgICAgICAgICAgLy8gYmVpbmcgYWdncmVnYXRlZCwgdGhlbiBzdW0gdGhvc2UgY291bnRzIGlmXHJcbiAgICAgICAgICAgIC8vIHRoZXkgYXJlIGFnZ3JlZ2F0ZWQgZnVydGhlclxyXG4gICAgICAgICAgICBhZ2dyZWdhdGU6ICd1bmlxdWVDb3VudCcsXHJcbiAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBVbmlxdWUgTmFtZXNgLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiAnSW5mbycsXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdBZ2UnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2FnZScsXHJcbiAgICAgICAgICAgIEZpbHRlcjogU2xpZGVyQ29sdW1uRmlsdGVyLFxyXG4gICAgICAgICAgICBmaWx0ZXI6ICdlcXVhbHMnLFxyXG4gICAgICAgICAgICAvLyBBZ2dyZWdhdGUgdGhlIGF2ZXJhZ2UgYWdlIG9mIHZpc2l0b3JzXHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZTogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gKGF2ZylgLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSGVhZGVyOiAnVmlzaXRzJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICd2aXNpdHMnLFxyXG4gICAgICAgICAgICBGaWx0ZXI6IE51bWJlclJhbmdlQ29sdW1uRmlsdGVyLFxyXG4gICAgICAgICAgICBmaWx0ZXI6ICdiZXR3ZWVuJyxcclxuICAgICAgICAgICAgLy8gQWdncmVnYXRlIHRoZSBzdW0gb2YgYWxsIHZpc2l0c1xyXG4gICAgICAgICAgICBhZ2dyZWdhdGU6ICdzdW0nLFxyXG4gICAgICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gKHRvdGFsKWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdTdGF0dXMnLFxyXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ3N0YXR1cycsXHJcbiAgICAgICAgICAgIEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxyXG4gICAgICAgICAgICBmaWx0ZXI6ICdpbmNsdWRlcycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXI6ICdQcm9maWxlIFByb2dyZXNzJyxcclxuICAgICAgICAgICAgYWNjZXNzb3I6ICdwcm9ncmVzcycsXHJcbiAgICAgICAgICAgIEZpbHRlcjogU2xpZGVyQ29sdW1uRmlsdGVyLFxyXG4gICAgICAgICAgICBmaWx0ZXI6IGZpbHRlckdyZWF0ZXJUaGFuLFxyXG4gICAgICAgICAgICAvLyBVc2Ugb3VyIGN1c3RvbSByb3VuZGVkTWVkaWFuIGFnZ3JlZ2F0b3JcclxuICAgICAgICAgICAgYWdncmVnYXRlOiByb3VuZGVkTWVkaWFuLFxyXG4gICAgICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gKG1lZClgLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBtYWtlRGF0YSgxMDAwMCkpXHJcbiAgY29uc3QgW29yaWdpbmFsRGF0YV0gPSBSZWFjdC51c2VTdGF0ZShkYXRhKVxyXG5cclxuICAvLyBXZSBuZWVkIHRvIGtlZXAgdGhlIHRhYmxlIGZyb20gcmVzZXR0aW5nIHRoZSBwYWdlSW5kZXggd2hlbiB3ZVxyXG4gIC8vIFVwZGF0ZSBkYXRhLiBTbyB3ZSBjYW4ga2VlcCB0cmFjayBvZiB0aGF0IGZsYWcgd2l0aCBhIHJlZi5cclxuICBjb25zdCBza2lwUmVzZXRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpXHJcblxyXG4gIC8vIFdoZW4gb3VyIGNlbGwgcmVuZGVyZXIgY2FsbHMgdXBkYXRlTXlEYXRhLCB3ZSdsbCB1c2VcclxuICAvLyB0aGUgcm93SW5kZXgsIGNvbHVtbklkIGFuZCBuZXcgdmFsdWUgdG8gdXBkYXRlIHRoZVxyXG4gIC8vIG9yaWdpbmFsIGRhdGFcclxuICBjb25zdCB1cGRhdGVNeURhdGEgPSAocm93SW5kZXgsIGNvbHVtbklkLCB2YWx1ZSkgPT4ge1xyXG4gICAgLy8gV2UgYWxzbyB0dXJuIG9uIHRoZSBmbGFnIHRvIG5vdCByZXNldCB0aGUgcGFnZVxyXG4gICAgc2tpcFJlc2V0UmVmLmN1cnJlbnQgPSB0cnVlXHJcbiAgICBzZXREYXRhKG9sZCA9PlxyXG4gICAgICBvbGQubWFwKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSByb3dJbmRleCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucm93LFxyXG4gICAgICAgICAgICBbY29sdW1uSWRdOiB2YWx1ZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd1xyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLy8gQWZ0ZXIgZGF0YSBjaGFuZ2VzLCB3ZSB0dXJuIHRoZSBmbGFnIGJhY2sgb2ZmXHJcbiAgLy8gc28gdGhhdCBpZiBkYXRhIGFjdHVhbGx5IGNoYW5nZXMgd2hlbiB3ZSdyZSBub3RcclxuICAvLyBlZGl0aW5nIGl0LCB0aGUgcGFnZSBpcyByZXNldFxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBza2lwUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlXHJcbiAgfSwgW2RhdGFdKVxyXG5cclxuICAvLyBMZXQncyBhZGQgYSBkYXRhIHJlc2V0dGVyL3JhbmRvbWl6ZXIgdG8gaGVscFxyXG4gIC8vIGlsbHVzdHJhdGUgdGhhdCBmbG93Li4uXHJcbiAgY29uc3QgcmVzZXREYXRhID0gKCkgPT4ge1xyXG4gICAgLy8gRG9uJ3QgcmVzZXQgdGhlIHBhZ2Ugd2hlbiB3ZSBkbyB0aGlzXHJcbiAgICBza2lwUmVzZXRSZWYuY3VycmVudCA9IHRydWVcclxuICAgIHNldERhdGEob3JpZ2luYWxEYXRhKVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9