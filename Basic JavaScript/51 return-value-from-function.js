//  return value from a function

//  return keyword is used to return any value from the function
function plusThree(num) {
    return num + 3;                 // the function will return value of num+3 when called
}
  
const answer = plusThree(5);        // here 5 is the argument that is passed
console.log(answer);                // output: 8
//  as the function return 5+3 which is 8, answer will have value 8


function timesFive(num){
    return num * 5;
}
  
timesFive(5);
timesFive(2);
timesFive(0);