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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/hero-video.mp4":
/*!*******************************!*\
  !*** ./assets/hero-video.mp4 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/assets/hero-video.mp4";

/***/ }),

/***/ "./common/components/Footer/index.js":
/*!*******************************************!*\
  !*** ./common/components/Footer/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/Footer/index.js";

const date = new Date();
/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
  className: "Footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "\xA9 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "http://creativelifeform.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Creativelifeform"), " ", date.getFullYear(), ", Nebula is powered by the open source", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/creativelifeform/three-nebula",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "three-nebula"), " ", "particle engine."));

/***/ }),

/***/ "./common/components/Header/Logo.js":
/*!******************************************!*\
  !*** ./common/components/Header/Logo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/Header/Logo.js";


/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "Logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "nebula"))));

/***/ }),

/***/ "./common/components/Header/Nav.js":
/*!*****************************************!*\
  !*** ./common/components/Header/Nav.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/constants */ "./common/constants.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/utils */ "./common/utils.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/Header/Nav.js";









const Hamburger = ({
  isOpen,
  toggle
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "Hamburger",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
  icon: isOpen ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"],
  className: isOpen ? 'fa-times' : 'fa-bars',
  onClick: toggle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}));

class Nav extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      mobileMenuIsActive: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleMobileMenuToggle", e => {
      const {
        mobileMenuIsActive
      } = this.state;
      this.setState({
        mobileMenuIsActive: !mobileMenuIsActive
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.setState({
        mobileMenuIsActive: false
      });
    }
  }

  render() {
    const {
      routes,
      router,
      content: {
        callout
      }
    } = this.props;
    const {
      mobileMenuIsActive
    } = this.state;
    const activeClass = mobileMenuIsActive ? 'active' : '';
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "Nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Hamburger, {
      isOpen: mobileMenuIsActive,
      toggle: this.handleMobileMenuToggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: `ul-container ${activeClass}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: `${activeClass}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, routes.map(({
      path,
      name,
      shouldHideFromNav
    }, i) => shouldHideFromNav ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, name)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "has-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: () => router.push(_common_constants__WEBPACK_IMPORTED_MODULE_4__["DOWNLOAD_PATH"]),
      className: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, callout.small)))));
  }

}

Nav.propTypes = {
  routes: prop_types__WEBPACK_IMPORTED_MODULE_2__["array"].isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"].isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"].isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(_common_utils__WEBPACK_IMPORTED_MODULE_7__["withContent"])(Nav)));

/***/ }),

/***/ "./common/components/Header/index.js":
/*!*******************************************!*\
  !*** ./common/components/Header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ "./common/components/Header/Logo.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./common/components/Header/Nav.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/Header/index.js";



/* harmony default export */ __webpack_exports__["default"] = (({
  routes
}) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
  className: "Header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
  routes: routes,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})));

/***/ }),

/***/ "./common/components/index.js":
/*!************************************!*\
  !*** ./common/components/index.js ***!
  \************************************/
/*! exports provided: Header, Footer, Page, Content, Grid, GridItem, GridItemMedia, GridItemDetails, Callout, Code, CompanyLink, ThreeLink, ThreeNebulaLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./common/components/Header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./common/components/Footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _primitives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./primitives */ "./common/components/primitives/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _primitives__WEBPACK_IMPORTED_MODULE_2__["Page"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return _primitives__WEBPACK_IMPORTED_MODULE_2__["Content"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _primitives__WEBPACK_IMPORTED_MODULE_2__["Grid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return _primitives__WEBPACK_IMPORTED_MODULE_2__["GridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItemMedia", function() { return _primitives__WEBPACK_IMPORTED_MODULE_2__["GridItemMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItemDetails", function() { return _primitives__WEBPACK_IMPORTED_MODULE_2__["GridItemDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return _primitives__WEBPACK_IMPORTED_MODULE_2__["Callout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _primitives__WEBPACK_IMPORTED_MODULE_2__["Code"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyLink", function() { return _primitives__WEBPACK_IMPORTED_MODULE_2__["CompanyLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThreeLink", function() { return _primitives__WEBPACK_IMPORTED_MODULE_2__["ThreeLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThreeNebulaLink", function() { return _primitives__WEBPACK_IMPORTED_MODULE_2__["ThreeNebulaLink"]; });





/***/ }),

/***/ "./common/components/primitives/Callout.js":
/*!*************************************************!*\
  !*** ./common/components/primitives/Callout.js ***!
  \*************************************************/
/*! exports provided: Callout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return Callout; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./common/constants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/primitives/Callout.js";





const Component = ({
  text = 'Download',
  className = '',
  router,
  onClick = e => router.push(_constants__WEBPACK_IMPORTED_MODULE_1__["DOWNLOAD_PATH"])
}) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
  onClick: onClick,
  className: className,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, text);

Component.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  router: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"]
};
const Callout = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Component);

/***/ }),

/***/ "./common/components/primitives/Code.js":
/*!**********************************************!*\
  !*** ./common/components/primitives/Code.js ***!
  \**********************************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/primitives/Code.js";


const Code = ({
  children,
  inline = true
}) => inline ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
  className: "Code",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, children) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "Code",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, children);
Code.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0__["node"],
  inline: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"]
};

/***/ }),

/***/ "./common/components/primitives/Grid/Item/Details.js":
/*!***********************************************************!*\
  !*** ./common/components/primitives/Grid/Item/Details.js ***!
  \***********************************************************/
/*! exports provided: GridItemDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItemDetails", function() { return GridItemDetails; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/primitives/Grid/Item/Details.js";


const GridItemDetails = ({
  children,
  title
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "Details",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, title), children);
GridItemDetails.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0__["node"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
};

/***/ }),

/***/ "./common/components/primitives/Grid/Item/Media.js":
/*!*********************************************************!*\
  !*** ./common/components/primitives/Grid/Item/Media.js ***!
  \*********************************************************/
/*! exports provided: GridItemMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItemMedia", function() { return GridItemMedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/primitives/Grid/Item/Media.js";


const GridItemMedia = ({
  type = 'image',
  alt = '',
  src = ''
}) => {
  switch (type) {
    case 'image':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: src,
        alt: alt,
        className: 'Media',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: undefined
      });

    default:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'Media',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: undefined
      });
  }
};
GridItemMedia.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  src: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};

/***/ }),

/***/ "./common/components/primitives/Grid/Item/index.js":
/*!*********************************************************!*\
  !*** ./common/components/primitives/Grid/Item/index.js ***!
  \*********************************************************/
/*! exports provided: GridItem, GridItemMedia, GridItemDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return GridItem; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media */ "./common/components/primitives/Grid/Item/Media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItemMedia", function() { return _Media__WEBPACK_IMPORTED_MODULE_2__["GridItemMedia"]; });

/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Details */ "./common/components/primitives/Grid/Item/Details.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItemDetails", function() { return _Details__WEBPACK_IMPORTED_MODULE_3__["GridItemDetails"]; });

var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/primitives/Grid/Item/index.js";


const GridItem = ({
  children
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "Item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, children);


GridItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0__["node"]
};

/***/ }),

/***/ "./common/components/primitives/Grid/index.js":
/*!****************************************************!*\
  !*** ./common/components/primitives/Grid/index.js ***!
  \****************************************************/
/*! exports provided: Grid, GridItem, GridItemMedia, GridItemDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ "./common/components/primitives/Grid/Item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return _Item__WEBPACK_IMPORTED_MODULE_2__["GridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItemMedia", function() { return _Item__WEBPACK_IMPORTED_MODULE_2__["GridItemMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItemDetails", function() { return _Item__WEBPACK_IMPORTED_MODULE_2__["GridItemDetails"]; });

var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/primitives/Grid/index.js";


const Grid = ({
  children,
  className = ''
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: `Grid ${className}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, children);

Grid.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0__["node"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
};

/***/ }),

/***/ "./common/components/primitives/Hyperlink/Company.js":
/*!***********************************************************!*\
  !*** ./common/components/primitives/Hyperlink/Company.js ***!
  \***********************************************************/
/*! exports provided: CompanyLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyLink", function() { return CompanyLink; });
/* harmony import */ var _Hyperlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hyperlink */ "./common/components/primitives/Hyperlink/Hyperlink.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/primitives/Hyperlink/Company.js";


const CompanyLink = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hyperlink__WEBPACK_IMPORTED_MODULE_0__["Hyperlink"], {
  href: "http://creativelifeform.com",
  text: "three",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
});

/***/ }),

/***/ "./common/components/primitives/Hyperlink/Hyperlink.js":
/*!*************************************************************!*\
  !*** ./common/components/primitives/Hyperlink/Hyperlink.js ***!
  \*************************************************************/
/*! exports provided: Hyperlink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hyperlink", function() { return Hyperlink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/primitives/Hyperlink/Hyperlink.js";


const Hyperlink = ({
  href,
  text
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, text);
Hyperlink.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};

/***/ }),

/***/ "./common/components/primitives/Hyperlink/Three.js":
/*!*********************************************************!*\
  !*** ./common/components/primitives/Hyperlink/Three.js ***!
  \*********************************************************/
/*! exports provided: ThreeLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeLink", function() { return ThreeLink; });
/* harmony import */ var _Hyperlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hyperlink */ "./common/components/primitives/Hyperlink/Hyperlink.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/primitives/Hyperlink/Three.js";


const ThreeLink = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hyperlink__WEBPACK_IMPORTED_MODULE_0__["Hyperlink"], {
  href: "https://threejs.org",
  text: "three",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
});

/***/ }),

/***/ "./common/components/primitives/Hyperlink/ThreeNebula.js":
/*!***************************************************************!*\
  !*** ./common/components/primitives/Hyperlink/ThreeNebula.js ***!
  \***************************************************************/
/*! exports provided: ThreeNebulaLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeNebulaLink", function() { return ThreeNebulaLink; });
/* harmony import */ var _Hyperlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hyperlink */ "./common/components/primitives/Hyperlink/Hyperlink.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/primitives/Hyperlink/ThreeNebula.js";


const ThreeNebulaLink = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hyperlink__WEBPACK_IMPORTED_MODULE_0__["Hyperlink"], {
  href: "https://www.npmjs.com/package/three-nebula",
  text: "three-nebula",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
});

/***/ }),

/***/ "./common/components/primitives/Hyperlink/index.js":
/*!*********************************************************!*\
  !*** ./common/components/primitives/Hyperlink/index.js ***!
  \*********************************************************/
/*! exports provided: CompanyLink, ThreeLink, ThreeNebulaLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Company */ "./common/components/primitives/Hyperlink/Company.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyLink", function() { return _Company__WEBPACK_IMPORTED_MODULE_0__["CompanyLink"]; });

/* harmony import */ var _Three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Three */ "./common/components/primitives/Hyperlink/Three.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThreeLink", function() { return _Three__WEBPACK_IMPORTED_MODULE_1__["ThreeLink"]; });

/* harmony import */ var _ThreeNebula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThreeNebula */ "./common/components/primitives/Hyperlink/ThreeNebula.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThreeNebulaLink", function() { return _ThreeNebula__WEBPACK_IMPORTED_MODULE_2__["ThreeNebulaLink"]; });





/***/ }),

/***/ "./common/components/primitives/Page/Content.js":
/*!******************************************************!*\
  !*** ./common/components/primitives/Page/Content.js ***!
  \******************************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/primitives/Page/Content.js";


const Content = ({
  children,
  title = null,
  text = null,
  className = ""
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
  className: `Content ${className}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, title), text && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, text)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
  className: "main",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, children));
Content.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0__["node"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  text: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
};

/***/ }),

/***/ "./common/components/primitives/Page/index.js":
/*!****************************************************!*\
  !*** ./common/components/primitives/Page/index.js ***!
  \****************************************************/
/*! exports provided: Page, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content */ "./common/components/primitives/Page/Content.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return _Content__WEBPACK_IMPORTED_MODULE_2__["Content"]; });

var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/components/primitives/Page/index.js";


const Page = ({
  children,
  className = ""
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
  className: `Page ${className}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, children);

Page.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0__["node"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
};

/***/ }),

/***/ "./common/components/primitives/index.js":
/*!***********************************************!*\
  !*** ./common/components/primitives/index.js ***!
  \***********************************************/
/*! exports provided: Page, Content, Grid, GridItem, GridItemMedia, GridItemDetails, Callout, Code, CompanyLink, ThreeLink, ThreeNebulaLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./common/components/primitives/Page/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _Page__WEBPACK_IMPORTED_MODULE_0__["Page"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return _Page__WEBPACK_IMPORTED_MODULE_0__["Content"]; });

/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ "./common/components/primitives/Grid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _Grid__WEBPACK_IMPORTED_MODULE_1__["Grid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return _Grid__WEBPACK_IMPORTED_MODULE_1__["GridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItemMedia", function() { return _Grid__WEBPACK_IMPORTED_MODULE_1__["GridItemMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItemDetails", function() { return _Grid__WEBPACK_IMPORTED_MODULE_1__["GridItemDetails"]; });

/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Callout */ "./common/components/primitives/Callout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return _Callout__WEBPACK_IMPORTED_MODULE_2__["Callout"]; });

/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Code */ "./common/components/primitives/Code.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _Code__WEBPACK_IMPORTED_MODULE_3__["Code"]; });

/* harmony import */ var _Hyperlink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hyperlink */ "./common/components/primitives/Hyperlink/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyLink", function() { return _Hyperlink__WEBPACK_IMPORTED_MODULE_4__["CompanyLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThreeLink", function() { return _Hyperlink__WEBPACK_IMPORTED_MODULE_4__["ThreeLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThreeNebulaLink", function() { return _Hyperlink__WEBPACK_IMPORTED_MODULE_4__["ThreeNebulaLink"]; });







/***/ }),

/***/ "./common/constants.js":
/*!*****************************!*\
  !*** ./common/constants.js ***!
  \*****************************/
/*! exports provided: DOWNLOAD_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOAD_PATH", function() { return DOWNLOAD_PATH; });
const DOWNLOAD_PATH = "/download";

/***/ }),

/***/ "./common/utils.js":
/*!*************************!*\
  !*** ./common/utils.js ***!
  \*************************/
/*! exports provided: withContent, mapValueToKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withContent", function() { return withContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapValueToKey", function() { return mapValueToKey; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content */ "./content/index.js");


var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/common/utils.js";


/**
 * Provides textual content to pages as a prop.
 *
 */

const withContent = WrappedComponent => props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  content: _content__WEBPACK_IMPORTED_MODULE_3__["default"]
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}));
const mapValueToKey = (object, value) => _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object).find(key => object[key] === value);

/***/ }),

/***/ "./content/index.js":
/*!**************************!*\
  !*** ./content/index.js ***!
  \**************************/
/*! exports provided: pages, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
const content = {
  callout: {
    small: "Download",
    large: "Try Nebula For Free"
  },
  home: {
    title: "Design particle systems for the web.",
    text: "Design rich, eye-catching 3D particle systems and effects for any JavaScript application on Windows, Mac or Linux — with Nebula."
  },
  about: {
    title: "About Nebula",
    text: "Use the Nebula ecosystem and deliver fantastic, eye-catching visual effects for your users"
  },
  download: {
    title: "Download",
    text: "Download Nebula for Windows, Mac or Linux"
  },
  editions: {
    title: "Editions",
    text: "All the different ways you can start designing 3D particle systems for the web with Nebula",
    features: [{
      title: "Emitters",
      text: "The number of particle emitters supported",
      inAlpha: "3 Emitters",
      inCommunity: "Unlimited",
      inPro: "Unlimited"
    }, // {
    //   title: 'Projects',
    //   text: 'The number of projects you can have',
    //   inAlpha: 'Local: unlimitied, Cloud: 0',
    //   inCommunity: 'Local: unlimited, Cloud: 5',
    //   inPro: 'Local: unlimited, Cloud: unlimited',
    // },
    {
      title: "Voyager Access",
      text: "Access to the Voyager community platform when you can download, and share your particle systems with others",
      inAlpha: false,
      inCommunity: true,
      inPro: true
    }, {
      title: "Bug Fixes",
      text: "Patch updates for critical bugs",
      inAlpha: false,
      inCommunity: true,
      inPro: true
    }, {
      title: "Updates",
      text: "Access to new versions of the application with new and improved features",
      inAlpha: false,
      inCommunity: false,
      inPro: true
    }, {
      title: "Support",
      text: "Email support for usage and troubleshooting questions",
      inAlpha: false,
      inCommunity: false,
      inPro: true
    }]
  }
};
const {
  home,
  about,
  download,
  editions
} = content;
const pages = [home, about, download, editions];
/* harmony default export */ __webpack_exports__["default"] = (content);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

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

      const cb = listeners.get(entry.target);

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

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
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
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

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
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


const createRouter = function createRouter() {
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
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/home/Hero/Blurb.js":
/*!**********************************!*\
  !*** ./pages/home/Hero/Blurb.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/components */ "./common/components/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/utils */ "./common/utils.js");
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/pages/home/Hero/Blurb.js";




const Blurb = ({
  content: {
    home: {
      title,
      text
    },
    callout: {
      large
    }
  }
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "Blurb",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_0__["Callout"], {
  text: large,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["withContent"])(Blurb));

/***/ }),

/***/ "./pages/home/Hero/Canvas/Visualisation/data.js":
/*!******************************************************!*\
  !*** ./pages/home/Hero/Canvas/Visualisation/data.js ***!
  \******************************************************/
/*! exports provided: test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
const prepare = data => {
  data.particleSystemState.emitters.forEach(emitter => {
    emitter.totalEmitTimes = Infinity;
    emitter.life = Infinity;
    emitter.behaviours.forEach(behaviour => {
      behaviour.life = Infinity;
    });
    emitter.emitterBehaviours.forEach(behaviour => {
      behaviour.life = Infinity;
    });
  });
  return data;
}; // const prepared = prepare(data);
//
// export default prepared;


const test = {
  headerState: {
    projectName: 'Web System v4'
  },
  particleSystemState: {
    preParticles: 500,
    integrationType: 'EULER',
    emitters: [{
      id: '51ca9450-3d8b-11e9-a1e8-4785d9606b75',
      totalEmitTimes: Infinity,
      life: Infinity,
      cache: {
        totalEmitTimes: 0,
        life: 0.28
      },
      rate: {
        particlesMin: 1,
        particlesMax: 5,
        perSecondMin: 0.02,
        perSecondMax: 0.02
      },
      position: {
        x: -70,
        y: -56,
        z: 0
      },
      rotation: {
        x: -0.48,
        y: 0,
        z: 0
      },
      initializers: [{
        id: '51ca9451-3d8b-11e9-a1e8-4785d9606b75',
        type: 'Mass',
        properties: {
          min: 300,
          max: 5000,
          isEnabled: true,
          center: true
        }
      }, {
        id: '51ca9452-3d8b-11e9-a1e8-4785d9606b75',
        type: 'Life',
        properties: {
          min: 2,
          max: 5,
          isEnabled: true
        }
      }, {
        id: '51ca9453-3d8b-11e9-a1e8-4785d9606b75',
        type: 'BodySprite',
        properties: {
          texture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFFBUVOTk6BQUGDQ4OVldXLy8vNjY2Dg4OCgsKEhMSQUBBIyMjaWlqDQ4NQEFALC0sISEhAAEAAQEC4ODg1NTUAgID8fHx+Pj4ERER3d3d/f39ICAgBgYH9fX1k5OTCwsLzMzMz8/PysrK5+fn9PT0/Pz8pKSk+/v7jY2N0dHR2trax8fH19fX6OjooaGhmZmZm5ubkZGRxMTE8vLyvLy8////CAgI2dnZ6urqy8vL39/f7OzsmJiYjIyMra2t3Nzc9/f3paWlnZ2dBAQE1tbWvb29vr6+8PDwmpqa4uLi7u7u+vr6kJCQ09PT5OTk5ubmoqKizs7OoKCgo6OjxsbGwcHBkpKSjo6Ou7u7lZWVq6uri4uLn5+fj4+PpqamycnJrKysw8PDwMDAqampl5eXqKiourq6nJycubm5lJSUioqKuLi4rq6uiIiIiYmJhISEh4eHhoaGeHh4gICAenp6goKChYWFsLCwsrKyr6+vgYGBfn5+t7e3f39/fHx8g4ODfX19s7OzdXV1c3Nztra2tbW1e3t7sbGxdnZ2cnJyd3d3tLS0cHBwbGxsampqcXFxbm5udHR0b29veXl5ZGRkbW1taGhoZ2dna2traWlpYGBgZWVlZmZmY2NjXl5eXFxcW1tbYmJiYWFhX19fWVlZVlZWWFhYWlpaXV1dV1dXVFRUU1NTVVVVUlJSUFBQUVFRTk5OTU1NSkpKT09PS0tLRkZGTExMSEhIRUVFSUlJRERER0dHQUFBQ0NDQEBAQkJCPz8/Pj4+Ozs7PDw8PT09Ojo6OTk5ODg4NjY2Nzc3NDQ0NTU1MzMzMTExMjIyLy8vMDAwLi4uLCwsLS0tKioqKysrKCgoKSkpJycnJSUlJiYmIyMjISEhJCQkIiIiICAgHh4eHx8fHR0dHBwcGxsbGhoaGRkZGBgYFxcXFhYWFRUVFBQUExMTEhISEREREBAQDw8PDg4ODQ0NDAwMCwsLCgoKCQkJCAgIBwcHBgYGBQUFBAQEAwMDAgICAQEBAAAA5sFo8wAAIABJREFUeNrtnQmcXUWd7897M3x4M/gcMmYEdDAssocdswIBmoTsEJJACAnZ185KSDqBDhDSbYvNpiKyigPi+IZxFmfGXWHQJ/hA3uiMim9EREdHUcMLBhtzSZza619V/6pzTqfvWW7XXxLS3bfb0L9v/X6/qnPu7eT3bIbwX0P0W77Zr/40BPnQEOMhQ8QfwSOH+D59CPz3EPDeIeb/9X7zL4F8uf3irf3o39/8u4T+S7FP24992pDfO38n+pj96p1D/N/HIcj/ifpW7Ef/GkPUx4ak/n3VG/vdR/O3k9/HGdQTAYgAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkAxIkApM5+dCIAg1H1wc5CEpUf3BwkUfrBjUEyGLXf55nBSEEyeMTfl2MGDwTJIBB/X79nEECQtLT6+wZkWpqBZNCJ/2ZwBh0ESSuqn1/3bCS0IgNJ66v/5gFM6zOQtJT8A6m9n4KWQiBpVfVxLdsafNr4NOjbbfJd7FdbWxYKWoeBpBXVR4XnejOZG+wP+l8cAIEAfwf5LQWCFmEgaQX5Q+IzPdvk721K8jax8sWHGoCGNo1Loy0EQSsgkNRefr/6ckELLYXvk3/v9YzMBWUUnIa2RhYGIgBlL35r4Svh24Sv780x8jMb0hOsatA6NpC0yOJ3mp5a7oEVnzYNGRmShFQGIgClyA91kSHOf0+T+Hd00tygTblIm4+B+iKQ1FR+VP2GLPBe8X+XYXyR0FBxEmYgAlCO/A3R9JlE/RE+DYQ2WSbMzUHNEUjqLD80frW/bwyA9l4KGuD4CGGghggkLSG/WJxtlvqopG8EJ50CcGDQCggkNdPflV8e8VhlP6fwqSC4RtBm1AEHgQhAQfLLczu/+G/0e/wQ6JPlmiOQ1FB+eNrTZi/+DNqP6CMzgv8a0TdiBP2N/IlMBgpgFkjrcRioEQJJC8iPq+/qPoJpzdUXqvep39gHR3Ag+kYEKbDPjrEkqA0CSc30d+Rvw9T/c1t6ISz7l1Ra6K5JkI/hjyC/+SFIR6AuBCT1XP4h9Z1lP0IAoJf4b9ERugsm5B8yM1BPE0jqoH8O+RHx5XhkR1EQHUEOzkBWBCIAzZUfVd/U/rf9GoCAWQtcBuqLQFIX/VPl94iPSvs6Op5cUBBAJ8iKQOUJSOomv3naG1Q/m+xZUOAewKqiy4CdBPVCIKmT/uISf8O7+H3iv96vsQNBlkSvDcgD6ToRkNRMfm3+GdXHlN0zbM+eYcOG0V/0T+LNYcPSKBjhtkIbgba6IZDUTX+P/Kj6lpbD+OwZBmaPwMB8hx8ClwEcgdoQkFRW/37J7xF/mDl7LAL2GB9Sb3kgOAAEIgD9XP5B+V31A9qT+U1gXEBQCGwGQghU3ASSSutvLP+w/Jj62YXHQUAgcBgIIWCYQEUJSKpv/+jy98iPi/+bfg4OQRiBVBOIAAzA8jfl96pPA90W9bWUCUDgZSCAQOVNIKm4/sbyzyS/b+G/lmvMz93jQJABAcQEKkhAUlH7R5Z/SP6g+qjCB1uThsEwHwOpCCAmEAHIpj/i/pnk94p/cKZJhSADAsa9g1UmIKm2/up5XcaNHqj8rvr5pfdh4GUAQ8BrApUkIKnH+ofL35DfWvyY+Lt3W9L+f+/sJo/VjyZ/xiBAbQBBAJpAdQlI6iZ/HyK/vfjBwici7k4X3h6uPxtoBUEb8CJQbRNIarn8Mfkd9cFaRlV+FYwHA2UIPgYQBGpGQFJh/dHl3xeU3818v+i+QSjAGMiNQDUJSKqov2f5I9UPXfyo+K/mHKMaWMUQQ+C3DgIeE6gYAUml9Hfs33B/doueV3577Xu1PxybXbvor11eCuy9gcFABhMABPxZpQhI6qK/G/6Y/I76qcqbBIg3UAhCNuBBACfgzSoRkFRTf2D/Tvnzym+rH5L+187s4vLv0o9xITAZ8CHgmABeBKpBQFIL/Z3lD+U3F7+jflh2bAADh/sYMGwAIICbQIUJSKqlv8f+9bN5wPJH5LfVT5X+j371qz/yfMiFwGTARcDJgUAMVIaApHz9/9Svv7L/vj7c/bHFHxb/VykThgCzgUAO2DGAbwYGLwCB7Z9l/32o+yOL31Y/u/I+DoIM4Aj4Y6B6BCRVW/9o/AfcH5HfEd/U9peB8VBgMuAigOdAShFg/+F/WjYBScXyH939WcvfI7+5+BHxf5l5EAgwGwggkFIEqtMDkqrq77f/kPym+j7tX/GMjwKMAYDAH1g5kCUGKkNAUnn9vfK/5pHfUj+D8AEQUAYcBF4LI1BlApLa6k+v9EL5xYGeR31L4l8g46PAz4CNQB0JKBWAPPoj7r/bkd9QH9H+F5kGocBgIDMCuQgYXABk1D+c/iH5HfUtkX/ujI8CkwEcgXQTqCwBSUX1R+w/i/yG+oj2P88wCAUuAxkQQGKgggQkddAfWf6W/O7it8W3VP5PZ3wYGAw4NmAikBoD1SMgqZP+yPK35UfVD+keIsHPgIUAYgJ1ISCptP4e+8eWvyO/Lb6p8s+c8VBgMGAjkGoCKgYqS0BSjv77+6m/Wv5e+TH1Q7qHSPAy4ENAmUA+Av6sxM1gUrIBpOm/x7F/xP0t+Q31ce1/igxOgcuADwHXBIwYCBFQogUkFQiArPq7y98vv6F+WHg/CAgDPgRwE8hCQMkhkJSrfwPVX9e/PZb+7vLH5EfVhxr/BzoYBS4DCAK4CeBVsGoEJKWv/7aA/nb8O8vflB8sfkP8NOV9HBgQWDbgImCYgFMEcALKL4JlASB/ylcW/V+z9Tfc35QfLH5TfSjxTzyDYAAZsGxAIWDkAFoEshLQ8gCYBtBotGXV37H/gPxAfVv8n2QaHALLBhwEgjGQgYCSLCApT/+M/p+6/H3ym+JrfX8cGJcCwIAHgaAJVJ6ApNwCoAqg0//T9Ifyv2LIDxa/Jb4p9o/A4BhABrQNKAResRHIQoCxF6hAEUxKKwADp78rP1Df1v5HKWNTYDPgIDDABLQwAJ4TwDz655XfFB/I/DIyCAWAgXwI5CKg1CKYVKEAGNf/Ef2zLH8pP65+UHkPB34GJAIZTMBHwBsoASWEQLEAuAXAKYDp+ueQH6qvJX7JOzYGgIHMCOQgwCiCZg1oPQAyFABE/z8w9beWv1d+rb4pvin3oWpwDAAEigEfApYJAAL+ZwoBJdeApLQAyKL/wV79reUv5VeL31EfkV3MD9g/NgooA8oGBAKWCeAEHJyHgMJDICkjANACGNYfxD+wf3v5u/JD8YHoP0TmUMcRNAMGAogJgBjAq2AaAW4NaC0A8ADIrb9r/z75bfUDwntAwBjwIODGQP8IKCMEkhIDACuAWfQ3l79Pfq2+Jf4hh/z7Ieb8u3oHBoFiwIOAaQJZCAgWwYJDIKlWAOD939HfXP4++YH6Uno5LyKjsYAQKAY8CDgmgBCw294LVCgEksoFQEh/x/7F8rfkV4vfFf/F1HEhgDZgIaBNwIwBxwMAAdUKgaTUALD1Fy/wn66/tn+x/C351eIH4kuFvx8YkwLFALQBgIA2AR0DKQRkqQGFhkBSlQDg638Pqv8upb+Of23/Yvlb8pvq29r/P2RsClwGTAS0CegY0EUgIwGlh0BSegCQV/8zC4Cj/69x/bX9++XX6mPKvyAG48BkwIuAHQMGAb8OEMB+FmUFQiApwQDSC6DH/+34N5a/qH62/Fp9W3ZsDAoUAxYCog7aJmBXQcwDMhTBgi0gKdYA7ADAC6DYAOL6/9zS31j+Qn6P+krn76JjYoAyoBGwTcAuAjYB5mbQqgFoCBRjAUlhBhDaAeTTH7F/r/y2+Ert71ljY6AgCCHgjYGsBKTuBOoPgGMA4QDQBSBFf0t+ob+W31XfozzKAcqARsDOASsGvAS4NSAUAoVYQFJmA0zR/9Xs+ofk1+ILkf/NOwYFkoEAAhkJeDWdgNJ6YFJmA+zjr//oBICxAcirv5bfUN+Q/jvoGBjYDGgE+keAUwQDe8Eie2BSagAwAPqrf7r8Un0gvlL729ZYGCgIBAOpCPSbgL5yQyApzwDQADAKoF9/bPmH5Afia83/VY3NgWLAjwBmAqkE6CKYHgIFWUBSagM0DcAugJn0l/L/QOmv5IfqA+3/NTCAAosBhYBjAjkJ0DUgZSdQjAUkZRsAFgBB/UH8Y8sfyg/Vh9p/yzOQAosBDAFgAqAIZCEA3QuWYwFJmQaABYBbAFL1l+mPyy/VN6Q/6KCD/i+dg/gfDqJ/MDAADKAISBNIJcBbA8wQKM0CkiIMwN4CokdAgQBA9JfxL9ufXP5QfrH4pfpKejr/4oz4gIZAMCBsACAgTUDGgCwCCAG5Q6Dw06CkJAMwG2BqAKD6G/YPlr+SXyx+qb4p/TeNMTEADGgbYAjYJmAUAZuATCGQ0gObbQFJwQaQHgD59DfsXy5/Jb+lvqX882osDlwGJAKGCRgx0A8CvCFQpAUkpRpAKADMAmj0f0t/Zv9s+Uv3h/JD9S3dn3+OzfMWCRYDAAGZA8wEdAxYBMi9gFkEs4RACRaQVMAAAgGQTX+9/KX7Q/kd8Z/zjgOBiYCRA8IEshCQLQTKsYCkMgaQUgBx/aH9a/d35Zfic53/j2c0BYIBHAFhArAIYASkFcFqWEDSdAMQADT2BgzACoAs+sP6J+xfu7+U31AfaP8sOoACiwGJgM4BFQO6CmYhAA8BfCtYzFlAUkgCeA0g0ACNAujTX8S/sH+9/E35hfpa+mfQ0RhoBgwEoAmIGBBFIECArAEpPdCygIZlAfUDwH41oEbYAFILgLj+49Ff2L9Y/ob8Wn2t/TfQ0RRABiwEhAmoGEAJ0FuBtBrgswD6+kmFWEBSjAE0chiAHQBQ/5/49Bf2L9yfZT+QX6ivtX8aGU2BZkAjwLqAyAEQA6oKKgJ+ghDgCYGgBTSKsYCkmArYcA0g3ACxAFD6vyz1f1Hr/z2pvyO/Vl9L/3VkNAaQAQcBIwYMAl42CMgeAroHQgsoqAYmJTcAawtoB0AO/VX6Y/Jz9bX0/xsZjYFiwEEANIG8BIAQwLeCKRuBegGA7QEzGwAWAKIAWvp/39QfLH8ov1JfS/8UMhoDwABEwDIBazNgECCKoBsC2S2goJ1gUroBeAMAKYDi+k9Qfy7/N7n8bPEb6jOtv4qOxEAxIG2AIvBNiUAKAT+SBGA1INwDS7GAYgFIN4BAAKgNQAb9wepn8oulL7X/GjqSAmEEwgaUC2QmQG0FPCGQwQLqDoCdAHkMwAoAuwDg+e/K/5wtv1j5TOp/FvMkG/mWpIAbgYnAcwgCnh7g1oBMIYBaQPMzIKmQAbg7ALcAgPN/ob9v+XP5mfeztS/E17o/+RU1T2oSFATMBkQS6BxwTECfB6jrAlgNsHcClbGAwgDIZQAwAEABsAqgT39r9QvnB+Jz1b8ERnMgIBBZYLlAOgFGERQ1wAqBzBZQXwBSDeC3qQZgBwBSADD97eXP5WeLn4uvlH/CGsUBh0DZAEfAMIFUAtwa4PbAtOPAoiwgqb4BWAFg6P9dqL+yf1t+tvi5+lL7LzsjKZAMCBswEFAxAAj4rocAEAJVtoCk8AqYzwCMAAjp79g/kJ8tfq6+0P4LyAgKJAPCBgQCbgxkIkCFQD4LKLAGJiVVQHUVwL8FVA3QPgHA+j/UXy1/KT9b/FJ8qvXn+PyTGPGmoIBBoGyAIaBMACEA7gWw0wCzByJbQfuKQLEZkFQlASwDSAkAVH9o/2r588X/x1R+rr4U/ovGSBAkA1/60lu5DTgmwGIAJSA9BNItoPAMSJqbAFn2gK4BuA3QCYCg/nD5g8UvxWeKf9YaiQGDANiAYQJBAnwhYPZA2wIy7QSbmAFJ5Q0A7gBAARDnf4b+LP6Z/bPlz9yfy6/UF9p/ns+n2Yg3BAWAAYYAywFmAiwGWBEwCBBngqAGODuBCltA0QC4FdDdAgQNwNwAovoz+5fu/1YlP1Ofi890/0cwEgQOAWVAIKBzQMaAhwCkBgQs4HDcApwaWEcAsiRATgPACwDbAMj9H9dfxj9Y/lB+KT6V/DPWCAwYBDYC0gRkEVAEsN0g3Ar4QiCfBRSZAUkFEsBnAPYWECkAjv7c/mX6E/cX8iv1ufZ/z+bvxPC3OAWaAYEAyQHZBHgMYATYNSC0FTQsoPQMaDoAziEArID2HjDVAGABYAXQp79a/kB+qj4Xn6r+D8YIDhgElAGNgDIBHwG6CAZCALEAZydo1EDPUUC9AMiXACEDsANAFgB5/ufor5a/ll+oz7X/GzZ/y4b/mVMgGdAIaBOwCZCnwkYNACGQbgH5M6D6AORMgDwGAANAFgB+/k/3f1p/Yf98+ZPsV/JT9Zn4TPdPgREgMAgoAxIB0gWECfAYAAQ8JwkwaoAIgVwWUGoGJEXvAdIM4BVtAPIMCDRAIwAM/Z819Kf2r5a/lJ+qz8Qnij/O5q/Y8D9zDCgEhAGJgDYBGgOAgGcdAnQIgB5onQY5VwQCFtAiAKQngK6AQQPwB0BAf7r8ufx88XP1ufJ/bQzngDMgbEAgQE3AT4CqAU4IpFlAsAaaGVAnAOQmsH8JYBjAT20D0A3Q0P/55+T+n+lP6x+Nf2r/dPmT6sdXP138VH2m/WN0/pcY9gajgDNAbIC7AKmDzARoDNAiQKsgI4CfBxhFkIeA3QOdFiAsgPwH79qVNwOasRFMKpYAv4AJ4DcAIwBoAXT1p/bPlr+SX6rPlf+EMZwDxYBGgJkAjQGXAF0EVQikWUCeGlhMBiSVSACzApqHgKYBvGAaACiA2v9Z/eP2T5c/cX8hv1T/E5/4OJm/BEPfphQIBgQCNAeYCbAYYFVQpQAsgtACXvBYwM+0BVg1sNwMaCIA5ibQTYD+GYBqgKAAMP2/bunP7J+mP8t+Lr9Un0j+MTIPi6F/ZhQIBgQCpAvwJsBjABLwdUCACAHQA/tjAXgGNH8jmBSeAK97EsBTAR0DMAJAFgBaAPn+39SfL3+S/Ux+pj7T/uGHP0nno2zYHxkGBALGAEOA1kFuAhYB9DxAFUFaA6wQ8FkAWgPNDHi98AwoBICMCWDtAX0GYAaAKgBS/y9x/T/L9efLX8pP1j4Xn8j+qDGMAwoB9QGFgDCBT7MjAdUDBAGwBlg9MGgBugZmy4A6A5BSATIlgNcAjADgBZDv/76g6p9a/lx+svi5+o8+ev/99z8ChrxJIWAMUBtgCEgTUFXwC3I3aNUAGgI+C8iWAeWVgKS4CgCvBAcSQFdA+xAQNQAWALwA8PM/W38qP9Gfy0/Up+I/8shfkHlIDX2LUkAgIAxwBGgdZCZgE/AkJ4DVABYCPgsAx4F4DbQzALkm3PQSkAy4/vvzbAKzJECaAYgAEAUQ0/8xbv5Mfq7+Qw/dfffdD6ghb1AKGAMcgY8zBDwEiCLIQyBsAQeUAUWcBCQlVoAMCeA1ANUAeQA89dRXgf5f/Kyjv5SfqE/Ff+CBBx988CNqyBuUAgIBYUAiYBMgmyCvAU89pUJA9kCfBRxoBjS1BCRlVYBQAmAVEDUA1gBVAMjzX4/+VH6y9on6VPt77rnnPjXkDUoBZYD4AEUAJ0CeCsMQYD0QsYBgDcQyoJwSkBRfAXIlgK6AHgOQAfDPMACk/oj8VH2q/R133HGvGvIGpYAx4CJgEfCEOhGUIeCxAG8NDGVA0SWg2QAEKoC+DuBJgKwGYAWAX38qP1n791Htb7/9w2Buv51ScB/1AYpABgJUCGSyAH8GvBrKALMEVB+AfBcCkAqQpQJ6DCCkP5Cfrn0m/l13fZDMbWTov++6i0FAfQAgkEYAagHZamC2ElDAUVBS7QqAVUBtAM8KA/gqBEDnv9BfLn8m/1uI/Ez822678847b2VD/kAxIBDczm3gwQekCQgCdA+AAHxVWMCz0AKQGljpElAMANaFALwCZE4AdgYgDOBpzABE/2P6c/uXy5/JT8W/9dadOz+gZudOggGBgCEgTYDHACNANEHMAp7WFqCvCGTMALcE+C8H1A0ArAPynw8eqADy+YBIAmAGIBuAGwC8/yv9qf0D+e+k4t9yyy3ve9/73k+G/Iu8QSG4EyBAY0ARwPcCnhCwWoBTA0EGgOcJZi4BTW6BSbkdMG8C2AbgACACgO3/hP9L+9fyf+AWKv21135IzLXXUgwIAwoBGQMiBdhuEAkBqwVIC+hXBpTUApsBQIYO6FQAbBOIJYCqgF4D0AVQ6U/tnyx/Lf/7ifbXXffe9773RjLkX9ddRyh4v0aAmACNAUWALoIhC3BqoM4AF4AkUwnAzwKrCoBRARoN7zlglgoQTgB+FcAxABAAtADy/s/0J/ZPlj+Xn6lPpL/55hvE3HwzwYAxwBEgJkBigBHA9wKyCIoQsAF4Rl0RCGVA7hJQyFlgUnQHdI+B/JtAMwGMCsivArgGIAOAFkCoP7F/svzp6r+Wqk+0375906br2WzatH07oYAycC11AWICJAYgAaIIshDALYBdEYA1MEMGwBLgHAVZLbBRNwAa6gcE9PsUQF8HsBLA2gNaBiACgBVA1v+5/sT+b91JzJ/Lv33T9Zs333TTTevJkH9t3nz9pu0cARIEO28lMcAJYHsBVgRFCOAWAHaCdgYc6suAzCcBvAU26gXAgXdAvQnkp0BYAqirAIYB8ABgBQDqf+etzP2J/FR9ov2WLRs3btywgfy2ZQuhgDJAEGA5cOudkABZA0gIQAt4q3FFwM0AeRaEbgRztsBG01pg0wCArw8e6ICeCwF4BQgngDoCYDtAVgDuf4Tu/6T+dPmT1U/lX79l44a1a9etZrNu7doNGwkDBAHiAtQEJAF0N0iLIKsBZCegDgPSMiC1BJiXA7K2wHoAICpAKgB2B5R3AzoVAN0DWAlgGYAIAFIAaP+n+u+k+r/3xhu2E/mp+uuuvnLqmVe8a9Wqd11x5tQrr15HGSAIbL+BmAAhYCclgO4FWA0QIWBYAJYBB/kywDgJ+LnOAKsFlrANSJq9C0zdBGSuAEgCGBVQNgBhACIAyP6f9D+6/on90+V/0/qNG4j6V6xaevrEFSsuuuiiFRNPX7rqCsLAho3rb6ImQGKAeQDZC9zzERUC0gJYC8BqoJkBOUpAvm1AdQEY4E0AqABgE+hLANsARACQAkD2/6T/cf23b9q8fguRf+qqpRMvuvyymRdeQ+bCmZddftHEpaumEgS2rN9MmgAngOwFyIkQqQE8BGwLCGSAtRHMBcBvCj4MLgiA/nVArAJgCaAPAQ0D4AFAzn9uY/lP9L9+8/qNa1fPX3XuistnXrNs7sLz12zbtub8hXOXXDPz8hXnrpq/eu3G9SQGbmYpcCs5D7hXhIBtAbwGejLAUwL63QIHAQD+DshPAZBNoNgDGBWQnwEoAxABQM5/dt7C9Sfpv/a8K5auuPzCJXPX9Ozo7urq6uzq6t7Rs2bhsgtPW7H0ivPWkibACbiFnAfcJUNAW4A8DlQZAPcB9kZQngSEWuBgBADZBMBzQLwDBiuATAB2BgAMgOwASQHQ+m9Yd+Wq0+fNXHZ+Ty+Tnk1XZ2dXb8/5S46fN3HVlSQGNAEkBMheEFoAPw7EMyBUAkQL9J0FBrcBNQQgy5UAdxPgngP+0AYArwAgAdghINkCCAOgOwBWAK678YZNTP+rzjjtmrkdvZ2d3b07dmzduoP8tqO3t7uzvbtn4bLTzrhqPiFg86YbbryO1QC2ExAWQM8C2HGgyoBgCTAvB/jOAnNuAwYRAG4HBKcAsAIYCSAroDQAvgMkBkD037x+w+r5V624bNn5W8nq796xtaeno6OH/NZDOOjuam/vXbPsshVXXbmO9ABCgLSAO5QF6BqoM8ApAdhJQKAFDkIAMm0CfuQDQHZAaxNoJQA5A6BbAGYAKgDWb1w3f+lFly1b00tWP1n+PdvIdHR0bCP/29rb20kI2LZkJiVgw/rNNASABZCNADkLMDMA2wjiLdB7FphhH1g/AAbkGMDZBGAd0DwFAglAKiA5A+BbgA/e+YH30QMgUgDWnrfqouOXbOvuJKufLPqObWvWrCHqr9m2poPEACuE25ZddsaqE9dtvOl6GgKiBdCNADkLIDVQZwByFuS0wPRtQAUOAgoGINsu0NgEgHNA3gGff95TAfQegCbAQzwBSAN4/4doASQBcMXppy3p6ezs3dHTsa1nK3GAjp4dvSQJyBs7uokrdHV2kxQ4412riQVsoj2QW8A99EBYZwA/DsZKAL8rhLVA6ywQ3QaY+0DsIKA1AHDPgXbvzgCAdxNgdUCjAvD7AMQh0EfEFuDa627edBPd/y+dd8353cs7qf7E9bt6d/R2t6/s7uruJf/r3kpgIOGwbdm8pfPXEgvYDizAzABYApAWGNgGBA8CdodOgmoCQPggMOMxQGAXKDugBsCqAJ+iDYDdBsgOAfkWgDQAAgDR/6KZc7d2kmXeQ8y/p2v58pUrl4+fsHzOSvLPyh20D+7oWtk7d+aKVVfTnYBuAbQG6n2AVQLs24LcbQC+DwwfBKQcBVYRgAE6B0IvBTmbAH4zEDwFUBWAGMBHH6UF4J47yD1gd9IzQNoANq6+YsXxSzpo++/u7VjT09s+fvbiCRMWnbV49oTFixfP6Sa20EEPBzqWXX7uVN4C6EZAAvDIo/wsCJYA2QL1nYHWNsB/OagyJ0EVAUCeA6XtAtFNgFUByCnQo4+QAsCuAdBbQG6klwA2XL1q3jUdne29Wzs6iNf3ds5ZdMysRWctOGrRglNGL5iEfXNAAAAgAElEQVQ1nmwBtm3t3drb1bvweGoBdCNAzgJ0BpBrguQsyCwBubYBah9onQQNZgByHwNgmwDdAdUxIDkFeuAjd3yY6E9uAaCXgLasJVvA05ZsXbmya0fHmjVd48+ZM+Gsk4aPPuboi2csmDZ05ILZ55CDIdoGuzuJBSy9cu2WmzbdwDJAAEAyQB0G+lug2AbkPwgYVAAcnB+AwC5QXgr+DAcAVsC77vzA+6+7cfvmmzauW023gAtJySNtv6end8IxZy2aNW3S0BkXH3HxtEnTRx41a87ic7auWdNBjoh3zJ058QqVAWYJgC3QuR7k3wdmBODgCEA6AN/EAOCbAHoMxM6BmQHILcB7b7h+y9qrTzxz4mXEAMgRwI7u5eOXLz9rJFn508eMHDfpbW8bNXn4SYuOmtW1lRwJ0CtEa665iGfAjdeBEkBPAlgLZEdBchuAXg2IAGQAIHgS/KPsAMhdIN8EyGMg4gD3CAOg1wDWnXfmuZfN3bF88fjl5BRw5ewZRy2adenIaUccOenSUadecsKYcQtGzh6/knRDeibY2cMzgJUAthEELRBuA9x9YBCAH/X7LHiQAoAfBFrnQF/xAkAt4LZbrtu+ecN5Z65aei5pgMvPOmb0Kacsmj178VknjRl60qhLJ509efIlkw+75Ngx0xcsWjyni2QAsQCSAZedPpWWALYR1C0QBeAryEnQn+Q4CowApAMQOggExwDsZhB1DviAPAe+btPGq888/fK57YsWzJhxzOiTho4cPnL4xeOmT54++ZK3H3fkBVNOOPvtk8YNnUF6YG8PA6Dr/GWXnTt/9RbSAvkzhshpwIfve+B+fhYobgpRBwHho8AIwMADAA8Cn/zy5zgA4hjgr/76E3QT+BDdBN7GCwA5Aj7xzKUrlu0YT+v+yW87YsyYS8deMnny2LcfefZhJ0w54T1TDptMzGDc8GkzFpwy65gZo0cfM3tOZ8/CueQ+ocsnXjX1anKX0PU3X7vzg/d+5KH7H/4E3wfygwACwOe+/CR+FBgBOJCrwS+/9MMXv//C977z7W/9y/PPfuPrT33tySe+8MVP//3fPP7YX37y/oce1P2eXOFffd6JV86n9/cuXXruxDNWzJvH7vVbtmTuQrqce7vaV84Zv3g2Wf7Tho8bN+6IMZOmj5r89rPJyp8y5YQTjnvPe94x5YIjSRSMHTtq1KmXkjn21FMvnXTEyKHTTjp6xmiCxKLZE84hzYHeNbRk2YX09sFzly6l9xLPv/LE81bTuwdoWfzAnXfde9+DD93/yb/8w8f/5u8//cUvPPHk1576+jeeff5fvvXt73zvhe+/+MOXXj7Q68EtCYB7MfDHL734wne+9fyzT3/1ySf+6fOf+YfHH/v4w4/+hep0RPS1q0+cf8VVSyeumHfa8UTpJezePnJVv5fc29NOznXHk6O92YvOmjXrlAXHjJ4x4+iTpk0bOvxkovyxxx5LFD511NjJFIHDppzwDqL/O4474YQph0057IILjjzy3WezuWTy2FMvnT7pbWOOGHfyyIsBCovHz1nZTq4dbCXHhuxewiXLrjn+tHkrJi696or5J65eq2G454G/ePThjz/2+D985vP/9MSTX3362ee/9Z0XXnzpx2mXAyMA+QGYmwGAi20ALjn73cQEjiMEvOcdJ0xh8hPhLxk7eSw1A+IBTPzhTPyjjlkw6yyi/oTxc5avbO+MAAwkAH+ULwL+8AAj4GQy4wgKp469hAFA5D/uuONOOOzdb588dtSx0yeRmT5p+piThx69YNaixRPm0IMDcumISL2M3T4+b96KMwY2AloZgAqVwFXnXr5k63K6A1y86JSjho+Zfik5ADibLH6i/pR3TzmStIDp44YefdQCsthnnTWHXBQ+jWh9+lVTV6+/mZwF3Pbhe+95kGwEyTagjBL43yMAB7AN/NB7yVHQxnVnTpy5sLtrR/s5ixctGD166Iyhp459x3Fnkwb4nslnTz71kmNPHTVpzNBZy8ltQSvbty67/F2rN4qLAeAcIG4D63YQRAG4lt4NsGXt1NNnrmkfP2HO8vbO5cvnLDp55OQpU8aOuuDdb3/H2aT2Dz150vCLR047asEpi8+Z000Pgtaxg6Br40FQTY+C2S3B8n4g0hXWTZ14/EJyN1Bv79ZtHZ0LFp00+ewjx066YPrYUZccN3zMuKGjjxp69Cm06ZFpP3/muQN7FBwBKPZiEL8llN0QRG4JJmWRRMCJS+ct29bZRSpdR+fKxUePmXTs9GnDLxg7ffrbDht11PCTRs8aP4dcDlhJGuM5vQtnTpy/bku8GFTLy8HilkAJALkjgDoAvSP0jOMX7uiit4P3dM6aMW3kyQtmXDr92HEnnzR21IxZo0+ZPYF8iNwZ3L68vWfJ5Uvnn7du4/XxcnCNbwgRJeBW0QK3rL1y6eXLOsgtwVu3dq+cQLYCZ52y4IgZ46adtGDc2y4mu4Nz2ru3bevp7ly5nNwSdNFV88kJ8E3bb/7QLfGGkDreEvZR3QJ3vu9abgFXr1pxIX1OQHd7OzkamHDOORNGT5t1NNn2jZ529GxywNPbQZ4oRG4WaO9ZNu/cqeddzUsAsYC7DuiWsEPiLWH9vyn0h/26KRS0QF4C+E2h66aecdmyHnJSuLK9nTwbtLt9zlmLFpHaN3v2rFkTyHMFyL2CPSQEyGWgCy9add5q8hzRzdvlPWH3xJtC63JbuH5q6N3GbeFkH3AisYDzO+lxLumC27buWD5hzgRiBOOXT1h8TlcHuRuMPD2kq3Pr3JnEAK5m9wSSV4shd4XSDvDA3Y/E28IH7okhmZ4Z1K8nhlhPDZRPDKGHxuSZgedetnDHynOWt3f1kqP8ns6VveRQgDwtmPS+XnI3GHl6GEmI868hTwwhrxWynj45jL5g2G13qWOA5j4x5OAWeGJI5qeGHVzsU8Poc4O3bDjvqnkXEgLmrOwidk/vAe8hpwLkOYLkmaG9PfRmMPKckW1LTjv9itXspWLEMRB5tTC9CYhPDTtAAMp4cuhO9uoA19+04eqpSwkBW9vJreHkCYE7dpDQJ07Qwdb+Dvr0QPLk0CXkyaHnrZWvESGeGGQcBMcnh2ZogVV6evhtO+WTw9YyAuZ2EKF7qeYk9emTBLfR5wb30heJkE8PJ7cAwdcIAa8QEZ8efuAAFPoCEW8RrxBDWsD19PmhU8nzA5eQF4igLw5DFv1W/hIR9E4C8qSwredbLxChnxmoXiMmvkBEUQAM8EvE8JcIos8QFi8R085fJYK9SAwJf/LqEB1zr0FeIube+BIxBZ0FF/oiUQt7yKsEyVeJIi8S1UleJGrZzHmnxxeJKv8kqLkvE7dBvkzcwm38ZeK62MvEbVu4JL5MXIkAFPZCkTeZLxS5hr5Q5Jr4QpHNB6BSLxW7lr5U7BnkpWKP1y8VewZ9qdi18aViK3MQUNyLRa+ILxbdVADiy8UPupeL35fnh4bFHxjRej8wYrD8yJgvFfgjY2oHQL5tQPyhUaVtAuKPjavJj42rIwDN/8GRz1TjB0d+I/7gSGQb0Ig/Ojb4o2NfyfOjYxv1+NGxRgtsxB8ePXA/PJr8HN5Gq/z4+GGt8ePj3xp/fHx/W2DGEgA3gjADLAt4GiOAhQAvgpwAshegMaAQIAxQCNQQ8Yn6QP4H7mb9X+j/10x/cQRgGcDTrgG4CWBvAjNVAONHBzfrJ8c2D4AGBABYwB5PCciYAYYFqJ0gEgKiCPIUeFTGwH1vYQjc9UEKwZ0EAzrkD0T8D97F5H/LfdL+HxX+LwqgGwDuHtAygDwJgFaA5m8CmuoAOUqAbyOoM8CtgZ4W8FlFwOOCgI8JArgJUBe4/cMMAooBlZ6J/+Hb6eqXy5/p/zGh/+NK/88GGoBdAd0E6M8pQJM3AQMLQD/OAs0SkDEDnBaQRsDDAAEaBHfcyyDQQ8S/9w5q/kD+h9P0xxpAngTIVAGaew7YfACMFug7CvJuBEUGWDUQt4AsBDAEiA1QH6AUyCFvkLVPFj+TP4v+XgOwKyCeAJ4KoI6BCuuAzQPAbIEZTgJ8GZDBAkAIWAR8CkGAMUAgIBTIIW98hKmPyP8pS38QAJkNoLoVoLkAtAUAwEuA/3qA1wKQEPAQwBAgQUAZIBAQCuSQNx6g6hPzZ/J79EcCIGAA3usAmStA888BmwHA/swtMFMGIDUQWAAMAaMGOAQoBCgDDAJCgZy7mfhUfSW/o79RAGAA4AYQrID+BMhwM0CVAchWAsBJgCcDjOsBuAWoKwIwBHwEcBMQCAgGKAVy6FtMfSE/X/4+/WEAqKsAfgPQ1wGCCQBPAYqrAE0EIK0EZMsAWAN9FsBCQNQAhABhAgIBygCDgFCg534mPlVfyC+WP6K/KAAqAIIGgFXAvAnQ1ArQZABSSkDGDBA10GMBOgR4DZAEyB7ATUAgQIJAMEAggPNRoT43fyo/X/4y/6X+8AhINkCPAfgrYMYEKKICFAOAUQLMjSCSAWgNxCxA9kB1IiyKoNEElQlwBJgNcAg+yThgyn+Si88Wv5afLX+j/8EjQBkAogF6DMCugKEE4JvAQo+BBhyAYAkIbwS9GeBYgL4iAEMAFEFAgDIBjgBngEBAKSAY8PkY056ufao+l18tf0d/VQBAAKirAOkGgCWAuwksqgI0E4AMJcDKAKcGohZgh4BRAwAB7DxAmoBEQDHAKFBD3xbqS/nl8mf7f0t/WACsAPAbgF0BMyZAcytAswFI3wjmtgArBGANUCeCrAeoKkhMQCKgGKAUwKHvEepL+cnyV/VP5b8qgKAAmAHQPwMo50JAkwDwngSErge4NRC3AKsH6hrgECBjACCgGCAQPMY54Mo/RsWX6gP5pf1j+osC4DRA1AD8FRDdAxR1CjDwAPQzA0I1ELUASMBzugjKFJCnwsIEWA6wLsAZIBBQCsD8FRWfqc+yn7m/WP7y/Bf4vyiAz5n6pxsATIBdlUiApgOQMQN2qQwwdoKWBRyiLMAKAS8B3AQYAp/hCHAGKAScA648E5+pz+X/jJSf279XfzMAhAEcYhuAuwesTAIUDIAvA3ZZNRCzAHEcqHugRcAzBgGiCnITUAgwBjgEDAM17B1UfL74hfx8+Yv6Z+j/jKM/bIDGIaDHAPqRAPUAwL8RzF8DneNALAR0EVQEiFNhYAISAcYAh4DO3wrh6TDxmfpKfrX8xfkv1F8VQDwAzEPAflTAYjaBTQYAlAD7LMg8CnB2grgFwB7IQgAWQYsAHgPMBBQCkgEKAaUAzN8x8YX6QH6+/Hn9s/QHBQAGAGiA2QwAHgI4CdDsCtB8ANIywKiBfgsAPVCEgKwBHgKACWgEGAMCAsGBUF6Kz9QH8qvl79VfFwAVAHYD9BmArwIWmABNAqB/GZDFAlQI6BpgEsDPBFkRkCbAEdAMUAgoBcb8IxNfqS/ll8uf3wDA9n+I/qIAGAGQZgD9SoA6AJC6D/AcBSAWEAgBXQNYEZQEPCsIkDHw5FfeaiBAGBAQcAzksHcw8Yn6lvza/uX+X+rPCiAsAL4A8BqAWwGL3QMUD0D/LMAJAVEDPASwGNAmoBDgDAgIPi9B+LR4g4vP1Jfyw+XP7N+rvyoAMAD6aQAQgEZNAUjLAO9pYLoF2DUAEsDOA1gRYDEgmgBDQDPAIKAUGPNFLr5Wn8sv0p/ZP4t/tv+D+rsFIN0APHtANwEazU6AZgAw0BYQqAE+AkQMqByQNkAYEBAIDNSwdzHxifps8f+xdn9l/yH98QJwgAZAHKC5BlAUAFgNxHeC8DjQ6IFIDbAJYCdCogoCEyAIaBugDFAIPidB4MJ/jovP1ReLn7u/Wv6i/rH9P6a/WQCMBmgdAmJ7QLwCNj0BmgZA8CggiwV4toKwBqitgE2AZQIEAWkDAgJGgT1fluIT9dnil/KD5e/q/29QfyQAzC2gxwD27EEroH0IUBcA+pcBxkYgPQQcAr7FCQAxABCQNkAZoBAwCsx5govP1WeLX8tv2L/a/6XrbwYAsgWwASj4EKBAAMwMyGEBzk7AJOB7kICDJAEOAtIGKAMMAkYBnC8J8bn6bPHb8kv9D4L6f8+jP9oA0xoAfghQPwAG2AJACKQSYMaAQkDaAIOAUSA4EMPf8yQXXy5+Jb9j/2H93QBIMYCyTgELBSC4E0QswOyBRgikEmCYAENA2oCGQHEgldfiy8XP5LeXf1h/LAB0AwwawOulGEATAfDXwAwWgISAUwOQvQAgwHQBbgMSAkaBJkG+9TUlPl/85up39Yf93ykAeADkMYAiKmCzAOinBbhbwZQaoAlATcBCQGSBpMAZ9iEmvi2/b/kL/VMKQGALWLoBFAxAJguweqBZA7ISoHJAIkAZ+G+cAUGBM0/xpU/Fl95P5Ffun1V/swCgDTCrAdQbAE8NxCxgdygE7BqQRoAyAe0CmgFmBAIDa/hHlPpcfrH61fJP0x8tABkCwDQArALWC4A8FoD1QDwEXAJeNAkAJmAgoBlgEEgMzOEfeRqob8gPlr+h/4uI/qEAsBpgyQbQVAByWAAeAvkIsE3AREAwwCCQGJjDP/INpb4rP1j+ufUPB0BpBtA0ADJbgL8HYjVAbQVcAlQMuAgABhgEEgNz+Eeegeq78iv7d/U3NwBoAKANsFQDaD4AfgsI90AZAk4RNAlQ5wEiBoQJsByACEgGGASCAnuekeIL9YH8zP3F8hf2r/b/pv5YATQDIPUQ0DaAegJwABbgDwE/ATAGbAQAAxwCToEzz0rxtfq2/ND+/frnCoByDaAAAJDDIMwCQiEQIMDcDGgTsBCQDDAIJAb28I89p9U35dfL36z/Yf39ARAygL1FGUCTAYCvG9pALSAcAiECXgYEwBiQJsARMBngEAgK3HlOim+or+TXyx/GP+x/afoHGyA0gEajmArYTACMDLBePdyxgEw1ACMAVkFpAigCjAEGgaAAm+el+FR9j/za/uH5v6t/hgLgNQCpf/MToNkAaAsg/00pFuC5JpCFAB0DIAc0ApQBC4LnAQrgHVB8qj6UX7q/tv+M+qNHQCkG0CjIAJoJgGkBjcBGIBwCsgjKrYBLgGECMgc0AgYDggKTBPUu/gigPpRfur9h/67+cgPwc0P/YAN0twCNggyg6QCkWEB6CKQRYBQBMwcoAjYDkgLAAVCea2+rr+SX7m/Ef7/1NwPA2gI0CjKApgJgtQDnomBaCDhF0CZAbgZkDAATEAgIG1AMSAoUBnoO0tor9cXiV/KD5S/tX17/QfQPFEA0AOzLgEUYQPMB8J0FBELAUwRNAuS1QTsGDASADTAGBAQKA2Pkx/4VqC8WP5QfsX95/ufo7xbADAFQ2Clw8wFAjwMpAX+OWUA4BEIEyBjwIKAY4BBoDOwRH/42UB+X37T/kP5pAZByBtR0AygAgJAFZA4BSMDPNAGgCOAIGAxwCCQF6HxbiQ/VR+U349/s/yn6ewOgeANoMgBeC3B7oA6BnAS4JqARMBjgEAgKDBT+RL/rO0p8qL6WH1v+ufRHA6A8AygCgOwW4K0BLgE/RQgIIsAZEBCYHADlpfhM/YD8rv4/zaB/KABKMoBmAxC0ANAD+0VABgQUAxACgIEx8qNKfKl+uvz91z/UAAswgEIAQLeClIC+EX19TgjoGtBPAgACJgMcAo2BO+IB37XVB/L3U3+nAMgA6MMDoCgDaDoAqSEQIuDw7AQEEWAMCAgkBZ75rhafqR+SP6v+hwf17+srMQAKAOD3IQt4o89TAzIQgJsAQABhQFHgcqA+IB5oqw/kx5d/Bv3RAoDq/2ZBAVAUAIYFeHYCOQhATMCPAGPAgABgYIz6sBKfqe+VH1n+OfX/7Yg+BgDUv1gDKACA1B5o7QXtIrjLJsCOAScHKAI+BiAGyMjHoOoD+fXyt+3fo79ZAK0dYGkNsDgA/CGAngY4WwFNgD8GhAk4CAAGNAUGCsY7xQOV+rb82PI37F/r72wAXsumf4EGUAQArgWYBPTBEHAJ2GWlgCbAMQEMAcCAosDiwFReaA/U98uvl39e/X0nAEUbQGEABEOgL0zALpACWBEQJmAjYDEgIdAUIPMiFN9U35JfLH8s/qX/7zp8V0h/UgD6wgHQKgCkhAA4DQBFEKYAQcAmwIkBGwFlA5wBAYGiwD+HAPGZ+mrxW/I79m/pT/7ajv6/2WOcAJUeAAUBkBICfX19SBE0e4DwAKcKAhOACJg2YEHg4UB/FIhvLH5bftP+df1D+5/U/38E9C88AIoEAA+B8FbAS4AZA14EIAMCAoiBO/Ixh1rq++Q37d+rP7YB6NMnAOUFQFEAZN8JZCLANQEUAcCADUFooPhafZ/8rv2n6l+hACgMgLSdQFYCQBEAJoAi4DAgITj00B8cGlJeiW+p75MfLH9Q//uhfwkBUCwAbgjkIAAcCIAYwHLAQoAzICGgGPzg0B+Qfw5FRz3sZa2+KT/i/pb9g+s/WfUvKwCKA8ATAv0n4JcmAQoB5QIuA4CCl9750juBIbxkjHy0pb5a/fbyt+z/QPQvOgAKBMAMgWAR9OwFkCLgRwAwYEFAMHjnOykC5Pd3Chj4e7T0hvhafa/8SPzb/d+nv1sAigyAogEI1IAcBORBwGDAwMA36qFA/ezy59E/UABaEQAkBJwi6CMAqYIOAQoBDwOAApwD8GH5GZj6Sv6Q/sD+Uf3xAlh8ABQKQJYakEZAbgQEAwoCSAE6PzbF5+rnlD+f/nvL1L8cAAaaAAQByICEQFPgoGB+5CeG+EB9V/6B1r+lAQjVAKMIZiLAMQGNALAByYCCwMYAl16Jz9XXi1/L7yz/TPrjBbCtNP2LBeDACUBNwIuAYEBBACgIzX+Y4oPFj8iPLv/66F8wAKEiGCYgbAIWApABB4IAB/AxhvhAfY/86PLPo/+b5ehfGgC5CHBiwDABCwFgAxYDFga+0Y+G6oPFb8pvLH/H/nPpPwgACBZBlIA9/hhAEHBsQEEAKPBxAB/xM0N8e/Ej8vvtP6D/3tL1LxyAbATovcAeMpAA1wRQBHAGTAp8ox/tqo/J7y5/XP8RVdS/eAB8RdBHAPGAPU4RME0AR8BkAFLgAcF4gPo0qL5Xfnf5Z9a/rVz9ywIAKYIeAtwiYJoAioDJgIbApMAz/2mJb6jvld9d/ir+U/XXBXAwAOAtgpkIME0ARQBlAFKAk2B+XH2aq75XfnP559S/JAMoA4A8BKjNgLkfxHLARUAyoCGwKMDn57b4Qn1HfsT9PfZfXf1LAaD/BIRNgCOAMwAg8JBgPeAXfvVt+X3Lvw76lwNAbgKQGLARONxBQDKgIXAwQAc8/BVDfSj/4Yj8Pvuvsv4lAZCBgDdcAjIhYDKgIIAU4CRYD3jFEt9d/GH5Lf3fqKj+ZQGQlYBgDHACfAi4DDgUeAZ8gqm+R36v/ubyr6T+5QKQi4BsCJgMKAggBT4SrIf80hLfUD+L/Pn0H2wADAABDgLsueS7BAIuAw4F3gGfYqoPF78jfy31Lw+ArATw5w0GTMBAYNcuYAOKAYOCAAjmo/Rn/9pd/FB+//Kvvv4lApBGgECgz2MCHIHdDgKv7oJRACGwKAjNrxzxTfU98tv699G/vZa/ivqXCQAogjYBwATYN1ET4CAAXUAlgckAhCCFA/ORv7bUNxZ/SH6hf1+fs/xt/f+0ZP1LBQAnAIsBxwScKmAioBjQEFgUpM2vHfHNxQ/lB+5vpr94/r9t/0D/fWXrXy4A2QhgLyXmmICLgI8BAEEGDowHHx5U3yO/1F8u/0rrXzIAeA9wi4AiwJMDlg1IBnwQmDx4PuKIL9U3Fr/H/UdY7Q/Xf3/5+pcNgEMAXgToanK3AxgCDgMAAj8GPum1+Jb6iPxO+Q/Ef3X0Lx2AjATwGPDkgJUELgMGBD4U3Me86lMfej/q/kr+yutfPgAeApwY6NPbAT8CDgMAAgwDenJ0uDg7wKXX4lvqe+VPt/8q6V8BACABfxYggB8JpCLgMmBAYHJAtef/IMpD8W31M8lfB/2rAAAkwKmCThcUBEAE9nhsADDgUJA68HMPDi1+Q37P8vfU/wroXwkAXALexAkwEHhdIrAHsQEcgmwYmJ9hi4/LH17+TvxXR/9qAOAjIBsCe4wkQBiwKUBgQB8AvoCtfn75K6p/RQDITYCFABmUAQiBB4M06YH4tvqY/HXTvyoA/H7IgSEg+qBCADBgQnDw7t0HZxTeFF+pby3+estfHQCymQCGwG9NBDQDEILXIADsl3iLvrH7YGxew8THFz8mf030rxAAXgIQE8ARQBgwICAY7KYDNcfUNz/nN171UfmR5V9l/asEAEKA3wRSEAhAAC1ht/rtYPRBiPiZ5EeWf0X1rxQAgoA0E8ARCDPgw8A75ud61U+XH1n+VdK/WgBgBBgmkA0BCIFFQToH9uOHueJnkt+//Culf8UAMGMAMwEcgTADDgRZZ1gW9UPyG8t/XwXlrx4AmU3AhwBgwIAgHwbmZ77uqu+Rv2bLv4oAmASETMBGAGXAgICfF2UX3hLfVT8oP7b8K6d/BQFAYyCMAMKAAYG8ZrSHQ0A52LNnWOq8jorvqB+Uv9L2X1UAUBPIigBgwISAv97MMPBbRumh+Fp9r/wNr/xV1L+aAAQJ8CGAM2BDIK4dDBMXEYO62+Ij6ntWf330rygA+RBIYwCnIH3MrxFQv77yVxcAnAArBxAbAAxYEOTBwP7MEYj69uK35a+H/tUFwI9Ao9EADPwuyIBLQQAF9KHGF3vDu/j3kr9To37yVxoAiwADAfrNdhAADJgQ4BSkzgiP+Fp9vfobDMuGJX/19a80AF4E6FJrYElgMGBBkAcD+zPfCKq/l/11GnWUv+oASAJcF2hww0UQMBiwIOjjv/qyye6KD9Q35Kfjk7/a+lcdAAeBN606iDPw529gFLCnF7FffSMyjflVAuo3dPa/WSv5awCA1wQQBCADv3vDHukAVP++vlzSG+Jr9VXxd/q6NS4AAAK0SURBVOSvjf41ACALAh4GEAoACVl0t7VH1a+x/PUAwEUgzIAFAU5BpvmdT/y9Db/6dZK/LgDkRsCBIC8GzqcbX7yt0WgN+esDgCIAQQAwkAJBOgjop5jiC/Vh8XPlr4v+9QEgMwKNvXvTKcg81hdrYwd+/CCqFeSvFQAYAggDTJ29A0CB/TXkho+dQSDq11H+mgGQgsCbWiD6z15k+iO88H1JFzjyqb/8tQMAIIAz8Cb36DZxOL83ZXyCIyufX+2B4mPq76/b97N2AOAIGAxwpRqeZphjQKg0AurXWP5aAgAR8DHwprhW0NbWPwzsz23A1Pepv7+O38taAuCzAZOBN9t8k1V297DHVn9fvdWvMQA+G7AYCFCQceyvt691Fn/NATAQMBhwIOgfBu5X2edRf3+Nv4l1BiDEAAJBVhDwz9zXiurXH4AgAz4K8o79VVtH/ZYAwETAhWDfQGq/z/z/aoFvXisAkM5APzDAvkbLqd86ADgM4BSkk+D7LPurt8y3rXUAyANBvmlZ8VsPAISBA8IA+WKt9v1qOQA8EOTkAP8Krfi9akkA/BCEUQh9Tqt+n1oWgFQKsk9Lf4taG4ADxWAQfHMGAwD94GDwfFcGEQCpLAzKb8XgBCBOBCBOBCBOBCBOBCACECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCECcCEKcf819TZs0s24jb5wAAAABJRU5ErkJggg==',
          isEnabled: true
        }
      }, {
        id: '51ca9454-3d8b-11e9-a1e8-4785d9606b75',
        type: 'Radius',
        properties: {
          width: 12,
          height: 36,
          isEnabled: true
        }
      }, {
        id: '51ca9455-3d8b-11e9-a1e8-4785d9606b75',
        type: 'RadialVelocity',
        properties: {
          radius: 38,
          x: 32,
          y: 5,
          z: 0,
          theta: 900,
          isEnabled: true
        }
      }, {
        id: 'df0cdac0-5d71-11e9-91d4-f9d5e69385ac',
        type: 'VectorVelocity',
        properties: {
          x: 16,
          y: 54,
          z: -32,
          theta: 30,
          isEnabled: true
        }
      }],
      behaviours: [{
        id: '51ca9456-3d8b-11e9-a1e8-4785d9606b75',
        type: 'Alpha',
        properties: {
          alphaA: 1,
          alphaB: 0,
          life: Infinity,
          easing: 'easeLinear'
        }
      }, {
        id: '51ca9457-3d8b-11e9-a1e8-4785d9606b75',
        type: 'Color',
        properties: {
          colorA: '#4f0000',
          colorB: '#0029FF',
          life: Infinity,
          easing: 'easeOutCubic'
        }
      }, {
        id: '51ca9458-3d8b-11e9-a1e8-4785d9606b75',
        type: 'Scale',
        properties: {
          scaleA: 1,
          scaleB: 0.96,
          life: Infinity,
          easing: 'easeLinear'
        }
      }, {
        id: '51ca9459-3d8b-11e9-a1e8-4785d9606b75',
        type: 'Force',
        properties: {
          fx: 2,
          fy: 3,
          fz: 0,
          life: Infinity,
          easing: 'easeLinear'
        }
      }, {
        id: '51ca945a-3d8b-11e9-a1e8-4785d9606b75',
        type: 'Rotate',
        properties: {
          x: 0,
          y: 0,
          z: 0,
          life: Infinity,
          easing: 'easeLinear'
        }
      }, {
        id: '51ca945b-3d8b-11e9-a1e8-4785d9606b75',
        type: 'RandomDrift',
        properties: {
          driftX: 1,
          driftY: 300,
          driftZ: 4,
          delay: 1,
          life: Infinity,
          easing: 'easeLinear'
        }
      }, {
        id: '51ca945c-3d8b-11e9-a1e8-4785d9606b75',
        type: 'Spring',
        properties: {
          x: 1,
          y: 2,
          z: 0,
          spring: 0.01,
          friction: 1,
          life: Infinity,
          easing: 'easeLinear'
        }
      }],
      emitterBehaviours: []
    }]
  }
};

/***/ }),

/***/ "./pages/home/Hero/Canvas/Visualisation/index.js":
/*!*******************************************************!*\
  !*** ./pages/home/Hero/Canvas/Visualisation/index.js ***!
  \*******************************************************/
/*! exports provided: Visualisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visualisation", function() { return Visualisation; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three-nebula */ "three-nebula");
/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three_nebula__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.js */ "./pages/home/Hero/Canvas/Visualisation/data.js");





const {
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} = three__WEBPACK_IMPORTED_MODULE_2__;
/**
 * Sets up three js and particle system environment so that they can be rendered
 * into the editor's Stage component.
 *
 */

class Visualisation {
  constructor(canvas, data = _data_js__WEBPACK_IMPORTED_MODULE_4__["test"]) {
    this.canvas = canvas;
    this.data = data;
    this.shouldAnimate = true;
  }
  /**
   * Starts the visualization.
   *
   * @return {Promise<Visualization>}
   */


  start() {
    this.shouldAnimate = true;
    return this.makeScene().makeCamera().makeWebGlRenderer().makeParticleSystem();
  }
  /**
   * Stops the visualisation.
   *
   * @return void
   */


  stop() {
    this.shouldAnimate = false;
    this.particleSystem.destroy();
  }
  /**
   * Renders the visualization.
   *
   * @return {Visualization}
   */


  render() {
    const animate = () => {
      if (!this.shouldAnimate) {
        return;
      }

      requestAnimationFrame(animate);
      this.particleSystem.update();
      this.webGlRenderer.render(this.scene, this.camera);
    };

    animate();
    return this;
  }

  resize() {
    const {
      camera,
      webGlRenderer,
      canvas: {
        clientWidth,
        clientHeight
      }
    } = this;
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    webGlRenderer.setSize(clientWidth, clientHeight, false);
  }

  makeScene() {
    this.scene = new Scene();
    return this;
  }

  makeCamera() {
    const cameraState = {
      type: 'PerspectiveCamera',
      params: {
        fov: 75,
        nearPlane: 0.1,
        farPlane: 1000
      },
      position: {
        x: -10,
        y: 0,
        z: 50
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      controller: {
        enabled: true
      }
    };
    const {
      canvas: {
        clientWidth,
        clientHeight
      }
    } = this;
    const {
      params,
      position,
      rotation
    } = cameraState;
    const {
      fov,
      nearPlane,
      farPlane
    } = params;
    this.camera = new PerspectiveCamera(fov, clientWidth / clientHeight, nearPlane, farPlane);
    this.camera.position.copy(position);
    this.camera.rotation.set(rotation.x, rotation.y, rotation.z);
    return this;
  }

  makeWebGlRenderer(options = {
    alpha: true,
    antialias: true
  }) {
    const {
      canvas,
      canvas: {
        clientWidth,
        clientHeight
      }
    } = this;
    this.webGlRenderer = this.webGlRenderer || new WebGLRenderer(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
      canvas
    }, options));
    this.webGlRenderer.setSize(clientWidth, clientHeight, false);
    return this;
  }

  makeParticleSystem() {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(resolve => {
      three_nebula__WEBPACK_IMPORTED_MODULE_3___default.a.fromJSONAsync(this.data.particleSystemState, three__WEBPACK_IMPORTED_MODULE_2__).then(particleSystem => {
        this.particleSystem = particleSystem;
        particleSystem.addRenderer(new three_nebula__WEBPACK_IMPORTED_MODULE_3__["SpriteRenderer"](this.scene, three__WEBPACK_IMPORTED_MODULE_2__));
        return resolve(this.render());
      }).catch(console.error);
    });
  }

}

/***/ }),

/***/ "./pages/home/Hero/Canvas/index.js":
/*!*****************************************!*\
  !*** ./pages/home/Hero/Canvas/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/pages/home/Hero/Canvas/index.js";

class Canvas extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleResize", e => {
      this.visualisation.resize();
    });

    this.canvasRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  }

  async componentDidMount() {
    // guards against nextjs errors for window being undefined on the server
    if (!window) {
      return;
    }

    const {
      Visualisation
    } = __webpack_require__(/*! ./Visualisation */ "./pages/home/Hero/Canvas/Visualisation/index.js");

    this.visualisation = await new Visualisation(this.canvas).start();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    this.visualisation.stop();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
      ref: this.canvasRef,
      className: "canvas",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    });
  }

  get canvas() {
    return this.canvasRef.current;
  }

}

/***/ }),

/***/ "./pages/home/Hero/Video.js":
/*!**********************************!*\
  !*** ./pages/home/Hero/Video.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_hero_video_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/hero-video.mp4 */ "./assets/hero-video.mp4");
/* harmony import */ var _assets_hero_video_mp4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_hero_video_mp4__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/pages/home/Hero/Video.js";


/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
  src: _assets_hero_video_mp4__WEBPACK_IMPORTED_MODULE_1___default.a,
  preload: "auto",
  autoPlay: true,
  loop: true,
  className: "Video",
  muted: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}));

/***/ }),

/***/ "./pages/home/Hero/index.js":
/*!**********************************!*\
  !*** ./pages/home/Hero/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/components */ "./common/components/index.js");
/* harmony import */ var _Blurb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blurb */ "./pages/home/Hero/Blurb.js");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Canvas */ "./pages/home/Hero/Canvas/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Video */ "./pages/home/Hero/Video.js");
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/pages/home/Hero/index.js";





/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_0__["Content"], {
  className: "Hero",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Canvas__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Blurb__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Video__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}))));

/***/ }),

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hero */ "./pages/home/Hero/index.js");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components */ "./common/components/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/pages/home/index.js";



/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_1__["Page"], {
  className: "Home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Hero__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
})));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./pages/home/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/pages/index.js";


/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_home__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rohandeshpande/Projects/nebula-web/next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),

/***/ "three-nebula":
/*!*******************************!*\
  !*** external "three-nebula" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three-nebula");

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