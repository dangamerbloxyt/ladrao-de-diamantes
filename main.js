let bgImg;
let playerImg;
let diamond;
let emitter1;
let emitter2;
let laser1;
let laser2;
let door;
let lasersGroup;
let playerFrontImg;
let playerBackImg;
let playerleftImg;
let playerRightImg;
let doorImg;
let doorOpenAnim;
let diamondImg;
let laserImg;
let bg;
let player;


function preload(){
bgImg=loadImage("piso.png");
playerFrontImg=loadImage("bandido-frente.png");
playerBackImg=loadImage("bandido-atras.png");
playerRightImg=loadImage("bandido-direta.png");
playerleftImg=loadImage("bandido-esquerda.png");
diamondImg=loadImage("diamante.png");
laserImg=loadImage("laser.png");
doorImg=loadImage("door-1.png");
doorOpenAnim=loadAnimation("door-1.png","door-2.png","door-3.png","door-4.png","door-5.png")
}

function setup(){
    createCanvas(400,400);

    player = createSprite(25,360);
    player.addImage("bandidoDireita",playerRightImg);
    player.addImage("bandidoEsquerda",playerleftImg);
    player.addImage("bandidoFrente",playerFrontImg);
    player.addImage("bandidoAtras",playerBackImg);
    player.changeImage("bandidoDireita");
}

function draw(){
    background(0);
    imageMode(CENTER);
    image(bgImg,width/2,height/2,bgImg.width,bgImg.height);
    drawSprites();
    }