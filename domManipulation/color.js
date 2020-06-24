const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  document.body.classList.toggle("purple");
});

// let isPurple = false;
// btn.addEventListener("click", function () {
//   //   alert("clicked");
//   if (isPurple) {
//     document.body.style.background = "white";
//     // isPurple = false;
//   } else {
//     document.body.style.background = "purple";
//     // isPurple = true;
//   }
//   isPurple = !isPurple;
// });
