let fruits = ["guava", "apple", "grapes", "banana"];

let x = fruits.slice(0); // slice returns a shallow copy of a portion of an array into a new array object. Here we are copying all elements starting from index 0, so x = ["guava", "apple", "grapes", "banana"] and fruits = ["guava", "apple", "grapes", "banana"]

console.log(`Size of fruits array: ${fruits.length}`);
console.log(`Values in fruits array: ${fruits}`);

console.log(`Size of x array: ${x.length}`);
console.log(`Values in x array: ${x}`);
