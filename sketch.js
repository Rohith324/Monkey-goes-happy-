
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  
  //creating monkey
  monkey=createSprite(50,350,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  //creating ground
  ground=createSprite(10,390,1200,10);
  ground.x=ground.width/2
  ground.velocityX=-10
  
  FoodGroup=new Group();
  obstacleGroup= new Group();
} 

function draw() {
  
  background("white");
  textSize(24)
  text("SurvivalTime:"+ score,250,20);
   //scoring
    score = score + Math.round(getFrameRate()/65);
  
  if(keyDown("space")&&monkey.y >= 300){
    monkey.velocityY=-18
  }
   
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  spawnBananas();
  spawnObstacles();  
  drawSprites();
  
}

function spawnBananas(){
  if(frameCount%80===0){
 banana=createSprite(300,200,10,10);
 banana.addImage("banana",bananaImage);
 banana.velocityX=-3
 banana.y=Math.round(random(100,180));
 banana.depth=monkey.depth
 monkey.depth=banana.depth+1
 banana.scale=0.1
 banana.lifetime=200
FoodGroup.add(banana);    
  }

}

function spawnObstacles(){
  if(frameCount%300==0){
    obstacle=createSprite(600,368,10,10);
    obstacle.velocityX=-6
    obstacle.addImage("obstacele", obstaceImage);
    obstacle.scale=0.1
    obstacle.lifetime=100
    obstacleGroup.add(obstacle);    
  }
}






