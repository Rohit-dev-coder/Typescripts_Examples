let num = 1;

let x = setInterval(function() {
    console.log(num);
    num++;
    if (num == 11){
        clearInterval(x);
        console.log("Done!");
    }
}, 1000);