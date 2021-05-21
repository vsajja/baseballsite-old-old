self["webpackHotUpdate_N_E"]("pages/admin/dashboard",{

/***/ "./components/Cards/CardBarChart.js":
/*!******************************************!*\
  !*** ./components/Cards/CardBarChart.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CardBarChart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\git\\baseballsite\\portal\\components\\Cards\\CardBarChart.js",
    _s = $RefreshSig$();



function CardBarChart() {
  _s();

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: ["January1", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: new Date().getFullYear(),
          backgroundColor: "#ed64a6",
          borderColor: "#ed64a6",
          data: [30, 78, 56, 34, 100, 45, 13],
          fill: false,
          barThickness: 8
        }, {
          label: new Date().getFullYear() - 1,
          fill: false,
          backgroundColor: "#4c51bf",
          borderColor: "#4c51bf",
          data: [27, 68, 86, 74, 10, 4, 87],
          barThickness: 8
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart"
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)"
          },
          align: "end",
          position: "bottom"
        },
        scales: {
          xAxes: [{
            display: false,
            scaleLabel: {
              display: true,
              labelString: "Month"
            },
            gridLines: {
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(33, 37, 41, 0.3)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Value"
            },
            gridLines: {
              borderDash: [2],
              drawBorder: false,
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.2)",
              zeroLineColor: "rgba(33, 37, 41, 0.15)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2]
            }
          }]
        }
      }
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new (chart_js__WEBPACK_IMPORTED_MODULE_2___default())(ctx, config);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "rounded-t mb-0 px-4 py-3 bg-transparent",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-wrap items-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "relative w-full max-w-full flex-grow flex-1",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
              className: "uppercase text-blueGray-400 mb-1 text-xs font-semibold",
              children: "Performance"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "text-blueGray-700 text-xl font-semibold",
              children: "Total orders"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "p-4 flex-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "relative h-350-px",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("canvas", {
            id: "bar-chart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(CardBarChart, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = CardBarChart;

var _c;

$RefreshReg$(_c, "CardBarChart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9DYXJkQmFyQ2hhcnQuanMiXSwibmFtZXMiOlsiQ2FyZEJhckNoYXJ0IiwiUmVhY3QiLCJjb25maWciLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImZpbGwiLCJiYXJUaGlja25lc3MiLCJvcHRpb25zIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInJlc3BvbnNpdmUiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwidG9vbHRpcHMiLCJtb2RlIiwiaW50ZXJzZWN0IiwiaG92ZXIiLCJsZWdlbmQiLCJmb250Q29sb3IiLCJhbGlnbiIsInBvc2l0aW9uIiwic2NhbGVzIiwieEF4ZXMiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJncmlkTGluZXMiLCJib3JkZXJEYXNoIiwiYm9yZGVyRGFzaE9mZnNldCIsImNvbG9yIiwiemVyb0xpbmVDb2xvciIsInplcm9MaW5lQm9yZGVyRGFzaCIsInplcm9MaW5lQm9yZGVyRGFzaE9mZnNldCIsInlBeGVzIiwiZHJhd0JvcmRlciIsImN0eCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwid2luZG93IiwibXlCYXIiLCJDaGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUNyQ0Msd0RBQUEsQ0FBZ0IsTUFBTTtBQUNwQixRQUFJQyxNQUFNLEdBQUc7QUFDWEMsVUFBSSxFQUFFLEtBREs7QUFFWEMsVUFBSSxFQUFFO0FBQ0pDLGNBQU0sRUFBRSxDQUNOLFVBRE0sRUFFTixVQUZNLEVBR04sT0FITSxFQUlOLE9BSk0sRUFLTixLQUxNLEVBTU4sTUFOTSxFQU9OLE1BUE0sQ0FESjtBQVVKQyxnQkFBUSxF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QUMseUNBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsNkJBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsNkNBQWY7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUMsd0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRTtBQUFJLHVCQUFTLEVBQUMseUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWFFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBRUU7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsaUNBQ0U7QUFBUSxjQUFFLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXdCRDs7R0F6SHVCRixZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2Rhc2hib2FyZC4xNDg4YTM5NjQ2ZjIyNjBjNzRmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkQmFyQ2hhcnQoKSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgIFwiSmFudWFyeTFcIixcbiAgICAgICAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgICAgICAgXCJNYXJjaFwiLFxuICAgICAgICAgIFwiQXByaWxcIixcbiAgICAgICAgICBcIk1heVwiLFxuICAgICAgICAgIFwiSnVuZVwiLFxuICAgICAgICAgIFwiSnVseVwiLFxuICAgICAgICBdLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VkNjRhNlwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2VkNjRhNlwiLFxuICAgICAgICAgICAgZGF0YTogWzMwLCA3OCwgNTYsIDM0LCAxMDAsIDQ1LCAxM10sXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgIGJhclRoaWNrbmVzczogOCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAxLFxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRjNTFiZlwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzRjNTFiZlwiLFxuICAgICAgICAgICAgZGF0YTogWzI3LCA2OCwgODYsIDc0LCAxMCwgNCwgODddLFxuICAgICAgICAgICAgYmFyVGhpY2tuZXNzOiA4LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICB0ZXh0OiBcIk9yZGVycyBDaGFydFwiLFxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIG1vZGU6IFwiaW5kZXhcIixcbiAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIG1vZGU6IFwibmVhcmVzdFwiLFxuICAgICAgICAgIGludGVyc2VjdDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBmb250Q29sb3I6IFwicmdiYSgwLDAsMCwuNClcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFsaWduOiBcImVuZFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbVwiLFxuICAgICAgICB9LFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IFwiTW9udGhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyRGFzaDogWzJdLFxuICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDMzLCAzNywgNDEsIDAuMylcIixcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUNvbG9yOiBcInJnYmEoMzMsIDM3LCA0MSwgMC4zKVwiLFxuICAgICAgICAgICAgICAgIHplcm9MaW5lQm9yZGVyRGFzaDogWzJdLFxuICAgICAgICAgICAgICAgIHplcm9MaW5lQm9yZGVyRGFzaE9mZnNldDogWzJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHlBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogXCJWYWx1ZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJEYXNoOiBbMl0sXG4gICAgICAgICAgICAgICAgZHJhd0JvcmRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogWzJdLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMzMsIDM3LCA0MSwgMC4yKVwiLFxuICAgICAgICAgICAgICAgIHplcm9MaW5lQ29sb3I6IFwicmdiYSgzMywgMzcsIDQxLCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgIHplcm9MaW5lQm9yZGVyRGFzaDogWzJdLFxuICAgICAgICAgICAgICAgIHplcm9MaW5lQm9yZGVyRGFzaE9mZnNldDogWzJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGxldCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhci1jaGFydFwiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgd2luZG93Lm15QmFyID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLXctMCBicmVhay13b3JkcyBiZy13aGl0ZSB3LWZ1bGwgbWItNiBzaGFkb3ctbGcgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdCBtYi0wIHB4LTQgcHktMyBiZy10cmFuc3BhcmVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtYXgtdy1mdWxsIGZsZXgtZ3JvdyBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWJsdWVHcmF5LTQwMCBtYi0xIHRleHQteHMgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIFBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTcwMCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICBUb3RhbCBvcmRlcnNcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgZmxleC1hdXRvXCI+XG4gICAgICAgICAgey8qIENoYXJ0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0zNTAtcHhcIj5cbiAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJiYXItY2hhcnRcIj48L2NhbnZhcz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=