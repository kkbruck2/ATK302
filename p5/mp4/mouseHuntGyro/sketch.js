//-------------------------------------------------------gyro variables
var beta, gamma; // orientation data
var bunnyImage;
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;
var cars = [];
var frogPos;
var pstate1 = false ;
var pstate2 = false ;
var alreadyTouched = false;
//-----------------------------------------------------------gyro variables end

//-----------------------------------------------------------Mouse hunt variable
var chalk;
var fontDiner;
var grid;
var myfloor;
var angle = 0;
var bkgMusic
var catPos;
var myState = 0;
var timer = 0;
var myLegs, myBody, head;
var mice = [];
var pieces = [];
var direction = [];
var stomachX = 65;
var stomachY = 214;
var start;
var win;
var lose;
var winSound;
var loseSound;

//------------------------------------------------------------mouse hunt var end
//------------------------------------------------------preload
function preload() {
  myLegs = loadImage('assets/legs.png');
  myBody = loadImage('assets/body.png')
  head = loadImage('assets/head_1.png');
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
//------------------------------------------------------preload end


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  fontDiner = loadFont('assets/FontdinerSwanky-Regular.ttf');
  grid = loadImage('assets/grid.png');
  bkgMusic.play();
 // requestT() ;

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;


    //--------------------------Spawn mice
    for (var i = 0; i < 20; i++) {
      pieces.push(new Piece());
    }
    //---------------------------spawn end
    catPos = createVector(width / 2, height / 2);
    rectMode(CENTER);
    ellipseMode(CENTER);
    imageMode(CENTER);

  }
  //------------------------------------------------end setup



function draw() {

  background('#c6f5ff'); // light blue

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

 // image(bunnyImage, 0, 0, 500, 500);

    	ellipse(0, 0, 200, 200) ;
  pop();


  catPos.x = xPosition;
  catPos.y = yPosition;

  // iterate through the car loop
  for (var i = 0; i < pieces.length; i++) {
    piece[i].display();
    piece[i].drive();
    if (pieces[i].pos.dist(catPos) < 50) {
      pieces.splice(i, 1);
    }
  }


  // DECORATIONS
  // Just a bunch of text commands to display data coming in from addEventListeners
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);


  text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y, 25, 170);
  text("z = " + z, 25, 190);

  // MORE DECORATIONS - write that pretty ATK type on top.

}

// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});





//---------------------------------------------------------- car class!!
function Piece() {
  //--------------------------attributes
  this.pos = createVector(width - 50, height - 50);
  this.vel = createVector(random(-6, 6), random(-6, 6));
  this.miceNum = 0;
  this.timer = 0;
  this.maxTimer = (1, 8);



  //-----------------------------methods

    this.display = function() {
      //  translate(p5.Vector.fromAngle(millis() / 1000, 40));

      push();
      // animating the mices
      if (this.vel > 0)map(this.maxTimer * -1 === this.vel.mag());
      if (this.vel < 0)map(this.maxTimer === this.vel.mag());
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
  //------------------------------------------------------mouse keyPressed
  function mousePressed() {

    xOffset = mouseX - catPos.x;
    yOffset = mouseY - catPos.y;


  }
  //----------------------------------------------------mouse keyPressed end

  //-----------------------------------------------------mouseDragged
  function mouseDragged() {

    catPos.x = mouseX - xOffset;
    catPos.y = mouseY - yOffset;

    if (mouseX + 1 > 1)
      push();
    translate(catPos.x, catPos.y);

    rotate(angle);
    cat(catPos.x, catPos.y);
    angle -= 10;
    pop();

  }

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
  //----------------------------------------------------------end game reset

  //------------------------------------------------------------ game
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


    translate(catPos.x - 100, catPos.y - 65);

    //translate(catPos.x, catPos.y);
    //rotate(catPos.heading());



    cat();
    pop();
    //checkForKeys();

  }
  //------------------------------------------------------------ game end

  //--------------------------------------------------------------cat function
  function cat() {
    push();
    image(myLegs, 100, 165);
    image(myBody, 104, 209, stomachX, stomachY);
    image(head, 105, 226);

    pop();
  }
