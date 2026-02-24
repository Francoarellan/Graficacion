let posiciones=[];
function setup(){
  createCanvas(600,400);
}
function draw(){
  background(random(255),random(255),random(255));
  for(let i= 0; i < posiciones.length; i++){
    circle(posiciones[i].x, posiciones[i].y, 10);
  }
}
function mousePressed(){
  posiciones.push({x: mouseX, y: mouseY});
}