
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
const frase = 'la vispa teresa avea tra l\'erbetta.';
const flen = frase.length;

const options = {
    variazionegenetica: 0.05

}

class DNA {
    constructor(genera = true) {
        this.fitness = 0;
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
        return (`data: ${res.join('')}, fit:${this.fitness}`);
    }
    sex(father) {
        var res = new DNA(false);
        for (var i = 0; i < flen; i++) {
            var rx = random();
            if (rx < 0.02) {
                res.data[i] = randint(nchars);
            } else if (rx < .60) {
                res.data[i] = this.data[i];
            } else {
                res.data[i] = father.data[i];
            }
        }
        res.computefitness();
        return res;
    }
}

class World {
    
    constructor(opz) {
        this.opz=opz;
        this.gen=0;
        this.data=[];
        for (var i=0;i<opz.pop;i++) {
            this.data.push(new DNA());
        }
        this.data=this.data.sort((a,b)=>a.fitness-b.fitness) ;
    }
    get fitness () {
        return this.data[0].fitness;
    }
    evolve() {
        this.gen++;
        var res=[];
        for (;;) {
            var madre=this.data[randint(20)];
            var padre=this.data[randint(60)];
            var figlio=madre.sex(padre);
            res.push(figlio);
            if (res.length>=this.opz.pop) break;
        }
        this.data=res.sort((a,b)=>a.fitness-b.fitness);
        return this.fitness;
    }

    dump() {
        console.log(`\ngen:${this.gen}`);
        for (var i=0;i<5;i++) {
            console.log(this.data[i].dump());
        }

    }


}


var ww=new World({
    pop:200

}
);
for (;;) {
    if (ww.evolve()==0) break;
    console.log(ww.dump());

}
console.log(ww.dump());
