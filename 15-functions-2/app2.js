function calculate(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    // return sum;
}

let result = calculate(5);
console.log(`The sum of first 5 natural numbers is: ${result}`);