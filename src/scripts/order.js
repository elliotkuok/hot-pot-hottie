import { giveX, resetKeyPressedFlag } from './game.js';

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
  if (getTimerId()) {
    // Timer is already running, no need to start a new one
    console.log("Timer is already running ----------------");
    return;
  }
  console.log("startTimer ---------------------");
    let timer = duration;
    const timerInterval = 10; // Update the timer every 10ms

    function updateTimerBar() {
        console.log("updateTimerBar -------");
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
            console.log("giveX - ", "timer ran out");
            giveX();
            speechBubble.style.background = '#DD2C00';
            timerBar.style.background = '#DD2C00';
            setTimeout(() => {
              hideSpeechBubble();
            }, 1000);
            clearInterval(timerId);
            timerId = null;
            setTimeout(() => {
              showSpeechBubble();
            }, 2000);
        }
        timer -= timerInterval / 1000;
    }

    console.log("first updateTimerBar standalone call");
    updateTimerBar(); // Call once immediately to show the initial progress

    // Call updateTimerBar every timerInterval (10ms)
    console.log("setting interval every 10ms");
    timerId = setInterval(updateTimerBar, timerInterval);
}

function stopTimer() {
  if (timerId !== null) {
    clearTimeout(timerId);
    timerId = null;
  }
}

// Getter function for timerId
function getTimerId() {
  return timerId;
}

// Setter function for timerId
function setTimerId(newTimerId) {
  timerId = newTimerId;
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
  speechBubble.style.background = 'white';
}

function clearImageFromSpeechBubble() {
  const speechBubble = document.getElementById('speech-bubble');
  speechBubble.innerHTML = '';
}

function hideSpeechBubble() {
  const speechBubble = document.getElementById('speech-bubble');
  const timerBar = speechBubble.querySelector('.timer-bar');
  speechBubble.style.display = 'none';
  if (timerBar) {
    timerBar.style.display = 'none';
  }
  isMatchingKeyPressed = false; // Reset the variable when the timer ends
  
}

let isShowingSpeechBubble = false;

function showSpeechBubble() {
  if (isShowingSpeechBubble) {
    return; // If the function is already running, don't run it again
  }
  isShowingSpeechBubble = true; 

  clearImageFromSpeechBubble()
  if (!isKeyPressed) {
    const speechBubble = document.getElementById('speech-bubble');
    speechBubble.style.background = 'white';
    displayRandomImage();
    speechBubble.style.display = 'block';
  }

  setTimeout(() => {
    isShowingSpeechBubble = false;
  }, 1000);
}

// Call the displayRandomImage function to show the initial random image
// displayRandomImage();

let isMatchingKeyPressed = false;
let isKeyPressed = false;

function setIsKeyPressed(value) {
  isKeyPressed = value;
}

export { displayRandomImage, foodItems, isKeyPressed, hideTimerBar, setIsKeyPressed, startTimer, getTimerId, setTimerId, showSpeechBubble, stopTimer, hideSpeechBubble }; // Export the function and foodItems hash