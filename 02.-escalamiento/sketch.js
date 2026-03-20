let s3 = 1;

function setup() {
  createCanvas(600, 300);
  rectMode(CENTER);
}

function draw() {
  background(240);

  // NIVEL 1 — escalamiento armónico centrado
  let s1 = 1 + 0.5 * sin(frameCount * 0.05);
  push();
  translate(width / 2, height / 2); 
  scale(s1);
  fill(200, 80, 80);
  rect(0, 0, 120, 60);
  pop();

  // NIVEL 2 — escalamiento NO uniforme

  let sx = 1 + 0.5 * sin(frameCount * 0.05);
  let sy = 1 + 0.5 * cos(frameCount * 0.05);
  push();
  translate(150, 80);
  scale(sx, sy);
  fill(80, 120, 200, 160);
  rect(0, 0, 80, 40);
  pop();

  // NIVEL 3 — escalamiento acumulativo
  s3 *= 1.01;
  if (s3 > 6) s3 = 1;
  push();
  translate(width / 2, height - 60);
  scale(s3);
  fill(80, 180, 100, 160);
  rect(0, 0, 50, 30);
  pop();
}