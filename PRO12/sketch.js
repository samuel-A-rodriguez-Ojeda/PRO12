var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  ThePath = loadImage("path.png");
  runerBoy = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
 
}

function setup(){
  
  createCanvas(400,500);
 path = createSprite(200,400,30,30)
 path.addImage("movingpath",ThePath);
 path.velocityY = -0.8;
path.scale=1.2;

boy = createSprite(200,300,30,40);
boy.addAnimation("TheBoy",runerBoy);
boy.scale=0.5;


  

leftBoundary=createSprite(0,100,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(410,100,100,800);
rightBoundary.visible = false;

}

function draw() {
  background("lightGray");
  path.velocityY = 4;
  
  boy.x = mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
