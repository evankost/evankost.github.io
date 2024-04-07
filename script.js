const svgElement = document.getElementById('mySVG');
const shapes = svgElement.querySelectorAll('.layer > *');

svgElement.addEventListener('mouseover', () => {
    // Get the SVG bounding box
    const svgRect = svgElement.getBoundingClientRect();
    const svgCenterX = svgRect.width / 2;
    const svgCenterY = svgRect.height / 2;

    shapes.forEach(shape => {
        // Get the bounding box of each shape
        const shapeRect = shape.getBBox();
        
        // Calculate translation values to move each shape to the center
        const translateX = svgCenterX - (shapeRect.x + shapeRect.width / 2);
        const translateY = svgCenterY - (shapeRect.y + shapeRect.height / 2);

        // Apply translation to each shape
        shape.setAttribute('transform', `translate(${translateX}, ${translateY})`);
    });
});

svgElement.addEventListener('mouseout', () => {
    // Reset transformations on mouseout
    shapes.forEach(shape => {
        shape.removeAttribute('transform');
    });
});