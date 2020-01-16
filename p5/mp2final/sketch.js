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
var delayTimer = 90;
var x = 0;
var y = 0;
var processTimer = 0;

var processTime = 0;

var timer = 0;


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
  grid = loadImage('assets/grid.png');
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();

}

function draw() {
  image(bkg, 0, 0);

  vol = mic.getLevel();
  vol = vol * 150;

  if (delayTimer > 0) {
        delayTimer--;
  }

  if ((vol > 7) && (delayTimer == 0)) { // you may have to change that 9
    delayTimer = 30;

    hivState++;
    //  hivState <= 1;
    timer = 0;
    processTimer = 0;
    processTime = 0;

    //  hivState = 1;
  }
  if (hivState > 5) {
    hivState = 0
  }


  timer++;

  // if ((timer >= 100) && (processTime < 10)) {
  //   processTime++;
  //   timer = 0;
  //   delayTimer = 30;
  //
  // }

  switch (hivState) {
    //Opening screen


    case 0:

      image(hivLgVirus, 380, 150);

      image(micIcon, 510, 518, 50, 100);

      textSize(48);
      fill(153, 51, 0);
      textStyle(BOLD);
      text("HIV Replication Cycle", 300, 110);

      textSize(18);
      textStyle(ITALIC);
      text("When you see a mic say NEXT to move on", 372, 500);

      textSize(24);
      textStyle(ITALIC);
      text("Click on mic and say GO!", 405, 650);

      break;
      //Using mic and sound in to switch

    case 1:
      //label virus and cell
      image(extCell, 0, 0);

      image(virus, 89, 45);

      textSize(24);
      fill(153, 51, 0);
      textStyle(BOLD);
      text("HIV virus", 85, 40);
      textSize(30);
      text("Target cell", 300, 280);

      image(micIcon, 15, 630, 35, 70);

      break;
      //drag virus over the cell

    case 2:
      mic.stop();
      //timer
      image(process, 0, 0);

      image(virus, 89, 45);



      textSize(36);
      fill(153, 51, 0);
      textStyle(BOLD);
      noStroke();
      text("Replication process", 380, 50);
      noFill();
      stroke(153, 51, 0);
      strokeWeight(2);

      processTimer++;
      if (processTimer > 30) {
        processTimer = 0;
        processTime++;
      }
      if (processTime > 10) {
        processTime = 10;

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
          mic.start();
          image(micIcon, 15, 630, 35, 70);
          rect(78, 40, 120, 110);
          break;
      }

      break;

      //click on virus structure to move on.
    case 3:
      //structure
      noStroke();
      image(micIcon, 15, 630, 35, 70);

      image(hivStructure, 190, 80);

      textSize(36);
      fill(153, 51, 0);
      textStyle(BOLD);
      text("HIV Structure", 400, 50);

      textSize(20);
      fill(0);
      textStyle(NORMAL);
      text("Protease", 600, 90);
      text("Membrane envelope", 700, 130);
      text("Reverse transcriptase", 755, 180);
      text("Matrix", 810, 250);
      text("RNA", 810, 320);
      text("Capsid", 810, 400);
      text("Integrase", 795, 493);
      text("Surface (SU)", 740, 560);
      text("Transmembrane (TM)", 660, 650);
      text("Glycoprotein", 885, 602);

      stroke(0);
      line(470, 270, 610, 95);
      line(610, 180, 695, 125);
      line(520, 320, 750, 175);
      line(640, 298, 805, 245);
      line(500, 365, 805, 315);
      line(590, 400, 805, 395);
      line(500, 400, 790, 485);
      line(665, 553, 735, 553);
      line(472, 580, 655, 635);
      line(870, 595, 880, 595);

      noFill()
      beginShape();
      vertex(860, 535);
      vertex(870, 535);
      vertex(870, 660);
      vertex(860, 660);
      endShape();


      break;

    case 4:
      //structure quiz
      image(micIcon, 15, 630, 35, 70);

      image(hivStructure, 190, 80);
      noStroke();
      textSize(36);
      fill(153, 51, 0);
      textStyle(BOLD);
      text("HIV Structure Quiz", 350, 50);

      textSize(20);
      fill(0);
      textStyle(NORMAL);
      text("RNA", 60, 100);
      text("Transmembrane (TM)", 60, 160);
      text("Integrase", 60, 220);
      text("Capsid", 60, 280);
      text("Surface (SU)", 60, 340);
      text("Protease", 60, 400);
      text("Glycoprotein", 60, 460);
      text("Matrix", 60, 520);
      text("Membrane envelope", 60, 580);
      text("Reverse transcriptase", 60, 640);

      stroke(0);
      line(470, 270, 610, 95);
      line(610, 180, 695, 125);
      line(520, 320, 750, 175);
      line(640, 298, 805, 245);
      line(500, 365, 805, 315);
      line(590, 400, 805, 395);
      line(500, 400, 790, 485);
      line(665, 553, 695, 553);
      line(472, 580, 655, 635);
      line(870, 595, 880, 595);

      noFill()
      beginShape();
      vertex(860, 525);
      vertex(870, 525);
      vertex(870, 660);
      vertex(860, 660);
      endShape();

      fill(255, 255, 255, 120);
      stroke(153, 51, 0)
      rect(615, 65, 240, 35);
      rect(700, 110, 240, 35);
      rect(755, 155, 240, 35);
      rect(810, 225, 240, 35);
      rect(810, 295, 240, 35);
      rect(810, 375, 240, 35);
      rect(795, 465, 240, 35);
      rect(700, 535, 160, 35);
      rect(660, 615, 200, 35);
      rect(885, 578, 160, 35);
      break;

    case 5:
      //Ending screen
      image(micIcon, 15, 630, 35, 70);
      textSize(30);
      fill(153, 51, 0);
      textStyle(ITALIC);

      image(extCell, 0, 0);

      image(virus, 100, 70);

      text("Coming soon: Attachment and Entry Into Target Cell", x, 50);
      x += 5;
      if (x > width) {
        x = -700;
      }


      break;

  }
  noStroke();

  //image(grid, 0, 0);
}

// function hivTimer(processTime) {
//   timer--;
//   if (timer <= 0) {
//     hivState = 2;
//   }

//}

function touchStarted() {
  getAudioContext().resume();
}
