var piedra = 0
var papel = 1
var tijera = 2


function juego(jugador){
    let computadora = Math.floor(Math.random() * 3);

    // empate
    if(jugador == computadora){
        console.log(`El jugador empato`);
        // piedra
    }else if(jugador == piedra && computadora == papel){    
        console.log("El usuario eligio piedra y la computadora papel");
        console.log("La computadora gano 😒");
    }else if(jugador == piedra && computadora == tijera){    
        console.log("El usuario eligio piedra y la computadora Tijera");
        console.log("EL JUGADOR GANA!!!");
        // papel
    }else if(jugador == papel && computadora == piedra){    
        console.log("El usuario eligio papel y la computadora piedra");
        console.log("EL JUGADOR GANA!!!");
    }else if(jugador == papel && computadora == tijera){    
        console.log("El usuario eligio papel y la computadora piedra");
        console.log("La computadora gano 😒");
        // tijera
    }else if(jugador == tijera && computadora == piedra){    
        console.log("El usuario eligio tijera y la computadora papel");
        console.log("La computadora gano 😒");
    }else if(jugador == tijera && computadora == papel){    
        console.log("El usuario eligio tijera y la computadora papel");
        console.log("EL JUGADOR GANA!!!");
    }
    
}


juego(2)










// piedra < papel = papel
// piedra > tijera = piedra

// papel - piedra = papel
// papel - tijera = tijera

// tijera - piedra = piedra
// tijera - papel = tijera

