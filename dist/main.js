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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_foodInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/foodInteractions */ \"./src/scripts/foodInteractions.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Your game setup and initialization code here\n\n  // Add event listeners for user interactions, e.g., adding food to the hotpot\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBOEU7QUFFOUVFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRDs7RUFFQTtBQUFBLENBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvdC1wb3QtaG90dGllLW1haW4vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVQaWNrVXBGb29kLCBoYW5kbGVEcm9wRm9vZCB9IGZyb20gJy4vc2NyaXB0cy9mb29kSW50ZXJhY3Rpb25zJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvLyBZb3VyIGdhbWUgc2V0dXAgYW5kIGluaXRpYWxpemF0aW9uIGNvZGUgaGVyZVxuICBcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIGZvciB1c2VyIGludGVyYWN0aW9ucywgZS5nLiwgYWRkaW5nIGZvb2QgdG8gdGhlIGhvdHBvdFxufSk7Il0sIm5hbWVzIjpbImhhbmRsZVBpY2tVcEZvb2QiLCJoYW5kbGVEcm9wRm9vZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/foodInteractions.js":
/*!*****************************************!*\
  !*** ./src/scripts/foodInteractions.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleDropFood: function() { return /* binding */ handleDropFood; },\n/* harmony export */   handlePickUpFood: function() { return /* binding */ handlePickUpFood; }\n/* harmony export */ });\n// Function to handle picking up the food when the corresponding key is pressed\nfunction handlePickUpFood(foodType) {\n  // logic to pick up the food and display it in the player's hand\n}\n\n// Function to handle dropping the food into the hotpot when the corresponding key is released\nfunction handleDropFood(foodType) {\n  // logic to drop the food into the hotpot and check if it was successful\n  // Update the hotpot's state based on the food's success or failure\n}\n\n// Event listener to detect when the player presses a key for picking up the food\ndocument.addEventListener('keydown', event => {\n  const keyPressed = event.key;\n  // Check if the pressed key corresponds to any food type\n  if (keyPressed === 'W' || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D') {\n    handlePickUpFood(keyPressed);\n  }\n});\n\n// Event listener to detect when the player releases a key for dropping the food\ndocument.addEventListener('keyup', event => {\n  const keyReleased = event.key;\n  // Check if the released key corresponds to any food type\n  if (keyPressed === 'W' || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D') {\n    handleDropFood(keyReleased);\n  }\n});\n\n// Export the functions to use them in the main game logic (index.js)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mb29kSW50ZXJhY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFDQSxTQUFTQSxnQkFBZ0JBLENBQUNDLFFBQVEsRUFBRTtFQUNoQztBQUFBOztBQUdKO0FBQ0EsU0FBU0MsY0FBY0EsQ0FBQ0QsUUFBUSxFQUFFO0VBQ2hDO0VBQ0E7QUFBQTs7QUFHRjtBQUNBRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBR0MsS0FBSyxJQUFLO0VBQzlDLE1BQU1DLFVBQVUsR0FBR0QsS0FBSyxDQUFDRSxHQUFHO0VBQzVCO0VBQ0EsSUFBSUQsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsRUFBRTtJQUN4Rk4sZ0JBQWdCLENBQUNNLFVBQVUsQ0FBQztFQUM5QjtBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBSCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsS0FBSyxJQUFLO0VBQzVDLE1BQU1HLFdBQVcsR0FBR0gsS0FBSyxDQUFDRSxHQUFHO0VBQzdCO0VBQ0EsSUFBSUQsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsRUFBRTtJQUN4RkosY0FBYyxDQUFDTSxXQUFXLENBQUM7RUFDN0I7QUFDRixDQUFDLENBQUM7O0FBRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3QtcG90LWhvdHRpZS1tYWluLy4vc3JjL3NjcmlwdHMvZm9vZEludGVyYWN0aW9ucy5qcz9lYWVlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgcGlja2luZyB1cCB0aGUgZm9vZCB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIGtleSBpcyBwcmVzc2VkXG5mdW5jdGlvbiBoYW5kbGVQaWNrVXBGb29kKGZvb2RUeXBlKSB7XG4gICAgLy8gbG9naWMgdG8gcGljayB1cCB0aGUgZm9vZCBhbmQgZGlzcGxheSBpdCBpbiB0aGUgcGxheWVyJ3MgaGFuZFxuICB9XG4gIFxuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGRyb3BwaW5nIHRoZSBmb29kIGludG8gdGhlIGhvdHBvdCB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIGtleSBpcyByZWxlYXNlZFxuZnVuY3Rpb24gaGFuZGxlRHJvcEZvb2QoZm9vZFR5cGUpIHtcbiAgLy8gbG9naWMgdG8gZHJvcCB0aGUgZm9vZCBpbnRvIHRoZSBob3Rwb3QgYW5kIGNoZWNrIGlmIGl0IHdhcyBzdWNjZXNzZnVsXG4gIC8vIFVwZGF0ZSB0aGUgaG90cG90J3Mgc3RhdGUgYmFzZWQgb24gdGhlIGZvb2QncyBzdWNjZXNzIG9yIGZhaWx1cmVcbn1cbiAgXG4vLyBFdmVudCBsaXN0ZW5lciB0byBkZXRlY3Qgd2hlbiB0aGUgcGxheWVyIHByZXNzZXMgYSBrZXkgZm9yIHBpY2tpbmcgdXAgdGhlIGZvb2RcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgY29uc3Qga2V5UHJlc3NlZCA9IGV2ZW50LmtleTtcbiAgLy8gQ2hlY2sgaWYgdGhlIHByZXNzZWQga2V5IGNvcnJlc3BvbmRzIHRvIGFueSBmb29kIHR5cGVcbiAgaWYgKGtleVByZXNzZWQgPT09ICdXJyB8fCBrZXlQcmVzc2VkID09PSAnQScgfHwga2V5UHJlc3NlZCA9PT0gJ1MnIHx8IGtleVByZXNzZWQgPT09ICdEJykge1xuICAgIGhhbmRsZVBpY2tVcEZvb2Qoa2V5UHJlc3NlZCk7XG4gIH1cbn0pO1xuXG4vLyBFdmVudCBsaXN0ZW5lciB0byBkZXRlY3Qgd2hlbiB0aGUgcGxheWVyIHJlbGVhc2VzIGEga2V5IGZvciBkcm9wcGluZyB0aGUgZm9vZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgY29uc3Qga2V5UmVsZWFzZWQgPSBldmVudC5rZXk7XG4gIC8vIENoZWNrIGlmIHRoZSByZWxlYXNlZCBrZXkgY29ycmVzcG9uZHMgdG8gYW55IGZvb2QgdHlwZVxuICBpZiAoa2V5UHJlc3NlZCA9PT0gJ1cnIHx8IGtleVByZXNzZWQgPT09ICdBJyB8fCBrZXlQcmVzc2VkID09PSAnUycgfHwga2V5UHJlc3NlZCA9PT0gJ0QnKSB7XG4gICAgaGFuZGxlRHJvcEZvb2Qoa2V5UmVsZWFzZWQpO1xuICB9XG59KTtcblxuLy8gRXhwb3J0IHRoZSBmdW5jdGlvbnMgdG8gdXNlIHRoZW0gaW4gdGhlIG1haW4gZ2FtZSBsb2dpYyAoaW5kZXguanMpXG5leHBvcnQgeyBoYW5kbGVQaWNrVXBGb29kLCBoYW5kbGVEcm9wRm9vZCB9OyJdLCJuYW1lcyI6WyJoYW5kbGVQaWNrVXBGb29kIiwiZm9vZFR5cGUiLCJoYW5kbGVEcm9wRm9vZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5UHJlc3NlZCIsImtleSIsImtleVJlbGVhc2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/foodInteractions.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3QtcG90LWhvdHRpZS1tYWluLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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