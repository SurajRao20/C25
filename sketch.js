const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin_img;

function preload(){

	dustbin_img = loadImage('dustbingreen.png');
	
}

function setup() {
	createCanvas(1530, 730);


	engine = Engine.create();
	world = engine.world;

	paperBall = new Ball(100,600,70)

	ground = new Ground(1000,730,2000,40)

	trash1 = new Box(1195, 550, 20,270)
	trash2 = new Box(965, 550, 20,270)
	trash3 = new Box(1080, 690, 245,20)

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  drawSprites();

  ground.display();

  trash1.display();
  trash2.display();
  trash3.display();

  paperBall.display();
  image(dustbin_img,925,370,290,350);

 
}

function keyPressed() {
		if (keyCode === UP_ARROW) {
			
			Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:1155,y:-1200});

		}
}



