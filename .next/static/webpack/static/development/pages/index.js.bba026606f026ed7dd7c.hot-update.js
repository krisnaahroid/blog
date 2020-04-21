webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/particles/useOnScreen */ "./components/particles/useOnScreen.js");
/* harmony import */ var _components_templates_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/templates/layouts */ "./components/templates/layouts/index.js");
/* harmony import */ var _components_molecules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/molecules */ "./components/molecules/index.js");
/* harmony import */ var _components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/atoms */ "./components/atoms/index.js");
/* harmony import */ var _index_knobs_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.knobs.json */ "./pages/index.knobs.json");
var _index_knobs_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./index.knobs.json */ "./pages/index.knobs.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var menus = _index_knobs_json__WEBPACK_IMPORTED_MODULE_6__.data.menus;

var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      overlay = _useState2[0],
      setOverlay = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var openMenu = function openMenu() {
    setOpen(true);
    setOverlay(true);
    document.body.style.overflow = 'hidden';
  };

  var closeMenu = function closeMenu() {
    setOpen(false);
    setOverlay(false);
    document.body.style.overflow = 'unset';
  };

  return __jsx(_components_templates_layouts__WEBPACK_IMPORTED_MODULE_3__["MainLayout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "main-header",
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "main-header-content",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "main-header-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "navigation-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_4__["Navigation"], {
    items: menus,
    family: "quicksand",
    size: "16",
    weight: "400",
    variant: "grey",
    padding: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-mobile",
    onClick: openMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/illustrations/menu.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-wrapper-mobile isActiveEl ".concat(open ? 'nav-menu-isActive' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-header-mobile",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    variant: "white",
    family: "quicksand",
    size: "18",
    margin: "0 0 2px 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Good Morning"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    variant: "white",
    family: "quicksand",
    weight: "light",
    size: "14",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "21 April 2020"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-button-close",
    onClick: closeMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/illustrations/close.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-dots",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/illustrations/dot-header-mobile.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-content-mobile",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-items",
    direction: "column",
    flexValue: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/products",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/illustrations/products.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, "My Products")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/illustrations/projects.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, "My Related Projects")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "issues",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/illustrations/issues.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, "Issues")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "stories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/illustrations/stories.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, "Stories"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-item-footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "nav-menu-item",
    onClick: function onClick() {
      return navigator.clipboard.writeText(window.location.href);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/illustrations/copy.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, "\u201CCopy Link to Clipboard\u201D"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "overlay-background  ".concat(overlay ? 'is-overlay-background' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "social-media",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, "IN")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 19
    }
  }, "FB")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  }, "IG"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    flexValue: "1",
    className: "main-header-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    direction: "column",
    className: "main-header-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    variant: "blue",
    family: "quicksand",
    margin: "0  0 50px 0 ",
    className: "sayHi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, "Hi, there"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    direction: "column",
    margin: "0  0 30px 0 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    variant: "blue",
    family: "quicksand",
    weight: "medium",
    className: "fullname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "I\u2019m Krisna Ahroid"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    family: "quicksand",
    variant: "grey",
    weight: "medium",
    className: "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "UI/UX Designer & Frontend Developer")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    width: "80%",
    className: "main-header-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    family: "quicksand",
    variant: "grey",
    weight: "regular",
    className: "text-overview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, "I design & code that turn the idea to", __jsx("span", {
    style: {
      color: '#2525F0'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }, "product digital and website that people love it."))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    className: "btn-hire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, "HIRE ME"), __jsx("a", {
    href: "https://calendly.com/ahroidlife/15min",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    family: "quicksand",
    variant: "blue",
    weight: "regular",
    className: "consult",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 19
    }
  }, "Free - 15min consult")))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "main-header-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/illustrations/hero-image.png",
    className: "main-header-hero",
    draggable: "false",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/illustrations/bubbble.svg",
    className: "main-header-bubble",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  })))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, "Other keyframes are removed for the sake of bytes. Please disregard the odd coding, it is made by a php script picking values from an array and str_replacing a template: I'm too lazy to retype everything for every proprietary prefix on a 100+ divs slideshow.Other keyframes are removed for the sake of bytes. Please disregard the odd coding, it is made by a php script picking values from an array and str_replacing a template: I'm too lazy to retype everything for every proprietary prefix on a 100+ divs slideshow.Other keyframes are removed for the sake of bytes. Please disregard the odd coding, it is made by a php script picking values from an array and str_replacing a template: I'm too lazy to retype everything for every proprietary prefix on a 100+ divs slideshow.Other keyframes are removed for the sake of bytes. Please disregard the odd coding, it is made by a php script picking values from an array and str_replacing a template: I'm too lazy to retype everything for every proprietary prefix on a 100+ divs slideshow.Other keyframes are removed for the sake of bytes. Please disregard the odd coding, it is made by a php script picking values from an array and str_replacing a template: I'm too lazy to retype everything for every proprietary prefix on a 100+ divs slideshow.Other keyframes are removed for the sake of bytes. Please disregard the odd coding, it is made by a php script picking values from an array and str_replacing a template: I'm too lazy to retype everything for every proprietary prefix on a 100+ divs slideshow.")));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.bba026606f026ed7dd7c.hot-update.js.map