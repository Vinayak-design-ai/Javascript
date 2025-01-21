const score = 400 ;
// console.log(score);

let account = new Number(100);
// console.log(account);

// console.log(account.toFixed(3))

const anotherNum = 1123.8793
// console.log(anotherNum.toPrecision(5));

const hundreds = 100000000
// console.log(hundreds.toLocaleString());


// +++++++++++++++ MATHS ++++++++++++++++//
// console.log(Math.abs(-44));
// console.log(Math.round(4.45));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,5,9,8));
// console.log(Math.max(4,8,9,3));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1)
const min = 10;
const max = 20;
console.log(Math.random() * (max - min + 1) + min  );
console.log(Math.random() * (max - min + 1) + max  );
console.log(Math.floor(Math.random() * (max - min + 1) + max  ));
console.log(Math.floor(Math.random() * (max - min + 1) + min  ))
// (max - min + 1) This formula givyes you range in which the number should be
// Math.floor displays the least value if number is in decimal (4.6 or 4.9 will become 4)
// adding min or max in the function will give us the result tht we need
// Math.Ceil gives you the top value after round off ( 4.2 or 4.2 will become 5)
