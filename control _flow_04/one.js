// if (2 === "2") {
//     console.log("The program is running");
    
// }


// let temprature = 52
// if (temprature<50){
//     console.log("Temprature is less than 50");  
// } else {
//     console.log("Temprature is more than 50");
// }

// Different op 
// === (strict equaals) , == (simple equals) , = (assignment operator)
// !== (strict not equals ) , != (not eqyal)

// let score = 200 ; // if we use let in a block it reacts only inside the scope and not outside the scope
// if (score > 100) {
//     let power = "Invisible"
//     console.log(`User Power : ${power}`);
    
// }
// console.log(`User Power : ${power}`);

// let score = 200 ; //  here we used VAR thats why we could access it outside the scope but it will create more difficulties
// if (score > 100) {
//     var power = "Invisible"
//     console.log(`User Power : ${power}`);
    
// }
// console.log(`User Power : ${power}`);

// +++++++++ IMPLICIT SCOPE (means asumed scope)
let balance = 899
// if (balance > 500) console.log("Enough Money");// dont use this very often

if (balance<500){
    console.log("Less than 500");
}else if (balance<750){
    console.log("Less than 750");
}else if (balance < 900){
    console.log("Less than 900");
}else {
    console.log("Less than 1200");
}