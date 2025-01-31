const myobj = {
    Js : "Javascript",
    Cpp : "C++" , 
    Rb : "Ruby" ,
    Swift : "Swift by Apple"
}

for (const key in myobj) {
   //console.log(`${key} is shortcut for ${myobj[key]}`);
   
}

let programLang = [ "Js" , "Cpp" , "JAVA" , "Py" , "RB"]
for (const key  in programLang) {
    console.log(`Languages are : ${programLang[key]} `);
    
}
