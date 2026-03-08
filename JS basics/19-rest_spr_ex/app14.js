let person1 = {
    age: 30,
    name: 'Vishal',
    address: {
        city: 'Bhopal',
        pincode: 462001
    }
}

let str = JSON.stringify(person1)

let person2 = JSON.parse(str)

person2.name = 'Rahul'
person2.address.city = 'Indore'

console.log(person1)
console.log(person2)


