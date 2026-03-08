const prompt = require("prompt-sync")();

let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");
let c = prompt("Enter third number: ");

let sum = Number(a) + Number(b) + Number(c);

console.log(`The sum of ${a}, ${b} and ${c} is: ${sum}`);
console.log(`The average of ${a}, ${b} and ${c} is: ${sum / 3}`);