function setup() {
  // put setup code here
//  createCanvas(windowWidth, windowHeight);
  createCanvas(800, 800) ;
}

function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    // the pressed down state
    ellipse(width / 2, height / 2, 50, 50);
    ellipse(width / 2, height / 2 - 50, 50, 50);



  } else {
    // the not-pressed state
    rect(width / 2, height / 2, 50, 50);
    arc()

  }

  fill(255);
  text(mouseX + ", " + mouseY, 20, 20);

}



function mouseReleased() {
  console.log(mouseX + ',' + mouseY);
}
