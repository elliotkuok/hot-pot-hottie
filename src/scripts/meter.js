import moveArmsToNewPosition from './arms.js';

const circle = document.querySelector('.circle');
const meterWidth = 300;
let animationId;
let currentPosition = 0;
let moveSpeed = 2; // Setting to 3 for now but remember to change
let moveDirection = 'right';

function moveCircle() {
  if (moveDirection === 'right') {
    currentPosition += moveSpeed;
  } else {
    currentPosition -= moveSpeed;
  }

  circle.style.left = `${currentPosition}px`;

  if (currentPosition >= meterWidth - circle.clientWidth || currentPosition <= 0) {
    moveDirection = moveDirection === 'right' ? 'left' : 'right';
  }

  animationId = requestAnimationFrame(moveCircle);
}

function stopMovingCircle() {
  cancelAnimationFrame(animationId);
  const displayedImageKey = document.querySelector('#speech-bubble img').dataset.key;
  setTimeout(() => {
    moveArmsToNewPosition(displayedImageKey);
  }, 500);
}

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  const displayedImageKey = document.querySelector('#speech-bubble img').dataset.key;
  if (keyPressed === displayedImageKey) {
    stopMovingCircle();
    // moveArmsToNewPosition(keyPressed); //only if nt async
  }
});

moveCircle();

// Export the functions to use them in the main game logic (index.js)
export { moveCircle, stopMovingCircle }; 

