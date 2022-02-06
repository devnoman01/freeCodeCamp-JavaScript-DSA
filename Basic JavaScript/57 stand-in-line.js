//  insert in & remove from queue

function nextInLine(arr, item) {
    
    arr.push(item);             // last item removed
    item = arr.shift(item);     // inserted in first position
    return item;                // returned inserted item
  }
  
  const testArr = [1, 2, 3, 4, 5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));