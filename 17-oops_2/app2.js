let x = 10;
let y = 10;

console.log(`Are x and y equal? ${x === y}`); // true - because they have the same value

let str1 = "Hello";
let str2 = "Hello";

console.log(`Are str1 and str2 equal? ${str1 === str2}`); // true - because they have the same value

let person1 = { name: "Alice", age: 30 };
let person2 = { name: "Alice", age: 30 };

console.log(`Are person1 and person2 equal? ${person1 === person2}`); // false - because they reference different objects in memory

let person3 = person1;

console.log(`Are person1 and person3 equal? ${person1 === person3}`); // true - because they reference the same object in memory


let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(`Are arr1 and arr2 equal? ${arr1 === arr2}`); // false - because they reference different arrays in memory/ becoz array is an object in JavaScript


let person4 = { name: "Bob", age: 25 };
let person5 = { name: "Bob", age: 25 };

console.log(`Are person4 and person5 equal? ${person4 === person5}`);