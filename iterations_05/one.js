// // for loop

// // for (let num = 1; num <= 100; num++) {
// //     const element = num;
// //     console.log(element);  
// // }

// for (let num = 1; num <= 10; num++) {
//     const element = num;
//     if (element === 5) {
// //         console.log("This number is 5");
        
// //     }
// //     console.log(element);  
// // }

// // for (let i = 0; i <= 10; i++) {
// //     const element = i;
// //     console.log(`outer loop is ${i}`);
// //     for (let j = 0; j <= 10; j++) {
// //         const element = j;
// //         // console.log(`inner loop is ${j} and outer loop is ${i}`);
// //     console.log(`${i} * ${j} = ${i*j}`);
    
// //     }
// // }
// const superHero = ["Ironman" , "Thor" , "Captain America"]
// for (let index = 0; index < superHero.length ; index++) {
//     // const element = superHero[index];
//     // console.log(element);
    
// }
// ++ BREAK +++++++
// in break no further code is executed after it hits break
// for (let index = 1; index < 20; index++) {
//     if (index == 8) {
//         console.log("Dedected number 8");
//         break
//     }
//     console.log(`The value of index is ${index}`);
// }

// ++++ CONTINUE +++++++\
// in continue , it skips that one specific condition where continue is used and rest all are printed..
for (let index = 1; index < 20; index++) {
    if (index == 8) {
        console.log("Dedected number 8");
        continue
    }
    console.log(`The value of index is ${index}`);
}