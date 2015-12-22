/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters.

For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.
*/

function permAlone(str) {
  return permute(str).filter(function(value) {
    return !value.match(/(.)\1/g);
  }).length;

}

// credit goes to staff.roguecc.edu/JMiller/JavaScript/permute.html for this wonderfully simple permutation algorithm
// additional credit to dting's solution online for showing me how to properly wrap JMiller's function and match the regex for permAlone

function permute(str) {
  var perms = [], used = [];

  function perm(input) {
    var ch, chars = input.split("");
    for (var i = 0; i < input.length; i++) {
      ch = chars.splice(i, 1);
      used.push(ch);

      if (input.length == 1) {
        perms.push(used.join(""));
      }
      perm(chars.join(""));
      chars.splice(i, 0, ch);
      used.pop();
    }
  }

  perm(str);
  return perms;
}

permAlone('aab');
