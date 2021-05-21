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
        labels: ["January11111", "February", "March", "April", "May", "June", "July"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkcy9DYXJkQmFyQ2hhcnQuanMiXSwibmFtZXMiOlsiQ2FyZEJhckNoYXJ0IiwiUmVhY3QiLCJjb25maWciLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImZpbGwiLCJiYXJUaGlja25lc3MiLCJvcHRpb25zIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInJlc3BvbnNpdmUiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwidG9vbHRpcHMiLCJtb2RlIiwiaW50ZXJzZWN0IiwiaG92ZXIiLCJsZWdlbmQiLCJmb250Q29sb3IiLCJhbGlnbiIsInBvc2l0aW9uIiwic2NhbGVzIiwieEF4ZXMiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJncmlkTGluZXMiLCJib3JkZXJEYXNoIiwiYm9yZGVyRGFzaE9mZnNldCIsImNvbG9yIiwiemVyb0xpbmVDb2xvciIsInplcm9MaW5lQm9yZGVyRGFzaCIsInplcm9MaW5lQm9yZGVyRGFzaE9mZnNldCIsInlBeGVzIiwiZHJhd0JvcmRlciIsImN0eCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwid2luZG93IiwibXlCYXIiLCJDaGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUNyQ0Msd0RBQUEsQ0FBZ0IsTUFBTTtBQUNwQixRQUFJQyxNQUFNLEdBQUc7QUFDWEMsVUFBSSxFQUFFLEtBREs7QUFFWEMsVUFBSSxFQUFFO0FBQ0pDLGNBQU0sRUFBRSxDQUNOLGNBRE0sRUFFTixVQUZNLEVBR04sT0FITSxFQUlOLE9BSk0sRUFLTixLQUxNLEVBTU4sTUFOTSxFQU9OLE1BUE0sQ0FESjtBQVVKQyxnQkFBUSxF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QUMseUNBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsNkJBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsNkNBQWY7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUMsd0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRTtBQUFJLHVCQUFTLEVBQUMseUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWFFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBRUU7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsaUNBQ0U7QUFBUSxjQUFFLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXdCRDs7R0F6SHVCRixZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2Rhc2hib2FyZC41OWQ0Mzk2ZTQ5MjYyNTdkNTEzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkQmFyQ2hhcnQoKSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgIFwiSmFudWFyeTExMTExXCIsXG4gICAgICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgICAgIFwiTWFyY2hcIixcbiAgICAgICAgICBcIkFwcmlsXCIsXG4gICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICBcIkp1bmVcIixcbiAgICAgICAgICBcIkp1bHlcIixcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlZDY0YTZcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNlZDY0YTZcIixcbiAgICAgICAgICAgIGRhdGE6IFszMCwgNzgsIDU2LCAzNCwgMTAwLCA0NSwgMTNdLFxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICBiYXJUaGlja25lc3M6IDgsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMSxcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0YzUxYmZcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiM0YzUxYmZcIixcbiAgICAgICAgICAgIGRhdGE6IFsyNywgNjgsIDg2LCA3NCwgMTAsIDQsIDg3XSxcbiAgICAgICAgICAgIGJhclRoaWNrbmVzczogOCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgdGV4dDogXCJPcmRlcnMgQ2hhcnRcIixcbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgICBtb2RlOiBcImluZGV4XCIsXG4gICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBtb2RlOiBcIm5lYXJlc3RcIixcbiAgICAgICAgICBpbnRlcnNlY3Q6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgZm9udENvbG9yOiBcInJnYmEoMCwwLDAsLjQpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbGlnbjogXCJlbmRcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgfSxcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgeEF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIk1vbnRoXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgIGJvcmRlckRhc2g6IFsyXSxcbiAgICAgICAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiBbMl0sXG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgzMywgMzcsIDQxLCAwLjMpXCIsXG4gICAgICAgICAgICAgICAgemVyb0xpbmVDb2xvcjogXCJyZ2JhKDMzLCAzNywgNDEsIDAuMylcIixcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUJvcmRlckRhc2g6IFsyXSxcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IFwiVmFsdWVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyRGFzaDogWzJdLFxuICAgICAgICAgICAgICAgIGRyYXdCb3JkZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDMzLCAzNywgNDEsIDAuMilcIixcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUNvbG9yOiBcInJnYmEoMzMsIDM3LCA0MSwgMC4xNSlcIixcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUJvcmRlckRhc2g6IFsyXSxcbiAgICAgICAgICAgICAgICB6ZXJvTGluZUJvcmRlckRhc2hPZmZzZXQ6IFsyXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBsZXQgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXItY2hhcnRcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHdpbmRvdy5teUJhciA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgYmctd2hpdGUgdy1mdWxsIG1iLTYgc2hhZG93LWxnIHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXQgbWItMCBweC00IHB5LTMgYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctZnVsbCBmbGV4LWdyb3cgZmxleC0xXCI+XG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC1ibHVlR3JheS00MDAgbWItMSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICBQZXJmb3JtYW5jZVxuICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ibHVlR3JheS03MDAgdGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgVG90YWwgb3JkZXJzXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGZsZXgtYXV0b1wiPlxuICAgICAgICAgIHsvKiBDaGFydCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMzUwLXB4XCI+XG4gICAgICAgICAgICA8Y2FudmFzIGlkPVwiYmFyLWNoYXJ0XCI+PC9jYW52YXM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9