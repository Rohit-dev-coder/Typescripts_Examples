let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
let c = Number(process.argv[4]);

let sum = a + b + c;

console.log(`The sum of ${a}, ${b} and ${c} is:`);
console.log(sum);
console.log(`Average: ${sum / 3}`);
console.log(`Bye!`);