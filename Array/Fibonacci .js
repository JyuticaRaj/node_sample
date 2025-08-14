//fibonacci
const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter how many Fibonacci numbers: "));

let a = 0, b = 1;

console.log("Fibonacci Series:");
for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
//to check a number
let s = 1234; // number to check
let x = 0, y = 1;

while (x < s) {
    let z = x + y;
    x = y;
    y = z;
}

if (x === s) {
    console.log(a + " is a Fibonacci number");
} else {
    console.log(a + " is NOT a Fibonacci number");
}
