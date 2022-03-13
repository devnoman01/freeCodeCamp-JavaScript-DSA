// use arrow function to write concise anonymous function

/*
often we create inline functions without name especially 
when passing a function as an argument to another function
*/
const myFunction1 = function() {
    const myVar = "value 1";
    return myVar;
}
console.log(myFunction1());

//In ES6, we can use arrow function instead of anonymous functions.
const myFunction2 = () => {
    const myVar = "value 2";
    return myVar;
}
console.log(myFunction2());

/*
When there is no function body, and only a return value, arrow function syntax 
allows you to omit the keyword return as well as the brackets surrounding the code.
*/
const myFunction3 = () => "value 3";
console.log(myFunction3());


const magic = () => {
    return new Date();
};
console.log(magic());