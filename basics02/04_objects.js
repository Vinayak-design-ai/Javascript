//const instaUser = new Object(name = "vinayak") // ths is singleton object
const whatsUser = {}
whatsUser.id = "123.abc"
whatsUser.email = "hii@gmail.com"
whatsUser.isActive = false 
const instaUser = { // non-singleton object
    username : {
        firstName : "Vinayak",
        lastName : "agnihotri" , // the process of objects in objects is called nesting
        dob : {
            month : "November",
            date : 26 , 
            year : 2004,
        }
    },
    password : "124abc"
}
// console.log(instaUser.username.dob.month);
const obj1 = { 1 : "a" , 2 : "b"}
const obj2 = { 3 : "a" , 4 : "b"}
const obj3 = { 5 : "a" , 6 : "b"}
const obj4 = { 7 : "a" , 8 : "b"}

// const obj5 = Object.assign( {} , obj1 , obj2 , obj3 , obj4)

const obj5 = {...obj1 , ...obj2}// spread to join the arrays
// console.log(obj5);
// console.log(whatsUser);
// console.log(Object.keys(whatsUser)); // gives the keys of the object in the array
// console.log(Object.values(whatsUser)); // gives the values in array 
// console.log(Object.entries(whatsUser)); // gives arrays of single line in array
// console.log(whatsUser.hasOwnProperty('isActives')); //  tells whether the object has the particular property or nit

const course = {
    courseName : "JS in hindi",
    price : 9999 ,
    courseInstructor : "Mr . Vinayak"
}
// console.log( course.courseInstructor); this is a good method but cant be used when u need to run it repetedly
// const {courseInstructor} = course // here u defined the course in which the value of courseinstructor is thats why it was possible to print it directly
// console.log(courseInstructor); 
// console.log(course.courseInstructor); // here u have to definw the obj in which the particular key and value is
const {courseInstructor : hii} = course // in this one you can assign the specific key a different name or key for your comfort 
console.log(hii);  // this process is known as DESTRUCTURING  

// { // this is called JSON in objects
//   "name" : "Mr. Vinayak",
//   "coursename" : "JS in hindi" , 
//   "price" : 999
// }

// [ this is called JSOn in arrays
//     {},
//      {},
//      {}


// ]

// API's And JSON samaj ni aaya thoda 
