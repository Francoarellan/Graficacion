
function setup() {
  createCanvas(900, 400, WEBGL);
}

function draw() {
  background(245);
  orbitControl();

  // NIVEL 1: Pirámide con vértices
  // Una pirámide se define con 5 puntos y 8 aristas dibujadas con line()
  push();
  translate(-300, 0, 0); // Zona izquierda
  rotateY(frameCount * 0.008);
  rotateX(0.3); // Leve inclinación para ver la base

  stroke(50, 50, 200);
  strokeWeight(2);
  noFill();

  let vp = [
    [-55, 55,-55], // v0 base trasera izquierda
    [ 55, 55,-55], // v1 base trasera derecha
    [ 55, 55, 55], // v2 base delantera derecha
    [-55, 55, 55], // v3 base delantera izquierda
    [  0,-75,  0], // v4 la punta
  ];

  // Aristas
  let ep = [[0,1],[1,2],[2,3],[3,0],[0,4],[1,4],[2,4],[3,4]];
  for (let a of ep) {
    let u=vp[a[0]], v=vp[a[1]];
    line(u[0],u[1],u[2], v[0],v[1],v[2]);
  }
  pop();

  // NIVEL 2: Wireframe de cubo completo
  push();
  translate(0, 0, 0); // Zona central
  rotateY(frameCount * 0.010);
  rotateX(frameCount * 0.005);

  stroke(0);
  strokeWeight(2);
  noFill();

  let s = 70;
  let vc = [
    [-s,-s,-s],[s,-s,-s],[s,s,-s],[-s,s,-s],
    [-s,-s, s],[s,-s, s],[s,s, s],[-s,s, s],
  ];
  let ec = [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7],
  ];
  for (let a of ec) {
    let u=vc[a[0]], v=vc[a[1]];
    line(u[0],u[1],u[2], v[0],v[1],v[2]);
  }
  pop();

  // NIVEL 3: Cubo con caras sólidas
  // Con beginShape() + vertex() llenamos cada cara con color
  push();
  translate(300, 0, 0); // Zona derecha
  ambientLight(120);
  pointLight(255,255,255, 200,-200,200);
  rotateY(frameCount * 0.010);
  rotateX(frameCount * 0.006);
  strokeWeight(1);
  stroke(0);

  let sc = 65;
  let vf = [
    [-sc,-sc,-sc],[sc,-sc,-sc],[sc,sc,-sc],[-sc,sc,-sc],
    [-sc,-sc, sc],[sc,-sc, sc],[sc,sc, sc],[-sc,sc, sc],
  ];

  //ibuja una cara con 4 vértices y un color
  function cara(i0,i1,i2,i3, r,g,b) {
    fill(r,g,b,200);
    beginShape();
    vertex(vf[i0][0],vf[i0][1],vf[i0][2]);
    vertex(vf[i1][0],vf[i1][1],vf[i1][2]);
    vertex(vf[i2][0],vf[i2][1],vf[i2][2]);
    vertex(vf[i3][0],vf[i3][1],vf[i3][2]);
    endShape(CLOSE); // Cierra y rellena el polígono
  }

  // Las 6 caras del cubo, cada una con su color
  cara(0,1,2,3, 220,80,80);  // Trasera
  cara(4,5,6,7, 80,180,220); // Delantera
  cara(0,4,7,3, 80,220,120); // Izquierda
  cara(1,5,6,2, 220,180,80); // Derecha
  cara(0,1,5,4, 180,80,220); // Superior
  cara(3,2,6,7, 220,140,80); // Inferior
  pop();
  resetMatrix();
  fill(40); noStroke(); textSize(12); textAlign(CENTER);
  text("NIVEL 1: pirámide",    -width/2+150, height/2-12);
  text("NIVEL 2: wireframe",    0,            height/2-12);
  text("NIVEL 3: cubo sólido", width/2-150,  height/2-12);
}
