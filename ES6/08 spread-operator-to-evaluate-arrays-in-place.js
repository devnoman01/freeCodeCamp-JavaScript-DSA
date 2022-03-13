// use spread operator to evaluate arrays in place

var arr1 = [6, 89, 3, 45];
// console.log(Math.max.apply(undefined, arr));     // output: 89
// console.log(Math.max.apply(null, arr));          // output: 89
// console.log(Math.max.apply(Math, arr));          // output: 89

// We have to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. 
var maxNum1 = Math.max.apply(null, arr1);
console.log(maxNum1);                       // output: 89

// ...arr returns an unpacked array
const arr2 = [6, 89, 3, 45];
const maxNum2 = Math.max(...arr2);
console.log(maxNum2);                       // output: 89


const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr4;
arr4 = [...arr3];               // arr4 will have all item of arr3
console.log(arr4);              // output: [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]