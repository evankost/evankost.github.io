document.getElementById('mySVG').addEventListener('mouseenter', function() {
  // Adjust everything to the center of the SVG
  var svgWidth = this.getAttribute('width');
  var svgHeight = this.getAttribute('height');
  var centerX = svgWidth / 2;
  var centerY = svgHeight / 2;

  // Adjust rectangle
  var rect = document.getElementById('rect');
  rect.setAttribute('x', centerX - 74.5);
  rect.setAttribute('y', centerY - 75);

  // Adjust circle
  var circle = document.getElementById('circle');
  circle.setAttribute('cx', centerX);
  circle.setAttribute('cy', centerY);
});
