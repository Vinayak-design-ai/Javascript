const user = {
    username : "Vinayak Agnihotri",
    isLoggedIn : true ,
    loginCount : 8 ,
    getUserDetails (){
        // console.log("Got The Details");
        // console.log(`Username : ${this.username}`);
        // console.log(this);
    }
}
// console.log(user ,"hiii");
// console.log(user.getUserDetails());
// console.log(this);

function User (username , loginStatus , loginCount){
    this.username = username ;
    this.loginStatus = loginStatus ;
    this.loginCount = loginCount ;
    return this
}
const userOne =  new User("Vinayak", true , 8)
const userTwo =  new User("coffee", false , 22)
console.log(userOne.constructor);
console.log(userTwo.constructor);

// ++++ NEW METHOd 
// Step 1 - An empty object is returned .
// Step 2 - A new Constructor Function is created 
// Step 3 - All the Objects are injected in the Empty Constructor
// Step 4 - You get the Values in the constructor 
