var virus;
var bkg;
var extCell;
var process;
var hivStructure;


function preload() {
  virus = loadImage('assets/SVG/hivVirus.svg');
  bkg = loadImage('assets/bkg.png');
  extCell = loadImage('assets/SVG/extCell.svg');
  process = loadImage('assets/SVG/process.svg');
  hivStructure = loadImage('assets/SVG/hivStructure.svg');
}

function setup() {
  createCanvas(1280, 720);
  // mySound.setVolume(0.1);
  // mySound.play();
}

function draw() {
  image(bkg, 0, 0, 1280, 720);



}
