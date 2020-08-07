const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(2, 5); //.slice(start index, end index);

/* 
console.log(part); // [3,4,5]
console.log(nums); // [1,2,3,4,5,6,7,8,9]
  */
const removed = nums.splice(2, 5, 22, 44); //.splice(start index, delete Count, insert new element delte position);
// console.log(removed);
// console.log(nums);

const together = nums.join(", "); //join("whatever you want between the element");
console.log(together);


