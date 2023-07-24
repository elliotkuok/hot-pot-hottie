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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_foodInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/foodInteractions */ \"./src/scripts/foodInteractions.js\");\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_meter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/meter.js */ \"./src/scripts/meter.js\");\n/* harmony import */ var _scripts_meter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_meter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Your game setup and initialization code here\n\n  // Add event listeners for user interactions, e.g., adding food to the hotpot\n\n  const game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  const hotpot = document.getElementById('hotpot');\n\n  // Ensure the image is loaded before calling drawHotpotImage\n  hotpot.onload = () => {\n    game.drawHotpotImage(hotpot);\n  };\n  window.addEventListener('keydown', _scripts_meter_js__WEBPACK_IMPORTED_MODULE_2__.stopMovingCircle);\n  (0,_scripts_meter_js__WEBPACK_IMPORTED_MODULE_2__.moveCircle)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThFO0FBQ3pDO0FBQzZCO0FBQzVDO0FBRXRCSyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQ7O0VBRUE7O0VBRUEsTUFBTUMsSUFBSSxHQUFHLElBQUlMLHdEQUFJLENBQUMsQ0FBQztFQUN2QixNQUFNTSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksY0FBYyxDQUFDLFFBQVEsQ0FBQzs7RUFFaEQ7RUFDQUQsTUFBTSxDQUFDRSxNQUFNLEdBQUcsTUFBTTtJQUN0QkgsSUFBSSxDQUFDSSxlQUFlLENBQUNILE1BQU0sQ0FBQztFQUM1QixDQUFDO0VBRURJLE1BQU0sQ0FBQ04sZ0JBQWdCLENBQUMsU0FBUyxFQUFFRiwrREFBZ0IsQ0FBQztFQUNwREQsNkRBQVUsQ0FBQyxDQUFDO0FBRWhCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvdC1wb3QtaG90dGllLW1haW4vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVQaWNrVXBGb29kLCBoYW5kbGVEcm9wRm9vZCB9IGZyb20gJy4vc2NyaXB0cy9mb29kSW50ZXJhY3Rpb25zJztcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lLmpzJztcbmltcG9ydCB7IG1vdmVDaXJjbGUsIHN0b3BNb3ZpbmdDaXJjbGUgfSBmcm9tICcuL3NjcmlwdHMvbWV0ZXIuanMnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8vIFlvdXIgZ2FtZSBzZXR1cCBhbmQgaW5pdGlhbGl6YXRpb24gY29kZSBoZXJlXG4gIFxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIHVzZXIgaW50ZXJhY3Rpb25zLCBlLmcuLCBhZGRpbmcgZm9vZCB0byB0aGUgaG90cG90XG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBjb25zdCBob3Rwb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG90cG90Jyk7XG5cbiAgICAvLyBFbnN1cmUgdGhlIGltYWdlIGlzIGxvYWRlZCBiZWZvcmUgY2FsbGluZyBkcmF3SG90cG90SW1hZ2VcbiAgICBob3Rwb3Qub25sb2FkID0gKCkgPT4ge1xuICAgIGdhbWUuZHJhd0hvdHBvdEltYWdlKGhvdHBvdCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc3RvcE1vdmluZ0NpcmNsZSk7XG4gICAgbW92ZUNpcmNsZSgpO1xuXG59KTsiXSwibmFtZXMiOlsiaGFuZGxlUGlja1VwRm9vZCIsImhhbmRsZURyb3BGb29kIiwiR2FtZSIsIm1vdmVDaXJjbGUiLCJzdG9wTW92aW5nQ2lyY2xlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZSIsImhvdHBvdCIsImdldEVsZW1lbnRCeUlkIiwib25sb2FkIiwiZHJhd0hvdHBvdEltYWdlIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/foodInteractions.js":
/*!*****************************************!*\
  !*** ./src/scripts/foodInteractions.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleDropFood: function() { return /* binding */ handleDropFood; },\n/* harmony export */   handlePickUpFood: function() { return /* binding */ handlePickUpFood; }\n/* harmony export */ });\n// Function to handle picking up the food when the corresponding key is pressed\nfunction handlePickUpFood(foodType) {\n  // logic to pick up the food and display it in the player's hand\n}\n\n// Function to handle dropping the food into the hotpot when the corresponding key is released\nfunction handleDropFood(foodType) {\n  // logic to drop the food into the hotpot and check if it was successful\n  // Update the hotpot's state based on the food's success or failure\n}\n\n// Event listener to detect when the player presses a key for picking up the food\ndocument.addEventListener('keydown', event => {\n  const keyPressed = event.key;\n  // Check if the pressed key corresponds to any food type\n  if (keyPressed === 'W' || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D') {\n    handlePickUpFood(keyPressed);\n  }\n});\n\n// Event listener to detect when the player releases a key for dropping the food\ndocument.addEventListener('keyup', event => {\n  const keyReleased = event.key;\n  // Check if the released key corresponds to any food type\n  if (keyPressed === 'W' || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D') {\n    handleDropFood(keyReleased);\n  }\n});\n\n// Export the functions to use them in the main game logic (index.js)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mb29kSW50ZXJhY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFDQSxTQUFTQSxnQkFBZ0JBLENBQUNDLFFBQVEsRUFBRTtFQUNoQztBQUFBOztBQUdKO0FBQ0EsU0FBU0MsY0FBY0EsQ0FBQ0QsUUFBUSxFQUFFO0VBQ2hDO0VBQ0E7QUFBQTs7QUFHRjtBQUNBRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBR0MsS0FBSyxJQUFLO0VBQzlDLE1BQU1DLFVBQVUsR0FBR0QsS0FBSyxDQUFDRSxHQUFHO0VBQzVCO0VBQ0EsSUFBSUQsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsRUFBRTtJQUN4Rk4sZ0JBQWdCLENBQUNNLFVBQVUsQ0FBQztFQUM5QjtBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBSCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsS0FBSyxJQUFLO0VBQzVDLE1BQU1HLFdBQVcsR0FBR0gsS0FBSyxDQUFDRSxHQUFHO0VBQzdCO0VBQ0EsSUFBSUQsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsSUFBSUEsVUFBVSxLQUFLLEdBQUcsRUFBRTtJQUN4RkosY0FBYyxDQUFDTSxXQUFXLENBQUM7RUFDN0I7QUFDRixDQUFDLENBQUM7O0FBRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3QtcG90LWhvdHRpZS1tYWluLy4vc3JjL3NjcmlwdHMvZm9vZEludGVyYWN0aW9ucy5qcz9lYWVlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgcGlja2luZyB1cCB0aGUgZm9vZCB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIGtleSBpcyBwcmVzc2VkXG5mdW5jdGlvbiBoYW5kbGVQaWNrVXBGb29kKGZvb2RUeXBlKSB7XG4gICAgLy8gbG9naWMgdG8gcGljayB1cCB0aGUgZm9vZCBhbmQgZGlzcGxheSBpdCBpbiB0aGUgcGxheWVyJ3MgaGFuZFxuICB9XG4gIFxuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGRyb3BwaW5nIHRoZSBmb29kIGludG8gdGhlIGhvdHBvdCB3aGVuIHRoZSBjb3JyZXNwb25kaW5nIGtleSBpcyByZWxlYXNlZFxuZnVuY3Rpb24gaGFuZGxlRHJvcEZvb2QoZm9vZFR5cGUpIHtcbiAgLy8gbG9naWMgdG8gZHJvcCB0aGUgZm9vZCBpbnRvIHRoZSBob3Rwb3QgYW5kIGNoZWNrIGlmIGl0IHdhcyBzdWNjZXNzZnVsXG4gIC8vIFVwZGF0ZSB0aGUgaG90cG90J3Mgc3RhdGUgYmFzZWQgb24gdGhlIGZvb2QncyBzdWNjZXNzIG9yIGZhaWx1cmVcbn1cbiAgXG4vLyBFdmVudCBsaXN0ZW5lciB0byBkZXRlY3Qgd2hlbiB0aGUgcGxheWVyIHByZXNzZXMgYSBrZXkgZm9yIHBpY2tpbmcgdXAgdGhlIGZvb2RcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgY29uc3Qga2V5UHJlc3NlZCA9IGV2ZW50LmtleTtcbiAgLy8gQ2hlY2sgaWYgdGhlIHByZXNzZWQga2V5IGNvcnJlc3BvbmRzIHRvIGFueSBmb29kIHR5cGVcbiAgaWYgKGtleVByZXNzZWQgPT09ICdXJyB8fCBrZXlQcmVzc2VkID09PSAnQScgfHwga2V5UHJlc3NlZCA9PT0gJ1MnIHx8IGtleVByZXNzZWQgPT09ICdEJykge1xuICAgIGhhbmRsZVBpY2tVcEZvb2Qoa2V5UHJlc3NlZCk7XG4gIH1cbn0pO1xuXG4vLyBFdmVudCBsaXN0ZW5lciB0byBkZXRlY3Qgd2hlbiB0aGUgcGxheWVyIHJlbGVhc2VzIGEga2V5IGZvciBkcm9wcGluZyB0aGUgZm9vZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgY29uc3Qga2V5UmVsZWFzZWQgPSBldmVudC5rZXk7XG4gIC8vIENoZWNrIGlmIHRoZSByZWxlYXNlZCBrZXkgY29ycmVzcG9uZHMgdG8gYW55IGZvb2QgdHlwZVxuICBpZiAoa2V5UHJlc3NlZCA9PT0gJ1cnIHx8IGtleVByZXNzZWQgPT09ICdBJyB8fCBrZXlQcmVzc2VkID09PSAnUycgfHwga2V5UHJlc3NlZCA9PT0gJ0QnKSB7XG4gICAgaGFuZGxlRHJvcEZvb2Qoa2V5UmVsZWFzZWQpO1xuICB9XG59KTtcblxuLy8gRXhwb3J0IHRoZSBmdW5jdGlvbnMgdG8gdXNlIHRoZW0gaW4gdGhlIG1haW4gZ2FtZSBsb2dpYyAoaW5kZXguanMpXG5leHBvcnQgeyBoYW5kbGVQaWNrVXBGb29kLCBoYW5kbGVEcm9wRm9vZCB9OyJdLCJuYW1lcyI6WyJoYW5kbGVQaWNrVXBGb29kIiwiZm9vZFR5cGUiLCJoYW5kbGVEcm9wRm9vZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5UHJlc3NlZCIsImtleSIsImtleVJlbGVhc2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/foodInteractions.js\n");

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
/***/ (function() {

eval("const circle = document.querySelector('.circle');\nconst meterWidth = 300;\nlet animationId;\nlet currentPosition = 0;\nlet moveSpeed = 3; // Setting to 3 for now but remember to change\nlet moveDirection = 'right';\nfunction moveCircle() {\n  if (moveDirection === 'right') {\n    currentPosition += moveSpeed;\n  } else {\n    currentPosition -= moveSpeed;\n  }\n  circle.style.left = `${currentPosition}px`;\n  if (currentPosition >= meterWidth - circle.clientWidth || currentPosition <= 0) {\n    moveDirection = moveDirection === 'right' ? 'left' : 'right';\n  }\n  animationId = requestAnimationFrame(moveCircle);\n}\nfunction stopMovingCircle() {\n  cancelAnimationFrame(animationId);\n}\nwindow.addEventListener('keydown', stopMovingCircle);\nmoveCircle();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tZXRlci5qcyIsIm5hbWVzIjpbImNpcmNsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1ldGVyV2lkdGgiLCJhbmltYXRpb25JZCIsImN1cnJlbnRQb3NpdGlvbiIsIm1vdmVTcGVlZCIsIm1vdmVEaXJlY3Rpb24iLCJtb3ZlQ2lyY2xlIiwic3R5bGUiLCJsZWZ0IiwiY2xpZW50V2lkdGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdG9wTW92aW5nQ2lyY2xlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3QtcG90LWhvdHRpZS1tYWluLy4vc3JjL3NjcmlwdHMvbWV0ZXIuanM/ZDQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlJyk7XG5jb25zdCBtZXRlcldpZHRoID0gMzAwO1xubGV0IGFuaW1hdGlvbklkO1xubGV0IGN1cnJlbnRQb3NpdGlvbiA9IDA7XG5sZXQgbW92ZVNwZWVkID0gMzsgLy8gU2V0dGluZyB0byAzIGZvciBub3cgYnV0IHJlbWVtYmVyIHRvIGNoYW5nZVxubGV0IG1vdmVEaXJlY3Rpb24gPSAncmlnaHQnO1xuXG5mdW5jdGlvbiBtb3ZlQ2lyY2xlKCkge1xuICBpZiAobW92ZURpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgIGN1cnJlbnRQb3NpdGlvbiArPSBtb3ZlU3BlZWQ7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBvc2l0aW9uIC09IG1vdmVTcGVlZDtcbiAgfVxuXG4gIGNpcmNsZS5zdHlsZS5sZWZ0ID0gYCR7Y3VycmVudFBvc2l0aW9ufXB4YDtcblxuICBpZiAoY3VycmVudFBvc2l0aW9uID49IG1ldGVyV2lkdGggLSBjaXJjbGUuY2xpZW50V2lkdGggfHwgY3VycmVudFBvc2l0aW9uIDw9IDApIHtcbiAgICBtb3ZlRGlyZWN0aW9uID0gbW92ZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gIH1cblxuICBhbmltYXRpb25JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShtb3ZlQ2lyY2xlKTtcbn1cblxuZnVuY3Rpb24gc3RvcE1vdmluZ0NpcmNsZSgpIHtcbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0b3BNb3ZpbmdDaXJjbGUpO1xubW92ZUNpcmNsZSgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztBQUNoRCxNQUFNQyxVQUFVLEdBQUcsR0FBRztBQUN0QixJQUFJQyxXQUFXO0FBQ2YsSUFBSUMsZUFBZSxHQUFHLENBQUM7QUFDdkIsSUFBSUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25CLElBQUlDLGFBQWEsR0FBRyxPQUFPO0FBRTNCLFNBQVNDLFVBQVVBLENBQUEsRUFBRztFQUNwQixJQUFJRCxhQUFhLEtBQUssT0FBTyxFQUFFO0lBQzdCRixlQUFlLElBQUlDLFNBQVM7RUFDOUIsQ0FBQyxNQUFNO0lBQ0xELGVBQWUsSUFBSUMsU0FBUztFQUM5QjtFQUVBTixNQUFNLENBQUNTLEtBQUssQ0FBQ0MsSUFBSSxHQUFJLEdBQUVMLGVBQWdCLElBQUc7RUFFMUMsSUFBSUEsZUFBZSxJQUFJRixVQUFVLEdBQUdILE1BQU0sQ0FBQ1csV0FBVyxJQUFJTixlQUFlLElBQUksQ0FBQyxFQUFFO0lBQzlFRSxhQUFhLEdBQUdBLGFBQWEsS0FBSyxPQUFPLEdBQUcsTUFBTSxHQUFHLE9BQU87RUFDOUQ7RUFFQUgsV0FBVyxHQUFHUSxxQkFBcUIsQ0FBQ0osVUFBVSxDQUFDO0FBQ2pEO0FBRUEsU0FBU0ssZ0JBQWdCQSxDQUFBLEVBQUc7RUFDMUJDLG9CQUFvQixDQUFDVixXQUFXLENBQUM7QUFDbkM7QUFFQVcsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVILGdCQUFnQixDQUFDO0FBQ3BETCxVQUFVLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/scripts/meter.js\n");

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