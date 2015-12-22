/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  // not at all proud of this method but it works... going to investigate other solutions now that I've figured it out, at least
  var lowerNum = arr[0];
  var higherNum = arr[1];

  if (arr[0] > arr[1]) {
    higherNum = arr[0];
    lowerNum = arr[1];
  }

  numArr = [];

  for (i = lowerNum; i <= higherNum; i++) {
    numArr.push(i);
  }

  for (j = higherNum+1; j < 1000000; j++) {
    var thisOne = true;
    for (k = 0; k < numArr.length; k++) {
      if (j % numArr[k] !== 0) {
        thisOne = false;
        break;
      }
    }
    if (thisOne) {
      return j;
    }
  }

  return false;
}


smallestCommons([1,5]);
