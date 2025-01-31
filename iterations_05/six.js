let coding = ["Js" , "Cpp" , "Java" , "Html"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
} )
// console.log(values);

const nums = [1,2,3,4,5,6,7,8,9,10]
const myNums = nums.filter( (num) => {
    // return num > 4 
})
// console.log(myNums);

const books = [
    {title : "Bookone" , year : 2000 , genre : " Non- Fiction"},
    {title : "BookTwo" , year : 2001 , genre : "Fiction"},
    {title : "BookThree" , year : 2002 , genre : "History"},
    {title : "BookFour" , year : 2003 , genre : " Non - Fiction"},
    {title : "BookFive" , year : 2004 , genre : "Fiction"},
    {title : "BookSix" , year : 2005 , genre : "History" }
];
const theBooks = (books.filter((bok) => bok.genre === "History"));
console.log(theBooks)
const theBooks2 = (books.filter((buk) => buk.genre === "Fiction"));
console.log(theBooks2)
const myBook = books.filter( (bk) => { 
    return bk.year > 2002 && bk.genre === "History"} )
console.log(myBook);

