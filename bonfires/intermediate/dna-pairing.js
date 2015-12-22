/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pair(str) {
  result = [];

  function makeMatch(letter) {
    switch(letter) {
      case "A":
        return ["A", "T"];
      case "C":
        return ["C", "G"];
      case "T":
        return ["T", "A"];
      case "G":
        return ["G", "C"];
    }
  }

  for (i = 0; i < str.length; i++) {
    result[i] = makeMatch(str[i]);
  }

 return result;
}

pair("GCG");
