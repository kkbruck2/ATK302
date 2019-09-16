var modak;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  modak = loadFont('assets/Modak-Regular.ttf');
}

function draw() {
  background(160);
  textFont(modak, 120);

  fill(255, 0, 0);
  text("Hello World!", 20, 150);
  textSize(60);
  text("from Kim", 20, 200);
}
