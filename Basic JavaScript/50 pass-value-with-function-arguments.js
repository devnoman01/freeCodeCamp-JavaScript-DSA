//  passing values to functions with arguments

//  parameters are used when functions are defined
//  here sayHello function is defined with two parameters

function sayHello(a, b){        // here a, b are function parameters that will receive passed value
    console.log(a + b);         // output: Hello World
}

const x = "Hello ";
const y = "World";
sayHello(x, y);                 // here x, y are arguments whose value will be passed into function


function functionWithArgs(x, y){
    console.log(x+y);
  }
  
  functionWithArgs(1,2);        // will get output: 3
  functionWithArgs(7,9);        // will get output: 16