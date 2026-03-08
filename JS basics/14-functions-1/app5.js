function calculate(a,b,c) {
    let sum = a + b + c;
    let avg = sum / 3;
    console.log(`Sum : ${sum}, Average : ${avg}`);
}

calculate(2,4,6,8,10); // extra arguments are ignored by the function. --- IGNORE ---