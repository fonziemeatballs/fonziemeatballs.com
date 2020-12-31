module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/essays/[slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/EssayLayout.tsx":
/*!****************************************!*\
  !*** ./src/components/EssayLayout.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/michaelmcguiness/Dropbox/Projects/fonziemeatballs.com/src/components/EssayLayout.tsx\";\n\n\n\nconst EssayLayout = ({\n  content,\n  meta\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: meta.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        content: \"IE=edge\",\n        httpEquiv: \"X-UA-Compatible\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        content: \"width=device-width, initial-scale=1\",\n        name: \"viewport\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"robots\",\n        content: \"follow, index\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"/favicon.ico\",\n        rel: \"shortcut icon\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        content: meta.description,\n        name: \"description\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:type\",\n        content: \"website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:site_name\",\n        content: meta.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:description\",\n        content: meta.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: meta.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:image\",\n        content: meta.cardImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary_large_image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:site\",\n        content: \"@fonziemeatballs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:title\",\n        content: meta.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:description\",\n        content: meta.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:image\",\n        content: meta.cardImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      dangerouslySetInnerHTML: {\n        __html: content\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EssayLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Fc3NheUxheW91dC50c3g/MThmZiJdLCJuYW1lcyI6WyJFc3NheUxheW91dCIsImNvbnRlbnQiLCJtZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhcmRJbWFnZSIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBUUEsTUFBTUEsV0FBNEIsR0FBRyxDQUFDO0FBQUVDLFNBQUY7QUFBV0M7QUFBWCxDQUFELEtBQXVCO0FBQzFELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRQSxJQUFJLENBQUNDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQU0sZUFBTyxFQUFDLFNBQWQ7QUFBd0IsaUJBQVMsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBTSxlQUFPLEVBQUMscUNBQWQ7QUFBb0QsWUFBSSxFQUFDO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRTtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQW9CLGVBQU8sRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBTUU7QUFBTSxZQUFJLEVBQUMsY0FBWDtBQUEwQixXQUFHLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQU9FO0FBQU0sZUFBTyxFQUFFRCxJQUFJLENBQUNFLFdBQXBCO0FBQWlDLFlBQUksRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBUUU7QUFBTSxnQkFBUSxFQUFDLFNBQWY7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFTRTtBQUFNLGdCQUFRLEVBQUMsY0FBZjtBQUE4QixlQUFPLEVBQUVGLElBQUksQ0FBQ0M7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQVVFO0FBQU0sZ0JBQVEsRUFBQyxnQkFBZjtBQUFnQyxlQUFPLEVBQUVELElBQUksQ0FBQ0U7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQVdFO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBRUYsSUFBSSxDQUFDQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGLGVBWUU7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFFRCxJQUFJLENBQUNHO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkYsZUFhRTtBQUFNLFlBQUksRUFBQyxjQUFYO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGLGVBY0U7QUFBTSxZQUFJLEVBQUMsY0FBWDtBQUEwQixlQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRixlQWVFO0FBQU0sWUFBSSxFQUFDLGVBQVg7QUFBMkIsZUFBTyxFQUFFSCxJQUFJLENBQUNDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkYsZUFnQkU7QUFBTSxZQUFJLEVBQUMscUJBQVg7QUFBaUMsZUFBTyxFQUFFRCxJQUFJLENBQUNFO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJGLGVBaUJFO0FBQU0sWUFBSSxFQUFDLGVBQVg7QUFBMkIsZUFBTyxFQUFFRixJQUFJLENBQUNHO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQW9CRTtBQUFTLDZCQUF1QixFQUFFO0FBQUVDLGNBQU0sRUFBRUw7QUFBVjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRjtBQUFBLGtCQURGO0FBd0JELENBekJEOztBQTJCZUQsMEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Fc3NheUxheW91dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBQYWdlTWV0YSB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb250ZW50OiBzdHJpbmdcbiAgbWV0YTogUGFnZU1ldGFcbn1cblxuY29uc3QgRXNzYXlMYXlvdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbnRlbnQsIG1ldGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnttZXRhLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJJRT1lZGdlXCIgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgLz5cbiAgICAgICAgPG1ldGEgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgbmFtZT1cInZpZXdwb3J0XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJmb2xsb3csIGluZGV4XCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9mYXZpY29uLmljb1wiIHJlbD1cInNob3J0Y3V0IGljb25cIiAvPlxuICAgICAgICA8bWV0YSBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17bWV0YS50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXttZXRhLnRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17bWV0YS5jYXJkSW1hZ2V9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQGZvbnppZW1lYXRiYWxsc1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17bWV0YS50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e21ldGEuY2FyZEltYWdlfSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGFydGljbGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb250ZW50IH19IC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXNzYXlMYXlvdXRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/EssayLayout.tsx\n");

/***/ }),

/***/ "./src/lib/docs.tsx":
/*!**************************!*\
  !*** ./src/lib/docs.tsx ***!
  \**************************/
/*! exports provided: getDocBySlug, getAllDocs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDocBySlug\", function() { return getDocBySlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllDocs\", function() { return getAllDocs; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst docsDirectory = Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(process.cwd(), '/src/docs');\nfunction getDocBySlug(slug) {\n  const realSlug = slug.replace(/\\.md$/, '');\n  const fullPath = Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(docsDirectory, `${realSlug}.md`);\n  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, 'utf8');\n  const {\n    data,\n    content\n  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n  return {\n    slug: realSlug,\n    meta: data,\n    content\n  };\n}\nfunction getAllDocs() {\n  const slugs = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(docsDirectory);\n  const docs = slugs.map(slug => getDocBySlug(slug));\n  return docs;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RvY3MudHN4P2M5ZjciXSwibmFtZXMiOlsiZG9jc0RpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZ2V0RG9jQnlTbHVnIiwic2x1ZyIsInJlYWxTbHVnIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiY29udGVudCIsIm1hdHRlciIsIm1ldGEiLCJnZXRBbGxEb2NzIiwic2x1Z3MiLCJyZWFkZGlyU3luYyIsImRvY3MiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGFBQWEsR0FBR0MsaURBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFSLEVBQUQsRUFBZ0IsV0FBaEIsQ0FBMUI7QUFFTyxTQUFTQyxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUNqQyxRQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxDQUFhLE9BQWIsRUFBc0IsRUFBdEIsQ0FBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUdQLGlEQUFJLENBQUNELGFBQUQsRUFBaUIsR0FBRU0sUUFBUyxLQUE1QixDQUFyQjtBQUNBLFFBQU1HLFlBQVksR0FBR0MseUNBQUUsQ0FBQ0MsWUFBSCxDQUFnQkgsUUFBaEIsRUFBMEIsTUFBMUIsQ0FBckI7QUFDQSxRQUFNO0FBQUVJLFFBQUY7QUFBUUM7QUFBUixNQUFvQkMsa0RBQU0sQ0FBQ0wsWUFBRCxDQUFoQztBQUVBLFNBQU87QUFBRUosUUFBSSxFQUFFQyxRQUFSO0FBQWtCUyxRQUFJLEVBQUVILElBQXhCO0FBQThCQztBQUE5QixHQUFQO0FBQ0Q7QUFFTSxTQUFTRyxVQUFULEdBQXNCO0FBQzNCLFFBQU1DLEtBQUssR0FBR1AseUNBQUUsQ0FBQ1EsV0FBSCxDQUFlbEIsYUFBZixDQUFkO0FBQ0EsUUFBTW1CLElBQUksR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVdmLElBQUQsSUFBVUQsWUFBWSxDQUFDQyxJQUFELENBQWhDLENBQWI7QUFFQSxTQUFPYyxJQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvbGliL2RvY3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuXG5jb25zdCBkb2NzRGlyZWN0b3J5ID0gam9pbihwcm9jZXNzLmN3ZCgpLCAnL3NyYy9kb2NzJylcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvY0J5U2x1ZyhzbHVnKSB7XG4gIGNvbnN0IHJlYWxTbHVnID0gc2x1Zy5yZXBsYWNlKC9cXC5tZCQvLCAnJylcbiAgY29uc3QgZnVsbFBhdGggPSBqb2luKGRvY3NEaXJlY3RvcnksIGAke3JlYWxTbHVnfS5tZGApXG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0ZjgnKVxuICBjb25zdCB7IGRhdGEsIGNvbnRlbnQgfSA9IG1hdHRlcihmaWxlQ29udGVudHMpXG5cbiAgcmV0dXJuIHsgc2x1ZzogcmVhbFNsdWcsIG1ldGE6IGRhdGEsIGNvbnRlbnQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsRG9jcygpIHtcbiAgY29uc3Qgc2x1Z3MgPSBmcy5yZWFkZGlyU3luYyhkb2NzRGlyZWN0b3J5KVxuICBjb25zdCBkb2NzID0gc2x1Z3MubWFwKChzbHVnKSA9PiBnZXREb2NCeVNsdWcoc2x1ZykpXG5cbiAgcmV0dXJuIGRvY3Ncbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/docs.tsx\n");

/***/ }),

/***/ "./src/lib/markdown.tsx":
/*!******************************!*\
  !*** ./src/lib/markdown.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return markdownToHtml; });\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-html */ \"remark-html\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-prism */ \"remark-prism\");\n/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remark_prism__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function markdownToHtml(markdown) {\n  const result = await remark__WEBPACK_IMPORTED_MODULE_0___default()().use(remark_html__WEBPACK_IMPORTED_MODULE_1___default.a).use(remark_prism__WEBPACK_IMPORTED_MODULE_2___default.a).process(markdown);\n  return result.toString();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL21hcmtkb3duLnRzeD8zY2RlIl0sIm5hbWVzIjpbIm1hcmtkb3duVG9IdG1sIiwibWFya2Rvd24iLCJyZXN1bHQiLCJyZW1hcmsiLCJ1c2UiLCJodG1sIiwicHJpc20iLCJwcm9jZXNzIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFZSxlQUFlQSxjQUFmLENBQThCQyxRQUE5QixFQUF3QztBQUNyRCxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsNkNBQU0sR0FBR0MsR0FBVCxDQUFhQyxrREFBYixFQUFtQkQsR0FBbkIsQ0FBdUJFLG1EQUF2QixFQUE4QkMsT0FBOUIsQ0FBc0NOLFFBQXRDLENBQXJCO0FBQ0EsU0FBT0MsTUFBTSxDQUFDTSxRQUFQLEVBQVA7QUFDRCIsImZpbGUiOiIuL3NyYy9saWIvbWFya2Rvd24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlbWFyayBmcm9tICdyZW1hcmsnO1xuaW1wb3J0IGh0bWwgZnJvbSAncmVtYXJrLWh0bWwnO1xuaW1wb3J0IHByaXNtIGZyb20gJ3JlbWFyay1wcmlzbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1hcmtkb3duVG9IdG1sKG1hcmtkb3duKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlbWFyaygpLnVzZShodG1sKS51c2UocHJpc20pLnByb2Nlc3MobWFya2Rvd24pO1xuICByZXR1cm4gcmVzdWx0LnRvU3RyaW5nKCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/markdown.tsx\n");

/***/ }),

/***/ "./src/pages/essays/[slug].tsx":
/*!*************************************!*\
  !*** ./src/pages/essays/[slug].tsx ***!
  \*************************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_EssayLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/EssayLayout */ \"./src/components/EssayLayout.tsx\");\n/* harmony import */ var _lib_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/docs */ \"./src/lib/docs.tsx\");\n/* harmony import */ var _lib_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/markdown */ \"./src/lib/markdown.tsx\");\n\nvar _jsxFileName = \"/Users/michaelmcguiness/Dropbox/Projects/fonziemeatballs.com/src/pages/essays/[slug].tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst Doc = ({\n  content,\n  meta\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_EssayLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    meta: meta,\n    content: content\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Doc);\nasync function getStaticProps({\n  params\n}) {\n  const doc = Object(_lib_docs__WEBPACK_IMPORTED_MODULE_2__[\"getDocBySlug\"])(params.slug);\n  const content = await Object(_lib_markdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(doc.content || '');\n  return {\n    props: _objectSpread(_objectSpread({}, doc), {}, {\n      content\n    })\n  };\n}\nasync function getStaticPaths() {\n  const docs = Object(_lib_docs__WEBPACK_IMPORTED_MODULE_2__[\"getAllDocs\"])();\n  return {\n    paths: docs.map(doc => {\n      return {\n        params: {\n          slug: doc.slug\n        }\n      };\n    }),\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZXNzYXlzL1tzbHVnXS50c3g/OTk1NCJdLCJuYW1lcyI6WyJEb2MiLCJjb250ZW50IiwibWV0YSIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwiZG9jIiwiZ2V0RG9jQnlTbHVnIiwic2x1ZyIsIm1hcmtkb3duVG9IdG1sIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsImRvY3MiLCJnZXRBbGxEb2NzIiwicGF0aHMiLCJtYXAiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBUUEsTUFBTUEsR0FBb0IsR0FBRyxDQUFDO0FBQUVDLFNBQUY7QUFBV0M7QUFBWCxDQUFELEtBQXVCO0FBQ2xELHNCQUFPLHFFQUFDLCtEQUFEO0FBQWEsUUFBSSxFQUFFQSxJQUFuQjtBQUF5QixXQUFPLEVBQUVEO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSWVELGtFQUFmO0FBRU8sZUFBZUcsY0FBZixDQUE4QjtBQUFFQztBQUFGLENBQTlCLEVBQTBDO0FBQy9DLFFBQU1DLEdBQUcsR0FBR0MsOERBQVksQ0FBQ0YsTUFBTSxDQUFDRyxJQUFSLENBQXhCO0FBQ0EsUUFBTU4sT0FBTyxHQUFHLE1BQU1PLDZEQUFjLENBQUNILEdBQUcsQ0FBQ0osT0FBSixJQUFlLEVBQWhCLENBQXBDO0FBRUEsU0FBTztBQUNMUSxTQUFLLGtDQUNBSixHQURBO0FBRUhKO0FBRkc7QUFEQSxHQUFQO0FBTUQ7QUFFTSxlQUFlUyxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLElBQUksR0FBR0MsNERBQVUsRUFBdkI7QUFFQSxTQUFPO0FBQ0xDLFNBQUssRUFBRUYsSUFBSSxDQUFDRyxHQUFMLENBQVVULEdBQUQsSUFBUztBQUN2QixhQUFPO0FBQ0xELGNBQU0sRUFBRTtBQUNORyxjQUFJLEVBQUVGLEdBQUcsQ0FBQ0U7QUFESjtBQURILE9BQVA7QUFLRCxLQU5NLENBREY7QUFRTFEsWUFBUSxFQUFFO0FBUkwsR0FBUDtBQVVEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2Vzc2F5cy9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVzc2F5TGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL0Vzc2F5TGF5b3V0JztcbmltcG9ydCB7IGdldEFsbERvY3MsIGdldERvY0J5U2x1ZyB9IGZyb20gJ0BsaWIvZG9jcyc7XG5pbXBvcnQgbWFya2Rvd25Ub0h0bWwgZnJvbSAnQGxpYi9tYXJrZG93bic7XG5pbXBvcnQgeyBQYWdlTWV0YSB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb250ZW50OiBzdHJpbmcsIFxuICBtZXRhOiBQYWdlTWV0YVxufVxuXG5jb25zdCBEb2M6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbnRlbnQsIG1ldGEgfSkgPT4ge1xuICByZXR1cm4gPEVzc2F5TGF5b3V0IG1ldGE9e21ldGF9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBkb2MgPSBnZXREb2NCeVNsdWcocGFyYW1zLnNsdWcpO1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgbWFya2Rvd25Ub0h0bWwoZG9jLmNvbnRlbnQgfHwgJycpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIC4uLmRvYyxcbiAgICAgIGNvbnRlbnRcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgZG9jcyA9IGdldEFsbERvY3MoKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBkb2NzLm1hcCgoZG9jKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzbHVnOiBkb2Muc2x1Z1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/essays/[slug].tsx\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gray-matter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiP2Y4YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JheS1tYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gray-matter\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"remark\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmtcIj85MDlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlbWFyay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFya1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///remark\n");

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"remark-html\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmstaHRtbFwiPzdkZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVtYXJrLWh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZW1hcmstaHRtbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///remark-html\n");

/***/ }),

/***/ "remark-prism":
/*!*******************************!*\
  !*** external "remark-prism" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"remark-prism\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmstcHJpc21cIj85MjU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlbWFyay1wcmlzbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFyay1wcmlzbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///remark-prism\n");

/***/ })

/******/ });