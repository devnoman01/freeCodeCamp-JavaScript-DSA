// set default parameters for functions

// ES6 allow us to set default parameter for function
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));          // output: Hello John

// name will use "Anonymous" value if any value is not passed
console.log(greeting());                // output: Hello Anonymous

const increment = (number, value = 1) => number + value;
console.log(increment(5, 2));           // output: 7
console.log(increment(5));              // output: 6