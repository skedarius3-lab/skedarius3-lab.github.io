// 1. Find the button and the title in our HTML document
const button = document.getElementById('color-button');
const title = document.getElementById('main-title');

// 2. Create an array of hex color codes to choose from
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFE933'];

// 3. Add a "click" event listener to the button
button.addEventListener('click', function() {
    // Pick a random color from our array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the color of the text
    title.style.color = randomColor;
    
    // Change the text itself
    title.innerText = "You clicked the button!";
});
