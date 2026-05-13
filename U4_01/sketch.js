// CAPÍTULO 5 — Sombreado
// Ejercicio 1: cubo y esfera con iluminación
// Ejercicio 2: comparar box() vs sphere()
// Ejercicio 3: specularMaterial() + cambiar shininess con tecla B
// Desafío 1: simular metal
// Desafío 2: crear esfera tipo plástico
// Desafío 3: comparar 3 niveles de brillo (tecla 4)

let modoEscena = 1;
let nivelBrillo = 0;
let niveles = [10, 50, 150];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(20);
  orbitControl();

  ambientLight(40);
  directionalLight(255, 255, 255, 1, 1, -1);
  pointLight(255, 230, 210, mouseX - width / 2, mouseY - height / 2, 350);

  if (modoEscena === 1) {
    // Ejercicio 1: cubo y esfera con iluminación
    push();
    translate(-160, 0, 0);
    rotateX(frameCount * 0.008);
    rotateY(frameCount * 0.01);
    ambientMaterial(200, 80, 80);
    box(120);
    pop();

    push();
    translate(160, 0, 0);
    rotateY(frameCount * 0.01);
    ambientMaterial(80, 160, 220);
    sphere(90);
    pop();

  } else if (modoEscena === 2) {
    // Ejercicio 2: comparar box vs sphere
    // box → caras planas, sombra brusca
    // sphere → normales suaves, sombra continua
    push();
    translate(-200, 0, 0);
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.01);
    specularMaterial(200, 100, 100);
    shininess(60);
    box(130);
    pop();

    push();
    translate(200, 0, 0);
    rotateY(frameCount * 0.01);
    specularMaterial(100, 160, 220);
    shininess(60);
    sphere(100);
    pop();

  } else if (modoEscena === 3) {
    // Ejercicio 3: variar shininess con tecla B
    push();
    translate(0, 0, 0);
    rotateY(frameCount * 0.01);
    specularMaterial(120, 180, 255);
    shininess(niveles[nivelBrillo]);
    sphere(110);
    pop();

  } else if (modoEscena === 4) {
    // Desafío 3: comparar 3 niveles de brillo lado a lado
    push();
    translate(-260, 0, 0);
    rotateY(frameCount * 0.01);
    specularMaterial(180, 120, 255);
    shininess(10);
    sphere(80);
    pop();

    push();
    translate(0, 0, 0);
    rotateY(frameCount * 0.01);
    specularMaterial(180, 120, 255);
    shininess(50);
    sphere(80);
    pop();

    push();
    translate(260, 0, 0);
    rotateY(frameCount * 0.01);
    specularMaterial(180, 120, 255);
    shininess(150);
    sphere(80);
    pop();

  } else if (modoEscena === 5) {
    // Desafío 1: metal
    push();
    translate(-160, 0, 0);
    rotateY(frameCount * 0.01);
    specularMaterial(200, 200, 220);
    shininess(160);
    sphere(100);
    pop();

    // Desafío 2: plástico
    push();
    translate(160, 0, 0);
    rotateY(frameCount * 0.01);
    specularMaterial(60, 200, 120);
    shininess(40);
    sphere(100);
    pop();
  }
}

function keyPressed() {
  if (key === '1') modoEscena = 1;
  if (key === '2') modoEscena = 2;
  if (key === '3') modoEscena = 3;
  if (key === '4') modoEscena = 4;
  if (key === '5') modoEscena = 5;
  if (key === 'B' || key === 'b') nivelBrillo = (nivelBrillo + 1) % 3;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}