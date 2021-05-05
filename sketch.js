const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var database, users,info,infor,user,signin,login,gameState = 0;
var app;
function preload(){

}
function steup(){
createCanvas(windowWidth,windowHeight);
database = firebase.database();
engine = Engine.create();
world = engine.world;
app = new App();
app.start();
app.gameplay();
// signin = new Signup();
// signin.display();
// user = new User();

Engine.run(engine);
}
function draw(){
  // drawSprites();
}
