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
}; // import React from 'react'
// import styled from 'styled-components'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJDYXJkUGxheWVycyIsImxlYWd1ZSIsImRlZmF1bHRQcm9wcyIsImRpdmlzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRWUsU0FBU0EsV0FBVCxDQUFxQjtBQUNsQ0M7QUFEa0MsQ0FBckIsRUFFWjtBQUNELHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsbUZBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsbUNBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsNkJBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsa0RBQWY7QUFBQSxtQ0FDRTtBQUFJLHVCQUFTLEVBQUMsMkNBQWQ7QUFBQSx3QkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFtQkQ7S0F0QnVCRCxXO0FBeUJ4QkEsV0FBVyxDQUFDRSxZQUFaLEdBQTJCO0FBQ3pCRCxRQUFNLEVBQUUsdUJBRGlCO0FBRXpCRSxVQUFRLEVBQUU7QUFGZSxDQUEzQjtBQUtBSCxXQUFXLENBQUNJLFNBQVosR0FBd0I7QUFDdEJILFFBQU0sRUFBRUksMERBQWdCQztBQURGLENBQXhCLEMsQ0FnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMWUxZjk4MGMwZmRkODM5OGFmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkUGxheWVycyh7XHJcbiAgbGVhZ3VlXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgYmctd2hpdGUgdy1mdWxsIG1iLTYgc2hhZG93LWxnIHJvdW5kZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdCBtYi0wIHB4LTQgcHktMyBib3JkZXItMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgcHgtNCBtYXgtdy1mdWxsIGZsZXgtZ3JvdyBmbGV4LTFcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ibHVlR3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgIHtsZWFndWV9XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgICAgIHsvKiBQcm9qZWN0cyB0YWJsZSAqL31cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5DYXJkUGxheWVycy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGVhZ3VlOiBcIk1ham9yIExlYWd1ZSBCYXNlYmFsbFwiLFxyXG4gIGRpdmlzaW9uOiBcIlwiXHJcbn07XHJcblxyXG5DYXJkUGxheWVycy5wcm9wVHlwZXMgPSB7XHJcbiAgbGVhZ3VlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbi8vIGltcG9ydCB7XHJcbi8vICAgdXNlVGFibGUsXHJcbi8vICAgdXNlUGFnaW5hdGlvbixcclxuLy8gICB1c2VTb3J0QnksXHJcbi8vICAgdXNlRmlsdGVycyxcclxuLy8gICB1c2VHcm91cEJ5LFxyXG4vLyAgIHVzZUV4cGFuZGVkLFxyXG4vLyAgIHVzZVJvd1NlbGVjdCxcclxuLy8gfSBmcm9tICdyZWFjdC10YWJsZSdcclxuLy8gaW1wb3J0IG1hdGNoU29ydGVyIGZyb20gJ21hdGNoLXNvcnRlcidcclxuXHJcbi8vIGltcG9ydCBtYWtlRGF0YSBmcm9tICcuL21ha2VEYXRhJ1xyXG5cclxuLy8gY29uc3QgU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuLy8gICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuLy8gICB0YWJsZSB7XHJcbi8vICAgICBib3JkZXItc3BhY2luZzogMDtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5cclxuLy8gICAgIHRyIHtcclxuLy8gICAgICAgOmxhc3QtY2hpbGQge1xyXG4vLyAgICAgICAgIHRkIHtcclxuLy8gICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdGgsXHJcbi8vICAgICB0ZCB7XHJcbi8vICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4vLyAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbi8vICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG5cclxuLy8gICAgICAgOmxhc3QtY2hpbGQge1xyXG4vLyAgICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHRkIHtcclxuLy8gICAgICAgaW5wdXQge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuLy8gICAgICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgICAgICBib3JkZXI6IDA7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4vLyAgIC5wYWdpbmF0aW9uIHtcclxuLy8gICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuLy8gICB9XHJcbi8vIGBcclxuXHJcbi8vIC8vIENyZWF0ZSBhbiBlZGl0YWJsZSBjZWxsIHJlbmRlcmVyXHJcbi8vIGNvbnN0IEVkaXRhYmxlQ2VsbCA9ICh7XHJcbi8vICAgdmFsdWU6IGluaXRpYWxWYWx1ZSxcclxuLy8gICByb3c6IHsgaW5kZXggfSxcclxuLy8gICBjb2x1bW46IHsgaWQgfSxcclxuLy8gICB1cGRhdGVNeURhdGEsIC8vIFRoaXMgaXMgYSBjdXN0b20gZnVuY3Rpb24gdGhhdCB3ZSBzdXBwbGllZCB0byBvdXIgdGFibGUgaW5zdGFuY2VcclxuLy8gICBlZGl0YWJsZSxcclxuLy8gfSkgPT4ge1xyXG4vLyAgIC8vIFdlIG5lZWQgdG8ga2VlcCBhbmQgdXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgY2VsbCBub3JtYWxseVxyXG4vLyAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlKVxyXG5cclxuLy8gICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xyXG4vLyAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbi8vICAgfVxyXG5cclxuLy8gICAvLyBXZSdsbCBvbmx5IHVwZGF0ZSB0aGUgZXh0ZXJuYWwgZGF0YSB3aGVuIHRoZSBpbnB1dCBpcyBibHVycmVkXHJcbi8vICAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xyXG4vLyAgICAgdXBkYXRlTXlEYXRhKGluZGV4LCBpZCwgdmFsdWUpXHJcbi8vICAgfVxyXG5cclxuLy8gICAvLyBJZiB0aGUgaW5pdGlhbFZhbHVlIGlzIGNoYW5nZWQgZXh0ZXJuYWxsLCBzeW5jIGl0IHVwIHdpdGggb3VyIHN0YXRlXHJcbi8vICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIHNldFZhbHVlKGluaXRpYWxWYWx1ZSlcclxuLy8gICB9LCBbaW5pdGlhbFZhbHVlXSlcclxuXHJcbi8vICAgaWYgKCFlZGl0YWJsZSkge1xyXG4vLyAgICAgcmV0dXJuIGAke2luaXRpYWxWYWx1ZX1gXHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gPGlucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBvbkJsdXI9e29uQmx1cn0gLz5cclxuLy8gfVxyXG5cclxuLy8gLy8gRGVmaW5lIGEgZGVmYXVsdCBVSSBmb3IgZmlsdGVyaW5nXHJcbi8vIGZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe1xyXG4vLyAgIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXIgfSxcclxuLy8gfSkge1xyXG4vLyAgIGNvbnN0IGNvdW50ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aFxyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGlucHV0XHJcbi8vICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cclxuLy8gICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4vLyAgICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpIC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcclxuLy8gICAgICAgfX1cclxuLy8gICAgICAgcGxhY2Vob2xkZXI9e2BTZWFyY2ggJHtjb3VudH0gcmVjb3Jkcy4uLmB9XHJcbi8vICAgICAvPlxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuLy8gLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgZm9yIHNlbGVjdGluZ1xyXG4vLyAvLyBhIHVuaXF1ZSBvcHRpb24gZnJvbSBhIGxpc3RcclxuLy8gZnVuY3Rpb24gU2VsZWN0Q29sdW1uRmlsdGVyKHtcclxuLy8gICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG4vLyB9KSB7XHJcbi8vICAgLy8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcclxuLy8gICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcbi8vICAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4vLyAgICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKVxyXG4vLyAgICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuLy8gICAgICAgb3B0aW9ucy5hZGQocm93LnZhbHVlc1tpZF0pXHJcbi8vICAgICB9KVxyXG4vLyAgICAgcmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXVxyXG4vLyAgIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbi8vICAgLy8gUmVuZGVyIGEgbXVsdGktc2VsZWN0IGJveFxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8c2VsZWN0XHJcbi8vICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZX1cclxuLy8gICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4vLyAgICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpXHJcbi8vICAgICAgIH19XHJcbi8vICAgICA+XHJcbi8vICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuLy8gICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcclxuLy8gICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbn0+XHJcbi8vICAgICAgICAgICB7b3B0aW9ufVxyXG4vLyAgICAgICAgIDwvb3B0aW9uPlxyXG4vLyAgICAgICApKX1cclxuLy8gICAgIDwvc2VsZWN0PlxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuLy8gLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgdGhhdCB1c2VzIGFcclxuLy8gLy8gc2xpZGVyIHRvIHNldCB0aGUgZmlsdGVyIHZhbHVlIGJldHdlZW4gYSBjb2x1bW4nc1xyXG4vLyAvLyBtaW4gYW5kIG1heCB2YWx1ZXNcclxuLy8gZnVuY3Rpb24gU2xpZGVyQ29sdW1uRmlsdGVyKHtcclxuLy8gICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG4vLyB9KSB7XHJcbi8vICAgLy8gQ2FsY3VsYXRlIHRoZSBtaW4gYW5kIG1heFxyXG4vLyAgIC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3NcclxuXHJcbi8vICAgY29uc3QgW21pbiwgbWF4XSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4vLyAgICAgbGV0IG1pbiA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuLy8gICAgIGxldCBtYXggPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbi8vICAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4vLyAgICAgICBtaW4gPSBNYXRoLm1pbihyb3cudmFsdWVzW2lkXSwgbWluKVxyXG4vLyAgICAgICBtYXggPSBNYXRoLm1heChyb3cudmFsdWVzW2lkXSwgbWF4KVxyXG4vLyAgICAgfSlcclxuLy8gICAgIHJldHVybiBbbWluLCBtYXhdXHJcbi8vICAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPD5cclxuLy8gICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuLy8gICAgICAgICBtaW49e21pbn1cclxuLy8gICAgICAgICBtYXg9e21heH1cclxuLy8gICAgICAgICB2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgbWlufVxyXG4vLyAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuLy8gICAgICAgICAgIHNldEZpbHRlcihwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApKVxyXG4vLyAgICAgICAgIH19XHJcbi8vICAgICAgIC8+XHJcbi8vICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKHVuZGVmaW5lZCl9Pk9mZjwvYnV0dG9uPlxyXG4vLyAgICAgPC8+XHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG4vLyAvLyBUaGlzIGlzIGEgY3VzdG9tIFVJIGZvciBvdXIgJ2JldHdlZW4nIG9yIG51bWJlciByYW5nZVxyXG4vLyAvLyBmaWx0ZXIuIEl0IHVzZXMgdHdvIG51bWJlciBib3hlcyBhbmQgZmlsdGVycyByb3dzIHRvXHJcbi8vIC8vIG9uZXMgdGhhdCBoYXZlIHZhbHVlcyBiZXR3ZWVuIHRoZSB0d29cclxuLy8gZnVuY3Rpb24gTnVtYmVyUmFuZ2VDb2x1bW5GaWx0ZXIoe1xyXG4vLyAgIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSA9IFtdLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciwgaWQgfSxcclxuLy8gfSkge1xyXG4vLyAgIGNvbnN0IFttaW4sIG1heF0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuLy8gICAgIGxldCBtaW4gPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbi8vICAgICBsZXQgbWF4ID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4vLyAgICAgcHJlRmlsdGVyZWRSb3dzLmZvckVhY2gocm93ID0+IHtcclxuLy8gICAgICAgbWluID0gTWF0aC5taW4ocm93LnZhbHVlc1tpZF0sIG1pbilcclxuLy8gICAgICAgbWF4ID0gTWF0aC5tYXgocm93LnZhbHVlc1tpZF0sIG1heClcclxuLy8gICAgIH0pXHJcbi8vICAgICByZXR1cm4gW21pbiwgbWF4XVxyXG4vLyAgIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSlcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXZcclxuLy8gICAgICAgc3R5bGU9e3tcclxuLy8gICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbi8vICAgICAgIH19XHJcbi8vICAgICA+XHJcbi8vICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZVswXSB8fCAnJ31cclxuLy8gICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuLy8gICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbi8vICAgICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZVxyXG4vLyAgICAgICAgICAgc2V0RmlsdGVyKChvbGQgPSBbXSkgPT4gW3ZhbCA/IHBhcnNlSW50KHZhbCwgMTApIDogdW5kZWZpbmVkLCBvbGRbMV1dKVxyXG4vLyAgICAgICAgIH19XHJcbi8vICAgICAgICAgcGxhY2Vob2xkZXI9e2BNaW4gKCR7bWlufSlgfVxyXG4vLyAgICAgICAgIHN0eWxlPXt7XHJcbi8vICAgICAgICAgICB3aWR0aDogJzcwcHgnLFxyXG4vLyAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcwLjVyZW0nLFxyXG4vLyAgICAgICAgIH19XHJcbi8vICAgICAgIC8+XHJcbi8vICAgICAgIHRvXHJcbi8vICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZVsxXSB8fCAnJ31cclxuLy8gICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuLy8gICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbi8vICAgICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZVxyXG4vLyAgICAgICAgICAgc2V0RmlsdGVyKChvbGQgPSBbXSkgPT4gW29sZFswXSwgdmFsID8gcGFyc2VJbnQodmFsLCAxMCkgOiB1bmRlZmluZWRdKVxyXG4vLyAgICAgICAgIH19XHJcbi8vICAgICAgICAgcGxhY2Vob2xkZXI9e2BNYXggKCR7bWF4fSlgfVxyXG4vLyAgICAgICAgIHN0eWxlPXt7XHJcbi8vICAgICAgICAgICB3aWR0aDogJzcwcHgnLFxyXG4vLyAgICAgICAgICAgbWFyZ2luTGVmdDogJzAuNXJlbScsXHJcbi8vICAgICAgICAgfX1cclxuLy8gICAgICAgLz5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZnV6enlUZXh0RmlsdGVyRm4ocm93cywgaWQsIGZpbHRlclZhbHVlKSB7XHJcbi8vICAgcmV0dXJuIG1hdGNoU29ydGVyKHJvd3MsIGZpbHRlclZhbHVlLCB7IGtleXM6IFtyb3cgPT4gcm93LnZhbHVlc1tpZF1dIH0pXHJcbi8vIH1cclxuXHJcbi8vIC8vIExldCB0aGUgdGFibGUgcmVtb3ZlIHRoZSBmaWx0ZXIgaWYgdGhlIHN0cmluZyBpcyBlbXB0eVxyXG4vLyBmdXp6eVRleHRGaWx0ZXJGbi5hdXRvUmVtb3ZlID0gdmFsID0+ICF2YWxcclxuXHJcbi8vIC8vIEJlIHN1cmUgdG8gcGFzcyBvdXIgdXBkYXRlTXlEYXRhIGFuZCB0aGUgc2tpcFJlc2V0IG9wdGlvblxyXG4vLyBmdW5jdGlvbiBUYWJsZSh7IGNvbHVtbnMsIGRhdGEsIHVwZGF0ZU15RGF0YSwgc2tpcFJlc2V0IH0pIHtcclxuLy8gICBjb25zdCBmaWx0ZXJUeXBlcyA9IFJlYWN0LnVzZU1lbW8oXHJcbi8vICAgICAoKSA9PiAoe1xyXG4vLyAgICAgICAvLyBBZGQgYSBuZXcgZnV6enlUZXh0RmlsdGVyRm4gZmlsdGVyIHR5cGUuXHJcbi8vICAgICAgIGZ1enp5VGV4dDogZnV6enlUZXh0RmlsdGVyRm4sXHJcbi8vICAgICAgIC8vIE9yLCBvdmVycmlkZSB0aGUgZGVmYXVsdCB0ZXh0IGZpbHRlciB0byB1c2VcclxuLy8gICAgICAgLy8gXCJzdGFydFdpdGhcIlxyXG4vLyAgICAgICB0ZXh0OiAocm93cywgaWQsIGZpbHRlclZhbHVlKSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIHJvd3MuZmlsdGVyKHJvdyA9PiB7XHJcbi8vICAgICAgICAgICBjb25zdCByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdXHJcbi8vICAgICAgICAgICByZXR1cm4gcm93VmFsdWUgIT09IHVuZGVmaW5lZFxyXG4vLyAgICAgICAgICAgICA/IFN0cmluZyhyb3dWYWx1ZSlcclxuLy8gICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbi8vICAgICAgICAgICAgICAgICAuc3RhcnRzV2l0aChTdHJpbmcoZmlsdGVyVmFsdWUpLnRvTG93ZXJDYXNlKCkpXHJcbi8vICAgICAgICAgICAgIDogdHJ1ZVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9KSxcclxuLy8gICAgIFtdXHJcbi8vICAgKVxyXG5cclxuLy8gICBjb25zdCBkZWZhdWx0Q29sdW1uID0gUmVhY3QudXNlTWVtbyhcclxuLy8gICAgICgpID0+ICh7XHJcbi8vICAgICAgIC8vIExldCdzIHNldCB1cCBvdXIgZGVmYXVsdCBGaWx0ZXIgVUlcclxuLy8gICAgICAgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG4vLyAgICAgICAvLyBBbmQgYWxzbyBvdXIgZGVmYXVsdCBlZGl0YWJsZSBjZWxsXHJcbi8vICAgICAgIENlbGw6IEVkaXRhYmxlQ2VsbCxcclxuLy8gICAgIH0pLFxyXG4vLyAgICAgW11cclxuLy8gICApXHJcblxyXG4vLyAgIC8vIFVzZSB0aGUgc3RhdGUgYW5kIGZ1bmN0aW9ucyByZXR1cm5lZCBmcm9tIHVzZVRhYmxlIHRvIGJ1aWxkIHlvdXIgVUlcclxuLy8gICBjb25zdCB7XHJcbi8vICAgICBnZXRUYWJsZVByb3BzLFxyXG4vLyAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbi8vICAgICBoZWFkZXJHcm91cHMsXHJcbi8vICAgICBwcmVwYXJlUm93LFxyXG4vLyAgICAgcGFnZSwgLy8gSW5zdGVhZCBvZiB1c2luZyAncm93cycsIHdlJ2xsIHVzZSBwYWdlLFxyXG4vLyAgICAgLy8gd2hpY2ggaGFzIG9ubHkgdGhlIHJvd3MgZm9yIHRoZSBhY3RpdmUgcGFnZVxyXG5cclxuLy8gICAgIC8vIFRoZSByZXN0IG9mIHRoZXNlIHRoaW5ncyBhcmUgc3VwZXIgaGFuZHksIHRvbyA7KVxyXG4vLyAgICAgY2FuUHJldmlvdXNQYWdlLFxyXG4vLyAgICAgY2FuTmV4dFBhZ2UsXHJcbi8vICAgICBwYWdlT3B0aW9ucyxcclxuLy8gICAgIHBhZ2VDb3VudCxcclxuLy8gICAgIGdvdG9QYWdlLFxyXG4vLyAgICAgbmV4dFBhZ2UsXHJcbi8vICAgICBwcmV2aW91c1BhZ2UsXHJcbi8vICAgICBzZXRQYWdlU2l6ZSxcclxuLy8gICAgIHN0YXRlOiB7XHJcbi8vICAgICAgIHBhZ2VJbmRleCxcclxuLy8gICAgICAgcGFnZVNpemUsXHJcbi8vICAgICAgIHNvcnRCeSxcclxuLy8gICAgICAgZ3JvdXBCeSxcclxuLy8gICAgICAgZXhwYW5kZWQsXHJcbi8vICAgICAgIGZpbHRlcnMsXHJcbi8vICAgICAgIHNlbGVjdGVkUm93SWRzLFxyXG4vLyAgICAgfSxcclxuLy8gICB9ID0gdXNlVGFibGUoXHJcbi8vICAgICB7XHJcbi8vICAgICAgIGNvbHVtbnMsXHJcbi8vICAgICAgIGRhdGEsXHJcbi8vICAgICAgIGRlZmF1bHRDb2x1bW4sXHJcbi8vICAgICAgIGZpbHRlclR5cGVzLFxyXG4vLyAgICAgICAvLyB1cGRhdGVNeURhdGEgaXNuJ3QgcGFydCBvZiB0aGUgQVBJLCBidXRcclxuLy8gICAgICAgLy8gYW55dGhpbmcgd2UgcHV0IGludG8gdGhlc2Ugb3B0aW9ucyB3aWxsXHJcbi8vICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgYmUgYXZhaWxhYmxlIG9uIHRoZSBpbnN0YW5jZS5cclxuLy8gICAgICAgLy8gVGhhdCB3YXkgd2UgY2FuIGNhbGwgdGhpcyBmdW5jdGlvbiBmcm9tIG91clxyXG4vLyAgICAgICAvLyBjZWxsIHJlbmRlcmVyIVxyXG4vLyAgICAgICB1cGRhdGVNeURhdGEsXHJcbi8vICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBwYXNzIHRoaXMgc28gdGhlIHBhZ2UgZG9lc24ndCBjaGFuZ2VcclxuLy8gICAgICAgLy8gd2hlbiB3ZSBlZGl0IHRoZSBkYXRhLlxyXG4vLyAgICAgICBhdXRvUmVzZXRQYWdlOiAhc2tpcFJlc2V0LFxyXG4vLyAgICAgICBhdXRvUmVzZXRTZWxlY3RlZFJvd3M6ICFza2lwUmVzZXQsXHJcbi8vICAgICAgIGRpc2FibGVNdWx0aVNvcnQ6IHRydWUsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgdXNlRmlsdGVycyxcclxuLy8gICAgIHVzZUdyb3VwQnksXHJcbi8vICAgICB1c2VTb3J0QnksXHJcbi8vICAgICB1c2VFeHBhbmRlZCxcclxuLy8gICAgIHVzZVBhZ2luYXRpb24sXHJcbi8vICAgICB1c2VSb3dTZWxlY3QsXHJcbi8vICAgICAvLyBIZXJlIHdlIHdpbGwgdXNlIGEgcGx1Z2luIHRvIGFkZCBvdXIgc2VsZWN0aW9uIGNvbHVtblxyXG4vLyAgICAgaG9va3MgPT4ge1xyXG4vLyAgICAgICBob29rcy52aXNpYmxlQ29sdW1ucy5wdXNoKGNvbHVtbnMgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiBbXHJcbi8vICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIGlkOiAnc2VsZWN0aW9uJyxcclxuLy8gICAgICAgICAgICAgLy8gTWFrZSB0aGlzIGNvbHVtbiBhIGdyb3VwQnlCb3VuZGFyeS4gVGhpcyBlbnN1cmVzIHRoYXQgZ3JvdXBCeSBjb2x1bW5zXHJcbi8vICAgICAgICAgICAgIC8vIGFyZSBwbGFjZWQgYWZ0ZXIgaXRcclxuLy8gICAgICAgICAgICAgZ3JvdXBCeUJvdW5kYXJ5OiB0cnVlLFxyXG4vLyAgICAgICAgICAgICAvLyBUaGUgaGVhZGVyIGNhbiB1c2UgdGhlIHRhYmxlJ3MgZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgbWV0aG9kXHJcbi8vICAgICAgICAgICAgIC8vIHRvIHJlbmRlciBhIGNoZWNrYm94XHJcbi8vICAgICAgICAgICAgIEhlYWRlcjogKHsgZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgfSkgPT4gKFxyXG4vLyAgICAgICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgICAgICA8SW5kZXRlcm1pbmF0ZUNoZWNrYm94IHsuLi5nZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcygpfSAvPlxyXG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICApLFxyXG4vLyAgICAgICAgICAgICAvLyBUaGUgY2VsbCBjYW4gdXNlIHRoZSBpbmRpdmlkdWFsIHJvdydzIGdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMgbWV0aG9kXHJcbi8vICAgICAgICAgICAgIC8vIHRvIHRoZSByZW5kZXIgYSBjaGVja2JveFxyXG4vLyAgICAgICAgICAgICBDZWxsOiAoeyByb3cgfSkgPT4gKFxyXG4vLyAgICAgICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgICAgICA8SW5kZXRlcm1pbmF0ZUNoZWNrYm94IHsuLi5yb3cuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcygpfSAvPlxyXG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICApLFxyXG4vLyAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgIC4uLmNvbHVtbnMsXHJcbi8vICAgICAgICAgXVxyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyAgIClcclxuXHJcbi8vICAgLy8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8PlxyXG4vLyAgICAgICA8dGFibGUgey4uLmdldFRhYmxlUHJvcHMoKX0+XHJcbi8vICAgICAgICAgPHRoZWFkPlxyXG4vLyAgICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoaGVhZGVyR3JvdXAgPT4gKFxyXG4vLyAgICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XHJcbi8vICAgICAgICAgICAgICAge2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKGNvbHVtbiA9PiAoXHJcbi8vICAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfT5cclxuLy8gICAgICAgICAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29sdW1uIGNhbiBiZSBncm91cGVkLCBsZXQncyBhZGQgYSB0b2dnbGVcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5jb2x1bW4uZ2V0R3JvdXBCeVRvZ2dsZVByb3BzKCl9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzR3JvdXBlZCA/ICfwn5uRICcgOiAn8J+RiiAnfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5jb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICB7LyogQWRkIGEgc29ydCBkaXJlY3Rpb24gaW5kaWNhdG9yICovfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5pc1NvcnRlZERlc2NcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcg8J+UvSdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcg8J+UvCdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICB7LyogUmVuZGVyIHRoZSBjb2x1bW5zIGZpbHRlciBVSSAqL31cclxuLy8gICAgICAgICAgICAgICAgICAgPGRpdj57Y29sdW1uLmNhbkZpbHRlciA/IGNvbHVtbi5yZW5kZXIoJ0ZpbHRlcicpIDogbnVsbH08L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgIDwvdGg+XHJcbi8vICAgICAgICAgICAgICAgKSl9XHJcbi8vICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICApKX1cclxuLy8gICAgICAgICA8L3RoZWFkPlxyXG4vLyAgICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XHJcbi8vICAgICAgICAgICB7cGFnZS5tYXAocm93ID0+IHtcclxuLy8gICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpXHJcbi8vICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XHJcbi8vICAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcChjZWxsID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAge2NlbGwuaXNHcm91cGVkID8gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCdzIGEgZ3JvdXBlZCBjZWxsLCBhZGQgYW4gZXhwYW5kZXIgYW5kIHJvdyBjb3VudFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5yb3cuZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcygpfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuaXNFeHBhbmRlZCA/ICfwn5GHJyA6ICfwn5GJJ31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+eycgJ31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoJ0NlbGwnLCB7IGVkaXRhYmxlOiBmYWxzZSB9KX0gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuc3ViUm93cy5sZW5ndGh9KVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzQWdncmVnYXRlZCA/IChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNlbGwgaXMgYWdncmVnYXRlZCwgdXNlIHRoZSBBZ2dyZWdhdGVkXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlcmVyIGZvciBjZWxsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKCdBZ2dyZWdhdGVkJylcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzUGxhY2Vob2xkZXIgPyBudWxsIDogKCAvLyBGb3IgY2VsbHMgd2l0aCByZXBlYXRlZCB2YWx1ZXMsIHJlbmRlciBudWxsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwganVzdCByZW5kZXIgdGhlIHJlZ3VsYXIgY2VsbFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcignQ2VsbCcsIHsgZWRpdGFibGU6IHRydWUgfSlcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuLy8gICAgICAgICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgPC90Ym9keT5cclxuLy8gICAgICAgPC90YWJsZT5cclxuLy8gICAgICAgey8qXHJcbi8vICAgICAgICAgUGFnaW5hdGlvbiBjYW4gYmUgYnVpbHQgaG93ZXZlciB5b3UnZCBsaWtlLlxyXG4vLyAgICAgICAgIFRoaXMgaXMganVzdCBhIHZlcnkgYmFzaWMgVUkgaW1wbGVtZW50YXRpb246XHJcbi8vICAgICAgICovfVxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKDApfSBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX0+XHJcbi8vICAgICAgICAgICB7Jzw8J31cclxuLy8gICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJldmlvdXNQYWdlKCl9IGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfT5cclxuLy8gICAgICAgICAgIHsnPCd9XHJcbi8vICAgICAgICAgPC9idXR0b24+eycgJ31cclxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5leHRQYWdlKCl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4vLyAgICAgICAgICAgeyc+J31cclxuLy8gICAgICAgICA8L2J1dHRvbj57JyAnfVxyXG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ290b1BhZ2UocGFnZUNvdW50IC0gMSl9IGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9PlxyXG4vLyAgICAgICAgICAgeyc+Pid9XHJcbi8vICAgICAgICAgPC9idXR0b24+eycgJ31cclxuLy8gICAgICAgICA8c3Bhbj5cclxuLy8gICAgICAgICAgIFBhZ2V7JyAnfVxyXG4vLyAgICAgICAgICAgPHN0cm9uZz5cclxuLy8gICAgICAgICAgICAge3BhZ2VJbmRleCArIDF9IG9mIHtwYWdlT3B0aW9ucy5sZW5ndGh9XHJcbi8vICAgICAgICAgICA8L3N0cm9uZz57JyAnfVxyXG4vLyAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICA8c3Bhbj5cclxuLy8gICAgICAgICAgIHwgR28gdG8gcGFnZTp7JyAnfVxyXG4vLyAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BhZ2VJbmRleCArIDF9XHJcbi8vICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuLy8gICAgICAgICAgICAgICBjb25zdCBwYWdlID0gZS50YXJnZXQudmFsdWUgPyBOdW1iZXIoZS50YXJnZXQudmFsdWUpIC0gMSA6IDBcclxuLy8gICAgICAgICAgICAgICBnb3RvUGFnZShwYWdlKVxyXG4vLyAgICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JyB9fVxyXG4vLyAgICAgICAgICAgLz5cclxuLy8gICAgICAgICA8L3NwYW4+eycgJ31cclxuLy8gICAgICAgICA8c2VsZWN0XHJcbi8vICAgICAgICAgICB2YWx1ZT17cGFnZVNpemV9XHJcbi8vICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbi8vICAgICAgICAgICAgIHNldFBhZ2VTaXplKE51bWJlcihlLnRhcmdldC52YWx1ZSkpXHJcbi8vICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgIHtbMTAsIDIwLCAzMCwgNDAsIDUwXS5tYXAocGFnZVNpemUgPT4gKFxyXG4vLyAgICAgICAgICAgICA8b3B0aW9uIGtleT17cGFnZVNpemV9IHZhbHVlPXtwYWdlU2l6ZX0+XHJcbi8vICAgICAgICAgICAgICAgU2hvdyB7cGFnZVNpemV9XHJcbi8vICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4vLyAgICAgICAgICAgKSl9XHJcbi8vICAgICAgICAgPC9zZWxlY3Q+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8cHJlPlxyXG4vLyAgICAgICAgIDxjb2RlPlxyXG4vLyAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KFxyXG4vLyAgICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgICAgcGFnZUluZGV4LFxyXG4vLyAgICAgICAgICAgICAgIHBhZ2VTaXplLFxyXG4vLyAgICAgICAgICAgICAgIHBhZ2VDb3VudCxcclxuLy8gICAgICAgICAgICAgICBjYW5OZXh0UGFnZSxcclxuLy8gICAgICAgICAgICAgICBjYW5QcmV2aW91c1BhZ2UsXHJcbi8vICAgICAgICAgICAgICAgc29ydEJ5LFxyXG4vLyAgICAgICAgICAgICAgIGdyb3VwQnksXHJcbi8vICAgICAgICAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxyXG4vLyAgICAgICAgICAgICAgIGZpbHRlcnMsXHJcbi8vICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IHNlbGVjdGVkUm93SWRzLFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICBudWxsLFxyXG4vLyAgICAgICAgICAgICAyXHJcbi8vICAgICAgICAgICApfVxyXG4vLyAgICAgICAgIDwvY29kZT5cclxuLy8gICAgICAgPC9wcmU+XHJcbi8vICAgICA8Lz5cclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIC8vIERlZmluZSBhIGN1c3RvbSBmaWx0ZXIgZmlsdGVyIGZ1bmN0aW9uIVxyXG4vLyBmdW5jdGlvbiBmaWx0ZXJHcmVhdGVyVGhhbihyb3dzLCBpZCwgZmlsdGVyVmFsdWUpIHtcclxuLy8gICByZXR1cm4gcm93cy5maWx0ZXIocm93ID0+IHtcclxuLy8gICAgIGNvbnN0IHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF1cclxuLy8gICAgIHJldHVybiByb3dWYWx1ZSA+PSBmaWx0ZXJWYWx1ZVxyXG4vLyAgIH0pXHJcbi8vIH1cclxuXHJcbi8vIC8vIFRoaXMgaXMgYW4gYXV0b1JlbW92ZSBtZXRob2Qgb24gdGhlIGZpbHRlciBmdW5jdGlvbiB0aGF0XHJcbi8vIC8vIHdoZW4gZ2l2ZW4gdGhlIG5ldyBmaWx0ZXIgdmFsdWUgYW5kIHJldHVybnMgdHJ1ZSwgdGhlIGZpbHRlclxyXG4vLyAvLyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC4gTm9ybWFsbHkgdGhpcyBpcyBqdXN0IGFuIHVuZGVmaW5lZFxyXG4vLyAvLyBjaGVjaywgYnV0IGhlcmUsIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgaWYgaXQncyBub3QgYSBudW1iZXJcclxuLy8gZmlsdGVyR3JlYXRlclRoYW4uYXV0b1JlbW92ZSA9IHZhbCA9PiB0eXBlb2YgdmFsICE9PSAnbnVtYmVyJ1xyXG5cclxuLy8gLy8gVGhpcyBpcyBhIGN1c3RvbSBhZ2dyZWdhdG9yIHRoYXRcclxuLy8gLy8gdGFrZXMgaW4gYW4gYXJyYXkgb2YgbGVhZiB2YWx1ZXMgYW5kXHJcbi8vIC8vIHJldHVybnMgdGhlIHJvdW5kZWQgbWVkaWFuXHJcbi8vIGZ1bmN0aW9uIHJvdW5kZWRNZWRpYW4obGVhZlZhbHVlcykge1xyXG4vLyAgIGxldCBtaW4gPSBsZWFmVmFsdWVzWzBdIHx8IDBcclxuLy8gICBsZXQgbWF4ID0gbGVhZlZhbHVlc1swXSB8fCAwXHJcblxyXG4vLyAgIGxlYWZWYWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbi8vICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIHZhbHVlKVxyXG4vLyAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZSlcclxuLy8gICB9KVxyXG5cclxuLy8gICByZXR1cm4gTWF0aC5yb3VuZCgobWluICsgbWF4KSAvIDIpXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IEluZGV0ZXJtaW5hdGVDaGVja2JveCA9IFJlYWN0LmZvcndhcmRSZWYoXHJcbi8vICAgKHsgaW5kZXRlcm1pbmF0ZSwgLi4ucmVzdCB9LCByZWYpID0+IHtcclxuLy8gICAgIGNvbnN0IGRlZmF1bHRSZWYgPSBSZWFjdC51c2VSZWYoKVxyXG4vLyAgICAgY29uc3QgcmVzb2x2ZWRSZWYgPSByZWYgfHwgZGVmYXVsdFJlZlxyXG5cclxuLy8gICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgIHJlc29sdmVkUmVmLmN1cnJlbnQuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGVcclxuLy8gICAgIH0sIFtyZXNvbHZlZFJlZiwgaW5kZXRlcm1pbmF0ZV0pXHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgPD5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgcmVmPXtyZXNvbHZlZFJlZn0gey4uLnJlc3R9IC8+XHJcbi8vICAgICAgIDwvPlxyXG4vLyAgICAgKVxyXG4vLyAgIH1cclxuLy8gKVxyXG5cclxuLy8gZnVuY3Rpb24gQXBwKCkge1xyXG4vLyAgIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxyXG4vLyAgICAgKCkgPT4gW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgSGVhZGVyOiAnTmFtZScsXHJcbi8vICAgICAgICAgY29sdW1uczogW1xyXG4vLyAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICBIZWFkZXI6ICdGaXJzdCBOYW1lJyxcclxuLy8gICAgICAgICAgICAgYWNjZXNzb3I6ICdmaXJzdE5hbWUnLFxyXG4vLyAgICAgICAgICAgICAvLyBVc2UgYSB0d28tc3RhZ2UgYWdncmVnYXRvciBoZXJlIHRvIGZpcnN0XHJcbi8vICAgICAgICAgICAgIC8vIGNvdW50IHRoZSB0b3RhbCByb3dzIGJlaW5nIGFnZ3JlZ2F0ZWQsXHJcbi8vICAgICAgICAgICAgIC8vIHRoZW4gc3VtIGFueSBvZiB0aG9zZSBjb3VudHMgaWYgdGhleSBhcmVcclxuLy8gICAgICAgICAgICAgLy8gYWdncmVnYXRlZCBmdXJ0aGVyXHJcbi8vICAgICAgICAgICAgIGFnZ3JlZ2F0ZTogJ2NvdW50JyxcclxuLy8gICAgICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IE5hbWVzYCxcclxuLy8gICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIEhlYWRlcjogJ0xhc3QgTmFtZScsXHJcbi8vICAgICAgICAgICAgIGFjY2Vzc29yOiAnbGFzdE5hbWUnLFxyXG4vLyAgICAgICAgICAgICAvLyBVc2Ugb3VyIGN1c3RvbSBgZnV6enlUZXh0YCBmaWx0ZXIgb24gdGhpcyBjb2x1bW5cclxuLy8gICAgICAgICAgICAgZmlsdGVyOiAnZnV6enlUZXh0JyxcclxuLy8gICAgICAgICAgICAgLy8gVXNlIGFub3RoZXIgdHdvLXN0YWdlIGFnZ3JlZ2F0b3IgaGVyZSB0b1xyXG4vLyAgICAgICAgICAgICAvLyBmaXJzdCBjb3VudCB0aGUgVU5JUVVFIHZhbHVlcyBmcm9tIHRoZSByb3dzXHJcbi8vICAgICAgICAgICAgIC8vIGJlaW5nIGFnZ3JlZ2F0ZWQsIHRoZW4gc3VtIHRob3NlIGNvdW50cyBpZlxyXG4vLyAgICAgICAgICAgICAvLyB0aGV5IGFyZSBhZ2dyZWdhdGVkIGZ1cnRoZXJcclxuLy8gICAgICAgICAgICAgYWdncmVnYXRlOiAndW5pcXVlQ291bnQnLFxyXG4vLyAgICAgICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX0gVW5pcXVlIE5hbWVzYCxcclxuLy8gICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIEhlYWRlcjogJ0luZm8nLFxyXG4vLyAgICAgICAgIGNvbHVtbnM6IFtcclxuLy8gICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgSGVhZGVyOiAnQWdlJyxcclxuLy8gICAgICAgICAgICAgYWNjZXNzb3I6ICdhZ2UnLFxyXG4vLyAgICAgICAgICAgICBGaWx0ZXI6IFNsaWRlckNvbHVtbkZpbHRlcixcclxuLy8gICAgICAgICAgICAgZmlsdGVyOiAnZXF1YWxzJyxcclxuLy8gICAgICAgICAgICAgLy8gQWdncmVnYXRlIHRoZSBhdmVyYWdlIGFnZSBvZiB2aXNpdG9yc1xyXG4vLyAgICAgICAgICAgICBhZ2dyZWdhdGU6ICdhdmVyYWdlJyxcclxuLy8gICAgICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IChhdmcpYCxcclxuLy8gICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIEhlYWRlcjogJ1Zpc2l0cycsXHJcbi8vICAgICAgICAgICAgIGFjY2Vzc29yOiAndmlzaXRzJyxcclxuLy8gICAgICAgICAgICAgRmlsdGVyOiBOdW1iZXJSYW5nZUNvbHVtbkZpbHRlcixcclxuLy8gICAgICAgICAgICAgZmlsdGVyOiAnYmV0d2VlbicsXHJcbi8vICAgICAgICAgICAgIC8vIEFnZ3JlZ2F0ZSB0aGUgc3VtIG9mIGFsbCB2aXNpdHNcclxuLy8gICAgICAgICAgICAgYWdncmVnYXRlOiAnc3VtJyxcclxuLy8gICAgICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9ICh0b3RhbClgLFxyXG4vLyAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgSGVhZGVyOiAnU3RhdHVzJyxcclxuLy8gICAgICAgICAgICAgYWNjZXNzb3I6ICdzdGF0dXMnLFxyXG4vLyAgICAgICAgICAgICBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcclxuLy8gICAgICAgICAgICAgZmlsdGVyOiAnaW5jbHVkZXMnLFxyXG4vLyAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgSGVhZGVyOiAnUHJvZmlsZSBQcm9ncmVzcycsXHJcbi8vICAgICAgICAgICAgIGFjY2Vzc29yOiAncHJvZ3Jlc3MnLFxyXG4vLyAgICAgICAgICAgICBGaWx0ZXI6IFNsaWRlckNvbHVtbkZpbHRlcixcclxuLy8gICAgICAgICAgICAgZmlsdGVyOiBmaWx0ZXJHcmVhdGVyVGhhbixcclxuLy8gICAgICAgICAgICAgLy8gVXNlIG91ciBjdXN0b20gcm91bmRlZE1lZGlhbiBhZ2dyZWdhdG9yXHJcbi8vICAgICAgICAgICAgIGFnZ3JlZ2F0ZTogcm91bmRlZE1lZGlhbixcclxuLy8gICAgICAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9IChtZWQpYCxcclxuLy8gICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgICBbXVxyXG4vLyAgIClcclxuXHJcbi8vICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gbWFrZURhdGEoMTAwMDApKVxyXG4vLyAgIGNvbnN0IFtvcmlnaW5hbERhdGFdID0gUmVhY3QudXNlU3RhdGUoZGF0YSlcclxuXHJcbi8vICAgLy8gV2UgbmVlZCB0byBrZWVwIHRoZSB0YWJsZSBmcm9tIHJlc2V0dGluZyB0aGUgcGFnZUluZGV4IHdoZW4gd2VcclxuLy8gICAvLyBVcGRhdGUgZGF0YS4gU28gd2UgY2FuIGtlZXAgdHJhY2sgb2YgdGhhdCBmbGFnIHdpdGggYSByZWYuXHJcbi8vICAgY29uc3Qgc2tpcFJlc2V0UmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKVxyXG5cclxuLy8gICAvLyBXaGVuIG91ciBjZWxsIHJlbmRlcmVyIGNhbGxzIHVwZGF0ZU15RGF0YSwgd2UnbGwgdXNlXHJcbi8vICAgLy8gdGhlIHJvd0luZGV4LCBjb2x1bW5JZCBhbmQgbmV3IHZhbHVlIHRvIHVwZGF0ZSB0aGVcclxuLy8gICAvLyBvcmlnaW5hbCBkYXRhXHJcbi8vICAgY29uc3QgdXBkYXRlTXlEYXRhID0gKHJvd0luZGV4LCBjb2x1bW5JZCwgdmFsdWUpID0+IHtcclxuLy8gICAgIC8vIFdlIGFsc28gdHVybiBvbiB0aGUgZmxhZyB0byBub3QgcmVzZXQgdGhlIHBhZ2VcclxuLy8gICAgIHNraXBSZXNldFJlZi5jdXJyZW50ID0gdHJ1ZVxyXG4vLyAgICAgc2V0RGF0YShvbGQgPT5cclxuLy8gICAgICAgb2xkLm1hcCgocm93LCBpbmRleCkgPT4ge1xyXG4vLyAgICAgICAgIGlmIChpbmRleCA9PT0gcm93SW5kZXgpIHtcclxuLy8gICAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIC4uLnJvdyxcclxuLy8gICAgICAgICAgICAgW2NvbHVtbklkXTogdmFsdWUsXHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIHJldHVybiByb3dcclxuLy8gICAgICAgfSlcclxuLy8gICAgIClcclxuLy8gICB9XHJcblxyXG4vLyAgIC8vIEFmdGVyIGRhdGEgY2hhbmdlcywgd2UgdHVybiB0aGUgZmxhZyBiYWNrIG9mZlxyXG4vLyAgIC8vIHNvIHRoYXQgaWYgZGF0YSBhY3R1YWxseSBjaGFuZ2VzIHdoZW4gd2UncmUgbm90XHJcbi8vICAgLy8gZWRpdGluZyBpdCwgdGhlIHBhZ2UgaXMgcmVzZXRcclxuLy8gICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgc2tpcFJlc2V0UmVmLmN1cnJlbnQgPSBmYWxzZVxyXG4vLyAgIH0sIFtkYXRhXSlcclxuXHJcbi8vICAgLy8gTGV0J3MgYWRkIGEgZGF0YSByZXNldHRlci9yYW5kb21pemVyIHRvIGhlbHBcclxuLy8gICAvLyBpbGx1c3RyYXRlIHRoYXQgZmxvdy4uLlxyXG4vLyAgIGNvbnN0IHJlc2V0RGF0YSA9ICgpID0+IHtcclxuLy8gICAgIC8vIERvbid0IHJlc2V0IHRoZSBwYWdlIHdoZW4gd2UgZG8gdGhpc1xyXG4vLyAgICAgc2tpcFJlc2V0UmVmLmN1cnJlbnQgPSB0cnVlXHJcbi8vICAgICBzZXREYXRhKG9yaWdpbmFsRGF0YSlcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8U3R5bGVzPlxyXG4vLyAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0RGF0YX0+UmVzZXQgRGF0YTwvYnV0dG9uPlxyXG4vLyAgICAgICA8VGFibGVcclxuLy8gICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4vLyAgICAgICAgIGRhdGE9e2RhdGF9XHJcbi8vICAgICAgICAgdXBkYXRlTXlEYXRhPXt1cGRhdGVNeURhdGF9XHJcbi8vICAgICAgICAgc2tpcFJlc2V0PXtza2lwUmVzZXRSZWYuY3VycmVudH1cclxuLy8gICAgICAgLz5cclxuLy8gICAgIDwvU3R5bGVzPlxyXG4vLyAgIClcclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9