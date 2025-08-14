
let num = 29; 
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}
//Taking with UserInput
let numb = parseInt(prompt("Enter a number:"));
let isPrimes = true;

if (numb <= 1) {
    isPrimes = false;
} else {
    for (let i = 2; i < numb; i++) {
        if (numb % i === 0) {
            isPrimes = false;
            break;
        }
    }
}

if (isPrimes) {
    console.log(numb + " is a prime number");
} else {
    console.log(numb + " is not a prime number");
}
//Sum of prime Number
let ns = 10; 
let sums = 0;

for (let num = 2; num <= ns; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        sums += num;
    }
}

console.log(sum);
//sum of n Prime numbers
const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter how many primes to sum: "));

let sum = 0;
let numbr = 2;

for (let p = 0; p < n; numbr++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(numbr); i++) {
        if (numbr % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        sum += numbr;
        p++;
    }
}

console.log("Sum of first", n, "prime numbers is:", sum);
