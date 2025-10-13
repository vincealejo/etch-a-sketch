const gridContainer = document.querySelector('#grid-container');
const gridSizeButton = document.querySelector("#grid-size-button");

const GRID_CONTAINER_SIZE = 700;
let gridSize = 16;

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
    targetBlock.style.backgroundColor = "#333"
})

gridSizeButton.addEventListener("click", () => {
    do {
        gridSize = prompt("2 - 100");
    } while (gridSize > 100 || gridSize < 2);
    
    createGrid(gridSize);
})

createGrid(gridSize);