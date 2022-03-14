// destructing assignment to assign variables from arrays

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);                      //output: 1 2

// destructuring an array lets us unpack all its contents into a comma-separated list.
// but specific element can't be picked to assign to varible

const [j, k,,, l] = [1, 2, 3, 4, 5, 6];
console.log(j, k, l);                   //output: 1 2 5


// swapping value of a and b using array destructing
let p = 8, q = 6;
console.log(p, q);                      // output: 8 6

[p, q] = [q, p];
console.log(p, q);                      // output: 6 8