import moveArmToFood from './arms.js';

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
  // const displayedImageKey = document.querySelector('#speech-bubble img').dataset.key;
  // setTimeout(() => {
  //   moveArmToNewPosition(displayedImageKey);
  // }, 500); // making the animation run async
}

function displayMeter() {
  const meter = document.getElementById('meter');
  meter.style.display = 'block';
}

function turnMeterGreen() {
  if (isCircleInDesiredRange) {
    const progressBar = document.querySelector('.progress');
    progressBar.style.background = 'green';
    setTimeout(() => {
      meter.style.display = 'none';
    }, 500);
  }
}

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  const displayedImageKey = document.querySelector('#speech-bubble img').dataset.key;
  if (keyPressed === displayedImageKey) {
    displayMeter();
    // moveArmToNewPosition(keyPressed); //only if not async
  }
});

document.addEventListener('keyup', () => {
  stopMovingCircle();
  turnMeterGreen()
});

moveCircle();

// Export the functions to use them in the main game logic (index.js)
export { moveCircle, stopMovingCircle }; 

