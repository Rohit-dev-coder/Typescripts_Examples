let myCar = new Object();

myCar.name = "Baleno";
myCar.year = 2020;
myCar.color = "White";

let arr = Object.entries(myCar);

for (let x of arr) {
    console.log(`${x[0]} : ${x[1]}`);
}