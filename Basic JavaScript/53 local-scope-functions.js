//  local scope of variable with functions

function myTest() {
    const loc = "foo";
    console.log(loc);
}
  
myTest();
console.log(loc);     // local variable loc can't be used outside function


function myLocalScope() {
    let myVar;
    console.log('inside myLocalScope', myVar);
}

myLocalScope();
console.log('outside myLocalScope', myVar);     // myVar can't be accessed outside function