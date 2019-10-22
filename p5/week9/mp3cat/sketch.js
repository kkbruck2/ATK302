var cat = [];
var frogPos;
var myState = 0;
var timer = 0;
var leftF, rightF, leftB, rightB, head;
var mice;
var mice = [];


function setup() {

  createCanvas(800, 800);

  leftF = loadImage('assets/leftFront.png');
  rightF = loadImage('assets/rightFront.png');
  leftB = loadImage('assets/leftBack.png');
  rightF = loadImage('assets/rightBack.png');
  head = loadImage('assets/head.png')


  mice = loadImage('assets/mice1.png');
  mice[0] = loadImage('assets/mice1.png');
  mice[1] = loadImage('assets/mice2.png');
  mice[2] = loadImage('assets/mice3.png');
  mice[3] = loadImage('assets/mice4.png');


  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}
//------------------------------------------------end setup
function draw() {
  // draw the cat
  stroke(0);
  fill(80);
  ellipse(300, 300, 72, 214);
}
