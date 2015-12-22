/*
Check if a string (first argument) ends with the given target string (second argument).
*/

function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (target === str.substr(str.length - target.length)) {
    return true;
  }
  return false;
}

end('Bastian', 'n');
