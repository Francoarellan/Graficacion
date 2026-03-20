function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(240);
  let cx = width/2, cy = height/2, r = 150;
  
  fill(255); stroke(0); strokeWeight(3);
  circle(cx, cy, r*2);
  
  for (let i = 0; i < 12; i++) {
    let ang = (TWO_PI / 12) * i - HALF_PI;
    let x1 = cx + (r-8) * cos(ang);
    let y1 = cy + (r-8) * sin(ang);
    let x2 = cx + r * cos(ang);
    let y2 = cy + r * sin(ang);
    stroke(0); strokeWeight(2);
    line(x1, y1, x2, y2);
  }
  
  let s = second();
  let m = minute();
  let h = hour() % 12;
  
  let angS = map(s, 0, 60, 0, TWO_PI) - HALF_PI;
  let angM = map(m, 0, 60, 0, TWO_PI) - HALF_PI;
  let angH = map(h + m/60, 0, 12, 0, TWO_PI) - HALF_PI;
  
  stroke(200,50,50); strokeWeight(2);
  line(cx, cy, cx + r*0.85*cos(angS), cy + r*0.85*sin(angS));
  
  stroke(0); strokeWeight(5);
  line(cx, cy, cx + r*0.7*cos(angM), cy + r*0.7*sin(angM));
  
  strokeWeight(7);
  line(cx, cy, cx + r*0.5*cos(angH), cy + r*0.5*sin(angH));
  
  fill(0); noStroke(); textSize(12);
  text(hour()+":"+nf(minute(),2)+":"+nf(second(),2), cx-25, cy+r+20);
}