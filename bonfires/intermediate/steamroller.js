/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamroller(arr) {
  var result = [];
  var tempArr;

  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      tempArr = steamroller(arr[i]);
      for (var j = 0; j < tempArr.length; j++) {
        result.push(tempArr[j]);
      }
    }
  }

  return result;
}

steamroller([1, [2], [3, [[4]]]]);
