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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\git\\baseballsite\\portal\\components\\baseball\\CardPlayers.js";

 // components

function CardPlayers({
  league
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "rounded-t mb-0 px-4 py-3 border-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-wrap items-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "relative w-full px-4 max-w-full flex-grow flex-1",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "font-semibold text-base text-blueGray-700",
              children: league
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "block w-full overflow-x-auto"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c = CardPlayers;
CardPlayers.defaultProps = {
  league: "Major League Baseball",
  division: ""
};
CardPlayers.propTypes = {
  league: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
}; // const Styles = styled.div`
//   padding: 1rem;
//   table {
//     border-spacing: 0;
//     border: 1px solid black;
//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }
//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;
//       :last-child {
//         border-right: 0;
//       }
//     }
//     td {
//       input {
//         font-size: 1rem;
//         padding: 0;
//         margin: 0;
//         border: 0;
//       }
//     }
//   }
//   .pagination {
//     padding: 0.5rem;
//   }
// `
// // Create an editable cell renderer
// const EditableCell = ({
//   value: initialValue,
//   row: { index },
//   column: { id },
//   updateMyData, // This is a custom function that we supplied to our table instance
//   editable,
// }) => {
//   // We need to keep and update the state of the cell normally
//   const [value, setValue] = React.useState(initialValue)
//   const onChange = e => {
//     setValue(e.target.value)
//   }
//   // We'll only update the external data when the input is blurred
//   const onBlur = () => {
//     updateMyData(index, id, value)
//   }
//   // If the initialValue is changed externall, sync it up with our state
//   React.useEffect(() => {
//     setValue(initialValue)
//   }, [initialValue])
//   if (!editable) {
//     return `${initialValue}`
//   }
//   return <input value={value} onChange={onChange} onBlur={onBlur} />
// }
// // Define a default UI for filtering
// function DefaultColumnFilter({
//   column: { filterValue, preFilteredRows, setFilter },
// }) {
//   const count = preFilteredRows.length
//   return (
//     <input
//       value={filterValue || ''}
//       onChange={e => {
//         setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
//       }}
//       placeholder={`Search ${count} records...`}
//     />
//   )
// }
// // This is a custom filter UI for selecting
// // a unique option from a list
// function SelectColumnFilter({
//   column: { filterValue, setFilter, preFilteredRows, id },
// }) {
//   // Calculate the options for filtering
//   // using the preFilteredRows
//   const options = React.useMemo(() => {
//     const options = new Set()
//     preFilteredRows.forEach(row => {
//       options.add(row.values[id])
//     })
//     return [...options.values()]
//   }, [id, preFilteredRows])
//   // Render a multi-select box
//   return (
//     <select
//       value={filterValue}
//       onChange={e => {
//         setFilter(e.target.value || undefined)
//       }}
//     >
//       <option value="">All</option>
//       {options.map((option, i) => (
//         <option key={i} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   )
// }
// // This is a custom filter UI that uses a
// // slider to set the filter value between a column's
// // min and max values
// function SliderColumnFilter({
//   column: { filterValue, setFilter, preFilteredRows, id },
// }) {
//   // Calculate the min and max
//   // using the preFilteredRows
//   const [min, max] = React.useMemo(() => {
//     let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
//     let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
//     preFilteredRows.forEach(row => {
//       min = Math.min(row.values[id], min)
//       max = Math.max(row.values[id], max)
//     })
//     return [min, max]
//   }, [id, preFilteredRows])
//   return (
//     <>
//       <input
//         type="range"
//         min={min}
//         max={max}
//         value={filterValue || min}
//         onChange={e => {
//           setFilter(parseInt(e.target.value, 10))
//         }}
//       />
//       <button onClick={() => setFilter(undefined)}>Off</button>
//     </>
//   )
// }
// // This is a custom UI for our 'between' or number range
// // filter. It uses two number boxes and filters rows to
// // ones that have values between the two
// function NumberRangeColumnFilter({
//   column: { filterValue = [], preFilteredRows, setFilter, id },
// }) {
//   const [min, max] = React.useMemo(() => {
//     let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
//     let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
//     preFilteredRows.forEach(row => {
//       min = Math.min(row.values[id], min)
//       max = Math.max(row.values[id], max)
//     })
//     return [min, max]
//   }, [id, preFilteredRows])
//   return (
//     <div
//       style={{
//         display: 'flex',
//       }}
//     >
//       <input
//         value={filterValue[0] || ''}
//         type="number"
//         onChange={e => {
//           const val = e.target.value
//           setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
//         }}
//         placeholder={`Min (${min})`}
//         style={{
//           width: '70px',
//           marginRight: '0.5rem',
//         }}
//       />
//       to
//       <input
//         value={filterValue[1] || ''}
//         type="number"
//         onChange={e => {
//           const val = e.target.value
//           setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
//         }}
//         placeholder={`Max (${max})`}
//         style={{
//           width: '70px',
//           marginLeft: '0.5rem',
//         }}
//       />
//     </div>
//   )
// }
// function fuzzyTextFilterFn(rows, id, filterValue) {
//   return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
// }
// // Let the table remove the filter if the string is empty
// fuzzyTextFilterFn.autoRemove = val => !val
// // Be sure to pass our updateMyData and the skipReset option
// function Table({ columns, data, updateMyData, skipReset }) {
//   const filterTypes = React.useMemo(
//     () => ({
//       // Add a new fuzzyTextFilterFn filter type.
//       fuzzyText: fuzzyTextFilterFn,
//       // Or, override the default text filter to use
//       // "startWith"
//       text: (rows, id, filterValue) => {
//         return rows.filter(row => {
//           const rowValue = row.values[id]
//           return rowValue !== undefined
//             ? String(rowValue)
//                 .toLowerCase()
//                 .startsWith(String(filterValue).toLowerCase())
//             : true
//         })
//       },
//     }),
//     []
//   )
//   const defaultColumn = React.useMemo(
//     () => ({
//       // Let's set up our default Filter UI
//       Filter: DefaultColumnFilter,
//       // And also our default editable cell
//       Cell: EditableCell,
//     }),
//     []
//   )
//   // Use the state and functions returned from useTable to build your UI
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page, // Instead of using 'rows', we'll use page,
//     // which has only the rows for the active page
//     // The rest of these things are super handy, too ;)
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: {
//       pageIndex,
//       pageSize,
//       sortBy,
//       groupBy,
//       expanded,
//       filters,
//       selectedRowIds,
//     },
//   } = useTable(
//     {
//       columns,
//       data,
//       defaultColumn,
//       filterTypes,
//       // updateMyData isn't part of the API, but
//       // anything we put into these options will
//       // automatically be available on the instance.
//       // That way we can call this function from our
//       // cell renderer!
//       updateMyData,
//       // We also need to pass this so the page doesn't change
//       // when we edit the data.
//       autoResetPage: !skipReset,
//       autoResetSelectedRows: !skipReset,
//       disableMultiSort: true,
//     },
//     useFilters,
//     useGroupBy,
//     useSortBy,
//     useExpanded,
//     usePagination,
//     useRowSelect,
//     // Here we will use a plugin to add our selection column
//     hooks => {
//       hooks.visibleColumns.push(columns => {
//         return [
//           {
//             id: 'selection',
//             // Make this column a groupByBoundary. This ensures that groupBy columns
//             // are placed after it
//             groupByBoundary: true,
//             // The header can use the table's getToggleAllRowsSelectedProps method
//             // to render a checkbox
//             Header: ({ getToggleAllRowsSelectedProps }) => (
//               <div>
//                 <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
//               </div>
//             ),
//             // The cell can use the individual row's getToggleRowSelectedProps method
//             // to the render a checkbox
//             Cell: ({ row }) => (
//               <div>
//                 <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
//               </div>
//             ),
//           },
//           ...columns,
//         ]
//       })
//     }
//   )
//   // Render the UI for your table
//   return (
//     <>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>
//                   <div>
//                     {column.canGroupBy ? (
//                       // If the column can be grouped, let's add a toggle
//                       <span {...column.getGroupByToggleProps()}>
//                         {column.isGrouped ? '🛑 ' : '👊 '}
//                       </span>
//                     ) : null}
//                     <span {...column.getSortByToggleProps()}>
//                       {column.render('Header')}
//                       {/* Add a sort direction indicator */}
//                       {column.isSorted
//                         ? column.isSortedDesc
//                           ? ' 🔽'
//                           : ' 🔼'
//                         : ''}
//                     </span>
//                   </div>
//                   {/* Render the columns filter UI */}
//                   <div>{column.canFilter ? column.render('Filter') : null}</div>
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map(row => {
//             prepareRow(row)
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return (
//                     <td {...cell.getCellProps()}>
//                       {cell.isGrouped ? (
//                         // If it's a grouped cell, add an expander and row count
//                         <>
//                           <span {...row.getToggleRowExpandedProps()}>
//                             {row.isExpanded ? '👇' : '👉'}
//                           </span>{' '}
//                           {cell.render('Cell', { editable: false })} (
//                           {row.subRows.length})
//                         </>
//                       ) : cell.isAggregated ? (
//                         // If the cell is aggregated, use the Aggregated
//                         // renderer for cell
//                         cell.render('Aggregated')
//                       ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
//                         // Otherwise, just render the regular cell
//                         cell.render('Cell', { editable: true })
//                       )}
//                     </td>
//                   )
//                 })}
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//       {/*
//         Pagination can be built however you'd like.
//         This is just a very basic UI implementation:
//       */}
//       <div className="pagination">
//         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//           {'<<'}
//         </button>{' '}
//         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//           {'<'}
//         </button>{' '}
//         <button onClick={() => nextPage()} disabled={!canNextPage}>
//           {'>'}
//         </button>{' '}
//         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//           {'>>'}
//         </button>{' '}
//         <span>
//           Page{' '}
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>{' '}
//         </span>
//         <span>
//           | Go to page:{' '}
//           <input
//             type="number"
//             defaultValue={pageIndex + 1}
//             onChange={e => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0
//               gotoPage(page)
//             }}
//             style={{ width: '100px' }}
//           />
//         </span>{' '}
//         <select
//           value={pageSize}
//           onChange={e => {
//             setPageSize(Number(e.target.value))
//           }}
//         >
//           {[10, 20, 30, 40, 50].map(pageSize => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//       <pre>
//         <code>
//           {JSON.stringify(
//             {
//               pageIndex,
//               pageSize,
//               pageCount,
//               canNextPage,
//               canPreviousPage,
//               sortBy,
//               groupBy,
//               expanded: expanded,
//               filters,
//               selectedRowIds: selectedRowIds,
//             },
//             null,
//             2
//           )}
//         </code>
//       </pre>
//     </>
//   )
// }
// // Define a custom filter filter function!
// function filterGreaterThan(rows, id, filterValue) {
//   return rows.filter(row => {
//     const rowValue = row.values[id]
//     return rowValue >= filterValue
//   })
// }
// // This is an autoRemove method on the filter function that
// // when given the new filter value and returns true, the filter
// // will be automatically removed. Normally this is just an undefined
// // check, but here, we want to remove the filter if it's not a number
// filterGreaterThan.autoRemove = val => typeof val !== 'number'
// // This is a custom aggregator that
// // takes in an array of leaf values and
// // returns the rounded median
// function roundedMedian(leafValues) {
//   let min = leafValues[0] || 0
//   let max = leafValues[0] || 0
//   leafValues.forEach(value => {
//     min = Math.min(min, value)
//     max = Math.max(max, value)
//   })
//   return Math.round((min + max) / 2)
// }
// const IndeterminateCheckbox = React.forwardRef(
//   ({ indeterminate, ...rest }, ref) => {
//     const defaultRef = React.useRef()
//     const resolvedRef = ref || defaultRef
//     React.useEffect(() => {
//       resolvedRef.current.indeterminate = indeterminate
//     }, [resolvedRef, indeterminate])
//     return (
//       <>
//         <input type="checkbox" ref={resolvedRef} {...rest} />
//       </>
//     )
//   }
// )
// function App() {
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'Name',
//         columns: [
//           {
//             Header: 'First Name',
//             accessor: 'firstName',
//             // Use a two-stage aggregator here to first
//             // count the total rows being aggregated,
//             // then sum any of those counts if they are
//             // aggregated further
//             aggregate: 'count',
//             Aggregated: ({ value }) => `${value} Names`,
//           },
//           {
//             Header: 'Last Name',
//             accessor: 'lastName',
//             // Use our custom `fuzzyText` filter on this column
//             filter: 'fuzzyText',
//             // Use another two-stage aggregator here to
//             // first count the UNIQUE values from the rows
//             // being aggregated, then sum those counts if
//             // they are aggregated further
//             aggregate: 'uniqueCount',
//             Aggregated: ({ value }) => `${value} Unique Names`,
//           },
//         ],
//       },
//       {
//         Header: 'Info',
//         columns: [
//           {
//             Header: 'Age',
//             accessor: 'age',
//             Filter: SliderColumnFilter,
//             filter: 'equals',
//             // Aggregate the average age of visitors
//             aggregate: 'average',
//             Aggregated: ({ value }) => `${value} (avg)`,
//           },
//           {
//             Header: 'Visits',
//             accessor: 'visits',
//             Filter: NumberRangeColumnFilter,
//             filter: 'between',
//             // Aggregate the sum of all visits
//             aggregate: 'sum',
//             Aggregated: ({ value }) => `${value} (total)`,
//           },
//           {
//             Header: 'Status',
//             accessor: 'status',
//             Filter: SelectColumnFilter,
//             filter: 'includes',
//           },
//           {
//             Header: 'Profile Progress',
//             accessor: 'progress',
//             Filter: SliderColumnFilter,
//             filter: filterGreaterThan,
//             // Use our custom roundedMedian aggregator
//             aggregate: roundedMedian,
//             Aggregated: ({ value }) => `${value} (med)`,
//           },
//         ],
//       },
//     ],
//     []
//   )
//   const [data, setData] = React.useState(() => makeData(10000))
//   const [originalData] = React.useState(data)
//   // We need to keep the table from resetting the pageIndex when we
//   // Update data. So we can keep track of that flag with a ref.
//   const skipResetRef = React.useRef(false)
//   // When our cell renderer calls updateMyData, we'll use
//   // the rowIndex, columnId and new value to update the
//   // original data
//   const updateMyData = (rowIndex, columnId, value) => {
//     // We also turn on the flag to not reset the page
//     skipResetRef.current = true
//     setData(old =>
//       old.map((row, index) => {
//         if (index === rowIndex) {
//           return {
//             ...row,
//             [columnId]: value,
//           }
//         }
//         return row
//       })
//     )
//   }
//   // After data changes, we turn the flag back off
//   // so that if data actually changes when we're not
//   // editing it, the page is reset
//   React.useEffect(() => {
//     skipResetRef.current = false
//   }, [data])
//   // Let's add a data resetter/randomizer to help
//   // illustrate that flow...
//   const resetData = () => {
//     // Don't reset the page when we do this
//     skipResetRef.current = true
//     setData(originalData)
//   }
//   return (
//     <Styles>
//       <button onClick={resetData}>Reset Data</button>
//       <Table
//         columns={columns}
//         data={data}
//         updateMyData={updateMyData}
//         skipReset={skipResetRef.current}
//       />
//     </Styles>
//   )
// }

var _c;

$RefreshReg$(_c, "CardPlayers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJDYXJkUGxheWVycyIsImxlYWd1ZSIsImRlZmF1bHRQcm9wcyIsImRpdmlzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRWUsU0FBU0EsV0FBVCxDQUFxQjtBQUNsQ0M7QUFEa0MsQ0FBckIsRUFFWjtBQUNELHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsbUZBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsbUNBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsNkJBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsa0RBQWY7QUFBQSxtQ0FDRTtBQUFJLHVCQUFTLEVBQUMsMkNBQWQ7QUFBQSx3QkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFtQkQ7S0F0QnVCRCxXO0FBeUJ4QkEsV0FBVyxDQUFDRSxZQUFaLEdBQTJCO0FBQ3pCRCxRQUFNLEVBQUUsdUJBRGlCO0FBRXpCRSxVQUFRLEVBQUU7QUFGZSxDQUEzQjtBQUtBSCxXQUFXLENBQUNJLFNBQVosR0FBd0I7QUFDdEJILFFBQU0sRUFBRUksMERBQWdCQztBQURGLENBQXhCLEMsQ0FpQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTcxM2ViNmQyOTViOGVjODVjZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZFBsYXllcnMoe1xyXG4gIGxlYWd1ZVxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIGJnLXdoaXRlIHctZnVsbCBtYi02IHNoYWRvdy1sZyByb3VuZGVkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXQgbWItMCBweC00IHB5LTMgYm9yZGVyLTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHB4LTQgbWF4LXctZnVsbCBmbGV4LWdyb3cgZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtYmx1ZUdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICB7bGVhZ3VlfVxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgb3ZlcmZsb3cteC1hdXRvXCI+XHJcbiAgICAgICAgICB7LyogUHJvamVjdHMgdGFibGUgKi99XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5cclxuQ2FyZFBsYXllcnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxlYWd1ZTogXCJNYWpvciBMZWFndWUgQmFzZWJhbGxcIixcclxuICBkaXZpc2lvbjogXCJcIlxyXG59O1xyXG5cclxuQ2FyZFBsYXllcnMucHJvcFR5cGVzID0ge1xyXG4gIGxlYWd1ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IFN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbi8vICAgcGFkZGluZzogMXJlbTtcclxuXHJcbi8vICAgdGFibGUge1xyXG4vLyAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuXHJcbi8vICAgICB0ciB7XHJcbi8vICAgICAgIDpsYXN0LWNoaWxkIHtcclxuLy8gICAgICAgICB0ZCB7XHJcbi8vICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHRoLFxyXG4vLyAgICAgdGQge1xyXG4vLyAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuLy8gICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4vLyAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuXHJcbi8vICAgICAgIDpsYXN0LWNoaWxkIHtcclxuLy8gICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0ZCB7XHJcbi8vICAgICAgIGlucHV0IHtcclxuLy8gICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgICAgICAgcGFkZGluZzogMDtcclxuLy8gICAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgICAgYm9yZGVyOiAwO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuLy8gICAucGFnaW5hdGlvbiB7XHJcbi8vICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbi8vICAgfVxyXG4vLyBgXHJcblxyXG4vLyAvLyBDcmVhdGUgYW4gZWRpdGFibGUgY2VsbCByZW5kZXJlclxyXG4vLyBjb25zdCBFZGl0YWJsZUNlbGwgPSAoe1xyXG4vLyAgIHZhbHVlOiBpbml0aWFsVmFsdWUsXHJcbi8vICAgcm93OiB7IGluZGV4IH0sXHJcbi8vICAgY29sdW1uOiB7IGlkIH0sXHJcbi8vICAgdXBkYXRlTXlEYXRhLCAvLyBUaGlzIGlzIGEgY3VzdG9tIGZ1bmN0aW9uIHRoYXQgd2Ugc3VwcGxpZWQgdG8gb3VyIHRhYmxlIGluc3RhbmNlXHJcbi8vICAgZWRpdGFibGUsXHJcbi8vIH0pID0+IHtcclxuLy8gICAvLyBXZSBuZWVkIHRvIGtlZXAgYW5kIHVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGNlbGwgbm9ybWFsbHlcclxuLy8gICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZSlcclxuXHJcbi8vICAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcclxuLy8gICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4vLyAgIH1cclxuXHJcbi8vICAgLy8gV2UnbGwgb25seSB1cGRhdGUgdGhlIGV4dGVybmFsIGRhdGEgd2hlbiB0aGUgaW5wdXQgaXMgYmx1cnJlZFxyXG4vLyAgIGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcclxuLy8gICAgIHVwZGF0ZU15RGF0YShpbmRleCwgaWQsIHZhbHVlKVxyXG4vLyAgIH1cclxuXHJcbi8vICAgLy8gSWYgdGhlIGluaXRpYWxWYWx1ZSBpcyBjaGFuZ2VkIGV4dGVybmFsbCwgc3luYyBpdCB1cCB3aXRoIG91ciBzdGF0ZVxyXG4vLyAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBzZXRWYWx1ZShpbml0aWFsVmFsdWUpXHJcbi8vICAgfSwgW2luaXRpYWxWYWx1ZV0pXHJcblxyXG4vLyAgIGlmICghZWRpdGFibGUpIHtcclxuLy8gICAgIHJldHVybiBgJHtpbml0aWFsVmFsdWV9YFxyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIDxpbnB1dCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gb25CbHVyPXtvbkJsdXJ9IC8+XHJcbi8vIH1cclxuXHJcbi8vIC8vIERlZmluZSBhIGRlZmF1bHQgVUkgZm9yIGZpbHRlcmluZ1xyXG4vLyBmdW5jdGlvbiBEZWZhdWx0Q29sdW1uRmlsdGVyKHtcclxuLy8gICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHByZUZpbHRlcmVkUm93cywgc2V0RmlsdGVyIH0sXHJcbi8vIH0pIHtcclxuLy8gICBjb25zdCBjb3VudCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGhcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxpbnB1dFxyXG4vLyAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgJyd9XHJcbi8vICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuLy8gICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKSAvLyBTZXQgdW5kZWZpbmVkIHRvIHJlbW92ZSB0aGUgZmlsdGVyIGVudGlyZWx5XHJcbi8vICAgICAgIH19XHJcbi8vICAgICAgIHBsYWNlaG9sZGVyPXtgU2VhcmNoICR7Y291bnR9IHJlY29yZHMuLi5gfVxyXG4vLyAgICAgLz5cclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIC8vIFRoaXMgaXMgYSBjdXN0b20gZmlsdGVyIFVJIGZvciBzZWxlY3RpbmdcclxuLy8gLy8gYSB1bmlxdWUgb3B0aW9uIGZyb20gYSBsaXN0XHJcbi8vIGZ1bmN0aW9uIFNlbGVjdENvbHVtbkZpbHRlcih7XHJcbi8vICAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBzZXRGaWx0ZXIsIHByZUZpbHRlcmVkUm93cywgaWQgfSxcclxuLy8gfSkge1xyXG4vLyAgIC8vIENhbGN1bGF0ZSB0aGUgb3B0aW9ucyBmb3IgZmlsdGVyaW5nXHJcbi8vICAgLy8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xyXG4vLyAgIGNvbnN0IG9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuLy8gICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgU2V0KClcclxuLy8gICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbi8vICAgICAgIG9wdGlvbnMuYWRkKHJvdy52YWx1ZXNbaWRdKVxyXG4vLyAgICAgfSlcclxuLy8gICAgIHJldHVybiBbLi4ub3B0aW9ucy52YWx1ZXMoKV1cclxuLy8gICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4vLyAgIC8vIFJlbmRlciBhIG11bHRpLXNlbGVjdCBib3hcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPHNlbGVjdFxyXG4vLyAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWV9XHJcbi8vICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuLy8gICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKVxyXG4vLyAgICAgICB9fVxyXG4vLyAgICAgPlxyXG4vLyAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XHJcbi8vICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXHJcbi8vICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxyXG4vLyAgICAgICAgICAge29wdGlvbn1cclxuLy8gICAgICAgICA8L29wdGlvbj5cclxuLy8gICAgICAgKSl9XHJcbi8vICAgICA8L3NlbGVjdD5cclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIC8vIFRoaXMgaXMgYSBjdXN0b20gZmlsdGVyIFVJIHRoYXQgdXNlcyBhXHJcbi8vIC8vIHNsaWRlciB0byBzZXQgdGhlIGZpbHRlciB2YWx1ZSBiZXR3ZWVuIGEgY29sdW1uJ3NcclxuLy8gLy8gbWluIGFuZCBtYXggdmFsdWVzXHJcbi8vIGZ1bmN0aW9uIFNsaWRlckNvbHVtbkZpbHRlcih7XHJcbi8vICAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBzZXRGaWx0ZXIsIHByZUZpbHRlcmVkUm93cywgaWQgfSxcclxuLy8gfSkge1xyXG4vLyAgIC8vIENhbGN1bGF0ZSB0aGUgbWluIGFuZCBtYXhcclxuLy8gICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcblxyXG4vLyAgIGNvbnN0IFttaW4sIG1heF0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuLy8gICAgIGxldCBtaW4gPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbi8vICAgICBsZXQgbWF4ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4vLyAgICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuLy8gICAgICAgbWluID0gTWF0aC5taW4ocm93LnZhbHVlc1tpZF0sIG1pbilcclxuLy8gICAgICAgbWF4ID0gTWF0aC5tYXgocm93LnZhbHVlc1tpZF0sIG1heClcclxuLy8gICAgIH0pXHJcbi8vICAgICByZXR1cm4gW21pbiwgbWF4XVxyXG4vLyAgIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDw+XHJcbi8vICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbi8vICAgICAgICAgbWluPXttaW59XHJcbi8vICAgICAgICAgbWF4PXttYXh9XHJcbi8vICAgICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8IG1pbn1cclxuLy8gICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbi8vICAgICAgICAgICBzZXRGaWx0ZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSlcclxuLy8gICAgICAgICB9fVxyXG4vLyAgICAgICAvPlxyXG4vLyAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcih1bmRlZmluZWQpfT5PZmY8L2J1dHRvbj5cclxuLy8gICAgIDwvPlxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuLy8gLy8gVGhpcyBpcyBhIGN1c3RvbSBVSSBmb3Igb3VyICdiZXR3ZWVuJyBvciBudW1iZXIgcmFuZ2VcclxuLy8gLy8gZmlsdGVyLiBJdCB1c2VzIHR3byBudW1iZXIgYm94ZXMgYW5kIGZpbHRlcnMgcm93cyB0b1xyXG4vLyAvLyBvbmVzIHRoYXQgaGF2ZSB2YWx1ZXMgYmV0d2VlbiB0aGUgdHdvXHJcbi8vIGZ1bmN0aW9uIE51bWJlclJhbmdlQ29sdW1uRmlsdGVyKHtcclxuLy8gICBjb2x1bW46IHsgZmlsdGVyVmFsdWUgPSBbXSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIsIGlkIH0sXHJcbi8vIH0pIHtcclxuLy8gICBjb25zdCBbbWluLCBtYXhdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbi8vICAgICBsZXQgbWluID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4vLyAgICAgbGV0IG1heCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuLy8gICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbi8vICAgICAgIG1pbiA9IE1hdGgubWluKHJvdy52YWx1ZXNbaWRdLCBtaW4pXHJcbi8vICAgICAgIG1heCA9IE1hdGgubWF4KHJvdy52YWx1ZXNbaWRdLCBtYXgpXHJcbi8vICAgICB9KVxyXG4vLyAgICAgcmV0dXJuIFttaW4sIG1heF1cclxuLy8gICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2XHJcbi8vICAgICAgIHN0eWxlPXt7XHJcbi8vICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4vLyAgICAgICB9fVxyXG4vLyAgICAgPlxyXG4vLyAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWVbMF0gfHwgJyd9XHJcbi8vICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbi8vICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4vLyAgICAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWVcclxuLy8gICAgICAgICAgIHNldEZpbHRlcigob2xkID0gW10pID0+IFt2YWwgPyBwYXJzZUludCh2YWwsIDEwKSA6IHVuZGVmaW5lZCwgb2xkWzFdXSlcclxuLy8gICAgICAgICB9fVxyXG4vLyAgICAgICAgIHBsYWNlaG9sZGVyPXtgTWluICgke21pbn0pYH1cclxuLy8gICAgICAgICBzdHlsZT17e1xyXG4vLyAgICAgICAgICAgd2lkdGg6ICc3MHB4JyxcclxuLy8gICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMC41cmVtJyxcclxuLy8gICAgICAgICB9fVxyXG4vLyAgICAgICAvPlxyXG4vLyAgICAgICB0b1xyXG4vLyAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWVbMV0gfHwgJyd9XHJcbi8vICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbi8vICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4vLyAgICAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWVcclxuLy8gICAgICAgICAgIHNldEZpbHRlcigob2xkID0gW10pID0+IFtvbGRbMF0sIHZhbCA/IHBhcnNlSW50KHZhbCwgMTApIDogdW5kZWZpbmVkXSlcclxuLy8gICAgICAgICB9fVxyXG4vLyAgICAgICAgIHBsYWNlaG9sZGVyPXtgTWF4ICgke21heH0pYH1cclxuLy8gICAgICAgICBzdHlsZT17e1xyXG4vLyAgICAgICAgICAgd2lkdGg6ICc3MHB4JyxcclxuLy8gICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwLjVyZW0nLFxyXG4vLyAgICAgICAgIH19XHJcbi8vICAgICAgIC8+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGZ1enp5VGV4dEZpbHRlckZuKHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSkge1xyXG4vLyAgIHJldHVybiBtYXRjaFNvcnRlcihyb3dzLCBmaWx0ZXJWYWx1ZSwgeyBrZXlzOiBbcm93ID0+IHJvdy52YWx1ZXNbaWRdXSB9KVxyXG4vLyB9XHJcblxyXG4vLyAvLyBMZXQgdGhlIHRhYmxlIHJlbW92ZSB0aGUgZmlsdGVyIGlmIHRoZSBzdHJpbmcgaXMgZW1wdHlcclxuLy8gZnV6enlUZXh0RmlsdGVyRm4uYXV0b1JlbW92ZSA9IHZhbCA9PiAhdmFsXHJcblxyXG4vLyAvLyBCZSBzdXJlIHRvIHBhc3Mgb3VyIHVwZGF0ZU15RGF0YSBhbmQgdGhlIHNraXBSZXNldCBvcHRpb25cclxuLy8gZnVuY3Rpb24gVGFibGUoeyBjb2x1bW5zLCBkYXRhLCB1cGRhdGVNeURhdGEsIHNraXBSZXNldCB9KSB7XHJcbi8vICAgY29uc3QgZmlsdGVyVHlwZXMgPSBSZWFjdC51c2VNZW1vKFxyXG4vLyAgICAgKCkgPT4gKHtcclxuLy8gICAgICAgLy8gQWRkIGEgbmV3IGZ1enp5VGV4dEZpbHRlckZuIGZpbHRlciB0eXBlLlxyXG4vLyAgICAgICBmdXp6eVRleHQ6IGZ1enp5VGV4dEZpbHRlckZuLFxyXG4vLyAgICAgICAvLyBPciwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGV4dCBmaWx0ZXIgdG8gdXNlXHJcbi8vICAgICAgIC8vIFwic3RhcnRXaXRoXCJcclxuLy8gICAgICAgdGV4dDogKHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSkgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiByb3dzLmZpbHRlcihyb3cgPT4ge1xyXG4vLyAgICAgICAgICAgY29uc3Qgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXVxyXG4vLyAgICAgICAgICAgcmV0dXJuIHJvd1ZhbHVlICE9PSB1bmRlZmluZWRcclxuLy8gICAgICAgICAgICAgPyBTdHJpbmcocm93VmFsdWUpXHJcbi8vICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4vLyAgICAgICAgICAgICAgICAgLnN0YXJ0c1dpdGgoU3RyaW5nKGZpbHRlclZhbHVlKS50b0xvd2VyQ2FzZSgpKVxyXG4vLyAgICAgICAgICAgICA6IHRydWVcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgfSksXHJcbi8vICAgICBbXVxyXG4vLyAgIClcclxuXHJcbi8vICAgY29uc3QgZGVmYXVsdENvbHVtbiA9IFJlYWN0LnVzZU1lbW8oXHJcbi8vICAgICAoKSA9PiAoe1xyXG4vLyAgICAgICAvLyBMZXQncyBzZXQgdXAgb3VyIGRlZmF1bHQgRmlsdGVyIFVJXHJcbi8vICAgICAgIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuLy8gICAgICAgLy8gQW5kIGFsc28gb3VyIGRlZmF1bHQgZWRpdGFibGUgY2VsbFxyXG4vLyAgICAgICBDZWxsOiBFZGl0YWJsZUNlbGwsXHJcbi8vICAgICB9KSxcclxuLy8gICAgIFtdXHJcbi8vICAgKVxyXG5cclxuLy8gICAvLyBVc2UgdGhlIHN0YXRlIGFuZCBmdW5jdGlvbnMgcmV0dXJuZWQgZnJvbSB1c2VUYWJsZSB0byBidWlsZCB5b3VyIFVJXHJcbi8vICAgY29uc3Qge1xyXG4vLyAgICAgZ2V0VGFibGVQcm9wcyxcclxuLy8gICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4vLyAgICAgaGVhZGVyR3JvdXBzLFxyXG4vLyAgICAgcHJlcGFyZVJvdyxcclxuLy8gICAgIHBhZ2UsIC8vIEluc3RlYWQgb2YgdXNpbmcgJ3Jvd3MnLCB3ZSdsbCB1c2UgcGFnZSxcclxuLy8gICAgIC8vIHdoaWNoIGhhcyBvbmx5IHRoZSByb3dzIGZvciB0aGUgYWN0aXZlIHBhZ2VcclxuXHJcbi8vICAgICAvLyBUaGUgcmVzdCBvZiB0aGVzZSB0aGluZ3MgYXJlIHN1cGVyIGhhbmR5LCB0b28gOylcclxuLy8gICAgIGNhblByZXZpb3VzUGFnZSxcclxuLy8gICAgIGNhbk5leHRQYWdlLFxyXG4vLyAgICAgcGFnZU9wdGlvbnMsXHJcbi8vICAgICBwYWdlQ291bnQsXHJcbi8vICAgICBnb3RvUGFnZSxcclxuLy8gICAgIG5leHRQYWdlLFxyXG4vLyAgICAgcHJldmlvdXNQYWdlLFxyXG4vLyAgICAgc2V0UGFnZVNpemUsXHJcbi8vICAgICBzdGF0ZToge1xyXG4vLyAgICAgICBwYWdlSW5kZXgsXHJcbi8vICAgICAgIHBhZ2VTaXplLFxyXG4vLyAgICAgICBzb3J0QnksXHJcbi8vICAgICAgIGdyb3VwQnksXHJcbi8vICAgICAgIGV4cGFuZGVkLFxyXG4vLyAgICAgICBmaWx0ZXJzLFxyXG4vLyAgICAgICBzZWxlY3RlZFJvd0lkcyxcclxuLy8gICAgIH0sXHJcbi8vICAgfSA9IHVzZVRhYmxlKFxyXG4vLyAgICAge1xyXG4vLyAgICAgICBjb2x1bW5zLFxyXG4vLyAgICAgICBkYXRhLFxyXG4vLyAgICAgICBkZWZhdWx0Q29sdW1uLFxyXG4vLyAgICAgICBmaWx0ZXJUeXBlcyxcclxuLy8gICAgICAgLy8gdXBkYXRlTXlEYXRhIGlzbid0IHBhcnQgb2YgdGhlIEFQSSwgYnV0XHJcbi8vICAgICAgIC8vIGFueXRoaW5nIHdlIHB1dCBpbnRvIHRoZXNlIG9wdGlvbnMgd2lsbFxyXG4vLyAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGJlIGF2YWlsYWJsZSBvbiB0aGUgaW5zdGFuY2UuXHJcbi8vICAgICAgIC8vIFRoYXQgd2F5IHdlIGNhbiBjYWxsIHRoaXMgZnVuY3Rpb24gZnJvbSBvdXJcclxuLy8gICAgICAgLy8gY2VsbCByZW5kZXJlciFcclxuLy8gICAgICAgdXBkYXRlTXlEYXRhLFxyXG4vLyAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gcGFzcyB0aGlzIHNvIHRoZSBwYWdlIGRvZXNuJ3QgY2hhbmdlXHJcbi8vICAgICAgIC8vIHdoZW4gd2UgZWRpdCB0aGUgZGF0YS5cclxuLy8gICAgICAgYXV0b1Jlc2V0UGFnZTogIXNraXBSZXNldCxcclxuLy8gICAgICAgYXV0b1Jlc2V0U2VsZWN0ZWRSb3dzOiAhc2tpcFJlc2V0LFxyXG4vLyAgICAgICBkaXNhYmxlTXVsdGlTb3J0OiB0cnVlLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHVzZUZpbHRlcnMsXHJcbi8vICAgICB1c2VHcm91cEJ5LFxyXG4vLyAgICAgdXNlU29ydEJ5LFxyXG4vLyAgICAgdXNlRXhwYW5kZWQsXHJcbi8vICAgICB1c2VQYWdpbmF0aW9uLFxyXG4vLyAgICAgdXNlUm93U2VsZWN0LFxyXG4vLyAgICAgLy8gSGVyZSB3ZSB3aWxsIHVzZSBhIHBsdWdpbiB0byBhZGQgb3VyIHNlbGVjdGlvbiBjb2x1bW5cclxuLy8gICAgIGhvb2tzID0+IHtcclxuLy8gICAgICAgaG9va3MudmlzaWJsZUNvbHVtbnMucHVzaChjb2x1bW5zID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gW1xyXG4vLyAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBpZDogJ3NlbGVjdGlvbicsXHJcbi8vICAgICAgICAgICAgIC8vIE1ha2UgdGhpcyBjb2x1bW4gYSBncm91cEJ5Qm91bmRhcnkuIFRoaXMgZW5zdXJlcyB0aGF0IGdyb3VwQnkgY29sdW1uc1xyXG4vLyAgICAgICAgICAgICAvLyBhcmUgcGxhY2VkIGFmdGVyIGl0XHJcbi8vICAgICAgICAgICAgIGdyb3VwQnlCb3VuZGFyeTogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgLy8gVGhlIGhlYWRlciBjYW4gdXNlIHRoZSB0YWJsZSdzIGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIG1ldGhvZFxyXG4vLyAgICAgICAgICAgICAvLyB0byByZW5kZXIgYSBjaGVja2JveFxyXG4vLyAgICAgICAgICAgICBIZWFkZXI6ICh7IGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIH0pID0+IChcclxuLy8gICAgICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgPEluZGV0ZXJtaW5hdGVDaGVja2JveCB7Li4uZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMoKX0gLz5cclxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgKSxcclxuLy8gICAgICAgICAgICAgLy8gVGhlIGNlbGwgY2FuIHVzZSB0aGUgaW5kaXZpZHVhbCByb3cncyBnZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzIG1ldGhvZFxyXG4vLyAgICAgICAgICAgICAvLyB0byB0aGUgcmVuZGVyIGEgY2hlY2tib3hcclxuLy8gICAgICAgICAgICAgQ2VsbDogKHsgcm93IH0pID0+IChcclxuLy8gICAgICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgPEluZGV0ZXJtaW5hdGVDaGVja2JveCB7Li4ucm93LmdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMoKX0gLz5cclxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgKSxcclxuLy8gICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAuLi5jb2x1bW5zLFxyXG4vLyAgICAgICAgIF1cclxuLy8gICAgICAgfSlcclxuLy8gICAgIH1cclxuLy8gICApXHJcblxyXG4vLyAgIC8vIFJlbmRlciB0aGUgVUkgZm9yIHlvdXIgdGFibGVcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPD5cclxuLy8gICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxyXG4vLyAgICAgICAgIDx0aGVhZD5cclxuLy8gICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKGhlYWRlckdyb3VwID0+IChcclxuLy8gICAgICAgICAgICAgPHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxyXG4vLyAgICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxyXG4vLyAgICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5jYW5Hcm91cEJ5ID8gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbHVtbiBjYW4gYmUgZ3JvdXBlZCwgbGV0J3MgYWRkIGEgdG9nZ2xlXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldEdyb3VwQnlUb2dnbGVQcm9wcygpfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc0dyb3VwZWQgPyAn8J+bkSAnIDogJ/CfkYogJ31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuLy8gICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCl9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgey8qIEFkZCBhIHNvcnQgZGlyZWN0aW9uIGluZGljYXRvciAqL31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNTb3J0ZWRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uaXNTb3J0ZWREZXNjXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIPCflL0nXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnIPCflLwnXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgey8qIFJlbmRlciB0aGUgY29sdW1ucyBmaWx0ZXIgVUkgKi99XHJcbi8vICAgICAgICAgICAgICAgICAgIDxkaXY+e2NvbHVtbi5jYW5GaWx0ZXIgPyBjb2x1bW4ucmVuZGVyKCdGaWx0ZXInKSA6IG51bGx9PC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICA8L3RoPlxyXG4vLyAgICAgICAgICAgICAgICkpfVxyXG4vLyAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgKSl9XHJcbi8vICAgICAgICAgPC90aGVhZD5cclxuLy8gICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4vLyAgICAgICAgICAge3BhZ2UubWFwKHJvdyA9PiB7XHJcbi8vICAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxyXG4vLyAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxyXG4vLyAgICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLmlzR3JvdXBlZCA/IChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIGdyb3VwZWQgY2VsbCwgYWRkIGFuIGV4cGFuZGVyIGFuZCByb3cgY291bnRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4ucm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMoKX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyAn8J+RhycgOiAn8J+RiSd9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPnsnICd9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGwucmVuZGVyKCdDZWxsJywgeyBlZGl0YWJsZTogZmFsc2UgfSl9IChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnN1YlJvd3MubGVuZ3RofSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc0FnZ3JlZ2F0ZWQgPyAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjZWxsIGlzIGFnZ3JlZ2F0ZWQsIHVzZSB0aGUgQWdncmVnYXRlZFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJlciBmb3IgY2VsbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQWdncmVnYXRlZCcpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc1BsYWNlaG9sZGVyID8gbnVsbCA6ICggLy8gRm9yIGNlbGxzIHdpdGggcmVwZWF0ZWQgdmFsdWVzLCByZW5kZXIgbnVsbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGp1c3QgcmVuZGVyIHRoZSByZWd1bGFyIGNlbGxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0NlbGwnLCB7IGVkaXRhYmxlOiB0cnVlIH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgIClcclxuLy8gICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICAgIClcclxuLy8gICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgIDwvdGJvZHk+XHJcbi8vICAgICAgIDwvdGFibGU+XHJcbi8vICAgICAgIHsvKlxyXG4vLyAgICAgICAgIFBhZ2luYXRpb24gY2FuIGJlIGJ1aWx0IGhvd2V2ZXIgeW91J2QgbGlrZS5cclxuLy8gICAgICAgICBUaGlzIGlzIGp1c3QgYSB2ZXJ5IGJhc2ljIFVJIGltcGxlbWVudGF0aW9uOlxyXG4vLyAgICAgICAqL31cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZSgwKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4vLyAgICAgICAgICAgeyc8PCd9XHJcbi8vICAgICAgICAgPC9idXR0b24+eycgJ31cclxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbi8vICAgICAgICAgICB7JzwnfVxyXG4vLyAgICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuLy8gICAgICAgICAgIHsnPid9XHJcbi8vICAgICAgICAgPC9idXR0b24+eycgJ31cclxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKHBhZ2VDb3VudCAtIDEpfSBkaXNhYmxlZD17IWNhbk5leHRQYWdlfT5cclxuLy8gICAgICAgICAgIHsnPj4nfVxyXG4vLyAgICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbi8vICAgICAgICAgPHNwYW4+XHJcbi8vICAgICAgICAgICBQYWdleycgJ31cclxuLy8gICAgICAgICAgIDxzdHJvbmc+XHJcbi8vICAgICAgICAgICAgIHtwYWdlSW5kZXggKyAxfSBvZiB7cGFnZU9wdGlvbnMubGVuZ3RofVxyXG4vLyAgICAgICAgICAgPC9zdHJvbmc+eycgJ31cclxuLy8gICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgPHNwYW4+XHJcbi8vICAgICAgICAgICB8IEdvIHRvIHBhZ2U6eycgJ31cclxuLy8gICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuLy8gICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwYWdlSW5kZXggKyAxfVxyXG4vLyAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGUudGFyZ2V0LnZhbHVlID8gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAtIDEgOiAwXHJcbi8vICAgICAgICAgICAgICAgZ290b1BhZ2UocGFnZSlcclxuLy8gICAgICAgICAgICAgfX1cclxuLy8gICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcgfX1cclxuLy8gICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgPC9zcGFuPnsnICd9XHJcbi8vICAgICAgICAgPHNlbGVjdFxyXG4vLyAgICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4vLyAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4vLyAgICAgICAgICAgICBzZXRQYWdlU2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKVxyXG4vLyAgICAgICAgICAgfX1cclxuLy8gICAgICAgICA+XHJcbi8vICAgICAgICAgICB7WzEwLCAyMCwgMzAsIDQwLCA1MF0ubWFwKHBhZ2VTaXplID0+IChcclxuLy8gICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhZ2VTaXplfSB2YWx1ZT17cGFnZVNpemV9PlxyXG4vLyAgICAgICAgICAgICAgIFNob3cge3BhZ2VTaXplfVxyXG4vLyAgICAgICAgICAgICA8L29wdGlvbj5cclxuLy8gICAgICAgICAgICkpfVxyXG4vLyAgICAgICAgIDwvc2VsZWN0PlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgPHByZT5cclxuLy8gICAgICAgICA8Y29kZT5cclxuLy8gICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShcclxuLy8gICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgIHBhZ2VJbmRleCxcclxuLy8gICAgICAgICAgICAgICBwYWdlU2l6ZSxcclxuLy8gICAgICAgICAgICAgICBwYWdlQ291bnQsXHJcbi8vICAgICAgICAgICAgICAgY2FuTmV4dFBhZ2UsXHJcbi8vICAgICAgICAgICAgICAgY2FuUHJldmlvdXNQYWdlLFxyXG4vLyAgICAgICAgICAgICAgIHNvcnRCeSxcclxuLy8gICAgICAgICAgICAgICBncm91cEJ5LFxyXG4vLyAgICAgICAgICAgICAgIGV4cGFuZGVkOiBleHBhbmRlZCxcclxuLy8gICAgICAgICAgICAgICBmaWx0ZXJzLFxyXG4vLyAgICAgICAgICAgICAgIHNlbGVjdGVkUm93SWRzOiBzZWxlY3RlZFJvd0lkcyxcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgbnVsbCxcclxuLy8gICAgICAgICAgICAgMlxyXG4vLyAgICAgICAgICAgKX1cclxuLy8gICAgICAgICA8L2NvZGU+XHJcbi8vICAgICAgIDwvcHJlPlxyXG4vLyAgICAgPC8+XHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG4vLyAvLyBEZWZpbmUgYSBjdXN0b20gZmlsdGVyIGZpbHRlciBmdW5jdGlvbiFcclxuLy8gZnVuY3Rpb24gZmlsdGVyR3JlYXRlclRoYW4ocm93cywgaWQsIGZpbHRlclZhbHVlKSB7XHJcbi8vICAgcmV0dXJuIHJvd3MuZmlsdGVyKHJvdyA9PiB7XHJcbi8vICAgICBjb25zdCByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdXHJcbi8vICAgICByZXR1cm4gcm93VmFsdWUgPj0gZmlsdGVyVmFsdWVcclxuLy8gICB9KVxyXG4vLyB9XHJcblxyXG4vLyAvLyBUaGlzIGlzIGFuIGF1dG9SZW1vdmUgbWV0aG9kIG9uIHRoZSBmaWx0ZXIgZnVuY3Rpb24gdGhhdFxyXG4vLyAvLyB3aGVuIGdpdmVuIHRoZSBuZXcgZmlsdGVyIHZhbHVlIGFuZCByZXR1cm5zIHRydWUsIHRoZSBmaWx0ZXJcclxuLy8gLy8gd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuIE5vcm1hbGx5IHRoaXMgaXMganVzdCBhbiB1bmRlZmluZWRcclxuLy8gLy8gY2hlY2ssIGJ1dCBoZXJlLCB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgZmlsdGVyIGlmIGl0J3Mgbm90IGEgbnVtYmVyXHJcbi8vIGZpbHRlckdyZWF0ZXJUaGFuLmF1dG9SZW1vdmUgPSB2YWwgPT4gdHlwZW9mIHZhbCAhPT0gJ251bWJlcidcclxuXHJcbi8vIC8vIFRoaXMgaXMgYSBjdXN0b20gYWdncmVnYXRvciB0aGF0XHJcbi8vIC8vIHRha2VzIGluIGFuIGFycmF5IG9mIGxlYWYgdmFsdWVzIGFuZFxyXG4vLyAvLyByZXR1cm5zIHRoZSByb3VuZGVkIG1lZGlhblxyXG4vLyBmdW5jdGlvbiByb3VuZGVkTWVkaWFuKGxlYWZWYWx1ZXMpIHtcclxuLy8gICBsZXQgbWluID0gbGVhZlZhbHVlc1swXSB8fCAwXHJcbi8vICAgbGV0IG1heCA9IGxlYWZWYWx1ZXNbMF0gfHwgMFxyXG5cclxuLy8gICBsZWFmVmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xyXG4vLyAgICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZSlcclxuLy8gICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUpXHJcbi8vICAgfSlcclxuXHJcbi8vICAgcmV0dXJuIE1hdGgucm91bmQoKG1pbiArIG1heCkgLyAyKVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBJbmRldGVybWluYXRlQ2hlY2tib3ggPSBSZWFjdC5mb3J3YXJkUmVmKFxyXG4vLyAgICh7IGluZGV0ZXJtaW5hdGUsIC4uLnJlc3QgfSwgcmVmKSA9PiB7XHJcbi8vICAgICBjb25zdCBkZWZhdWx0UmVmID0gUmVhY3QudXNlUmVmKClcclxuLy8gICAgIGNvbnN0IHJlc29sdmVkUmVmID0gcmVmIHx8IGRlZmF1bHRSZWZcclxuXHJcbi8vICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICByZXNvbHZlZFJlZi5jdXJyZW50LmluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlXHJcbi8vICAgICB9LCBbcmVzb2x2ZWRSZWYsIGluZGV0ZXJtaW5hdGVdKVxyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgIDw+XHJcbi8vICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHJlZj17cmVzb2x2ZWRSZWZ9IHsuLi5yZXN0fSAvPlxyXG4vLyAgICAgICA8Lz5cclxuLy8gICAgIClcclxuLy8gICB9XHJcbi8vIClcclxuXHJcbi8vIGZ1bmN0aW9uIEFwcCgpIHtcclxuLy8gICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcclxuLy8gICAgICgpID0+IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIEhlYWRlcjogJ05hbWUnLFxyXG4vLyAgICAgICAgIGNvbHVtbnM6IFtcclxuLy8gICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgSGVhZGVyOiAnRmlyc3QgTmFtZScsXHJcbi8vICAgICAgICAgICAgIGFjY2Vzc29yOiAnZmlyc3ROYW1lJyxcclxuLy8gICAgICAgICAgICAgLy8gVXNlIGEgdHdvLXN0YWdlIGFnZ3JlZ2F0b3IgaGVyZSB0byBmaXJzdFxyXG4vLyAgICAgICAgICAgICAvLyBjb3VudCB0aGUgdG90YWwgcm93cyBiZWluZyBhZ2dyZWdhdGVkLFxyXG4vLyAgICAgICAgICAgICAvLyB0aGVuIHN1bSBhbnkgb2YgdGhvc2UgY291bnRzIGlmIHRoZXkgYXJlXHJcbi8vICAgICAgICAgICAgIC8vIGFnZ3JlZ2F0ZWQgZnVydGhlclxyXG4vLyAgICAgICAgICAgICBhZ2dyZWdhdGU6ICdjb3VudCcsXHJcbi8vICAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBOYW1lc2AsXHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBIZWFkZXI6ICdMYXN0IE5hbWUnLFxyXG4vLyAgICAgICAgICAgICBhY2Nlc3NvcjogJ2xhc3ROYW1lJyxcclxuLy8gICAgICAgICAgICAgLy8gVXNlIG91ciBjdXN0b20gYGZ1enp5VGV4dGAgZmlsdGVyIG9uIHRoaXMgY29sdW1uXHJcbi8vICAgICAgICAgICAgIGZpbHRlcjogJ2Z1enp5VGV4dCcsXHJcbi8vICAgICAgICAgICAgIC8vIFVzZSBhbm90aGVyIHR3by1zdGFnZSBhZ2dyZWdhdG9yIGhlcmUgdG9cclxuLy8gICAgICAgICAgICAgLy8gZmlyc3QgY291bnQgdGhlIFVOSVFVRSB2YWx1ZXMgZnJvbSB0aGUgcm93c1xyXG4vLyAgICAgICAgICAgICAvLyBiZWluZyBhZ2dyZWdhdGVkLCB0aGVuIHN1bSB0aG9zZSBjb3VudHMgaWZcclxuLy8gICAgICAgICAgICAgLy8gdGhleSBhcmUgYWdncmVnYXRlZCBmdXJ0aGVyXHJcbi8vICAgICAgICAgICAgIGFnZ3JlZ2F0ZTogJ3VuaXF1ZUNvdW50JyxcclxuLy8gICAgICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IFVuaXF1ZSBOYW1lc2AsXHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBIZWFkZXI6ICdJbmZvJyxcclxuLy8gICAgICAgICBjb2x1bW5zOiBbXHJcbi8vICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIEhlYWRlcjogJ0FnZScsXHJcbi8vICAgICAgICAgICAgIGFjY2Vzc29yOiAnYWdlJyxcclxuLy8gICAgICAgICAgICAgRmlsdGVyOiBTbGlkZXJDb2x1bW5GaWx0ZXIsXHJcbi8vICAgICAgICAgICAgIGZpbHRlcjogJ2VxdWFscycsXHJcbi8vICAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSB0aGUgYXZlcmFnZSBhZ2Ugb2YgdmlzaXRvcnNcclxuLy8gICAgICAgICAgICAgYWdncmVnYXRlOiAnYXZlcmFnZScsXHJcbi8vICAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSAoYXZnKWAsXHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBIZWFkZXI6ICdWaXNpdHMnLFxyXG4vLyAgICAgICAgICAgICBhY2Nlc3NvcjogJ3Zpc2l0cycsXHJcbi8vICAgICAgICAgICAgIEZpbHRlcjogTnVtYmVyUmFuZ2VDb2x1bW5GaWx0ZXIsXHJcbi8vICAgICAgICAgICAgIGZpbHRlcjogJ2JldHdlZW4nLFxyXG4vLyAgICAgICAgICAgICAvLyBBZ2dyZWdhdGUgdGhlIHN1bSBvZiBhbGwgdmlzaXRzXHJcbi8vICAgICAgICAgICAgIGFnZ3JlZ2F0ZTogJ3N1bScsXHJcbi8vICAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSAodG90YWwpYCxcclxuLy8gICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIEhlYWRlcjogJ1N0YXR1cycsXHJcbi8vICAgICAgICAgICAgIGFjY2Vzc29yOiAnc3RhdHVzJyxcclxuLy8gICAgICAgICAgICAgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXHJcbi8vICAgICAgICAgICAgIGZpbHRlcjogJ2luY2x1ZGVzJyxcclxuLy8gICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIEhlYWRlcjogJ1Byb2ZpbGUgUHJvZ3Jlc3MnLFxyXG4vLyAgICAgICAgICAgICBhY2Nlc3NvcjogJ3Byb2dyZXNzJyxcclxuLy8gICAgICAgICAgICAgRmlsdGVyOiBTbGlkZXJDb2x1bW5GaWx0ZXIsXHJcbi8vICAgICAgICAgICAgIGZpbHRlcjogZmlsdGVyR3JlYXRlclRoYW4sXHJcbi8vICAgICAgICAgICAgIC8vIFVzZSBvdXIgY3VzdG9tIHJvdW5kZWRNZWRpYW4gYWdncmVnYXRvclxyXG4vLyAgICAgICAgICAgICBhZ2dyZWdhdGU6IHJvdW5kZWRNZWRpYW4sXHJcbi8vICAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSAobWVkKWAsXHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgICAgW11cclxuLy8gICApXHJcblxyXG4vLyAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IG1ha2VEYXRhKDEwMDAwKSlcclxuLy8gICBjb25zdCBbb3JpZ2luYWxEYXRhXSA9IFJlYWN0LnVzZVN0YXRlKGRhdGEpXHJcblxyXG4vLyAgIC8vIFdlIG5lZWQgdG8ga2VlcCB0aGUgdGFibGUgZnJvbSByZXNldHRpbmcgdGhlIHBhZ2VJbmRleCB3aGVuIHdlXHJcbi8vICAgLy8gVXBkYXRlIGRhdGEuIFNvIHdlIGNhbiBrZWVwIHRyYWNrIG9mIHRoYXQgZmxhZyB3aXRoIGEgcmVmLlxyXG4vLyAgIGNvbnN0IHNraXBSZXNldFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSlcclxuXHJcbi8vICAgLy8gV2hlbiBvdXIgY2VsbCByZW5kZXJlciBjYWxscyB1cGRhdGVNeURhdGEsIHdlJ2xsIHVzZVxyXG4vLyAgIC8vIHRoZSByb3dJbmRleCwgY29sdW1uSWQgYW5kIG5ldyB2YWx1ZSB0byB1cGRhdGUgdGhlXHJcbi8vICAgLy8gb3JpZ2luYWwgZGF0YVxyXG4vLyAgIGNvbnN0IHVwZGF0ZU15RGF0YSA9IChyb3dJbmRleCwgY29sdW1uSWQsIHZhbHVlKSA9PiB7XHJcbi8vICAgICAvLyBXZSBhbHNvIHR1cm4gb24gdGhlIGZsYWcgdG8gbm90IHJlc2V0IHRoZSBwYWdlXHJcbi8vICAgICBza2lwUmVzZXRSZWYuY3VycmVudCA9IHRydWVcclxuLy8gICAgIHNldERhdGEob2xkID0+XHJcbi8vICAgICAgIG9sZC5tYXAoKHJvdywgaW5kZXgpID0+IHtcclxuLy8gICAgICAgICBpZiAoaW5kZXggPT09IHJvd0luZGV4KSB7XHJcbi8vICAgICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICAuLi5yb3csXHJcbi8vICAgICAgICAgICAgIFtjb2x1bW5JZF06IHZhbHVlLFxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICByZXR1cm4gcm93XHJcbi8vICAgICAgIH0pXHJcbi8vICAgICApXHJcbi8vICAgfVxyXG5cclxuLy8gICAvLyBBZnRlciBkYXRhIGNoYW5nZXMsIHdlIHR1cm4gdGhlIGZsYWcgYmFjayBvZmZcclxuLy8gICAvLyBzbyB0aGF0IGlmIGRhdGEgYWN0dWFsbHkgY2hhbmdlcyB3aGVuIHdlJ3JlIG5vdFxyXG4vLyAgIC8vIGVkaXRpbmcgaXQsIHRoZSBwYWdlIGlzIHJlc2V0XHJcbi8vICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIHNraXBSZXNldFJlZi5jdXJyZW50ID0gZmFsc2VcclxuLy8gICB9LCBbZGF0YV0pXHJcblxyXG4vLyAgIC8vIExldCdzIGFkZCBhIGRhdGEgcmVzZXR0ZXIvcmFuZG9taXplciB0byBoZWxwXHJcbi8vICAgLy8gaWxsdXN0cmF0ZSB0aGF0IGZsb3cuLi5cclxuLy8gICBjb25zdCByZXNldERhdGEgPSAoKSA9PiB7XHJcbi8vICAgICAvLyBEb24ndCByZXNldCB0aGUgcGFnZSB3aGVuIHdlIGRvIHRoaXNcclxuLy8gICAgIHNraXBSZXNldFJlZi5jdXJyZW50ID0gdHJ1ZVxyXG4vLyAgICAgc2V0RGF0YShvcmlnaW5hbERhdGEpXHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPFN0eWxlcz5cclxuLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldERhdGF9PlJlc2V0IERhdGE8L2J1dHRvbj5cclxuLy8gICAgICAgPFRhYmxlXHJcbi8vICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuLy8gICAgICAgICBkYXRhPXtkYXRhfVxyXG4vLyAgICAgICAgIHVwZGF0ZU15RGF0YT17dXBkYXRlTXlEYXRhfVxyXG4vLyAgICAgICAgIHNraXBSZXNldD17c2tpcFJlc2V0UmVmLmN1cnJlbnR9XHJcbi8vICAgICAgIC8+XHJcbi8vICAgICA8L1N0eWxlcz5cclxuLy8gICApXHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==