//--------------------------------------------------backgroud var
var myfloor;
var grid;
//--------------------------------------------------var
var x = 0;
var y = 0;
var catPos;
var timer = 0;
var myLegs, myBody, head;
var stomachX = 65;
var stomachY = 214;
var speed = 0;
var mice = [];
var pieces = [];
var vector = 0;
var angle = 0;
var spring = 0.05;


//------------------------------------------------------var end
//----------------------------------------------------preload
function preload() {
  head = loadImage('assets/head_1.png');
  myLegs = loadImage('assets/legs.png');
  myBody = loadImage('assets/body.png');
  myFloor = loadImage('assets/woodFloor.jpg');
  grid = loadImage('assets/grid.png');
  mice[0] = loadImage('assets/mice1.png');
  mice[1] = loadImage('assets/mice2.png');
  mice[2] = loadImage('assets/mice3.png');
  mice[3] = loadImage('assets/mice4.png');
  mice[4] = loadImage('assets/mice3.png');
  mice[5] = loadImage('assets/mice2.png');
}
//----------------------------------------------------end preload
//----------------------------------------------------setup
function setup() {
  createCanvas(1080, 720);

  //--------------------------Spawn mice
  for (var i = 0; i < 20; i++) {
    pieces.push(new Piece());
  }
  //---------------------------Spawn end
  //--------------------------------------------------Cat location
  catPos = createVector(0, 0);
  catVel = createVector();
  myHeading = createVector(mouseX - catPos.x, mouseY - catPos.y);
  //--------------------------------------------------Modes

  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
}
//-----------------------------------------------------setup end

//-----------------------------------------------------draw
function draw() {
  image(myFloor, width / 2, height / 2);
}
//------------------------------------------------------draw end

//--------------------------------------------------------piece class
function Piece() {
  function Piece() {
    //----attributes
    this.pos = createVector(width - 50, height - 50);
    this.vel = createVector(random(-7, 7), random(-7, 7));
    this.miceNum = 0;
    this.timer = 0;
    this.maxTimer = (1, 5);
    //----- methods
    // display

    this.display = function() {
      //  translate(p5.Vector.fromAngle(millis() / 1000, 40));

      push();
      // animating the mices
      map(this.maxTimer * -1 === this.vel.mag());
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      image(mice[this.miceNum], 0, 0);
      this.timer++;


      if (this.timer > this.maxTimer) {
        this.miceNum = this.miceNum + 1;
        this.timer = 0;

      }


      //mice reset
      if (this.miceNum > mice.length - 1) {
        this.miceNum = 0;
      }


      pop();

    }
    //drive
    this.drive = function() {
      this.pos.add(this.vel);

      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;

    }

  }

  //--------------------------------------------------------end pieces class
  //--------------------------------------------------------keyPressed
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
  //--------------------------------------------------------keyPressed end

  //---------------------------------------------------------checkForKeys
  function checkForKeys() {
    if (keyIsDown(UP_ARROW)) catPos.y = catPos.y - 5;
    if (keyIsDown(DOWN_ARROW)) catPos.y = catPos.y + 5;
    if (keyIsDown(LEFT_ARROW)) catPos.x = catPos.x - 5;
    if (keyIsDown(RIGHT_ARROW)) catPos.x = catPos.x + 5;

  }
  //---------------------------------------------------------checkForKeys

  //---------------------------------------------------------reset the game
  function resetTheGame() {
    pieces = [];
    //--------------------------Spawn cars
    for (var i = 0; i < 20; i++) {
      pieces.push(new Piece());
    }
    timer = 0;
    stomachX = 72;

  }

}
//----------this.display end
//--------- this.drive
this.drive = function() {
  this.pos.add(this.vel);

  if (this.pos.x > width) this.pos.x = 0;
  if (this.pos.x < 0) this.pos.x = width;
  if (this.pos.y > height) this.pos.y = 0;
  if (this.pos.y < 0) this.pos.y = height;

}

//------------------------------------------------------piece class  end

//------------------------------------------------------game
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



  fill('green');
  ellipse(catPos.x, catPos.y, 25, 25);
  translate(catPos.x - 100, catPos.y - 65);

  cat();
  pop();
}


function cat() {
  push();
  image(myLegs, 100, 15);
  image(myBody, 104, 65, stomachX, stomachY);
  image(head, 105, 77);
  pop();
}
