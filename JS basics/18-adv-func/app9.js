let i = 1;

let x = setInterval(() => {
    console.log(i);
    i++;
    if(i > 5) {
        clearInterval(x);
    }
}, 1000);

