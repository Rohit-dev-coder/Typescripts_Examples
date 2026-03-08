let myCar = new Object();

myCar.name = "Baleno";
myCar.year = 2020;
myCar.color = "White";

for (let key in myCar) {
    console.log(key, myCar[key]);
}