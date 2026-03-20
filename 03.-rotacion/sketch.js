function setup() {
  createCanvas(600, 300);
  rectMode(CENTER);
}

function draw() {
  background(240);

  // NIVEL 1 — rotación básica alrededor del centro del objeto
  push();
  translate(150, 150);
  rotate(frameCount * 0.02);
  fill(200, 80, 80);
  rect(0, 0, 80, 40);
  pop();

  // NIVEL 2 — control con mouse
  let ang = map(mouseX, 0, width, 0, TWO_PI);
  push();
  translate(300, 150);
  rotate(ang);
  fill(80, 120, 200);
  rect(0, 0, 80, 40);
  pop();

  // NIVEL 3 — molino con 4 aspas
  let baseAng = frameCount * 0.03;
  push();
  translate(500, 150);
  for (let i = 0; i < 4; i++) {
    push();
    rotate(baseAng + i * HALF_PI);
    fill(80, 180, 100);
    rect(30, 0, 60, 18);  
    pop();
  }
  fill(60);
  circle(0, 0, 14);
  pop();
}