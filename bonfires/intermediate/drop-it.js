/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
*/

function drop(arr, func) {

  while (arr.length > 0) {
    if (func(arr[0])) {
      return arr;
    }
    arr.shift();
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
