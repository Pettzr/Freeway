
        //Variaveis dos carros
        var alturaCarro = innerHeight * 0.10;
        var larguraCarro = innerHeight * 0.17;

        //Arrays Carros
        var xCarros = [innerWidth * 0.2,innerWidth * 0.7,innerWidth * 0.5, innerWidth * 1, innerWidth * 1, innerWidth * 0.32]
        var yCarros = [innerHeight * 0.10,innerHeight * 0.24,innerHeight * 0.37,innerHeight * 0.525, innerHeight * 0.66, innerHeight * 0.80]
        var velCarros = [larguraCarro * 0.08, larguraCarro * 0.07, larguraCarro * 0.1, larguraCarro * 0.085, larguraCarro * 0.11, larguraCarro * 0.08] 


        function mostraCarro () { 
            for (let i = 0; i < carroImagens.length; i++)
            image(carroImagens[i], xCarros[i] , yCarros[i], larguraCarro, alturaCarro) 
            
          }
    
        function movimentaCarro () {
            for( let i = 0; i < carroImagens.length; i++)
            xCarros[i] -= velCarros[i]
          }

        function resetaCarro () {
            for( let i = 0; i < carroImagens.length; i++)
            if (passouTela(xCarros[i])){
                xCarros[i] = innerWidth + larguraCarro
        }

        function passouTela (xTela) {
            return xTela < - larguraCarro * 1.1;
        }
    }
    

    