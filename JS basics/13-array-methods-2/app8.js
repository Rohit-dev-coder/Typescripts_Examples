
function compare(a, b) {
    // if (a > b) {
    //     return 1;
    // }
    // else if (a < b) {
    //     return -1;
    // }else{
    //     return 0; 

    // }
    //in single line
    return a-b;
}

let arr = [7,2,9,1,5,25]

console.log("Before sorting")
console.log(arr)

arr.sort(compare); 

console.log("After sorting") 
console.log(arr)