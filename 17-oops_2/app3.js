
let person1 = { name: "Alice", age: 30 };
let person2 = { name: "Alice", age: 30 };

let str1 = JSON.stringify(person1); //take js object and convert it to string

let str2 = JSON.stringify(person2);

console.log(str1 === str2); //true because both are same string

console.log(person1 === person2); //false because both are different objects in memory