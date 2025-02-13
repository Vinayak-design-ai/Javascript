// // ++++ This Promise was Written in 2 PArts
// const promiseOne = new Promise( function (resolve , reject) {
//     // Do an async task
//     // DB calls , cryptography , network
//     setTimeout(function(){
//         console.log("Async Task is Complete");
//            resolve()
//     }, 1000)
 
// } )

// promiseOne.then (function (){
//     console.log("Promise Consumed");
// })

// // ++++ Writing Promise In Single Line 
// new Promise( function(resolve , reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve()
//     } , 1000)
// }).then(function(){
//     console.log("Async Task 2 Completed ");
    
// })

// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({username : "Vinayak" , mail : "hii@123.com"})
//     } , 1000)
// })
// promiseThree.then(function(obj){
//     console.log(obj);
// })

// const promiseFour = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         let error = true ;
//         if (!error) {
//             resolve({username : "Hii@123" , password : "1234"})
//         } else {
//             reject("ERROR FOUND : Something went wrong")
//         }
//     } ,1000 )
// } )
//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
    
// } )
// .catch((error) => {
//     console.log(error);
// })
// .finally ( () => {console.log("The Promise is either Resolved or Rejected");
// })

// const promiseFive = new Promise (function (resolve , reject) {
//     setTimeout(() => {
//         let error = true ;
//         if (!error) {
//             resolve({username : "JavaScript" , password : "1234"})
//         } else {
//             reject("ERROR FOUND : JS went wrong")
//         }
//     } ,1000 )
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()


// async function getAllUsers (){
//    try {
//         const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//         const data = awaitresponse.json()
//          console.log(data);
//    } catch (error) {
//         console.log("E :" , error);
        
//    }
    
// }
// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()   
// } )
// .then((data) => {
//     console.log(data);
// } )
// .catch((error) => console.log(error));

// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url , [1,2,3,4])

// .then((response) => {
//     // console.log( obj);
//     // console.log(response);
//     return response.json()
// })
// .then ( (a) => {
//    console.log(a);
// })
// .catch( (error) => console.log(error))

// const promiseSix = new Promise((resolve ,reject)=>{
//     setTimeout(()=>{
//         resolve({username : "Vinnay" , password : "1234"})
//         reject("Error Found")
//     } , 1000 )
//     console.log(typeof resolve);
//     console.log(resolve.username);
    
//     return resolve
// })
// .then((response) => {
//     console.log(response)
// })
// .catch((error)=> console.log(error))

// const promiseThree = new Promise ((resolve , reject )=>{
//     resolve({username : "Vinayak" , mail : "hii@123.com"})

// } )
// promiseThree.then((as)=> {
//     console.log(as);
// })

// fetch('https://randomuser.me/api/')
// .then((response) => response.json() )
// .then (data => {
//    let user =  data.results[0]
//     console.log(`Area ${user.location.street.number} ${user.location.street.name} `);
//     console.log(`Result ; ${user.dob.date} && ${user.dob.age}`);
    
// })
// .catch(error => console.error("Error" , error))

// fetch('https://randomuser.me/api/')
// .then((response) => response.json() )
// .then((data) => {
//     // console.log(data);
//     let user = data.results[0]
//     // console.log(user);
//     console.log(`First name :${user.name.first} & Last Name : ${user.name.last}`); 
// } )
// .catch((error) => console.log("Error" , error))

fetch('https://jsonplaceholder.typicode.com/posts')
.then((resolve) => resolve.json() )
.then((data)=> {
    for (let i = 0; i < 99; i++) {
        const a = i 
        let user = data[a]
        console.log(`Title :${user.title} & Body : ${user.body}`);
    }
} )
.catch((error) => console.log(error))