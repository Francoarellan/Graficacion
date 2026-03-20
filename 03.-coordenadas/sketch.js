function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  stroke(0);
  line(615,20,770,20);
  stroke(126);
  line(770,20,770,175);
  stroke(255);
  line(770,175,615,175);
  line(615,175,615,20);

  stroke(0);
  strokeWeight(1);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);

  circle(10,10,15);
  circle(width-10,10,15);
  circle(10,height-10,15);
  circle(width-10,height-10,15);

  strokeWeight(2);
  rect((width - 200) / 2, (height - 100) / 2, 200, 100);

  strokeWeight(8);
  point(width/2,height/2);

  strokeWeight(2);
  circle(width/4, height/4, 50);
  circle(3*width/4, height/4, 50);
  circle(width/4, 3*height/4, 50);
  circle(3*width/4, 3*height/4, 50);

  line(0, 0, width, height);
}