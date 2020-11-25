
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
 createCanvas(600, 600);

  var message = "This is a message";
 console.log(message)
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  score = 0;
  
}


function draw() {
background("white")
  
  
         
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  monkey.collide(ground)
  
  spawnObstacles()
  spawnFood()
  drawSprites()
}

function spawnFood() { 
   if (frameCount % 80 === 0)
   { banana = createSprite(600,250,40,10);
  banana.y = random(120,200);
    banana.velocityX = -5; 
 banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
      banana.addImage(bananaImage);
    banana.scale=0.05; 
  FoodGroup.add(banana); } 

}


function spawnObstacles() { 
  if(frameCount % 300 === 0)
  { obstacle = createSprite(800,320,10,40);
                                                        obstacle.velocityX = -6;
                                                        obstacle.addImage(obstaceImage);
                                                        obstacle.scale=0.15;
                                                        obstacle.lifetime = 300;
                                                        obstaclesGroup.add(obstacle); } }



