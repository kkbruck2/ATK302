
function setup() {
  var names = []; // declaring an array
  names[0] = "chewie"; // putting chewie in the first space (which is space 0)
  names[1] = "leia";
  names[2] = "luke";
  names[3] = "kylo ren";


  for (var i = 0; i < names.length; i++) { // you can just copy this or memorize it

    console.log(names[i]);

  }


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
