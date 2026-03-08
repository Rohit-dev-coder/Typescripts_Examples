
function compare(a, b) {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }else{
        return 0; 

    }
}

let arr = [7,2,9,1,5,25]

console.log("Before sorting")
console.log(arr)

arr.sort(compare); // v8 engine uses tim sort algorithm which is a hybrid of insertion sort and merge sort.

console.log("After sorting") 
console.log(arr)