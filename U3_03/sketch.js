
function setup() {
  createCanvas(900, 400, WEBGL);
}

function draw() {
  background(240);
  orbitControl();
  ambientLight(150);
  pointLight(255,255,255, 0,-300,300);
  noStroke();

  // NIVEL 1: Traslación
  push();
  translate(-300, 0, 0);
  push();
  translate(-60, 0, 0);
  fill(220, 80, 80);
  box(50);
  pop();
  push();
  translate(0, -30, 0);
  fill(80, 160, 220);
  box(50);
  pop();
  push();
  translate(60, 15, -50);
  fill(80, 200, 120);
  box(50);
  pop();

  pop();

  //NIVEL 2: Rotaciones combinadas 
  push();
  translate(0, 0, 0); // Zona central
  push();
  translate(-70, 0, 0);
  rotateY(frameCount * 0.02);
  fill(255, 200, 80);
  box(45);
  pop();
  push();
  rotateX(frameCount * 0.010);
  rotateY(frameCount * 0.015);
  fill(220, 100, 200);
  sphere(38);
  pop();
  push();
  translate(70, 0, 0);
  rotateX(frameCount * 0.02);
  fill(80, 200, 180);
  torus(30, 10);
  pop();

  pop();

  //NIVEL 3: Sistema completo de transformaciones
  push();
  translate(300, 0, 0);
  push();
  translate(-70, 20, 0);
  fill(220, 80, 80);
  box(50);
  pop();
  push();
  scale(1.4);
  fill(80, 160, 220);
  sphere(28);
  pop();
  push();
  translate(70, 0, 0);
  rotateY(frameCount * 0.02);
  rotateX(frameCount * 0.010);
  fill(80, 200, 120);
  torus(32, 10);
  pop();

  pop();
  resetMatrix();
  fill(40); noStroke(); textSize(12); textAlign(CENTER);
  text("NIVEL 1: traslación",   -width/2+150, height/2-12);
  text("NIVEL 2: rotación",      0,            height/2-12);
  text("NIVEL 3: todo junto",   width/2-150,  height/2-12);
}
