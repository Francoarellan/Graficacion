
let pts;

function setup() {
  createCanvas(600, 400);
  pts = [
    createVector(50,200),   // P0 
    createVector(100,300),  // P1 
    createVector(300,80),   // P2 
    createVector(500,260)   // P3
  ];
}

function draw() {
  background(245);

  // NIVEL 1 — curva con líneas guía y puntos visibles 
  stroke(180); strokeWeight(1);
  for (let i = 0; i < pts.length - 1; i++)
    line(pts[i].x, pts[i].y, pts[i+1].x, pts[i+1].y);

  strokeWeight(3); stroke(0); noFill();
  curve(pts[0].x,pts[0].y, pts[1].x,pts[1].y,
        pts[2].x,pts[2].y, pts[3].x,pts[3].y);

  fill(0); noStroke();
  for (let p of pts) circle(p.x, p.y, 10);

  // NIVEL 2 — punto animado sobre la spline
  let t = (frameCount % 200) / 200;
  let x = curvePoint(pts[0].x,pts[1].x,pts[2].x,pts[3].x, t);
  let y = curvePoint(pts[0].y,pts[1].y,pts[2].y,pts[3].y, t);
  fill(255,60,60); noStroke();
  circle(x, y, 14);

  // NIVEL 3 — control local: P1 sigue al mouse
  stroke(0,100,200,150); strokeWeight(2); noFill();
  curve(pts[0].x,pts[0].y, mouseX,mouseY,
        pts[2].x,pts[2].y, pts[3].x,pts[3].y);
  fill(0,100,200); noStroke();
  circle(mouseX, mouseY, 10);

  fill(80); noStroke(); textSize(11);
  text("guía P0",pts[0].x+6,pts[0].y);
  text("P1(mouse)",mouseX+6,mouseY-6);
  text("P2",pts[2].x+6,pts[2].y-6);
  text("guía P3",pts[3].x+6,pts[3].y);
}