// PROYECTO FINAL — UNIDAD 4
//Arellano Moreno Franco Antonio
let img;

let lightMode = 1;

let materialMode = 0;

let animacion = true;

let velocidad = 1;

let angulo = 0;

function preload() {

  img = loadImage(
    "https://archive1990.com/cdn/shop/products/LongTerm_600x_crop_center.png?v=1678851033"
  );
}

function setup() {

  createCanvas(1300, 800, WEBGL);

  noStroke();
}

function draw() {

  background(10);

  orbitControl();

  // Luces

  if (lightMode == 1) {

    ambientLight(50);

    directionalLight(255, 255, 255, 1, 1, -1);
  }

  if (lightMode == 2) {

    ambientLight(20);

    pointLight(
      255,
      255,
      255,
      mouseX - width / 2,
      mouseY - height / 2,
      300
    );
  }

  if (lightMode == 3) {

    ambientLight(20);

    directionalLight(255, 0, 0, 1, 0, -1);

    directionalLight(0, 0, 255, -1, 0, -1);

    directionalLight(0, 255, 120, 0, -1, -1);
  }

  // Animación

  if (animacion) {

    angulo += 0.01 * velocidad;
  }

  // Piso

  push();

  translate(0, 260, 0);

  rotateX(HALF_PI);

  ambientMaterial(60);

  plane(1400, 1400);

  pop();

  //CUBO PRINCIPAL
  push();

  translate(0, 0, 0);  // Centro

  rotateY(angulo);     // Gira sobre su propio eje Y

  rotateX(angulo * 0.5); // Gira un poco también en X para efecto 3D

  texture(img);

  box(180);

  pop();

  //ESFERA
  push();

  translate(350, -100, 0);

  // Rotación sutil independiente

  rotateY(angulo * 0.8);

  aplicarMaterial(100, 255, 180);

  sphere(90);

  pop();

  // ========== CONO ==========
  push();

  translate(-350, -100, 0);

  rotateY(angulo * 0.6);

  rotateX(-0.2);

  aplicarMaterial(255, 140, 80);

  cone(80, 150);

  pop();

  // Luz visible

  if (lightMode == 2) {

    push();

    translate(
      mouseX - width / 2,
      mouseY - height / 2,
      300
    );

    emissiveMaterial(255);

    sphere(20);

    pop();
  }


}

// Función para aplicar diferentes tipos de materiales

function aplicarMaterial(r, g, b) {

  // Brillante

  if (materialMode == 0) {

    specularMaterial(r, g, b);

    shininess(220);
  }

  // NormalMaterial

  if (materialMode == 1) {

    normalMaterial();
  }

  // Mate 

  if (materialMode == 2) {

    ambientMaterial(r, g, b);
  }
}

//teclas

function keyPressed() {

  if (key == '1') {
    lightMode = 1;
  }

  if (key == '2') {
    lightMode = 2;
  }

  if (key == '3') {
    lightMode = 3;
  }

  if (key == 'm' || key == 'M') {

    materialMode++;

    if (materialMode > 2) {

      materialMode = 0;
    }
  }

  if (key == 'a' || key == 'A') {

    animacion = !animacion;
  }

  if (key == '+') {

    velocidad += 0.2;
  }

  if (key == '-') {

    velocidad -= 0.2;

    if (velocidad < 0.2) {

      velocidad = 0.2;
    }
  }
}