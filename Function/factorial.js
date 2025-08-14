function factorialNumbers(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
        console.log(i + "! = " + fact);
    }
}

factorialNumbers(5);