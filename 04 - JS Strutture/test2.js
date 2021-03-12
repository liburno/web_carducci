
const vchars = 'qwertyuiopasdfghjklzxcvbnm .\''.split('');
const nchars = vchars.length;
// frase da indovinare
var frase = 'la vispFDFDSFDSFASDGFDFGDFAGa teDFDFDresa avea tra l\'erbetta';


var controllaStringa=(stringa)=> {
    var res=[];
    for (var c of stringa) {
        if (vchars.includes(c)) res.push(c);
    }
    return res.join('')
}

frase=controllaStringa(frase);
var flen = frase.length;

console.log(frase);