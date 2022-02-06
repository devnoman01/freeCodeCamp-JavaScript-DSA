//  use conditional logic with if statements

function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
}
  
test(true);       // function return: It was true
test(false);      // function return: It was false


function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
}

trueOrFalse(true);      // function return: Yes, that was true
trueOrFalse(false);     // function return: Yes, that was false