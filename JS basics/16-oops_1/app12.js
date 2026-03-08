let myCar = new Object();

myCar.name = "Baleno";
myCar.year = 2020;
myCar.color = "White";

myCar.printDetails = function() {
    console.log(`name : ${myCar.name}`);
    console.log(`year : ${myCar.year}`);
    console.log(`color : ${myCar.color}`);
}

myCar.printDetails();