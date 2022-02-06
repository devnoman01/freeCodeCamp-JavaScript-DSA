//  global vs local scope of variable with functions

const someVar = "Hat";      // someVar declared outside function globally

function myFun() {
  const someVar = "Head";   // someVar declared inside function locally
  return someVar;
}
myFun();


const outerWear = "T-Shirt";        // outerWear declared globally

function myOutfit() {
  const outerWear = "sweater";      // outerWear declared locally
  return outerWear;
}
myOutfit();