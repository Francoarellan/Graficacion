
function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw(){
  background(220);
  //linea vertical central
  strokeWeight(2);
  line(width/2,0,width/2,height);
  //linea horizontal central
  strokeWeight(2);
  line(0, height/2,width,height/2);
  strokeWeight(10);
  point(width/2, height/2);
  circle(10,10,20);
  circle(10,height-10,20);
  circle(width-10,10,20);
  circle(width-10,height-10,20);
  noFill();
  stroke(0);
  strokeWeight(3);
  rect(width/2, height/2, 150, 150);
  

}