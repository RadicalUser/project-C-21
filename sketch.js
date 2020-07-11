var bullet, wall;
var speed , weight , thickness;

//thickness=random(22,83);




function setup() {
  createCanvas(1600,400);
  // giving random speed and weight
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  // creating bullet and wall
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor=color(255,255,255);
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,400/2);
  wall.shapeColor=color(80,80,80);

  
}

function draw() {
    background(10,10,10); 

    // conditon for color change according to deformation
    if(wall.x-bullet.x < bullet.width/2 + wall.width/2)
    {

      bullet.velocityX=0;
      var deformation=0.5*weight * speed * speed/22500

    if (deformation>180){
      bullet.shapeColor=color(255,0,0);

    }

    if(deformation<100){
    
      bullet.shapeColor=color(0,255,0);


    }

    if (deformation>100 && deformation<180){

      bullet.shapeColor=color(230,230,0);

     }
    }

    if (hasCollided(bullet,wall)){

    bullet.velocityX=0;
    var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage>10){

   wall.shapeColor=color(255,0,0);


    }
    
    if (damage<10){

   wall.shapeColor=color(0,255,0);


    }


  








    }


  




    drawSprites();
}

function hasCollided(bullet,wall){


bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge){


  return true;

} else{

return false;

}


















}