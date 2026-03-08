const prompt = require("prompt-sync")();

let sum = 0;
let count = 0;
while (true) {
    let num = prompt("Enter a number (or '0' to quit): ");
    if(isNaN(num)) {
        console.log("You did not enter a valid number.");
    }
    else {
        num = Number(num);
        if(num === 0) {
            break;
        }
        sum = sum + num;
        count = count + 1;
    }
}

console.log(`The sum of the numbers you entered is ${sum}.`);
console.log(`Average of the numbers you entered is ${sum/count}.`);