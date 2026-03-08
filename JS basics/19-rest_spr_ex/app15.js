function add(...args) {
    let sum = 0;
    args.forEach((num) => {
        sum += num;
    });
    console.log(`The sum is: ${sum}`);
}


let arr = [1, 2, 3, 4, 5];

add(...arr); // The sum is: 15