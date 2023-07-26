let xCount = 0;
let isKeyDown = false;

function showX() {
  const gameCanvas = document.getElementById('game-canvas');
  let missed = gameCanvas.querySelector('.missed');
  if (!isKeyDown) {
    if (xCount < 3) {
      if (!missed) {
        missed = document.createElement('div');
        missed.innerText = 'X';
        missed.className = 'missed';
        missed.style.position = 'absolute';
        missed.style.fontFamily = 'Nerko One';
        missed.style.fontSize = '100px';
        gameCanvas.appendChild(missed);
      } else {
        missed.innerText += 'X';
      }

      xCount++;
    }
  } 
}

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  const displayedImageKey = document.querySelector('#speech-bubble img').dataset.key;
  isKeyDown = true;
  // if (keyPressed !== displayedImageKey) {
  //   showX();
  // }
});

document.addEventListener('keyup', () => {
  isKeyDown = false;
  // Rest of the code...
});


export default showX;