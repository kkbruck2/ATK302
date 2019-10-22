var cats = [];
var frogPos;
var myState = 0;
var timer = 0;
var leftF, rightF, leftB, rightB, head ;
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

  //--------------------------Spawn cats
  for (var i = 0; i < 5; i++) {
    mice.push(new mice());
  }
  //---------------------------

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}
//------------------------------------------------end setup
function draw() {
  switch (myState) {

    case 0:
      background(100);
      fill(0);
      textSize(24);
      textAlign(CENTER);
      text("Welcome to my game!", width / 2, height / 2);
      break;

    case 1:
      background('red');
      game();
      timer++;
      if (timer > 1000) {
        myState = 3;
        timer = 0;
      } // the game state
      break;

    case 2:
      background('green'); // the win state
      fill(0);
      textSize(24);
      textAlign(CENTER);
      text("YOU WIN!", width / 2, height / 2);
      break;

    case 3: // the lose state
      background('yellow');
      fill(0);
      textSize(24);
      textAlign(CENTER);
      text("YOU LOSE!", width / 2, height / 2);
      break;

  }

}
//----------------------------------------------------end draw

//add a mouse released
function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;
    case 2:
      resetTheGame();
      myState = 0;
      break;
    case 3:
      resetTheGame();
      myState = 0;
      break;
  }
}
//-----------------------------cat class!!
function cat() {
  //--------------------------------------------------------attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.miceNum = 0;
  this.timer = 0;

  //------------------------------------------------------- methods
  this.display = function() {
    // fill(this.r, this.g, this.b);
    // rect(this.pos.x, this.pos.y, 100, 50);
    // ellipse(this.pos.x - 45, this.pos.y + 25, 50, 50);
    // ellipse(this.pos.x + 45, this.pos.y + 25, 50, 50);
    //image(mice, this.pos.x, this.pos.y,);

    image(mices[this.miceNum], this.pos.x, this.pos.y, 100, 100,);
    this.timer++;

    if (this.timer > 20) {
    this.miceNum = this.miceNum + 1;
    this.timer = 0;
    }


    //don't go past
    if (this.miceNum > mices.length - 1) {
      this.miceNum = 0;
    }
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
//--------------------------------------------------- end of cat class
function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaLeft;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function resetTheGame() {
  cats = [];
  //--------------------------Spawn cats
  for (var i = 0; i < 5; i++) {
    cats.push(new cat());
  }
  timer = 0;
  //--------------------------------
}
//------------------------------------------------------ game
function game() {
  background(100);
  for (var i = 0; i < cats.length; i++) {
    cats[i].display();
    cats[i].drive();
    if (cats[i].pos.dist(frogPos) < 50) {
      cats.splice(i, 1);
    }
  }

  if (cats.length == 0) {
    myState = 2;
    timer = 0;
  }
  // draw the cat
  fill(80);
  ellipse(300, 300, 72, 214);

  // ellipse(frogPos.x, frogPos.y, 60, 60);
  image(yoda, frogPos.x, frogPos.y);
  checkForKeys();
}

//--------------------------------
