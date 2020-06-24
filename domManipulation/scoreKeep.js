const p1Btn = document.getElementById("p1Btn");
const p2Btn = document.getElementById("p2Btn");
const reset = document.getElementById("reset");
const p1Display = document.getElementById("p1Display");
const p2Display = document.getElementById("p2Display");
const numInput = document.querySelector("input");
const playToDisplay = document.getElementById("playToDisplay");

let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winScore = 5;

p1Btn.addEventListener("click", () => {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});
p2Btn.addEventListener("click", () => {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});
reset.addEventListener("click", () => resetGame());

numInput.addEventListener("change", function () {
  playToDisplay.textContent = this.value;
  winScore = Number(this.value);
  resetGame();
});

function resetGame() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}
