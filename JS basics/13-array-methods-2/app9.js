let arr = [7,2,9,1,5,25]

console.log("Before sorting")
console.log(arr)

arr.sort((a,b) => {
    return a - b; // for ascending order
}); // v8 engine uses tim sort algorithm which is a hybrid of insertion sort and merge sort.

console.log("After sorting") 
console.log(arr)