function setup() {
  createCanvas(600, 300);
  colorMode(HSB);
}
function draw() {
  for (let i = 0; i < width; i++) {
    stroke(i % 360, 100, 100);
    line(i, 0, i, height);
  }
  
  colorMode(RGB);
  fill(255); noStroke(); textSize(13);
  text("HSB: Hue 0-360 (angulo en circunferencia)", 10, 25);
  text("Saturation=100, Brightness=100", 10, 45);
  textSize(11);
  text( 10, 70);
}