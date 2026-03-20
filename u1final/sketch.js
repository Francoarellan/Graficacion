let x = -100; // posicion auto
let t = 3.14; // tiempo sol
let nX = [100, 300, 600]; // nubes x
let nY = [50, 80, 40];   // nubes y

function setup() {
  createCanvas(800, 400);
}

function draw() {
  // Cielo
  let luz = map(sin(t), 0, 1, 15, 180, true);
  background(luz, luz + 40, luz + 90);

  // Sol y Luna
  let sX = map(-cos(t), -1, 1, 0, width);
  let sY = map(sin(t), 0, 1, height - 100, 50, true);

  noStroke();
  if (sin(t) > 0) {
    fill(255, 220, 0); // sol
    circle(sX, sY, 55); 
  } else {
    let lX = map(-cos(t + PI), -1, 1, 0, width);
    let lY = map(sin(t + PI), 0, 1, height - 100, 50, true);
    fill(240); // luna
    circle(lX, lY, 40);
  }

  // Nubes
  fill(255, 220);
  for (let i = 0; i < nX.length; i++) {
    circle(nX[i], nY[i], 30);
    circle(nX[i] + 20, nY[i] - 10, 35);
    circle(nX[i] + 40, nY[i], 30);
    nX[i] += (i + 1) * 0.5; 
    if (nX[i] > width + 50) nX[i] = -100;
  }

  // Calle
  fill(40);
  rect(0, 300, width, 100);
  stroke(255);
  for (let i = 0; i < width; i += 40) {
    line(i, 350, i + 20, 350);
  }

  // Paloma blanca
  push();
  translate(mouseX, mouseY);
  noStroke();
  fill(255); 
  ellipse(0, 0, 15, 10); // cuerpo
  circle(8, -5, 8); // cabeza
  fill(255, 150, 0); 
  triangle(11, -5, 11, -3, 15, -4); // pico
  pop();

  // Auto
  push();
  translate(x, 330);
  noStroke();
  fill(180, 0, 0); 
  rect(0, 0, 110, 35, 5); // base
  rect(25, -25, 60, 30, 8); // techo
  fill(150, 200, 255); 
  rect(30, -20, 24, 18, 2); // ventana 1
  rect(58, -20, 22, 18, 2); // ventana 2
  stroke(0, 50); 
  line(55, -20, 55, 30); // puerta
  noStroke();
  fill(20); 
  circle(25, 35, 25);
  circle(85, 35, 25);
  fill(100); 
  circle(25, 35, 10);
  circle(85, 35, 10);
  pop();

  // Movimiento
  x += 4;
  if (x > width + 100) x = -150;
  t += 0.01; 
  
  fill(255);
  noStroke();
  text("Franco Antonio Arellano Moreno", 20, 30);
}