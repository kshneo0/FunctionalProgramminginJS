// const num = 50;
// num = 100;   //error
//-----------------------------------------
// const arr = [3, 4, 2, 5, 1, 6];

// console.log(arr);
// arr.sort();
// console.log(arr);
//-----------------------------------------
// const arr = [3, 4, 2, 5, 1, 6];
// const sortArray = function (arr1) {
//   return arr1.sort();
// };

// const newNums = sortArray(arr);

// console.log(newNums);
// console.log(arr);
//-----------------------------------------

"use strict";
const arr = [3, 4, 2, 5, 1, 6];
Object.freeze(arr); //객체를 불변으로 만든다.

const sortArray = function (arr1) {
  return arr1.sort();
};

const newNums = sortArray(arr);

console.log(newNums);
console.log(arr);
//-----------------------------------------
