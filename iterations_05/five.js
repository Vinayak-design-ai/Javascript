// for each loop
let coding = ["Js" , "Cpp" , "Java" , "Html"]
coding.forEach( function  (val) {
    //console.log(val);
    
})

coding.forEach( (item) => {
   // console.log(item);
    
} )

// function printME(item) {
//     console.log(item);
    
// }

// coding.forEach(printME)

coding.forEach( (item , index , arr) => {
    //console.log(item , index , arr);
    
} )

let codingLang = [
    {
        languageName : "Javascript",
        lagnuageFileName : "Js"
    },

    {
        languageName : "Java",
        lagnuageFileName : "Java"
    },

    {
        languageName : "Python",
        lagnuageFileName : "Py"
    }
]

codingLang.forEach( (item) => {
    console.log(item.lagnuageFileName);
    
} )