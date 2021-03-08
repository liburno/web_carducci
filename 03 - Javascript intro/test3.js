const fs=require("fs");



// questo è un commento 

var studente=JSON.parse(
    fs.readFileSync("out.json")
); 

console.log(studente);
