const foodItems = {
    sausage: 'sausage.png',
    mushroom: 'mushroom.png',
    shrimp: 'shrimp.png',
    fishball: 'fishball.png',
    meatball: 'meatball.png',
    dumpling: 'dumpling.png',
    bokchoy: 'bokchoy.png',
    tofu: 'tofu.png', 
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
  const imageName = foodItems[imageKey];
  const imageSrc = `/assets/food-icons/${imageName}`;

  const imageElement = document.createElement('img');
  imageElement.src = imageSrc;
  imageElement.alt = imageKey;
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

// Add event listener for keydown event to trigger hiding the speech-bubble div
document.addEventListener('keydown', () => {
  hideSpeechBubble();
});

document.addEventListener('keyup', () => {
  // add animation response of putting food into pot
  showSpeechBubble();
  displayRandomImage();
});