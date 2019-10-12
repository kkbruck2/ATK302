function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {
  //runs a draw code 60 frames/sec
}

//-----------------------code to show coordinates of point in console.
function mouseReleased() {
console.log(mouseX + ', ' + mouseY);
}

//-------------------------------------------conditionals

function setup() {
  createCanvas(720, 360);
  background(0);

  for (let i = 10; i < width; i += 10) {
    // If 'i' divides by 20 with no remainder draw the first line
    // else draw the second line
    if (i % 20 === 0) {
      stroke(255);
      line(i, 80, i, height / 2);
    } else {
      stroke(153);
      line(i, 20, i, 180);
    }
  }

//------------------------------------SOUND IN function. Add after draw
function touchStarted() {
  getAudioContext() .resume();
}
//-------------------------------------place in Setup
//-----Create an Audio input
  mic = new p5.AudioIn();
//------------------------------------ start the Audio Input.
//------------ By default, it does not .connect() (to the computer speakers)
  mic.start();
}
//--------------------------------------SOUND IN
//-----place in Draw
//------------------------------- Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill(127);
  stroke(0);

  //--------------------------- Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  ellipse(width / 2, h - 25, 50, 50);
}
//--------------------------------------------mouse click advance
function mouseReleased() {
  if(myState >= 0) {
  myState++;
  }
  if(myState > 4) {
    myState = 0;
  }
}
//-----------------------------------------------timer advance
timer++;

if ((timer >= 100) && (processTime < 10)) {
  processTime++;
  timer = 0;
}
