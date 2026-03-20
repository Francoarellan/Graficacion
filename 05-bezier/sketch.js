function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(245);

  // Puntos de control fijos
  let x0=80, y0=300, x1=180, y1=80;
  let x2=420, y2=80, x3=520, y3=300;

  // NIVEL 1 — curva con líneas guía y puntos visibles
  stroke(180); strokeWeight(1);
  line(x0,y0, x1,y1);
  line(x1,y1, x2,y2);
  line(x2,y2, x3,y3);

  strokeWeight(2); stroke(0); noFill();
  bezier(x0,y0, x1,y1, x2,y2, x3,y3);

  // dibujar los 4 puntos de control
  fill(0); noStroke();
  circle(x0,y0,10); circle(x1,y1,10);
  circle(x2,y2,10); circle(x3,y3,10);

  // NIVEL 2 — punto animado recorriendo la curva
  let t = (frameCount % 200) / 200;
  let px = bezierPoint(x0,x1,x2,x3, t);
  let py = bezierPoint(y0,y1,y2,y3, t);
  fill(255,60,60); noStroke();
  circle(px, py, 14);

  // NIVEL 3 — P1 sigue al mouse, observar cómo cambia la forma
  stroke(0,100,200,120); strokeWeight(1.5); noFill();
  bezier(x0,y0, mouseX,mouseY, x2,y2, x3,y3);
  fill(0,100,200); noStroke();
  circle(mouseX, mouseY, 8);

  fill(80); noStroke(); textSize(11);
  text("P0",x0+6,y0-4); text("P1(mouse)",mouseX+6,mouseY-4);
  text("P2",x2+6,y2-4); text("P3",x3+6,y3+14);
}