/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.
*/

function sumPrimes(num) {

  function isPrime(numIn) {
    if (!numIn % 2) {
      return false;
    }

    for (i = 3; i <= Math.sqrt(numIn); i += 2) {
        if (numIn % i === 0) {
          return false;
        }
      }
    return true;
  }

  var primes = [2];
  var total = 0;

  for (j = 3; j <= num; j += 2) {
    if (isPrime(j)) {
      primes.push(j);
    }
  }

  for (k = 0; k < primes.length; k++) {
    total += primes[k];
  }

  return total;
}

sumPrimes(10);
