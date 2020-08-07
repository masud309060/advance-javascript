let bonus =20;
function sum(num1, num2){
    let result = num1 + num2 + bonus;
    console.log(bonus);//global variable it would be used anywhere;
    return result;
}
const output = sum(14, 18);
// console.log(result); //undefined, bcz result is a scop variable for sum() function;
console.log(output);
console.log(bonus);

// {} carly breaket er vitr kono let ba constant declare krle ta kebl oi breaket er moddei result dibe..
// {} carly breaket er vitr jodi var declare kora hoy tokhon ta tar parent er kache chole giye result dite pare;
// kono ekta variable k declare krle korr por ta uporer level porjonto niye jawai holo hoisting
//