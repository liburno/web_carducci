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
           // this.fitness = calcolaErrori(this.data);
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

