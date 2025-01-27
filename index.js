const divGrid1 = document.createElement('div');
const container = document.querySelector(".grid-container");
const button = document.querySelector("button");
const gridSize = 16;
calculateGrid(gridSize);


container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains('gridItem') && !event.target.style.backgroundColor) {
        // Apply the background color only if it hasn’t been applied yet
        //Display random color
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.target.style.backgroundColor = "#" + randomColor;
    }
    }
  );

  
  button.addEventListener("click", newGrid)

  function newGrid(){
    let newGridSize = prompt("Enter a new grid size");
    if (newGridSize < 1 || newGridSize > 100){
        alert("Enter a number between 0-100");
        newGrid();
    }
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    calculateGrid(newGridSize);
  }

  function calculateGrid(gridSize){
    for (let i = 1; i <= gridSize*gridSize; i++){
        gridItem = document.createElement('div');
        gridItem.classList = 'gridItem';
        gridItem.style.width = `${960 / gridSize}px`;
        gridItem.style.height = `${960 / gridSize}px`;
        container.appendChild(gridItem);
    }
}

  


