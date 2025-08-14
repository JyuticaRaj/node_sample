
// number to find factorial oflet n = 5; 
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log("Factorial of " + n + " is " + fact);
// n numbers factorial
let n = parseInt(prompt("Enter n:"));
let facts = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
   console.log(i + "! = " + fact);
}

