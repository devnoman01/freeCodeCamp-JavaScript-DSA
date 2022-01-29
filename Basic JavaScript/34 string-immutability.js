//  string immutability

let myStr = "Bob";
myStr[0] = "J";
//  upper code can't change myStr to Job as string values are immutable
//  they cannot be altered once created


let myStr = "Jello World";
myStr = "Hello World";
//  only way to change myStr is to assign it with a new string