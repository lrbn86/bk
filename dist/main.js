/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entities/gameobject.js":
/*!************************************!*\
  !*** ./src/entities/gameobject.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameObject; });\nclass GameObject {\n  constructor(ctx, x, y, vx, vy) {\n    this.ctx = ctx;\n    this.x = x;\n    this.y = y;\n    this.vx = vx;\n    this.vy = vy;\n    this.isColliding = false;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/entities/gameobject.js?");

/***/ }),

/***/ "./src/entities/square.js":
/*!********************************!*\
  !*** ./src/entities/square.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Square; });\n/* harmony import */ var _gameobject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameobject.js */ \"./src/entities/gameobject.js\");\n\n\nclass Square extends _gameobject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n  constructor(ctx, x, y, vx, vy) {\n    super(ctx, x, y, vx, vy);\n    this.width = 50;\n    this.height = 50;\n  }\n\n  draw() {\n    this.ctx.fillStyle = this.isColliding ? '#ff8080' : '#0099b0';\n    this.ctx.fillRect(this.x, this.y, this.width, this.height);\n    \n  }\n\n  update(secondsPassed) {\n    this.x += this.vx * secondsPassed;\n    this.y += this.vy * secondsPassed;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/entities/square.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entities_square_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities/square.js */ \"./src/entities/square.js\");\n\n\nlet gameObjs;\n\nfunction createWorld() {\n  gameObjs = [\n    new _entities_square_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 250, 50, 0, 50),\n    new _entities_square_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, 250, 300, 0, -50),\n  ];\n}\n\n\nlet fps;\n\nlet secondsPassed = 0;\nlet oldTimeStamp = 0;\nlet movingSpeed = 50;\n\nlet canvas;\nlet ctx;\n\nlet rectX = 0;\nlet rectY = 0;\n\nwindow.onload = init;\n\nfunction init() {\n  canvas = document.createElement('canvas');\n  canvas.width = 600;\n  canvas.height = 480;\n  ctx = canvas.getContext('2d');\n  document.body.appendChild(canvas);\n  createWorld();\n  window.requestAnimationFrame(gameLoop);\n}\n\nfunction gameLoop(timeStamp) {\n  secondsPassed = (timeStamp - oldTimeStamp) / 1000;\n\n  // Limit time skip - will never move ahead more than 0.1 sec\n  secondsPassed = Math.min(secondsPassed, 0.1);\n\n  oldTimeStamp = timeStamp;\n\n  fps = Math.round(1 / secondsPassed);\n\n  update(secondsPassed);\n  draw();\n  window.requestAnimationFrame(gameLoop);\n}\n\nfunction update(secondsPassed) {\n  // Move relative to time\n  rectX += (movingSpeed * secondsPassed);\n  rectY += (movingSpeed * secondsPassed);\n\n  for (let i = 0; i < gameObjs.length; i++) {\n    gameObjs[i].update(secondsPassed);\n  }\n}\n\nfunction draw() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.fillStyle = '#ff8080';\n  ctx.fillRect(rectX, rectY, 150, 100);\n  for (let i = 0; i < gameObjs.length; i++) {\n    gameObjs[i].draw();\n  }\n  //showFPS();\n}\n\nfunction showFPS() {\n  ctx.fillStyle = 'white';\n  ctx.fillRect(0, 0, 120, 50);\n  ctx.font = '25px Arial';\n  ctx.fillStyle = 'black';\n  ctx.fillText('FPS: ' + fps, 10, 30);\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });