function isPrime(n) {
    if(n == 1){
        // console.log(${n} is neither prime nor composite)
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {  // i<= n/2
        if (n % i == 0) {
            // console.log(${n} is Not prime)
            return false
        } 
    }
    // console.log(${n} is prime)
    return true
}
console.log(isPrime(30) )
   