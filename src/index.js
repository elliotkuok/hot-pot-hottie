import './index.scss';
import { displayRandomImage, isKeyPressed, hideTimerBar, setIsKeyPressed, startTimer, getTimerId, setTimerId, showSpeechBubble } from './scripts/order.js';
import { moveArmToFood, moveArmToHotPot } from './scripts/arms.js';
import { showX, isMatchingKeyPressed, resetKeyPressedFlag, hideIntroduction, startGame, showGameOverModal, hideGameOverModal, restartGame, isKeyDown, keyPressedSinceLastX, setIsMatchingKeyPressed, setIsKeyDown, setKeyPressedSinceLastX, xCount  } from './scripts/game.js';
import { moveCircle, stopMovingCircle, displayMeter, turnMeterColor } from './scripts/meter.js';

document.addEventListener('DOMContentLoaded', () => {
  // Your game setup and initialization code here

  // Add event listeners for user interactions, e.g., adding food to the hotpot
  document.addEventListener('keydown', (event) => {
    const keyPressed = event.key;
    const displayedImageElement = document.querySelector('#speech-bubble img');
    const displayedImageKey = displayedImageElement ? displayedImageElement.dataset.key : null;
    const speechBubble = document.getElementById('speech-bubble');

    if (keyPressed === displayedImageKey) {
      moveArmToFood(keyPressed);
      displayMeter();
      setIsKeyDown(true);
      setIsMatchingKeyPressed(true);
      setIsKeyPressed(true);
      speechBubble.style.background = '#66FF99';
    } else {
      showX();
      setIsKeyDown(true);
      setIsKeyPressed(true);
      setIsMatchingKeyPressed(false);
      speechBubble.style.background = '#DD2C00';
    }
    hideTimerBar();
    if (xCount === 3) {
        showGameOverModal();
    }
  });

  document.addEventListener('keyup', (event) => {
    const keyLifted = event.key;
    const displayedImageElement = document.querySelector('#speech-bubble img');
    const displayedImageKey = displayedImageElement ? displayedImageElement.dataset.key : null;

    if (keyLifted === displayedImageKey) {
        moveArmToHotPot();
    }
    stopMovingCircle();
    turnMeterColor();
    hideTimerBar();
    setKeyPressedSinceLastX(true);
    setIsKeyDown(false);
    setIsKeyPressed(false); 
    setIsMatchingKeyPressed(false);

    const currentTimerId = getTimerId();
    if (currentTimerId !== null) {
        clearInterval(currentTimerId);
        setTimerId(null);
    }

    setTimeout(() => {
        showSpeechBubble();
      }, 2000);
  });
});
