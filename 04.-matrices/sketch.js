// Multiplicación matriz 3×3 por punto homogéneo (x, y, 1)
function aplicarM(M, p) {
  let x = M[0][0]*p.x + M[0][1]*p.y + M[0][2];
  let y = M[1][0]*p.x + M[1][1]*p.y + M[1][2];
  return { x, y };
}

// Multiplicar dos matrices 3×3
function multM(A, B) {
  let R = [[0,0,0],[0,0,0],[0,0,0]];
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      for (let k = 0; k < 3; k++)
        R[i][j] += A[i][k] * B[k][j];
  return R;
}

function setup() { createCanvas(600, 300); }

function draw() {
  background(240);
  let p = { x: 0, y: 0 };

  // NIVEL 1 — matriz de escalamiento
  let S = [[2,0,50],[0,2,50],[0,0,1]]; 
  let p1 = aplicarM(S, p);
  fill(200,80,80); circle(p1.x, p1.y, 16);
  fill(0); textSize(11); text("S(2,2)", p1.x+10, p1.y);

  // NIVEL 2 — matriz de rotación R(π/4)
  let t = frameCount * 0.02;
  let R = [[cos(t), -sin(t), 300],
           [sin(t),  cos(t), 150],
           [0,       0,      1]];
  let p2 = aplicarM(R, { x: 80, y: 0 });
  fill(80,120,200); circle(p2.x, p2.y, 16);
  fill(0); text("R(θ)", p2.x+8, p2.y);

  // NIVEL 3 — composición S·R ≠ R·S
  let S2 = [[2,0,0],[0,2,0],[0,0,1]];
  let Rp = [[cos(t),-sin(t),0],[sin(t),cos(t),0],[0,0,1]];
  let SR = multM(S2, Rp);  
  let RS = multM(Rp, S2); 
  let base = { x: 40, y: 0 };
  let pSR = aplicarM(SR, base);
  let pRS = aplicarM(RS, base);

  fill(80,180,100);
  circle(pSR.x + 450, pSR.y + 150, 12);
  fill(200,140,50);
  circle(pRS.x + 450, pRS.y + 150, 12);
  fill(0); textSize(10);
  text("SR", pSR.x+455, pSR.y+148);
  text("RS", pRS.x+455, pRS.y+148);
}