var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/Fundo.png")
pipeImg= loadImage("assets/Pipe.png")
restartImg=loadImage("assets/restart.png")
birdImg=loadImage("assets/Bird.png")
startImg=loadImage("assets/start.png")
logoImg=loadImage("assets/Logo.png")
fimdejogoImg=loadImage("assets/fimdejogo.png")


}

function setup(){
createCanvas(400,400)
//imagem de plano de fundo


//criando canto superior e inferior
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//criando o balão     
bird = createSprite(100,200,20,50);
bird.addAnimation("bird",birdImg);
bird.scale = 0.2;



}

function draw() {
  
  background("black");
  image(bgImg,0,0,width,height)   
          //fazendo o balão de ar quente pular
          if(keyDown("space")) {
            bird.velocityY = -6 ;
            
          }

          //adicionando gravidade
           bird.velocityY = bird.velocityY + 2;
   
        drawSprites();
        
}
