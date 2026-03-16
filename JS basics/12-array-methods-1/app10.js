let fruits = ["guava", "apple", "grapes", "banana"];

console.log(`Size of fruits array: ${fruits.length}`);
console.log(`Values in fruits array: ${fruits}`);

let rem = fruits.splice(0, 4, "orange", "kiwi"); // splice removes elements from the array and returns the removed elements. Here we are removing 4 elements starting from index 0 and adding "orange" and "kiwi" at index 0, so rem = ["guava", "apple", "grapes", "banana"] and fruits = ["orange", "kiwi"]
console.log(`Size of fruits array: ${fruits.length}`);
console.log(`Values in fruits array: ${fruits}`);

console.log(`Size of rem array: ${rem.length}`);
console.log(`Values in rem array: ${rem}`);