const grid = document.querySelector("#container");

function createRows() {
    for (i = 0; i < 256; i++)
    {
        const square = document.createElement("div");
        square.setAttribute("style", "border: 2px solid black; width: 50px; height: 50px;");
        square.id = "row" + i;
        square.classList.add("rows");
        grid.appendChild(square);
    }
}

createRows();