var canvas;
var music;
var b1, b2, b3, b4, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b1 = createSprite(100, 580, 200, 20);
    b1.shapeColor = "blue";
    b2 = createSprite(301, 580, 200, 20);
    b2.shapeColor = "orange";
    b3 = createSprite(502, 580, 200, 20);
    b3.shapeColor = "purple";
    b4 = createSprite(703, 580, 200, 20);
    b4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random(20,750), random(20, 300));
    box.width = 20;
    box.height = 20;
    box.velocityX= 3;
    box.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges = createEdgeSprites();
     box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(b4.isTouching(box) && box.bounceOff(b4)){
     box.shapeColor = rgb(15,127,18);
    }
    if(b2.isTouching(box)&& box.bounceOff(b2)){
     box.shapeColor = rgb(253, 164, 40);
    }
    if(b3.isTouching(box)&& box.bounceOff(b3)){
        box.shapeColor = rgb(127, 15, 126);
        music.play();
    }
    if(b1.isTouching(box)){
        box.shapeColor = rgb(11, 36, 251);
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    
    drawSprites();
}
