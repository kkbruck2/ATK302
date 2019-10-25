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
  myfloor = loadImage('assets/woodFloor.jpg');
  start = loadImage('assets/start.png');
  win = loadImage('assets/win.png');
  lose = loadImage('assets/lose.png')
  mice[0] = loadImage('assets/mice1.png');
  mice[1] = loadImage('assets/mice2.png');
  mice[2] = loadImage('assets/mice3.png');
  mice[3] = loadImage('assets/mice4.png');
  mice[4] = loadImage('assets/mice3.png');
  mice[5] = loadImage('assets/mice2.png');
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
//-----------------------------------------------------------setup
function setup() {

  createCanvas(1080, 720);
  angleMode(DEGREES);
  fontDiner = loadFont('assets/FontdinerSwanky-Regular.ttf')


  grid = loadImage('assets/grid.png');
  bkgMusic.play();





  //--------------------------Spawn cars
  for (var i = 0; i < 10; i++) {
    pieces.push(new Piece());
  }
  //---------------------------
  //-------------------------------------------------spawn
  catPos = createVector(width / 2, height / 2);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}
//------------------------------------------------end setup

//-------------------------------------------------------------draw
function draw() {
  image(myfloor, width / 2, height / 2);

  textFont(fontDiner);
  switch (myState) {

    case 0:
      bkgMusic.play();
      myState = 1;
    case 1:
      fill(0);
      textSize(80);
      textAlign(CENTER);
      text("Let's Hunt Mice!", width / 2, 150);
      image(start, width / 2, height / 2);
      winSound.stop();
      loseSound.stop();

      break;

    case 2:
      game();
      timer++;
      if (timer > 1000) {
        myState = 5;
        timer = 0;
      } // the game state
      break;

    case 3:
      winSound.play();
      bkgMusic.stop();
      myState = 4;
      break;

    case 4: // the win state
      fill(0);
      textSize(48);
      textAlign(CENTER);
      text("Hee..Hee! WE WON!", width / 2, 150);
      image(win, width / 2, height / 2);

      break;

    case 5:
      bkgMusic.stop();
      loseSound.play();
      myState = 6;
      break;

    case 6: // the lose state
      fill(0);
      textSize(48);
      textAlign(CENTER);
      text("uh...oh", width / 2, 250);
      image(lose, width / 2, 450);
      break;


  }
  //cat(catPos.x, catPos.y);
  //image(mice, 200, 200);
}
//----------------------------------------------------end draw
//mouseReleased
function mouseReleased() {
  switch (myState) {
    case 1:
      myState = 2;
      break;
    case 4:
      resetTheGame();
      myState = 0;
      break;
    case 6:
      resetTheGame();
      myState = 0;
      break;
  }
}
//---------------------------------------------------end mouseReleased


//-----------------------------mice class!!
function Piece() {
  //--------------------------------------------------------attributes
  this.pos = createVector(width - 50, height - 50);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.miceNum = 0;
  this.timer = 0;


  //------------------------------------------------------- methods
  this.display = function() {
    image(mice[this.miceNum], this.pos.x, this.pos.y);
    this.timer++;

    if (this.timer > 20) {
      this.miceNum = this.miceNum + 1;
      this.timer = 0;
    }


    //don't go past
    if (this.miceNum > mice.length - 1) {
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

//--------------------------------------------------------end piecs class

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    //     // translate(catPos.x, catPos.y);
    //     // rotate(angle);
    //     // cat(catPos.x, catPos.y);
    //     catPos.x -= 20 ;
    angle -= 5;
  }
  //
  if (keyCode === RIGHT_ARROW) {
    //     // translate(catPos.x, catPos.y);
    //     // rotate(angle);
    //     // cat(catPos.x, catPos.y);
    //   catPos.x += 20 ;
    angle += 5;
  }
}

function checkForKeys() {
  if (keyIsDown(UP_ARROW )) catPos.y = catPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) catPos.y = catPos.y + 5;
  if (keyIsDown(LEFT_ARROW)) catPos.x = catPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) catPos.x = catPos.x + 5;

}
//reset the game
function resetTheGame() {
  pieces = [];
  //--------------------------Spawn cars
  for (var i = 0; i < 20; i++) {
    pieces.push(new Piece());
  }
  timer = 0;
  stomachX = 72;

}
//-----------------------------------------------end game reset

//------------------------------------------------------ game
function game() {
  for (var i = 0; i < pieces.length; i++) {
    pieces[i].display();
    pieces[i].drive();
    if (pieces[i].pos.dist(catPos) < 100) {
      pieces.splice(i, 1);
      stomachX += 5;
    }
  }

  if (pieces.length == 0) {
    myState = 3;
    timer = 0;
  }
  push();

  //rotate(angle);
  ellipse(catPos.x, catPos.y, 25, 25);

  translate(catPos.x, catPos.y);
  fill('green');


  cat();
  pop();
  checkForKeys();

}


//--------------------------------------------------------------cat function
function cat() {
  push();
  translate(-250, -210);
  stroke(0);
  fill(95);
  image(leftB, 255, 335);
  image(rightB, 340, 335);
  ellipse(300, 300, stomachX, stomachY);
  image(leftF, 340, 190);
  image(rightF, 255, 190);
  image(tail, 325, 450);
  image(head, 300, 170);

  pop();
}
