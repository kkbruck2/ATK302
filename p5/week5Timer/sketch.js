var grid;
var virus;
var process;
var bkg;

var hivTimer = 0;


function preload() {

  virus = loadImage('assets/hivVirus.png');
  process = loadImage('assets/process.png');
  bkg = loadImage('assets/bkg.jpg');
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

  rect(78, 40, 120, 110);

  rect(214, 69, 120, 115);

  rect(79, 196, 170, 135);

  rect(302, 291, 100, 130);

  rect(418, 342, 150, 90);

  rect(590, 313, 250, 180);

  rect(845, 484, 80, 90);

  rect(951, 484, 80, 90);

  rect(886, 238, 170, 135);

  rect(812, 92, 110, 110);

  rect(934, 35, 110, 110);




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
