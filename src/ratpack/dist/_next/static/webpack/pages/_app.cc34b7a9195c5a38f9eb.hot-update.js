self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_PageChange_PageChange_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/PageChange/PageChange.js */ "./components/PageChange/PageChange.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styles_tailwind_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles/tailwind.css */ "./styles/tailwind.css");
/* harmony import */ var styles_tailwind_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styles_tailwind_css__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\git\\baseballsite\\portal\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_git_baseballsite_portal_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









next_router__WEBPACK_IMPORTED_MODULE_6___default().events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  react_dom__WEBPACK_IMPORTED_MODULE_3___default().render( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_PageChange_PageChange_js__WEBPACK_IMPORTED_MODULE_7__.default, {
    path: url
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined), document.getElementById("page-transition"));
});
next_router__WEBPACK_IMPORTED_MODULE_6___default().events.on("routeChangeComplete", () => {
  react_dom__WEBPACK_IMPORTED_MODULE_3___default().unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
next_router__WEBPACK_IMPORTED_MODULE_6___default().events.on("routeChangeError", () => {
  react_dom__WEBPACK_IMPORTED_MODULE_3___default().unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
class MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_4___default()) {
  componentDidMount() {
    let comment = document.createComment(`

=========================================================
Vinny's Fantasy Baseball
=========================================================

`);
    document.insertBefore(comment, document.documentElement);
  }

  static async getInitialProps({
    Component,
    router,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;

    const Layout = Component.layout || (({
      children
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: children
    }, void 0, false));

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
          children: "Vinny's Fantasy Baseball"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("script", {
          src: "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Layout, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this);
  }

}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwiUmVhY3RET00iLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsIk15QXBwIiwiQXBwIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21tZW50IiwiY3JlYXRlQ29tbWVudCIsImluc2VydEJlZm9yZSIsImRvY3VtZW50RWxlbWVudCIsImdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsInJvdXRlciIsImN0eCIsInBhZ2VQcm9wcyIsInJlbmRlciIsInByb3BzIiwiTGF5b3V0IiwibGF5b3V0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBQSw0REFBQSxDQUFpQixrQkFBakIsRUFBc0NDLEdBQUQsSUFBUztBQUM1Q0MsU0FBTyxDQUFDQyxHQUFSLENBQWEsWUFBV0YsR0FBSSxFQUE1QjtBQUNBRyxVQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsc0JBQTVCO0FBQ0FDLHlEQUFBLGVBQ0UsOERBQUMsd0VBQUQ7QUFBWSxRQUFJLEVBQUVQO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFRyxRQUFRLENBQUNLLGNBQVQsQ0FBd0IsaUJBQXhCLENBRkY7QUFJRCxDQVBEO0FBUUFULDREQUFBLENBQWlCLHFCQUFqQixFQUF3QyxNQUFNO0FBQzVDUSx5RUFBQSxDQUFnQ0osUUFBUSxDQUFDSyxjQUFULENBQXdCLGlCQUF4QixDQUFoQztBQUNBTCxVQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkksTUFBeEIsQ0FBK0Isc0JBQS9CO0FBQ0QsQ0FIRDtBQUlBViw0REFBQSxDQUFpQixrQkFBakIsRUFBcUMsTUFBTTtBQUN6Q1EseUVBQUEsQ0FBZ0NKLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixpQkFBeEIsQ0FBaEM7QUFDQUwsVUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JJLE1BQXhCLENBQStCLHNCQUEvQjtBQUNELENBSEQ7QUFLZSxNQUFNQyxLQUFOLFNBQW9CQyxpREFBcEIsQ0FBd0I7QUFDckNDLG1CQUFpQixHQUFHO0FBQ2xCLFFBQUlDLE9BQU8sR0FBR1YsUUFBUSxDQUFDVyxhQUFULENBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5rQixDQUFkO0FBT0FYLFlBQVEsQ0FBQ1ksWUFBVCxDQUFzQkYsT0FBdEIsRUFBK0JWLFFBQVEsQ0FBQ2EsZUFBeEM7QUFDRDs7QUFDRCxlQUFhQyxlQUFiLENBQTZCO0FBQUVDLGFBQUY7QUFBYUMsVUFBYjtBQUFxQkM7QUFBckIsR0FBN0IsRUFBeUQ7QUFDdkQsUUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUVBLFFBQUlILFNBQVMsQ0FBQ0QsZUFBZCxFQUErQjtBQUM3QkksZUFBUyxHQUFHLE1BQU1ILFNBQVMsQ0FBQ0QsZUFBVixDQUEwQkcsR0FBMUIsQ0FBbEI7QUFDRDs7QUFFRCxXQUFPO0FBQUVDO0FBQUYsS0FBUDtBQUNEOztBQUNEQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVKLGVBQUY7QUFBYUc7QUFBYixRQUEyQixLQUFLRSxLQUF0Qzs7QUFFQSxVQUFNQyxNQUFNLEdBQUdOLFNBQVMsQ0FBQ08sTUFBVixLQUFxQixDQUFDO0FBQUVDO0FBQUYsS0FBRCxrQkFBa0I7QUFBQSxnQkFBR0E7QUFBSCxxQkFBdkMsQ0FBZjs7QUFFQSx3QkFDRSw4REFBQyx1REFBRDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGlCQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFNRTtBQUFRLGFBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFTRSw4REFBQyxNQUFEO0FBQUEsK0JBQ0UsOERBQUMsU0FBRCxvQkFBZUwsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBZUQ7O0FBeENvQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNjMzRiN2E5MTk1YzVhMzhmOWViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBQYWdlQ2hhbmdlIGZyb20gXCJjb21wb25lbnRzL1BhZ2VDaGFuZ2UvUGFnZUNoYW5nZS5qc1wiO1xuXG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3NcIjtcbmltcG9ydCBcInN0eWxlcy90YWlsd2luZC5jc3NcIjtcblxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKHVybCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTG9hZGluZzogJHt1cmx9YCk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJvZHktcGFnZS10cmFuc2l0aW9uXCIpO1xuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFBhZ2VDaGFuZ2UgcGF0aD17dXJsfSAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2UtdHJhbnNpdGlvblwiKVxuICApO1xufSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiB7XG4gIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlLXRyYW5zaXRpb25cIikpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5LXBhZ2UtdHJhbnNpdGlvblwiKTtcbn0pO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgKCkgPT4ge1xuICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZS10cmFuc2l0aW9uXCIpKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keS1wYWdlLXRyYW5zaXRpb25cIik7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoYFxuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblZpbm55J3MgRmFudGFzeSBCYXNlYmFsbFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmApO1xuICAgIGRvY3VtZW50Lmluc2VydEJlZm9yZShjb21tZW50LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICB9XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgTGF5b3V0ID0gQ29tcG9uZW50LmxheW91dCB8fCAoKHsgY2hpbGRyZW4gfSkgPT4gPD57Y2hpbGRyZW59PC8+KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0aXRsZT5WaW5ueSdzIEZhbnRhc3kgQmFzZWJhbGw8L3RpdGxlPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1ZT1VSX0tFWV9IRVJFXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9