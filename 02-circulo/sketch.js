let x = 0;
let y = 0;
let velocidad = 5;
let velocidady = 5;
function setup() {
  createCanvas(400, 200);
}

function draw(){
  background(220);
  frameRate(30);
  circle(x, y, 40);
  x += velocidad;
  y += velocidady;
  if(x > width || x < 0){
    velocidad = -velocidad;
  }

    if(y > heigth || y<0){
      velocidady = -velocidady;
      
    }
}