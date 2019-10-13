var song1, song2, song3, song4, song5;
var myState = 0;


function preload() {
  song1 = loadSound('assets/Carry On Wayward Son.mp3');
  song2 = loadSound('assets/Fire And Rain.mp3');
  song3 = loadSound('assets/Oh Very Young.mp3');
  song4 = loadSound('assets/Born To Run.mp3');
  song5 = loadSound('assets/I Dont Like Mondays.mp3')


  // set each song to loop and then immediately pause it so it doesn't play

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();

}
//------------------------------------end preload
function setup() {
  createCanvas(200, 200);

}
//-------------------------------------end Setup
function draw() {
  background(100);
  switch (myState) {

    case 0: // trigger the playing, and go immediately to the next state
      song1.play();
      myState = 1; // go immediately (the next time) to the next state
      break;


    case 1:
      // hang out in here, put some lyrics or pictures or something while the song plays.
      // put pictures and shapes in here

      break; // we would only leave state 1 with a mouseClick



    case 2: // trigger the playing, and go immediately to the next state
      song2.play();
      myState = 3;
      break;

    case 3:
      break;

    case 4:
      song3.play();
      myState = 5;
      break;

    case 5:
      break;

    case 6:
      song4.play();
      myState = 7;
      break;

    case 7:
      break;

    case 8:
      song5.play();
      myState = 9;
      break;

    case 9:
      break;

  }

}
//----------------------------------end draw
function mouseReleased() {
  myState++;

  // pause all the songs
  song1.pause();
  song2.pause();
  song3.pause();
  song4.pause();
  song5.pause();

  if (myState > 9) {
    myState = 0;
  }
}
