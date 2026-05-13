// CAPÍTULO 2 — Relleno de polígonos
// fill()
// lerpColor()
// texture()
// normalMaterial()
// Cambiar textura con tecla T

let img;

let modo = 1;

function preload() {

  img = loadImage(
    "https://resources.wimpmusic.com/images/65cad78b/b90d/4ae6/bedf/a136a9f6adea/1280x1280.jpg"
  );
}

function setup() {

  createCanvas(1200, 750, WEBGL);

  noStroke();
}

function draw() {

  background(15);

  orbitControl();

  ambientLight(120);

  directionalLight(255,255,255,1,1,-1);

  // MODO 1
  // Figuras con fill()

  if (modo == 1) {

    push();

    translate(-320, 0, 0);

    rotateY(frameCount * 0.01);

    fill(255, 80, 80);

    box(180);

    pop();

    push();

    rotateY(frameCount * 0.01);

    fill(80, 255, 140);

    sphere(130);

    pop();

    push();

    translate(320, 0, 0);

    rotateX(HALF_PI);

    rotateZ(frameCount * 0.01);

    fill(80, 180, 255);

    torus(110, 35);

    pop();
  }

  // MODO 2
  // Degradado con lerpColor()

  if (modo == 2) {

    let t = (sin(frameCount * 0.03) + 1) / 2;

    let c1 = color(255, 0, 0);

    let c2 = color(0, 0, 255);

    let mezcla = lerpColor(c1, c2, t);

    push();

    rotateY(frameCount * 0.01);

    fill(mezcla);

    sphere(180);

    pop();
  }

  // MODO 3
  // Textura

  if (modo == 3) {

    push();

    rotateX(frameCount * 0.01);

    rotateY(frameCount * 0.01);

    texture(img);

    box(280);

    pop();
  }

  // MODO 4
  // normalMaterial()

  if (modo == 4) {

    push();

    rotateX(frameCount * 0.01);

    rotateY(frameCount * 0.01);

    normalMaterial();

    torus(170, 50);

    pop();
  }

  // MODO 5
  // Comparación general

  if (modo == 5) {

    // Fill normal

    push();

    translate(-350, 0, 0);

    rotateY(frameCount * 0.01);

    fill(255, 100, 100);

    sphere(110);

    pop();

    // Degradado

    let t = (sin(frameCount * 0.03) + 1) / 2;

    let c1 = color(255, 0, 0);

    let c2 = color(0, 0, 255);

    let mezcla = lerpColor(c1, c2, t);

    push();

    rotateY(frameCount * 0.01);

    fill(mezcla);

    box(180);

    pop();

    // Textura

    push();

    translate(350, 0, 0);

    rotateY(frameCount * 0.01);

    texture(img);

    sphere(120);

    pop();
  }

  // Texto

  push();

  resetMatrix();

  fill(255);

  textSize(20);

  text("1 = Fill()", 20, 30);

  text("2 = Degradado", 20, 60);

  text("3 = Textura", 20, 90);

  text("4 = NormalMaterial", 20, 120);

  text("5 = Comparacion", 20, 150);

  text("T = Cambiar modos", 20, 180);

  pop();
}

function keyPressed() {

  if (key == 't' || key == 'T') {

    modo++;

    if (modo > 5) {

      modo = 1;
    }
  }
}