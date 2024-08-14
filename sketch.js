let font1, font2; 
let value = 255; 

function preload() { 
  font1 = loadFont("Montserrat-Medium.ttf"); 
}

function setup() {
  //createCanvas(1920, 1080, WEBGL); // horizontal 
  //createCanvas(1080, 1350, WEBGL);
  //createCanvas(1080, 1920, WEBGL); // vertical screen
  createCanvas(800,800, WEBGL);
  //textFont(inconsolata);
  textFont(font1); 
  textSize(48); 
  textAlign(CENTER, CENTER);
  noCursor();
}

// function mouseDragged() { 
//   value += 10; 
// }

function drawMe() { 
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 2000);
  fill(value); 
  text('me', 0, 0);
}

function drawYou() { 
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 2000);
  fill(value); 
  //text('you',  mouseX/3 + random(5), mouseY/3);
   text('you', 0 + random(5), 150);
  flower();
}

function drawTogether() { 
  let time = millis();
  rotateX(time / 1000);
  rotateY(time / 1000);
  fill(255, 0, 0); 
  strokeWeight(8); 
  text('us together', 0 + random(5), 150);
}

// Flower
function drawFlower() { 
  let time = millis();
  rotateX(time / 5000);
  rotateZ(time / 5000);
  fill(value); 
  flower();
}

// US -- 
function drawUs() { 
  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 2000);
  fill(0); 
  text('us',  mouseX/3 + random(5), height/2);
}

function flower(){ 
  push();
  fill(230, 190, 230, 240);
  translate(mouseX, mouseY);
  noStroke();
  for (var r1 = 0; r1 < 10; r1++) {
    if (frameCount <= 1000) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 1000) {
      ellipse(0, 40, 25, 50);
    }
    rotate(PI / 5);
  }
  pop();
}

function draw() {
  background(0);

  drawMe(); 
  
  for (var i = 0; i < 12; i++) { 
    drawYou();
    
    for (var j = 0; j < 12; j ++){
       drawFlower(); 
    }
  }

  
  // us
  if(mouseIsPressed){ 
    let c = color(255, mouseX, mouseY);
    fill(c);
    background(c, 0, c);
    
    for (var i = 0; i < 12; i++) { 
    fill(255, 0, 0); 
    drawUs();
    
    for (var j = 0; j < 12; j ++){
        fill(255, 0, 0); 
       drawFlower(); 
    }
  }
    
    drawTogether();
  }
}