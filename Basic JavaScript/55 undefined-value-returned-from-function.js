//  undefined value returned from a function

let sum = 0;

function addSum(num) {
  sum = sum + num;
  // if there is no return then its undefined by default
}
console.log(addSum(3));


let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();