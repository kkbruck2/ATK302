var rain ;
var imgRain ;

function preload() {
  rain = loadSound('assets/rain.mp3');
  imgRain = loadImage('assets/rain-image.jpg') ;

}

function setup() {
  // put setup code here
  createCanvas(800, 800);
  background(255);

  rain.play() ;

}
function draw() {
  image(imgRain, 0, 0);
}

function mouseReleased() {
    rain.stop() ;

}
