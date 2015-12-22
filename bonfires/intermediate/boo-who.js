/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function boo(bool) {
  if (bool === false || bool === true) {
    return true;
  }
  return false;
}

boo(null);
