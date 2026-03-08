let nums = [10, 20, 30,40,50,60];
// nums[0] = 10;
// nums[1] = 20;
// nums[2] = 30;

// nums[10] = 100;

console.log(nums);
console.log(`Size : ${nums.length}`); 

nums.length = 10;
console.log(nums);
console.log(`Size : ${nums.length}`); 


nums.length = 3;
console.log(nums);
console.log(`Size : ${nums.length}`); 

nums.length = 0;
console.log(nums);
console.log(`Size : ${nums.length}`); 