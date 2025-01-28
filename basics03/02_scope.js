 // this is called GLOBAL SCOPE



if (true) { // this is called BLOCK SCOPE
    let a = 30
    const b = 20 
    var c = 10
    console.log("INNER :" , a);
    
}
// console.log(a); // this will not be printed because a is not defined in the GLOBAL SCOPE
// console.log(b); //this will not be printed because b is not defined in the GLOBAL SCOPE
console.log(c); // var c will be taken from the inner block 

