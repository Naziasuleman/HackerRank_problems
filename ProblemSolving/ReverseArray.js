function reverseArray(a) {
  let len = a.length; //size of array
  for (let i = 0; i < len / 2; ++i) {
    //swipping
    let s = 0;
    s = a[len - i - 1];
    a[len - i - 1] = a[i];
    a[i] = s;
  }
  return a;
}
console.log(reverseArray([1, 4, 5, 6, 0]));




//Another Solution

function reverseArray(a) {
  return a.reverse();
}
console.log(reverseArray([1, 4, 5, 6, 0]));
