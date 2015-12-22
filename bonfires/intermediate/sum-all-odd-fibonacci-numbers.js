/*
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

function sumFibs(num) {
  sum = 0;

  function fibGen(numIn) {
    fibSeq = [];
    prevNum = 0;
    currentNum = 1;
    tempNum = 0;

    while (currentNum <= numIn) {
      fibSeq.push(currentNum);
      tempNum = prevNum;
      prevNum = currentNum;
      currentNum += tempNum;
    }
    return fibSeq;
  }

  fibSeq = fibGen(num);

  for (j = 0; j < fibSeq.length; j++) {
    if (fibSeq[j] % 2) {
      sum += fibSeq[j];
    }
  }

  return sum;
}

sumFibs(12);
