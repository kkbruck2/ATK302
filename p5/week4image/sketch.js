var pies;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  pies = loadImage('assets/pies.jpg');
}

function draw() {
  image(pies, 20, 100);
}
