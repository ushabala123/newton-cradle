
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var world;

function preload()
{
	
}

function setup() {
	var canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Engine.run(engine);
	//Create the Bodies Here.
	roof=new Roof(300,200,250,35);
    bob1= new Bob(200,400,50);
	bob2 = new Bob(250,400,50);
	bob3 = new Bob(300,400,50);
	bob4 = new Bob(350,400,50);
	bob5 = new Bob(400,400,50);
  	rope1 = new Rope(bob1.body,roof.body);
	rope2 = new Rope(bob2.body,roof.body);
	rope3 = new Rope(bob3.body,roof.body);
	rope4 = new Rope(bob4.body,roof.body);
	rope5 = new Rope(bob5.body,roof.body);
	
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



