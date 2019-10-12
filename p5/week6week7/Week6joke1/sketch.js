var myState = 0;

//--------------------------------------general
function setup() {
  // put setup code here
  createCanvas(800, 800);
}
//----------------------------------------end of setup
function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
    background('red');
    text("Knock Knock", 100, 100);
    break;

    case 1:
      background('blue');
      text("Who's there?", 100, 100);
      break;

    case 2:
    background('orange');
    text("Orange", 100, 100);
    break;

    case 3:
    background('green');
    text("Orange who? ", 100, 100);
    break;

    case 4:
      background('yellow');
      text("Orange you glad I came?", 100, 100);
      break;

  }
}
//-----------------------------------------------end of draw


function mouseReleased() {
  if(myState >= 0) {
  myState++;
  }
  if(myState > 4) {
    myState = 0;
  }
}
