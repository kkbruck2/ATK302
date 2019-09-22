function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(182, 214, 255);
  rectMode(CENTER);
}

  function draw(){
  fill(255);
  ellipse(windowWidth / 2, 500, 200, 200);
  ellipse(windowWidth / 2, 350, 150, 150);
  ellipse(windowWidth / 2, 240, 100, 100);

  fill(0);
  rect(windowWidth/2, 180, 80, 50);
  rect(windowWidth/2, 200, 100, 8);

  textSize(36);
  textAlign(CENTER);
  text("This is My Snowman", windowWidth/2, 100);



}
