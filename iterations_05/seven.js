// const numsAdd = [ 1,2,3,4,5,6,7,8,9,10]
// const myNums = (numsAdd.map( (nums) => `Multiple of 5 is : ${nums*5}`))
// console.log(myNums);
const numsAdd = [ 1,2,3,4,5,6,7,8,9,10]
const myNums = (numsAdd.map( (nums = nums %2 === 0) =>`${nums} is an even number ` ))
console.log(myNums);

