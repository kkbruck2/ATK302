var cats = [];
var frogPos;

//---------------------
function setup() {
  createCanvas(800, 800);

  for (var i = 0; i < 40; i++) {
    cats.push(new cat())
  }
  frogPos = createVector(width / 2, height - 80);
  
}
//-------------------------
function draw() {
  background(100);
  for (var i = 0; i < cats.length; i++) {
    cats[i].display();
    cats[i].drive();
    if (cats[i].pos.dist(frogPos) < 50) {
      cats.splice(i, 1);
    }

  }

  fill('green') ;
  ellipse(frogPos.x, frogPos.y, 60, 60);
  checkForKeys() ;

}

//--------------------
function cat() {
  //attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  //vector



  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 100, 50);

  }

  //methods
  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > width) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;


  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}
