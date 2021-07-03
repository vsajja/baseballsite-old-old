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
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _makeData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../makeData */ "./makeData.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\git\\baseballsite\\portal\\components\\baseball\\CardPlayers.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();




 // import matchSorter from 'match-sorter'

 // components

CardPlayers.defaultProps = {
  league: "Major League Baseball",
  division: ""
};
CardPlayers.propTypes = {
  league: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
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
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  }; // We'll only update the external data when the input is blurred


  const onBlur = () => {
    updateMyData(index, id, value);
  }; // If the initialValue is changed externall, sync it up with our state


  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  if (!editable) {
    return `${initialValue}`;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
  const options = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]); // Render a multi-select box

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
    value: filterValue,
    onChange: e => {
      setFilter(e.target.value || undefined);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: "",
      children: "All"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), options.map((option, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
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
  const [min, max] = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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

  const [min, max] = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      display: 'flex'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
    }, this), "to", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
function CardPlayers({
  league
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "rounded-t mb-0 px-4 py-3 border-0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "block w-full overflow-x-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Table, {
          columns: columns,
          data: data,
          updateMyData: updateMyData,
          skipReset: skipResetRef.current
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c6 = CardPlayers;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "EditableCell");
$RefreshReg$(_c2, "DefaultColumnFilter");
$RefreshReg$(_c3, "SelectColumnFilter");
$RefreshReg$(_c4, "SliderColumnFilter");
$RefreshReg$(_c5, "NumberRangeColumnFilter");
$RefreshReg$(_c6, "CardPlayers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyJdLCJuYW1lcyI6WyJDYXJkUGxheWVycyIsImRlZmF1bHRQcm9wcyIsImxlYWd1ZSIsImRpdmlzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiRWRpdGFibGVDZWxsIiwidmFsdWUiLCJpbml0aWFsVmFsdWUiLCJyb3ciLCJpbmRleCIsImNvbHVtbiIsImlkIiwidXBkYXRlTXlEYXRhIiwiZWRpdGFibGUiLCJzZXRWYWx1ZSIsIlJlYWN0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25CbHVyIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsImZpbHRlclZhbHVlIiwicHJlRmlsdGVyZWRSb3dzIiwic2V0RmlsdGVyIiwiY291bnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJvcHRpb25zIiwiU2V0IiwiZm9yRWFjaCIsImFkZCIsInZhbHVlcyIsIm1hcCIsIm9wdGlvbiIsImkiLCJTbGlkZXJDb2x1bW5GaWx0ZXIiLCJtaW4iLCJtYXgiLCJNYXRoIiwicGFyc2VJbnQiLCJOdW1iZXJSYW5nZUNvbHVtbkZpbHRlciIsImRpc3BsYXkiLCJ2YWwiLCJvbGQiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImNvbHVtbnMiLCJkYXRhIiwic2tpcFJlc2V0UmVmIiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Q0FVQTs7Q0FLQTs7QUFFQUEsV0FBVyxDQUFDQyxZQUFaLEdBQTJCO0FBQ3pCQyxRQUFNLEVBQUUsdUJBRGlCO0FBRXpCQyxVQUFRLEVBQUU7QUFGZSxDQUEzQjtBQUtBSCxXQUFXLENBQUNJLFNBQVosR0FBd0I7QUFDdEJGLFFBQU0sRUFBRUcsMERBQWdCQztBQURGLENBQXhCLEMsQ0FJQTs7QUFDQSxNQUFN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QUFKLEVBQVNELEdBQUcsR0FBR0gsUUFBUSxDQUFDRyxHQUFELEVBQU0sRUFBTixDQUFYLEdBQXVCakIsU0FBbkMsQ0FBZixDQUFUO0FBQ0QsT0FOSDtBQU9FLGlCQUFXLEVBQUcsUUFBT1ksR0FBSSxHQVAzQjtBQVFFLFdBQUssRUFBRTtBQUNMTyxhQUFLLEVBQUUsTUFERjtBQUVMRSxrQkFBVSxFQUFFO0FBRlA7QUFSVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNEOztJQWhEUU4sdUI7O01BQUFBLHVCO0FBa0RNLFNBQVMzQyxXQUFULENBQXFCO0FBQ2xDRTtBQURrQyxDQUFyQixFQUVaO0FBQ0Qsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx1RkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUssaUJBQVMsRUFBQyw4QkFBZjtBQUFBLCtCQUVFLDhEQUFDLEtBQUQ7QUFDRSxpQkFBTyxFQUFFZ0QsT0FEWDtBQUVFLGNBQUksRUFBRUMsSUFGUjtBQUdFLHNCQUFZLEVBQUVyQyxZQUhoQjtBQUlFLG1CQUFTLEVBQUVzQyxZQUFZLENBQUNDO0FBSjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFpQkQ7TUFwQnVCckQsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41OGQxNmViZjg4OWE5ZmE5MTM0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge1xyXG4gIHVzZVRhYmxlLFxyXG4gIHVzZVBhZ2luYXRpb24sXHJcbiAgdXNlU29ydEJ5LFxyXG4gIHVzZUZpbHRlcnMsXHJcbiAgdXNlR3JvdXBCeSxcclxuICB1c2VFeHBhbmRlZCxcclxuICB1c2VSb3dTZWxlY3QsXHJcbn0gZnJvbSAncmVhY3QtdGFibGUnXHJcbi8vIGltcG9ydCBtYXRjaFNvcnRlciBmcm9tICdtYXRjaC1zb3J0ZXInXHJcblxyXG5pbXBvcnQgbWFrZURhdGEgZnJvbSAnLi4vLi4vbWFrZURhdGEnXHJcblxyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuQ2FyZFBsYXllcnMuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxlYWd1ZTogXCJNYWpvciBMZWFndWUgQmFzZWJhbGxcIixcclxuICBkaXZpc2lvbjogXCJcIlxyXG59O1xyXG5cclxuQ2FyZFBsYXllcnMucHJvcFR5cGVzID0ge1xyXG4gIGxlYWd1ZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuLy8gQ3JlYXRlIGFuIGVkaXRhYmxlIGNlbGwgcmVuZGVyZXJcclxuY29uc3QgRWRpdGFibGVDZWxsID0gKHtcclxuICB2YWx1ZTogaW5pdGlhbFZhbHVlLFxyXG4gIHJvdzogeyBpbmRleCB9LFxyXG4gIGNvbHVtbjogeyBpZCB9LFxyXG4gIHVwZGF0ZU15RGF0YSwgLy8gVGhpcyBpcyBhIGN1c3RvbSBmdW5jdGlvbiB0aGF0IHdlIHN1cHBsaWVkIHRvIG91ciB0YWJsZSBpbnN0YW5jZVxyXG4gIGVkaXRhYmxlLFxyXG59KSA9PiB7XHJcbiAgLy8gV2UgbmVlZCB0byBrZWVwIGFuZCB1cGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBjZWxsIG5vcm1hbGx5XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIC8vIFdlJ2xsIG9ubHkgdXBkYXRlIHRoZSBleHRlcm5hbCBkYXRhIHdoZW4gdGhlIGlucHV0IGlzIGJsdXJyZWRcclxuICBjb25zdCBvbkJsdXIgPSAoKSA9PiB7XHJcbiAgICB1cGRhdGVNeURhdGEoaW5kZXgsIGlkLCB2YWx1ZSlcclxuICB9XHJcblxyXG4gIC8vIElmIHRoZSBpbml0aWFsVmFsdWUgaXMgY2hhbmdlZCBleHRlcm5hbGwsIHN5bmMgaXQgdXAgd2l0aCBvdXIgc3RhdGVcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VmFsdWUoaW5pdGlhbFZhbHVlKVxyXG4gIH0sIFtpbml0aWFsVmFsdWVdKVxyXG5cclxuICBpZiAoIWVkaXRhYmxlKSB7XHJcbiAgICByZXR1cm4gYCR7aW5pdGlhbFZhbHVlfWBcclxuICB9XHJcblxyXG4gIHJldHVybiA8aW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IG9uQmx1cj17b25CbHVyfSAvPlxyXG59XHJcblxyXG4vLyBEZWZpbmUgYSBkZWZhdWx0IFVJIGZvciBmaWx0ZXJpbmdcclxuZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciB9LFxyXG59KSB7XHJcbiAgY29uc3QgY291bnQgPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXRcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8ICcnfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCkgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxyXG4gICAgICB9fVxyXG4gICAgICBwbGFjZWhvbGRlcj17YFNlYXJjaCAke2NvdW50fSByZWNvcmRzLi4uYH1cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSBmb3Igc2VsZWN0aW5nXHJcbi8vIGEgdW5pcXVlIG9wdGlvbiBmcm9tIGEgbGlzdFxyXG5mdW5jdGlvbiBTZWxlY3RDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbn0pIHtcclxuICAvLyBDYWxjdWxhdGUgdGhlIG9wdGlvbnMgZm9yIGZpbHRlcmluZ1xyXG4gIC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3NcclxuICBjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IFNldCgpXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBvcHRpb25zLmFkZChyb3cudmFsdWVzW2lkXSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gWy4uLm9wdGlvbnMudmFsdWVzKCldXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICAvLyBSZW5kZXIgYSBtdWx0aS1zZWxlY3QgYm94XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWxlY3RcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZClcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxyXG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBUaGlzIGlzIGEgY3VzdG9tIGZpbHRlciBVSSB0aGF0IHVzZXMgYVxyXG4vLyBzbGlkZXIgdG8gc2V0IHRoZSBmaWx0ZXIgdmFsdWUgYmV0d2VlbiBhIGNvbHVtbidzXHJcbi8vIG1pbiBhbmQgbWF4IHZhbHVlc1xyXG5mdW5jdGlvbiBTbGlkZXJDb2x1bW5GaWx0ZXIoe1xyXG4gIGNvbHVtbjogeyBmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkIH0sXHJcbn0pIHtcclxuICAvLyBDYWxjdWxhdGUgdGhlIG1pbiBhbmQgbWF4XHJcbiAgLy8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xyXG5cclxuICBjb25zdCBbbWluLCBtYXhdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBsZXQgbWluID0gcHJlRmlsdGVyZWRSb3dzLmxlbmd0aCA/IHByZUZpbHRlcmVkUm93c1swXS52YWx1ZXNbaWRdIDogMFxyXG4gICAgbGV0IG1heCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgIG1pbiA9IE1hdGgubWluKHJvdy52YWx1ZXNbaWRdLCBtaW4pXHJcbiAgICAgIG1heCA9IE1hdGgubWF4KHJvdy52YWx1ZXNbaWRdLCBtYXgpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIFttaW4sIG1heF1cclxuICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgIG1pbj17bWlufVxyXG4gICAgICAgIG1heD17bWF4fVxyXG4gICAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCBtaW59XHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgc2V0RmlsdGVyKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCkpXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIodW5kZWZpbmVkKX0+T2ZmPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gVUkgZm9yIG91ciAnYmV0d2Vlbicgb3IgbnVtYmVyIHJhbmdlXHJcbi8vIGZpbHRlci4gSXQgdXNlcyB0d28gbnVtYmVyIGJveGVzIGFuZCBmaWx0ZXJzIHJvd3MgdG9cclxuLy8gb25lcyB0aGF0IGhhdmUgdmFsdWVzIGJldHdlZW4gdGhlIHR3b1xyXG5mdW5jdGlvbiBOdW1iZXJSYW5nZUNvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlID0gW10sIHByZUZpbHRlcmVkUm93cywgc2V0RmlsdGVyLCBpZCB9LFxyXG59KSB7XHJcbiAgY29uc3QgW21pbiwgbWF4XSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgbGV0IG1pbiA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGggPyBwcmVGaWx0ZXJlZFJvd3NbMF0udmFsdWVzW2lkXSA6IDBcclxuICAgIGxldCBtYXggPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoID8gcHJlRmlsdGVyZWRSb3dzWzBdLnZhbHVlc1tpZF0gOiAwXHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICBtaW4gPSBNYXRoLm1pbihyb3cudmFsdWVzW2lkXSwgbWluKVxyXG4gICAgICBtYXggPSBNYXRoLm1heChyb3cudmFsdWVzW2lkXSwgbWF4KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBbbWluLCBtYXhdXHJcbiAgfSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlWzBdIHx8ICcnfVxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICBzZXRGaWx0ZXIoKG9sZCA9IFtdKSA9PiBbdmFsID8gcGFyc2VJbnQodmFsLCAxMCkgOiB1bmRlZmluZWQsIG9sZFsxXV0pXHJcbiAgICAgICAgfX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17YE1pbiAoJHttaW59KWB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiAnNzBweCcsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogJzAuNXJlbScsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgdG9cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlWzFdIHx8ICcnfVxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICBzZXRGaWx0ZXIoKG9sZCA9IFtdKSA9PiBbb2xkWzBdLCB2YWwgPyBwYXJzZUludCh2YWwsIDEwKSA6IHVuZGVmaW5lZF0pXHJcbiAgICAgICAgfX1cclxuICAgICAgICBwbGFjZWhvbGRlcj17YE1heCAoJHttYXh9KWB9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiAnNzBweCcsXHJcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMC41cmVtJyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkUGxheWVycyh7XHJcbiAgbGVhZ3VlXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgYmctd2hpdGUgdy1mdWxsIG1iLTYgc2hhZG93LWxnIHJvdW5kZWQgcC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXQgbWItMCBweC00IHB5LTMgYm9yZGVyLTBcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBvdmVyZmxvdy14LWF1dG9cIj5cclxuICAgICAgICAgIHsvKiBQcm9qZWN0cyB0YWJsZSAqL31cclxuICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICB1cGRhdGVNeURhdGE9e3VwZGF0ZU15RGF0YX1cclxuICAgICAgICAgICAgc2tpcFJlc2V0PXtza2lwUmVzZXRSZWYuY3VycmVudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=