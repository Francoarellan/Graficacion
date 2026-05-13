// CAPÍTULO 3 — Fundamentos de iluminación
// ambientLight()
// directionalLight()
// pointLight()
// Cambio de luces con teclado

let modoLuz = 1;

function setup() {

  createCanvas(1100, 700, WEBGL);

  noStroke();
}

function draw() {

  background(10);

  orbitControl();

  // MODO 1
  // Solo ambientLight

  if (modoLuz == 1) {

    ambientLight(180);
  }

  // MODO 2
  // directionalLight naranja

  if (modoLuz == 2) {

    ambientLight(30);

    directionalLight(
      255,
      140,
      0,
      1,
      1,
      -1
    );
  }

  // MODO 3
  // pointLight con mouse

  if (modoLuz == 3) {

    ambientLight(15);

    pointLight(
      255,
      180,
      0,
      mouseX - width / 2,
      mouseY - height / 2,
      300
    );
  }

  // MODO 4
  // Todas las luces

  if (modoLuz == 4) {

    ambientLight(25);

    directionalLight(
      255,
      140,
      0,
      1,
      1,
      -1
    );

    pointLight(
      255,
      200,
      0,
      mouseX - width / 2,
      mouseY - height / 2,
      300
    );
  }

  // ESFERA CENTRAL

  push();

  rotateY(frameCount * 0.01);

  specularMaterial(255);

  shininess(200);

  sphere(140);

  pop();

  // CUBO IZQUIERDA

  push();

  translate(-320, 0, 0);

  rotateX(frameCount * 0.01);

  rotateY(frameCount * 0.01);

  specularMaterial(255, 80, 80);

  shininess(120);

  box(140);

  pop();

  // TOROIDE DERECHA

  push();

  translate(320, 0, 0);

  rotateX(HALF_PI);

  rotateZ(frameCount * 0.01);

  specularMaterial(80, 180, 255);

  shininess(120);

  torus(110, 35);

  pop();

  // Luz visible

  if (modoLuz == 3 || modoLuz == 4) {

    push();

    translate(
      mouseX - width / 2,
      mouseY - height / 2,
      300
    );

    emissiveMaterial(255, 180, 0);

    sphere(18);

    pop();
  }

  // Texto

  push();

  resetMatrix();

  fill(255);

  textSize(20);

  text("1 = AmbientLight", 20, 30);

  text("2 = DirectionalLight", 20, 60);

  text("3 = PointLight", 20, 90);

  text("4 = Todas las luces", 20, 120);

  pop();
}

function keyPressed() {

  if (key == '1') {
    modoLuz = 1;
  }

  if (key == '2') {
    modoLuz = 2;
  }

  if (key == '3') {
    modoLuz = 3;
  }

  if (key == '4') {
    modoLuz = 4;
  }
}