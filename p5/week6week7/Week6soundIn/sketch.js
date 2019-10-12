var mic;
var vol;
var delayTimer = 0;

var jokeState = 0;

function setup() {
  createCanvas(800, 800);
  mic = new p5.AudioIn();
  mic.start();

}
//----------------------------------------------end setup
function draw() {
  background(100);
  vol = mic.getLevel();
  vol = vol * 50;
  if (delayTimer > 0) {
    delayTimer--;
  }
  if ((vol > 3) && (delayTimer == 0)) {
    delayTimer = 30;
    jokeState++;
  }
  if (jokeState >=4) {
    jokeState = 0;
  }

  switch (jokeState) {
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
//----------------------------------------------end draw
function touchStarted() {
  getAudioContext().resume();
}
