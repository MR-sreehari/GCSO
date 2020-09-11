var car,wall;
var speed,weight;

function setup()
 {
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,20,20,10);
  wall=createSprite(1450,200,50,400);
  
  car.velocityX = speed;
  
  createCanvas(1600,400);
  
}

function draw()
{
  background("black");
 
  wall.shapecolor=color("grey");
  if(car.collide(wall) )
  {
  car.velocityX=0;
  car.shapecolor=color("white");
  }

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;

    if(deformation>180)
    {
      car.shapecolor=color("red");
    }

    if(deformation<180 && deformation>100)
    {
      car.shapecolor=color("yellow");
    }
    if(deformation<100)
    {
      car.shapecolor=color("green");
    }
  }



  drawSprites();
}