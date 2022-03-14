// destructing assignment with rest parameter to reassign array elements

const [a, b, ...rest] = [1, 2, 3, 4, 5, 7];

console.log(a, b);                  // output: 1 2
console.log(rest);                  // output: [3, 4, 5, 7]

// a & b will collect values from index 0 and 1
// ...rest collected the rest of the elements into seperate array
// the result is similar to Array.prototype.slice()


const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
    const [j,k, ...arr] = list; 
    return arr;                     // returning [3,4,5,6,7,8,9,10]
}
const arr = removeFirstTwo(source);

console.log(arr);                   // output: [3, 4, 5,  6, 7, 8, 9, 10 ]