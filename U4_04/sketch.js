// CAPÍTULO 4 
let modoLuz = 1;

let modoMaterial = 0;
// 0 = normal
// 1 = metal
// 2 = plastico

function setup() {

  createCanvas(1100, 700, WEBGL);

  noStroke();
}

function draw() {

  background(15);

  orbitControl();

  // MODOS DE ILUMINACIÓN

  if (modoLuz === 1) {

    // Solo ambientLight

    ambientLight(130);
  }

  else if (modoLuz === 2) {

    // Luz direccional naranja

    ambientLight(40);

    directionalLight(
      255, 140, 0,
      1, 1, -1
    );
  }

  else if (modoLuz === 3) {

    // Luz naranja

    ambientLight(25);

    directionalLight(
      255, 120, 0,
      1, 1, -1
    );

    pointLight(
      255, 150, 0,
      mouseX - width / 2,
      mouseY - height / 2,
      300
    );
  }

  else if (modoLuz === 4) {

    // Comparación de materiales

    ambientLight(40);

    directionalLight(
      255, 140, 0,
      1, 1, -1
    );

    pointLight(
      255, 180, 0,
      0,
      -200,
      300
    );
  }

  // DESAFÍO 1
  // COMPARACIÓN DE ESFERAS

  if (modoLuz === 4) {

    // ESFERA MATE

    push();

    translate(-320, 0, 0);

    rotateY(frameCount * 0.01);

    ambientMaterial(180, 80, 80);

    sphere(90);

    pop();

    // ESFERA SEMI BRILLANTE

    push();

    translate(0, 0, 0);

    rotateY(frameCount * 0.01);

    specularMaterial(255, 120, 120);

    shininess(40);

    sphere(90);

    pop();

    // ESFERA MUY BRILLANTE

    push();

    translate(320, 0, 0);

    rotateY(frameCount * 0.01);

    specularMaterial(255);

    shininess(180);

    sphere(90);

    pop();
  }

  else {

    // ESFERA IZQUIERDA
    // MATERIAL SEGÚN TECLA M

    push();

    translate(-180, 0, 0);

    rotateY(frameCount * 0.01);

    if (modoMaterial === 0) {

      // Normal

      ambientMaterial(100, 180, 240);

    }

    else if (modoMaterial === 1) {

      // Metal

      specularMaterial(220);

      shininess(180);

    }

    else {

      // Plástico

      specularMaterial(80, 255, 140);

      shininess(40);
    }

    sphere(100);

    pop();
    // CUBO DERECHO

    push();

    translate(180, 0, 0);

    rotateX(frameCount * 0.01);

    rotateY(frameCount * 0.01);

    if (modoMaterial === 0) {

      ambientMaterial(220, 80, 80);

    }

    else if (modoMaterial === 1) {

      specularMaterial(220);

      shininess(180);

    }

    else {

      specularMaterial(255, 120, 80);

      shininess(50);
    }

    box(120);

    pop();
  }

  // INDICADOR DE LUZ

  if (modoLuz === 3) {

    push();

    translate(
      mouseX - width / 2,
      mouseY - height / 2,
      300
    );

    emissiveMaterial(255, 140, 0);

    sphere(15);

    pop();
  }
  push();

  resetMatrix();

  fill(255);

  textSize(18);

  text("1 = AmbientLight", 20, 30);

  text("2 = DirectionalLight naranja", 20, 55);

  text("3 = PointLight con mouse", 20, 80);

  text("4 = Comparacion de materiales", 20, 105);

  text("M = Cambiar metal / plastico", 20, 130);

  pop();
}

// CAMBIO DE MODOS

function keyPressed() {

  if (key === '1') {
    modoLuz = 1;
  }

  if (key === '2') {
    modoLuz = 2;
  }

  if (key === '3') {
    modoLuz = 3;
  }

  if (key === '4') {
    modoLuz = 4;
  }

  if (key === 'M' || key === 'm') {

    modoMaterial = (modoMaterial + 1) % 3;
  }
}