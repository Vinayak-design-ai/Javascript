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
const chai = () => { // this is known as arrow function
    const username = "Vinayak"
    console.log(this.username); // here also the output of function will be undefined
}
chai()