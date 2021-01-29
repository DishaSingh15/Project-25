
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bin,ground,ball, binImg;
var world;

function preload () {
binImg = loadImage('dusbingreen.png');
}

function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;
	
	ground=new ground(width/2,670,width,20);
	crumpledPaper = new Paper();

	bin = createSprite(964,520,20,20);
	bin.addImage(binImg);
	bin.scale = 0.45;

	binPart1 = new Dustbin (902,505,10,120);
	binPart2 = new Dustbin (962,545,130,10);
	binPart3 = new Dustbin (1024,505,10,120);
}

function draw() {
background(0);
Engine.update(engine);
 

  ground.display();
  crumpledPaper.display();
  binPart1.display();
  binPart2.display();
  binPart3.display();

  drawSprites();
}
function keyPressed () {
	if (keycode === UP_ARROW) {
		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position.x);
	}
}

