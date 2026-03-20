let tamPx = 20;
let patron = [];

function setup() {
  createCanvas(400, 400);
  noSmooth();
  generarPatron();
}
function generarPatron() {
  patron = [];
  for (let y = 0; y < height/tamPx; y++) {
    patron.push([]);
    for (let x = 0; x < width/tamPx; x++) {
      let c = random() > 0.6 ? 
        [floor(random(100,256)), floor(random(50,150)), floor(random(50,200))] :
        [240, 240, 240];
      patron[y].push(c);
    }
  }
}
function draw() {
  noStroke();
  for (let y = 0; y < patron.length; y++) {
    for (let x = 0; x < patron[y].length; x++) {
      let c = patron[y][x];
      fill(c[0], c[1], c[2]);
      rect(x * tamPx, y * tamPx, tamPx, tamPx);
    }
  }
  fill(0); textSize(11);
  text("Pixel art — noSmooth() — tamPx=" + tamPx + "  (clic para regenerar)", 5, height-5);
}
function mousePressed() { generarPatron(); }