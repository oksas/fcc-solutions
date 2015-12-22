/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  splitString = str.split(/\s/);
  var longestWord = 0;

  for (var word in splitString) {
    if (splitString[word].length > longestWord) {
      longestWord = splitString[word].length;
    }
  }

  return longestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
