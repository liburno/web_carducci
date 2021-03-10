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

// ************** normalizza i dati per avere l'elenco delle informazioni:
var fields = []
for (var d of data) {
    for (var x in d) {
        if (x != 'id') fields.push(x);
    }
}
fields = [...new Set(fields)];
console.log('Elenco proprietà', fields);
var maxtipi = fields.length;
var tot = {};
for (var d of data) {
    var r = [];
    for (var f in d) {
        r.push(f);
    }
    d.fields = r;
    for (var x of fields) {
        if (!tot[x]) tot[x] = [];
        if (d[x]) tot[x].push(d[x]);
    }
}
for (var x of fields) {
    tot[x] = [...new Set(tot[x])];
}

console.log('Possibili valori:');
for (var f in tot) {
    console.log(f,tot[f]);
}
