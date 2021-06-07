const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var akhilWorld, akhilEngine;
var akhilBody;
var ground;
var box1;
var box2;


function setup() {
  createCanvas(800,400);
  akhilEngine = Engine.create();
  akhilWorld = akhilEngine.world;
box1 = new Box(400, 100, 50, 50);
box2 = new Box(425, 50, 50, 100);

ground = new Ground(400, 390, 800,20)


}

function draw() {
  background(0);  
  Engine.update(akhilEngine);
  rectMode(CENTER);
  ellipseMode(CENTER);

  box1.display();
  box2.display();
ground.display();

}