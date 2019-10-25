var mycar1;
var mycar2; //declare it


function setup() {
  // put setup code here
  createCanvas(800, 800);
  mycar1 = new car();
  mycar2 = new car();

}

function draw() {
  background(100);

  mycar1.display();
  mycar1.drive();

  mycar2.display();
  mycar2.drive();


}

function car() {
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
