function calculate() {
    let sum = 0;
    for (let x of arguments) {
        sum += x;
    }
    console.log(`Sum: ${sum}`);
    console.log(`Average: ${sum/arguments.length}`);
}

calculate(2,4,6,8,10); 