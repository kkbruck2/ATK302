var grid;
var virus;
var bkg;
var extCell;
var process;
var hivStructure;
var hivLgVirus;
var micIcon;
var hivState = 0;
var vol;
var delayTimer = 0;

var mic;

function preload() {

  virus = loadImage('assets/hivVirus.png');
  bkg = loadImage('assets/bkg.jpg');
  extCell = loadImage('assets/outerCell.png');
  process = loadImage('assets/process.png');
  hivStructure = loadImage('assets/hivStructure.png');
  hivLgVirus = loadImage('assets/hivLgVirus.png');
  micIcon = loadImage('assets/mic.png');
}

function setup() {
  createCanvas(1080, 720);


  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  image(bkg, 0, 0);
  image(hivLgVirus, 380, 150);

  image(micIcon, 510, 500, 50, 100);

  textSize(48);
  fill(153, 51, 0);
  textStyle(BOLD);
  text("HIV Replication Cycle", 300, 110);

  textSize(24);
  fill(153, 51, 0);
  textStyle(ITALIC);
  text("Click on mic and say GO!", 405, 650);

  // Get the overall volume (between 0 and 1.0)
  vol = mic.getLevel();
  vol = vol * 100;

  if (delayTimer > 0) {
  delayTimer--;
}

  if ((vol > 5) && (delayTimer == 0)) {  // you may have to change that 9
  delayTimer = 30;

      // do something like advance the state (myState++)

}



  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  ellipse(width / 2, h - 25, 50, 50);
  image(virus, 89, 45);
}

function touchStarted() {
  getAudioContext() .resume();
}
