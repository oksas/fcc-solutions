/*
Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.

The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.
*/

// major thanks to Jeremiah Biard whose solution I uhh, was heavily inspired by
// I had an algorithm worked out that was 1) much longer and less efficient and 2) didn't pass all test cases because I was not properly finding the symmetric difference (I compared all arrays simultaneously, rather than 2 at a time)
function exclusive(A, B) {
	return A.filter(function(value) {
		return B.indexOf(value) === -1;
	});
}

function unique(arr) {
	return arr.filter(function(value, index) {
		return arr.indexOf(value) === index;
	});
}

function sym(args) {
  var arg = Array.prototype.slice.call(arguments);
  return arg.map(unique).reduce(function(prev, curr, index, array) {
    return exclusive(prev, curr).concat(exclusive(curr, prev));
  });
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
