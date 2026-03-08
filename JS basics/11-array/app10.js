const prompt = require('prompt-sync')();

let billAmt = [];

for (let i = 0; i < 5; i++) {
    billAmt[i] = Number(prompt(`Enter amount for bill number ${i + 1}: `));
}

let finalAmt = [];
let taxes = [];

for (let i = 0; i < billAmt.length; i++) {
    if (billAmt[i] < 250) {
        taxes[i] = 20;
        finalAmt[i] = billAmt[i] + billAmt[i] * 0.20;
    }
    else if (billAmt[i] >= 250 && billAmt[i] < 500) {
        taxes[i] = 15;
        finalAmt[i] = billAmt[i] + billAmt[i] * 0.15;
    }
    else {
        taxes[i] = 10;
        finalAmt[i] = billAmt[i] + billAmt[i] * 0.10;
    }
}

console.log("Your Bill : ");
let total = 0;

for (let i = 0; i < billAmt.length; i++) {
    console.log(`Bill ${i + 1} : ${billAmt[i]} + ${taxes[i]}% = ${finalAmt[i]}`);
    total += finalAmt[i];
}

console.log(`Total Bill Amount : ${total}`);
