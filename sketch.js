
function setup() {
    createCanvas(600, 400);
  }
  
function draw() {
    background(0);
    strokeWeight(0);
    stroke(255);

    // WHILE LOOP

    // let x = 0;
    // while (x <= width) {
    //   fill(0, 200, 255);
    //   ellipse(x, 100, 25, 25);
    //   x = x + 50;
    // }
  
    for (let x = 0; x <= mouseX; x += 50) {
        for (let y = 0; y <= mouseY; y += 50) {
            fill(random(255), random(255), random(255));
            ellipse(x, y, 25, 25);
        }
    }
}
  