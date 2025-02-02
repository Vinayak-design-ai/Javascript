// REDUCE 
// most common use is to get the total of the shopping carts .
const myNums = [999 , 499 , 856 , 852 , 734 ]
const myTotal = myNums.reduce(function(acc , currval) {
    // console.log(`Acc value: ${acc} and currval : ${currval}`);
    
    return acc + currval
}, 0)
// console.log(myTotal);


// Shopping cart 
const myShoppingCart = [
    {
        item : "js course",
        price : 3999
    },
    {
        item : "py course",
        price : 999
    },
    {
        item : "mobile dev course",
        price : 6999
    },
    {
        item : "c++ course",
        price : 5999
    },
]

const myPricetoPay = myShoppingCart.reduce( (acc ,item ) => acc + item.price, 0)
console.log(`The Total Price is ${myPricetoPay} `);
