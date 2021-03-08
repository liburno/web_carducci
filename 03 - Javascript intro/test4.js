// prove assegnazioni per valore e riferimento!

var a=10;
var b=a;

b+=2;
console.log('numero', a,b);

var a='10';
var b=a;

b+='a1';
console.log('stringa', a,b);


var a={primo:'10',secondo:1};
var b=a;

b.secondo=2;
console.log('oggetto', a,b);

var a={primo:'10',secondo:1};
var b=Object.assign({},a,c);

b.secondo=2;
console.log('oggetto per valore', a,b);

var a={primo:'10',secondo:1};
var c={terzo:'prova',primo:'11'}
var b=Object.assign({},a,c);
console.log('oggetti composti', a,c, b);



