/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_foodInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/foodInteractions */ \"./src/scripts/foodInteractions.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Your game setup and initialization code here\n\n  // Add event listeners for user interactions, e.g., adding food to the hotpot\n});\n\n// Event listener to detect when the player presses a key for picking up the food\ndocument.addEventListener('keydown', event => {\n  const keyPressed = event.key;\n  // Check if the pressed key corresponds to any food type\n  if (keyPressed === 'W' || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D') {\n    (0,_scripts_foodInteractions__WEBPACK_IMPORTED_MODULE_0__.handlePickUpFood)(keyPressed);\n  }\n});\n\n// Event listener to detect when the player releases a key for dropping the food\ndocument.addEventListener('keyup', event => {\n  const keyReleased = event.key;\n  // Check if the released key corresponds to any food type\n  if (keyPressed === 'W' || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D') {\n    (0,_scripts_foodInteractions__WEBPACK_IMPORTED_MODULE_0__.handleDropFood)(keyReleased);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBOEU7QUFFOUVFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRDs7RUFFQTtBQUFBLENBQ0gsQ0FBQzs7QUFFRjtBQUNBRCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBR0MsS0FBSyxJQUFLO0VBQzVDLE1BQU1DLFVBQVUsR0FBR0QsS0FBSyxDQUFDRSxHQUFHO0VBQzVCO0VBQ0EsSUFBSUQsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsRUFBRTtJQUN4RkwsMkVBQWdCLENBQUNLLFVBQVUsQ0FBQztFQUM5QjtBQUNKLENBQUMsQ0FBQzs7QUFFQTtBQUNGSCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsS0FBSyxJQUFLO0VBQzFDLE1BQU1HLFdBQVcsR0FBR0gsS0FBSyxDQUFDRSxHQUFHO0VBQzdCO0VBQ0EsSUFBSUQsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsRUFBRTtJQUN4RkoseUVBQWMsQ0FBQ00sV0FBVyxDQUFDO0VBQzdCO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90LXBvdC1ob3R0aWUtbWFpbi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZVBpY2tVcEZvb2QsIGhhbmRsZURyb3BGb29kIH0gZnJvbSAnLi9zY3JpcHRzL2Zvb2RJbnRlcmFjdGlvbnMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8vIFlvdXIgZ2FtZSBzZXR1cCBhbmQgaW5pdGlhbGl6YXRpb24gY29kZSBoZXJlXG4gIFxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIHVzZXIgaW50ZXJhY3Rpb25zLCBlLmcuLCBhZGRpbmcgZm9vZCB0byB0aGUgaG90cG90XG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gZGV0ZWN0IHdoZW4gdGhlIHBsYXllciBwcmVzc2VzIGEga2V5IGZvciBwaWNraW5nIHVwIHRoZSBmb29kXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qga2V5UHJlc3NlZCA9IGV2ZW50LmtleTtcbiAgICAvLyBDaGVjayBpZiB0aGUgcHJlc3NlZCBrZXkgY29ycmVzcG9uZHMgdG8gYW55IGZvb2QgdHlwZVxuICAgIGlmIChrZXlQcmVzc2VkID09PSAnVycgfHwga2V5UHJlc3NlZCA9PT0gJ0EnIHx8IGtleVByZXNzZWQgPT09ICdTJyB8fCBrZXlQcmVzc2VkID09PSAnRCcpIHtcbiAgICAgIGhhbmRsZVBpY2tVcEZvb2Qoa2V5UHJlc3NlZCk7XG4gICAgfVxufSk7XG5cbiAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gZGV0ZWN0IHdoZW4gdGhlIHBsYXllciByZWxlYXNlcyBhIGtleSBmb3IgZHJvcHBpbmcgdGhlIGZvb2RcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qga2V5UmVsZWFzZWQgPSBldmVudC5rZXk7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJlbGVhc2VkIGtleSBjb3JyZXNwb25kcyB0byBhbnkgZm9vZCB0eXBlXG4gICAgaWYgKGtleVByZXNzZWQgPT09ICdXJyB8fCBrZXlQcmVzc2VkID09PSAnQScgfHwga2V5UHJlc3NlZCA9PT0gJ1MnIHx8IGtleVByZXNzZWQgPT09ICdEJykge1xuICAgICAgaGFuZGxlRHJvcEZvb2Qoa2V5UmVsZWFzZWQpO1xuICAgIH1cbn0pOyJdLCJuYW1lcyI6WyJoYW5kbGVQaWNrVXBGb29kIiwiaGFuZGxlRHJvcEZvb2QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleVByZXNzZWQiLCJrZXkiLCJrZXlSZWxlYXNlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/foodInteractions.js":
/*!*****************************************!*\
  !*** ./src/scripts/foodInteractions.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleDropFood: function() { return /* binding */ handleDropFood; },\n/* harmony export */   handlePickUpFood: function() { return /* binding */ handlePickUpFood; }\n/* harmony export */ });\n// Function to handle picking up the food when the corresponding key is pressed\nfunction handlePickUpFood(foodType) {\n  // logic to pick up the food and display it in the player's hand\n}\n\n// Function to handle dropping the food into the hotpot when the corresponding key is released\nfunction handleDropFood(foodType) {\n  // logic to drop the food into the hotpot and check if it was successful\n  // Update the hotpot's state based on the food's success or failure\n}\n\n// Export the functions to use them in the main game logic (index.js)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mb29kSW50ZXJhY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFDQSxTQUFTQSxnQkFBZ0JBLENBQUNDLFFBQVEsRUFBRTtFQUNoQztBQUFBOztBQUdGO0FBQ0EsU0FBU0MsY0FBY0EsQ0FBQ0QsUUFBUSxFQUFFO0VBQ2hDO0VBQ0E7QUFBQTs7QUFHRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvdC1wb3QtaG90dGllLW1haW4vLi9zcmMvc2NyaXB0cy9mb29kSW50ZXJhY3Rpb25zLmpzP2VhZWUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBwaWNraW5nIHVwIHRoZSBmb29kIHdoZW4gdGhlIGNvcnJlc3BvbmRpbmcga2V5IGlzIHByZXNzZWRcbmZ1bmN0aW9uIGhhbmRsZVBpY2tVcEZvb2QoZm9vZFR5cGUpIHtcbiAgICAvLyBsb2dpYyB0byBwaWNrIHVwIHRoZSBmb29kIGFuZCBkaXNwbGF5IGl0IGluIHRoZSBwbGF5ZXIncyBoYW5kXG4gIH1cbiAgXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBkcm9wcGluZyB0aGUgZm9vZCBpbnRvIHRoZSBob3Rwb3Qgd2hlbiB0aGUgY29ycmVzcG9uZGluZyBrZXkgaXMgcmVsZWFzZWRcbiAgZnVuY3Rpb24gaGFuZGxlRHJvcEZvb2QoZm9vZFR5cGUpIHtcbiAgICAvLyBsb2dpYyB0byBkcm9wIHRoZSBmb29kIGludG8gdGhlIGhvdHBvdCBhbmQgY2hlY2sgaWYgaXQgd2FzIHN1Y2Nlc3NmdWxcbiAgICAvLyBVcGRhdGUgdGhlIGhvdHBvdCdzIHN0YXRlIGJhc2VkIG9uIHRoZSBmb29kJ3Mgc3VjY2VzcyBvciBmYWlsdXJlXG4gIH1cbiAgXG4gIC8vIEV4cG9ydCB0aGUgZnVuY3Rpb25zIHRvIHVzZSB0aGVtIGluIHRoZSBtYWluIGdhbWUgbG9naWMgKGluZGV4LmpzKVxuICBleHBvcnQgeyBoYW5kbGVQaWNrVXBGb29kLCBoYW5kbGVEcm9wRm9vZCB9OyJdLCJuYW1lcyI6WyJoYW5kbGVQaWNrVXBGb29kIiwiZm9vZFR5cGUiLCJoYW5kbGVEcm9wRm9vZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/foodInteractions.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUE7QUFDQSwrREFBZSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90LXBvdC1ob3R0aWUtbWFpbi8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;