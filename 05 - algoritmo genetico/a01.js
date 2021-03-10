
const random=Math.random;
const floor=Math.floor;
function randint (valore)  {
    return floor(random() * valore);
} 

const scambia = (v) => {
    let c = v.length;
    while (c > 0) {
        let ci = randint(c)
        c--; let t = v[c]; v[c] = v[ci]; v[ci] = t;
    }
    return v;
}

var v=[1,2,3,4,5,6,7,8,9];


/*
var arr=[];
for (var i=0;i<10;i++) {
    arr.push(i);
    process.stdout.write(' '+randint(10));
}

console.log(`\narray`,arr);
for (var i=0;i<10;i++) {
    arr=scambia(arr);
    console.log(arr);
}

*/