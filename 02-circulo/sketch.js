let x = 0;
let y = 0;
let velocidad = 5;
function setup() {
  createCanvas(400, 200);
}

function draw(){
  background(220);
  frameRate(30);
  circle(x, 100, 40);
  x += velocidad;
  y += velocidad;
  if(x > width || x < 0){
    velocidad = -velocidad;
  }

    if(y > heigth || y<0){
      velocidad = -velocidad;
      
    }
}