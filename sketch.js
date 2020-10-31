
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var string1,string2,string3,string4;
var bob1,bob2,bob3,bob4;
var handle1,handle2,handle3,handle4;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	handle1 = new Handle(310,100,60,40);
	handle2 = new Handle(370,100,60,40);
	handle3 = new Handle(430,100,60,40);
	handle4 = new Handle(490,100,60,40);

	bob1 = new Bob(310,500);
	bob2 = new Bob(370,500)
	bob3 = new Bob(430,500)
	bob4 = new Bob(490,500)
	
	string1 = new String(handle1.body,bob1.body);
	string2 = new String(handle2.body,bob2.body);
	string3 = new String(handle3.body,bob3.body);
	string4 = new String(handle4.body,bob4.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(207, 74, 110);
  
  drawSprites();

  keyPressed();

  fill("white")
  textSize(20)
  text("Press UP ARROW to hold the bob at the left end",15,585);
  text("Press DOWN ARROW to release the bob",15,625);


  

  handle1.display();
  handle2.display();
  handle3.display();
  handle4.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20 , y:-20})
	}
}

