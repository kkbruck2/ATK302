function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(150);

}

function draw() {
  //circle in the middle of window
  fill(0, 209, 193);
  rect(mouseX, mouseY, 50, 50);
}

function mouseReleased() {
  background(150);
}
