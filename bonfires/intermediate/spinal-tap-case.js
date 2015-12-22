/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {

  str = str.replace(/(?:[a-z][A-Z])|\s|_/g, function(captured) {
    if (captured.length === 2) {
      return captured.substr(0, 1) + "-" + captured.substr(1, 2);
    }
    return "-";
  });

  str = str.toLowerCase();
  return str;
}

spinalCase('This Is Spinal Tap');
