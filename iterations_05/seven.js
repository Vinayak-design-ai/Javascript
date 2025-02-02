// const numsAdd = [ 1,2,3,4,5,6,7,8,9,10]
// const myNums = (numsAdd.map( (nums) => `Multiple of 5 is : ${nums*5}`))
// console.log(myNums);
const numsAdd = [ 1,2,3,4,5,6,7,8,9,10]
const myNums = (numsAdd.map( (nums ) =>{
    if (nums%2 !== 0 ) {
    //    return console.log(`${nums} is an odd number `);
        
    } else ;
    // console.log(`${nums} is an even number `);
    } ))
// console.log(myNums);

const nums= [1,2,3,4,5,6,7,8,9,10]
const addNums = nums
        .map( (num) =>  num *10 ) // this is called as CHAINING of MAPS 
        .map( (num) => num + 1 )
        .filter ( (num) => num >=50 ) // can also add filters along with chaining of maps .
        // .map( (num) => num / 10 )
        // .map( (num) => num + 0.9 )
console.log(addNums);

