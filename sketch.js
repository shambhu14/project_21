
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var wall1 ;
var wall2 ;
var wall3 ;
 
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	var ball_options = {

		isStatic: false,
		restitution: 0.5,
		fristion: 0,
		density: 1.2

	}
	ball = Bodies.circle(200,300,20,ball_options);
	World.add(world,ball);

   wall1 = new Ground(width/2,670,width,20);
   wall2 = new Ground(1100,600,20,120);
   wall3 = new Ground(1350,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  ellipse(ball.position.x,ball.position.y,20);
  wall1.show();
  wall2.show();
  wall3.show();
  Engine.update(engine);
  

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{ x:90,y : -90})
	}
}

