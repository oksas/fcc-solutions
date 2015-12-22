/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function unite(arr1, arr2, arr3) {
  theArgs = [];
  for (i = 0; i < arguments.length; i++) {
    theArgs[i] = arguments[i];
  }
  sorted = [];
  sorted = theArgs.reduce(function(prev, next) {
    return prev.concat(next);
  });
  sorted = sorted.filter(function(value, index) {
    return sorted.indexOf(value) === index;
  });

  return sorted;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
