let person = {
    age: 21,
    name : "Ashish",
    showDetails : function() {   
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

person.showDetails(); 
// The issue is that the showDetails function is being called without the correct context (this).