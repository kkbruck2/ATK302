var myCar1;
var myCar2; //declare it


function setup() {
  // put setup code here
  createCanvas(800, 800);
  myCar1 = new Car();
  myCar2 = new Car();

}

function draw() {
  background(100);

  myCar1.display();
  myCar1.drive();

  myCar2.display();
  myCar2.drive();


}

function Car() {
  //attibutes
  this.x = random(width);
  this.y = random(height);
  this.r = random(255) ;
  this.g = random(255) ;
  this.b = random(255) ;
  this.vel = random(5, 10) ;
  //methods

  this.display = function() {
    rect(this.x, this.y , 100, 50);

    this.drive = function() {
      this.x = this.x + this.vel;
      if (this.x > width) {
        this.x = 0;

      }


    }




  }

}
