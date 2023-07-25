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
}

// Function to hide the speech-bubble div
function hideSpeechBubble() {
  const speechBubble = document.getElementById('speech-bubble');
  speechBubble.style.display = 'none';
}

function showSpeechBubble() {
  const speechBubble = document.getElementById('speech-bubble');
  speechBubble.style.display = 'block';
}

// Call the displayRandomImage function to show the initial random image
displayRandomImage();

// // Add event listener for keydown event to trigger hiding the speech-bubble div
// document.addEventListener('keydown', () => {
//   hideSpeechBubble();
// });

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key;
  const displayedImageKey = document.querySelector('#speech-bubble img').dataset.key;
  if (keyPressed === displayedImageKey) {
    hideSpeechBubble();
  }
});

document.addEventListener('keyup', () => {
  // add animation response of putting food into pot
  // showSpeechBubble();
  // displayRandomImage();
});

export { displayRandomImage, foodItems }; // Export the function and foodItems hash