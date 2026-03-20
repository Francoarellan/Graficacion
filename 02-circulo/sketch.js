let x = 200;
let y = 30;
let vx = 3;
let vy = 0;
let g = 0.4;
let r = 20;

function setup() {
  createCanvas(400, 200);
}
function draw() {
  background(220);
  
  vy += g;
  x += vx;
  y += vy;
  
  if (x > width - r || x < r) vx = -vx;
  if (y > height - r) {
    y = height - r;
    vy *= -0.85;
  }
  
  fill(50, 100, 200);
  noStroke();
  circle(x, y, r * 2);
  
  fill(0); textSize(11);
  text("vy = " + vy.toFixed(2) + "  (g=" + g + ")", 5, 15);
}