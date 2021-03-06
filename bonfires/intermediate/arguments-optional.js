/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, add(2, 3) should return 5, and add(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = add(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function add() {
  var result;

  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      return undefined;
    }
  }

  if (arguments.length < 2) {
    var firstNum = arguments[0];
    return function(secondNum) {
      if (typeof secondNum === "number") {
        return firstNum + secondNum;
      }
      return undefined;
    };
  }

  return arguments[0] + arguments[1];
}

add(2,3);
