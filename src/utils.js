let primesNumbers = [];
function checkNumOfPrime(n) {
  for (let i = 0; i < n; i++) {
    if (isPrime(i) === true) {
      primesNumbers.push(i);
    }
  }

  return primesNumbers
    .concat(primesNumbers)
    .sort(() => 0.5 - Math.random())
    .slice(0, 32);
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// primesNumbers = checkNumOfPrime();
// console.log(primesNumbers);

module.exports.checkNumOfPrime = checkNumOfPrime;