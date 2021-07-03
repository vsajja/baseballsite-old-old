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
}; // import styled from 'styled-components'
// import {
//   useTable,
//   usePagination,
//   useSortBy,
//   useFilters,
//   useGroupBy,
//   useExpanded,
//   useRowSelect,
// } from 'react-table'
// import matchSorter from 'match-sorter'
// import makeData from './makeData'
// const Styles = styled.div`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJDYXJkUGxheWVycyIsImxlYWd1ZSIsImRlZmF1bHRQcm9wcyIsImRpdmlzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRWUsU0FBU0EsV0FBVCxDQUFxQjtBQUNsQ0M7QUFEa0MsQ0FBckIsRUFFWjtBQUNELHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsbUZBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsbUNBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsNkJBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsa0RBQWY7QUFBQSxtQ0FDRTtBQUFJLHVCQUFTLEVBQUMsMkNBQWQ7QUFBQSx3QkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFtQkQ7S0F0QnVCRCxXO0FBeUJ4QkEsV0FBVyxDQUFDRSxZQUFaLEdBQTJCO0FBQ3pCRCxRQUFNLEVBQUUsdUJBRGlCO0FBRXpCRSxVQUFRLEVBQUU7QUFGZSxDQUEzQjtBQUtBSCxXQUFXLENBQUNJLFNBQVosR0FBd0I7QUFDdEJILFFBQU0sRUFBRUksMERBQWdCQztBQURGLENBQXhCLEMsQ0FnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjVhMTIzYjVhZGE1NDkwYmIyZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZFBsYXllcnMoe1xyXG4gIGxlYWd1ZVxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIGJnLXdoaXRlIHctZnVsbCBtYi02IHNoYWRvdy1sZyByb3VuZGVkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXQgbWItMCBweC00IHB5LTMgYm9yZGVyLTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHB4LTQgbWF4LXctZnVsbCBmbGV4LWdyb3cgZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlIHRleHQtYmx1ZUdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICB7bGVhZ3VlfVxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgb3ZlcmZsb3cteC1hdXRvXCI+XHJcbiAgICAgICAgICB7LyogUHJvamVjdHMgdGFibGUgKi99XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5cclxuQ2FyZFBsYXllcnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxlYWd1ZTogXCJNYWpvciBMZWFndWUgQmFzZWJhbGxcIixcclxuICBkaXZpc2lvbjogXCJcIlxyXG59O1xyXG5cclxuQ2FyZFBsYXllcnMucHJvcFR5cGVzID0ge1xyXG4gIGxlYWd1ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuLy8gaW1wb3J0IHtcclxuLy8gICB1c2VUYWJsZSxcclxuLy8gICB1c2VQYWdpbmF0aW9uLFxyXG4vLyAgIHVzZVNvcnRCeSxcclxuLy8gICB1c2VGaWx0ZXJzLFxyXG4vLyAgIHVzZUdyb3VwQnksXHJcbi8vICAgdXNlRXhwYW5kZWQsXHJcbi8vICAgdXNlUm93U2VsZWN0LFxyXG4vLyB9IGZyb20gJ3JlYWN0LXRhYmxlJ1xyXG4vLyBpbXBvcnQgbWF0Y2hTb3J0ZXIgZnJvbSAnbWF0Y2gtc29ydGVyJ1xyXG5cclxuLy8gaW1wb3J0IG1ha2VEYXRhIGZyb20gJy4vbWFrZURhdGEnXHJcblxyXG4vLyBjb25zdCBTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4vLyAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4vLyAgIHRhYmxlIHtcclxuLy8gICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblxyXG4vLyAgICAgdHIge1xyXG4vLyAgICAgICA6bGFzdC1jaGlsZCB7XHJcbi8vICAgICAgICAgdGQge1xyXG4vLyAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0aCxcclxuLy8gICAgIHRkIHtcclxuLy8gICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbi8vICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuLy8gICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcblxyXG4vLyAgICAgICA6bGFzdC1jaGlsZCB7XHJcbi8vICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdGQge1xyXG4vLyAgICAgICBpbnB1dCB7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgIGJvcmRlcjogMDtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vICAgLnBhZ2luYXRpb24ge1xyXG4vLyAgICAgcGFkZGluZzogMC41cmVtO1xyXG4vLyAgIH1cclxuLy8gYFxyXG5cclxuLy8gLy8gQ3JlYXRlIGFuIGVkaXRhYmxlIGNlbGwgcmVuZGVyZXJcclxuLy8gY29uc3QgRWRpdGFibGVDZWxsID0gKHtcclxuLy8gICB2YWx1ZTogaW5pdGlhbFZhbHVlLFxyXG4vLyAgIHJvdzogeyBpbmRleCB9LFxyXG4vLyAgIGNvbHVtbjogeyBpZCB9LFxyXG4vLyAgIHVwZGF0ZU15RGF0YSwgLy8gVGhpcyBpcyBhIGN1c3RvbSBmdW5jdGlvbiB0aGF0IHdlIHN1cHBsaWVkIHRvIG91ciB0YWJsZSBpbnN0YW5jZVxyXG4vLyAgIGVkaXRhYmxlLFxyXG4vLyB9KSA9PiB7XHJcbi8vICAgLy8gV2UgbmVlZCB0byBrZWVwIGFuZCB1cGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBjZWxsIG5vcm1hbGx5XHJcbi8vICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpXHJcblxyXG4vLyAgIGNvbnN0IG9uQ2hhbmdlID0gZSA9PiB7XHJcbi8vICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuLy8gICB9XHJcblxyXG4vLyAgIC8vIFdlJ2xsIG9ubHkgdXBkYXRlIHRoZSBleHRlcm5hbCBkYXRhIHdoZW4gdGhlIGlucHV0IGlzIGJsdXJyZWRcclxuLy8gICBjb25zdCBvbkJsdXIgPSAoKSA9PiB7XHJcbi8vICAgICB1cGRhdGVNeURhdGEoaW5kZXgsIGlkLCB2YWx1ZSlcclxuLy8gICB9XHJcblxyXG4vLyAgIC8vIElmIHRoZSBpbml0aWFsVmFsdWUgaXMgY2hhbmdlZCBleHRlcm5hbGwsIHN5bmMgaXQgdXAgd2l0aCBvdXIgc3RhdGVcclxuLy8gICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgc2V0VmFsdWUoaW5pdGlhbFZhbHVlKVxyXG4vLyAgIH0sIFtpbml0aWFsVmFsdWVdKVxyXG5cclxuLy8gICBpZiAoIWVkaXRhYmxlKSB7XHJcbi8vICAgICByZXR1cm4gYCR7aW5pdGlhbFZhbHVlfWBcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiA8aW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IG9uQmx1cj17b25CbHVyfSAvPlxyXG4vLyB9XHJcblxyXG4vLyAvLyBEZWZpbmUgYSBkZWZhdWx0IFVJIGZvciBmaWx0ZXJpbmdcclxuLy8gZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7XHJcbi8vICAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciB9LFxyXG4vLyB9KSB7XHJcbi8vICAgY29uc3QgY291bnQgPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoXHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8aW5wdXRcclxuLy8gICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8ICcnfVxyXG4vLyAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbi8vICAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCkgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxyXG4vLyAgICAgICB9fVxyXG4vLyAgICAgICBwbGFjZWhvbGRlcj17YFNlYXJjaCAke2NvdW50fSByZWNvcmRzLi4uYH1cclxuLy8gICAgIC8+XHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG4vLyAvLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSBmb3Igc2VsZWN0aW5nXHJcbi8vIC8vIGEgdW5pcXVlIG9wdGlvbiBmcm9tIGEgbGlzdFxyXG4vLyBmdW5jdGlvbiBTZWxlY3RDb2x1bW5GaWx0ZXIoe1xyXG4vLyAgIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbi8vIH0pIHtcclxuLy8gICAvLyBDYWxjdWxhdGUgdGhlIG9wdGlvbnMgZm9yIGZpbHRlcmluZ1xyXG4vLyAgIC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3NcclxuLy8gICBjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbi8vICAgICBjb25zdCBvcHRpb25zID0gbmV3IFNldCgpXHJcbi8vICAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4vLyAgICAgICBvcHRpb25zLmFkZChyb3cudmFsdWVzW2lkXSlcclxuLy8gICAgIH0pXHJcbi8vICAgICByZXR1cm4gWy4uLm9wdGlvbnMudmFsdWVzKCldXHJcbi8vICAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuLy8gICAvLyBSZW5kZXIgYSBtdWx0aS1zZWxlY3QgYm94XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxzZWxlY3RcclxuLy8gICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlfVxyXG4vLyAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbi8vICAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZClcclxuLy8gICAgICAgfX1cclxuLy8gICAgID5cclxuLy8gICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxyXG4vLyAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxyXG4vLyAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cclxuLy8gICAgICAgICAgIHtvcHRpb259XHJcbi8vICAgICAgICAgPC9vcHRpb24+XHJcbi8vICAgICAgICkpfVxyXG4vLyAgICAgPC9zZWxlY3Q+XHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG4vLyAvLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSB0aGF0IHVzZXMgYVxyXG4vLyAvLyBzbGlkZXIgdG8gc2V0IHRoZSBmaWx0ZXIgdmFsdWUgYmV0d2VlbiBhIGNvbHVtbidzXHJcbi8vIC8vIG1pbiBhbmQgbWF4IHZhbHVlc1xyXG4vLyBmdW5jdGlvbiBTbGlkZXJDb2x1bW5GaWx0ZXIoe1xyXG4vLyAgIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbi8vIH0pIHtcclxuLy8gICAvLyBDYWxjdWxhdGUgdGhlIG1pbiBhbmQgbWF4XHJcbi8vICAgLy8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xyXG5cclxuLy8gICBjb25zdCBbbWluLCBtYXhdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbi8vICAgICBsZXQgbWluID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4vLyAgICAgbGV0IG1heCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuLy8gICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbi8vICAgICAgIG1pbiA9IE1hdGgubWluKHJvdy52YWx1ZXNbaWRdLCBtaW4pXHJcbi8vICAgICAgIG1heCA9IE1hdGgubWF4KHJvdy52YWx1ZXNbaWRdLCBtYXgpXHJcbi8vICAgICB9KVxyXG4vLyAgICAgcmV0dXJuIFttaW4sIG1heF1cclxuLy8gICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8PlxyXG4vLyAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4vLyAgICAgICAgIG1pbj17bWlufVxyXG4vLyAgICAgICAgIG1heD17bWF4fVxyXG4vLyAgICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCBtaW59XHJcbi8vICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4vLyAgICAgICAgICAgc2V0RmlsdGVyKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCkpXHJcbi8vICAgICAgICAgfX1cclxuLy8gICAgICAgLz5cclxuLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIodW5kZWZpbmVkKX0+T2ZmPC9idXR0b24+XHJcbi8vICAgICA8Lz5cclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIC8vIFRoaXMgaXMgYSBjdXN0b20gVUkgZm9yIG91ciAnYmV0d2Vlbicgb3IgbnVtYmVyIHJhbmdlXHJcbi8vIC8vIGZpbHRlci4gSXQgdXNlcyB0d28gbnVtYmVyIGJveGVzIGFuZCBmaWx0ZXJzIHJvd3MgdG9cclxuLy8gLy8gb25lcyB0aGF0IGhhdmUgdmFsdWVzIGJldHdlZW4gdGhlIHR3b1xyXG4vLyBmdW5jdGlvbiBOdW1iZXJSYW5nZUNvbHVtbkZpbHRlcih7XHJcbi8vICAgY29sdW1uOiB7IGZpbHRlclZhbHVlID0gW10sIHByZUZpbHRlcmVkUm93cywgc2V0RmlsdGVyLCBpZCB9LFxyXG4vLyB9KSB7XHJcbi8vICAgY29uc3QgW21pbiwgbWF4XSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4vLyAgICAgbGV0IG1pbiA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuLy8gICAgIGxldCBtYXggPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbi8vICAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4vLyAgICAgICBtaW4gPSBNYXRoLm1pbihyb3cudmFsdWVzW2lkXSwgbWluKVxyXG4vLyAgICAgICBtYXggPSBNYXRoLm1heChyb3cudmFsdWVzW2lkXSwgbWF4KVxyXG4vLyAgICAgfSlcclxuLy8gICAgIHJldHVybiBbbWluLCBtYXhdXHJcbi8vICAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdlxyXG4vLyAgICAgICBzdHlsZT17e1xyXG4vLyAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuLy8gICAgICAgfX1cclxuLy8gICAgID5cclxuLy8gICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlWzBdIHx8ICcnfVxyXG4vLyAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuLy8gICAgICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXHJcbi8vICAgICAgICAgICBzZXRGaWx0ZXIoKG9sZCA9IFtdKSA9PiBbdmFsID8gcGFyc2VJbnQodmFsLCAxMCkgOiB1bmRlZmluZWQsIG9sZFsxXV0pXHJcbi8vICAgICAgICAgfX1cclxuLy8gICAgICAgICBwbGFjZWhvbGRlcj17YE1pbiAoJHttaW59KWB9XHJcbi8vICAgICAgICAgc3R5bGU9e3tcclxuLy8gICAgICAgICAgIHdpZHRoOiAnNzBweCcsXHJcbi8vICAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNXJlbScsXHJcbi8vICAgICAgICAgfX1cclxuLy8gICAgICAgLz5cclxuLy8gICAgICAgdG9cclxuLy8gICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlWzFdIHx8ICcnfVxyXG4vLyAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuLy8gICAgICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXHJcbi8vICAgICAgICAgICBzZXRGaWx0ZXIoKG9sZCA9IFtdKSA9PiBbb2xkWzBdLCB2YWwgPyBwYXJzZUludCh2YWwsIDEwKSA6IHVuZGVmaW5lZF0pXHJcbi8vICAgICAgICAgfX1cclxuLy8gICAgICAgICBwbGFjZWhvbGRlcj17YE1heCAoJHttYXh9KWB9XHJcbi8vICAgICAgICAgc3R5bGU9e3tcclxuLy8gICAgICAgICAgIHdpZHRoOiAnNzBweCcsXHJcbi8vICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMC41cmVtJyxcclxuLy8gICAgICAgICB9fVxyXG4vLyAgICAgICAvPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBmdXp6eVRleHRGaWx0ZXJGbihyb3dzLCBpZCwgZmlsdGVyVmFsdWUpIHtcclxuLy8gICByZXR1cm4gbWF0Y2hTb3J0ZXIocm93cywgZmlsdGVyVmFsdWUsIHsga2V5czogW3JvdyA9PiByb3cudmFsdWVzW2lkXV0gfSlcclxuLy8gfVxyXG5cclxuLy8gLy8gTGV0IHRoZSB0YWJsZSByZW1vdmUgdGhlIGZpbHRlciBpZiB0aGUgc3RyaW5nIGlzIGVtcHR5XHJcbi8vIGZ1enp5VGV4dEZpbHRlckZuLmF1dG9SZW1vdmUgPSB2YWwgPT4gIXZhbFxyXG5cclxuLy8gLy8gQmUgc3VyZSB0byBwYXNzIG91ciB1cGRhdGVNeURhdGEgYW5kIHRoZSBza2lwUmVzZXQgb3B0aW9uXHJcbi8vIGZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSwgdXBkYXRlTXlEYXRhLCBza2lwUmVzZXQgfSkge1xyXG4vLyAgIGNvbnN0IGZpbHRlclR5cGVzID0gUmVhY3QudXNlTWVtbyhcclxuLy8gICAgICgpID0+ICh7XHJcbi8vICAgICAgIC8vIEFkZCBhIG5ldyBmdXp6eVRleHRGaWx0ZXJGbiBmaWx0ZXIgdHlwZS5cclxuLy8gICAgICAgZnV6enlUZXh0OiBmdXp6eVRleHRGaWx0ZXJGbixcclxuLy8gICAgICAgLy8gT3IsIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHRleHQgZmlsdGVyIHRvIHVzZVxyXG4vLyAgICAgICAvLyBcInN0YXJ0V2l0aFwiXHJcbi8vICAgICAgIHRleHQ6IChyb3dzLCBpZCwgZmlsdGVyVmFsdWUpID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gcm93cy5maWx0ZXIocm93ID0+IHtcclxuLy8gICAgICAgICAgIGNvbnN0IHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF1cclxuLy8gICAgICAgICAgIHJldHVybiByb3dWYWx1ZSAhPT0gdW5kZWZpbmVkXHJcbi8vICAgICAgICAgICAgID8gU3RyaW5nKHJvd1ZhbHVlKVxyXG4vLyAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuLy8gICAgICAgICAgICAgICAgIC5zdGFydHNXaXRoKFN0cmluZyhmaWx0ZXJWYWx1ZSkudG9Mb3dlckNhc2UoKSlcclxuLy8gICAgICAgICAgICAgOiB0cnVlXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgICAgfSxcclxuLy8gICAgIH0pLFxyXG4vLyAgICAgW11cclxuLy8gICApXHJcblxyXG4vLyAgIGNvbnN0IGRlZmF1bHRDb2x1bW4gPSBSZWFjdC51c2VNZW1vKFxyXG4vLyAgICAgKCkgPT4gKHtcclxuLy8gICAgICAgLy8gTGV0J3Mgc2V0IHVwIG91ciBkZWZhdWx0IEZpbHRlciBVSVxyXG4vLyAgICAgICBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXHJcbi8vICAgICAgIC8vIEFuZCBhbHNvIG91ciBkZWZhdWx0IGVkaXRhYmxlIGNlbGxcclxuLy8gICAgICAgQ2VsbDogRWRpdGFibGVDZWxsLFxyXG4vLyAgICAgfSksXHJcbi8vICAgICBbXVxyXG4vLyAgIClcclxuXHJcbi8vICAgLy8gVXNlIHRoZSBzdGF0ZSBhbmQgZnVuY3Rpb25zIHJldHVybmVkIGZyb20gdXNlVGFibGUgdG8gYnVpbGQgeW91ciBVSVxyXG4vLyAgIGNvbnN0IHtcclxuLy8gICAgIGdldFRhYmxlUHJvcHMsXHJcbi8vICAgICBnZXRUYWJsZUJvZHlQcm9wcyxcclxuLy8gICAgIGhlYWRlckdyb3VwcyxcclxuLy8gICAgIHByZXBhcmVSb3csXHJcbi8vICAgICBwYWdlLCAvLyBJbnN0ZWFkIG9mIHVzaW5nICdyb3dzJywgd2UnbGwgdXNlIHBhZ2UsXHJcbi8vICAgICAvLyB3aGljaCBoYXMgb25seSB0aGUgcm93cyBmb3IgdGhlIGFjdGl2ZSBwYWdlXHJcblxyXG4vLyAgICAgLy8gVGhlIHJlc3Qgb2YgdGhlc2UgdGhpbmdzIGFyZSBzdXBlciBoYW5keSwgdG9vIDspXHJcbi8vICAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbi8vICAgICBjYW5OZXh0UGFnZSxcclxuLy8gICAgIHBhZ2VPcHRpb25zLFxyXG4vLyAgICAgcGFnZUNvdW50LFxyXG4vLyAgICAgZ290b1BhZ2UsXHJcbi8vICAgICBuZXh0UGFnZSxcclxuLy8gICAgIHByZXZpb3VzUGFnZSxcclxuLy8gICAgIHNldFBhZ2VTaXplLFxyXG4vLyAgICAgc3RhdGU6IHtcclxuLy8gICAgICAgcGFnZUluZGV4LFxyXG4vLyAgICAgICBwYWdlU2l6ZSxcclxuLy8gICAgICAgc29ydEJ5LFxyXG4vLyAgICAgICBncm91cEJ5LFxyXG4vLyAgICAgICBleHBhbmRlZCxcclxuLy8gICAgICAgZmlsdGVycyxcclxuLy8gICAgICAgc2VsZWN0ZWRSb3dJZHMsXHJcbi8vICAgICB9LFxyXG4vLyAgIH0gPSB1c2VUYWJsZShcclxuLy8gICAgIHtcclxuLy8gICAgICAgY29sdW1ucyxcclxuLy8gICAgICAgZGF0YSxcclxuLy8gICAgICAgZGVmYXVsdENvbHVtbixcclxuLy8gICAgICAgZmlsdGVyVHlwZXMsXHJcbi8vICAgICAgIC8vIHVwZGF0ZU15RGF0YSBpc24ndCBwYXJ0IG9mIHRoZSBBUEksIGJ1dFxyXG4vLyAgICAgICAvLyBhbnl0aGluZyB3ZSBwdXQgaW50byB0aGVzZSBvcHRpb25zIHdpbGxcclxuLy8gICAgICAgLy8gYXV0b21hdGljYWxseSBiZSBhdmFpbGFibGUgb24gdGhlIGluc3RhbmNlLlxyXG4vLyAgICAgICAvLyBUaGF0IHdheSB3ZSBjYW4gY2FsbCB0aGlzIGZ1bmN0aW9uIGZyb20gb3VyXHJcbi8vICAgICAgIC8vIGNlbGwgcmVuZGVyZXIhXHJcbi8vICAgICAgIHVwZGF0ZU15RGF0YSxcclxuLy8gICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHBhc3MgdGhpcyBzbyB0aGUgcGFnZSBkb2Vzbid0IGNoYW5nZVxyXG4vLyAgICAgICAvLyB3aGVuIHdlIGVkaXQgdGhlIGRhdGEuXHJcbi8vICAgICAgIGF1dG9SZXNldFBhZ2U6ICFza2lwUmVzZXQsXHJcbi8vICAgICAgIGF1dG9SZXNldFNlbGVjdGVkUm93czogIXNraXBSZXNldCxcclxuLy8gICAgICAgZGlzYWJsZU11bHRpU29ydDogdHJ1ZSxcclxuLy8gICAgIH0sXHJcbi8vICAgICB1c2VGaWx0ZXJzLFxyXG4vLyAgICAgdXNlR3JvdXBCeSxcclxuLy8gICAgIHVzZVNvcnRCeSxcclxuLy8gICAgIHVzZUV4cGFuZGVkLFxyXG4vLyAgICAgdXNlUGFnaW5hdGlvbixcclxuLy8gICAgIHVzZVJvd1NlbGVjdCxcclxuLy8gICAgIC8vIEhlcmUgd2Ugd2lsbCB1c2UgYSBwbHVnaW4gdG8gYWRkIG91ciBzZWxlY3Rpb24gY29sdW1uXHJcbi8vICAgICBob29rcyA9PiB7XHJcbi8vICAgICAgIGhvb2tzLnZpc2libGVDb2x1bW5zLnB1c2goY29sdW1ucyA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIFtcclxuLy8gICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgaWQ6ICdzZWxlY3Rpb24nLFxyXG4vLyAgICAgICAgICAgICAvLyBNYWtlIHRoaXMgY29sdW1uIGEgZ3JvdXBCeUJvdW5kYXJ5LiBUaGlzIGVuc3VyZXMgdGhhdCBncm91cEJ5IGNvbHVtbnNcclxuLy8gICAgICAgICAgICAgLy8gYXJlIHBsYWNlZCBhZnRlciBpdFxyXG4vLyAgICAgICAgICAgICBncm91cEJ5Qm91bmRhcnk6IHRydWUsXHJcbi8vICAgICAgICAgICAgIC8vIFRoZSBoZWFkZXIgY2FuIHVzZSB0aGUgdGFibGUncyBnZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyBtZXRob2RcclxuLy8gICAgICAgICAgICAgLy8gdG8gcmVuZGVyIGEgY2hlY2tib3hcclxuLy8gICAgICAgICAgICAgSGVhZGVyOiAoeyBnZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyB9KSA9PiAoXHJcbi8vICAgICAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgICAgIDxJbmRldGVybWluYXRlQ2hlY2tib3ggey4uLmdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzKCl9IC8+XHJcbi8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICksXHJcbi8vICAgICAgICAgICAgIC8vIFRoZSBjZWxsIGNhbiB1c2UgdGhlIGluZGl2aWR1YWwgcm93J3MgZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyBtZXRob2RcclxuLy8gICAgICAgICAgICAgLy8gdG8gdGhlIHJlbmRlciBhIGNoZWNrYm94XHJcbi8vICAgICAgICAgICAgIENlbGw6ICh7IHJvdyB9KSA9PiAoXHJcbi8vICAgICAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgICAgIDxJbmRldGVybWluYXRlQ2hlY2tib3ggey4uLnJvdy5nZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzKCl9IC8+XHJcbi8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICksXHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgLi4uY29sdW1ucyxcclxuLy8gICAgICAgICBdXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICB9XHJcbi8vICAgKVxyXG5cclxuLy8gICAvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDw+XHJcbi8vICAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfT5cclxuLy8gICAgICAgICA8dGhlYWQ+XHJcbi8vICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbi8vICAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuLy8gICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcclxuLy8gICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9PlxyXG4vLyAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uY2FuR3JvdXBCeSA/IChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gY2FuIGJlIGdyb3VwZWQsIGxldCdzIGFkZCBhIHRvZ2dsZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uaXNHcm91cGVkID8gJ/Cfm5EgJyA6ICfwn5GKICd9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcygpfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIHsvKiBBZGQgYSBzb3J0IGRpcmVjdGlvbiBpbmRpY2F0b3IgKi99XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzU29ydGVkXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLmlzU29ydGVkRGVzY1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJyDwn5S9J1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyDwn5S8J1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgIHsvKiBSZW5kZXIgdGhlIGNvbHVtbnMgZmlsdGVyIFVJICovfVxyXG4vLyAgICAgICAgICAgICAgICAgICA8ZGl2Pntjb2x1bW4uY2FuRmlsdGVyID8gY29sdW1uLnJlbmRlcignRmlsdGVyJykgOiBudWxsfTwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgPC90aD5cclxuLy8gICAgICAgICAgICAgICApKX1cclxuLy8gICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICkpfVxyXG4vLyAgICAgICAgIDwvdGhlYWQ+XHJcbi8vICAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuLy8gICAgICAgICAgIHtwYWdlLm1hcChyb3cgPT4ge1xyXG4vLyAgICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcclxuLy8gICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cclxuLy8gICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKGNlbGwgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5pc0dyb3VwZWQgPyAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBncm91cGVkIGNlbGwsIGFkZCBhbiBleHBhbmRlciBhbmQgcm93IGNvdW50XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLnJvdy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKCl9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pc0V4cGFuZGVkID8gJ/CfkYcnIDogJ/CfkYknfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcignQ2VsbCcsIHsgZWRpdGFibGU6IGZhbHNlIH0pfSAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5zdWJSb3dzLmxlbmd0aH0pXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNBZ2dyZWdhdGVkID8gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY2VsbCBpcyBhZ2dyZWdhdGVkLCB1c2UgdGhlIEFnZ3JlZ2F0ZWRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyZXIgZm9yIGNlbGxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5yZW5kZXIoJ0FnZ3JlZ2F0ZWQnKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdDZWxsJywgeyBlZGl0YWJsZTogdHJ1ZSB9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgICAgICAgICAgICApXHJcbi8vICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgICAgICApXHJcbi8vICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICA8L3Rib2R5PlxyXG4vLyAgICAgICA8L3RhYmxlPlxyXG4vLyAgICAgICB7LypcclxuLy8gICAgICAgICBQYWdpbmF0aW9uIGNhbiBiZSBidWlsdCBob3dldmVyIHlvdSdkIGxpa2UuXHJcbi8vICAgICAgICAgVGhpcyBpcyBqdXN0IGEgdmVyeSBiYXNpYyBVSSBpbXBsZW1lbnRhdGlvbjpcclxuLy8gICAgICAgKi99XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UoMCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuLy8gICAgICAgICAgIHsnPDwnfVxyXG4vLyAgICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmV2aW91c1BhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9PlxyXG4vLyAgICAgICAgICAgeyc8J31cclxuLy8gICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbmV4dFBhZ2UoKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbi8vICAgICAgICAgICB7Jz4nfVxyXG4vLyAgICAgICAgIDwvYnV0dG9uPnsnICd9XHJcbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShwYWdlQ291bnQgLSAxKX0gZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX0+XHJcbi8vICAgICAgICAgICB7Jz4+J31cclxuLy8gICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4vLyAgICAgICAgIDxzcGFuPlxyXG4vLyAgICAgICAgICAgUGFnZXsnICd9XHJcbi8vICAgICAgICAgICA8c3Ryb25nPlxyXG4vLyAgICAgICAgICAgICB7cGFnZUluZGV4ICsgMX0gb2Yge3BhZ2VPcHRpb25zLmxlbmd0aH1cclxuLy8gICAgICAgICAgIDwvc3Ryb25nPnsnICd9XHJcbi8vICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgIDxzcGFuPlxyXG4vLyAgICAgICAgICAgfCBHbyB0byBwYWdlOnsnICd9XHJcbi8vICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbi8vICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFnZUluZGV4ICsgMX1cclxuLy8gICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBlLnRhcmdldC52YWx1ZSA/IE51bWJlcihlLnRhcmdldC52YWx1ZSkgLSAxIDogMFxyXG4vLyAgICAgICAgICAgICAgIGdvdG9QYWdlKHBhZ2UpXHJcbi8vICAgICAgICAgICAgIH19XHJcbi8vICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnIH19XHJcbi8vICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgIDwvc3Bhbj57JyAnfVxyXG4vLyAgICAgICAgIDxzZWxlY3RcclxuLy8gICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cclxuLy8gICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuLy8gICAgICAgICAgICAgc2V0UGFnZVNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSlcclxuLy8gICAgICAgICAgIH19XHJcbi8vICAgICAgICAgPlxyXG4vLyAgICAgICAgICAge1sxMCwgMjAsIDMwLCA0MCwgNTBdLm1hcChwYWdlU2l6ZSA9PiAoXHJcbi8vICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwYWdlU2l6ZX0gdmFsdWU9e3BhZ2VTaXplfT5cclxuLy8gICAgICAgICAgICAgICBTaG93IHtwYWdlU2l6ZX1cclxuLy8gICAgICAgICAgICAgPC9vcHRpb24+XHJcbi8vICAgICAgICAgICApKX1cclxuLy8gICAgICAgICA8L3NlbGVjdD5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDxwcmU+XHJcbi8vICAgICAgICAgPGNvZGU+XHJcbi8vICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoXHJcbi8vICAgICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgICBwYWdlSW5kZXgsXHJcbi8vICAgICAgICAgICAgICAgcGFnZVNpemUsXHJcbi8vICAgICAgICAgICAgICAgcGFnZUNvdW50LFxyXG4vLyAgICAgICAgICAgICAgIGNhbk5leHRQYWdlLFxyXG4vLyAgICAgICAgICAgICAgIGNhblByZXZpb3VzUGFnZSxcclxuLy8gICAgICAgICAgICAgICBzb3J0QnksXHJcbi8vICAgICAgICAgICAgICAgZ3JvdXBCeSxcclxuLy8gICAgICAgICAgICAgICBleHBhbmRlZDogZXhwYW5kZWQsXHJcbi8vICAgICAgICAgICAgICAgZmlsdGVycyxcclxuLy8gICAgICAgICAgICAgICBzZWxlY3RlZFJvd0lkczogc2VsZWN0ZWRSb3dJZHMsXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIG51bGwsXHJcbi8vICAgICAgICAgICAgIDJcclxuLy8gICAgICAgICAgICl9XHJcbi8vICAgICAgICAgPC9jb2RlPlxyXG4vLyAgICAgICA8L3ByZT5cclxuLy8gICAgIDwvPlxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuLy8gLy8gRGVmaW5lIGEgY3VzdG9tIGZpbHRlciBmaWx0ZXIgZnVuY3Rpb24hXHJcbi8vIGZ1bmN0aW9uIGZpbHRlckdyZWF0ZXJUaGFuKHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSkge1xyXG4vLyAgIHJldHVybiByb3dzLmZpbHRlcihyb3cgPT4ge1xyXG4vLyAgICAgY29uc3Qgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXVxyXG4vLyAgICAgcmV0dXJuIHJvd1ZhbHVlID49IGZpbHRlclZhbHVlXHJcbi8vICAgfSlcclxuLy8gfVxyXG5cclxuLy8gLy8gVGhpcyBpcyBhbiBhdXRvUmVtb3ZlIG1ldGhvZCBvbiB0aGUgZmlsdGVyIGZ1bmN0aW9uIHRoYXRcclxuLy8gLy8gd2hlbiBnaXZlbiB0aGUgbmV3IGZpbHRlciB2YWx1ZSBhbmQgcmV0dXJucyB0cnVlLCB0aGUgZmlsdGVyXHJcbi8vIC8vIHdpbGwgYmUgYXV0b21hdGljYWxseSByZW1vdmVkLiBOb3JtYWxseSB0aGlzIGlzIGp1c3QgYW4gdW5kZWZpbmVkXHJcbi8vIC8vIGNoZWNrLCBidXQgaGVyZSwgd2Ugd2FudCB0byByZW1vdmUgdGhlIGZpbHRlciBpZiBpdCdzIG5vdCBhIG51bWJlclxyXG4vLyBmaWx0ZXJHcmVhdGVyVGhhbi5hdXRvUmVtb3ZlID0gdmFsID0+IHR5cGVvZiB2YWwgIT09ICdudW1iZXInXHJcblxyXG4vLyAvLyBUaGlzIGlzIGEgY3VzdG9tIGFnZ3JlZ2F0b3IgdGhhdFxyXG4vLyAvLyB0YWtlcyBpbiBhbiBhcnJheSBvZiBsZWFmIHZhbHVlcyBhbmRcclxuLy8gLy8gcmV0dXJucyB0aGUgcm91bmRlZCBtZWRpYW5cclxuLy8gZnVuY3Rpb24gcm91bmRlZE1lZGlhbihsZWFmVmFsdWVzKSB7XHJcbi8vICAgbGV0IG1pbiA9IGxlYWZWYWx1ZXNbMF0gfHwgMFxyXG4vLyAgIGxldCBtYXggPSBsZWFmVmFsdWVzWzBdIHx8IDBcclxuXHJcbi8vICAgbGVhZlZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcclxuLy8gICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUpXHJcbi8vICAgICBtYXggPSBNYXRoLm1heChtYXgsIHZhbHVlKVxyXG4vLyAgIH0pXHJcblxyXG4vLyAgIHJldHVybiBNYXRoLnJvdW5kKChtaW4gKyBtYXgpIC8gMilcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgSW5kZXRlcm1pbmF0ZUNoZWNrYm94ID0gUmVhY3QuZm9yd2FyZFJlZihcclxuLy8gICAoeyBpbmRldGVybWluYXRlLCAuLi5yZXN0IH0sIHJlZikgPT4ge1xyXG4vLyAgICAgY29uc3QgZGVmYXVsdFJlZiA9IFJlYWN0LnVzZVJlZigpXHJcbi8vICAgICBjb25zdCByZXNvbHZlZFJlZiA9IHJlZiB8fCBkZWZhdWx0UmVmXHJcblxyXG4vLyAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgcmVzb2x2ZWRSZWYuY3VycmVudC5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZVxyXG4vLyAgICAgfSwgW3Jlc29sdmVkUmVmLCBpbmRldGVybWluYXRlXSlcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICA8PlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiByZWY9e3Jlc29sdmVkUmVmfSB7Li4ucmVzdH0gLz5cclxuLy8gICAgICAgPC8+XHJcbi8vICAgICApXHJcbi8vICAgfVxyXG4vLyApXHJcblxyXG4vLyBmdW5jdGlvbiBBcHAoKSB7XHJcbi8vICAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbi8vICAgICAoKSA9PiBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBIZWFkZXI6ICdOYW1lJyxcclxuLy8gICAgICAgICBjb2x1bW5zOiBbXHJcbi8vICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIEhlYWRlcjogJ0ZpcnN0IE5hbWUnLFxyXG4vLyAgICAgICAgICAgICBhY2Nlc3NvcjogJ2ZpcnN0TmFtZScsXHJcbi8vICAgICAgICAgICAgIC8vIFVzZSBhIHR3by1zdGFnZSBhZ2dyZWdhdG9yIGhlcmUgdG8gZmlyc3RcclxuLy8gICAgICAgICAgICAgLy8gY291bnQgdGhlIHRvdGFsIHJvd3MgYmVpbmcgYWdncmVnYXRlZCxcclxuLy8gICAgICAgICAgICAgLy8gdGhlbiBzdW0gYW55IG9mIHRob3NlIGNvdW50cyBpZiB0aGV5IGFyZVxyXG4vLyAgICAgICAgICAgICAvLyBhZ2dyZWdhdGVkIGZ1cnRoZXJcclxuLy8gICAgICAgICAgICAgYWdncmVnYXRlOiAnY291bnQnLFxyXG4vLyAgICAgICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gTmFtZXNgLFxyXG4vLyAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgSGVhZGVyOiAnTGFzdCBOYW1lJyxcclxuLy8gICAgICAgICAgICAgYWNjZXNzb3I6ICdsYXN0TmFtZScsXHJcbi8vICAgICAgICAgICAgIC8vIFVzZSBvdXIgY3VzdG9tIGBmdXp6eVRleHRgIGZpbHRlciBvbiB0aGlzIGNvbHVtblxyXG4vLyAgICAgICAgICAgICBmaWx0ZXI6ICdmdXp6eVRleHQnLFxyXG4vLyAgICAgICAgICAgICAvLyBVc2UgYW5vdGhlciB0d28tc3RhZ2UgYWdncmVnYXRvciBoZXJlIHRvXHJcbi8vICAgICAgICAgICAgIC8vIGZpcnN0IGNvdW50IHRoZSBVTklRVUUgdmFsdWVzIGZyb20gdGhlIHJvd3NcclxuLy8gICAgICAgICAgICAgLy8gYmVpbmcgYWdncmVnYXRlZCwgdGhlbiBzdW0gdGhvc2UgY291bnRzIGlmXHJcbi8vICAgICAgICAgICAgIC8vIHRoZXkgYXJlIGFnZ3JlZ2F0ZWQgZnVydGhlclxyXG4vLyAgICAgICAgICAgICBhZ2dyZWdhdGU6ICd1bmlxdWVDb3VudCcsXHJcbi8vICAgICAgICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfSBVbmlxdWUgTmFtZXNgLFxyXG4vLyAgICAgICAgICAgfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgSGVhZGVyOiAnSW5mbycsXHJcbi8vICAgICAgICAgY29sdW1uczogW1xyXG4vLyAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBIZWFkZXI6ICdBZ2UnLFxyXG4vLyAgICAgICAgICAgICBhY2Nlc3NvcjogJ2FnZScsXHJcbi8vICAgICAgICAgICAgIEZpbHRlcjogU2xpZGVyQ29sdW1uRmlsdGVyLFxyXG4vLyAgICAgICAgICAgICBmaWx0ZXI6ICdlcXVhbHMnLFxyXG4vLyAgICAgICAgICAgICAvLyBBZ2dyZWdhdGUgdGhlIGF2ZXJhZ2UgYWdlIG9mIHZpc2l0b3JzXHJcbi8vICAgICAgICAgICAgIGFnZ3JlZ2F0ZTogJ2F2ZXJhZ2UnLFxyXG4vLyAgICAgICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gKGF2ZylgLFxyXG4vLyAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgSGVhZGVyOiAnVmlzaXRzJyxcclxuLy8gICAgICAgICAgICAgYWNjZXNzb3I6ICd2aXNpdHMnLFxyXG4vLyAgICAgICAgICAgICBGaWx0ZXI6IE51bWJlclJhbmdlQ29sdW1uRmlsdGVyLFxyXG4vLyAgICAgICAgICAgICBmaWx0ZXI6ICdiZXR3ZWVuJyxcclxuLy8gICAgICAgICAgICAgLy8gQWdncmVnYXRlIHRoZSBzdW0gb2YgYWxsIHZpc2l0c1xyXG4vLyAgICAgICAgICAgICBhZ2dyZWdhdGU6ICdzdW0nLFxyXG4vLyAgICAgICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gKHRvdGFsKWAsXHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBIZWFkZXI6ICdTdGF0dXMnLFxyXG4vLyAgICAgICAgICAgICBhY2Nlc3NvcjogJ3N0YXR1cycsXHJcbi8vICAgICAgICAgICAgIEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxyXG4vLyAgICAgICAgICAgICBmaWx0ZXI6ICdpbmNsdWRlcycsXHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBIZWFkZXI6ICdQcm9maWxlIFByb2dyZXNzJyxcclxuLy8gICAgICAgICAgICAgYWNjZXNzb3I6ICdwcm9ncmVzcycsXHJcbi8vICAgICAgICAgICAgIEZpbHRlcjogU2xpZGVyQ29sdW1uRmlsdGVyLFxyXG4vLyAgICAgICAgICAgICBmaWx0ZXI6IGZpbHRlckdyZWF0ZXJUaGFuLFxyXG4vLyAgICAgICAgICAgICAvLyBVc2Ugb3VyIGN1c3RvbSByb3VuZGVkTWVkaWFuIGFnZ3JlZ2F0b3JcclxuLy8gICAgICAgICAgICAgYWdncmVnYXRlOiByb3VuZGVkTWVkaWFuLFxyXG4vLyAgICAgICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gKG1lZClgLFxyXG4vLyAgICAgICAgICAgfSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gICAgIFtdXHJcbi8vICAgKVxyXG5cclxuLy8gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBtYWtlRGF0YSgxMDAwMCkpXHJcbi8vICAgY29uc3QgW29yaWdpbmFsRGF0YV0gPSBSZWFjdC51c2VTdGF0ZShkYXRhKVxyXG5cclxuLy8gICAvLyBXZSBuZWVkIHRvIGtlZXAgdGhlIHRhYmxlIGZyb20gcmVzZXR0aW5nIHRoZSBwYWdlSW5kZXggd2hlbiB3ZVxyXG4vLyAgIC8vIFVwZGF0ZSBkYXRhLiBTbyB3ZSBjYW4ga2VlcCB0cmFjayBvZiB0aGF0IGZsYWcgd2l0aCBhIHJlZi5cclxuLy8gICBjb25zdCBza2lwUmVzZXRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpXHJcblxyXG4vLyAgIC8vIFdoZW4gb3VyIGNlbGwgcmVuZGVyZXIgY2FsbHMgdXBkYXRlTXlEYXRhLCB3ZSdsbCB1c2VcclxuLy8gICAvLyB0aGUgcm93SW5kZXgsIGNvbHVtbklkIGFuZCBuZXcgdmFsdWUgdG8gdXBkYXRlIHRoZVxyXG4vLyAgIC8vIG9yaWdpbmFsIGRhdGFcclxuLy8gICBjb25zdCB1cGRhdGVNeURhdGEgPSAocm93SW5kZXgsIGNvbHVtbklkLCB2YWx1ZSkgPT4ge1xyXG4vLyAgICAgLy8gV2UgYWxzbyB0dXJuIG9uIHRoZSBmbGFnIHRvIG5vdCByZXNldCB0aGUgcGFnZVxyXG4vLyAgICAgc2tpcFJlc2V0UmVmLmN1cnJlbnQgPSB0cnVlXHJcbi8vICAgICBzZXREYXRhKG9sZCA9PlxyXG4vLyAgICAgICBvbGQubWFwKChyb3csIGluZGV4KSA9PiB7XHJcbi8vICAgICAgICAgaWYgKGluZGV4ID09PSByb3dJbmRleCkge1xyXG4vLyAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgLi4ucm93LFxyXG4vLyAgICAgICAgICAgICBbY29sdW1uSWRdOiB2YWx1ZSxcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgcmV0dXJuIHJvd1xyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgKVxyXG4vLyAgIH1cclxuXHJcbi8vICAgLy8gQWZ0ZXIgZGF0YSBjaGFuZ2VzLCB3ZSB0dXJuIHRoZSBmbGFnIGJhY2sgb2ZmXHJcbi8vICAgLy8gc28gdGhhdCBpZiBkYXRhIGFjdHVhbGx5IGNoYW5nZXMgd2hlbiB3ZSdyZSBub3RcclxuLy8gICAvLyBlZGl0aW5nIGl0LCB0aGUgcGFnZSBpcyByZXNldFxyXG4vLyAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBza2lwUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlXHJcbi8vICAgfSwgW2RhdGFdKVxyXG5cclxuLy8gICAvLyBMZXQncyBhZGQgYSBkYXRhIHJlc2V0dGVyL3JhbmRvbWl6ZXIgdG8gaGVscFxyXG4vLyAgIC8vIGlsbHVzdHJhdGUgdGhhdCBmbG93Li4uXHJcbi8vICAgY29uc3QgcmVzZXREYXRhID0gKCkgPT4ge1xyXG4vLyAgICAgLy8gRG9uJ3QgcmVzZXQgdGhlIHBhZ2Ugd2hlbiB3ZSBkbyB0aGlzXHJcbi8vICAgICBza2lwUmVzZXRSZWYuY3VycmVudCA9IHRydWVcclxuLy8gICAgIHNldERhdGEob3JpZ2luYWxEYXRhKVxyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxTdHlsZXM+XHJcbi8vICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXREYXRhfT5SZXNldCBEYXRhPC9idXR0b24+XHJcbi8vICAgICAgIDxUYWJsZVxyXG4vLyAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbi8vICAgICAgICAgZGF0YT17ZGF0YX1cclxuLy8gICAgICAgICB1cGRhdGVNeURhdGE9e3VwZGF0ZU15RGF0YX1cclxuLy8gICAgICAgICBza2lwUmVzZXQ9e3NraXBSZXNldFJlZi5jdXJyZW50fVxyXG4vLyAgICAgICAvPlxyXG4vLyAgICAgPC9TdHlsZXM+XHJcbi8vICAgKVxyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=