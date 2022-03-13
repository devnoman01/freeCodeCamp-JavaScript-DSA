// use rest parameter with function parameters

function howMany(...args) {
    return "Received " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));                  // Received 3 arguments
console.log(howMany("A", null, [1, 2], { }));   // Received 4 arguments

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(0,1,2));        // output: 3
console.log(sum(1,2,3,4));      // output: 10
console.log(sum(5));            // output: 5
console.log(sum());             // output: 0