let name = "Vinayak";
let age = 20;
let isLoggedIn = true;

/* Data types
Number 2 to the power 53
string ""(Double commas are preffered)
bigint (used rare)
boolean true/false
nlul => standalone value & different from 0(IS AN OBJECT)
undefined =>
symbol => Unique

MOST USED AND IMPORTANT 
object 

*/


// console.log(typeof age);
// console.log(typeof null);// result is object
// console.log(typeof undefined);// result is undefined

// Primitive Data Types 
// String , number , boolean , null, undefined , symbol , bigInt
let a = "hello"
let num = 33
let game = 2>1
let temp = null
let score ;
// console.log(typeof a) // result is string
// console.log(typeof num)// result is number
// console.log(typeof game , game) // result is boolean
// console.log(typeof temp) // result of null is an abject 
// console.log(typeof score) // result of undefined is undefined


// Relative or non primitive 
// arrays , objects , functions

let heroes = [ "Ironman", "Batman", "Superman"];
let firstObj = {
    name : "Vinayak",
    age :29 
}
// console.log(typeof heroes);
// console.log(typeof firstObj);

let myInsta = "Agnihotri8337"

let newInsta = myInsta
newInsta = "Agnihotri8447"
console.log(newInsta);
console.log(myInsta);



let  userOne = {
    name :"Vinaaaaa",
    email:"helllo@gmail.com",
    age : 20
}

let userTwo = userOne 
userTwo.email = "HELLOWORLD@GAMIL.com"
userTwo.name = "Chintaaaaaaa"
console.log(userOne.email);
console.log(userTwo.email);
