const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,obj;

function setup(){
    var canvas = createCanvas(400,400);
     engine = Engine.create();
     world = engine.world;

    

     obj = Bodies.rectangle(200,100,50,50);
     World.add(world,obj);

     console.log(obj);
    // console.log(obj.type);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   // rect(200,200,50,50);

    
    rect(obj.position.x, obj.position.y, 50, 50);
}