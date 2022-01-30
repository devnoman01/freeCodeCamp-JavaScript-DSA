//  manipulate array with unshift()

//  use shift() to remove first item from an array
//  use unshift() to insert item into an array at first position
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();                           //  now ourArray = ["J", "cat"];
ourArray.unshift("Happy");                  //  now ourArray = ["Happy", "J", "cat"];

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();                            // now myArray = [["dog", 3]];
myArray.unshift(["Paul", 35]);              // now myArray = [["Paul", 35], ["dog", 3]];