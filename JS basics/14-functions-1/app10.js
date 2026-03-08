var a = 10;
function f1() {
    let a = 10;
    console.log(`In f1: a = ${a}`);
    console.log(`Glocal a = ${global.a}`); //unlike browser we will not get access to global a
    a++;
}
f1();
f1();
console.log(`In main: a = ${a}`);
