//  uninitialized variables


var a;
var b;
var c;
//  when variables are declared, they have initial value of undefined

a = a + 1;
b = b + 5;
//  mathematical operation on undefined variable will result: NaN
//  NaN means "Not a Number

c = c + " String!";
//  concatenating a string with an undefined variable will result undefined



//  Initialize variables so that they will not be undefined.
var a = 6;
var b = 15;
var c = "I am a String";

a = a + 1;
b = b + 5;
c = c + " String!";
//  now operations will be proper