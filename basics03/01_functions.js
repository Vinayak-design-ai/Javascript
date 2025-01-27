function sayMyname(){
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("K");  
}
// sayMyname()
// sayMyname

function addTwoNums(number1 , number2) { // (number1 , number2) these are called parameters basically they are a framework for the arguments
    // let result = number1 + number2
    // console.log("Vinayak") // one method to return 
    return number1 + number2  // seconf method to return
      
}
// const result = addTwoNums (6 , 63)
// console.log("Result : ", result);

// addTwoNums(9 , 99) // (9 , 99) these are called arguments that are put in in thr parameters for the result basiclly type of input 
// addTwoNums(9 , "99")
// addTwoNums(9 , null)

function userLoggedIn(username = "Vinay"){  // with this it has a pre defined value and if we have no input then it will return the defined value and if any input is provided then the pre defined value will be over written
    if (!username){
        // if (username === undefined){
        
        console.log("Please enter valid username");
        return

    }
    return `${username} Just Logged In`
}
// console.log(userLoggedIn())

function calculateCartPrice(val1 , val2 ,...num1){
    return num1

}
console.log(calculateCartPrice(100 , 200 , 300 , 1000 , 2000));
