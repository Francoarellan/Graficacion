function setup() {
  createCanvas(900, 400, WEBGL);
}

function draw() {
  background(230);
  orbitControl();
  ambientLight(150);
  pointLight(255,255,255, 200,-200,300);
  noStroke();

  //NIVEL 1
  push();
  translate(-300, 0, 0);

  // Cubo con rotación continua en Y
  push();
  translate(-55, 0, 0);
  rotateY(frameCount * 0.015);
  fill(220, 100, 80);
  box(75);
  pop();
  push();
  translate(55, 0, 0);
  fill(80, 160, 220);
  sphere(45, 24, 16);
  pop();

  pop();

  // NIVEL 2
  // Cada figura rota en un eje diferente para ver su forma
  push();
  translate(0, 0, 0);

  push();
  translate(-75, 0, 0);
  rotateY(frameCount * 0.018);
  fill(220, 100, 80);
  box(55);
  pop();

  push();
  rotateX(frameCount * 0.018);
  fill(80, 180, 100);
  cylinder(35, 80);
  pop();

  push();
  translate(75, 0, 0);
  rotateZ(frameCount * 0.018);
  fill(80, 140, 220);
  cone(35, 80);
  pop();

  pop();

  //NIVEL 3: Esfera paramétrica desde ecuaciones 
  push();
  translate(300, 0, 0);
  rotateY(frameCount * 0.008);
  rotateX(0.3);

  stroke(100, 200, 255);
  strokeWeight(0.5);
  noFill();

  let r = 120, pasos = 14;

  for (let i = 0; i < pasos; i++) {
    let phi1 = map(i,   0, pasos, 0, PI);
    let phi2 = map(i+1, 0, pasos, 0, PI);
    for (let j = 0; j < pasos; j++) {
      let t1 = map(j,   0, pasos, 0, TWO_PI);
      let t2 = map(j+1, 0, pasos, 0, TWO_PI);
      // Calculamos los 4 vértices del parche de malla
      let x1=r*sin(phi1)*cos(t1), y1=r*cos(phi1), z1=r*sin(phi1)*sin(t1);
      let x2=r*sin(phi1)*cos(t2), y2=r*cos(phi1), z2=r*sin(phi1)*sin(t2);
      let x3=r*sin(phi2)*cos(t2), y3=r*cos(phi2), z3=r*sin(phi2)*sin(t2);
      let x4=r*sin(phi2)*cos(t1), y4=r*cos(phi2), z4=r*sin(phi2)*sin(t1);
      beginShape();
      vertex(x1,y1,z1); vertex(x2,y2,z2);
      vertex(x3,y3,z3); vertex(x4,y4,z4);
      endShape(CLOSE);
    }
  }
  pop();

  resetMatrix();
  fill(40); noStroke(); textSize(12); textAlign(CENTER);
  text("NIVEL 1: box y sphere",    -width/2+150, height/2-12);
  text("NIVEL 2: box/cylinder/cone", 0,           height/2-12);
  text("NIVEL 3: esfera param.",   width/2-150,  height/2-12);
}
