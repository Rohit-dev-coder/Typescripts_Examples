const prompt = require("prompt-sync")();

let sum = 0;
let count = 0;
do{
    var num = Number(prompt("Enter a number (0 to stop): "));
    sum += num;
    count++;
}while(num != 0);

console.log(`The sum of the numbers entered is ${sum}.`);
console.log(`The average of the numbers entered is ${sum / (count - 1)}.`);