function setup() {
  createCanvas(800, 500);
}
function draw() {
  background(180);
  strokeWeight(2);
  fill(255, 0, 0);
  
  // Esquina superior izquierda
  circle(0, 0, 30);
  // Esquina superior derecha
  circle(width, 0, 30);
  // Esquina inferior izquierda
  circle(0, height, 30);
  // Esquina inferior derecha
  circle(width, height, 30);
  
  fill(0); noStroke(); textSize(11);
  text("(0,0)", 5, 40);
  text("("+width+",0)", width-55, 40);
  text("(0,"+height+")", 5, height-10);
  text("("+width+","+height+")", width-70, height-10);
}