const sketchpad = document.querySelector(".sketchpad");

// Populate sketchpad with divs
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.className = "row";
    sketchpad.appendChild(row);
    
    for (let i = 0; i < 16; i++) {
        const pixel = document.createElement("div")
        pixel.className = "pixel"
        row.appendChild(pixel)
    }
}