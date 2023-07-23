import { handlePickUpFood, handleDropFood } from './scripts/foodInteractions';

document.addEventListener('DOMContentLoaded', () => {
    // Your game setup and initialization code here
  
    // Add event listeners for user interactions, e.g., adding food to the hotpot
});

// Event listener to detect when the player presses a key for picking up the food
document.addEventListener('keydown', (event) => {
    const keyPressed = event.key;
    // Check if the pressed key corresponds to any food type
    if (keyPressed === 'W' || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D') {
      handlePickUpFood(keyPressed);
    }
});

  // Event listener to detect when the player releases a key for dropping the food
document.addEventListener('keyup', (event) => {
    const keyReleased = event.key;
    // Check if the released key corresponds to any food type
    if (keyPressed === 'W' || keyPressed === 'A' || keyPressed === 'S' || keyPressed === 'D') {
      handleDropFood(keyReleased);
    }
});