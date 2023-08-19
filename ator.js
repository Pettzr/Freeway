        //Variaveis do Ator
        var xVaca = innerWidth * 0.25
        var yVaca = innerHeight * 0.92
        var larguraVaca =  innerHeight * 0.075;
        var alturaVaca =  innerHeight * 0.075;
        var colisao = false;
        var meusPontos = 0;
        var recorde = 0;

        function mostraVaca () {
            image(vacaImg, xVaca , yVaca, larguraVaca , alturaVaca)
          }
    
    
        function movimentaVaca () {
            if (keyIsDown(UP_ARROW)) {
                yVaca -= (larguraVaca * 0.05)
          }
        }


        function verificaColisao () {
          for (let i = 0; i < carroImagens.length ; i++)
          {
            colisao = collideRectRect (xCarros[i], yCarros[i], larguraCarro, alturaCarro,xVaca,yVaca, alturaVaca * 0.85, larguraVaca * 0.85)
            if (colisao) {
              somDaColisao();
              meusPontos = 0;
              restart();
            }
          }
        }
    
        function restart () {
          yVaca = innerHeight * 0.96
          recordeDaPessoa ();
        }
    
        function incluiPontos () {
          textAlign(CENTER)
          textSize(innerHeight * 0.065)
          text('Pontos:', innerWidth * 0.2, innerHeight * 0.065 )
          text(meusPontos, innerWidth * 0.3, innerHeight * 0.065)
          text(recorde, innerWidth * 0.8, innerHeight * 0.065)
          text('Recorde:', innerWidth * 0.68, innerHeight * 0.065 )
          fill(255, 255,0)
        }

        function marcaPonto () {
          if (yVaca < 0) {
            somDoPonto();
            meusPontos += 1
            restart();
          }
        }

        function recordeDaPessoa () {
          if (recorde < meusPontos ) {
            recorde = meusPontos
          }
        }


