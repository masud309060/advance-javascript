const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

/* for(let i = 0; i < nembers.length; i++) {
    const element = nembers[i];
    const result = element * element;
    output.push(result);
} */

/* function square(element){
    return element*element;
}
const squre = element => element * element; 
const squre = x => x*x; 

const result = numbers.map(function(element, index, array){ // map 3ta parametre nite pare element, index, array
    // console.log(element, index, array);
    return element * element;
}) */

// const result = numbers.map(x => x * x);
// console.log(result);

const bigger = numbers.filter(x => x > 5);
const isThere = numbers.find(x => x >5);
console.log(bigger) ; //[6 , 7, 8] ; array shoho sokol value dibe...
console.log(isThere); //6 ; shudu shorto fullfil kore 1st value ta diye dibe...