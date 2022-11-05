/***A left rotation operation on an array of size n shifts each of the array's elements 1 unit
 * to the left. Given an integer, d, rotate the array that many steps left and return the result. */

function rotateLeft(d, arr) {
  // Write your code here
  for (let i = 0; i < d; i++) {
    let temp = [];
    temp.push(arr.shift());
    console.log(temp);
    arr.push(temp.pop());
  }

  console.log(arr);
  return arr;
}
rotateLeft(2, [2, 3, 4, 5, 5]);

//another method
function rotateLeft(d, arr) {
  let temp = arr;
  for (let j = 0; j < d; j++) {
    temp.push(arr[0]);
    temp.shift();
  }
  return temp;
}
