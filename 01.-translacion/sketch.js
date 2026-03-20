
let x1 = 50;               

let x2 = 50, y2 = 120;    
let vx = 2, vy = 1;

let x3 = 300, y3 = 150;  
let vx3 = 2, vy3 = 1.5;

function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(240);

  // NIVEL 1 — traslación en X: x_n = 50 + 2n
  x1 += 2;
  if (x1 > width) x1 = -60;  
  fill(200, 80, 80);
  rect(x1, 30, 60, 40);

  // NIVEL 2 — traslación diagonal con vector velocidad
  x2 += vx;
  y2 += vy;
  if (x2 > width) x2 = -60;
  if (y2 > height) y2 = -40;
  fill(80, 120, 200);
  rect(x2, y2, 60, 40);

  // NIVEL 3 — rebote: si toca borde horizontal, cambia signo de vx
  //           si toca borde vertical, cambia signo de vy
  x3 += vx3;
  y3 += vy3;
  if (x3 < 0 || x3 + 60 > width)  vx3 *= -1;
  if (y3 < 0 || y3 + 40 > height) vy3 *= -1;
  fill(80, 180, 100);
  rect(x3, y3, 60, 40);
}