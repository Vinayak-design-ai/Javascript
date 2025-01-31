// for of loop

let arr = [1 , 2 , 3 , 4 , 5]
for (const arrResult of arr) {
    // console.log(arrResult);  
}

let greetings = "Welcome Everyone"
for (const greet of greetings) {
    if (greet == " ") {
        // continue this helped to skip the space in between
        break // this stopped executing the code when it dedected a space.
    }
    // console.log(`Each alphabet is: ${greet}`);
    continue
}

// ++ Case of Objects in Array
let superHero = [{ name : "Ironman" } , {business : "Tech Company "} , { worth : " 10 $Trillion"} , {nickname : "Tony Stark"} ]

for (const hero of superHero) {
   // console.log(superHero);
    
}
 // +++  MAP ++++
let map = new Map()
map.set('IN' , "India")
map.set('UAE' , "Dubai")
map.set('Fr' , "France")
map.set('IN' , "India")
// console.log(map);

// for (const key of map) { this will display the whole array 
    // console.log(key);  
// }
for (const [key , value] of map) { // by adding [] we destructure the array and will get both the keys and values seperate
    console.log(key, ':-' , value);  
}
