function setup() {
  createCanvas(600, 300);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);

  // NIVEL 1 — texto estático 
  push();
  fill(40); noStroke();
  textSize(20);
  text("Graficación 2D", 150, 150);
  pop();

  // NIVEL 2 — texto escalado armónicamente
  let s = 1 + 0.5 * sin(frameCount * 0.05);
  push();
  translate(350, 90);
  scale(s);
  fill(80, 120, 200); noStroke();
  textSize(22);
  text("Escala", 0, 0);
  pop();

  // NIVEL 3 — texto rotando continuamente
  push();
  translate(490, 150);
  rotate(frameCount * 0.04);
  fill(200, 80, 80); noStroke();
  textSize(18);
  text("Rotando", 0, 0);
  pop();

  // EXTRA — texto siguiendo una curva Bézier 
  let t = (frameCount % 300) / 300;
  let bx = bezierPoint(30, 120, 300, 580, t);
  let by = bezierPoint(280, 180, 180, 280, t);
  push();
  translate(bx, by);
  fill(60, 160, 80); noStroke();
  textSize(14);
  text("•", 0, 0);
  pop();

  noFill(); stroke(180); strokeWeight(1);
  bezier(30,280, 120,180, 300,180, 580,280);
}