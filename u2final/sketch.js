// --- VARIABLES GLOBALES ---
let pos, sc = 1, ang = 0, sh = 0; // Para mover, escalar, rotar y deformar el robot
let p1, p2, p3, p4;               // Puntos para la curva de abajo
let prof = 4;                     // Qué tan complejo es el arbolito (fractal)
let piernas = 0;                  // Para la animación de caminar
let cab = 40;                     // Tamaño de la cabeza que cambia con la tecla 'E'

function setup() {
  createCanvas(800, 600);
  pos = createVector(width / 2, height / 2); // El robot empieza en el centro
  
  // Posiciones iniciales de la curva (el arco del piso)
  p1 = createVector(50, 550); 
  p2 = createVector(200, 400); 
  p3 = createVector(200, 400); 
  p4 = createVector(350, 550); 
}

function draw() {
  background(240); // Color de fondo gris clarito
  
  dibujarTexto();  // Pone mi nombre y las instrucciones en pantalla
  interaccion();   // Revisa si estoy apretando teclas o el mouse
  
  dibujarCurva();  // Dibuja la línea curva roja
  
  // Dibujamos el fractal (el árbol verde) en la esquina derecha
  push();
  translate(width - 100, height - 20);
  stroke(34, 139, 34); // Color verde bosque
  dibujarFractal(50, prof);
  pop();

  // Dibujamos al robot con todas sus transformaciones
  push();
  aplicarTransformaciones(); // Aquí se aplica el giro, escala y movimiento
  dibujarObjeto();           // Aquí es donde se "arma" el cuerpo del robot
  pop();
}

// Esta función aplica los cambios de posición y tamaño al robot
function aplicarTransformaciones() {
  translate(pos.x, pos.y); // Lo mueve a donde esté el mouse o el centro
  rotate(ang);             // Lo hace girar
  scale(sc);               // Lo hace más grande o chico
  shearX(sh);              // Lo inclina hacia los lados
}

// Aquí dibujamos las partes del robot
function dibujarObjeto() {
  rectMode(CENTER);
  stroke(0);
  strokeWeight(2);

  // Movimiento de las piernas (seno para que oscile)
  let swing = sin(piernas) * 20;

  fill(120);
  // Pierna y pie izquierdo
  line(-15, 40, -15 + swing, 70);
  rect(-15 + swing, 75, 15, 10);
  // Pierna y pie derecho
  line(15, 40, 15 - swing, 70);
  rect(15 - swing, 75, 15, 10);

  // Cuerpo: un rectángulo azul
  fill(100, 150, 250);
  rect(0, 0, 60, 80); 
  
  // Cabeza: un rectángulo gris (cambia de tamaño con 'E')
  fill(150);
  rect(0, -55, cab, 30); 
  
  // Ojos (blanco y negro)
  fill(255);
  circle(-10, -58, 8);
  circle(10, -58, 8);
  fill(0);
  circle(-10, -58, 3);
  circle(10, -58, 3);
  
  // Antena con una bolita roja arriba
  line(0, -70, 0, -85);
  fill(255, 0, 0);
  circle(0, -85, 6);
}

// Función para hacer la curva Bezier roja
function dibujarCurva() {
  noFill();
  stroke(255, 0, 0, 150);
  bezier(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
  
  // Puntos negros para saber dónde agarrar la curva
  fill(0);
  circle(p1.x, p1.y, 8);
  circle(p2.x, p2.y, 8); 
  circle(p4.x, p4.y, 8);
}

// Función recursiva para el fractal (se llama a sí misma)
function dibujarFractal(longitud, nivel) {
  line(0, 0, 0, -longitud); // Dibuja el tronco/rama
  translate(0, -longitud);  // Se mueve al final de la rama
  if (nivel > 0) {
    // Rama derecha
    push();
    rotate(PI / 6);
    dibujarFractal(longitud * 0.7, nivel - 1);
    pop();
    // Rama izquierda
    push();
    rotate(-PI / 6);
    dibujarFractal(longitud * 0.7, nivel - 1);
    pop();
  }
}

// Texto de ayuda en la pantalla
function dibujarTexto() {
  fill(0);
  noStroke();
  textSize(11);
  fill(80);
  text("Franco Antonio Arellano Moreno", 20, 50);
  text("- Arrastra el cuerpo: Mover Robot\n- Flechas: Rotar y Escalar\n- Teclas S/D: Sesgar\n- Teclas 1-6: Niveles de Fractal\n- Mantener E: Cabeza Grande\n- Arrastra punto negro arriba: Mover Curva", 20, 75);
}

// Lógica de los controles (mouse y teclas especiales)
function interaccion() {
  if (mouseIsPressed) {
    let dCurva = dist(mouseX, mouseY, p2.x, p2.y); // ¿Estoy tocando la curva?
    let dRobot = dist(mouseX, mouseY, pos.x, pos.y); // ¿Estoy tocando al robot?

    if (dCurva < 25) {
      p2.x = mouseX; // Muevo el punto de control de la curva
      p2.y = mouseY;
      p3.x = mouseX;
      p3.y = mouseY;
    } else if (dRobot < 60) {
      pos.x = mouseX; // Muevo al robot
      pos.y = mouseY;
      piernas += 0.2; // Hago que mueva las piernas mientras lo arrastro
    }
  } else {
    piernas *= 0.9; // Las piernas se frenan poco a poco al soltarlo
  }

  // Si presiono E, la cabeza crece
  if (keyIsPressed && (key == 'e' || key == 'E')) {
    cab = 80;
  } else {
    cab = 40;
  }
  
  // Controles de teclado para transformar al robot
  if (keyIsDown(LEFT_ARROW)) ang -= 0.05;  // Girar a la izquierda
  if (keyIsDown(RIGHT_ARROW)) ang += 0.05; // Girar a la derecha
  if (keyIsDown(UP_ARROW)) sc += 0.01;    // Agranda
  if (keyIsDown(DOWN_ARROW)) sc -= 0.01;  // Achica
  if (keyIsDown(83)) sh += 0.01;           // Tecla S para sesgar
  if (keyIsDown(68)) sh -= 0.01;           // Tecla D para sesgar
}

// Cambiar los niveles del fractal con los números del 1 al 6
function keyPressed() {
  if (key >= '1' && key <= '6') {
    prof = int(key);
  }
}