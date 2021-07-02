var backgroundImg;
var background;


function preload(){
  backgroundImg = loadImage('images/bg3.jpg');
}

function setup() {
  createCanvas(800, 400);
  
  background = createSprite(0,0,800,400);
  background.addImage(backgroundImg);
  background.scale = 2;
  background.x = width/2;
  background.x = background.width/2;
  
  
}
function draw() {
    background.velocityX=2  
  
 if (background.x < 0){
     background.x = ground.width/2;
}
  
  drawSprites();
  
}

