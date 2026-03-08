let person1 = {
    age: 30,
    name: 'Vishal',
    address: {
        city: 'Bhopal',
        pincode: 462001
    }
}

let person2 = {...person1};

person2.address.city = 'Indore';

console.log(person1);
console.log(person2);


