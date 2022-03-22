// returns the current selected colour in the HTML color input.
function colorPicker(){
    var color = document.getElementById('colorPicker').value;
    return color;
}

// if the grid is not empty reset grid
function generateGrid(){
    var gridSize = document.getElementById('numberSelector').value;
    var gridLocation = document.getElementById('gameWindow');

    // if the grid is not empty reset grid
    if (gridLocation.innerHTML){
        gridLocation.innerHTML = '';
    }
    
    // generate grid using the gridsize from html range input
    gridLocation.style.setProperty('--grid-rows', gridSize);
    gridLocation.style.setProperty('--grid-cols', gridSize);
    for (c = 0; c < (gridSize * gridSize); c++) {
        let cell = document.createElement("div");
        cell.style.padding = 100 / gridSize + "px";
        cell.addEventListener('mouseover', changeColor);
        gridLocation.appendChild(cell).className = "etchDiv";
    }
    gridLocation.style.boxShadow = "1px 1px 5px green";

    
}

// uses mouseover event listener to change colours of each "pixel"
function changeColor(input){
    input.target.style.backgroundColor = colorPicker();
}

// resets the grid back to its initial state
function resetGrid(){
    var gridLocation = document.getElementById('gameWindow');
    gridLocation.innerHTML = '';
    gridLocation.style.boxShadow = "1px 1px 5px red";
}
