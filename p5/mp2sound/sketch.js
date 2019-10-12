var grid;
var virus;
var bkg;
var extCell;
var process;
var hivStructure;
var hivLgVirus;
var micIcon;
var hivState = 0;
var hivStart = 0;
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

  vol = mic.getLevel();
  vol = vol * 100;

  if (delayTimer > 0) {
        delayTimer--;
  }

  if ((vol > 5) && (delayTimer == 0)) { // you may have to change that 9
    delayTimer = 30;

    hivState = 1;
    // if (hivState = 1) {
    //   hivState = 0
    // }
  }



  switch (hivStart) {
    //Opening screen

    case 0:

     image(hivLgVirus, 380, 150);


      break;
      //Using mic and sound in to switch

    case 1:
      image(virus, 89, 45);

      break;

    case 2:
        image(extCell, 89, 45);

        break;
        //drag virus over the cell
      //drag virus over the cell
    }


  // Draw an ellipse with height based on volume

  // let h = map(vol, 0, 1, height, 0);
  // ellipse(width / 2, h - 25, 50, 50);


  // textSize(40);
  // fill(0);
  // text("My volume is " + vol, 80, 400);
  // text("Your Score is  " + score, 80, 600);




//end draw
}



function touchStarted() {
  getAudioContext().resume();
}
