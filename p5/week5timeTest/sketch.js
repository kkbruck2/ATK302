var timer = 0

function setup() {
  // put setup code here
  createCanvas(100, 200) ;

}

function draw() {
  // put drawing code here
  print(timer);

  timer++;
  if(timer >= 10) {
    background(random(255));
    timer = 0;
  }

}
