

// questo è un commento 

var studente = {
    nome: {
        cognome: 'alessio',
        nome: 'gianmarco'
    },
    fullname() {
        return `${this.nome.cognome} ${this.nome.nome}`
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


studente.indirizzo = 'via carducci';
delete (studente.fullname);

console.log(studente.fullname());

studente.fullname = () => {
    return `${studente.indirizzo} ${studente.abita}`
}

console.log(studente.fullname());

studente.fullname = 15 + 5;
console.log(studente);

