//Exercise 2A Start
/*
var users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 },
];

//Modifies Data
var storeUser = function (arr, user) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
      arr[i] = user;
      break;
    }
  }
};

//Pure Functions
var getUser = function(arr, name) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase() === name.toLowerCase()) {
            return arr[i];
        }
    }
    return null;
};

var updateScore = function(user, newAmt) {
    if (user) {
        user.score += newAmt;
        return user;
    }
};

var updateTries = function(user) {
    if (user) {
        user.tries++;
        return user;
    }
};

let usr = getUser(users, "Henry");
let usr1 = updateScore(usr, 30);
let usr2 = updateTries(usr1);
//storeUser(usr2);
*/

//Exercise 2A Finish

const users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 },
];

//Modifies Data
var storeUser = function (arr, user) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
      arr[i] = user;
      break;
    }
  }
};

//Pure Functions
const cloneObj = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};

var getUser = function (arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase() === name.toLowerCase()) {
      return arr[i];
    }
  }
  return null;
};

var updateScore = function (user, newAmt) {
  if (user) {
    user.score += newAmt;
    return user;
  }
};

var updateTries = function (user) {
  if (user) {
    user.tries++;
    return user;
  }
};

let usr = getUser(users, "Henry");
let usr1 = updateScore(cloneObj(usr), 30);
let usr2 = updateTries(cloneObj(usr1));

console.log(usr);
console.log(usr1);
console.log(usr2);
console.log(users);

storeUser(users, usr2);
console.log(users);
