let arr = [10, 20, 30, 40, 50];

let today = new Date();

let person = {
    name: "Amit",
    age: 25,

    toString: function () {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

console.log(`Array: ${arr}`);
console.log(`Today's date: ${today}`);
console.log(`Person: ${person}`); // This will print [object Object] because it's an object.

console.log(`Person: ${person.toString()}`); 

