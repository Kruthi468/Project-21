var canvas;
var block1,block2,block3,block4;
var ball;
var edges;
var music; 

function preload(){
music=loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(80,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(293,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(507,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX=5;
    ball.velocityY=9;
    ball.setCollider("rectangle",0,0,40,40);
    ball.debug=false;

}
function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(ball.isTouching(block1) && ball.bounceOff(block1)){
        ball.shapeColor= "blue"
        music.play();
    }
    if(ball.isTouching(block2)){
        ball.shapeColor = "orange";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }
    if(ball.isTouching(block3) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
    }
    if(ball.isTouching(block4) && ball.bounceOff(block4)){
        ball.shapeColor = "green";

    }


    drawSprites();
    
    }