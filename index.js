// Your code here //

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) { // To ensure the dodger doesn't move off the screen to the left
      dodger.style.left = `${left - 1}px`; // Move 1px to the left
    }
  }
  
  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    // Assuming a boundary of 400px for the right edge. Adjust as needed.
    if (left < 400) { // To ensure the dodger doesn't move off the screen to the right
      dodger.style.left = `${left + 1}px`; // Move 1px to the right
    }
  }
  