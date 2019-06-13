function setup() {
canvas2 = createCanvas(500, 400,WEBGL);
canvas2.position(900,180);
}

function draw() {
  background(238,232,170);


  //background(255)
    fill(10);
	let x = map(mouseX, 0, width, -30,30);
	let words = ["b", "a","c","k","g","r","o","u","n","d"];
	for (let i = 0; i < words.length; i++) {
	translate(15,x);
	let texts = createGraphics (200,200);
	texts.text(words[i], 50, 50);
	texts.textAlign(LEFT);
    texts.fill(20);
	   texture(texts);
     noStroke();
	   plane(200,200);
	}

}
