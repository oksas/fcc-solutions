/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
// TO DO: don't use switch, use an object instead (would an array work too, since the cases are all numerical?)
function convert(num) {
  var romans = ["I", "V", "X", "L", "C", "D", "M"];
  var answer = "";
  var i = 0;

  while (num > 0) {
    switch(num % 10)  {
      case 1:
        answer = romans[i] + answer;
        break;
      case 2:
        answer = romans[i] + romans[i] + answer;
        break;
      case 3:
        answer = romans[i] + romans[i] + answer;
        break;
      case 4:
        answer = romans[i] + romans[i+1] + answer;
        break;
      case 5:
        answer = romans[i+1] + answer;
        break;
      case 6:
        answer = romans[i+1] + romans[i] + answer;
        break;
      case 7:
        answer = romans[i+1] + romans[i] + romans[i] + answer;
        break;
      case 8:
        answer = romans[i+1] + romans[i] + romans[i] + answer;
        break;
      case 9:
        answer = romans[i] + romans[i+2] + answer;
        break;
    }
    num = parseInt(num/10);
    i+= 2;
  }

 return answer;
}

convert(36);
