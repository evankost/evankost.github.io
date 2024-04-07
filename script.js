const svgElement = document.getElementById('mySVG');

// Function to pause animations
function pauseAnimations() {
  svgElement.pauseAnimations();
}

// Function to resume animations
function resumeAnimations() {
  svgElement.unpauseAnimations();
}

// Add event listener for mouse hover
svgElement.addEventListener('mouseenter', pauseAnimations);
svgElement.addEventListener('mouseleave', resumeAnimations);