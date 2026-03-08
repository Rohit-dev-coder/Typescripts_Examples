let student = {
    roll: 101,
    name: "Deepak",
    per: 67.9
}

let { roll: id, name: sname, per: score } = student;

console.log(`ID: ${id}, Name: ${sname}, Score: ${score}`); 
console.log(student);