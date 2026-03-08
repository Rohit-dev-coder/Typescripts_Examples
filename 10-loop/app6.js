const prompt = require("prompt-sync")();

let today = new Date();
let currentYear = today.getFullYear();
console.log(`Current year is ${currentYear}.`);

let bYear;

do {
    bYear = Number(prompt("Enter your birth year: "));
    if (bYear > currentYear || bYear < 0) {
        console.log("Invalid Birth Year. Please try again.");
    }
    else{
        let age = currentYear - bYear;
        console.log(`Your age is ${age}.`);
        let str = age >= 18 ? "You can vote" : "You cannot vote";
        console.log(str);
        break;
    }
}while (true);
