// CAPÍTULO 6 — Normales

let modo = 1;

function setup() {

  createCanvas(1200, 750, WEBGL);

  noStroke();
}

function draw() {

  background(10);

  orbitControl();

  // Iluminación

  if (modo == 1) {

    ambientLight(120);
  }

  if (modo == 2) {

    ambientLight(40);

    directionalLight(255, 140, 0, 1, 1, -1);
  }

  if (modo >= 3) {

    ambientLight(25);

    directionalLight(255, 140, 0, 1, 1, -1);

    pointLight(
      255,
      255,
      255,
      mouseX - width / 2,
      mouseY - height / 2,
      300
    );
  }

  // Modo 1
  // NormalMaterial

  if (modo == 1) {

    push();

    translate(-300, 0, 0);

    rotateY(frameCount * 0.01);

    normalMaterial();

    sphere(140);

    pop();

    push();

    translate(300, 0, 0);

    rotateX(frameCount * 0.01);

    rotateY(frameCount * 0.01);

    normalMaterial();

    box(220);

    pop();
  }

  // Modo 2
  // Esfera vs cubo

  if (modo == 2) {

    push();

    translate(-320, 0, 0);

    rotateY(frameCount * 0.01);

    specularMaterial(80, 180, 255);

    shininess(120);

    sphere(150);

    pop();

    push();

    translate(320, 0, 0);

    rotateX(frameCount * 0.01);

    rotateY(frameCount * 0.01);

    specularMaterial(255, 100, 100);

    shininess(120);

    box(220);

    pop();
  }

  // Modo 3
  // Luz dinámica

  if (modo == 3) {

    push();

    rotateY(frameCount * 0.01);

    specularMaterial(255);

    shininess(250);

    torus(180, 50);

    pop();
  }

  // Modo 4
  // Metal vs mate

  if (modo == 4) {

    push();

    translate(-320, 0, 0);

    ambientMaterial(255, 80, 80);

    sphere(140);

    pop();

    push();

    translate(320, 0, 0);

    specularMaterial(255);

    shininess(300);

    sphere(140);

    pop();
  }

  // Modo 5
  // Escena completa

  if (modo == 5) {

    push();

    translate(-350, 0, 0);

    rotateY(frameCount * 0.01);

    specularMaterial(255);

    shininess(200);

    sphere(120);

    pop();

    push();

    rotateX(frameCount * 0.01);

    rotateY(frameCount * 0.01);

    normalMaterial();

    box(180);

    pop();

    push();

    translate(350, 0, 0);

    rotateX(HALF_PI);

    rotateZ(frameCount * 0.01);

    specularMaterial(80, 255, 140);

    shininess(80);

    torus(120, 35);

    pop();
  }

  // Luz visible

  if (modo >= 3) {

    push();

    translate(
      mouseX - width / 2,
      mouseY - height / 2,
      300
    );

    emissiveMaterial(255,255,255);

    sphere(18);

    pop();
  }

  // Texto

  push();

  resetMatrix();

  fill(255);

  textSize(20);

  text("1 = NormalMaterial", 20, 30);

  text("2 = Esfera vs Cubo", 20, 60);

  text("3 = Luz dinamica", 20, 90);

  text("4 = Metal vs Mate", 20, 120);

  text("5 = Escena completa", 20, 150);

  pop();
}

function keyPressed() {

  if (key == '1') {
    modo = 1;
  }

  if (key == '2') {
    modo = 2;
  }

  if (key == '3') {
    modo = 3;
  }

  if (key == '4') {
    modo = 4;
  }

  if (key == '5') {
    modo = 5;
  }
}