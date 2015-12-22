/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .
*/

function largestOfFour(arr) {
  for (i = 0; i < 4; i++) {
    var highestInSub = 0;

    for (var subIndex in arr[i]) {
      if (arr[i][subIndex] > highestInSub) {
        highestInSub = arr[i][subIndex];
      }
    }
    arr[i] = highestInSub;
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
