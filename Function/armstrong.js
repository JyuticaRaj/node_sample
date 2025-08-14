function armstrongNumbers(n) {
    let str = n.toString();
    let sum = 0;

    for (const digit of str) {
        sum += Math.pow(parseInt(digit), str.length);
    }

    if (sum === n) {
        console.log(n + " is an Armstrong number");
    } else {
        console.log(n + " is NOT an Armstrong number");
    }
}

