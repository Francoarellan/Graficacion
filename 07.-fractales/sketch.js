// NIVEL 1 — árbol con ángulo fijo PI/6 (30°)
function rama(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 8) {
    push(); rotate(PI/6);  rama(len * 0.67); pop();
    push(); rotate(-PI/6); rama(len * 0.67); pop();
  }
}

// NIVEL 3 — ángulo controlado por mouse
function ramaInteractiva(len, ang) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 8) {
    push(); rotate(ang);  ramaInteractiva(len * 0.67, ang); pop();
    push(); rotate(-ang); ramaInteractiva(len * 0.67, ang); pop();
  }
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);

  // NIVEL 1 — árbol estático con ángulo PI/6
  push();
  stroke(80, 50, 20); strokeWeight(1.5);
  translate(150, height);
  rama(80);
  pop();

  // NIVEL 2 — árbol con más profundidad (longitud inicial mayor)
  push();
  stroke(60, 100, 40); strokeWeight(1);
  translate(350, height);
  rama(100);
  pop();

  // NIVEL 3 — ángulo dinámico con mouse
  let ang = map(mouseX, 0, width, 0, PI / 2);
  push();
  stroke(40, 80, 160); strokeWeight(1);
  translate(520, height);
  ramaInteractiva(70, ang);
  pop();

  // etiqueta
  fill(60); noStroke(); textSize(12);
  text("Ángulo: " + nf(degrees(ang), 1, 1) + "°  (mueve mouse)", 10, 20);
}