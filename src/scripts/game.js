let xCount = 0;
let isKeyDown = false;
let keyPressedSinceLastX = true;

function showX() {
  const gameCanvas = document.getElementById('game-canvas');
  let missed = gameCanvas.querySelector('.missed');
  if (xCount < 3 && keyPressedSinceLastX) {
      if (!missed) {
        missed = document.createElement('div');
        missed.innerText = 'X';
        missed.className = 'missed';
        missed.style.position = 'absolute';
        missed.style.bottom = '-10px';
        missed.style.color = 'red';
        missed.style.fontFamily = 'Nerko One';
        missed.style.fontSize = '100px';
        gameCanvas.appendChild(missed);
      } else {
        missed.innerText += 'X';
      }

      xCount++;
      keyPressedSinceLastX = false;
  }
}

function resetKeyPressedFlag() {
  keyPressedSinceLastX = true;
}

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  const displayedImageKey = document.querySelector('#speech-bubble img').dataset.key;
  if (keyPressed !== displayedImageKey) {
    isKeyDown = true;
    showX();
  }
  if (xCount === 3) {
    alert("game over")
  }
});

document.addEventListener('keyup', () => {
  isKeyDown = false;
  keyPressedSinceLastX = true;
  // Rest of the code...
});


export { showX, resetKeyPressedFlag };