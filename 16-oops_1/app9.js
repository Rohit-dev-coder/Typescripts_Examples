let myCar = new Object();

myCar.name = "Baleno";
myCar.year = 2020;
myCar.color = "White";

for (let x of Object.values(myCar)) { // for...of loop to iterate over the values of the myCar object
    console.log(x);
}