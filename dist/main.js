/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart.js */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_sec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sec */ \"./src/modules/sec.js\");\n/* harmony import */ var _modules_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/helper.js */ \"./src/modules/helper.js\");\n\r\n\r\n\r\n\r\n(0,_modules_cart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_sec__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_helper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n//# sourceURL=webpack://db/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\r\n  const cartBtn = document.querySelector('#cart');\r\n  const cartList = document.querySelector('.cart');\r\n  const cartClose = document.querySelector('.cart-close');\r\n\r\n  function open() {\r\n    cartList.style.display = 'flex';\r\n  }\r\n  function close() {\r\n    cartList.style.display = '';\r\n  }\r\n  cartBtn.addEventListener('click', open);\r\n  cartClose.addEventListener('click', close);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://db/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData =  () => {\r\n    return fetch('https://database-d43a2-default-rtdb.firebaseio.com/goods.json')\r\n    .then(res => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://db/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n const debounce = (func, ms = 300) => {\r\n\r\n    let timerID;\r\n\r\n    return (...args) => {\r\n        clearTimeout(timerID) \r\n        \r\n        timerID = setTimeout(() => func.apply(undefined, args), ms)\r\n        \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);\n\n//# sourceURL=webpack://db/./src/modules/helper.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const postData =  () => {\r\n//     return fetch('http://localhost:3000/goods', {\r\n//         method: 'POST',\r\n//         body: JSON.stringify({\r\n//             title: \"Crysis\",\r\n//             price: 5000,\r\n//             sale: false,\r\n//             img: \"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\r\n//             hoverImg: \"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\r\n//             category: \"Игровая приставка\"\r\n//         }),\r\n//         headers: {\r\n//             'Content-type': 'application/json; charset=UTF-8',\r\n//         },\r\n//     })\r\n//     .then(res => res.json())\r\n// }\r\nconst postData =  () => {\r\n    return fetch('http://localhost:3000/goods/2610', {\r\n        method: 'DELETE', })\r\n    .then(res => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://db/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/sec.js":
/*!****************************!*\
  !*** ./src/modules/sec.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _db_db_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../db/db.json */ \"./db/db.json\");\n\r\n\r\n\r\nconst sec = () => {\r\n  const cartBtn = document.querySelector('#cart');\r\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n    console.log(data);\r\n  });\r\n\r\n  // cartBtn.addEventListener('click', () => {\r\n  //     postData().then((data) => {\r\n  //       console.log(`work`);\r\n        \r\n  //       getData().then((data) => {\r\n  //         console.log(data);\r\n  //       });\r\n  //     });\r\n  //   }\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sec);\r\n\n\n//# sourceURL=webpack://db/./src/modules/sec.js?");

/***/ }),

/***/ "./db/db.json":
/*!********************!*\
  !*** ./db/db.json ***!
  \********************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"goods\":[{\"id\":\"0\",\"title\":\"Игровая приставка Sony PlayStation 4 Pro\",\"price\":33990,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"1\",\"title\":\"Игровая приставка Sony PlayStation 3 Super Slim\",\"price\":16499,\"sale\":true,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1027495663.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1028469540.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"2\",\"title\":\"Игровая приставка Xbox One X\",\"price\":39990,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1024358491.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"3\",\"title\":\"Игровая приставка Xbox One S\",\"price\":23411,\"sale\":true,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1024822131.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1024822128.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"4\",\"title\":\"Игровая приставка Nintendo Switch\",\"price\":24751,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1021386685.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1026072683.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"5\",\"title\":\"Игровая приставка Sega Retro Genesis HD\",\"price\":3624,\"sale\":true,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1024928305.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1024928306.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"6\",\"title\":\"Игровая приставка Dendy Junior\",\"price\":1551,\"sale\":true,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"7\",\"title\":\"Игровая приставка Sony PlayStation Classic\",\"price\":10445,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1025222877.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/102538227.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"8\",\"title\":\"Клавиатура Logitech Wireless Keyboard K360\",\"price\":2390,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1015518726.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/102518725.jpg\",\"category\":\"Периферия для ПК\"},{\"id\":\"9\",\"title\":\"Клавиатура Defender Element HB-195\",\"price\":566,\"sale\":true,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1028488609.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1028488611.jpg\",\"category\":\"Периферия для ПК\"},{\"id\":\"10\",\"title\":\"Игровая клавиатура Steelseries Apex M750- RU\",\"price\":12848,\"sale\":true,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1027006299.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1027006301.jpg\",\"category\":\"Периферия для ПК\"},{\"id\":\"11\",\"title\":\"Мышь + коврик A4Tech Bloody V7M+B-071\",\"price\":1649,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1026202934.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1026202933.jpg\",\"category\":\"Периферия для ПК\"},{\"id\":\"12\",\"title\":\"Мышь Trust Varo\",\"price\":1097,\"sale\":true,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1025117257.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1025117012.jpg\",\"category\":\"Периферия для ПК\"},{\"id\":\"13\",\"title\":\"Мышь Genius DX-120\",\"price\":350,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1014472326.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1014472325.jpg\",\"category\":\"Периферия для ПК\"},{\"id\":\"14\",\"title\":\"Коврик для мыши Orico MPA9040\",\"price\":1279,\"sale\":true,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1026748248.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1026748250.jpg\",\"category\":\"Периферия для ПК\"},{\"id\":\"15\",\"title\":\"Коврик для мыши Trust GXT 760 Glide RGB\",\"price\":4959,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1025053907.jpg\",\"category\":\"Периферия для ПК\"},{\"id\":\"16\",\"title\":\"Метро: Исход\",\"price\":1479,\"sale\":true,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1026951535.jpg\",\"category\":\"Игры и софт\"},{\"id\":\"17\",\"title\":\"Darksiders III. Коллекционное издание\",\"price\":3990,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1023840682.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1023849642.jpg\",\"category\":\"Игры и софт\"},{\"id\":\"18\",\"title\":\"Mortal Kombat X\",\"price\":1076,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1011627377.jpg\",\"category\":\"Игры и софт\"},{\"id\":\"19\",\"title\":\"Microsoft Windows 10 Home (32/64-bit)\",\"price\":9412,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1013975751.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1013975799.jpg\",\"category\":\"Игры и софт\"},{\"id\":\"20\",\"title\":\"1С:Предприятие 8.3. Версия для обучения программированию\",\"price\":560,\"sale\":true,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1015773076.jpg\",\"category\":\"Игры и софт\"},{\"id\":\"21\",\"title\":\"ABBYY FotoTranslate\",\"price\":805,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1001559725.jpg\",\"category\":\"Игры и софт\"},{\"id\":\"22\",\"title\":\"Destiny (Xbox 360)\",\"price\":723,\"sale\":true,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1021419099.jpg\",\"category\":\"Игры и софт\"},{\"id\":\"23\",\"title\":\"Игра Onrush (PS4 Sony)\",\"price\":1794,\"sale\":true,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg\",\"category\":\"Игры и софт\"},{\"id\":\"80e4\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"27c2\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"f4a2\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"69ec\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"0c28\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"119c\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"6386\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"5eed\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"9256\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"0b2e\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"8feb\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"49f1\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"7894\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"4567\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"},{\"id\":\"cda4\",\"title\":\"Crysis\",\"price\":5000,\"sale\":false,\"img\":\"https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg\",\"hoverImg\":\"https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg\",\"category\":\"Игровая приставка\"}]}');\n\n//# sourceURL=webpack://db/./db/db.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;