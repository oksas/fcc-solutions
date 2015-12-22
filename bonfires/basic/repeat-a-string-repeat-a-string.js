/*
Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
*/

function repeat(str, num) {
  var result = '';

  if (num < 0) {
    return '';
  }

  for (i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

repeat('abc', 3);
