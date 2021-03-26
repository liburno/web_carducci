var CW,CH;
function checksize() {
    CW=windowWidth;
    CH=windowHeight;
}


function preload() {

}

function windowResized() {
    checksize();
    resizeCanvas(CW,CH);
}

function setup() {
    console.log("here");
    checksize();
    var can=createCanvas(CW,CH).parent("canvas");
    createButton("Reset").parent("info").mousePressed(()=>{
        background(0,64,32);
    });
    createButton("white").parent("info").mousePressed(()=>{
        stroke(255);
    });
    createButton("red").parent("info").mousePressed(()=>{
        stroke(255,0,0);
    });
    createButton("green").parent("info").mousePressed(()=>{
        stroke(0,255,0);
    });
    createButton("blue").parent("info").mousePressed(()=>{
        stroke(0,0,255);
    });
    
    
 //   frameRate(10);
    background(0,64,32);
    stroke(255);
    strokeWeight(3);
}

function draw() {
    if (mouseIsPressed) {
            line(mouseX, mouseY, pmouseX, pmouseY);
    }

}