const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;
var backgroundImg,platform;
var ground, polygon;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,height,1200,20);
    ground = new Ground(300,height,600,20);
    polygon = new Polygon(this.poly,{x:100,y:200})
    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    box3 = new Bob(390,235,30,40);
    box4 = new Box(420,235,30,40);
    box5 = new Box(450,235,30,40);
    
    box6 = new Box(360,195,30,40);
    box7 = new Box(390,195,30,40);
    box8 = new Box(420,195,30,40);

    box9 = new Box(390,155,30,40);


    function draw(){
        background(backgroundImg);
        Engine.update(engine);
        strokeWeight(4);
        imageMode(CENTER);
        image(polygon_img,this.poly.position.x,this.poly.postion.y);
  } 
}