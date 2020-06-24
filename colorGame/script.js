let colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
];
//variables
let winningColor = colors[3];
//selectors
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");

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
      alert("correct");
    } else alert("try again");
  });
}

//display winning color
colorDisplay.textContent = winningColor;
