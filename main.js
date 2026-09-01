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
let halfWidth;
let halfHeight;
let gameOver=false;
let botaoReiniciar;
let venceu=false;
let diamanteColetado=false;

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
    halfWidth=player.width*player.scale/2;
    halfHeight=player.height*player.scale/2;


    diamond=createSprite(350,50);
    diamond.addImage("diamante",diamondImg);

    laser1=createSprite(15,290);
    laser1.addImage("laser",laserImg);
    laser2=createSprite(385,100);
    laser2.addImage("laser",laserImg);

    botaoReiniciar=createButton("🎮 Jogar Novamente");
    botaoReiniciar.position(125,420);
    botaoReiniciar.mousePressed(reiniciarJogo);
    botaoReiniciar.hide();

    door=createSprite(358,359);
    door.addImage("fechada",doorImg);
    door.addAnimation("abrindo",doorOpenAnim);
    door.changeImage("fechada");
}

function draw(){
    background(0);
    imageMode(CENTER);
    image(bgImg,width/2,height/2,bgImg.width,bgImg.height);
    if(keyDown("w")){
        player.y -= 5;
        
    } 
    if(keyDown("s")){
        player.y += 5;

    }
    if(keyDown("d")){
        player.x += 5;
    }
    if(keyDown("a")){
        player.x -= 5;
    }
        player.x=constrain(player.x,halfWidth,width-halfWidth);
        player.y=constrain(player.y,halfHeight,height-halfHeight);
    laser1.velocity.x=8;
    if(laser1.x>width+10){
        laser1.x=15;
    }
    laser2.velocity.x=-7;
    if(laser2.x<-10){
        laser2.x=350;
    }
    if(laser1.overlap(player) || laser2.overlap(player)){
        gameOver=true;
        laser1.velocity.x=0;
        laser2.velocity.x=0;
        botaoReiniciar.show();
    }
    if(!diamanteColetado && player.overlap(diamond)){
        diamanteColetado = true;
        diamanteColetado.visible = false;
        door.animation.looping = false;
        door.changeAnimation("abrindo");
    }

    if(diamanteColetado && player.overlap(door)) {
       venceu + true;
       laser1.velocity.x = 0;
       laser2.velocity.x = 0;
    }

    if(gameOver){
        background("black");
        fill("red");
        textSize(22);
        textAlign(CENTER,CENTER);
        text("Você foi capturado pela polícia! 👮🏻" ,width/2 ,height/2);
        textSize(14);
        text("Pressione R ou clique no botão",width/2,height/2 + 40);
        
    }

    if(venceu){
        background("black");
        fill("green");
        textSize(24);
        textAlign(CENTER,CENTER);
        text("MISSÃO CUMPRIDA!",width / 2,height / 2);
        textSize(16);
        text("Você se tornou o Mestre do Roubo! 💎",width / 2,height / 2 + 40);
        textSize(14);
        text("Pressione R ou clique no botão",width / 2,height / 2 + 80);
    }

    if((gameOver || venceu) && keyWentDown("r")){
        reiniciarJogo();

    }
    drawSprites();
    }

function reiniciarJogo(){
    gameOver = false;
    venceu = false;
    diamanteColetado = false;
    player.x = 25;
    player.y = 360;
    player.changeImage("bandidoDireita");
    laser1.x = 15;
    laser1.y = 290;
    laser2.x = 385;
    laser2.y = 100;
    laser1.velocity.x = 8;
    laser2.velocity.x = -7;
    diamond.visible = true;
    diamond.x = 350;
    diamond.y = 50;
}