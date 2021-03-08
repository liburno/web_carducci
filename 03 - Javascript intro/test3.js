const fs=require("fs");



// questo è un commento 

var studente=JSON.parse(
    fs.readFileSync("out.json")
); 

console.log(studente);


var st2 = studente;
//var st2 = JSON.parse(JSON.stringify(studente));
//var st2= Object.assign({},studente) ;


console.log(studente)
console.log(studente)
st2.nome.nome="rossi";

console.log(studente);
console.log("st2=",st2);
