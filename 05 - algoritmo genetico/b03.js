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


const random=Math.random;
const floor=Math.floor;
const randint = (valore) => floor(random() * valore) 
const scambia = (v) => {
    let c = v.length;
    while (c > 0) {
        let ci = randint(c)
        c--; let t = v[c]; v[c] = v[ci]; v[ci] = t;
    }
    return v;
}


// -------------------- funzione fondamentale per calcolare la fitness di una combinazione
var calcolaErrori = (list) => {
    var er = 0;
    var matcherr = (dd) => {
        for (var d of data) {
            var n1 = d.fields.length, n2 = 0;
            if (n1 > 1) {
                for (var i = 0; i < d.fields.length; i++) {
                    var f = d.fields[i];
                    if (d[f] == dd[f]) n2++;
                }
            }
            if (n2 > 0 && n2 != n1) er++; // cè un errore se non sono soddisfatte contemporaneamente tutte le condizioni
        }
    }
    var matchAltri = (d) => {
        var sx = d.id > 0 ? list[d.id - 1] : {};
        var dx = d.id < maxtipi - 1 ? list[d.id + 1] : {};
        if (d.colore == 'verde' && !(dx.colore == 'bianco')) er++                           //la casa verde è a sinistra di quella bianca
        if (d.fuma == 'blends' && !(sx.animale == 'gatto' || dx.animale == 'gatto')) er++;    // l'uomo che fuma le blends vive vicino a quello che ha i gatti
        if (d.animale == 'cavallo' && !(sx.fuma == 'dunhill' || dx.fuma == 'dunhill')) er++;  //l'uomo che ha i cavalli vive vicino a quello che fuma le dunhill
        if (d.nazione == 'nor' && !(sx.colore == 'blu' || dx.colore == 'blu')) er++           //il norvegese vive vicino alla casa blu
        if (d.blends == 'blends' && !(sx.bevanda == 'acqua' || dx.bevanda == 'acqua')) er++;  // l'uomo che fuma le blends ha un vicino che beve acqua
    }
    for (var dd of list) {
        matcherr(dd);
        matchAltri(dd);
    }
    return er;
}



class DNA {
    constructor(genera = true) {
        this.fitness = 0;
        this.data = [];
        if (genera) {
            for (var x of fields) {   // scombina i valori
                tot[x] = scambia(tot[x]);
            }
            for (var i = 0; i < maxtipi; i++) {
                var s = { id: i };
                for (var x of fields) {
                    s[x] = tot[x][i];
                }
                this.data.push(s);
            }
            this.fitness = calcolaErrori(this.data);
            return this;
        }
    }
    dump() {
        var r = [], r1 = [];
        var pad = (str, l) => { return (str + '                       ').substr(0, l); }
        r.push(`fitness:${this.fitness}`);
        r1.push(pad("id", 5));
        for (var x of fields) r1.push(pad(x, 10));
        r.push(r1.join(','));
        for (var d of this.data) {
            r1 = [];
            r1.push(pad(d.id, 5));
            for (var x of fields) r1.push(pad(d[x], 10));
            r.push(r1.join(','));
        }
        return r;
    }
    generate(father, scambi) {
        var res = new DNA(false);
        for (var i = 0; i < maxtipi; i++) {
            res.data.push({ id: i });
        }
        // mescola il DNA dei genitori
        for (var x of fields) {
            var rx = Math.random();

            if (rx < .55) {
                for (var i = 0; i < maxtipi; i++) res.data[i][x] = this.data[i][x]; // genes from mother are dominants
            } else {
                for (var i = 0; i < maxtipi; i++) res.data[i][x] = father.data[i][x];
            }
        }
        // e crea alcune variazioni casuali
        for (var i = 0; i < scambi; i++) {
            var i1 = randint(fields.length);
            var i2 = randint(fields.length);
            var i3 = fields[randint(fields.length)];
            if (i1 != i2) {
                var t = res.data[i1][i3];
                res.data[i1][i3] = res.data[i2][i3];
                res.data[i2][i3] = t;
            }
        }
        res.fitness = calcolaErrori(res.data)
        return res;
    }
}

    console.log(new DNA(true).dump());

