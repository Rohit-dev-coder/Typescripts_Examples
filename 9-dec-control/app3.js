const prompt = require("prompt-sync")();

let num = prompt("Enter month number: ");

if(isNaN(num)) {
    console.log("You did not enter a valid number.");
}
else {
    const x = Number(num);
    switch(x) {
        case 11:
        case 12:
        case 1:
        case 2:
            console.log(`Month ${x} is in Winter.`);
            break;
        case 3:
        case 4:
        case 5:
        case 6:
            console.log(`Month ${x} is in Summar.`);
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            console.log(`Month ${x} is in Rainy.`);
            break;
        default:
            console.log(`Month ${x} is not a valid month number.`);
    }
    
}

