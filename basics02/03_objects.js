// singleton 

// object.create is used to create singleton objects

// object literals

const mySym = Symbol("key1")
const jsUser = {
    name : "Vinayak",
    "full Name" : "Vinayak Agnihotri ",
    [mySym] : "Key 2", // if you dont use [] for symbol , then it will be treated as a normal string rather than an object
    age : 20 ,
    email : "hi@google.com",
    isLoggedIn : false ,
    location: "Punjab",
    loginDays : ["Monday", "Tuesday", "Thursday"]
}
// console.log(jsUser["full Name"]);
// console.log(jsUser.name);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
// console.log(typeof [mySym]);

jsUser.email = ("vinayak@hello")// this will update the email in the object 

// jsUser.email = ("Heloo@ broo 1233")
// Object.freeze(jsUser) // once you freeze the object , it wont make any more chnges to the object
// console.log(jsUser);

jsUser.greetings = function () {
    console.log("Hello JS user"); 
}
jsUser.greetings2 = function () {
    console.log(`Hello JS user , ${this.name}`); // ` ` this method is known as TEMPLATE LITERALS 
}
console.log(jsUser.greetings);
console.log(jsUser.greetings());
console.log(jsUser.greetings2());



