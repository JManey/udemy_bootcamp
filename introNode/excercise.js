// function echo(str, num) {
//   for (let i = 0; i < num; i++) {
//     console.log(str);
//   }
// }

// echo("echo!!", 10);
// echo("tatertots", 3);

let scores = [90, 98, 89, 100, 100, 86, 94];
let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average(arr) {
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });
  return Math.round(total / arr.length);
}

console.log(average(scores));
console.log(average(scores2));
