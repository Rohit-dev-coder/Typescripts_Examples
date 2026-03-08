const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");
let city = prompt("Enter your city: ");


console.log(`Hello, ${name}! You are from ${city}.`);