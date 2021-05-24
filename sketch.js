var movingRect, fixedRect
function setup() {
  createCanvas(800, 800);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  fixedRect.velocityY = 3;

  movingRect = createSprite(400, 400, 60, 30);
  movingRect.shapeColor = "red";
  movingRect.velocityY = -3;
}

function draw() {
  background(0);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  drawSprites();

  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  if (movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
    fixedRect.x - movingRect.x < movingRect.width / 2 + fixedRect.width / 2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }

  if (movingRect.y - fixedRect.y < movingRect.height / 2 + fixedRect.height / 2 &&
    fixedRect.y - movingRect.y < movingRect.height / 2 + fixedRect.height / 2) {
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);

  }


}