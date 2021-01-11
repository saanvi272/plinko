
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var plinkos = [];
var divisions = [];
var count=0;
var gamestate = "start";
var score = 0;
var particle;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,height,800,20);
 for(var i = 0; i<=800; i = i + 80){
  divisions.push(new Division (i,650,10,300));
 }
 for(var i = 75; i<=800; i = i + 50){
  plinkos.push(new Plinko (i,75));
 }
 for(var i = 50; i<=790; i = i + 50){
  plinkos.push(new Plinko (i,175));
 }
 for(var i = 75; i<=800; i = i + 50){
  plinkos.push(new Plinko (i,275));
 }
 for(var i = 50; i<=790; i = i + 50){
  plinkos.push(new Plinko (i,375));
 }
}

function draw() {
  background("black");
  textSize(35); 
  text("SCORE " + score,20,40); 
  fill("white");
  text("500",10,550);
  text("500",90,550);
  text("500",170,550);
  text("500",250,550);
  text("100",330,550);
  text("100",410,550);
  text("100",490,550);
  text("200",570,550);
  text("200",650,550);
  text("200",730,550);
  Engine.update(engine);
  ground.display();
  if(gamestate==="end"){
    textSize(100);
    text("GAME OVER",150,250);    
  }
  for(var k in divisions){
 divisions[k].display();
  }
  for(var k in plinkos){
    plinkos[k].display();
     }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score = score+500;
        particle = null;
        if(count>=5){
          gamestate = "end";
        }
      }
      else if(particle.body.position.x<600&&particle.body.position.x>300){
        score = score+100;
        particle = null;
        if(count>=5){
          gamestate = "end";
         }
      }
      else if(particle.body.position.x<900&&particle.body.position.x>600){
        score = score+200;
        particle = null;
        if(count>=5){
          gamestate = "end";
         }
      }
    }
  }
 
}
function keyPressed(){
  if(keyCode===32){
  if(gamestate!=="end"){
    count = count+1;
    particle = new Particle(random(100,700),0,10);
  }
}}
