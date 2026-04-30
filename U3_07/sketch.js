let usarPerspectiva = true;
let fov = PI / 3;

function setup() {
  createCanvas(900, 400, WEBGL);
}

function draw() {
  background(240);
  orbitControl();
  ambientLight(150);
  pointLight(255,255,255, 0,-300,300);
  noStroke();

  //NIVEL 1: Comparación básica ortho vs perspective
  //Muestra dos cubos del mismo tamaño a distinta profundidad.
  //Con perspectiva el lejano se ve más chico; con ortho igual.
  push();
  translate(-300, 0, 0);
  // Cubo cercano
  push();
  translate(-40, 0, 0);
  rotateY(frameCount * 0.01);
  fill(220, 100, 80);
  box(55);
  pop();
  // Cubo lejano
  push();
  translate(40, 0, -150);
  rotateY(frameCount * 0.01);
  fill(80, 140, 220);
  box(55);
  pop();
  pop();
  push();
  translate(0, 0, 0);
  // Esfera más lejana
  push(); translate(0, 0,-160); fill(220,80,80);  sphere(38); pop();
  // Esfera central
  push();                       fill(80,200,120); sphere(38); pop();
  // Esfera más cercana
  push(); translate(0, 0, 160); fill(80,140,255); sphere(38); pop();
  pop();
  //NIVEL 3
  push();
  translate(300, 0, 0);
  // Aplicamos perspectiva solo para el dibujo de esta zona
  rotateY(frameCount * 0.01);
  fill(100, 150, 220);
  box(70);
  pop();
  resetMatrix();
  fill(40); noStroke(); textSize(12); textAlign(CENTER);
  text("NIVEL 1: ortho vs perspect. (ESPACIO)", -width/2+150, height/2-24);
  text(usarPerspectiva ? "[PERSPECTIVA]" : "[ORTOGRÁFICA]", -width/2+150, height/2-10);
  text("NIVEL 2: profundidad en Z",  0,           height/2-12);
  text("NIVEL 3: FOV "+nf(degrees(fov),1,0)+"° (A/D)", width/2-150, height/2-12);
}
function keyPressed() {
  if (key === ' ') usarPerspectiva = !usarPerspectiva;
  if (key==='A'||key==='a') fov = max(radians(10),  fov-0.08);
  if (key==='D'||key==='d') fov = min(radians(140), fov+0.08);
}
