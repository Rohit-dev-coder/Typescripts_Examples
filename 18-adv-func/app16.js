let arr = [9, 4, 12, 6, 15,2, 3];

// let evens = arr.filter((x) => {
//     if (x % 2 === 0) {
//         return true;
//     }
//     return false;
// });

let evens = arr.filter(x => x % 2 === 0);


console.log(evens); // [4, 12, 6, 2]