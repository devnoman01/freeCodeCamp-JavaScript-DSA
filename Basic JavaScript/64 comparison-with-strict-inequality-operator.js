//  comparison with strict inequality operator

//  3 !== 3     is false
//  3 !== '3'   is true

function testStrictNotEqual(val) {
    
    if (val !== 17) {
      return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(17);     // return false. same type and equal
testStrictNotEqual("17");      // return true. equal but different type
testStrictNotEqual(12);    //  return true. same type but not equal