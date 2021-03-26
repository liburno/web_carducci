// TURTLE STUFF:
let x, y, step, angle = 0,iscircle=false;

let rule = 'B'; // "axiom" or start of the string
let rules = {
    A: '-BF+AFA+FB-',
    B: '+AF-BFB-FA+'
};
for (var i = 0; i < 7; i++) {
    rule = lindenmayer(rule);
}

function lindenmayer(s) {
    var res = [];
    for (var i = 0; i < s.length; i++) {
        var t = rules[s[i]];
        res.push(t ? t : s[i]);
    }
    return res.join('')
}


let whereinstring = 0; // where in the L-system are we?

function init() {
    background(20);
    stroke(0, 0, 0, 128);
    x = step / 2;
    y =  step / 2;
    pos=0;angle=0;
}

function mousePressed() {
    init();
}
function setup() {
    createCanvas(windowWidth, windowHeight).parent("canvas");
    step = floor(windowWidth<windowHeight?windowWidth:windowHeight / 24);
    rectMode(CENTER);
    init();   
}
var pos = 0;
function draw() {
    drawIt(rule[pos]);
    pos++;
    if (pos > rule.length) pos = 0;
}

function drawIt(k) {
    if (k == 'F') {   // f sposta
        let x1 = x + step * cos(angle);
        let y1 = y + step * sin(angle);
        iscircle=random()<.5;
       // fill(random(128, 255), random(200, 240));
       // noStroke();
       // rect(x1,y1,step,step);
        stroke(128);
        line(x, y, x1, y1);
        x = x1;
        y = y1;
        
    } else if (k == '+') { // + ruota a dx
        angle += Math.PI / 2;
    } else if (k == '-') { // - ruota a sx
        angle -= Math.PI / 2;
    }

    let r = random(5, step);
    
    fill(random(128, 255), random(0, 192), random(0, 50), random(10, 80));
    stroke(150);
    if (iscircle) circle(x,y,r); else rect(x,y,r,r);
    //rect(x,y,3,3);
}