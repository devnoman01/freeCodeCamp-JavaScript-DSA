// compare scopes of the var and let Keywords

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());         // output: 3

/* 
printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does not follow this behavior
*/

let printNum2;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNum2 = function() {
      return i;
    };
  }
}
console.log(printNum2());           // output: 2
console.log(i);                     // output: 3


function checkScope() {
    let a = 'function scope';
    if (true) {
      let a = 'block scope';
      console.log(a);     // output: block scope
    }
    console.log(a);    // output: function scope
    return a;
}

checkScope();