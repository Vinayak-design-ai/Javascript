// let myName = "Vinayak     "
// let myChannel = "chai    "
// console.log(myName.length);

// let hero = ["thor" , "spidey"]
// let heroPower = {
//     thor : "hammer",
//     spiderman : "sling",
//     getSpideyPower : function() {
//         console.log(this.spiderman);   
//     }
// }
// Object.prototype.hitesh = function(){
//     console.log("Hitesh is present in every Object");
// }

// Array.prototype.heyMan = function(){
//     console.log("Vinayak Says Hiii");
// }

// heroPower.hitesh()
// hero.hitesh()
// hero.heyMan()
// // heroPower.heyMan()



// ++++++INHERITANCE 

const User = {
    username : "Chai",
    email : "123@mil.com"
}

const teacher = {
    makeVideo : true,
}
const teachingSupport = {
    isAvailable : false ,
}
const TASupport = {
    makeAssignment : "JavaScript Assignment",
    fullTime : true ,
    __proto__ : teachingSupport
}

teacher.__proto__ = User

Object.setPrototypeOf(teachingSupport , teacher)

let anotherName = "Vinayak       "

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`The True Length is ${this.trim().length}`);
    
    
}
// console.log(anotherName.length);
anotherName.trueLength()
"Agnihotri        ".trueLength()
"Coffee".trueLength()