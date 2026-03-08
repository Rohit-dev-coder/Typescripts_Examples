const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));
let esum = 0, osum = 0;
let count = 0;

for (let i = 1; i <= num; i++) {
    
    (i % 2 === 0) ? esum += i : osum += i;
    count++;
}

console.log(`Even sum is ${esum} and Odd sum is ${osum}.`);