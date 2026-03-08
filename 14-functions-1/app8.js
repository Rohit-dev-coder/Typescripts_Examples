  let a = 10;
function f1() {
  
    console.log(`In f1: a = ${a}`);
    a++;
}

f1();
f1();
console.log(`In main: a = ${a}`);
