function setup() {
  createCanvas(1100, 450, WEBGL);
}

function draw() {
  background(240);
  orbitControl(); // Mouse para orbitar la vista
  ambientLight(160);
  pointLight(255, 255, 255, 0, -300, 300);

  //NIVEL 1: Práctica 1 — Cubo con vértices y aristas
  push();
  translate(-400, 0, 0); // Zona izquierda
  rotateY(frameCount * 0.010);
  rotateX(0.25);

  stroke(50, 50, 200);
  strokeWeight(2);
  noFill();

  let s = 65;
  let vertices = [
    [-s,-s,-s], [s,-s,-s], [s,s,-s], [-s,s,-s], // Cara trasera
    [-s,-s, s], [s,-s, s], [s,s, s], [-s,s, s], // Cara delantera
  ];
  let edges = [
    [0,1],[1,2],[2,3],[3,0], // Aristas cara trasera
    [4,5],[5,6],[6,7],[7,4], // Aristas cara delantera
    [0,4],[1,5],[2,6],[3,7], // Aristas de unión entre caras
  ];
  for (let e of edges) {
    let v1 = vertices[e[0]];
    let v2 = vertices[e[1]];
    line(v1[0], v1[1], v1[2], v2[0], v2[1], v2[2]);
  }
  pop();

  // Práctica 2  Transformaciones 
  // Objetivo: aplicar traslación, rotación y escalamiento
  // El orden correcto es: translate → rotate → scale
  // Cambiar el orden produce resultados completamente distintos
  push();
  translate(-130, 0, 0);


  translate(0, 0, 0);
  rotateY(frameCount * 0.020);
  scale(1.2);

  noStroke();
  fill(100, 180, 255);
  box(70);
  pop();

  //Rotación en ejes X, Y, Z
  push();
  translate(130, 0, 0); 
  rotateX(frameCount * 0.010); // Giro en eje horizontal
  rotateY(frameCount * 0.010); // Giro en eje vertical
  rotateZ(frameCount * 0.010); // Giro en eje de profundidad

  noStroke();
  fill(80, 200, 120);
  box(70);
  pop(); 

  //Práctica 4
  //implementar rotación alrededor de un eje no alineado
  push();
  translate(400, 0, 0); // Zona derecha

  // Velocidades distintas en X y Y → el eje efectivo es diagonal
  rotateX(frameCount * 0.010); // Velocidad base
  rotateY(frameCount * 0.015); // 1.5x más rápido que X

  noStroke();
  fill(220, 100, 80);
  box(70);
  pop(); 
  resetMatrix();
  fill(40); noStroke(); textSize(12); textAlign(CENTER);
  text("NIVEL 1: Práct.1",  -width/2+200, height/2-12);
  text("NIVEL 2: Práct.2",  -width/2+390, height/2-12);
  text("NIVEL 3: Práct.3",  width/2-390,  height/2-12);
  text("NIVEL 4: Práct.4",  width/2-200,  height/2-12);
}
