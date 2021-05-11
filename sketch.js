const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1100,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(710,200,220,10);
  polygon = new Polygon(150,200);
  
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //2nd bunch of box
  //leve one
   block17 = new Block(620,180,30,40);
   block18 = new Block(650,180,30,40);
   block19 = new Block(680,180,30,40);
   block20 = new Block(710,180,30,40);
   block21 = new Block(740,180,30,40);
   block22 = new Block(770,180,30,40);
   block23 = new Block(800,180,30,40);
   //level two
   block24 = new Block(650,160,30,40);
   block25 = new Block(680,160,30,40);
   block26 = new Block(710,160,30,40);
   block27 = new Block(740,160,30,40);
   block28 = new Block(770,160,30,40);
   //third
   block29 = new Block(710,140,30,40);
   block30 = new Block(680,140,30,40);
   block31 = new Block(740,140,30,40);
   //top
   block32 = new Block(710,120,30,40);
   
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  
  polygon.display();
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
   
  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("pink");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("turquoise");
  block29.display();
  block30.display();
  block31.display();
  fill("grey");
  block32.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function KeyPressed(){
  if (keyCode === 32) {
      slingshot.attach(bird.body)        
  }
}

