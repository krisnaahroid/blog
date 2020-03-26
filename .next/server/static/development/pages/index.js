module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icons/index.js":
/*!*******************************!*\
  !*** ./assets/icons/index.js ***!
  \*******************************/
/*! exports provided: ArrowForward, Backpress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowForward", function() { return ArrowForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Backpress", function() { return Backpress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/assets/icons/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const ArrowForward = props => __jsx("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 9.986 17.465"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}), __jsx("path", {
  "data-name": "Icon ionic-ios-arrow-forward",
  d: "M6.976 8.729l-6.609-6.6a1.243 1.243 0 010-1.763 1.259 1.259 0 011.768 0l7.488 7.482a1.246 1.246 0 01.036 1.721L2.14 17.104a1.248 1.248 0 01-1.768-1.763z",
  fill: "#001cf9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }
}));
const Backpress = props => __jsx("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 65.367 65.367"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}), __jsx("g", {
  "data-name": "Group 4",
  transform: "translate(-1003 -251)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}, __jsx("rect", {
  "data-name": "Rectangle 7",
  width: 51,
  height: 51,
  rx: 18,
  transform: "rotate(20 -201.524 3019.11)",
  fill: "#403e3e",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}), __jsx("path", {
  "data-name": "Icon ionic-ios-arrow-forward",
  d: "M1032.7 283.739l8.122 8.118a1.528 1.528 0 010 2.167 1.547 1.547 0 01-2.173 0l-9.2-9.2a1.531 1.531 0 01-.045-2.116l9.243-9.262a1.536 1.536 0 112.175 2.169z",
  fill: "#fff",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
})));

/***/ }),

/***/ "./assets/images/DailyResources.svg":
/*!******************************************!*\
  !*** ./assets/images/DailyResources.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjUiIGhlaWdodD0iODQiIHZpZXdCb3g9IjAgMCAxMjUgODQiPgogIDx0ZXh0IGlkPSJEYWlseV9SZXNvdXJjZXMiIGRhdGEtbmFtZT0iRGFpbHkgClJlc291cmNlcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyOSkiIGZpbGw9IiMxZTIxMjciIGZvbnQtc2l6ZT0iMzIiIGZvbnQtZmFtaWx5PSJEYWlseVdBTEtFUiwgRGFpbHkgV0FMS0VSIj48dHNwYW4geD0iMCIgeT0iMCI+RGFpbHkgPC90c3Bhbj48dHNwYW4geD0iMCIgeT0iNDIiPlJlc291cmNlczwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K");

/***/ }),

/***/ "./assets/images/hero.svg":
/*!********************************!*\
  !*** ./assets/images/hero.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTcxLjkxIiBoZWlnaHQ9IjM0MyIgdmlld0JveD0iMCAwIDU3MS45MSAzNDMiPgogIDxkZWZzPgogICAgPHJhZGlhbEdyYWRpZW50IGlkPSJyYWRpYWwtZ3JhZGllbnQiIGN4PSIwLjUiIGN5PSIwLjUiIHI9IjAuNSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxZTIxMjciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWRlZGVkIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBpZD0iR3JvdXBfMTY4IiBkYXRhLW5hbWU9Ikdyb3VwIDE2OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYxMiAtMjkxKSI+CiAgICA8ZyBpZD0iUmVjdGFuZ2xlXzEyOSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTI5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MTIgMzA1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWUyMTI3IiBzdHJva2Utd2lkdGg9IjEiPgogICAgICA8cmVjdCB3aWR0aD0iMjA0IiBoZWlnaHQ9IjIwNCIgcng9IjIzIiBzdHJva2U9Im5vbmUiLz4KICAgICAgPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMDMiIGhlaWdodD0iMjAzIiByeD0iMjIuNSIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPGcgaWQ9IlJlY3RhbmdsZV8xMzAiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQwIDI5MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFlMjEyNyIgc3Ryb2tlLXdpZHRoPSIxIj4KICAgICAgPHJlY3Qgd2lkdGg9IjE5MSIgaGVpZ2h0PSIxOTEiIHJ4PSIyMyIgc3Ryb2tlPSJub25lIi8+CiAgICAgIDxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMTkwIiBoZWlnaHQ9IjE5MCIgcng9IjIyLjUiIGZpbGw9Im5vbmUiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJFbGxpcHNlXzE2NCIgZGF0YS1uYW1lPSJFbGxpcHNlIDE2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA2NyAzNjgpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTIxMjciIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4zODEiPgogICAgICA8Y2lyY2xlIGN4PSI0LjUiIGN5PSI0LjUiIHI9IjQuNSIgc3Ryb2tlPSJub25lIi8+CiAgICAgIDxjaXJjbGUgY3g9IjQuNSIgY3k9IjQuNSIgcj0iNCIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPGcgaWQ9IkJlYWtlcl9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NzguNTQxIDMzOC4yNDgpIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfMjkwIiBkYXRhLW5hbWU9IlBhdGggMjkwIiBkPSJNNDUuMTU0LDY4LjE3OWExLjMyNiwxLjMyNiwwLDEsMS0uODE5LDIuNTIybC0uNTg0LS4xOUwzOC41NjYsODYuNDY3bDIuOTczLDIzLjE4NGE2Ljg3Niw2Ljg3NiwwLDAsMS04Ljk0NSw3LjQxNGwtMjIuMjc0LTcuMjM3QTYuODc2LDYuODc2LDAsMCwxLDcuNDQyLDk4LjU3MkwyNC4zMjQsODAuNjY0bDQuODM5LTE0Ljg5My0uOTE5LS4zYTEuMzI2LDEuMzI2LDAsMSwxLC44MTktMi41MjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNS41NjYgLTQ4LjM5KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWUyMTI3IiBzdHJva2Utd2lkdGg9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8yOTEiIGRhdGEtbmFtZT0iUGF0aCAyOTEiIGQ9Ik0yNC45LDE1MS4yNjJhMi41ODcsMi41ODcsMCwwLDAtMi44ODIuNzY2bC02LjA5NCw3LjE5NWEzLDMsMCwwLDAsMS4zNjEsNC43ODhsMjMuOTMxLDcuNzc2YTMsMywwLDAsMCwzLjkxLTMuMTRsLS41NDctNS42MjZhMy41NiwzLjU2LDAsMCwwLTMuMDUyLTIuOTE3LDE5LjE2MywxOS4xNjMsMCwwLDEtNC44MDgtMS41MDljLTIuODA4LTEuMjc2LTQuMTItMy4zMTMtNy40ODEtNS40NDZBMzEuNjg0LDMxLjY4NCwwLDAsMCwyNC45LDE1MS4yNjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEuODA5IC0xMDUuNDk4KSIgZmlsbD0iI2ZlNjcyYyIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzI5MiIgZGF0YS1uYW1lPSJQYXRoIDI5MiIgZD0iTTU4LjIyOCwxNzYuMDFhMS42NzksMS42NzksMCwxLDEsMi4xMTItMS4wNzlBMS42NzcsMS42NzcsMCwwLDEsNTguMjI4LDE3Ni4wMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOC45MSAtMTE5LjUwMykiIGZpbGw9IiNjZDUzMjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8yOTMiIGRhdGEtbmFtZT0iUGF0aCAyOTMiIGQ9Ik02NC45NTEsMTg4LjU1NWExLjIzNywxLjIzNywwLDEsMSwxLjU1Ni0uOEExLjIzNiwxLjIzNiwwLDAsMSw2NC45NTEsMTg4LjU1NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00My40NTkgLTEyOC4xODMpIiBmaWxsPSIjY2Q1MzIzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMjk1IiBkYXRhLW5hbWU9IlBhdGggMjk1IiBkPSJNODguNjM3LDQxLjgzN2EyLjU2MywyLjU2MywwLDEsMSwzLjIyNC0xLjY0N0EyLjU2LDIuNTYsMCwwLDEsODguNjM3LDQxLjgzN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01OC4yMDEgLTMxLjUyNikiIGZpbGw9IiNmZTY3MmMiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8yOTYiIGRhdGEtbmFtZT0iUGF0aCAyOTYiIGQ9Ik0xMjEuOTgyLDI1LjRhMS44NTYsMS44NTYsMCwxLDEsMi4zMzQtMS4xOTNBMS44NTMsMS44NTMsMCwwLDEsMTIxLjk4MiwyNS40WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgwLjEwMyAtMjEuNzc3KSIgZmlsbD0iI2ZlNjcyYyIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICA8L2c+CiAgICA8ZWxsaXBzZSBpZD0iRWxsaXBzZV8xNjUiIGRhdGEtbmFtZT0iRWxsaXBzZSAxNjUiIGN4PSIxOSIgY3k9IjMuNSIgcng9IjE5IiByeT0iMy41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4ODkgNDE3KSIgb3BhY2l0eT0iMC4xNTEiIGZpbGw9InVybCgjcmFkaWFsLWdyYWRpZW50KSIvPgogICAgPGVsbGlwc2UgaWQ9IkVsbGlwc2VfMTY2IiBkYXRhLW5hbWU9IkVsbGlwc2UgMTY2IiBjeD0iMTkiIGN5PSIzLjUiIHJ4PSIxOSIgcnk9IjMuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcxIDU0NykiIG9wYWNpdHk9IjAuMTQzIiBmaWxsPSJ1cmwoI3JhZGlhbC1ncmFkaWVudCkiLz4KICAgIDxlbGxpcHNlIGlkPSJFbGxpcHNlXzE2NyIgZGF0YS1uYW1lPSJFbGxpcHNlIDE2NyIgY3g9IjIwLjUiIGN5PSIzLjUiIHJ4PSIyMC41IiByeT0iMy41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MTkgNjI3KSIgb3BhY2l0eT0iMC4yMDUiIGZpbGw9InVybCgjcmFkaWFsLWdyYWRpZW50KSIvPgogICAgPGcgaWQ9ImF0b20iIHRyYW5zZm9ybT0ibWF0cml4KDAuOTg1LCAwLjE3NCwgLTAuMTc0LCAwLjk4NSwgOTUxLjI0MiwgNTAyLjUwOSkiPgogICAgICA8ZyBpZD0iR3JvdXBfMTMyIiBkYXRhLW5hbWU9Ikdyb3VwIDEzMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcuOTIxKSI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwXzEzMSIgZGF0YS1uYW1lPSJHcm91cCAxMzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIj4KICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzI5NyIgZGF0YS1uYW1lPSJQYXRoIDI5NyIgZD0iTTUxLjY0MSwxNi4yM0EyOS4yNTYsMjkuMjU2LDAsMCwwLDQ2LjIsMTEuNTg0Yy0uMDkxLTEuMjI0LS4yMzYtMi40MDktLjQzMi0zLjUyM2EyMC45MjMsMjAuOTIzLDAsMCwxLDIuMTY3LS41NjZjMi4zNDUtLjQ3MSw0LjAxNi0uMjgsNC40NzIuNTEuNDc4LjgyOC0uMzA5LDIuNTItMi4wNTUsNC40MTZhLjY4Ni42ODYsMCwwLDAsMS4wMS45M2MyLjI2Ni0yLjQ2MSwzLjA1OS00LjYsMi4yMzQtNi4wMzMtLjgtMS4zODMtMi44NDktMS43ODgtNS45MzEtMS4xNjlhMjkuMjQ5LDI5LjI0OSwwLDAsMC02Ljc0NCwyLjM5Yy0xLjEtLjUzMi0yLjItMS0zLjI1Ny0xLjM4My43ODctMy41NDQsMi4wNjctNS43ODIsMy4yNTgtNS43ODIuOTM3LDAsMS45OTQsMS40ODIsMi43NTksMy44NjdhLjY4Ny42ODcsMCwwLDAsMS4zMDctLjQxOUM0My45NzYsMS42NjcsNDIuNTcsMCw0MC45MiwwYy0yLjI3OCwwLTMuODc0LDMuMTkxLTQuNzExLDcuMzc1aDBhLjY2OS42NjksMCwwLDAtLjAzMi4xNjIsMzUuNDQyLDM1LjQ0MiwwLDAsMC0uNTMyLDQuMDQ3LDM1LjQ2NSwzNS40NjUsMCwwLDAtMi44NCwyLjE0LDIwLjk4NCwyMC45ODQsMCwwLDEtMS41NzQtMS41OTNDMjkuNjUxLDEwLjMzNywyOC45OCw4Ljc5NCwyOS40MzYsOGMuNDc3LS44MjYsMi4zMy0uOTkyLDQuODM3LS40MzJhLjY4Ni42ODYsMCwwLDAsLjMtMS4zNGMtMy4yNTYtLjcyNy01LjUtLjM0Mi02LjMyNiwxLjA4NS0uOCwxLjM4My0uMTIzLDMuMzYyLDEuOTUzLDUuNzIxYTI5LjI0OCwyOS4yNDgsMCwwLDAsNS40NDIsNC42NDZjLjA5MSwxLjIyNC4yMzYsMi40MDkuNDMyLDMuNTIzYTIwLjg5MiwyMC44OTIsMCwwLDEtMi4xNjcuNTY2Yy0yLjM0NC40NzEtNC4wMTYuMjgtNC40NzItLjUxLS40ODMtLjgzNi4zMjEtMi41NDUsMi4xLTQuNDYxYS42ODcuNjg3LDAsMCwwLTEuMDA3LS45MzRjLTIuMywyLjQ4Mi0zLjEwOSw0LjY0Mi0yLjI3OCw2LjA4MS41NTYuOTYyLDEuNzE3LDEuNDUxLDMuNDEsMS40NTFhMTIuOTUyLDEyLjk1MiwwLDAsMCwyLjUyMi0uMjgyLDI5LjI1LDI5LjI1LDAsMCwwLDYuNzQ1LTIuMzljMS4xLjUzMiwyLjIsMSwzLjI1NywxLjM4NC0uNzg3LDMuNTQ0LTIuMDY3LDUuNzgyLTMuMjU5LDUuNzgyLS45MzUsMC0xLjk5LTEuNDc1LTIuNzUzLTMuODVhLjY4Ni42ODYsMCwwLDAtMS4zMDcuNDJjMS4wMSwzLjE0MiwyLjQxNCw0LjgsNC4wNiw0LjgsMi4yNzUsMCwzLjg3LTMuMTg1LDQuNzA4LTcuMzYxYS4xMjUuMTI1LDAsMCwwLC4wMDYtLjAxMy42ODkuNjg5LDAsMCwwLC4wMzMtLjE4LDM1LjQwNywzNS40MDcsMCwwLDAsLjUyOS00LjAzMSwzNS40LDM1LjQsMCwwLDAsMi44NDEtMi4xMzksMjAuOTc5LDIwLjk3OSwwLDAsMSwxLjU3NCwxLjU5M2MxLjU4LDEuNzk1LDIuMjUxLDMuMzM4LDEuNzk1LDQuMTI3LS40NzUuODI0LTIuMzIyLjk5MS00LjgxOS40MzZhLjY4Ny42ODcsMCwwLDAtLjMsMS4zNDEsMTMuMzQ1LDEzLjM0NSwwLDAsMCwyLjg2LjM1NGMxLjcsMCwyLjg5NC0uNDg4LDMuNDQ2LTEuNDQ0QzU0LjM5MywyMC41NjgsNTMuNzE4LDE4LjU5LDUxLjY0MSwxNi4yM1ptLTE3Ljc4OC0xLjZjLjUzMy0uNDQxLDEuMS0uODc3LDEuNy0xLjMwNnEtLjAyMS42NTQtLjAyMSwxLjMwNmMwLC40MzkuMDA5Ljg3Ny4wMjMsMS4zMTNRMzQuNjU1LDE1LjMsMzMuODUzLDE0LjYzNVptMTAuNi02LjEyMmMuMTE1LjY4Mi4yMDgsMS4zOTMuMjgzLDIuMTIycS0uNTUxLS4zNDEtMS4xMi0uNjcxYy0uMzgxLS4yMi0uNzY0LS40My0xLjE0OC0uNjM2QzQzLjE0MSw5LjAyNiw0My44LDguNzU1LDQ0LjQ1NCw4LjUxM1ptLTcuMDU4LDBjLjY0NS4yNCwxLjMuNTE0LDEuOTY5LjgxMnEtLjU3MS4zMDctMS4xNDEuNjM1Yy0uMzc5LjIxOS0uNzUxLjQ0NC0xLjExOS42NzNDMzcuMTgzLDkuOSwzNy4yODEsOS4xOSwzNy40LDguNTE4Wm0tLjAwOCwxMi4yMzhjLS4xMTUtLjY4Mi0uMjA4LTEuMzkzLS4yODMtMi4xMjJxLjU1MS4zNDEsMS4xMi42NzFjLjM4MS4yMi43NjQuNDMsMS4xNDguNjM2QzM4LjcsMjAuMjQyLDM4LjAzNywyMC41MTMsMzcuMzg3LDIwLjc1NVptNy4wNTgsMGMtLjY0NS0uMjQxLTEuMy0uNTE1LTEuOTY5LS44MTJxLjU3MS0uMzA3LDEuMTQxLS42MzVjLjM3OC0uMjE5Ljc1LS40NDQsMS4xMTktLjY3MkM0NC42NTgsMTkuMzcyLDQ0LjU2LDIwLjA3OSw0NC40NDUsMjAuNzUyWm0uNDI4LTMuODM1Yy0uNjMuNDEzLTEuMjc5LjgxNS0xLjk0MywxLjJzLTEuMzQuNzQ3LTIuMDA3LDEuMDg0Yy0uNjczLS4zMzktMS4zNDYtLjctMi4wMTItMS4wODRzLTEuMzE3LS43ODctMS45NDMtMS4yYy0uMDQzLS43NTItLjA2Ny0xLjUxNS0uMDY3LTIuMjg1cy4wMjQtMS41NDQuMDY2LTIuMjgyYy42MjktLjQxMywxLjI3OC0uODE1LDEuOTQzLTEuMnMxLjM0LS43NDcsMi4wMDctMS4wODRjLjY3My4zMzksMS4zNDYuNywyLjAxMywxLjA4NHMxLjMxNy43ODcsMS45NDIsMS4yYy4wNDMuNzUyLjA2NywxLjUxNS4wNjcsMi4yODVTNDQuOTE2LDE2LjE3OCw0NC44NzQsMTYuOTE2Wm0xLjQxOC0uOTc2cS4wMjEtLjY1NC4wMjEtMS4zMDZjMC0uNDM5LS4wMDktLjg3Ny0uMDIzLTEuMzEzcS45LjY0NywxLjcsMS4zMTFDNDcuNDUzLDE1LjA3NCw0Ni44ODYsMTUuNTExLDQ2LjI5MSwxNS45NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNy45MjEpIiBmaWxsPSIjNDVhZmUzIi8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8xMzQiIGRhdGEtbmFtZT0iR3JvdXAgMTM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOC42MzIgMTIuMzQ2KSI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwXzEzMyIgZGF0YS1uYW1lPSJHcm91cCAxMzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIj4KICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzI5OCIgZGF0YS1uYW1lPSJQYXRoIDI5OCIgZD0iTTIxMy4yLDIxMC45MTZhMi4yODgsMi4yODgsMCwxLDAsMi4yODgsMi4yODhBMi4yOTEsMi4yOTEsMCwwLDAsMjEzLjIsMjEwLjkxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTAuOTEyIC0yMTAuOTE2KSIgZmlsbD0iIzQ1YWZlMyIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgaWQ9Im1vbGVjdWxhciIgdHJhbnNmb3JtPSJtYXRyaXgoMC45NjYsIC0wLjI1OSwgMC4yNTksIDAuOTY2LCA4MjMuMzkyLCA1ODYuODk0KSI+CiAgICAgIDxnIGlkPSJHcm91cF8xMzYiIGRhdGEtbmFtZT0iR3JvdXAgMTM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEuODQzKSI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwXzEzNSIgZGF0YS1uYW1lPSJHcm91cCAxMzUiPgogICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMjk5IiBkYXRhLW5hbWU9IlBhdGggMjk5IiBkPSJNMi4xNTgsMS44NDNBMi4xNTgsMi4xNTgsMCwxLDAsNC4zMTYsNCwyLjE2LDIuMTYsMCwwLDAsMi4xNTgsMS44NDNabTAsMy4zQTEuMTQsMS4xNCwwLDEsMSwzLjMsNCwxLjE0MSwxLjE0MSwwLDAsMSwyLjE1OCw1LjE0MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEuODQzKSIgZmlsbD0iI2Y4MTI2YSIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JvdXBfMTM4IiBkYXRhLW5hbWU9Ikdyb3VwIDEzOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuNjQyIDIuOTQyKSI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwXzEzNyIgZGF0YS1uYW1lPSJHcm91cCAxMzciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPgogICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMzAwIiBkYXRhLW5hbWU9IlBhdGggMzAwIiBkPSJNODguNTk0LDkuMjE2QTMuODA3LDMuODA3LDAsMSwwLDkyLjQsMTMuMDIzLDMuODExLDMuODExLDAsMCwwLDg4LjU5NCw5LjIxNlptMCw2LjZhMi43ODksMi43ODksMCwxLDEsMi43ODktMi43ODlBMi43OTIsMi43OTIsMCwwLDEsODguNTk0LDE1LjgxMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NC43ODcgLTkuMjE2KSIgZmlsbD0iI2Y4MTI2YSIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JvdXBfMTQwIiBkYXRhLW5hbWU9Ikdyb3VwIDE0MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguNjg4IDE0LjQ4NSkiPgogICAgICAgIDxnIGlkPSJHcm91cF8xMzkiIGRhdGEtbmFtZT0iR3JvdXAgMTM5Ij4KICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzMwMSIgZGF0YS1uYW1lPSJQYXRoIDMwMSIgZD0iTTEzMC4yNDMsODYuNjNhNC45MDYsNC45MDYsMCwxLDAsNC45MDYsNC45MDZBNC45MTIsNC45MTIsMCwwLDAsMTMwLjI0Myw4Ni42M1ptMCw4Ljc5NGEzLjg4OCwzLjg4OCwwLDEsMSwzLjg4OC0zLjg4OEEzLjg5MywzLjg5MywwLDAsMSwxMzAuMjQzLDk1LjQyNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjUuMzM3IC04Ni42MykiIGZpbGw9IiNmODEyNmEiLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9Ikdyb3VwXzE0MiIgZGF0YS1uYW1lPSJHcm91cCAxNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDk5IDE3Ljc4MykiPgogICAgICAgIDxnIGlkPSJHcm91cF8xNDEiIGRhdGEtbmFtZT0iR3JvdXAgMTQxIj4KICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzMwMiIgZGF0YS1uYW1lPSJQYXRoIDMwMiIgZD0iTTEzLjM3OCwxMDguNzQ5YTYuMDA1LDYuMDA1LDAsMSwwLDYuMDA1LDYuMDA1QTYuMDEyLDYuMDEyLDAsMCwwLDEzLjM3OCwxMDguNzQ5Wm0wLDEwLjk5M2E0Ljk4OCw0Ljk4OCwwLDEsMSw0Ljk4OC00Ljk4OEE0Ljk5Myw0Ljk5MywwLDAsMSwxMy4zNzgsMTE5Ljc0MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03LjM3MyAtMTA4Ljc0OSkiIGZpbGw9IiNmODEyNmEiLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgICAgPGcgaWQ9Ikdyb3VwXzE0NCIgZGF0YS1uYW1lPSJHcm91cCAxNDQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNDYxIDIzLjI3OSkiPgogICAgICAgIDxnIGlkPSJHcm91cF8xNDMiIGRhdGEtbmFtZT0iR3JvdXAgMTQzIj4KICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzMwMyIgZGF0YS1uYW1lPSJQYXRoIDMwMyIgZD0iTTI2Ljg1NSwxNDguNzQ4YTIuNjI5LDIuNjI5LDAsMCwxLTIuNjI2LTIuNjI2LjUwOS41MDksMCwxLDAtMS4wMTgsMCwzLjY0OCwzLjY0OCwwLDAsMCwzLjY0NCwzLjY0NC41MDkuNTA5LDAsMSwwLDAtMS4wMThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMuMjExIC0xNDUuNjEzKSIgZmlsbD0iI2Y4MTI2YSIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iR3JvdXBfMTQ2IiBkYXRhLW5hbWU9Ikdyb3VwIDE0NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4yOTggNC4wNDIpIj4KICAgICAgICA8ZyBpZD0iR3JvdXBfMTQ1IiBkYXRhLW5hbWU9Ikdyb3VwIDE0NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+CiAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8zMDQiIGRhdGEtbmFtZT0iUGF0aCAzMDQiIGQ9Ik0zMi4wNTksMTguMjQ3LDIyLjcxNSwxNi42YS41MDkuNTA5LDAsMSwwLS4xNzcsMWw5LjM0NCwxLjY0OWEuNS41LDAsMCwwLC4wODkuMDA4LjUwOS41MDksMCwwLDAsLjA4OC0xLjAxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjExNyAtMTYuNTkpIiBmaWxsPSIjZjgxMjZhIi8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8xNDgiIGRhdGEtbmFtZT0iR3JvdXAgMTQ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjM0NCA5LjUzOCkiPgogICAgICAgIDxnIGlkPSJHcm91cF8xNDciIGRhdGEtbmFtZT0iR3JvdXAgMTQ3Ij4KICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzMwNSIgZGF0YS1uYW1lPSJQYXRoIDMwNSIgZD0iTTY4LjM3Miw1My41MTZhLjUwOS41MDksMCwwLDAtLjY5My4xOTRMNjIuNzMyLDYyLjVhLjUwOS41MDksMCwxLDAsLjg4Ny41bDQuOTQ3LTguNzk0QS41MDkuNTA5LDAsMCwwLDY4LjM3Miw1My41MTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjIuNjY3IC01My40NTEpIiBmaWxsPSIjZjgxMjZhIi8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICAgIDxnIGlkPSJHcm91cF8xNTAiIGRhdGEtbmFtZT0iR3JvdXAgMTUwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi4wOTIgMjAuNTMxKSI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwXzE0OSIgZGF0YS1uYW1lPSJHcm91cCAxNDkiPgogICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMzA2IiBkYXRhLW5hbWU9IlBhdGggMzA2IiBkPSJNODguNywxMjcuNTY1YS41MS41MSwwLDAsMC0uNjE3LS4zNzFsLTYuNiwxLjY0OWEuNTA5LjUwOSwwLDEsMCwuMjQ2Ljk4OGw2LjYtMS42NDlBLjUwOS41MDksMCwwLDAsODguNywxMjcuNTY1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgxLjEgLTEyNy4xNzkpIiBmaWxsPSIjZjgxMjZhIi8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyBpZD0iUG9seWdvbl81IiBkYXRhLW5hbWU9IlBvbHlnb24gNSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43ODgsIC0wLjYxNiwgMC42MTYsIDAuNzg4LCAxMTY1LjQ5LCAzOTUuOTE5KSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zNTYiPgogICAgICA8cGF0aCBkPSJNNS4yNzIsMi45NjJhMiwyLDAsMCwxLDMuNDU1LDBsMy41MTgsNi4wMzFBMiwyLDAsMCwxLDEwLjUxOCwxMkgzLjQ4MkEyLDIsMCwwLDEsMS43NTUsOC45OTJaIiBzdHJva2U9Im5vbmUiLz4KICAgICAgPHBhdGggZD0iTSA3LjAwMDAwMDQ3NjgzNzE1OCAyLjk2OTI2ODc5ODgyODEyNSBDIDYuODI3MzAwNTQ4NTUzNDY3IDIuOTY5MjY4Nzk4ODI4MTI1IDYuMzk3NDMwNDE5OTIxODc1IDMuMDE3NjA4NjQyNTc4MTI1IDYuMTM2MjIwNDU1MTY5Njc4IDMuNDY1Mzk4Nzg4NDUyMTQ4IEwgMi42MTgzMDA0Mzc5MjcyNDYgOS40OTYxMjgwODIyNzUzOTEgQyAyLjM1NTA1MDA4Njk3NTA5OCA5Ljk0NzM5OTEzOTQwNDI5NyAyLjUyODI1MDY5NDI3NDkwMiAxMC4zNDcxMzg0MDQ4NDYxOSAyLjYxNDkzMDE1Mjg5MzA2NiAxMC40OTgwNTgzMTkwOTE4IEMgMi43MDE2MTA1NjUxODU1NDcgMTAuNjQ4OTc5MTg3MDExNzIgMi45NTk2MzAwMTI1MTIyMDcgMTAuOTk5OTk5MDQ2MzI1NjggMy40ODIwNzA5MjI4NTE1NjIgMTAuOTk5OTk5MDQ2MzI1NjggTCAxMC41MTc5MzA5ODQ0OTcwNyAxMC45OTk5OTkwNDYzMjU2OCBDIDExLjA0MDM3MDk0MTE2MjExIDEwLjk5OTk5OTA0NjMyNTY4IDExLjI5ODM5MDM4ODQ4ODc3IDEwLjY0ODk3OTE4NzAxMTcyIDExLjM4NTA3MDgwMDc4MTI1IDEwLjQ5ODA1ODMxOTA5MTggQyAxMS40NzE3NTAyNTkzOTk0MSAxMC4zNDcxMzg0MDQ4NDYxOSAxMS42NDQ5NTA4NjY2OTkyMiA5Ljk0NzM5OTEzOTQwNDI5NyAxMS4zODE3MDA1MTU3NDcwNyA5LjQ5NjEyODA4MjI3NTM5MSBMIDcuODYzNzgwNDk4NTA0NjM5IDMuNDY1Mzk4Nzg4NDUyMTQ4IEMgNy42MDI1NzA1MzM3NTI0NDEgMy4wMTc2MDg2NDI1NzgxMjUgNy4xNzI3MDA0MDUxMjA4NSAyLjk2OTI2ODc5ODgyODEyNSA3LjAwMDAwMDQ3NjgzNzE1OCAyLjk2OTI2ODc5ODgyODEyNSBNIDcuMDAwMDAwNDc2ODM3MTU4IDEuOTY5MjcxNjU5ODUxMDc0IEMgNy42NzA4NDAyNjMzNjY2OTkgMS45NjkyNzE2NTk4NTEwNzQgOC4zNDE2ODA1MjY3MzMzOTggMi4zMDAwMjQwMzI1OTI3NzMgOC43Mjc1NjAwNDMzMzQ5NjEgMi45NjE1Mjg3NzgwNzYxNzIgTCAxMi4yNDU0ODA1Mzc0MTQ1NSA4Ljk5MjI1ODA3MTg5OTQxNCBDIDEzLjAyMzI1MDU3OTgzMzk4IDEwLjMyNTU2OTE1MjgzMjAzIDEyLjA2MTUxMDA4NjA1OTU3IDExLjk5OTk5OTA0NjMyNTY4IDEwLjUxNzkzMDk4NDQ5NzA3IDExLjk5OTk5OTA0NjMyNTY4IEwgMy40ODIwNzA5MjI4NTE1NjIgMTEuOTk5OTk5MDQ2MzI1NjggQyAxLjkzODQ5MDg2NzYxNDc0NiAxMS45OTk5OTkwNDYzMjU2OCAwLjk3Njc1MDM3Mzg0MDMzMiAxMC4zMjU1NjkxNTI4MzIwMyAxLjc1NDUyMDQxNjI1OTc2NiA4Ljk5MjI1ODA3MTg5OTQxNCBMIDUuMjcyNDQwOTEwMzM5MzU1IDIuOTYxNTI4Nzc4MDc2MTcyIEMgNS42NTgzMjA0MjY5NDA5MTggMi4zMDAwMjQwMzI1OTI3NzMgNi4zMjkxNjA2OTAzMDc2MTcgMS45NjkyNzE2NTk4NTEwNzQgNy4wMDAwMDA0NzY4MzcxNTggMS45NjkyNzE2NTk4NTEwNzQgWiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjMWUyMTI3Ii8+CiAgICA8L2c+CiAgICA8ZyBpZD0iZGl2aWRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDI3LjAxMyA0MzYuMjIyKSByb3RhdGUoLTM0KSIgb3BhY2l0eT0iMC41MTYiPgogICAgICA8ZyBpZD0iR3JvdXBfMTUyIiBkYXRhLW5hbWU9Ikdyb3VwIDE1MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyMS4zMzMpIj4KICAgICAgICA8ZyBpZD0iR3JvdXBfMTUxIiBkYXRhLW5hbWU9Ikdyb3VwIDE1MSI+CiAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8zMDciIGRhdGEtbmFtZT0iUGF0aCAzMDciIGQ9Ik0xNy4xNTUsMjM0LjY2N0guNzQ2YS43NDYuNzQ2LDAsMCwwLDAsMS40OTJIMTcuMTU1YS43NDYuNzQ2LDAsMCwwLDAtMS40OTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0yMjcuMjA4KSIgZmlsbD0iIzFlMjEyNyIvPgogICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMzA4IiBkYXRhLW5hbWU9IlBhdGggMzA4IiBkPSJNMTczLjY1LDI3LjNhMi45ODMsMi45ODMsMCwxLDAtMi45ODMtMi45ODNBMi45ODMsMi45ODMsMCwwLDAsMTczLjY1LDI3LjNabTAtNC40NzVhMS40OTIsMS40OTIsMCwxLDEtMS40OTIsMS40OTJBMS40OTIsMS40OTIsMCwwLDEsMTczLjY1LDIyLjgyNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjQuNyAtMjEuMzMzKSIgZmlsbD0iIzFlMjEyNyIvPgogICAgICAgICAgPHBhdGggaWQ9IlBhdGhfMzA5IiBkYXRhLW5hbWU9IlBhdGggMzA5IiBkPSJNMTczLjY1LDMyMGEyLjk4MywyLjk4MywwLDEsMCwyLjk4MywyLjk4M0EyLjk4MywyLjk4MywwLDAsMCwxNzMuNjUsMzIwWm0wLDQuNDc1YTEuNDkyLDEuNDkyLDAsMSwxLDEuNDkyLTEuNDkyQTEuNDkyLDEuNDkyLDAsMCwxLDE3My42NSwzMjQuNDc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NC43IC0zMDkuNTU4KSIgZmlsbD0iIzFlMjEyNyIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgaWQ9ImZ1bmN0aW9uIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjkxNCwgLTAuNDA3LCAwLjQwNywgMC45MTQsIDkzNy43OTcsIDQ3Mi40MTcpIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzEwIiBkYXRhLW5hbWU9IlBhdGggMzEwIiBkPSJNMTAsMS42NjdWMEE0LjgyNCw0LjgyNCwwLDAsMCw1LjI1MSwzLjk2NEw0LjMsOS4xNjdIMi4wODN2MS42NjdINGwtLjg5Miw0LjlBMy4xNTgsMy4xNTgsMCwwLDEsMCwxOC4zMzNWMjBhNC44MjQsNC44MjQsMCwwLDAsNC43NDktMy45NjRsLjk0Ni01LjJINy41VjkuMTY3SDZsLjg5Mi00LjlBMy4xNTgsMy4xNTgsMCwwLDEsMTAsMS42NjdabTAsMCIgZmlsbD0iIzFlMjEyNyIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zMTEiIGRhdGEtbmFtZT0iUGF0aCAzMTEiIGQ9Ik0xNzAuMDgzLDg2LjlsLS42NjctLjVBOS41NjEsOS41NjEsMCwwLDAsMTY4LDkxLjlhOS41NjEsOS41NjEsMCwwLDAsMS40MTcsNS41bDEuMzMzLTFhOS44ODUsOS44ODUsMCwwLDEsMC05LjAwNVptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU5LjI1IC04MS44OTkpIiBmaWxsPSIjMWUyMTI3Ii8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzMxMiIgZGF0YS1uYW1lPSJQYXRoIDMxMiIgZD0iTTMzMS4xMzMsODcuNGE5Ljg4NCw5Ljg4NCwwLDAsMSwwLDkuMDA1bC42Ny40OTUuNjY3LjVhOS41NTcsOS41NTcsMCwwLDAsMS40MTctNS41LDkuNTYxLDkuNTYxLDAsMCwwLTEuNDE3LTUuNVptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzEzLjg4MyAtODEuODk5KSIgZmlsbD0iIzFlMjEyNyIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zMTMiIGRhdGEtbmFtZT0iUGF0aCAzMTMiIGQ9Ik0yMzAuNCwxNDIuNTg2bC0uOTkzLDEuMzY1LS45OTMtMS4zNjUtMS4zNDguOTgxLDEuMzEsMS44LTEuMzEsMS44LDEuMzQ4Ljk4MS45OTMtMS4zNjUuOTkzLDEuMzY1LDEuMzQ4LS45ODEtMS4zMS0xLjgsMS4zMS0xLjhabTAsMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNS4yMzYgLTEzNS4xNikiIGZpbGw9IiMxZTIxMjciLz4KICAgIDwvZz4KICAgIDxnIGlkPSJwaS1tYXRoZW1hdGljYWwtY29uc3RhbnQtc3ltYm9sIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NTkgNDIxLjQ4NykiPgogICAgICA8ZyBpZD0iR3JvdXBfMTUzIiBkYXRhLW5hbWU9Ikdyb3VwIDE1MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyLjUxMykiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzMxNCIgZGF0YS1uYW1lPSJQYXRoIDMxNCIgZD0iTTI1Ljk3MywyOC4xMjdjLTQuNzcxLTMuNzMtMS40LTE5LjA3NC0xLjQtMTkuMDc0SDMwLjRhMy4wMSwzLjAxLDAsMCwwLDIuOTk0LTMuMjRjMC0zLjUxNC0yLjkxNS0zLjMtMi45MTUtMy4zSDkuMDFjLTMuNTI0LDAtNi43LDQuMDM1LTguNTMsNi45MjEtLjk3MiwxLjU0MS0uNDIyLDEuOTczLDEuMjQ3LDEuMjQ3LDUuODUxLTIuNTYyLDcuNS0xLjYzOSw3LjUtMS42MzkuNDEyLDEuOTczLjU1LDEwLjg3Ny0uOTUyLDE0LjM5MS0xLjUyMiwzLjMwOC00LjMyOSw3LjUtLjIwNiw5Ljk2NCwzLjIyLDEuODI2LDYuNi0xLjkyNCw2LjI2My04LjMwNS0uMTU3LTMuMzc3LS40MjItMTYuMDQtLjQyMi0xNi4wNGg1LjM4Yy0uMTY3LDEuOTczLTEuMDgsMTIuMDQ1LS4xMjcsMTguMDE0QzIwLjE1MywzNy4wMywzMC45OCwzNS4xLDMzLDI5LjQ1M2E1LjIsNS4yLDAsMCwwLC4wMS0zLjY2MmMtLjY4Ny0xLjY3OC0xLjgzNi0xLjc2Ni0xLjcwOC0uOTgyYTQuMzIxLDQuMzIxLDAsMCwxLS4wNDksMS40MzNDMzEuMDE5LDI3LjYwNywyOC4yMzEsMjkuNzQ2LDI1Ljk3MywyOC4xMjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0yLjUxMykiIGZpbGw9IiMxZTIxMjciLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./assets/lottiefiles/404.json":
/*!*************************************!*\
  !*** ./assets/lottiefiles/404.json ***!
  \*************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.4.1\",\"fr\":30,\"ip\":0,\"op\":120,\"w\":1920,\"h\":1080,\"nm\":\"404\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"“404-5”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":20,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":0,\"s\":[0],\"e\":[10]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":30,\"s\":[10],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":60,\"s\":[0],\"e\":[10]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":90,\"s\":[10],\"e\":[0]},{\"t\":120}],\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[283,146,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-6.5,16.5],[-1,-10],[-198,-30],[-10,30],[0,0],[269,43]],\"o\":[[0,0],[1,10],[198,30],[0,0],[0,0],[-213.312,-34.098]],\"v\":[[-261.233,-127.706],[-282.233,9.294],[-29.233,114.294],[261.267,89.794],[282.267,-40.206],[-8.733,-13.206]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.411999990426,0.666999966491,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[282.398,164.081],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":4,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":0,\"nm\":\"404-text\",\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":80,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[960,540,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":1920,\"h\":1080,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"“404-4”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":20,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":0,\"s\":[0],\"e\":[10]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":30,\"s\":[10],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":60,\"s\":[0],\"e\":[10]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":90,\"s\":[10],\"e\":[0]},{\"t\":120}],\"ix\":10},\"p\":{\"a\":0,\"k\":[960,541,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[283,146,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[96.5,29.5],[0,0],[0.5,-47.5],[1,5]],\"o\":[[0,0],[0,0],[0,0],[-1,-5]],\"v\":[[-43.608,-102.5],[-63.608,25.5],[43.392,102.5],[63.892,-31]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.411999990426,0.666999966491,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[501.773,151.874],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":4,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[31,-46],[-2,7],[-116,3],[0,0]],\"o\":[[0,0],[2,-7],[0,0],[0,0]],\"v\":[[-73,84],[-52,-45],[73,-84],[53,44]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.411999990426,0.666999966491,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[73.165,84.374],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":4,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}]},{\"id\":\"comp_1\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"形状图层 22\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-8.25,-11.5],[1.125,-10.75],[0,0],[0,0],[-6.161,29.683],[3.06,8.243]],\"o\":[[0,0],[0,0],[3.297,4.596],[-1.84,17.582],[0,0],[0,0],[2.75,-13.25],[-12.25,-33]],\"v\":[[11.5,-91.5],[13.75,-68.75],[33,-61.75],[36.125,31.25],[14.5,50.5],[14.5,72.5],[56.25,41],[53.75,-67.25]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.380392156863,0.650980392157,0.98431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"形状图层 21\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.380392156863,0.650980392157,0.98431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.5,-47],[-1.913,-25.823],[0,0],[0,0],[0.75,16],[-1.422,4.371],[0,0]],\"o\":[[0,0],[-0.297,3.989],[2.5,33.75],[0,0],[0,0],[-0.312,-6.663],[6.75,-20.75],[0,0]],\"v\":[[16,-92],[-28,-44],[-27,40.5],[15.25,72.625],[14.5,50.5],[-5.25,34],[-6.5,-49.25],[16,-69.5]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.380392156863,0.650980392157,0.98431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"形状图层 20\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[955.5,537.75,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-8.25,-11.5],[1.125,-10.75],[0,0],[0,0],[-6.161,29.683],[3.06,8.243]],\"o\":[[0,0],[0,0],[3.297,4.596],[-1.84,17.582],[0,0],[0,0],[2.75,-13.25],[-12.25,-33]],\"v\":[[14.125,-92.375],[8.25,-70.125],[33,-61.75],[36.125,31.25],[14.5,50.5],[14.5,72.5],[54.5,40.5],[56.75,-65]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305882352941,0.58431372549,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.25,-3],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"形状图层 19\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305882352941,0.58431372549,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-10.5,-6],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.5,-47],[-1.913,-25.823],[0,0],[0,0],[0.75,16],[-3.5,8.5],[0,0]],\"o\":[[0,0],[-0.297,3.989],[2.5,33.75],[0,0],[0,0],[-0.312,-6.663],[4.345,-10.553],[0,0]],\"v\":[[16,-92],[-28,-44],[-27,40.5],[19.375,77.875],[16.125,51.25],[-5.25,34],[-4.5,-53],[16,-69.5]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305882352941,0.58431372549,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-10.5,-6],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"形状图层 18\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-137.5,-96.5],[-188,27],[-173.5,34.5],[-123.5,-88.5]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305882352941,0.58431372549,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":0,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":1,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"形状图层 17\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-99,-91.625],[-123.5,-89],[-174.25,34],[-174.125,56],[-110.75,47.75],[-110.625,71.5],[-89.125,68.75],[-88.625,44.375],[-77.5,42.875],[-77.25,21.875],[-89.625,23.375],[-89.75,-23.25],[-111.125,-21.125],[-110.875,26.625],[-149.125,31]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.380392156863,0.650980392157,0.98431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"形状图层 16\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-95.5,11.25],[-97,24.875],[-77.125,22]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"形状图层 15\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-125.25,35.625],[-124.75,63.875],[-110.375,71.25],[-110.375,47.875]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.286274509804,0.607843137255,0.96862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-124.25,-28.75],[-124.25,18.25],[-110.625,26.375],[-110.25,-20.375]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.286274509804,0.607843137255,0.96862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"形状图层 14\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-124.188,18],[-187.5,25.25],[-174.688,34.062],[-109.75,26.75]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960784314,0.61568627451,0.956862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"形状图层 13\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-103.188,-32],[-124.125,-28.688],[-111.062,-20.625],[-89.125,-23.312]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":11,\"ty\":4,\"nm\":\"形状图层 12\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-112.125,-99.5],[-137.5,-96.375],[-123.688,-88.188],[-99.75,-91.312]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":12,\"ty\":4,\"nm\":\"形状图层 11\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.309803921569,0.592156862745,0.976470588235,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.5,-0.5],[0,0],[0,0],[0,0]],\"o\":[[-0.5,0.5],[0,0],[0,0],[0,0]],\"v\":[[-187.5,27],[-187.875,48.875],[-174.375,55.5],[-174,34.25]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.309803921569,0.592156862745,0.976470588235,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":13,\"ty\":4,\"nm\":\"形状图层 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-137.5,-96.5],[-188,27],[-173.5,34.5],[-123.5,-88.5]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305882352941,0.58431372549,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":0,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":1,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":14,\"ty\":4,\"nm\":\"形状图层 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-99,-91.625],[-123.5,-89],[-174.25,34],[-174.125,56],[-110.75,47.75],[-110.625,71.5],[-89.125,68.75],[-88.625,44.375],[-77.5,42.875],[-77.25,21.875],[-89.625,23.375],[-89.75,-23.25],[-111.125,-21.125],[-110.875,26.625],[-149.125,31]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.380392156863,0.650980392157,0.98431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":15,\"ty\":4,\"nm\":\"形状图层 8\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-95.5,11.25],[-97,24.875],[-77.125,22]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":16,\"ty\":4,\"nm\":\"形状图层 7\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-125.25,35.625],[-124.75,63.875],[-110.375,71.25],[-110.375,47.875]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.286274509804,0.607843137255,0.96862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-124.25,-28.75],[-124.25,18.25],[-110.625,26.375],[-110.25,-20.375]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.286274509804,0.607843137255,0.96862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":17,\"ty\":4,\"nm\":\"形状图层 6\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-124.188,18],[-187.5,25.25],[-174.688,34.062],[-109.75,26.75]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960784314,0.61568627451,0.956862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":18,\"ty\":4,\"nm\":\"形状图层 5\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-103.188,-32],[-124.125,-28.688],[-111.062,-20.625],[-89.125,-23.312]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":19,\"ty\":4,\"nm\":\"形状图层 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-112.125,-99.5],[-137.5,-96.375],[-123.688,-88.188],[-99.75,-91.312]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":20,\"ty\":4,\"nm\":\"形状图层 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.309803921569,0.592156862745,0.976470588235,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.5,-0.5],[0,0],[0,0],[0,0]],\"o\":[[-0.5,0.5],[0,0],[0,0],[0,0]],\"v\":[[-187.5,27],[-187.875,48.875],[-174.375,55.5],[-174,34.25]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.309803921569,0.592156862745,0.976470588235,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}]},{\"id\":\"comp_2\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"“phone”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":0,\"s\":[-36],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":60,\"s\":[0],\"e\":[-35]},{\"t\":120}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":0,\"s\":[50,60,0],\"e\":[50,100,0],\"to\":[0,6.66666650772095,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.649,\"y\":0.89},\"o\":{\"x\":0.302,\"y\":0},\"n\":\"0p649_0p89_0p302_0\",\"t\":30,\"s\":[50,100,0],\"e\":[50,60,0],\"to\":[0,0.77985352277756,0],\"ti\":[0,-1.61844849586487,0]},{\"i\":{\"x\":0.687,\"y\":0.834},\"o\":{\"x\":0.34,\"y\":0.107},\"n\":\"0p687_0p834_0p34_0p107\",\"t\":60,\"s\":[50,60,0],\"e\":[50,100,0],\"to\":[0,2.14594888687134,0],\"ti\":[0,-3.30003786087036,0]},{\"i\":{\"x\":0.794,\"y\":0.742},\"o\":{\"x\":0.413,\"y\":0.216},\"n\":\"0p794_0p742_0p413_0p216\",\"t\":90,\"s\":[50,100,0],\"e\":[50,60,0],\"to\":[0,3.99633884429932,0],\"ti\":[0,5.32553148269653,0]},{\"t\":120}],\"ix\":2},\"a\":{\"a\":0,\"k\":[19,36,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[10.647,1.117],[-10.609,1.433],[-10.647,-1.117],[10.609,-1.433]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[17.363,58.404],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[13.057,1.081],[-13.019,1.469],[-13.057,-1.081],[13.018,-1.469]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[19.696,53.266],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[6.969,1.596],[-6.918,1.803],[-6.969,-1.598],[6.919,-1.803]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[21.41,44.595],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":2,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.024,-1.644],[1.644,-0.026],[0.025,1.643],[-1.644,0.025]],\"o\":[[0.024,1.644],[-1.643,0.024],[-0.024,-1.644],[1.644,-0.024]],\"v\":[[2.976,-0.044],[0.044,2.977],[-2.976,0.044],[-0.044,-2.977]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[9.504,44.631],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 4\",\"np\":2,\"cix\":2,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[10.647,1.117],[-10.609,1.434],[-10.647,-1.117],[10.609,-1.434]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[16.846,30.914],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 5\",\"np\":2,\"cix\":2,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[13.056,1.081],[-13.018,1.469],[-13.056,-1.081],[13.018,-1.469]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[19.179,25.777],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 6\",\"np\":2,\"cix\":2,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[6.969,1.597],[-6.919,1.804],[-6.969,-1.597],[6.918,-1.804]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[20.893,17.105],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 7\",\"np\":2,\"cix\":2,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.024,-1.644],[1.644,-0.024],[0.025,1.644],[-1.644,0.025]],\"o\":[[0.024,1.644],[-1.643,0.024],[-0.024,-1.643],[1.644,-0.024]],\"v\":[[2.976,-0.044],[0.044,2.976],[-2.976,0.044],[-0.044,-2.976]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[8.987,17.14],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 8\",\"np\":2,\"cix\":2,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[2.534,0.015],[0,0],[-0.015,2.535],[0,0],[-1.621,-0.01],[0,0],[0.003,-0.363],[0,0],[-0.933,-0.005],[0,0],[-0.006,0.932],[0,0],[-0.363,-0.002],[0,0],[0.01,-1.622]],\"o\":[[-0.015,2.534],[0,0],[-2.535,-0.016],[0,0],[0.01,-1.621],[0,0],[0.362,0.002],[0,0],[-0.006,0.932],[0,0],[0.933,0.006],[0,0],[0.002,-0.363],[0,0],[1.622,0.009],[0,0]],\"v\":[[16.829,29.836],[12.212,34.398],[-12.626,34.249],[-17.188,29.633],[-16.824,-31.484],[-13.87,-34.402],[-9.583,-34.376],[-8.93,-33.716],[-8.932,-33.257],[-7.255,-31.559],[7.434,-31.473],[9.133,-33.15],[9.135,-33.609],[9.796,-34.262],[14.273,-34.234],[17.193,-31.281]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.851000019148,0.910000011968,0.980000035903,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[18.974,35.876],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 9\",\"np\":2,\"cix\":2,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[2.534,0.015],[0,0],[-0.015,2.535],[0,0],[-1.621,-0.01],[0,0],[0.003,-0.363],[0,0],[-0.933,-0.005],[0,0],[-0.006,0.932],[0,0],[-0.363,-0.002],[0,0],[0.01,-1.622]],\"o\":[[-0.015,2.534],[0,0],[-2.535,-0.016],[0,0],[0.01,-1.621],[0,0],[0.362,0.002],[0,0],[-0.006,0.932],[0,0],[0.933,0.006],[0,0],[0.002,-0.363],[0,0],[1.622,0.009],[0,0]],\"v\":[[16.831,29.833],[12.215,34.395],[-12.623,34.247],[-17.185,29.63],[-16.821,-31.486],[-13.867,-34.405],[-9.58,-34.379],[-8.928,-33.719],[-8.93,-33.26],[-7.252,-31.562],[7.436,-31.475],[9.135,-33.152],[9.138,-33.611],[9.798,-34.264],[14.276,-34.237],[17.195,-31.283]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.534,0.015],[0,0],[0.014,-2.535],[0,0],[-2.535,-0.016],[0,0],[-0.015,2.535],[0,0]],\"o\":[[0,0],[-2.535,-0.015],[0,0],[-0.015,2.534],[0,0],[2.535,0.016],[0,0],[0.015,-2.535]],\"v\":[[14.41,-35.709],[-13.983,-35.878],[-18.599,-31.316],[-18.971,31.093],[-14.409,35.709],[13.983,35.878],[18.6,31.316],[18.972,-31.092]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[18.972,35.878],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 10\",\"np\":6,\"cix\":2,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"“macBook”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.388,\"y\":0.948},\"o\":{\"x\":0.283,\"y\":0},\"n\":\"0p388_0p948_0p283_0\",\"t\":0,\"s\":[1261.386,398.89,0],\"e\":[1373.386,330.89,0],\"to\":[10,-20.8333339691162,0],\"ti\":[-73.7790985107422,-3.55131125450134,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":60,\"s\":[1373.386,330.89,0],\"e\":[1261.386,398.89,0],\"to\":[3.18239498138428,0.15318261086941,0],\"ti\":[35.7236824035645,-80.5146408081055,0]},{\"t\":120}],\"ix\":2},\"a\":{\"a\":0,\"k\":[60.5,51,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[80,80,100],\"e\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":60,\"s\":[100,100,100],\"e\":[80,80,100]},{\"t\":120}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.638,-0.232],[0,0],[-0.525,0.441],[0,0],[0.641,0.233],[0,0],[0.525,-0.441]],\"o\":[[-0.524,0.441],[0,0],[0.641,0.232],[0,0],[0.524,-0.442],[0,0],[-0.638,-0.232],[0,0]],\"v\":[[-19.394,7.865],[-19.185,9.085],[-7.454,13.344],[-5.343,12.965],[19.394,-7.864],[19.182,-9.086],[7.451,-13.344],[5.343,-12.965]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.62400004069,0.795999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[84.292,74.796],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.673,-0.244],[0,0],[-0.55,0.463],[0,0],[0.676,0.245],[0,0],[0.552,-0.465]],\"o\":[[-0.55,0.463],[0,0],[0.675,0.245],[0,0],[0.552,-0.465],[0,0],[-0.671,-0.244],[0,0]],\"v\":[[-32.372,17.253],[-32.149,18.538],[-17.987,23.679],[-15.767,23.281],[32.37,-17.253],[32.149,-18.539],[17.987,-23.68],[15.765,-23.281]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.62400004069,0.795999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[64.188,68.317],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[37.711,-2.88],[13.659,-41.128],[-37.951,2.594],[-13.898,40.842]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.601,-0.956],[0,0],[0.806,-0.682],[0,0],[0.601,0.955],[0,0],[-0.805,0.683]],\"o\":[[0.805,-0.682],[0,0],[0.6,0.955],[0,0],[-0.805,0.682],[0,0],[-0.6,-0.955],[0,0]],\"v\":[[12.608,-43.171],[15.156,-42.673],[39.438,-4.061],[39.066,-1.096],[-12.848,42.885],[-15.394,42.391],[-39.676,3.777],[-39.307,0.81]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.62400004069,0.795999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[40.038,43.566],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":6,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.295,0.25],[-0.22,-0.35],[0.298,-0.252],[0.222,0.352]],\"o\":[[0.297,-0.252],[0.222,0.353],[-0.295,0.25],[-0.219,-0.35]],\"v\":[[-0.402,-0.635],[0.536,-0.454],[0.4,0.637],[-0.538,0.456]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.851000019148,0.910000011968,0.980000035903,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[17.518,45.956],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 4\",\"np\":2,\"cix\":2,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.297,0.252],[-0.219,-0.35],[0.298,-0.252],[0.221,0.352]],\"o\":[[0.298,-0.252],[0.223,0.353],[-0.298,0.252],[-0.22,-0.35]],\"v\":[[-0.402,-0.637],[0.535,-0.454],[0.399,0.637],[-0.538,0.456]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.851000019148,0.910000011968,0.980000035903,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[19.669,44.135],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 5\",\"np\":2,\"cix\":2,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.298,0.252],[-0.22,-0.35],[0.298,-0.252],[0.222,0.353]],\"o\":[[0.297,-0.252],[0.222,0.353],[-0.298,0.252],[-0.22,-0.35]],\"v\":[[-0.401,-0.637],[0.536,-0.455],[0.4,0.637],[-0.538,0.455]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.851000019148,0.910000011968,0.980000035903,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[21.819,42.313],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 6\",\"np\":2,\"cix\":2,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.503,2.968],[-2.674,-3.803],[0,0],[0,0],[2.612,4.155]],\"o\":[[3.382,-2.865],[0,0],[0,0],[-3.503,2.967],[-2.611,-4.15]],\"v\":[[-3.281,-7.569],[7.506,-5.824],[1.185,-0.469],[6.174,7.466],[-4.895,5.318]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[37.25,47.854],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 7\",\"np\":2,\"cix\":2,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.089,-0.14],[3.111,-2.636],[0,0]],\"o\":[[0.094,0.131],[2.322,3.692],[0,0],[0,0]],\"v\":[[1.508,-5.93],[1.787,-5.529],[0.356,5.93],[-4.109,-1.171]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.685999971278,0.823999980852,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[43.772,48.795],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 8\",\"np\":2,\"cix\":2,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[2.731,-2.954],[3.256,-2.119],[-2.731,2.954],[-3.256,2.118]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[51.364,40.91],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 9\",\"np\":2,\"cix\":2,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[1.499,-1.91],[2.023,-1.074],[-1.499,1.91],[-2.023,1.075]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[51.184,43.626],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 10\",\"np\":2,\"cix\":2,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[0.971,-1.463],[1.497,-0.628],[-0.971,1.463],[-1.497,0.628]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[51.706,45.742],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 11\",\"np\":2,\"cix\":2,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.776,-0.282],[0,0],[-0.636,0.536],[0,0],[0.776,0.282],[0,0],[0.637,-0.536]],\"o\":[[-0.637,0.536],[0,0],[0.775,0.282],[0,0],[0.638,-0.536],[0,0],[-0.775,-0.282],[0,0]],\"v\":[[-46.444,13.884],[-46.188,15.365],[-6.853,29.644],[-4.294,29.186],[46.67,-13.729],[46.414,-15.21],[7.079,-29.489],[4.52,-29.031]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788000009574,0.870999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[73.892,71.822],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 12\",\"np\":4,\"cix\":2,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[11.072,-0.999],[10.547,-1.834],[8.079,0.256],[8.604,1.091]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[11.077,-3.562],[10.551,-4.397],[7.03,-1.413],[7.553,-0.578]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[12.49,-7.323],[11.965,-8.158],[5.978,-3.085],[6.503,-2.251]],\"c\":true},\"ix\":2},\"nm\":\"路径 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[2.322,3.692],[0.094,0.132],[0,0]],\"o\":[[3.112,-2.635],[-0.088,-0.141],[0,0],[0,0]],\"v\":[[1.997,8.61],[3.428,-2.847],[3.15,-3.249],[-2.469,1.51]],\"c\":true},\"ix\":2},\"nm\":\"路径 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.503,2.968],[0,0],[0,0],[3.382,-2.864],[-2.611,-4.151]],\"o\":[[0,0],[0,0],[-2.674,-3.804],[-3.503,2.968],[2.612,4.154]],\"v\":[[1.294,9.206],[-3.697,1.272],[2.624,-4.083],[-8.161,-5.829],[-9.775,7.059]],\"c\":true},\"ix\":2},\"nm\":\"路径 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-25.122,2.961],[10.088,-26.868],[14.499,-19.854],[15.499,-18.262],[20.111,-10.93],[21.715,-8.38],[25.122,-2.961],[-10.089,26.868]],\"c\":true},\"ix\":2},\"nm\":\"路径 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788000009574,0.870999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[42.131,46.114],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 13\",\"np\":8,\"cix\":2,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.295,0.25],[0.221,0.353],[0.298,-0.252],[-0.22,-0.35]],\"o\":[[0.298,-0.252],[-0.22,-0.349],[-0.295,0.25],[0.222,0.353]],\"v\":[[-15.593,14.186],[-15.456,13.094],[-16.395,12.913],[-16.531,14.005]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.297,0.252],[0.222,0.352],[0.298,-0.252],[-0.22,-0.349]],\"o\":[[0.298,-0.252],[-0.22,-0.35],[-0.297,0.251],[0.222,0.353]],\"v\":[[-11.292,10.542],[-11.156,9.452],[-12.093,9.27],[-12.229,10.361]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.298,0.252],[0.222,0.353],[0.297,-0.253],[-0.22,-0.351]],\"o\":[[0.297,-0.252],[-0.22,-0.35],[-0.298,0.252],[0.222,0.352]],\"v\":[[-13.443,12.365],[-13.307,11.273],[-14.243,11.092],[-14.38,12.184]],\"c\":true},\"ix\":2},\"nm\":\"路径 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[4.122,-6.178],[16.504,-16.667],[17.507,-15.072],[18.508,-13.48],[18.708,-13.161],[-16.503,16.667],[-18.708,13.163],[-2.312,-0.727],[-1.219,-1.652],[-0.178,-2.535],[0.931,-3.475],[1.972,-4.357],[3.081,-5.296]],\"c\":true},\"ix\":2},\"nm\":\"路径 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[33.511,32.407],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 14\",\"np\":6,\"cix\":2,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-37.831,2.736],[13.779,-40.986],[37.831,-2.738],[-13.778,40.986]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.910000011968,0.944999964097,0.976000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[39.917,43.424],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 15\",\"np\":2,\"cix\":2,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"“safari1”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":0,\"s\":[0],\"e\":[360]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":60,\"s\":[360],\"e\":[0]},{\"t\":120}],\"ix\":10},\"p\":{\"a\":0,\"k\":[1008,701,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[30,30,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[9.297,-1.857],[-9.297,9.294],[1.86,-9.294]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.944999964097,0.944999964097,0.944999964097,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[24.465,35.538],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-1.857,9.297],[9.294,-9.297],[-9.294,1.86]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.933000033509,0.294000004787,0.169000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[35.538,24.465],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gf\",\"o\":{\"a\":0,\"k\":100,\"ix\":10},\"r\":1,\"g\":{\"p\":2,\"k\":{\"a\":0,\"k\":[0,1,1,1,1,0,0,0],\"ix\":9}},\"s\":{\"a\":0,\"k\":[0,0],\"ix\":5},\"e\":{\"a\":0,\"k\":[100,0],\"ix\":6},\"t\":1,\"nm\":\"渐变填充 1\",\"mn\":\"ADBE Vector Graphic - G-Fill\",\"hd\":true}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"“pc”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":-20,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":0,\"s\":[683,692,0],\"e\":[646,713,0],\"to\":[-19.25,-0.33333334326744,0],\"ti\":[3.62298774719238,-10.1576356887817,0]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p833_1_0p333_0\",\"t\":30,\"s\":[646,713,0],\"e\":[683.25,693.25,0],\"to\":[-0.05851480737329,0.16405579447746,0],\"ti\":[-25.3056774139404,-4.49727630615234,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":60,\"s\":[683.25,693.25,0],\"e\":[646,712.25,0],\"to\":[0.8854306936264,0.15735703706741,0],\"ti\":[13.6526699066162,-24.7534523010254,0]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p833_1_0p333_0\",\"t\":90,\"s\":[646,712.25,0],\"e\":[683.5,692.5,0],\"to\":[-3.27593660354614,5.93955183029175,0],\"ti\":[-32.3207092285156,-1.42831826210022,0]},{\"t\":120}],\"ix\":2},\"a\":{\"a\":0,\"k\":[68,50.5,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[80,80,100],\"e\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":30,\"s\":[100,100,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p167_0\",\"0p667_1_0p167_0\",\"0p667_1_0p167_0\"],\"t\":60,\"s\":[80,80,100],\"e\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":90,\"s\":[100,100,100],\"e\":[80,80,100]},{\"t\":120}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.166,0],[0,0],[0,1.166],[0,0],[-1.166,0],[0,0],[0,-1.165],[0,0]],\"o\":[[0,0],[-1.166,0],[0,0],[0,-1.165],[0,0],[1.166,0],[0,0],[0,1.166]],\"v\":[[32.047,2.279],[-32.046,2.279],[-34.157,0.169],[-34.157,-0.169],[-32.046,-2.28],[32.047,-2.28],[34.157,-0.169],[34.157,0.169]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[68.526,98.706],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[51.13,25.671],[-51.13,25.671],[-51.13,-25.671],[51.13,-25.671]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788000009574,0.870999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[78.285,45.614],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[9.547,25.671],[-9.547,25.671],[-9.547,-25.671],[9.547,-25.671]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788000009574,0.870999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[15.487,45.614],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":2,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[61.737,5.516],[-61.737,5.516],[-61.737,-5.516],[61.737,-5.516]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788000009574,0.870999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[67.678,12.305],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 4\",\"np\":2,\"cix\":2,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-0.292,0],[0,0],[0,-0.291]],\"o\":[[0,0],[0,0],[0,-0.291],[0,0],[0.291,0],[0,0]],\"v\":[[63.859,34.581],[-63.859,34.581],[-63.859,-34.053],[-63.331,-34.581],[63.332,-34.581],[63.859,-34.053]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.917999985639,0.952999997606,0.984000052658,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[67.678,38.824],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 5\",\"np\":2,\"cix\":2,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[4.812,0],[0,0],[0,4.813],[0,0],[-4.812,0],[0,0],[0,-4.812],[0,0]],\"o\":[[0,0],[-4.812,0],[0,0],[0,-4.812],[0,0],[4.812,0],[0,0],[0,4.813]],\"v\":[[58.964,42.855],[-58.964,42.855],[-67.677,34.142],[-67.677,-34.142],[-58.964,-42.855],[58.964,-42.855],[67.678,-34.142],[67.678,34.142]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[67.678,42.855],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 6\",\"np\":4,\"cix\":2,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[16.336,11.457],[-16.336,11.457],[-7.85,-11.456],[7.85,-11.456]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.626999978458,0.804000016755,0.976000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[68.102,84.862],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 7\",\"np\":2,\"cix\":2,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"“line”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[995,494,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[285,210.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.407,0.535]],\"o\":[[0.4,-0.531],[0,0]],\"v\":[[-0.605,0.799],[0.605,-0.799]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.933000033509,0.294000004787,0.169000004787,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[36.782,313.246],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-28.229,-40.264],[153.961,-107.938],[28.737,40.99],[-28.84,39.101]],\"o\":[[150.993,-104.144],[28.737,40.99],[-153.962,107.939],[-12.209,-17.414],[0,0]],\"v\":[[-52.117,-80.273],[270.508,-195.803],[43.77,73.856],[-287.036,195.077],[-259.106,106.757]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.933000033509,0.294000004787,0.169000004787,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"d\":[{\"n\":\"d\",\"nm\":\"虚线\",\"v\":{\"a\":0,\"k\":3.982,\"ix\":1}},{\"n\":\"g\",\"nm\":\"间隙\",\"v\":{\"a\":0,\"k\":7.964,\"ix\":2}},{\"n\":\"o\",\"nm\":\"偏移\",\"v\":{\"a\":0,\"k\":0,\"ix\":7}}],\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[292.902,210.479],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.546,0.382]],\"o\":[[0.546,-0.383],[0,0]],\"v\":[[-0.82,0.573],[0.819,-0.573]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.933000033509,0.294000004787,0.169000004787,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[233.423,135.322],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":2,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":0,\"nm\":\"404动\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[960,540,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":1920,\"h\":1080,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"“google”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1051,393,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[21.5,21.5,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[110,110,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":36,\"s\":[80,80,100],\"e\":[110,110,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p167_0\",\"0p667_1_0p167_0\",\"0p667_1_0p167_0\"],\"t\":66,\"s\":[110,110,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":90,\"s\":[80,80,100],\"e\":[110,110,100]},{\"t\":136}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.478,-0.842],[0,0],[-7.561,-7.562],[-0.957,-3.415],[0,0],[3.084,-3.085]],\"o\":[[0,0],[8.346,-6.17],[2.688,2.687],[0,0],[-3.856,-1.391],[-0.721,0.714]],\"v\":[[-13.438,7.977],[-16.597,-3.817],[11.137,-1.732],[16.597,7.593],[-0.216,3.087],[-11.646,5.626]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.933000033509,0.294000004787,0.169000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[25.254,7.977],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":4,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.021,-3.021],[3.021,-3.02],[3.021,3.022],[-3.018,3.018]],\"o\":[[3.021,3.021],[-3.021,3.022],[-3.021,-3.02],[3.017,-3.018]],\"v\":[[5.476,-5.477],[5.476,5.475],[-5.476,5.475],[-5.476,-5.477]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.325,0.579999976065,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[21.317,21.319],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-2.833,0.03],[0,0],[1.943,1.943],[-8.154,8.335],[0,0],[-1.634,-1.633]],\"o\":[[0,0],[-2.378,-1.038],[-8.268,-8.268],[0,0],[0.378,2.114],[2.145,2.152]],\"v\":[[10.714,8.579],[2.072,17.221],[-4.472,12.753],[-4.64,-17.221],[-0.124,-0.378],[2.894,5.393]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.195999998205,0.647000002394,0.086000001197,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[10.714,23.641],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":4,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.465,4.183],[0,0],[4.769,-4.768],[7.05,1.795],[0,0],[-0.225,0.225]],\"o\":[[0,0],[0.697,6.221],[-5.516,5.517],[0,0],[0.239,-0.199],[3.584,-3.591]],\"v\":[[1.38,-13.43],[13.168,-10.271],[7.058,7.188],[-13.301,12.769],[-1.001,0.469],[-0.301,-0.17]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.948999980852,0.823999980852,0.286000001197,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[29.333,29.205],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 4\",\"np\":4,\"cix\":2,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"“internet”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":21,\"s\":[0],\"e\":[45]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":60,\"s\":[45],\"e\":[0]},{\"t\":98}],\"ix\":10},\"p\":{\"a\":0,\"k\":[801,308,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[20,27,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[80,80,100],\"e\":[110,110,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":60,\"s\":[110,110,100],\"e\":[80,80,100]},{\"t\":120}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.874,-2.162],[0,0],[2.254,0.702],[2.144,-0.955],[0.977,-2.142]],\"o\":[[0,0],[-1.024,-2.095],[-2.254,-0.702],[-2.158,0.963],[-0.976,2.143]],\"v\":[[-9.141,0.667],[7.227,-6.632],[2.31,-10.827],[-4.286,-10.447],[-8.988,-5.79]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.848,-1.903],[-1.037,-0.373],[-1.289,0.576],[-1.708,2.253],[2.114,1.052],[1.585,1.701]],\"o\":[[0.575,1.289],[1.038,0.372],[1.723,-0.768],[-2.31,-0.263],[-2.113,-1.052],[-0.098,3.728]],\"v\":[[-13.325,21.75],[-10.906,24.243],[-7.415,23.939],[-2.267,19.407],[-8.902,17.433],[-14.45,13.303]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.542,1.214],[1.122,0.381],[1.259,-0.561],[1.72,-2.025],[-2.086,-0.589],[-1.776,-1.203]],\"o\":[[-0.554,-1.244],[-1.121,-0.38],[-1.619,0.722],[2.128,-0.104],[2.086,0.588],[-0.138,-2.365]],\"v\":[[10.112,-22.042],[7.597,-24.479],[4.026,-24.207],[-0.983,-20.086],[5.338,-19.36],[11.131,-16.674]],\"c\":true},\"ix\":2},\"nm\":\"路径 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.39,-3.119],[-0.215,-0.766],[0,0],[-2.3,-0.744],[-2.218,0.989],[-0.986,1.274],[-0.188,1.593],[0,0],[0.9,-2.594],[1.849,-2.019],[2.518,-1.122],[3.088,0.114],[2.489,-1.11],[1.758,3.941],[0.395,2.699],[-0.25,3.148],[-2.493,5.532],[1.805,-5.746],[-2.132,4.103],[-4.212,1.878],[-0.232,0.085],[-2.668,1.189],[-0.866,0.153],[-0.821,-0.128],[-0.687,-0.573],[-0.442,-0.99],[-0.011,-3.05]],\"o\":[[0.375,0.838],[0,0],[0.976,2.188],[2.299,0.745],[1.484,-0.661],[0.986,-1.276],[0,0],[0.223,2.758],[-0.901,2.594],[-1.849,2.02],[-2.803,1.25],[-2.642,3.263],[-3.552,1.585],[-0.769,-1.725],[-0.146,-1.013],[0.576,-6.726],[-2.23,2.414],[-0.886,-4.528],[2.132,-4.105],[0.45,-0.2],[3.04,-3.458],[0.959,-0.428],[0.867,-0.153],[0.821,0.129],[0.687,0.575],[0.775,1.738],[2.731,2.052]],\"v\":[[18.102,-8.354],[18.987,-5.946],[-6.891,5.593],[-1.977,9.992],[4.799,9.625],[8.504,6.721],[10.265,2.418],[19.775,-1.823],[18.759,6.204],[14.634,13.124],[8.084,17.837],[-0.752,19.54],[-8.448,26.098],[-16.413,22.562],[-18.158,15.927],[-18.003,9.686],[-13.399,-8.701],[-19.451,3.539],[-17.583,-9.409],[-8.067,-18.383],[-7.045,-18.812],[1.517,-25.783],[4.255,-26.654],[6.786,-26.691],[9.048,-25.638],[10.741,-23.292],[11.921,-16.11]],\"c\":true},\"ix\":2},\"nm\":\"路径 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.325,0.757000014361,0.976000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[19.841,26.779],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":8,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":0,\"nm\":\"phone.ai \",\"cl\":\"ai\",\"refId\":\"comp_2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[627,340,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[50,80,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":100,\"h\":160,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"“safari”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1008,701,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[30,30,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.745,0],[0,0],[0,0.737],[-0.737,0],[0,0],[0,-0.737]],\"o\":[[0,0],[-0.737,0],[0,-0.737],[0,0],[0.738,0],[0,0.737]],\"v\":[[-23.305,1.341],[-28.132,1.341],[-29.473,0],[-28.132,-1.341],[-23.305,-1.341],[-21.964,0]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.737,0],[0,0],[0,0.737],[-0.737,0],[0,0],[0,-0.737]],\"o\":[[0,0],[-0.737,0],[0,-0.737],[0,0],[0.737,0],[0,0.737]],\"v\":[[28.133,1.341],[23.305,1.341],[21.965,0],[23.305,-1.341],[28.133,-1.341],[29.473,0]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.738,0],[0,0.737],[0,0],[-0.737,0],[0,-0.737],[0,0]],\"o\":[[-0.737,0],[0,0],[0,-0.737],[0.738,0],[0,0],[0,0.737]],\"v\":[[-0.003,29.47],[-1.344,28.129],[-1.344,23.301],[-0.003,21.96],[1.339,23.301],[1.339,28.129]],\"c\":true},\"ix\":2},\"nm\":\"路径 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.738,0],[0,0.737],[0,0],[-0.738,0],[0,-0.738],[0,0]],\"o\":[[-0.738,0],[0,0],[0,-0.738],[0.738,0],[0,0],[0,0.737]],\"v\":[[0.004,-21.96],[-1.337,-23.301],[-1.337,-28.129],[0.004,-29.47],[1.344,-28.129],[1.344,-23.301]],\"c\":true},\"ix\":2},\"nm\":\"路径 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788235294118,0.870588235294,0.96862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[29.936,29.913],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":6,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[16.569,0],[0,-16.569],[-16.569,0],[0,16.569]],\"o\":[[-16.569,0],[0,16.569],[16.569,0],[0,-16.569]],\"v\":[[0,-30],[-30,0],[0,30],[30,0]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.688,0],[-3.359,-1.422],[-2.508,-2.508],[-1.374,-3.252],[0,-3.687],[1.422,-3.359],[2.507,-2.508],[3.252,-1.375],[3.688,0],[3.359,1.421],[2.508,2.508],[1.375,3.253],[0,3.689],[-1.421,3.36],[-2.508,2.507],[-3.252,1.375]],\"o\":[[3.688,0],[3.252,1.375],[2.507,2.507],[1.422,3.366],[0,3.689],[-1.374,3.253],[-2.508,2.508],[-3.366,1.421],[-3.688,0],[-3.252,-1.375],[-2.508,-2.508],[-1.421,-3.365],[0,-3.687],[1.375,-3.252],[2.508,-2.508],[3.359,-1.422]],\"v\":[[0,-27.318],[10.628,-25.172],[19.312,-19.318],[25.165,-10.635],[27.311,-0.007],[25.165,10.621],[19.312,19.305],[10.628,25.159],[0,27.305],[-10.628,25.159],[-19.312,19.305],[-25.166,10.621],[-27.312,-0.007],[-25.166,-10.635],[-19.312,-19.318],[-10.628,-25.172]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788235294118,0.870588235294,0.96862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[30,30],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":6,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[16.568,0],[0,-16.569],[-16.569,0],[0,16.568]],\"o\":[[-16.569,0],[0,16.568],[16.568,0],[0,-16.569]],\"v\":[[0.001,-30],[-30,0],[0.001,30],[30,0]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.411764705882,0.721568627451,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[30,30],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":2,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"形状图层 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":14,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[976,554,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[109.241,116.953,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.360784313725,0.611764705882,0.945098039216,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[220,-18],[-19.494,-72.19],[-28.826,-15.404],[7,-39],[-64,-82],[-84,6],[-46,-26],[-2,44],[-50,80],[56,100],[196,-8]],\"o\":[[-115.574,9.456],[17.613,65.226],[48.049,25.676],[-7,39],[64,82],[84,-6],[46,26],[2,-44],[50,-80],[-56,-100],[-196,8]],\"v\":[[-314,-346],[-465.542,-174.664],[-373.955,-73.521],[-320.323,44.971],[-360,244],[-74,192],[198,260],[300,204],[288,26],[458,-214],[60,-238]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.360784313725,0.611764705882,0.945098039216,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./components/atoms/buttons/button.jsx":
/*!*********************************************!*\
  !*** ./components/atoms/buttons/button.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_styles_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.styles.jsx */ "./components/atoms/buttons/button.styles.jsx");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons */ "./assets/icons/index.js");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/buttons/button.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Icons = {
  arrowForward: _assets_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowForward"],
  backpress: _assets_icons__WEBPACK_IMPORTED_MODULE_3__["Backpress"]
};

const Button = (_ref) => {
  let {
    children,
    href,
    onClick,
    isFocus,
    variant,
    rounded,
    border,
    target,
    icon,
    width,
    height,
    iconPosition,
    iconTop,
    iconRight,
    iconLeft,
    iconBottom,
    isEqualWidth,
    isEqualHeight
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "href", "onClick", "isFocus", "variant", "rounded", "border", "target", "icon", "width", "height", "iconPosition", "iconTop", "iconRight", "iconLeft", "iconBottom", "isEqualWidth", "isEqualHeight"]);

  if (!href) return __jsx(_button_styles_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    onClick: onClick,
    variant: variant,
    isFocus: isFocus,
    rounded: rounded,
    width: width,
    height: height,
    border: border,
    isEqualWidth: isEqualWidth,
    isEqualHeight: isEqualHeight
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), children, __jsx(ButtonIcon, {
    name: icon,
    iconPosition: iconPosition,
    iconRight: iconRight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }));
  return __jsx(_button_styles_jsx__WEBPACK_IMPORTED_MODULE_2__["StyledLinkButton"], {
    href: href,
    variant: variant,
    target: target,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, children);
};

const ButtonIcon = ({
  name,
  iconPosition,
  iconRight,
  iconTop,
  iconLeft,
  iconBottom
}) => {
  if (Icons[name] === undefined) return null;
  const Icon = Icons[name];
  return __jsx(_button_styles_jsx__WEBPACK_IMPORTED_MODULE_2__["SyledButtonIcon"], {
    iconPosition: iconPosition,
    iconTop: iconTop,
    iconRight: iconRight,
    iconLeft: iconLeft,
    iconBottom: iconBottom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 3
    }
  }, __jsx(Icon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }
  }));
};

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  target: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};
Button.defaultProps = {
  children: "Text Button"
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/atoms/buttons/button.styles.jsx":
/*!****************************************************!*\
  !*** ./components/atoms/buttons/button.styles.jsx ***!
  \****************************************************/
/*! exports provided: StyledButton, StyledLinkButton, SyledButtonIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLinkButton", function() { return StyledLinkButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyledButtonIcon", function() { return SyledButtonIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");



const isBackgroundColor = props => {
  if (!props.variant) return "#001CF9";
  let color;

  switch (props.variant) {
    case "primary":
      color = "#001CF9";
      break;

    case "secondary":
      color = "#F7FBFF";
      break;

    default:
      color = "#001CF9";
      break;
  }

  return color;
};

const isHover = props => {
  let color;

  switch (props.variant) {
    case "primary":
      color = "#F7FBFF";
      break;

    case "secondary":
      color = "#001CF9";
      break;

    default:
      color = "#001CF9";
      break;
  }

  return color;
};

const isCursor = props => {
  if (props.variant == "disabled") {
    return "not-allowed";
  } else {
    return "pointer";
  }
};

const isColor = props => {
  if (props.variant == "secondary") {
    return "#001CF9";
  } else {
    return "#ffffff";
  }
};

const isPointer = props => {
  if (props.variant == "disabled") {
    return "none";
  } else {
    return "all";
  }
};

const border = props => {
  if (!props.border) return "none";

  switch (props.border) {
    case 'primary':
      return "#001CF9";
      break;

    case 'secondary':
      return "#F7FBFF";

    default:
      return "none";
      break;
  }
};

const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "buttonstyles__StyledButton",
  componentId: "sc-1sm1y0z-0"
})(["position:relative;display:inline-block;padding:8px 12px 8px 12px;width:", ";height:", ";min-width:120px;border:", ";border-radius:5px;background-color:", ";cursor:", ";pointer-events:", ";text-decoration:none;transition:all 0.8s ease;white-space:nowrap;font-family:'Montserrat',sans-serif;font-style:normal;font-size:14px;font-weight:500;line-height:17px;text-align:center;color:", ";&:hover{background:", ";color:", ";box-shadow:5px 10px 15px rgba(0,28,249,0.25);}&:focus{outline:none;}&:active{outline:none;}@media ", "{width:", " !important;height:", " !important;}"], props => props.width, props => props.height, props => !props.border ? 'none' : '1px solid ' + border(props), props => isBackgroundColor(props), props => isCursor(props), props => isPointer(props), props => isColor(props), props => !props.isFocus ? isHover(props) : 'none', props => !props.isFocus ? '#ffffff' : '#001CF9', _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].mobileL, props => props.isEqualWidth, props => props.isEqualHeight);
const StyledLinkButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StyledButton).attrs({
  as: "a"
}).withConfig({
  displayName: "buttonstyles__StyledLinkButton",
  componentId: "sc-1sm1y0z-1"
})(["text-deocration:none;"]);
const SyledButtonIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "buttonstyles__SyledButtonIcon",
  componentId: "sc-1sm1y0z-2"
})(["position:", ";right:", ";top:", ";left:", ";bottom:", ";"], props => props.iconPosition, props => props.iconRight, props => props.iconTop, props => props.iconLeft, props => props.iconBottom);
/* harmony default export */ __webpack_exports__["default"] = (StyledButton);

/***/ }),

/***/ "./components/atoms/buttons/index.js":
/*!*******************************************!*\
  !*** ./components/atoms/buttons/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.jsx */ "./components/atoms/buttons/button.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _button_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/containers/container.jsx":
/*!***************************************************!*\
  !*** ./components/atoms/containers/container.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container_styles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.styles.jsx */ "./components/atoms/containers/container.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/containers/container.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Container = (_ref) => {
  let {
    children,
    isEqualWidth,
    isEqualHeight,
    flexDirection,
    backgroundColor,
    display,
    justifyContent,
    alignItems,
    boxSizing,
    padding,
    boxShadow,
    position
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "isEqualWidth", "isEqualHeight", "flexDirection", "backgroundColor", "display", "justifyContent", "alignItems", "boxSizing", "padding", "boxShadow", "position"]);

  return __jsx(_container_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    flexDirection: flexDirection,
    isEqualHeight: isEqualHeight,
    isEqualWidth: isEqualWidth,
    backgroundColor: backgroundColor,
    boxSizing: boxSizing,
    padding: padding,
    boxShadow: boxShadow,
    position: position
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }), children);
};

Container.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"].isRequired,
  display: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  flexDirection: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualHeight: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  boxSizing: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  padding: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  boxShadow: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/atoms/containers/container.styles.jsx":
/*!**********************************************************!*\
  !*** ./components/atoms/containers/container.styles.jsx ***!
  \**********************************************************/
/*! exports provided: StyledContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContainer", function() { return StyledContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const isDisplayProps = props => {
  if (!props.display) return "flex";

  switch (props.display) {
    case "flex":
      return "flex";
      break;

    case "inline-flex":
      return "inline-flex";
      break;

    default:
      return "flex";
      break;
  }
};

const flexDirection = props => {
  switch (props.flexDirection) {
    case "column":
      return "column";
      break;

    case "column-reverse":
      return "column-reverse";
      break;

    case "row":
      return "row";
      break;

    case "row-reverse":
      return "row-reverse";
      break;

    case "inherit":
      return "initial";
      break;

    default:
      return "row";
      break;
  }
};

const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containerstyles__StyledContainer",
  componentId: "ygznhw-0"
})(["display:", ";width:", ";height:", ";background:", ";flex-direction:", ";justify-content:", ";align-items:", ";box-sizing:", ";padding:", ";box-shadow:", ";position:", ";"], props => isDisplayProps(props), props => props.isEqualWidth, props => props.isEqualHeight, props => !props.backgroundColor ? 'none' : props.backgroundColor, props => flexDirection(props), props => props.justifyContent, props => props.alignItems, props => props.boxSizing, props => props.padding, props => props.boxShadow, props => props.position);
/* harmony default export */ __webpack_exports__["default"] = (StyledContainer);

/***/ }),

/***/ "./components/atoms/containers/index.js":
/*!**********************************************!*\
  !*** ./components/atoms/containers/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container.jsx */ "./components/atoms/containers/container.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _container_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/images/image.jsx":
/*!*******************************************!*\
  !*** ./components/atoms/images/image.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_styles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.styles.jsx */ "./components/atoms/images/image.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/images/image.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Image = (_ref) => {
  let {
    src,
    position,
    top,
    left,
    right,
    bottom,
    margin,
    isEqualposition,
    isEqualtop,
    isEqualleft,
    isEqualright,
    isEqualbottom,
    width,
    height
  } = _ref,
      props = _objectWithoutProperties(_ref, ["src", "position", "top", "left", "right", "bottom", "margin", "isEqualposition", "isEqualtop", "isEqualleft", "isEqualright", "isEqualbottom", "width", "height"]);

  return __jsx(_image_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    src: src,
    position: position,
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    margin: margin,
    isEqualposition: isEqualposition,
    isEqualtop: isEqualtop,
    isEqualleft: isEqualleft,
    isEqualright: isEqualright,
    isEqualbottom: isEqualbottom,
    width: width,
    height: height
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }));
};

Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  top: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  left: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  right: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  margin: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualposition: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualtop: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualleft: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualright: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualbottom: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/atoms/images/image.styles.jsx":
/*!**************************************************!*\
  !*** ./components/atoms/images/image.styles.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");


const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "imagestyles__StyledImage",
  componentId: "sc-1gc5f3x-0"
})(["width:", ";height:", ";position:", ";top:", ";left:", ";right:", ";bottom:", ";margin:", ";@media ", "{position:", ";top:", ";left:", ";right:", ";bottom:", ";}"], props => props.width, props => props.height, props => props.position, props => props.top, props => props.left, props => props.right, props => props.bottom, props => props.margin, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].mobileL, props => props.isEqualposition, props => props.isEqualtop, props => props.isEqualleft, props => props.isEqualright, props => props.isEqualbottom);
/* harmony default export */ __webpack_exports__["default"] = (StyledImage);

/***/ }),

/***/ "./components/atoms/images/index.js":
/*!******************************************!*\
  !*** ./components/atoms/images/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.jsx */ "./components/atoms/images/image.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _image_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/index.js":
/*!***********************************!*\
  !*** ./components/atoms/index.js ***!
  \***********************************/
/*! exports provided: Container, View, Button, Image, Text, Lottie, Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ "./components/atoms/containers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _containers__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views */ "./components/atoms/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _views__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ "./components/atoms/buttons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _buttons__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images */ "./components/atoms/images/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _images__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _texts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./texts */ "./components/atoms/texts/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _texts__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _lotties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lotties */ "./components/atoms/lotties/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lottie", function() { return _lotties__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo */ "./components/atoms/logo/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _logo__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./components/atoms/logo/index.js":
/*!****************************************!*\
  !*** ./components/atoms/logo/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/logo/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Logo = ({
  width,
  heigh,
  props
}) => __jsx("svg", _extends({
  width: width,
  height: heigh,
  viewBox: "0 0 31.278 31.278"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}), __jsx("g", {
  "data-name": "Group 167",
  transform: "translate(-37.861 -19.861)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }
}, __jsx("rect", {
  "data-name": "Rectangle 128",
  width: 27,
  height: 27,
  rx: 8,
  transform: "translate(40 22)",
  fill: "#1e2127",
  opacity: 0.505,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}), __jsx("rect", {
  "data-name": "Rectangle 127",
  width: 27,
  height: 27,
  rx: 8,
  transform: "rotate(10.02 -92.004 252.598)",
  fill: "#1e2127",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}), __jsx("text", {
  transform: "translate(49 41)",
  fill: "#fff",
  fontSize: 24,
  fontFamily: "GoodDogPlain, GoodDog Plain",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}, __jsx("tspan", {
  x: 0,
  y: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 11
  }
}, "a"))));

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/atoms/lotties/index.js":
/*!*******************************************!*\
  !*** ./components/atoms/lotties/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lottie_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lottie.jsx */ "./components/atoms/lotties/lottie.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _lottie_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/lotties/lottie.jsx":
/*!*********************************************!*\
  !*** ./components/atoms/lotties/lottie.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lottie */ "react-lottie");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/lotties/lottie.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Lottie = ({
  width,
  height,
  loop,
  autoplay,
  path
}) => {
  let lottieState = {
    loop: loop,
    autoplay: autoplay,
    animationData: path
  };
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_1___default.a, {
      width: width,
      height: height,
      options: lottieState,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    });
  });
};

Lottie.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired,
  loop: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"].isRequired,
  autoplay: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"].isRequired,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"].isRequired
};
Lottie.defaultProps = {
  width: 500,
  height: 500,
  loop: true,
  autoplay: true
};
/* harmony default export */ __webpack_exports__["default"] = (Lottie);

/***/ }),

/***/ "./components/atoms/texts/index.js":
/*!*****************************************!*\
  !*** ./components/atoms/texts/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.jsx */ "./components/atoms/texts/text.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _text_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/texts/text.jsx":
/*!*****************************************!*\
  !*** ./components/atoms/texts/text.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_styles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.styles.jsx */ "./components/atoms/texts/text.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/texts/text.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Text = (_ref) => {
  let {
    children,
    href,
    target,
    variant,
    size,
    weight,
    align,
    isEqualSize,
    isEqualAlign,
    margin,
    width
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "href", "target", "variant", "size", "weight", "align", "isEqualSize", "isEqualAlign", "margin", "width"]);

  if (!href) return __jsx(_text_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    variant: variant,
    size: size,
    weight: weight,
    align: align,
    isEqualSize: isEqualSize,
    isEqualAlign: isEqualAlign,
    margin: margin,
    width: width
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), children);
  return __jsx(_text_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["StyledLink"], {
    href: href,
    variant: variant,
    target: target,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, children);
};

Text.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  size: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  weight: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  align: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualSize: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualAlign: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/texts/text.styles.jsx":
/*!************************************************!*\
  !*** ./components/atoms/texts/text.styles.jsx ***!
  \************************************************/
/*! exports provided: StyledLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");



const color = props => {
  if (!props.variant) return "#403e3e";

  switch (props.variant) {
    case "primary":
      return "#1E2127";
      break;

    case "secondary":
      return "#F7FBFF";

    default:
      return "#403e3e";
      break;
  }
};

const size = props => {
  if (!props.size) return "14";
  return props.size;
};

const weight = props => {
  if (!props.weight) return "400";

  switch (props.weight) {
    case "light":
      return "300";
      break;

    case "regular":
      return "400";
      break;

    case "medium":
      return "500";
      break;

    case "semi-bold":
      return "600";
      break;

    case "bold":
      return "700";

    default:
      break;
  }
};

const StyledText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "textstyles__StyledText",
  componentId: "sc-1c7yjdi-0"
})(["font-family:'Montserrat',sans-serif;font-weight:", ";font-size:", "px;text-align:", ";color:", ";margin:", ";width:", ";@media ", "{font-size:", "px !important;text-align:", "px !important;}"], props => weight(props), props => size(props), props => !props.align ? 'left' : props.align, props => color(props), props => props.margin, props => props.width, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].mobileL, props => props.isEqualSize, props => props.isEqualAlign);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "textstyles__StyledLink",
  componentId: "sc-1c7yjdi-1"
})(["font-family:'Montserrat',sans-serif;font-weight:500;font-size:14px;text-align:left;color:#1e2127;text-decoration:none;"]);
/* harmony default export */ __webpack_exports__["default"] = (StyledText);

/***/ }),

/***/ "./components/atoms/views/index.js":
/*!*****************************************!*\
  !*** ./components/atoms/views/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.jsx */ "./components/atoms/views/view.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _view_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/views/view.jsx":
/*!*****************************************!*\
  !*** ./components/atoms/views/view.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_styles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.styles.jsx */ "./components/atoms/views/view.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/views/view.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const View = (_ref) => {
  let {
    children,
    style,
    isEqualFlex,
    flexValue,
    direction,
    justify,
    overflow,
    isBoxShadow,
    width,
    isEqualWidth,
    isEqualHeight,
    height,
    radius,
    backgroundColor,
    isEqualBackground,
    isEqualDirection,
    position,
    margin
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "style", "isEqualFlex", "flexValue", "direction", "justify", "overflow", "isBoxShadow", "width", "isEqualWidth", "isEqualHeight", "height", "radius", "backgroundColor", "isEqualBackground", "isEqualDirection", "position", "margin"]);

  return __jsx(_view_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    style: style,
    isBoxShadow: isBoxShadow,
    isEqualFlex: isEqualFlex,
    width: width,
    height: height,
    isEqualWidth: isEqualWidth,
    isEqualHeight: isEqualHeight,
    radius: radius,
    backgroundColor: backgroundColor,
    isEqualBackground: isEqualBackground,
    flexValue: flexValue,
    justify: justify,
    overflow: overflow,
    position: position,
    direction: direction,
    isEqualDirection: isEqualDirection,
    margin: margin
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), children);
};

View.propTypes = {
  style: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"],
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualHeight: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualFlex: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  direction: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualDirection: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  justify: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  flexValue: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  position: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  margin: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  overflow: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualBackground: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isBoxShadow: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  radius: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./components/atoms/views/view.styles.jsx":
/*!************************************************!*\
  !*** ./components/atoms/views/view.styles.jsx ***!
  \************************************************/
/*! exports provided: StyledView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledView", function() { return StyledView; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");



const isDisplayProperty = props => {
  switch (props.isEqualFlex) {
    case "flex":
      return "flex";
      break;

    case "block":
      return "block";
      break;

    case "inline-block":
      return "inline-block";
      break;

    default:
      return "flex";
      break;
  }
};

const masked = props => {
  if (props.masked) {
    return "hidden";
  } else {
    return "visible";
  }
};

const StyledView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "viewstyles__StyledView",
  componentId: "sc-1egp7p8-0"
})(["display:", ";flex-direction:", ";flex:", ";justify-content:", ";align-items:", ";width:", ";height:", ";background-color:", ";border-radius:", ";box-shadow:", ";overflow:", ";position:", ";padding:", ";margin:", ";box-sizing:border-box;@media ", "{width:", " !important;height:", " !important;background-color:", ";flex-direction:", ";}"], props => isDisplayProperty(props), props => props.direction, props => props.flexValue ? '1' : 'none', props => props.justify, props => !props.align ? 'none' : props.align, props => props.width, props => props.height, props => props.backgroundColor, props => props.radius, props => props.isBoxShadow, props => props.overflow, props => props.position, props => props.padding, props => props.margin, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].mobileL, props => props.isEqualWidth, props => props.isEqualHeight, props => props.isEqualBackground, props => props.isEqualDirection);
/* harmony default export */ __webpack_exports__["default"] = (StyledView);

/***/ }),

/***/ "./components/molecules/404/404.jsx":
/*!******************************************!*\
  !*** ./components/molecules/404/404.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _assets_lottiefiles_404_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/lottiefiles/404.json */ "./assets/lottiefiles/404.json");
var _assets_lottiefiles_404_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/lottiefiles/404.json */ "./assets/lottiefiles/404.json", 1);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/404/404.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NotFound = ({
  title
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Lottie"], {
    path: _assets_lottiefiles_404_json__WEBPACK_IMPORTED_MODULE_2__,
    width: 600,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    align: "center",
    size: "16",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./components/molecules/404/index.js":
/*!*******************************************!*\
  !*** ./components/molecules/404/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _404_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.jsx */ "./components/molecules/404/404.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _404_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/index.js":
/*!***************************************!*\
  !*** ./components/molecules/index.js ***!
  \***************************************/
/*! exports provided: Navigation, NotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./components/molecules/navigation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _navigation__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404 */ "./components/molecules/404/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFound", function() { return _404__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./components/molecules/navigation/index.js":
/*!**************************************************!*\
  !*** ./components/molecules/navigation/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.jsx */ "./components/molecules/navigation/navigation.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _navigation_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/navigation/navigation.jsx":
/*!********************************************************!*\
  !*** ./components/molecules/navigation/navigation.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_texts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/texts */ "./components/atoms/texts/index.js");
/* harmony import */ var _navigation_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.styles */ "./components/molecules/navigation/navigation.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/navigation/navigation.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Navigation = ({
  direction,
  items
}) => __jsx(_navigation_styles__WEBPACK_IMPORTED_MODULE_3__["StyledNavigation"], {
  direction: direction,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, items.map(item => __jsx(_atoms_texts__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: item.url,
  key: item.id,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 17
  }
}, item.title)));

Navigation.propTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_4__["string"],
  items: Object(prop_types__WEBPACK_IMPORTED_MODULE_4__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_4__["shape"])({
    title: prop_types__WEBPACK_IMPORTED_MODULE_4__["string"].isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_4__["string"].isRequired
  }))
};
Navigation.defaultProps = {
  direction: "horizontal",
  items: []
};
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/molecules/navigation/navigation.styles.jsx":
/*!***************************************************************!*\
  !*** ./components/molecules/navigation/navigation.styles.jsx ***!
  \***************************************************************/
/*! exports provided: StyledNavigation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNavigation", function() { return StyledNavigation; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "navigationstyles__StyledNavigation",
  componentId: "sc-5jqkcc-0"
})(["display:flex;flex-direction:", ";padding:16px;a + a{margin-left:", ";margin-top:", ";}"], props => props.direction !== "horizontal" ? "column" : undefined, props => props.direction === "horizontal" ? "50px" : undefined, props => props.direction !== "horizontal" ? "24px" : undefined);
/* harmony default export */ __webpack_exports__["default"] = (StyledNavigation);

/***/ }),

/***/ "./components/organisms/header/header.jsx":
/*!************************************************!*\
  !*** ./components/organisms/header/header.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules */ "./components/molecules/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/header/header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = ({
  direction,
  items
}) => {
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "5px 50px 5px 30px",
    backgroundColor: "#ffffff",
    position: "fixed",
    isEqualWidth: "100%",
    boxShadow: "0px 3px 6px rgba(137, 137, 137, 0.16)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Logo"], {
    width: "2em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["Navigation"], {
    direction: direction,
    items: items,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/organisms/header/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/header/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.jsx */ "./components/organisms/header/header.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _header_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/organisms/hero/hero.jsx":
/*!********************************************!*\
  !*** ./components/organisms/hero/hero.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/hero/hero.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Hero = ({
  title,
  subtitle,
  img
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    isEqualWidth: "100%",
    isEqualHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 100px 0px 100px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    height: "100%",
    flexValue: "1",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    flexValue: "1",
    direction: "column",
    align: "flex-start",
    padding: "150px 0px 0px 0px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    draggable: "false",
    src: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    margin: "20px 0px 0px 0px",
    width: "50%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, subtitle)), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    flexValue: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, "Continue"))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    flexValue: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    draggable: "false",
    src: img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/organisms/hero/index.js":
/*!********************************************!*\
  !*** ./components/organisms/hero/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.jsx */ "./components/organisms/hero/hero.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _hero_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/organisms/index.js":
/*!***************************************!*\
  !*** ./components/organisms/index.js ***!
  \***************************************/
/*! exports provided: Header, Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./components/organisms/header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "./components/organisms/hero/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _hero__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./components/particles/breakpoints.jsx":
/*!**********************************************!*\
  !*** ./components/particles/breakpoints.jsx ***!
  \**********************************************/
/*! exports provided: breakpoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
const breakpoints = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};
/* harmony default export */ __webpack_exports__["default"] = (breakpoints);

/***/ }),

/***/ "./components/templates/defaults/index.js":
/*!************************************************!*\
  !*** ./components/templates/defaults/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _organisms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organisms */ "./components/organisms/index.js");
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _static_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static.json */ "./components/templates/static.json");
var _static_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static.json */ "./components/templates/static.json", 1);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/templates/defaults/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  direction,
  items
} = _static_json__WEBPACK_IMPORTED_MODULE_4__.menus;

const Layout = ({
  children,
  title
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }
}, title)), __jsx(_organisms__WEBPACK_IMPORTED_MODULE_2__["Header"], {
  direction: direction.horizontal,
  items: items.default,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  backgroundColor: "#EDEDED",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}, children));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/templates/static.json":
/*!******************************************!*\
  !*** ./components/templates/static.json ***!
  \******************************************/
/*! exports provided: menus, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"menus\":{\"direction\":{\"label\":\"Direction\",\"options\":{\"horizontal\":\"horizontal\",\"vertical\":\"vertical\"},\"default\":\"horizontal\",\"group\":\"variation\"},\"items\":{\"label\":\"Items\",\"default\":[{\"id\":\"1\",\"title\":\"Issues\",\"url\":\"/issues\"},{\"id\":\"2\",\"title\":\"Stories\",\"url\":\"/stories\"},{\"id\":\"3\",\"title\":\"About us\",\"url\":\"about\"}]}}}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/templates/defaults */ "./components/templates/defaults/index.js");
/* harmony import */ var _components_organisms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/organisms */ "./components/organisms/index.js");
/* harmony import */ var _assets_images_hero_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/hero.svg */ "./assets/images/hero.svg");
/* harmony import */ var _assets_images_DailyResources_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/DailyResources.svg */ "./assets/images/DailyResources.svg");
/* harmony import */ var _static_css_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/css/main.scss */ "./static/css/main.scss");
/* harmony import */ var _static_css_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const App = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_templates_defaults__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Daily Resources",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_components_organisms__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
    title: _assets_images_DailyResources_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    subtitle: "The more that you read the more things you will know.",
    img: _assets_images_hero_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./static/css/main.scss":
/*!******************************!*\
  !*** ./static/css/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ahroidlife/Documents/nextjs/blog/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-lottie":
/*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map