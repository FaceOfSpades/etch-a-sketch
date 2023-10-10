const grid = document.querySelector("#container");
const h1 = document.querySelector("h1");
const button = document.createElement("button");
const resetButton = document.createElement("button");
const buttonContainer = document.createElement("div");
const display = document.createElement("div");

button.textContent = "Change Number of Grid Squares";
resetButton.textContent = "Reset";

h1.appendChild(buttonContainer);
buttonContainer.appendChild(button);
buttonContainer.appendChild(resetButton);
buttonContainer.setAttribute("style", "display: flex; gap: 8px;");
button.setAttribute("style", "padding: 5px;");
resetButton.setAttribute("style", "padding: 5px;");

display.setAttribute("style", "font-weight: normal; font-size: 22px;");

button.addEventListener("click", () => {
    let number = prompt("Please enter a number for total squares per side between 2 and 100", "16");
    if (number > 100 || number < 2)
    {
        alert("That is not a valid number, please try again.");
    } else {
        removeAllChildNodes(grid);
        createGrid(number);
    };
});

resetButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll("div");
    boxes.forEach((div) => {
        div.style.backgroundColor = "black";
    });
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
        let value = false;
        
        grid.addEventListener("mousedown", () => {
            value = true;
        });
        grid.addEventListener("mouseup", () => {
            value = false;
        });
        
        square.addEventListener("mouseover", () => {
            if (value == true)
            {
                square.style.backgroundColor = "white";
            };
        });

        grid.appendChild(square);
    };
};

createGrid(16);