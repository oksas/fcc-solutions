/*
Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(array) {
  return array.filter(function(x) {
    return x;
  });
}

bouncer([7, 'ate', '', false, 9]);
