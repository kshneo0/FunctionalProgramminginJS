// let cnt = 0

// let increment = function() {
//     cnt++;
//     return cnt;
// };

// Pure Function
let increment = function (num) {
  return num + 1;
};

let average = function (scores) {
  var total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
};

console.log(average([90, 30, 40, 50, 60]));

//-----------------------------------------------------------------------

/*var MAINAPP = (function(nsp) {
    var currentUser = 0,
        users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

    var updateScore = function(newAmt) {
        users[currentUser].score += newAmt;
    };

    var returnUsers = function() {
        return users;
    };

    var updateTries = function() {
        users[currentUser].tries++;
    };

    var updateUser = function(newUser) {
        currentUser = newUser;
    };

    nsp.updateUser = updateUser;
    nsp.updateTries = updateTries;
    nsp.updateScore = updateScore;
    nsp.returnUsers = returnUsers;
    return nsp;
})(MAINAPP || {});

setTimeout(function() {MAINAPP.updateUser(2);}, 300);
setTimeout(function() {MAINAPP.updateScore(20);}, 100);
setTimeout(function() {MAINAPP.updateTries();}, 200);*/

var users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 },
];

// Modifies Data
var storeUser = function (arr, user) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase() === user.name.toLowerCase()) {
      arr[i] = user;
      break;
    }
  }
};

// Pure Functions
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

let user = getUser(users, "Henry");
let user1 = updateScore(user, 30);
let user2 = updateTries(user1);
storeUser(user2);

console.log(users);
//--------------------------------------------------

//객체가 함수의 인자로 전달이 될 때는 call by reference
//원시데이터가 함수의 인자로 전달이 될 때는 call by value

var users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 },
];

var newScore = function (arr, name, amt) {
  arr.forEach(function (val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.score = cal.score + amt;
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

// 따라서 원본 배열에 side effect가 발생