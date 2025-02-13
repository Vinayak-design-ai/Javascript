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
.then((data )=> {
    let user = data[0]
    console.log(`Title :${user.title} & Body : ${user.body}`);
} )
.catch((error) => console.log(error))