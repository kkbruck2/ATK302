var bands = [];
bands[0] = 'Foreigner';
bands[1] = 'Boston'
bands[2] = 'cats'
bands[3] = 'ACDC'
bands[4] = 'Van Halen'
bands[5] = 'Styx'
bands[6] = 'Kansas'
bands[7] = 'ELO'
bands[8] = 'REO Speedwagon'
bands[9] = 'Cheap Trick'
bands[10] = 'Heart';

for (var i = 0; i < bands.length; i++) {
  console.log (bands [i]);
}


function setup() {

}

function draw() {

}

function mouseClicked() {

  var i = floor(random(bands.length));
  aRandomBand = bands[i];


}
