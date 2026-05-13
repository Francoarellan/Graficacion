// CAPÍTULO 5 — Sombreado

let modoEscena = 1;

let nivelBrillo = 0;

let niveles = [10, 50, 150];

function setup() {

  createCanvas(1100, 700, WEBGL);

  noStroke();
}

function draw() {

  background(15);

  orbitControl();

  // Iluminación

  ambientLight(40);

  directionalLight(255, 140, 0, 1, 1, -1);

  pointLight(
    255,
    170,
    0,
    mouseX - width / 2,
    mouseY - height / 2,
    350
  );

  // Escena 1
  // Cubo y esfera

  if (modoEscena === 1) {

    push();

    translate(-180, 0, 0);

    rotateX(frameCount * 0.008);

    rotateY(frameCount * 0.01);

    specularMaterial(255, 120, 120);

    shininess(40);

    box(130);

    pop();

    push();

    translate(180, 0, 0);

    rotateY(frameCount * 0.01);

    specularMaterial(120, 180, 255);

    shininess(60);

    sphere(100);

    pop();
  }

  // Escena 2
  // Comparar box vs sphere

  else if (modoEscena === 2) {

    push();

    translate(-220, 0, 0);

    rotateX(frameCount * 0.005);

    rotateY(frameCount * 0.01);

    specularMaterial(255, 120, 120);

    shininess(80);

    box(140);

    pop();

    push();

    translate(220, 0, 0);

    rotateY(frameCount * 0.01);

    specularMaterial(120, 180, 255);

    shininess(80);

    sphere(110);

    pop();
  }

  // Escena 3
  // Cambiar brillo con tecla B

  else if (modoEscena === 3) {

    push();

    rotateY(frameCount * 0.01);

    specularMaterial(180, 200, 255);

    shininess(niveles[nivelBrillo]);

    sphere(120);

    pop();
  }

  // Escena 4
  // Comparar niveles de brillo

  else if (modoEscena === 4) {

    push();

    translate(-300, 0, 0);

    rotateY(frameCount * 0.01);

    specularMaterial(220, 120, 255);

    shininess(10);

    sphere(90);

    pop();

    push();

    rotateY(frameCount * 0.01);

    specularMaterial(220, 120, 255);

    shininess(50);

    sphere(90);

    pop();

    push();

    translate(300, 0, 0);

    rotateY(frameCount * 0.01);

    specularMaterial(255);

    shininess(180);

    sphere(90);

    pop();
  }

  // Escena 5
  // Metal vs plástico

  else if (modoEscena === 5) {

    push();

    translate(-180, 0, 0);

    rotateY(frameCount * 0.01);

    specularMaterial(230);

    shininess(200);

    sphere(110);

    pop();

    push();

    translate(180, 0, 0);

    rotateY(frameCount * 0.01);

    specularMaterial(80, 255, 140);

    shininess(40);

    sphere(110);

    pop();
  }

  // Indicador de luz

  push();

  translate(
    mouseX - width / 2,
    mouseY - height / 2,
    350
  );

  emissiveMaterial(255, 140, 0);

  sphere(15);

  pop();

  // Texto

  push();

  resetMatrix();

  fill(255);

  textSize(18);

  text("1 = Cubo y esfera", 20, 30);

  text("2 = Box vs Sphere", 20, 55);

  text("3 = Cambiar brillo con B", 20, 80);

  text("4 = Comparar niveles de brillo", 20, 105);

  text("5 = Metal vs Plastico", 20, 130);

  text("B = Cambiar shininess", 20, 155);

  pop();
}

function keyPressed() {

  if (key === '1') {
    modoEscena = 1;
  }

  if (key === '2') {
    modoEscena = 2;
  }

  if (key === '3') {
    modoEscena = 3;
  }

  if (key === '4') {
    modoEscena = 4;
  }

  if (key === '5') {
    modoEscena = 5;
  }

  if (key === 'B' || key === 'b') {

    nivelBrillo = (nivelBrillo + 1) % 3;
  }
}