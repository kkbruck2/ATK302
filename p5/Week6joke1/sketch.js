var case = 0, case = 1 ;
var myState = 1


function setup() {
  // put setup code here
  createCanvas(800, 800) ;
}

function draw() {
  // put drawing code here
  switch(myState) {

    case 0
    backgrouned('red') ;
    text("Knock Knock", 100, 100)
    break ;

    case 1:
    backgrouned('blue') ;
    text("Who'/s there?", 100, 100)
    break ;

    case 2
    backgrouned('orange') ;
    text("orange", 100, 100)
    break ;

    case 3:
    backgrouned('green') ;
    text("Orange ", 100, 100)
    break ;
}
}

}
function mouseReleased(){
 myState = myState + 1:
}
