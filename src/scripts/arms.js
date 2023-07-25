function moveArmsToNewPosition(keyPressed) {
    // Move the arms to a new position based on the key pressed
    switch (keyPressed) {
      case 'w':
        arms.style.top = '100px';
        arms.style.left = '50px';
        break;
      case 'a':
        arms.style.top = '150px';
        arms.style.left = '20px';
        break;
      case 's':
        arms.style.top = '200px';
        arms.style.left = '50px';
        break;
      case 'd':
        arms.style.top = '150px';
        arms.style.left = '80px';
        break;
      case 'ArrowUp':
        // Add code to move arms up
        break;
      case 'ArrowLeft':
        // Add code to move arms left
        break;
      case 'ArrowDown':
        // Add code to move arms down
        break;
      case 'ArrowRight':
        // Add code to move arms right
        break;
      default:
        break;
    }
  }

  export default moveArmsToNewPosition;