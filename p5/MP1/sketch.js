function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(255);

  stroke(0);
  fill(60);


  //backleg
  beginShape();
  vertex(150, 184);
  vertex(155, 247);
  vertex(166, 247);
  vertex(158, 174);
  endShape();

  ellipse(157, 248, 24, 18);

  //body recatangle
  beginShape();
  vertex(184, 116);
  vertex(87, 120);
  vertex(58, 145);
  vertex(87, 184);
  vertex(171, 188);
  endShape(CLOSE);

  //front legs
  fill(60);
  ellipse(59, 251, 24, 18);

  beginShape();
  vertex(52, 154);
  vertex(64, 250);
  vertex(78, 250);
  vertex(96, 155);
  endShape();

  ellipse(70, 253, 24, 18);



  //tail and back
  beginShape();
  vertex(178, 117);
  vertex(240, 50);
  vertex(193, 147);
  vertex(176, 244);
  vertex(165, 245);
  vertex(155, 150);
  endShape();
  triangle(37, 85, 42, 110, 65, 100);

  //head
  fill(60);
  ellipse(65, 127, 68, 60);
  ellipse(48, 146, 20, 20);
  ellipse(64, 149, 22, 22);

  //front ear
  beginShape();
  vertex(73, 102);
  vertex(96, 83);
  vertex(93, 114);
  endShape();

  //nose
  fill(255, 152, 188);
  triangle(49, 136, 53, 146, 63, 138);

  //inside pink ear
  beginShape();
  vertex(77, 105);
  vertex(95, 85);
  vertex(89, 112);
  endShape();

  //inside pink ear
  beginShape();
  vertex(46, 102);
  vertex(38, 89);
  vertex(41, 105);
  endShape();

  //eyes
  fill(112, 164, 30);
  ellipse(72, 126, 14, 12);
  ellipse(49, 125, 14, 12);

  //pupil
  fill(0);
  ellipse(72, 126, 5, 10);
  ellipse(49, 125, 5, 10);

  //nose
  fill(60);
  beginShape();
  vertex(57, 122);
  vertex(49, 136);
  vertex(63, 138);
  endShape();

  //whiskers left
  line(44, 143, 10, 136);
  line(47, 148, 3, 146);
  line(42, 151, 6, 155);
  //whiskers right
  line(63, 144, 96, 141);
  line(97, 158, 65, 156);
  line(58, 149, 100, 150);

  line(66, 185, 68, 243);

  ellipse(172, 249, 24, 18);

  fill(0);
  text("Bart is a psycho cat", 20, 20);

if (mouseIsPressed) {
    //back arch
    fill(60);
    arc(132, 150, 120, 160, 200, 357);
    //belly
    fill(255);
    arc(120, 201, 62, 110, 205, 340);

    //eyes
    fill(255, 0, 0);
    ellipse(72, 126, 14, 12);
    ellipse(49, 125, 14, 12);
    //pupils

    fill(0);
    ellipse(72, 126, 5, 10);
    ellipse(49, 125, 5, 10);

    noStroke();
    noFill();
    beginShape();
    vertex(184, 116);
    vertex(87, 120);
    vertex(58, 145);
    vertex(87, 184);
    vertex(171, 188);
    endShape(CLOSE);


  //head
  stroke();
  fill(60);
  ellipse(65, 127, 68, 60);
  ellipse(48, 146, 20, 20);
  ellipse(64, 149, 22, 22);

  //front ear
  beginShape();
  vertex(73, 102);
  vertex(96, 83);
  vertex(93, 114);
  endShape();

  //nose
  fill(255, 152, 188);
  triangle(49, 136, 53, 146, 63, 138);

  //inside pink ear
  beginShape();
  vertex(77, 105);
  vertex(95, 85);
  vertex(89, 112);
  endShape();

  //inside pink ear
  beginShape();
  vertex(46, 102);
  vertex(38, 89);
  vertex(41, 105);
  endShape();


  //whiskers left
  line(44, 143, 10, 136);
  line(47, 148, 3, 146);
  line(42, 151, 6, 155);

  //whiskers right
  line(63, 144, 96, 141);
  line(97, 158, 65, 156);
  line(58, 149, 100, 150);
}

}
