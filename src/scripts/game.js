import { displayRandomImage, stopTimer, hideSpeechBubble, showSpeechBubble } from './order.js';

let xCount = 0;
let isKeyDown = false;
let keyPressedSinceLastX = false;
let isMatchingKeyPressed = false;

function setIsKeyDown(value) {
  isKeyDown = value;
}

function setKeyPressedSinceLastX(value) {
  keyPressedSinceLastX = value;
}

function setIsMatchingKeyPressed(value) {
  isMatchingKeyPressed = value;
}

// function shouldShowX() {
//   // if they pressed a key AND the key press failed (wrong key / wrong timing)
//   // OR if they didn't even press a key at all
//     if ((keyPressedSinceLastX && !isMatchingKeyPressed)) {
//       giveX();
//     }
// }

function giveX() {
  const gameCanvas = document.getElementById('game-canvas');
  let missed = gameCanvas.querySelector('.missed');
  if (xCount < 3) {
    if (!missed) {
      missed = document.createElement('div');
      missed.innerText = 'X';
      missed.className = 'missed';
      missed.style.position = 'absolute';
      missed.style.bottom = '5px';
      missed.style.color = '#DD2C00';
      missed.style.fontFamily = 'Nerko One';
      missed.style.fontSize = '60px';
      gameCanvas.appendChild(missed);
    } else {
      missed.innerText += 'X';
    }
    xCount++;
    keyPressedSinceLastX = false;
    if (xCount === 3) {
      showGameOverModal();
    }
  }
}

function resetKeyPressedFlag() {
  keyPressedSinceLastX = false;
  isMatchingKeyPressed = false;
}

function hideIntroduction() {
  const introductionDiv = document.getElementById('introduction');
  introductionDiv.style.display = 'none';
}

function startGame() {
  hideIntroduction(); // Hide the introduction when the game starts
  displayRandomImage();
}

function endGame() {
  hideSpeechBubble();
  stopTimer();
}

function showGameOverModal() {
  const modal = document.getElementById('game-over-modal');
  modal.style.display = 'flex';
  endGame();
}

function hideGameOverModal() {
  const modal = document.getElementById('game-over-modal');
  modal.style.display = 'none';
}

function restartGame() {
  xCount = 0; // Reset xCount to 0
  // Hide any existing "X" divs on the screen
  const gameCanvas = document.getElementById('game-canvas');
  const missedDivs = gameCanvas.querySelectorAll('.missed');
  missedDivs.forEach((div) => div.remove());
  // Call displayRandomImage to start a new game
  showSpeechBubble();
}

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

const playAgainButton = document.getElementById('play-again-button');
playAgainButton.addEventListener('click', () => {
  hideGameOverModal();
  restartGame();
});

export { giveX, resetKeyPressedFlag, hideIntroduction, startGame, showGameOverModal, hideGameOverModal, restartGame, isKeyDown, keyPressedSinceLastX, setIsMatchingKeyPressed, setIsKeyDown, setKeyPressedSinceLastX, xCount, endGame };