var font, grammar, lines, json;

let ySpeed = 5;

function preload() {

  json = loadStrings('grammar.json');
  font = loadFont('assets/font.ttf');
}

function setup() {
    textSize(35);
    textFont(font);
  createCanvas(displayWidth, displayHeight);

  textAlign(CENTER);
  grammar = new RiGrammar(json.join('\n'));
  lines = ["click to", "generate", "a haiku", "hello", "Test"];
}

function draw() {
  background(230, 240, 255);
  text(lines[0], width / 2, 350);
  text(lines[1], width / 2, 400);
  text(lines[2], width / 2, 450);
	text(lines[3] + lines[4], width / 2, 500);
}

function mouseReleased() {

  var result = grammar.expand();
  var haiku = result.split("%");
  for (var i = 0; i < lines.length; i++)
    lines[i] = haiku[i];
		console.log(haiku[i]);
}
