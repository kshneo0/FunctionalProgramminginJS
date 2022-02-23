//Exercise 2B Start
/*
var users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 },
];

var newScore = function (arr, name, amt) {
  arr.forEach(function (val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.score = val.score + amt;
    }
  });
  return arr;
};

var newTries = function (arr, name) {
  arr.forEach(function (val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.tries++;
    }
  });
  return arr;
};

var newArray1 = newScore(users, "Henry", 30);
var newArray2 = newTries(users, "Henry");
*/

//Exercise 2B Start

const users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 },
];

const cloneObj = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};

var newScore = function (arr, name, amt) {
  arr.forEach(function (val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.score = val.score + amt;
    }
  });
  return arr;
};

var newTries = function (arr, name) {
  arr.forEach(function (val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.tries++;
    }
  });
  return arr;
};

console.log("users     : " + JSON.stringify(users));

const newArray1 = newScore(cloneObj(users), "Henry", 30);
const newArray2 = newTries(cloneObj(newArray1), "Henry");

console.log("newArray1 : " + JSON.stringify(newArray1));
console.log("newArray2 : " + JSON.stringify(newArray2));
