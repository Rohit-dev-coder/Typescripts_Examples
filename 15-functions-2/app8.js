let num = 1;
function printNums(){
    console.log(num);
    num++;
    if (num == 11){
        clearInterval(x);
        console.log("Done!");
    }
}

let x = setInterval(printNums, 1000);