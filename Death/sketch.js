var font, grammar, lines, json;
	var Twit = require('twit');
var T = new Twit({
consumer_key:         '...',
consumer_secret:      '...',
access_token:         '...',
access_token_secret:  '...',
})
function preload() {

  json = loadStrings('grammar.json');

}

function setup() {

  createCanvas(650, 200);

  textAlign(CENTER);
  grammar = new RiGrammar(json.join('\n'));
  lines = ["click to", "generate", "a haiku", "hello", "Test"];
}

function draw() {

  background(230, 240, 255);
  text(lines[0], width / 2, 50);
  text(lines[1], width / 2, 75);
  text(lines[2], width / 2, 100);
	text(lines[3] + lines[4], width / 2, 150)
}

function mouseReleased() {

  var result = grammar.expand();
  var haiku = result.split("%");
  for (var i = 0; i < lines.length; i++)
    lines[i] = haiku[i];
		console.log(haiku[i]);
}
