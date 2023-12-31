const arm = document.getElementById('right-arm');
const dateArms = document.getElementById('date-arms');

function moveArmToFood(keyPressed) {
  const circle = document.querySelector('.circle');
  const circleLeftPosition = parseFloat(circle.style.left) || 0;

    // Define the new position for the arms based on the key pressed
    let newX;
    let newY = 250;

    switch (keyPressed) {
      case 'w': // Sausage
        newX = -180;
        newY = 50;
        break;
      case 'a': // Mushroom
        newX = -60;
        newY = 50;
        break;
      case 's': // Shrimp
        newX = -120;
        newY = 100;
        break;
      case 'd': // Fishball
        newX = -200;
        newY = 115;
        break;
      case 'ArrowUp': // Meatball
        newX = -140;
        newY = 250;
        break;
      case 'ArrowLeft': // Dumpling
        newX = -145;
        newY = 176;
        break;
      case 'ArrowDown': // Bokchoy
        newX = -80;
        newY = 320;
        break;
      case 'ArrowRight': // Tofu
        newX = -200;
        newY = 330;
        break;
      default:
        // If the key doesn't match any food item, don't move the arms
        return;
    }

    // Call the animation function to update the arms' position smoothly
    animateArm(newX, newY);
  
}

function animateArm(targetX, targetY) {
  // Get the current position of the arms
  const currentX = parseFloat(arm.style.left) || -200;
  const currentY = parseFloat(arm.style.top) || 250;

  // Calculate the distance to move in each frame
  const distanceX = targetX - currentX;
  const distanceY = targetY - currentY;

  // Define the duration of the animation in milliseconds
  const duration = 600; // Adjust this value for faster or slower animation

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
    arm.style.left = `${newX}px`;
    arm.style.top = `${newY}px`;
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

function moveArmToHotPot() {
  const circle = document.querySelector('.circle');
  const circleLeftPosition = parseFloat(circle.style.left) || 0;

  if (circleLeftPosition >= 125 && circleLeftPosition <= 160) {
  
    
    const currentX = parseFloat(arm.style.left) || -150;
    const currentY = parseFloat(arm.style.top) || 250;
    // Define the new position for the arms to the hot pot position
    const firstNewX = -50; // The first destination left position (move to -50)
    const firstNewY = 220; // The first destination top position (same as the currentY)
    const finalNewX = -200; // The final destination left position (move to -200)
    const finalNewY = 250; // The final destination top position (same as the currentY)
    
    // Call the animation function to update the arms' position smoothly
    animateArm(firstNewX, firstNewY);
    setTimeout(() => {
      animateArm(finalNewX, finalNewY);
    }, 1500);
  } else {
    const currentX = parseFloat(arm.style.left) || -150;
    const currentY = parseFloat(arm.style.top) || 250;
    // Define the new position for the arms to the hot pot position
    const firstNewX = -168; // The first destination left position (move to -50)
    const firstNewY = 300; // The first destination top position (same as the currentY)
    const finalNewX = -200; // The final destination left position (move to -200)
    const finalNewY = 250; // The final destination top position (same as the currentY)
    
    // Call the animation function to update the arms' position smoothly
    animateArm(firstNewX, firstNewY);
    setTimeout(() => {
      animateArm(finalNewX, finalNewY);
    }, 250);
  }
}


export {moveArmToFood, moveArmToHotPot};
