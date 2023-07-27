import moveArmToFood from './arms.js';
import { showX, resetKeyPressedFlag } from './game.js';

const circle = document.querySelector('.circle');
const meterWidth = 300;
let animationId;
let currentPosition = 0;
let moveSpeed = 2; // Setting to 3 for now but remember to change
let moveDirection = 'right';
let isCircleInDesiredRange = false;

function moveCircle() {
  if (moveDirection === 'right') {
    currentPosition += moveSpeed;
  } else {
    currentPosition -= moveSpeed;
  }

  circle.style.left = `${currentPosition}px`;

  isCircleInDesiredRange = currentPosition >= 125 && currentPosition <= 160;

  if (currentPosition >= meterWidth - circle.clientWidth || currentPosition <= 0) {
    moveDirection = moveDirection === 'right' ? 'left' : 'right';
  }

  animationId = requestAnimationFrame(moveCircle);
}

function stopMovingCircle() {
  cancelAnimationFrame(animationId);
  const circleLeftPosition = parseFloat(circle.style.left);
  const displayedImageKey = document.querySelector('#speech-bubble img')?.dataset?.key ?? '';
  if (circleLeftPosition < 125 || circleLeftPosition > 160) {
    // const displayedImageKey = document.querySelector('#speech-bubble img').dataset.key;
    showX(displayedImageKey);
  }
  // const displayedImageKey = document.querySelector('#speech-bubble img').dataset.key;
  // setTimeout(() => {
  //   moveArmToNewPosition(displayedImageKey);
  // }, 500); // making the animation run async
}

function displayMeter() {
  const meter = document.getElementById('meter');
  meter.style.display = 'block';
}

function turnMeterColor() {
  const progressBar = document.querySelector('.progress');
  if (isCircleInDesiredRange) {
    progressBar.style.background = 'green';
  } else {
    progressBar.style.background = 'red';
    showX();
  }
  setTimeout(() => {
    meter.style.display = 'none';
    resetMeterAnimation();
  }, 500);
}

function resetMeterAnimation() {
  const progressBar = document.querySelector('.progress');
  const gradientValue = 'linear-gradient(to right, red 35%, green 45%, green 55%, red 65%)';

  progressBar.style.background = gradientValue;
  currentPosition = 0; // Reset the current position of the circle
  moveDirection = 'right'; // Reset the direction of movement to right
  moveCircle(); // Start the meter animation again
}

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  const displayedImageKey = document.querySelector('#speech-bubble img').dataset.key;
  if (keyPressed === displayedImageKey) {
    displayMeter();
  } else {
    showX();
  }
});

document.addEventListener('keyup', () => {
  stopMovingCircle();
  turnMeterColor()
});

moveCircle();

// Export the functions to use them in the main game logic (index.js)
export { moveCircle, stopMovingCircle }; 

