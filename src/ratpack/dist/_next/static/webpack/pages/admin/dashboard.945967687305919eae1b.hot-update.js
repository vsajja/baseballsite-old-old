self["webpackHotUpdate_N_E"]("pages/admin/dashboard",{

/***/ "./components/Sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/Sidebar/Sidebar.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Sidebar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Dropdowns_NotificationDropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Dropdowns/NotificationDropdown.js */ "./components/Dropdowns/NotificationDropdown.js");
/* harmony import */ var components_Dropdowns_UserDropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Dropdowns/UserDropdown.js */ "./components/Dropdowns/UserDropdown.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\git\\baseballsite\\portal\\components\\Sidebar\\Sidebar.js",
    _s = $RefreshSig$();






function Sidebar() {
  _s();

  const [collapseShow, setCollapseShow] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("hidden");
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",
          type: "button",
          onClick: () => setCollapseShow("bg-white m-2 py-3 px-6"),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "fas fa-bars"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#pablo",
            className: "md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
            children: "Notus NextJS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "md:hidden items-center flex flex-wrap list-none",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "inline-block relative"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "inline-block relative",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Dropdowns_UserDropdown_js__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex flex-wrap",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-6/12",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#pablo",
                    className: "md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",
                    children: "Notus NextJS"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "w-6/12 flex justify-end",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  type: "button",
                  className: "cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",
                  onClick: () => setCollapseShow("hidden"),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fas fa-times"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            className: "mt-6 mb-4 md:hidden",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mb-3 pt-0",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                placeholder: "Search",
                className: "border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "my-4 md:min-w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline",
            children: "Admin Layout Pages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "md:flex-col md:min-w-full flex flex-col list-none",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/admin/dashboard",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#pablo",
                  className: "text-xs uppercase py-3 font-bold block " + (router.pathname.indexOf("/admin/dashboard") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fas fa-tv mr-2 text-sm " + (router.pathname.indexOf("/admin/dashboard") !== -1 ? "opacity-75" : "text-blueGray-300")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 21
                  }, this), " ", "Dashboard"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/admin/settings",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#pablo",
                  className: "text-xs uppercase py-3 font-bold block " + (router.pathname.indexOf("/admin/settings") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fas fa-tools mr-2 text-sm " + (router.pathname.indexOf("/admin/settings") !== -1 ? "opacity-75" : "text-blueGray-300")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 21
                  }, this), " ", "Settings"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/admin/tables",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#pablo",
                  className: "text-xs uppercase py-3 font-bold block " + (router.pathname.indexOf("/admin/tables") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fas fa-table mr-2 text-sm " + (router.pathname.indexOf("/admin/tables") !== -1 ? "opacity-75" : "text-blueGray-300")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 21
                  }, this), " ", "Tables"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/admin/maps",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#pablo",
                  className: "text-xs uppercase py-3 font-bold block " + (router.pathname.indexOf("/admin/maps") !== -1 ? "text-lightBlue-500 hover:text-lightBlue-600" : "text-blueGray-700 hover:text-blueGray-500"),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fas fa-map-marked mr-2 text-sm " + (router.pathname.indexOf("/admin/maps") !== -1 ? "opacity-75" : "text-blueGray-300")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 21
                  }, this), " ", "Maps"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "my-4 md:min-w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline",
            children: "Auth Layout Pages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "md:flex-col md:min-w-full flex flex-col list-none md:mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/auth/login",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#pablo",
                  className: "text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fas fa-fingerprint text-blueGray-400 mr-2 text-sm"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 21
                  }, this), " ", "Login"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/auth/register",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#pablo",
                  className: "text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 21
                  }, this), " ", "Register"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "my-4 md:min-w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline",
            children: "No Layout Pages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "md:flex-col md:min-w-full flex flex-col list-none md:mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/landing",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#pablo",
                  className: "text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fas fa-newspaper text-blueGray-400 mr-2 text-sm"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 21
                  }, this), " ", "Landing Page"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "items-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/profile",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "#pablo",
                  className: "text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fas fa-user-circle text-blueGray-400 mr-2 text-sm"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 249,
                    columnNumber: 21
                  }, this), " ", "Profile Page"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "my-4 md:min-w-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline",
            children: "Documentation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "md:flex-col md:min-w-full flex flex-col list-none md:mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "inline-flex",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/colors/notus",
                target: "_blank",
                className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-paint-brush mr-2 text-blueGray-300 text-base"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 270,
                  columnNumber: 19
                }, this), "Styles"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "inline-flex",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus",
                target: "_blank",
                className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-css3-alt mr-2 text-blueGray-300 text-base"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
                  columnNumber: 19
                }, this), "CSS Components"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 276,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "inline-flex",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus",
                target: "_blank",
                className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-angular mr-2 text-blueGray-300 text-base"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 292,
                  columnNumber: 19
                }, this), "Angular"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "inline-flex",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus",
                target: "_blank",
                className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-js-square mr-2 text-blueGray-300 text-base"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 303,
                  columnNumber: 19
                }, this), "Javascript"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "inline-flex",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus",
                target: "_blank",
                className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-react mr-2 text-blueGray-300 text-base"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 314,
                  columnNumber: 19
                }, this), "NextJS"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "inline-flex",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus",
                target: "_blank",
                className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-react mr-2 text-blueGray-300 text-base"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 325,
                  columnNumber: 19
                }, this), "React"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "inline-flex",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus",
                target: "_blank",
                className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fas fa-link mr-2 text-blueGray-300 text-base"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 336,
                  columnNumber: 19
                }, this), "Svelte"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 331,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "inline-flex",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus",
                target: "_blank",
                className: "text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fab fa-vuejs mr-2 text-blueGray-300 text-base"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 347,
                  columnNumber: 19
                }, this), "VueJS"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Sidebar, "O6929UVSRPg3Ho5SrrRAzaz/Ctc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Sidebar;

var _c;

$RefreshReg$(_c, "Sidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuanMiXSwibmFtZXMiOlsiU2lkZWJhciIsImNvbGxhcHNlU2hvdyIsInNldENvbGxhcHNlU2hvdyIsIlJlYWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUNoQyxRQUFNLENBQUNDLFlBQUQsRUFBZUMsZUFBZixJQUFrQ0MscURBQUEsQ0FBZSxRQUFmLENBQXhDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsa05BQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsMkhBQWY7QUFBQSxnQ0FFRTtBQUNFLG1CQUFTLEVBQUMsNklBRFo7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLGlCQUFPLEVBQUUsTUFBTUgsZUFBZSxDQUFDLHdCQUFELENBSGhDO0FBQUEsaUNBS0U7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFVRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0U7QUFDRSxnQkFBSSxFQUFDLFFBRFA7QUFFRSxxQkFBUyxFQUFDLHVIQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQW1CRTtBQUFJLG1CQUFTLEVBQUMsaURBQWQ7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBR0U7QUFBSSxxQkFBUyxFQUFDLHVCQUFkO0FBQUEsbUNBQ0Us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QTtBQUFBO0FBQUE7QUFBQSxnQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBMFZEOztHQTdWdUJQLE87VUFFUEssa0Q7OztLQUZPTCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2Rhc2hib2FyZC45NDU5Njc2ODczMDU5MTllYWUxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBOb3RpZmljYXRpb25Ecm9wZG93biBmcm9tIFwiY29tcG9uZW50cy9Ecm9wZG93bnMvTm90aWZpY2F0aW9uRHJvcGRvd24uanNcIjtcbmltcG9ydCBVc2VyRHJvcGRvd24gZnJvbSBcImNvbXBvbmVudHMvRHJvcGRvd25zL1VzZXJEcm9wZG93bi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKCkge1xuICBjb25zdCBbY29sbGFwc2VTaG93LCBzZXRDb2xsYXBzZVNob3ddID0gUmVhY3QudXNlU3RhdGUoXCJoaWRkZW5cIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm1kOmxlZnQtMCBtZDpibG9jayBtZDpmaXhlZCBtZDp0b3AtMCBtZDpib3R0b20tMCBtZDpvdmVyZmxvdy15LWF1dG8gbWQ6ZmxleC1yb3cgbWQ6ZmxleC1ub3dyYXAgbWQ6b3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy14bCBiZy13aGl0ZSBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJlbGF0aXZlIG1kOnctNjQgei0xMCBweS00IHB4LTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbGV4LWNvbCBtZDppdGVtcy1zdHJldGNoIG1kOm1pbi1oLWZ1bGwgbWQ6ZmxleC1ub3dyYXAgcHgtMCBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBteC1hdXRvXCI+XG4gICAgICAgICAgey8qIFRvZ2dsZXIgKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1ibGFjayBvcGFjaXR5LTUwIG1kOmhpZGRlbiBweC0zIHB5LTEgdGV4dC14bCBsZWFkaW5nLW5vbmUgYmctdHJhbnNwYXJlbnQgcm91bmRlZCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbGxhcHNlU2hvdyhcImJnLXdoaXRlIG0tMiBweS0zIHB4LTZcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhcnNcIj48L2k+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgey8qIEJyYW5kICovfVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6YmxvY2sgdGV4dC1sZWZ0IG1kOnBiLTIgdGV4dC1ibHVlR3JheS02MDAgbXItMCBpbmxpbmUtYmxvY2sgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSB1cHBlcmNhc2UgZm9udC1ib2xkIHAtNCBweC0wXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTm90dXMgTmV4dEpTXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHsvKiBVc2VyICovfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZDpoaWRkZW4gaXRlbXMtY2VudGVyIGZsZXggZmxleC13cmFwIGxpc3Qtbm9uZVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPFVzZXJEcm9wZG93biAvPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIHsvKiBDb2xsYXBzZSAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcIm1kOmZsZXggbWQ6ZmxleC1jb2wgbWQ6aXRlbXMtc3RyZXRjaCBtZDpvcGFjaXR5LTEwMCBtZDpyZWxhdGl2ZSBtZDptdC00IG1kOnNoYWRvdy1ub25lIHNoYWRvdyBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTQwIG92ZXJmbG93LXktYXV0byBvdmVyZmxvdy14LWhpZGRlbiBoLWF1dG8gaXRlbXMtY2VudGVyIGZsZXgtMSByb3VuZGVkIFwiICtcbiAgICAgICAgICAgICAgY29sbGFwc2VTaG93XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIENvbGxhcHNlIGhlYWRlciAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bWluLXctZnVsbCBtZDpoaWRkZW4gYmxvY2sgcGItNCBtYi00IGJvcmRlci1iIGJvcmRlci1zb2xpZCBib3JkZXItYmx1ZUdyYXktMjAwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNi8xMlwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZDpibG9jayB0ZXh0LWxlZnQgbWQ6cGItMiB0ZXh0LWJsdWVHcmF5LTYwMCBtci0wIGlubGluZS1ibG9jayB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHVwcGVyY2FzZSBmb250LWJvbGQgcC00IHB4LTBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgTm90dXMgTmV4dEpTXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNi8xMiBmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWJsYWNrIG9wYWNpdHktNTAgbWQ6aGlkZGVuIHB4LTMgcHktMSB0ZXh0LXhsIGxlYWRpbmctbm9uZSBiZy10cmFuc3BhcmVudCByb3VuZGVkIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29sbGFwc2VTaG93KFwiaGlkZGVuXCIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBGb3JtICovfVxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibXQtNiBtYi00IG1kOmhpZGRlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgcHQtMFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcHgtMyBweS0yIGgtMTIgYm9yZGVyIGJvcmRlci1zb2xpZCAgYm9yZGVyLWJsdWVHcmF5LTUwMCBwbGFjZWhvbGRlci1ibHVlR3JheS0zMDAgdGV4dC1ibHVlR3JheS02MDAgYmctd2hpdGUgcm91bmRlZCB0ZXh0LWJhc2UgbGVhZGluZy1zbnVnIHNoYWRvdy1ub25lIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgdy1mdWxsIGZvbnQtbm9ybWFsXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgey8qIERpdmlkZXIgKi99XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNCBtZDptaW4tdy1mdWxsXCIgLz5cbiAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1kOm1pbi13LWZ1bGwgdGV4dC1ibHVlR3JheS01MDAgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkIGJsb2NrIHB0LTEgcGItNCBuby11bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgQWRtaW4gTGF5b3V0IFBhZ2VzXG4gICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgey8qIE5hdmlnYXRpb24gKi99XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZDpmbGV4LWNvbCBtZDptaW4tdy1mdWxsIGZsZXggZmxleC1jb2wgbGlzdC1ub25lXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL2Rhc2hib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzIHVwcGVyY2FzZSBweS0zIGZvbnQtYm9sZCBibG9jayBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgKHJvdXRlci5wYXRobmFtZS5pbmRleE9mKFwiL2FkbWluL2Rhc2hib2FyZFwiKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWxpZ2h0Qmx1ZS01MDAgaG92ZXI6dGV4dC1saWdodEJsdWUtNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWJsdWVHcmF5LTcwMCBob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwMFwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFzIGZhLXR2IG1yLTIgdGV4dC1zbSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAocm91dGVyLnBhdGhuYW1lLmluZGV4T2YoXCIvYWRtaW4vZGFzaGJvYXJkXCIpICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwib3BhY2l0eS03NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWJsdWVHcmF5LTMwMFwiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPjwvaT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9zZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzIHVwcGVyY2FzZSBweS0zIGZvbnQtYm9sZCBibG9jayBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgKHJvdXRlci5wYXRobmFtZS5pbmRleE9mKFwiL2FkbWluL3NldHRpbmdzXCIpICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtbGlnaHRCbHVlLTUwMCBob3Zlcjp0ZXh0LWxpZ2h0Qmx1ZS02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtYmx1ZUdyYXktNzAwIGhvdmVyOnRleHQtYmx1ZUdyYXktNTAwXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmYXMgZmEtdG9vbHMgbXItMiB0ZXh0LXNtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChyb3V0ZXIucGF0aG5hbWUuaW5kZXhPZihcIi9hZG1pbi9zZXR0aW5nc1wiKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm9wYWNpdHktNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ibHVlR3JheS0zMDBcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID48L2k+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi90YWJsZXNcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcGFibG9cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC14cyB1cHBlcmNhc2UgcHktMyBmb250LWJvbGQgYmxvY2sgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIChyb3V0ZXIucGF0aG5hbWUuaW5kZXhPZihcIi9hZG1pbi90YWJsZXNcIikgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1saWdodEJsdWUtNTAwIGhvdmVyOnRleHQtbGlnaHRCbHVlLTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ibHVlR3JheS03MDAgaG92ZXI6dGV4dC1ibHVlR3JheS01MDBcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZhcyBmYS10YWJsZSBtci0yIHRleHQtc20gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHJvdXRlci5wYXRobmFtZS5pbmRleE9mKFwiL2FkbWluL3RhYmxlc1wiKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm9wYWNpdHktNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ibHVlR3JheS0zMDBcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID48L2k+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBUYWJsZXNcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vbWFwc1wiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzIHVwcGVyY2FzZSBweS0zIGZvbnQtYm9sZCBibG9jayBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgKHJvdXRlci5wYXRobmFtZS5pbmRleE9mKFwiL2FkbWluL21hcHNcIikgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1saWdodEJsdWUtNTAwIGhvdmVyOnRleHQtbGlnaHRCbHVlLTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ibHVlR3JheS03MDAgaG92ZXI6dGV4dC1ibHVlR3JheS01MDBcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZhcyBmYS1tYXAtbWFya2VkIG1yLTIgdGV4dC1zbSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAocm91dGVyLnBhdGhuYW1lLmluZGV4T2YoXCIvYWRtaW4vbWFwc1wiKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm9wYWNpdHktNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ibHVlR3JheS0zMDBcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID48L2k+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBNYXBzXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgey8qIERpdmlkZXIgKi99XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNCBtZDptaW4tdy1mdWxsXCIgLz5cbiAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1kOm1pbi13LWZ1bGwgdGV4dC1ibHVlR3JheS01MDAgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkIGJsb2NrIHB0LTEgcGItNCBuby11bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgQXV0aCBMYXlvdXQgUGFnZXNcbiAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiAqL31cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1kOmZsZXgtY29sIG1kOm1pbi13LWZ1bGwgZmxleCBmbGV4LWNvbCBsaXN0LW5vbmUgbWQ6bWItNFwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRoL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlR3JheS03MDAgaG92ZXI6dGV4dC1ibHVlR3JheS01MDAgdGV4dC14cyB1cHBlcmNhc2UgcHktMyBmb250LWJvbGQgYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZmluZ2VycHJpbnQgdGV4dC1ibHVlR3JheS00MDAgbXItMiB0ZXh0LXNtXCI+PC9pPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktNzAwIGhvdmVyOnRleHQtYmx1ZUdyYXktNTAwIHRleHQteHMgdXBwZXJjYXNlIHB5LTMgZm9udC1ib2xkIGJsb2NrXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsaXBib2FyZC1saXN0IHRleHQtYmx1ZUdyYXktMzAwIG1yLTIgdGV4dC1zbVwiPjwvaT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgey8qIERpdmlkZXIgKi99XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNCBtZDptaW4tdy1mdWxsXCIgLz5cbiAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1kOm1pbi13LWZ1bGwgdGV4dC1ibHVlR3JheS01MDAgdGV4dC14cyB1cHBlcmNhc2UgZm9udC1ib2xkIGJsb2NrIHB0LTEgcGItNCBuby11bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgTm8gTGF5b3V0IFBhZ2VzXG4gICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgey8qIE5hdmlnYXRpb24gKi99XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZDpmbGV4LWNvbCBtZDptaW4tdy1mdWxsIGZsZXggZmxleC1jb2wgbGlzdC1ub25lIG1kOm1iLTRcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGFuZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktNzAwIGhvdmVyOnRleHQtYmx1ZUdyYXktNTAwIHRleHQteHMgdXBwZXJjYXNlIHB5LTMgZm9udC1ib2xkIGJsb2NrXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW5ld3NwYXBlciB0ZXh0LWJsdWVHcmF5LTQwMCBtci0yIHRleHQtc21cIj48L2k+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBMYW5kaW5nIFBhZ2VcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktNzAwIGhvdmVyOnRleHQtYmx1ZUdyYXktNTAwIHRleHQteHMgdXBwZXJjYXNlIHB5LTMgZm9udC1ib2xkIGJsb2NrXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItY2lyY2xlIHRleHQtYmx1ZUdyYXktNDAwIG1yLTIgdGV4dC1zbVwiPjwvaT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIFByb2ZpbGUgUGFnZVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIHsvKiBEaXZpZGVyICovfVxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTQgbWQ6bWluLXctZnVsbFwiIC8+XG4gICAgICAgICAgICB7LyogSGVhZGluZyAqL31cbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtZDptaW4tdy1mdWxsIHRleHQtYmx1ZUdyYXktNTAwIHRleHQteHMgdXBwZXJjYXNlIGZvbnQtYm9sZCBibG9jayBwdC0xIHBiLTQgbm8tdW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgIERvY3VtZW50YXRpb25cbiAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiAqL31cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZDpmbGV4LWNvbCBtZDptaW4tdy1mdWxsIGZsZXggZmxleC1jb2wgbGlzdC1ub25lIG1kOm1iLTRcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL2xlYXJuaW5nLWxhYi90YWlsd2luZC9uZXh0anMvY29sb3JzL25vdHVzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTcwMCBob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwMCB0ZXh0LXNtIGJsb2NrIG1iLTQgbm8tdW5kZXJsaW5lIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wYWludC1icnVzaCBtci0yIHRleHQtYmx1ZUdyYXktMzAwIHRleHQtYmFzZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIFN0eWxlc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vbGVhcm5pbmctbGFiL3RhaWx3aW5kL25leHRqcy9hbGVydHMvbm90dXNcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktNzAwIGhvdmVyOnRleHQtYmx1ZUdyYXktNTAwIHRleHQtc20gYmxvY2sgbWItNCBuby11bmRlcmxpbmUgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWNzczMtYWx0IG1yLTIgdGV4dC1ibHVlR3JheS0zMDAgdGV4dC1iYXNlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgQ1NTIENvbXBvbmVudHNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL2xlYXJuaW5nLWxhYi90YWlsd2luZC9hbmd1bGFyL292ZXJ2aWV3L25vdHVzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTcwMCBob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwMCB0ZXh0LXNtIGJsb2NrIG1iLTQgbm8tdW5kZXJsaW5lIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1hbmd1bGFyIG1yLTIgdGV4dC1ibHVlR3JheS0zMDAgdGV4dC1iYXNlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgQW5ndWxhclxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vbGVhcm5pbmctbGFiL3RhaWx3aW5kL2pzL292ZXJ2aWV3L25vdHVzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTcwMCBob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwMCB0ZXh0LXNtIGJsb2NrIG1iLTQgbm8tdW5kZXJsaW5lIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1qcy1zcXVhcmUgbXItMiB0ZXh0LWJsdWVHcmF5LTMwMCB0ZXh0LWJhc2VcIj48L2k+XG4gICAgICAgICAgICAgICAgICBKYXZhc2NyaXB0XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9sZWFybmluZy1sYWIvdGFpbHdpbmQvbmV4dGpzL292ZXJ2aWV3L25vdHVzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTcwMCBob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwMCB0ZXh0LXNtIGJsb2NrIG1iLTQgbm8tdW5kZXJsaW5lIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1yZWFjdCBtci0yIHRleHQtYmx1ZUdyYXktMzAwIHRleHQtYmFzZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIE5leHRKU1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vbGVhcm5pbmctbGFiL3RhaWx3aW5kL3JlYWN0L292ZXJ2aWV3L25vdHVzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTcwMCBob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwMCB0ZXh0LXNtIGJsb2NrIG1iLTQgbm8tdW5kZXJsaW5lIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1yZWFjdCBtci0yIHRleHQtYmx1ZUdyYXktMzAwIHRleHQtYmFzZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIFJlYWN0XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9sZWFybmluZy1sYWIvdGFpbHdpbmQvc3ZlbHRlL292ZXJ2aWV3L25vdHVzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTcwMCBob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwMCB0ZXh0LXNtIGJsb2NrIG1iLTQgbm8tdW5kZXJsaW5lIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1saW5rIG1yLTIgdGV4dC1ibHVlR3JheS0zMDAgdGV4dC1iYXNlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgU3ZlbHRlXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleFwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9sZWFybmluZy1sYWIvdGFpbHdpbmQvdnVlL292ZXJ2aWV3L25vdHVzXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTcwMCBob3Zlcjp0ZXh0LWJsdWVHcmF5LTUwMCB0ZXh0LXNtIGJsb2NrIG1iLTQgbm8tdW5kZXJsaW5lIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS12dWVqcyBtci0yIHRleHQtYmx1ZUdyYXktMzAwIHRleHQtYmFzZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIFZ1ZUpTXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=