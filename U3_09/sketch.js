// CAPÍTULO 9 Proyecto Integrador
//Arellano Moreno Franco Antonio
// Mandala 3D Interactiva
// Controles:
// W / S -> mover en Z
// A / D -> mover en X
// Q / E -> aumentar o disminuir tamaño
// Flechas -> rotación
// Mouse -> mover cámara
let rotX = 0;
let rotY = 0;
let escala = 1;
let posX = 0;
let posY = 0;
let posZ = 0;

function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  background(20);
  
  // Permite mover la cámara con el mouse
  orbitControl();

  // Aísla transformaciones de toda la mandala
  push();
  
  // Movimiento general
  translate(posX, posY, posZ);
  
  // Rotaciones manuales
  rotateX(rotX);
  rotateY(rotY);
  
  // Escala general
  scale(escala);
  
  // Rotación automática suave
  rotateY(frameCount * 0.01);

  // Dibujar la mandala
  for (let i = 0; i < 12; i++) {
    push();
    
    // Distribuye piezas alrededor del centro
    rotateY(TWO_PI / 12 * i);
    translate(180, 0, 0);
    
    // Rotación individual
    rotateX(frameCount * 0.02 + i);
    
    // Color dinámico
    fill(
      100 + sin(frameCount * 0.02 + i) * 155,
      100 + cos(frameCount * 0.03 + i) * 155,
      200
    );
    
    noStroke();

    // Esfera exterior
    sphere(25);

    // Caja decorativa
    push();
    rotateY(frameCount * 0.03);
    box(25);
    pop();

    pop();
  }

  // Centro principal
  push();
  fill(255, 180, 100);
  sphere(50);
  
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  fill(100, 200, 255);
  box(70);
  pop();

  pop();
}

function keyPressed() {
  // Movimiento en profundidad
  if (key === 'W') posZ += 20;
  if (key === 'S') posZ -= 20;

  // Movimiento horizontal
  if (key === 'A') posX -= 20;
  if (key === 'D') posX += 20;

  // Escalamiento
  if (key === 'Q') escala += 0.1;
  if (key === 'E') escala -= 0.1;

  // Rotación con flechas
  if (keyCode === UP_ARROW) rotX -= 0.1;
  if (keyCode === DOWN_ARROW) rotX += 0.1;
  if (keyCode === LEFT_ARROW) rotY -= 0.1;
  if (keyCode === RIGHT_ARROW) rotY += 0.1;
}