//  comparison with strict equality operator

//  3 === 3     both are equal & same datatype
//  3 === '3'   both are equal but different datatype

function testStrict(val) {
    
    if (val === 7) {
      return "Equal";
    }
    return "Not Equal";
}

testStrict(10);     // return false. same type but not equal
testStrict(7);      // return true. same type and equal
testStrict('7');    //  return false. equal but different type