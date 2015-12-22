/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/

function translate(str) {
  if (/[aeiou]/.test(str[0])) {
    return str + "way";
  }

  var result = "";
  var numConsonants = 0;
  var i = 0;

  while (!/[aeiou]/.test(str[i])) {
    i++;
    numConsonants++;
  }

  result = str.substr(numConsonants, str.length) + str.substr(0, numConsonants) + "ay";

  return result;
}

translate("consonant");
