const students = [
    {id: 21, name: "Omar Sunny"},
    {id: 31, name: "Manna "},
    {id: 41, name: "Purnima"},
    {id: 61, name: "DeepJol"}
]

/* const output = [];
for(let i = 0; i < students.length; i++) {
    const element = students[i].name;
    output.push(element);
}
console.log(output); */

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id > 40);
const bigger1 = students.find( s => s.id > 40);

// console.log(ids);
// console.log(names);
console.log(bigger1);