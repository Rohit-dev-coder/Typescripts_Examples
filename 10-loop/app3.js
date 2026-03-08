const prompt = require("prompt-sync")();

let num = prompt("Enter a number: ");

if(isNaN(num)) {
    console.log("You did not enter a valid number.");
}
else {
    num = Number(num);
    let i = 1;
    while(i <= 10) {
        console.log(`${num} * ${i} = ${i * num}`);
        i = i + 1;
    }
}

