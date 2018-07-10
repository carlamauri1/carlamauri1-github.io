function setup() {
  // put setup code here
  createCanvas(600,600);
}

function draw() {
  // put drawing code here
  // ellipse(40,40,40,40);

  background('blue');
  fill("white");
  ellipse(mouseX,mouseY,40,40);

  fill("white");
  rect(mouseX,mouseY,55,55);


  fill("white");
  textSize(32);
  text ("happy Copenhagen", 100,100);


}
