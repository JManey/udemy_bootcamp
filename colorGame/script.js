//*************variables*********************
let numSquares = 6;
let colors = [];
let winningColor;

//***************selectors***************
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("h1");
const resetBtn = document.getElementById("resetBtn");
const modeBtns = document.querySelectorAll(".mode");

//*********************event listeners***************** */

//reset button
resetBtn.addEventListener("click", function () {
  reset();
});

// start game on load
init();

//*******************functions***************************

//init or start fresh game on page load
function init() {
  modeBtnListeners();
  setupSquares();
  reset();
}

//setup btn listeners
function modeBtnListeners() {
  for (let i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function () {
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      //check game mode
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

//setup squares
function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add event listener to each
    squares[i].addEventListener("click", function () {
      //get color of clicked square
      let clickedColor = this.style.backgroundColor;
      //compare clicked to winningColor
      if (clickedColor === winningColor) {
        messageDisplay.textContent = "You got it!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetBtn.textContent = "Play Again!";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

//set square colors
function changeColors(color) {
  //loop through all squares and change their backgroundColor
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

//pick a random rgb color
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//reset function
function reset() {
  colors = generateRandomColors(numSquares);
  winningColor = pickColor();
  colorDisplay.textContent = winningColor;
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  resetBtn.textContent = "New Colors";
  for (i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    squares[i].style.backgroundColor = colors[i];
  }
}

//generate colors for each game round
function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

//make 1 random rgb color and return it
function randomColor() {
  //pick random red
  let r = Math.floor(Math.random() * 256);
  //pick random blue
  let b = Math.floor(Math.random() * 256);
  //pick random green
  let g = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
