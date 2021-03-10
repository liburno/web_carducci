// il test completo.


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
const vchars = 'qwertyuiopasdfghjklzxcvbnm .\'';
const nchars = vchars.length;
// frase da indovinare
const frase = 'la vispa teresa avea tra l\'erbetta';
const flen = frase.length;

const options = {
    variazionegenetica: 0.07,
    population:200,
    popsurv:20,
    popevolve:80,

}



class DNA {
    constructor(genera = true,gen=0) {
        this.fitness = 0;
        this.gen=gen;
        this.data = [];
        if (genera) {
            for (var x = 0; x < flen; x++) {
                this.data.push(randint(nchars));
            }
            this.computefitness();
        }
    }
    computefitness() {
        var er = 0;
        for (var i = 0; i < this.data.length; i++) {
            if (vchars[this.data[i]] != frase[i]) er++;
        }
        this.fitness = er;
        return er;
    }
    dump() {
        var res = [];
        for (var x of this.data) {
            res.push(vchars[x]);
        }
        return (`data: ${res.join('')}, fit:${this.fitness}:${this.gen}`);
    }
    generate(father) {
        var res = new DNA(false);
        for (var i = 0; i < flen; i++) {
            var rx=random();
            if (rx<options.variazionegenetica) {
                res.data[i]= randint(nchars);
            } else if (rx < .55) {
                res.data[i] = this.data[i];
            } else {
                res.data[i] = father.data[i];
            }
        }
        res.gen=this.gen++;
        res.computefitness();
        return res;
    }
}

class World {
    constructor() {
        this.generazione=0;
        this.pop=[];
        for (var i =0; i<options.population;i++) {
            this.pop.push(new DNA(true));
        };
        this.pop=this.pop.sort((a,b)=>{return a.fitness-b.fitness})
    }
    dump() {        // ordina per fitness e stampa i primi 3 :
        process.stdout.write(`\n${this.generazione}-${this.minfitness}: ${this.pop[0].dump()} - ${this.pop[1].dump()} - ${this.pop[2].dump()}`);
    }
    get minfitness () {
        return this.pop[0].fitness;
    }
    evolve() {
        // decide chi evolve
        var rr=[];
        for (;;) {
            if (rr.length>=options.population) break;
            var r1=randint(options.popsurv);
            var r2=randint(options.popevolve);
            if (r1!=r2) {
                rr.push(this.pop[r1].generate(this.pop[r2]));
            }
        }
        this.generazione++;
        this.pop=rr.sort((a,b)=>{return a.fitness-b.fitness})
        return this.minfitness;

    }
    

}
var ww=new World();
var mn=10000;
for (;;) {
    if (mn>ww.minfitness) {
        mn=ww.minfitness;   
        ww.dump();
    } 
    if (!ww.evolve()) break;
 
}
ww.dump();