//// ARRAYS


const heroes = ["Ironman" , "Thor", "Captain America"]

const arr2 = new Array("hello", "world" , 1 , 2)


/// METHODS IN ARRAY
// arr.push(6 ) // adds a new number in the end
// arr.push( "YOo ")
// arr.pop()// removes the last number from the array
// arr.unshift(9, "Hiii") // adds the number in the beginning
// arr.shift() // removes the number from the beginning

// console.log(arr.includes(5)); //  returns boolean i.e. true or false
// console.log(arr.indexOf(11)); // tells the index . if the number doesnt exist , it gives result as -1
// console.log(arr.indexOf(1));
// console.log(heroes.includes("Ironman", "Thor"));
// const newArr = arr.join()// concatinates the different elements and returns a string in result.
// const newArr1 = arr.join('') // removes the space
// const newArr2 = arr.join('-')// adds the hash bw nums
// console.log(arr);
// console.log(newArr);
// console.log(newArr1);
// console.log(newArr2);
const arr = [ 1,2, 3, 4, 5]
const myN1 = arr.slice(1,3)
console.log("A",myN1);
console.log(arr);


const myN2 = arr ;
console.log("B", myN2);

const myN3 = arr.splice(1,3)
console.log("C", myN3);
console.log(arr);




























