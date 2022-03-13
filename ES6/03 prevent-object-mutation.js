// prevent object mutation

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
};
Object.freeze(obj);             // Object.freeze prevent data mutation
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);               // { name: 'FreeCodeCamp', review: 'Awesome' }


function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);      // Object.freeze prevent data mutation
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);                // output: 3.14
