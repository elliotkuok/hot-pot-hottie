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

  function startTimer(duration) {
    let timer = duration;
    const timerInterval = 10; // Update the timer every 10ms
    let timerId;

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
            hideSpeechBubble();
            clearInterval(timerId);
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
    timerBar.style.display = 'none';
  }
}
  
// Function to display the selected image in the speech-bubble div
function displayRandomImage() {
  const speechBubble = document.getElementById('speech-bubble');
  const imageKey = getRandomImageKey();
  const imageName = foodItems[imageKey].image;
  const imageSrc = `/assets/food-icons/${imageName}`;

  const imageElement = document.createElement('img');
  imageElement.src = imageSrc;
  imageElement.alt = imageKey;
  imageElement.dataset.key = foodItems[imageKey].key; // Save the assigned key as a data attribute
  // imageElement.id = imageKey + "prompt"; do I need this

  speechBubble.innerHTML = ''; // Clear existing content
  speechBubble.appendChild(imageElement);
  startTimer(3);
}

function hideSpeechBubble() {
  const speechBubble = document.getElementById('speech-bubble');
  const timerBar = speechBubble.querySelector('.timer-bar');
  if (timerBar) {
    timerBar.style.display = 'none';
  }
  
  if (!isMatchingKeyPressed) {
    speechBubble.style.background = '#DC143C'; // Turn background red only if the matching key wasn't pressed
  }
  
  setTimeout(() => {
    speechBubble.style.display = 'none';
    isMatchingKeyPressed = false; // Reset the variable when the timer ends
  }, 500);
}

function showSpeechBubble() {
  const speechBubble = document.getElementById('speech-bubble');
  speechBubble.style.background = 'white';
  displayRandomImage();
  speechBubble.style.display = 'block';
}

// Call the displayRandomImage function to show the initial random image
displayRandomImage();

let isMatchingKeyPressed = false;

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  const displayedImageKey = document.querySelector('#speech-bubble img').dataset.key;
  const speechBubble = document.getElementById('speech-bubble');

  if (keyPressed === displayedImageKey) {
    isMatchingKeyPressed = true;
    speechBubble.style.background = '#66FF99';
  } else {
    isMatchingKeyPressed = false;
    speechBubble.style.background = '#DC143C';
  }
  hideTimerBar();
});

document.addEventListener('keyup', () => {
  // add animation response of putting food into pot
  showSpeechBubble();
  // displayRandomImage();
});

export { displayRandomImage, foodItems }; // Export the function and foodItems hash