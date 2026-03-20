let posiciones = [];

function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(1, 200);
  
  for (let i = 0; i < posiciones.length; i++) {
    let px = posiciones[i].x;
    let py = posiciones[i].y;
    let r = 18;
    
    fill(255, 200, 50);
    stroke(220, 150, 0);
    strokeWeight(1);
    
    beginShape();
    for (let j = 0; j < 10; j++) {
      let rad = j % 2 === 0 ? r : r * 0.4;
      let ang = (PI / 5) * j - HALF_PI;
      vertex(px + rad * cos(ang), py + rad * sin(ang));
    }
    endShape(CLOSE);
  }
  
  fill(255); noStroke(); textSize(12);
  text("Clic para agregar estrella — Total: " + posiciones.length, 10, 20);
}
function mousePressed() {
  posiciones.push({ x: mouseX, y: mouseY });
}