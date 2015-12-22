/*
Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/

// TO DO: use an object instead of switch statements
function drawer(price, cash, cid) {
  var change = [];

  var cidTotal = 0;
  var cidArr = arguments[2];

  for (i = 0; i < cidArr.length; i++) {
    cidTotal += cidArr[i][1];
  }

  cidTotal = parseFloat(cidTotal).toFixed(2);

  var changeDue = cash - price;

  if (changeDue > cidTotal) {
    return "Insufficient Funds";
  }
  if (changeDue == cidTotal) {
    return "Closed";
  }

  var typeAmount = 0;

  for (j = 8; j > -1; j--) {
    switch (cid[j][0]) {
      case 'PENNY':
        typeAmount = 0.01;
        break;
      case 'NICKEL':
        typeAmount = 0.05;
        break;
      case 'DIME':
        typeAmount = 0.10;
        break;
      case 'QUARTER':
        typeAmount = 0.25;
        break;
      case 'ONE':
        typeAmount = 1.00;
        break;
      case 'FIVE':
        typeAmount = 5.00;
        break;
      case 'TEN':
        typeAmount = 10.00;
        break;
      case 'TWENTY':
        typeAmount = 20.00;
        break;
      case 'ONE HUNDRED':
        typeAmount = 100.00;
        break;
    }

    var amountAvail = cid[j][1];

    if (changeDue >= typeAmount) {
      var times = Math.floor(changeDue / typeAmount);
      while (times * typeAmount > amountAvail) {
        times--;
      }
      changeDue -= times * typeAmount;
      changeDue = parseFloat(changeDue).toFixed(2);
      change[change.length] = [cid[j][0], times * typeAmount];
    }

    if (changeDue === 0) {
      break;
    }

  }

  return change;
}

// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]

drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
