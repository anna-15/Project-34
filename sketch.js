//namespaces
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var engine, world;
var box1, box2, box3, box4, box5, box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,
box24,box25,box26;
var hero, monster, rope, ground;
var backgroundImg;

// calling the background function
function preload() {
  backgroundImg = loadImage("gamingbackground2.png");
  //getBackgroundImg();
}

function setup() {
  createCanvas(2500, 650);

  //create and add engine to the world
  engine = Engine.create();
  world = engine.world;

  //create all required objects in the world 
  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(250,800,250);
  rope = new Rope(hero.body, { x: 450, y: 50 });
  monster = new Monster(1100,550,300);

  box4 = new Box(600, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(600, 100, 70, 70);
  
  box1 = new Box(700, 100, 70, 70);
  box2 = new Box(700, 100, 70, 70);
  box9 = new Box(700, 100, 70, 70);
  box10 = new Box(700, 100, 70, 70);
  box11 = new Box(700, 100, 70, 70);
  box12 = new Box(700, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);

  box16 = new Box(800, 100, 70, 70);
  box17 = new Box(800, 100, 70, 70);
  box18 = new Box(800, 100, 70, 70);
  box19 = new Box(800, 100, 70, 70);
  box20 = new Box(800, 100, 70, 70);
  box21 = new Box(800, 100, 70, 70);

  box15 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box22 = new Box(900, 100, 70, 70);
  box23 = new Box(900, 100, 70, 70);
  box24 = new Box(900, 100, 70, 70);
  box25 = new Box(900, 100, 70, 70);
  box26 = new Box(900, 100, 70, 70);
}

function draw() {

  //background image
  //if(backgroundImg)
  background(backgroundImg);

  //text message
  fill("brown");
  textSize(25);
  textFont("starline");
  text("Drag the Super-Woman forward to defeat the Monster!!", 20, 50);
  
  //update engine
  Engine.update(engine);
  
  //display all objects created
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  hero.display();
  monster.display();

} 

// mouse dragged
function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

/*
#DhRiTi♥
#DD
*/

//syncing time from online website using JSON to change background with time
/*async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=1900 && hour<=0600){
      bg = "gamingbackground1.jpg";
  }
  else{
      bg = "gamingbackground2.png";
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
*/