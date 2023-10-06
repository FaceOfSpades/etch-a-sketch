const grid = document.querySelector("#container");
const h1 = document.querySelector("h1");
const button = document.createElement("button");
button.textContent = "Change Number of Grid Squares";
h1.appendChild(button);
button.setAttribute("style", "padding: 5px;");
const display = document.createElement("div");
display.setAttribute("style", "font-weight: normal; font-size: 22px;");

button.addEventListener("click", () => {
    let number = prompt("Please enter a number for total squares per side that does not exceed 100", "16");
    removeAllChildNodes(grid);
    createGrid(number);
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

function createGrid(x) {
    display.remove();
    display.textContent = "Current Grid Size: " + x + "x" + x;
    h1.appendChild(display);
    let temp = x;
    temp = 1000/temp;
    x *= x;
    for (i = 0; i < x; i++)
    {
        const square = document.createElement("div");
        square.style.width = (temp) + "px";
        square.style.height = (temp) + "px";
        grid.appendChild(square);
    };
};

createGrid(16);

grid.addEventListener("mouseover", (event) => {
    
});