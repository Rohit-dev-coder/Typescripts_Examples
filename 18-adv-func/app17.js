let users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 12 }
];

let adults = users.filter(user => user.age >= 18);
console.log(adults);
