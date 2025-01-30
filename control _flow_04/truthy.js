// // ++++++++ TRUTHYYY CASE ++++++++

// const userEmail = "V@google.com" // We didnt compare the values but still got the value for true this means that we assumed that the statement is true
// if(userEmail) {
//     console.log("Got the user Mail");
// } else {
//     console.log("Dont Have The User Mail"); 
// }





// const userEmail = ""
// if(userEmail) {
//     console.log("Got the user Mail");
// } else {
//     console.log("Dont Have The User Mail");
    
// }

// Falsy Values 
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// Truthy Values
// "0" , " " ("" with a space) , 'false' , [] , {} , function(){}.

// const userMail = []
// if (userMail.length === 0) {
//     console.log("Array is Empty");
    
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empyt");
//     }
// NULLISH COALESCING OPERATOR (??) : null , undefined

let val1 ;

// val1 = 5 ?? 10 
// console.log(val1);
// val1 = null ?? 10 
// console.log(val1);
// val1 = undefined ?? 10 
// console.log(val1);
val1 = undefined ?? 10 ?? 20
console.log(val1);



// TERINARY OPERATOR 

// condition ? true : false  
const gymFees = 400 
gymFees <= 500 ? console.log("Less than 500") : console.log("More THan 500");
 