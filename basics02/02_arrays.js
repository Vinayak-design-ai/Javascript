const marvelHeroes = ["Ironman","Thor", "Spiderman"]
const dc_heroes = ["Batman", "Superman", "Wonder woman"]

// marvelHeroes.push(dc_heroes)// returns a combinaion of both the arrays 
// console.log(marvelHeroes); .Push creates an allay within a allay ie dc_heroes is the 3 element of the parent array

//  const allHeroes = marvelHeroes.concat(dc_heroes)
// console.log(allHeroes);// returns a new array all together and 

const new_heroes2 = [...marvelHeroes , ...dc_heroes]
// console.log(new_heroes2); // This method is known as Spread , works same as concat method but this one is used more often


// const new_array =[1,2,3 ,  [5,7],[1,3 ,[4,8], 55,7]]
// const anotherArr = new_array.flat(Infinity) // .flat will return the output in a single array if multiple arrays are being used
// console.log(anotherArr);


// console.log(Array.isArray("Vinayak"));// tells if the element is array or not
// console.log(Array.isArray(new Array("hello", "everyone","how are u")));

// console.log(Array.from("Vinayak")); // will convert the element or string into an array 
// console.log(Array.from({name : "Vinayak"})); // this will give the output of [] empty square brackets

let score1 = 100 ;
let score2 = 200 ;
let score3 = 300 ;
let score4 = 400 ;
console.log(Array.of(score1 , score2 , score3 , score4));
// array.of will convert the elements of different keys into one single array
