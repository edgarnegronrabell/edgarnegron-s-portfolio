let x, y;

function setup() {
  // put setup code here
 var canvas = createCanvas(640, 480);
  canvas.parent('sketch');
  x = width;
  y = width;
  
  
}

function draw() {
  // put drawing code here
  
  x = 0;
  if (x < 480) {
    background( 244, 95, 66);
    fill(34, 254, 90);
    ellipse(x, 50, 30, 30);
    x += 1;
  }
    
  
  
}