
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

// lista dei caratteri possibili
const vchars = 'qwertyuiopasdfghjklzxcvbnm .';
const nchars = vchars.length;
// frase da indovinare
const frase = 'to be or not to be';
const flen = frase.length;




class DNA {
    constructor(genera = true) {
        this.fitness = 0;
        this.data = [];
        if (genera) {
            for (var i=0;i<flen;i++) {
                this.data.push(randint(nchars));
            }
            this.computefitness();
        }
    }
    computefitness() {
        // calcola un numero che indica quanto sono vicino alla soluzione.
        var er=0
        for (var i=0;i<flen;i++) {
            if (vchars[this.data[i]]!=frase[i]) er++;
        }
        
        this.fitness = er;
    }
    dump() {
        var res=[];
        for (var i=0;i<flen;i++) {
            res.push(vchars[this.data[i]]);
        }
        console.log(`fitness: ${this.fitness} - ${res.join('')}`)
    }
    generate(father) {
        // genera per combinazione
    }
}

for (var i=0;i<50;i++) {
    var el=new DNA();
    el.dump();
}