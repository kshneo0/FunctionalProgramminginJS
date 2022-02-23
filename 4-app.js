"use strict";
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

// const arr = [3, 4, 2, 5, 1, 6];
// Object.freeze(arr); //객체를 불변으로 만든다.

// const sortArray = function (arr1) {
//   return arr1.sort();
// };

// const newNums = sortArray(arr);

// console.log(newNums);
// console.log(arr);
//-----------------------------------------

// let obj = {
//   fName: "Steven",
//   lNAme: "Hancock",
//   score: 85,
//   completion: true,
// };

// let obj2 = Object.assign({}, obj);

// console.log(obj);
// console.log(obj2);

// obj2.score = 90;

// console.log(obj);
// console.log(obj2);

//-----------------------------------------

// let obj = {
//   fName: "Steven",
//   lNAme: "Hancock",
//   score: 85,
//   completion: true,
//   questions: {
//     q1: { success: true, value: 1 },
//     q2: { success: false, value: 1 },
//   },
// };

// let obj2 = Object.assign({}, obj);

// console.log(obj);
// console.log(obj2);
// console.log("----------");

// obj2.score = 90;

// console.log(obj);
// console.log(obj2);
// console.log("----------");

// obj2.questions.q1.value = 2;

// console.log(obj);
// console.log(obj2);

//-----------------------------------------

// let obj = {
//   fName: "Steven",
//   lNAme: "Hancock",
//   score: 85,
//   completion: true,
//   questions: {
//     q1: { success: true, value: 1 },
//     q2: { success: false, value: 1 },
//   },
// };

// // deepcopy
// let obj3 = JSON.parse(JSON.stringify(obj));

// console.log(obj);
// console.log(obj3);
// console.log("----------");

// obj3.questions.q1.value = 2;

// console.log(obj);
// console.log(obj3);

//-----------------------------------------

// let array = [{ a: 1 }, { b: 2 }];

// let obj2 = Object.assign({}, array);

// let obj3 = JSON.parse(JSON.stringify(array));

// console.log(array);
// console.log(obj2);
// console.log(obj3);
// console.log("----------");

// array[0].a = 5;

// console.log(array);
// console.log(obj2);
// console.log(obj3);

//-----------------------------------------
/*
const arr = [3, 4, 2, 5, 1, 6];
Object.freeze(arr); //객체를 불변으로 만든다.

const cloneObj = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};

const newNums = cloneObj(arr).sort();

console.log(newNums);
console.log(arr);
*/
//----------------------------------------

// Using the spread Operator for Shallow Cloning
// In the previous topic we looked at using Object.assign() to clone an object. This only does a shallow clone as we demonstrated. If we only need a shallow clone of an object, we can also use the spread operator.

// The spread operator consists of three dots ... . This operator has several applications, but one application is shallow cloning. For example, if we have the following array:

// const arr = [5, 6, 9, 10, 12, 3, 4];

// and we would like to clone it, we can do it like this:

// const newArray = [...arr];

// The spread operator spreads out the elements of the arr array, and then we include them in a new array by surrounding the elements in square brackets.

// If we have the following object:

// const obj = {
//   name: 'Steven',
//   eyes: 'blue'
// };
// we can clone it like this:

// const newObj = {...obj};

// Once again the spread operator opens up the key value pairs in the object and then we place them in a new object using the curly braces.

// So the spread operator is another way to do shallow cloning.

// However, it is important to remember that the JSON.parse(JSON.stringify()) method is more flexible and will make sure to do deep cloning, so I usually prefer to use that method.

//----------------------------------------------------------------

