let fruits = ["guava", "apple", "grapes", "banana"];

console.log(`Size of fruits array: ${fruits.length}`);
console.log(`Values in fruits array: ${fruits}`);

let rem = fruits.splice(1, 0, "orange", "kiwi"); // splice removes elements from the array and returns the removed elements. Here we are not removing any element but adding "orange" and "kiwi" at index 1, so rem = [] and fruits = ["guava", "orange", "kiwi", "apple", "grapes", "banana"]
console.log(`Size of fruits array: ${fruits.length}`);
console.log(`Values in fruits array: ${fruits}`);

console.log(`Size of rem array: ${rem.length}`);
console.log(`Values in rem array: ${rem}`); 