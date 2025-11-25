const board = document.getElementById("gameBoard");

const title = document.createElement("h1");
//title.textContent = "Whack A Mole";
document.body.insertBefore(title, board);

board.style.display = "grid";