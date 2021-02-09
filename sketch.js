var mouse, mouseImg, cat, catImg, garden, gardenImg;
function preload() {
    //load the images here
    catImg=loadAnimation("cat1.png","cat2.png","cat3.png");
    gardenImg=loadImage("garden.png");
    mouseImg=loadAnimation("mouse1.png","mouse2.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,650);
    cat.addAnimation("catRunning",catImg)
    
    mouse=createSprite(250,650);
    mouse.addAnimation("mousehappy", mouseImg)

    garden=createSprite(1000,800);
    garden.addImage(gardenImg)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning", catImg);
      cat.changeAnimation("catRunning");
  }


}
