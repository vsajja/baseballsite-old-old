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
        labels: ["January11111", "January111112", "February", "March", "April", "May", "June", "July"],
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
              lineNumber: 108,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: "text-blueGray-700 text-xl font-semibold",
              children: "Total orders"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "p-4 flex-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "relative h-350-px",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("canvas", {
            id: "bar-chart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9DYXJkQmFyQ2hhcnQuanMiXSwibmFtZXMiOlsiQ2FyZEJhckNoYXJ0IiwiUmVhY3QiLCJjb25maWciLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImZpbGwiLCJiYXJUaGlja25lc3MiLCJvcHRpb25zIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInJlc3BvbnNpdmUiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwidG9vbHRpcHMiLCJtb2RlIiwiaW50ZXJzZWN0IiwiaG92ZXIiLCJsZWdlbmQiLCJmb250Q29sb3IiLCJhbGlnbiIsInBvc2l0aW9uIiwic2NhbGVzIiwieEF4ZXMiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJncmlkTGluZXMiLCJib3JkZXJEYXNoIiwiYm9yZGVyRGFzaE9mZnNldCIsImNvbG9yIiwiemVyb0xpbmVDb2xvciIsInplcm9MaW5lQm9yZGVyRGFzaCIsInplcm9MaW5lQm9yZGVyRGFzaE9mZnNldCIsInlBeGVzIiwiZHJhd0JvcmRlciIsImN0eCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwid2luZG93IiwibXlCYXIiLCJDaGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUNyQ0Msd0RBQUEsQ0FBZ0IsTUFBTTtBQUNwQixRQUFJQyxNQUFNLEdBQUc7QUFDWEMsVUFBSSxFQUFFLEtBREs7QUFFWEMsVUFBSSxFQUFFO0FBQ0pDLGNBQU0sRUFBRSxDQUNOLGNBRE0sRUFFTixlQUZNLEVBR04sVUFITSxFQUlOLE9BSk0sRUFLTixPQUxNLEVBTU4sS0FOTSxFQU9OLE1BUE0sRUFRTixNQVJNLENBREo7QUFX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SyxpQkFBUyxFQUFDLHlDQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLDZCQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLDZDQUFmO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFDLHdEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBSUU7QUFBSSx1QkFBUyxFQUFDLHlDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFhRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLCtCQUVFO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBLGlDQUNFO0FBQVEsY0FBRSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF3QkQ7O0dBMUh1QkYsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9kYXNoYm9hcmQuN2U4M2YzNmZiY2U3Mjg4Njk1YzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZEJhckNoYXJ0KCkge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjb25maWcgPSB7XG4gICAgICB0eXBlOiBcImJhclwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICBcIkphbnVhcnkxMTExMVwiLFxuICAgICAgICAgIFwiSmFudWFyeTExMTExMlwiLFxuICAgICAgICAgIFwiRmVicnVhcnlcIixcbiAgICAgICAgICBcIk1hcmNoXCIsXG4gICAgICAgICAgXCJBcHJpbFwiLFxuICAgICAgICAgIFwiTWF5XCIsXG4gICAgICAgICAgXCJKdW5lXCIsXG4gICAgICAgICAgXCJKdWx5XCIsXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZWQ2NGE2XCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZWQ2NGE2XCIsXG4gICAgICAgICAgICBkYXRhOiBbMzAsIDc4LCA1NiwgMzQsIDEwMCwgNDUsIDEzXSxcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgYmFyVGhpY2tuZXNzOiA4LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDEsXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNGM1MWJmXCIsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjNGM1MWJmXCIsXG4gICAgICAgICAgICBkYXRhOiBbMjcsIDY4LCA4NiwgNzQsIDEwLCA0LCA4N10sXG4gICAgICAgICAgICBiYXJUaGlja25lc3M6IDgsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgIHRleHQ6IFwiT3JkZXJzIENoYXJ0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgICAgbW9kZTogXCJpbmRleFwiLFxuICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgbW9kZTogXCJuZWFyZXN0XCIsXG4gICAgICAgICAgaW50ZXJzZWN0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgIGZvbnRDb2xvcjogXCJyZ2JhKDAsMCwwLC40KVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWxpZ246IFwiZW5kXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogXCJNb250aFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJEYXNoOiBbMl0sXG4gICAgICAgICAgICAgICAgYm9yZGVyRGFzaE9mZnNldDogWzJdLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMzMsIDM3LCA0MSwgMC4zKVwiLFxuICAgICAgICAgICAgICAgIHplcm9MaW5lQ29sb3I6IFwicmdiYSgzMywgMzcsIDQxLCAwLjMpXCIsXG4gICAgICAgICAgICAgICAgemVyb0xpbmVCb3JkZXJEYXNoOiBbMl0sXG4gICAgICAgICAgICAgICAgemVyb0xpbmVCb3JkZXJEYXNoT2Zmc2V0OiBbMl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIlZhbHVlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgIGJvcmRlckRhc2g6IFsyXSxcbiAgICAgICAgICAgICAgICBkcmF3Qm9yZGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiBbMl0sXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgzMywgMzcsIDQxLCAwLjIpXCIsXG4gICAgICAgICAgICAgICAgemVyb0xpbmVDb2xvcjogXCJyZ2JhKDMzLCAzNywgNDEsIDAuMTUpXCIsXG4gICAgICAgICAgICAgICAgemVyb0xpbmVCb3JkZXJEYXNoOiBbMl0sXG4gICAgICAgICAgICAgICAgemVyb0xpbmVCb3JkZXJEYXNoT2Zmc2V0OiBbMl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gICAgbGV0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFyLWNoYXJ0XCIpLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB3aW5kb3cubXlCYXIgPSBuZXcgQ2hhcnQoY3R4LCBjb25maWcpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIGJnLXdoaXRlIHctZnVsbCBtYi02IHNoYWRvdy1sZyByb3VuZGVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC10IG1iLTAgcHgtNCBweS0zIGJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1heC13LWZ1bGwgZmxleC1ncm93IGZsZXgtMVwiPlxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtYmx1ZUdyYXktNDAwIG1iLTEgdGV4dC14cyBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgUGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktNzAwIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIFRvdGFsIG9yZGVyc1xuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBmbGV4LWF1dG9cIj5cbiAgICAgICAgICB7LyogQ2hhcnQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTM1MC1weFwiPlxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cImJhci1jaGFydFwiPjwvY2FudmFzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==