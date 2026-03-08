let myCar = new Object();

myCar.name = "Baleno";
myCar.year = 2020;
myCar.color = "White";

myCar["start"] = function() {
    console.log("Car is starting...");
}

myCar["stop"] = function() {
    console.log("Car is stopping...");
}

console.log(myCar);
myCar.start();
myCar.stop();