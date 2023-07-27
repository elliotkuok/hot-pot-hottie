import { showX, resetKeyPressedFlag } from './game.js';

const foodItems = {
    sausage: { image: 'sausage.png', key: 'w' },
    mushroom: { image: 'mushroom.png', key: 'a' },
    shrimp: { image: 'shrimp.png', key: 's' },
    fishball: { image: 'fishball.png', key: 'd' },
    meatball: { image: 'meatball.png', key: 'ArrowUp' },
    dumpling: { image: 'dumpling.png', key: 'ArrowLeft' },
    bokchoy: { image: 'bokchoy.png', key: 'ArrowDown' },
    tofu: { image: 'tofu.png', key: 'ArrowRight' },
};

// Function to randomly select an image key from the foodItems object
function getRandomImageKey() {
    const keys = Object.keys(foodItems);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}

let timerId = null;
function startTimer(duration) {
    let timer = duration;
    const timerInterval = 10; // Update the timer every 10ms

    function updateTimerBar() {
        const speechBubble = document.getElementById('speech-bubble');
        let timerBar = speechBubble.querySelector('.timer-bar');

        if (!timerBar) {
            timerBar = document.createElement('div');
            timerBar.className = 'timer-bar';
            const statusBar = document.createElement('div');
            statusBar.className = 'status-bar'; // Use 'status-bar' class for the timer bar
            timerBar.appendChild(statusBar);
            speechBubble.appendChild(timerBar);
        }

        const statusBar = timerBar.querySelector('.status-bar');
        const progress = (timer / duration) * 100;
        statusBar.style.width = `${progress}%`;

        if (timer <= 0) {
            // Hide the speech-bubble when the timer runs out
            showX();
            hideSpeechBubble();
            clearInterval(timerId);
            timerId = null;
        }
        timer -= timerInterval / 1000;
    }

    updateTimerBar(); // Call once immediately to show the initial progress

    // Call updateTimerBar every timerInterval (10ms)
    timerId = setInterval(updateTimerBar, timerInterval);
}

function hideTimerBar() {
  const speechBubble = document.getElementById('speech-bubble');
  const timerBar = speechBubble.querySelector('.timer-bar');
  if (timerBar) {
    timerBar.style.visibility = 'hidden';
  }
}
  
// Function to display the selected image in the speech-bubble div
function displayRandomImage() {
  const speechBubble = document.getElementById('speech-bubble');
  const imageKey = getRandomImageKey();
  const imageName = foodItems[imageKey].image;
  const imageSrc = `assets/food-icons/${imageName}`;

  const imageElement = document.createElement('img');
  imageElement.src = imageSrc;
  imageElement.alt = imageKey;
  imageElement.dataset.key = foodItems[imageKey].key; // Save the assigned key as a data attribute
  // imageElement.id = imageKey + "prompt"; do I need this

  speechBubble.innerHTML = ''; // Clear existing content
  speechBubble.appendChild(imageElement);
  startTimer(3);

  resetKeyPressedFlag();
}

function clearImageFromSpeechBubble() {
  const speechBubble = document.getElementById('speech-bubble');
  speechBubble.innerHTML = '';
}

function hideSpeechBubble() {
  const speechBubble = document.getElementById('speech-bubble');
  const timerBar = speechBubble.querySelector('.timer-bar');
  if (timerBar) {
    timerBar.style.display = 'none';
  }
  
  if (!isMatchingKeyPressed) {
    speechBubble.style.background = '#DD2C00'; // Turn background red only if the matching key wasn't pressed
  }
  
  setTimeout(() => {
    speechBubble.style.display = 'none';
    isMatchingKeyPressed = false; // Reset the variable when the timer ends
    clearImageFromSpeechBubble()
    setTimeout(() => {
      showSpeechBubble();
    }, 2000);
  }, 500);

}

function showSpeechBubble() {
  if (!isKeyPressed) {
    const speechBubble = document.getElementById('speech-bubble');
    speechBubble.style.background = 'white';
    displayRandomImage();
    speechBubble.style.display = 'block';
  }
}

// Call the displayRandomImage function to show the initial random image
// displayRandomImage();

let isMatchingKeyPressed = false;
let isKeyPressed = false;

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  const displayedImageElement = document.querySelector('#speech-bubble img');
  const displayedImageKey = displayedImageElement ? displayedImageElement.dataset.key : null;
  const speechBubble = document.getElementById('speech-bubble');

  if (keyPressed === displayedImageKey) {
    isMatchingKeyPressed = true;
    isKeyPressed = true;
    speechBubble.style.background = '#66FF99';
  } else {
    isKeyPressed = true;
    isMatchingKeyPressed = false;
    speechBubble.style.background = '#DD2C00';
  }
  hideTimerBar();
});

document.addEventListener('keyup', (event) => {
  // const keyLifted = event.key;
  // const displayedImageElement = document.querySelector('#speech-bubble img');
  // const displayedImageKey = displayedImageElement ? displayedImageElement.dataset.key : null;

  // // Check if the displayedImageKey is the same as the key lifted
  // const isMatchingKey = displayedImageKey === keyLifted;

  // if (keyLifted === displayedImageKey) {
  //   isMatchingKeyPressed = false;
  // }

  const keyLifted = event.key;
  const displayedImageElement = document.querySelector('#speech-bubble img');

  if (displayedImageElement) {
    const displayedImageKey = displayedImageElement.dataset.key;
    if (keyLifted === displayedImageKey) {
      isMatchingKeyPressed = false;
    }
  }
  isKeyPressed = false; 
  // setTimeout(() => {
  //   showSpeechBubble();
  // }, 2000);
  // add animation response of putting food into pot

  // displayRandomImage();
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }

  // Show the speech bubble again
  setTimeout(() => {
    showSpeechBubble();
  }, 2000);
});

export { displayRandomImage, foodItems }; // Export the function and foodItems hash