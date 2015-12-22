/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  splitString = str.toLowerCase().split(" ");

 for (i = 0; i < splitString.length; i++) {
   splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1);
  }

  return splitString.join(" ");
}

titleCase("I'm a little tea pot");
