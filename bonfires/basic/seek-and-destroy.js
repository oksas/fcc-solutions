/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  extras = [];
  for (i = 1; i < arguments.length; i++) {
    extras.push(arguments[i]);
  }

  // filter arr to get rid of any values in extras
  return arr.filter(function(valueIn) {
    for (j = 0; j < extras.length; j++) {
      if (valueIn === extras[j]) {
        return false;
      }
    }
    return true;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
