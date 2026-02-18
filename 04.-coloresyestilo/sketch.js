
function setup() {
  createCanvas(600, 300);
}

function draw(){
 background(220);

  fill(252,200,22);
  rect(0, 0, width, height/2);

  fill(0,56,147);
  rect(0, height/2, width, height/4);

  fill(206,17,38);
  rect(0, height*3/4, width, height/4);
}