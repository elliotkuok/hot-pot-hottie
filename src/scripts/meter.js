import moveArmToFood from './arms.js';
import { giveX, resetKeyPressedFlag } from './game.js';

const circle = document.querySelector('.circle');
const meterWidth = 300;
let animationId;
let currentPosition = 0;
let moveSpeed = 2;
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
    isCircleInDesiredRange = false;
    console.log("x from moving circle")
    giveX();
  } else {
    isCircleInDesiredRange = true;
  }
 
}

function displayMeter() {
  const meter = document.getElementById('meter');
  meter.style.display = 'block';
}

function turnMeterColor() {
  const progressBar = document.querySelector('.progress');
  if (isCircleInDesiredRange) {
    progressBar.style.background = '#66FF99';
    progressBar.style.border = 'yellow';
  } else {
    progressBar.style.background = '#DD2C00';
  }
  setTimeout(() => {
    meter.style.display = 'none';
    resetMeterAnimation();
  }, 500);
}

function resetMeterAnimation() {
  const progressBar = document.querySelector('.progress');
  const gradientValue = 'linear-gradient(to right, #DD2C00 35%, #66FF99 45%, #66FF99 55%, #DD2C00 65%)';

  progressBar.style.background = gradientValue;
  currentPosition = 0;
  moveDirection = 'right';
  moveCircle(); // Start the meter animation again
}

moveCircle();

export { moveCircle, stopMovingCircle, displayMeter, turnMeterColor }; 

