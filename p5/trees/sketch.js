function setup() {
  // put setup code here
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {

  //sky
  background(178,213,255);
  noStroke();
  //rays
  fill(251,180,89);
  beginShape();
  vertex(341,39);
  vertex(394,49);
  vertex(361,9);
  vertex(413,44);
  vertex(409,5);
  vertex(436,38);
  vertex(443,10);
  vertex(445,44);
  vertex(487,21);
  vertex(461,55);
  vertex(512,97);
  vertex(462,80);
  vertex(497,127);
  vertex(453,105);
  vertex(461,155);
  vertex(429,107);
  vertex(422,156);
  vertex(418,108);
  vertex(380,145);
  vertex(395,94);
  vertex(340,114);
  vertex(392,83);
  vertex(337,75);
  vertex(391,63);
  vertex(342,41);
  endShape(CLOSE);

  //sun

  fill(255, 255, 167);
  ellipse(427, 72, 80, 80);

  fill(0, 106, 46);
  ellipse(185,170, 300, 140);

  //trunk
  fill(81, 56, 57);
  beginShape();
  vertex(124,358);
  vertex(160,350);
  vertex(172,229);
  vertex(147,187);
  vertex(156,178);
  vertex(178,202);
  vertex(181,139);
  vertex(194,138);
  vertex(200,211);
  vertex(223,180);
  vertex(230,186);
  vertex(211,228);
  vertex(213,343);
  vertex(244,358);
  endShape(CLOSE);

  //leaves
  fill(0, 106, 46);
  arc(185,170, 280, 280, PI, TWO_PI);

  fill(0, 152, 96)
  ellipse(72, 124, 80, 60);

  fill(0, 152, 96)
  ellipse(72, 124, 80, 60);
  ellipse(120, 160, 80, 100);
  ellipse(68,201, 60, 70);

  //pine trunk
  fill(81, 56, 57);
  rect(545, 320, 20, 60, 20, 60);

  //pine tree
  fill(0, 106, 46);
  triangle(545, 250, 485, 330, 625, 330);

  fill(0, 152, 96);
  triangle(545, 200, 495, 300, 610, 300);

  fill(0, 106, 46);
  triangle(545, 150, 500, 250, 595, 250);

  fill(0, 152, 96);
  triangle(545, 100, 520, 200, 580, 200);

  //grass
  fill(0, 106, 46);
  rect(0, 358, 720, 720);









  fill(255);
  text(mouseX + ',' + mouseY, mouseX , mouseY);

}


function mouseReleased(){
console.log(mouseX + ',' + mouseY);


}
