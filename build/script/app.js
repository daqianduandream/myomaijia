/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(2)



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(3)
	var indexTpl = __webpack_require__(4)

	var body = document.body;
	body.innerHTML=indexTpl+body.innerHTML;
	var header=document.getElementById('header')
	header.innerHTML = headerTpl



/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<header>拉勾网</header>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\"><div id=\"header\"></div><section></section><div id=\"footer\"></div></div>"

/***/ })
/******/ ]);