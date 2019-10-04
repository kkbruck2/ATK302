var grid;
var virus;
var process;
var bkg;
var micIcon;

var hivTimer = 0;


function preload() {

  virus = loadImage('assets/hivVirus.png');
  process = loadImage('assets/process.png');
  bkg = loadImage('assets/bkg.jpg');
  micIcon = loadImage('assets/mic.png');
}

function setup() {
  createCanvas(1080, 720);
  grid = loadImage('assets/grid.png');

}

function draw() {
  image(bkg, 0, 0);

  noStroke();
  image(process, 0, 0);
  image(virus, 89, 45);
  textSize(36);
  fill(153, 51, 0);
  textStyle(BOLD);
  text("Replication process", 380, 50);

  noFill();
//  stroke(255);

  stroke(153, 51, 0);
  strokeWeight(2);
//1
  rect(78, 40, 120, 110);
//2
  rect(224, 85, 120, 110);
//3
  rect(119, 230, 120, 110);
//4
  rect(290, 291, 120, 110);
//5
  rect(470, 322, 120, 110);
//6
  rect(700, 305, 120, 110);
//7
  rect(800, 485, 120, 110);
//8
  rect(951, 450, 120, 110);
//9
  rect(886, 238, 120, 110);
//10
  rect(800, 92, 120, 110);

  rect(934, 35, 120, 110);

image(micIcon, 10, 610, 50, 100);



//  image(grid, 0, 0);


  // switch (hivTimer) {
  //
  //   case 0: // green state

    // break;

      //end of draw

}

function mouseReleased() {
  console.log(mouseX + ',' + mouseY);
}
  // function (hivTimer) {
  //   timer--;
  //   if (timer <= 0) {
  //     timer = variableTimer;
  //     myState = variableState;
  //   }
  // }
