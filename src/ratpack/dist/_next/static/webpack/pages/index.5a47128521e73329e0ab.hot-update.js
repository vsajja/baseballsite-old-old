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


var _jsxFileName = "C:\\git\\baseballsite\\portal\\components\\baseball\\CardPlayers.js";



 // components

CardPlayers.defaultProps = {
  league: "Major League Baseball",
  division: ""
};
CardPlayers.propTypes = {
  league: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
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
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "block w-full overflow-x-auto"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c = CardPlayers;

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


/***/ }),

/***/ "./node_modules/react-table/dist/react-table.development.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-table/dist/react-table.development.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
  0;
}(this, (function (exports, React) { 'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  var renderErr = 'Renderer Error ☝️';
  var actions = {
    init: 'init'
  };
  var defaultRenderer = function defaultRenderer(_ref) {
    var _ref$value = _ref.value,
        value = _ref$value === void 0 ? '' : _ref$value;
    return value;
  };
  var emptyRenderer = function emptyRenderer() {
    return React.createElement(React.Fragment, null, "\xA0");
  };
  var defaultColumn = {
    Cell: defaultRenderer,
    width: 150,
    minWidth: 0,
    maxWidth: Number.MAX_SAFE_INTEGER
  };

  function mergeProps() {
    for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
      propList[_key] = arguments[_key];
    }

    return propList.reduce(function (props, next) {
      var style = next.style,
          className = next.className,
          rest = _objectWithoutPropertiesLoose(next, ["style", "className"]);

      props = _extends({}, props, {}, rest);

      if (style) {
        props.style = props.style ? _extends({}, props.style || {}, {}, style || {}) : style;
      }

      if (className) {
        props.className = props.className ? props.className + ' ' + className : className;
      }

      if (props.className === '') {
        delete props.className;
      }

      return props;
    }, {});
  }

  function handlePropGetter(prevProps, userProps, meta) {
    // Handle a lambda, pass it the previous props
    if (typeof userProps === 'function') {
      return handlePropGetter({}, userProps(prevProps, meta));
    } // Handle an array, merge each item as separate props


    if (Array.isArray(userProps)) {
      return mergeProps.apply(void 0, [prevProps].concat(userProps));
    } // Handle an object by default, merge the two objects


    return mergeProps(prevProps, userProps);
  }

  var makePropGetter = function makePropGetter(hooks, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      return [].concat(hooks, [userProps]).reduce(function (prev, next) {
        return handlePropGetter(prev, next, _extends({}, meta, {
          userProps: userProps
        }));
      }, {});
    };
  };
  var reduceHooks = function reduceHooks(hooks, initial, meta, allowUndefined) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.reduce(function (prev, next) {
      var nextValue = next(prev, meta);

      {
        if (!allowUndefined && typeof nextValue === 'undefined') {
          console.info(next);
          throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
        }
      }

      return nextValue;
    }, initial);
  };
  var loopHooks = function loopHooks(hooks, context, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.forEach(function (hook) {
      var nextValue = hook(context, meta);

      {
        if (typeof nextValue !== 'undefined') {
          console.info(hook, nextValue);
          throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
        }
      }
    });
  };
  function ensurePluginOrder(plugins, befores, pluginName, afters) {
    if ( afters) {
      throw new Error("Defining plugins in the \"after\" section of ensurePluginOrder is no longer supported (see plugin " + pluginName + ")");
    }

    var pluginIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === pluginName;
    });

    if (pluginIndex === -1) {
      {
        throw new Error("The plugin \"" + pluginName + "\" was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  " + pluginName + ".pluginName = '" + pluginName + "'\n");
      }
    }

    befores.forEach(function (before) {
      var beforeIndex = plugins.findIndex(function (plugin) {
        return plugin.pluginName === before;
      });

      if (beforeIndex > -1 && beforeIndex > pluginIndex) {
        {
          throw new Error("React Table: The " + pluginName + " plugin hook must be placed after the " + before + " plugin hook!");
        }
      }
    });
  }
  function functionalUpdate(updater, old) {
    return typeof updater === 'function' ? updater(old) : updater;
  }
  function useGetLatest(obj) {
    var ref = React.useRef();
    ref.current = obj;
    return React.useCallback(function () {
      return ref.current;
    }, []);
  } // SSR has issues with useLayoutEffect still, so use useEffect during SSR

  var safeUseLayoutEffect = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  function useMountedLayoutEffect(fn, deps) {
    var mountedRef = React.useRef(false);
    safeUseLayoutEffect(function () {
      if (mountedRef.current) {
        fn();
      }

      mountedRef.current = true; // eslint-disable-next-line
    }, deps);
  }
  function useAsyncDebounce(defaultFn, defaultWait) {
    if (defaultWait === void 0) {
      defaultWait = 0;
    }

    var debounceRef = React.useRef({});
    var getDefaultFn = useGetLatest(defaultFn);
    var getDefaultWait = useGetLatest(defaultWait);
    return React.useCallback(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _len2,
            args,
            _key2,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = _args2[_key2];
                }

                if (!debounceRef.current.promise) {
                  debounceRef.current.promise = new Promise(function (resolve, reject) {
                    debounceRef.current.resolve = resolve;
                    debounceRef.current.reject = reject;
                  });
                }

                if (debounceRef.current.timeout) {
                  clearTimeout(debounceRef.current.timeout);
                }

                debounceRef.current.timeout = setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          delete debounceRef.current.timeout;
                          _context.prev = 1;
                          _context.t0 = debounceRef.current;
                          _context.next = 5;
                          return getDefaultFn().apply(void 0, args);

                        case 5:
                          _context.t1 = _context.sent;

                          _context.t0.resolve.call(_context.t0, _context.t1);

                          _context.next = 12;
                          break;

                        case 9:
                          _context.prev = 9;
                          _context.t2 = _context["catch"](1);
                          debounceRef.current.reject(_context.t2);

                        case 12:
                          _context.prev = 12;
                          delete debounceRef.current.promise;
                          return _context.finish(12);

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[1, 9, 12, 15]]);
                })), getDefaultWait());
                return _context2.abrupt("return", debounceRef.current.promise);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function () {
        return _ref2.apply(this, arguments);
      };
    }(), [getDefaultFn, getDefaultWait]);
  }
  function makeRenderer(instance, column, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (type, userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      var Comp = typeof type === 'string' ? column[type] : type;

      if (typeof Comp === 'undefined') {
        console.info(column);
        throw new Error(renderErr);
      }

      return flexRender(Comp, _extends({}, instance, {
        column: column
      }, meta, {}, userProps));
    };
  }
  function flexRender(Comp, props) {
    return isReactComponent(Comp) ? React.createElement(Comp, props) : Comp;
  }

  function isReactComponent(component) {
    return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
  }

  function isClassComponent(component) {
    return typeof component === 'function' && function () {
      var proto = Object.getPrototypeOf(component);
      return proto.prototype && proto.prototype.isReactComponent;
    }();
  }

  function isExoticComponent(component) {
    return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
  }

  function linkColumnStructure(columns, parent, depth) {
    if (depth === void 0) {
      depth = 0;
    }

    return columns.map(function (column) {
      column = _extends({}, column, {
        parent: parent,
        depth: depth
      });
      assignColumnAccessor(column);

      if (column.columns) {
        column.columns = linkColumnStructure(column.columns, column, depth + 1);
      }

      return column;
    });
  }
  function flattenColumns(columns) {
    return flattenBy(columns, 'columns');
  }
  function assignColumnAccessor(column) {
    // First check for string accessor
    var id = column.id,
        accessor = column.accessor,
        Header = column.Header;

    if (typeof accessor === 'string') {
      id = id || accessor;
      var accessorPath = accessor.split('.');

      accessor = function accessor(row) {
        return getBy(row, accessorPath);
      };
    }

    if (!id && typeof Header === 'string' && Header) {
      id = Header;
    }

    if (!id && column.columns) {
      console.error(column);
      throw new Error('A column ID (or unique "Header" value) is required!');
    }

    if (!id) {
      console.error(column);
      throw new Error('A column ID (or string accessor) is required!');
    }

    Object.assign(column, {
      id: id,
      accessor: accessor
    });
    return column;
  }
  function decorateColumn(column, userDefaultColumn) {
    if (!userDefaultColumn) {
      throw new Error();
    }

    Object.assign(column, _extends({
      // Make sure there is a fallback header, just in case
      Header: emptyRenderer,
      Footer: emptyRenderer
    }, defaultColumn, {}, userDefaultColumn, {}, column));
    Object.assign(column, {
      originalWidth: column.width
    });
    return column;
  } // Build the header groups from the bottom up

  function makeHeaderGroups(allColumns, defaultColumn, additionalHeaderProperties) {
    if (additionalHeaderProperties === void 0) {
      additionalHeaderProperties = function additionalHeaderProperties() {
        return {};
      };
    }

    var headerGroups = [];
    var scanColumns = allColumns;
    var uid = 0;

    var getUID = function getUID() {
      return uid++;
    };

    var _loop = function _loop() {
      // The header group we are creating
      var headerGroup = {
        headers: []
      }; // The parent columns we're going to scan next

      var parentColumns = [];
      var hasParents = scanColumns.some(function (d) {
        return d.parent;
      }); // Scan each column for parents

      scanColumns.forEach(function (column) {
        // What is the latest (last) parent column?
        var latestParentColumn = [].concat(parentColumns).reverse()[0];
        var newParent;

        if (hasParents) {
          // If the column has a parent, add it if necessary
          if (column.parent) {
            newParent = _extends({}, column.parent, {
              originalId: column.parent.id,
              id: column.parent.id + "_" + getUID(),
              headers: [column]
            }, additionalHeaderProperties(column));
          } else {
            // If other columns have parents, we'll need to add a place holder if necessary
            var originalId = column.id + "_placeholder";
            newParent = decorateColumn(_extends({
              originalId: originalId,
              id: column.id + "_placeholder_" + getUID(),
              placeholderOf: column,
              headers: [column]
            }, additionalHeaderProperties(column)), defaultColumn);
          } // If the resulting parent columns are the same, just add
          // the column and increment the header span


          if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
            latestParentColumn.headers.push(column);
          } else {
            parentColumns.push(newParent);
          }
        }

        headerGroup.headers.push(column);
      });
      headerGroups.push(headerGroup); // Start scanning the parent columns

      scanColumns = parentColumns;
    };

    while (scanColumns.length) {
      _loop();
    }

    return headerGroups.reverse();
  }
  var pathObjCache = new Map();
  function getBy(obj, path, def) {
    if (!path) {
      return obj;
    }

    var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);

    var pathObj = pathObjCache.get(cacheKey) || function () {
      var pathObj = makePathArray(path);
      pathObjCache.set(cacheKey, pathObj);
      return pathObj;
    }();

    var val;

    try {
      val = pathObj.reduce(function (cursor, pathPart) {
        return cursor[pathPart];
      }, obj);
    } catch (e) {// continue regardless of error
    }

    return typeof val !== 'undefined' ? val : def;
  }
  function getFirstDefined() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var i = 0; i < args.length; i += 1) {
      if (typeof args[i] !== 'undefined') {
        return args[i];
      }
    }
  }
  function isFunction(a) {
    if (typeof a === 'function') {
      return a;
    }
  }
  function flattenBy(arr, key) {
    var flat = [];

    var recurse = function recurse(arr) {
      arr.forEach(function (d) {
        if (!d[key]) {
          flat.push(d);
        } else {
          recurse(d[key]);
        }
      });
    };

    recurse(arr);
    return flat;
  }
  function expandRows(rows, _ref) {
    var manualExpandedKey = _ref.manualExpandedKey,
        expanded = _ref.expanded,
        _ref$expandSubRows = _ref.expandSubRows,
        expandSubRows = _ref$expandSubRows === void 0 ? true : _ref$expandSubRows;
    var expandedRows = [];

    var handleRow = function handleRow(row, addToExpandedRows) {
      if (addToExpandedRows === void 0) {
        addToExpandedRows = true;
      }

      row.isExpanded = row.original && row.original[manualExpandedKey] || expanded[row.id];
      row.canExpand = row.subRows && !!row.subRows.length;

      if (addToExpandedRows) {
        expandedRows.push(row);
      }

      if (row.subRows && row.subRows.length && row.isExpanded) {
        row.subRows.forEach(function (row) {
          return handleRow(row, expandSubRows);
        });
      }
    };

    rows.forEach(function (row) {
      return handleRow(row);
    });
    return expandedRows;
  }
  function getFilterMethod(filter, userFilterTypes, filterTypes) {
    return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
  }
  function shouldAutoRemoveFilter(autoRemove, value, column) {
    return autoRemove ? autoRemove(value, column) : typeof value === 'undefined';
  }
  function unpreparedAccessWarning() {
    throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
  }
  var passiveSupported = null;
  function passiveEventSupported() {
    // memoize support to avoid adding multiple test events
    if (typeof passiveSupported === 'boolean') return passiveSupported;
    var supported = false;

    try {
      var options = {
        get passive() {
          supported = true;
          return false;
        }

      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {
      supported = false;
    }

    passiveSupported = supported;
    return passiveSupported;
  } //

  var reOpenBracket = /\[/g;
  var reCloseBracket = /\]/g;

  function makePathArray(obj) {
    return flattenDeep(obj) // remove all periods in parts
    .map(function (d) {
      return String(d).replace('.', '_');
    }) // join parts using period
    .join('.') // replace brackets with periods
    .replace(reOpenBracket, '.').replace(reCloseBracket, '') // split it back out on periods
    .split('.');
  }

  function flattenDeep(arr, newArr) {
    if (newArr === void 0) {
      newArr = [];
    }

    if (!Array.isArray(arr)) {
      newArr.push(arr);
    } else {
      for (var i = 0; i < arr.length; i += 1) {
        flattenDeep(arr[i], newArr);
      }
    }

    return newArr;
  }

  var defaultGetTableProps = function defaultGetTableProps(props) {
    return _extends({
      role: 'table'
    }, props);
  };

  var defaultGetTableBodyProps = function defaultGetTableBodyProps(props) {
    return _extends({
      role: 'rowgroup'
    }, props);
  };

  var defaultGetHeaderProps = function defaultGetHeaderProps(props, _ref) {
    var column = _ref.column;
    return _extends({
      key: "header_" + column.id,
      colSpan: column.totalVisibleHeaderCount,
      role: 'columnheader'
    }, props);
  };

  var defaultGetFooterProps = function defaultGetFooterProps(props, _ref2) {
    var column = _ref2.column;
    return _extends({
      key: "footer_" + column.id,
      colSpan: column.totalVisibleHeaderCount
    }, props);
  };

  var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps(props, _ref3) {
    var index = _ref3.index;
    return _extends({
      key: "headerGroup_" + index,
      role: 'row'
    }, props);
  };

  var defaultGetFooterGroupProps = function defaultGetFooterGroupProps(props, _ref4) {
    var index = _ref4.index;
    return _extends({
      key: "footerGroup_" + index
    }, props);
  };

  var defaultGetRowProps = function defaultGetRowProps(props, _ref5) {
    var row = _ref5.row;
    return _extends({
      key: "row_" + row.id,
      role: 'row'
    }, props);
  };

  var defaultGetCellProps = function defaultGetCellProps(props, _ref6) {
    var cell = _ref6.cell;
    return _extends({
      key: "cell_" + cell.row.id + "_" + cell.column.id,
      role: 'cell'
    }, props);
  };

  function makeDefaultPluginHooks() {
    return {
      useOptions: [],
      stateReducers: [],
      useControlledState: [],
      columns: [],
      columnsDeps: [],
      allColumns: [],
      allColumnsDeps: [],
      accessValue: [],
      materializedColumns: [],
      materializedColumnsDeps: [],
      useInstanceAfterData: [],
      visibleColumns: [],
      visibleColumnsDeps: [],
      headerGroups: [],
      headerGroupsDeps: [],
      useInstanceBeforeDimensions: [],
      useInstance: [],
      prepareRow: [],
      getTableProps: [defaultGetTableProps],
      getTableBodyProps: [defaultGetTableBodyProps],
      getHeaderGroupProps: [defaultGetHeaderGroupProps],
      getFooterGroupProps: [defaultGetFooterGroupProps],
      getHeaderProps: [defaultGetHeaderProps],
      getFooterProps: [defaultGetFooterProps],
      getRowProps: [defaultGetRowProps],
      getCellProps: [defaultGetCellProps],
      useFinalInstance: []
    };
  }

  actions.resetHiddenColumns = 'resetHiddenColumns';
  actions.toggleHideColumn = 'toggleHideColumn';
  actions.setHiddenColumns = 'setHiddenColumns';
  actions.toggleHideAllColumns = 'toggleHideAllColumns';
  var useColumnVisibility = function useColumnVisibility(hooks) {
    hooks.getToggleHiddenProps = [defaultGetToggleHiddenProps];
    hooks.getToggleHideAllColumnsProps = [defaultGetToggleHideAllColumnsProps];
    hooks.stateReducers.push(reducer);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
    hooks.headerGroupsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.hiddenColumns]);
    });
    hooks.useInstance.push(useInstance);
  };
  useColumnVisibility.pluginName = 'useColumnVisibility';

  var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      onChange: function onChange(e) {
        column.toggleHidden(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: column.isVisible,
      title: 'Toggle Column Visible'
    }];
  };

  var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleHideAllColumns(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
      title: 'Toggle All Columns Hidden',
      indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
    }];
  };

  function reducer(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        hiddenColumns: []
      }, state);
    }

    if (action.type === actions.resetHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: instance.initialState.hiddenColumns || []
      });
    }

    if (action.type === actions.toggleHideColumn) {
      var should = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.includes(action.columnId);
      var hiddenColumns = should ? [].concat(state.hiddenColumns, [action.columnId]) : state.hiddenColumns.filter(function (d) {
        return d !== action.columnId;
      });
      return _extends({}, state, {
        hiddenColumns: hiddenColumns
      });
    }

    if (action.type === actions.setHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
      });
    }

    if (action.type === actions.toggleHideAllColumns) {
      var shouldAll = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.length;
      return _extends({}, state, {
        hiddenColumns: shouldAll ? instance.allColumns.map(function (d) {
          return d.id;
        }) : []
      });
    }
  }

  function useInstanceBeforeDimensions(instance) {
    var headers = instance.headers,
        hiddenColumns = instance.state.hiddenColumns;
    var isMountedRef = React.useRef(false);

    if (!isMountedRef.current) ;

    var handleColumn = function handleColumn(column, parentVisible) {
      column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
      var totalVisibleHeaderCount = 0;

      if (column.headers && column.headers.length) {
        column.headers.forEach(function (subColumn) {
          return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
        });
      } else {
        totalVisibleHeaderCount = column.isVisible ? 1 : 0;
      }

      column.totalVisibleHeaderCount = totalVisibleHeaderCount;
      return totalVisibleHeaderCount;
    };

    var totalVisibleHeaderCount = 0;
    headers.forEach(function (subHeader) {
      return totalVisibleHeaderCount += handleColumn(subHeader, true);
    });
  }

  function useInstance(instance) {
    var columns = instance.columns,
        flatHeaders = instance.flatHeaders,
        dispatch = instance.dispatch,
        allColumns = instance.allColumns,
        getHooks = instance.getHooks,
        hiddenColumns = instance.state.hiddenColumns,
        _instance$autoResetHi = instance.autoResetHiddenColumns,
        autoResetHiddenColumns = _instance$autoResetHi === void 0 ? true : _instance$autoResetHi;
    var getInstance = useGetLatest(instance);
    var allColumnsHidden = allColumns.length === hiddenColumns.length;
    var toggleHideColumn = React.useCallback(function (columnId, value) {
      return dispatch({
        type: actions.toggleHideColumn,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setHiddenColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.setHiddenColumns,
        value: value
      });
    }, [dispatch]);
    var toggleHideAllColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleHideAllColumns,
        value: value
      });
    }, [dispatch]);
    var getToggleHideAllColumnsProps = makePropGetter(getHooks().getToggleHideAllColumnsProps, {
      instance: getInstance()
    });
    flatHeaders.forEach(function (column) {
      column.toggleHidden = function (value) {
        dispatch({
          type: actions.toggleHideColumn,
          columnId: column.id,
          value: value
        });
      };

      column.getToggleHiddenProps = makePropGetter(getHooks().getToggleHiddenProps, {
        instance: getInstance(),
        column: column
      });
    });
    var getAutoResetHiddenColumns = useGetLatest(autoResetHiddenColumns);
    useMountedLayoutEffect(function () {
      if (getAutoResetHiddenColumns()) {
        dispatch({
          type: actions.resetHiddenColumns
        });
      }
    }, [dispatch, columns]);
    Object.assign(instance, {
      allColumnsHidden: allColumnsHidden,
      toggleHideColumn: toggleHideColumn,
      setHiddenColumns: setHiddenColumns,
      toggleHideAllColumns: toggleHideAllColumns,
      getToggleHideAllColumnsProps: getToggleHideAllColumnsProps
    });
  }

  var defaultInitialState = {};
  var defaultColumnInstance = {};

  var defaultReducer = function defaultReducer(state, action, prevState) {
    return state;
  };

  var defaultGetSubRows = function defaultGetSubRows(row, index) {
    return row.subRows || [];
  };

  var defaultGetRowId = function defaultGetRowId(row, index, parent) {
    return "" + (parent ? [parent.id, index].join('.') : index);
  };

  var defaultUseControlledState = function defaultUseControlledState(d) {
    return d;
  };

  function applyDefaults(props) {
    var _props$initialState = props.initialState,
        initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState,
        _props$defaultColumn = props.defaultColumn,
        defaultColumn = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn,
        _props$getSubRows = props.getSubRows,
        getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows,
        _props$getRowId = props.getRowId,
        getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId,
        _props$stateReducer = props.stateReducer,
        stateReducer = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer,
        _props$useControlledS = props.useControlledState,
        useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS,
        rest = _objectWithoutPropertiesLoose(props, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);

    return _extends({}, rest, {
      initialState: initialState,
      defaultColumn: defaultColumn,
      getSubRows: getSubRows,
      getRowId: getRowId,
      stateReducer: stateReducer,
      useControlledState: useControlledState
    });
  }

  var useTable = function useTable(props) {
    for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      plugins[_key - 1] = arguments[_key];
    }

    // Apply default props
    props = applyDefaults(props); // Add core plugins

    plugins = [useColumnVisibility].concat(plugins); // Create the table instance

    var instanceRef = React.useRef({}); // Create a getter for the instance (helps avoid a lot of potential memory leaks)

    var getInstance = useGetLatest(instanceRef.current); // Assign the props, plugins and hooks to the instance

    Object.assign(getInstance(), _extends({}, props, {
      plugins: plugins,
      hooks: makeDefaultPluginHooks()
    })); // Allow plugins to register hooks as early as possible

    plugins.filter(Boolean).forEach(function (plugin) {
      plugin(getInstance().hooks);
    }); // Consume all hooks and make a getter for them

    var getHooks = useGetLatest(getInstance().hooks);
    getInstance().getHooks = getHooks;
    delete getInstance().hooks; // Allow useOptions hooks to modify the options coming into the table

    Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));

    var _getInstance = getInstance(),
        data = _getInstance.data,
        userColumns = _getInstance.columns,
        initialState = _getInstance.initialState,
        defaultColumn = _getInstance.defaultColumn,
        getSubRows = _getInstance.getSubRows,
        getRowId = _getInstance.getRowId,
        stateReducer = _getInstance.stateReducer,
        useControlledState = _getInstance.useControlledState; // Setup user reducer ref


    var getStateReducer = useGetLatest(stateReducer); // Build the reducer

    var reducer = React.useCallback(function (state, action) {
      // Detect invalid actions
      if (!action.type) {
        console.info({
          action: action
        });
        throw new Error('Unknown Action 👆');
      } // Reduce the state from all plugin reducers


      return [].concat(getHooks().stateReducers, Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()]).reduce(function (s, handler) {
        return handler(s, action, state, getInstance()) || s;
      }, state);
    }, [getHooks, getStateReducer, getInstance]); // Start the reducer

    var _React$useReducer = React.useReducer(reducer, undefined, function () {
      return reducer(initialState, {
        type: actions.init
      });
    }),
        reducerState = _React$useReducer[0],
        dispatch = _React$useReducer[1]; // Allow the user to control the final state with hooks


    var state = reduceHooks([].concat(getHooks().useControlledState, [useControlledState]), reducerState, {
      instance: getInstance()
    });
    Object.assign(getInstance(), {
      state: state,
      dispatch: dispatch
    }); // Decorate All the columns

    var columns = React.useMemo(function () {
      return linkColumnStructure(reduceHooks(getHooks().columns, userColumns, {
        instance: getInstance()
      }));
    }, [getHooks, getInstance, userColumns].concat(reduceHooks(getHooks().columnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().columns = columns; // Get the flat list of all columns and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var allColumns = React.useMemo(function () {
      return reduceHooks(getHooks().allColumns, flattenColumns(columns), {
        instance: getInstance()
      }).map(assignColumnAccessor);
    }, [columns, getHooks, getInstance].concat(reduceHooks(getHooks().allColumnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().allColumns = allColumns; // Access the row model using initial columns

    var _React$useMemo = React.useMemo(function () {
      var rows = [];
      var flatRows = [];
      var rowsById = {};
      var allColumnsQueue = [].concat(allColumns);

      while (allColumnsQueue.length) {
        var column = allColumnsQueue.shift();
        accessRowsForColumn({
          data: data,
          rows: rows,
          flatRows: flatRows,
          rowsById: rowsById,
          column: column,
          getRowId: getRowId,
          getSubRows: getSubRows,
          accessValueHooks: getHooks().accessValue,
          getInstance: getInstance
        });
      }

      return [rows, flatRows, rowsById];
    }, [allColumns, data, getRowId, getSubRows, getHooks, getInstance]),
        rows = _React$useMemo[0],
        flatRows = _React$useMemo[1],
        rowsById = _React$useMemo[2];

    Object.assign(getInstance(), {
      rows: rows,
      initialRows: [].concat(rows),
      flatRows: flatRows,
      rowsById: rowsById // materializedColumns,

    });
    loopHooks(getHooks().useInstanceAfterData, getInstance()); // Get the flat list of all columns AFTER the rows
    // have been access, and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var visibleColumns = React.useMemo(function () {
      return reduceHooks(getHooks().visibleColumns, allColumns, {
        instance: getInstance()
      }).map(function (d) {
        return decorateColumn(d, defaultColumn);
      });
    }, [getHooks, allColumns, getInstance, defaultColumn].concat(reduceHooks(getHooks().visibleColumnsDeps, [], {
      instance: getInstance()
    }))); // Combine new visible columns with all columns

    allColumns = React.useMemo(function () {
      var columns = [].concat(visibleColumns);
      allColumns.forEach(function (column) {
        if (!columns.find(function (d) {
          return d.id === column.id;
        })) {
          columns.push(column);
        }
      });
      return columns;
    }, [allColumns, visibleColumns]);
    getInstance().allColumns = allColumns;

    {
      var duplicateColumns = allColumns.filter(function (column, i) {
        return allColumns.findIndex(function (d) {
          return d.id === column.id;
        }) !== i;
      });

      if (duplicateColumns.length) {
        console.info(allColumns);
        throw new Error("Duplicate columns were found with ids: \"" + duplicateColumns.map(function (d) {
          return d.id;
        }).join(', ') + "\" in the columns array above");
      }
    } // Make the headerGroups


    var headerGroups = React.useMemo(function () {
      return reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns, defaultColumn), getInstance());
    }, [getHooks, visibleColumns, defaultColumn, getInstance].concat(reduceHooks(getHooks().headerGroupsDeps, [], {
      instance: getInstance()
    })));
    getInstance().headerGroups = headerGroups; // Get the first level of headers

    var headers = React.useMemo(function () {
      return headerGroups.length ? headerGroups[0].headers : [];
    }, [headerGroups]);
    getInstance().headers = headers; // Provide a flat header list for utilities

    getInstance().flatHeaders = headerGroups.reduce(function (all, headerGroup) {
      return [].concat(all, headerGroup.headers);
    }, []);
    loopHooks(getHooks().useInstanceBeforeDimensions, getInstance()); // Filter columns down to visible ones

    var visibleColumnsDep = visibleColumns.filter(function (d) {
      return d.isVisible;
    }).map(function (d) {
      return d.id;
    }).sort().join('_');
    visibleColumns = React.useMemo(function () {
      return visibleColumns.filter(function (d) {
        return d.isVisible;
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleColumns, visibleColumnsDep]);
    getInstance().visibleColumns = visibleColumns; // Header Visibility is needed by this point

    var _calculateHeaderWidth = calculateHeaderWidths(headers),
        totalColumnsMinWidth = _calculateHeaderWidth[0],
        totalColumnsWidth = _calculateHeaderWidth[1],
        totalColumnsMaxWidth = _calculateHeaderWidth[2];

    getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
    getInstance().totalColumnsWidth = totalColumnsWidth;
    getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;
    loopHooks(getHooks().useInstance, getInstance()) // Each materialized header needs to be assigned a render function and other
    // prop getter properties here.
    ;
    [].concat(getInstance().flatHeaders, getInstance().allColumns).forEach(function (column) {
      // Give columns/headers rendering power
      column.render = makeRenderer(getInstance(), column); // Give columns/headers a default getHeaderProps

      column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
        instance: getInstance(),
        column: column
      }); // Give columns/headers a default getFooterProps

      column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
        instance: getInstance(),
        column: column
      });
    });
    getInstance().headerGroups = React.useMemo(function () {
      return headerGroups.filter(function (headerGroup, i) {
        // Filter out any headers and headerGroups that don't have visible columns
        headerGroup.headers = headerGroup.headers.filter(function (column) {
          var recurse = function recurse(headers) {
            return headers.filter(function (column) {
              if (column.headers) {
                return recurse(column.headers);
              }

              return column.isVisible;
            }).length;
          };

          if (column.headers) {
            return recurse(column.headers);
          }

          return column.isVisible;
        }); // Give headerGroups getRowProps

        if (headerGroup.headers.length) {
          headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          return true;
        }

        return false;
      });
    }, [headerGroups, getInstance, getHooks]);
    getInstance().footerGroups = [].concat(getInstance().headerGroups).reverse(); // The prepareRow function is absolutely necessary and MUST be called on
    // any rows the user wishes to be displayed.

    getInstance().prepareRow = React.useCallback(function (row) {
      row.getRowProps = makePropGetter(getHooks().getRowProps, {
        instance: getInstance(),
        row: row
      }); // Build the visible cells for each row

      row.allCells = allColumns.map(function (column) {
        var value = row.values[column.id];
        var cell = {
          column: column,
          row: row,
          value: value
        }; // Give each cell a getCellProps base

        cell.getCellProps = makePropGetter(getHooks().getCellProps, {
          instance: getInstance(),
          cell: cell
        }); // Give each cell a renderer function (supports multiple renderers)

        cell.render = makeRenderer(getInstance(), column, {
          row: row,
          cell: cell,
          value: value
        });
        return cell;
      });
      row.cells = visibleColumns.map(function (column) {
        return row.allCells.find(function (cell) {
          return cell.column.id === column.id;
        });
      }); // need to apply any row specific hooks (useExpanded requires this)

      loopHooks(getHooks().prepareRow, row, {
        instance: getInstance()
      });
    }, [getHooks, getInstance, allColumns, visibleColumns]);
    getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
      instance: getInstance()
    });
    getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
      instance: getInstance()
    });
    loopHooks(getHooks().useFinalInstance, getInstance());
    return getInstance();
  };

  function calculateHeaderWidths(headers, left) {
    if (left === void 0) {
      left = 0;
    }

    var sumTotalMinWidth = 0;
    var sumTotalWidth = 0;
    var sumTotalMaxWidth = 0;
    var sumTotalFlexWidth = 0;
    headers.forEach(function (header) {
      var subHeaders = header.headers;
      header.totalLeft = left;

      if (subHeaders && subHeaders.length) {
        var _calculateHeaderWidth2 = calculateHeaderWidths(subHeaders, left),
            totalMinWidth = _calculateHeaderWidth2[0],
            totalWidth = _calculateHeaderWidth2[1],
            totalMaxWidth = _calculateHeaderWidth2[2],
            totalFlexWidth = _calculateHeaderWidth2[3];

        header.totalMinWidth = totalMinWidth;
        header.totalWidth = totalWidth;
        header.totalMaxWidth = totalMaxWidth;
        header.totalFlexWidth = totalFlexWidth;
      } else {
        header.totalMinWidth = header.minWidth;
        header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
        header.totalMaxWidth = header.maxWidth;
        header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
      }

      if (header.isVisible) {
        left += header.totalWidth;
        sumTotalMinWidth += header.totalMinWidth;
        sumTotalWidth += header.totalWidth;
        sumTotalMaxWidth += header.totalMaxWidth;
        sumTotalFlexWidth += header.totalFlexWidth;
      }
    });
    return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth, sumTotalFlexWidth];
  }

  function accessRowsForColumn(_ref) {
    var data = _ref.data,
        rows = _ref.rows,
        flatRows = _ref.flatRows,
        rowsById = _ref.rowsById,
        column = _ref.column,
        getRowId = _ref.getRowId,
        getSubRows = _ref.getSubRows,
        accessValueHooks = _ref.accessValueHooks,
        getInstance = _ref.getInstance;

    // Access the row's data column-by-column
    // We do it this way so we can incrementally add materialized
    // columns after the first pass and avoid excessive looping
    var accessRow = function accessRow(originalRow, rowIndex, depth, parent, parentRows) {
      if (depth === void 0) {
        depth = 0;
      }

      // Keep the original reference around
      var original = originalRow;
      var id = getRowId(originalRow, rowIndex, parent);
      var row = rowsById[id]; // If the row hasn't been created, let's make it

      if (!row) {
        row = {
          id: id,
          original: original,
          index: rowIndex,
          depth: depth,
          cells: [{}] // This is a dummy cell

        }; // Override common array functions (and the dummy cell's getCellProps function)
        // to show an error if it is accessed without calling prepareRow

        row.cells.map = unpreparedAccessWarning;
        row.cells.filter = unpreparedAccessWarning;
        row.cells.forEach = unpreparedAccessWarning;
        row.cells[0].getCellProps = unpreparedAccessWarning; // Create the cells and values

        row.values = {}; // Push this row into the parentRows array

        parentRows.push(row); // Keep track of every row in a flat array

        flatRows.push(row); // Also keep track of every row by its ID

        rowsById[id] = row; // Get the original subrows

        row.originalSubRows = getSubRows(originalRow, rowIndex); // Then recursively access them

        if (row.originalSubRows) {
          var subRows = [];
          row.originalSubRows.forEach(function (d, i) {
            return accessRow(d, i, depth + 1, row, subRows);
          }); // Keep the new subRows array on the row

          row.subRows = subRows;
        }
      } else if (row.subRows) {
        // If the row exists, then it's already been accessed
        // Keep recursing, but don't worry about passing the
        // accumlator array (those rows already exist)
        row.originalSubRows.forEach(function (d, i) {
          return accessRow(d, i, depth + 1, row);
        });
      } // If the column has an accessor, use it to get a value


      if (column.accessor) {
        row.values[column.id] = column.accessor(originalRow, rowIndex, row, parentRows, data);
      } // Allow plugins to manipulate the column value


      row.values[column.id] = reduceHooks(accessValueHooks, row.values[column.id], {
        row: row,
        column: column,
        instance: getInstance()
      }, true);
    };

    data.forEach(function (originalRow, rowIndex) {
      return accessRow(originalRow, rowIndex, 0, undefined, rows);
    });
  }

  actions.resetExpanded = 'resetExpanded';
  actions.toggleRowExpanded = 'toggleRowExpanded';
  actions.toggleAllRowsExpanded = 'toggleAllRowsExpanded';
  var useExpanded = function useExpanded(hooks) {
    hooks.getToggleAllRowsExpandedProps = [defaultGetToggleAllRowsExpandedProps];
    hooks.getToggleRowExpandedProps = [defaultGetToggleRowExpandedProps];
    hooks.stateReducers.push(reducer$1);
    hooks.useInstance.push(useInstance$1);
    hooks.prepareRow.push(prepareRow);
  };
  useExpanded.pluginName = 'useExpanded';

  var defaultGetToggleAllRowsExpandedProps = function defaultGetToggleAllRowsExpandedProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      onClick: function onClick(e) {
        instance.toggleAllRowsExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle All Rows Expanded'
    }];
  };

  var defaultGetToggleRowExpandedProps = function defaultGetToggleRowExpandedProps(props, _ref2) {
    var row = _ref2.row;
    return [props, {
      onClick: function onClick() {
        row.toggleRowExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle Row Expanded'
    }];
  }; // Reducer


  function reducer$1(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        expanded: {}
      }, state);
    }

    if (action.type === actions.resetExpanded) {
      return _extends({}, state, {
        expanded: instance.initialState.expanded || {}
      });
    }

    if (action.type === actions.toggleAllRowsExpanded) {
      var value = action.value;
      var isAllRowsExpanded = instance.isAllRowsExpanded,
          rowsById = instance.rowsById;
      var expandAll = typeof value !== 'undefined' ? value : !isAllRowsExpanded;

      if (expandAll) {
        var expanded = {};
        Object.keys(rowsById).forEach(function (rowId) {
          expanded[rowId] = true;
        });
        return _extends({}, state, {
          expanded: expanded
        });
      }

      return _extends({}, state, {
        expanded: {}
      });
    }

    if (action.type === actions.toggleRowExpanded) {
      var id = action.id,
          setExpanded = action.value;
      var exists = state.expanded[id];
      var shouldExist = typeof setExpanded !== 'undefined' ? setExpanded : !exists;

      if (!exists && shouldExist) {
        var _extends2;

        return _extends({}, state, {
          expanded: _extends({}, state.expanded, (_extends2 = {}, _extends2[id] = true, _extends2))
        });
      } else if (exists && !shouldExist) {
        var _state$expanded = state.expanded,
            _ = _state$expanded[id],
            rest = _objectWithoutPropertiesLoose(_state$expanded, [id].map(_toPropertyKey));

        return _extends({}, state, {
          expanded: rest
        });
      } else {
        return state;
      }
    }
  }

  function useInstance$1(instance) {
    var data = instance.data,
        rows = instance.rows,
        rowsById = instance.rowsById,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$autoResetEx = instance.autoResetExpanded,
        autoResetExpanded = _instance$autoResetEx === void 0 ? true : _instance$autoResetEx,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        expanded = instance.state.expanded,
        dispatch = instance.dispatch;
    ensurePluginOrder(plugins, ['useSortBy', 'useGroupBy', 'usePivotColumns', 'useGlobalFilter'], 'useExpanded');
    var getAutoResetExpanded = useGetLatest(autoResetExpanded);
    var isAllRowsExpanded = Boolean(Object.keys(rowsById).length && Object.keys(expanded).length);

    if (isAllRowsExpanded) {
      if (Object.keys(rowsById).some(function (id) {
        return !expanded[id];
      })) {
        isAllRowsExpanded = false;
      }
    } // Bypass any effects from firing when this changes


    useMountedLayoutEffect(function () {
      if (getAutoResetExpanded()) {
        dispatch({
          type: actions.resetExpanded
        });
      }
    }, [dispatch, data]);
    var toggleRowExpanded = React.useCallback(function (id, value) {
      dispatch({
        type: actions.toggleRowExpanded,
        id: id,
        value: value
      });
    }, [dispatch]);
    var toggleAllRowsExpanded = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsExpanded,
        value: value
      });
    }, [dispatch]);
    var expandedRows = React.useMemo(function () {
      if (paginateExpandedRows) {
        return expandRows(rows, {
          manualExpandedKey: manualExpandedKey,
          expanded: expanded,
          expandSubRows: expandSubRows
        });
      }

      return rows;
    }, [paginateExpandedRows, rows, manualExpandedKey, expanded, expandSubRows]);
    var expandedDepth = React.useMemo(function () {
      return findExpandedDepth(expanded);
    }, [expanded]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsExpandedProps = makePropGetter(getHooks().getToggleAllRowsExpandedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      preExpandedRows: rows,
      expandedRows: expandedRows,
      rows: expandedRows,
      expandedDepth: expandedDepth,
      isAllRowsExpanded: isAllRowsExpanded,
      toggleRowExpanded: toggleRowExpanded,
      toggleAllRowsExpanded: toggleAllRowsExpanded,
      getToggleAllRowsExpandedProps: getToggleAllRowsExpandedProps
    });
  }

  function prepareRow(row, _ref3) {
    var getHooks = _ref3.instance.getHooks,
        instance = _ref3.instance;

    row.toggleRowExpanded = function (set) {
      return instance.toggleRowExpanded(row.id, set);
    };

    row.getToggleRowExpandedProps = makePropGetter(getHooks().getToggleRowExpandedProps, {
      instance: instance,
      row: row
    });
  }

  function findExpandedDepth(expanded) {
    var maxDepth = 0;
    Object.keys(expanded).forEach(function (id) {
      var splitId = id.split('.');
      maxDepth = Math.max(maxDepth, splitId.length);
    });
    return maxDepth;
  }

  var text = function text(rows, ids, filterValue) {
    rows = rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
      });
    });
    return rows;
  };

  text.autoRemove = function (val) {
    return !val;
  };

  var exactText = function exactText(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
      });
    });
  };

  exactText.autoRemove = function (val) {
    return !val;
  };

  var exactTextCase = function exactTextCase(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
      });
    });
  };

  exactTextCase.autoRemove = function (val) {
    return !val;
  };

  var includes = function includes(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue.includes(filterValue);
      });
    });
  };

  includes.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesAll = function includesAll(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.every(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesAll.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesSome = function includesSome(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.some(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesSome.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesValue = function includesValue(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return filterValue.includes(rowValue);
      });
    });
  };

  includesValue.autoRemove = function (val) {
    return !val || !val.length;
  };

  var exact = function exact(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue === filterValue;
      });
    });
  };

  exact.autoRemove = function (val) {
    return typeof val === 'undefined';
  };

  var equals = function equals(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

        return rowValue == filterValue;
      });
    });
  };

  equals.autoRemove = function (val) {
    return val == null;
  };

  var between = function between(rows, ids, filterValue) {
    var _ref = filterValue || [],
        min = _ref[0],
        max = _ref[1];

    min = typeof min === 'number' ? min : -Infinity;
    max = typeof max === 'number' ? max : Infinity;

    if (min > max) {
      var temp = min;
      min = max;
      max = temp;
    }

    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue >= min && rowValue <= max;
      });
    });
  };

  between.autoRemove = function (val) {
    return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
  };

  var filterTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    text: text,
    exactText: exactText,
    exactTextCase: exactTextCase,
    includes: includes,
    includesAll: includesAll,
    includesSome: includesSome,
    includesValue: includesValue,
    exact: exact,
    equals: equals,
    between: between
  });

  actions.resetFilters = 'resetFilters';
  actions.setFilter = 'setFilter';
  actions.setAllFilters = 'setAllFilters';
  var useFilters = function useFilters(hooks) {
    hooks.stateReducers.push(reducer$2);
    hooks.useInstance.push(useInstance$2);
  };
  useFilters.pluginName = 'useFilters';

  function reducer$2(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        filters: []
      }, state);
    }

    if (action.type === actions.resetFilters) {
      return _extends({}, state, {
        filters: instance.initialState.filters || []
      });
    }

    if (action.type === actions.setFilter) {
      var columnId = action.columnId,
          filterValue = action.filterValue;
      var allColumns = instance.allColumns,
          userFilterTypes = instance.filterTypes;
      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });

      if (!column) {
        throw new Error("React-Table: Could not find a column with id: " + columnId);
      }

      var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
      var previousfilter = state.filters.find(function (d) {
        return d.id === columnId;
      });
      var newFilter = functionalUpdate(filterValue, previousfilter && previousfilter.value); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) {
        return _extends({}, state, {
          filters: state.filters.filter(function (d) {
            return d.id !== columnId;
          })
        });
      }

      if (previousfilter) {
        return _extends({}, state, {
          filters: state.filters.map(function (d) {
            if (d.id === columnId) {
              return {
                id: columnId,
                value: newFilter
              };
            }

            return d;
          })
        });
      }

      return _extends({}, state, {
        filters: [].concat(state.filters, [{
          id: columnId,
          value: newFilter
        }])
      });
    }

    if (action.type === actions.setAllFilters) {
      var filters = action.filters;
      var _allColumns = instance.allColumns,
          _userFilterTypes = instance.filterTypes;
      return _extends({}, state, {
        // Filter out undefined values
        filters: functionalUpdate(filters, state.filters).filter(function (filter) {
          var column = _allColumns.find(function (d) {
            return d.id === filter.id;
          });

          var filterMethod = getFilterMethod(column.filter, _userFilterTypes || {}, filterTypes);

          if (shouldAutoRemoveFilter(filterMethod.autoRemove, filter.value, column)) {
            return false;
          }

          return true;
        })
      });
    }
  }

  function useInstance$2(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        manualFilters = instance.manualFilters,
        _instance$defaultCanF = instance.defaultCanFilter,
        defaultCanFilter = _instance$defaultCanF === void 0 ? false : _instance$defaultCanF,
        disableFilters = instance.disableFilters,
        filters = instance.state.filters,
        dispatch = instance.dispatch,
        _instance$autoResetFi = instance.autoResetFilters,
        autoResetFilters = _instance$autoResetFi === void 0 ? true : _instance$autoResetFi;
    var setFilter = React.useCallback(function (columnId, filterValue) {
      dispatch({
        type: actions.setFilter,
        columnId: columnId,
        filterValue: filterValue
      });
    }, [dispatch]);
    var setAllFilters = React.useCallback(function (filters) {
      dispatch({
        type: actions.setAllFilters,
        filters: filters
      });
    }, [dispatch]);
    allColumns.forEach(function (column) {
      var id = column.id,
          accessor = column.accessor,
          columnDefaultCanFilter = column.defaultCanFilter,
          columnDisableFilters = column.disableFilters; // Determine if a column is filterable

      column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false); // Provide the column a way of updating the filter value

      column.setFilter = function (val) {
        return setFilter(column.id, val);
      }; // Provide the current filter value to the column for
      // convenience


      var found = filters.find(function (d) {
        return d.id === id;
      });
      column.filterValue = found && found.value;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualFilters || !filters.length) {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {}; // Filters top level and nested rows

      var filterRows = function filterRows(rows, depth) {
        if (depth === void 0) {
          depth = 0;
        }

        var filteredRows = rows;
        filteredRows = filters.reduce(function (filteredSoFar, _ref) {
          var columnId = _ref.id,
              filterValue = _ref.value;
          // Find the filters column
          var column = allColumns.find(function (d) {
            return d.id === columnId;
          });

          if (!column) {
            return filteredSoFar;
          }

          if (depth === 0) {
            column.preFilteredRows = filteredSoFar;
          }

          var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

          if (!filterMethod) {
            console.warn("Could not find a valid 'column.filter' for column with the ID: " + column.id + ".");
            return filteredSoFar;
          } // Pass the rows, id, filterValue and column to the filterMethod
          // to get the filtered rows back


          column.filteredRows = filterMethod(filteredSoFar, [columnId], filterValue);
          return column.filteredRows;
        }, rows); // Apply the filter to any subRows
        // We technically could do this recursively in the above loop,
        // but that would severely hinder the API for the user, since they
        // would be required to do that recursion in some scenarios

        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;

          if (!row.subRows) {
            return;
          }

          row.subRows = row.subRows && row.subRows.length > 0 ? filterRows(row.subRows, depth + 1) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualFilters, filters, rows, flatRows, rowsById, allColumns, userFilterTypes]),
        filteredRows = _React$useMemo[0],
        filteredFlatRows = _React$useMemo[1],
        filteredRowsById = _React$useMemo[2];

    React.useMemo(function () {
      // Now that each filtered column has it's partially filtered rows,
      // lets assign the final filtered rows to all of the other columns
      var nonFilteredColumns = allColumns.filter(function (column) {
        return !filters.find(function (d) {
          return d.id === column.id;
        });
      }); // This essentially enables faceted filter options to be built easily
      // using every column's preFilteredRows value

      nonFilteredColumns.forEach(function (column) {
        column.preFilteredRows = filteredRows;
        column.filteredRows = filteredRows;
      });
    }, [filteredRows, filters, allColumns]);
    var getAutoResetFilters = useGetLatest(autoResetFilters);
    useMountedLayoutEffect(function () {
      if (getAutoResetFilters()) {
        dispatch({
          type: actions.resetFilters
        });
      }
    }, [dispatch, manualFilters ? null : data]);
    Object.assign(instance, {
      preFilteredRows: rows,
      preFilteredFlatRows: flatRows,
      preFilteredRowsById: rowsById,
      filteredRows: filteredRows,
      filteredFlatRows: filteredFlatRows,
      filteredRowsById: filteredRowsById,
      rows: filteredRows,
      flatRows: filteredFlatRows,
      rowsById: filteredRowsById,
      setFilter: setFilter,
      setAllFilters: setAllFilters
    });
  }

  actions.resetGlobalFilter = 'resetGlobalFilter';
  actions.setGlobalFilter = 'setGlobalFilter';
  var useGlobalFilter = function useGlobalFilter(hooks) {
    hooks.stateReducers.push(reducer$3);
    hooks.useInstance.push(useInstance$3);
  };
  useGlobalFilter.pluginName = 'useGlobalFilter';

  function reducer$3(state, action, previousState, instance) {
    if (action.type === actions.resetGlobalFilter) {
      return _extends({}, state, {
        globalFilter: instance.initialState.globalFilter || undefined
      });
    }

    if (action.type === actions.setGlobalFilter) {
      var filterValue = action.filterValue;
      var userFilterTypes = instance.userFilterTypes;
      var filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {}, filterTypes);
      var newFilter = functionalUpdate(filterValue, state.globalFilter); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
        var globalFilter = state.globalFilter,
            stateWithoutGlobalFilter = _objectWithoutPropertiesLoose(state, ["globalFilter"]);

        return stateWithoutGlobalFilter;
      }

      return _extends({}, state, {
        globalFilter: newFilter
      });
    }
  }

  function useInstance$3(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        globalFilter = instance.globalFilter,
        manualGlobalFilter = instance.manualGlobalFilter,
        globalFilterValue = instance.state.globalFilter,
        dispatch = instance.dispatch,
        _instance$autoResetGl = instance.autoResetGlobalFilter,
        autoResetGlobalFilter = _instance$autoResetGl === void 0 ? true : _instance$autoResetGl,
        disableGlobalFilter = instance.disableGlobalFilter;
    var setGlobalFilter = React.useCallback(function (filterValue) {
      dispatch({
        type: actions.setGlobalFilter,
        filterValue: filterValue
      });
    }, [dispatch]); // TODO: Create a filter cache for incremental high speed multi-filtering
    // This gets pretty complicated pretty fast, since you have to maintain a
    // cache for each row group (top-level rows, and each row's recursive subrows)
    // This would make multi-filtering a lot faster though. Too far?

    var _React$useMemo = React.useMemo(function () {
      if (manualGlobalFilter || typeof globalFilterValue === 'undefined') {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {};
      var filterMethod = getFilterMethod(globalFilter, userFilterTypes || {}, filterTypes);

      if (!filterMethod) {
        console.warn("Could not find a valid 'globalFilter' option.");
        return rows;
      }

      allColumns.forEach(function (column) {
        var columnDisableGlobalFilter = column.disableGlobalFilter;
        column.canFilter = getFirstDefined(columnDisableGlobalFilter === true ? false : undefined, disableGlobalFilter === true ? false : undefined, true);
      });
      var filterableColumns = allColumns.filter(function (c) {
        return c.canFilter === true;
      }); // Filters top level and nested rows

      var filterRows = function filterRows(filteredRows) {
        filteredRows = filterMethod(filteredRows, filterableColumns.map(function (d) {
          return d.id;
        }), globalFilterValue);
        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;
          row.subRows = row.subRows && row.subRows.length ? filterRows(row.subRows) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualGlobalFilter, globalFilterValue, globalFilter, userFilterTypes, allColumns, rows, flatRows, rowsById, disableGlobalFilter]),
        globalFilteredRows = _React$useMemo[0],
        globalFilteredFlatRows = _React$useMemo[1],
        globalFilteredRowsById = _React$useMemo[2];

    var getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);
    useMountedLayoutEffect(function () {
      if (getAutoResetGlobalFilter()) {
        dispatch({
          type: actions.resetGlobalFilter
        });
      }
    }, [dispatch, manualGlobalFilter ? null : data]);
    Object.assign(instance, {
      preGlobalFilteredRows: rows,
      preGlobalFilteredFlatRows: flatRows,
      preGlobalFilteredRowsById: rowsById,
      globalFilteredRows: globalFilteredRows,
      globalFilteredFlatRows: globalFilteredFlatRows,
      globalFilteredRowsById: globalFilteredRowsById,
      rows: globalFilteredRows,
      flatRows: globalFilteredFlatRows,
      rowsById: globalFilteredRowsById,
      setGlobalFilter: setGlobalFilter,
      disableGlobalFilter: disableGlobalFilter
    });
  }

  function sum(values, aggregatedValues) {
    // It's faster to just add the aggregations together instead of
    // process leaf nodes individually
    return aggregatedValues.reduce(function (sum, next) {
      return sum + (typeof next === 'number' ? next : 0);
    }, 0);
  }
  function min(values) {
    var min = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
      }
    });
    return min;
  }
  function max(values) {
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        max = Math.max(max, value);
      }
    });
    return max;
  }
  function minMax(values) {
    var min = values[0] || 0;
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
        max = Math.max(max, value);
      }
    });
    return min + ".." + max;
  }
  function average(values) {
    return sum(null, values) / values.length;
  }
  function median(values) {
    if (!values.length) {
      return null;
    }

    var mid = Math.floor(values.length / 2);
    var nums = [].concat(values).sort(function (a, b) {
      return a - b;
    });
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
  function unique(values) {
    return Array.from(new Set(values).values());
  }
  function uniqueCount(values) {
    return new Set(values).size;
  }
  function count(values) {
    return values.length;
  }

  var aggregations = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sum: sum,
    min: min,
    max: max,
    minMax: minMax,
    average: average,
    median: median,
    unique: unique,
    uniqueCount: uniqueCount,
    count: count
  });

  var emptyArray = [];
  var emptyObject = {}; // Actions

  actions.resetGroupBy = 'resetGroupBy';
  actions.setGroupBy = 'setGroupBy';
  actions.toggleGroupBy = 'toggleGroupBy';
  var useGroupBy = function useGroupBy(hooks) {
    hooks.getGroupByToggleProps = [defaultGetGroupByToggleProps];
    hooks.stateReducers.push(reducer$4);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.groupBy]);
    });
    hooks.visibleColumns.push(visibleColumns);
    hooks.useInstance.push(useInstance$4);
    hooks.prepareRow.push(prepareRow$1);
  };
  useGroupBy.pluginName = 'useGroupBy';

  var defaultGetGroupByToggleProps = function defaultGetGroupByToggleProps(props, _ref2) {
    var header = _ref2.header;
    return [props, {
      onClick: header.canGroupBy ? function (e) {
        e.persist();
        header.toggleGroupBy();
      } : undefined,
      style: {
        cursor: header.canGroupBy ? 'pointer' : undefined
      },
      title: 'Toggle GroupBy'
    }];
  }; // Reducer


  function reducer$4(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        groupBy: []
      }, state);
    }

    if (action.type === actions.resetGroupBy) {
      return _extends({}, state, {
        groupBy: instance.initialState.groupBy || []
      });
    }

    if (action.type === actions.setGroupBy) {
      var value = action.value;
      return _extends({}, state, {
        groupBy: value
      });
    }

    if (action.type === actions.toggleGroupBy) {
      var columnId = action.columnId,
          setGroupBy = action.value;
      var resolvedGroupBy = typeof setGroupBy !== 'undefined' ? setGroupBy : !state.groupBy.includes(columnId);

      if (resolvedGroupBy) {
        return _extends({}, state, {
          groupBy: [].concat(state.groupBy, [columnId])
        });
      }

      return _extends({}, state, {
        groupBy: state.groupBy.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function visibleColumns(columns, _ref3) {
    var groupBy = _ref3.instance.state.groupBy;
    // Sort grouped columns to the start of the column list
    // before the headers are built
    var groupByColumns = groupBy.map(function (g) {
      return columns.find(function (col) {
        return col.id === g;
      });
    }).filter(Boolean);
    var nonGroupByColumns = columns.filter(function (col) {
      return !groupBy.includes(col.id);
    });
    columns = [].concat(groupByColumns, nonGroupByColumns);
    columns.forEach(function (column) {
      column.isGrouped = groupBy.includes(column.id);
      column.groupedIndex = groupBy.indexOf(column.id);
    });
    return columns;
  }

  var defaultUserAggregations = {};

  function useInstance$4(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        _instance$groupByFn = instance.groupByFn,
        groupByFn = _instance$groupByFn === void 0 ? defaultGroupByFn : _instance$groupByFn,
        manualGroupBy = instance.manualGroupBy,
        _instance$aggregation = instance.aggregations,
        userAggregations = _instance$aggregation === void 0 ? defaultUserAggregations : _instance$aggregation,
        plugins = instance.plugins,
        groupBy = instance.state.groupBy,
        dispatch = instance.dispatch,
        _instance$autoResetGr = instance.autoResetGroupBy,
        autoResetGroupBy = _instance$autoResetGr === void 0 ? true : _instance$autoResetGr,
        disableGroupBy = instance.disableGroupBy,
        defaultCanGroupBy = instance.defaultCanGroupBy,
        getHooks = instance.getHooks;
    ensurePluginOrder(plugins, ['useColumnOrder', 'useFilters'], 'useGroupBy');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnGroupBy = column.defaultGroupBy,
          columnDisableGroupBy = column.disableGroupBy;
      column.canGroupBy = accessor ? getFirstDefined(column.canGroupBy, columnDisableGroupBy === true ? false : undefined, disableGroupBy === true ? false : undefined, true) : getFirstDefined(column.canGroupBy, defaultColumnGroupBy, defaultCanGroupBy, false);

      if (column.canGroupBy) {
        column.toggleGroupBy = function () {
          return instance.toggleGroupBy(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });
    var toggleGroupBy = React.useCallback(function (columnId, value) {
      dispatch({
        type: actions.toggleGroupBy,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setGroupBy = React.useCallback(function (value) {
      dispatch({
        type: actions.setGroupBy,
        value: value
      });
    }, [dispatch]);
    flatHeaders.forEach(function (header) {
      header.getGroupByToggleProps = makePropGetter(getHooks().getGroupByToggleProps, {
        instance: getInstance(),
        header: header
      });
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualGroupBy || !groupBy.length) {
        return [rows, flatRows, rowsById, emptyArray, emptyObject, flatRows, rowsById];
      } // Ensure that the list of filtered columns exist


      var existingGroupBy = groupBy.filter(function (g) {
        return allColumns.find(function (col) {
          return col.id === g;
        });
      }); // Find the columns that can or are aggregating
      // Uses each column to aggregate rows into a single value

      var aggregateRowsToValues = function aggregateRowsToValues(leafRows, groupedRows, depth) {
        var values = {};
        allColumns.forEach(function (column) {
          // Don't aggregate columns that are in the groupBy
          if (existingGroupBy.includes(column.id)) {
            values[column.id] = groupedRows[0] ? groupedRows[0].values[column.id] : null;
            return;
          } // Aggregate the values


          var aggregateFn = typeof column.aggregate === 'function' ? column.aggregate : userAggregations[column.aggregate] || aggregations[column.aggregate];

          if (aggregateFn) {
            // Get the columnValues to aggregate
            var groupedValues = groupedRows.map(function (row) {
              return row.values[column.id];
            }); // Get the columnValues to aggregate

            var leafValues = leafRows.map(function (row) {
              var columnValue = row.values[column.id];

              if (!depth && column.aggregateValue) {
                var aggregateValueFn = typeof column.aggregateValue === 'function' ? column.aggregateValue : userAggregations[column.aggregateValue] || aggregations[column.aggregateValue];

                if (!aggregateValueFn) {
                  console.info({
                    column: column
                  });
                  throw new Error("React Table: Invalid column.aggregateValue option for column listed above");
                }

                columnValue = aggregateValueFn(columnValue, row, column);
              }

              return columnValue;
            });
            values[column.id] = aggregateFn(leafValues, groupedValues);
          } else if (column.aggregate) {
            console.info({
              column: column
            });
            throw new Error("React Table: Invalid column.aggregate option for column listed above");
          } else {
            values[column.id] = null;
          }
        });
        return values;
      };

      var groupedFlatRows = [];
      var groupedRowsById = {};
      var onlyGroupedFlatRows = [];
      var onlyGroupedRowsById = {};
      var nonGroupedFlatRows = [];
      var nonGroupedRowsById = {}; // Recursively group the data

      var groupUpRecursively = function groupUpRecursively(rows, depth, parentId) {
        if (depth === void 0) {
          depth = 0;
        }

        // This is the last level, just return the rows
        if (depth === existingGroupBy.length) {
          return rows;
        }

        var columnId = existingGroupBy[depth]; // Group the rows together for this level

        var rowGroupsMap = groupByFn(rows, columnId); // Peform aggregations for each group

        var aggregatedGroupedRows = Object.entries(rowGroupsMap).map(function (_ref4, index) {
          var groupByVal = _ref4[0],
              groupedRows = _ref4[1];
          var id = columnId + ":" + groupByVal;
          id = parentId ? parentId + ">" + id : id; // First, Recurse to group sub rows before aggregation

          var subRows = groupUpRecursively(groupedRows, depth + 1, id); // Flatten the leaf rows of the rows in this group

          var leafRows = depth ? flattenBy(groupedRows, 'leafRows') : groupedRows;
          var values = aggregateRowsToValues(leafRows, groupedRows, depth);
          var row = {
            id: id,
            isGrouped: true,
            groupByID: columnId,
            groupByVal: groupByVal,
            values: values,
            subRows: subRows,
            leafRows: leafRows,
            depth: depth,
            index: index
          };
          subRows.forEach(function (subRow) {
            groupedFlatRows.push(subRow);
            groupedRowsById[subRow.id] = subRow;

            if (subRow.isGrouped) {
              onlyGroupedFlatRows.push(subRow);
              onlyGroupedRowsById[subRow.id] = subRow;
            } else {
              nonGroupedFlatRows.push(subRow);
              nonGroupedRowsById[subRow.id] = subRow;
            }
          });
          return row;
        });
        return aggregatedGroupedRows;
      };

      var groupedRows = groupUpRecursively(rows);
      groupedRows.forEach(function (subRow) {
        groupedFlatRows.push(subRow);
        groupedRowsById[subRow.id] = subRow;

        if (subRow.isGrouped) {
          onlyGroupedFlatRows.push(subRow);
          onlyGroupedRowsById[subRow.id] = subRow;
        } else {
          nonGroupedFlatRows.push(subRow);
          nonGroupedRowsById[subRow.id] = subRow;
        }
      }); // Assign the new data

      return [groupedRows, groupedFlatRows, groupedRowsById, onlyGroupedFlatRows, onlyGroupedRowsById, nonGroupedFlatRows, nonGroupedRowsById];
    }, [manualGroupBy, groupBy, rows, flatRows, rowsById, allColumns, userAggregations, groupByFn]),
        groupedRows = _React$useMemo[0],
        groupedFlatRows = _React$useMemo[1],
        groupedRowsById = _React$useMemo[2],
        onlyGroupedFlatRows = _React$useMemo[3],
        onlyGroupedRowsById = _React$useMemo[4],
        nonGroupedFlatRows = _React$useMemo[5],
        nonGroupedRowsById = _React$useMemo[6];

    var getAutoResetGroupBy = useGetLatest(autoResetGroupBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetGroupBy()) {
        dispatch({
          type: actions.resetGroupBy
        });
      }
    }, [dispatch, manualGroupBy ? null : data]);
    Object.assign(instance, {
      preGroupedRows: rows,
      preGroupedFlatRow: flatRows,
      preGroupedRowsById: rowsById,
      groupedRows: groupedRows,
      groupedFlatRows: groupedFlatRows,
      groupedRowsById: groupedRowsById,
      onlyGroupedFlatRows: onlyGroupedFlatRows,
      onlyGroupedRowsById: onlyGroupedRowsById,
      nonGroupedFlatRows: nonGroupedFlatRows,
      nonGroupedRowsById: nonGroupedRowsById,
      rows: groupedRows,
      flatRows: groupedFlatRows,
      rowsById: groupedRowsById,
      toggleGroupBy: toggleGroupBy,
      setGroupBy: setGroupBy
    });
  }

  function prepareRow$1(row) {
    row.allCells.forEach(function (cell) {
      var _row$subRows;

      // Grouped cells are in the groupBy and the pivot cell for the row
      cell.isGrouped = cell.column.isGrouped && cell.column.id === row.groupByID; // Placeholder cells are any columns in the groupBy that are not grouped

      cell.isPlaceholder = !cell.isGrouped && cell.column.isGrouped; // Aggregated cells are not grouped, not repeated, but still have subRows

      cell.isAggregated = !cell.isGrouped && !cell.isPlaceholder && ((_row$subRows = row.subRows) == null ? void 0 : _row$subRows.length);
    });
  }

  function defaultGroupByFn(rows, columnId) {
    return rows.reduce(function (prev, row, i) {
      // TODO: Might want to implement a key serializer here so
      // irregular column values can still be grouped if needed?
      var resKey = "" + row.values[columnId];
      prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
      prev[resKey].push(row);
      return prev;
    }, {});
  }

  var reSplitAlphaNumeric = /([0-9]+)/gm; // Mixed sorting is slow, but very inclusive of many edge cases.
  // It handles numbers, mixed alphanumeric combinations, and even
  // null, undefined, and Infinity

  var alphanumeric = function alphanumeric(rowA, rowB, columnId) {
    var _getRowValuesByColumn = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn[0],
        b = _getRowValuesByColumn[1]; // Force to strings (or "" for unsupported types)


    a = toString(a);
    b = toString(b); // Split on number groups, but keep the delimiter
    // Then remove falsey split values

    a = a.split(reSplitAlphaNumeric).filter(Boolean);
    b = b.split(reSplitAlphaNumeric).filter(Boolean); // While

    while (a.length && b.length) {
      var aa = a.shift();
      var bb = b.shift();
      var an = parseInt(aa, 10);
      var bn = parseInt(bb, 10);
      var combo = [an, bn].sort(); // Both are string

      if (isNaN(combo[0])) {
        if (aa > bb) {
          return 1;
        }

        if (bb > aa) {
          return -1;
        }

        continue;
      } // One is a string, one is a number


      if (isNaN(combo[1])) {
        return isNaN(an) ? -1 : 1;
      } // Both are numbers


      if (an > bn) {
        return 1;
      }

      if (bn > an) {
        return -1;
      }
    }

    return a.length - b.length;
  };
  function datetime(rowA, rowB, columnId) {
    var _getRowValuesByColumn2 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn2[0],
        b = _getRowValuesByColumn2[1];

    a = a.getTime();
    b = b.getTime();
    return compareBasic(a, b);
  }
  function basic(rowA, rowB, columnId) {
    var _getRowValuesByColumn3 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn3[0],
        b = _getRowValuesByColumn3[1];

    return compareBasic(a, b);
  }
  function string(rowA, rowB, columnId) {
    var _getRowValuesByColumn4 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn4[0],
        b = _getRowValuesByColumn4[1];

    a = a.split('').filter(Boolean);
    b = b.split('').filter(Boolean);

    while (a.length && b.length) {
      var aa = a.shift();
      var bb = b.shift();
      var alower = aa.toLowerCase();
      var blower = bb.toLowerCase(); // Case insensitive comparison until characters match

      if (alower > blower) {
        return 1;
      }

      if (blower > alower) {
        return -1;
      } // If lowercase characters are identical


      if (aa > bb) {
        return 1;
      }

      if (bb > aa) {
        return -1;
      }

      continue;
    }

    return a.length - b.length;
  }
  function number(rowA, rowB, columnId) {
    var _getRowValuesByColumn5 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn5[0],
        b = _getRowValuesByColumn5[1];

    var replaceNonNumeric = /[^0-9.]/gi;
    a = Number(String(a).replace(replaceNonNumeric, ''));
    b = Number(String(b).replace(replaceNonNumeric, ''));
    return compareBasic(a, b);
  } // Utils

  function compareBasic(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  }

  function getRowValuesByColumnID(row1, row2, columnId) {
    return [row1.values[columnId], row2.values[columnId]];
  }

  function toString(a) {
    if (typeof a === 'number') {
      if (isNaN(a) || a === Infinity || a === -Infinity) {
        return '';
      }

      return String(a);
    }

    if (typeof a === 'string') {
      return a;
    }

    return '';
  }

  var sortTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alphanumeric: alphanumeric,
    datetime: datetime,
    basic: basic,
    string: string,
    number: number
  });

  actions.resetSortBy = 'resetSortBy';
  actions.setSortBy = 'setSortBy';
  actions.toggleSortBy = 'toggleSortBy';
  actions.clearSortBy = 'clearSortBy';
  defaultColumn.sortType = 'alphanumeric';
  defaultColumn.sortDescFirst = false;
  var useSortBy = function useSortBy(hooks) {
    hooks.getSortByToggleProps = [defaultGetSortByToggleProps];
    hooks.stateReducers.push(reducer$5);
    hooks.useInstance.push(useInstance$5);
  };
  useSortBy.pluginName = 'useSortBy';

  var defaultGetSortByToggleProps = function defaultGetSortByToggleProps(props, _ref) {
    var instance = _ref.instance,
        column = _ref.column;
    var _instance$isMultiSort = instance.isMultiSortEvent,
        isMultiSortEvent = _instance$isMultiSort === void 0 ? function (e) {
      return e.shiftKey;
    } : _instance$isMultiSort;
    return [props, {
      onClick: column.canSort ? function (e) {
        e.persist();
        column.toggleSortBy(undefined, !instance.disableMultiSort && isMultiSortEvent(e));
      } : undefined,
      style: {
        cursor: column.canSort ? 'pointer' : undefined
      },
      title: column.canSort ? 'Toggle SortBy' : undefined
    }];
  }; // Reducer


  function reducer$5(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        sortBy: []
      }, state);
    }

    if (action.type === actions.resetSortBy) {
      return _extends({}, state, {
        sortBy: instance.initialState.sortBy || []
      });
    }

    if (action.type === actions.clearSortBy) {
      var sortBy = state.sortBy;
      var newSortBy = sortBy.filter(function (d) {
        return d.id !== action.columnId;
      });
      return _extends({}, state, {
        sortBy: newSortBy
      });
    }

    if (action.type === actions.setSortBy) {
      var _sortBy = action.sortBy;
      return _extends({}, state, {
        sortBy: _sortBy
      });
    }

    if (action.type === actions.toggleSortBy) {
      var columnId = action.columnId,
          desc = action.desc,
          multi = action.multi;
      var allColumns = instance.allColumns,
          disableMultiSort = instance.disableMultiSort,
          disableSortRemove = instance.disableSortRemove,
          disableMultiRemove = instance.disableMultiRemove,
          _instance$maxMultiSor = instance.maxMultiSortColCount,
          maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor;
      var _sortBy2 = state.sortBy; // Find the column for this columnId

      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });
      var sortDescFirst = column.sortDescFirst; // Find any existing sortBy for this column

      var existingSortBy = _sortBy2.find(function (d) {
        return d.id === columnId;
      });

      var existingIndex = _sortBy2.findIndex(function (d) {
        return d.id === columnId;
      });

      var hasDescDefined = typeof desc !== 'undefined' && desc !== null;
      var _newSortBy = []; // What should we do with this sort action?

      var sortAction;

      if (!disableMultiSort && multi) {
        if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'add';
        }
      } else {
        // Normal mode
        if (existingIndex !== _sortBy2.length - 1 || _sortBy2.length !== 1) {
          sortAction = 'replace';
        } else if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'replace';
        }
      } // Handle toggle states that will remove the sortBy


      if (sortAction === 'toggle' && // Must be toggling
      !disableSortRemove && // If disableSortRemove, disable in general
      !hasDescDefined && ( // Must not be setting desc
      multi ? !disableMultiRemove : true) && ( // If multi, don't allow if disableMultiRemove
      existingSortBy && // Finally, detect if it should indeed be removed
      existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) {
        sortAction = 'remove';
      }

      if (sortAction === 'replace') {
        _newSortBy = [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }];
      } else if (sortAction === 'add') {
        _newSortBy = [].concat(_sortBy2, [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }]); // Take latest n columns

        _newSortBy.splice(0, _newSortBy.length - maxMultiSortColCount);
      } else if (sortAction === 'toggle') {
        // This flips (or sets) the
        _newSortBy = _sortBy2.map(function (d) {
          if (d.id === columnId) {
            return _extends({}, d, {
              desc: hasDescDefined ? desc : !existingSortBy.desc
            });
          }

          return d;
        });
      } else if (sortAction === 'remove') {
        _newSortBy = _sortBy2.filter(function (d) {
          return d.id !== columnId;
        });
      }

      return _extends({}, state, {
        sortBy: _newSortBy
      });
    }
  }

  function useInstance$5(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        allColumns = instance.allColumns,
        _instance$orderByFn = instance.orderByFn,
        orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn,
        userSortTypes = instance.sortTypes,
        manualSortBy = instance.manualSortBy,
        defaultCanSort = instance.defaultCanSort,
        disableSortBy = instance.disableSortBy,
        flatHeaders = instance.flatHeaders,
        sortBy = instance.state.sortBy,
        dispatch = instance.dispatch,
        plugins = instance.plugins,
        getHooks = instance.getHooks,
        _instance$autoResetSo = instance.autoResetSortBy,
        autoResetSortBy = _instance$autoResetSo === void 0 ? true : _instance$autoResetSo;
    ensurePluginOrder(plugins, ['useFilters', 'useGlobalFilter', 'useGroupBy', 'usePivotColumns'], 'useSortBy');
    var setSortBy = React.useCallback(function (sortBy) {
      dispatch({
        type: actions.setSortBy,
        sortBy: sortBy
      });
    }, [dispatch]); // Updates sorting based on a columnId, desc flag and multi flag

    var toggleSortBy = React.useCallback(function (columnId, desc, multi) {
      dispatch({
        type: actions.toggleSortBy,
        columnId: columnId,
        desc: desc,
        multi: multi
      });
    }, [dispatch]); // use reference to avoid memory leak in #1608

    var getInstance = useGetLatest(instance); // Add the getSortByToggleProps method to columns and headers

    flatHeaders.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnCanSort = column.canSort,
          columnDisableSortBy = column.disableSortBy,
          id = column.id;
      var canSort = accessor ? getFirstDefined(columnDisableSortBy === true ? false : undefined, disableSortBy === true ? false : undefined, true) : getFirstDefined(defaultCanSort, defaultColumnCanSort, false);
      column.canSort = canSort;

      if (column.canSort) {
        column.toggleSortBy = function (desc, multi) {
          return toggleSortBy(column.id, desc, multi);
        };

        column.clearSortBy = function () {
          dispatch({
            type: actions.clearSortBy,
            columnId: column.id
          });
        };
      }

      column.getSortByToggleProps = makePropGetter(getHooks().getSortByToggleProps, {
        instance: getInstance(),
        column: column
      });
      var columnSort = sortBy.find(function (d) {
        return d.id === id;
      });
      column.isSorted = !!columnSort;
      column.sortedIndex = sortBy.findIndex(function (d) {
        return d.id === id;
      });
      column.isSortedDesc = column.isSorted ? columnSort.desc : undefined;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualSortBy || !sortBy.length) {
        return [rows, flatRows];
      }

      var sortedFlatRows = []; // Filter out sortBys that correspond to non existing columns

      var availableSortBy = sortBy.filter(function (sort) {
        return allColumns.find(function (col) {
          return col.id === sort.id;
        });
      });

      var sortData = function sortData(rows) {
        // Use the orderByFn to compose multiple sortBy's together.
        // This will also perform a stable sorting using the row index
        // if needed.
        var sortedData = orderByFn(rows, availableSortBy.map(function (sort) {
          // Support custom sorting methods for each column
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (!column) {
            throw new Error("React-Table: Could not find a column with id: " + sort.id + " while sorting");
          }

          var sortType = column.sortType; // Look up sortBy functions in this order:
          // column function
          // column string lookup on user sortType
          // column string lookup on built-in sortType
          // default function
          // default string lookup on user sortType
          // default string lookup on built-in sortType

          var sortMethod = isFunction(sortType) || (userSortTypes || {})[sortType] || sortTypes[sortType];

          if (!sortMethod) {
            throw new Error("React-Table: Could not find a valid sortType of '" + sortType + "' for column '" + sort.id + "'.");
          } // Return the correct sortFn.
          // This function should always return in ascending order


          return function (a, b) {
            return sortMethod(a, b, sort.id, sort.desc);
          };
        }), // Map the directions
        availableSortBy.map(function (sort) {
          // Detect and use the sortInverted option
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (column && column.sortInverted) {
            return sort.desc;
          }

          return !sort.desc;
        })); // If there are sub-rows, sort them

        sortedData.forEach(function (row) {
          sortedFlatRows.push(row);

          if (!row.subRows || row.subRows.length === 0) {
            return;
          }

          row.subRows = sortData(row.subRows);
        });
        return sortedData;
      };

      return [sortData(rows), sortedFlatRows];
    }, [manualSortBy, sortBy, rows, flatRows, allColumns, orderByFn, userSortTypes]),
        sortedRows = _React$useMemo[0],
        sortedFlatRows = _React$useMemo[1];

    var getAutoResetSortBy = useGetLatest(autoResetSortBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetSortBy()) {
        dispatch({
          type: actions.resetSortBy
        });
      }
    }, [manualSortBy ? null : data]);
    Object.assign(instance, {
      preSortedRows: rows,
      preSortedFlatRows: flatRows,
      sortedRows: sortedRows,
      sortedFlatRows: sortedFlatRows,
      rows: sortedRows,
      flatRows: sortedFlatRows,
      setSortBy: setSortBy,
      toggleSortBy: toggleSortBy
    });
  }

  function defaultOrderByFn(arr, funcs, dirs) {
    return [].concat(arr).sort(function (rowA, rowB) {
      for (var i = 0; i < funcs.length; i += 1) {
        var sortFn = funcs[i];
        var desc = dirs[i] === false || dirs[i] === 'desc';
        var sortInt = sortFn(rowA, rowB);

        if (sortInt !== 0) {
          return desc ? -sortInt : sortInt;
        }
      }

      return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
    });
  }

  var pluginName = 'usePagination'; // Actions

  actions.resetPage = 'resetPage';
  actions.gotoPage = 'gotoPage';
  actions.setPageSize = 'setPageSize';
  var usePagination = function usePagination(hooks) {
    hooks.stateReducers.push(reducer$6);
    hooks.useInstance.push(useInstance$6);
  };
  usePagination.pluginName = pluginName;

  function reducer$6(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pageSize: 10,
        pageIndex: 0
      }, state);
    }

    if (action.type === actions.resetPage) {
      return _extends({}, state, {
        pageIndex: instance.initialState.pageIndex || 0
      });
    }

    if (action.type === actions.gotoPage) {
      var pageCount = instance.pageCount,
          page = instance.page;
      var newPageIndex = functionalUpdate(action.pageIndex, state.pageIndex);
      var canNavigate = false;

      if (newPageIndex > state.pageIndex) {
        // next page
        canNavigate = pageCount === -1 ? page.length >= state.pageSize : newPageIndex < pageCount;
      } else if (newPageIndex < state.pageIndex) {
        // prev page
        canNavigate = newPageIndex > -1;
      }

      if (!canNavigate) {
        return state;
      }

      return _extends({}, state, {
        pageIndex: newPageIndex
      });
    }

    if (action.type === actions.setPageSize) {
      var pageSize = action.pageSize;
      var topRowIndex = state.pageSize * state.pageIndex;
      var pageIndex = Math.floor(topRowIndex / pageSize);
      return _extends({}, state, {
        pageIndex: pageIndex,
        pageSize: pageSize
      });
    }
  }

  function useInstance$6(instance) {
    var rows = instance.rows,
        _instance$autoResetPa = instance.autoResetPage,
        autoResetPage = _instance$autoResetPa === void 0 ? true : _instance$autoResetPa,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        plugins = instance.plugins,
        userPageCount = instance.pageCount,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$state = instance.state,
        pageSize = _instance$state.pageSize,
        pageIndex = _instance$state.pageIndex,
        expanded = _instance$state.expanded,
        globalFilter = _instance$state.globalFilter,
        filters = _instance$state.filters,
        groupBy = _instance$state.groupBy,
        sortBy = _instance$state.sortBy,
        dispatch = instance.dispatch,
        data = instance.data,
        manualPagination = instance.manualPagination;
    ensurePluginOrder(plugins, ['useGlobalFilter', 'useFilters', 'useGroupBy', 'useSortBy', 'useExpanded'], 'usePagination');
    var getAutoResetPage = useGetLatest(autoResetPage);
    useMountedLayoutEffect(function () {
      if (getAutoResetPage()) {
        dispatch({
          type: actions.resetPage
        });
      }
    }, [dispatch, manualPagination ? null : data, globalFilter, filters, groupBy, sortBy]);
    var pageCount = manualPagination ? userPageCount : Math.ceil(rows.length / pageSize);
    var pageOptions = React.useMemo(function () {
      return pageCount > 0 ? [].concat(new Array(pageCount)).fill(null).map(function (d, i) {
        return i;
      }) : [];
    }, [pageCount]);
    var page = React.useMemo(function () {
      var page;

      if (manualPagination) {
        page = rows;
      } else {
        var pageStart = pageSize * pageIndex;
        var pageEnd = pageStart + pageSize;
        page = rows.slice(pageStart, pageEnd);
      }

      if (paginateExpandedRows) {
        return page;
      }

      return expandRows(page, {
        manualExpandedKey: manualExpandedKey,
        expanded: expanded,
        expandSubRows: expandSubRows
      });
    }, [expandSubRows, expanded, manualExpandedKey, manualPagination, pageIndex, pageSize, paginateExpandedRows, rows]);
    var canPreviousPage = pageIndex > 0;
    var canNextPage = pageCount === -1 ? page.length >= pageSize : pageIndex < pageCount - 1;
    var gotoPage = React.useCallback(function (pageIndex) {
      dispatch({
        type: actions.gotoPage,
        pageIndex: pageIndex
      });
    }, [dispatch]);
    var previousPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old - 1;
      });
    }, [gotoPage]);
    var nextPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old + 1;
      });
    }, [gotoPage]);
    var setPageSize = React.useCallback(function (pageSize) {
      dispatch({
        type: actions.setPageSize,
        pageSize: pageSize
      });
    }, [dispatch]);
    Object.assign(instance, {
      pageOptions: pageOptions,
      pageCount: pageCount,
      page: page,
      canPreviousPage: canPreviousPage,
      canNextPage: canNextPage,
      gotoPage: gotoPage,
      previousPage: previousPage,
      nextPage: nextPage,
      setPageSize: setPageSize
    });
  }

  actions.resetPivot = 'resetPivot';
  actions.togglePivot = 'togglePivot';
  var _UNSTABLE_usePivotColumns = function _UNSTABLE_usePivotColumns(hooks) {
    hooks.getPivotToggleProps = [defaultGetPivotToggleProps];
    hooks.stateReducers.push(reducer$7);
    hooks.useInstanceAfterData.push(useInstanceAfterData);
    hooks.allColumns.push(allColumns);
    hooks.accessValue.push(accessValue);
    hooks.materializedColumns.push(materializedColumns);
    hooks.materializedColumnsDeps.push(materializedColumnsDeps);
    hooks.visibleColumns.push(visibleColumns$1);
    hooks.visibleColumnsDeps.push(visibleColumnsDeps);
    hooks.useInstance.push(useInstance$7);
    hooks.prepareRow.push(prepareRow$2);
  };
  _UNSTABLE_usePivotColumns.pluginName = 'usePivotColumns';
  var defaultPivotColumns = [];

  var defaultGetPivotToggleProps = function defaultGetPivotToggleProps(props, _ref) {
    var header = _ref.header;
    return [props, {
      onClick: header.canPivot ? function (e) {
        e.persist();
        header.togglePivot();
      } : undefined,
      style: {
        cursor: header.canPivot ? 'pointer' : undefined
      },
      title: 'Toggle Pivot'
    }];
  }; // Reducer


  function reducer$7(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pivotColumns: defaultPivotColumns
      }, state);
    }

    if (action.type === actions.resetPivot) {
      return _extends({}, state, {
        pivotColumns: instance.initialState.pivotColumns || defaultPivotColumns
      });
    }

    if (action.type === actions.togglePivot) {
      var columnId = action.columnId,
          setPivot = action.value;
      var resolvedPivot = typeof setPivot !== 'undefined' ? setPivot : !state.pivotColumns.includes(columnId);

      if (resolvedPivot) {
        return _extends({}, state, {
          pivotColumns: [].concat(state.pivotColumns, [columnId])
        });
      }

      return _extends({}, state, {
        pivotColumns: state.pivotColumns.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function useInstanceAfterData(instance) {
    instance.allColumns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
    });
  }

  function allColumns(columns, _ref2) {
    var instance = _ref2.instance;
    columns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
      column.uniqueValues = new Set();
    });
    return columns;
  }

  function accessValue(value, _ref3) {
    var column = _ref3.column;

    if (column.uniqueValues && typeof value !== 'undefined') {
      column.uniqueValues.add(value);
    }

    return value;
  }

  function materializedColumns(materialized, _ref4) {
    var instance = _ref4.instance;
    var allColumns = instance.allColumns,
        state = instance.state;

    if (!state.pivotColumns.length || !state.groupBy || !state.groupBy.length) {
      return materialized;
    }

    var pivotColumns = state.pivotColumns.map(function (id) {
      return allColumns.find(function (d) {
        return d.id === id;
      });
    }).filter(Boolean);
    var sourceColumns = allColumns.filter(function (d) {
      return !d.isPivotSource && !state.groupBy.includes(d.id) && !state.pivotColumns.includes(d.id);
    });

    var buildPivotColumns = function buildPivotColumns(depth, parent, pivotFilters) {
      if (depth === void 0) {
        depth = 0;
      }

      if (pivotFilters === void 0) {
        pivotFilters = [];
      }

      var pivotColumn = pivotColumns[depth];

      if (!pivotColumn) {
        return sourceColumns.map(function (sourceColumn) {
          // TODO: We could offer support here for renesting pivoted
          // columns inside copies of their header groups. For now,
          // that seems like it would be (1) overkill on nesting, considering
          // you already get nesting for every pivot level and (2)
          // really hard. :)
          return _extends({}, sourceColumn, {
            canPivot: false,
            isPivoted: true,
            parent: parent,
            depth: depth,
            id: "" + (parent ? parent.id + "." + sourceColumn.id : sourceColumn.id),
            accessor: function accessor(originalRow, i, row) {
              if (pivotFilters.every(function (filter) {
                return filter(row);
              })) {
                return row.values[sourceColumn.id];
              }
            }
          });
        });
      }

      var uniqueValues = Array.from(pivotColumn.uniqueValues).sort();
      return uniqueValues.map(function (uniqueValue) {
        var columnGroup = _extends({}, pivotColumn, {
          Header: pivotColumn.PivotHeader || typeof pivotColumn.header === 'string' ? pivotColumn.Header + ": " + uniqueValue : uniqueValue,
          isPivotGroup: true,
          parent: parent,
          depth: depth,
          id: parent ? parent.id + "." + pivotColumn.id + "." + uniqueValue : pivotColumn.id + "." + uniqueValue,
          pivotValue: uniqueValue
        });

        columnGroup.columns = buildPivotColumns(depth + 1, columnGroup, [].concat(pivotFilters, [function (row) {
          return row.values[pivotColumn.id] === uniqueValue;
        }]));
        return columnGroup;
      });
    };

    var newMaterialized = flattenColumns(buildPivotColumns());
    return [].concat(materialized, newMaterialized);
  }

  function materializedColumnsDeps(deps, _ref5) {
    var _ref5$instance$state = _ref5.instance.state,
        pivotColumns = _ref5$instance$state.pivotColumns,
        groupBy = _ref5$instance$state.groupBy;
    return [].concat(deps, [pivotColumns, groupBy]);
  }

  function visibleColumns$1(visibleColumns, _ref6) {
    var state = _ref6.instance.state;
    visibleColumns = visibleColumns.filter(function (d) {
      return !d.isPivotSource;
    });

    if (state.pivotColumns.length && state.groupBy && state.groupBy.length) {
      visibleColumns = visibleColumns.filter(function (column) {
        return column.isGrouped || column.isPivoted;
      });
    }

    return visibleColumns;
  }

  function visibleColumnsDeps(deps, _ref7) {
    var instance = _ref7.instance;
    return [].concat(deps, [instance.state.pivotColumns, instance.state.groupBy]);
  }

  function useInstance$7(instance) {
    var columns = instance.columns,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetPi = instance.autoResetPivot,
        autoResetPivot = _instance$autoResetPi === void 0 ? true : _instance$autoResetPi,
        manaulPivot = instance.manaulPivot,
        disablePivot = instance.disablePivot,
        defaultCanPivot = instance.defaultCanPivot;
    ensurePluginOrder(plugins, ['useGroupBy'], 'usePivotColumns');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnPivot = column.defaultPivot,
          columnDisablePivot = column.disablePivot;
      column.canPivot = accessor ? getFirstDefined(column.canPivot, columnDisablePivot === true ? false : undefined, disablePivot === true ? false : undefined, true) : getFirstDefined(column.canPivot, defaultColumnPivot, defaultCanPivot, false);

      if (column.canPivot) {
        column.togglePivot = function () {
          return instance.togglePivot(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });

    var togglePivot = function togglePivot(columnId, value) {
      dispatch({
        type: actions.togglePivot,
        columnId: columnId,
        value: value
      });
    };

    flatHeaders.forEach(function (header) {
      header.getPivotToggleProps = makePropGetter(getHooks().getPivotToggleProps, {
        instance: getInstance(),
        header: header
      });
    });
    var getAutoResetPivot = useGetLatest(autoResetPivot);
    useMountedLayoutEffect(function () {
      if (getAutoResetPivot()) {
        dispatch({
          type: actions.resetPivot
        });
      }
    }, [dispatch, manaulPivot ? null : columns]);
    Object.assign(instance, {
      togglePivot: togglePivot
    });
  }

  function prepareRow$2(row) {
    row.allCells.forEach(function (cell) {
      // Grouped cells are in the pivotColumns and the pivot cell for the row
      cell.isPivoted = cell.column.isPivoted;
    });
  }

  var pluginName$1 = 'useRowSelect'; // Actions

  actions.resetSelectedRows = 'resetSelectedRows';
  actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
  actions.toggleRowSelected = 'toggleRowSelected';
  actions.toggleAllPageRowsSelected = 'toggleAllPageRowsSelected';
  var useRowSelect = function useRowSelect(hooks) {
    hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
    hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
    hooks.getToggleAllPageRowsSelectedProps = [defaultGetToggleAllPageRowsSelectedProps];
    hooks.stateReducers.push(reducer$8);
    hooks.useInstance.push(useInstance$8);
    hooks.prepareRow.push(prepareRow$3);
  };
  useRowSelect.pluginName = pluginName$1;

  var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps(props, _ref) {
    var instance = _ref.instance,
        row = _ref.row;
    var _instance$manualRowSe = instance.manualRowSelectedKey,
        manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe;
    var checked = false;

    if (row.original && row.original[manualRowSelectedKey]) {
      checked = true;
    } else {
      checked = row.isSelected;
    }

    return [props, {
      onChange: function onChange(e) {
        row.toggleRowSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: checked,
      title: 'Toggle Row Selected',
      indeterminate: row.isSomeSelected
    }];
  };

  var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllRowsSelected,
      title: 'Toggle All Rows Selected',
      indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
    }];
  };

  var defaultGetToggleAllPageRowsSelectedProps = function defaultGetToggleAllPageRowsSelectedProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllPageRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllPageRowsSelected,
      title: 'Toggle All Current Page Rows Selected',
      indeterminate: Boolean(!instance.isAllPageRowsSelected && instance.page.some(function (_ref4) {
        var id = _ref4.id;
        return instance.state.selectedRowIds[id];
      }))
    }];
  }; // eslint-disable-next-line max-params


  function reducer$8(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        selectedRowIds: {}
      }, state);
    }

    if (action.type === actions.resetSelectedRows) {
      return _extends({}, state, {
        selectedRowIds: instance.initialState.selectedRowIds || {}
      });
    }

    if (action.type === actions.toggleAllRowsSelected) {
      var setSelected = action.value;
      var isAllRowsSelected = instance.isAllRowsSelected,
          rowsById = instance.rowsById,
          _instance$nonGroupedR = instance.nonGroupedRowsById,
          nonGroupedRowsById = _instance$nonGroupedR === void 0 ? rowsById : _instance$nonGroupedR;
      var selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllRowsSelected; // Only remove/add the rows that are visible on the screen
      //  Leave all the other rows that are selected alone.

      var selectedRowIds = Object.assign({}, state.selectedRowIds);

      if (selectAll) {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          selectedRowIds[rowId] = true;
        });
      } else {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          delete selectedRowIds[rowId];
        });
      }

      return _extends({}, state, {
        selectedRowIds: selectedRowIds
      });
    }

    if (action.type === actions.toggleRowSelected) {
      var id = action.id,
          _setSelected = action.value;
      var _rowsById = instance.rowsById,
          _instance$selectSubRo = instance.selectSubRows,
          selectSubRows = _instance$selectSubRo === void 0 ? true : _instance$selectSubRo,
          getSubRows = instance.getSubRows;
      var isSelected = state.selectedRowIds[id];
      var shouldExist = typeof _setSelected !== 'undefined' ? _setSelected : !isSelected;

      if (isSelected === shouldExist) {
        return state;
      }

      var newSelectedRowIds = _extends({}, state.selectedRowIds);

      var handleRowById = function handleRowById(id) {
        var row = _rowsById[id];

        if (!row.isGrouped) {
          if (shouldExist) {
            newSelectedRowIds[id] = true;
          } else {
            delete newSelectedRowIds[id];
          }
        }

        if (selectSubRows && getSubRows(row)) {
          return getSubRows(row).forEach(function (row) {
            return handleRowById(row.id);
          });
        }
      };

      handleRowById(id);
      return _extends({}, state, {
        selectedRowIds: newSelectedRowIds
      });
    }

    if (action.type === actions.toggleAllPageRowsSelected) {
      var _setSelected2 = action.value;

      var page = instance.page,
          _rowsById2 = instance.rowsById,
          _instance$selectSubRo2 = instance.selectSubRows,
          _selectSubRows = _instance$selectSubRo2 === void 0 ? true : _instance$selectSubRo2,
          isAllPageRowsSelected = instance.isAllPageRowsSelected,
          _getSubRows = instance.getSubRows;

      var _selectAll = typeof _setSelected2 !== 'undefined' ? _setSelected2 : !isAllPageRowsSelected;

      var _newSelectedRowIds = _extends({}, state.selectedRowIds);

      var _handleRowById = function _handleRowById(id) {
        var row = _rowsById2[id];

        if (!row.isGrouped) {
          if (_selectAll) {
            _newSelectedRowIds[id] = true;
          } else {
            delete _newSelectedRowIds[id];
          }
        }

        if (_selectSubRows && _getSubRows(row)) {
          return _getSubRows(row).forEach(function (row) {
            return _handleRowById(row.id);
          });
        }
      };

      page.forEach(function (row) {
        return _handleRowById(row.id);
      });
      return _extends({}, state, {
        selectedRowIds: _newSelectedRowIds
      });
    }

    return state;
  }

  function useInstance$8(instance) {
    var data = instance.data,
        rows = instance.rows,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        rowsById = instance.rowsById,
        _instance$nonGroupedR2 = instance.nonGroupedRowsById,
        nonGroupedRowsById = _instance$nonGroupedR2 === void 0 ? rowsById : _instance$nonGroupedR2,
        _instance$autoResetSe = instance.autoResetSelectedRows,
        autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe,
        selectedRowIds = instance.state.selectedRowIds,
        _instance$selectSubRo3 = instance.selectSubRows,
        selectSubRows = _instance$selectSubRo3 === void 0 ? true : _instance$selectSubRo3,
        dispatch = instance.dispatch,
        page = instance.page,
        getSubRows = instance.getSubRows;
    ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded', 'usePagination'], 'useRowSelect');
    var selectedFlatRows = React.useMemo(function () {
      var selectedFlatRows = [];
      rows.forEach(function (row) {
        var isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
        row.isSelected = !!isSelected;
        row.isSomeSelected = isSelected === null;

        if (isSelected) {
          selectedFlatRows.push(row);
        }
      });
      return selectedFlatRows;
    }, [rows, selectSubRows, selectedRowIds, getSubRows]);
    var isAllRowsSelected = Boolean(Object.keys(nonGroupedRowsById).length && Object.keys(selectedRowIds).length);
    var isAllPageRowsSelected = isAllRowsSelected;

    if (isAllRowsSelected) {
      if (Object.keys(nonGroupedRowsById).some(function (id) {
        return !selectedRowIds[id];
      })) {
        isAllRowsSelected = false;
      }
    }

    if (!isAllRowsSelected) {
      if (page && page.length && page.some(function (_ref5) {
        var id = _ref5.id;
        return !selectedRowIds[id];
      })) {
        isAllPageRowsSelected = false;
      }
    }

    var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
    useMountedLayoutEffect(function () {
      if (getAutoResetSelectedRows()) {
        dispatch({
          type: actions.resetSelectedRows
        });
      }
    }, [dispatch, data]);
    var toggleAllRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleAllPageRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllPageRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleRowSelected = React.useCallback(function (id, value) {
      return dispatch({
        type: actions.toggleRowSelected,
        id: id,
        value: value
      });
    }, [dispatch]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsSelectedProps = makePropGetter(getHooks().getToggleAllRowsSelectedProps, {
      instance: getInstance()
    });
    var getToggleAllPageRowsSelectedProps = makePropGetter(getHooks().getToggleAllPageRowsSelectedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      selectedFlatRows: selectedFlatRows,
      isAllRowsSelected: isAllRowsSelected,
      isAllPageRowsSelected: isAllPageRowsSelected,
      toggleRowSelected: toggleRowSelected,
      toggleAllRowsSelected: toggleAllRowsSelected,
      getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps,
      getToggleAllPageRowsSelectedProps: getToggleAllPageRowsSelectedProps,
      toggleAllPageRowsSelected: toggleAllPageRowsSelected
    });
  }

  function prepareRow$3(row, _ref6) {
    var instance = _ref6.instance;

    row.toggleRowSelected = function (set) {
      return instance.toggleRowSelected(row.id, set);
    };

    row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, {
      instance: instance,
      row: row
    });
  }

  function getRowIsSelected(row, selectedRowIds, getSubRows) {
    if (selectedRowIds[row.id]) {
      return true;
    }

    var subRows = getSubRows(row);

    if (subRows && subRows.length) {
      var allChildrenSelected = true;
      var someSelected = false;
      subRows.forEach(function (subRow) {
        // Bail out early if we know both of these
        if (someSelected && !allChildrenSelected) {
          return;
        }

        if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) {
          someSelected = true;
        } else {
          allChildrenSelected = false;
        }
      });
      return allChildrenSelected ? true : someSelected ? null : false;
    }

    return false;
  }

  var defaultInitialRowStateAccessor = function defaultInitialRowStateAccessor(row) {
    return {};
  };

  var defaultInitialCellStateAccessor = function defaultInitialCellStateAccessor(cell) {
    return {};
  }; // Actions


  actions.setRowState = 'setRowState';
  actions.setCellState = 'setCellState';
  actions.resetRowState = 'resetRowState';
  var useRowState = function useRowState(hooks) {
    hooks.stateReducers.push(reducer$9);
    hooks.useInstance.push(useInstance$9);
    hooks.prepareRow.push(prepareRow$4);
  };
  useRowState.pluginName = 'useRowState';

  function reducer$9(state, action, previousState, instance) {
    var _instance$initialRowS = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS,
        _instance$initialCell = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell,
        rowsById = instance.rowsById;

    if (action.type === actions.init) {
      return _extends({
        rowState: {}
      }, state);
    }

    if (action.type === actions.resetRowState) {
      return _extends({}, state, {
        rowState: instance.initialState.rowState || {}
      });
    }

    if (action.type === actions.setRowState) {
      var _extends2;

      var rowId = action.rowId,
          value = action.value;
      var oldRowState = typeof state.rowState[rowId] !== 'undefined' ? state.rowState[rowId] : initialRowStateAccessor(rowsById[rowId]);
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends2 = {}, _extends2[rowId] = functionalUpdate(value, oldRowState), _extends2))
      });
    }

    if (action.type === actions.setCellState) {
      var _oldRowState$cellStat, _rowsById$_rowId, _rowsById$_rowId$cell, _extends3, _extends4;

      var _rowId = action.rowId,
          columnId = action.columnId,
          _value = action.value;

      var _oldRowState = typeof state.rowState[_rowId] !== 'undefined' ? state.rowState[_rowId] : initialRowStateAccessor(rowsById[_rowId]);

      var oldCellState = typeof (_oldRowState == null ? void 0 : (_oldRowState$cellStat = _oldRowState.cellState) == null ? void 0 : _oldRowState$cellStat[columnId]) !== 'undefined' ? _oldRowState.cellState[columnId] : initialCellStateAccessor((_rowsById$_rowId = rowsById[_rowId]) == null ? void 0 : (_rowsById$_rowId$cell = _rowsById$_rowId.cells) == null ? void 0 : _rowsById$_rowId$cell.find(function (cell) {
        return cell.column.id === columnId;
      }));
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends4 = {}, _extends4[_rowId] = _extends({}, _oldRowState, {
          cellState: _extends({}, _oldRowState.cellState || {}, (_extends3 = {}, _extends3[columnId] = functionalUpdate(_value, oldCellState), _extends3))
        }), _extends4))
      });
    }
  }

  function useInstance$9(instance) {
    var _instance$autoResetRo = instance.autoResetRowState,
        autoResetRowState = _instance$autoResetRo === void 0 ? true : _instance$autoResetRo,
        data = instance.data,
        dispatch = instance.dispatch;
    var setRowState = React.useCallback(function (rowId, value) {
      return dispatch({
        type: actions.setRowState,
        rowId: rowId,
        value: value
      });
    }, [dispatch]);
    var setCellState = React.useCallback(function (rowId, columnId, value) {
      return dispatch({
        type: actions.setCellState,
        rowId: rowId,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var getAutoResetRowState = useGetLatest(autoResetRowState);
    useMountedLayoutEffect(function () {
      if (getAutoResetRowState()) {
        dispatch({
          type: actions.resetRowState
        });
      }
    }, [data]);
    Object.assign(instance, {
      setRowState: setRowState,
      setCellState: setCellState
    });
  }

  function prepareRow$4(row, _ref) {
    var instance = _ref.instance;
    var _instance$initialRowS2 = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS2 === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS2,
        _instance$initialCell2 = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell2 === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell2,
        rowState = instance.state.rowState;

    if (row) {
      row.state = typeof rowState[row.id] !== 'undefined' ? rowState[row.id] : initialRowStateAccessor(row);

      row.setState = function (updater) {
        return instance.setRowState(row.id, updater);
      };

      row.cells.forEach(function (cell) {
        if (!row.state.cellState) {
          row.state.cellState = {};
        }

        cell.state = typeof row.state.cellState[cell.column.id] !== 'undefined' ? row.state.cellState[cell.column.id] : initialCellStateAccessor(cell);

        cell.setState = function (updater) {
          return instance.setCellState(row.id, cell.column.id, updater);
        };
      });
    }
  }

  actions.resetColumnOrder = 'resetColumnOrder';
  actions.setColumnOrder = 'setColumnOrder';
  var useColumnOrder = function useColumnOrder(hooks) {
    hooks.stateReducers.push(reducer$a);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.columnOrder]);
    });
    hooks.visibleColumns.push(visibleColumns$2);
    hooks.useInstance.push(useInstance$a);
  };
  useColumnOrder.pluginName = 'useColumnOrder';

  function reducer$a(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        columnOrder: []
      }, state);
    }

    if (action.type === actions.resetColumnOrder) {
      return _extends({}, state, {
        columnOrder: instance.initialState.columnOrder || []
      });
    }

    if (action.type === actions.setColumnOrder) {
      return _extends({}, state, {
        columnOrder: functionalUpdate(action.columnOrder, state.columnOrder)
      });
    }
  }

  function visibleColumns$2(columns, _ref2) {
    var columnOrder = _ref2.instance.state.columnOrder;

    // If there is no order, return the normal columns
    if (!columnOrder || !columnOrder.length) {
      return columns;
    }

    var columnOrderCopy = [].concat(columnOrder); // If there is an order, make a copy of the columns

    var columnsCopy = [].concat(columns); // And make a new ordered array of the columns

    var columnsInOrder = []; // Loop over the columns and place them in order into the new array

    var _loop = function _loop() {
      var targetColumnId = columnOrderCopy.shift();
      var foundIndex = columnsCopy.findIndex(function (d) {
        return d.id === targetColumnId;
      });

      if (foundIndex > -1) {
        columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
      }
    };

    while (columnsCopy.length && columnOrderCopy.length) {
      _loop();
    } // If there are any columns left, add them to the end


    return [].concat(columnsInOrder, columnsCopy);
  }

  function useInstance$a(instance) {
    var dispatch = instance.dispatch;
    instance.setColumnOrder = React.useCallback(function (columnOrder) {
      return dispatch({
        type: actions.setColumnOrder,
        columnOrder: columnOrder
      });
    }, [dispatch]);
  }

  defaultColumn.canResize = true; // Actions

  actions.columnStartResizing = 'columnStartResizing';
  actions.columnResizing = 'columnResizing';
  actions.columnDoneResizing = 'columnDoneResizing';
  actions.resetResize = 'resetResize';
  var useResizeColumns = function useResizeColumns(hooks) {
    hooks.getResizerProps = [defaultGetResizerProps];
    hooks.getHeaderProps.push({
      style: {
        position: 'relative'
      }
    });
    hooks.stateReducers.push(reducer$b);
    hooks.useInstance.push(useInstance$b);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions$1);
  };

  var defaultGetResizerProps = function defaultGetResizerProps(props, _ref) {
    var instance = _ref.instance,
        header = _ref.header;
    var dispatch = instance.dispatch;

    var onResizeStart = function onResizeStart(e, header) {
      var isTouchEvent = false;

      if (e.type === 'touchstart') {
        // lets not respond to multiple touches (e.g. 2 or 3 fingers)
        if (e.touches && e.touches.length > 1) {
          return;
        }

        isTouchEvent = true;
      }

      var headersToResize = getLeafHeaders(header);
      var headerIdWidths = headersToResize.map(function (d) {
        return [d.id, d.totalWidth];
      });
      var clientX = isTouchEvent ? Math.round(e.touches[0].clientX) : e.clientX;

      var dispatchMove = function dispatchMove(clientXPos) {
        dispatch({
          type: actions.columnResizing,
          clientX: clientXPos
        });
      };

      var dispatchEnd = function dispatchEnd() {
        return dispatch({
          type: actions.columnDoneResizing
        });
      };

      var handlersAndEvents = {
        mouse: {
          moveEvent: 'mousemove',
          moveHandler: function moveHandler(e) {
            return dispatchMove(e.clientX);
          },
          upEvent: 'mouseup',
          upHandler: function upHandler(e) {
            document.removeEventListener('mousemove', handlersAndEvents.mouse.moveHandler);
            document.removeEventListener('mouseup', handlersAndEvents.mouse.upHandler);
            dispatchEnd();
          }
        },
        touch: {
          moveEvent: 'touchmove',
          moveHandler: function moveHandler(e) {
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }

            dispatchMove(e.touches[0].clientX);
            return false;
          },
          upEvent: 'touchend',
          upHandler: function upHandler(e) {
            document.removeEventListener(handlersAndEvents.touch.moveEvent, handlersAndEvents.touch.moveHandler);
            document.removeEventListener(handlersAndEvents.touch.upEvent, handlersAndEvents.touch.moveHandler);
            dispatchEnd();
          }
        }
      };
      var events = isTouchEvent ? handlersAndEvents.touch : handlersAndEvents.mouse;
      var passiveIfSupported = passiveEventSupported() ? {
        passive: false
      } : false;
      document.addEventListener(events.moveEvent, events.moveHandler, passiveIfSupported);
      document.addEventListener(events.upEvent, events.upHandler, passiveIfSupported);
      dispatch({
        type: actions.columnStartResizing,
        columnId: header.id,
        columnWidth: header.totalWidth,
        headerIdWidths: headerIdWidths,
        clientX: clientX
      });
    };

    return [props, {
      onMouseDown: function onMouseDown(e) {
        return e.persist() || onResizeStart(e, header);
      },
      onTouchStart: function onTouchStart(e) {
        return e.persist() || onResizeStart(e, header);
      },
      style: {
        cursor: 'col-resize'
      },
      draggable: false,
      role: 'separator'
    }];
  };

  useResizeColumns.pluginName = 'useResizeColumns';

  function reducer$b(state, action) {
    if (action.type === actions.init) {
      return _extends({
        columnResizing: {
          columnWidths: {}
        }
      }, state);
    }

    if (action.type === actions.resetResize) {
      return _extends({}, state, {
        columnResizing: {
          columnWidths: {}
        }
      });
    }

    if (action.type === actions.columnStartResizing) {
      var clientX = action.clientX,
          columnId = action.columnId,
          columnWidth = action.columnWidth,
          headerIdWidths = action.headerIdWidths;
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: clientX,
          headerIdWidths: headerIdWidths,
          columnWidth: columnWidth,
          isResizingColumn: columnId
        })
      });
    }

    if (action.type === actions.columnResizing) {
      var _clientX = action.clientX;

      var _state$columnResizing = state.columnResizing,
          startX = _state$columnResizing.startX,
          _columnWidth = _state$columnResizing.columnWidth,
          _state$columnResizing2 = _state$columnResizing.headerIdWidths,
          _headerIdWidths = _state$columnResizing2 === void 0 ? [] : _state$columnResizing2;

      var deltaX = _clientX - startX;
      var percentageDeltaX = deltaX / _columnWidth;
      var newColumnWidths = {};

      _headerIdWidths.forEach(function (_ref2) {
        var headerId = _ref2[0],
            headerWidth = _ref2[1];
        newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
      });

      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          columnWidths: _extends({}, state.columnResizing.columnWidths, {}, newColumnWidths)
        })
      });
    }

    if (action.type === actions.columnDoneResizing) {
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: null,
          isResizingColumn: null
        })
      });
    }
  }

  var useInstanceBeforeDimensions$1 = function useInstanceBeforeDimensions(instance) {
    var flatHeaders = instance.flatHeaders,
        disableResizing = instance.disableResizing,
        getHooks = instance.getHooks,
        columnResizing = instance.state.columnResizing;
    var getInstance = useGetLatest(instance);
    flatHeaders.forEach(function (header) {
      var canResize = getFirstDefined(header.disableResizing === true ? false : undefined, disableResizing === true ? false : undefined, true);
      header.canResize = canResize;
      header.width = columnResizing.columnWidths[header.id] || header.originalWidth || header.width;
      header.isResizing = columnResizing.isResizingColumn === header.id;

      if (canResize) {
        header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
          instance: getInstance(),
          header: header
        });
      }
    });
  };

  function useInstance$b(instance) {
    var plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetRe = instance.autoResetResize,
        autoResetResize = _instance$autoResetRe === void 0 ? true : _instance$autoResetRe,
        columns = instance.columns;
    ensurePluginOrder(plugins, ['useAbsoluteLayout'], 'useResizeColumns');
    var getAutoResetResize = useGetLatest(autoResetResize);
    useMountedLayoutEffect(function () {
      if (getAutoResetResize()) {
        dispatch({
          type: actions.resetResize
        });
      }
    }, [columns]);
    var resetResizing = React.useCallback(function () {
      return dispatch({
        type: actions.resetResize
      });
    }, [dispatch]);
    Object.assign(instance, {
      resetResizing: resetResizing
    });
  }

  function getLeafHeaders(header) {
    var leafHeaders = [];

    var recurseHeader = function recurseHeader(header) {
      if (header.columns && header.columns.length) {
        header.columns.map(recurseHeader);
      }

      leafHeaders.push(header);
    };

    recurseHeader(header);
    return leafHeaders;
  }

  var cellStyles = {
    position: 'absolute',
    top: 0
  };
  var useAbsoluteLayout = function useAbsoluteLayout(hooks) {
    hooks.getTableBodyProps.push(getRowStyles);
    hooks.getRowProps.push(getRowStyles);
    hooks.getHeaderGroupProps.push(getRowStyles);
    hooks.getFooterGroupProps.push(getRowStyles);
    hooks.getHeaderProps.push(function (props, _ref) {
      var column = _ref.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref2) {
      var cell = _ref2.cell;
      return [props, {
        style: _extends({}, cellStyles, {
          left: cell.column.totalLeft + "px",
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref3) {
      var column = _ref3.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useAbsoluteLayout.pluginName = 'useAbsoluteLayout';

  var getRowStyles = function getRowStyles(props, _ref4) {
    var instance = _ref4.instance;
    return [props, {
      style: {
        position: 'relative',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var cellStyles$1 = {
    display: 'inline-block',
    boxSizing: 'border-box'
  };

  var getRowStyles$1 = function getRowStyles(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: 'flex',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var useBlockLayout = function useBlockLayout(hooks) {
    hooks.getRowProps.push(getRowStyles$1);
    hooks.getHeaderGroupProps.push(getRowStyles$1);
    hooks.getFooterGroupProps.push(getRowStyles$1);
    hooks.getHeaderProps.push(function (props, _ref2) {
      var column = _ref2.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref3) {
      var cell = _ref3.cell;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref4) {
      var column = _ref4.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useBlockLayout.pluginName = 'useBlockLayout';

  function useFlexLayout(hooks) {
    hooks.getTableProps.push(getTableProps);
    hooks.getRowProps.push(getRowStyles$2);
    hooks.getHeaderGroupProps.push(getRowStyles$2);
    hooks.getFooterGroupProps.push(getRowStyles$2);
    hooks.getHeaderProps.push(getHeaderProps);
    hooks.getCellProps.push(getCellProps);
    hooks.getFooterProps.push(getFooterProps);
  }
  useFlexLayout.pluginName = 'useFlexLayout';

  var getTableProps = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getRowStyles$2 = function getRowStyles(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      style: {
        display: 'flex',
        flex: '1 0 auto',
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getHeaderProps = function getHeaderProps(props, _ref3) {
    var column = _ref3.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  var getCellProps = function getCellProps(props, _ref4) {
    var cell = _ref4.cell;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: cell.column.totalFlexWidth + " 0 auto",
        minWidth: cell.column.totalMinWidth + "px",
        width: cell.column.totalWidth + "px"
      }
    }];
  };

  var getFooterProps = function getFooterProps(props, _ref5) {
    var column = _ref5.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  function useGridLayout(hooks) {
    hooks.stateReducers.push(reducer$c);
    hooks.getTableProps.push(getTableProps$1);
    hooks.getHeaderProps.push(getHeaderProps$1);
  }
  useGridLayout.pluginName = 'useGridLayout';

  var getTableProps$1 = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: "grid",
        gridTemplateColumns: instance.state.gridLayout.columnWidths.map(function (w) {
          return w;
        }).join(" ")
      }
    }];
  };

  var getHeaderProps$1 = function getHeaderProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      id: "header-cell-" + column.id,
      style: {
        position: "sticky" //enables a scroll wrapper to be placed around the table and have sticky headers

      }
    }];
  };

  function reducer$c(state, action, previousState, instance) {
    if (action.type === "init") {
      return _extends({
        gridLayout: {
          columnWidths: instance.columns.map(function () {
            return "auto";
          })
        }
      }, state);
    }

    if (action.type === "columnStartResizing") {
      var columnId = action.columnId;
      var columnIndex = instance.visibleColumns.findIndex(function (col) {
        return col.id === columnId;
      });
      var elWidth = getElementWidth(columnId);

      if (elWidth !== undefined) {
        return _extends({}, state, {
          gridLayout: _extends({}, state.gridLayout, {
            columnId: columnId,
            columnIndex: columnIndex,
            startingWidth: elWidth
          })
        });
      } else {
        return state;
      }
    }

    if (action.type === "columnResizing") {
      var _state$gridLayout = state.gridLayout,
          _columnIndex = _state$gridLayout.columnIndex,
          startingWidth = _state$gridLayout.startingWidth,
          columnWidths = _state$gridLayout.columnWidths;
      var change = state.columnResizing.startX - action.clientX;
      var newWidth = startingWidth - change;
      var columnWidthsCopy = [].concat(columnWidths);
      columnWidthsCopy[_columnIndex] = newWidth + "px";
      return _extends({}, state, {
        gridLayout: _extends({}, state.gridLayout, {
          columnWidths: columnWidthsCopy
        })
      });
    }
  }

  function getElementWidth(columnId) {
    var _document$getElementB;

    var width = (_document$getElementB = document.getElementById("header-cell-" + columnId)) == null ? void 0 : _document$getElementB.offsetWidth;

    if (width !== undefined) {
      return width;
    }
  }

  exports._UNSTABLE_usePivotColumns = _UNSTABLE_usePivotColumns;
  exports.actions = actions;
  exports.defaultColumn = defaultColumn;
  exports.defaultGroupByFn = defaultGroupByFn;
  exports.defaultOrderByFn = defaultOrderByFn;
  exports.defaultRenderer = defaultRenderer;
  exports.emptyRenderer = emptyRenderer;
  exports.ensurePluginOrder = ensurePluginOrder;
  exports.flexRender = flexRender;
  exports.functionalUpdate = functionalUpdate;
  exports.loopHooks = loopHooks;
  exports.makePropGetter = makePropGetter;
  exports.makeRenderer = makeRenderer;
  exports.reduceHooks = reduceHooks;
  exports.safeUseLayoutEffect = safeUseLayoutEffect;
  exports.useAbsoluteLayout = useAbsoluteLayout;
  exports.useAsyncDebounce = useAsyncDebounce;
  exports.useBlockLayout = useBlockLayout;
  exports.useColumnOrder = useColumnOrder;
  exports.useExpanded = useExpanded;
  exports.useFilters = useFilters;
  exports.useFlexLayout = useFlexLayout;
  exports.useGetLatest = useGetLatest;
  exports.useGlobalFilter = useGlobalFilter;
  exports.useGridLayout = useGridLayout;
  exports.useGroupBy = useGroupBy;
  exports.useMountedLayoutEffect = useMountedLayoutEffect;
  exports.usePagination = usePagination;
  exports.useResizeColumns = useResizeColumns;
  exports.useRowSelect = useRowSelect;
  exports.useRowState = useRowState;
  exports.useSortBy = useSortBy;
  exports.useTable = useTable;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-table.development.js.map


/***/ }),

/***/ "./node_modules/react-table/index.js":
/*!*******************************************!*\
  !*** ./node_modules/react-table/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/react-table.development.js */ "./node_modules/react-table/dist/react-table.development.js")
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXNlYmFsbC9DYXJkUGxheWVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRhYmxlL2Rpc3QvcmVhY3QtdGFibGUuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10YWJsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJDYXJkUGxheWVycyIsImRlZmF1bHRQcm9wcyIsImxlYWd1ZSIsImRpdmlzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQU1BOztBQUVBQSxXQUFXLENBQUNDLFlBQVosR0FBMkI7QUFDekJDLFFBQU0sRUFBRSx1QkFEaUI7QUFFekJDLFVBQVEsRUFBRTtBQUZlLENBQTNCO0FBS0FILFdBQVcsQ0FBQ0ksU0FBWixHQUF3QjtBQUN0QkYsUUFBTSxFQUFFRywwREFBZ0JDO0FBREYsQ0FBeEI7QUFJZSxTQUFTTixXQUFULENBQXFCO0FBQ2xDRTtBQURrQyxDQUFyQixFQUVaO0FBQ0Qsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyx1RkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVdEO0tBZHVCRixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ4QjtBQUNBLEVBQUUsS0FBNEQsb0JBQW9CLG1CQUFPLENBQUMsNENBQU87QUFDakcsRUFBRSxDQUN3RTtBQUMxRSxDQUFDLG1DQUFt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QUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFD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O0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLEVBQUU7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxpRkFBaUY7QUFDakY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU8sRUFBRTs7QUFFVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7O0FBRTVELHdCQUF3Qjs7QUFFeEIsNkJBQTZCOztBQUU3QiwyQkFBMkI7O0FBRTNCLDJCQUEyQjs7QUFFM0IsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTs7QUFFYjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNUOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCLCtCQUErQixpQ0FBaUM7QUFDaEUsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0EsT0FBTztBQUNQLDRGQUE0Rjs7QUFFNUY7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWCxrRkFBa0Y7O0FBRWxGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZELDZOQUE2Tjs7QUFFN047QUFDQTtBQUNBLFFBQVE7QUFDUjs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlGQUFpRjs7QUFFakY7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7QUFHQTtBQUNBO0FBQ0EsU0FBUyxRQUFRO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPLEVBQUU7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGLHdFQUF3RTs7QUFFeEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUssY0FBYztBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRFQUE0RTs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTyxFQUFFO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7O0FBRTlDLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7O0FBRW5ELHVFQUF1RTs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPLEVBQUU7O0FBRVQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRkFBaUY7O0FBRWpGLG9FQUFvRTs7QUFFcEU7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBLHlDQUF5QztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQzs7O0FBR3JDO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsK0NBQStDOztBQUUvQztBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLDBCQUEwQjs7QUFFMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLEdBQUc7O0FBRVo7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxjQUFjOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxjQUFjOztBQUVuQiw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVFQUF1RTs7QUFFdkU7QUFDQTtBQUNBLFdBQVc7QUFDWDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLEdBQUc7O0FBRVo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGO0FBQzVGOztBQUVBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlDQUF5Qzs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBDQUEwQzs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qiw2QkFBNkIsaUNBQWlDO0FBQzlELE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHdCQUF3QjtBQUN4Qiw2QkFBNkIsaUNBQWlDLGlDQUFpQztBQUMvRixnQ0FBZ0MsOEJBQThCLGlCQUFpQjtBQUMvRSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDs7QUFFakQseUNBQXlDOztBQUV6Qyw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsd0JBQXdCO0FBQ3hCLG1DQUFtQztBQUNuQyxtQ0FBbUMsdUNBQXVDO0FBQzFFLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEIsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsK0JBQStCO0FBQy9CO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxjQUFjOztBQUU5RCxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7O0FDdjlJQSxJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxFQUFFLDJJQUE2RDtBQUMvRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YTQ3MTI4NTIxZTczMzI5ZTBhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VQYWdpbmF0aW9uIH0gZnJvbSAncmVhY3QtdGFibGUnXHJcblxyXG5cclxuaW1wb3J0IG1ha2VEYXRhIGZyb20gJy4uLy4uL21ha2VEYXRhJ1xyXG5cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcbkNhcmRQbGF5ZXJzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsZWFndWU6IFwiTWFqb3IgTGVhZ3VlIEJhc2ViYWxsXCIsXHJcbiAgZGl2aXNpb246IFwiXCJcclxufTtcclxuXHJcbkNhcmRQbGF5ZXJzLnByb3BUeXBlcyA9IHtcclxuICBsZWFndWU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRQbGF5ZXJzKHtcclxuICBsZWFndWVcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLXctMCBicmVhay13b3JkcyBiZy13aGl0ZSB3LWZ1bGwgbWItNiBzaGFkb3ctbGcgcm91bmRlZCBwLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdCBtYi0wIHB4LTQgcHktMyBib3JkZXItMFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIG92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICAgICAgey8qIFBsYXllcnMgdGFibGUgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgncmVhY3QnKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ3JlYWN0J10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5SZWFjdFRhYmxlID0ge30sIGdsb2JhbC5SZWFjdCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMsIFJlYWN0KSB7ICd1c2Ugc3RyaWN0JztcblxuICBSZWFjdCA9IFJlYWN0ICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChSZWFjdCwgJ2RlZmF1bHQnKSA/IFJlYWN0WydkZWZhdWx0J10gOiBSZWFjdDtcblxuICBmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgICB2YXIgdGFyZ2V0ID0ge307XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gICAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuXG4gICAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgICBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICAgIHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcblxuICAgIHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG4gIH1cblxuICB2YXIgcmVuZGVyRXJyID0gJ1JlbmRlcmVyIEVycm9yIOKYne+4jyc7XG4gIHZhciBhY3Rpb25zID0ge1xuICAgIGluaXQ6ICdpbml0J1xuICB9O1xuICB2YXIgZGVmYXVsdFJlbmRlcmVyID0gZnVuY3Rpb24gZGVmYXVsdFJlbmRlcmVyKF9yZWYpIHtcbiAgICB2YXIgX3JlZiR2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICAgIHZhbHVlID0gX3JlZiR2YWx1ZSA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgdmFyIGVtcHR5UmVuZGVyZXIgPSBmdW5jdGlvbiBlbXB0eVJlbmRlcmVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBcIlxceEEwXCIpO1xuICB9O1xuICB2YXIgZGVmYXVsdENvbHVtbiA9IHtcbiAgICBDZWxsOiBkZWZhdWx0UmVuZGVyZXIsXG4gICAgd2lkdGg6IDE1MCxcbiAgICBtaW5XaWR0aDogMCxcbiAgICBtYXhXaWR0aDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgfTtcblxuICBmdW5jdGlvbiBtZXJnZVByb3BzKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwcm9wTGlzdCA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHByb3BMaXN0W19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wTGlzdC5yZWR1Y2UoZnVuY3Rpb24gKHByb3BzLCBuZXh0KSB7XG4gICAgICB2YXIgc3R5bGUgPSBuZXh0LnN0eWxlLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IG5leHQuY2xhc3NOYW1lLFxuICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShuZXh0LCBbXCJzdHlsZVwiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgICAgIHByb3BzID0gX2V4dGVuZHMoe30sIHByb3BzLCB7fSwgcmVzdCk7XG5cbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBwcm9wcy5zdHlsZSA9IHByb3BzLnN0eWxlID8gX2V4dGVuZHMoe30sIHByb3BzLnN0eWxlIHx8IHt9LCB7fSwgc3R5bGUgfHwge30pIDogc3R5bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lIDogY2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuY2xhc3NOYW1lID09PSAnJykge1xuICAgICAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfSwge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJvcEdldHRlcihwcmV2UHJvcHMsIHVzZXJQcm9wcywgbWV0YSkge1xuICAgIC8vIEhhbmRsZSBhIGxhbWJkYSwgcGFzcyBpdCB0aGUgcHJldmlvdXMgcHJvcHNcbiAgICBpZiAodHlwZW9mIHVzZXJQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGhhbmRsZVByb3BHZXR0ZXIoe30sIHVzZXJQcm9wcyhwcmV2UHJvcHMsIG1ldGEpKTtcbiAgICB9IC8vIEhhbmRsZSBhbiBhcnJheSwgbWVyZ2UgZWFjaCBpdGVtIGFzIHNlcGFyYXRlIHByb3BzXG5cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHVzZXJQcm9wcykpIHtcbiAgICAgIHJldHVybiBtZXJnZVByb3BzLmFwcGx5KHZvaWQgMCwgW3ByZXZQcm9wc10uY29uY2F0KHVzZXJQcm9wcykpO1xuICAgIH0gLy8gSGFuZGxlIGFuIG9iamVjdCBieSBkZWZhdWx0LCBtZXJnZSB0aGUgdHdvIG9iamVjdHNcblxuXG4gICAgcmV0dXJuIG1lcmdlUHJvcHMocHJldlByb3BzLCB1c2VyUHJvcHMpO1xuICB9XG5cbiAgdmFyIG1ha2VQcm9wR2V0dGVyID0gZnVuY3Rpb24gbWFrZVByb3BHZXR0ZXIoaG9va3MsIG1ldGEpIHtcbiAgICBpZiAobWV0YSA9PT0gdm9pZCAwKSB7XG4gICAgICBtZXRhID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh1c2VyUHJvcHMpIHtcbiAgICAgIGlmICh1c2VyUHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICB1c2VyUHJvcHMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChob29rcywgW3VzZXJQcm9wc10pLnJlZHVjZShmdW5jdGlvbiAocHJldiwgbmV4dCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlUHJvcEdldHRlcihwcmV2LCBuZXh0LCBfZXh0ZW5kcyh7fSwgbWV0YSwge1xuICAgICAgICAgIHVzZXJQcm9wczogdXNlclByb3BzXG4gICAgICAgIH0pKTtcbiAgICAgIH0sIHt9KTtcbiAgICB9O1xuICB9O1xuICB2YXIgcmVkdWNlSG9va3MgPSBmdW5jdGlvbiByZWR1Y2VIb29rcyhob29rcywgaW5pdGlhbCwgbWV0YSwgYWxsb3dVbmRlZmluZWQpIHtcbiAgICBpZiAobWV0YSA9PT0gdm9pZCAwKSB7XG4gICAgICBtZXRhID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvb2tzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgbmV4dCkge1xuICAgICAgdmFyIG5leHRWYWx1ZSA9IG5leHQocHJldiwgbWV0YSk7XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKCFhbGxvd1VuZGVmaW5lZCAmJiB0eXBlb2YgbmV4dFZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbnNvbGUuaW5mbyhuZXh0KTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0IFRhYmxlOiBBIHJlZHVjZXIgaG9vayDimJ3vuI8ganVzdCByZXR1cm5lZCB1bmRlZmluZWQhIFRoaXMgaXMgbm90IGFsbG93ZWQuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICB9LCBpbml0aWFsKTtcbiAgfTtcbiAgdmFyIGxvb3BIb29rcyA9IGZ1bmN0aW9uIGxvb3BIb29rcyhob29rcywgY29udGV4dCwgbWV0YSkge1xuICAgIGlmIChtZXRhID09PSB2b2lkIDApIHtcbiAgICAgIG1ldGEgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgICAgdmFyIG5leHRWYWx1ZSA9IGhvb2soY29udGV4dCwgbWV0YSk7XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXh0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKGhvb2ssIG5leHRWYWx1ZSk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdCBUYWJsZTogQSBsb29wLXR5cGUgaG9vayDimJ3vuI8ganVzdCByZXR1cm5lZCBhIHZhbHVlISBUaGlzIGlzIG5vdCBhbGxvd2VkLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZ1bmN0aW9uIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIGJlZm9yZXMsIHBsdWdpbk5hbWUsIGFmdGVycykge1xuICAgIGlmICggYWZ0ZXJzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEZWZpbmluZyBwbHVnaW5zIGluIHRoZSBcXFwiYWZ0ZXJcXFwiIHNlY3Rpb24gb2YgZW5zdXJlUGx1Z2luT3JkZXIgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCAoc2VlIHBsdWdpbiBcIiArIHBsdWdpbk5hbWUgKyBcIilcIik7XG4gICAgfVxuXG4gICAgdmFyIHBsdWdpbkluZGV4ID0gcGx1Z2lucy5maW5kSW5kZXgoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgcmV0dXJuIHBsdWdpbi5wbHVnaW5OYW1lID09PSBwbHVnaW5OYW1lO1xuICAgIH0pO1xuXG4gICAgaWYgKHBsdWdpbkluZGV4ID09PSAtMSkge1xuICAgICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGx1Z2luIFxcXCJcIiArIHBsdWdpbk5hbWUgKyBcIlxcXCIgd2FzIG5vdCBmb3VuZCBpbiB0aGUgcGx1Z2luIGxpc3QhXFxuVGhpcyB1c3VhbGx5IG1lYW5zIHlvdSBuZWVkIHRvIG5lZWQgdG8gbmFtZSB5b3VyIHBsdWdpbiBob29rIGJ5IHNldHRpbmcgdGhlICdwbHVnaW5OYW1lJyBwcm9wZXJ0eSBvZiB0aGUgaG9vayBmdW5jdGlvbiwgZWc6XFxuXFxuICBcIiArIHBsdWdpbk5hbWUgKyBcIi5wbHVnaW5OYW1lID0gJ1wiICsgcGx1Z2luTmFtZSArIFwiJ1xcblwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiZWZvcmVzLmZvckVhY2goZnVuY3Rpb24gKGJlZm9yZSkge1xuICAgICAgdmFyIGJlZm9yZUluZGV4ID0gcGx1Z2lucy5maW5kSW5kZXgoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gcGx1Z2luLnBsdWdpbk5hbWUgPT09IGJlZm9yZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYmVmb3JlSW5kZXggPiAtMSAmJiBiZWZvcmVJbmRleCA+IHBsdWdpbkluZGV4KSB7XG4gICAgICAgIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdCBUYWJsZTogVGhlIFwiICsgcGx1Z2luTmFtZSArIFwiIHBsdWdpbiBob29rIG11c3QgYmUgcGxhY2VkIGFmdGVyIHRoZSBcIiArIGJlZm9yZSArIFwiIHBsdWdpbiBob29rIVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGZ1bmN0aW9uYWxVcGRhdGUodXBkYXRlciwgb2xkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1cGRhdGVyID09PSAnZnVuY3Rpb24nID8gdXBkYXRlcihvbGQpIDogdXBkYXRlcjtcbiAgfVxuICBmdW5jdGlvbiB1c2VHZXRMYXRlc3Qob2JqKSB7XG4gICAgdmFyIHJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICAgIHJlZi5jdXJyZW50ID0gb2JqO1xuICAgIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG4gICAgfSwgW10pO1xuICB9IC8vIFNTUiBoYXMgaXNzdWVzIHdpdGggdXNlTGF5b3V0RWZmZWN0IHN0aWxsLCBzbyB1c2UgdXNlRWZmZWN0IGR1cmluZyBTU1JcblxuICB2YXIgc2FmZVVzZUxheW91dEVmZmVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG4gIGZ1bmN0aW9uIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZm4sIGRlcHMpIHtcbiAgICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgc2FmZVVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9XG5cbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIH0sIGRlcHMpO1xuICB9XG4gIGZ1bmN0aW9uIHVzZUFzeW5jRGVib3VuY2UoZGVmYXVsdEZuLCBkZWZhdWx0V2FpdCkge1xuICAgIGlmIChkZWZhdWx0V2FpdCA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWZhdWx0V2FpdCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGRlYm91bmNlUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgICB2YXIgZ2V0RGVmYXVsdEZuID0gdXNlR2V0TGF0ZXN0KGRlZmF1bHRGbik7XG4gICAgdmFyIGdldERlZmF1bHRXYWl0ID0gdXNlR2V0TGF0ZXN0KGRlZmF1bHRXYWl0KTtcbiAgICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmMiA9IF9hc3luY1RvR2VuZXJhdG9yKFxuICAgICAgLyojX19QVVJFX18qL1xuICAgICAgcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoKSB7XG4gICAgICAgIHZhciBfbGVuMixcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICBfa2V5MixcbiAgICAgICAgICAgIF9hcmdzMiA9IGFyZ3VtZW50cztcblxuICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGZvciAoX2xlbjIgPSBfYXJnczIubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IF9hcmdzMltfa2V5Ml07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkZWJvdW5jZVJlZi5jdXJyZW50LnByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgIGRlYm91bmNlUmVmLmN1cnJlbnQucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVib3VuY2VSZWYuY3VycmVudC5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGVib3VuY2VSZWYuY3VycmVudC5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZGVib3VuY2VSZWYuY3VycmVudC50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VSZWYuY3VycmVudC50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWJvdW5jZVJlZi5jdXJyZW50LnRpbWVvdXQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgICAgICAgICAgICBfYXN5bmNUb0dlbmVyYXRvcihcbiAgICAgICAgICAgICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAgICAgICAgICAgcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRlYm91bmNlUmVmLmN1cnJlbnQudGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gZGVib3VuY2VSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXREZWZhdWx0Rm4oKS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQxID0gX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MC5yZXNvbHZlLmNhbGwoX2NvbnRleHQudDAsIF9jb250ZXh0LnQxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MiA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlYm91bmNlUmVmLmN1cnJlbnQucmVqZWN0KF9jb250ZXh0LnQyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGVib3VuY2VSZWYuY3VycmVudC5wcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuZmluaXNoKDEyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWUsIG51bGwsIFtbMSwgOSwgMTIsIDE1XV0pO1xuICAgICAgICAgICAgICAgIH0pKSwgZ2V0RGVmYXVsdFdhaXQoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgZGVib3VuY2VSZWYuY3VycmVudC5wcm9taXNlKTtcblxuICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUyKTtcbiAgICAgIH0pKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKSwgW2dldERlZmF1bHRGbiwgZ2V0RGVmYXVsdFdhaXRdKTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlUmVuZGVyZXIoaW5zdGFuY2UsIGNvbHVtbiwgbWV0YSkge1xuICAgIGlmIChtZXRhID09PSB2b2lkIDApIHtcbiAgICAgIG1ldGEgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHR5cGUsIHVzZXJQcm9wcykge1xuICAgICAgaWYgKHVzZXJQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHVzZXJQcm9wcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB2YXIgQ29tcCA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IGNvbHVtblt0eXBlXSA6IHR5cGU7XG5cbiAgICAgIGlmICh0eXBlb2YgQ29tcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKGNvbHVtbik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZW5kZXJFcnIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmxleFJlbmRlcihDb21wLCBfZXh0ZW5kcyh7fSwgaW5zdGFuY2UsIHtcbiAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgIH0sIG1ldGEsIHt9LCB1c2VyUHJvcHMpKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGZsZXhSZW5kZXIoQ29tcCwgcHJvcHMpIHtcbiAgICByZXR1cm4gaXNSZWFjdENvbXBvbmVudChDb21wKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcCwgcHJvcHMpIDogQ29tcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUmVhY3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGlzQ2xhc3NDb21wb25lbnQoY29tcG9uZW50KSB8fCB0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nIHx8IGlzRXhvdGljQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjb21wb25lbnQpO1xuICAgICAgcmV0dXJuIHByb3RvLnByb3RvdHlwZSAmJiBwcm90by5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDtcbiAgICB9KCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0V4b3RpY0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNvbXBvbmVudC4kJHR5cGVvZiA9PT0gJ3N5bWJvbCcgJiYgWydyZWFjdC5tZW1vJywgJ3JlYWN0LmZvcndhcmRfcmVmJ10uaW5jbHVkZXMoY29tcG9uZW50LiQkdHlwZW9mLmRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmtDb2x1bW5TdHJ1Y3R1cmUoY29sdW1ucywgcGFyZW50LCBkZXB0aCkge1xuICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgICBkZXB0aCA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGNvbHVtbiA9IF9leHRlbmRzKHt9LCBjb2x1bW4sIHtcbiAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgIGRlcHRoOiBkZXB0aFxuICAgICAgfSk7XG4gICAgICBhc3NpZ25Db2x1bW5BY2Nlc3Nvcihjb2x1bW4pO1xuXG4gICAgICBpZiAoY29sdW1uLmNvbHVtbnMpIHtcbiAgICAgICAgY29sdW1uLmNvbHVtbnMgPSBsaW5rQ29sdW1uU3RydWN0dXJlKGNvbHVtbi5jb2x1bW5zLCBjb2x1bW4sIGRlcHRoICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZmxhdHRlbkNvbHVtbnMoY29sdW1ucykge1xuICAgIHJldHVybiBmbGF0dGVuQnkoY29sdW1ucywgJ2NvbHVtbnMnKTtcbiAgfVxuICBmdW5jdGlvbiBhc3NpZ25Db2x1bW5BY2Nlc3Nvcihjb2x1bW4pIHtcbiAgICAvLyBGaXJzdCBjaGVjayBmb3Igc3RyaW5nIGFjY2Vzc29yXG4gICAgdmFyIGlkID0gY29sdW1uLmlkLFxuICAgICAgICBhY2Nlc3NvciA9IGNvbHVtbi5hY2Nlc3NvcixcbiAgICAgICAgSGVhZGVyID0gY29sdW1uLkhlYWRlcjtcblxuICAgIGlmICh0eXBlb2YgYWNjZXNzb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZCA9IGlkIHx8IGFjY2Vzc29yO1xuICAgICAgdmFyIGFjY2Vzc29yUGF0aCA9IGFjY2Vzc29yLnNwbGl0KCcuJyk7XG5cbiAgICAgIGFjY2Vzc29yID0gZnVuY3Rpb24gYWNjZXNzb3Iocm93KSB7XG4gICAgICAgIHJldHVybiBnZXRCeShyb3csIGFjY2Vzc29yUGF0aCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghaWQgJiYgdHlwZW9mIEhlYWRlciA9PT0gJ3N0cmluZycgJiYgSGVhZGVyKSB7XG4gICAgICBpZCA9IEhlYWRlcjtcbiAgICB9XG5cbiAgICBpZiAoIWlkICYmIGNvbHVtbi5jb2x1bW5zKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGNvbHVtbik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgY29sdW1uIElEIChvciB1bmlxdWUgXCJIZWFkZXJcIiB2YWx1ZSkgaXMgcmVxdWlyZWQhJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpZCkge1xuICAgICAgY29uc29sZS5lcnJvcihjb2x1bW4pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGNvbHVtbiBJRCAob3Igc3RyaW5nIGFjY2Vzc29yKSBpcyByZXF1aXJlZCEnKTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbHVtbiwge1xuICAgICAgaWQ6IGlkLFxuICAgICAgYWNjZXNzb3I6IGFjY2Vzc29yXG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfVxuICBmdW5jdGlvbiBkZWNvcmF0ZUNvbHVtbihjb2x1bW4sIHVzZXJEZWZhdWx0Q29sdW1uKSB7XG4gICAgaWYgKCF1c2VyRGVmYXVsdENvbHVtbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihjb2x1bW4sIF9leHRlbmRzKHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBpcyBhIGZhbGxiYWNrIGhlYWRlciwganVzdCBpbiBjYXNlXG4gICAgICBIZWFkZXI6IGVtcHR5UmVuZGVyZXIsXG4gICAgICBGb290ZXI6IGVtcHR5UmVuZGVyZXJcbiAgICB9LCBkZWZhdWx0Q29sdW1uLCB7fSwgdXNlckRlZmF1bHRDb2x1bW4sIHt9LCBjb2x1bW4pKTtcbiAgICBPYmplY3QuYXNzaWduKGNvbHVtbiwge1xuICAgICAgb3JpZ2luYWxXaWR0aDogY29sdW1uLndpZHRoXG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfSAvLyBCdWlsZCB0aGUgaGVhZGVyIGdyb3VwcyBmcm9tIHRoZSBib3R0b20gdXBcblxuICBmdW5jdGlvbiBtYWtlSGVhZGVyR3JvdXBzKGFsbENvbHVtbnMsIGRlZmF1bHRDb2x1bW4sIGFkZGl0aW9uYWxIZWFkZXJQcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGFkZGl0aW9uYWxIZWFkZXJQcm9wZXJ0aWVzID09PSB2b2lkIDApIHtcbiAgICAgIGFkZGl0aW9uYWxIZWFkZXJQcm9wZXJ0aWVzID0gZnVuY3Rpb24gYWRkaXRpb25hbEhlYWRlclByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGhlYWRlckdyb3VwcyA9IFtdO1xuICAgIHZhciBzY2FuQ29sdW1ucyA9IGFsbENvbHVtbnM7XG4gICAgdmFyIHVpZCA9IDA7XG5cbiAgICB2YXIgZ2V0VUlEID0gZnVuY3Rpb24gZ2V0VUlEKCkge1xuICAgICAgcmV0dXJuIHVpZCsrO1xuICAgIH07XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgIC8vIFRoZSBoZWFkZXIgZ3JvdXAgd2UgYXJlIGNyZWF0aW5nXG4gICAgICB2YXIgaGVhZGVyR3JvdXAgPSB7XG4gICAgICAgIGhlYWRlcnM6IFtdXG4gICAgICB9OyAvLyBUaGUgcGFyZW50IGNvbHVtbnMgd2UncmUgZ29pbmcgdG8gc2NhbiBuZXh0XG5cbiAgICAgIHZhciBwYXJlbnRDb2x1bW5zID0gW107XG4gICAgICB2YXIgaGFzUGFyZW50cyA9IHNjYW5Db2x1bW5zLnNvbWUoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQucGFyZW50O1xuICAgICAgfSk7IC8vIFNjYW4gZWFjaCBjb2x1bW4gZm9yIHBhcmVudHNcblxuICAgICAgc2NhbkNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIC8vIFdoYXQgaXMgdGhlIGxhdGVzdCAobGFzdCkgcGFyZW50IGNvbHVtbj9cbiAgICAgICAgdmFyIGxhdGVzdFBhcmVudENvbHVtbiA9IFtdLmNvbmNhdChwYXJlbnRDb2x1bW5zKS5yZXZlcnNlKClbMF07XG4gICAgICAgIHZhciBuZXdQYXJlbnQ7XG5cbiAgICAgICAgaWYgKGhhc1BhcmVudHMpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgY29sdW1uIGhhcyBhIHBhcmVudCwgYWRkIGl0IGlmIG5lY2Vzc2FyeVxuICAgICAgICAgIGlmIChjb2x1bW4ucGFyZW50KSB7XG4gICAgICAgICAgICBuZXdQYXJlbnQgPSBfZXh0ZW5kcyh7fSwgY29sdW1uLnBhcmVudCwge1xuICAgICAgICAgICAgICBvcmlnaW5hbElkOiBjb2x1bW4ucGFyZW50LmlkLFxuICAgICAgICAgICAgICBpZDogY29sdW1uLnBhcmVudC5pZCArIFwiX1wiICsgZ2V0VUlEKCksXG4gICAgICAgICAgICAgIGhlYWRlcnM6IFtjb2x1bW5dXG4gICAgICAgICAgICB9LCBhZGRpdGlvbmFsSGVhZGVyUHJvcGVydGllcyhjb2x1bW4pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgb3RoZXIgY29sdW1ucyBoYXZlIHBhcmVudHMsIHdlJ2xsIG5lZWQgdG8gYWRkIGEgcGxhY2UgaG9sZGVyIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsSWQgPSBjb2x1bW4uaWQgKyBcIl9wbGFjZWhvbGRlclwiO1xuICAgICAgICAgICAgbmV3UGFyZW50ID0gZGVjb3JhdGVDb2x1bW4oX2V4dGVuZHMoe1xuICAgICAgICAgICAgICBvcmlnaW5hbElkOiBvcmlnaW5hbElkLFxuICAgICAgICAgICAgICBpZDogY29sdW1uLmlkICsgXCJfcGxhY2Vob2xkZXJfXCIgKyBnZXRVSUQoKSxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJPZjogY29sdW1uLFxuICAgICAgICAgICAgICBoZWFkZXJzOiBbY29sdW1uXVxuICAgICAgICAgICAgfSwgYWRkaXRpb25hbEhlYWRlclByb3BlcnRpZXMoY29sdW1uKSksIGRlZmF1bHRDb2x1bW4pO1xuICAgICAgICAgIH0gLy8gSWYgdGhlIHJlc3VsdGluZyBwYXJlbnQgY29sdW1ucyBhcmUgdGhlIHNhbWUsIGp1c3QgYWRkXG4gICAgICAgICAgLy8gdGhlIGNvbHVtbiBhbmQgaW5jcmVtZW50IHRoZSBoZWFkZXIgc3BhblxuXG5cbiAgICAgICAgICBpZiAobGF0ZXN0UGFyZW50Q29sdW1uICYmIGxhdGVzdFBhcmVudENvbHVtbi5vcmlnaW5hbElkID09PSBuZXdQYXJlbnQub3JpZ2luYWxJZCkge1xuICAgICAgICAgICAgbGF0ZXN0UGFyZW50Q29sdW1uLmhlYWRlcnMucHVzaChjb2x1bW4pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnRDb2x1bW5zLnB1c2gobmV3UGFyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXJHcm91cC5oZWFkZXJzLnB1c2goY29sdW1uKTtcbiAgICAgIH0pO1xuICAgICAgaGVhZGVyR3JvdXBzLnB1c2goaGVhZGVyR3JvdXApOyAvLyBTdGFydCBzY2FubmluZyB0aGUgcGFyZW50IGNvbHVtbnNcblxuICAgICAgc2NhbkNvbHVtbnMgPSBwYXJlbnRDb2x1bW5zO1xuICAgIH07XG5cbiAgICB3aGlsZSAoc2NhbkNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICBfbG9vcCgpO1xuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJHcm91cHMucmV2ZXJzZSgpO1xuICB9XG4gIHZhciBwYXRoT2JqQ2FjaGUgPSBuZXcgTWFwKCk7XG4gIGZ1bmN0aW9uIGdldEJ5KG9iaiwgcGF0aCwgZGVmKSB7XG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHZhciBjYWNoZUtleSA9IHR5cGVvZiBwYXRoID09PSAnZnVuY3Rpb24nID8gcGF0aCA6IEpTT04uc3RyaW5naWZ5KHBhdGgpO1xuXG4gICAgdmFyIHBhdGhPYmogPSBwYXRoT2JqQ2FjaGUuZ2V0KGNhY2hlS2V5KSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGF0aE9iaiA9IG1ha2VQYXRoQXJyYXkocGF0aCk7XG4gICAgICBwYXRoT2JqQ2FjaGUuc2V0KGNhY2hlS2V5LCBwYXRoT2JqKTtcbiAgICAgIHJldHVybiBwYXRoT2JqO1xuICAgIH0oKTtcblxuICAgIHZhciB2YWw7XG5cbiAgICB0cnkge1xuICAgICAgdmFsID0gcGF0aE9iai5yZWR1Y2UoZnVuY3Rpb24gKGN1cnNvciwgcGF0aFBhcnQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnNvcltwYXRoUGFydF07XG4gICAgICB9LCBvYmopO1xuICAgIH0gY2F0Y2ggKGUpIHsvLyBjb250aW51ZSByZWdhcmRsZXNzIG9mIGVycm9yXG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnID8gdmFsIDogZGVmO1xuICB9XG4gIGZ1bmN0aW9uIGdldEZpcnN0RGVmaW5lZCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGEpIHtcbiAgICBpZiAodHlwZW9mIGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBmbGF0dGVuQnkoYXJyLCBrZXkpIHtcbiAgICB2YXIgZmxhdCA9IFtdO1xuXG4gICAgdmFyIHJlY3Vyc2UgPSBmdW5jdGlvbiByZWN1cnNlKGFycikge1xuICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgaWYgKCFkW2tleV0pIHtcbiAgICAgICAgICBmbGF0LnB1c2goZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVjdXJzZShkW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVjdXJzZShhcnIpO1xuICAgIHJldHVybiBmbGF0O1xuICB9XG4gIGZ1bmN0aW9uIGV4cGFuZFJvd3Mocm93cywgX3JlZikge1xuICAgIHZhciBtYW51YWxFeHBhbmRlZEtleSA9IF9yZWYubWFudWFsRXhwYW5kZWRLZXksXG4gICAgICAgIGV4cGFuZGVkID0gX3JlZi5leHBhbmRlZCxcbiAgICAgICAgX3JlZiRleHBhbmRTdWJSb3dzID0gX3JlZi5leHBhbmRTdWJSb3dzLFxuICAgICAgICBleHBhbmRTdWJSb3dzID0gX3JlZiRleHBhbmRTdWJSb3dzID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRleHBhbmRTdWJSb3dzO1xuICAgIHZhciBleHBhbmRlZFJvd3MgPSBbXTtcblxuICAgIHZhciBoYW5kbGVSb3cgPSBmdW5jdGlvbiBoYW5kbGVSb3cocm93LCBhZGRUb0V4cGFuZGVkUm93cykge1xuICAgICAgaWYgKGFkZFRvRXhwYW5kZWRSb3dzID09PSB2b2lkIDApIHtcbiAgICAgICAgYWRkVG9FeHBhbmRlZFJvd3MgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByb3cuaXNFeHBhbmRlZCA9IHJvdy5vcmlnaW5hbCAmJiByb3cub3JpZ2luYWxbbWFudWFsRXhwYW5kZWRLZXldIHx8IGV4cGFuZGVkW3Jvdy5pZF07XG4gICAgICByb3cuY2FuRXhwYW5kID0gcm93LnN1YlJvd3MgJiYgISFyb3cuc3ViUm93cy5sZW5ndGg7XG5cbiAgICAgIGlmIChhZGRUb0V4cGFuZGVkUm93cykge1xuICAgICAgICBleHBhbmRlZFJvd3MucHVzaChyb3cpO1xuICAgICAgfVxuXG4gICAgICBpZiAocm93LnN1YlJvd3MgJiYgcm93LnN1YlJvd3MubGVuZ3RoICYmIHJvdy5pc0V4cGFuZGVkKSB7XG4gICAgICAgIHJvdy5zdWJSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVSb3cocm93LCBleHBhbmRTdWJSb3dzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaGFuZGxlUm93KHJvdyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGV4cGFuZGVkUm93cztcbiAgfVxuICBmdW5jdGlvbiBnZXRGaWx0ZXJNZXRob2QoZmlsdGVyLCB1c2VyRmlsdGVyVHlwZXMsIGZpbHRlclR5cGVzKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oZmlsdGVyKSB8fCB1c2VyRmlsdGVyVHlwZXNbZmlsdGVyXSB8fCBmaWx0ZXJUeXBlc1tmaWx0ZXJdIHx8IGZpbHRlclR5cGVzLnRleHQ7XG4gIH1cbiAgZnVuY3Rpb24gc2hvdWxkQXV0b1JlbW92ZUZpbHRlcihhdXRvUmVtb3ZlLCB2YWx1ZSwgY29sdW1uKSB7XG4gICAgcmV0dXJuIGF1dG9SZW1vdmUgPyBhdXRvUmVtb3ZlKHZhbHVlLCBjb2x1bW4pIDogdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbiAgfVxuICBmdW5jdGlvbiB1bnByZXBhcmVkQWNjZXNzV2FybmluZygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0LVRhYmxlOiBZb3UgaGF2ZSBub3QgY2FsbGVkIHByZXBhcmVSb3cocm93KSBvbmUgb3IgbW9yZSByb3dzIHlvdSBhcmUgYXR0ZW1wdGluZyB0byByZW5kZXIuJyk7XG4gIH1cbiAgdmFyIHBhc3NpdmVTdXBwb3J0ZWQgPSBudWxsO1xuICBmdW5jdGlvbiBwYXNzaXZlRXZlbnRTdXBwb3J0ZWQoKSB7XG4gICAgLy8gbWVtb2l6ZSBzdXBwb3J0IHRvIGF2b2lkIGFkZGluZyBtdWx0aXBsZSB0ZXN0IGV2ZW50c1xuICAgIGlmICh0eXBlb2YgcGFzc2l2ZVN1cHBvcnRlZCA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZDtcbiAgICB2YXIgc3VwcG9ydGVkID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgIHN1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIG9wdGlvbnMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG4gICAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG4gIH0gLy9cblxuICB2YXIgcmVPcGVuQnJhY2tldCA9IC9cXFsvZztcbiAgdmFyIHJlQ2xvc2VCcmFja2V0ID0gL1xcXS9nO1xuXG4gIGZ1bmN0aW9uIG1ha2VQYXRoQXJyYXkob2JqKSB7XG4gICAgcmV0dXJuIGZsYXR0ZW5EZWVwKG9iaikgLy8gcmVtb3ZlIGFsbCBwZXJpb2RzIGluIHBhcnRzXG4gICAgLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIFN0cmluZyhkKS5yZXBsYWNlKCcuJywgJ18nKTtcbiAgICB9KSAvLyBqb2luIHBhcnRzIHVzaW5nIHBlcmlvZFxuICAgIC5qb2luKCcuJykgLy8gcmVwbGFjZSBicmFja2V0cyB3aXRoIHBlcmlvZHNcbiAgICAucmVwbGFjZShyZU9wZW5CcmFja2V0LCAnLicpLnJlcGxhY2UocmVDbG9zZUJyYWNrZXQsICcnKSAvLyBzcGxpdCBpdCBiYWNrIG91dCBvbiBwZXJpb2RzXG4gICAgLnNwbGl0KCcuJyk7XG4gIH1cblxuICBmdW5jdGlvbiBmbGF0dGVuRGVlcChhcnIsIG5ld0Fycikge1xuICAgIGlmIChuZXdBcnIgPT09IHZvaWQgMCkge1xuICAgICAgbmV3QXJyID0gW107XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIG5ld0Fyci5wdXNoKGFycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGZsYXR0ZW5EZWVwKGFycltpXSwgbmV3QXJyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3QXJyO1xuICB9XG5cbiAgdmFyIGRlZmF1bHRHZXRUYWJsZVByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRhYmxlUHJvcHMocHJvcHMpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgcm9sZTogJ3RhYmxlJ1xuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFRhYmxlQm9keVByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRhYmxlQm9keVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIHJvbGU6ICdyb3dncm91cCdcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRIZWFkZXJQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRIZWFkZXJQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmLmNvbHVtbjtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBcImhlYWRlcl9cIiArIGNvbHVtbi5pZCxcbiAgICAgIGNvbFNwYW46IGNvbHVtbi50b3RhbFZpc2libGVIZWFkZXJDb3VudCxcbiAgICAgIHJvbGU6ICdjb2x1bW5oZWFkZXInXG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0Rm9vdGVyUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0Rm9vdGVyUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWYyLmNvbHVtbjtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBcImZvb3Rlcl9cIiArIGNvbHVtbi5pZCxcbiAgICAgIGNvbFNwYW46IGNvbHVtbi50b3RhbFZpc2libGVIZWFkZXJDb3VudFxuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldEhlYWRlckdyb3VwUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0SGVhZGVyR3JvdXBQcm9wcyhwcm9wcywgX3JlZjMpIHtcbiAgICB2YXIgaW5kZXggPSBfcmVmMy5pbmRleDtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBcImhlYWRlckdyb3VwX1wiICsgaW5kZXgsXG4gICAgICByb2xlOiAncm93J1xuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldEZvb3Rlckdyb3VwUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0Rm9vdGVyR3JvdXBQcm9wcyhwcm9wcywgX3JlZjQpIHtcbiAgICB2YXIgaW5kZXggPSBfcmVmNC5pbmRleDtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBcImZvb3Rlckdyb3VwX1wiICsgaW5kZXhcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRSb3dQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRSb3dQcm9wcyhwcm9wcywgX3JlZjUpIHtcbiAgICB2YXIgcm93ID0gX3JlZjUucm93O1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IFwicm93X1wiICsgcm93LmlkLFxuICAgICAgcm9sZTogJ3JvdydcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRDZWxsUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0Q2VsbFByb3BzKHByb3BzLCBfcmVmNikge1xuICAgIHZhciBjZWxsID0gX3JlZjYuY2VsbDtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBcImNlbGxfXCIgKyBjZWxsLnJvdy5pZCArIFwiX1wiICsgY2VsbC5jb2x1bW4uaWQsXG4gICAgICByb2xlOiAnY2VsbCdcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZURlZmF1bHRQbHVnaW5Ib29rcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlT3B0aW9uczogW10sXG4gICAgICBzdGF0ZVJlZHVjZXJzOiBbXSxcbiAgICAgIHVzZUNvbnRyb2xsZWRTdGF0ZTogW10sXG4gICAgICBjb2x1bW5zOiBbXSxcbiAgICAgIGNvbHVtbnNEZXBzOiBbXSxcbiAgICAgIGFsbENvbHVtbnM6IFtdLFxuICAgICAgYWxsQ29sdW1uc0RlcHM6IFtdLFxuICAgICAgYWNjZXNzVmFsdWU6IFtdLFxuICAgICAgbWF0ZXJpYWxpemVkQ29sdW1uczogW10sXG4gICAgICBtYXRlcmlhbGl6ZWRDb2x1bW5zRGVwczogW10sXG4gICAgICB1c2VJbnN0YW5jZUFmdGVyRGF0YTogW10sXG4gICAgICB2aXNpYmxlQ29sdW1uczogW10sXG4gICAgICB2aXNpYmxlQ29sdW1uc0RlcHM6IFtdLFxuICAgICAgaGVhZGVyR3JvdXBzOiBbXSxcbiAgICAgIGhlYWRlckdyb3Vwc0RlcHM6IFtdLFxuICAgICAgdXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zOiBbXSxcbiAgICAgIHVzZUluc3RhbmNlOiBbXSxcbiAgICAgIHByZXBhcmVSb3c6IFtdLFxuICAgICAgZ2V0VGFibGVQcm9wczogW2RlZmF1bHRHZXRUYWJsZVByb3BzXSxcbiAgICAgIGdldFRhYmxlQm9keVByb3BzOiBbZGVmYXVsdEdldFRhYmxlQm9keVByb3BzXSxcbiAgICAgIGdldEhlYWRlckdyb3VwUHJvcHM6IFtkZWZhdWx0R2V0SGVhZGVyR3JvdXBQcm9wc10sXG4gICAgICBnZXRGb290ZXJHcm91cFByb3BzOiBbZGVmYXVsdEdldEZvb3Rlckdyb3VwUHJvcHNdLFxuICAgICAgZ2V0SGVhZGVyUHJvcHM6IFtkZWZhdWx0R2V0SGVhZGVyUHJvcHNdLFxuICAgICAgZ2V0Rm9vdGVyUHJvcHM6IFtkZWZhdWx0R2V0Rm9vdGVyUHJvcHNdLFxuICAgICAgZ2V0Um93UHJvcHM6IFtkZWZhdWx0R2V0Um93UHJvcHNdLFxuICAgICAgZ2V0Q2VsbFByb3BzOiBbZGVmYXVsdEdldENlbGxQcm9wc10sXG4gICAgICB1c2VGaW5hbEluc3RhbmNlOiBbXVxuICAgIH07XG4gIH1cblxuICBhY3Rpb25zLnJlc2V0SGlkZGVuQ29sdW1ucyA9ICdyZXNldEhpZGRlbkNvbHVtbnMnO1xuICBhY3Rpb25zLnRvZ2dsZUhpZGVDb2x1bW4gPSAndG9nZ2xlSGlkZUNvbHVtbic7XG4gIGFjdGlvbnMuc2V0SGlkZGVuQ29sdW1ucyA9ICdzZXRIaWRkZW5Db2x1bW5zJztcbiAgYWN0aW9ucy50b2dnbGVIaWRlQWxsQ29sdW1ucyA9ICd0b2dnbGVIaWRlQWxsQ29sdW1ucyc7XG4gIHZhciB1c2VDb2x1bW5WaXNpYmlsaXR5ID0gZnVuY3Rpb24gdXNlQ29sdW1uVmlzaWJpbGl0eShob29rcykge1xuICAgIGhvb2tzLmdldFRvZ2dsZUhpZGRlblByb3BzID0gW2RlZmF1bHRHZXRUb2dnbGVIaWRkZW5Qcm9wc107XG4gICAgaG9va3MuZ2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucy5wdXNoKHVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucyk7XG4gICAgaG9va3MuaGVhZGVyR3JvdXBzRGVwcy5wdXNoKGZ1bmN0aW9uIChkZXBzLCBfcmVmKSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChkZXBzLCBbaW5zdGFuY2Uuc3RhdGUuaGlkZGVuQ29sdW1uc10pO1xuICAgIH0pO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UpO1xuICB9O1xuICB1c2VDb2x1bW5WaXNpYmlsaXR5LnBsdWdpbk5hbWUgPSAndXNlQ29sdW1uVmlzaWJpbGl0eSc7XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVIaWRkZW5Qcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVIaWRkZW5Qcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZjIuY29sdW1uO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgIGNvbHVtbi50b2dnbGVIaWRkZW4oIWUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgY2hlY2tlZDogY29sdW1uLmlzVmlzaWJsZSxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIENvbHVtbiBWaXNpYmxlJ1xuICAgIH1dO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzKHByb3BzLCBfcmVmMykge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYzLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgIGluc3RhbmNlLnRvZ2dsZUhpZGVBbGxDb2x1bW5zKCFlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIGNoZWNrZWQ6ICFpbnN0YW5jZS5hbGxDb2x1bW5zSGlkZGVuICYmICFpbnN0YW5jZS5zdGF0ZS5oaWRkZW5Db2x1bW5zLmxlbmd0aCxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIEFsbCBDb2x1bW5zIEhpZGRlbicsXG4gICAgICBpbmRldGVybWluYXRlOiAhaW5zdGFuY2UuYWxsQ29sdW1uc0hpZGRlbiAmJiBpbnN0YW5jZS5zdGF0ZS5oaWRkZW5Db2x1bW5zLmxlbmd0aFxuICAgIH1dO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgaGlkZGVuQ29sdW1uczogW11cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRIaWRkZW5Db2x1bW5zKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGhpZGRlbkNvbHVtbnM6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5oaWRkZW5Db2x1bW5zIHx8IFtdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlSGlkZUNvbHVtbikge1xuICAgICAgdmFyIHNob3VsZCA9IHR5cGVvZiBhY3Rpb24udmFsdWUgIT09ICd1bmRlZmluZWQnID8gYWN0aW9uLnZhbHVlIDogIXN0YXRlLmhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoYWN0aW9uLmNvbHVtbklkKTtcbiAgICAgIHZhciBoaWRkZW5Db2x1bW5zID0gc2hvdWxkID8gW10uY29uY2F0KHN0YXRlLmhpZGRlbkNvbHVtbnMsIFthY3Rpb24uY29sdW1uSWRdKSA6IHN0YXRlLmhpZGRlbkNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkICE9PSBhY3Rpb24uY29sdW1uSWQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaGlkZGVuQ29sdW1uczogaGlkZGVuQ29sdW1uc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldEhpZGRlbkNvbHVtbnMpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaGlkZGVuQ29sdW1uczogZnVuY3Rpb25hbFVwZGF0ZShhY3Rpb24udmFsdWUsIHN0YXRlLmhpZGRlbkNvbHVtbnMpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlSGlkZUFsbENvbHVtbnMpIHtcbiAgICAgIHZhciBzaG91bGRBbGwgPSB0eXBlb2YgYWN0aW9uLnZhbHVlICE9PSAndW5kZWZpbmVkJyA/IGFjdGlvbi52YWx1ZSA6ICFzdGF0ZS5oaWRkZW5Db2x1bW5zLmxlbmd0aDtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaGlkZGVuQ29sdW1uczogc2hvdWxkQWxsID8gaW5zdGFuY2UuYWxsQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZDtcbiAgICAgICAgfSkgOiBbXVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zKGluc3RhbmNlKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBpbnN0YW5jZS5oZWFkZXJzLFxuICAgICAgICBoaWRkZW5Db2x1bW5zID0gaW5zdGFuY2Uuc3RhdGUuaGlkZGVuQ29sdW1ucztcbiAgICB2YXIgaXNNb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcblxuICAgIGlmICghaXNNb3VudGVkUmVmLmN1cnJlbnQpIDtcblxuICAgIHZhciBoYW5kbGVDb2x1bW4gPSBmdW5jdGlvbiBoYW5kbGVDb2x1bW4oY29sdW1uLCBwYXJlbnRWaXNpYmxlKSB7XG4gICAgICBjb2x1bW4uaXNWaXNpYmxlID0gcGFyZW50VmlzaWJsZSAmJiAhaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW4uaWQpO1xuICAgICAgdmFyIHRvdGFsVmlzaWJsZUhlYWRlckNvdW50ID0gMDtcblxuICAgICAgaWYgKGNvbHVtbi5oZWFkZXJzICYmIGNvbHVtbi5oZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICBjb2x1bW4uaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJDb2x1bW4pIHtcbiAgICAgICAgICByZXR1cm4gdG90YWxWaXNpYmxlSGVhZGVyQ291bnQgKz0gaGFuZGxlQ29sdW1uKHN1YkNvbHVtbiwgY29sdW1uLmlzVmlzaWJsZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG90YWxWaXNpYmxlSGVhZGVyQ291bnQgPSBjb2x1bW4uaXNWaXNpYmxlID8gMSA6IDA7XG4gICAgICB9XG5cbiAgICAgIGNvbHVtbi50b3RhbFZpc2libGVIZWFkZXJDb3VudCA9IHRvdGFsVmlzaWJsZUhlYWRlckNvdW50O1xuICAgICAgcmV0dXJuIHRvdGFsVmlzaWJsZUhlYWRlckNvdW50O1xuICAgIH07XG5cbiAgICB2YXIgdG90YWxWaXNpYmxlSGVhZGVyQ291bnQgPSAwO1xuICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViSGVhZGVyKSB7XG4gICAgICByZXR1cm4gdG90YWxWaXNpYmxlSGVhZGVyQ291bnQgKz0gaGFuZGxlQ29sdW1uKHN1YkhlYWRlciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZShpbnN0YW5jZSkge1xuICAgIHZhciBjb2x1bW5zID0gaW5zdGFuY2UuY29sdW1ucyxcbiAgICAgICAgZmxhdEhlYWRlcnMgPSBpbnN0YW5jZS5mbGF0SGVhZGVycyxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIGhpZGRlbkNvbHVtbnMgPSBpbnN0YW5jZS5zdGF0ZS5oaWRkZW5Db2x1bW5zLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0SGkgPSBpbnN0YW5jZS5hdXRvUmVzZXRIaWRkZW5Db2x1bW5zLFxuICAgICAgICBhdXRvUmVzZXRIaWRkZW5Db2x1bW5zID0gX2luc3RhbmNlJGF1dG9SZXNldEhpID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldEhpO1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7XG4gICAgdmFyIGFsbENvbHVtbnNIaWRkZW4gPSBhbGxDb2x1bW5zLmxlbmd0aCA9PT0gaGlkZGVuQ29sdW1ucy5sZW5ndGg7XG4gICAgdmFyIHRvZ2dsZUhpZGVDb2x1bW4gPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoY29sdW1uSWQsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUhpZGVDb2x1bW4sXG4gICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgc2V0SGlkZGVuQ29sdW1ucyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRIaWRkZW5Db2x1bW5zLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciB0b2dnbGVIaWRlQWxsQ29sdW1ucyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVIaWRlQWxsQ29sdW1ucyxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgZ2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBmbGF0SGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGNvbHVtbi50b2dnbGVIaWRkZW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlSGlkZUNvbHVtbixcbiAgICAgICAgICBjb2x1bW5JZDogY29sdW1uLmlkLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbHVtbi5nZXRUb2dnbGVIaWRkZW5Qcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VG9nZ2xlSGlkZGVuUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0SGlkZGVuQ29sdW1ucyA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRIaWRkZW5Db2x1bW5zKTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRIaWRkZW5Db2x1bW5zKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRIaWRkZW5Db2x1bW5zXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgY29sdW1uc10pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIGFsbENvbHVtbnNIaWRkZW46IGFsbENvbHVtbnNIaWRkZW4sXG4gICAgICB0b2dnbGVIaWRlQ29sdW1uOiB0b2dnbGVIaWRlQ29sdW1uLFxuICAgICAgc2V0SGlkZGVuQ29sdW1uczogc2V0SGlkZGVuQ29sdW1ucyxcbiAgICAgIHRvZ2dsZUhpZGVBbGxDb2x1bW5zOiB0b2dnbGVIaWRlQWxsQ29sdW1ucyxcbiAgICAgIGdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHM6IGdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHNcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBkZWZhdWx0SW5pdGlhbFN0YXRlID0ge307XG4gIHZhciBkZWZhdWx0Q29sdW1uSW5zdGFuY2UgPSB7fTtcblxuICB2YXIgZGVmYXVsdFJlZHVjZXIgPSBmdW5jdGlvbiBkZWZhdWx0UmVkdWNlcihzdGF0ZSwgYWN0aW9uLCBwcmV2U3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRTdWJSb3dzID0gZnVuY3Rpb24gZGVmYXVsdEdldFN1YlJvd3Mocm93LCBpbmRleCkge1xuICAgIHJldHVybiByb3cuc3ViUm93cyB8fCBbXTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFJvd0lkID0gZnVuY3Rpb24gZGVmYXVsdEdldFJvd0lkKHJvdywgaW5kZXgsIHBhcmVudCkge1xuICAgIHJldHVybiBcIlwiICsgKHBhcmVudCA/IFtwYXJlbnQuaWQsIGluZGV4XS5qb2luKCcuJykgOiBpbmRleCk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRVc2VDb250cm9sbGVkU3RhdGUgPSBmdW5jdGlvbiBkZWZhdWx0VXNlQ29udHJvbGxlZFN0YXRlKGQpIHtcbiAgICByZXR1cm4gZDtcbiAgfTtcblxuICBmdW5jdGlvbiBhcHBseURlZmF1bHRzKHByb3BzKSB7XG4gICAgdmFyIF9wcm9wcyRpbml0aWFsU3RhdGUgPSBwcm9wcy5pbml0aWFsU3RhdGUsXG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IF9wcm9wcyRpbml0aWFsU3RhdGUgPT09IHZvaWQgMCA/IGRlZmF1bHRJbml0aWFsU3RhdGUgOiBfcHJvcHMkaW5pdGlhbFN0YXRlLFxuICAgICAgICBfcHJvcHMkZGVmYXVsdENvbHVtbiA9IHByb3BzLmRlZmF1bHRDb2x1bW4sXG4gICAgICAgIGRlZmF1bHRDb2x1bW4gPSBfcHJvcHMkZGVmYXVsdENvbHVtbiA9PT0gdm9pZCAwID8gZGVmYXVsdENvbHVtbkluc3RhbmNlIDogX3Byb3BzJGRlZmF1bHRDb2x1bW4sXG4gICAgICAgIF9wcm9wcyRnZXRTdWJSb3dzID0gcHJvcHMuZ2V0U3ViUm93cyxcbiAgICAgICAgZ2V0U3ViUm93cyA9IF9wcm9wcyRnZXRTdWJSb3dzID09PSB2b2lkIDAgPyBkZWZhdWx0R2V0U3ViUm93cyA6IF9wcm9wcyRnZXRTdWJSb3dzLFxuICAgICAgICBfcHJvcHMkZ2V0Um93SWQgPSBwcm9wcy5nZXRSb3dJZCxcbiAgICAgICAgZ2V0Um93SWQgPSBfcHJvcHMkZ2V0Um93SWQgPT09IHZvaWQgMCA/IGRlZmF1bHRHZXRSb3dJZCA6IF9wcm9wcyRnZXRSb3dJZCxcbiAgICAgICAgX3Byb3BzJHN0YXRlUmVkdWNlciA9IHByb3BzLnN0YXRlUmVkdWNlcixcbiAgICAgICAgc3RhdGVSZWR1Y2VyID0gX3Byb3BzJHN0YXRlUmVkdWNlciA9PT0gdm9pZCAwID8gZGVmYXVsdFJlZHVjZXIgOiBfcHJvcHMkc3RhdGVSZWR1Y2VyLFxuICAgICAgICBfcHJvcHMkdXNlQ29udHJvbGxlZFMgPSBwcm9wcy51c2VDb250cm9sbGVkU3RhdGUsXG4gICAgICAgIHVzZUNvbnRyb2xsZWRTdGF0ZSA9IF9wcm9wcyR1c2VDb250cm9sbGVkUyA9PT0gdm9pZCAwID8gZGVmYXVsdFVzZUNvbnRyb2xsZWRTdGF0ZSA6IF9wcm9wcyR1c2VDb250cm9sbGVkUyxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJpbml0aWFsU3RhdGVcIiwgXCJkZWZhdWx0Q29sdW1uXCIsIFwiZ2V0U3ViUm93c1wiLCBcImdldFJvd0lkXCIsIFwic3RhdGVSZWR1Y2VyXCIsIFwidXNlQ29udHJvbGxlZFN0YXRlXCJdKTtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUsXG4gICAgICBkZWZhdWx0Q29sdW1uOiBkZWZhdWx0Q29sdW1uLFxuICAgICAgZ2V0U3ViUm93czogZ2V0U3ViUm93cyxcbiAgICAgIGdldFJvd0lkOiBnZXRSb3dJZCxcbiAgICAgIHN0YXRlUmVkdWNlcjogc3RhdGVSZWR1Y2VyLFxuICAgICAgdXNlQ29udHJvbGxlZFN0YXRlOiB1c2VDb250cm9sbGVkU3RhdGVcbiAgICB9KTtcbiAgfVxuXG4gIHZhciB1c2VUYWJsZSA9IGZ1bmN0aW9uIHVzZVRhYmxlKHByb3BzKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBsdWdpbnMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcGx1Z2luc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZGVmYXVsdCBwcm9wc1xuICAgIHByb3BzID0gYXBwbHlEZWZhdWx0cyhwcm9wcyk7IC8vIEFkZCBjb3JlIHBsdWdpbnNcblxuICAgIHBsdWdpbnMgPSBbdXNlQ29sdW1uVmlzaWJpbGl0eV0uY29uY2F0KHBsdWdpbnMpOyAvLyBDcmVhdGUgdGhlIHRhYmxlIGluc3RhbmNlXG5cbiAgICB2YXIgaW5zdGFuY2VSZWYgPSBSZWFjdC51c2VSZWYoe30pOyAvLyBDcmVhdGUgYSBnZXR0ZXIgZm9yIHRoZSBpbnN0YW5jZSAoaGVscHMgYXZvaWQgYSBsb3Qgb2YgcG90ZW50aWFsIG1lbW9yeSBsZWFrcylcblxuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZVJlZi5jdXJyZW50KTsgLy8gQXNzaWduIHRoZSBwcm9wcywgcGx1Z2lucyBhbmQgaG9va3MgdG8gdGhlIGluc3RhbmNlXG5cbiAgICBPYmplY3QuYXNzaWduKGdldEluc3RhbmNlKCksIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgIGhvb2tzOiBtYWtlRGVmYXVsdFBsdWdpbkhvb2tzKClcbiAgICB9KSk7IC8vIEFsbG93IHBsdWdpbnMgdG8gcmVnaXN0ZXIgaG9va3MgYXMgZWFybHkgYXMgcG9zc2libGVcblxuICAgIHBsdWdpbnMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgcGx1Z2luKGdldEluc3RhbmNlKCkuaG9va3MpO1xuICAgIH0pOyAvLyBDb25zdW1lIGFsbCBob29rcyBhbmQgbWFrZSBhIGdldHRlciBmb3IgdGhlbVxuXG4gICAgdmFyIGdldEhvb2tzID0gdXNlR2V0TGF0ZXN0KGdldEluc3RhbmNlKCkuaG9va3MpO1xuICAgIGdldEluc3RhbmNlKCkuZ2V0SG9va3MgPSBnZXRIb29rcztcbiAgICBkZWxldGUgZ2V0SW5zdGFuY2UoKS5ob29rczsgLy8gQWxsb3cgdXNlT3B0aW9ucyBob29rcyB0byBtb2RpZnkgdGhlIG9wdGlvbnMgY29taW5nIGludG8gdGhlIHRhYmxlXG5cbiAgICBPYmplY3QuYXNzaWduKGdldEluc3RhbmNlKCksIHJlZHVjZUhvb2tzKGdldEhvb2tzKCkudXNlT3B0aW9ucywgYXBwbHlEZWZhdWx0cyhwcm9wcykpKTtcblxuICAgIHZhciBfZ2V0SW5zdGFuY2UgPSBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBkYXRhID0gX2dldEluc3RhbmNlLmRhdGEsXG4gICAgICAgIHVzZXJDb2x1bW5zID0gX2dldEluc3RhbmNlLmNvbHVtbnMsXG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IF9nZXRJbnN0YW5jZS5pbml0aWFsU3RhdGUsXG4gICAgICAgIGRlZmF1bHRDb2x1bW4gPSBfZ2V0SW5zdGFuY2UuZGVmYXVsdENvbHVtbixcbiAgICAgICAgZ2V0U3ViUm93cyA9IF9nZXRJbnN0YW5jZS5nZXRTdWJSb3dzLFxuICAgICAgICBnZXRSb3dJZCA9IF9nZXRJbnN0YW5jZS5nZXRSb3dJZCxcbiAgICAgICAgc3RhdGVSZWR1Y2VyID0gX2dldEluc3RhbmNlLnN0YXRlUmVkdWNlcixcbiAgICAgICAgdXNlQ29udHJvbGxlZFN0YXRlID0gX2dldEluc3RhbmNlLnVzZUNvbnRyb2xsZWRTdGF0ZTsgLy8gU2V0dXAgdXNlciByZWR1Y2VyIHJlZlxuXG5cbiAgICB2YXIgZ2V0U3RhdGVSZWR1Y2VyID0gdXNlR2V0TGF0ZXN0KHN0YXRlUmVkdWNlcik7IC8vIEJ1aWxkIHRoZSByZWR1Y2VyXG5cbiAgICB2YXIgcmVkdWNlciA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAvLyBEZXRlY3QgaW52YWxpZCBhY3Rpb25zXG4gICAgICBpZiAoIWFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyh7XG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBBY3Rpb24g8J+RhicpO1xuICAgICAgfSAvLyBSZWR1Y2UgdGhlIHN0YXRlIGZyb20gYWxsIHBsdWdpbiByZWR1Y2Vyc1xuXG5cbiAgICAgIHJldHVybiBbXS5jb25jYXQoZ2V0SG9va3MoKS5zdGF0ZVJlZHVjZXJzLCBBcnJheS5pc0FycmF5KGdldFN0YXRlUmVkdWNlcigpKSA/IGdldFN0YXRlUmVkdWNlcigpIDogW2dldFN0YXRlUmVkdWNlcigpXSkucmVkdWNlKGZ1bmN0aW9uIChzLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyKHMsIGFjdGlvbiwgc3RhdGUsIGdldEluc3RhbmNlKCkpIHx8IHM7XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfSwgW2dldEhvb2tzLCBnZXRTdGF0ZVJlZHVjZXIsIGdldEluc3RhbmNlXSk7IC8vIFN0YXJ0IHRoZSByZWR1Y2VyXG5cbiAgICB2YXIgX1JlYWN0JHVzZVJlZHVjZXIgPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuaW5pdFxuICAgICAgfSk7XG4gICAgfSksXG4gICAgICAgIHJlZHVjZXJTdGF0ZSA9IF9SZWFjdCR1c2VSZWR1Y2VyWzBdLFxuICAgICAgICBkaXNwYXRjaCA9IF9SZWFjdCR1c2VSZWR1Y2VyWzFdOyAvLyBBbGxvdyB0aGUgdXNlciB0byBjb250cm9sIHRoZSBmaW5hbCBzdGF0ZSB3aXRoIGhvb2tzXG5cblxuICAgIHZhciBzdGF0ZSA9IHJlZHVjZUhvb2tzKFtdLmNvbmNhdChnZXRIb29rcygpLnVzZUNvbnRyb2xsZWRTdGF0ZSwgW3VzZUNvbnRyb2xsZWRTdGF0ZV0pLCByZWR1Y2VyU3RhdGUsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihnZXRJbnN0YW5jZSgpLCB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBkaXNwYXRjaDogZGlzcGF0Y2hcbiAgICB9KTsgLy8gRGVjb3JhdGUgQWxsIHRoZSBjb2x1bW5zXG5cbiAgICB2YXIgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGxpbmtDb2x1bW5TdHJ1Y3R1cmUocmVkdWNlSG9va3MoZ2V0SG9va3MoKS5jb2x1bW5zLCB1c2VyQ29sdW1ucywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgICAgfSkpO1xuICAgIH0sIFtnZXRIb29rcywgZ2V0SW5zdGFuY2UsIHVzZXJDb2x1bW5zXS5jb25jYXQocmVkdWNlSG9va3MoZ2V0SG9va3MoKS5jb2x1bW5zRGVwcywgW10sIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSkpKTtcbiAgICBnZXRJbnN0YW5jZSgpLmNvbHVtbnMgPSBjb2x1bW5zOyAvLyBHZXQgdGhlIGZsYXQgbGlzdCBvZiBhbGwgY29sdW1ucyBhbmQgYWxsb3cgaG9va3MgdG8gZGVjb3JhdGVcbiAgICAvLyB0aG9zZSBjb2x1bW5zIChhbmQgdHJpZ2dlciB0aGlzIG1lbW9pemF0aW9uIHZpYSBkZXBzKVxuXG4gICAgdmFyIGFsbENvbHVtbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWR1Y2VIb29rcyhnZXRIb29rcygpLmFsbENvbHVtbnMsIGZsYXR0ZW5Db2x1bW5zKGNvbHVtbnMpLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgICB9KS5tYXAoYXNzaWduQ29sdW1uQWNjZXNzb3IpO1xuICAgIH0sIFtjb2x1bW5zLCBnZXRIb29rcywgZ2V0SW5zdGFuY2VdLmNvbmNhdChyZWR1Y2VIb29rcyhnZXRIb29rcygpLmFsbENvbHVtbnNEZXBzLCBbXSwge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KSkpO1xuICAgIGdldEluc3RhbmNlKCkuYWxsQ29sdW1ucyA9IGFsbENvbHVtbnM7IC8vIEFjY2VzcyB0aGUgcm93IG1vZGVsIHVzaW5nIGluaXRpYWwgY29sdW1uc1xuXG4gICAgdmFyIF9SZWFjdCR1c2VNZW1vID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcm93cyA9IFtdO1xuICAgICAgdmFyIGZsYXRSb3dzID0gW107XG4gICAgICB2YXIgcm93c0J5SWQgPSB7fTtcbiAgICAgIHZhciBhbGxDb2x1bW5zUXVldWUgPSBbXS5jb25jYXQoYWxsQ29sdW1ucyk7XG5cbiAgICAgIHdoaWxlIChhbGxDb2x1bW5zUXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zUXVldWUuc2hpZnQoKTtcbiAgICAgICAgYWNjZXNzUm93c0ZvckNvbHVtbih7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICByb3dzOiByb3dzLFxuICAgICAgICAgIGZsYXRSb3dzOiBmbGF0Um93cyxcbiAgICAgICAgICByb3dzQnlJZDogcm93c0J5SWQsXG4gICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgZ2V0Um93SWQ6IGdldFJvd0lkLFxuICAgICAgICAgIGdldFN1YlJvd3M6IGdldFN1YlJvd3MsXG4gICAgICAgICAgYWNjZXNzVmFsdWVIb29rczogZ2V0SG9va3MoKS5hY2Nlc3NWYWx1ZSxcbiAgICAgICAgICBnZXRJbnN0YW5jZTogZ2V0SW5zdGFuY2VcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkXTtcbiAgICB9LCBbYWxsQ29sdW1ucywgZGF0YSwgZ2V0Um93SWQsIGdldFN1YlJvd3MsIGdldEhvb2tzLCBnZXRJbnN0YW5jZV0pLFxuICAgICAgICByb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIGZsYXRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMV0sXG4gICAgICAgIHJvd3NCeUlkID0gX1JlYWN0JHVzZU1lbW9bMl07XG5cbiAgICBPYmplY3QuYXNzaWduKGdldEluc3RhbmNlKCksIHtcbiAgICAgIHJvd3M6IHJvd3MsXG4gICAgICBpbml0aWFsUm93czogW10uY29uY2F0KHJvd3MpLFxuICAgICAgZmxhdFJvd3M6IGZsYXRSb3dzLFxuICAgICAgcm93c0J5SWQ6IHJvd3NCeUlkIC8vIG1hdGVyaWFsaXplZENvbHVtbnMsXG5cbiAgICB9KTtcbiAgICBsb29wSG9va3MoZ2V0SG9va3MoKS51c2VJbnN0YW5jZUFmdGVyRGF0YSwgZ2V0SW5zdGFuY2UoKSk7IC8vIEdldCB0aGUgZmxhdCBsaXN0IG9mIGFsbCBjb2x1bW5zIEFGVEVSIHRoZSByb3dzXG4gICAgLy8gaGF2ZSBiZWVuIGFjY2VzcywgYW5kIGFsbG93IGhvb2tzIHRvIGRlY29yYXRlXG4gICAgLy8gdGhvc2UgY29sdW1ucyAoYW5kIHRyaWdnZXIgdGhpcyBtZW1vaXphdGlvbiB2aWEgZGVwcylcblxuICAgIHZhciB2aXNpYmxlQ29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlZHVjZUhvb2tzKGdldEhvb2tzKCkudmlzaWJsZUNvbHVtbnMsIGFsbENvbHVtbnMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZGVjb3JhdGVDb2x1bW4oZCwgZGVmYXVsdENvbHVtbik7XG4gICAgICB9KTtcbiAgICB9LCBbZ2V0SG9va3MsIGFsbENvbHVtbnMsIGdldEluc3RhbmNlLCBkZWZhdWx0Q29sdW1uXS5jb25jYXQocmVkdWNlSG9va3MoZ2V0SG9va3MoKS52aXNpYmxlQ29sdW1uc0RlcHMsIFtdLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pKSk7IC8vIENvbWJpbmUgbmV3IHZpc2libGUgY29sdW1ucyB3aXRoIGFsbCBjb2x1bW5zXG5cbiAgICBhbGxDb2x1bW5zID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29sdW1ucyA9IFtdLmNvbmNhdCh2aXNpYmxlQ29sdW1ucyk7XG4gICAgICBhbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICBpZiAoIWNvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW4uaWQ7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfSwgW2FsbENvbHVtbnMsIHZpc2libGVDb2x1bW5zXSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5hbGxDb2x1bW5zID0gYWxsQ29sdW1ucztcblxuICAgIHtcbiAgICAgIHZhciBkdXBsaWNhdGVDb2x1bW5zID0gYWxsQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbHVtbiwgaSkge1xuICAgICAgICByZXR1cm4gYWxsQ29sdW1ucy5maW5kSW5kZXgoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uLmlkO1xuICAgICAgICB9KSAhPT0gaTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZHVwbGljYXRlQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKGFsbENvbHVtbnMpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEdXBsaWNhdGUgY29sdW1ucyB3ZXJlIGZvdW5kIHdpdGggaWRzOiBcXFwiXCIgKyBkdXBsaWNhdGVDb2x1bW5zLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkO1xuICAgICAgICB9KS5qb2luKCcsICcpICsgXCJcXFwiIGluIHRoZSBjb2x1bW5zIGFycmF5IGFib3ZlXCIpO1xuICAgICAgfVxuICAgIH0gLy8gTWFrZSB0aGUgaGVhZGVyR3JvdXBzXG5cblxuICAgIHZhciBoZWFkZXJHcm91cHMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWR1Y2VIb29rcyhnZXRIb29rcygpLmhlYWRlckdyb3VwcywgbWFrZUhlYWRlckdyb3Vwcyh2aXNpYmxlQ29sdW1ucywgZGVmYXVsdENvbHVtbiksIGdldEluc3RhbmNlKCkpO1xuICAgIH0sIFtnZXRIb29rcywgdmlzaWJsZUNvbHVtbnMsIGRlZmF1bHRDb2x1bW4sIGdldEluc3RhbmNlXS5jb25jYXQocmVkdWNlSG9va3MoZ2V0SG9va3MoKS5oZWFkZXJHcm91cHNEZXBzLCBbXSwge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KSkpO1xuICAgIGdldEluc3RhbmNlKCkuaGVhZGVyR3JvdXBzID0gaGVhZGVyR3JvdXBzOyAvLyBHZXQgdGhlIGZpcnN0IGxldmVsIG9mIGhlYWRlcnNcblxuICAgIHZhciBoZWFkZXJzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaGVhZGVyR3JvdXBzLmxlbmd0aCA/IGhlYWRlckdyb3Vwc1swXS5oZWFkZXJzIDogW107XG4gICAgfSwgW2hlYWRlckdyb3Vwc10pO1xuICAgIGdldEluc3RhbmNlKCkuaGVhZGVycyA9IGhlYWRlcnM7IC8vIFByb3ZpZGUgYSBmbGF0IGhlYWRlciBsaXN0IGZvciB1dGlsaXRpZXNcblxuICAgIGdldEluc3RhbmNlKCkuZmxhdEhlYWRlcnMgPSBoZWFkZXJHcm91cHMucmVkdWNlKGZ1bmN0aW9uIChhbGwsIGhlYWRlckdyb3VwKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGFsbCwgaGVhZGVyR3JvdXAuaGVhZGVycyk7XG4gICAgfSwgW10pO1xuICAgIGxvb3BIb29rcyhnZXRIb29rcygpLnVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucywgZ2V0SW5zdGFuY2UoKSk7IC8vIEZpbHRlciBjb2x1bW5zIGRvd24gdG8gdmlzaWJsZSBvbmVzXG5cbiAgICB2YXIgdmlzaWJsZUNvbHVtbnNEZXAgPSB2aXNpYmxlQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLmlzVmlzaWJsZTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLmlkO1xuICAgIH0pLnNvcnQoKS5qb2luKCdfJyk7XG4gICAgdmlzaWJsZUNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB2aXNpYmxlQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaXNWaXNpYmxlO1xuICAgICAgfSk7XG4gICAgfSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFt2aXNpYmxlQ29sdW1ucywgdmlzaWJsZUNvbHVtbnNEZXBdKTtcbiAgICBnZXRJbnN0YW5jZSgpLnZpc2libGVDb2x1bW5zID0gdmlzaWJsZUNvbHVtbnM7IC8vIEhlYWRlciBWaXNpYmlsaXR5IGlzIG5lZWRlZCBieSB0aGlzIHBvaW50XG5cbiAgICB2YXIgX2NhbGN1bGF0ZUhlYWRlcldpZHRoID0gY2FsY3VsYXRlSGVhZGVyV2lkdGhzKGhlYWRlcnMpLFxuICAgICAgICB0b3RhbENvbHVtbnNNaW5XaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aFswXSxcbiAgICAgICAgdG90YWxDb2x1bW5zV2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGhbMV0sXG4gICAgICAgIHRvdGFsQ29sdW1uc01heFdpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoWzJdO1xuXG4gICAgZ2V0SW5zdGFuY2UoKS50b3RhbENvbHVtbnNNaW5XaWR0aCA9IHRvdGFsQ29sdW1uc01pbldpZHRoO1xuICAgIGdldEluc3RhbmNlKCkudG90YWxDb2x1bW5zV2lkdGggPSB0b3RhbENvbHVtbnNXaWR0aDtcbiAgICBnZXRJbnN0YW5jZSgpLnRvdGFsQ29sdW1uc01heFdpZHRoID0gdG90YWxDb2x1bW5zTWF4V2lkdGg7XG4gICAgbG9vcEhvb2tzKGdldEhvb2tzKCkudXNlSW5zdGFuY2UsIGdldEluc3RhbmNlKCkpIC8vIEVhY2ggbWF0ZXJpYWxpemVkIGhlYWRlciBuZWVkcyB0byBiZSBhc3NpZ25lZCBhIHJlbmRlciBmdW5jdGlvbiBhbmQgb3RoZXJcbiAgICAvLyBwcm9wIGdldHRlciBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgO1xuICAgIFtdLmNvbmNhdChnZXRJbnN0YW5jZSgpLmZsYXRIZWFkZXJzLCBnZXRJbnN0YW5jZSgpLmFsbENvbHVtbnMpLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgLy8gR2l2ZSBjb2x1bW5zL2hlYWRlcnMgcmVuZGVyaW5nIHBvd2VyXG4gICAgICBjb2x1bW4ucmVuZGVyID0gbWFrZVJlbmRlcmVyKGdldEluc3RhbmNlKCksIGNvbHVtbik7IC8vIEdpdmUgY29sdW1ucy9oZWFkZXJzIGEgZGVmYXVsdCBnZXRIZWFkZXJQcm9wc1xuXG4gICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldEhlYWRlclByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgfSk7IC8vIEdpdmUgY29sdW1ucy9oZWFkZXJzIGEgZGVmYXVsdCBnZXRGb290ZXJQcm9wc1xuXG4gICAgICBjb2x1bW4uZ2V0Rm9vdGVyUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldEZvb3RlclByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5oZWFkZXJHcm91cHMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBoZWFkZXJHcm91cHMuZmlsdGVyKGZ1bmN0aW9uIChoZWFkZXJHcm91cCwgaSkge1xuICAgICAgICAvLyBGaWx0ZXIgb3V0IGFueSBoZWFkZXJzIGFuZCBoZWFkZXJHcm91cHMgdGhhdCBkb24ndCBoYXZlIHZpc2libGUgY29sdW1uc1xuICAgICAgICBoZWFkZXJHcm91cC5oZWFkZXJzID0gaGVhZGVyR3JvdXAuaGVhZGVycy5maWx0ZXIoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgIHZhciByZWN1cnNlID0gZnVuY3Rpb24gcmVjdXJzZShoZWFkZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gaGVhZGVycy5maWx0ZXIoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICBpZiAoY29sdW1uLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzZShjb2x1bW4uaGVhZGVycyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLmlzVmlzaWJsZTtcbiAgICAgICAgICAgIH0pLmxlbmd0aDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGNvbHVtbi5oZWFkZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjdXJzZShjb2x1bW4uaGVhZGVycyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbHVtbi5pc1Zpc2libGU7XG4gICAgICAgIH0pOyAvLyBHaXZlIGhlYWRlckdyb3VwcyBnZXRSb3dQcm9wc1xuXG4gICAgICAgIGlmIChoZWFkZXJHcm91cC5oZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICAgIGhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldEhlYWRlckdyb3VwUHJvcHMsIHtcbiAgICAgICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICAgICAgaGVhZGVyR3JvdXA6IGhlYWRlckdyb3VwLFxuICAgICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBoZWFkZXJHcm91cC5nZXRGb290ZXJHcm91cFByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRGb290ZXJHcm91cFByb3BzLCB7XG4gICAgICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgICAgIGhlYWRlckdyb3VwOiBoZWFkZXJHcm91cCxcbiAgICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9LCBbaGVhZGVyR3JvdXBzLCBnZXRJbnN0YW5jZSwgZ2V0SG9va3NdKTtcbiAgICBnZXRJbnN0YW5jZSgpLmZvb3Rlckdyb3VwcyA9IFtdLmNvbmNhdChnZXRJbnN0YW5jZSgpLmhlYWRlckdyb3VwcykucmV2ZXJzZSgpOyAvLyBUaGUgcHJlcGFyZVJvdyBmdW5jdGlvbiBpcyBhYnNvbHV0ZWx5IG5lY2Vzc2FyeSBhbmQgTVVTVCBiZSBjYWxsZWQgb25cbiAgICAvLyBhbnkgcm93cyB0aGUgdXNlciB3aXNoZXMgdG8gYmUgZGlzcGxheWVkLlxuXG4gICAgZ2V0SW5zdGFuY2UoKS5wcmVwYXJlUm93ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHJvdykge1xuICAgICAgcm93LmdldFJvd1Byb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRSb3dQcm9wcywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgcm93OiByb3dcbiAgICAgIH0pOyAvLyBCdWlsZCB0aGUgdmlzaWJsZSBjZWxscyBmb3IgZWFjaCByb3dcblxuICAgICAgcm93LmFsbENlbGxzID0gYWxsQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICB2YXIgdmFsdWUgPSByb3cudmFsdWVzW2NvbHVtbi5pZF07XG4gICAgICAgIHZhciBjZWxsID0ge1xuICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgIHJvdzogcm93LFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9OyAvLyBHaXZlIGVhY2ggY2VsbCBhIGdldENlbGxQcm9wcyBiYXNlXG5cbiAgICAgICAgY2VsbC5nZXRDZWxsUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldENlbGxQcm9wcywge1xuICAgICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICAgIGNlbGw6IGNlbGxcbiAgICAgICAgfSk7IC8vIEdpdmUgZWFjaCBjZWxsIGEgcmVuZGVyZXIgZnVuY3Rpb24gKHN1cHBvcnRzIG11bHRpcGxlIHJlbmRlcmVycylcblxuICAgICAgICBjZWxsLnJlbmRlciA9IG1ha2VSZW5kZXJlcihnZXRJbnN0YW5jZSgpLCBjb2x1bW4sIHtcbiAgICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgICBjZWxsOiBjZWxsLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgICB9KTtcbiAgICAgIHJvdy5jZWxscyA9IHZpc2libGVDb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHJldHVybiByb3cuYWxsQ2VsbHMuZmluZChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICAgIHJldHVybiBjZWxsLmNvbHVtbi5pZCA9PT0gY29sdW1uLmlkO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBuZWVkIHRvIGFwcGx5IGFueSByb3cgc3BlY2lmaWMgaG9va3MgKHVzZUV4cGFuZGVkIHJlcXVpcmVzIHRoaXMpXG5cbiAgICAgIGxvb3BIb29rcyhnZXRIb29rcygpLnByZXBhcmVSb3csIHJvdywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgICAgfSk7XG4gICAgfSwgW2dldEhvb2tzLCBnZXRJbnN0YW5jZSwgYWxsQ29sdW1ucywgdmlzaWJsZUNvbHVtbnNdKTtcbiAgICBnZXRJbnN0YW5jZSgpLmdldFRhYmxlUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRhYmxlUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5nZXRUYWJsZUJvZHlQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VGFibGVCb2R5UHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgbG9vcEhvb2tzKGdldEhvb2tzKCkudXNlRmluYWxJbnN0YW5jZSwgZ2V0SW5zdGFuY2UoKSk7XG4gICAgcmV0dXJuIGdldEluc3RhbmNlKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlSGVhZGVyV2lkdGhzKGhlYWRlcnMsIGxlZnQpIHtcbiAgICBpZiAobGVmdCA9PT0gdm9pZCAwKSB7XG4gICAgICBsZWZ0ID0gMDtcbiAgICB9XG5cbiAgICB2YXIgc3VtVG90YWxNaW5XaWR0aCA9IDA7XG4gICAgdmFyIHN1bVRvdGFsV2lkdGggPSAwO1xuICAgIHZhciBzdW1Ub3RhbE1heFdpZHRoID0gMDtcbiAgICB2YXIgc3VtVG90YWxGbGV4V2lkdGggPSAwO1xuICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICB2YXIgc3ViSGVhZGVycyA9IGhlYWRlci5oZWFkZXJzO1xuICAgICAgaGVhZGVyLnRvdGFsTGVmdCA9IGxlZnQ7XG5cbiAgICAgIGlmIChzdWJIZWFkZXJzICYmIHN1YkhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBfY2FsY3VsYXRlSGVhZGVyV2lkdGgyID0gY2FsY3VsYXRlSGVhZGVyV2lkdGhzKHN1YkhlYWRlcnMsIGxlZnQpLFxuICAgICAgICAgICAgdG90YWxNaW5XaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aDJbMF0sXG4gICAgICAgICAgICB0b3RhbFdpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoMlsxXSxcbiAgICAgICAgICAgIHRvdGFsTWF4V2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGgyWzJdLFxuICAgICAgICAgICAgdG90YWxGbGV4V2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGgyWzNdO1xuXG4gICAgICAgIGhlYWRlci50b3RhbE1pbldpZHRoID0gdG90YWxNaW5XaWR0aDtcbiAgICAgICAgaGVhZGVyLnRvdGFsV2lkdGggPSB0b3RhbFdpZHRoO1xuICAgICAgICBoZWFkZXIudG90YWxNYXhXaWR0aCA9IHRvdGFsTWF4V2lkdGg7XG4gICAgICAgIGhlYWRlci50b3RhbEZsZXhXaWR0aCA9IHRvdGFsRmxleFdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyLnRvdGFsTWluV2lkdGggPSBoZWFkZXIubWluV2lkdGg7XG4gICAgICAgIGhlYWRlci50b3RhbFdpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgoaGVhZGVyLm1pbldpZHRoLCBoZWFkZXIud2lkdGgpLCBoZWFkZXIubWF4V2lkdGgpO1xuICAgICAgICBoZWFkZXIudG90YWxNYXhXaWR0aCA9IGhlYWRlci5tYXhXaWR0aDtcbiAgICAgICAgaGVhZGVyLnRvdGFsRmxleFdpZHRoID0gaGVhZGVyLmNhblJlc2l6ZSA/IGhlYWRlci50b3RhbFdpZHRoIDogMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGhlYWRlci5pc1Zpc2libGUpIHtcbiAgICAgICAgbGVmdCArPSBoZWFkZXIudG90YWxXaWR0aDtcbiAgICAgICAgc3VtVG90YWxNaW5XaWR0aCArPSBoZWFkZXIudG90YWxNaW5XaWR0aDtcbiAgICAgICAgc3VtVG90YWxXaWR0aCArPSBoZWFkZXIudG90YWxXaWR0aDtcbiAgICAgICAgc3VtVG90YWxNYXhXaWR0aCArPSBoZWFkZXIudG90YWxNYXhXaWR0aDtcbiAgICAgICAgc3VtVG90YWxGbGV4V2lkdGggKz0gaGVhZGVyLnRvdGFsRmxleFdpZHRoO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBbc3VtVG90YWxNaW5XaWR0aCwgc3VtVG90YWxXaWR0aCwgc3VtVG90YWxNYXhXaWR0aCwgc3VtVG90YWxGbGV4V2lkdGhdO1xuICB9XG5cbiAgZnVuY3Rpb24gYWNjZXNzUm93c0ZvckNvbHVtbihfcmVmKSB7XG4gICAgdmFyIGRhdGEgPSBfcmVmLmRhdGEsXG4gICAgICAgIHJvd3MgPSBfcmVmLnJvd3MsXG4gICAgICAgIGZsYXRSb3dzID0gX3JlZi5mbGF0Um93cyxcbiAgICAgICAgcm93c0J5SWQgPSBfcmVmLnJvd3NCeUlkLFxuICAgICAgICBjb2x1bW4gPSBfcmVmLmNvbHVtbixcbiAgICAgICAgZ2V0Um93SWQgPSBfcmVmLmdldFJvd0lkLFxuICAgICAgICBnZXRTdWJSb3dzID0gX3JlZi5nZXRTdWJSb3dzLFxuICAgICAgICBhY2Nlc3NWYWx1ZUhvb2tzID0gX3JlZi5hY2Nlc3NWYWx1ZUhvb2tzLFxuICAgICAgICBnZXRJbnN0YW5jZSA9IF9yZWYuZ2V0SW5zdGFuY2U7XG5cbiAgICAvLyBBY2Nlc3MgdGhlIHJvdydzIGRhdGEgY29sdW1uLWJ5LWNvbHVtblxuICAgIC8vIFdlIGRvIGl0IHRoaXMgd2F5IHNvIHdlIGNhbiBpbmNyZW1lbnRhbGx5IGFkZCBtYXRlcmlhbGl6ZWRcbiAgICAvLyBjb2x1bW5zIGFmdGVyIHRoZSBmaXJzdCBwYXNzIGFuZCBhdm9pZCBleGNlc3NpdmUgbG9vcGluZ1xuICAgIHZhciBhY2Nlc3NSb3cgPSBmdW5jdGlvbiBhY2Nlc3NSb3cob3JpZ2luYWxSb3csIHJvd0luZGV4LCBkZXB0aCwgcGFyZW50LCBwYXJlbnRSb3dzKSB7XG4gICAgICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgICAgICBkZXB0aCA9IDA7XG4gICAgICB9XG5cbiAgICAgIC8vIEtlZXAgdGhlIG9yaWdpbmFsIHJlZmVyZW5jZSBhcm91bmRcbiAgICAgIHZhciBvcmlnaW5hbCA9IG9yaWdpbmFsUm93O1xuICAgICAgdmFyIGlkID0gZ2V0Um93SWQob3JpZ2luYWxSb3csIHJvd0luZGV4LCBwYXJlbnQpO1xuICAgICAgdmFyIHJvdyA9IHJvd3NCeUlkW2lkXTsgLy8gSWYgdGhlIHJvdyBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBsZXQncyBtYWtlIGl0XG5cbiAgICAgIGlmICghcm93KSB7XG4gICAgICAgIHJvdyA9IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgb3JpZ2luYWw6IG9yaWdpbmFsLFxuICAgICAgICAgIGluZGV4OiByb3dJbmRleCxcbiAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAgY2VsbHM6IFt7fV0gLy8gVGhpcyBpcyBhIGR1bW15IGNlbGxcblxuICAgICAgICB9OyAvLyBPdmVycmlkZSBjb21tb24gYXJyYXkgZnVuY3Rpb25zIChhbmQgdGhlIGR1bW15IGNlbGwncyBnZXRDZWxsUHJvcHMgZnVuY3Rpb24pXG4gICAgICAgIC8vIHRvIHNob3cgYW4gZXJyb3IgaWYgaXQgaXMgYWNjZXNzZWQgd2l0aG91dCBjYWxsaW5nIHByZXBhcmVSb3dcblxuICAgICAgICByb3cuY2VsbHMubWFwID0gdW5wcmVwYXJlZEFjY2Vzc1dhcm5pbmc7XG4gICAgICAgIHJvdy5jZWxscy5maWx0ZXIgPSB1bnByZXBhcmVkQWNjZXNzV2FybmluZztcbiAgICAgICAgcm93LmNlbGxzLmZvckVhY2ggPSB1bnByZXBhcmVkQWNjZXNzV2FybmluZztcbiAgICAgICAgcm93LmNlbGxzWzBdLmdldENlbGxQcm9wcyA9IHVucHJlcGFyZWRBY2Nlc3NXYXJuaW5nOyAvLyBDcmVhdGUgdGhlIGNlbGxzIGFuZCB2YWx1ZXNcblxuICAgICAgICByb3cudmFsdWVzID0ge307IC8vIFB1c2ggdGhpcyByb3cgaW50byB0aGUgcGFyZW50Um93cyBhcnJheVxuXG4gICAgICAgIHBhcmVudFJvd3MucHVzaChyb3cpOyAvLyBLZWVwIHRyYWNrIG9mIGV2ZXJ5IHJvdyBpbiBhIGZsYXQgYXJyYXlcblxuICAgICAgICBmbGF0Um93cy5wdXNoKHJvdyk7IC8vIEFsc28ga2VlcCB0cmFjayBvZiBldmVyeSByb3cgYnkgaXRzIElEXG5cbiAgICAgICAgcm93c0J5SWRbaWRdID0gcm93OyAvLyBHZXQgdGhlIG9yaWdpbmFsIHN1YnJvd3NcblxuICAgICAgICByb3cub3JpZ2luYWxTdWJSb3dzID0gZ2V0U3ViUm93cyhvcmlnaW5hbFJvdywgcm93SW5kZXgpOyAvLyBUaGVuIHJlY3Vyc2l2ZWx5IGFjY2VzcyB0aGVtXG5cbiAgICAgICAgaWYgKHJvdy5vcmlnaW5hbFN1YlJvd3MpIHtcbiAgICAgICAgICB2YXIgc3ViUm93cyA9IFtdO1xuICAgICAgICAgIHJvdy5vcmlnaW5hbFN1YlJvd3MuZm9yRWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY2Vzc1JvdyhkLCBpLCBkZXB0aCArIDEsIHJvdywgc3ViUm93cyk7XG4gICAgICAgICAgfSk7IC8vIEtlZXAgdGhlIG5ldyBzdWJSb3dzIGFycmF5IG9uIHRoZSByb3dcblxuICAgICAgICAgIHJvdy5zdWJSb3dzID0gc3ViUm93cztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyb3cuc3ViUm93cykge1xuICAgICAgICAvLyBJZiB0aGUgcm93IGV4aXN0cywgdGhlbiBpdCdzIGFscmVhZHkgYmVlbiBhY2Nlc3NlZFxuICAgICAgICAvLyBLZWVwIHJlY3Vyc2luZywgYnV0IGRvbid0IHdvcnJ5IGFib3V0IHBhc3NpbmcgdGhlXG4gICAgICAgIC8vIGFjY3VtbGF0b3IgYXJyYXkgKHRob3NlIHJvd3MgYWxyZWFkeSBleGlzdClcbiAgICAgICAgcm93Lm9yaWdpbmFsU3ViUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGFjY2Vzc1JvdyhkLCBpLCBkZXB0aCArIDEsIHJvdyk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBJZiB0aGUgY29sdW1uIGhhcyBhbiBhY2Nlc3NvciwgdXNlIGl0IHRvIGdldCBhIHZhbHVlXG5cblxuICAgICAgaWYgKGNvbHVtbi5hY2Nlc3Nvcikge1xuICAgICAgICByb3cudmFsdWVzW2NvbHVtbi5pZF0gPSBjb2x1bW4uYWNjZXNzb3Iob3JpZ2luYWxSb3csIHJvd0luZGV4LCByb3csIHBhcmVudFJvd3MsIGRhdGEpO1xuICAgICAgfSAvLyBBbGxvdyBwbHVnaW5zIHRvIG1hbmlwdWxhdGUgdGhlIGNvbHVtbiB2YWx1ZVxuXG5cbiAgICAgIHJvdy52YWx1ZXNbY29sdW1uLmlkXSA9IHJlZHVjZUhvb2tzKGFjY2Vzc1ZhbHVlSG9va3MsIHJvdy52YWx1ZXNbY29sdW1uLmlkXSwge1xuICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgICB9LCB0cnVlKTtcbiAgICB9O1xuXG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChvcmlnaW5hbFJvdywgcm93SW5kZXgpIHtcbiAgICAgIHJldHVybiBhY2Nlc3NSb3cob3JpZ2luYWxSb3csIHJvd0luZGV4LCAwLCB1bmRlZmluZWQsIHJvd3MpO1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aW9ucy5yZXNldEV4cGFuZGVkID0gJ3Jlc2V0RXhwYW5kZWQnO1xuICBhY3Rpb25zLnRvZ2dsZVJvd0V4cGFuZGVkID0gJ3RvZ2dsZVJvd0V4cGFuZGVkJztcbiAgYWN0aW9ucy50b2dnbGVBbGxSb3dzRXhwYW5kZWQgPSAndG9nZ2xlQWxsUm93c0V4cGFuZGVkJztcbiAgdmFyIHVzZUV4cGFuZGVkID0gZnVuY3Rpb24gdXNlRXhwYW5kZWQoaG9va3MpIHtcbiAgICBob29rcy5nZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHNdO1xuICAgIGhvb2tzLmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHNdO1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDEpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkMSk7XG4gICAgaG9va3MucHJlcGFyZVJvdy5wdXNoKHByZXBhcmVSb3cpO1xuICB9O1xuICB1c2VFeHBhbmRlZC5wbHVnaW5OYW1lID0gJ3VzZUV4cGFuZGVkJztcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgaW5zdGFuY2UudG9nZ2xlQWxsUm93c0V4cGFuZGVkKCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBBbGwgUm93cyBFeHBhbmRlZCdcbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgcm93ID0gX3JlZjIucm93O1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgIHJvdy50b2dnbGVSb3dFeHBhbmRlZCgpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgdGl0bGU6ICdUb2dnbGUgUm93IEV4cGFuZGVkJ1xuICAgIH1dO1xuICB9OyAvLyBSZWR1Y2VyXG5cblxuICBmdW5jdGlvbiByZWR1Y2VyJDEoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgZXhwYW5kZWQ6IHt9XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0RXhwYW5kZWQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZXhwYW5kZWQ6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5leHBhbmRlZCB8fCB7fVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NFeHBhbmRlZCkge1xuICAgICAgdmFyIHZhbHVlID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIGlzQWxsUm93c0V4cGFuZGVkID0gaW5zdGFuY2UuaXNBbGxSb3dzRXhwYW5kZWQsXG4gICAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZDtcbiAgICAgIHZhciBleHBhbmRBbGwgPSB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiAhaXNBbGxSb3dzRXhwYW5kZWQ7XG5cbiAgICAgIGlmIChleHBhbmRBbGwpIHtcbiAgICAgICAgdmFyIGV4cGFuZGVkID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHJvd3NCeUlkKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3dJZCkge1xuICAgICAgICAgIGV4cGFuZGVkW3Jvd0lkXSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGV4cGFuZGVkOiB7fVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZVJvd0V4cGFuZGVkKSB7XG4gICAgICB2YXIgaWQgPSBhY3Rpb24uaWQsXG4gICAgICAgICAgc2V0RXhwYW5kZWQgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgZXhpc3RzID0gc3RhdGUuZXhwYW5kZWRbaWRdO1xuICAgICAgdmFyIHNob3VsZEV4aXN0ID0gdHlwZW9mIHNldEV4cGFuZGVkICE9PSAndW5kZWZpbmVkJyA/IHNldEV4cGFuZGVkIDogIWV4aXN0cztcblxuICAgICAgaWYgKCFleGlzdHMgJiYgc2hvdWxkRXhpc3QpIHtcbiAgICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZXhwYW5kZWQ6IF9leHRlbmRzKHt9LCBzdGF0ZS5leHBhbmRlZCwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbaWRdID0gdHJ1ZSwgX2V4dGVuZHMyKSlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGV4aXN0cyAmJiAhc2hvdWxkRXhpc3QpIHtcbiAgICAgICAgdmFyIF9zdGF0ZSRleHBhbmRlZCA9IHN0YXRlLmV4cGFuZGVkLFxuICAgICAgICAgICAgXyA9IF9zdGF0ZSRleHBhbmRlZFtpZF0sXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3N0YXRlJGV4cGFuZGVkLCBbaWRdLm1hcChfdG9Qcm9wZXJ0eUtleSkpO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBleHBhbmRlZDogcmVzdFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQxKGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgX2luc3RhbmNlJG1hbnVhbEV4cGFuID0gaW5zdGFuY2UubWFudWFsRXhwYW5kZWRLZXksXG4gICAgICAgIG1hbnVhbEV4cGFuZGVkS2V5ID0gX2luc3RhbmNlJG1hbnVhbEV4cGFuID09PSB2b2lkIDAgPyAnZXhwYW5kZWQnIDogX2luc3RhbmNlJG1hbnVhbEV4cGFuLFxuICAgICAgICBfaW5zdGFuY2UkcGFnaW5hdGVFeHAgPSBpbnN0YW5jZS5wYWdpbmF0ZUV4cGFuZGVkUm93cyxcbiAgICAgICAgcGFnaW5hdGVFeHBhbmRlZFJvd3MgPSBfaW5zdGFuY2UkcGFnaW5hdGVFeHAgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkcGFnaW5hdGVFeHAsXG4gICAgICAgIF9pbnN0YW5jZSRleHBhbmRTdWJSbyA9IGluc3RhbmNlLmV4cGFuZFN1YlJvd3MsXG4gICAgICAgIGV4cGFuZFN1YlJvd3MgPSBfaW5zdGFuY2UkZXhwYW5kU3ViUm8gPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkZXhwYW5kU3ViUm8sXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRFeCA9IGluc3RhbmNlLmF1dG9SZXNldEV4cGFuZGVkLFxuICAgICAgICBhdXRvUmVzZXRFeHBhbmRlZCA9IF9pbnN0YW5jZSRhdXRvUmVzZXRFeCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRFeCxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgcGx1Z2lucyA9IGluc3RhbmNlLnBsdWdpbnMsXG4gICAgICAgIGV4cGFuZGVkID0gaW5zdGFuY2Uuc3RhdGUuZXhwYW5kZWQsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2g7XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VTb3J0QnknLCAndXNlR3JvdXBCeScsICd1c2VQaXZvdENvbHVtbnMnLCAndXNlR2xvYmFsRmlsdGVyJ10sICd1c2VFeHBhbmRlZCcpO1xuICAgIHZhciBnZXRBdXRvUmVzZXRFeHBhbmRlZCA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRFeHBhbmRlZCk7XG4gICAgdmFyIGlzQWxsUm93c0V4cGFuZGVkID0gQm9vbGVhbihPYmplY3Qua2V5cyhyb3dzQnlJZCkubGVuZ3RoICYmIE9iamVjdC5rZXlzKGV4cGFuZGVkKS5sZW5ndGgpO1xuXG4gICAgaWYgKGlzQWxsUm93c0V4cGFuZGVkKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMocm93c0J5SWQpLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiAhZXhwYW5kZWRbaWRdO1xuICAgICAgfSkpIHtcbiAgICAgICAgaXNBbGxSb3dzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IC8vIEJ5cGFzcyBhbnkgZWZmZWN0cyBmcm9tIGZpcmluZyB3aGVuIHRoaXMgY2hhbmdlc1xuXG5cbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRFeHBhbmRlZCgpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0RXhwYW5kZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBkYXRhXSk7XG4gICAgdmFyIHRvZ2dsZVJvd0V4cGFuZGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGlkLCB2YWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZVJvd0V4cGFuZGVkLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHRvZ2dsZUFsbFJvd3NFeHBhbmRlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVBbGxSb3dzRXhwYW5kZWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIGV4cGFuZGVkUm93cyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHBhZ2luYXRlRXhwYW5kZWRSb3dzKSB7XG4gICAgICAgIHJldHVybiBleHBhbmRSb3dzKHJvd3MsIHtcbiAgICAgICAgICBtYW51YWxFeHBhbmRlZEtleTogbWFudWFsRXhwYW5kZWRLZXksXG4gICAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxuICAgICAgICAgIGV4cGFuZFN1YlJvd3M6IGV4cGFuZFN1YlJvd3NcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dzO1xuICAgIH0sIFtwYWdpbmF0ZUV4cGFuZGVkUm93cywgcm93cywgbWFudWFsRXhwYW5kZWRLZXksIGV4cGFuZGVkLCBleHBhbmRTdWJSb3dzXSk7XG4gICAgdmFyIGV4cGFuZGVkRGVwdGggPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmaW5kRXhwYW5kZWREZXB0aChleHBhbmRlZCk7XG4gICAgfSwgW2V4cGFuZGVkXSk7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICB2YXIgZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHByZUV4cGFuZGVkUm93czogcm93cyxcbiAgICAgIGV4cGFuZGVkUm93czogZXhwYW5kZWRSb3dzLFxuICAgICAgcm93czogZXhwYW5kZWRSb3dzLFxuICAgICAgZXhwYW5kZWREZXB0aDogZXhwYW5kZWREZXB0aCxcbiAgICAgIGlzQWxsUm93c0V4cGFuZGVkOiBpc0FsbFJvd3NFeHBhbmRlZCxcbiAgICAgIHRvZ2dsZVJvd0V4cGFuZGVkOiB0b2dnbGVSb3dFeHBhbmRlZCxcbiAgICAgIHRvZ2dsZUFsbFJvd3NFeHBhbmRlZDogdG9nZ2xlQWxsUm93c0V4cGFuZGVkLFxuICAgICAgZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHM6IGdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmVwYXJlUm93KHJvdywgX3JlZjMpIHtcbiAgICB2YXIgZ2V0SG9va3MgPSBfcmVmMy5pbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgaW5zdGFuY2UgPSBfcmVmMy5pbnN0YW5jZTtcblxuICAgIHJvdy50b2dnbGVSb3dFeHBhbmRlZCA9IGZ1bmN0aW9uIChzZXQpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS50b2dnbGVSb3dFeHBhbmRlZChyb3cuaWQsIHNldCk7XG4gICAgfTtcblxuICAgIHJvdy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzLCB7XG4gICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICByb3c6IHJvd1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZEV4cGFuZGVkRGVwdGgoZXhwYW5kZWQpIHtcbiAgICB2YXIgbWF4RGVwdGggPSAwO1xuICAgIE9iamVjdC5rZXlzKGV4cGFuZGVkKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgdmFyIHNwbGl0SWQgPSBpZC5zcGxpdCgnLicpO1xuICAgICAgbWF4RGVwdGggPSBNYXRoLm1heChtYXhEZXB0aCwgc3BsaXRJZC5sZW5ndGgpO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXhEZXB0aDtcbiAgfVxuXG4gIHZhciB0ZXh0ID0gZnVuY3Rpb24gdGV4dChyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcm93cyA9IHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiBTdHJpbmcocm93VmFsdWUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoU3RyaW5nKGZpbHRlclZhbHVlKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByb3dzO1xuICB9O1xuXG4gIHRleHQuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbDtcbiAgfTtcblxuICB2YXIgZXhhY3RUZXh0ID0gZnVuY3Rpb24gZXhhY3RUZXh0KHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIHJvd1ZhbHVlICE9PSB1bmRlZmluZWQgPyBTdHJpbmcocm93VmFsdWUpLnRvTG93ZXJDYXNlKCkgPT09IFN0cmluZyhmaWx0ZXJWYWx1ZSkudG9Mb3dlckNhc2UoKSA6IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBleGFjdFRleHQuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbDtcbiAgfTtcblxuICB2YXIgZXhhY3RUZXh0Q2FzZSA9IGZ1bmN0aW9uIGV4YWN0VGV4dENhc2Uocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgIT09IHVuZGVmaW5lZCA/IFN0cmluZyhyb3dWYWx1ZSkgPT09IFN0cmluZyhmaWx0ZXJWYWx1ZSkgOiB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZXhhY3RUZXh0Q2FzZS5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsO1xuICB9O1xuXG4gIHZhciBpbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIHJvd1ZhbHVlLmluY2x1ZGVzKGZpbHRlclZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGluY2x1ZGVzLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWwgfHwgIXZhbC5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGluY2x1ZGVzQWxsID0gZnVuY3Rpb24gaW5jbHVkZXNBbGwocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgJiYgcm93VmFsdWUubGVuZ3RoICYmIGZpbHRlclZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICByZXR1cm4gcm93VmFsdWUuaW5jbHVkZXModmFsKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBpbmNsdWRlc0FsbC5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsIHx8ICF2YWwubGVuZ3RoO1xuICB9O1xuXG4gIHZhciBpbmNsdWRlc1NvbWUgPSBmdW5jdGlvbiBpbmNsdWRlc1NvbWUocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgJiYgcm93VmFsdWUubGVuZ3RoICYmIGZpbHRlclZhbHVlLnNvbWUoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHJldHVybiByb3dWYWx1ZS5pbmNsdWRlcyh2YWwpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGluY2x1ZGVzU29tZS5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsIHx8ICF2YWwubGVuZ3RoO1xuICB9O1xuXG4gIHZhciBpbmNsdWRlc1ZhbHVlID0gZnVuY3Rpb24gaW5jbHVkZXNWYWx1ZShyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiBmaWx0ZXJWYWx1ZS5pbmNsdWRlcyhyb3dWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBpbmNsdWRlc1ZhbHVlLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWwgfHwgIXZhbC5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGV4YWN0ID0gZnVuY3Rpb24gZXhhY3Qocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgPT09IGZpbHRlclZhbHVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZXhhY3QuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG4gIH07XG5cbiAgdmFyIGVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblxuICAgICAgICByZXR1cm4gcm93VmFsdWUgPT0gZmlsdGVyVmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBlcXVhbHMuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsID09IG51bGw7XG4gIH07XG5cbiAgdmFyIGJldHdlZW4gPSBmdW5jdGlvbiBiZXR3ZWVuKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICB2YXIgX3JlZiA9IGZpbHRlclZhbHVlIHx8IFtdLFxuICAgICAgICBtaW4gPSBfcmVmWzBdLFxuICAgICAgICBtYXggPSBfcmVmWzFdO1xuXG4gICAgbWluID0gdHlwZW9mIG1pbiA9PT0gJ251bWJlcicgPyBtaW4gOiAtSW5maW5pdHk7XG4gICAgbWF4ID0gdHlwZW9mIG1heCA9PT0gJ251bWJlcicgPyBtYXggOiBJbmZpbml0eTtcblxuICAgIGlmIChtaW4gPiBtYXgpIHtcbiAgICAgIHZhciB0ZW1wID0gbWluO1xuICAgICAgbWluID0gbWF4O1xuICAgICAgbWF4ID0gdGVtcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIHJvd1ZhbHVlID49IG1pbiAmJiByb3dWYWx1ZSA8PSBtYXg7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBiZXR3ZWVuLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWwgfHwgdHlwZW9mIHZhbFswXSAhPT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbFsxXSAhPT0gJ251bWJlcic7XG4gIH07XG5cbiAgdmFyIGZpbHRlclR5cGVzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICB0ZXh0OiB0ZXh0LFxuICAgIGV4YWN0VGV4dDogZXhhY3RUZXh0LFxuICAgIGV4YWN0VGV4dENhc2U6IGV4YWN0VGV4dENhc2UsXG4gICAgaW5jbHVkZXM6IGluY2x1ZGVzLFxuICAgIGluY2x1ZGVzQWxsOiBpbmNsdWRlc0FsbCxcbiAgICBpbmNsdWRlc1NvbWU6IGluY2x1ZGVzU29tZSxcbiAgICBpbmNsdWRlc1ZhbHVlOiBpbmNsdWRlc1ZhbHVlLFxuICAgIGV4YWN0OiBleGFjdCxcbiAgICBlcXVhbHM6IGVxdWFscyxcbiAgICBiZXR3ZWVuOiBiZXR3ZWVuXG4gIH0pO1xuXG4gIGFjdGlvbnMucmVzZXRGaWx0ZXJzID0gJ3Jlc2V0RmlsdGVycyc7XG4gIGFjdGlvbnMuc2V0RmlsdGVyID0gJ3NldEZpbHRlcic7XG4gIGFjdGlvbnMuc2V0QWxsRmlsdGVycyA9ICdzZXRBbGxGaWx0ZXJzJztcbiAgdmFyIHVzZUZpbHRlcnMgPSBmdW5jdGlvbiB1c2VGaWx0ZXJzKGhvb2tzKSB7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkMik7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQyKTtcbiAgfTtcbiAgdXNlRmlsdGVycy5wbHVnaW5OYW1lID0gJ3VzZUZpbHRlcnMnO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkMihzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBmaWx0ZXJzOiBbXVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldEZpbHRlcnMpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZmlsdGVyczogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLmZpbHRlcnMgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRGaWx0ZXIpIHtcbiAgICAgIHZhciBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBmaWx0ZXJWYWx1ZSA9IGFjdGlvbi5maWx0ZXJWYWx1ZTtcbiAgICAgIHZhciBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgICB1c2VyRmlsdGVyVHlwZXMgPSBpbnN0YW5jZS5maWx0ZXJUeXBlcztcbiAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbklkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LVRhYmxlOiBDb3VsZCBub3QgZmluZCBhIGNvbHVtbiB3aXRoIGlkOiBcIiArIGNvbHVtbklkKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbHRlck1ldGhvZCA9IGdldEZpbHRlck1ldGhvZChjb2x1bW4uZmlsdGVyLCB1c2VyRmlsdGVyVHlwZXMgfHwge30sIGZpbHRlclR5cGVzKTtcbiAgICAgIHZhciBwcmV2aW91c2ZpbHRlciA9IHN0YXRlLmZpbHRlcnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcbiAgICAgIHZhciBuZXdGaWx0ZXIgPSBmdW5jdGlvbmFsVXBkYXRlKGZpbHRlclZhbHVlLCBwcmV2aW91c2ZpbHRlciAmJiBwcmV2aW91c2ZpbHRlci52YWx1ZSk7IC8vXG5cbiAgICAgIGlmIChzaG91bGRBdXRvUmVtb3ZlRmlsdGVyKGZpbHRlck1ldGhvZC5hdXRvUmVtb3ZlLCBuZXdGaWx0ZXIsIGNvbHVtbikpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5pZCAhPT0gY29sdW1uSWQ7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2aW91c2ZpbHRlcikge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmIChkLmlkID09PSBjb2x1bW5JZCkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBjb2x1bW5JZCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3RmlsdGVyXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGZpbHRlcnM6IFtdLmNvbmNhdChzdGF0ZS5maWx0ZXJzLCBbe1xuICAgICAgICAgIGlkOiBjb2x1bW5JZCxcbiAgICAgICAgICB2YWx1ZTogbmV3RmlsdGVyXG4gICAgICAgIH1dKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldEFsbEZpbHRlcnMpIHtcbiAgICAgIHZhciBmaWx0ZXJzID0gYWN0aW9uLmZpbHRlcnM7XG4gICAgICB2YXIgX2FsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICAgIF91c2VyRmlsdGVyVHlwZXMgPSBpbnN0YW5jZS5maWx0ZXJUeXBlcztcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgLy8gRmlsdGVyIG91dCB1bmRlZmluZWQgdmFsdWVzXG4gICAgICAgIGZpbHRlcnM6IGZ1bmN0aW9uYWxVcGRhdGUoZmlsdGVycywgc3RhdGUuZmlsdGVycykuZmlsdGVyKGZ1bmN0aW9uIChmaWx0ZXIpIHtcbiAgICAgICAgICB2YXIgY29sdW1uID0gX2FsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuaWQgPT09IGZpbHRlci5pZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBmaWx0ZXJNZXRob2QgPSBnZXRGaWx0ZXJNZXRob2QoY29sdW1uLmZpbHRlciwgX3VzZXJGaWx0ZXJUeXBlcyB8fCB7fSwgZmlsdGVyVHlwZXMpO1xuXG4gICAgICAgICAgaWYgKHNob3VsZEF1dG9SZW1vdmVGaWx0ZXIoZmlsdGVyTWV0aG9kLmF1dG9SZW1vdmUsIGZpbHRlci52YWx1ZSwgY29sdW1uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkMihpbnN0YW5jZSkge1xuICAgIHZhciBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIGZsYXRSb3dzID0gaW5zdGFuY2UuZmxhdFJvd3MsXG4gICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICB1c2VyRmlsdGVyVHlwZXMgPSBpbnN0YW5jZS5maWx0ZXJUeXBlcyxcbiAgICAgICAgbWFudWFsRmlsdGVycyA9IGluc3RhbmNlLm1hbnVhbEZpbHRlcnMsXG4gICAgICAgIF9pbnN0YW5jZSRkZWZhdWx0Q2FuRiA9IGluc3RhbmNlLmRlZmF1bHRDYW5GaWx0ZXIsXG4gICAgICAgIGRlZmF1bHRDYW5GaWx0ZXIgPSBfaW5zdGFuY2UkZGVmYXVsdENhbkYgPT09IHZvaWQgMCA/IGZhbHNlIDogX2luc3RhbmNlJGRlZmF1bHRDYW5GLFxuICAgICAgICBkaXNhYmxlRmlsdGVycyA9IGluc3RhbmNlLmRpc2FibGVGaWx0ZXJzLFxuICAgICAgICBmaWx0ZXJzID0gaW5zdGFuY2Uuc3RhdGUuZmlsdGVycyxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldEZpID0gaW5zdGFuY2UuYXV0b1Jlc2V0RmlsdGVycyxcbiAgICAgICAgYXV0b1Jlc2V0RmlsdGVycyA9IF9pbnN0YW5jZSRhdXRvUmVzZXRGaSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRGaTtcbiAgICB2YXIgc2V0RmlsdGVyID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNvbHVtbklkLCBmaWx0ZXJWYWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldEZpbHRlcixcbiAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICBmaWx0ZXJWYWx1ZTogZmlsdGVyVmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBzZXRBbGxGaWx0ZXJzID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGZpbHRlcnMpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRBbGxGaWx0ZXJzLFxuICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICBhbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgdmFyIGlkID0gY29sdW1uLmlkLFxuICAgICAgICAgIGFjY2Vzc29yID0gY29sdW1uLmFjY2Vzc29yLFxuICAgICAgICAgIGNvbHVtbkRlZmF1bHRDYW5GaWx0ZXIgPSBjb2x1bW4uZGVmYXVsdENhbkZpbHRlcixcbiAgICAgICAgICBjb2x1bW5EaXNhYmxlRmlsdGVycyA9IGNvbHVtbi5kaXNhYmxlRmlsdGVyczsgLy8gRGV0ZXJtaW5lIGlmIGEgY29sdW1uIGlzIGZpbHRlcmFibGVcblxuICAgICAgY29sdW1uLmNhbkZpbHRlciA9IGFjY2Vzc29yID8gZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbkRpc2FibGVGaWx0ZXJzID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIGRpc2FibGVGaWx0ZXJzID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIHRydWUpIDogZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbkRlZmF1bHRDYW5GaWx0ZXIsIGRlZmF1bHRDYW5GaWx0ZXIsIGZhbHNlKTsgLy8gUHJvdmlkZSB0aGUgY29sdW1uIGEgd2F5IG9mIHVwZGF0aW5nIHRoZSBmaWx0ZXIgdmFsdWVcblxuICAgICAgY29sdW1uLnNldEZpbHRlciA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHNldEZpbHRlcihjb2x1bW4uaWQsIHZhbCk7XG4gICAgICB9OyAvLyBQcm92aWRlIHRoZSBjdXJyZW50IGZpbHRlciB2YWx1ZSB0byB0aGUgY29sdW1uIGZvclxuICAgICAgLy8gY29udmVuaWVuY2VcblxuXG4gICAgICB2YXIgZm91bmQgPSBmaWx0ZXJzLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGlkO1xuICAgICAgfSk7XG4gICAgICBjb2x1bW4uZmlsdGVyVmFsdWUgPSBmb3VuZCAmJiBmb3VuZC52YWx1ZTtcbiAgICB9KTtcblxuICAgIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1hbnVhbEZpbHRlcnMgfHwgIWZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbHRlcmVkRmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciBmaWx0ZXJlZFJvd3NCeUlkID0ge307IC8vIEZpbHRlcnMgdG9wIGxldmVsIGFuZCBuZXN0ZWQgcm93c1xuXG4gICAgICB2YXIgZmlsdGVyUm93cyA9IGZ1bmN0aW9uIGZpbHRlclJvd3Mocm93cywgZGVwdGgpIHtcbiAgICAgICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHtcbiAgICAgICAgICBkZXB0aCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlsdGVyZWRSb3dzID0gcm93cztcbiAgICAgICAgZmlsdGVyZWRSb3dzID0gZmlsdGVycy5yZWR1Y2UoZnVuY3Rpb24gKGZpbHRlcmVkU29GYXIsIF9yZWYpIHtcbiAgICAgICAgICB2YXIgY29sdW1uSWQgPSBfcmVmLmlkLFxuICAgICAgICAgICAgICBmaWx0ZXJWYWx1ZSA9IF9yZWYudmFsdWU7XG4gICAgICAgICAgLy8gRmluZCB0aGUgZmlsdGVycyBjb2x1bW5cbiAgICAgICAgICB2YXIgY29sdW1uID0gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoIWNvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkU29GYXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICBjb2x1bW4ucHJlRmlsdGVyZWRSb3dzID0gZmlsdGVyZWRTb0ZhcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZmlsdGVyTWV0aG9kID0gZ2V0RmlsdGVyTWV0aG9kKGNvbHVtbi5maWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcyB8fCB7fSwgZmlsdGVyVHlwZXMpO1xuXG4gICAgICAgICAgaWYgKCFmaWx0ZXJNZXRob2QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBmaW5kIGEgdmFsaWQgJ2NvbHVtbi5maWx0ZXInIGZvciBjb2x1bW4gd2l0aCB0aGUgSUQ6IFwiICsgY29sdW1uLmlkICsgXCIuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkU29GYXI7XG4gICAgICAgICAgfSAvLyBQYXNzIHRoZSByb3dzLCBpZCwgZmlsdGVyVmFsdWUgYW5kIGNvbHVtbiB0byB0aGUgZmlsdGVyTWV0aG9kXG4gICAgICAgICAgLy8gdG8gZ2V0IHRoZSBmaWx0ZXJlZCByb3dzIGJhY2tcblxuXG4gICAgICAgICAgY29sdW1uLmZpbHRlcmVkUm93cyA9IGZpbHRlck1ldGhvZChmaWx0ZXJlZFNvRmFyLCBbY29sdW1uSWRdLCBmaWx0ZXJWYWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIGNvbHVtbi5maWx0ZXJlZFJvd3M7XG4gICAgICAgIH0sIHJvd3MpOyAvLyBBcHBseSB0aGUgZmlsdGVyIHRvIGFueSBzdWJSb3dzXG4gICAgICAgIC8vIFdlIHRlY2huaWNhbGx5IGNvdWxkIGRvIHRoaXMgcmVjdXJzaXZlbHkgaW4gdGhlIGFib3ZlIGxvb3AsXG4gICAgICAgIC8vIGJ1dCB0aGF0IHdvdWxkIHNldmVyZWx5IGhpbmRlciB0aGUgQVBJIGZvciB0aGUgdXNlciwgc2luY2UgdGhleVxuICAgICAgICAvLyB3b3VsZCBiZSByZXF1aXJlZCB0byBkbyB0aGF0IHJlY3Vyc2lvbiBpbiBzb21lIHNjZW5hcmlvc1xuXG4gICAgICAgIGZpbHRlcmVkUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICBmaWx0ZXJlZEZsYXRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgICBmaWx0ZXJlZFJvd3NCeUlkW3Jvdy5pZF0gPSByb3c7XG5cbiAgICAgICAgICBpZiAoIXJvdy5zdWJSb3dzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm93LnN1YlJvd3MgPSByb3cuc3ViUm93cyAmJiByb3cuc3ViUm93cy5sZW5ndGggPiAwID8gZmlsdGVyUm93cyhyb3cuc3ViUm93cywgZGVwdGggKyAxKSA6IHJvdy5zdWJSb3dzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cztcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBbZmlsdGVyUm93cyhyb3dzKSwgZmlsdGVyZWRGbGF0Um93cywgZmlsdGVyZWRSb3dzQnlJZF07XG4gICAgfSwgW21hbnVhbEZpbHRlcnMsIGZpbHRlcnMsIHJvd3MsIGZsYXRSb3dzLCByb3dzQnlJZCwgYWxsQ29sdW1ucywgdXNlckZpbHRlclR5cGVzXSksXG4gICAgICAgIGZpbHRlcmVkUm93cyA9IF9SZWFjdCR1c2VNZW1vWzBdLFxuICAgICAgICBmaWx0ZXJlZEZsYXRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMV0sXG4gICAgICAgIGZpbHRlcmVkUm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1syXTtcblxuICAgIFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgLy8gTm93IHRoYXQgZWFjaCBmaWx0ZXJlZCBjb2x1bW4gaGFzIGl0J3MgcGFydGlhbGx5IGZpbHRlcmVkIHJvd3MsXG4gICAgICAvLyBsZXRzIGFzc2lnbiB0aGUgZmluYWwgZmlsdGVyZWQgcm93cyB0byBhbGwgb2YgdGhlIG90aGVyIGNvbHVtbnNcbiAgICAgIHZhciBub25GaWx0ZXJlZENvbHVtbnMgPSBhbGxDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHJldHVybiAhZmlsdGVycy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbi5pZDtcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gVGhpcyBlc3NlbnRpYWxseSBlbmFibGVzIGZhY2V0ZWQgZmlsdGVyIG9wdGlvbnMgdG8gYmUgYnVpbHQgZWFzaWx5XG4gICAgICAvLyB1c2luZyBldmVyeSBjb2x1bW4ncyBwcmVGaWx0ZXJlZFJvd3MgdmFsdWVcblxuICAgICAgbm9uRmlsdGVyZWRDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICBjb2x1bW4ucHJlRmlsdGVyZWRSb3dzID0gZmlsdGVyZWRSb3dzO1xuICAgICAgICBjb2x1bW4uZmlsdGVyZWRSb3dzID0gZmlsdGVyZWRSb3dzO1xuICAgICAgfSk7XG4gICAgfSwgW2ZpbHRlcmVkUm93cywgZmlsdGVycywgYWxsQ29sdW1uc10pO1xuICAgIHZhciBnZXRBdXRvUmVzZXRGaWx0ZXJzID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldEZpbHRlcnMpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEZpbHRlcnMoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldEZpbHRlcnNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBtYW51YWxGaWx0ZXJzID8gbnVsbCA6IGRhdGFdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwcmVGaWx0ZXJlZFJvd3M6IHJvd3MsXG4gICAgICBwcmVGaWx0ZXJlZEZsYXRSb3dzOiBmbGF0Um93cyxcbiAgICAgIHByZUZpbHRlcmVkUm93c0J5SWQ6IHJvd3NCeUlkLFxuICAgICAgZmlsdGVyZWRSb3dzOiBmaWx0ZXJlZFJvd3MsXG4gICAgICBmaWx0ZXJlZEZsYXRSb3dzOiBmaWx0ZXJlZEZsYXRSb3dzLFxuICAgICAgZmlsdGVyZWRSb3dzQnlJZDogZmlsdGVyZWRSb3dzQnlJZCxcbiAgICAgIHJvd3M6IGZpbHRlcmVkUm93cyxcbiAgICAgIGZsYXRSb3dzOiBmaWx0ZXJlZEZsYXRSb3dzLFxuICAgICAgcm93c0J5SWQ6IGZpbHRlcmVkUm93c0J5SWQsXG4gICAgICBzZXRGaWx0ZXI6IHNldEZpbHRlcixcbiAgICAgIHNldEFsbEZpbHRlcnM6IHNldEFsbEZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGlvbnMucmVzZXRHbG9iYWxGaWx0ZXIgPSAncmVzZXRHbG9iYWxGaWx0ZXInO1xuICBhY3Rpb25zLnNldEdsb2JhbEZpbHRlciA9ICdzZXRHbG9iYWxGaWx0ZXInO1xuICB2YXIgdXNlR2xvYmFsRmlsdGVyID0gZnVuY3Rpb24gdXNlR2xvYmFsRmlsdGVyKGhvb2tzKSB7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkMyk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQzKTtcbiAgfTtcbiAgdXNlR2xvYmFsRmlsdGVyLnBsdWdpbk5hbWUgPSAndXNlR2xvYmFsRmlsdGVyJztcblxuICBmdW5jdGlvbiByZWR1Y2VyJDMoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRHbG9iYWxGaWx0ZXIpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZ2xvYmFsRmlsdGVyOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuZ2xvYmFsRmlsdGVyIHx8IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldEdsb2JhbEZpbHRlcikge1xuICAgICAgdmFyIGZpbHRlclZhbHVlID0gYWN0aW9uLmZpbHRlclZhbHVlO1xuICAgICAgdmFyIHVzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLnVzZXJGaWx0ZXJUeXBlcztcbiAgICAgIHZhciBmaWx0ZXJNZXRob2QgPSBnZXRGaWx0ZXJNZXRob2QoaW5zdGFuY2UuZ2xvYmFsRmlsdGVyLCB1c2VyRmlsdGVyVHlwZXMgfHwge30sIGZpbHRlclR5cGVzKTtcbiAgICAgIHZhciBuZXdGaWx0ZXIgPSBmdW5jdGlvbmFsVXBkYXRlKGZpbHRlclZhbHVlLCBzdGF0ZS5nbG9iYWxGaWx0ZXIpOyAvL1xuXG4gICAgICBpZiAoc2hvdWxkQXV0b1JlbW92ZUZpbHRlcihmaWx0ZXJNZXRob2QuYXV0b1JlbW92ZSwgbmV3RmlsdGVyKSkge1xuICAgICAgICB2YXIgZ2xvYmFsRmlsdGVyID0gc3RhdGUuZ2xvYmFsRmlsdGVyLFxuICAgICAgICAgICAgc3RhdGVXaXRob3V0R2xvYmFsRmlsdGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc3RhdGUsIFtcImdsb2JhbEZpbHRlclwiXSk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlV2l0aG91dEdsb2JhbEZpbHRlcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBnbG9iYWxGaWx0ZXI6IG5ld0ZpbHRlclxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkMyhpbnN0YW5jZSkge1xuICAgIHZhciBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIGZsYXRSb3dzID0gaW5zdGFuY2UuZmxhdFJvd3MsXG4gICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICB1c2VyRmlsdGVyVHlwZXMgPSBpbnN0YW5jZS5maWx0ZXJUeXBlcyxcbiAgICAgICAgZ2xvYmFsRmlsdGVyID0gaW5zdGFuY2UuZ2xvYmFsRmlsdGVyLFxuICAgICAgICBtYW51YWxHbG9iYWxGaWx0ZXIgPSBpbnN0YW5jZS5tYW51YWxHbG9iYWxGaWx0ZXIsXG4gICAgICAgIGdsb2JhbEZpbHRlclZhbHVlID0gaW5zdGFuY2Uuc3RhdGUuZ2xvYmFsRmlsdGVyLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0R2wgPSBpbnN0YW5jZS5hdXRvUmVzZXRHbG9iYWxGaWx0ZXIsXG4gICAgICAgIGF1dG9SZXNldEdsb2JhbEZpbHRlciA9IF9pbnN0YW5jZSRhdXRvUmVzZXRHbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRHbCxcbiAgICAgICAgZGlzYWJsZUdsb2JhbEZpbHRlciA9IGluc3RhbmNlLmRpc2FibGVHbG9iYWxGaWx0ZXI7XG4gICAgdmFyIHNldEdsb2JhbEZpbHRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChmaWx0ZXJWYWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldEdsb2JhbEZpbHRlcixcbiAgICAgICAgZmlsdGVyVmFsdWU6IGZpbHRlclZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTsgLy8gVE9ETzogQ3JlYXRlIGEgZmlsdGVyIGNhY2hlIGZvciBpbmNyZW1lbnRhbCBoaWdoIHNwZWVkIG11bHRpLWZpbHRlcmluZ1xuICAgIC8vIFRoaXMgZ2V0cyBwcmV0dHkgY29tcGxpY2F0ZWQgcHJldHR5IGZhc3QsIHNpbmNlIHlvdSBoYXZlIHRvIG1haW50YWluIGFcbiAgICAvLyBjYWNoZSBmb3IgZWFjaCByb3cgZ3JvdXAgKHRvcC1sZXZlbCByb3dzLCBhbmQgZWFjaCByb3cncyByZWN1cnNpdmUgc3Vicm93cylcbiAgICAvLyBUaGlzIHdvdWxkIG1ha2UgbXVsdGktZmlsdGVyaW5nIGEgbG90IGZhc3RlciB0aG91Z2guIFRvbyBmYXI/XG5cbiAgICB2YXIgX1JlYWN0JHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtYW51YWxHbG9iYWxGaWx0ZXIgfHwgdHlwZW9mIGdsb2JhbEZpbHRlclZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gW3Jvd3MsIGZsYXRSb3dzLCByb3dzQnlJZF07XG4gICAgICB9XG5cbiAgICAgIHZhciBmaWx0ZXJlZEZsYXRSb3dzID0gW107XG4gICAgICB2YXIgZmlsdGVyZWRSb3dzQnlJZCA9IHt9O1xuICAgICAgdmFyIGZpbHRlck1ldGhvZCA9IGdldEZpbHRlck1ldGhvZChnbG9iYWxGaWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcyB8fCB7fSwgZmlsdGVyVHlwZXMpO1xuXG4gICAgICBpZiAoIWZpbHRlck1ldGhvZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3QgZmluZCBhIHZhbGlkICdnbG9iYWxGaWx0ZXInIG9wdGlvbi5cIik7XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgICAgfVxuXG4gICAgICBhbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICB2YXIgY29sdW1uRGlzYWJsZUdsb2JhbEZpbHRlciA9IGNvbHVtbi5kaXNhYmxlR2xvYmFsRmlsdGVyO1xuICAgICAgICBjb2x1bW4uY2FuRmlsdGVyID0gZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbkRpc2FibGVHbG9iYWxGaWx0ZXIgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZUdsb2JhbEZpbHRlciA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGZpbHRlcmFibGVDb2x1bW5zID0gYWxsQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGMuY2FuRmlsdGVyID09PSB0cnVlO1xuICAgICAgfSk7IC8vIEZpbHRlcnMgdG9wIGxldmVsIGFuZCBuZXN0ZWQgcm93c1xuXG4gICAgICB2YXIgZmlsdGVyUm93cyA9IGZ1bmN0aW9uIGZpbHRlclJvd3MoZmlsdGVyZWRSb3dzKSB7XG4gICAgICAgIGZpbHRlcmVkUm93cyA9IGZpbHRlck1ldGhvZChmaWx0ZXJlZFJvd3MsIGZpbHRlcmFibGVDb2x1bW5zLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkO1xuICAgICAgICB9KSwgZ2xvYmFsRmlsdGVyVmFsdWUpO1xuICAgICAgICBmaWx0ZXJlZFJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgZmlsdGVyZWRGbGF0Um93cy5wdXNoKHJvdyk7XG4gICAgICAgICAgZmlsdGVyZWRSb3dzQnlJZFtyb3cuaWRdID0gcm93O1xuICAgICAgICAgIHJvdy5zdWJSb3dzID0gcm93LnN1YlJvd3MgJiYgcm93LnN1YlJvd3MubGVuZ3RoID8gZmlsdGVyUm93cyhyb3cuc3ViUm93cykgOiByb3cuc3ViUm93cztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFJvd3M7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gW2ZpbHRlclJvd3Mocm93cyksIGZpbHRlcmVkRmxhdFJvd3MsIGZpbHRlcmVkUm93c0J5SWRdO1xuICAgIH0sIFttYW51YWxHbG9iYWxGaWx0ZXIsIGdsb2JhbEZpbHRlclZhbHVlLCBnbG9iYWxGaWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcywgYWxsQ29sdW1ucywgcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkLCBkaXNhYmxlR2xvYmFsRmlsdGVyXSksXG4gICAgICAgIGdsb2JhbEZpbHRlcmVkUm93cyA9IF9SZWFjdCR1c2VNZW1vWzBdLFxuICAgICAgICBnbG9iYWxGaWx0ZXJlZEZsYXRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMV0sXG4gICAgICAgIGdsb2JhbEZpbHRlcmVkUm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1syXTtcblxuICAgIHZhciBnZXRBdXRvUmVzZXRHbG9iYWxGaWx0ZXIgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0R2xvYmFsRmlsdGVyKTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRHbG9iYWxGaWx0ZXIoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldEdsb2JhbEZpbHRlclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIG1hbnVhbEdsb2JhbEZpbHRlciA/IG51bGwgOiBkYXRhXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcHJlR2xvYmFsRmlsdGVyZWRSb3dzOiByb3dzLFxuICAgICAgcHJlR2xvYmFsRmlsdGVyZWRGbGF0Um93czogZmxhdFJvd3MsXG4gICAgICBwcmVHbG9iYWxGaWx0ZXJlZFJvd3NCeUlkOiByb3dzQnlJZCxcbiAgICAgIGdsb2JhbEZpbHRlcmVkUm93czogZ2xvYmFsRmlsdGVyZWRSb3dzLFxuICAgICAgZ2xvYmFsRmlsdGVyZWRGbGF0Um93czogZ2xvYmFsRmlsdGVyZWRGbGF0Um93cyxcbiAgICAgIGdsb2JhbEZpbHRlcmVkUm93c0J5SWQ6IGdsb2JhbEZpbHRlcmVkUm93c0J5SWQsXG4gICAgICByb3dzOiBnbG9iYWxGaWx0ZXJlZFJvd3MsXG4gICAgICBmbGF0Um93czogZ2xvYmFsRmlsdGVyZWRGbGF0Um93cyxcbiAgICAgIHJvd3NCeUlkOiBnbG9iYWxGaWx0ZXJlZFJvd3NCeUlkLFxuICAgICAgc2V0R2xvYmFsRmlsdGVyOiBzZXRHbG9iYWxGaWx0ZXIsXG4gICAgICBkaXNhYmxlR2xvYmFsRmlsdGVyOiBkaXNhYmxlR2xvYmFsRmlsdGVyXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdW0odmFsdWVzLCBhZ2dyZWdhdGVkVmFsdWVzKSB7XG4gICAgLy8gSXQncyBmYXN0ZXIgdG8ganVzdCBhZGQgdGhlIGFnZ3JlZ2F0aW9ucyB0b2dldGhlciBpbnN0ZWFkIG9mXG4gICAgLy8gcHJvY2VzcyBsZWFmIG5vZGVzIGluZGl2aWR1YWxseVxuICAgIHJldHVybiBhZ2dyZWdhdGVkVmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoc3VtLCBuZXh0KSB7XG4gICAgICByZXR1cm4gc3VtICsgKHR5cGVvZiBuZXh0ID09PSAnbnVtYmVyJyA/IG5leHQgOiAwKTtcbiAgICB9LCAwKTtcbiAgfVxuICBmdW5jdGlvbiBtaW4odmFsdWVzKSB7XG4gICAgdmFyIG1pbiA9IHZhbHVlc1swXSB8fCAwO1xuICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBmdW5jdGlvbiBtYXgodmFsdWVzKSB7XG4gICAgdmFyIG1heCA9IHZhbHVlc1swXSB8fCAwO1xuICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuICBmdW5jdGlvbiBtaW5NYXgodmFsdWVzKSB7XG4gICAgdmFyIG1pbiA9IHZhbHVlc1swXSB8fCAwO1xuICAgIHZhciBtYXggPSB2YWx1ZXNbMF0gfHwgMDtcbiAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUpO1xuICAgICAgICBtYXggPSBNYXRoLm1heChtYXgsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWluICsgXCIuLlwiICsgbWF4O1xuICB9XG4gIGZ1bmN0aW9uIGF2ZXJhZ2UodmFsdWVzKSB7XG4gICAgcmV0dXJuIHN1bShudWxsLCB2YWx1ZXMpIC8gdmFsdWVzLmxlbmd0aDtcbiAgfVxuICBmdW5jdGlvbiBtZWRpYW4odmFsdWVzKSB7XG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWlkID0gTWF0aC5mbG9vcih2YWx1ZXMubGVuZ3RoIC8gMik7XG4gICAgdmFyIG51bXMgPSBbXS5jb25jYXQodmFsdWVzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlcy5sZW5ndGggJSAyICE9PSAwID8gbnVtc1ttaWRdIDogKG51bXNbbWlkIC0gMV0gKyBudW1zW21pZF0pIC8gMjtcbiAgfVxuICBmdW5jdGlvbiB1bmlxdWUodmFsdWVzKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldCh2YWx1ZXMpLnZhbHVlcygpKTtcbiAgfVxuICBmdW5jdGlvbiB1bmlxdWVDb3VudCh2YWx1ZXMpIHtcbiAgICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpLnNpemU7XG4gIH1cbiAgZnVuY3Rpb24gY291bnQodmFsdWVzKSB7XG4gICAgcmV0dXJuIHZhbHVlcy5sZW5ndGg7XG4gIH1cblxuICB2YXIgYWdncmVnYXRpb25zID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBzdW06IHN1bSxcbiAgICBtaW46IG1pbixcbiAgICBtYXg6IG1heCxcbiAgICBtaW5NYXg6IG1pbk1heCxcbiAgICBhdmVyYWdlOiBhdmVyYWdlLFxuICAgIG1lZGlhbjogbWVkaWFuLFxuICAgIHVuaXF1ZTogdW5pcXVlLFxuICAgIHVuaXF1ZUNvdW50OiB1bmlxdWVDb3VudCxcbiAgICBjb3VudDogY291bnRcbiAgfSk7XG5cbiAgdmFyIGVtcHR5QXJyYXkgPSBbXTtcbiAgdmFyIGVtcHR5T2JqZWN0ID0ge307IC8vIEFjdGlvbnNcblxuICBhY3Rpb25zLnJlc2V0R3JvdXBCeSA9ICdyZXNldEdyb3VwQnknO1xuICBhY3Rpb25zLnNldEdyb3VwQnkgPSAnc2V0R3JvdXBCeSc7XG4gIGFjdGlvbnMudG9nZ2xlR3JvdXBCeSA9ICd0b2dnbGVHcm91cEJ5JztcbiAgdmFyIHVzZUdyb3VwQnkgPSBmdW5jdGlvbiB1c2VHcm91cEJ5KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0R3JvdXBCeVRvZ2dsZVByb3BzID0gW2RlZmF1bHRHZXRHcm91cEJ5VG9nZ2xlUHJvcHNdO1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDQpO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zRGVwcy5wdXNoKGZ1bmN0aW9uIChkZXBzLCBfcmVmKSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChkZXBzLCBbaW5zdGFuY2Uuc3RhdGUuZ3JvdXBCeV0pO1xuICAgIH0pO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zLnB1c2godmlzaWJsZUNvbHVtbnMpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkNCk7XG4gICAgaG9va3MucHJlcGFyZVJvdy5wdXNoKHByZXBhcmVSb3ckMSk7XG4gIH07XG4gIHVzZUdyb3VwQnkucGx1Z2luTmFtZSA9ICd1c2VHcm91cEJ5JztcblxuICB2YXIgZGVmYXVsdEdldEdyb3VwQnlUb2dnbGVQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRHcm91cEJ5VG9nZ2xlUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIGhlYWRlciA9IF9yZWYyLmhlYWRlcjtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNsaWNrOiBoZWFkZXIuY2FuR3JvdXBCeSA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgICBoZWFkZXIudG9nZ2xlR3JvdXBCeSgpO1xuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogaGVhZGVyLmNhbkdyb3VwQnkgPyAncG9pbnRlcicgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBHcm91cEJ5J1xuICAgIH1dO1xuICB9OyAvLyBSZWR1Y2VyXG5cblxuICBmdW5jdGlvbiByZWR1Y2VyJDQoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgZ3JvdXBCeTogW11cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRHcm91cEJ5KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGdyb3VwQnk6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5ncm91cEJ5IHx8IFtdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0R3JvdXBCeSkge1xuICAgICAgdmFyIHZhbHVlID0gYWN0aW9uLnZhbHVlO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBncm91cEJ5OiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUdyb3VwQnkpIHtcbiAgICAgIHZhciBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBzZXRHcm91cEJ5ID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIHJlc29sdmVkR3JvdXBCeSA9IHR5cGVvZiBzZXRHcm91cEJ5ICE9PSAndW5kZWZpbmVkJyA/IHNldEdyb3VwQnkgOiAhc3RhdGUuZ3JvdXBCeS5pbmNsdWRlcyhjb2x1bW5JZCk7XG5cbiAgICAgIGlmIChyZXNvbHZlZEdyb3VwQnkpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGdyb3VwQnk6IFtdLmNvbmNhdChzdGF0ZS5ncm91cEJ5LCBbY29sdW1uSWRdKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBncm91cEJ5OiBzdGF0ZS5ncm91cEJ5LmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkICE9PSBjb2x1bW5JZDtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZpc2libGVDb2x1bW5zKGNvbHVtbnMsIF9yZWYzKSB7XG4gICAgdmFyIGdyb3VwQnkgPSBfcmVmMy5pbnN0YW5jZS5zdGF0ZS5ncm91cEJ5O1xuICAgIC8vIFNvcnQgZ3JvdXBlZCBjb2x1bW5zIHRvIHRoZSBzdGFydCBvZiB0aGUgY29sdW1uIGxpc3RcbiAgICAvLyBiZWZvcmUgdGhlIGhlYWRlcnMgYXJlIGJ1aWx0XG4gICAgdmFyIGdyb3VwQnlDb2x1bW5zID0gZ3JvdXBCeS5tYXAoZnVuY3Rpb24gKGcpIHtcbiAgICAgIHJldHVybiBjb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICByZXR1cm4gY29sLmlkID09PSBnO1xuICAgICAgfSk7XG4gICAgfSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIHZhciBub25Hcm91cEJ5Q29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgIHJldHVybiAhZ3JvdXBCeS5pbmNsdWRlcyhjb2wuaWQpO1xuICAgIH0pO1xuICAgIGNvbHVtbnMgPSBbXS5jb25jYXQoZ3JvdXBCeUNvbHVtbnMsIG5vbkdyb3VwQnlDb2x1bW5zKTtcbiAgICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgY29sdW1uLmlzR3JvdXBlZCA9IGdyb3VwQnkuaW5jbHVkZXMoY29sdW1uLmlkKTtcbiAgICAgIGNvbHVtbi5ncm91cGVkSW5kZXggPSBncm91cEJ5LmluZGV4T2YoY29sdW1uLmlkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIHZhciBkZWZhdWx0VXNlckFnZ3JlZ2F0aW9ucyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDQoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICBmbGF0Um93cyA9IGluc3RhbmNlLmZsYXRSb3dzLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgZmxhdEhlYWRlcnMgPSBpbnN0YW5jZS5mbGF0SGVhZGVycyxcbiAgICAgICAgX2luc3RhbmNlJGdyb3VwQnlGbiA9IGluc3RhbmNlLmdyb3VwQnlGbixcbiAgICAgICAgZ3JvdXBCeUZuID0gX2luc3RhbmNlJGdyb3VwQnlGbiA9PT0gdm9pZCAwID8gZGVmYXVsdEdyb3VwQnlGbiA6IF9pbnN0YW5jZSRncm91cEJ5Rm4sXG4gICAgICAgIG1hbnVhbEdyb3VwQnkgPSBpbnN0YW5jZS5tYW51YWxHcm91cEJ5LFxuICAgICAgICBfaW5zdGFuY2UkYWdncmVnYXRpb24gPSBpbnN0YW5jZS5hZ2dyZWdhdGlvbnMsXG4gICAgICAgIHVzZXJBZ2dyZWdhdGlvbnMgPSBfaW5zdGFuY2UkYWdncmVnYXRpb24gPT09IHZvaWQgMCA/IGRlZmF1bHRVc2VyQWdncmVnYXRpb25zIDogX2luc3RhbmNlJGFnZ3JlZ2F0aW9uLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZ3JvdXBCeSA9IGluc3RhbmNlLnN0YXRlLmdyb3VwQnksXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRHciA9IGluc3RhbmNlLmF1dG9SZXNldEdyb3VwQnksXG4gICAgICAgIGF1dG9SZXNldEdyb3VwQnkgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0R3IgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0R3IsXG4gICAgICAgIGRpc2FibGVHcm91cEJ5ID0gaW5zdGFuY2UuZGlzYWJsZUdyb3VwQnksXG4gICAgICAgIGRlZmF1bHRDYW5Hcm91cEJ5ID0gaW5zdGFuY2UuZGVmYXVsdENhbkdyb3VwQnksXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3M7XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VDb2x1bW5PcmRlcicsICd1c2VGaWx0ZXJzJ10sICd1c2VHcm91cEJ5Jyk7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICBhbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgdmFyIGFjY2Vzc29yID0gY29sdW1uLmFjY2Vzc29yLFxuICAgICAgICAgIGRlZmF1bHRDb2x1bW5Hcm91cEJ5ID0gY29sdW1uLmRlZmF1bHRHcm91cEJ5LFxuICAgICAgICAgIGNvbHVtbkRpc2FibGVHcm91cEJ5ID0gY29sdW1uLmRpc2FibGVHcm91cEJ5O1xuICAgICAgY29sdW1uLmNhbkdyb3VwQnkgPSBhY2Nlc3NvciA/IGdldEZpcnN0RGVmaW5lZChjb2x1bW4uY2FuR3JvdXBCeSwgY29sdW1uRGlzYWJsZUdyb3VwQnkgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZUdyb3VwQnkgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSkgOiBnZXRGaXJzdERlZmluZWQoY29sdW1uLmNhbkdyb3VwQnksIGRlZmF1bHRDb2x1bW5Hcm91cEJ5LCBkZWZhdWx0Q2FuR3JvdXBCeSwgZmFsc2UpO1xuXG4gICAgICBpZiAoY29sdW1uLmNhbkdyb3VwQnkpIHtcbiAgICAgICAgY29sdW1uLnRvZ2dsZUdyb3VwQnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnRvZ2dsZUdyb3VwQnkoY29sdW1uLmlkKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgPSBjb2x1bW4uQWdncmVnYXRlZCB8fCBjb2x1bW4uQ2VsbDtcbiAgICB9KTtcbiAgICB2YXIgdG9nZ2xlR3JvdXBCeSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb2x1bW5JZCwgdmFsdWUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVHcm91cEJ5LFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHNldEdyb3VwQnkgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRHcm91cEJ5LFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIGZsYXRIZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgaGVhZGVyLmdldEdyb3VwQnlUb2dnbGVQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0R3JvdXBCeVRvZ2dsZVByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB2YXIgX1JlYWN0JHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtYW51YWxHcm91cEJ5IHx8ICFncm91cEJ5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gW3Jvd3MsIGZsYXRSb3dzLCByb3dzQnlJZCwgZW1wdHlBcnJheSwgZW1wdHlPYmplY3QsIGZsYXRSb3dzLCByb3dzQnlJZF07XG4gICAgICB9IC8vIEVuc3VyZSB0aGF0IHRoZSBsaXN0IG9mIGZpbHRlcmVkIGNvbHVtbnMgZXhpc3RcblxuXG4gICAgICB2YXIgZXhpc3RpbmdHcm91cEJ5ID0gZ3JvdXBCeS5maWx0ZXIoZnVuY3Rpb24gKGcpIHtcbiAgICAgICAgcmV0dXJuIGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbC5pZCA9PT0gZztcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gRmluZCB0aGUgY29sdW1ucyB0aGF0IGNhbiBvciBhcmUgYWdncmVnYXRpbmdcbiAgICAgIC8vIFVzZXMgZWFjaCBjb2x1bW4gdG8gYWdncmVnYXRlIHJvd3MgaW50byBhIHNpbmdsZSB2YWx1ZVxuXG4gICAgICB2YXIgYWdncmVnYXRlUm93c1RvVmFsdWVzID0gZnVuY3Rpb24gYWdncmVnYXRlUm93c1RvVmFsdWVzKGxlYWZSb3dzLCBncm91cGVkUm93cywgZGVwdGgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgICAgICBhbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgIC8vIERvbid0IGFnZ3JlZ2F0ZSBjb2x1bW5zIHRoYXQgYXJlIGluIHRoZSBncm91cEJ5XG4gICAgICAgICAgaWYgKGV4aXN0aW5nR3JvdXBCeS5pbmNsdWRlcyhjb2x1bW4uaWQpKSB7XG4gICAgICAgICAgICB2YWx1ZXNbY29sdW1uLmlkXSA9IGdyb3VwZWRSb3dzWzBdID8gZ3JvdXBlZFJvd3NbMF0udmFsdWVzW2NvbHVtbi5pZF0gOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gQWdncmVnYXRlIHRoZSB2YWx1ZXNcblxuXG4gICAgICAgICAgdmFyIGFnZ3JlZ2F0ZUZuID0gdHlwZW9mIGNvbHVtbi5hZ2dyZWdhdGUgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uYWdncmVnYXRlIDogdXNlckFnZ3JlZ2F0aW9uc1tjb2x1bW4uYWdncmVnYXRlXSB8fCBhZ2dyZWdhdGlvbnNbY29sdW1uLmFnZ3JlZ2F0ZV07XG5cbiAgICAgICAgICBpZiAoYWdncmVnYXRlRm4pIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY29sdW1uVmFsdWVzIHRvIGFnZ3JlZ2F0ZVxuICAgICAgICAgICAgdmFyIGdyb3VwZWRWYWx1ZXMgPSBncm91cGVkUm93cy5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICByZXR1cm4gcm93LnZhbHVlc1tjb2x1bW4uaWRdO1xuICAgICAgICAgICAgfSk7IC8vIEdldCB0aGUgY29sdW1uVmFsdWVzIHRvIGFnZ3JlZ2F0ZVxuXG4gICAgICAgICAgICB2YXIgbGVhZlZhbHVlcyA9IGxlYWZSb3dzLm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgIHZhciBjb2x1bW5WYWx1ZSA9IHJvdy52YWx1ZXNbY29sdW1uLmlkXTtcblxuICAgICAgICAgICAgICBpZiAoIWRlcHRoICYmIGNvbHVtbi5hZ2dyZWdhdGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBhZ2dyZWdhdGVWYWx1ZUZuID0gdHlwZW9mIGNvbHVtbi5hZ2dyZWdhdGVWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5hZ2dyZWdhdGVWYWx1ZSA6IHVzZXJBZ2dyZWdhdGlvbnNbY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlXSB8fCBhZ2dyZWdhdGlvbnNbY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlXTtcblxuICAgICAgICAgICAgICAgIGlmICghYWdncmVnYXRlVmFsdWVGbikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QgVGFibGU6IEludmFsaWQgY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlIG9wdGlvbiBmb3IgY29sdW1uIGxpc3RlZCBhYm92ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IGFnZ3JlZ2F0ZVZhbHVlRm4oY29sdW1uVmFsdWUsIHJvdywgY29sdW1uKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW5WYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsdWVzW2NvbHVtbi5pZF0gPSBhZ2dyZWdhdGVGbihsZWFmVmFsdWVzLCBncm91cGVkVmFsdWVzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbi5hZ2dyZWdhdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyh7XG4gICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0IFRhYmxlOiBJbnZhbGlkIGNvbHVtbi5hZ2dyZWdhdGUgb3B0aW9uIGZvciBjb2x1bW4gbGlzdGVkIGFib3ZlXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXNbY29sdW1uLmlkXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH07XG5cbiAgICAgIHZhciBncm91cGVkRmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciBncm91cGVkUm93c0J5SWQgPSB7fTtcbiAgICAgIHZhciBvbmx5R3JvdXBlZEZsYXRSb3dzID0gW107XG4gICAgICB2YXIgb25seUdyb3VwZWRSb3dzQnlJZCA9IHt9O1xuICAgICAgdmFyIG5vbkdyb3VwZWRGbGF0Um93cyA9IFtdO1xuICAgICAgdmFyIG5vbkdyb3VwZWRSb3dzQnlJZCA9IHt9OyAvLyBSZWN1cnNpdmVseSBncm91cCB0aGUgZGF0YVxuXG4gICAgICB2YXIgZ3JvdXBVcFJlY3Vyc2l2ZWx5ID0gZnVuY3Rpb24gZ3JvdXBVcFJlY3Vyc2l2ZWx5KHJvd3MsIGRlcHRoLCBwYXJlbnRJZCkge1xuICAgICAgICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgICAgICAgIGRlcHRoID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGxhc3QgbGV2ZWwsIGp1c3QgcmV0dXJuIHRoZSByb3dzXG4gICAgICAgIGlmIChkZXB0aCA9PT0gZXhpc3RpbmdHcm91cEJ5Lmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiByb3dzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbHVtbklkID0gZXhpc3RpbmdHcm91cEJ5W2RlcHRoXTsgLy8gR3JvdXAgdGhlIHJvd3MgdG9nZXRoZXIgZm9yIHRoaXMgbGV2ZWxcblxuICAgICAgICB2YXIgcm93R3JvdXBzTWFwID0gZ3JvdXBCeUZuKHJvd3MsIGNvbHVtbklkKTsgLy8gUGVmb3JtIGFnZ3JlZ2F0aW9ucyBmb3IgZWFjaCBncm91cFxuXG4gICAgICAgIHZhciBhZ2dyZWdhdGVkR3JvdXBlZFJvd3MgPSBPYmplY3QuZW50cmllcyhyb3dHcm91cHNNYXApLm1hcChmdW5jdGlvbiAoX3JlZjQsIGluZGV4KSB7XG4gICAgICAgICAgdmFyIGdyb3VwQnlWYWwgPSBfcmVmNFswXSxcbiAgICAgICAgICAgICAgZ3JvdXBlZFJvd3MgPSBfcmVmNFsxXTtcbiAgICAgICAgICB2YXIgaWQgPSBjb2x1bW5JZCArIFwiOlwiICsgZ3JvdXBCeVZhbDtcbiAgICAgICAgICBpZCA9IHBhcmVudElkID8gcGFyZW50SWQgKyBcIj5cIiArIGlkIDogaWQ7IC8vIEZpcnN0LCBSZWN1cnNlIHRvIGdyb3VwIHN1YiByb3dzIGJlZm9yZSBhZ2dyZWdhdGlvblxuXG4gICAgICAgICAgdmFyIHN1YlJvd3MgPSBncm91cFVwUmVjdXJzaXZlbHkoZ3JvdXBlZFJvd3MsIGRlcHRoICsgMSwgaWQpOyAvLyBGbGF0dGVuIHRoZSBsZWFmIHJvd3Mgb2YgdGhlIHJvd3MgaW4gdGhpcyBncm91cFxuXG4gICAgICAgICAgdmFyIGxlYWZSb3dzID0gZGVwdGggPyBmbGF0dGVuQnkoZ3JvdXBlZFJvd3MsICdsZWFmUm93cycpIDogZ3JvdXBlZFJvd3M7XG4gICAgICAgICAgdmFyIHZhbHVlcyA9IGFnZ3JlZ2F0ZVJvd3NUb1ZhbHVlcyhsZWFmUm93cywgZ3JvdXBlZFJvd3MsIGRlcHRoKTtcbiAgICAgICAgICB2YXIgcm93ID0ge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgaXNHcm91cGVkOiB0cnVlLFxuICAgICAgICAgICAgZ3JvdXBCeUlEOiBjb2x1bW5JZCxcbiAgICAgICAgICAgIGdyb3VwQnlWYWw6IGdyb3VwQnlWYWwsXG4gICAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICAgIHN1YlJvd3M6IHN1YlJvd3MsXG4gICAgICAgICAgICBsZWFmUm93czogbGVhZlJvd3MsXG4gICAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICB9O1xuICAgICAgICAgIHN1YlJvd3MuZm9yRWFjaChmdW5jdGlvbiAoc3ViUm93KSB7XG4gICAgICAgICAgICBncm91cGVkRmxhdFJvd3MucHVzaChzdWJSb3cpO1xuICAgICAgICAgICAgZ3JvdXBlZFJvd3NCeUlkW3N1YlJvdy5pZF0gPSBzdWJSb3c7XG5cbiAgICAgICAgICAgIGlmIChzdWJSb3cuaXNHcm91cGVkKSB7XG4gICAgICAgICAgICAgIG9ubHlHcm91cGVkRmxhdFJvd3MucHVzaChzdWJSb3cpO1xuICAgICAgICAgICAgICBvbmx5R3JvdXBlZFJvd3NCeUlkW3N1YlJvdy5pZF0gPSBzdWJSb3c7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBub25Hcm91cGVkRmxhdFJvd3MucHVzaChzdWJSb3cpO1xuICAgICAgICAgICAgICBub25Hcm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFnZ3JlZ2F0ZWRHcm91cGVkUm93cztcbiAgICAgIH07XG5cbiAgICAgIHZhciBncm91cGVkUm93cyA9IGdyb3VwVXBSZWN1cnNpdmVseShyb3dzKTtcbiAgICAgIGdyb3VwZWRSb3dzLmZvckVhY2goZnVuY3Rpb24gKHN1YlJvdykge1xuICAgICAgICBncm91cGVkRmxhdFJvd3MucHVzaChzdWJSb3cpO1xuICAgICAgICBncm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcblxuICAgICAgICBpZiAoc3ViUm93LmlzR3JvdXBlZCkge1xuICAgICAgICAgIG9ubHlHcm91cGVkRmxhdFJvd3MucHVzaChzdWJSb3cpO1xuICAgICAgICAgIG9ubHlHcm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub25Hcm91cGVkRmxhdFJvd3MucHVzaChzdWJSb3cpO1xuICAgICAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gQXNzaWduIHRoZSBuZXcgZGF0YVxuXG4gICAgICByZXR1cm4gW2dyb3VwZWRSb3dzLCBncm91cGVkRmxhdFJvd3MsIGdyb3VwZWRSb3dzQnlJZCwgb25seUdyb3VwZWRGbGF0Um93cywgb25seUdyb3VwZWRSb3dzQnlJZCwgbm9uR3JvdXBlZEZsYXRSb3dzLCBub25Hcm91cGVkUm93c0J5SWRdO1xuICAgIH0sIFttYW51YWxHcm91cEJ5LCBncm91cEJ5LCByb3dzLCBmbGF0Um93cywgcm93c0J5SWQsIGFsbENvbHVtbnMsIHVzZXJBZ2dyZWdhdGlvbnMsIGdyb3VwQnlGbl0pLFxuICAgICAgICBncm91cGVkUm93cyA9IF9SZWFjdCR1c2VNZW1vWzBdLFxuICAgICAgICBncm91cGVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1sxXSxcbiAgICAgICAgZ3JvdXBlZFJvd3NCeUlkID0gX1JlYWN0JHVzZU1lbW9bMl0sXG4gICAgICAgIG9ubHlHcm91cGVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1szXSxcbiAgICAgICAgb25seUdyb3VwZWRSb3dzQnlJZCA9IF9SZWFjdCR1c2VNZW1vWzRdLFxuICAgICAgICBub25Hcm91cGVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1s1XSxcbiAgICAgICAgbm9uR3JvdXBlZFJvd3NCeUlkID0gX1JlYWN0JHVzZU1lbW9bNl07XG5cbiAgICB2YXIgZ2V0QXV0b1Jlc2V0R3JvdXBCeSA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRHcm91cEJ5KTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRHcm91cEJ5KCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRHcm91cEJ5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgbWFudWFsR3JvdXBCeSA/IG51bGwgOiBkYXRhXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcHJlR3JvdXBlZFJvd3M6IHJvd3MsXG4gICAgICBwcmVHcm91cGVkRmxhdFJvdzogZmxhdFJvd3MsXG4gICAgICBwcmVHcm91cGVkUm93c0J5SWQ6IHJvd3NCeUlkLFxuICAgICAgZ3JvdXBlZFJvd3M6IGdyb3VwZWRSb3dzLFxuICAgICAgZ3JvdXBlZEZsYXRSb3dzOiBncm91cGVkRmxhdFJvd3MsXG4gICAgICBncm91cGVkUm93c0J5SWQ6IGdyb3VwZWRSb3dzQnlJZCxcbiAgICAgIG9ubHlHcm91cGVkRmxhdFJvd3M6IG9ubHlHcm91cGVkRmxhdFJvd3MsXG4gICAgICBvbmx5R3JvdXBlZFJvd3NCeUlkOiBvbmx5R3JvdXBlZFJvd3NCeUlkLFxuICAgICAgbm9uR3JvdXBlZEZsYXRSb3dzOiBub25Hcm91cGVkRmxhdFJvd3MsXG4gICAgICBub25Hcm91cGVkUm93c0J5SWQ6IG5vbkdyb3VwZWRSb3dzQnlJZCxcbiAgICAgIHJvd3M6IGdyb3VwZWRSb3dzLFxuICAgICAgZmxhdFJvd3M6IGdyb3VwZWRGbGF0Um93cyxcbiAgICAgIHJvd3NCeUlkOiBncm91cGVkUm93c0J5SWQsXG4gICAgICB0b2dnbGVHcm91cEJ5OiB0b2dnbGVHcm91cEJ5LFxuICAgICAgc2V0R3JvdXBCeTogc2V0R3JvdXBCeVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZVJvdyQxKHJvdykge1xuICAgIHJvdy5hbGxDZWxscy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICB2YXIgX3JvdyRzdWJSb3dzO1xuXG4gICAgICAvLyBHcm91cGVkIGNlbGxzIGFyZSBpbiB0aGUgZ3JvdXBCeSBhbmQgdGhlIHBpdm90IGNlbGwgZm9yIHRoZSByb3dcbiAgICAgIGNlbGwuaXNHcm91cGVkID0gY2VsbC5jb2x1bW4uaXNHcm91cGVkICYmIGNlbGwuY29sdW1uLmlkID09PSByb3cuZ3JvdXBCeUlEOyAvLyBQbGFjZWhvbGRlciBjZWxscyBhcmUgYW55IGNvbHVtbnMgaW4gdGhlIGdyb3VwQnkgdGhhdCBhcmUgbm90IGdyb3VwZWRcblxuICAgICAgY2VsbC5pc1BsYWNlaG9sZGVyID0gIWNlbGwuaXNHcm91cGVkICYmIGNlbGwuY29sdW1uLmlzR3JvdXBlZDsgLy8gQWdncmVnYXRlZCBjZWxscyBhcmUgbm90IGdyb3VwZWQsIG5vdCByZXBlYXRlZCwgYnV0IHN0aWxsIGhhdmUgc3ViUm93c1xuXG4gICAgICBjZWxsLmlzQWdncmVnYXRlZCA9ICFjZWxsLmlzR3JvdXBlZCAmJiAhY2VsbC5pc1BsYWNlaG9sZGVyICYmICgoX3JvdyRzdWJSb3dzID0gcm93LnN1YlJvd3MpID09IG51bGwgPyB2b2lkIDAgOiBfcm93JHN1YlJvd3MubGVuZ3RoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHRHcm91cEJ5Rm4ocm93cywgY29sdW1uSWQpIHtcbiAgICByZXR1cm4gcm93cy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIHJvdywgaSkge1xuICAgICAgLy8gVE9ETzogTWlnaHQgd2FudCB0byBpbXBsZW1lbnQgYSBrZXkgc2VyaWFsaXplciBoZXJlIHNvXG4gICAgICAvLyBpcnJlZ3VsYXIgY29sdW1uIHZhbHVlcyBjYW4gc3RpbGwgYmUgZ3JvdXBlZCBpZiBuZWVkZWQ/XG4gICAgICB2YXIgcmVzS2V5ID0gXCJcIiArIHJvdy52YWx1ZXNbY29sdW1uSWRdO1xuICAgICAgcHJldltyZXNLZXldID0gQXJyYXkuaXNBcnJheShwcmV2W3Jlc0tleV0pID8gcHJldltyZXNLZXldIDogW107XG4gICAgICBwcmV2W3Jlc0tleV0ucHVzaChyb3cpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xuICB9XG5cbiAgdmFyIHJlU3BsaXRBbHBoYU51bWVyaWMgPSAvKFswLTldKykvZ207IC8vIE1peGVkIHNvcnRpbmcgaXMgc2xvdywgYnV0IHZlcnkgaW5jbHVzaXZlIG9mIG1hbnkgZWRnZSBjYXNlcy5cbiAgLy8gSXQgaGFuZGxlcyBudW1iZXJzLCBtaXhlZCBhbHBoYW51bWVyaWMgY29tYmluYXRpb25zLCBhbmQgZXZlblxuICAvLyBudWxsLCB1bmRlZmluZWQsIGFuZCBJbmZpbml0eVxuXG4gIHZhciBhbHBoYW51bWVyaWMgPSBmdW5jdGlvbiBhbHBoYW51bWVyaWMocm93QSwgcm93QiwgY29sdW1uSWQpIHtcbiAgICB2YXIgX2dldFJvd1ZhbHVlc0J5Q29sdW1uID0gZ2V0Um93VmFsdWVzQnlDb2x1bW5JRChyb3dBLCByb3dCLCBjb2x1bW5JZCksXG4gICAgICAgIGEgPSBfZ2V0Um93VmFsdWVzQnlDb2x1bW5bMF0sXG4gICAgICAgIGIgPSBfZ2V0Um93VmFsdWVzQnlDb2x1bW5bMV07IC8vIEZvcmNlIHRvIHN0cmluZ3MgKG9yIFwiXCIgZm9yIHVuc3VwcG9ydGVkIHR5cGVzKVxuXG5cbiAgICBhID0gdG9TdHJpbmcoYSk7XG4gICAgYiA9IHRvU3RyaW5nKGIpOyAvLyBTcGxpdCBvbiBudW1iZXIgZ3JvdXBzLCBidXQga2VlcCB0aGUgZGVsaW1pdGVyXG4gICAgLy8gVGhlbiByZW1vdmUgZmFsc2V5IHNwbGl0IHZhbHVlc1xuXG4gICAgYSA9IGEuc3BsaXQocmVTcGxpdEFscGhhTnVtZXJpYykuZmlsdGVyKEJvb2xlYW4pO1xuICAgIGIgPSBiLnNwbGl0KHJlU3BsaXRBbHBoYU51bWVyaWMpLmZpbHRlcihCb29sZWFuKTsgLy8gV2hpbGVcblxuICAgIHdoaWxlIChhLmxlbmd0aCAmJiBiLmxlbmd0aCkge1xuICAgICAgdmFyIGFhID0gYS5zaGlmdCgpO1xuICAgICAgdmFyIGJiID0gYi5zaGlmdCgpO1xuICAgICAgdmFyIGFuID0gcGFyc2VJbnQoYWEsIDEwKTtcbiAgICAgIHZhciBibiA9IHBhcnNlSW50KGJiLCAxMCk7XG4gICAgICB2YXIgY29tYm8gPSBbYW4sIGJuXS5zb3J0KCk7IC8vIEJvdGggYXJlIHN0cmluZ1xuXG4gICAgICBpZiAoaXNOYU4oY29tYm9bMF0pKSB7XG4gICAgICAgIGlmIChhYSA+IGJiKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmIgPiBhYSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSAvLyBPbmUgaXMgYSBzdHJpbmcsIG9uZSBpcyBhIG51bWJlclxuXG5cbiAgICAgIGlmIChpc05hTihjb21ib1sxXSkpIHtcbiAgICAgICAgcmV0dXJuIGlzTmFOKGFuKSA/IC0xIDogMTtcbiAgICAgIH0gLy8gQm90aCBhcmUgbnVtYmVyc1xuXG5cbiAgICAgIGlmIChhbiA+IGJuKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoYm4gPiBhbikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XG4gIH07XG4gIGZ1bmN0aW9uIGRhdGV0aW1lKHJvd0EsIHJvd0IsIGNvbHVtbklkKSB7XG4gICAgdmFyIF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjIgPSBnZXRSb3dWYWx1ZXNCeUNvbHVtbklEKHJvd0EsIHJvd0IsIGNvbHVtbklkKSxcbiAgICAgICAgYSA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjJbMF0sXG4gICAgICAgIGIgPSBfZ2V0Um93VmFsdWVzQnlDb2x1bW4yWzFdO1xuXG4gICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgIGIgPSBiLmdldFRpbWUoKTtcbiAgICByZXR1cm4gY29tcGFyZUJhc2ljKGEsIGIpO1xuICB9XG4gIGZ1bmN0aW9uIGJhc2ljKHJvd0EsIHJvd0IsIGNvbHVtbklkKSB7XG4gICAgdmFyIF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjMgPSBnZXRSb3dWYWx1ZXNCeUNvbHVtbklEKHJvd0EsIHJvd0IsIGNvbHVtbklkKSxcbiAgICAgICAgYSA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjNbMF0sXG4gICAgICAgIGIgPSBfZ2V0Um93VmFsdWVzQnlDb2x1bW4zWzFdO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVCYXNpYyhhLCBiKTtcbiAgfVxuICBmdW5jdGlvbiBzdHJpbmcocm93QSwgcm93QiwgY29sdW1uSWQpIHtcbiAgICB2YXIgX2dldFJvd1ZhbHVlc0J5Q29sdW1uNCA9IGdldFJvd1ZhbHVlc0J5Q29sdW1uSUQocm93QSwgcm93QiwgY29sdW1uSWQpLFxuICAgICAgICBhID0gX2dldFJvd1ZhbHVlc0J5Q29sdW1uNFswXSxcbiAgICAgICAgYiA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjRbMV07XG5cbiAgICBhID0gYS5zcGxpdCgnJykuZmlsdGVyKEJvb2xlYW4pO1xuICAgIGIgPSBiLnNwbGl0KCcnKS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICB3aGlsZSAoYS5sZW5ndGggJiYgYi5sZW5ndGgpIHtcbiAgICAgIHZhciBhYSA9IGEuc2hpZnQoKTtcbiAgICAgIHZhciBiYiA9IGIuc2hpZnQoKTtcbiAgICAgIHZhciBhbG93ZXIgPSBhYS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIGJsb3dlciA9IGJiLnRvTG93ZXJDYXNlKCk7IC8vIENhc2UgaW5zZW5zaXRpdmUgY29tcGFyaXNvbiB1bnRpbCBjaGFyYWN0ZXJzIG1hdGNoXG5cbiAgICAgIGlmIChhbG93ZXIgPiBibG93ZXIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChibG93ZXIgPiBhbG93ZXIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSAvLyBJZiBsb3dlcmNhc2UgY2hhcmFjdGVycyBhcmUgaWRlbnRpY2FsXG5cblxuICAgICAgaWYgKGFhID4gYmIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChiYiA+IGFhKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XG4gIH1cbiAgZnVuY3Rpb24gbnVtYmVyKHJvd0EsIHJvd0IsIGNvbHVtbklkKSB7XG4gICAgdmFyIF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjUgPSBnZXRSb3dWYWx1ZXNCeUNvbHVtbklEKHJvd0EsIHJvd0IsIGNvbHVtbklkKSxcbiAgICAgICAgYSA9IF9nZXRSb3dWYWx1ZXNCeUNvbHVtbjVbMF0sXG4gICAgICAgIGIgPSBfZ2V0Um93VmFsdWVzQnlDb2x1bW41WzFdO1xuXG4gICAgdmFyIHJlcGxhY2VOb25OdW1lcmljID0gL1teMC05Ll0vZ2k7XG4gICAgYSA9IE51bWJlcihTdHJpbmcoYSkucmVwbGFjZShyZXBsYWNlTm9uTnVtZXJpYywgJycpKTtcbiAgICBiID0gTnVtYmVyKFN0cmluZyhiKS5yZXBsYWNlKHJlcGxhY2VOb25OdW1lcmljLCAnJykpO1xuICAgIHJldHVybiBjb21wYXJlQmFzaWMoYSwgYik7XG4gIH0gLy8gVXRpbHNcblxuICBmdW5jdGlvbiBjb21wYXJlQmFzaWMoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Um93VmFsdWVzQnlDb2x1bW5JRChyb3cxLCByb3cyLCBjb2x1bW5JZCkge1xuICAgIHJldHVybiBbcm93MS52YWx1ZXNbY29sdW1uSWRdLCByb3cyLnZhbHVlc1tjb2x1bW5JZF1dO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9TdHJpbmcoYSkge1xuICAgIGlmICh0eXBlb2YgYSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChpc05hTihhKSB8fCBhID09PSBJbmZpbml0eSB8fCBhID09PSAtSW5maW5pdHkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gU3RyaW5nKGEpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHZhciBzb3J0VHlwZXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIGFscGhhbnVtZXJpYzogYWxwaGFudW1lcmljLFxuICAgIGRhdGV0aW1lOiBkYXRldGltZSxcbiAgICBiYXNpYzogYmFzaWMsXG4gICAgc3RyaW5nOiBzdHJpbmcsXG4gICAgbnVtYmVyOiBudW1iZXJcbiAgfSk7XG5cbiAgYWN0aW9ucy5yZXNldFNvcnRCeSA9ICdyZXNldFNvcnRCeSc7XG4gIGFjdGlvbnMuc2V0U29ydEJ5ID0gJ3NldFNvcnRCeSc7XG4gIGFjdGlvbnMudG9nZ2xlU29ydEJ5ID0gJ3RvZ2dsZVNvcnRCeSc7XG4gIGFjdGlvbnMuY2xlYXJTb3J0QnkgPSAnY2xlYXJTb3J0QnknO1xuICBkZWZhdWx0Q29sdW1uLnNvcnRUeXBlID0gJ2FscGhhbnVtZXJpYyc7XG4gIGRlZmF1bHRDb2x1bW4uc29ydERlc2NGaXJzdCA9IGZhbHNlO1xuICB2YXIgdXNlU29ydEJ5ID0gZnVuY3Rpb24gdXNlU29ydEJ5KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0U29ydEJ5VG9nZ2xlUHJvcHMgPSBbZGVmYXVsdEdldFNvcnRCeVRvZ2dsZVByb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ1KTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDUpO1xuICB9O1xuICB1c2VTb3J0QnkucGx1Z2luTmFtZSA9ICd1c2VTb3J0QnknO1xuXG4gIHZhciBkZWZhdWx0R2V0U29ydEJ5VG9nZ2xlUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0U29ydEJ5VG9nZ2xlUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgICBjb2x1bW4gPSBfcmVmLmNvbHVtbjtcbiAgICB2YXIgX2luc3RhbmNlJGlzTXVsdGlTb3J0ID0gaW5zdGFuY2UuaXNNdWx0aVNvcnRFdmVudCxcbiAgICAgICAgaXNNdWx0aVNvcnRFdmVudCA9IF9pbnN0YW5jZSRpc011bHRpU29ydCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLnNoaWZ0S2V5O1xuICAgIH0gOiBfaW5zdGFuY2UkaXNNdWx0aVNvcnQ7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DbGljazogY29sdW1uLmNhblNvcnQgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICAgICAgY29sdW1uLnRvZ2dsZVNvcnRCeSh1bmRlZmluZWQsICFpbnN0YW5jZS5kaXNhYmxlTXVsdGlTb3J0ICYmIGlzTXVsdGlTb3J0RXZlbnQoZSkpO1xuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogY29sdW1uLmNhblNvcnQgPyAncG9pbnRlcicgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICB0aXRsZTogY29sdW1uLmNhblNvcnQgPyAnVG9nZ2xlIFNvcnRCeScgOiB1bmRlZmluZWRcbiAgICB9XTtcbiAgfTsgLy8gUmVkdWNlclxuXG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ1KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHNvcnRCeTogW11cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRTb3J0QnkpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc29ydEJ5OiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuc29ydEJ5IHx8IFtdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuY2xlYXJTb3J0QnkpIHtcbiAgICAgIHZhciBzb3J0QnkgPSBzdGF0ZS5zb3J0Qnk7XG4gICAgICB2YXIgbmV3U29ydEJ5ID0gc29ydEJ5LmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCAhPT0gYWN0aW9uLmNvbHVtbklkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNvcnRCeTogbmV3U29ydEJ5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0U29ydEJ5KSB7XG4gICAgICB2YXIgX3NvcnRCeSA9IGFjdGlvbi5zb3J0Qnk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNvcnRCeTogX3NvcnRCeVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZVNvcnRCeSkge1xuICAgICAgdmFyIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkLFxuICAgICAgICAgIGRlc2MgPSBhY3Rpb24uZGVzYyxcbiAgICAgICAgICBtdWx0aSA9IGFjdGlvbi5tdWx0aTtcbiAgICAgIHZhciBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgICBkaXNhYmxlTXVsdGlTb3J0ID0gaW5zdGFuY2UuZGlzYWJsZU11bHRpU29ydCxcbiAgICAgICAgICBkaXNhYmxlU29ydFJlbW92ZSA9IGluc3RhbmNlLmRpc2FibGVTb3J0UmVtb3ZlLFxuICAgICAgICAgIGRpc2FibGVNdWx0aVJlbW92ZSA9IGluc3RhbmNlLmRpc2FibGVNdWx0aVJlbW92ZSxcbiAgICAgICAgICBfaW5zdGFuY2UkbWF4TXVsdGlTb3IgPSBpbnN0YW5jZS5tYXhNdWx0aVNvcnRDb2xDb3VudCxcbiAgICAgICAgICBtYXhNdWx0aVNvcnRDb2xDb3VudCA9IF9pbnN0YW5jZSRtYXhNdWx0aVNvciA9PT0gdm9pZCAwID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiBfaW5zdGFuY2UkbWF4TXVsdGlTb3I7XG4gICAgICB2YXIgX3NvcnRCeTIgPSBzdGF0ZS5zb3J0Qnk7IC8vIEZpbmQgdGhlIGNvbHVtbiBmb3IgdGhpcyBjb2x1bW5JZFxuXG4gICAgICB2YXIgY29sdW1uID0gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pO1xuICAgICAgdmFyIHNvcnREZXNjRmlyc3QgPSBjb2x1bW4uc29ydERlc2NGaXJzdDsgLy8gRmluZCBhbnkgZXhpc3Rpbmcgc29ydEJ5IGZvciB0aGlzIGNvbHVtblxuXG4gICAgICB2YXIgZXhpc3RpbmdTb3J0QnkgPSBfc29ydEJ5Mi5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgZXhpc3RpbmdJbmRleCA9IF9zb3J0QnkyLmZpbmRJbmRleChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcblxuICAgICAgdmFyIGhhc0Rlc2NEZWZpbmVkID0gdHlwZW9mIGRlc2MgIT09ICd1bmRlZmluZWQnICYmIGRlc2MgIT09IG51bGw7XG4gICAgICB2YXIgX25ld1NvcnRCeSA9IFtdOyAvLyBXaGF0IHNob3VsZCB3ZSBkbyB3aXRoIHRoaXMgc29ydCBhY3Rpb24/XG5cbiAgICAgIHZhciBzb3J0QWN0aW9uO1xuXG4gICAgICBpZiAoIWRpc2FibGVNdWx0aVNvcnQgJiYgbXVsdGkpIHtcbiAgICAgICAgaWYgKGV4aXN0aW5nU29ydEJ5KSB7XG4gICAgICAgICAgc29ydEFjdGlvbiA9ICd0b2dnbGUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRBY3Rpb24gPSAnYWRkJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm9ybWFsIG1vZGVcbiAgICAgICAgaWYgKGV4aXN0aW5nSW5kZXggIT09IF9zb3J0QnkyLmxlbmd0aCAtIDEgfHwgX3NvcnRCeTIubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgc29ydEFjdGlvbiA9ICdyZXBsYWNlJztcbiAgICAgICAgfSBlbHNlIGlmIChleGlzdGluZ1NvcnRCeSkge1xuICAgICAgICAgIHNvcnRBY3Rpb24gPSAndG9nZ2xlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0QWN0aW9uID0gJ3JlcGxhY2UnO1xuICAgICAgICB9XG4gICAgICB9IC8vIEhhbmRsZSB0b2dnbGUgc3RhdGVzIHRoYXQgd2lsbCByZW1vdmUgdGhlIHNvcnRCeVxuXG5cbiAgICAgIGlmIChzb3J0QWN0aW9uID09PSAndG9nZ2xlJyAmJiAvLyBNdXN0IGJlIHRvZ2dsaW5nXG4gICAgICAhZGlzYWJsZVNvcnRSZW1vdmUgJiYgLy8gSWYgZGlzYWJsZVNvcnRSZW1vdmUsIGRpc2FibGUgaW4gZ2VuZXJhbFxuICAgICAgIWhhc0Rlc2NEZWZpbmVkICYmICggLy8gTXVzdCBub3QgYmUgc2V0dGluZyBkZXNjXG4gICAgICBtdWx0aSA/ICFkaXNhYmxlTXVsdGlSZW1vdmUgOiB0cnVlKSAmJiAoIC8vIElmIG11bHRpLCBkb24ndCBhbGxvdyBpZiBkaXNhYmxlTXVsdGlSZW1vdmVcbiAgICAgIGV4aXN0aW5nU29ydEJ5ICYmIC8vIEZpbmFsbHksIGRldGVjdCBpZiBpdCBzaG91bGQgaW5kZWVkIGJlIHJlbW92ZWRcbiAgICAgIGV4aXN0aW5nU29ydEJ5LmRlc2MgJiYgIXNvcnREZXNjRmlyc3QgfHwgIWV4aXN0aW5nU29ydEJ5LmRlc2MgJiYgc29ydERlc2NGaXJzdCkpIHtcbiAgICAgICAgc29ydEFjdGlvbiA9ICdyZW1vdmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoc29ydEFjdGlvbiA9PT0gJ3JlcGxhY2UnKSB7XG4gICAgICAgIF9uZXdTb3J0QnkgPSBbe1xuICAgICAgICAgIGlkOiBjb2x1bW5JZCxcbiAgICAgICAgICBkZXNjOiBoYXNEZXNjRGVmaW5lZCA/IGRlc2MgOiBzb3J0RGVzY0ZpcnN0XG4gICAgICAgIH1dO1xuICAgICAgfSBlbHNlIGlmIChzb3J0QWN0aW9uID09PSAnYWRkJykge1xuICAgICAgICBfbmV3U29ydEJ5ID0gW10uY29uY2F0KF9zb3J0QnkyLCBbe1xuICAgICAgICAgIGlkOiBjb2x1bW5JZCxcbiAgICAgICAgICBkZXNjOiBoYXNEZXNjRGVmaW5lZCA/IGRlc2MgOiBzb3J0RGVzY0ZpcnN0XG4gICAgICAgIH1dKTsgLy8gVGFrZSBsYXRlc3QgbiBjb2x1bW5zXG5cbiAgICAgICAgX25ld1NvcnRCeS5zcGxpY2UoMCwgX25ld1NvcnRCeS5sZW5ndGggLSBtYXhNdWx0aVNvcnRDb2xDb3VudCk7XG4gICAgICB9IGVsc2UgaWYgKHNvcnRBY3Rpb24gPT09ICd0b2dnbGUnKSB7XG4gICAgICAgIC8vIFRoaXMgZmxpcHMgKG9yIHNldHMpIHRoZVxuICAgICAgICBfbmV3U29ydEJ5ID0gX3NvcnRCeTIubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgaWYgKGQuaWQgPT09IGNvbHVtbklkKSB7XG4gICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGQsIHtcbiAgICAgICAgICAgICAgZGVzYzogaGFzRGVzY0RlZmluZWQgPyBkZXNjIDogIWV4aXN0aW5nU29ydEJ5LmRlc2NcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc29ydEFjdGlvbiA9PT0gJ3JlbW92ZScpIHtcbiAgICAgICAgX25ld1NvcnRCeSA9IF9zb3J0QnkyLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkICE9PSBjb2x1bW5JZDtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc29ydEJ5OiBfbmV3U29ydEJ5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQ1KGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgZmxhdFJvd3MgPSBpbnN0YW5jZS5mbGF0Um93cyxcbiAgICAgICAgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIF9pbnN0YW5jZSRvcmRlckJ5Rm4gPSBpbnN0YW5jZS5vcmRlckJ5Rm4sXG4gICAgICAgIG9yZGVyQnlGbiA9IF9pbnN0YW5jZSRvcmRlckJ5Rm4gPT09IHZvaWQgMCA/IGRlZmF1bHRPcmRlckJ5Rm4gOiBfaW5zdGFuY2Ukb3JkZXJCeUZuLFxuICAgICAgICB1c2VyU29ydFR5cGVzID0gaW5zdGFuY2Uuc29ydFR5cGVzLFxuICAgICAgICBtYW51YWxTb3J0QnkgPSBpbnN0YW5jZS5tYW51YWxTb3J0QnksXG4gICAgICAgIGRlZmF1bHRDYW5Tb3J0ID0gaW5zdGFuY2UuZGVmYXVsdENhblNvcnQsXG4gICAgICAgIGRpc2FibGVTb3J0QnkgPSBpbnN0YW5jZS5kaXNhYmxlU29ydEJ5LFxuICAgICAgICBmbGF0SGVhZGVycyA9IGluc3RhbmNlLmZsYXRIZWFkZXJzLFxuICAgICAgICBzb3J0QnkgPSBpbnN0YW5jZS5zdGF0ZS5zb3J0QnksXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0U28gPSBpbnN0YW5jZS5hdXRvUmVzZXRTb3J0QnksXG4gICAgICAgIGF1dG9SZXNldFNvcnRCeSA9IF9pbnN0YW5jZSRhdXRvUmVzZXRTbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRTbztcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUZpbHRlcnMnLCAndXNlR2xvYmFsRmlsdGVyJywgJ3VzZUdyb3VwQnknLCAndXNlUGl2b3RDb2x1bW5zJ10sICd1c2VTb3J0QnknKTtcbiAgICB2YXIgc2V0U29ydEJ5ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHNvcnRCeSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldFNvcnRCeSxcbiAgICAgICAgc29ydEJ5OiBzb3J0QnlcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pOyAvLyBVcGRhdGVzIHNvcnRpbmcgYmFzZWQgb24gYSBjb2x1bW5JZCwgZGVzYyBmbGFnIGFuZCBtdWx0aSBmbGFnXG5cbiAgICB2YXIgdG9nZ2xlU29ydEJ5ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNvbHVtbklkLCBkZXNjLCBtdWx0aSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZVNvcnRCeSxcbiAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICBkZXNjOiBkZXNjLFxuICAgICAgICBtdWx0aTogbXVsdGlcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pOyAvLyB1c2UgcmVmZXJlbmNlIHRvIGF2b2lkIG1lbW9yeSBsZWFrIGluICMxNjA4XG5cbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2UpOyAvLyBBZGQgdGhlIGdldFNvcnRCeVRvZ2dsZVByb3BzIG1ldGhvZCB0byBjb2x1bW5zIGFuZCBoZWFkZXJzXG5cbiAgICBmbGF0SGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIHZhciBhY2Nlc3NvciA9IGNvbHVtbi5hY2Nlc3NvcixcbiAgICAgICAgICBkZWZhdWx0Q29sdW1uQ2FuU29ydCA9IGNvbHVtbi5jYW5Tb3J0LFxuICAgICAgICAgIGNvbHVtbkRpc2FibGVTb3J0QnkgPSBjb2x1bW4uZGlzYWJsZVNvcnRCeSxcbiAgICAgICAgICBpZCA9IGNvbHVtbi5pZDtcbiAgICAgIHZhciBjYW5Tb3J0ID0gYWNjZXNzb3IgPyBnZXRGaXJzdERlZmluZWQoY29sdW1uRGlzYWJsZVNvcnRCeSA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlU29ydEJ5ID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIHRydWUpIDogZ2V0Rmlyc3REZWZpbmVkKGRlZmF1bHRDYW5Tb3J0LCBkZWZhdWx0Q29sdW1uQ2FuU29ydCwgZmFsc2UpO1xuICAgICAgY29sdW1uLmNhblNvcnQgPSBjYW5Tb3J0O1xuXG4gICAgICBpZiAoY29sdW1uLmNhblNvcnQpIHtcbiAgICAgICAgY29sdW1uLnRvZ2dsZVNvcnRCeSA9IGZ1bmN0aW9uIChkZXNjLCBtdWx0aSkge1xuICAgICAgICAgIHJldHVybiB0b2dnbGVTb3J0QnkoY29sdW1uLmlkLCBkZXNjLCBtdWx0aSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29sdW1uLmNsZWFyU29ydEJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuY2xlYXJTb3J0QnksXG4gICAgICAgICAgICBjb2x1bW5JZDogY29sdW1uLmlkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbHVtbi5nZXRTb3J0QnlUb2dnbGVQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0U29ydEJ5VG9nZ2xlUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICB9KTtcbiAgICAgIHZhciBjb2x1bW5Tb3J0ID0gc29ydEJ5LmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGlkO1xuICAgICAgfSk7XG4gICAgICBjb2x1bW4uaXNTb3J0ZWQgPSAhIWNvbHVtblNvcnQ7XG4gICAgICBjb2x1bW4uc29ydGVkSW5kZXggPSBzb3J0QnkuZmluZEluZGV4KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBpZDtcbiAgICAgIH0pO1xuICAgICAgY29sdW1uLmlzU29ydGVkRGVzYyA9IGNvbHVtbi5pc1NvcnRlZCA/IGNvbHVtblNvcnQuZGVzYyA6IHVuZGVmaW5lZDtcbiAgICB9KTtcblxuICAgIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1hbnVhbFNvcnRCeSB8fCAhc29ydEJ5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gW3Jvd3MsIGZsYXRSb3dzXTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvcnRlZEZsYXRSb3dzID0gW107IC8vIEZpbHRlciBvdXQgc29ydEJ5cyB0aGF0IGNvcnJlc3BvbmQgdG8gbm9uIGV4aXN0aW5nIGNvbHVtbnNcblxuICAgICAgdmFyIGF2YWlsYWJsZVNvcnRCeSA9IHNvcnRCeS5maWx0ZXIoZnVuY3Rpb24gKHNvcnQpIHtcbiAgICAgICAgcmV0dXJuIGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbC5pZCA9PT0gc29ydC5pZDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHNvcnREYXRhID0gZnVuY3Rpb24gc29ydERhdGEocm93cykge1xuICAgICAgICAvLyBVc2UgdGhlIG9yZGVyQnlGbiB0byBjb21wb3NlIG11bHRpcGxlIHNvcnRCeSdzIHRvZ2V0aGVyLlxuICAgICAgICAvLyBUaGlzIHdpbGwgYWxzbyBwZXJmb3JtIGEgc3RhYmxlIHNvcnRpbmcgdXNpbmcgdGhlIHJvdyBpbmRleFxuICAgICAgICAvLyBpZiBuZWVkZWQuXG4gICAgICAgIHZhciBzb3J0ZWREYXRhID0gb3JkZXJCeUZuKHJvd3MsIGF2YWlsYWJsZVNvcnRCeS5tYXAoZnVuY3Rpb24gKHNvcnQpIHtcbiAgICAgICAgICAvLyBTdXBwb3J0IGN1c3RvbSBzb3J0aW5nIG1ldGhvZHMgZm9yIGVhY2ggY29sdW1uXG4gICAgICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuaWQgPT09IHNvcnQuaWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoIWNvbHVtbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QtVGFibGU6IENvdWxkIG5vdCBmaW5kIGEgY29sdW1uIHdpdGggaWQ6IFwiICsgc29ydC5pZCArIFwiIHdoaWxlIHNvcnRpbmdcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHNvcnRUeXBlID0gY29sdW1uLnNvcnRUeXBlOyAvLyBMb29rIHVwIHNvcnRCeSBmdW5jdGlvbnMgaW4gdGhpcyBvcmRlcjpcbiAgICAgICAgICAvLyBjb2x1bW4gZnVuY3Rpb25cbiAgICAgICAgICAvLyBjb2x1bW4gc3RyaW5nIGxvb2t1cCBvbiB1c2VyIHNvcnRUeXBlXG4gICAgICAgICAgLy8gY29sdW1uIHN0cmluZyBsb29rdXAgb24gYnVpbHQtaW4gc29ydFR5cGVcbiAgICAgICAgICAvLyBkZWZhdWx0IGZ1bmN0aW9uXG4gICAgICAgICAgLy8gZGVmYXVsdCBzdHJpbmcgbG9va3VwIG9uIHVzZXIgc29ydFR5cGVcbiAgICAgICAgICAvLyBkZWZhdWx0IHN0cmluZyBsb29rdXAgb24gYnVpbHQtaW4gc29ydFR5cGVcblxuICAgICAgICAgIHZhciBzb3J0TWV0aG9kID0gaXNGdW5jdGlvbihzb3J0VHlwZSkgfHwgKHVzZXJTb3J0VHlwZXMgfHwge30pW3NvcnRUeXBlXSB8fCBzb3J0VHlwZXNbc29ydFR5cGVdO1xuXG4gICAgICAgICAgaWYgKCFzb3J0TWV0aG9kKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdC1UYWJsZTogQ291bGQgbm90IGZpbmQgYSB2YWxpZCBzb3J0VHlwZSBvZiAnXCIgKyBzb3J0VHlwZSArIFwiJyBmb3IgY29sdW1uICdcIiArIHNvcnQuaWQgKyBcIicuXCIpO1xuICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBjb3JyZWN0IHNvcnRGbi5cbiAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHNob3VsZCBhbHdheXMgcmV0dXJuIGluIGFzY2VuZGluZyBvcmRlclxuXG5cbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3J0TWV0aG9kKGEsIGIsIHNvcnQuaWQsIHNvcnQuZGVzYyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSksIC8vIE1hcCB0aGUgZGlyZWN0aW9uc1xuICAgICAgICBhdmFpbGFibGVTb3J0QnkubWFwKGZ1bmN0aW9uIChzb3J0KSB7XG4gICAgICAgICAgLy8gRGV0ZWN0IGFuZCB1c2UgdGhlIHNvcnRJbnZlcnRlZCBvcHRpb25cbiAgICAgICAgICB2YXIgY29sdW1uID0gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gc29ydC5pZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChjb2x1bW4gJiYgY29sdW1uLnNvcnRJbnZlcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHNvcnQuZGVzYztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gIXNvcnQuZGVzYztcbiAgICAgICAgfSkpOyAvLyBJZiB0aGVyZSBhcmUgc3ViLXJvd3MsIHNvcnQgdGhlbVxuXG4gICAgICAgIHNvcnRlZERhdGEuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgc29ydGVkRmxhdFJvd3MucHVzaChyb3cpO1xuXG4gICAgICAgICAgaWYgKCFyb3cuc3ViUm93cyB8fCByb3cuc3ViUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3cuc3ViUm93cyA9IHNvcnREYXRhKHJvdy5zdWJSb3dzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzb3J0ZWREYXRhO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFtzb3J0RGF0YShyb3dzKSwgc29ydGVkRmxhdFJvd3NdO1xuICAgIH0sIFttYW51YWxTb3J0QnksIHNvcnRCeSwgcm93cywgZmxhdFJvd3MsIGFsbENvbHVtbnMsIG9yZGVyQnlGbiwgdXNlclNvcnRUeXBlc10pLFxuICAgICAgICBzb3J0ZWRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIHNvcnRlZEZsYXRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMV07XG5cbiAgICB2YXIgZ2V0QXV0b1Jlc2V0U29ydEJ5ID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFNvcnRCeSk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0U29ydEJ5KCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRTb3J0QnlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW21hbnVhbFNvcnRCeSA/IG51bGwgOiBkYXRhXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcHJlU29ydGVkUm93czogcm93cyxcbiAgICAgIHByZVNvcnRlZEZsYXRSb3dzOiBmbGF0Um93cyxcbiAgICAgIHNvcnRlZFJvd3M6IHNvcnRlZFJvd3MsXG4gICAgICBzb3J0ZWRGbGF0Um93czogc29ydGVkRmxhdFJvd3MsXG4gICAgICByb3dzOiBzb3J0ZWRSb3dzLFxuICAgICAgZmxhdFJvd3M6IHNvcnRlZEZsYXRSb3dzLFxuICAgICAgc2V0U29ydEJ5OiBzZXRTb3J0QnksXG4gICAgICB0b2dnbGVTb3J0Qnk6IHRvZ2dsZVNvcnRCeVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdE9yZGVyQnlGbihhcnIsIGZ1bmNzLCBkaXJzKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChhcnIpLnNvcnQoZnVuY3Rpb24gKHJvd0EsIHJvd0IpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnVuY3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIHNvcnRGbiA9IGZ1bmNzW2ldO1xuICAgICAgICB2YXIgZGVzYyA9IGRpcnNbaV0gPT09IGZhbHNlIHx8IGRpcnNbaV0gPT09ICdkZXNjJztcbiAgICAgICAgdmFyIHNvcnRJbnQgPSBzb3J0Rm4ocm93QSwgcm93Qik7XG5cbiAgICAgICAgaWYgKHNvcnRJbnQgIT09IDApIHtcbiAgICAgICAgICByZXR1cm4gZGVzYyA/IC1zb3J0SW50IDogc29ydEludDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGlyc1swXSA/IHJvd0EuaW5kZXggLSByb3dCLmluZGV4IDogcm93Qi5pbmRleCAtIHJvd0EuaW5kZXg7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGx1Z2luTmFtZSA9ICd1c2VQYWdpbmF0aW9uJzsgLy8gQWN0aW9uc1xuXG4gIGFjdGlvbnMucmVzZXRQYWdlID0gJ3Jlc2V0UGFnZSc7XG4gIGFjdGlvbnMuZ290b1BhZ2UgPSAnZ290b1BhZ2UnO1xuICBhY3Rpb25zLnNldFBhZ2VTaXplID0gJ3NldFBhZ2VTaXplJztcbiAgdmFyIHVzZVBhZ2luYXRpb24gPSBmdW5jdGlvbiB1c2VQYWdpbmF0aW9uKGhvb2tzKSB7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkNik7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQ2KTtcbiAgfTtcbiAgdXNlUGFnaW5hdGlvbi5wbHVnaW5OYW1lID0gcGx1Z2luTmFtZTtcblxuICBmdW5jdGlvbiByZWR1Y2VyJDYoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgICBwYWdlSW5kZXg6IDBcbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRQYWdlKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHBhZ2VJbmRleDogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLnBhZ2VJbmRleCB8fCAwXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuZ290b1BhZ2UpIHtcbiAgICAgIHZhciBwYWdlQ291bnQgPSBpbnN0YW5jZS5wYWdlQ291bnQsXG4gICAgICAgICAgcGFnZSA9IGluc3RhbmNlLnBhZ2U7XG4gICAgICB2YXIgbmV3UGFnZUluZGV4ID0gZnVuY3Rpb25hbFVwZGF0ZShhY3Rpb24ucGFnZUluZGV4LCBzdGF0ZS5wYWdlSW5kZXgpO1xuICAgICAgdmFyIGNhbk5hdmlnYXRlID0gZmFsc2U7XG5cbiAgICAgIGlmIChuZXdQYWdlSW5kZXggPiBzdGF0ZS5wYWdlSW5kZXgpIHtcbiAgICAgICAgLy8gbmV4dCBwYWdlXG4gICAgICAgIGNhbk5hdmlnYXRlID0gcGFnZUNvdW50ID09PSAtMSA/IHBhZ2UubGVuZ3RoID49IHN0YXRlLnBhZ2VTaXplIDogbmV3UGFnZUluZGV4IDwgcGFnZUNvdW50O1xuICAgICAgfSBlbHNlIGlmIChuZXdQYWdlSW5kZXggPCBzdGF0ZS5wYWdlSW5kZXgpIHtcbiAgICAgICAgLy8gcHJldiBwYWdlXG4gICAgICAgIGNhbk5hdmlnYXRlID0gbmV3UGFnZUluZGV4ID4gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmICghY2FuTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHBhZ2VJbmRleDogbmV3UGFnZUluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0UGFnZVNpemUpIHtcbiAgICAgIHZhciBwYWdlU2l6ZSA9IGFjdGlvbi5wYWdlU2l6ZTtcbiAgICAgIHZhciB0b3BSb3dJbmRleCA9IHN0YXRlLnBhZ2VTaXplICogc3RhdGUucGFnZUluZGV4O1xuICAgICAgdmFyIHBhZ2VJbmRleCA9IE1hdGguZmxvb3IodG9wUm93SW5kZXggLyBwYWdlU2l6ZSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHBhZ2VJbmRleDogcGFnZUluZGV4LFxuICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDYoaW5zdGFuY2UpIHtcbiAgICB2YXIgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRQYSA9IGluc3RhbmNlLmF1dG9SZXNldFBhZ2UsXG4gICAgICAgIGF1dG9SZXNldFBhZ2UgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0UGEgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0UGEsXG4gICAgICAgIF9pbnN0YW5jZSRtYW51YWxFeHBhbiA9IGluc3RhbmNlLm1hbnVhbEV4cGFuZGVkS2V5LFxuICAgICAgICBtYW51YWxFeHBhbmRlZEtleSA9IF9pbnN0YW5jZSRtYW51YWxFeHBhbiA9PT0gdm9pZCAwID8gJ2V4cGFuZGVkJyA6IF9pbnN0YW5jZSRtYW51YWxFeHBhbixcbiAgICAgICAgcGx1Z2lucyA9IGluc3RhbmNlLnBsdWdpbnMsXG4gICAgICAgIHVzZXJQYWdlQ291bnQgPSBpbnN0YW5jZS5wYWdlQ291bnQsXG4gICAgICAgIF9pbnN0YW5jZSRwYWdpbmF0ZUV4cCA9IGluc3RhbmNlLnBhZ2luYXRlRXhwYW5kZWRSb3dzLFxuICAgICAgICBwYWdpbmF0ZUV4cGFuZGVkUm93cyA9IF9pbnN0YW5jZSRwYWdpbmF0ZUV4cCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRwYWdpbmF0ZUV4cCxcbiAgICAgICAgX2luc3RhbmNlJGV4cGFuZFN1YlJvID0gaW5zdGFuY2UuZXhwYW5kU3ViUm93cyxcbiAgICAgICAgZXhwYW5kU3ViUm93cyA9IF9pbnN0YW5jZSRleHBhbmRTdWJSbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRleHBhbmRTdWJSbyxcbiAgICAgICAgX2luc3RhbmNlJHN0YXRlID0gaW5zdGFuY2Uuc3RhdGUsXG4gICAgICAgIHBhZ2VTaXplID0gX2luc3RhbmNlJHN0YXRlLnBhZ2VTaXplLFxuICAgICAgICBwYWdlSW5kZXggPSBfaW5zdGFuY2Ukc3RhdGUucGFnZUluZGV4LFxuICAgICAgICBleHBhbmRlZCA9IF9pbnN0YW5jZSRzdGF0ZS5leHBhbmRlZCxcbiAgICAgICAgZ2xvYmFsRmlsdGVyID0gX2luc3RhbmNlJHN0YXRlLmdsb2JhbEZpbHRlcixcbiAgICAgICAgZmlsdGVycyA9IF9pbnN0YW5jZSRzdGF0ZS5maWx0ZXJzLFxuICAgICAgICBncm91cEJ5ID0gX2luc3RhbmNlJHN0YXRlLmdyb3VwQnksXG4gICAgICAgIHNvcnRCeSA9IF9pbnN0YW5jZSRzdGF0ZS5zb3J0QnksXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICBtYW51YWxQYWdpbmF0aW9uID0gaW5zdGFuY2UubWFudWFsUGFnaW5hdGlvbjtcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUdsb2JhbEZpbHRlcicsICd1c2VGaWx0ZXJzJywgJ3VzZUdyb3VwQnknLCAndXNlU29ydEJ5JywgJ3VzZUV4cGFuZGVkJ10sICd1c2VQYWdpbmF0aW9uJyk7XG4gICAgdmFyIGdldEF1dG9SZXNldFBhZ2UgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0UGFnZSk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0UGFnZSgpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0UGFnZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIG1hbnVhbFBhZ2luYXRpb24gPyBudWxsIDogZGF0YSwgZ2xvYmFsRmlsdGVyLCBmaWx0ZXJzLCBncm91cEJ5LCBzb3J0QnldKTtcbiAgICB2YXIgcGFnZUNvdW50ID0gbWFudWFsUGFnaW5hdGlvbiA/IHVzZXJQYWdlQ291bnQgOiBNYXRoLmNlaWwocm93cy5sZW5ndGggLyBwYWdlU2l6ZSk7XG4gICAgdmFyIHBhZ2VPcHRpb25zID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGFnZUNvdW50ID4gMCA/IFtdLmNvbmNhdChuZXcgQXJyYXkocGFnZUNvdW50KSkuZmlsbChudWxsKS5tYXAoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9KSA6IFtdO1xuICAgIH0sIFtwYWdlQ291bnRdKTtcbiAgICB2YXIgcGFnZSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhZ2U7XG5cbiAgICAgIGlmIChtYW51YWxQYWdpbmF0aW9uKSB7XG4gICAgICAgIHBhZ2UgPSByb3dzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBhZ2VTdGFydCA9IHBhZ2VTaXplICogcGFnZUluZGV4O1xuICAgICAgICB2YXIgcGFnZUVuZCA9IHBhZ2VTdGFydCArIHBhZ2VTaXplO1xuICAgICAgICBwYWdlID0gcm93cy5zbGljZShwYWdlU3RhcnQsIHBhZ2VFbmQpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFnaW5hdGVFeHBhbmRlZFJvd3MpIHtcbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBleHBhbmRSb3dzKHBhZ2UsIHtcbiAgICAgICAgbWFudWFsRXhwYW5kZWRLZXk6IG1hbnVhbEV4cGFuZGVkS2V5LFxuICAgICAgICBleHBhbmRlZDogZXhwYW5kZWQsXG4gICAgICAgIGV4cGFuZFN1YlJvd3M6IGV4cGFuZFN1YlJvd3NcbiAgICAgIH0pO1xuICAgIH0sIFtleHBhbmRTdWJSb3dzLCBleHBhbmRlZCwgbWFudWFsRXhwYW5kZWRLZXksIG1hbnVhbFBhZ2luYXRpb24sIHBhZ2VJbmRleCwgcGFnZVNpemUsIHBhZ2luYXRlRXhwYW5kZWRSb3dzLCByb3dzXSk7XG4gICAgdmFyIGNhblByZXZpb3VzUGFnZSA9IHBhZ2VJbmRleCA+IDA7XG4gICAgdmFyIGNhbk5leHRQYWdlID0gcGFnZUNvdW50ID09PSAtMSA/IHBhZ2UubGVuZ3RoID49IHBhZ2VTaXplIDogcGFnZUluZGV4IDwgcGFnZUNvdW50IC0gMTtcbiAgICB2YXIgZ290b1BhZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAocGFnZUluZGV4KSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuZ290b1BhZ2UsXG4gICAgICAgIHBhZ2VJbmRleDogcGFnZUluZGV4XG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgcHJldmlvdXNQYWdlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdvdG9QYWdlKGZ1bmN0aW9uIChvbGQpIHtcbiAgICAgICAgcmV0dXJuIG9sZCAtIDE7XG4gICAgICB9KTtcbiAgICB9LCBbZ290b1BhZ2VdKTtcbiAgICB2YXIgbmV4dFBhZ2UgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ290b1BhZ2UoZnVuY3Rpb24gKG9sZCkge1xuICAgICAgICByZXR1cm4gb2xkICsgMTtcbiAgICAgIH0pO1xuICAgIH0sIFtnb3RvUGFnZV0pO1xuICAgIHZhciBzZXRQYWdlU2l6ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwYWdlU2l6ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldFBhZ2VTaXplLFxuICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHBhZ2VPcHRpb25zOiBwYWdlT3B0aW9ucyxcbiAgICAgIHBhZ2VDb3VudDogcGFnZUNvdW50LFxuICAgICAgcGFnZTogcGFnZSxcbiAgICAgIGNhblByZXZpb3VzUGFnZTogY2FuUHJldmlvdXNQYWdlLFxuICAgICAgY2FuTmV4dFBhZ2U6IGNhbk5leHRQYWdlLFxuICAgICAgZ290b1BhZ2U6IGdvdG9QYWdlLFxuICAgICAgcHJldmlvdXNQYWdlOiBwcmV2aW91c1BhZ2UsXG4gICAgICBuZXh0UGFnZTogbmV4dFBhZ2UsXG4gICAgICBzZXRQYWdlU2l6ZTogc2V0UGFnZVNpemVcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGlvbnMucmVzZXRQaXZvdCA9ICdyZXNldFBpdm90JztcbiAgYWN0aW9ucy50b2dnbGVQaXZvdCA9ICd0b2dnbGVQaXZvdCc7XG4gIHZhciBfVU5TVEFCTEVfdXNlUGl2b3RDb2x1bW5zID0gZnVuY3Rpb24gX1VOU1RBQkxFX3VzZVBpdm90Q29sdW1ucyhob29rcykge1xuICAgIGhvb2tzLmdldFBpdm90VG9nZ2xlUHJvcHMgPSBbZGVmYXVsdEdldFBpdm90VG9nZ2xlUHJvcHNdO1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDcpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlQWZ0ZXJEYXRhLnB1c2godXNlSW5zdGFuY2VBZnRlckRhdGEpO1xuICAgIGhvb2tzLmFsbENvbHVtbnMucHVzaChhbGxDb2x1bW5zKTtcbiAgICBob29rcy5hY2Nlc3NWYWx1ZS5wdXNoKGFjY2Vzc1ZhbHVlKTtcbiAgICBob29rcy5tYXRlcmlhbGl6ZWRDb2x1bW5zLnB1c2gobWF0ZXJpYWxpemVkQ29sdW1ucyk7XG4gICAgaG9va3MubWF0ZXJpYWxpemVkQ29sdW1uc0RlcHMucHVzaChtYXRlcmlhbGl6ZWRDb2x1bW5zRGVwcyk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnMucHVzaCh2aXNpYmxlQ29sdW1ucyQxKTtcbiAgICBob29rcy52aXNpYmxlQ29sdW1uc0RlcHMucHVzaCh2aXNpYmxlQ29sdW1uc0RlcHMpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkNyk7XG4gICAgaG9va3MucHJlcGFyZVJvdy5wdXNoKHByZXBhcmVSb3ckMik7XG4gIH07XG4gIF9VTlNUQUJMRV91c2VQaXZvdENvbHVtbnMucGx1Z2luTmFtZSA9ICd1c2VQaXZvdENvbHVtbnMnO1xuICB2YXIgZGVmYXVsdFBpdm90Q29sdW1ucyA9IFtdO1xuXG4gIHZhciBkZWZhdWx0R2V0UGl2b3RUb2dnbGVQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRQaXZvdFRvZ2dsZVByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGhlYWRlciA9IF9yZWYuaGVhZGVyO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2xpY2s6IGhlYWRlci5jYW5QaXZvdCA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgICBoZWFkZXIudG9nZ2xlUGl2b3QoKTtcbiAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6IGhlYWRlci5jYW5QaXZvdCA/ICdwb2ludGVyJyA6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIFBpdm90J1xuICAgIH1dO1xuICB9OyAvLyBSZWR1Y2VyXG5cblxuICBmdW5jdGlvbiByZWR1Y2VyJDcoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgcGl2b3RDb2x1bW5zOiBkZWZhdWx0UGl2b3RDb2x1bW5zXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0UGl2b3QpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcGl2b3RDb2x1bW5zOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUucGl2b3RDb2x1bW5zIHx8IGRlZmF1bHRQaXZvdENvbHVtbnNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVQaXZvdCkge1xuICAgICAgdmFyIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkLFxuICAgICAgICAgIHNldFBpdm90ID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIHJlc29sdmVkUGl2b3QgPSB0eXBlb2Ygc2V0UGl2b3QgIT09ICd1bmRlZmluZWQnID8gc2V0UGl2b3QgOiAhc3RhdGUucGl2b3RDb2x1bW5zLmluY2x1ZGVzKGNvbHVtbklkKTtcblxuICAgICAgaWYgKHJlc29sdmVkUGl2b3QpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIHBpdm90Q29sdW1uczogW10uY29uY2F0KHN0YXRlLnBpdm90Q29sdW1ucywgW2NvbHVtbklkXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcGl2b3RDb2x1bW5zOiBzdGF0ZS5waXZvdENvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQgIT09IGNvbHVtbklkO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2VBZnRlckRhdGEoaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5hbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgY29sdW1uLmlzUGl2b3RTb3VyY2UgPSBpbnN0YW5jZS5zdGF0ZS5waXZvdENvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbENvbHVtbnMoY29sdW1ucywgX3JlZjIpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmMi5pbnN0YW5jZTtcbiAgICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgY29sdW1uLmlzUGl2b3RTb3VyY2UgPSBpbnN0YW5jZS5zdGF0ZS5waXZvdENvbHVtbnMuaW5jbHVkZXMoY29sdW1uLmlkKTtcbiAgICAgIGNvbHVtbi51bmlxdWVWYWx1ZXMgPSBuZXcgU2V0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICBmdW5jdGlvbiBhY2Nlc3NWYWx1ZSh2YWx1ZSwgX3JlZjMpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZjMuY29sdW1uO1xuXG4gICAgaWYgKGNvbHVtbi51bmlxdWVWYWx1ZXMgJiYgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29sdW1uLnVuaXF1ZVZhbHVlcy5hZGQodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGVyaWFsaXplZENvbHVtbnMobWF0ZXJpYWxpemVkLCBfcmVmNCkge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWY0Lmluc3RhbmNlO1xuICAgIHZhciBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgc3RhdGUgPSBpbnN0YW5jZS5zdGF0ZTtcblxuICAgIGlmICghc3RhdGUucGl2b3RDb2x1bW5zLmxlbmd0aCB8fCAhc3RhdGUuZ3JvdXBCeSB8fCAhc3RhdGUuZ3JvdXBCeS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBtYXRlcmlhbGl6ZWQ7XG4gICAgfVxuXG4gICAgdmFyIHBpdm90Q29sdW1ucyA9IHN0YXRlLnBpdm90Q29sdW1ucy5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICByZXR1cm4gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBpZDtcbiAgICAgIH0pO1xuICAgIH0pLmZpbHRlcihCb29sZWFuKTtcbiAgICB2YXIgc291cmNlQ29sdW1ucyA9IGFsbENvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gIWQuaXNQaXZvdFNvdXJjZSAmJiAhc3RhdGUuZ3JvdXBCeS5pbmNsdWRlcyhkLmlkKSAmJiAhc3RhdGUucGl2b3RDb2x1bW5zLmluY2x1ZGVzKGQuaWQpO1xuICAgIH0pO1xuXG4gICAgdmFyIGJ1aWxkUGl2b3RDb2x1bW5zID0gZnVuY3Rpb24gYnVpbGRQaXZvdENvbHVtbnMoZGVwdGgsIHBhcmVudCwgcGl2b3RGaWx0ZXJzKSB7XG4gICAgICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgICAgICBkZXB0aCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaXZvdEZpbHRlcnMgPT09IHZvaWQgMCkge1xuICAgICAgICBwaXZvdEZpbHRlcnMgPSBbXTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBpdm90Q29sdW1uID0gcGl2b3RDb2x1bW5zW2RlcHRoXTtcblxuICAgICAgaWYgKCFwaXZvdENvbHVtbikge1xuICAgICAgICByZXR1cm4gc291cmNlQ29sdW1ucy5tYXAoZnVuY3Rpb24gKHNvdXJjZUNvbHVtbikge1xuICAgICAgICAgIC8vIFRPRE86IFdlIGNvdWxkIG9mZmVyIHN1cHBvcnQgaGVyZSBmb3IgcmVuZXN0aW5nIHBpdm90ZWRcbiAgICAgICAgICAvLyBjb2x1bW5zIGluc2lkZSBjb3BpZXMgb2YgdGhlaXIgaGVhZGVyIGdyb3Vwcy4gRm9yIG5vdyxcbiAgICAgICAgICAvLyB0aGF0IHNlZW1zIGxpa2UgaXQgd291bGQgYmUgKDEpIG92ZXJraWxsIG9uIG5lc3RpbmcsIGNvbnNpZGVyaW5nXG4gICAgICAgICAgLy8geW91IGFscmVhZHkgZ2V0IG5lc3RpbmcgZm9yIGV2ZXJ5IHBpdm90IGxldmVsIGFuZCAoMilcbiAgICAgICAgICAvLyByZWFsbHkgaGFyZC4gOilcbiAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHNvdXJjZUNvbHVtbiwge1xuICAgICAgICAgICAgY2FuUGl2b3Q6IGZhbHNlLFxuICAgICAgICAgICAgaXNQaXZvdGVkOiB0cnVlLFxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAgICBpZDogXCJcIiArIChwYXJlbnQgPyBwYXJlbnQuaWQgKyBcIi5cIiArIHNvdXJjZUNvbHVtbi5pZCA6IHNvdXJjZUNvbHVtbi5pZCksXG4gICAgICAgICAgICBhY2Nlc3NvcjogZnVuY3Rpb24gYWNjZXNzb3Iob3JpZ2luYWxSb3csIGksIHJvdykge1xuICAgICAgICAgICAgICBpZiAocGl2b3RGaWx0ZXJzLmV2ZXJ5KGZ1bmN0aW9uIChmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyKHJvdyk7XG4gICAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdy52YWx1ZXNbc291cmNlQ29sdW1uLmlkXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHVuaXF1ZVZhbHVlcyA9IEFycmF5LmZyb20ocGl2b3RDb2x1bW4udW5pcXVlVmFsdWVzKS5zb3J0KCk7XG4gICAgICByZXR1cm4gdW5pcXVlVmFsdWVzLm1hcChmdW5jdGlvbiAodW5pcXVlVmFsdWUpIHtcbiAgICAgICAgdmFyIGNvbHVtbkdyb3VwID0gX2V4dGVuZHMoe30sIHBpdm90Q29sdW1uLCB7XG4gICAgICAgICAgSGVhZGVyOiBwaXZvdENvbHVtbi5QaXZvdEhlYWRlciB8fCB0eXBlb2YgcGl2b3RDb2x1bW4uaGVhZGVyID09PSAnc3RyaW5nJyA/IHBpdm90Q29sdW1uLkhlYWRlciArIFwiOiBcIiArIHVuaXF1ZVZhbHVlIDogdW5pcXVlVmFsdWUsXG4gICAgICAgICAgaXNQaXZvdEdyb3VwOiB0cnVlLFxuICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgIGRlcHRoOiBkZXB0aCxcbiAgICAgICAgICBpZDogcGFyZW50ID8gcGFyZW50LmlkICsgXCIuXCIgKyBwaXZvdENvbHVtbi5pZCArIFwiLlwiICsgdW5pcXVlVmFsdWUgOiBwaXZvdENvbHVtbi5pZCArIFwiLlwiICsgdW5pcXVlVmFsdWUsXG4gICAgICAgICAgcGl2b3RWYWx1ZTogdW5pcXVlVmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29sdW1uR3JvdXAuY29sdW1ucyA9IGJ1aWxkUGl2b3RDb2x1bW5zKGRlcHRoICsgMSwgY29sdW1uR3JvdXAsIFtdLmNvbmNhdChwaXZvdEZpbHRlcnMsIFtmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgcmV0dXJuIHJvdy52YWx1ZXNbcGl2b3RDb2x1bW4uaWRdID09PSB1bmlxdWVWYWx1ZTtcbiAgICAgICAgfV0pKTtcbiAgICAgICAgcmV0dXJuIGNvbHVtbkdyb3VwO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBuZXdNYXRlcmlhbGl6ZWQgPSBmbGF0dGVuQ29sdW1ucyhidWlsZFBpdm90Q29sdW1ucygpKTtcbiAgICByZXR1cm4gW10uY29uY2F0KG1hdGVyaWFsaXplZCwgbmV3TWF0ZXJpYWxpemVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGVyaWFsaXplZENvbHVtbnNEZXBzKGRlcHMsIF9yZWY1KSB7XG4gICAgdmFyIF9yZWY1JGluc3RhbmNlJHN0YXRlID0gX3JlZjUuaW5zdGFuY2Uuc3RhdGUsXG4gICAgICAgIHBpdm90Q29sdW1ucyA9IF9yZWY1JGluc3RhbmNlJHN0YXRlLnBpdm90Q29sdW1ucyxcbiAgICAgICAgZ3JvdXBCeSA9IF9yZWY1JGluc3RhbmNlJHN0YXRlLmdyb3VwQnk7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChkZXBzLCBbcGl2b3RDb2x1bW5zLCBncm91cEJ5XSk7XG4gIH1cblxuICBmdW5jdGlvbiB2aXNpYmxlQ29sdW1ucyQxKHZpc2libGVDb2x1bW5zLCBfcmVmNikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWY2Lmluc3RhbmNlLnN0YXRlO1xuICAgIHZpc2libGVDb2x1bW5zID0gdmlzaWJsZUNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gIWQuaXNQaXZvdFNvdXJjZTtcbiAgICB9KTtcblxuICAgIGlmIChzdGF0ZS5waXZvdENvbHVtbnMubGVuZ3RoICYmIHN0YXRlLmdyb3VwQnkgJiYgc3RhdGUuZ3JvdXBCeS5sZW5ndGgpIHtcbiAgICAgIHZpc2libGVDb2x1bW5zID0gdmlzaWJsZUNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIGNvbHVtbi5pc0dyb3VwZWQgfHwgY29sdW1uLmlzUGl2b3RlZDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpYmxlQ29sdW1ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIHZpc2libGVDb2x1bW5zRGVwcyhkZXBzLCBfcmVmNykge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWY3Lmluc3RhbmNlO1xuICAgIHJldHVybiBbXS5jb25jYXQoZGVwcywgW2luc3RhbmNlLnN0YXRlLnBpdm90Q29sdW1ucywgaW5zdGFuY2Uuc3RhdGUuZ3JvdXBCeV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkNyhpbnN0YW5jZSkge1xuICAgIHZhciBjb2x1bW5zID0gaW5zdGFuY2UuY29sdW1ucyxcbiAgICAgICAgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIGZsYXRIZWFkZXJzID0gaW5zdGFuY2UuZmxhdEhlYWRlcnMsXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0UGkgPSBpbnN0YW5jZS5hdXRvUmVzZXRQaXZvdCxcbiAgICAgICAgYXV0b1Jlc2V0UGl2b3QgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0UGkgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0UGksXG4gICAgICAgIG1hbmF1bFBpdm90ID0gaW5zdGFuY2UubWFuYXVsUGl2b3QsXG4gICAgICAgIGRpc2FibGVQaXZvdCA9IGluc3RhbmNlLmRpc2FibGVQaXZvdCxcbiAgICAgICAgZGVmYXVsdENhblBpdm90ID0gaW5zdGFuY2UuZGVmYXVsdENhblBpdm90O1xuICAgIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIFsndXNlR3JvdXBCeSddLCAndXNlUGl2b3RDb2x1bW5zJyk7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICBhbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgdmFyIGFjY2Vzc29yID0gY29sdW1uLmFjY2Vzc29yLFxuICAgICAgICAgIGRlZmF1bHRDb2x1bW5QaXZvdCA9IGNvbHVtbi5kZWZhdWx0UGl2b3QsXG4gICAgICAgICAgY29sdW1uRGlzYWJsZVBpdm90ID0gY29sdW1uLmRpc2FibGVQaXZvdDtcbiAgICAgIGNvbHVtbi5jYW5QaXZvdCA9IGFjY2Vzc29yID8gZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5jYW5QaXZvdCwgY29sdW1uRGlzYWJsZVBpdm90ID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIGRpc2FibGVQaXZvdCA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCB0cnVlKSA6IGdldEZpcnN0RGVmaW5lZChjb2x1bW4uY2FuUGl2b3QsIGRlZmF1bHRDb2x1bW5QaXZvdCwgZGVmYXVsdENhblBpdm90LCBmYWxzZSk7XG5cbiAgICAgIGlmIChjb2x1bW4uY2FuUGl2b3QpIHtcbiAgICAgICAgY29sdW1uLnRvZ2dsZVBpdm90ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZS50b2dnbGVQaXZvdChjb2x1bW4uaWQpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb2x1bW4uQWdncmVnYXRlZCA9IGNvbHVtbi5BZ2dyZWdhdGVkIHx8IGNvbHVtbi5DZWxsO1xuICAgIH0pO1xuXG4gICAgdmFyIHRvZ2dsZVBpdm90ID0gZnVuY3Rpb24gdG9nZ2xlUGl2b3QoY29sdW1uSWQsIHZhbHVlKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlUGl2b3QsXG4gICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZmxhdEhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICBoZWFkZXIuZ2V0UGl2b3RUb2dnbGVQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0UGl2b3RUb2dnbGVQcm9wcywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBnZXRBdXRvUmVzZXRQaXZvdCA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRQaXZvdCk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0UGl2b3QoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldFBpdm90XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgbWFuYXVsUGl2b3QgPyBudWxsIDogY29sdW1uc10pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHRvZ2dsZVBpdm90OiB0b2dnbGVQaXZvdFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZVJvdyQyKHJvdykge1xuICAgIHJvdy5hbGxDZWxscy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAvLyBHcm91cGVkIGNlbGxzIGFyZSBpbiB0aGUgcGl2b3RDb2x1bW5zIGFuZCB0aGUgcGl2b3QgY2VsbCBmb3IgdGhlIHJvd1xuICAgICAgY2VsbC5pc1Bpdm90ZWQgPSBjZWxsLmNvbHVtbi5pc1Bpdm90ZWQ7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGx1Z2luTmFtZSQxID0gJ3VzZVJvd1NlbGVjdCc7IC8vIEFjdGlvbnNcblxuICBhY3Rpb25zLnJlc2V0U2VsZWN0ZWRSb3dzID0gJ3Jlc2V0U2VsZWN0ZWRSb3dzJztcbiAgYWN0aW9ucy50b2dnbGVBbGxSb3dzU2VsZWN0ZWQgPSAndG9nZ2xlQWxsUm93c1NlbGVjdGVkJztcbiAgYWN0aW9ucy50b2dnbGVSb3dTZWxlY3RlZCA9ICd0b2dnbGVSb3dTZWxlY3RlZCc7XG4gIGFjdGlvbnMudG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZCA9ICd0b2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkJztcbiAgdmFyIHVzZVJvd1NlbGVjdCA9IGZ1bmN0aW9uIHVzZVJvd1NlbGVjdChob29rcykge1xuICAgIGhvb2tzLmdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHNdO1xuICAgIGhvb2tzLmdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzID0gW2RlZmF1bHRHZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wc107XG4gICAgaG9va3MuZ2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzID0gW2RlZmF1bHRHZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHNdO1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDgpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkOCk7XG4gICAgaG9va3MucHJlcGFyZVJvdy5wdXNoKHByZXBhcmVSb3ckMyk7XG4gIH07XG4gIHVzZVJvd1NlbGVjdC5wbHVnaW5OYW1lID0gcGx1Z2luTmFtZSQxO1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgICAgcm93ID0gX3JlZi5yb3c7XG4gICAgdmFyIF9pbnN0YW5jZSRtYW51YWxSb3dTZSA9IGluc3RhbmNlLm1hbnVhbFJvd1NlbGVjdGVkS2V5LFxuICAgICAgICBtYW51YWxSb3dTZWxlY3RlZEtleSA9IF9pbnN0YW5jZSRtYW51YWxSb3dTZSA9PT0gdm9pZCAwID8gJ2lzU2VsZWN0ZWQnIDogX2luc3RhbmNlJG1hbnVhbFJvd1NlO1xuICAgIHZhciBjaGVja2VkID0gZmFsc2U7XG5cbiAgICBpZiAocm93Lm9yaWdpbmFsICYmIHJvdy5vcmlnaW5hbFttYW51YWxSb3dTZWxlY3RlZEtleV0pIHtcbiAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja2VkID0gcm93LmlzU2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgcm93LnRvZ2dsZVJvd1NlbGVjdGVkKGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIFJvdyBTZWxlY3RlZCcsXG4gICAgICBpbmRldGVybWluYXRlOiByb3cuaXNTb21lU2VsZWN0ZWRcbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYyLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgIGluc3RhbmNlLnRvZ2dsZUFsbFJvd3NTZWxlY3RlZChlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIGNoZWNrZWQ6IGluc3RhbmNlLmlzQWxsUm93c1NlbGVjdGVkLFxuICAgICAgdGl0bGU6ICdUb2dnbGUgQWxsIFJvd3MgU2VsZWN0ZWQnLFxuICAgICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbighaW5zdGFuY2UuaXNBbGxSb3dzU2VsZWN0ZWQgJiYgT2JqZWN0LmtleXMoaW5zdGFuY2Uuc3RhdGUuc2VsZWN0ZWRSb3dJZHMpLmxlbmd0aClcbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHMocHJvcHMsIF9yZWYzKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjMuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgICAgaW5zdGFuY2UudG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZChlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIGNoZWNrZWQ6IGluc3RhbmNlLmlzQWxsUGFnZVJvd3NTZWxlY3RlZCxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIEFsbCBDdXJyZW50IFBhZ2UgUm93cyBTZWxlY3RlZCcsXG4gICAgICBpbmRldGVybWluYXRlOiBCb29sZWFuKCFpbnN0YW5jZS5pc0FsbFBhZ2VSb3dzU2VsZWN0ZWQgJiYgaW5zdGFuY2UucGFnZS5zb21lKGZ1bmN0aW9uIChfcmVmNCkge1xuICAgICAgICB2YXIgaWQgPSBfcmVmNC5pZDtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnN0YXRlLnNlbGVjdGVkUm93SWRzW2lkXTtcbiAgICAgIH0pKVxuICAgIH1dO1xuICB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuXG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ4KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHNlbGVjdGVkUm93SWRzOiB7fVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldFNlbGVjdGVkUm93cykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzZWxlY3RlZFJvd0lkczogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLnNlbGVjdGVkUm93SWRzIHx8IHt9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlQWxsUm93c1NlbGVjdGVkKSB7XG4gICAgICB2YXIgc2V0U2VsZWN0ZWQgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgaXNBbGxSb3dzU2VsZWN0ZWQgPSBpbnN0YW5jZS5pc0FsbFJvd3NTZWxlY3RlZCxcbiAgICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICAgIF9pbnN0YW5jZSRub25Hcm91cGVkUiA9IGluc3RhbmNlLm5vbkdyb3VwZWRSb3dzQnlJZCxcbiAgICAgICAgICBub25Hcm91cGVkUm93c0J5SWQgPSBfaW5zdGFuY2Ukbm9uR3JvdXBlZFIgPT09IHZvaWQgMCA/IHJvd3NCeUlkIDogX2luc3RhbmNlJG5vbkdyb3VwZWRSO1xuICAgICAgdmFyIHNlbGVjdEFsbCA9IHR5cGVvZiBzZXRTZWxlY3RlZCAhPT0gJ3VuZGVmaW5lZCcgPyBzZXRTZWxlY3RlZCA6ICFpc0FsbFJvd3NTZWxlY3RlZDsgLy8gT25seSByZW1vdmUvYWRkIHRoZSByb3dzIHRoYXQgYXJlIHZpc2libGUgb24gdGhlIHNjcmVlblxuICAgICAgLy8gIExlYXZlIGFsbCB0aGUgb3RoZXIgcm93cyB0aGF0IGFyZSBzZWxlY3RlZCBhbG9uZS5cblxuICAgICAgdmFyIHNlbGVjdGVkUm93SWRzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc2VsZWN0ZWRSb3dJZHMpO1xuXG4gICAgICBpZiAoc2VsZWN0QWxsKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG5vbkdyb3VwZWRSb3dzQnlJZCkuZm9yRWFjaChmdW5jdGlvbiAocm93SWQpIHtcbiAgICAgICAgICBzZWxlY3RlZFJvd0lkc1tyb3dJZF0gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG5vbkdyb3VwZWRSb3dzQnlJZCkuZm9yRWFjaChmdW5jdGlvbiAocm93SWQpIHtcbiAgICAgICAgICBkZWxldGUgc2VsZWN0ZWRSb3dJZHNbcm93SWRdO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzZWxlY3RlZFJvd0lkczogc2VsZWN0ZWRSb3dJZHNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVSb3dTZWxlY3RlZCkge1xuICAgICAgdmFyIGlkID0gYWN0aW9uLmlkLFxuICAgICAgICAgIF9zZXRTZWxlY3RlZCA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciBfcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgICBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8gPSBpbnN0YW5jZS5zZWxlY3RTdWJSb3dzLFxuICAgICAgICAgIHNlbGVjdFN1YlJvd3MgPSBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8gPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8sXG4gICAgICAgICAgZ2V0U3ViUm93cyA9IGluc3RhbmNlLmdldFN1YlJvd3M7XG4gICAgICB2YXIgaXNTZWxlY3RlZCA9IHN0YXRlLnNlbGVjdGVkUm93SWRzW2lkXTtcbiAgICAgIHZhciBzaG91bGRFeGlzdCA9IHR5cGVvZiBfc2V0U2VsZWN0ZWQgIT09ICd1bmRlZmluZWQnID8gX3NldFNlbGVjdGVkIDogIWlzU2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChpc1NlbGVjdGVkID09PSBzaG91bGRFeGlzdCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdTZWxlY3RlZFJvd0lkcyA9IF9leHRlbmRzKHt9LCBzdGF0ZS5zZWxlY3RlZFJvd0lkcyk7XG5cbiAgICAgIHZhciBoYW5kbGVSb3dCeUlkID0gZnVuY3Rpb24gaGFuZGxlUm93QnlJZChpZCkge1xuICAgICAgICB2YXIgcm93ID0gX3Jvd3NCeUlkW2lkXTtcblxuICAgICAgICBpZiAoIXJvdy5pc0dyb3VwZWQpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkRXhpc3QpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGVkUm93SWRzW2lkXSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBuZXdTZWxlY3RlZFJvd0lkc1tpZF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdFN1YlJvd3MgJiYgZ2V0U3ViUm93cyhyb3cpKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFN1YlJvd3Mocm93KS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVSb3dCeUlkKHJvdy5pZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGhhbmRsZVJvd0J5SWQoaWQpO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzZWxlY3RlZFJvd0lkczogbmV3U2VsZWN0ZWRSb3dJZHNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkKSB7XG4gICAgICB2YXIgX3NldFNlbGVjdGVkMiA9IGFjdGlvbi52YWx1ZTtcblxuICAgICAgdmFyIHBhZ2UgPSBpbnN0YW5jZS5wYWdlLFxuICAgICAgICAgIF9yb3dzQnlJZDIgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgICBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8yID0gaW5zdGFuY2Uuc2VsZWN0U3ViUm93cyxcbiAgICAgICAgICBfc2VsZWN0U3ViUm93cyA9IF9pbnN0YW5jZSRzZWxlY3RTdWJSbzIgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8yLFxuICAgICAgICAgIGlzQWxsUGFnZVJvd3NTZWxlY3RlZCA9IGluc3RhbmNlLmlzQWxsUGFnZVJvd3NTZWxlY3RlZCxcbiAgICAgICAgICBfZ2V0U3ViUm93cyA9IGluc3RhbmNlLmdldFN1YlJvd3M7XG5cbiAgICAgIHZhciBfc2VsZWN0QWxsID0gdHlwZW9mIF9zZXRTZWxlY3RlZDIgIT09ICd1bmRlZmluZWQnID8gX3NldFNlbGVjdGVkMiA6ICFpc0FsbFBhZ2VSb3dzU2VsZWN0ZWQ7XG5cbiAgICAgIHZhciBfbmV3U2VsZWN0ZWRSb3dJZHMgPSBfZXh0ZW5kcyh7fSwgc3RhdGUuc2VsZWN0ZWRSb3dJZHMpO1xuXG4gICAgICB2YXIgX2hhbmRsZVJvd0J5SWQgPSBmdW5jdGlvbiBfaGFuZGxlUm93QnlJZChpZCkge1xuICAgICAgICB2YXIgcm93ID0gX3Jvd3NCeUlkMltpZF07XG5cbiAgICAgICAgaWYgKCFyb3cuaXNHcm91cGVkKSB7XG4gICAgICAgICAgaWYgKF9zZWxlY3RBbGwpIHtcbiAgICAgICAgICAgIF9uZXdTZWxlY3RlZFJvd0lkc1tpZF0gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgX25ld1NlbGVjdGVkUm93SWRzW2lkXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3NlbGVjdFN1YlJvd3MgJiYgX2dldFN1YlJvd3Mocm93KSkge1xuICAgICAgICAgIHJldHVybiBfZ2V0U3ViUm93cyhyb3cpLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIF9oYW5kbGVSb3dCeUlkKHJvdy5pZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHBhZ2UuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHJldHVybiBfaGFuZGxlUm93QnlJZChyb3cuaWQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNlbGVjdGVkUm93SWRzOiBfbmV3U2VsZWN0ZWRSb3dJZHNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDgoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgX2luc3RhbmNlJG5vbkdyb3VwZWRSMiA9IGluc3RhbmNlLm5vbkdyb3VwZWRSb3dzQnlJZCxcbiAgICAgICAgbm9uR3JvdXBlZFJvd3NCeUlkID0gX2luc3RhbmNlJG5vbkdyb3VwZWRSMiA9PT0gdm9pZCAwID8gcm93c0J5SWQgOiBfaW5zdGFuY2Ukbm9uR3JvdXBlZFIyLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0U2UgPSBpbnN0YW5jZS5hdXRvUmVzZXRTZWxlY3RlZFJvd3MsXG4gICAgICAgIGF1dG9SZXNldFNlbGVjdGVkUm93cyA9IF9pbnN0YW5jZSRhdXRvUmVzZXRTZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRTZSxcbiAgICAgICAgc2VsZWN0ZWRSb3dJZHMgPSBpbnN0YW5jZS5zdGF0ZS5zZWxlY3RlZFJvd0lkcyxcbiAgICAgICAgX2luc3RhbmNlJHNlbGVjdFN1YlJvMyA9IGluc3RhbmNlLnNlbGVjdFN1YlJvd3MsXG4gICAgICAgIHNlbGVjdFN1YlJvd3MgPSBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8zID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJHNlbGVjdFN1YlJvMyxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgcGFnZSA9IGluc3RhbmNlLnBhZ2UsXG4gICAgICAgIGdldFN1YlJvd3MgPSBpbnN0YW5jZS5nZXRTdWJSb3dzO1xuICAgIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIFsndXNlRmlsdGVycycsICd1c2VHcm91cEJ5JywgJ3VzZVNvcnRCeScsICd1c2VFeHBhbmRlZCcsICd1c2VQYWdpbmF0aW9uJ10sICd1c2VSb3dTZWxlY3QnKTtcbiAgICB2YXIgc2VsZWN0ZWRGbGF0Um93cyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGVjdGVkRmxhdFJvd3MgPSBbXTtcbiAgICAgIHJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHZhciBpc1NlbGVjdGVkID0gc2VsZWN0U3ViUm93cyA/IGdldFJvd0lzU2VsZWN0ZWQocm93LCBzZWxlY3RlZFJvd0lkcywgZ2V0U3ViUm93cykgOiAhIXNlbGVjdGVkUm93SWRzW3Jvdy5pZF07XG4gICAgICAgIHJvdy5pc1NlbGVjdGVkID0gISFpc1NlbGVjdGVkO1xuICAgICAgICByb3cuaXNTb21lU2VsZWN0ZWQgPSBpc1NlbGVjdGVkID09PSBudWxsO1xuXG4gICAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgc2VsZWN0ZWRGbGF0Um93cy5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNlbGVjdGVkRmxhdFJvd3M7XG4gICAgfSwgW3Jvd3MsIHNlbGVjdFN1YlJvd3MsIHNlbGVjdGVkUm93SWRzLCBnZXRTdWJSb3dzXSk7XG4gICAgdmFyIGlzQWxsUm93c1NlbGVjdGVkID0gQm9vbGVhbihPYmplY3Qua2V5cyhub25Hcm91cGVkUm93c0J5SWQpLmxlbmd0aCAmJiBPYmplY3Qua2V5cyhzZWxlY3RlZFJvd0lkcykubGVuZ3RoKTtcbiAgICB2YXIgaXNBbGxQYWdlUm93c1NlbGVjdGVkID0gaXNBbGxSb3dzU2VsZWN0ZWQ7XG5cbiAgICBpZiAoaXNBbGxSb3dzU2VsZWN0ZWQpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhub25Hcm91cGVkUm93c0J5SWQpLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiAhc2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgfSkpIHtcbiAgICAgICAgaXNBbGxSb3dzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzQWxsUm93c1NlbGVjdGVkKSB7XG4gICAgICBpZiAocGFnZSAmJiBwYWdlLmxlbmd0aCAmJiBwYWdlLnNvbWUoZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgICAgIHZhciBpZCA9IF9yZWY1LmlkO1xuICAgICAgICByZXR1cm4gIXNlbGVjdGVkUm93SWRzW2lkXTtcbiAgICAgIH0pKSB7XG4gICAgICAgIGlzQWxsUGFnZVJvd3NTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBnZXRBdXRvUmVzZXRTZWxlY3RlZFJvd3MgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0U2VsZWN0ZWRSb3dzKTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRTZWxlY3RlZFJvd3MoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldFNlbGVjdGVkUm93c1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIGRhdGFdKTtcbiAgICB2YXIgdG9nZ2xlQWxsUm93c1NlbGVjdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NTZWxlY3RlZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgdG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciB0b2dnbGVSb3dTZWxlY3RlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpZCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlUm93U2VsZWN0ZWQsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2UpO1xuICAgIHZhciBnZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgdmFyIGdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHNlbGVjdGVkRmxhdFJvd3M6IHNlbGVjdGVkRmxhdFJvd3MsXG4gICAgICBpc0FsbFJvd3NTZWxlY3RlZDogaXNBbGxSb3dzU2VsZWN0ZWQsXG4gICAgICBpc0FsbFBhZ2VSb3dzU2VsZWN0ZWQ6IGlzQWxsUGFnZVJvd3NTZWxlY3RlZCxcbiAgICAgIHRvZ2dsZVJvd1NlbGVjdGVkOiB0b2dnbGVSb3dTZWxlY3RlZCxcbiAgICAgIHRvZ2dsZUFsbFJvd3NTZWxlY3RlZDogdG9nZ2xlQWxsUm93c1NlbGVjdGVkLFxuICAgICAgZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHM6IGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzLFxuICAgICAgZ2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzOiBnZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHMsXG4gICAgICB0b2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkOiB0b2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmVwYXJlUm93JDMocm93LCBfcmVmNikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWY2Lmluc3RhbmNlO1xuXG4gICAgcm93LnRvZ2dsZVJvd1NlbGVjdGVkID0gZnVuY3Rpb24gKHNldCkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnRvZ2dsZVJvd1NlbGVjdGVkKHJvdy5pZCwgc2V0KTtcbiAgICB9O1xuXG4gICAgcm93LmdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMgPSBtYWtlUHJvcEdldHRlcihpbnN0YW5jZS5nZXRIb29rcygpLmdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgIHJvdzogcm93XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSb3dJc1NlbGVjdGVkKHJvdywgc2VsZWN0ZWRSb3dJZHMsIGdldFN1YlJvd3MpIHtcbiAgICBpZiAoc2VsZWN0ZWRSb3dJZHNbcm93LmlkXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHN1YlJvd3MgPSBnZXRTdWJSb3dzKHJvdyk7XG5cbiAgICBpZiAoc3ViUm93cyAmJiBzdWJSb3dzLmxlbmd0aCkge1xuICAgICAgdmFyIGFsbENoaWxkcmVuU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgdmFyIHNvbWVTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgc3ViUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJSb3cpIHtcbiAgICAgICAgLy8gQmFpbCBvdXQgZWFybHkgaWYgd2Uga25vdyBib3RoIG9mIHRoZXNlXG4gICAgICAgIGlmIChzb21lU2VsZWN0ZWQgJiYgIWFsbENoaWxkcmVuU2VsZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2V0Um93SXNTZWxlY3RlZChzdWJSb3csIHNlbGVjdGVkUm93SWRzLCBnZXRTdWJSb3dzKSkge1xuICAgICAgICAgIHNvbWVTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxsQ2hpbGRyZW5TZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhbGxDaGlsZHJlblNlbGVjdGVkID8gdHJ1ZSA6IHNvbWVTZWxlY3RlZCA/IG51bGwgOiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGVmYXVsdEluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yID0gZnVuY3Rpb24gZGVmYXVsdEluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yKHJvdykge1xuICAgIHJldHVybiB7fTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvciA9IGZ1bmN0aW9uIGRlZmF1bHRJbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IoY2VsbCkge1xuICAgIHJldHVybiB7fTtcbiAgfTsgLy8gQWN0aW9uc1xuXG5cbiAgYWN0aW9ucy5zZXRSb3dTdGF0ZSA9ICdzZXRSb3dTdGF0ZSc7XG4gIGFjdGlvbnMuc2V0Q2VsbFN0YXRlID0gJ3NldENlbGxTdGF0ZSc7XG4gIGFjdGlvbnMucmVzZXRSb3dTdGF0ZSA9ICdyZXNldFJvd1N0YXRlJztcbiAgdmFyIHVzZVJvd1N0YXRlID0gZnVuY3Rpb24gdXNlUm93U3RhdGUoaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ5KTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDkpO1xuICAgIGhvb2tzLnByZXBhcmVSb3cucHVzaChwcmVwYXJlUm93JDQpO1xuICB9O1xuICB1c2VSb3dTdGF0ZS5wbHVnaW5OYW1lID0gJ3VzZVJvd1N0YXRlJztcblxuICBmdW5jdGlvbiByZWR1Y2VyJDkoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICB2YXIgX2luc3RhbmNlJGluaXRpYWxSb3dTID0gaW5zdGFuY2UuaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IsXG4gICAgICAgIGluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yID0gX2luc3RhbmNlJGluaXRpYWxSb3dTID09PSB2b2lkIDAgPyBkZWZhdWx0SW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IgOiBfaW5zdGFuY2UkaW5pdGlhbFJvd1MsXG4gICAgICAgIF9pbnN0YW5jZSRpbml0aWFsQ2VsbCA9IGluc3RhbmNlLmluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvcixcbiAgICAgICAgaW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yID0gX2luc3RhbmNlJGluaXRpYWxDZWxsID09PSB2b2lkIDAgPyBkZWZhdWx0SW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yIDogX2luc3RhbmNlJGluaXRpYWxDZWxsLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkO1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHJvd1N0YXRlOiB7fVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldFJvd1N0YXRlKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHJvd1N0YXRlOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUucm93U3RhdGUgfHwge31cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRSb3dTdGF0ZSkge1xuICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgdmFyIHJvd0lkID0gYWN0aW9uLnJvd0lkLFxuICAgICAgICAgIHZhbHVlID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIG9sZFJvd1N0YXRlID0gdHlwZW9mIHN0YXRlLnJvd1N0YXRlW3Jvd0lkXSAhPT0gJ3VuZGVmaW5lZCcgPyBzdGF0ZS5yb3dTdGF0ZVtyb3dJZF0gOiBpbml0aWFsUm93U3RhdGVBY2Nlc3Nvcihyb3dzQnlJZFtyb3dJZF0pO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICByb3dTdGF0ZTogX2V4dGVuZHMoe30sIHN0YXRlLnJvd1N0YXRlLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltyb3dJZF0gPSBmdW5jdGlvbmFsVXBkYXRlKHZhbHVlLCBvbGRSb3dTdGF0ZSksIF9leHRlbmRzMikpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0Q2VsbFN0YXRlKSB7XG4gICAgICB2YXIgX29sZFJvd1N0YXRlJGNlbGxTdGF0LCBfcm93c0J5SWQkX3Jvd0lkLCBfcm93c0J5SWQkX3Jvd0lkJGNlbGwsIF9leHRlbmRzMywgX2V4dGVuZHM0O1xuXG4gICAgICB2YXIgX3Jvd0lkID0gYWN0aW9uLnJvd0lkLFxuICAgICAgICAgIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkLFxuICAgICAgICAgIF92YWx1ZSA9IGFjdGlvbi52YWx1ZTtcblxuICAgICAgdmFyIF9vbGRSb3dTdGF0ZSA9IHR5cGVvZiBzdGF0ZS5yb3dTdGF0ZVtfcm93SWRdICE9PSAndW5kZWZpbmVkJyA/IHN0YXRlLnJvd1N0YXRlW19yb3dJZF0gOiBpbml0aWFsUm93U3RhdGVBY2Nlc3Nvcihyb3dzQnlJZFtfcm93SWRdKTtcblxuICAgICAgdmFyIG9sZENlbGxTdGF0ZSA9IHR5cGVvZiAoX29sZFJvd1N0YXRlID09IG51bGwgPyB2b2lkIDAgOiAoX29sZFJvd1N0YXRlJGNlbGxTdGF0ID0gX29sZFJvd1N0YXRlLmNlbGxTdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9vbGRSb3dTdGF0ZSRjZWxsU3RhdFtjb2x1bW5JZF0pICE9PSAndW5kZWZpbmVkJyA/IF9vbGRSb3dTdGF0ZS5jZWxsU3RhdGVbY29sdW1uSWRdIDogaW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yKChfcm93c0J5SWQkX3Jvd0lkID0gcm93c0J5SWRbX3Jvd0lkXSkgPT0gbnVsbCA/IHZvaWQgMCA6IChfcm93c0J5SWQkX3Jvd0lkJGNlbGwgPSBfcm93c0J5SWQkX3Jvd0lkLmNlbGxzKSA9PSBudWxsID8gdm9pZCAwIDogX3Jvd3NCeUlkJF9yb3dJZCRjZWxsLmZpbmQoZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIGNlbGwuY29sdW1uLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcm93U3RhdGU6IF9leHRlbmRzKHt9LCBzdGF0ZS5yb3dTdGF0ZSwgKF9leHRlbmRzNCA9IHt9LCBfZXh0ZW5kczRbX3Jvd0lkXSA9IF9leHRlbmRzKHt9LCBfb2xkUm93U3RhdGUsIHtcbiAgICAgICAgICBjZWxsU3RhdGU6IF9leHRlbmRzKHt9LCBfb2xkUm93U3RhdGUuY2VsbFN0YXRlIHx8IHt9LCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tjb2x1bW5JZF0gPSBmdW5jdGlvbmFsVXBkYXRlKF92YWx1ZSwgb2xkQ2VsbFN0YXRlKSwgX2V4dGVuZHMzKSlcbiAgICAgICAgfSksIF9leHRlbmRzNCkpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQ5KGluc3RhbmNlKSB7XG4gICAgdmFyIF9pbnN0YW5jZSRhdXRvUmVzZXRSbyA9IGluc3RhbmNlLmF1dG9SZXNldFJvd1N0YXRlLFxuICAgICAgICBhdXRvUmVzZXRSb3dTdGF0ZSA9IF9pbnN0YW5jZSRhdXRvUmVzZXRSbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRSbyxcbiAgICAgICAgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2g7XG4gICAgdmFyIHNldFJvd1N0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHJvd0lkLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRSb3dTdGF0ZSxcbiAgICAgICAgcm93SWQ6IHJvd0lkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBzZXRDZWxsU3RhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAocm93SWQsIGNvbHVtbklkLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRDZWxsU3RhdGUsXG4gICAgICAgIHJvd0lkOiByb3dJZCxcbiAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBnZXRBdXRvUmVzZXRSb3dTdGF0ZSA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRSb3dTdGF0ZSk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0Um93U3RhdGUoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldFJvd1N0YXRlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkYXRhXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgc2V0Um93U3RhdGU6IHNldFJvd1N0YXRlLFxuICAgICAgc2V0Q2VsbFN0YXRlOiBzZXRDZWxsU3RhdGVcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3ckNChyb3csIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIHZhciBfaW5zdGFuY2UkaW5pdGlhbFJvd1MyID0gaW5zdGFuY2UuaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3IsXG4gICAgICAgIGluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yID0gX2luc3RhbmNlJGluaXRpYWxSb3dTMiA9PT0gdm9pZCAwID8gZGVmYXVsdEluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yIDogX2luc3RhbmNlJGluaXRpYWxSb3dTMixcbiAgICAgICAgX2luc3RhbmNlJGluaXRpYWxDZWxsMiA9IGluc3RhbmNlLmluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvcixcbiAgICAgICAgaW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yID0gX2luc3RhbmNlJGluaXRpYWxDZWxsMiA9PT0gdm9pZCAwID8gZGVmYXVsdEluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvciA6IF9pbnN0YW5jZSRpbml0aWFsQ2VsbDIsXG4gICAgICAgIHJvd1N0YXRlID0gaW5zdGFuY2Uuc3RhdGUucm93U3RhdGU7XG5cbiAgICBpZiAocm93KSB7XG4gICAgICByb3cuc3RhdGUgPSB0eXBlb2Ygcm93U3RhdGVbcm93LmlkXSAhPT0gJ3VuZGVmaW5lZCcgPyByb3dTdGF0ZVtyb3cuaWRdIDogaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3Iocm93KTtcblxuICAgICAgcm93LnNldFN0YXRlID0gZnVuY3Rpb24gKHVwZGF0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnNldFJvd1N0YXRlKHJvdy5pZCwgdXBkYXRlcik7XG4gICAgICB9O1xuXG4gICAgICByb3cuY2VsbHMuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICBpZiAoIXJvdy5zdGF0ZS5jZWxsU3RhdGUpIHtcbiAgICAgICAgICByb3cuc3RhdGUuY2VsbFN0YXRlID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBjZWxsLnN0YXRlID0gdHlwZW9mIHJvdy5zdGF0ZS5jZWxsU3RhdGVbY2VsbC5jb2x1bW4uaWRdICE9PSAndW5kZWZpbmVkJyA/IHJvdy5zdGF0ZS5jZWxsU3RhdGVbY2VsbC5jb2x1bW4uaWRdIDogaW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yKGNlbGwpO1xuXG4gICAgICAgIGNlbGwuc2V0U3RhdGUgPSBmdW5jdGlvbiAodXBkYXRlcikge1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5zZXRDZWxsU3RhdGUocm93LmlkLCBjZWxsLmNvbHVtbi5pZCwgdXBkYXRlcik7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhY3Rpb25zLnJlc2V0Q29sdW1uT3JkZXIgPSAncmVzZXRDb2x1bW5PcmRlcic7XG4gIGFjdGlvbnMuc2V0Q29sdW1uT3JkZXIgPSAnc2V0Q29sdW1uT3JkZXInO1xuICB2YXIgdXNlQ29sdW1uT3JkZXIgPSBmdW5jdGlvbiB1c2VDb2x1bW5PcmRlcihob29rcykge1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJGEpO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zRGVwcy5wdXNoKGZ1bmN0aW9uIChkZXBzLCBfcmVmKSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChkZXBzLCBbaW5zdGFuY2Uuc3RhdGUuY29sdW1uT3JkZXJdKTtcbiAgICB9KTtcbiAgICBob29rcy52aXNpYmxlQ29sdW1ucy5wdXNoKHZpc2libGVDb2x1bW5zJDIpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkYSk7XG4gIH07XG4gIHVzZUNvbHVtbk9yZGVyLnBsdWdpbk5hbWUgPSAndXNlQ29sdW1uT3JkZXInO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkYShzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBjb2x1bW5PcmRlcjogW11cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRDb2x1bW5PcmRlcikge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5PcmRlcjogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLmNvbHVtbk9yZGVyIHx8IFtdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0Q29sdW1uT3JkZXIpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29sdW1uT3JkZXI6IGZ1bmN0aW9uYWxVcGRhdGUoYWN0aW9uLmNvbHVtbk9yZGVyLCBzdGF0ZS5jb2x1bW5PcmRlcilcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZpc2libGVDb2x1bW5zJDIoY29sdW1ucywgX3JlZjIpIHtcbiAgICB2YXIgY29sdW1uT3JkZXIgPSBfcmVmMi5pbnN0YW5jZS5zdGF0ZS5jb2x1bW5PcmRlcjtcblxuICAgIC8vIElmIHRoZXJlIGlzIG5vIG9yZGVyLCByZXR1cm4gdGhlIG5vcm1hbCBjb2x1bW5zXG4gICAgaWYgKCFjb2x1bW5PcmRlciB8fCAhY29sdW1uT3JkZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG5cbiAgICB2YXIgY29sdW1uT3JkZXJDb3B5ID0gW10uY29uY2F0KGNvbHVtbk9yZGVyKTsgLy8gSWYgdGhlcmUgaXMgYW4gb3JkZXIsIG1ha2UgYSBjb3B5IG9mIHRoZSBjb2x1bW5zXG5cbiAgICB2YXIgY29sdW1uc0NvcHkgPSBbXS5jb25jYXQoY29sdW1ucyk7IC8vIEFuZCBtYWtlIGEgbmV3IG9yZGVyZWQgYXJyYXkgb2YgdGhlIGNvbHVtbnNcblxuICAgIHZhciBjb2x1bW5zSW5PcmRlciA9IFtdOyAvLyBMb29wIG92ZXIgdGhlIGNvbHVtbnMgYW5kIHBsYWNlIHRoZW0gaW4gb3JkZXIgaW50byB0aGUgbmV3IGFycmF5XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgIHZhciB0YXJnZXRDb2x1bW5JZCA9IGNvbHVtbk9yZGVyQ29weS5zaGlmdCgpO1xuICAgICAgdmFyIGZvdW5kSW5kZXggPSBjb2x1bW5zQ29weS5maW5kSW5kZXgoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IHRhcmdldENvbHVtbklkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChmb3VuZEluZGV4ID4gLTEpIHtcbiAgICAgICAgY29sdW1uc0luT3JkZXIucHVzaChjb2x1bW5zQ29weS5zcGxpY2UoZm91bmRJbmRleCwgMSlbMF0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aGlsZSAoY29sdW1uc0NvcHkubGVuZ3RoICYmIGNvbHVtbk9yZGVyQ29weS5sZW5ndGgpIHtcbiAgICAgIF9sb29wKCk7XG4gICAgfSAvLyBJZiB0aGVyZSBhcmUgYW55IGNvbHVtbnMgbGVmdCwgYWRkIHRoZW0gdG8gdGhlIGVuZFxuXG5cbiAgICByZXR1cm4gW10uY29uY2F0KGNvbHVtbnNJbk9yZGVyLCBjb2x1bW5zQ29weSk7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSRhKGluc3RhbmNlKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2g7XG4gICAgaW5zdGFuY2Uuc2V0Q29sdW1uT3JkZXIgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoY29sdW1uT3JkZXIpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0Q29sdW1uT3JkZXIsXG4gICAgICAgIGNvbHVtbk9yZGVyOiBjb2x1bW5PcmRlclxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gIH1cblxuICBkZWZhdWx0Q29sdW1uLmNhblJlc2l6ZSA9IHRydWU7IC8vIEFjdGlvbnNcblxuICBhY3Rpb25zLmNvbHVtblN0YXJ0UmVzaXppbmcgPSAnY29sdW1uU3RhcnRSZXNpemluZyc7XG4gIGFjdGlvbnMuY29sdW1uUmVzaXppbmcgPSAnY29sdW1uUmVzaXppbmcnO1xuICBhY3Rpb25zLmNvbHVtbkRvbmVSZXNpemluZyA9ICdjb2x1bW5Eb25lUmVzaXppbmcnO1xuICBhY3Rpb25zLnJlc2V0UmVzaXplID0gJ3Jlc2V0UmVzaXplJztcbiAgdmFyIHVzZVJlc2l6ZUNvbHVtbnMgPSBmdW5jdGlvbiB1c2VSZXNpemVDb2x1bW5zKGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0UmVzaXplclByb3BzID0gW2RlZmF1bHRHZXRSZXNpemVyUHJvcHNdO1xuICAgIGhvb2tzLmdldEhlYWRlclByb3BzLnB1c2goe1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgIH1cbiAgICB9KTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciRiKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJGIpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucy5wdXNoKHVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucyQxKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFJlc2l6ZXJQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRSZXNpemVyUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgICBoZWFkZXIgPSBfcmVmLmhlYWRlcjtcbiAgICB2YXIgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaDtcblxuICAgIHZhciBvblJlc2l6ZVN0YXJ0ID0gZnVuY3Rpb24gb25SZXNpemVTdGFydChlLCBoZWFkZXIpIHtcbiAgICAgIHZhciBpc1RvdWNoRXZlbnQgPSBmYWxzZTtcblxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIC8vIGxldHMgbm90IHJlc3BvbmQgdG8gbXVsdGlwbGUgdG91Y2hlcyAoZS5nLiAyIG9yIDMgZmluZ2VycylcbiAgICAgICAgaWYgKGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzVG91Y2hFdmVudCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWFkZXJzVG9SZXNpemUgPSBnZXRMZWFmSGVhZGVycyhoZWFkZXIpO1xuICAgICAgdmFyIGhlYWRlcklkV2lkdGhzID0gaGVhZGVyc1RvUmVzaXplLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gW2QuaWQsIGQudG90YWxXaWR0aF07XG4gICAgICB9KTtcbiAgICAgIHZhciBjbGllbnRYID0gaXNUb3VjaEV2ZW50ID8gTWF0aC5yb3VuZChlLnRvdWNoZXNbMF0uY2xpZW50WCkgOiBlLmNsaWVudFg7XG5cbiAgICAgIHZhciBkaXNwYXRjaE1vdmUgPSBmdW5jdGlvbiBkaXNwYXRjaE1vdmUoY2xpZW50WFBvcykge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5jb2x1bW5SZXNpemluZyxcbiAgICAgICAgICBjbGllbnRYOiBjbGllbnRYUG9zXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdmFyIGRpc3BhdGNoRW5kID0gZnVuY3Rpb24gZGlzcGF0Y2hFbmQoKSB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5jb2x1bW5Eb25lUmVzaXppbmdcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgaGFuZGxlcnNBbmRFdmVudHMgPSB7XG4gICAgICAgIG1vdXNlOiB7XG4gICAgICAgICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICAgICAgICBtb3ZlSGFuZGxlcjogZnVuY3Rpb24gbW92ZUhhbmRsZXIoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoTW92ZShlLmNsaWVudFgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBFdmVudDogJ21vdXNldXAnLFxuICAgICAgICAgIHVwSGFuZGxlcjogZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZXJzQW5kRXZlbnRzLm1vdXNlLm1vdmVIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVyc0FuZEV2ZW50cy5tb3VzZS51cEhhbmRsZXIpO1xuICAgICAgICAgICAgZGlzcGF0Y2hFbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvdWNoOiB7XG4gICAgICAgICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICAgICAgICBtb3ZlSGFuZGxlcjogZnVuY3Rpb24gbW92ZUhhbmRsZXIoZSkge1xuICAgICAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpc3BhdGNoTW92ZShlLnRvdWNoZXNbMF0uY2xpZW50WCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cEV2ZW50OiAndG91Y2hlbmQnLFxuICAgICAgICAgIHVwSGFuZGxlcjogZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlcnNBbmRFdmVudHMudG91Y2gubW92ZUV2ZW50LCBoYW5kbGVyc0FuZEV2ZW50cy50b3VjaC5tb3ZlSGFuZGxlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZXJzQW5kRXZlbnRzLnRvdWNoLnVwRXZlbnQsIGhhbmRsZXJzQW5kRXZlbnRzLnRvdWNoLm1vdmVIYW5kbGVyKTtcbiAgICAgICAgICAgIGRpc3BhdGNoRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGV2ZW50cyA9IGlzVG91Y2hFdmVudCA/IGhhbmRsZXJzQW5kRXZlbnRzLnRvdWNoIDogaGFuZGxlcnNBbmRFdmVudHMubW91c2U7XG4gICAgICB2YXIgcGFzc2l2ZUlmU3VwcG9ydGVkID0gcGFzc2l2ZUV2ZW50U3VwcG9ydGVkKCkgPyB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9IDogZmFsc2U7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5tb3ZlRXZlbnQsIGV2ZW50cy5tb3ZlSGFuZGxlciwgcGFzc2l2ZUlmU3VwcG9ydGVkKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLnVwRXZlbnQsIGV2ZW50cy51cEhhbmRsZXIsIHBhc3NpdmVJZlN1cHBvcnRlZCk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuY29sdW1uU3RhcnRSZXNpemluZyxcbiAgICAgICAgY29sdW1uSWQ6IGhlYWRlci5pZCxcbiAgICAgICAgY29sdW1uV2lkdGg6IGhlYWRlci50b3RhbFdpZHRoLFxuICAgICAgICBoZWFkZXJJZFdpZHRoczogaGVhZGVySWRXaWR0aHMsXG4gICAgICAgIGNsaWVudFg6IGNsaWVudFhcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgICByZXR1cm4gZS5wZXJzaXN0KCkgfHwgb25SZXNpemVTdGFydChlLCBoZWFkZXIpO1xuICAgICAgfSxcbiAgICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgcmV0dXJuIGUucGVyc2lzdCgpIHx8IG9uUmVzaXplU3RhcnQoZSwgaGVhZGVyKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdjb2wtcmVzaXplJ1xuICAgICAgfSxcbiAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICByb2xlOiAnc2VwYXJhdG9yJ1xuICAgIH1dO1xuICB9O1xuXG4gIHVzZVJlc2l6ZUNvbHVtbnMucGx1Z2luTmFtZSA9ICd1c2VSZXNpemVDb2x1bW5zJztcblxuICBmdW5jdGlvbiByZWR1Y2VyJGIoc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBjb2x1bW5SZXNpemluZzoge1xuICAgICAgICAgIGNvbHVtbldpZHRoczoge31cbiAgICAgICAgfVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldFJlc2l6ZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5SZXNpemluZzoge1xuICAgICAgICAgIGNvbHVtbldpZHRoczoge31cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmNvbHVtblN0YXJ0UmVzaXppbmcpIHtcbiAgICAgIHZhciBjbGllbnRYID0gYWN0aW9uLmNsaWVudFgsXG4gICAgICAgICAgY29sdW1uSWQgPSBhY3Rpb24uY29sdW1uSWQsXG4gICAgICAgICAgY29sdW1uV2lkdGggPSBhY3Rpb24uY29sdW1uV2lkdGgsXG4gICAgICAgICAgaGVhZGVySWRXaWR0aHMgPSBhY3Rpb24uaGVhZGVySWRXaWR0aHM7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbHVtblJlc2l6aW5nOiBfZXh0ZW5kcyh7fSwgc3RhdGUuY29sdW1uUmVzaXppbmcsIHtcbiAgICAgICAgICBzdGFydFg6IGNsaWVudFgsXG4gICAgICAgICAgaGVhZGVySWRXaWR0aHM6IGhlYWRlcklkV2lkdGhzLFxuICAgICAgICAgIGNvbHVtbldpZHRoOiBjb2x1bW5XaWR0aCxcbiAgICAgICAgICBpc1Jlc2l6aW5nQ29sdW1uOiBjb2x1bW5JZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmNvbHVtblJlc2l6aW5nKSB7XG4gICAgICB2YXIgX2NsaWVudFggPSBhY3Rpb24uY2xpZW50WDtcblxuICAgICAgdmFyIF9zdGF0ZSRjb2x1bW5SZXNpemluZyA9IHN0YXRlLmNvbHVtblJlc2l6aW5nLFxuICAgICAgICAgIHN0YXJ0WCA9IF9zdGF0ZSRjb2x1bW5SZXNpemluZy5zdGFydFgsXG4gICAgICAgICAgX2NvbHVtbldpZHRoID0gX3N0YXRlJGNvbHVtblJlc2l6aW5nLmNvbHVtbldpZHRoLFxuICAgICAgICAgIF9zdGF0ZSRjb2x1bW5SZXNpemluZzIgPSBfc3RhdGUkY29sdW1uUmVzaXppbmcuaGVhZGVySWRXaWR0aHMsXG4gICAgICAgICAgX2hlYWRlcklkV2lkdGhzID0gX3N0YXRlJGNvbHVtblJlc2l6aW5nMiA9PT0gdm9pZCAwID8gW10gOiBfc3RhdGUkY29sdW1uUmVzaXppbmcyO1xuXG4gICAgICB2YXIgZGVsdGFYID0gX2NsaWVudFggLSBzdGFydFg7XG4gICAgICB2YXIgcGVyY2VudGFnZURlbHRhWCA9IGRlbHRhWCAvIF9jb2x1bW5XaWR0aDtcbiAgICAgIHZhciBuZXdDb2x1bW5XaWR0aHMgPSB7fTtcblxuICAgICAgX2hlYWRlcklkV2lkdGhzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciBoZWFkZXJJZCA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgaGVhZGVyV2lkdGggPSBfcmVmMlsxXTtcbiAgICAgICAgbmV3Q29sdW1uV2lkdGhzW2hlYWRlcklkXSA9IE1hdGgubWF4KGhlYWRlcldpZHRoICsgaGVhZGVyV2lkdGggKiBwZXJjZW50YWdlRGVsdGFYLCAwKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbHVtblJlc2l6aW5nOiBfZXh0ZW5kcyh7fSwgc3RhdGUuY29sdW1uUmVzaXppbmcsIHtcbiAgICAgICAgICBjb2x1bW5XaWR0aHM6IF9leHRlbmRzKHt9LCBzdGF0ZS5jb2x1bW5SZXNpemluZy5jb2x1bW5XaWR0aHMsIHt9LCBuZXdDb2x1bW5XaWR0aHMpXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuY29sdW1uRG9uZVJlc2l6aW5nKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbHVtblJlc2l6aW5nOiBfZXh0ZW5kcyh7fSwgc3RhdGUuY29sdW1uUmVzaXppbmcsIHtcbiAgICAgICAgICBzdGFydFg6IG51bGwsXG4gICAgICAgICAgaXNSZXNpemluZ0NvbHVtbjogbnVsbFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucyQxID0gZnVuY3Rpb24gdXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zKGluc3RhbmNlKSB7XG4gICAgdmFyIGZsYXRIZWFkZXJzID0gaW5zdGFuY2UuZmxhdEhlYWRlcnMsXG4gICAgICAgIGRpc2FibGVSZXNpemluZyA9IGluc3RhbmNlLmRpc2FibGVSZXNpemluZyxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgY29sdW1uUmVzaXppbmcgPSBpbnN0YW5jZS5zdGF0ZS5jb2x1bW5SZXNpemluZztcbiAgICB2YXIgZ2V0SW5zdGFuY2UgPSB1c2VHZXRMYXRlc3QoaW5zdGFuY2UpO1xuICAgIGZsYXRIZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgdmFyIGNhblJlc2l6ZSA9IGdldEZpcnN0RGVmaW5lZChoZWFkZXIuZGlzYWJsZVJlc2l6aW5nID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIGRpc2FibGVSZXNpemluZyA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIGhlYWRlci5jYW5SZXNpemUgPSBjYW5SZXNpemU7XG4gICAgICBoZWFkZXIud2lkdGggPSBjb2x1bW5SZXNpemluZy5jb2x1bW5XaWR0aHNbaGVhZGVyLmlkXSB8fCBoZWFkZXIub3JpZ2luYWxXaWR0aCB8fCBoZWFkZXIud2lkdGg7XG4gICAgICBoZWFkZXIuaXNSZXNpemluZyA9IGNvbHVtblJlc2l6aW5nLmlzUmVzaXppbmdDb2x1bW4gPT09IGhlYWRlci5pZDtcblxuICAgICAgaWYgKGNhblJlc2l6ZSkge1xuICAgICAgICBoZWFkZXIuZ2V0UmVzaXplclByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRSZXNpemVyUHJvcHMsIHtcbiAgICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSRiKGluc3RhbmNlKSB7XG4gICAgdmFyIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0UmUgPSBpbnN0YW5jZS5hdXRvUmVzZXRSZXNpemUsXG4gICAgICAgIGF1dG9SZXNldFJlc2l6ZSA9IF9pbnN0YW5jZSRhdXRvUmVzZXRSZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRSZSxcbiAgICAgICAgY29sdW1ucyA9IGluc3RhbmNlLmNvbHVtbnM7XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VBYnNvbHV0ZUxheW91dCddLCAndXNlUmVzaXplQ29sdW1ucycpO1xuICAgIHZhciBnZXRBdXRvUmVzZXRSZXNpemUgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0UmVzaXplKTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRSZXNpemUoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldFJlc2l6ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbY29sdW1uc10pO1xuICAgIHZhciByZXNldFJlc2l6aW5nID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldFJlc2l6ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcmVzZXRSZXNpemluZzogcmVzZXRSZXNpemluZ1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGVhZkhlYWRlcnMoaGVhZGVyKSB7XG4gICAgdmFyIGxlYWZIZWFkZXJzID0gW107XG5cbiAgICB2YXIgcmVjdXJzZUhlYWRlciA9IGZ1bmN0aW9uIHJlY3Vyc2VIZWFkZXIoaGVhZGVyKSB7XG4gICAgICBpZiAoaGVhZGVyLmNvbHVtbnMgJiYgaGVhZGVyLmNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgIGhlYWRlci5jb2x1bW5zLm1hcChyZWN1cnNlSGVhZGVyKTtcbiAgICAgIH1cblxuICAgICAgbGVhZkhlYWRlcnMucHVzaChoZWFkZXIpO1xuICAgIH07XG5cbiAgICByZWN1cnNlSGVhZGVyKGhlYWRlcik7XG4gICAgcmV0dXJuIGxlYWZIZWFkZXJzO1xuICB9XG5cbiAgdmFyIGNlbGxTdHlsZXMgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwXG4gIH07XG4gIHZhciB1c2VBYnNvbHV0ZUxheW91dCA9IGZ1bmN0aW9uIHVzZUFic29sdXRlTGF5b3V0KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0VGFibGVCb2R5UHJvcHMucHVzaChnZXRSb3dTdHlsZXMpO1xuICAgIGhvb2tzLmdldFJvd1Byb3BzLnB1c2goZ2V0Um93U3R5bGVzKTtcbiAgICBob29rcy5nZXRIZWFkZXJHcm91cFByb3BzLnB1c2goZ2V0Um93U3R5bGVzKTtcbiAgICBob29rcy5nZXRGb290ZXJHcm91cFByb3BzLnB1c2goZ2V0Um93U3R5bGVzKTtcbiAgICBob29rcy5nZXRIZWFkZXJQcm9wcy5wdXNoKGZ1bmN0aW9uIChwcm9wcywgX3JlZikge1xuICAgICAgdmFyIGNvbHVtbiA9IF9yZWYuY29sdW1uO1xuICAgICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNlbGxTdHlsZXMsIHtcbiAgICAgICAgICBsZWZ0OiBjb2x1bW4udG90YWxMZWZ0ICsgXCJweFwiLFxuICAgICAgICAgIHdpZHRoOiBjb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgICB9KVxuICAgICAgfV07XG4gICAgfSk7XG4gICAgaG9va3MuZ2V0Q2VsbFByb3BzLnB1c2goZnVuY3Rpb24gKHByb3BzLCBfcmVmMikge1xuICAgICAgdmFyIGNlbGwgPSBfcmVmMi5jZWxsO1xuICAgICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNlbGxTdHlsZXMsIHtcbiAgICAgICAgICBsZWZ0OiBjZWxsLmNvbHVtbi50b3RhbExlZnQgKyBcInB4XCIsXG4gICAgICAgICAgd2lkdGg6IGNlbGwuY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgICAgfSlcbiAgICAgIH1dO1xuICAgIH0pO1xuICAgIGhvb2tzLmdldEZvb3RlclByb3BzLnB1c2goZnVuY3Rpb24gKHByb3BzLCBfcmVmMykge1xuICAgICAgdmFyIGNvbHVtbiA9IF9yZWYzLmNvbHVtbjtcbiAgICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjZWxsU3R5bGVzLCB7XG4gICAgICAgICAgbGVmdDogY29sdW1uLnRvdGFsTGVmdCArIFwicHhcIixcbiAgICAgICAgICB3aWR0aDogY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgICAgfSlcbiAgICAgIH1dO1xuICAgIH0pO1xuICB9O1xuICB1c2VBYnNvbHV0ZUxheW91dC5wbHVnaW5OYW1lID0gJ3VzZUFic29sdXRlTGF5b3V0JztcblxuICB2YXIgZ2V0Um93U3R5bGVzID0gZnVuY3Rpb24gZ2V0Um93U3R5bGVzKHByb3BzLCBfcmVmNCkge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWY0Lmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogaW5zdGFuY2UudG90YWxDb2x1bW5zV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgY2VsbFN0eWxlcyQxID0ge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH07XG5cbiAgdmFyIGdldFJvd1N0eWxlcyQxID0gZnVuY3Rpb24gZ2V0Um93U3R5bGVzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIHdpZHRoOiBpbnN0YW5jZS50b3RhbENvbHVtbnNXaWR0aCArIFwicHhcIlxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciB1c2VCbG9ja0xheW91dCA9IGZ1bmN0aW9uIHVzZUJsb2NrTGF5b3V0KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0Um93UHJvcHMucHVzaChnZXRSb3dTdHlsZXMkMSk7XG4gICAgaG9va3MuZ2V0SGVhZGVyR3JvdXBQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyQxKTtcbiAgICBob29rcy5nZXRGb290ZXJHcm91cFByb3BzLnB1c2goZ2V0Um93U3R5bGVzJDEpO1xuICAgIGhvb2tzLmdldEhlYWRlclByb3BzLnB1c2goZnVuY3Rpb24gKHByb3BzLCBfcmVmMikge1xuICAgICAgdmFyIGNvbHVtbiA9IF9yZWYyLmNvbHVtbjtcbiAgICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjZWxsU3R5bGVzJDEsIHtcbiAgICAgICAgICB3aWR0aDogY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgICAgfSlcbiAgICAgIH1dO1xuICAgIH0pO1xuICAgIGhvb2tzLmdldENlbGxQcm9wcy5wdXNoKGZ1bmN0aW9uIChwcm9wcywgX3JlZjMpIHtcbiAgICAgIHZhciBjZWxsID0gX3JlZjMuY2VsbDtcbiAgICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjZWxsU3R5bGVzJDEsIHtcbiAgICAgICAgICB3aWR0aDogY2VsbC5jb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgICB9KVxuICAgICAgfV07XG4gICAgfSk7XG4gICAgaG9va3MuZ2V0Rm9vdGVyUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWY0KSB7XG4gICAgICB2YXIgY29sdW1uID0gX3JlZjQuY29sdW1uO1xuICAgICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIGNlbGxTdHlsZXMkMSwge1xuICAgICAgICAgIHdpZHRoOiBjb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgICB9KVxuICAgICAgfV07XG4gICAgfSk7XG4gIH07XG4gIHVzZUJsb2NrTGF5b3V0LnBsdWdpbk5hbWUgPSAndXNlQmxvY2tMYXlvdXQnO1xuXG4gIGZ1bmN0aW9uIHVzZUZsZXhMYXlvdXQoaG9va3MpIHtcbiAgICBob29rcy5nZXRUYWJsZVByb3BzLnB1c2goZ2V0VGFibGVQcm9wcyk7XG4gICAgaG9va3MuZ2V0Um93UHJvcHMucHVzaChnZXRSb3dTdHlsZXMkMik7XG4gICAgaG9va3MuZ2V0SGVhZGVyR3JvdXBQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyQyKTtcbiAgICBob29rcy5nZXRGb290ZXJHcm91cFByb3BzLnB1c2goZ2V0Um93U3R5bGVzJDIpO1xuICAgIGhvb2tzLmdldEhlYWRlclByb3BzLnB1c2goZ2V0SGVhZGVyUHJvcHMpO1xuICAgIGhvb2tzLmdldENlbGxQcm9wcy5wdXNoKGdldENlbGxQcm9wcyk7XG4gICAgaG9va3MuZ2V0Rm9vdGVyUHJvcHMucHVzaChnZXRGb290ZXJQcm9wcyk7XG4gIH1cbiAgdXNlRmxleExheW91dC5wbHVnaW5OYW1lID0gJ3VzZUZsZXhMYXlvdXQnO1xuXG4gIHZhciBnZXRUYWJsZVByb3BzID0gZnVuY3Rpb24gZ2V0VGFibGVQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgbWluV2lkdGg6IGluc3RhbmNlLnRvdGFsQ29sdW1uc01pbldpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGdldFJvd1N0eWxlcyQyID0gZnVuY3Rpb24gZ2V0Um93U3R5bGVzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYyLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleDogJzEgMCBhdXRvJyxcbiAgICAgICAgbWluV2lkdGg6IGluc3RhbmNlLnRvdGFsQ29sdW1uc01pbldpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGdldEhlYWRlclByb3BzID0gZnVuY3Rpb24gZ2V0SGVhZGVyUHJvcHMocHJvcHMsIF9yZWYzKSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWYzLmNvbHVtbjtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZmxleDogY29sdW1uLnRvdGFsRmxleFdpZHRoID8gY29sdW1uLnRvdGFsRmxleFdpZHRoICsgXCIgMCBhdXRvXCIgOiB1bmRlZmluZWQsXG4gICAgICAgIG1pbldpZHRoOiBjb2x1bW4udG90YWxNaW5XaWR0aCArIFwicHhcIixcbiAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGdldENlbGxQcm9wcyA9IGZ1bmN0aW9uIGdldENlbGxQcm9wcyhwcm9wcywgX3JlZjQpIHtcbiAgICB2YXIgY2VsbCA9IF9yZWY0LmNlbGw7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGZsZXg6IGNlbGwuY29sdW1uLnRvdGFsRmxleFdpZHRoICsgXCIgMCBhdXRvXCIsXG4gICAgICAgIG1pbldpZHRoOiBjZWxsLmNvbHVtbi50b3RhbE1pbldpZHRoICsgXCJweFwiLFxuICAgICAgICB3aWR0aDogY2VsbC5jb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBnZXRGb290ZXJQcm9wcyA9IGZ1bmN0aW9uIGdldEZvb3RlclByb3BzKHByb3BzLCBfcmVmNSkge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmNS5jb2x1bW47XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGZsZXg6IGNvbHVtbi50b3RhbEZsZXhXaWR0aCA/IGNvbHVtbi50b3RhbEZsZXhXaWR0aCArIFwiIDAgYXV0b1wiIDogdW5kZWZpbmVkLFxuICAgICAgICBtaW5XaWR0aDogY29sdW1uLnRvdGFsTWluV2lkdGggKyBcInB4XCIsXG4gICAgICAgIHdpZHRoOiBjb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHVzZUdyaWRMYXlvdXQoaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciRjKTtcbiAgICBob29rcy5nZXRUYWJsZVByb3BzLnB1c2goZ2V0VGFibGVQcm9wcyQxKTtcbiAgICBob29rcy5nZXRIZWFkZXJQcm9wcy5wdXNoKGdldEhlYWRlclByb3BzJDEpO1xuICB9XG4gIHVzZUdyaWRMYXlvdXQucGx1Z2luTmFtZSA9ICd1c2VHcmlkTGF5b3V0JztcblxuICB2YXIgZ2V0VGFibGVQcm9wcyQxID0gZnVuY3Rpb24gZ2V0VGFibGVQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGluc3RhbmNlLnN0YXRlLmdyaWRMYXlvdXQuY29sdW1uV2lkdGhzLm1hcChmdW5jdGlvbiAodykge1xuICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9KS5qb2luKFwiIFwiKVxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBnZXRIZWFkZXJQcm9wcyQxID0gZnVuY3Rpb24gZ2V0SGVhZGVyUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWYyLmNvbHVtbjtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBpZDogXCJoZWFkZXItY2VsbC1cIiArIGNvbHVtbi5pZCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcInN0aWNreVwiIC8vZW5hYmxlcyBhIHNjcm9sbCB3cmFwcGVyIHRvIGJlIHBsYWNlZCBhcm91bmQgdGhlIHRhYmxlIGFuZCBoYXZlIHN0aWNreSBoZWFkZXJzXG5cbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICBmdW5jdGlvbiByZWR1Y2VyJGMoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiaW5pdFwiKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBncmlkTGF5b3V0OiB7XG4gICAgICAgICAgY29sdW1uV2lkdGhzOiBpbnN0YW5jZS5jb2x1bW5zLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJhdXRvXCI7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJjb2x1bW5TdGFydFJlc2l6aW5nXCIpIHtcbiAgICAgIHZhciBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZDtcbiAgICAgIHZhciBjb2x1bW5JbmRleCA9IGluc3RhbmNlLnZpc2libGVDb2x1bW5zLmZpbmRJbmRleChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgIHJldHVybiBjb2wuaWQgPT09IGNvbHVtbklkO1xuICAgICAgfSk7XG4gICAgICB2YXIgZWxXaWR0aCA9IGdldEVsZW1lbnRXaWR0aChjb2x1bW5JZCk7XG5cbiAgICAgIGlmIChlbFdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGdyaWRMYXlvdXQ6IF9leHRlbmRzKHt9LCBzdGF0ZS5ncmlkTGF5b3V0LCB7XG4gICAgICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgICAgICBjb2x1bW5JbmRleDogY29sdW1uSW5kZXgsXG4gICAgICAgICAgICBzdGFydGluZ1dpZHRoOiBlbFdpZHRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBcImNvbHVtblJlc2l6aW5nXCIpIHtcbiAgICAgIHZhciBfc3RhdGUkZ3JpZExheW91dCA9IHN0YXRlLmdyaWRMYXlvdXQsXG4gICAgICAgICAgX2NvbHVtbkluZGV4ID0gX3N0YXRlJGdyaWRMYXlvdXQuY29sdW1uSW5kZXgsXG4gICAgICAgICAgc3RhcnRpbmdXaWR0aCA9IF9zdGF0ZSRncmlkTGF5b3V0LnN0YXJ0aW5nV2lkdGgsXG4gICAgICAgICAgY29sdW1uV2lkdGhzID0gX3N0YXRlJGdyaWRMYXlvdXQuY29sdW1uV2lkdGhzO1xuICAgICAgdmFyIGNoYW5nZSA9IHN0YXRlLmNvbHVtblJlc2l6aW5nLnN0YXJ0WCAtIGFjdGlvbi5jbGllbnRYO1xuICAgICAgdmFyIG5ld1dpZHRoID0gc3RhcnRpbmdXaWR0aCAtIGNoYW5nZTtcbiAgICAgIHZhciBjb2x1bW5XaWR0aHNDb3B5ID0gW10uY29uY2F0KGNvbHVtbldpZHRocyk7XG4gICAgICBjb2x1bW5XaWR0aHNDb3B5W19jb2x1bW5JbmRleF0gPSBuZXdXaWR0aCArIFwicHhcIjtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZ3JpZExheW91dDogX2V4dGVuZHMoe30sIHN0YXRlLmdyaWRMYXlvdXQsIHtcbiAgICAgICAgICBjb2x1bW5XaWR0aHM6IGNvbHVtbldpZHRoc0NvcHlcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEVsZW1lbnRXaWR0aChjb2x1bW5JZCkge1xuICAgIHZhciBfZG9jdW1lbnQkZ2V0RWxlbWVudEI7XG5cbiAgICB2YXIgd2lkdGggPSAoX2RvY3VtZW50JGdldEVsZW1lbnRCID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItY2VsbC1cIiArIGNvbHVtbklkKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9kb2N1bWVudCRnZXRFbGVtZW50Qi5vZmZzZXRXaWR0aDtcblxuICAgIGlmICh3aWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0cy5fVU5TVEFCTEVfdXNlUGl2b3RDb2x1bW5zID0gX1VOU1RBQkxFX3VzZVBpdm90Q29sdW1ucztcbiAgZXhwb3J0cy5hY3Rpb25zID0gYWN0aW9ucztcbiAgZXhwb3J0cy5kZWZhdWx0Q29sdW1uID0gZGVmYXVsdENvbHVtbjtcbiAgZXhwb3J0cy5kZWZhdWx0R3JvdXBCeUZuID0gZGVmYXVsdEdyb3VwQnlGbjtcbiAgZXhwb3J0cy5kZWZhdWx0T3JkZXJCeUZuID0gZGVmYXVsdE9yZGVyQnlGbjtcbiAgZXhwb3J0cy5kZWZhdWx0UmVuZGVyZXIgPSBkZWZhdWx0UmVuZGVyZXI7XG4gIGV4cG9ydHMuZW1wdHlSZW5kZXJlciA9IGVtcHR5UmVuZGVyZXI7XG4gIGV4cG9ydHMuZW5zdXJlUGx1Z2luT3JkZXIgPSBlbnN1cmVQbHVnaW5PcmRlcjtcbiAgZXhwb3J0cy5mbGV4UmVuZGVyID0gZmxleFJlbmRlcjtcbiAgZXhwb3J0cy5mdW5jdGlvbmFsVXBkYXRlID0gZnVuY3Rpb25hbFVwZGF0ZTtcbiAgZXhwb3J0cy5sb29wSG9va3MgPSBsb29wSG9va3M7XG4gIGV4cG9ydHMubWFrZVByb3BHZXR0ZXIgPSBtYWtlUHJvcEdldHRlcjtcbiAgZXhwb3J0cy5tYWtlUmVuZGVyZXIgPSBtYWtlUmVuZGVyZXI7XG4gIGV4cG9ydHMucmVkdWNlSG9va3MgPSByZWR1Y2VIb29rcztcbiAgZXhwb3J0cy5zYWZlVXNlTGF5b3V0RWZmZWN0ID0gc2FmZVVzZUxheW91dEVmZmVjdDtcbiAgZXhwb3J0cy51c2VBYnNvbHV0ZUxheW91dCA9IHVzZUFic29sdXRlTGF5b3V0O1xuICBleHBvcnRzLnVzZUFzeW5jRGVib3VuY2UgPSB1c2VBc3luY0RlYm91bmNlO1xuICBleHBvcnRzLnVzZUJsb2NrTGF5b3V0ID0gdXNlQmxvY2tMYXlvdXQ7XG4gIGV4cG9ydHMudXNlQ29sdW1uT3JkZXIgPSB1c2VDb2x1bW5PcmRlcjtcbiAgZXhwb3J0cy51c2VFeHBhbmRlZCA9IHVzZUV4cGFuZGVkO1xuICBleHBvcnRzLnVzZUZpbHRlcnMgPSB1c2VGaWx0ZXJzO1xuICBleHBvcnRzLnVzZUZsZXhMYXlvdXQgPSB1c2VGbGV4TGF5b3V0O1xuICBleHBvcnRzLnVzZUdldExhdGVzdCA9IHVzZUdldExhdGVzdDtcbiAgZXhwb3J0cy51c2VHbG9iYWxGaWx0ZXIgPSB1c2VHbG9iYWxGaWx0ZXI7XG4gIGV4cG9ydHMudXNlR3JpZExheW91dCA9IHVzZUdyaWRMYXlvdXQ7XG4gIGV4cG9ydHMudXNlR3JvdXBCeSA9IHVzZUdyb3VwQnk7XG4gIGV4cG9ydHMudXNlTW91bnRlZExheW91dEVmZmVjdCA9IHVzZU1vdW50ZWRMYXlvdXRFZmZlY3Q7XG4gIGV4cG9ydHMudXNlUGFnaW5hdGlvbiA9IHVzZVBhZ2luYXRpb247XG4gIGV4cG9ydHMudXNlUmVzaXplQ29sdW1ucyA9IHVzZVJlc2l6ZUNvbHVtbnM7XG4gIGV4cG9ydHMudXNlUm93U2VsZWN0ID0gdXNlUm93U2VsZWN0O1xuICBleHBvcnRzLnVzZVJvd1N0YXRlID0gdXNlUm93U3RhdGU7XG4gIGV4cG9ydHMudXNlU29ydEJ5ID0gdXNlU29ydEJ5O1xuICBleHBvcnRzLnVzZVRhYmxlID0gdXNlVGFibGU7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXRhYmxlLmRldmVsb3BtZW50LmpzLm1hcFxuIiwiaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcmVhY3QtdGFibGUucHJvZHVjdGlvbi5taW4uanMnKVxufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcmVhY3QtdGFibGUuZGV2ZWxvcG1lbnQuanMnKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==