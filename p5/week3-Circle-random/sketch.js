function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(150);
}

function draw() {
  stroke(255, 0, 0);
  fill(255, 0, 0);
  ellipse(windowWidth/2, windowHeight/2, 50, 50);
}

function mouseReleased() {
  fill(random(255), 0, 0);
  ellipse(mouseX, mouseY, 50, 50);
}
