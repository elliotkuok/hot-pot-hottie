const arms = document.getElementById('arms');
const dateArms = document.getElementById('date-arms');

function moveArmsToNewPosition(keyPressed) {
  // Define the new position for the arms based on the key pressed
  let newX = 0;
  let newY = 0;

  switch (keyPressed) {
    case 'w': // Sausage
      newX = 50;
      newY = 100;
      break;
    case 'a': // Mushroom
      newX = 100;
      newY = 100;
      break;
    case 's': // Shrimp
      newX = 150;
      newY = 100;
      break;
    case 'd': // Fishball
      newX = 200;
      newY = 100;
      break;
    case 'ArrowUp': // Meatball
      newX = 50;
      newY = 150;
      break;
    case 'ArrowLeft': // Dumpling
      newX = 100;
      newY = 150;
      break;
    case 'ArrowDown': // Bokchoy
      newX = 150;
      newY = 150;
      break;
    case 'ArrowRight': // Tofu
      newX = 200;
      newY = 150;
      break;
    default:
      // If the key doesn't match any food item, don't move the arms
      return;
  }

  // Call the animation function to update the arms' position smoothly
  animateArms(newX, newY);
}

function animateArms(targetX, targetY) {
  // Get the current position of the arms
  const currentX = parseFloat(arms.style.left) || 0;
  const currentY = parseFloat(arms.style.top) || 0;

  // Calculate the distance to move in each frame
  const distanceX = targetX - currentX;
  const distanceY = targetY - currentY;

  // Define the duration of the animation in milliseconds
  const duration = 500; // You can adjust this value for faster or slower animation

  // Get the current timestamp
  let startTime = null;

  // Define the animation function using requestAnimationFrame
  function animationStep(timestamp) {
    if (!startTime) startTime = timestamp;

    // Calculate the time elapsed since the animation started
    const elapsedTime = timestamp - startTime;

    // Calculate the progress of the animation (a value between 0 and 1)
    const progress = Math.min(elapsedTime / duration, 1);

    // Calculate the new position of the arms based on the progress
    const newX = currentX + distanceX * progress;
    const newY = currentY + distanceY * progress;

    // Update the position of the arms
    arms.style.left = `${newX}px`;
    arms.style.top = `${newY}px`;
    // dateArms.style.left = `${newX}px`;
    // dateArms.style.top = `${newY}px`;

    // Check if the animation is still in progress
    if (progress < 1) {
      // If the animation is not complete, request the next frame
      requestAnimationFrame(animationStep);
    }
  }

  // Start the animation by requesting the first frame
  requestAnimationFrame(animationStep);
}

// Export the moveArmsToNewPosition function to use it in other files
export default moveArmsToNewPosition;
