/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_foodInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/foodInteractions */ \"./src/scripts/foodInteractions.js\");\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_meter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/meter.js */ \"./src/scripts/meter.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _scripts_order_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/order.js */ \"./src/scripts/order.js\");\n/* harmony import */ var _scripts_order_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_order_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Your game setup and initialization code here\n\n  // Add event listeners for user interactions, e.g., adding food to the hotpot\n\n  const game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  const hotpot = document.getElementById('hotpot');\n\n  // Ensure the image is loaded before calling drawHotpotImage\n  hotpot.onload = () => {\n    game.drawHotpotImage(hotpot);\n  };\n  window.addEventListener('keydown', _scripts_meter_js__WEBPACK_IMPORTED_MODULE_2__.stopMovingCircle);\n  (0,_scripts_meter_js__WEBPACK_IMPORTED_MODULE_2__.moveCircle)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4RTtBQUN6QztBQUM2QjtBQUM1QztBQUNNO0FBRTVCSyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQ7O0VBRUE7O0VBRUEsTUFBTUMsSUFBSSxHQUFHLElBQUlMLHdEQUFJLENBQUMsQ0FBQztFQUN2QixNQUFNTSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksY0FBYyxDQUFDLFFBQVEsQ0FBQzs7RUFFaEQ7RUFDQUQsTUFBTSxDQUFDRSxNQUFNLEdBQUcsTUFBTTtJQUN0QkgsSUFBSSxDQUFDSSxlQUFlLENBQUNILE1BQU0sQ0FBQztFQUM1QixDQUFDO0VBRURJLE1BQU0sQ0FBQ04sZ0JBQWdCLENBQUMsU0FBUyxFQUFFRiwrREFBZ0IsQ0FBQztFQUNwREQsNkRBQVUsQ0FBQyxDQUFDO0FBRWhCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvdC1wb3QtaG90dGllLW1haW4vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVQaWNrVXBGb29kLCBoYW5kbGVEcm9wRm9vZCB9IGZyb20gJy4vc2NyaXB0cy9mb29kSW50ZXJhY3Rpb25zJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lLmpzJztcbmltcG9ydCB7IG1vdmVDaXJjbGUsIHN0b3BNb3ZpbmdDaXJjbGUgfSBmcm9tICcuL3NjcmlwdHMvbWV0ZXIuanMnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvb3JkZXIuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8vIFlvdXIgZ2FtZSBzZXR1cCBhbmQgaW5pdGlhbGl6YXRpb24gY29kZSBoZXJlXG4gIFxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIHVzZXIgaW50ZXJhY3Rpb25zLCBlLmcuLCBhZGRpbmcgZm9vZCB0byB0aGUgaG90cG90XG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBjb25zdCBob3Rwb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG90cG90Jyk7XG5cbiAgICAvLyBFbnN1cmUgdGhlIGltYWdlIGlzIGxvYWRlZCBiZWZvcmUgY2FsbGluZyBkcmF3SG90cG90SW1hZ2VcbiAgICBob3Rwb3Qub25sb2FkID0gKCkgPT4ge1xuICAgIGdhbWUuZHJhd0hvdHBvdEltYWdlKGhvdHBvdCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc3RvcE1vdmluZ0NpcmNsZSk7XG4gICAgbW92ZUNpcmNsZSgpO1xuXG59KTsiXSwibmFtZXMiOlsiaGFuZGxlUGlja1VwRm9vZCIsImhhbmRsZURyb3BGb29kIiwiR2FtZSIsIm1vdmVDaXJjbGUiLCJzdG9wTW92aW5nQ2lyY2xlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZSIsImhvdHBvdCIsImdldEVsZW1lbnRCeUlkIiwib25sb2FkIiwiZHJhd0hvdHBvdEltYWdlIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/foodInteractions.js":
/*!*****************************************!*\
  !*** ./src/scripts/foodInteractions.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleDropFood: function() { return /* binding */ handleDropFood; },\n/* harmony export */   handlePickUpFood: function() { return /* binding */ handlePickUpFood; }\n/* harmony export */ });\n// Function to handle picking up the food when the corresponding key is pressed\nfunction handlePickUpFood(foodType) {\n  // logic to pick up the food and display it in the player's hand\n}\n\n// Function to handle dropping the food into the hotpot when the corresponding key is released\nfunction handleDropFood(foodType) {\n  // logic to drop the food into the hotpot and check if it was successful\n  // Update the hotpot's state based on the food's success or failure\n}\n\n// Event listener to detect when the player presses a key for picking up the food\ndocument.addEventListener('keydown', event => {\n  //change code to make event listener track if the circle was stopped at the right spot on the bar\n  const keyPressed = event.key;\n  // Check if the pressed key corresponds to any food type\n  if (keyPressed === 'W' || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D') {\n    handlePickUpFood(keyPressed);\n  }\n});\n\n// Event listener to detect when the player releases a key for dropping the food\ndocument.addEventListener('keyup', event => {\n  const keyReleased = event.key;\n  // Check if the released key corresponds to any food type\n  if (keyPressed === 'W' || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D') {\n    handleDropFood(keyReleased);\n  }\n});\n\n// Export the functions to use them in the main game logic (index.js)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mb29kSW50ZXJhY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFDQSxTQUFTQSxnQkFBZ0JBLENBQUNDLFFBQVEsRUFBRTtFQUNoQztBQUFBOztBQUdKO0FBQ0EsU0FBU0MsY0FBY0EsQ0FBQ0QsUUFBUSxFQUFFO0VBQ2hDO0VBQ0E7QUFBQTs7QUFHRjtBQUNBRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBR0MsS0FBSyxJQUFLO0VBQzlDO0VBQ0EsTUFBTUMsVUFBVSxHQUFHRCxLQUFLLENBQUNFLEdBQUc7RUFDNUI7RUFDQSxJQUFJRCxVQUFVLEtBQUssR0FBRyxJQUFJQSxVQUFVLEtBQUssR0FBRyxJQUFJQSxVQUFVLEtBQUssR0FBRyxJQUFJQSxVQUFVLEtBQUssR0FBRyxFQUFFO0lBQ3hGTixnQkFBZ0IsQ0FBQ00sVUFBVSxDQUFDO0VBQzlCO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0FILFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxLQUFLLElBQUs7RUFDNUMsTUFBTUcsV0FBVyxHQUFHSCxLQUFLLENBQUNFLEdBQUc7RUFDN0I7RUFDQSxJQUFJRCxVQUFVLEtBQUssR0FBRyxJQUFJQSxVQUFVLEtBQUssR0FBRyxJQUFJQSxVQUFVLEtBQUssR0FBRyxJQUFJQSxVQUFVLEtBQUssR0FBRyxFQUFFO0lBQ3hGSixjQUFjLENBQUNNLFdBQVcsQ0FBQztFQUM3QjtBQUNGLENBQUMsQ0FBQzs7QUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvdC1wb3QtaG90dGllLW1haW4vLi9zcmMvc2NyaXB0cy9mb29kSW50ZXJhY3Rpb25zLmpzP2VhZWUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBwaWNraW5nIHVwIHRoZSBmb29kIHdoZW4gdGhlIGNvcnJlc3BvbmRpbmcga2V5IGlzIHByZXNzZWRcbmZ1bmN0aW9uIGhhbmRsZVBpY2tVcEZvb2QoZm9vZFR5cGUpIHtcbiAgICAvLyBsb2dpYyB0byBwaWNrIHVwIHRoZSBmb29kIGFuZCBkaXNwbGF5IGl0IGluIHRoZSBwbGF5ZXIncyBoYW5kXG4gIH1cbiAgXG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgZHJvcHBpbmcgdGhlIGZvb2QgaW50byB0aGUgaG90cG90IHdoZW4gdGhlIGNvcnJlc3BvbmRpbmcga2V5IGlzIHJlbGVhc2VkXG5mdW5jdGlvbiBoYW5kbGVEcm9wRm9vZChmb29kVHlwZSkge1xuICAvLyBsb2dpYyB0byBkcm9wIHRoZSBmb29kIGludG8gdGhlIGhvdHBvdCBhbmQgY2hlY2sgaWYgaXQgd2FzIHN1Y2Nlc3NmdWxcbiAgLy8gVXBkYXRlIHRoZSBob3Rwb3QncyBzdGF0ZSBiYXNlZCBvbiB0aGUgZm9vZCdzIHN1Y2Nlc3Mgb3IgZmFpbHVyZVxufVxuICBcbi8vIEV2ZW50IGxpc3RlbmVyIHRvIGRldGVjdCB3aGVuIHRoZSBwbGF5ZXIgcHJlc3NlcyBhIGtleSBmb3IgcGlja2luZyB1cCB0aGUgZm9vZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAvL2NoYW5nZSBjb2RlIHRvIG1ha2UgZXZlbnQgbGlzdGVuZXIgdHJhY2sgaWYgdGhlIGNpcmNsZSB3YXMgc3RvcHBlZCBhdCB0aGUgcmlnaHQgc3BvdCBvbiB0aGUgYmFyXG4gIGNvbnN0IGtleVByZXNzZWQgPSBldmVudC5rZXk7XG4gIC8vIENoZWNrIGlmIHRoZSBwcmVzc2VkIGtleSBjb3JyZXNwb25kcyB0byBhbnkgZm9vZCB0eXBlXG4gIGlmIChrZXlQcmVzc2VkID09PSAnVycgfHwga2V5UHJlc3NlZCA9PT0gJ0EnIHx8IGtleVByZXNzZWQgPT09ICdTJyB8fCBrZXlQcmVzc2VkID09PSAnRCcpIHtcbiAgICBoYW5kbGVQaWNrVXBGb29kKGtleVByZXNzZWQpO1xuICB9XG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gZGV0ZWN0IHdoZW4gdGhlIHBsYXllciByZWxlYXNlcyBhIGtleSBmb3IgZHJvcHBpbmcgdGhlIGZvb2RcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGtleVJlbGVhc2VkID0gZXZlbnQua2V5O1xuICAvLyBDaGVjayBpZiB0aGUgcmVsZWFzZWQga2V5IGNvcnJlc3BvbmRzIHRvIGFueSBmb29kIHR5cGVcbiAgaWYgKGtleVByZXNzZWQgPT09ICdXJyB8fCBrZXlQcmVzc2VkID09PSAnQScgfHwga2V5UHJlc3NlZCA9PT0gJ1MnIHx8IGtleVByZXNzZWQgPT09ICdEJykge1xuICAgIGhhbmRsZURyb3BGb29kKGtleVJlbGVhc2VkKTtcbiAgfVxufSk7XG5cbi8vIEV4cG9ydCB0aGUgZnVuY3Rpb25zIHRvIHVzZSB0aGVtIGluIHRoZSBtYWluIGdhbWUgbG9naWMgKGluZGV4LmpzKVxuZXhwb3J0IHsgaGFuZGxlUGlja1VwRm9vZCwgaGFuZGxlRHJvcEZvb2QgfTsiXSwibmFtZXMiOlsiaGFuZGxlUGlja1VwRm9vZCIsImZvb2RUeXBlIiwiaGFuZGxlRHJvcEZvb2QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleVByZXNzZWQiLCJrZXkiLCJrZXlSZWxlYXNlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/foodInteractions.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {}\n  drawHotpotImage() {\n    // const canvas = document.getElementById('tabletop');\n    // const ctx = canvas.getContext('2d');\n\n    // const hotpotImg = new Image();\n    // hotpotImg.src = '/assets/hotpot.png';\n\n    // hotpotImg.onload = () => {\n    //     // Draw the image at coordinates (x, y) on the canvas\n    //     // You can adjust the (x, y) coordinates as needed to position the image on the canvas\n    //     ctx.drawImage(hotpotImg, 50, 50, hotpotImg.width, hotpotImg.height);\n    //   };\n\n    // const hotpot = document.getElementById(\"hotpot\")\n    // const canvas = document.getElementById('tabletop');\n    // const ctx = canvas.getContext('2d');\n\n    // ctx.drawImage(\n    //     hotpot,\n    //         0,0,\n    //         50,50,\n    //         0,0,\n    //         200,200\n    // );\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQSxFQUFHLENBRWQ7RUFFQUMsZUFBZUEsQ0FBQSxFQUFHO0lBQ2Q7SUFDQTs7SUFFQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQUE7QUFFUjtBQUVBLCtEQUFlRixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90LXBvdC1ob3R0aWUtbWFpbi8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhd0hvdHBvdEltYWdlKCkge1xuICAgICAgICAvLyBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGV0b3AnKTtcbiAgICAgICAgLy8gY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgLy8gY29uc3QgaG90cG90SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIC8vIGhvdHBvdEltZy5zcmMgPSAnL2Fzc2V0cy9ob3Rwb3QucG5nJztcblxuICAgICAgICAvLyBob3Rwb3RJbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAvLyAgICAgLy8gRHJhdyB0aGUgaW1hZ2UgYXQgY29vcmRpbmF0ZXMgKHgsIHkpIG9uIHRoZSBjYW52YXNcbiAgICAgICAgLy8gICAgIC8vIFlvdSBjYW4gYWRqdXN0IHRoZSAoeCwgeSkgY29vcmRpbmF0ZXMgYXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBpbWFnZSBvbiB0aGUgY2FudmFzXG4gICAgICAgIC8vICAgICBjdHguZHJhd0ltYWdlKGhvdHBvdEltZywgNTAsIDUwLCBob3Rwb3RJbWcud2lkdGgsIGhvdHBvdEltZy5oZWlnaHQpO1xuICAgICAgICAvLyAgIH07XG5cbiAgICAgICAgLy8gY29uc3QgaG90cG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3Rwb3RcIilcbiAgICAgICAgLy8gY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYmxldG9wJyk7XG4gICAgICAgIC8vIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIC8vICAgICBob3Rwb3QsXG4gICAgICAgIC8vICAgICAgICAgMCwwLFxuICAgICAgICAvLyAgICAgICAgIDUwLDUwLFxuICAgICAgICAvLyAgICAgICAgIDAsMCxcbiAgICAgICAgLy8gICAgICAgICAyMDAsMjAwXG4gICAgICAgIC8vICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJuYW1lcyI6WyJHYW1lIiwiY29uc3RydWN0b3IiLCJkcmF3SG90cG90SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/meter.js":
/*!******************************!*\
  !*** ./src/scripts/meter.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   moveCircle: function() { return /* binding */ moveCircle; },\n/* harmony export */   stopMovingCircle: function() { return /* binding */ stopMovingCircle; }\n/* harmony export */ });\nconst circle = document.querySelector('.circle');\nconst meterWidth = 300;\nlet animationId;\nlet currentPosition = 0;\nlet moveSpeed = 1.5; // Setting to 3 for now but remember to change\nlet moveDirection = 'right';\nfunction moveCircle() {\n  if (moveDirection === 'right') {\n    currentPosition += moveSpeed;\n  } else {\n    currentPosition -= moveSpeed;\n  }\n  circle.style.left = `${currentPosition}px`;\n  if (currentPosition >= meterWidth - circle.clientWidth || currentPosition <= 0) {\n    moveDirection = moveDirection === 'right' ? 'left' : 'right';\n  }\n  animationId = requestAnimationFrame(moveCircle);\n}\nfunction stopMovingCircle() {\n  cancelAnimationFrame(animationId);\n}\nwindow.addEventListener('keydown', stopMovingCircle);\nmoveCircle();\n\n// Export the functions to use them in the main game logic (index.js)\n //check with TA. code functionality actually works fine without this line\n//after adding the export, the key doesn't work the first time it's pressed//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tZXRlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0FBQ2hELE1BQU1DLFVBQVUsR0FBRyxHQUFHO0FBQ3RCLElBQUlDLFdBQVc7QUFDZixJQUFJQyxlQUFlLEdBQUcsQ0FBQztBQUN2QixJQUFJQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDckIsSUFBSUMsYUFBYSxHQUFHLE9BQU87QUFFM0IsU0FBU0MsVUFBVUEsQ0FBQSxFQUFHO0VBQ3BCLElBQUlELGFBQWEsS0FBSyxPQUFPLEVBQUU7SUFDN0JGLGVBQWUsSUFBSUMsU0FBUztFQUM5QixDQUFDLE1BQU07SUFDTEQsZUFBZSxJQUFJQyxTQUFTO0VBQzlCO0VBRUFOLE1BQU0sQ0FBQ1MsS0FBSyxDQUFDQyxJQUFJLEdBQUksR0FBRUwsZUFBZ0IsSUFBRztFQUUxQyxJQUFJQSxlQUFlLElBQUlGLFVBQVUsR0FBR0gsTUFBTSxDQUFDVyxXQUFXLElBQUlOLGVBQWUsSUFBSSxDQUFDLEVBQUU7SUFDOUVFLGFBQWEsR0FBR0EsYUFBYSxLQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsT0FBTztFQUM5RDtFQUVBSCxXQUFXLEdBQUdRLHFCQUFxQixDQUFDSixVQUFVLENBQUM7QUFDakQ7QUFFQSxTQUFTSyxnQkFBZ0JBLENBQUEsRUFBRztFQUMxQkMsb0JBQW9CLENBQUNWLFdBQVcsQ0FBQztBQUNuQztBQUVBVyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBRUgsZ0JBQWdCLENBQUM7QUFDcERMLFVBQVUsQ0FBQyxDQUFDOztBQUVaO0FBQ3dDLENBQUM7QUFDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3QtcG90LWhvdHRpZS1tYWluLy4vc3JjL3NjcmlwdHMvbWV0ZXIuanM/ZDQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlJyk7XG5jb25zdCBtZXRlcldpZHRoID0gMzAwO1xubGV0IGFuaW1hdGlvbklkO1xubGV0IGN1cnJlbnRQb3NpdGlvbiA9IDA7XG5sZXQgbW92ZVNwZWVkID0gMS41OyAvLyBTZXR0aW5nIHRvIDMgZm9yIG5vdyBidXQgcmVtZW1iZXIgdG8gY2hhbmdlXG5sZXQgbW92ZURpcmVjdGlvbiA9ICdyaWdodCc7XG5cbmZ1bmN0aW9uIG1vdmVDaXJjbGUoKSB7XG4gIGlmIChtb3ZlRGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgY3VycmVudFBvc2l0aW9uICs9IG1vdmVTcGVlZDtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50UG9zaXRpb24gLT0gbW92ZVNwZWVkO1xuICB9XG5cbiAgY2lyY2xlLnN0eWxlLmxlZnQgPSBgJHtjdXJyZW50UG9zaXRpb259cHhgO1xuXG4gIGlmIChjdXJyZW50UG9zaXRpb24gPj0gbWV0ZXJXaWR0aCAtIGNpcmNsZS5jbGllbnRXaWR0aCB8fCBjdXJyZW50UG9zaXRpb24gPD0gMCkge1xuICAgIG1vdmVEaXJlY3Rpb24gPSBtb3ZlRGlyZWN0aW9uID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgfVxuXG4gIGFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1vdmVDaXJjbGUpO1xufVxuXG5mdW5jdGlvbiBzdG9wTW92aW5nQ2lyY2xlKCkge1xuICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc3RvcE1vdmluZ0NpcmNsZSk7XG5tb3ZlQ2lyY2xlKCk7XG5cbi8vIEV4cG9ydCB0aGUgZnVuY3Rpb25zIHRvIHVzZSB0aGVtIGluIHRoZSBtYWluIGdhbWUgbG9naWMgKGluZGV4LmpzKVxuZXhwb3J0IHsgbW92ZUNpcmNsZSwgc3RvcE1vdmluZ0NpcmNsZSB9OyAvL2NoZWNrIHdpdGggVEEuIGNvZGUgZnVuY3Rpb25hbGl0eSBhY3R1YWxseSB3b3JrcyBmaW5lIHdpdGhvdXQgdGhpcyBsaW5lXG4vL2FmdGVyIGFkZGluZyB0aGUgZXhwb3J0LCB0aGUga2V5IGRvZXNuJ3Qgd29yayB0aGUgZmlyc3QgdGltZSBpdCdzIHByZXNzZWRcbiJdLCJuYW1lcyI6WyJjaXJjbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZXRlcldpZHRoIiwiYW5pbWF0aW9uSWQiLCJjdXJyZW50UG9zaXRpb24iLCJtb3ZlU3BlZWQiLCJtb3ZlRGlyZWN0aW9uIiwibW92ZUNpcmNsZSIsInN0eWxlIiwibGVmdCIsImNsaWVudFdpZHRoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RvcE1vdmluZ0NpcmNsZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/meter.js\n");

/***/ }),

/***/ "./src/scripts/order.js":
/*!******************************!*\
  !*** ./src/scripts/order.js ***!
  \******************************/
/***/ (function() {

eval("const foodItems = {\n  sausage: 'sausage.png',\n  mushroom: 'mushroom.jpg',\n  //update to png\n  shrimp: 'shrimp.jpg',\n  //update to png\n  fishball: 'fishball.png',\n  meatball: 'meatball.png',\n  dumpling: 'dumpling.png',\n  bokchoy: 'bokchoy.png',\n  tofu: 'tofu.jpg' //update to png\n};\n\n// Function to randomly select an image key from the foodItems object\nfunction getRandomImageKey() {\n  const keys = Object.keys(foodItems);\n  const randomIndex = Math.floor(Math.random() * keys.length);\n  return keys[randomIndex];\n}\n\n// Function to display the selected image in the speech-bubble div\nfunction displayRandomImage() {\n  const speechBubble = document.getElementById('speech-bubble');\n  const imageKey = getRandomImageKey();\n  const imageName = foodItems[imageKey];\n  const imageSrc = `/assets/food-icons/${imageName}`;\n  const imageElement = document.createElement('img');\n  imageElement.src = imageSrc;\n  imageElement.alt = imageKey;\n  // imageElement.id = imageKey + \"prompt\"; do I need this\n\n  speechBubble.innerHTML = ''; // Clear existing content\n  speechBubble.appendChild(imageElement);\n}\n\n// Call the displayRandomImage function to show the initial random image\ndisplayRandomImage();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vcmRlci5qcyIsIm5hbWVzIjpbImZvb2RJdGVtcyIsInNhdXNhZ2UiLCJtdXNocm9vbSIsInNocmltcCIsImZpc2hiYWxsIiwibWVhdGJhbGwiLCJkdW1wbGluZyIsImJva2Nob3kiLCJ0b2Z1IiwiZ2V0UmFuZG9tSW1hZ2VLZXkiLCJrZXlzIiwiT2JqZWN0IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJkaXNwbGF5UmFuZG9tSW1hZ2UiLCJzcGVlY2hCdWJibGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW1hZ2VLZXkiLCJpbWFnZU5hbWUiLCJpbWFnZVNyYyIsImltYWdlRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhbHQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90LXBvdC1ob3R0aWUtbWFpbi8uL3NyYy9zY3JpcHRzL29yZGVyLmpzP2I4MjciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9vZEl0ZW1zID0ge1xuICAgIHNhdXNhZ2U6ICdzYXVzYWdlLnBuZycsXG4gICAgbXVzaHJvb206ICdtdXNocm9vbS5qcGcnLC8vdXBkYXRlIHRvIHBuZ1xuICAgIHNocmltcDogJ3NocmltcC5qcGcnLC8vdXBkYXRlIHRvIHBuZ1xuICAgIGZpc2hiYWxsOiAnZmlzaGJhbGwucG5nJyxcbiAgICBtZWF0YmFsbDogJ21lYXRiYWxsLnBuZycsXG4gICAgZHVtcGxpbmc6ICdkdW1wbGluZy5wbmcnLFxuICAgIGJva2Nob3k6ICdib2tjaG95LnBuZycsXG4gICAgdG9mdTogJ3RvZnUuanBnJywgLy91cGRhdGUgdG8gcG5nXG59O1xuXG4vLyBGdW5jdGlvbiB0byByYW5kb21seSBzZWxlY3QgYW4gaW1hZ2Uga2V5IGZyb20gdGhlIGZvb2RJdGVtcyBvYmplY3RcbmZ1bmN0aW9uIGdldFJhbmRvbUltYWdlS2V5KCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmb29kSXRlbXMpO1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoga2V5cy5sZW5ndGgpO1xuICAgIHJldHVybiBrZXlzW3JhbmRvbUluZGV4XTtcbiAgfVxuICBcbiAgLy8gRnVuY3Rpb24gdG8gZGlzcGxheSB0aGUgc2VsZWN0ZWQgaW1hZ2UgaW4gdGhlIHNwZWVjaC1idWJibGUgZGl2XG4gIGZ1bmN0aW9uIGRpc3BsYXlSYW5kb21JbWFnZSgpIHtcbiAgICBjb25zdCBzcGVlY2hCdWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlZWNoLWJ1YmJsZScpO1xuICAgIGNvbnN0IGltYWdlS2V5ID0gZ2V0UmFuZG9tSW1hZ2VLZXkoKTtcbiAgICBjb25zdCBpbWFnZU5hbWUgPSBmb29kSXRlbXNbaW1hZ2VLZXldO1xuICAgIGNvbnN0IGltYWdlU3JjID0gYC9hc3NldHMvZm9vZC1pY29ucy8ke2ltYWdlTmFtZX1gO1xuICBcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZUVsZW1lbnQuc3JjID0gaW1hZ2VTcmM7XG4gICAgaW1hZ2VFbGVtZW50LmFsdCA9IGltYWdlS2V5O1xuICAgIC8vIGltYWdlRWxlbWVudC5pZCA9IGltYWdlS2V5ICsgXCJwcm9tcHRcIjsgZG8gSSBuZWVkIHRoaXNcbiAgXG4gICAgc3BlZWNoQnViYmxlLmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XG4gICAgc3BlZWNoQnViYmxlLmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG4gIH1cbiAgXG4gIC8vIENhbGwgdGhlIGRpc3BsYXlSYW5kb21JbWFnZSBmdW5jdGlvbiB0byBzaG93IHRoZSBpbml0aWFsIHJhbmRvbSBpbWFnZVxuICBkaXNwbGF5UmFuZG9tSW1hZ2UoKTsiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFNBQVMsR0FBRztFQUNkQyxPQUFPLEVBQUUsYUFBYTtFQUN0QkMsUUFBUSxFQUFFLGNBQWM7RUFBQztFQUN6QkMsTUFBTSxFQUFFLFlBQVk7RUFBQztFQUNyQkMsUUFBUSxFQUFFLGNBQWM7RUFDeEJDLFFBQVEsRUFBRSxjQUFjO0VBQ3hCQyxRQUFRLEVBQUUsY0FBYztFQUN4QkMsT0FBTyxFQUFFLGFBQWE7RUFDdEJDLElBQUksRUFBRSxVQUFVLENBQUU7QUFDdEIsQ0FBQzs7QUFFRDtBQUNBLFNBQVNDLGlCQUFpQkEsQ0FBQSxFQUFHO0VBQ3pCLE1BQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFJLENBQUNWLFNBQVMsQ0FBQztFQUNuQyxNQUFNWSxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdMLElBQUksQ0FBQ00sTUFBTSxDQUFDO0VBQzNELE9BQU9OLElBQUksQ0FBQ0UsV0FBVyxDQUFDO0FBQzFCOztBQUVBO0FBQ0EsU0FBU0ssa0JBQWtCQSxDQUFBLEVBQUc7RUFDNUIsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7RUFDN0QsTUFBTUMsUUFBUSxHQUFHWixpQkFBaUIsQ0FBQyxDQUFDO0VBQ3BDLE1BQU1hLFNBQVMsR0FBR3RCLFNBQVMsQ0FBQ3FCLFFBQVEsQ0FBQztFQUNyQyxNQUFNRSxRQUFRLEdBQUksc0JBQXFCRCxTQUFVLEVBQUM7RUFFbEQsTUFBTUUsWUFBWSxHQUFHTCxRQUFRLENBQUNNLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbERELFlBQVksQ0FBQ0UsR0FBRyxHQUFHSCxRQUFRO0VBQzNCQyxZQUFZLENBQUNHLEdBQUcsR0FBR04sUUFBUTtFQUMzQjs7RUFFQUgsWUFBWSxDQUFDVSxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUM7RUFDN0JWLFlBQVksQ0FBQ1csV0FBVyxDQUFDTCxZQUFZLENBQUM7QUFDeEM7O0FBRUE7QUFDQVAsa0JBQWtCLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/scripts/order.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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