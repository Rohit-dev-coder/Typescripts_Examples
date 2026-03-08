function marksheet(name, ...args) { //rest parameter syntax, it collects all the arguments into an array called args
    let sum = 0;
    args.forEach(num => {
        sum += num;
    });

    console.log(name, sum);
}

marksheet("John", 85, 90, 78);
marksheet("Alice", 92, 88, 95, 91); //rest parameter can handle any number of arguments