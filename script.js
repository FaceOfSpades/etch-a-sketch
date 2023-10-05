const grid = document.querySelector("#container");

function createRows() {
    for (i = 0; i < 16; i++)
    {
        const square = document.createElement("div");
        square.setAttribute("style", "border: 5px solid black; width: 50px; height: 50px;");
        square.textContent = "TEST" + i;
        grid.appendChild(square);
    }
}

function createColumns() {
    for (i = 0; i < 16; i++)
    {
        createRows();
        const p = document.createElement("p");
        grid.appendChild(p);
    }
}

createColumns();