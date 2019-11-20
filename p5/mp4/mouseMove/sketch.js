var myfloor;
var grid;
//--------------------------------------------------backgroud variables
var x = 0;
var y = 0;




var speed = 0;

var mice = [];
var pieces = [];
var directions = [];
var vector = 0;

//----------------------------------------------------preload
function preload() {
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



  //--------------------------Spawn cars
  for (var i = 0; i < 10; i++) {
    pieces.push(new Piece());
  }
  //---------------------------
}
//-----------------------------------------------------end setup
//-----------------------------------------------------draw
function draw() {
  image(myFloor, 0, 0);


}
//------------------------------------------------------end draw


function Piece() {
  //--------------------------------------------------------attributes
  this.pos = createVector(width - 50, height - 50);
  this.vel = createVector(-5, 5);
  this.direction = p5.Vector.random2D();
  this.miceNum = 0;
  this.timer = 0;


  //------------------------------------------------------- methods
  this.display = function() {
    image(mice[this.miceNum], this.pos.x, this.pos.y);



    if (this.timer > 20) {
      this.miceNum = this.miceNum + 1;
      this.timer = 0;
    }


    //don't go past
    if (this.miceNum > mice.length - 1) {
      this.miceNum = 0;
    }
  }


  //don't go past
  if (this.miceNum > mice.length - 1) {
    this.miceNum = 0;
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;


  }
}





//------------------------------------------------------piece class
