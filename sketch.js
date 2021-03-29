const Engine=Matter.Engine;
const World=Matter. World;
const Bodies=Matter. Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine, world;
var ground;
function preload(){
polygon_img=loadImage("polygon.png");
}
function setup(){
    createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;

ground = new Ground(600,380,1200,20);
stand1 = new Ground(200,350,200,10);
stand2 = new Ground(600,250,200,10);

block1 = new Block(200,340);
block2 = new Block(230,340);
block3 = new Block(260,340);
block4 = new Block(170,340);
block5 = new Block(140,340);

block6 = new Block(200,300);
block7 = new Block(170,300);
block8 = new Block(230,300);

block9 = new Block(200,260);

box1=new Block(600,240);
box2=new Block(630,240);
box3=new Block(660,240);
box4=new Block(570,240);
box5=new Block(540,240);

box6=new Block(600,200);
box7=new Block(630,200);
box8=new Block(570,200);

box9=new Block(600,160);

polygon = Bodies.circle(100,100,20);
World.add(world,polygon);

sling=new Slingshot(this.polygon,{x:100,y:100});

}
function draw(){
    background("black");
    Engine.update(engine);

ground.display();
stand1.display();
stand2.display();
fill("skyblue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
fill("purple");
block6.display();
block7.display();
block8.display();
fill("red")
block9.display();
fill("skyblue");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
fill("magenta")
box6.display();
box7.display();
box8.display();
fill("white")
box9.display();
sling.display();

imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

}
function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();

}

function keyPressed(){
    if(keyCode===32){
        sling.attach(this.polygon)
        Matter.Body.setPosition(this.polygon,{x:100,y:100})
}
    }