function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(150);
}

function draw() {
  fill(10, 26, 148);
  ellipse(windowWidth/2, windowHeight/2, 50, 50);
}

function mouseReleased() {
  fill(10, 26, 148);
  ellipse(mouseX , mouseY, 50, 50);
}
