
        function piedraPapelTijera (jugador, jugadorPc){ 
            var tijera=1
            var papel=2
            var piedra= 3
            var jugadorPc=Math.random(1,2,3);      

        if (jugador == tijera &&jugadorPc==2){console.log(" GANASTE")} 
        else if (jugador==papel && jugadorPc==3) {console.log(" GANASTE")} 
        else if (jugador== piedra && jugadorPc==1) {console.log(" GANASTE")} 
        else {"Perdiste"}
    } 
