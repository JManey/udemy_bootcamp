let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
];
//variables
let winningColor = pickColor();

//selectors
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");

//loop through squares
for (let i = 0; i < squares.length; i++) {
  //change colored square backgrounds
  squares[i].style.backgroundColor = colors[i];
  //add event listener to each
  squares[i].addEventListener("click", function () {
    //get color of clicked square
    let clickedColor = this.style.backgroundColor;
    //compare clicked to winningColor
    if (clickedColor === winningColor) {
      messageDisplay.textContent = "You got it!";
      changeColors(clickedColor);
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
