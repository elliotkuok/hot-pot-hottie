import { handlePickUpFood, handleDropFood } from './scripts/foodInteractions';
import Game from './scripts/game.js';
import { moveCircle, stopMovingCircle } from './scripts/meter.js';
import './index.scss';
import './scripts/order.js';

document.addEventListener('DOMContentLoaded', () => {
    // Your game setup and initialization code here
  
    // Add event listeners for user interactions, e.g., adding food to the hotpot

    const game = new Game();
    const hotpot = document.getElementById('hotpot');

    // Ensure the image is loaded before calling drawHotpotImage
    hotpot.onload = () => {
    game.drawHotpotImage(hotpot);
    };

});