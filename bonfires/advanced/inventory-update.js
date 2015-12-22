/*
Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery. Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.
*/

function inventory(arr1, arr2) {
  var invObj = {};

  arr1.forEach(function(item, index, array) {
    invObj[item[1]] = item[0];
  });

  arr2.forEach(function(item, index, array) {
    if (invObj[item[1]]) {
      invObj[item[1]] += item[0];
    } else {
      invObj[item[1]] = item[0];
    }
  });

  var sortedNames = [];

  for (var itemName in invObj) {
    if (invObj.hasOwnProperty(itemName)) {
      sortedNames.push(itemName);
    }
  }

  sortedNames.sort();
  var result = [];

  for (i = 0; i < sortedNames.length; i++) {
    result.push([invObj[sortedNames[i]], sortedNames[i]]);
  }

  return result;
}

var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory([[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']]);
