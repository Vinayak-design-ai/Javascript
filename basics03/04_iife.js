// IMMEDIAETLY INVOKED FUNCTION EXPRESSIONS (IIFE)
(function chaa (){ // this is NAMED IFFE
    console.log('DB CONNECTED'); // this is done to save the function from the pollution of the global scope 
})(); // () this at the end of the function will immediaetly execute no need to execute the function in second line
// chaa()

( () => {
    console.log("DB CONNECTED TWO");
    
})(); // ; here is really important which tells the function to end after the execution


( (name) => { // this is UN-NAMED IFFE
    console.log(`Welcome to the Dashboard user , ${name}`);
    
})('Vinayak')  // this last () is for the argument where u define the value