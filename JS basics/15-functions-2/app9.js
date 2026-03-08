let num = 1;
let a = function(){
    console.log(num);
    num++;
    if (num == 11){
        clearInterval(x);
        console.log("Done!");
    }
}

let x = setInterval(a, 1000);