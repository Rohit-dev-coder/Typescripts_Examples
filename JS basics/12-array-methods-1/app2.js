let nums = [10, 20, 30,40,50];

let x = nums.unshift(60);

console.log(`Size : ${x}`);
console.log(nums);

x = nums.unshift(70, 80, 90); // unshift can take multiple arguments and adds them to the beginning of the array.

console.log(`Size : ${x}`);
console.log(nums); // unshift returns the new length of the array after adding the elements. nums = [70, 80, 90, 60, 10, 20, 30, 40, 50]