let users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

let userNames = users.map(user => user.name);
console.log(userNames); // Output: ["Alice", "Bob", "Charlie"]