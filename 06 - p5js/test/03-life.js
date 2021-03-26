var CW, CH, rows, cols,gr0,gr1,tm;
const size = 20;

function checksize() {
    CW = windowWidth;
    CH = windowHeight;
    rows = floor(CH / size)+1;
    cols = floor(CW / size)+1;
}

function init() {
    background(240);
    gr0=[];
    gr1=[];
    for (var i=0;i<rows;i++) {
        var c=[],d=[];
        for (var j=0;j<cols;j++) {
            c.push(random()<.3?1:0);
            d.push(0);
        }
        gr0.push(c);
        gr1.push(d);
    }
    noStroke();
}
var count=0;
function evolve() {
    count++;
    function clamp(i,max) { return i<0?i+max:i % max };
    for (var r=0;r<rows;r++) {
        for (var c=0;c<cols;c++) {
            var c0=clamp(c-1,cols),c1=clamp(c+1,cols),r0=clamp(r-1,rows),r1=clamp(r+1,rows);
            // somma gli 8 elementi che cirdondano la cella corrente
            var tt =gr0[r0][c0]+gr0[r0][c]+gr0[r0][c1]+ 
                    gr0[r ][c0]           +gr0[r ][c1]+
                    gr0[r1][c0]+gr0[r1][c]+gr0[r1][c1];
            var t=gr0[r][c];
            if (random()<.0001) t=1-t;
     
            if (t) {
                if (tt<2 || tt>3 ) { 
                    //Qualsiasi cella viva con meno di due celle vive adiacenti muore, come per effetto d'isolamento;
                    // Qualsiasi cella viva con più di tre celle vive adiacenti muore, come per effetto di sovrappopolazione;
                    t=0;
                } else { 
                    // Qualsiasi cella viva con due o tre celle vive adiacenti sopravvive alla generazione successiva;
                }
            } else {
                if (tt==3) t=1;
                // Qualsiasi cella morta con esattamente tre celle vive adiacenti diventa una cella viva, come per effetto di riproduzione.
            }
            gr1[r][c]=t;  
        }
    }
    tm=gr1,gr1=gr0,gr0=tm;
}

function mousePressed() {
    init();
}

function windowResized() {
    checksize();
    init();
}

function setup() {
    checksize();
    var can = createCanvas(CW, CH).parent("canvas");
    init();
    frameRate(20);
}

function draw() {
    for (var r=0;r<rows;r++) {
        for (var c=0;c<cols;c++) {
            if (gr0[r][c]==1) {
                fill(0,128,0);
            } else {
                fill(255);
            } 
            circle((c+.5)*size,(r+.5)*size,size-3);
        }
    }
    evolve();
}