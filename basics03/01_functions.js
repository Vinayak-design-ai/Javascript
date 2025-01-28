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
// console.log(calculateCartPrice(100 , 200 , 300 , 1000 , 2000));

const user = {
    username : "Vinayak" ,
    price : 1999 ,   
}

// function usingObject(anyobject) { // gave the input anyobject to show that any name of obj can be used .
//     console.log(`The Username is ${anyobject.username} and the Price is ${anyobject.price}`);
    
// }
// usingObject(user) // here we created an obj earlier and then put the name of the obj in the function execution.
// usingObject ({ // here we directly gave the values in the execution of the function 
//     username : "daman",
//     price : 9999
// })

const myArray = [200 , 400 , 500 , 600]
function returnSecondValue (anyArray){
    return anyArray[2] 
   
    
}
// console.log(returnSecondValue(myArray))

function addNums(num1 , num2){
    console.log(num1 + num2);
    return (`The Sum of the numbers is ${num1 + num2}`)
}
function minusNums( num1 , num2){
    // console.log(num1 - num2);
    if ((num1 + num2)/2 ===  0);
    return(`Number ${num1 + num2} is an Even Number`)
}
console.log(minusNums(0, 21));


