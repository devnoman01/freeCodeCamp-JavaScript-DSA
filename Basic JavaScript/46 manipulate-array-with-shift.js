//  manipulate array with shift()

//  use shift() to remove first itam from an array
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
//  now ourArray = ["J", ["cat"]];
//  now removedFromOurArray = "Stimpson";

const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();
//  now myArray = [["dog", 3]];
//  now removedFromMyArray = ["John", 23];