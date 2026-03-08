let prompt = require("prompt-sync")();

let arr = []
console.log("Enter 5 numbers: ");
for(let i = 0; i < 5; i++) {
    let name = prompt(`Enter no ${i + 1}: `);
    arr.push(name);
}

let n = prompt("Enter num to delete:");

while(arr.indexOf(n) != -1) {
    let index = arr.indexOf(n);
    arr.splice(index, 1);
}

console.log("Updated array: ", arr);    
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}