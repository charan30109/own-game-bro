
var house;
var background1;
var houseimg;
var apple;
var appleimg;
var seed1;
var seed2;
var seed3;
var seedimg;
var carrot;
var carrotimg;
var cucu;
var cucuimg;
var choice;
function preload(){
background1=loadImage("images/farm_land.png");
houseimg=loadImage("images/house.jpeg");
appleimg=loadImage("images/apple.png");
seedimg=loadImage("images/seed.jpeg");
carrotimg=loadImage("images/carrot.png");
cucuimg=loadImage("images/cucumber.png");


}
function setup() {
  createCanvas(windowWidth,windowHeight);
  house=createSprite(windowWidth-1300,windowHeight-300);
  house.addImage(houseimg);
  apple=createSprite(windowWidth-1000,windowHeight-500);
  apple.addImage(appleimg);
  seed1=createSprite(width-1000,height-300);
  seed1.visible=false;
  seed1.addImage(seedimg)
  seed1.scale=0.1;
  seed2=createSprite(width-1000,height-300);
  seed2.visible=false;
  seed2.addImage(seedimg)
  seed2.scale=0.1;
  seed3=createSprite(width-1000,height-300);
  seed3.visible=false;
  seed3.addImage(seedimg)
  seed3.scale=0.1;
  carrot=createSprite(width-1000,height-400);
  carrot.addImage(carrotimg);
  carrot.scale=1.0;
  cucu=createSprite(width-1000,height-270);
  cucu.addImage(cucuimg);
  cucu.scale=0.2;
}

function draw() {
  background(background1);  
  //600
  if(seed1.x===650&&seed1.y===650){
seed1.addImage(appleimg)
seed1.scale=0.2;

  }
  console.log(seed1.x);
  console.log(seed1.y);
  drawSprites();
  strokeWeight(5);
  line(650,550,250,1000);
  line(850,550,500,1000);
  line(1050,550,750,1000);
  line(1250,550,1000,1000);
  line(1450,550,1250,1000);
  line(515,705,1450,705)
  var d = new Date(); // for now d.getHours(); // => 9 d.getMinutes(); // => 30 d.getSeconds(); // => 51
  if(mousePressedOver(apple)){
    choice="apple"

  }
  else if(mousePressedOver(carrot)){
    choice="carrot"
  }
  else if(mousePressedOver(cucu)){
    choice="cucu"
  }

}
function mouseDragged(){
if(choice==="apple"){
  seed1.visible=true;
  seed1.x=mouseX;
  seed1.y=mouseY;
}
else if(choice==="carrot"){
  seed2.visible=true;
  seed2.x=mouseX;
  seed2.y=mouseY;
}
else if(choice==="cucu"){
  seed3.visible=true;
  seed3.x=mouseX;
  seed3.y=mouseY;
}

function mouseRealsed(){

seed1.x=seed1.x;
seed1.y=seed1.y;
seed2.x=seed2.x;
seed2.y=seed2.y;
seed3.x=seed3.x;
seed3.y=seed3.y;





}
}