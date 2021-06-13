const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1= new Pig (810,320);
    log1= new Log(810,270,300,PI/2);


    box3 = new Box(700,260,70,70);
    box4 = new Box(920,260,70,70);
    pig2= new Pig (810,259);
    log2= new Log(810,230,300,PI/2);
  
    box5= new Box(810,190,70,70);
    log3= new Log(730,190,165,PI/5);
    log4= new Log(890,190,165,-PI/5);

    bird1= new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    ground.display();
   
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird1.display();
}