var cats = [];
var frogPos;
var myState = 0;
var timer = 0;

function setup() {

  createCanvas(800, 800);
  //--------------------------Spawn cats
  for (var i = 0; i < 5; i++) {
    cats.push(new cat());
  }
  //---------------------------

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
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


  //------------------------------------------------------- methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 100, 50);
    ellipse(this.pos.x - 45, this.pos.y + 25, 50, 50)
    ellipse(this.pos.x + 45, this.pos.y + 25, 50, 50)
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
  // draw the frog
  fill('green');
  ellipse(frogPos.x, frogPos.y, 60, 60);
  checkForKeys();
}

//--------------------------------
