function calculate(...args) { //rest parameter syntax, it collects all the arguments into an array called args
    let sum = 0;
    args.forEach(num => {
        sum += num;
    });

    console.log(sum);
}

calculate(5, 10, 15, 20); 
calculate(1, 2, 3);
calculate(10, 20);