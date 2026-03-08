let arr = [10, 20, 30];

let brr = [...arr]; // deep copy (spread operator)

console.log(arr === brr); // true

console.log(arr);
console.log(brr);

arr.push(40);

console.log(arr);
console.log(brr);