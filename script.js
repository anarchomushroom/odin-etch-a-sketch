const sketchpad = document.querySelector(".sketchpad");
const button = document.querySelector(".new-grid");

// Populate sketchpad with divs
function populateGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";
        sketchpad.appendChild(row);
        
        for (let i = 0; i < size; i++) {
            const pixel = document.createElement("div")
            pixel.className = "pixel"
            row.appendChild(pixel)
    
            // Colour change event
            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = "black";
            })
        }
    }   
}

// Set up listen even for button onclick
button.addEventListener("click", () => {
    let size = prompt("Please enter a number for the new height and width:")
    console.log(size)
    // Stop size from being empty
    while (size === "") {
        size = prompt("You cannot enter a blank value. Please try again:")
    }
    // Stop size greater than 100
    while (size > 100) {
        size = prompt("You cannot input a number greather than 100. Please try again:")
    };
    // Clear current sketchpad
    sketchpad.replaceChildren();
    // Repopulate grid
    populateGrid(size);
})

// Load default grid of 16 x 16
populateGrid(16);