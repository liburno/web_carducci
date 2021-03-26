var CW, CH, rows, cols,gr0,gr1,tm;
const size = 40;

function checksize() {
    CW = windowWidth;
    CH = windowHeight;
    rows = floor(CH / size)+1;
    cols = floor(CW / size)+1;
}

function init() {
    background(40);
    gr0=[];
    gr1=[];
    for (var i=0;i<rows;i++) {
        var c=[],d=[];
        for (var j=0;j<cols;j++) {
            c.push({r:(random()<.1?1:0),g:(random()<.1?1:0),b:(random()<.1?1:0)});
            d.push({r:0,g:0,b:0});
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
    for (var ra=0;ra<rows;ra++) {
        for (var ca=0;ca<cols;ca++) {
            var c0=clamp(ca-1,cols),c1=clamp(ca+1,cols),r0=clamp(ra-1,rows),r1=clamp(ra+1,rows);
            // somma gli 8 elementi che cirdondano la cella corrente
            var tt={
                  r:gr0[r0][c0].r+gr0[r0][ca].r+gr0[r0][c1].r+ 
                    gr0[ra][c0].r              +gr0[ra][c1].r+
                    gr0[r1][c0].r+gr0[r1][ca].r+gr0[r1][c1].r,
                  
                  g:gr0[r0][c0].g+gr0[r0][ca].g+gr0[r0][c1].g+ 
                    gr0[ra][c0].g              +gr0[ra][c1].g+
                    gr0[r1][c0].g+gr0[r1][ca].g+gr0[r1][c1].g,

                  b:gr0[r0][c0].b+gr0[r0][ca].b+gr0[r0][c1].b+ 
                    gr0[ra][c0].b              +gr0[ra][c1].b+
                    gr0[r1][c0].b+gr0[r1][ca].b+gr0[r1][c1].b
            }
            var {r,g,b}=gr0[ra][ca];
            if (random()<.005 && r) g=r;
            else if (random()<.005 && g) b=g;
            else if (random()<.005 && b) r=b;
            if (r) {
                if (tt.r<2 || tt.r>3 ) r=0;
            } else {
                if (tt.r==3) r=1;
            }
            if (g) {
                if (tt.g<2 || tt.g>3 ) g=0;
            } else {
                if (tt.g==3) g=1;
            }
            if (b) {
                if (tt.b<2 || tt.b>3 ) b=0;
            } else {
                if (tt.b==3) b=1;
            }
            gr1[ra][ca]={r,g,b};  
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
            var t=gr0[r][c];
            fill(t.r*255,t.g*255,t.b*255);
            circle((c+.5)*size,(r+.5)*size,size-3);
        }
    }
    evolve();
}