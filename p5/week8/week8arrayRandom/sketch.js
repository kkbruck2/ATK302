var bands = ['Foreigner', 'Boston', 'cats', 'ACDC', 'Van Halen', 'Styx', 'Kansas', 'ELO', 'REO Speedwagon', 'Cheap Trick', 'Heart'];
var aRandomBand = '';

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(100);

  textSize(24);
  text("I may be old but we had some great bands.", width/2, 200);
  textSize(48);
  text(aRandomBand, width/2, height/2);
}

function mouseClicked() {

  var i = floor(random(bands.length));
  aRandomBand = bands[i];


}
