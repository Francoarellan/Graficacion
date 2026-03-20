let lados = 6;

function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(220);
  let cx = width/2;
  let cy = height/2;
  let r = 150;
  
  fill(100, 150, 220);
  stroke(50);
  strokeWeight(2);
  
  beginShape();
  for (let i = 0; i < lados; i++) {
    let theta = (TWO_PI / lados) * i - HALF_PI;
    let x = cx + r * cos(theta);
    let y = cy + r * sin(theta);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  fill(0); noStroke(); textSize(13);
  text("Lados: " + lados, 10, 20);
  text("Angulo entre vertices: " + (360/lados).toFixed(1) + "°", 10, 40);
  text("x = cx + r*cos(θ)", 10, 60);
  text("y = cy + r*sin(θ)", 10, 80);
  text("Clic para +lados", 10, 100);
}

function mousePressed() {
  lados = lados >= 12 ? 3 : lados + 1;
}