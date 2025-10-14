const gridContainer = document.querySelector('#grid-container');
const gridSizeButton = document.querySelector("#grid-size-button");
const randomizeColorButton = document.querySelector("#randomize-color-button");

const GRID_CONTAINER_SIZE = 600;
let gridSize = 16;
let randomizeColor = false;

gridContainer.style.width = GRID_CONTAINER_SIZE + "px";

function createGrid(size) {
    gridContainer.innerHTML = "";

    for(let i = 0; i < size * size; i++) {
        const block = document.createElement("div");
        block.className = "block";
        block.style.width = GRID_CONTAINER_SIZE / size + "px";
        block.style.height = GRID_CONTAINER_SIZE / size + "px";
        gridContainer.append(block);
    }
}

gridContainer.addEventListener("mouseover", (event) => {
    const targetBlock = event.target;
    if(randomizeColor) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        targetBlock.style.backgroundColor = `rgb(${r},${g},${b})`;
    } else  {
        targetBlock.style.backgroundColor = "#000";
    }
})

gridSizeButton.addEventListener("click", () => {
    do {
        gridSize = prompt("2 - 100");
    } while (gridSize > 100 || gridSize < 2);
    
    createGrid(gridSize);
})

randomizeColorButton.addEventListener("click", () => {
    randomizeColor = !randomizeColor;
})

createGrid(gridSize);