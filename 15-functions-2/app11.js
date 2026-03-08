let num = 1;

let x = setTimeout(function() {
    console.log(num);
    num++;
    // if (num == 11){
    //     clearTimeout(x);
    //     console.log("Done!");
    // }
}, 1000);