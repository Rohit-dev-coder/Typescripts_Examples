let fruits = ["guava", "apple", "grapes", "banana"];

console.log(`Size of fruits array: ${fruits.length}`);
console.log(`Values in fruits array: ${fruits}`);

let rem = fruits.splice(2,1, "orange"); // splice removes elements from the array and returns the removed elements. Here we are removing 1 element at index 2 and adding "orange" at index 2, so rem = ["grapes"] and fruits = ["guava", "apple", "orange", "banana"]
console.log(`Size of fruits array: ${fruits.length}`);
console.log(`Values in fruits array: ${fruits}`);

console.log(`Size of rem array: ${rem.length}`);
console.log(`Values in rem array: ${rem}`);