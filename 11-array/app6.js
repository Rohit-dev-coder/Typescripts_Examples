let nums = [10, 20, 30,40,50,60];
// nums[0] = 10;
// nums[1] = 20;
// nums[2] = 30;

// nums[10] = 100;

console.log(nums);
console.log(`Size : ${nums.length}`); 

nums.pop();
console.log(nums);
console.log(`Size : ${nums.length}`); 


for (let i = 0; i < nums.length; i++) {
    console.log(`${nums[i]}`);
}