let camAng = 0;

function setup() {
  createCanvas(900, 400, WEBGL);
}

function draw() {
  background(15, 15, 35);
  orbitControl();
  ambientLight(80);
  pointLight(255, 220, 150, 0, -300, 200);
  noStroke();

  //NIVEL 1
  push();
  translate(-300, 0, 0);

  push(); translate(-55,0,0); fill(220,100,80); box(55); pop();   // Cubo
  push();                     fill(80,180,220); sphere(38); pop(); // Esfera
  push(); translate(55,0,0);  fill(80,220,120); cone(30,70); pop(); // Cono

  pop();

  //NIVEL 2: Cámara en movimiento circular 
  push();
  translate(0, 0, 0);
  // Objeto central
  push(); fill(200,150,80); box(65); pop();

  // Satélites que orbitan el objeto central
  // El ángulo cambia con frameCount para simular movimiento
  let radio = 90;
  let sx = radio * cos(frameCount * 0.02);
  let sz = radio * sin(frameCount * 0.02);
  push(); translate(sx, 0, sz);  fill(80,140,220); sphere(20); pop();
  push(); translate(-sx, 0, -sz); fill(220,80,120); sphere(20); pop();
  pop();

  //NIVEL 3
  //distintas animaciones
  push();
  translate(300, 0, 0);

  // Cubo que rota en Y
  push();
  translate(-65, 0, 0);
  rotateY(frameCount * 0.020);
  fill(220, 100, 80);
  box(50);
  pop();

  // Esfera estática en el centro
  push(); fill(100,180,255); sphere(40); pop();

  // Toro que rota en X
  push();
  translate(65, 0, 0);
  rotateX(frameCount * 0.015);
  fill(80, 220, 130);
  torus(35, 12);
  pop();
  pop();
  resetMatrix();
  fill(190); noStroke(); textSize(12); textAlign(CENTER);
  text("NIVEL 1: cámara fija",     -width/2+150, height/2-12);
  text("NIVEL 2: cámara circular",  0,            height/2-12);
  text("NIVEL 3: escena completa", width/2-150,  height/2-12);

  camAng += 0.005;
}
