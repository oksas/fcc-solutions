/*
Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired with each other to equal 7.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4, and the first element has an index of 0!
*/

function pairwise(arr, arg) {
  var total = 0;
  var used= [];

  for (i = 0; i < arr.length; i++) {
    for (j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg && arr[i] !== used[i] && arr[j] !== used[j]) {
        total += i + j;
        used[i] = arr[i];
        used[j] = arr[j];
      }
    }
  }

  return total;
}

pairwise([1,4,2,3,0,5], 7);
