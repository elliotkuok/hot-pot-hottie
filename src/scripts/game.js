import { displayRandomImage, stopTimer, hideSpeechBubble, showSpeechBubble } from './order.js';

let xCount = 0;
let isKeyDown = false;
let keyPressedSinceLastX = false;
let isMatchingKeyPressed = false;
let validKeyCount = 0;

function setIsKeyDown(value) {
  isKeyDown = value;
}

function setKeyPressedSinceLastX(value) {
  keyPressedSinceLastX = value;
}

function setIsMatchingKeyPressed(value) {
  isMatchingKeyPressed = value;
}

function checkWin() {
  validKeyCount++;
  if (validKeyCount === 5) {
    showGameOverModal();
  }
}

function shouldShowX() {
    if (!isKeyDown) {
      giveX();
    }
}

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
  hideIntroduction();
  displayRandomImage();
}

function endGame() {
  hideSpeechBubble();
  stopTimer();
  const gameCanvas = document.getElementById('game-canvas');
  const missedElement = gameCanvas.querySelector('.missed');
  if (missedElement) {
    missedElement.style.display = 'none';
  }
}

function showGameOverModal() {
  const modal = document.getElementById('game-over-modal');
  const modalText1 = document.getElementById('modal-text-1');
  const modalText2 = document.getElementById('modal-text-2');
  const modalTitle = document.getElementById('modal-title');

  if (xCount === 3) {
    modalText1.style.display = 'block'; 
    modalText2.style.display = 'none';  
  } else if (validKeyCount === 5) {
    modalTitle.innerHTML = "Congratulations";
    modalText1.style.display = 'none';  
    modalText2.style.display = 'block';
  }

  modal.style.display = 'flex';
  endGame();
}

function hideGameOverModal() {
  const modal = document.getElementById('game-over-modal');
  modal.style.display = 'none';
}

function restartGame() {
  xCount = 0;
  validKeyCount = 0;
  const gameCanvas = document.getElementById('game-canvas');
  const missedDivs = gameCanvas.querySelectorAll('.missed');
  missedDivs.forEach((div) => div.remove());
  showSpeechBubble();
}

const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

const playAgainButton = document.getElementById('play-again-button');
playAgainButton.addEventListener('click', () => {
  hideGameOverModal();
  restartGame();
});

export { shouldShowX, giveX, resetKeyPressedFlag, hideIntroduction, startGame, showGameOverModal, hideGameOverModal, restartGame, isKeyDown, keyPressedSinceLastX, setIsMatchingKeyPressed, setIsKeyDown, setKeyPressedSinceLastX, xCount, endGame, checkWin };