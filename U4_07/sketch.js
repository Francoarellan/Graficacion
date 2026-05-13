// CAPÍTULO 7 — Materiales
// ambientMaterial()
// specularMaterial()
// normalMaterial()
// Comparación de materiales
// Cambio de materiales con teclado

let modo = 1;

function setup() {

  createCanvas(1200, 750, WEBGL);

  noStroke();
}

function draw() {

  background(15);

  orbitControl();

  // Iluminación

  ambientLight(50);

  directionalLight(255, 255, 255, 1, 1, -1);

  pointLight(
    255,
    255,
    255,
    mouseX - width / 2,
    mouseY - height / 2,
    300
  );

  // Modo 1
  // ambientMaterial

  if (modo == 1) {

    push();

    rotateY(frameCount * 0.01);

    ambientMaterial(255, 80, 80);

    sphere(170);

    pop();
  }

  // Modo 2
  // specularMaterial

  if (modo == 2) {

    push();

    rotateY(frameCount * 0.01);

    specularMaterial(180, 220, 255);

    shininess(220);

    sphere(170);

    pop();
  }

  // Modo 3
  // normalMaterial

  if (modo == 3) {

    push();

    rotateX(frameCount * 0.01);

    rotateY(frameCount * 0.01);

    normalMaterial();

    torus(180, 55);

    pop();
  }

  // Modo 4
  // Comparación de materiales

  if (modo == 4) {

    // Mate

    push();

    translate(-350, 0, 0);

    rotateY(frameCount * 0.01);

    ambientMaterial(255, 80, 80);

    sphere(120);

    pop();

    // Brillante

    push();

    rotateY(frameCount * 0.01);

    specularMaterial(120, 180, 255);

    shininess(220);

    sphere(120);

    pop();

    // NormalMaterial

    push();

    translate(350, 0, 0);

    rotateX(frameCount * 0.01);

    rotateY(frameCount * 0.01);

    normalMaterial();

    sphere(120);

    pop();
  }

  // Modo 5
  // Escena completa

  if (modo == 5) {

    // Esfera mate

    push();

    translate(-350, 0, 0);

    rotateY(frameCount * 0.01);

    ambientMaterial(255, 100, 100);

    sphere(110);

    pop();

    // Cubo brillante

    push();

    rotateX(frameCount * 0.01);

    rotateY(frameCount * 0.01);

    specularMaterial(180, 220, 255);

    shininess(250);

    box(180);

    pop();

    // Toroide normal

    push();

    translate(350, 0, 0);

    rotateX(HALF_PI);

    rotateZ(frameCount * 0.01);

    normalMaterial();

    torus(120, 35);

    pop();
  }

  // Luz visible

  push();

  translate(
    mouseX - width / 2,
    mouseY - height / 2,
    300
  );

  emissiveMaterial(255);

  sphere(18);

  pop();

  // Texto

  push();

  resetMatrix();

  fill(255);

  textSize(20);

  text("1 = ambientMaterial", 20, 30);

  text("2 = specularMaterial", 20, 60);

  text("3 = normalMaterial", 20, 90);

  text("4 = Comparacion", 20, 120);

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