// write arrow function with parameters

// we can pass arguments into arrow fucntions
const multipleTwo = (item) => item * 2;
console.log(multipleTwo(3));

// with signle parameter, the parentheses enclosing the parameter may be omitted.
const multipleThree = item => item * 3;
console.log(multipleThree(5));

// multipla aruguments can be passed
const multiplier = (item, multi) => item * multi;
console.log(multiplier(6, 4));


const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));