function setup() {
createCanvas(450, 600);
angleMode(DEGREES);
}

function draw() {
  // LAYER 1
  //paw
fill(60);
stroke(0);
ellipse(157, 248, 24, 18);
//front leg
beginShape()
vertex(147, 170);
vertex(161, 247);
vertex(171, 245);
vertex(178, 173);
endShape()

//body
fill(60);
arc(120, 170, 127, 200, 170, 10);

//belly
fill(255);
arc(120 ,200, 62, 100, 210 , 340);

//front legs

fill(60);
ellipse(59, 251, 24, 18);

beginShape();
vertex(52, 154);
vertex(64, 250);
vertex(78, 250);
vertex(95, 156);
endShape();

ellipse(70, 253, 24, 18);
line(66, 185, 68, 243);



//back legs

arc(157, 138, 48, 70, 90, 270);

beginShape();
vertex(158, 173);
vertex(169, 245);
vertex(176, 244);
vertex(183, 180);
endShape();

line(66, 185, 68, 243);


triangle(38, 108, 33, 79, 62, 97) ;
//tail
beginShape();
vertex(172, 110);
vertex(241, 54);
vertex(183, 149);
endShape();

ellipse(172, 249, 24, 18);


//LAYER 2
//head
ellipse(65, 127, 68, 60);
ellipse(48, 146, 20, 20);
ellipse(64, 149, 22, 22);

beginShape();
vertex(71, 103);
vertex(97, 84);
vertex(94, 117);
endShape();


//nose
fill(255, 152, 188);
triangle(49, 136, 53, 146, 63, 138);

beginShape();
vertex(75, 105);
vertex(96, 86);
vertex(88, 112);
endShape();

beginShape();
vertex(46, 102);
vertex(38, 89);
vertex(41, 105);
endShape();

//eyes
fill(255,0,0);
ellipse(72, 126, 14 , 12);
ellipse(49, 125, 14 , 12);

//pupil
fill(0);
ellipse(72, 126, 5, 10);
ellipse(49, 125, 5, 10);


fill(60);
beginShape()
vertex(57, 122);
vertex(49, 136);
vertex(63, 138);
endShape();

line(65, 128, 63, 138);

//whiskers left
line(44, 143, 10, 136);
line(47, 148, 3, 146);
line(42, 151, 6, 155);
//whiskers right
line(63, 144, 96, 141);
line(97, 158, 65, 156);
line(58, 149, 100, 150);

}

function mouseReleased(){
console.log(mouseX + ', ' + mouseY);

//eyes
fill(255, 0, 0);
ellipse(72, 126, 14 , 12);
ellipse(49, 125, 14 , 12);


}
