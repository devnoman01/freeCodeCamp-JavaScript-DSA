// comparing different values

//  this function check only values
function compareEquality(a, b) {
    if (a == b) {
      return "Equal";
    }
    return "Not Equal";
}
compareEquality(10, "10");      // return: Equal

//  this function check values with type
function compareEquality(a, b) {
    if (a === b) {
      return "Equal";
    }
    return "Not Equal";
}
compareEquality(10, "10");      // return: Not Equal