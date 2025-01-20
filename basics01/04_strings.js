const name = "Vinayak";
let repocount = 50 ;

console.log(`My name is ${name} & my repo count is ${repocount}`);// Template Literals
const gameName = new String("Vinayak Is Back")
console.log(gameName.toLowerCase())
console.log(gameName.charAt(8))
console.log(gameName.indexOf("k"))

let newString = gameName.substring(0,4)
console.log(newString)
let anotherString = "    hitesh .   "
console.log(anotherString);
console.log(anotherString.trim());
console.log(gameName.split(" "));
console.log(`The sentence contains the word ${gameName.includes("Back")} ${"Back"}`);
