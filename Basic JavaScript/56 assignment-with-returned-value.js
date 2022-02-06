//  assignment with returned value

function ourSum(num1, num2) {
    return num1 + num2;         // return sum of num1 + num2
}
ourSum = sum(5, 12);        // assigning returning value into ourSum

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);