const prompt = require("prompt-sync")();

let a = prompt("Enter first number: ");

if(isNaN(a)) {
    console.log("You did not enter a valid number.");
}
else if(a % 2 === 0) {
    console.log(`${a} is an even number.`);
} else {
    console.log(`${a} is an odd number.`);
}

