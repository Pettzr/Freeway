var estradaImg;
var vacaImg;
var carroImg;
var carroImg2;
var carroImg3;

// variaveis do som
var trilha = new Audio ("./sons/trilha.mp3")
var somColisao = new Audio ("./sons/colidiu.mp3")
var somPonto = new Audio ("./sons/pontos.wav")

function somDoPonto (){
    somPonto.play()
    somPonto.volume = 0.1
  }

  function somDaColisao (){
    somColisao.play();
    somColisao.volume = 0.1
  }

  function trilhaSonora () {
    trilha.volume = 0.03
    trilha.play()
}


function preload(){
    estradaImg = loadImage("./imagens/estrada.png")
    vacaImg = loadImage("./imagens/ator-1.png")
    carroImg = loadImage("./imagens/carro-1.png")
    carroImg2 = loadImage("./imagens/carro-2.png")
    carroImg3 = loadImage("./imagens/carro-3.png")
    carroImagens = [carroImg,carroImg2,carroImg3,carroImg2,carroImg,carroImg3]
}






