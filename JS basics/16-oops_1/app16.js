let student = {
    name: "Ashish", 
    age: 22, 
    phy: 90,
    che: 80,
    math: 95,
}

let total = 0;
for (let x in student) {
    console.log(`${x} : ${student[x]}`);
    if (x != "name" && x != "age") {
        total += student[x];
    }
}

console.log(`Total Marks : ${total}`);



