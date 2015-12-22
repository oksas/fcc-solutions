/*
Compare two arrays and return a new array with any items only found in one of the original arrays.
*/

function diff(arr1, arr2) {
  var newArr = [];

  for (var k in arr1) {
    var arr2Loc = arr2.indexOf(arr1[k]);
    if (arr2Loc !== -1) {
      delete arr1[k];
      delete arr2[arr2Loc];
    }
}

  for (var i in arr1) {
    newArr.push(arr1[i]);
  }
  for (var j in arr2) {
    newArr.push(arr2[j]);
  }

  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
