
const vchars = 'qwertyuiopasdfghjklzxcvbnm .\''.split('');
const nchars = vchars.length;
// frase da indovinare
var frase = 'la vispFDFDSFDSFASDGFDFGDFAGa teDFDFDresa avea tra l\'erbetta';

if (!Array.prototype.includi) {
    Array.prototype.includi = function (v) {
        return this.includes(v);
    }
}


function includi (array,v) {
    return array.includes(v);
}


var controllaStringa = (stringa) => {
    var res = [];
    for (var c of stringa) {
        // if (includi(vchars,c)) res.push(c);  // con funzione 
        // if (vchars.includi(c)) res.push(c);  // con prototipo
        if (vchars.includes(c)) res.push(c);
    }
    return res.join('')
}

frase = controllaStringa(frase);
var flen = frase.length;

console.log(frase);