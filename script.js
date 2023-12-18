const sketchpad = document.querySelector(".sketchpad");

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

// Load default grid of 16 x 16
populateGrid(16);