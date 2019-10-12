var myTimer = 0;
var timer = 0;

//--------------------------------------general
function setup() {

  createCanvas(800, 800);
}
//----------------------------------------end of setup
function draw() {

  timer++;
  if ((timer >= 50) && (myTimer <= 4 )) {
    myTimer++;
    timer = 0;
  }

  switch (myTimer) {
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
