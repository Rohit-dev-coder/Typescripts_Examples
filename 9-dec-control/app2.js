const prompt = require("prompt-sync")();

let num = prompt("Enter first number: ");

if(isNaN(num)) {
    console.log("You did not enter a valid number.");
}
else {
    switch (num % 2 === 0){
        case true:
            console.log("The number is even.");
            break;
        case false:
            console.log("The number is odd.");
            break;
    }
    
}

