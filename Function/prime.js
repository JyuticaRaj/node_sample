function printPrimes(n) {
    let num = 2; // start checking from 2
    let printed = 0;

    while (printed < n) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
            printed++;
        }

        num++;
    }
}
// sum of n prime numbers
function sumOfPrimes(n) {
    let sum = 0;
    let num = 2;

    for (let i = 0; i < n; ) { 
        let prime = true;

        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                prime = false;
                break;
            }
        }

        if (prime) {
            sum += num;
            i++; 
        }

        num++;
    }

    return sum;
}

console.log(sumOfPrimes(10));



