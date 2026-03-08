const _ = require('lodash'); 

let person1 = { age: 30 , name: "Alice" };
let person2 = { name: "Alice", age: 30 };

console.log(_.isEqual(person1, person2)); // true

let person3 = { age: 32 , name: "Alice" };

console.log(_.isEqual(person1, person3)); // false