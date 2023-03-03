const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;

var chao;

function setup() {
  createCanvas(500, 700);
  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50);

  chao = Bodies.rectangle(250, 690, 500, 20, { isStatic: true });
  World.add(world, chao);
}

function draw() {
  background(50);
  Engine.update(engine);

  rect(chao.position.x, chao.position.y, 500, 20);
}
