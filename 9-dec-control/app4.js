const prompt = require("prompt-sync")();

let num = prompt("Enter a number: ");

if(isNaN(num)) {
    console.log("You did not enter a valid number.");
}
else {
    let x = Number(num);
    let y = x >= 0 ? x : -x;
    console.log(`The absolute value of ${x} is ${y}.`);
    
}

