//--------------------------------------------------backgroud var
var myfloor;
var grid;
//--------------------------------------------------var
var x = 0;
var y = 0;
var catPos;
var myState = 0;
var timer = 0;
var myLegs, myBody, head;
var direction = [];
var stomachX = 65;
var stomachY = 214;
var speed = 0;
var mice = [];
var pieces = [];
var directions = [];
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
  //---------------------------
  //--------------------------------------------------Cat location
  catPos = createVector(width / 2, height / 2 - 100);
  catVel = createVector();
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
  game();
}
//------------------------------------------------------draw end

//--------------------------------------------------------piece class
function Piece() {
  //attributes
  this.pos = createVector(width - 50, height - 50);
  this.vel = createVector(random(-6, 6), random(-6, 6));
  this.miceNum = 0;
  this.timer = 0;
  this.maxTimer = (1, 10);
  this.vx = 0;
  this.vy = 0;


  //methods
  //----------this.display
  this.display = function() {
    push();
    //animating the mices
    //map(this.vel.mag() == this.maxTimer * -1);
    map(this.maxTimer === this.vel.mag());
    stroke(0);
    noFill();
    ellipse(this.pos.x, this.pos.y, 150, 150);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    image(mice[this.miceNum], 0, 0);
    pop();

    if (this.timer > this.maxTimer) {
      this.miceNum = this.miceNum + 1;
      this.timer = 0;
    }

    //code to repeat mice animating
    if (this.miceNum > mice.length - 1) {
      this.miceNum = 0;
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

    //    collide();
    //--------------mouse collide
    let dx = this.pos.x - this.x;
    let dy = this.pos.y - this.y;
    let piece = sqrt(dx * dx + dy * dy);

    if (pieces[i].pos.dist(pieces[i + 1].pos) < 20) {
      let angle = atan2(dy, dx);
      let targetX = (this.x + cos(angle) * this.piece().x);
      let targetY = (this.y + sin(angle) * this.piece().y);
      let ax = (targetX - this.piece().x) * spring;
      let ay = (targetY - this.piece().y) * spring;
      this.vx -= ax;
      this.vy -= ay;
      this.piece.vx += ax;
      this.piece.vy += ay;
    }

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

    // translate(this.pos.x, this.pos.y);
    // rotate(this.vel.heading());

    fill('green');
    ellipse(catPos.x, catPos.y, 25, 25);
    translate(catPos.x - 100, catPos.y - 65);

    //translate(catPos.x, catPos.y);
    //rotate(catPos.heading());



    cat();
    pop();
    checkForKeys();

  }
  //-----------------------------------------------------end game

  //----------------------------------------------------- keyPressed
  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      // push();
      // //translate(catPos.x, catPos.y);
      //
      // rotate(angle);
      // // cat(catPos.x, catPos.y);
      // // catPos.x -= 20;
      // angle -= 10;
      // pop();
    }
    //
    if (keyCode === RIGHT_ARROW) {

      translate(catPos.x, catPos.y);
    }

  }


  //----------------------------------------------------cat
  function cat() {
    push();
    image(myLegs, 100, 165);
    image(myBody, 104, 209, stomachX, stomachY);
    image(head, 105, 226);
    pop();
  }
  //-----------------------------------------------------cat end
}
