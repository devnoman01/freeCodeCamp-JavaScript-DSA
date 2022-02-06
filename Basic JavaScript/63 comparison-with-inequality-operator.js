//  comparison with inequality operator

/*
1 !=  2     // true
1 != "1"    // true
1 != '1'    // true
1 != true   // false
0 != false  // false
*/

function testNotEqual(val) {
    if (val != 99) {
      return "Not Equal";
    }
    return "Equal";
}
  
testNotEqual(10);