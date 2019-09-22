function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(150);
}

function draw() {
  fill(255, 0, 0);
  ellipse(windowWidth/2, windowHeight/2, 50, 50);
}

function mouseReleased() {
  stroke(random(255), 0, 0);
  strokeWeight(random(6));
  fill(random(255), 0, 0);
  ellipse(mouseX, mouseY, 50, 50);
}
