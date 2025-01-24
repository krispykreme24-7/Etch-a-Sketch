const divGrid1 = document.createElement('div');
const container = document.querySelector(".grid-container")


const gridSize = 16;

for (let i = 1; i <= gridSize*gridSize; i++){
    const gridItem = document.createElement('div');
    gridItem.classList = 'gridItem';
    gridItem.textContent = [i];
    container.appendChild(gridItem);
}

document.addEventListener("mouseover", (event) => {
    if (!event.target.style.backgroundColor) { 
      // Apply the background color only if it hasn’t been applied yet
      event.target.style.backgroundColor = "green";
    }
  });
  


/* onmouseover = (event) => {}; */