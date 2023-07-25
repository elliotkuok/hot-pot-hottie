

// // Function to handle picking up the food when the corresponding key is pressed
// function handlePickUpFood(foodType) {
//     // logic to pick up the food and display it in the player's hand
//   }
  
// // Function to handle dropping the food into the hotpot when the corresponding key is released
// function handleDropFood(foodType) {
//   // logic to drop the food into the hotpot and check if it was successful
//   // Update the hotpot's state based on the food's success or failure
// }
  
// // Event listener to detect when the player presses a key for picking up the food
// document.addEventListener('keydown', (event) => {
//   //change code to make event listener track if the circle was stopped at the right spot on the bar
//   const keyPressed = event.key;
//   // Check if the pressed key corresponds to any food type
//   if (keyPressed === 'W' || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D') {
//     handlePickUpFood(keyPressed);
//   }
// });

// // Event listener to detect when the player releases a key for dropping the food
// document.addEventListener('keyup', (event) => {
//   const keyReleased = event.key;
//   // Check if the released key corresponds to any food type
//   if (keyPressed === 'W' || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D') {
//     handleDropFood(keyReleased);
//   }
// });

// // Export the functions to use them in the main game logic (index.js)
// export { handlePickUpFood, handleDropFood };