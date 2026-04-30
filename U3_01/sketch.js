
function setup() {
  createCanvas(900, 400, WEBGL);
}

function draw() {
  background(30, 30, 50);
  orbitControl(); // El mouse permite girar toda la escena

  // Iluminación global que afecta los 3 niveles
  ambientLight(100);
  pointLight(255, 255, 255, 0, -300, 300);
  noStroke();

  //NIVEL 1
  // Zona izquierda: translate mueve el grupo de objetos a X = -300
  push();
  translate(-300, 0, 0); // Posicionamos el nivel 1 a la izquierda
  // Cubo en el centro de su zona, rotando con frameCount
  push();
  rotateX(frameCount * 0.008);
  rotateY(frameCount * 0.012);
  fill(70, 130, 220); // Azul
  box(70);
  pop();

  // Esfera naranja debajo del cubo (Y positiva baja en WEBGL)
  push();
  translate(0, 90, 0);
  fill(255, 140, 50);
  sphere(35);
  pop();
  pop();

  // ── NIVEL 2
  // Zona central: sin traslación, queda en X = 0
  push();
  // Dibujamos los 3 ejes con líneas de colores
  strokeWeight(2);
  stroke(255, 60, 60);  line(-120,0,0, 120,0,0);  // Eje X 
  stroke(60, 255, 60);  line(0,-120,0, 0,120,0);  // Eje Y 
  stroke(60, 60, 255);  line(0,0,-120, 0,0,120);  // Eje Z 

  // Cubo en el origen girando en X y Y
  noStroke();
  rotateX(frameCount * 0.010);
  rotateY(frameCount * 0.015);
  fill(230);
  box(55);
  pop();

  // ── NIVEL 3
  // Zona derecha: translate mueve el grupo a X = +300
  push();
  translate(300, 0, 0);
  // Cono al fondo (Z negativa = más lejos del espectador)
  push();
  translate(0, 20, -120);
  rotateY(frameCount * 0.015);
  fill(220, 80, 80);
  noStroke();
  cone(40, 80);
  pop();
  // Esfera en el centro a profundidad media
  push();
  fill(80, 200, 120); // Verde
  noStroke();
  sphere(38);
  pop();
  push();
  translate(0, 0, 80); 
  rotateX(frameCount * 0.012);
  fill(220, 180, 60);
  noStroke();
  torus(35, 12);
  pop();

  pop();
  resetMatrix(); 
  fill(200);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text("NIVEL 1: cubo + esfera",   -width/2 + 150, height/2 - 12);
  text("NIVEL 2: ejes + cubo",      0,              height/2 - 12);
  text("NIVEL 3: escena profund.", width/2 - 150,  height/2 - 12);
}
