let myCar = new Object();

myCar.name = "Baleno";
myCar.year = 2020;

console.log("name" in myCar);
console.log("year" in myCar);

delete myCar.year;

console.log("name" in myCar);
console.log("year" in myCar);