var x = 0;
var y = 0;

var grid;
var virus;
var bkg;
var extCell;
var process;
var hivStructure;
var hivLgVirus;
var micIcon;
var hivState = 0;
var mic;
var vol;
var delayTimer = 0;

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
  // put setup code here
  createCanvas(1080, 720);
}

function draw() {
  image(bkg, 0, 0);

  textSize(30);
  fill(153, 51, 0);
  textStyle(ITALIC);
  text("Coming soon: Attachment and Entry Into Target Cell", x, 50);
  x += 5;
  if (x > width) {
    x = -700;
  }

  // x += 5; //velocity


  // put drawing code here
}
