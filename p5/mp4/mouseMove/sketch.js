var myfloor;
var grid;
//--------------------------------------------------backgroud variables
var x = 0;
var y = 0;
var s = 0.0;
var catPos;
var myState = 0;
var timer = 0;
var myLegs, myBody, head;
var mice = [];
var pieces = [];
var direction = [];
var stomachX = 65;
var stomachY = 214;





var speed = 0;

var mice = [];
var pieces = [];
var directions = [];
var vector = 0;

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
  //---------------------------
  //--------------------------------------------------Cat location
  catPos = createVector(width / 2, height / 2);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}
//-----------------------------------------------------end setup
//-----------------------------------------------------draw
function draw() {
  image(myFloor, width / 2, height / 2);
  game();




}
//------------------------------------------------------end draw


function Piece() {
  //--------------------------------------------------------attributes
  this.pos = createVector(width - 50, height - 50);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.miceNum = 0;
  this.timer = 0;
  this.maxTimer = random(1, 8);

  //------------------------------------------------------- methods
  this.display = function() {
    //  translate(p5.Vector.fromAngle(millis() / 1000, 40));

    push();
    // animating the mices
    //map(this.vel = this.maxTimer.mag());
    map(this.maxTimer == this.vel.mag());
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    image(mice[this.miceNum], 0, 0);
    this.timer++;


    if (this.timer > this.maxTimer) {
      this.miceNum = this.miceNum + 1;
      this.timer = 0;

    }

    //don't go past
    if (this.miceNum > mice.length - 1) {
      this.miceNum = 0;
    }


    pop();
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}

//------------------------------------------------------piece class  end

function game() {
  for (var i = 0; i < pieces.length; i++) {
    pieces[i].display();
    pieces[i].drive();
    if (pieces[i].pos.dist(catPos) < 100) {
      pieces.splice(i, 1);
      stomachX += 3;
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

}

//--------------------------------------------------------myBelly class
// function Belly() {
//   //--------------------------------------------------------attributes
//   this.pos = createVector(100, 100);
//   this.s = 0.0;
//
//   // this.vel = createVector(random(-5, 5), random(-5, 5));
//   // this.miceNum = 0;
//   // this.timer = 0;
//   // this.maxTimer = random(1, 8);
//
//   //------------------------------------------------------- methods
//   this.display = function() {
//     //  translate(p5.Vector.fromAngle(millis() / 1000, 40));
//
//     image(myBody, 0, 0);
//
//     //don't go past
//   }
//
//   this.drive = function() {
//     this.x = stomachX;
//     this.y = 214;
//
//
//   }
//
//
// }

//------------------------------------------------------belly class end
//
// function game() {
//   for (var i = 0; i < pieces.length; i++) {
//     pieces[i].display();
//     pieces[i].drive();
//   }
//   if (pieces[i].pos.dist(catPos) < 100) {
//     pieces.splice(i, 1);
//     //      stomachX += 5;
//   }
//
// }
//-----------------------------------------------------cat

function cat() {
  push();
  //translate(100, 100);
  fill(95);
  image(myLegs, 100, 165);
  image(myBody, 104, 209, stomachX, stomachY);
  image(head, 105, 226);
  pop();
}
