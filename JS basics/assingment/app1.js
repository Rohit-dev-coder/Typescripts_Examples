let prompt = require("prompt-sync")();

let names = []
console.log("Enter 5 names: ");
for(let i = 0; i < 5; i++) {
    let name = prompt(`Enter name ${i + 1}: `);
    names.push(name);
}

let n = prompt("Enter a name to search: ");
let index = -1;
let isFound = true;

do{
    index = names.indexOf(n, index + 1);
    if(index == -1) {
        isFound = false;
        break;
    }
    console.log(`Found at index: ${index}`);
}while(index != -1);

if(!isFound) {
    console.log(`${n} not found in the list.`);
}

