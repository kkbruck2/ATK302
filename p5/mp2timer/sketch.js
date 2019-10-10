var grid;
var virus;
var process;
var bkg;
var micIcon;
var processTime = 0;

var timer = 0;


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

  // print(timer);


  noStroke();
  image(process, 0, 0);
  image(virus, 89, 45);
  textSize(36);
  fill(153, 51, 0);
  textStyle(BOLD);
  text("Replication process", 380, 50);
  noFill();
  stroke(153, 51, 0);
  strokeWeight(2);

  timer++;

  if ((timer >= 100) && (processTime < 10)) {
    processTime++;
    timer = 0;

  }



  switch (processTime) {
    case 0:
      //structure
      rect(78, 40, 120, 110);

      break;

    case 1:
      //Attachment
      rect(224, 85, 120, 110);
      break;

    case 2:
      //reverse transcription
      rect(119, 230, 120, 110);
      break;

    case 3:
      //intergration
      rect(290, 291, 120, 110);
      break;

    case 4:
      //transcription
      rect(470, 322, 120, 110);
      break;

    case 5:
      //translation
      rect(576, 389, 120, 110);

      break;

    case 6:
      //budding
      rect(816, 480, 120, 110);
      break;

    case 7:

      //assembly
      rect(929, 236, 120, 110);
      break;

    case 8:
      //maturing
      rect(815, 92, 120, 110);
      break;

    case 9:
      //released
      rect(930, 35, 120, 110);
      break;

    case 10:
      image(micIcon, 15, 630, 35, 70);
      rect(78, 40, 120, 110);
      break;
  }



  //  image(grid, 0, 0);


  //end of draw

}

// function mouseReleased() {
//   console.log(mouseX + ',' + mouseY);
// }
