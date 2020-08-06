// #### Falsy ####
// 0 (for number)
// "" (emty string for string)
// undefined 
// null
// NaN (NOt a Number)
// false

// #### Truthy #### 
//"0", " ", [], {} ,"false"

let age = 0;
if(age || age == 0){
    console.log("condition is true");
}
else {
    console.log("condition is false");
}