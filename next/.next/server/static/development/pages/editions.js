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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

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

/***/ "./pages/editions/ComingSoon.js":
/*!**************************************!*\
  !*** ./pages/editions/ComingSoon.js ***!
  \**************************************/
/*! exports provided: ComingSoon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoon", function() { return ComingSoon; });
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/components */ "./common/components/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/pages/editions/ComingSoon.js";


const ComingSoon = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_0__["Callout"], {
  className: "xs disabled",
  text: "TBC",
  onClick: () => {},
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
});

/***/ }),

/***/ "./pages/editions/Feature.js":
/*!***********************************!*\
  !*** ./pages/editions/Feature.js ***!
  \***********************************/
/*! exports provided: Feature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isString */ "lodash/isString");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/pages/editions/Feature.js";






const Edition = ({
  hasFeature
}) => lodash_isString__WEBPACK_IMPORTED_MODULE_4___default()(hasFeature) ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, hasFeature) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, !hasFeature ? '' : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCheck"],
  className: "fa-check",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}));

const Feature = ({
  title,
  text,
  inAlpha,
  inCommunity,
  inPro
}) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, text)), [inAlpha, inCommunity, inPro].map((hasFeature, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Edition, {
  key: i,
  hasFeature: hasFeature,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
})));
Edition.propTypes = {
  hasFeature: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"], prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]])
};
const inEdition = Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"]]);
Feature.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  text: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  inAlpha: inEdition,
  inCommunity: inEdition,
  inPro: inEdition
};

/***/ }),

/***/ "./pages/editions/index.js":
/*!*********************************!*\
  !*** ./pages/editions/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _common_components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components/ */ "./common/components/index.js");
/* harmony import */ var _ComingSoon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComingSoon */ "./pages/editions/ComingSoon.js");
/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Feature */ "./pages/editions/Feature.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils */ "./common/utils.js");

var _jsxFileName = "/Users/rohandeshpande/Projects/nebula-web/next/pages/editions/index.js";







const Editions = ({
  content: {
    editions: {
      title,
      text,
      features
    }
  }
}) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_common_components___WEBPACK_IMPORTED_MODULE_1__["Page"], {
  className: "Editions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_common_components___WEBPACK_IMPORTED_MODULE_1__["Content"], {
  title: title,
  text: text,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
  className: "Table",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Features"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "What comes in the box.")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "Alpha"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Free & stable"), " But comes with limited features."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_common_components___WEBPACK_IMPORTED_MODULE_1__["Callout"], {
  className: "xs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Community*"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Free!"), " Great for getting started with Nebula."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ComingSoon__WEBPACK_IMPORTED_MODULE_2__["ComingSoon"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "Pro*"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "$5 per account/month"), "The definitive edition with the latest features."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ComingSoon__WEBPACK_IMPORTED_MODULE_2__["ComingSoon"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
})))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, features.map((props, i) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Feature__WEBPACK_IMPORTED_MODULE_3__["Feature"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  key: i
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
  className: "center Disclaimer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, "* Pricing and features subject to change without notice")));

Editions.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_5__["object"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["withContent"])(Editions));

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** multi ./pages/editions/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rohandeshpande/Projects/nebula-web/next/pages/editions/index.js */"./pages/editions/index.js");


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

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isString");

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

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=editions.js.map