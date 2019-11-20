var fontDiner
var grid;
var myfloor;
var angle = 0;
var bkgMusic

var catPos;
var myState = 0;
var timer = 0;
var leftF, rightF, leftB, rightB, head;
var mice = [];
var pieces = [];
var stomachX = 72;
var stomachY = 200;
var start;
var win;
var lose;
var winSound;
var loseSound;

function preload() {
  leftF = loadImage('assets/leftFront.png');
  rightF = loadImage('assets/rightFront.png');
  leftB = loadImage('assets/leftBack.png');
  rightB = loadImage('assets/rightBack.png');
  head = loadImage('assets/head.png');
  tail = loadImage('assets/tail.png')
  grid = loadImage('assets/grid.png');

  start = loadImage('assets/start.png');
  win = loadImage('assets/win.png');
  lose = loadImage('assets/lose.png')

  bkgMusic = loadSound('assets/456797__anechoix__jazz-music-loop.mp3');
  winSound = loadSound('assets/396174__funwithsound__success-triumph-resolution-sound-effect_01.mp3')
  loseSound = loadSound('assets/174427__badly99__domino-sound-effect_01.mp3')

  bkgMusic.loop();
  bkgMusic.stop();
  winSound.play();
  winSound.stop();
  loseSound.play();
  loseSound.stop();
}

//-----------------------------------------end of cat and mouse assets
//Position of left hand side of floor
let base1;

//Position of right hand side of floor
let base2;
//Length of floor
//let baseLength;

// Variables related to moving ball
let position;
let velocity;
let r = 24;
let speed = 3.5;

function preload() {
  mice[0] = loadImage('assets/mice1.png');
  mice[1] = loadImage('assets/mice2.png');
  mice[2] = loadImage('assets/mice3.png');
  mice[3] = loadImage('assets/mice4.png');
  mice[4] = loadImage('assets/mice3.png');
  mice[5] = loadImage('assets/mice2.png');
  myfloor = loadImage('assets/woodFloor.jpg');
}



function setup() {
  createCanvas(1080, 720);

base1 = createVector(0, height);
base2 = createVector(width, height);
  //createGround();

  //start ellipse at middle top of screen
  position = createVector(random(), 0);

  //calculate initial random velocity
  velocity = p5.Vector.random2D();
  velocity.mult(speed);

  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  //draw background
  fill(200);

  // angleMode(DEGREES);
  // fontDiner = loadFont('assets/FontdinerSwanky-Regular.ttf')

  noStroke();
//  rect(0, 0, width, height);

  //------------------------------------------draw floor
  createCanvas(1080, 720);
  image(myfloor, width / 2, height / 2);
  //-------------------------------------------------------------------
  quad(base1.x, base1.y, base2.x, base2.y, base2.x, height, 0, height);

  //calculate base top normal
  let baseDelta = p5.Vector.sub(base2, base1);
  baseDelta.normalize();
  let normal = createVector(-baseDelta.y, baseDelta.x);
  let intercept = p5.Vector.dot(base1, normal);

  //draw ellipse
  noStroke();
  fill(255);
  ellipse(position.x, position.y, r * 2, r * 2);

  //move ellipse
  position.add(velocity);

  //normalized incidence vector
  incidence = p5.Vector.mult(velocity, random(-1));
  incidence.normalize();

  // detect and handle collision with base
  if (p5.Vector.dot(normal, position) > intercept) {
    //calculate dot product of incident vector and base top
    let dot = incidence.dot(normal);

    //calculate reflection vector
    //assign reflection vector to direction vector
    velocity.set(
      2 * normal.x * dot - incidence.x,
      2 * normal.y * dot - incidence.y,
      0
    );
    velocity.mult(speed);

    // draw base top normal at collision point
    stroke(255, 128, 0);
    line(
      position.x,
      position.y,
      position.x - normal.x * 100,
      position.y - normal.y * 100
    );
  }
  //}

  // detect boundary collision
  // right
  if (position.x > width - r) {
    position.x = width - r;
    velocity.x *= -1;
  }
  // left
  if (position.x < r) {
    position.x = r;
    velocity.x *= -1;
  }
  // top
  if (position.y <= r) {
    position.y = r;
    velocity.y *= -1;
  }
  // bottom
  if (position.y >= height - r) {
    position.y = height - r;
    velocity.y *= -1
  }
}
