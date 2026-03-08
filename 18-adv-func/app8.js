let person = {
    age: 21,
    name : "Ashish",
    showDetails : () => {   
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

person.showDetails(); // Name: undefined, Age: undefined
// The issue is that the showDetails function is being called without the correct context (this).