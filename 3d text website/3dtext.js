function setup() {
  canvas1 = createCanvas(500, 500,WEBGL);
  canvas1.position(200,-50);
}

function draw() {
   background(238,232,170);
  //background(255);
	//translate(-125, -height / 3);
	rotateX(frameCount * 0.005);
	rotateY(frameCount * 0.005);
  rotateZ(frameCount * 0.005);
	let will = createGraphics(200, 200);
	will.fill(10);
	will.textAlign(CENTER);
  //will.strokeColor(255);
	will.textSize(64);
	//will.textFont(helvetica1);

	will.text("text", 100, 50);
	texture(will);
  noStroke();
	box(100, 100, 100);
}
