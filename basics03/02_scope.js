// this is called GLOBAL SCOPE



if (true) { // this is called BLOCK SCOPE
    let a = 30
    const b = 20
    var c = 10
    // console.log("INNER :" , a);
    
}
// console.log(a); // this will not be printed because a is not defined in the GLOBAL SCOPE
// console.log(b); //this will not be printed because b is not defined in the GLOBAL SCOPE
// console.log(c); // var c will be taken from the inner block 

function one() {
    const username = "Vinayak"

    
    function two() {
        const website = "Youtube"
        //console.log(username);
    }
    // console.log(website);
    
    //two()
    
}
//one()

if (true) {
    const username = "Vinayak"
    
    if (username === "Vinayak") {
        const website = " Youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);
// console.log(addone(5))
function addone(num) {
    return num + 1     // here you can use it before the initilisation
}

console.log(addtwo(3));
const addtwo = function (num) { // here you cant us the initialisation because of its different nature
    return num + 2
}

// this process is known as HOISTING ....