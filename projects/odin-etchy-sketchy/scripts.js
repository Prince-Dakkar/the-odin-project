const holder = document.querySelector("#holder");
const size_btn = document.querySelector("#set-size");
const clear_btn = document.querySelector("#clear-board");
const color_btn = document.querySelector("#change-color");
let session_size = 10;
let session_color = "red";
const colors = ["red", "green", "blue", "yellow", "black", "orange", "purple", "grey", "brown"];

function change_size() {
    console.log("Change_Size Called.");
    let size = prompt("Please enter the desired width of the grid: ");
    if (isNaN(size)) {
        console.log("Was not a number.");
        alert("You must chose a valid number between 1 and 100 inclusive!");
        change_size();
    } else if (size != null) {
        console.log("Desired width: " + size);
        redraw_board(size);
    } else {
        console.log("Desired width: " + size);
        redraw_board(4);
    }
}

function redraw_board(size) {
    session_size = size;
    /* Remove original container by replacing */
    let container = document.querySelector("#container");
    holder.removeChild(container);
    container = document.createElement("div");
    container.id = "container";
    holder.appendChild(container);

    /* Make new container and populate it */
    for (let i = 0; i < size*size; i++) {
        let new_div = document.createElement("div");
        const w = (500) / size;
        new_div.style.width =  w + "px";
        new_div.style.height = w + "px";
        new_div.style.hover = ""
        new_div.addEventListener("mouseover", () => new_div.style.backgroundColor = session_color); 
        container.appendChild(new_div);
    }
}

function clear_board() {
    redraw_board(session_size);
}
function change_color() {
    let color = prompt("Please enter the desired color (We support primary, secondary, black, brown and grey): ").toLowerCase();

    if (colors.indexOf(color) != -1) {
        session_color = color;
    } else {
        alert("You must chose a valid color! The avaiable list is red, yellow, blue, green, orange, purple, grey, brown and black");
        change_color();
    }
}

/* Start the board off as a 10*10 */
redraw_board(session_size);
size_btn.addEventListener("click", () => change_size());
clear_btn.addEventListener("click", () => clear_board());
color_btn.addEventListener("click", () => change_color());