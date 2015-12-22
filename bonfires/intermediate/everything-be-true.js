/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
*/

function every(collection, pre) {
  for (var prop in collection) {
    if (!collection[prop].hasOwnProperty(pre)) {
      return false;
    }
  }
  return true;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
