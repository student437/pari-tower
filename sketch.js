const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  blocka = new Block(300,275,30,40);
  blockb = new Block(330,275,30,40);
  blockc = new Block(360,275,30,40);
  blockd = new Block(390,275,30,40);
  blocke = new Block(420,275,30,40);
  blockf = new Block(450,275,30,40);
  blockg = new Block(480,275,30,40);
  //level two
  blockh = new Block(330,235,30,40);
  blocki = new Block(360,235,30,40);
  blockj = new Block(390,235,30,40);
  blockk = new Block(420,235,30,40);
  blockl = new Block(450,235,30,40);
  //level three
  blockm = new Block(360,195,30,40);
  blockn = new Block(390,195,30,40);
  blocko = new Block(420,195,30,40);
  //top
  blockp = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocksq = new Block(640,175,30,40);
  blocksr = new Block(670,175,30,40);
  blockss = new Block(700,175,30,40);
  blockst = new Block(730,175,30,40);
  blocksu = new Block(760,175,30,40);
  //level two
  blocksv = new Block(670,135,30,40);
  blocksw = new Block(700,135,30,40);
  blocksx = new Block(730,135,30,40);
  //top
  blocksy = new Block(700,95,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(30);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  blocka.display();
  blockb.display();
  blockc.display();
  blockd.display();
  blocke.display();
  blockf.display();
  blockg.display();
  fill("pink");
  blockh.display();
  blocki.display();
  blockj.display();
  blockk.display();
  blockl.display();
  fill("turquoise");
  blockm.display();
  blockn.display();
  blocko.display();
  fill("grey");
  blockp.display();
  fill("skyblue");
  blocksq.display();
  blocksr.display();
  blockss.display();
  blockst.display();
  blocksu.display();
  fill("turquoise");
  blocksv.display();
  blocksw.display();
  blocksx.display();
  fill("pink")
  blocksy.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}