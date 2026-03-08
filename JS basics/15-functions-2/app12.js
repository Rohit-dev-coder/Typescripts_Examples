let num = 1;

let x = setTimeout(function() {
    console.log(num);
    num++;
}, 3000);

clearTimeout(x);