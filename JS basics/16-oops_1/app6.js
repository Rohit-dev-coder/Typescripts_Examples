let myCar = new Object();

myCar.name = "Baleno";
myCar.year = 2020;

console.log(myCar);

delete myCar.year;

console.log(myCar);

console.log(myCar.year); // undefined