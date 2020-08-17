/* const numbers = [2,3,5,8,9];
const output = [];
for(let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const square = element*element;
    output.push(square);
}
console.log(output); */
const numbers = [2,3,5,8,9];
// numbers.map(function(element,index,array){
//     console.log(element,index, array);
// })
// const result = numbers.map( function(element) {
//     return element*element; 
// })
// const squre = numbers.map(x => x*x);
// console.log(squre);
// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);
// const smaller = numbers.filter(x => x < 5);
// const isThere = numbers.find(x => x > 5);
// console.log(isThere);
// console.log("smaller: " + smaller); 

const students = [
    {id: 101, name: "Nazim Uddin"},
    {id: 102, name: "Shifiqur Rahman"},
    {id: 103, name: "Roton Hawlader"}
];
const names = students.map(s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter(s => s.id > 101).name;

console.log(names);
console.log(bigger);