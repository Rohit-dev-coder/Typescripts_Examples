let fruits = ["guava", "apple", "grapes", "banana"];

console.log(`Size of fruits array: ${fruits.length}`);
console.log(`Values in fruits array: ${fruits}`);

let rem = fruits.splice(1,2); // splice removes elements from the array and returns the removed elements. Here we are removing 2 elements starting from index 1, so rem = ["apple", "grapes"] and fruits = ["guava", "banana"]
console.log(`Size of fruits array: ${fruits.length}`);
console.log(`Values in fruits array: ${fruits}`);

console.log(`Size of rem array: ${rem.length}`);
console.log(`Values in rem array: ${rem}`);