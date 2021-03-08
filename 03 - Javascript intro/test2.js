const fs=require("fs");



// questo è un commento 

var studente = {
    nome: {
        cognome: 'alessio',
        nome: 'gianmarco'
    },
    eta: 23,
    abita: 'trieste',
    punteggi: [
        1,
        "prova", 
        {
            materia:'danza',
            valore:1
        },
        {
            materia:'volo',
            valore:2
        }
    ]
}

var tm=JSON.stringify(studente,null,2);
fs.writeFileSync("out.json",tm);

//var st2=JSON.parse(tm);
//console.log(st2);
