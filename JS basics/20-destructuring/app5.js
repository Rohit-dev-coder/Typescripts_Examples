let student = [101, "Deepak", true, "Computer Science"];

let [roll, name, isPass = false] = student;

console.log(`Roll: ${roll}, Name: ${name}, Pass: ${isPass}`);