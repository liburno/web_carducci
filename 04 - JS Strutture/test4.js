var data = [
    { nazione: 'ing', colore: 'rosso' },
    { nazione: 'sve', animale: 'cane' },
    { nazione: 'dan', bevanda: 'te' },
    { colore: 'verde', bevanda: 'caffe' },
    { fuma: 'pall', animale: 'uccelli' },
    { colore: 'giallo', fuma: 'dunhill' },
    { id: 2, bevanda: 'latte' },
    { id: 0, nazione: 'nor' },
    { fuma: 'bluemaster', bevanda: 'birra' },
    { nazione: 'ger', fuma: 'prince' },
    { colore: 'bianco' },
    { fuma: 'blends' },
    { animale: 'gatto' },
    { animale: 'cavallo' },
    { animale: 'pesce' },
    { colore: 'blu' },
    { bevanda: 'acqua' }
]

var prp = [];
for (var ele of data) {  // scorre ogni elemento del vettore
    for (var n in ele) { // scorre ogni elemento dell'oggetto
        // console.log(n,'->',ele[n]);
        // if (!prp.includes(n)) prp.push(n);
        if (n != 'id') prp.push(n);
    }
}
var insieme = new Set(prp)
prp = [...insieme];
//console.log(prp);
/*
var tot = {};
for (var t of prp) {
    tot[t] = [];
}
for (var ele of data) {
    for (var n in ele) {
        if (n!='id') {
            var v=ele[n];
            var tm=tot[n];
        
            if (tm.includes(v)) tm.push(v); 
        }     
    }
}
*/

for (var t of prp) {
    tot[t] = [];
    for (var ele of data) {
        for (var n in ele) {
            if (n == t) {
               var v=ele[n];
               if (!tot[t].includes[v]) tot[t].push(v);      
            }
        }
    }
}
console.log(tot);





/*  accesso all'oggetto
var a={primo:1,secondo:2, terzo:3};

console.log(a.primo);
console.log(a['primo']);

*/

/* concatenazione di vettori
var a=[1,2,3];
var b=[
    4,
    5,
    6
];
var c=[...a,...b];
console.log(c);
*/