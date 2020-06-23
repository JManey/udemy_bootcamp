//print reverse of an array
let arr1 = [1, 2, 3, 4, 5];

function printReverse(arr) {
  let reverse = arr.reverse();
  console.log(reverse);
}

// are all array elements the same
function isUniform(arr) {
  let first = arr[0];
  let answer = true;
  arr.forEach((ele) => {
    if (ele !== first) {
      console.log(ele, first);
      answer = false;
    }
  });
  return answer;
}

// sum array

function sumArray(arr) {
  let total = 0;
  arr.forEach((ele) => {
    total += ele;
  });
  return total;
}

// max element

function max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
