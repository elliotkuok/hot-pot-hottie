const foodItems = {
    sausage: 'sausage.png',
    mushroom: 'mushroom.jpg',//update to png
    shrimp: 'shrimp.jpg',//update to png
    fishball: 'fishball.png',
    meatball: 'meatball.png',
    dumpling: 'dumpling.png',
    bokchoy: 'bokchoy.png',
    tofu: 'tofu.jpg', //update to png
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
  
  // Call the displayRandomImage function to show the initial random image
  displayRandomImage();