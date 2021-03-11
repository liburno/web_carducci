
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
    constructor(genera = true,test=1) {
        this.fitness = 0;
        this.data = [];
        if (genera) {
            // genera elementi casuali
            this.computefitness();
        }
    }
    computefitness() {
        // calcola un numero che indica quanto sono vicino alla soluzione.
        this.fitness = er;
    }
    dump() {
        // mostra i dati
    }
    generate(father) {
        // genera per combinazione
    }
}

var el=new DNA();
el.dump();

