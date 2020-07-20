var fixedRect, movingRect;
var object1;
var apple1,apple2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  apple1 = createSprite(400,100,40,75);
  apple2 = createSprite(400,700,50,20);
  apple1.velocityY = 5;
  apple2.velocityY = -5;




 // movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;

   object1= createSprite(200,200,100,100);
  object1.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  

  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  bounceOff(apple1,apple2);
  drawSprites();
}


