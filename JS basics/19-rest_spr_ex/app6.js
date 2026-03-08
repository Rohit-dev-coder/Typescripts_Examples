function calculate(a, b, c) {
    let sum = a + b + c;

    console.log(sum);
}

let arr = [3, 4, 5];

calculate(...arr); // Expands the array into individual arguments
// (... -> Spread operator) is used to expand an array into individual elements when calling a function.