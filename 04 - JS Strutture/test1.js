
const vchars = 'qwertyuiopasdfghjklzxcvbnm .\''.split('');
const nchars = vchars.length;
// frase da indovinare
const frase = 'la vispa Teresa avea tra l\'erbetta';
const flen = frase.length;


//console.log(frase.substr(3,2)); 
// divide una stringa
var v=frase.split(' ');
console.log(v); 

console.log(v.join('.'));
