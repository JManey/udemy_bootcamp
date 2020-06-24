let colors = generateRandomColors(6);
//variables
let winningColor = pickColor();

//selectors
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("h1");

//loop through squares
for (let i = 0; i < squares.length; i++) {
  //change colored square backgrounds
  squares[i].style.backgroundColor = colors[i];
  //add event listener to each
  squares[i].addEventListener("click", function () {
    //get color of clicked square
    let clickedColor = this.style.backgroundColor;
    //compare clicked to winningColor
    console.log(clickedColor, winningColor);
    if (clickedColor === winningColor) {
      messageDisplay.textContent = "You got it!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

//display winning color
colorDisplay.textContent = winningColor;

//functions
function changeColors(color) {
  //loop through all squares and change their backgroundColor
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
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
