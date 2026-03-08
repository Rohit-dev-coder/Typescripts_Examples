let nums = [10, , 30,40,,60];

for (let i in nums) { // for ignore undefined values
    console.log(`Index = ${i}, Value = ${nums[i]}`); 
}