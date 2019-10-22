var mycat1;
var mycat2; //declare it


function setup() {
  // put setup code here
  createCanvas(800, 800);
  mycat1 = new cat();
  mycat2 = new cat();

}

function draw() {
  background(100);

  mycat1.display();
  mycat1.drive();

  mycat2.display();
  mycat2.drive();


}

function cat() {
  //attibutes
  this.x = random(width);
  this.y = random(height);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.vel = random(5, 10);

  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 100, 50);

  }

  this.drive = function() {
    this.x = this.x + this.vel;
    if (this.x > width) {
      this.x = 0;

    }

  }

}
