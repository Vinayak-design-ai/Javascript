const user =  {
    username : "Vinayak",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to Website `);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "SAMMY" // with this the value of username in user will aslo change nd return the output with the new value
// user.price = 83838
// user.welcomeMessage()
// console.log(this);
// function chai () {
//     const username = "Vinayak"
//     console.log(this.username); // here the output will be undefined as this function doesnt wont work in function
    
// }
// chai()
// const chai = () => { // this is known as arrow function
//     const username = "Vinayak"
//     console.log(this.username); // here also the output of function will be undefined
// }
// chai()

// function chai(){
//     let username = "Vinayak"
//     console.log(this.username); // this method doesnt work well in functions but works in objects    
// }
// chai()



// const chai = function (){
//     let username = "Vinayak"
//     console.log(this.username);
    
// }
// chai()


// ++++++++++++++++ ARROW FUNCTION ++++++++++++++++

// const chaa = () => {
//     let username = "chintuuu"
//     console.log(this.username);
    
// }
// chaa()
// THIs is EXPLICIT FUNCTION 
// const addTwo = (num1 , num2) => { // one method to write function
//     return num1 + num2  // if we use {} these then it becomes mandatory to write return 
// } 
// console.log(addTwo(4 , 5))   

// IMPLICIT RETURN of FUNCTION 
// const addTwo = (num1 , num2) => num1 + num2 // this works as well
// const addTwo = (num1 , num2) => (num1 + num2) // this is another method 
// const addTwo = (num1 , num2) => ({username : "Vinayak"})
// console.log(addTwo(55, 88));

// function yourAge (userAge){
//     this.userAge = 10
//     function ageInYears (){
//         console.log(`your age is ${this.userAge}`);
        
//     }
//     ageInYears();
    
// console.log(`YOUR AGE IS ${userAge}`);

    

//     }
    
// yourAge(1)



// const instaUser= {
//     username : "Vinayak",
//     password : "123abc",

//     messageForUser: function() {
//         console.log(`Welcome onBoard my friend ${this.username}`)
//         // console.log(this);
//         ;
//     }
//    }
// //  console.log(instaUser)
//  instaUser.messageForUser()
 // ++++++++  ++++++ LEARNT SOMETHING REALLY NICE ++++++++++++++++ IN NEXT LINE
 // IN CASE OF FUNCTION
 // in function you have to define the value of this along with the key of which you want the value like in the case below 
 // if i dont define (this.firstname = firstname + lastname) , then it wont have any value to take the input from in case of function.
 // as in function we have to define bczit doesnt know from which argument we have to take value of this 
// IN CASE OF OBJECT ++++++
// i dont have to define this as it will directly take value from the keys there 
function instaUser(firstName , lastName){ 
    firstName = "Daman"
    lastName = "Preet Kaur"
    this.firstName = firstName + lastName
    function register (name){
        console.log(`Instagram welcomes you @ ${this.firstName}`);
        
    }register()
    console.log(`Welcome to our website @ ${this.firstName}`);
    
}
instaUser()